import { M as l, a as b, d as v } from "./types-YYypkfS4.js";
const k = 250;
class S {
  constructor(e) {
    this.host = e;
  }
  listeners = /* @__PURE__ */ new Set();
  interval = null;
  /** Null means "rebuild on next read". See snapshot(). */
  cachedSnapshot = null;
  phase = "idle";
  totalSeconds = 30 * 60;
  reminders = [];
  firedReminderKeys = /* @__PURE__ */ new Set();
  activeReminderId = null;
  inheritTheme = !1;
  /** Epoch millis at which the current run ends. Null unless running. */
  deadlineAt = null;
  /** Elapsed seconds banked before the current pause. */
  pausedElapsed = 0;
  // ---------------------------------------------------------------- lifecycle
  restore(e) {
    if (!e || e.version !== 1 && e.version !== 2) return;
    let s = !1;
    this.totalSeconds = e.totalSeconds, this.reminders = e.reminders ?? [], this.firedReminderKeys = new Set(e.firedReminderKeys ?? []), this.inheritTheme = e.inheritTheme ?? !1, e.phase === "running" && e.deadlineAt != null ? e.deadlineAt > Date.now() ? (this.deadlineAt = e.deadlineAt, this.phase = "running", this.startTicking()) : (this.phase = "finished", this.deadlineAt = null, s = !0) : e.phase === "paused" && e.pausedElapsedSeconds != null ? (this.pausedElapsed = e.pausedElapsedSeconds, this.phase = "paused") : e.version === 2 && e.phase === "reminding" && e.pausedElapsedSeconds != null && e.activeReminderId != null && this.reminders.some((i) => i.id === e.activeReminderId) ? (this.pausedElapsed = e.pausedElapsedSeconds, this.activeReminderId = e.activeReminderId, this.phase = "reminding") : e.phase === "finished" && (this.phase = "finished"), s ? (this.host.notify("Focus session complete"), this.commit()) : this.emit();
  }
  dispose() {
    this.stopTicking(), this.listeners.clear();
  }
  // ------------------------------------------------------------- subscription
  subscribe(e) {
    return this.listeners.add(e), () => {
      this.listeners.delete(e);
    };
  }
  /**
   * The current state, as a STABLE reference.
   *
   * WHY the cache is not an optimisation: `useSyncExternalStore` compares the
   * result of getSnapshot by identity on every render, and treats a new object
   * as "the store changed". An allocating snapshot therefore reports a change on
   * every render forever — React re-renders, calls getSnapshot, sees another new
   * object, and gives up with error #185. Returning the same object until
   * something actually changes is a CORRECTNESS requirement of the hook, not a
   * performance tweak.
   *
   * Every mutation path goes through emit(), which invalidates. If a new mutator
   * is added that does not, this cache silently goes stale and the UI freezes —
   * so invalidation lives in emit() alone rather than being sprinkled per setter.
   */
  snapshot() {
    return this.cachedSnapshot || (this.cachedSnapshot = {
      phase: this.phase,
      totalSeconds: this.totalSeconds,
      remainingSeconds: this.remainingSeconds(),
      reminders: this.reminders,
      activeReminderId: this.activeReminderId,
      firedReminderKeys: [...this.firedReminderKeys],
      inheritTheme: this.inheritTheme
    }), this.cachedSnapshot;
  }
  // ------------------------------------------------------------------ actions
  setDuration(e) {
    !Number.isFinite(e) || e <= 0 || (this.totalSeconds = Math.round(e * 60), (this.phase === "idle" || this.phase === "finished") && (this.phase = "idle", this.deadlineAt = null, this.pausedElapsed = 0), this.commit());
  }
  start() {
    this.firedReminderKeys.clear(), this.pausedElapsed = 0, this.deadlineAt = Date.now() + this.totalSeconds * 1e3, this.phase = "running", this.startTicking(), this.commit();
  }
  pause() {
    this.phase === "running" && (this.pausedElapsed = this.elapsedSeconds(), this.deadlineAt = null, this.phase = "paused", this.stopTicking(), this.commit());
  }
  resume() {
    if (this.phase !== "paused") return;
    const e = Math.max(0, this.totalSeconds - this.pausedElapsed);
    this.deadlineAt = Date.now() + e * 1e3, this.phase = "running", this.startTicking(), this.commit();
  }
  reset() {
    this.stopTicking(), this.phase = "idle", this.deadlineAt = null, this.pausedElapsed = 0, this.activeReminderId = null, this.firedReminderKeys.clear(), this.commit();
  }
  addReminder(e, s) {
    const i = e.trim();
    !i || !Number.isFinite(s) || s <= 0 || (this.reminders = [
      ...this.reminders,
      {
        // crypto.randomUUID is available in the renderer; no dependency needed.
        id: crypto.randomUUID(),
        label: i,
        intervalMinutes: Math.round(s)
      }
    ], this.commit());
  }
  removeReminder(e) {
    this.reminders = this.reminders.filter((s) => s.id !== e), this.commit();
  }
  dismissReminder() {
    if (this.phase !== "reminding") return;
    this.activeReminderId = null;
    const e = Math.max(0, this.totalSeconds - this.pausedElapsed);
    this.deadlineAt = Date.now() + e * 1e3, this.phase = "running", this.startTicking(), this.commit();
  }
  setInheritTheme(e) {
    this.inheritTheme = e, this.commit();
  }
  // ------------------------------------------------------------------ internals
  elapsedSeconds() {
    if (this.deadlineAt == null) return this.pausedElapsed;
    const e = Math.max(0, Math.ceil((this.deadlineAt - Date.now()) / 1e3));
    return this.totalSeconds - e;
  }
  remainingSeconds() {
    return this.phase === "idle" ? this.totalSeconds : this.deadlineAt == null ? Math.max(0, this.totalSeconds - this.pausedElapsed) : Math.max(0, Math.ceil((this.deadlineAt - Date.now()) / 1e3));
  }
  startTicking() {
    this.stopTicking(), this.interval = setInterval(() => this.tick(), k);
  }
  stopTicking() {
    this.interval != null && (clearInterval(this.interval), this.interval = null);
  }
  tick() {
    if (this.phase !== "running") return;
    const e = this.remainingSeconds();
    if (e <= 0) {
      this.stopTicking(), this.phase = "finished", this.deadlineAt = null, this.host.notify("Focus session complete"), this.commit();
      return;
    }
    const s = this.dueReminder();
    if (s) {
      this.pausedElapsed = this.elapsedSeconds(), this.deadlineAt = null, this.stopTicking(), this.activeReminderId = s.id, this.phase = "reminding", this.host.notify(`Reminder: ${s.label}`), this.commit();
      return;
    }
    this.cachedSnapshot?.remainingSeconds !== e && this.emit();
  }
  /**
   * WHY reminders are keyed by (id, interval-ordinal) rather than tested with
   * `elapsed % intervalSeconds === 0`: the modulo test only holds on the exact
   * second, and a throttled or delayed tick skips straight past it — the
   * original implementation could silently drop a reminder whenever the renderer
   * was backgrounded. Recording which ordinals have fired means a late tick
   * still fires the one it missed, exactly once.
   */
  dueReminder() {
    const e = this.elapsedSeconds();
    for (const s of this.reminders) {
      const i = s.intervalMinutes * 60;
      if (i <= 0) continue;
      const r = Math.floor(e / i);
      if (r < 1) continue;
      const a = `${s.id}:${r}`;
      if (!this.firedReminderKeys.has(a))
        return this.firedReminderKeys.add(a), s;
    }
    return null;
  }
  persisted() {
    return {
      version: 2,
      phase: this.phase,
      totalSeconds: this.totalSeconds,
      reminders: this.reminders,
      firedReminderKeys: [...this.firedReminderKeys],
      inheritTheme: this.inheritTheme,
      deadlineAt: this.deadlineAt,
      pausedElapsedSeconds: this.phase === "paused" || this.phase === "reminding" ? this.pausedElapsed : null,
      activeReminderId: this.activeReminderId
    };
  }
  /** Emit + persist. Used for transitions; plain ticks only emit, because
   *  writing to disk four times a second would be absurd and the deadline is
   *  already durable. */
  commit() {
    this.host.save(this.persisted()), this.emit();
  }
  emit() {
    this.cachedSnapshot = null;
    const e = this.snapshot();
    for (const s of this.listeners)
      try {
        s(e);
      } catch {
      }
  }
}
class T {
  constructor(e) {
    this.host = e;
  }
  listeners = /* @__PURE__ */ new Set();
  /** Null means "rebuild on next read". See snapshot(). */
  cachedSnapshot = null;
  tasks = [];
  // ---------------------------------------------------------------- lifecycle
  restore(e) {
    if (!e || !Array.isArray(e.tasks)) return;
    const s = [];
    for (const i of e.tasks) {
      if (i === null || typeof i != "object" || typeof i.id != "string" || i.id.length === 0 || typeof i.text != "string" || i.text.length === 0 || i.text.length > l || typeof i.done != "boolean") return;
      let r = null;
      if (e.version === 1)
        r = i.done ? Date.now() : null;
      else if (e.version === 2) {
        const a = i;
        if (a.done) {
          if (typeof a.doneAt != "number" || !Number.isFinite(a.doneAt)) return;
          r = a.doneAt;
        } else if (a.doneAt !== null)
          return;
      } else
        return;
      s.push({ id: i.id, text: i.text, done: i.done, doneAt: r });
    }
    this.tasks = s, this.emit();
  }
  dispose() {
    this.listeners.clear();
  }
  // ------------------------------------------------------------- subscription
  subscribe(e) {
    return this.listeners.add(e), () => {
      this.listeners.delete(e);
    };
  }
  /**
   * The current state, as a STABLE reference — a correctness requirement of
   * snapshot-diffing subscribers, not a performance tweak. Invalidation happens
   * only in emit(), which every mutation routes through.
   */
  snapshot() {
    return this.cachedSnapshot || (this.cachedSnapshot = { tasks: this.tasks }), this.cachedSnapshot;
  }
  // ------------------------------------------------------------------ actions
  add(e) {
    if (typeof e != "string") return;
    const s = e.trim();
    s.length === 0 || s.length > l || this.tasks.length >= b || (this.tasks = [...this.tasks, { id: crypto.randomUUID(), text: s, done: !1, doneAt: null }], this.commit());
  }
  toggle(e) {
    this.tasks.every((s) => s.id !== e) || (this.tasks = this.tasks.map((s) => s.id !== e ? s : s.done ? { ...s, done: !1, doneAt: null } : { ...s, done: !0, doneAt: Date.now() }), this.commit());
  }
  remove(e) {
    this.tasks.every((s) => s.id !== e) || (this.tasks = this.tasks.filter((s) => s.id !== e), this.commit());
  }
  // ---------------------------------------------------------------- internals
  persisted() {
    return { version: 2, tasks: this.tasks };
  }
  /** Emit + persist. The single mutation exit path. */
  commit() {
    this.host.save(this.persisted()), this.emit();
  }
  emit() {
    this.cachedSnapshot = null;
    const e = this.snapshot();
    for (const s of this.listeners)
      try {
        s(e);
      } catch {
      }
  }
}
const u = "session", m = "tasks", p = "activeTab", A = "julius-workspace-features.defaultMinutes", g = "julius-workspace-features.inheritTheme", w = "julius-workspace-features.main";
function R(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new Error("Timer actions must be JSON objects.");
  return t;
}
function E(t) {
  const e = R(t);
  switch (e.type) {
    case "setDuration":
      if (typeof e.minutes == "number" && Number.isFinite(e.minutes) && e.minutes >= 1 && e.minutes <= 480)
        return { type: e.type, minutes: e.minutes };
      break;
    case "addReminder":
      if (typeof e.label == "string" && e.label.trim().length > 0 && e.label.length <= 80 && typeof e.intervalMinutes == "number" && Number.isInteger(e.intervalMinutes) && e.intervalMinutes >= 1 && e.intervalMinutes <= 480)
        return {
          type: e.type,
          label: e.label,
          intervalMinutes: e.intervalMinutes
        };
      break;
    case "removeReminder":
      if (typeof e.id == "string" && e.id.length > 0)
        return { type: e.type, id: e.id };
      break;
    case "setInheritTheme":
      if (typeof e.value == "boolean") return { type: e.type, value: e.value };
      break;
    case "start":
    case "pause":
    case "resume":
    case "reset":
    case "dismissReminder":
    case "syncSettings":
      return { type: e.type };
  }
  throw new Error("Invalid timer action.");
}
function I(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw new Error("Tasks actions must be JSON objects.");
  const e = t;
  switch (e.type) {
    case "add":
      if (typeof e.text == "string" && e.text.trim().length > 0 && e.text.trim().length <= l)
        return { type: e.type, text: e.text };
      break;
    case "toggle":
    case "remove":
      if (typeof e.id == "string" && e.id.length > 0)
        return { type: e.type, id: e.id };
      break;
  }
  throw new Error("Invalid tasks action.");
}
function f(t) {
  if (t && typeof t == "object" && !Array.isArray(t)) {
    const e = t.tab;
    if (e === "timer" || e === "tasks") return e;
  }
  throw new Error("Invalid tab.");
}
async function c(t, e) {
  const [s, i] = await Promise.all([
    t.api.storage.get(A),
    t.api.storage.get(g)
  ]);
  e.snapshot().phase === "idle" && typeof s == "number" && Number.isFinite(s) && s >= 1 && s <= 480 && e.setDuration(s), typeof i == "boolean" && e.setInheritTheme(i);
}
async function M(t, e, s) {
  const i = E(s);
  switch (i.type) {
    case "setDuration":
      e.setDuration(i.minutes);
      break;
    case "start":
      e.start();
      break;
    case "pause":
      e.pause();
      break;
    case "resume":
      e.resume();
      break;
    case "reset":
      e.reset();
      break;
    case "addReminder":
      e.addReminder(i.label, i.intervalMinutes);
      break;
    case "removeReminder":
      e.removeReminder(i.id);
      break;
    case "dismissReminder":
      e.dismissReminder();
      break;
    case "syncSettings":
      await c(t, e);
      break;
    case "setInheritTheme":
      await t.api.storage.set(g, i.value), e.setInheritTheme(i.value);
      break;
  }
  return e.snapshot();
}
let o = null, d = null;
const D = v({
  async activate(t) {
    const e = new S({
      // Persistence and notification failures should not stop the clock that
      // produced them. Both services report independently through host status.
      save: (n) => {
        t.api.storage.set(u, n).catch(() => {
        });
      },
      notify: (n) => {
        t.api.notifications.show(n).catch(() => {
        });
      }
    }), s = new T({
      save: (n) => {
        t.api.storage.set(m, n).catch(() => {
        });
      }
    });
    let i = "timer";
    try {
      const n = await t.api.storage.get(u);
      e.restore(n);
    } catch {
    }
    try {
      const n = await t.api.storage.get(m);
      s.restore(n);
    } catch {
    }
    try {
      const n = await t.api.storage.get(p);
      i = n === void 0 ? "timer" : f({ tab: n });
    } catch {
      i = "timer";
    }
    await c(t, e).catch(() => {
    });
    const r = () => t.views.publish(w, {
      activeTab: i,
      timer: e.snapshot(),
      tasks: s.snapshot()
    });
    o = e, d = s;
    const a = e.subscribe(() => {
      r().catch(() => {
      });
    }), y = s.subscribe(() => {
      r().catch(() => {
      });
    });
    t.subscriptions.push(
      { dispose: a },
      { dispose: y },
      { dispose: () => e.dispose() },
      { dispose: () => s.dispose() }
    ), t.registerCommand("julius-workspace-features.timer.start", async () => {
      await c(t, e).catch(() => {
      }), e.start();
    }), t.registerCommand("julius-workspace-features.timer.pause", () => e.pause()), t.registerCommand("julius-workspace-features.timer.reset", () => e.reset()), t.registerRequest("timerAction", (n) => M(t, e, n)), t.registerRequest("tasksAction", async (n) => {
      const h = I(n);
      switch (h.type) {
        case "add":
          s.add(h.text);
          break;
        case "toggle":
          s.toggle(h.id);
          break;
        case "remove":
          s.remove(h.id);
          break;
      }
      return s.snapshot();
    }), t.registerRequest("selectTab", async (n) => (i = f(n), await t.api.storage.set(p, i), await r(), i)), await r();
  },
  deactivate() {
    o?.dispose(), o = null, d?.dispose(), d = null;
  }
});
export {
  D as default
};
