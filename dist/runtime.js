import { M as h, i as u, a as k, d as v } from "./types-B69RouoS.js";
const S = 250;
class A {
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
    let t = !1;
    this.totalSeconds = e.totalSeconds, this.reminders = e.reminders ?? [], this.firedReminderKeys = new Set(e.firedReminderKeys ?? []), this.inheritTheme = e.inheritTheme ?? !1, e.phase === "running" && e.deadlineAt != null ? e.deadlineAt > Date.now() ? (this.deadlineAt = e.deadlineAt, this.phase = "running", this.startTicking()) : (this.phase = "finished", this.deadlineAt = null, t = !0) : e.phase === "paused" && e.pausedElapsedSeconds != null ? (this.pausedElapsed = e.pausedElapsedSeconds, this.phase = "paused") : e.version === 2 && e.phase === "reminding" && e.pausedElapsedSeconds != null && e.activeReminderId != null && this.reminders.some((i) => i.id === e.activeReminderId) ? (this.pausedElapsed = e.pausedElapsedSeconds, this.activeReminderId = e.activeReminderId, this.phase = "reminding") : e.phase === "finished" && (this.phase = "finished"), t ? (this.host.notify("Focus session complete"), this.commit()) : this.emit();
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
  addReminder(e, t) {
    const i = e.trim();
    !i || !Number.isFinite(t) || t <= 0 || (this.reminders = [
      ...this.reminders,
      {
        // crypto.randomUUID is available in the renderer; no dependency needed.
        id: crypto.randomUUID(),
        label: i,
        intervalMinutes: Math.round(t)
      }
    ], this.commit());
  }
  removeReminder(e) {
    this.reminders = this.reminders.filter((t) => t.id !== e), this.commit();
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
    this.stopTicking(), this.interval = setInterval(() => this.tick(), S);
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
    const t = this.dueReminder();
    if (t) {
      this.pausedElapsed = this.elapsedSeconds(), this.deadlineAt = null, this.stopTicking(), this.activeReminderId = t.id, this.phase = "reminding", this.host.notify(`Reminder: ${t.label}`), this.commit();
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
    for (const t of this.reminders) {
      const i = t.intervalMinutes * 60;
      if (i <= 0) continue;
      const s = Math.floor(e / i);
      if (s < 1) continue;
      const d = `${t.id}:${s}`;
      if (!this.firedReminderKeys.has(d))
        return this.firedReminderKeys.add(d), t;
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
    for (const t of this.listeners)
      try {
        t(e);
      } catch {
      }
  }
}
class I {
  constructor(e) {
    this.host = e;
  }
  listeners = /* @__PURE__ */ new Set();
  /** Null means "rebuild on next read". See snapshot(). */
  cachedSnapshot = null;
  tasks = [];
  undoEntry = null;
  // ---------------------------------------------------------------- lifecycle
  restore(e) {
    if (!e || !Array.isArray(e.tasks)) return;
    const t = [];
    let i = null;
    for (const s of e.tasks) {
      if (s === null || typeof s != "object" || typeof s.id != "string" || s.id.length === 0 || typeof s.text != "string" || s.text.length === 0 || s.text.length > h || typeof s.done != "boolean") return;
      let d = null;
      if (e.version === 3) {
        const o = s;
        if (o.parentId !== null && o.parentId !== void 0) {
          if (typeof o.parentId != "string" || o.parentId !== i) return;
          d = o.parentId;
        }
        if (o.dueAt !== null && o.dueAt !== void 0 && !u(o.dueAt)) return;
      }
      const a = s.doneAt;
      let r = null;
      if (e.version === 1)
        r = s.done ? Date.now() : null;
      else if (s.done) {
        if (typeof a != "number" || !Number.isFinite(a)) return;
        r = a;
      }
      t.push({
        id: s.id,
        text: s.text,
        done: s.done,
        doneAt: r,
        parentId: d,
        // v3's dueAt was validated in the version branch above (row); every
        // earlier version predates the field and migrates as null.
        dueAt: e.version === 3 ? s.dueAt ?? null : null
      }), d === null && (i = s.id);
    }
    this.tasks = t, this.undoEntry = null, this.emit();
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
    return this.cachedSnapshot || (this.cachedSnapshot = { tasks: this.tasks, canUndo: this.undoEntry != null }), this.cachedSnapshot;
  }
  // ------------------------------------------------------------------ actions
  add(e, t) {
    if (typeof e != "string") return;
    const i = e.trim();
    if (i.length === 0 || i.length > h || this.tasks.length >= k) return;
    const s = {
      id: crypto.randomUUID(),
      text: i,
      done: !1,
      doneAt: null,
      parentId: null,
      dueAt: null
    };
    if (t != null) {
      const d = this.tasks.findIndex((r) => r.id === t && r.parentId === null);
      if (d < 0) return;
      let a = d + 1;
      for (; a < this.tasks.length && this.tasks[a].parentId === t; )
        a += 1;
      s.parentId = t, this.tasks = [...this.tasks.slice(0, a), s, ...this.tasks.slice(a)];
    } else
      this.tasks = [...this.tasks, s];
    this.commit();
  }
  /** Completing a task with open subtasks cascades to them (each stamped);
   *  reopening reopens exactly the clicked task. */
  toggle(e) {
    const t = this.tasks.find((a) => a.id === e);
    if (!t) return;
    const i = !t.done, s = Date.now();
    let d = !1;
    this.tasks = this.tasks.map((a) => a.id === e ? (d = !0, a.done ? { ...a, done: !1, doneAt: null } : { ...a, done: !0, doneAt: s }) : i && a.parentId === e && !a.done ? (d = !0, { ...a, done: !0, doneAt: s }) : a), d && this.commit();
  }
  edit(e, t) {
    const i = t.trim();
    i.length === 0 || i.length > h || this.tasks.every((s) => s.id !== e) || (this.tasks = this.tasks.map(
      (s) => s.id === e ? { ...s, text: i } : s
    ), this.commit());
  }
  setDue(e, t) {
    t !== null && !u(t) || this.tasks.every((i) => i.id !== e) || (this.tasks = this.tasks.map(
      (i) => i.id === e ? { ...i, dueAt: t } : i
    ), this.commit());
  }
  /** Removes a task and its whole sub-block, recording a single undo entry. */
  remove(e) {
    const t = this.tasks.findIndex((d) => d.id === e);
    if (t < 0) return;
    const i = [this.tasks[t]];
    let s = t + 1;
    for (; s < this.tasks.length && this.tasks[s].parentId === e; )
      i.push(this.tasks[s]), s += 1;
    this.recordUndo(i, i.map((d, a) => t + a)), this.tasks = [...this.tasks.slice(0, t), ...this.tasks.slice(s)], this.commit();
  }
  /** Removes every done task plus any subtasks under them, as one undo entry. */
  clearCompleted() {
    const e = [], t = [];
    for (let s = 0; s < this.tasks.length; s += 1) {
      const d = this.tasks[s], a = d.parentId == null ? null : this.tasks.find((r) => r.id === d.parentId);
      (d.done || a && e.some((r) => r.id === a.id)) && (e.push(d), t.push(s));
    }
    if (e.length === 0) return;
    this.recordUndo(e, t);
    const i = new Set(e.map((s) => s.id));
    this.tasks = this.tasks.filter((s) => !i.has(s.id)), this.commit();
  }
  /** Restores the last destructive action's tasks at their former indices. */
  undo() {
    const e = this.undoEntry;
    if (!e) return;
    this.undoEntry = null;
    const t = [...e.tasks.keys()].sort((s, d) => e.indices[s] - e.indices[d]);
    let i = [...this.tasks];
    for (const s of t) {
      const d = Math.min(e.indices[s], i.length);
      i = [...i.slice(0, d), e.tasks[s], ...i.slice(d)];
    }
    this.tasks = i, this.commit();
  }
  reorder(e) {
    if (e.length !== this.tasks.length) return;
    const t = new Map(this.tasks.map((a) => [a.id, a])), i = [], s = /* @__PURE__ */ new Set();
    let d = null;
    for (const a of e) {
      if (s.has(a) || !t.has(a)) return;
      const r = t.get(a);
      if (r.parentId !== null && r.parentId !== d) return;
      s.add(a), i.push(r), r.parentId === null && (d = r.id);
    }
    this.tasks = i, this.commit();
  }
  // ---------------------------------------------------------------- internals
  recordUndo(e, t) {
    this.undoEntry = { tasks: [...e], indices: [...t] };
  }
  persisted() {
    return { version: 3, tasks: this.tasks };
  }
  /** Emit + persist. The single mutation exit path. */
  commit() {
    this.host.save(this.persisted()), this.emit();
  }
  emit() {
    this.cachedSnapshot = null;
    const e = this.snapshot();
    for (const t of this.listeners)
      try {
        t(e);
      } catch {
      }
  }
}
const m = "session", f = "tasks", g = "activeTab", w = "julius-workspace-features.defaultMinutes", b = "julius-workspace-features.inheritTheme", T = ["julius-workspace-features.main", "julius-workspace-features.modal"];
function E(n) {
  if (!n || typeof n != "object" || Array.isArray(n))
    throw new Error("Timer actions must be JSON objects.");
  return n;
}
function R(n) {
  const e = E(n);
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
function M(n) {
  if (!n || typeof n != "object" || Array.isArray(n))
    throw new Error("Tasks actions must be JSON objects.");
  const e = n;
  switch (e.type) {
    case "add":
      if (typeof e.text == "string" && e.text.trim().length > 0 && e.text.trim().length <= h) {
        if (e.parentId === void 0) return { type: e.type, text: e.text };
        if (typeof e.parentId == "string" && e.parentId.length > 0)
          return { type: e.type, text: e.text, parentId: e.parentId };
      }
      break;
    case "edit":
      if (typeof e.id == "string" && e.id.length > 0 && typeof e.text == "string" && e.text.trim().length > 0 && e.text.trim().length <= h)
        return { type: e.type, id: e.id, text: e.text };
      break;
    case "setDue":
      if (typeof e.id == "string" && e.id.length > 0 && (e.dueAt === null || u(e.dueAt)))
        return { type: e.type, id: e.id, dueAt: e.dueAt };
      break;
    case "toggle":
    case "remove":
      if (typeof e.id == "string" && e.id.length > 0)
        return { type: e.type, id: e.id };
      break;
    case "reorder":
      if (Array.isArray(e.ids) && e.ids.length <= k && e.ids.every((t) => typeof t == "string" && t.length > 0))
        return { type: e.type, ids: e.ids };
      break;
    case "clearCompleted":
    case "undo":
      return { type: e.type };
  }
  throw new Error("Invalid tasks action.");
}
function y(n) {
  if (n && typeof n == "object" && !Array.isArray(n)) {
    const e = n.tab;
    if (e === "timer" || e === "tasks") return e;
  }
  throw new Error("Invalid tab.");
}
async function p(n, e) {
  const [t, i] = await Promise.all([
    n.api.storage.get(w),
    n.api.storage.get(b)
  ]);
  e.snapshot().phase === "idle" && typeof t == "number" && Number.isFinite(t) && t >= 1 && t <= 480 && e.setDuration(t), typeof i == "boolean" && e.setInheritTheme(i);
}
async function D(n, e, t) {
  const i = R(t);
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
      await p(n, e);
      break;
    case "setInheritTheme":
      await n.api.storage.set(b, i.value), e.setInheritTheme(i.value);
      break;
  }
  return e.snapshot();
}
let l = null, c = null;
const _ = v({
  async activate(n) {
    const e = new A({
      // Persistence and notification failures should not stop the clock that
      // produced them. Both services report independently through host status.
      save: (r) => {
        n.api.storage.set(m, r).catch(() => {
        });
      },
      notify: (r) => {
        n.api.notifications.show(r).catch(() => {
        });
      }
    }), t = new I({
      save: (r) => {
        n.api.storage.set(f, r).catch(() => {
        });
      }
    });
    let i = "timer";
    try {
      const r = await n.api.storage.get(m);
      e.restore(r);
    } catch {
    }
    try {
      const r = await n.api.storage.get(f);
      t.restore(r);
    } catch {
    }
    try {
      const r = await n.api.storage.get(g);
      i = r === void 0 ? "timer" : y({ tab: r });
    } catch {
      i = "timer";
    }
    await p(n, e).catch(() => {
    });
    const s = () => Promise.all(
      T.map((r) => n.views.publish(r, {
        activeTab: i,
        timer: e.snapshot(),
        tasks: t.snapshot()
      }))
    );
    l = e, c = t;
    const d = e.subscribe(() => {
      s().catch(() => {
      });
    }), a = t.subscribe(() => {
      s().catch(() => {
      });
    });
    n.subscriptions.push(
      { dispose: d },
      { dispose: a },
      { dispose: () => e.dispose() },
      { dispose: () => t.dispose() }
    ), n.registerCommand("julius-workspace-features.timer.start", async () => {
      await p(n, e).catch(() => {
      }), e.start();
    }), n.registerCommand("julius-workspace-features.timer.pause", () => e.pause()), n.registerCommand("julius-workspace-features.timer.reset", () => e.reset()), n.registerRequest("timerAction", (r) => D(n, e, r)), n.registerRequest("tasksAction", async (r) => {
      const o = M(r);
      switch (o.type) {
        case "add":
          t.add(o.text, o.parentId);
          break;
        case "toggle":
          t.toggle(o.id);
          break;
        case "edit":
          t.edit(o.id, o.text);
          break;
        case "setDue":
          t.setDue(o.id, o.dueAt);
          break;
        case "remove":
          t.remove(o.id);
          break;
        case "reorder":
          t.reorder(o.ids);
          break;
        case "clearCompleted":
          t.clearCompleted();
          break;
        case "undo":
          t.undo();
          break;
      }
      return t.snapshot();
    }), n.registerRequest("selectTab", async (r) => (i = y(r), await n.api.storage.set(g, i), await s(), i)), await s();
  },
  deactivate() {
    l?.dispose(), l = null, c?.dispose(), c = null;
  }
});
export {
  _ as default
};
