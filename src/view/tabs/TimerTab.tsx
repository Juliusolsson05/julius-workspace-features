import type { JsonValue } from 'agent-code-extension-api'
import type { AgentCodeApiV1 } from 'agent-code-extension-api'
import { AnimatePresence, motion } from 'framer-motion'
import { Pause, Play, RotateCcw } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Chime } from '../../engines/timer/alert'
import type { TimerState } from '../../engines/timer/types'
import { Sfx } from '../sounds'
import { CurrentTime } from '../components/CurrentTime'
import { DurationPicker } from '../components/DurationPicker'
import { ReminderAlert } from '../components/ReminderAlert'
import { ReminderManager } from '../components/ReminderManager'
import { TimerDisplay } from '../components/TimerDisplay'

/**
 * The Timer lane — ported 1:1 from agent-code-timer's TimerView.
 *
 * Owns no timer state: it is a window onto the managed runtime, receiving the
 * engine's published slice and a `send` that posts actions back as named
 * requests. The only deltas from the port are the props-based wiring (the
 * published state is now the combined workspace state, sliced by the shell),
 * the request name ('timerAction'), and the theme-inheritance effect moving up
 * to the shell root so the tab bar inherits too.
 */
export function TimerTab({
  api,
  state,
  send,
}: {
  /** Structural subset: the v2 view api is a superset, and this tab touches
   *  nothing but the session observer. */
  api: Pick<AgentCodeApiV1, 'sessions'>
  state: TimerState
  send: (action: JsonValue) => void
}) {
  useEffect(() => {
    // Settings can change while the runtime is already alive. There is no
    // storage-change event yet, so opening a view is the reconciliation point.
    send({ type: 'syncSettings' })
  }, [send])

  const chime = useRef<Chime | null>(null)
  // Short transition voices (start lift, completion arpeggio). The REMINDER
  // keeps the repeating Chime below — a reminder must keep demanding
  // attention, a completed session needs to be heard once, warmly.
  const sfx = useRef<Sfx | null>(null)
  const previousPhase = useRef<TimerState['phase'] | null>(null)
  useEffect(() => {
    chime.current ??= new Chime()
    sfx.current ??= new Sfx()
    const enteredReminder = state.phase === 'reminding'
      && previousPhase.current !== 'reminding'
    const finishedWhileOpen = state.phase === 'finished'
      && previousPhase.current != null
      && previousPhase.current !== 'finished'
    if (enteredReminder) chime.current.play()
    else if (finishedWhileOpen) sfx.current.timerComplete()
    if (state.phase !== 'reminding') chime.current.stop()
    previousPhase.current = state.phase
  }, [state.phase])
  useEffect(() => () => chime.current?.stop(), [])

  // Live count of agent sessions open in Agent Code, via the Tier-1 sessions.observe
  // capability (granted at install through the manifest's permissions). observe() is
  // a snapshot; subscribe() re-reads on any workspace change. If the capability is
  // not granted, or the host is older than this API, observe() rejects and the
  // indicator simply stays hidden — a focus timer must degrade, never break.
  const [agentCount, setAgentCount] = useState<number | null>(null)
  useEffect(() => {
    let alive = true
    const read = () => {
      void api.sessions
        .observe()
        .then(sessions => {
          if (!alive) return
          setAgentCount(
            sessions.filter(s => s.kind && s.kind !== 'terminal' && s.kind !== 'extension-view')
              .length,
          )
        })
        .catch(() => {
          /* not granted / older host — leave the indicator hidden */
        })
    }
    read()
    const unsubscribe = api.sessions.subscribe(read)
    return () => {
      alive = false
      unsubscribe()
    }
  }, [api])

  const activeReminder =
    state.activeReminderId != null
      ? (state.reminders.find(reminder => reminder.id === state.activeReminderId) ?? null)
      : null

  const setup = state.phase === 'idle'

  return (
    <div className="tm-tab">
      <CurrentTime />

      {agentCount !== null ? (
        <div
          style={{ marginTop: -16, fontSize: 11, letterSpacing: '0.03em', opacity: 0.55 }}
          title="Agent sessions open in Agent Code — live via the sessions.observe capability"
        >
          {agentCount} {agentCount === 1 ? 'agent' : 'agents'} active
        </div>
      ) : null}

      <TimerDisplay remainingSeconds={state.remainingSeconds} phase={state.phase} />

      <AnimatePresence mode="wait">
        {setup ? (
          <motion.div
            key="setup"
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, width: '100%' }}
          >
            <DurationPicker
              totalSeconds={state.totalSeconds}
              onSelect={minutes => send({ type: 'setDuration', minutes })}
              onStart={() => {
                // Immediate audible confirmation on the click itself — the
                // engine round-trip is not the feedback channel.
                sfx.current?.timerStart()
                send({ type: 'start' })
              }}
            />
            <ReminderManager
              reminders={state.reminders}
              onAdd={(label, intervalMinutes) => send({
                type: 'addReminder', label, intervalMinutes,
              })}
              onRemove={id => send({ type: 'removeReminder', id })}
            />
          </motion.div>
        ) : (
          <motion.div
            key="running"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
          >
            <div className="tm-row">
              {state.phase === 'running' ? (
                <button
                  type="button"
                  className="tm-circle"
                  onClick={() => send({ type: 'pause' })}
                  title="Pause"
                >
                  <Pause size={17} />
                </button>
              ) : null}
              {state.phase === 'paused' ? (
                <button
                  type="button"
                  className="tm-circle"
                  onClick={() => send({ type: 'resume' })}
                  title="Resume"
                >
                  <Play size={17} style={{ marginLeft: 2 }} />
                </button>
              ) : null}
              <button type="button" className="tm-circle" onClick={() => send({ type: 'reset' })} title="Reset">
                <RotateCcw size={17} />
              </button>
            </div>

            {state.phase === 'finished' ? (
              <motion.span
                className="tm-reminder-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Session complete
              </motion.span>
            ) : null}

            {state.reminders.length > 0 && state.phase !== 'finished' ? (
              <div className="tm-presets" style={{ marginTop: 2 }}>
                {state.reminders.map(reminder => (
                  <span key={reminder.id} className="tm-chip">
                    {reminder.label} · {reminder.intervalMinutes}m
                  </span>
                ))}
              </div>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="tm-footer">
        <button
          type="button"
          className="tm-toggle"
          data-on={state.inheritTheme}
          onClick={() => send({ type: 'setInheritTheme', value: !state.inheritTheme })}
          title={
            state.inheritTheme
              ? 'Using Agent Code theme — click for black & white'
              : 'Using black & white — click to inherit Agent Code theme'
          }
        >
          <span className="tm-toggle-dot" />
          {state.inheritTheme ? 'Inheriting theme' : 'Black & white'}
        </button>
      </div>

      <AnimatePresence>
        {activeReminder ? (
          <ReminderAlert reminder={activeReminder} onDismiss={() => send({ type: 'dismissReminder' })} />
        ) : null}
      </AnimatePresence>
    </div>
  )
}
