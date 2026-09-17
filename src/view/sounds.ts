// UI feedback sounds — small, warm, synthesized, view-owned.
//
// WHY synthesized oscillators instead of audio files: the extension ships a
// committed bundle the installer fetches as a source tarball; base64 audio
// would bloat dist/ and decode cost, while ~40 lines of WebAudio produce
// better-tailored voices than any reasonably-sized sample set. Every sound
// here is an oscillator stack the ear reads as "physical": a sine fundamental
// plus a quiet octave partial, a ~5ms attack ramp (a hard-started oscillator
// clicks), and an exponential decay to silence.
//
// WHY one shared lazily-created AudioContext with resume() per play — the
// opposite of Chime's per-play create/close: Chime is a rare, long alarm
// where holding audio hardware awake for hours is the cost that matters.
// These voices fire in bursts (several task edits in a row), so churning a
// context per click is the wrong trade. resume() on every play is what the
// autoplay policy needs anyway: plays are click-driven, and a context
// created inside a gesture starts running.
//
// Failure contract: if audio cannot initialize (no device, policy, context
// limit) every method becomes a silent no-op — sound is feedback, never a
// dependency, exactly like Chime.

type Voice = {
  /** Frequency of the fundamental in Hz. */
  frequency: number
  /** Seconds after the previous voice starts (0 = with the previous). */
  delay: number
  /** Peak gain — kept low; these sit beside focus work, not over music. */
  gain: number
  /** Seconds from peak to inaudible. */
  decay: number
  /** Optional quieter octave partial for warmth. */
  shimmer?: boolean
}

function voice(frequency: number, delay: number, gain: number, decay: number, shimmer = true): Voice {
  return { frequency, delay, gain, decay, shimmer }
}

export class Sfx {
  private context: AudioContext | null = null
  private broken = false

  private acquire(): AudioContext | null {
    if (this.broken) return null
    if (this.context) {
      // A context created in an earlier gesture can still be suspended by the
      // browser after idle; resuming per play is cheap and always correct.
      void this.context.resume().catch(() => {})
      return this.context
    }
    try {
      this.context = new AudioContext()
      return this.context
    } catch {
      this.broken = true
      return null
    }
  }

  /** The one primitive every voice reduces to. */
  private play(voices: readonly Voice[]): void {
    const ctx = this.acquire()
    if (!ctx) return
    try {
      const start = ctx.currentTime
      for (const note of voices) {
        const at = start + note.delay
        // Fundamental.
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.type = 'sine'
        osc.frequency.value = note.frequency
        // 5ms linear ramp in, exponential ramp out: attack prevents the
        // start-click, exponential decay is how real resonances die.
        gain.gain.setValueAtTime(0.0001, at)
        gain.gain.linearRampToValueAtTime(note.gain, at + 0.005)
        gain.gain.exponentialRampToValueAtTime(0.0001, at + note.decay)
        osc.start(at)
        osc.stop(at + note.decay + 0.02)

        if (note.shimmer) {
          const shimmerOsc = ctx.createOscillator()
          const shimmerGain = ctx.createGain()
          shimmerOsc.connect(shimmerGain)
          shimmerGain.connect(ctx.destination)
          shimmerOsc.type = 'sine'
          shimmerOsc.frequency.value = note.frequency * 2
          shimmerGain.gain.setValueAtTime(0.0001, at)
          shimmerGain.gain.linearRampToValueAtTime(note.gain * 0.25, at + 0.005)
          shimmerGain.gain.exponentialRampToValueAtTime(0.0001, at + note.decay * 0.7)
          shimmerOsc.start(at)
          shimmerOsc.stop(at + note.decay + 0.02)
        }
      }
    } catch {
      // Scheduling onto a closed/context-limit device mid-loop: degrade
      // silently like construction failures.
    }
  }

  /** Task completed: the signature sound — an ascending dink-donk. */
  taskComplete(): void {
    this.play([voice(659.25, 0, 0.14, 0.18), voice(880, 0.085, 0.12, 0.22)])
  }

  /** Task added: one soft low blip — present, not celebratory. */
  taskAdd(): void {
    this.play([voice(440, 0, 0.09, 0.12)])
  }

  /** Task deleted: a muted descending pair — resolution, not punishment. */
  taskDelete(): void {
    this.play([voice(440, 0, 0.1, 0.13), voice(329.63, 0.07, 0.09, 0.16)])
  }

  /** Task reopened: a gentle single between the add and complete voices. */
  taskReopen(): void {
    this.play([voice(587.33, 0, 0.1, 0.15)])
  }

  /** Focus session started: a two-note lift, slightly longer decay. */
  timerStart(): void {
    this.play([voice(523.25, 0, 0.12, 0.2), voice(783.99, 0.09, 0.1, 0.28)])
  }

  /** Focus session complete: a quiet major arpeggio — earned, warm, brief. */
  timerComplete(): void {
    this.play([
      voice(523.25, 0, 0.13, 0.35),
      voice(659.25, 0.09, 0.11, 0.38),
      voice(783.99, 0.18, 0.1, 0.5),
    ])
  }
}
