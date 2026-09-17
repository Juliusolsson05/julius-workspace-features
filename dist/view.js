import { M as Om, b as zm } from "./types-YYypkfS4.js";
var Kf = { exports: {} }, Cs = {}, Gf = { exports: {} }, _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr = Symbol.for("react.element"), Bm = Symbol.for("react.portal"), Um = Symbol.for("react.fragment"), $m = Symbol.for("react.strict_mode"), Wm = Symbol.for("react.profiler"), Hm = Symbol.for("react.provider"), Km = Symbol.for("react.context"), Gm = Symbol.for("react.forward_ref"), bm = Symbol.for("react.suspense"), Qm = Symbol.for("react.memo"), Xm = Symbol.for("react.lazy"), gu = Symbol.iterator;
function Ym(e) {
  return e === null || typeof e != "object" ? null : (e = gu && e[gu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var bf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Qf = Object.assign, Xf = {};
function bn(e, t, n) {
  this.props = e, this.context = t, this.refs = Xf, this.updater = n || bf;
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
bn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yf() {
}
Yf.prototype = bn.prototype;
function $l(e, t, n) {
  this.props = e, this.context = t, this.refs = Xf, this.updater = n || bf;
}
var Wl = $l.prototype = new Yf();
Wl.constructor = $l;
Qf(Wl, bn.prototype);
Wl.isPureReactComponent = !0;
var yu = Array.isArray, Zf = Object.prototype.hasOwnProperty, Hl = { current: null }, qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jf(e, t, n) {
  var r, i = {}, s = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Zf.call(t, r) && !qf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Jr, type: e, key: s, ref: o, props: i, _owner: Hl.current };
}
function Zm(e, t) {
  return { $$typeof: Jr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Kl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jr;
}
function qm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var vu = /\/+/g;
function Qs(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? qm("" + e.key) : t.toString(36);
}
function Vi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (s) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Jr:
        case Bm:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Qs(o, 0) : r, yu(i) ? (n = "", e != null && (n = e.replace(vu, "$&/") + "/"), Vi(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Kl(i) && (i = Zm(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(vu, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", yu(e)) for (var l = 0; l < e.length; l++) {
    s = e[l];
    var a = r + Qs(s, l);
    o += Vi(s, t, n, a, i);
  }
  else if (a = Ym(e), typeof a == "function") for (e = a.call(e), l = 0; !(s = e.next()).done; ) s = s.value, a = r + Qs(s, l++), o += Vi(s, t, n, a, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function fi(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Vi(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function Jm(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ve = { current: null }, Li = { transition: null }, eg = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: Li, ReactCurrentOwner: Hl };
function ed() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = { map: fi, forEach: function(e, t, n) {
  fi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Kl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
_.Component = bn;
_.Fragment = Um;
_.Profiler = Wm;
_.PureComponent = $l;
_.StrictMode = $m;
_.Suspense = bm;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg;
_.act = ed;
_.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Qf({}, e.props), i = e.key, s = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = Hl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Zf.call(t, a) && !qf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Jr, type: e.type, key: i, ref: s, props: r, _owner: o };
};
_.createContext = function(e) {
  return e = { $$typeof: Km, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Hm, _context: e }, e.Consumer = e;
};
_.createElement = Jf;
_.createFactory = function(e) {
  var t = Jf.bind(null, e);
  return t.type = e, t;
};
_.createRef = function() {
  return { current: null };
};
_.forwardRef = function(e) {
  return { $$typeof: Gm, render: e };
};
_.isValidElement = Kl;
_.lazy = function(e) {
  return { $$typeof: Xm, _payload: { _status: -1, _result: e }, _init: Jm };
};
_.memo = function(e, t) {
  return { $$typeof: Qm, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function(e) {
  var t = Li.transition;
  Li.transition = {};
  try {
    e();
  } finally {
    Li.transition = t;
  }
};
_.unstable_act = ed;
_.useCallback = function(e, t) {
  return ve.current.useCallback(e, t);
};
_.useContext = function(e) {
  return ve.current.useContext(e);
};
_.useDebugValue = function() {
};
_.useDeferredValue = function(e) {
  return ve.current.useDeferredValue(e);
};
_.useEffect = function(e, t) {
  return ve.current.useEffect(e, t);
};
_.useId = function() {
  return ve.current.useId();
};
_.useImperativeHandle = function(e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
_.useInsertionEffect = function(e, t) {
  return ve.current.useInsertionEffect(e, t);
};
_.useLayoutEffect = function(e, t) {
  return ve.current.useLayoutEffect(e, t);
};
_.useMemo = function(e, t) {
  return ve.current.useMemo(e, t);
};
_.useReducer = function(e, t, n) {
  return ve.current.useReducer(e, t, n);
};
_.useRef = function(e) {
  return ve.current.useRef(e);
};
_.useState = function(e) {
  return ve.current.useState(e);
};
_.useSyncExternalStore = function(e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
_.useTransition = function() {
  return ve.current.useTransition();
};
_.version = "18.3.1";
Gf.exports = _;
var k = Gf.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tg = k, ng = Symbol.for("react.element"), rg = Symbol.for("react.fragment"), ig = Object.prototype.hasOwnProperty, sg = tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, og = { key: !0, ref: !0, __self: !0, __source: !0 };
function td(e, t, n) {
  var r, i = {}, s = null, o = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) ig.call(t, r) && !og.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: ng, type: e, key: s, ref: o, props: i, _owner: sg.current };
}
Cs.Fragment = rg;
Cs.jsx = td;
Cs.jsxs = td;
Kf.exports = Cs;
var S = Kf.exports, nd = { exports: {} }, Ve = {}, rd = { exports: {} }, id = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(D, V) {
    var L = D.length;
    D.push(V);
    e: for (; 0 < L; ) {
      var X = L - 1 >>> 1, re = D[X];
      if (0 < i(re, V)) D[X] = V, D[L] = re, L = X;
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var V = D[0], L = D.pop();
    if (L !== V) {
      D[0] = L;
      e: for (var X = 0, re = D.length, ui = re >>> 1; X < ui; ) {
        var $t = 2 * (X + 1) - 1, bs = D[$t], Wt = $t + 1, ci = D[Wt];
        if (0 > i(bs, L)) Wt < re && 0 > i(ci, bs) ? (D[X] = ci, D[Wt] = L, X = Wt) : (D[X] = bs, D[$t] = L, X = $t);
        else if (Wt < re && 0 > i(ci, L)) D[X] = ci, D[Wt] = L, X = Wt;
        else break e;
      }
    }
    return V;
  }
  function i(D, V) {
    var L = D.sortIndex - V.sortIndex;
    return L !== 0 ? L : D.id - V.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var o = Date, l = o.now();
    e.unstable_now = function() {
      return o.now() - l;
    };
  }
  var a = [], u = [], c = 1, f = null, d = 3, g = !1, y = !1, v = !1, T = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(D) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= D) r(u), V.sortIndex = V.expirationTime, t(a, V);
      else break;
      V = n(u);
    }
  }
  function x(D) {
    if (v = !1, h(D), !y) if (n(a) !== null) y = !0, ai(w);
    else {
      var V = n(u);
      V !== null && J(x, V.startTime - D);
    }
  }
  function w(D, V) {
    y = !1, v && (v = !1, m(C), C = -1), g = !0;
    var L = d;
    try {
      for (h(V), f = n(a); f !== null && (!(f.expirationTime > V) || D && !ne()); ) {
        var X = f.callback;
        if (typeof X == "function") {
          f.callback = null, d = f.priorityLevel;
          var re = X(f.expirationTime <= V);
          V = e.unstable_now(), typeof re == "function" ? f.callback = re : f === n(a) && r(a), h(V);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ui = !0;
      else {
        var $t = n(u);
        $t !== null && J(x, $t.startTime - V), ui = !1;
      }
      return ui;
    } finally {
      f = null, d = L, g = !1;
    }
  }
  var E = !1, A = null, C = -1, N = 5, j = -1;
  function ne() {
    return !(e.unstable_now() - j < N);
  }
  function yt() {
    if (A !== null) {
      var D = e.unstable_now();
      j = D;
      var V = !0;
      try {
        V = A(!0, D);
      } finally {
        V ? Ut() : (E = !1, A = null);
      }
    } else E = !1;
  }
  var Ut;
  if (typeof p == "function") Ut = function() {
    p(yt);
  };
  else if (typeof MessageChannel < "u") {
    var Jn = new MessageChannel(), mu = Jn.port2;
    Jn.port1.onmessage = yt, Ut = function() {
      mu.postMessage(null);
    };
  } else Ut = function() {
    T(yt, 0);
  };
  function ai(D) {
    A = D, E || (E = !0, Ut());
  }
  function J(D, V) {
    C = T(function() {
      D(e.unstable_now());
    }, V);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    y || g || (y = !0, ai(w));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(D) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var V = 3;
        break;
      default:
        V = d;
    }
    var L = d;
    d = V;
    try {
      return D();
    } finally {
      d = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, V) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var L = d;
    d = D;
    try {
      return V();
    } finally {
      d = L;
    }
  }, e.unstable_scheduleCallback = function(D, V, L) {
    var X = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? X + L : X) : L = X, D) {
      case 1:
        var re = -1;
        break;
      case 2:
        re = 250;
        break;
      case 5:
        re = 1073741823;
        break;
      case 4:
        re = 1e4;
        break;
      default:
        re = 5e3;
    }
    return re = L + re, D = { id: c++, callback: V, priorityLevel: D, startTime: L, expirationTime: re, sortIndex: -1 }, L > X ? (D.sortIndex = L, t(u, D), n(a) === null && D === n(u) && (v ? (m(C), C = -1) : v = !0, J(x, L - X))) : (D.sortIndex = re, t(a, D), y || g || (y = !0, ai(w))), D;
  }, e.unstable_shouldYield = ne, e.unstable_wrapCallback = function(D) {
    var V = d;
    return function() {
      var L = d;
      d = V;
      try {
        return D.apply(this, arguments);
      } finally {
        d = L;
      }
    };
  };
})(id);
rd.exports = id;
var lg = rd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ag = k, Me = lg;
function P(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var sd = /* @__PURE__ */ new Set(), jr = {};
function an(e, t) {
  Fn(e, t), Fn(e + "Capture", t);
}
function Fn(e, t) {
  for (jr[e] = t, e = 0; e < t.length; e++) sd.add(t[e]);
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), No = Object.prototype.hasOwnProperty, ug = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xu = {}, wu = {};
function cg(e) {
  return No.call(wu, e) ? !0 : No.call(xu, e) ? !1 : ug.test(e) ? wu[e] = !0 : (xu[e] = !0, !1);
}
function fg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function dg(e, t, n, r) {
  if (t === null || typeof t > "u" || fg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function xe(e, t, n, r, i, s, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o;
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ce[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ce[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ce[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ce[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ce[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ce[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ce[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ce[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ce[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gl = /[\-:]([a-z])/g;
function bl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Gl,
    bl
  );
  ce[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Gl, bl);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Gl, bl);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ql(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (dg(t, n, i, r) && (n = null), r || i === null ? cg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, di = Symbol.for("react.element"), pn = Symbol.for("react.portal"), hn = Symbol.for("react.fragment"), Xl = Symbol.for("react.strict_mode"), _o = Symbol.for("react.profiler"), od = Symbol.for("react.provider"), ld = Symbol.for("react.context"), Yl = Symbol.for("react.forward_ref"), Fo = Symbol.for("react.suspense"), Io = Symbol.for("react.suspense_list"), Zl = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), ad = Symbol.for("react.offscreen"), Su = Symbol.iterator;
function er(e) {
  return e === null || typeof e != "object" ? null : (e = Su && e[Su] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Xs;
function cr(e) {
  if (Xs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Xs = t && t[1] || "";
  }
  return `
` + Xs + e;
}
var Ys = !1;
function Zs(e, t) {
  if (!e || Ys) return "";
  Ys = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; ) l--;
      for (; 1 <= o && 0 <= l; o--, l--) if (i[o] !== s[l]) {
        if (o !== 1 || l !== 1)
          do
            if (o--, l--, 0 > l || i[o] !== s[l]) {
              var a = `
` + i[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= l);
        break;
      }
    }
  } finally {
    Ys = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? cr(e) : "";
}
function pg(e) {
  switch (e.tag) {
    case 5:
      return cr(e.type);
    case 16:
      return cr("Lazy");
    case 13:
      return cr("Suspense");
    case 19:
      return cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Zs(e.type, !1), e;
    case 11:
      return e = Zs(e.type.render, !1), e;
    case 1:
      return e = Zs(e.type, !0), e;
    default:
      return "";
  }
}
function Oo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case hn:
      return "Fragment";
    case pn:
      return "Portal";
    case _o:
      return "Profiler";
    case Xl:
      return "StrictMode";
    case Fo:
      return "Suspense";
    case Io:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ld:
      return (e.displayName || "Context") + ".Consumer";
    case od:
      return (e._context.displayName || "Context") + ".Provider";
    case Yl:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Zl:
      return t = e.displayName || null, t !== null ? t : Oo(e.type) || "Memo";
    case wt:
      t = e._payload, e = e._init;
      try {
        return Oo(e(t));
      } catch {
      }
  }
  return null;
}
function hg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Oo(t);
    case 8:
      return t === Xl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Nt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ud(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function mg(e) {
  var t = ud(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(o) {
      r = "" + o, s.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function pi(e) {
  e._valueTracker || (e._valueTracker = mg(e));
}
function cd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ud(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function bi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zo(e, t) {
  var n = t.checked;
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ku(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Nt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function fd(e, t) {
  t = t.checked, t != null && Ql(e, "checked", t, !1);
}
function Bo(e, t) {
  fd(e, t);
  var n = Nt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Uo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Uo(e, t.type, Nt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Tu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Uo(e, t, n) {
  (t !== "number" || bi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fr = Array.isArray;
function Mn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Nt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function $o(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(P(92));
      if (fr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Nt(n) };
}
function dd(e, t) {
  var n = Nt(t.value), r = Nt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function pd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? pd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hi, hd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (hi = hi || document.createElement("div"), hi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, gg = ["Webkit", "ms", "Moz", "O"];
Object.keys(yr).forEach(function(e) {
  gg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), yr[t] = yr[e];
  });
});
function md(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || yr.hasOwnProperty(e) && yr[e] ? ("" + t).trim() : t + "px";
}
function gd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = md(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var yg = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ho(e, t) {
  if (t) {
    if (yg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Ko(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Go = null;
function ql(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var bo = null, jn = null, Vn = null;
function Eu(e) {
  if (e = ni(e)) {
    if (typeof bo != "function") throw Error(P(280));
    var t = e.stateNode;
    t && (t = Rs(t), bo(e.stateNode, e.type, t));
  }
}
function yd(e) {
  jn ? Vn ? Vn.push(e) : Vn = [e] : jn = e;
}
function vd() {
  if (jn) {
    var e = jn, t = Vn;
    if (Vn = jn = null, Eu(e), t) for (e = 0; e < t.length; e++) Eu(t[e]);
  }
}
function xd(e, t) {
  return e(t);
}
function wd() {
}
var qs = !1;
function Sd(e, t, n) {
  if (qs) return e(t, n);
  qs = !0;
  try {
    return xd(e, t, n);
  } finally {
    qs = !1, (jn !== null || Vn !== null) && (wd(), vd());
  }
}
function Lr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Qo = !1;
if (ct) try {
  var tr = {};
  Object.defineProperty(tr, "passive", { get: function() {
    Qo = !0;
  } }), window.addEventListener("test", tr, tr), window.removeEventListener("test", tr, tr);
} catch {
  Qo = !1;
}
function vg(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var vr = !1, Qi = null, Xi = !1, Xo = null, xg = { onError: function(e) {
  vr = !0, Qi = e;
} };
function wg(e, t, n, r, i, s, o, l, a) {
  vr = !1, Qi = null, vg.apply(xg, arguments);
}
function Sg(e, t, n, r, i, s, o, l, a) {
  if (wg.apply(this, arguments), vr) {
    if (vr) {
      var u = Qi;
      vr = !1, Qi = null;
    } else throw Error(P(198));
    Xi || (Xi = !0, Xo = u);
  }
}
function un(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Au(e) {
  if (un(e) !== e) throw Error(P(188));
}
function kg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = un(e), t === null) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Au(i), e;
        if (s === r) return Au(i), t;
        s = s.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) n = i, r = s;
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          o = !0, n = i, r = s;
          break;
        }
        if (l === r) {
          o = !0, r = i, n = s;
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            o = !0, n = s, r = i;
            break;
          }
          if (l === r) {
            o = !0, r = s, n = i;
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function Td(e) {
  return e = kg(e), e !== null ? Cd(e) : null;
}
function Cd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pd = Me.unstable_scheduleCallback, Du = Me.unstable_cancelCallback, Tg = Me.unstable_shouldYield, Cg = Me.unstable_requestPaint, Z = Me.unstable_now, Pg = Me.unstable_getCurrentPriorityLevel, Jl = Me.unstable_ImmediatePriority, Ed = Me.unstable_UserBlockingPriority, Yi = Me.unstable_NormalPriority, Eg = Me.unstable_LowPriority, Ad = Me.unstable_IdlePriority, Ps = null, Je = null;
function Ag(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(Ps, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var be = Math.clz32 ? Math.clz32 : Mg, Dg = Math.log, Rg = Math.LN2;
function Mg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Dg(e) / Rg | 0) | 0;
}
var mi = 64, gi = 4194304;
function dr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? r = dr(l) : (s &= o, s !== 0 && (r = dr(s)));
  } else o = n & ~i, o !== 0 ? r = dr(o) : s !== 0 && (r = dr(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - be(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function jg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Vg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - be(s), l = 1 << o, a = i[o];
    a === -1 ? (!(l & n) || l & r) && (i[o] = jg(l, t)) : a <= t && (e.expiredLanes |= l), s &= ~l;
  }
}
function Yo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dd() {
  var e = mi;
  return mi <<= 1, !(mi & 4194240) && (mi = 64), e;
}
function Js(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ei(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - be(t), e[t] = n;
}
function Lg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - be(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function ea(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - be(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var I = 0;
function Rd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Md, ta, jd, Vd, Ld, Zo = !1, yi = [], Et = null, At = null, Dt = null, Nr = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), kt = [], Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ru(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function nr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = ni(t), t !== null && ta(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function _g(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Et = nr(Et, e, t, n, r, i), !0;
    case "dragenter":
      return At = nr(At, e, t, n, r, i), !0;
    case "mouseover":
      return Dt = nr(Dt, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return Nr.set(s, nr(Nr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, _r.set(s, nr(_r.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Nd(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = un(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = kd(n), t !== null) {
          e.blockedOn = t, Ld(e.priority, function() {
            jd(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ni(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = qo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Go = r, n.target.dispatchEvent(r), Go = null;
    } else return t = ni(n), t !== null && ta(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Mu(e, t, n) {
  Ni(e) && n.delete(t);
}
function Fg() {
  Zo = !1, Et !== null && Ni(Et) && (Et = null), At !== null && Ni(At) && (At = null), Dt !== null && Ni(Dt) && (Dt = null), Nr.forEach(Mu), _r.forEach(Mu);
}
function rr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Zo || (Zo = !0, Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Fg)));
}
function Fr(e) {
  function t(i) {
    return rr(i, e);
  }
  if (0 < yi.length) {
    rr(yi[0], e);
    for (var n = 1; n < yi.length; n++) {
      var r = yi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Et !== null && rr(Et, e), At !== null && rr(At, e), Dt !== null && rr(Dt, e), Nr.forEach(t), _r.forEach(t), n = 0; n < kt.length; n++) r = kt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && (n = kt[0], n.blockedOn === null); ) Nd(n), n.blockedOn === null && kt.shift();
}
var Ln = gt.ReactCurrentBatchConfig, qi = !0;
function Ig(e, t, n, r) {
  var i = I, s = Ln.transition;
  Ln.transition = null;
  try {
    I = 1, na(e, t, n, r);
  } finally {
    I = i, Ln.transition = s;
  }
}
function Og(e, t, n, r) {
  var i = I, s = Ln.transition;
  Ln.transition = null;
  try {
    I = 4, na(e, t, n, r);
  } finally {
    I = i, Ln.transition = s;
  }
}
function na(e, t, n, r) {
  if (qi) {
    var i = qo(e, t, n, r);
    if (i === null) uo(e, t, r, Ji, n), Ru(e, r);
    else if (_g(i, e, t, n, r)) r.stopPropagation();
    else if (Ru(e, r), t & 4 && -1 < Ng.indexOf(e)) {
      for (; i !== null; ) {
        var s = ni(i);
        if (s !== null && Md(s), s = qo(e, t, n, r), s === null && uo(e, t, r, Ji, n), s === i) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else uo(e, t, r, null, n);
  }
}
var Ji = null;
function qo(e, t, n, r) {
  if (Ji = null, e = ql(r), e = Xt(e), e !== null) if (t = un(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = kd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ji = e, null;
}
function _d(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Pg()) {
        case Jl:
          return 1;
        case Ed:
          return 4;
        case Yi:
        case Eg:
          return 16;
        case Ad:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null, ra = null, _i = null;
function Fd() {
  if (_i) return _i;
  var e, t = ra, n = t.length, r, i = "value" in Ct ? Ct.value : Ct.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++) ;
  return _i = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Fi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vi() {
  return !0;
}
function ju() {
  return !1;
}
function Le(e) {
  function t(n, r, i, s, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? vi : ju, this.isPropagationStopped = ju, this;
  }
  return G(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vi);
  }, persist: function() {
  }, isPersistent: vi }), t;
}
var Qn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ia = Le(Qn), ti = G({}, Qn, { view: 0, detail: 0 }), zg = Le(ti), eo, to, ir, Es = G({}, ti, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: sa, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (eo = e.screenX - ir.screenX, to = e.screenY - ir.screenY) : to = eo = 0, ir = e), eo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : to;
} }), Vu = Le(Es), Bg = G({}, Es, { dataTransfer: 0 }), Ug = Le(Bg), $g = G({}, ti, { relatedTarget: 0 }), no = Le($g), Wg = G({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hg = Le(Wg), Kg = G({}, Qn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Gg = Le(Kg), bg = G({}, Qn, { data: 0 }), Lu = Le(bg), Qg = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Xg = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Yg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Zg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yg[e]) ? !!t[e] : !1;
}
function sa() {
  return Zg;
}
var qg = G({}, ti, { key: function(e) {
  if (e.key) {
    var t = Qg[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: sa, charCode: function(e) {
  return e.type === "keypress" ? Fi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Jg = Le(qg), ey = G({}, Es, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Nu = Le(ey), ty = G({}, ti, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: sa }), ny = Le(ty), ry = G({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), iy = Le(ry), sy = G({}, Es, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), oy = Le(sy), ly = [9, 13, 27, 32], oa = ct && "CompositionEvent" in window, xr = null;
ct && "documentMode" in document && (xr = document.documentMode);
var ay = ct && "TextEvent" in window && !xr, Id = ct && (!oa || xr && 8 < xr && 11 >= xr), _u = " ", Fu = !1;
function Od(e, t) {
  switch (e) {
    case "keyup":
      return ly.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function zd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var mn = !1;
function uy(e, t) {
  switch (e) {
    case "compositionend":
      return zd(t);
    case "keypress":
      return t.which !== 32 ? null : (Fu = !0, _u);
    case "textInput":
      return e = t.data, e === _u && Fu ? null : e;
    default:
      return null;
  }
}
function cy(e, t) {
  if (mn) return e === "compositionend" || !oa && Od(e, t) ? (e = Fd(), _i = ra = Ct = null, mn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Id && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fy[e.type] : t === "textarea";
}
function Bd(e, t, n, r) {
  yd(r), t = es(t, "onChange"), 0 < t.length && (n = new ia("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var wr = null, Ir = null;
function dy(e) {
  Zd(e, 0);
}
function As(e) {
  var t = vn(e);
  if (cd(t)) return e;
}
function py(e, t) {
  if (e === "change") return t;
}
var Ud = !1;
if (ct) {
  var ro;
  if (ct) {
    var io = "oninput" in document;
    if (!io) {
      var Ou = document.createElement("div");
      Ou.setAttribute("oninput", "return;"), io = typeof Ou.oninput == "function";
    }
    ro = io;
  } else ro = !1;
  Ud = ro && (!document.documentMode || 9 < document.documentMode);
}
function zu() {
  wr && (wr.detachEvent("onpropertychange", $d), Ir = wr = null);
}
function $d(e) {
  if (e.propertyName === "value" && As(Ir)) {
    var t = [];
    Bd(t, Ir, e, ql(e)), Sd(dy, t);
  }
}
function hy(e, t, n) {
  e === "focusin" ? (zu(), wr = t, Ir = n, wr.attachEvent("onpropertychange", $d)) : e === "focusout" && zu();
}
function my(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return As(Ir);
}
function gy(e, t) {
  if (e === "click") return As(t);
}
function yy(e, t) {
  if (e === "input" || e === "change") return As(t);
}
function vy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xe = typeof Object.is == "function" ? Object.is : vy;
function Or(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!No.call(t, i) || !Xe(e[i], t[i])) return !1;
  }
  return !0;
}
function Bu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Uu(e, t) {
  var n = Bu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Bu(n);
  }
}
function Wd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hd() {
  for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bi(e.document);
  }
  return t;
}
function la(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xy(e) {
  var t = Hd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Wd(n.ownerDocument.documentElement, n)) {
    if (r !== null && la(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Uu(n, s);
        var o = Uu(
          n,
          r
        );
        i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var wy = ct && "documentMode" in document && 11 >= document.documentMode, gn = null, Jo = null, Sr = null, el = !1;
function $u(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  el || gn == null || gn !== bi(r) || (r = gn, "selectionStart" in r && la(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Sr && Or(Sr, r) || (Sr = r, r = es(Jo, "onSelect"), 0 < r.length && (t = new ia("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gn)));
}
function xi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yn = { animationend: xi("Animation", "AnimationEnd"), animationiteration: xi("Animation", "AnimationIteration"), animationstart: xi("Animation", "AnimationStart"), transitionend: xi("Transition", "TransitionEnd") }, so = {}, Kd = {};
ct && (Kd = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
function Ds(e) {
  if (so[e]) return so[e];
  if (!yn[e]) return e;
  var t = yn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Kd) return so[e] = t[n];
  return e;
}
var Gd = Ds("animationend"), bd = Ds("animationiteration"), Qd = Ds("animationstart"), Xd = Ds("transitionend"), Yd = /* @__PURE__ */ new Map(), Wu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function It(e, t) {
  Yd.set(e, t), an(t, [e]);
}
for (var oo = 0; oo < Wu.length; oo++) {
  var lo = Wu[oo], Sy = lo.toLowerCase(), ky = lo[0].toUpperCase() + lo.slice(1);
  It(Sy, "on" + ky);
}
It(Gd, "onAnimationEnd");
It(bd, "onAnimationIteration");
It(Qd, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(Xd, "onTransitionEnd");
Fn("onMouseEnter", ["mouseout", "mouseover"]);
Fn("onMouseLeave", ["mouseout", "mouseover"]);
Fn("onPointerEnter", ["pointerout", "pointerover"]);
Fn("onPointerLeave", ["pointerout", "pointerover"]);
an("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
an("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
an("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
an("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
an("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
an("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ty = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));
function Hu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Sg(r, t, void 0, e), e.currentTarget = null;
}
function Zd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var l = r[o], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== s && i.isPropagationStopped()) break e;
        Hu(i, l, u), s = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (l = r[o], a = l.instance, u = l.currentTarget, l = l.listener, a !== s && i.isPropagationStopped()) break e;
        Hu(i, l, u), s = a;
      }
    }
  }
  if (Xi) throw e = Xo, Xi = !1, Xo = null, e;
}
function B(e, t) {
  var n = t[sl];
  n === void 0 && (n = t[sl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (qd(t, e, 2, !1), n.add(r));
}
function ao(e, t, n) {
  var r = 0;
  t && (r |= 4), qd(n, e, r, t);
}
var wi = "_reactListening" + Math.random().toString(36).slice(2);
function zr(e) {
  if (!e[wi]) {
    e[wi] = !0, sd.forEach(function(n) {
      n !== "selectionchange" && (Ty.has(n) || ao(n, !1, e), ao(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wi] || (t[wi] = !0, ao("selectionchange", !1, t));
  }
}
function qd(e, t, n, r) {
  switch (_d(t)) {
    case 1:
      var i = Ig;
      break;
    case 4:
      i = Og;
      break;
    default:
      i = na;
  }
  n = i.bind(null, t, n, e), i = void 0, !Qo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function uo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var l = r.stateNode.containerInfo;
      if (l === i || l.nodeType === 8 && l.parentNode === i) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
        o = o.return;
      }
      for (; l !== null; ) {
        if (o = Xt(l), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = s = o;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Sd(function() {
    var u = s, c = ql(n), f = [];
    e: {
      var d = Yd.get(e);
      if (d !== void 0) {
        var g = ia, y = e;
        switch (e) {
          case "keypress":
            if (Fi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Jg;
            break;
          case "focusin":
            y = "focus", g = no;
            break;
          case "focusout":
            y = "blur", g = no;
            break;
          case "beforeblur":
          case "afterblur":
            g = no;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Ug;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = ny;
            break;
          case Gd:
          case bd:
          case Qd:
            g = Hg;
            break;
          case Xd:
            g = iy;
            break;
          case "scroll":
            g = zg;
            break;
          case "wheel":
            g = oy;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Gg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Nu;
        }
        var v = (t & 4) !== 0, T = !v && e === "scroll", m = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var p = u, h; p !== null; ) {
          h = p;
          var x = h.stateNode;
          if (h.tag === 5 && x !== null && (h = x, m !== null && (x = Lr(p, m), x != null && v.push(Br(p, x, h)))), T) break;
          p = p.return;
        }
        0 < v.length && (d = new g(d, y, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Go && (y = n.relatedTarget || n.fromElement) && (Xt(y) || y[ft])) break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = u, y = y ? Xt(y) : null, y !== null && (T = un(y), y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = u), g !== y)) {
          if (v = Vu, x = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = Nu, x = "onPointerLeave", m = "onPointerEnter", p = "pointer"), T = g == null ? d : vn(g), h = y == null ? d : vn(y), d = new v(x, p + "leave", g, n, c), d.target = T, d.relatedTarget = h, x = null, Xt(c) === u && (v = new v(m, p + "enter", y, n, c), v.target = h, v.relatedTarget = T, x = v), T = x, g && y) t: {
            for (v = g, m = y, p = 0, h = v; h; h = dn(h)) p++;
            for (h = 0, x = m; x; x = dn(x)) h++;
            for (; 0 < p - h; ) v = dn(v), p--;
            for (; 0 < h - p; ) m = dn(m), h--;
            for (; p--; ) {
              if (v === m || m !== null && v === m.alternate) break t;
              v = dn(v), m = dn(m);
            }
            v = null;
          }
          else v = null;
          g !== null && Ku(f, d, g, v, !1), y !== null && T !== null && Ku(f, T, y, v, !0);
        }
      }
      e: {
        if (d = u ? vn(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var w = py;
        else if (Iu(d)) if (Ud) w = yy;
        else {
          w = my;
          var E = hy;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = gy);
        if (w && (w = w(e, u))) {
          Bd(f, w, n, c);
          break e;
        }
        E && E(e, d, u), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Uo(d, "number", d.value);
      }
      switch (E = u ? vn(u) : window, e) {
        case "focusin":
          (Iu(E) || E.contentEditable === "true") && (gn = E, Jo = u, Sr = null);
          break;
        case "focusout":
          Sr = Jo = gn = null;
          break;
        case "mousedown":
          el = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          el = !1, $u(f, n, c);
          break;
        case "selectionchange":
          if (wy) break;
        case "keydown":
        case "keyup":
          $u(f, n, c);
      }
      var A;
      if (oa) e: {
        switch (e) {
          case "compositionstart":
            var C = "onCompositionStart";
            break e;
          case "compositionend":
            C = "onCompositionEnd";
            break e;
          case "compositionupdate":
            C = "onCompositionUpdate";
            break e;
        }
        C = void 0;
      }
      else mn ? Od(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (Id && n.locale !== "ko" && (mn || C !== "onCompositionStart" ? C === "onCompositionEnd" && mn && (A = Fd()) : (Ct = c, ra = "value" in Ct ? Ct.value : Ct.textContent, mn = !0)), E = es(u, C), 0 < E.length && (C = new Lu(C, e, null, n, c), f.push({ event: C, listeners: E }), A ? C.data = A : (A = zd(n), A !== null && (C.data = A)))), (A = ay ? uy(e, n) : cy(e, n)) && (u = es(u, "onBeforeInput"), 0 < u.length && (c = new Lu("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = A));
    }
    Zd(f, t);
  });
}
function Br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function es(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = Lr(e, n), s != null && r.unshift(Br(e, s, i)), s = Lr(e, t), s != null && r.push(Br(e, s, i))), e = e.return;
  }
  return r;
}
function dn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ku(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, i ? (a = Lr(n, s), a != null && o.unshift(Br(n, a, l))) : i || (a = Lr(n, s), a != null && o.push(Br(n, a, l)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Cy = /\r\n?/g, Py = /\u0000|\uFFFD/g;
function Gu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Cy, `
`).replace(Py, "");
}
function Si(e, t, n) {
  if (t = Gu(t), Gu(e) !== t && n) throw Error(P(425));
}
function ts() {
}
var tl = null, nl = null;
function rl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var il = typeof setTimeout == "function" ? setTimeout : void 0, Ey = typeof clearTimeout == "function" ? clearTimeout : void 0, bu = typeof Promise == "function" ? Promise : void 0, Ay = typeof queueMicrotask == "function" ? queueMicrotask : typeof bu < "u" ? function(e) {
  return bu.resolve(null).then(e).catch(Dy);
} : il;
function Dy(e) {
  setTimeout(function() {
    throw e;
  });
}
function co(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Fr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Fr(t);
}
function Rt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Qu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xn = Math.random().toString(36).slice(2), qe = "__reactFiber$" + Xn, Ur = "__reactProps$" + Xn, ft = "__reactContainer$" + Xn, sl = "__reactEvents$" + Xn, Ry = "__reactListeners$" + Xn, My = "__reactHandles$" + Xn;
function Xt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ft] || n[qe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Qu(e); e !== null; ) {
        if (n = e[qe]) return n;
        e = Qu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ni(e) {
  return e = e[qe] || e[ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function vn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Rs(e) {
  return e[Ur] || null;
}
var ol = [], xn = -1;
function Ot(e) {
  return { current: e };
}
function U(e) {
  0 > xn || (e.current = ol[xn], ol[xn] = null, xn--);
}
function O(e, t) {
  xn++, ol[xn] = e.current, e.current = t;
}
var _t = {}, me = Ot(_t), ke = Ot(!1), nn = _t;
function In(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n) i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Te(e) {
  return e = e.childContextTypes, e != null;
}
function ns() {
  U(ke), U(me);
}
function Xu(e, t, n) {
  if (me.current !== _t) throw Error(P(168));
  O(me, t), O(ke, n);
}
function Jd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, hg(e) || "Unknown", i));
  return G({}, n, r);
}
function rs(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, nn = me.current, O(me, e), O(ke, ke.current), !0;
}
function Yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n ? (e = Jd(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, U(ke), U(me), O(me, e)) : U(ke), O(ke, n);
}
var it = null, Ms = !1, fo = !1;
function ep(e) {
  it === null ? it = [e] : it.push(e);
}
function jy(e) {
  Ms = !0, ep(e);
}
function zt() {
  if (!fo && it !== null) {
    fo = !0;
    var e = 0, t = I;
    try {
      var n = it;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      it = null, Ms = !1;
    } catch (i) {
      throw it !== null && (it = it.slice(e + 1)), Pd(Jl, zt), i;
    } finally {
      I = t, fo = !1;
    }
  }
  return null;
}
var wn = [], Sn = 0, is = null, ss = 0, Fe = [], Ie = 0, rn = null, st = 1, ot = "";
function Kt(e, t) {
  wn[Sn++] = ss, wn[Sn++] = is, is = e, ss = t;
}
function tp(e, t, n) {
  Fe[Ie++] = st, Fe[Ie++] = ot, Fe[Ie++] = rn, rn = e;
  var r = st;
  e = ot;
  var i = 32 - be(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - be(t) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, st = 1 << 32 - be(t) + i | n << i | r, ot = s + e;
  } else st = 1 << s | n << i | r, ot = e;
}
function aa(e) {
  e.return !== null && (Kt(e, 1), tp(e, 1, 0));
}
function ua(e) {
  for (; e === is; ) is = wn[--Sn], wn[Sn] = null, ss = wn[--Sn], wn[Sn] = null;
  for (; e === rn; ) rn = Fe[--Ie], Fe[Ie] = null, ot = Fe[--Ie], Fe[Ie] = null, st = Fe[--Ie], Fe[Ie] = null;
}
var De = null, Ae = null, $ = !1, Ge = null;
function np(e, t) {
  var n = Oe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Zu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, De = e, Ae = Rt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, De = e, Ae = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: st, overflow: ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Oe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, De = e, Ae = null, !0) : !1;
    default:
      return !1;
  }
}
function ll(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function al(e) {
  if ($) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Zu(e, t)) {
        if (ll(e)) throw Error(P(418));
        t = Rt(n.nextSibling);
        var r = De;
        t && Zu(e, t) ? np(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, De = e);
      }
    } else {
      if (ll(e)) throw Error(P(418));
      e.flags = e.flags & -4097 | 2, $ = !1, De = e;
    }
  }
}
function qu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  De = e;
}
function ki(e) {
  if (e !== De) return !1;
  if (!$) return qu(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !rl(e.type, e.memoizedProps)), t && (t = Ae)) {
    if (ll(e)) throw rp(), Error(P(418));
    for (; t; ) np(e, t), t = Rt(t.nextSibling);
  }
  if (qu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = De ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function rp() {
  for (var e = Ae; e; ) e = Rt(e.nextSibling);
}
function On() {
  Ae = De = null, $ = !1;
}
function ca(e) {
  Ge === null ? Ge = [e] : Ge.push(e);
}
var Vy = gt.ReactCurrentBatchConfig;
function sr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
        var l = i.refs;
        o === null ? delete l[s] : l[s] = o;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Ti(e, t) {
  throw e = Object.prototype.toString.call(t), Error(P(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ju(e) {
  var t = e._init;
  return t(e._payload);
}
function ip(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions;
      h === null ? (m.deletions = [p], m.flags |= 16) : h.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), p = p.sibling;
    return null;
  }
  function r(m, p) {
    for (m = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
    return m;
  }
  function i(m, p) {
    return m = Lt(m, p), m.index = 0, m.sibling = null, m;
  }
  function s(m, p, h) {
    return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < p ? (m.flags |= 2, p) : h) : (m.flags |= 2, p)) : (m.flags |= 1048576, p);
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, p, h, x) {
    return p === null || p.tag !== 6 ? (p = xo(h, m.mode, x), p.return = m, p) : (p = i(p, h), p.return = m, p);
  }
  function a(m, p, h, x) {
    var w = h.type;
    return w === hn ? c(m, p, h.props.children, x, h.key) : p !== null && (p.elementType === w || typeof w == "object" && w !== null && w.$$typeof === wt && Ju(w) === p.type) ? (x = i(p, h.props), x.ref = sr(m, p, h), x.return = m, x) : (x = Wi(h.type, h.key, h.props, null, m.mode, x), x.ref = sr(m, p, h), x.return = m, x);
  }
  function u(m, p, h, x) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation ? (p = wo(h, m.mode, x), p.return = m, p) : (p = i(p, h.children || []), p.return = m, p);
  }
  function c(m, p, h, x, w) {
    return p === null || p.tag !== 7 ? (p = en(h, m.mode, x, w), p.return = m, p) : (p = i(p, h), p.return = m, p);
  }
  function f(m, p, h) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = xo("" + p, m.mode, h), p.return = m, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case di:
          return h = Wi(p.type, p.key, p.props, null, m.mode, h), h.ref = sr(m, null, p), h.return = m, h;
        case pn:
          return p = wo(p, m.mode, h), p.return = m, p;
        case wt:
          var x = p._init;
          return f(m, x(p._payload), h);
      }
      if (fr(p) || er(p)) return p = en(p, m.mode, h, null), p.return = m, p;
      Ti(m, p);
    }
    return null;
  }
  function d(m, p, h, x) {
    var w = p !== null ? p.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return w !== null ? null : l(m, p, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case di:
          return h.key === w ? a(m, p, h, x) : null;
        case pn:
          return h.key === w ? u(m, p, h, x) : null;
        case wt:
          return w = h._init, d(
            m,
            p,
            w(h._payload),
            x
          );
      }
      if (fr(h) || er(h)) return w !== null ? null : c(m, p, h, x, null);
      Ti(m, h);
    }
    return null;
  }
  function g(m, p, h, x, w) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return m = m.get(h) || null, l(p, m, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case di:
          return m = m.get(x.key === null ? h : x.key) || null, a(p, m, x, w);
        case pn:
          return m = m.get(x.key === null ? h : x.key) || null, u(p, m, x, w);
        case wt:
          var E = x._init;
          return g(m, p, h, E(x._payload), w);
      }
      if (fr(x) || er(x)) return m = m.get(h) || null, c(p, m, x, w, null);
      Ti(p, x);
    }
    return null;
  }
  function y(m, p, h, x) {
    for (var w = null, E = null, A = p, C = p = 0, N = null; A !== null && C < h.length; C++) {
      A.index > C ? (N = A, A = null) : N = A.sibling;
      var j = d(m, A, h[C], x);
      if (j === null) {
        A === null && (A = N);
        break;
      }
      e && A && j.alternate === null && t(m, A), p = s(j, p, C), E === null ? w = j : E.sibling = j, E = j, A = N;
    }
    if (C === h.length) return n(m, A), $ && Kt(m, C), w;
    if (A === null) {
      for (; C < h.length; C++) A = f(m, h[C], x), A !== null && (p = s(A, p, C), E === null ? w = A : E.sibling = A, E = A);
      return $ && Kt(m, C), w;
    }
    for (A = r(m, A); C < h.length; C++) N = g(A, m, C, h[C], x), N !== null && (e && N.alternate !== null && A.delete(N.key === null ? C : N.key), p = s(N, p, C), E === null ? w = N : E.sibling = N, E = N);
    return e && A.forEach(function(ne) {
      return t(m, ne);
    }), $ && Kt(m, C), w;
  }
  function v(m, p, h, x) {
    var w = er(h);
    if (typeof w != "function") throw Error(P(150));
    if (h = w.call(h), h == null) throw Error(P(151));
    for (var E = w = null, A = p, C = p = 0, N = null, j = h.next(); A !== null && !j.done; C++, j = h.next()) {
      A.index > C ? (N = A, A = null) : N = A.sibling;
      var ne = d(m, A, j.value, x);
      if (ne === null) {
        A === null && (A = N);
        break;
      }
      e && A && ne.alternate === null && t(m, A), p = s(ne, p, C), E === null ? w = ne : E.sibling = ne, E = ne, A = N;
    }
    if (j.done) return n(
      m,
      A
    ), $ && Kt(m, C), w;
    if (A === null) {
      for (; !j.done; C++, j = h.next()) j = f(m, j.value, x), j !== null && (p = s(j, p, C), E === null ? w = j : E.sibling = j, E = j);
      return $ && Kt(m, C), w;
    }
    for (A = r(m, A); !j.done; C++, j = h.next()) j = g(A, m, C, j.value, x), j !== null && (e && j.alternate !== null && A.delete(j.key === null ? C : j.key), p = s(j, p, C), E === null ? w = j : E.sibling = j, E = j);
    return e && A.forEach(function(yt) {
      return t(m, yt);
    }), $ && Kt(m, C), w;
  }
  function T(m, p, h, x) {
    if (typeof h == "object" && h !== null && h.type === hn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case di:
          e: {
            for (var w = h.key, E = p; E !== null; ) {
              if (E.key === w) {
                if (w = h.type, w === hn) {
                  if (E.tag === 7) {
                    n(m, E.sibling), p = i(E, h.props.children), p.return = m, m = p;
                    break e;
                  }
                } else if (E.elementType === w || typeof w == "object" && w !== null && w.$$typeof === wt && Ju(w) === E.type) {
                  n(m, E.sibling), p = i(E, h.props), p.ref = sr(m, E, h), p.return = m, m = p;
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            h.type === hn ? (p = en(h.props.children, m.mode, x, h.key), p.return = m, m = p) : (x = Wi(h.type, h.key, h.props, null, m.mode, x), x.ref = sr(m, p, h), x.return = m, m = x);
          }
          return o(m);
        case pn:
          e: {
            for (E = h.key; p !== null; ) {
              if (p.key === E) if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
                n(m, p.sibling), p = i(p, h.children || []), p.return = m, m = p;
                break e;
              } else {
                n(m, p);
                break;
              }
              else t(m, p);
              p = p.sibling;
            }
            p = wo(h, m.mode, x), p.return = m, m = p;
          }
          return o(m);
        case wt:
          return E = h._init, T(m, p, E(h._payload), x);
      }
      if (fr(h)) return y(m, p, h, x);
      if (er(h)) return v(m, p, h, x);
      Ti(m, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, p !== null && p.tag === 6 ? (n(m, p.sibling), p = i(p, h), p.return = m, m = p) : (n(m, p), p = xo(h, m.mode, x), p.return = m, m = p), o(m)) : n(m, p);
  }
  return T;
}
var zn = ip(!0), sp = ip(!1), os = Ot(null), ls = null, kn = null, fa = null;
function da() {
  fa = kn = ls = null;
}
function pa(e) {
  var t = os.current;
  U(os), e._currentValue = t;
}
function ul(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Nn(e, t) {
  ls = e, fa = kn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Be(e) {
  var t = e._currentValue;
  if (fa !== e) if (e = { context: e, memoizedValue: t, next: null }, kn === null) {
    if (ls === null) throw Error(P(308));
    kn = e, ls.dependencies = { lanes: 0, firstContext: e };
  } else kn = kn.next = e;
  return t;
}
var Yt = null;
function ha(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
function op(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, ha(t)) : (n.next = i.next, i.next = n), t.interleaved = n, dt(e, r);
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var St = !1;
function ma(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, dt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, ha(r)) : (t.next = i.next, i.next = t), r.interleaved = t, dt(e, n);
}
function Ii(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ea(e, n);
  }
}
function ec(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? i = s = o : s = s.next = o, n = n.next;
      } while (n !== null);
      s === null ? i = s = t : s = s.next = t;
    } else i = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function as(e, t, n, r) {
  var i = e.updateQueue;
  St = !1;
  var s = i.firstBaseUpdate, o = i.lastBaseUpdate, l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, o === null ? s = u : o.next = u, o = a;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a));
  }
  if (s !== null) {
    var f = i.baseState;
    o = 0, c = u = a = null, l = s;
    do {
      var d = l.lane, g = l.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var y = e, v = l;
          switch (d = t, g = n, v.tag) {
            case 1:
              if (y = v.payload, typeof y == "function") {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = v.payload, d = typeof y == "function" ? y.call(g, f, d) : y, d == null) break e;
              f = G({}, f, d);
              break e;
            case 2:
              St = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [l] : d.push(l));
      } else g = { eventTime: g, lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, c === null ? (u = c = g, a = f) : c = c.next = g, o |= d;
      if (l = l.next, l === null) {
        if (l = i.shared.pending, l === null) break;
        d = l, l = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (a = f), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        o |= i.lane, i = i.next;
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    on |= o, e.lanes = o, e.memoizedState = f;
  }
}
function tc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(P(191, i));
      i.call(r);
    }
  }
}
var ri = {}, et = Ot(ri), $r = Ot(ri), Wr = Ot(ri);
function Zt(e) {
  if (e === ri) throw Error(P(174));
  return e;
}
function ga(e, t) {
  switch (O(Wr, t), O($r, e), O(et, ri), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Wo(t, e);
  }
  U(et), O(et, t);
}
function Bn() {
  U(et), U($r), U(Wr);
}
function ap(e) {
  Zt(Wr.current);
  var t = Zt(et.current), n = Wo(t, e.type);
  t !== n && (O($r, e), O(et, n));
}
function ya(e) {
  $r.current === e && (U(et), U($r));
}
var H = Ot(0);
function us(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var po = [];
function va() {
  for (var e = 0; e < po.length; e++) po[e]._workInProgressVersionPrimary = null;
  po.length = 0;
}
var Oi = gt.ReactCurrentDispatcher, ho = gt.ReactCurrentBatchConfig, sn = 0, K = null, ee = null, ie = null, cs = !1, kr = !1, Hr = 0, Ly = 0;
function fe() {
  throw Error(P(321));
}
function xa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function wa(e, t, n, r, i, s) {
  if (sn = s, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Oi.current = e === null || e.memoizedState === null ? Iy : Oy, e = n(r, i), kr) {
    s = 0;
    do {
      if (kr = !1, Hr = 0, 25 <= s) throw Error(P(301));
      s += 1, ie = ee = null, t.updateQueue = null, Oi.current = zy, e = n(r, i);
    } while (kr);
  }
  if (Oi.current = fs, t = ee !== null && ee.next !== null, sn = 0, ie = ee = K = null, cs = !1, t) throw Error(P(300));
  return e;
}
function Sa() {
  var e = Hr !== 0;
  return Hr = 0, e;
}
function Ze() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? K.memoizedState = ie = e : ie = ie.next = e, ie;
}
function Ue() {
  if (ee === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = ie === null ? K.memoizedState : ie.next;
  if (t !== null) ie = t, ee = e;
  else {
    if (e === null) throw Error(P(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, ie === null ? K.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function mo(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = ee, i = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = s.next, s.next = o;
    }
    r.baseQueue = i = s, n.pending = null;
  }
  if (i !== null) {
    s = i.next, r = r.baseState;
    var l = o = null, a = null, u = s;
    do {
      var c = u.lane;
      if ((sn & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f, o = r) : a = a.next = f, K.lanes |= c, on |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? o = r : a.next = l, Xe(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, K.lanes |= s, on |= s, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function go(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      s = e(s, o.action), o = o.next;
    while (o !== i);
    Xe(s, t.memoizedState) || (Se = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function up() {
}
function cp(e, t) {
  var n = K, r = Ue(), i = t(), s = !Xe(r.memoizedState, i);
  if (s && (r.memoizedState = i, Se = !0), r = r.queue, ka(pp.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, Gr(9, dp.bind(null, n, r, i, t), void 0, null), se === null) throw Error(P(349));
    sn & 30 || fp(n, t, i);
  }
  return i;
}
function fp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function dp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, hp(t) && mp(e);
}
function pp(e, t, n) {
  return n(function() {
    hp(t) && mp(e);
  });
}
function hp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function mp(e) {
  var t = dt(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function nc(e) {
  var t = Ze();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Kr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Fy.bind(null, K, e), [t.memoizedState, e];
}
function Gr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function gp() {
  return Ue().memoizedState;
}
function zi(e, t, n, r) {
  var i = Ze();
  K.flags |= e, i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r);
}
function js(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ee !== null) {
    var o = ee.memoizedState;
    if (s = o.destroy, r !== null && xa(r, o.deps)) {
      i.memoizedState = Gr(t, n, s, r);
      return;
    }
  }
  K.flags |= e, i.memoizedState = Gr(1 | t, n, s, r);
}
function rc(e, t) {
  return zi(8390656, 8, e, t);
}
function ka(e, t) {
  return js(2048, 8, e, t);
}
function yp(e, t) {
  return js(4, 2, e, t);
}
function vp(e, t) {
  return js(4, 4, e, t);
}
function xp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function wp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, js(4, 4, xp.bind(null, t, e), n);
}
function Ta() {
}
function Sp(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function kp(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && xa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Tp(e, t, n) {
  return sn & 21 ? (Xe(n, t) || (n = Dd(), K.lanes |= n, on |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function Ny(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ho.transition;
  ho.transition = {};
  try {
    e(!1), t();
  } finally {
    I = n, ho.transition = r;
  }
}
function Cp() {
  return Ue().memoizedState;
}
function _y(e, t, n) {
  var r = Vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Pp(e)) Ep(t, n);
  else if (n = op(e, t, n, r), n !== null) {
    var i = ye();
    Qe(n, e, r, i), Ap(n, t, r);
  }
}
function Fy(e, t, n) {
  var r = Vt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pp(e)) Ep(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var o = t.lastRenderedState, l = s(o, n);
      if (i.hasEagerState = !0, i.eagerState = l, Xe(l, o)) {
        var a = t.interleaved;
        a === null ? (i.next = i, ha(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = op(e, t, i, r), n !== null && (i = ye(), Qe(n, e, r, i), Ap(n, t, r));
  }
}
function Pp(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function Ep(e, t) {
  kr = cs = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ap(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ea(e, n);
  }
}
var fs = { readContext: Be, useCallback: fe, useContext: fe, useEffect: fe, useImperativeHandle: fe, useInsertionEffect: fe, useLayoutEffect: fe, useMemo: fe, useReducer: fe, useRef: fe, useState: fe, useDebugValue: fe, useDeferredValue: fe, useTransition: fe, useMutableSource: fe, useSyncExternalStore: fe, useId: fe, unstable_isNewReconciler: !1 }, Iy = { readContext: Be, useCallback: function(e, t) {
  return Ze().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Be, useEffect: rc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zi(
    4194308,
    4,
    xp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return zi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return zi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ze();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ze();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = _y.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ze();
  return e = { current: e }, t.memoizedState = e;
}, useState: nc, useDebugValue: Ta, useDeferredValue: function(e) {
  return Ze().memoizedState = e;
}, useTransition: function() {
  var e = nc(!1), t = e[0];
  return e = Ny.bind(null, e[1]), Ze().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, i = Ze();
  if ($) {
    if (n === void 0) throw Error(P(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(P(349));
    sn & 30 || fp(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, rc(pp.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, Gr(9, dp.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Ze(), t = se.identifierPrefix;
  if ($) {
    var n = ot, r = st;
    n = (r & ~(1 << 32 - be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ly++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Oy = {
  readContext: Be,
  useCallback: Sp,
  useContext: Be,
  useEffect: ka,
  useImperativeHandle: wp,
  useInsertionEffect: yp,
  useLayoutEffect: vp,
  useMemo: kp,
  useReducer: mo,
  useRef: gp,
  useState: function() {
    return mo(Kr);
  },
  useDebugValue: Ta,
  useDeferredValue: function(e) {
    var t = Ue();
    return Tp(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = mo(Kr)[0], t = Ue().memoizedState;
    return [e, t];
  },
  useMutableSource: up,
  useSyncExternalStore: cp,
  useId: Cp,
  unstable_isNewReconciler: !1
}, zy = { readContext: Be, useCallback: Sp, useContext: Be, useEffect: ka, useImperativeHandle: wp, useInsertionEffect: yp, useLayoutEffect: vp, useMemo: kp, useReducer: go, useRef: gp, useState: function() {
  return go(Kr);
}, useDebugValue: Ta, useDeferredValue: function(e) {
  var t = Ue();
  return ee === null ? t.memoizedState = e : Tp(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = go(Kr)[0], t = Ue().memoizedState;
  return [e, t];
}, useMutableSource: up, useSyncExternalStore: cp, useId: Cp, unstable_isNewReconciler: !1 };
function He(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function cl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vs = { isMounted: function(e) {
  return (e = e._reactInternals) ? un(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), i = Vt(e), s = lt(r, i);
  s.payload = t, n != null && (s.callback = n), t = Mt(e, s, i), t !== null && (Qe(t, e, i, r), Ii(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), i = Vt(e), s = lt(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Mt(e, s, i), t !== null && (Qe(t, e, i, r), Ii(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = Vt(e), i = lt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Mt(e, i, r), t !== null && (Qe(t, e, r, n), Ii(t, e, r));
} };
function ic(e, t, n, r, i, s, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, r) || !Or(i, s) : !0;
}
function Dp(e, t, n) {
  var r = !1, i = _t, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Be(s) : (i = Te(t) ? nn : me.current, r = t.contextTypes, s = (r = r != null) ? In(e, i) : _t), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function sc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vs.enqueueReplaceState(t, t.state, null);
}
function fl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, ma(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = Be(s) : (s = Te(t) ? nn : me.current, i.context = In(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (cl(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Vs.enqueueReplaceState(i, i.state, null), as(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Un(e, t) {
  try {
    var n = "", r = t;
    do
      n += pg(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function yo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function dl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var By = typeof WeakMap == "function" ? WeakMap : Map;
function Rp(e, t, n) {
  n = lt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ps || (ps = !0, kl = r), dl(e, t);
  }, n;
}
function Mp(e, t, n) {
  n = lt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      dl(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    dl(e, t), typeof r != "function" && (jt === null ? jt = /* @__PURE__ */ new Set([this]) : jt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function oc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new By();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = ev.bind(null, e, t, n), t.then(e, e));
}
function lc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ac(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lt(-1, 1), t.tag = 2, Mt(n, t, 1))), n.lanes |= 1), e);
}
var Uy = gt.ReactCurrentOwner, Se = !1;
function ge(e, t, n, r) {
  t.child = e === null ? sp(t, null, n, r) : zn(t, e.child, n, r);
}
function uc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return Nn(t, i), r = wa(e, t, n, r, s, i), n = Sa(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : ($ && n && aa(t), t.flags |= 1, ge(e, t, r, i), t.child);
}
function cc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !ja(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, jp(e, t, s, r, i)) : (e = Wi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Or, n(o, r) && e.ref === t.ref) return pt(e, t, i);
  }
  return t.flags |= 1, e = Lt(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function jp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Or(s, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, pt(e, t, i);
  }
  return pl(e, t, n, r, i);
}
function Vp(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(Cn, Ee), Ee |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, O(Cn, Ee), Ee |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, O(Cn, Ee), Ee |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, O(Cn, Ee), Ee |= r;
  return ge(e, t, i, n), t.child;
}
function Lp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function pl(e, t, n, r, i) {
  var s = Te(n) ? nn : me.current;
  return s = In(t, s), Nn(t, i), n = wa(e, t, n, r, s, i), r = Sa(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : ($ && r && aa(t), t.flags |= 1, ge(e, t, n, i), t.child);
}
function fc(e, t, n, r, i) {
  if (Te(n)) {
    var s = !0;
    rs(t);
  } else s = !1;
  if (Nn(t, i), t.stateNode === null) Bi(e, t), Dp(t, n, r), fl(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, l = t.memoizedProps;
    o.props = l;
    var a = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Be(u) : (u = Te(n) ? nn : me.current, u = In(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && sc(t, o, r, u), St = !1;
    var d = t.memoizedState;
    o.state = d, as(t, r, o, i), a = t.memoizedState, l !== r || d !== a || ke.current || St ? (typeof c == "function" && (cl(t, n, c, r), a = t.memoizedState), (l = St || ic(t, n, l, r, d, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, lp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : He(t.type, l), o.props = u, f = t.pendingProps, d = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Be(a) : (a = Te(n) ? nn : me.current, a = In(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || d !== a) && sc(t, o, r, a), St = !1, d = t.memoizedState, o.state = d, as(t, r, o, i);
    var y = t.memoizedState;
    l !== f || d !== y || ke.current || St ? (typeof g == "function" && (cl(t, n, g, r), y = t.memoizedState), (u = St || ic(t, n, u, r, d, y, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return hl(e, t, n, r, s, i);
}
function hl(e, t, n, r, i, s) {
  Lp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Yu(t, n, !1), pt(e, t, s);
  r = t.stateNode, Uy.current = t;
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = zn(t, e.child, null, s), t.child = zn(t, null, l, s)) : ge(e, t, l, s), t.memoizedState = r.state, i && Yu(t, n, !0), t.child;
}
function Np(e) {
  var t = e.stateNode;
  t.pendingContext ? Xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xu(e, t.context, !1), ga(e, t.containerInfo);
}
function dc(e, t, n, r, i) {
  return On(), ca(i), t.flags |= 256, ge(e, t, n, r), t.child;
}
var ml = { dehydrated: null, treeContext: null, retryLane: 0 };
function gl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _p(e, t, n) {
  var r = t.pendingProps, i = H.current, s = !1, o = (t.flags & 128) !== 0, l;
  if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), O(H, i & 1), e === null)
    return al(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = _s(o, r, 0, null), e = en(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = gl(n), t.memoizedState = ml, e) : Ca(t, o));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return $y(e, t, o, r, l, i, n);
  if (s) {
    s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Lt(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = Lt(l, s) : (s = en(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? gl(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = ml, r;
  }
  return s = e.child, e = s.sibling, r = Lt(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ca(e, t) {
  return t = _s({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ci(e, t, n, r) {
  return r !== null && ca(r), zn(t, e.child, null, n), e = Ca(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function $y(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = yo(Error(P(422))), Ci(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = _s({ mode: "visible", children: r.children }, i, 0, null), s = en(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && zn(t, e.child, null, o), t.child.memoizedState = gl(o), t.memoizedState = ml, s);
  if (!(t.mode & 1)) return Ci(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
    return r = l, s = Error(P(419)), r = yo(s, r, void 0), Ci(e, t, o, r);
  }
  if (l = (o & e.childLanes) !== 0, Se || l) {
    if (r = se, r !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, dt(e, i), Qe(r, e, i, -1));
    }
    return Ma(), r = yo(Error(P(421))), Ci(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = tv.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ae = Rt(i.nextSibling), De = t, $ = !0, Ge = null, e !== null && (Fe[Ie++] = st, Fe[Ie++] = ot, Fe[Ie++] = rn, st = e.id, ot = e.overflow, rn = t), t = Ca(t, r.children), t.flags |= 4096, t);
}
function pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ul(e.return, t, n);
}
function vo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function Fp(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (ge(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && pc(e, n, t);
      else if (e.tag === 19) pc(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (O(H, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && us(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), vo(t, !1, i, n, s);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && us(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      vo(t, !0, n, null, s);
      break;
    case "together":
      vo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Bi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), on |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Lt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Wy(e, t, n) {
  switch (t.tag) {
    case 3:
      Np(t), On();
      break;
    case 5:
      ap(t);
      break;
    case 1:
      Te(t.type) && rs(t);
      break;
    case 4:
      ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      O(os, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (O(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _p(e, t, n) : (O(H, H.current & 1), e = pt(e, t, n), e !== null ? e.sibling : null);
      O(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Fp(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), O(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Vp(e, t, n);
  }
  return pt(e, t, n);
}
var Ip, yl, Op, zp;
Ip = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
yl = function() {
};
Op = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Zt(et.current);
    var s = null;
    switch (n) {
      case "input":
        i = zo(e, i), r = zo(e, r), s = [];
        break;
      case "select":
        i = G({}, i, { value: void 0 }), r = G({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = $o(e, i), r = $o(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ts);
    }
    Ho(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var l = i[u];
      for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (jr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = i?.[u], r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (o in l) !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (jr.hasOwnProperty(u) ? (a != null && u === "onScroll" && B("scroll", e), s || l === a || (s = [])) : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
zp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function or(e, t) {
  if (!$) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function de(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Hy(e, t, n) {
  var r = t.pendingProps;
  switch (ua(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null;
    case 1:
      return Te(t.type) && ns(), de(t), null;
    case 3:
      return r = t.stateNode, Bn(), U(ke), U(me), va(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ki(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ge !== null && (Pl(Ge), Ge = null))), yl(e, t), de(t), null;
    case 5:
      ya(t);
      var i = Zt(Wr.current);
      if (n = t.type, e !== null && t.stateNode != null) Op(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return de(t), null;
        }
        if (e = Zt(et.current), ki(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[qe] = t, r[Ur] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < pr.length; i++) B(pr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              ku(r, s), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, B("invalid", r);
              break;
            case "textarea":
              Cu(r, s), B("invalid", r);
          }
          Ho(n, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var l = s[o];
            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Si(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Si(
              r.textContent,
              l,
              e
            ), i = ["children", "" + l]) : jr.hasOwnProperty(o) && l != null && o === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              pi(r), Tu(r, s, !0);
              break;
            case "textarea":
              pi(r), Pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ts);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = pd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[qe] = t, e[Ur] = r, Ip(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ko(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < pr.length; i++) B(pr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), i = r;
                break;
              case "details":
                B("toggle", e), i = r;
                break;
              case "input":
                ku(e, r), i = zo(e, r), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = G({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                Cu(e, r), i = $o(e, r), B("invalid", e);
                break;
              default:
                i = r;
            }
            Ho(n, i), l = i;
            for (s in l) if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "style" ? gd(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && hd(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Vr(e, a) : typeof a == "number" && Vr(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (jr.hasOwnProperty(s) ? a != null && s === "onScroll" && B("scroll", e) : a != null && Ql(e, s, a, o));
            }
            switch (n) {
              case "input":
                pi(e), Tu(e, r, !1);
                break;
              case "textarea":
                pi(e), Pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Mn(e, !!r.multiple, s, !1) : r.defaultValue != null && Mn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ts);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) zp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (n = Zt(Wr.current), Zt(et.current), ki(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[qe] = t, (s = r.nodeValue !== n) && (e = De, e !== null)) switch (e.tag) {
            case 3:
              Si(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Si(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qe] = t, t.stateNode = r;
      }
      return de(t), null;
    case 13:
      if (U(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && Ae !== null && t.mode & 1 && !(t.flags & 128)) rp(), On(), t.flags |= 98560, s = !1;
        else if (s = ki(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(P(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(P(317));
            s[qe] = t;
          } else On(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          de(t), s = !1;
        } else Ge !== null && (Pl(Ge), Ge = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? te === 0 && (te = 3) : Ma())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
    case 4:
      return Bn(), yl(e, t), e === null && zr(t.stateNode.containerInfo), de(t), null;
    case 10:
      return pa(t.type._context), de(t), null;
    case 17:
      return Te(t.type) && ns(), de(t), null;
    case 19:
      if (U(H), s = t.memoizedState, s === null) return de(t), null;
      if (r = (t.flags & 128) !== 0, o = s.rendering, o === null) if (r) or(s, !1);
      else {
        if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = us(e), o !== null) {
            for (t.flags |= 128, or(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return O(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && Z() > $n && (t.flags |= 128, r = !0, or(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = us(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), or(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !$) return de(t), null;
        } else 2 * Z() - s.renderingStartTime > $n && n !== 1073741824 && (t.flags |= 128, r = !0, or(s, !1), t.lanes = 4194304);
        s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Z(), t.sibling = null, n = H.current, O(H, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
    case 22:
    case 23:
      return Ra(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ee & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function Ky(e, t) {
  switch (ua(t), t.tag) {
    case 1:
      return Te(t.type) && ns(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Bn(), U(ke), U(me), va(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ya(t), null;
    case 13:
      if (U(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(P(340));
        On();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U(H), null;
    case 4:
      return Bn(), null;
    case 10:
      return pa(t.type._context), null;
    case 22:
    case 23:
      return Ra(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pi = !1, he = !1, Gy = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function Tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function vl(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var hc = !1;
function by(e, t) {
  if (tl = qi, e = Hd(), la(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, l = -1, a = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (l = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (a = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (g = f.firstChild) !== null; )
            d = f, f = g;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++u === i && (l = o), d === s && ++c === r && (a = o), (g = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = g;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (nl = { focusedElem: e, selectionRange: n }, qi = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
  else for (; R !== null; ) {
    t = R;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, T = y.memoizedState, m = t.stateNode, p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : He(t.type, v), T);
            m.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(P(163));
      }
    } catch (x) {
      Q(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return y = hc, hc = !1, y;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && vl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ls(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Bp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Bp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qe], delete t[Ur], delete t[sl], delete t[Ry], delete t[My])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Up(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Up(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function wl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ts));
  else if (r !== 4 && (e = e.child, e !== null)) for (wl(e, t, n), e = e.sibling; e !== null; ) wl(e, t, n), e = e.sibling;
}
function Sl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Sl(e, t, n), e = e.sibling; e !== null; ) Sl(e, t, n), e = e.sibling;
}
var oe = null, Ke = !1;
function vt(e, t, n) {
  for (n = n.child; n !== null; ) $p(e, t, n), n = n.sibling;
}
function $p(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(Ps, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      he || Tn(n, t);
    case 6:
      var r = oe, i = Ke;
      oe = null, vt(e, t, n), oe = r, Ke = i, oe !== null && (Ke ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null && (Ke ? (e = oe, n = n.stateNode, e.nodeType === 8 ? co(e.parentNode, n) : e.nodeType === 1 && co(e, n), Fr(e)) : co(oe, n.stateNode));
      break;
    case 4:
      r = oe, i = Ke, oe = n.stateNode.containerInfo, Ke = !0, vt(e, t, n), oe = r, Ke = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && vl(n, t, o), i = i.next;
        } while (i !== r);
      }
      vt(e, t, n);
      break;
    case 1:
      if (!he && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        Q(n, t, l);
      }
      vt(e, t, n);
      break;
    case 21:
      vt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, vt(e, t, n), he = r) : vt(e, t, n);
      break;
    default:
      vt(e, t, n);
  }
}
function gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gy()), t.forEach(function(r) {
      var i = nv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function $e(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var s = e, o = t, l = o;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            oe = l.stateNode, Ke = !1;
            break e;
          case 3:
            oe = l.stateNode.containerInfo, Ke = !0;
            break e;
          case 4:
            oe = l.stateNode.containerInfo, Ke = !0;
            break e;
        }
        l = l.return;
      }
      if (oe === null) throw Error(P(160));
      $p(s, o, i), oe = null, Ke = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (u) {
      Q(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wp(t, e), t = t.sibling;
}
function Wp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ($e(t, e), Ye(e), r & 4) {
        try {
          Tr(3, e, e.return), Ls(3, e);
        } catch (v) {
          Q(e, e.return, v);
        }
        try {
          Tr(5, e, e.return);
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      break;
    case 1:
      $e(t, e), Ye(e), r & 512 && n !== null && Tn(n, n.return);
      break;
    case 5:
      if ($e(t, e), Ye(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Vr(i, "");
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && s.type === "radio" && s.name != null && fd(i, s), Ko(l, o);
          var u = Ko(l, s);
          for (o = 0; o < a.length; o += 2) {
            var c = a[o], f = a[o + 1];
            c === "style" ? gd(i, f) : c === "dangerouslySetInnerHTML" ? hd(i, f) : c === "children" ? Vr(i, f) : Ql(i, c, f, u);
          }
          switch (l) {
            case "input":
              Bo(i, s);
              break;
            case "textarea":
              dd(i, s);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? Mn(i, !!s.multiple, g, !1) : d !== !!s.multiple && (s.defaultValue != null ? Mn(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Mn(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[Ur] = s;
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      break;
    case 6:
      if ($e(t, e), Ye(e), r & 4) {
        if (e.stateNode === null) throw Error(P(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (v) {
          Q(e, e.return, v);
        }
      }
      break;
    case 3:
      if ($e(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Fr(t.containerInfo);
      } catch (v) {
        Q(e, e.return, v);
      }
      break;
    case 4:
      $e(t, e), Ye(e);
      break;
    case 13:
      $e(t, e), Ye(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Aa = Z())), r & 4 && gc(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (u = he) || c, $e(t, e), he = u) : $e(t, e), Ye(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (R = e, c = e.child; c !== null; ) {
          for (f = R = c; R !== null; ) {
            switch (d = R, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Tr(4, d, d.return);
                break;
              case 1:
                Tn(d, d.return);
                var y = d.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    Q(r, n, v);
                  }
                }
                break;
              case 5:
                Tn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  vc(f);
                  continue;
                }
            }
            g !== null ? (g.return = d, R = g) : vc(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = md("display", o));
              } catch (v) {
                Q(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (v) {
              Q(e, e.return, v);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), f = f.return;
          }
          c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      $e(t, e), Ye(e), r & 4 && gc(e);
      break;
    case 21:
      break;
    default:
      $e(
        t,
        e
      ), Ye(e);
  }
}
function Ye(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Up(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Vr(i, ""), r.flags &= -33);
          var s = mc(e);
          Sl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, l = mc(e);
          wl(e, l, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (a) {
      Q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qy(e, t, n) {
  R = e, Hp(e);
}
function Hp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R, s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Pi;
      if (!o) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || he;
        l = Pi;
        var u = he;
        if (Pi = o, (he = a) && !u) for (R = i; R !== null; ) o = R, a = o.child, o.tag === 22 && o.memoizedState !== null ? xc(i) : a !== null ? (a.return = o, R = a) : xc(i);
        for (; s !== null; ) R = s, Hp(s), s = s.sibling;
        R = i, Pi = l, he = u;
      }
      yc(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, R = s) : yc(e);
  }
}
function yc(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            he || Ls(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !he) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : He(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && tc(t, s, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              tc(t, o, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var f = c.dehydrated;
                  f !== null && Fr(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(P(163));
        }
        he || t.flags & 512 && xl(t);
      } catch (d) {
        Q(t, t.return, d);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function vc(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, R = n;
      break;
    }
    R = t.return;
  }
}
function xc(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ls(4, t);
          } catch (a) {
            Q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Q(t, i, a);
            }
          }
          var s = t.return;
          try {
            xl(t);
          } catch (a) {
            Q(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            xl(t);
          } catch (a) {
            Q(t, o, a);
          }
      }
    } catch (a) {
      Q(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, R = l;
      break;
    }
    R = t.return;
  }
}
var Xy = Math.ceil, ds = gt.ReactCurrentDispatcher, Pa = gt.ReactCurrentOwner, ze = gt.ReactCurrentBatchConfig, F = 0, se = null, q = null, ue = 0, Ee = 0, Cn = Ot(0), te = 0, br = null, on = 0, Ns = 0, Ea = 0, Cr = null, we = null, Aa = 0, $n = 1 / 0, rt = null, ps = !1, kl = null, jt = null, Ei = !1, Pt = null, hs = 0, Pr = 0, Tl = null, Ui = -1, $i = 0;
function ye() {
  return F & 6 ? Z() : Ui !== -1 ? Ui : Ui = Z();
}
function Vt(e) {
  return e.mode & 1 ? F & 2 && ue !== 0 ? ue & -ue : Vy.transition !== null ? ($i === 0 && ($i = Dd()), $i) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : _d(e.type)), e) : 1;
}
function Qe(e, t, n, r) {
  if (50 < Pr) throw Pr = 0, Tl = null, Error(P(185));
  ei(e, n, r), (!(F & 2) || e !== se) && (e === se && (!(F & 2) && (Ns |= n), te === 4 && Tt(e, ue)), Ce(e, r), n === 1 && F === 0 && !(t.mode & 1) && ($n = Z() + 500, Ms && zt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  Vg(e, t);
  var r = Zi(e, e === se ? ue : 0);
  if (r === 0) n !== null && Du(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Du(n), t === 1) e.tag === 0 ? jy(wc.bind(null, e)) : ep(wc.bind(null, e)), Ay(function() {
      !(F & 6) && zt();
    }), n = null;
    else {
      switch (Rd(r)) {
        case 1:
          n = Jl;
          break;
        case 4:
          n = Ed;
          break;
        case 16:
          n = Yi;
          break;
        case 536870912:
          n = Ad;
          break;
        default:
          n = Yi;
      }
      n = qp(n, Kp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Kp(e, t) {
  if (Ui = -1, $i = 0, F & 6) throw Error(P(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n) return null;
  var r = Zi(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ms(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var s = bp();
    (se !== e || ue !== t) && (rt = null, $n = Z() + 500, Jt(e, t));
    do
      try {
        qy();
        break;
      } catch (l) {
        Gp(e, l);
      }
    while (!0);
    da(), ds.current = s, F = i, q !== null ? t = 0 : (se = null, ue = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (i = Yo(e), i !== 0 && (r = i, t = Cl(e, i))), t === 1) throw n = br, Jt(e, 0), Tt(e, r), Ce(e, Z()), n;
    if (t === 6) Tt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Yy(i) && (t = ms(e, r), t === 2 && (s = Yo(e), s !== 0 && (r = s, t = Cl(e, s))), t === 1)) throw n = br, Jt(e, 0), Tt(e, r), Ce(e, Z()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Gt(e, we, rt);
          break;
        case 3:
          if (Tt(e, r), (r & 130023424) === r && (t = Aa + 500 - Z(), 10 < t)) {
            if (Zi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = il(Gt.bind(null, e, we, rt), t);
            break;
          }
          Gt(e, we, rt);
          break;
        case 4:
          if (Tt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - be(r);
            s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
          }
          if (r = i, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Xy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = il(Gt.bind(null, e, we, rt), r);
            break;
          }
          Gt(e, we, rt);
          break;
        case 5:
          Gt(e, we, rt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Ce(e, Z()), e.callbackNode === n ? Kp.bind(null, e) : null;
}
function Cl(e, t) {
  var n = Cr;
  return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256), e = ms(e, t), e !== 2 && (t = we, we = n, t !== null && Pl(t)), e;
}
function Pl(e) {
  we === null ? we = e : we.push.apply(we, e);
}
function Yy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], s = i.getSnapshot;
        i = i.value;
        try {
          if (!Xe(s(), i)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Tt(e, t) {
  for (t &= ~Ea, t &= ~Ns, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - be(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function wc(e) {
  if (F & 6) throw Error(P(327));
  _n();
  var t = Zi(e, 0);
  if (!(t & 1)) return Ce(e, Z()), null;
  var n = ms(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yo(e);
    r !== 0 && (t = r, n = Cl(e, r));
  }
  if (n === 1) throw n = br, Jt(e, 0), Tt(e, t), Ce(e, Z()), n;
  if (n === 6) throw Error(P(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, we, rt), Ce(e, Z()), null;
}
function Da(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && ($n = Z() + 500, Ms && zt());
  }
}
function ln(e) {
  Pt !== null && Pt.tag === 0 && !(F & 6) && _n();
  var t = F;
  F |= 1;
  var n = ze.transition, r = I;
  try {
    if (ze.transition = null, I = 1, e) return e();
  } finally {
    I = r, ze.transition = n, F = t, !(F & 6) && zt();
  }
}
function Ra() {
  Ee = Cn.current, U(Cn);
}
function Jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ey(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (ua(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ns();
        break;
      case 3:
        Bn(), U(ke), U(me), va();
        break;
      case 5:
        ya(r);
        break;
      case 4:
        Bn();
        break;
      case 13:
        U(H);
        break;
      case 19:
        U(H);
        break;
      case 10:
        pa(r.type._context);
        break;
      case 22:
      case 23:
        Ra();
    }
    n = n.return;
  }
  if (se = e, q = e = Lt(e.current, null), ue = Ee = t, te = 0, br = null, Ea = Ns = on = 0, we = Cr = null, Yt !== null) {
    for (t = 0; t < Yt.length; t++) if (n = Yt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, s = n.pending;
      if (s !== null) {
        var o = s.next;
        s.next = i, r.next = o;
      }
      n.pending = r;
    }
    Yt = null;
  }
  return e;
}
function Gp(e, t) {
  do {
    var n = q;
    try {
      if (da(), Oi.current = fs, cs) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        cs = !1;
      }
      if (sn = 0, ie = ee = K = null, kr = !1, Hr = 0, Pa.current = null, n === null || n.return === null) {
        te = 1, br = t, q = null;
        break;
      }
      e: {
        var s = e, o = n.return, l = n, a = t;
        if (t = ue, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = lc(o);
          if (g !== null) {
            g.flags &= -257, ac(g, o, l, s, t), g.mode & 1 && oc(s, u, t), t = g, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              oc(s, u, t), Ma();
              break e;
            }
            a = Error(P(426));
          }
        } else if ($ && l.mode & 1) {
          var T = lc(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), ac(T, o, l, s, t), ca(Un(a, l));
            break e;
          }
        }
        s = a = Un(a, l), te !== 4 && (te = 2), Cr === null ? Cr = [s] : Cr.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var m = Rp(s, a, t);
              ec(s, m);
              break e;
            case 1:
              l = a;
              var p = s.type, h = s.stateNode;
              if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (jt === null || !jt.has(h)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var x = Mp(s, l, t);
                ec(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Xp(n);
    } catch (w) {
      t = w, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function bp() {
  var e = ds.current;
  return ds.current = fs, e === null ? fs : e;
}
function Ma() {
  (te === 0 || te === 3 || te === 2) && (te = 4), se === null || !(on & 268435455) && !(Ns & 268435455) || Tt(se, ue);
}
function ms(e, t) {
  var n = F;
  F |= 2;
  var r = bp();
  (se !== e || ue !== t) && (rt = null, Jt(e, t));
  do
    try {
      Zy();
      break;
    } catch (i) {
      Gp(e, i);
    }
  while (!0);
  if (da(), F = n, ds.current = r, q !== null) throw Error(P(261));
  return se = null, ue = 0, te;
}
function Zy() {
  for (; q !== null; ) Qp(q);
}
function qy() {
  for (; q !== null && !Tg(); ) Qp(q);
}
function Qp(e) {
  var t = Zp(e.alternate, e, Ee);
  e.memoizedProps = e.pendingProps, t === null ? Xp(e) : q = t, Pa.current = null;
}
function Xp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ky(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, q = null;
        return;
      }
    } else if (n = Hy(n, t, Ee), n !== null) {
      q = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Gt(e, t, n) {
  var r = I, i = ze.transition;
  try {
    ze.transition = null, I = 1, Jy(e, t, n, r);
  } finally {
    ze.transition = i, I = r;
  }
  return null;
}
function Jy(e, t, n, r) {
  do
    _n();
  while (Pt !== null);
  if (F & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(P(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (Lg(e, s), e === se && (q = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ei || (Ei = !0, qp(Yi, function() {
    return _n(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ze.transition, ze.transition = null;
    var o = I;
    I = 1;
    var l = F;
    F |= 4, Pa.current = null, by(e, n), Wp(n, e), xy(nl), qi = !!tl, nl = tl = null, e.current = n, Qy(n), Cg(), F = l, I = o, ze.transition = s;
  } else e.current = n;
  if (Ei && (Ei = !1, Pt = e, hs = i), s = e.pendingLanes, s === 0 && (jt = null), Ag(n.stateNode), Ce(e, Z()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ps) throw ps = !1, e = kl, kl = null, e;
  return hs & 1 && e.tag !== 0 && _n(), s = e.pendingLanes, s & 1 ? e === Tl ? Pr++ : (Pr = 0, Tl = e) : Pr = 0, zt(), null;
}
function _n() {
  if (Pt !== null) {
    var e = Rd(hs), t = ze.transition, n = I;
    try {
      if (ze.transition = null, I = 16 > e ? 16 : e, Pt === null) var r = !1;
      else {
        if (e = Pt, Pt = null, hs = 0, F & 6) throw Error(P(331));
        var i = F;
        for (F |= 4, R = e.current; R !== null; ) {
          var s = R, o = s.child;
          if (R.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, R = f;
                  else for (; R !== null; ) {
                    c = R;
                    var d = c.sibling, g = c.return;
                    if (Bp(c), c === u) {
                      R = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = g, R = d;
                      break;
                    }
                    R = g;
                  }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var T = v.sibling;
                    v.sibling = null, v = T;
                  } while (v !== null);
                }
              }
              R = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) o.return = s, R = o;
          else e: for (; R !== null; ) {
            if (s = R, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Tr(9, s, s.return);
            }
            var m = s.sibling;
            if (m !== null) {
              m.return = s.return, R = m;
              break e;
            }
            R = s.return;
          }
        }
        var p = e.current;
        for (R = p; R !== null; ) {
          o = R;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) h.return = o, R = h;
          else e: for (o = p; R !== null; ) {
            if (l = R, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ls(9, l);
              }
            } catch (w) {
              Q(l, l.return, w);
            }
            if (l === o) {
              R = null;
              break e;
            }
            var x = l.sibling;
            if (x !== null) {
              x.return = l.return, R = x;
              break e;
            }
            R = l.return;
          }
        }
        if (F = i, zt(), Je && typeof Je.onPostCommitFiberRoot == "function") try {
          Je.onPostCommitFiberRoot(Ps, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = n, ze.transition = t;
    }
  }
  return !1;
}
function Sc(e, t, n) {
  t = Un(n, t), t = Rp(e, t, 1), e = Mt(e, t, 1), t = ye(), e !== null && (ei(e, 1, t), Ce(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Sc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (jt === null || !jt.has(r))) {
        e = Un(n, e), e = Mp(t, e, 1), t = Mt(t, e, 1), e = ye(), t !== null && (ei(t, 1, e), Ce(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ev(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (te === 4 || te === 3 && (ue & 130023424) === ue && 500 > Z() - Aa ? Jt(e, 0) : Ea |= n), Ce(e, t);
}
function Yp(e, t) {
  t === 0 && (e.mode & 1 ? (t = gi, gi <<= 1, !(gi & 130023424) && (gi = 4194304)) : t = 1);
  var n = ye();
  e = dt(e, t), e !== null && (ei(e, t, n), Ce(e, n));
}
function tv(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Yp(e, n);
}
function nv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), Yp(e, n);
}
var Zp;
Zp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, Wy(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, $ && t.flags & 1048576 && tp(t, ss, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Bi(e, t), e = t.pendingProps;
      var i = In(t, me.current);
      Nn(t, n), i = wa(null, t, r, e, i, n);
      var s = Sa();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (s = !0, rs(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ma(t), i.updater = Vs, t.stateNode = i, i._reactInternals = t, fl(t, r, e, n), t = hl(null, t, r, !0, s, n)) : (t.tag = 0, $ && s && aa(t), ge(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Bi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = iv(r), e = He(r, e), i) {
          case 0:
            t = pl(null, t, r, e, n);
            break e;
          case 1:
            t = fc(null, t, r, e, n);
            break e;
          case 11:
            t = uc(null, t, r, e, n);
            break e;
          case 14:
            t = cc(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(P(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), pl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), fc(e, t, r, i, n);
    case 3:
      e: {
        if (Np(t), e === null) throw Error(P(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, lp(e, t), as(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = Un(Error(P(423)), t), t = dc(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Un(Error(P(424)), t), t = dc(e, t, r, n, i);
          break e;
        } else for (Ae = Rt(t.stateNode.containerInfo.firstChild), De = t, $ = !0, Ge = null, n = sp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (On(), r === i) {
            t = pt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ap(t), e === null && al(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, rl(r, i) ? o = null : s !== null && rl(r, s) && (t.flags |= 32), Lp(e, t), ge(e, t, o, n), t.child;
    case 6:
      return e === null && al(t), null;
    case 13:
      return _p(e, t, n);
    case 4:
      return ga(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zn(t, null, r, n) : ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), uc(e, t, r, i, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, O(os, r._currentValue), r._currentValue = o, s !== null) if (Xe(s.value, o)) {
          if (s.children === i.children && !ke.current) {
            t = pt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var l = s.dependencies;
          if (l !== null) {
            o = s.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (s.tag === 1) {
                  a = lt(-1, n & -n), a.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), ul(
                  s.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (o = s.return, o === null) throw Error(P(341));
            o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), ul(o, n, t), o = s.sibling;
          } else o = s.child;
          if (o !== null) o.return = s;
          else for (o = s; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (s = o.sibling, s !== null) {
              s.return = o.return, o = s;
              break;
            }
            o = o.return;
          }
          s = o;
        }
        ge(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, Nn(t, n), i = Be(i), r = r(i), t.flags |= 1, ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = He(r, t.pendingProps), i = He(r.type, i), cc(e, t, r, i, n);
    case 15:
      return jp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), Bi(e, t), t.tag = 1, Te(r) ? (e = !0, rs(t)) : e = !1, Nn(t, n), Dp(t, r, i), fl(t, r, i, n), hl(null, t, r, !0, e, n);
    case 19:
      return Fp(e, t, n);
    case 22:
      return Vp(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function qp(e, t) {
  return Pd(e, t);
}
function rv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Oe(e, t, n, r) {
  return new rv(e, t, n, r);
}
function ja(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function iv(e) {
  if (typeof e == "function") return ja(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Yl) return 11;
    if (e === Zl) return 14;
  }
  return 2;
}
function Lt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Oe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wi(e, t, n, r, i, s) {
  var o = 2;
  if (r = e, typeof e == "function") ja(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case hn:
      return en(n.children, i, s, t);
    case Xl:
      o = 8, i |= 8;
      break;
    case _o:
      return e = Oe(12, n, t, i | 2), e.elementType = _o, e.lanes = s, e;
    case Fo:
      return e = Oe(13, n, t, i), e.elementType = Fo, e.lanes = s, e;
    case Io:
      return e = Oe(19, n, t, i), e.elementType = Io, e.lanes = s, e;
    case ad:
      return _s(n, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case od:
          o = 10;
          break e;
        case ld:
          o = 9;
          break e;
        case Yl:
          o = 11;
          break e;
        case Zl:
          o = 14;
          break e;
        case wt:
          o = 16, r = null;
          break e;
      }
      throw Error(P(130, e == null ? e : typeof e, ""));
  }
  return t = Oe(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function en(e, t, n, r) {
  return e = Oe(7, e, r, t), e.lanes = n, e;
}
function _s(e, t, n, r) {
  return e = Oe(22, e, r, t), e.elementType = ad, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function xo(e, t, n) {
  return e = Oe(6, e, null, t), e.lanes = n, e;
}
function wo(e, t, n) {
  return t = Oe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function sv(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Js(0), this.expirationTimes = Js(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Js(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Va(e, t, n, r, i, s, o, l, a) {
  return e = new sv(e, t, n, l, a), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Oe(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ma(s), e;
}
function ov(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: pn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Jp(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (un(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Jd(e, n, t);
  }
  return t;
}
function eh(e, t, n, r, i, s, o, l, a) {
  return e = Va(n, r, !0, e, i, s, o, l, a), e.context = Jp(null), n = e.current, r = ye(), i = Vt(n), s = lt(r, i), s.callback = t ?? null, Mt(n, s, i), e.current.lanes = i, ei(e, i, r), Ce(e, r), e;
}
function Fs(e, t, n, r) {
  var i = t.current, s = ye(), o = Vt(i);
  return n = Jp(n), t.context === null ? t.context = n : t.pendingContext = n, t = lt(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Mt(i, t, o), e !== null && (Qe(e, i, o, s), Ii(e, i, o)), o;
}
function gs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function kc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function La(e, t) {
  kc(e, t), (e = e.alternate) && kc(e, t);
}
function lv() {
  return null;
}
var th = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Na(e) {
  this._internalRoot = e;
}
Is.prototype.render = Na.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Fs(e, t, null, null);
};
Is.prototype.unmount = Na.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function() {
      Fs(null, e, null, null);
    }), t[ft] = null;
  }
};
function Is(e) {
  this._internalRoot = e;
}
Is.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Vd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++) ;
    kt.splice(n, 0, e), n === 0 && Nd(e);
  }
};
function _a(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Os(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Tc() {
}
function av(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = gs(o);
        s.call(u);
      };
    }
    var o = eh(t, r, e, 0, null, !1, !1, "", Tc);
    return e._reactRootContainer = o, e[ft] = o.current, zr(e.nodeType === 8 ? e.parentNode : e), ln(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = gs(a);
      l.call(u);
    };
  }
  var a = Va(e, 0, !1, null, null, !1, !1, "", Tc);
  return e._reactRootContainer = a, e[ft] = a.current, zr(e.nodeType === 8 ? e.parentNode : e), ln(function() {
    Fs(t, a, n, r);
  }), a;
}
function zs(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var a = gs(o);
        l.call(a);
      };
    }
    Fs(t, o, e, i);
  } else o = av(n, t, e, i, r);
  return gs(o);
}
Md = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = dr(t.pendingLanes);
        n !== 0 && (ea(t, n | 1), Ce(t, Z()), !(F & 6) && ($n = Z() + 500, zt()));
      }
      break;
    case 13:
      ln(function() {
        var r = dt(e, 1);
        if (r !== null) {
          var i = ye();
          Qe(r, e, 1, i);
        }
      }), La(e, 1);
  }
};
ta = function(e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Qe(t, e, 134217728, n);
    }
    La(e, 134217728);
  }
};
jd = function(e) {
  if (e.tag === 13) {
    var t = Vt(e), n = dt(e, t);
    if (n !== null) {
      var r = ye();
      Qe(n, e, t, r);
    }
    La(e, t);
  }
};
Vd = function() {
  return I;
};
Ld = function(e, t) {
  var n = I;
  try {
    return I = e, t();
  } finally {
    I = n;
  }
};
bo = function(e, t, n) {
  switch (t) {
    case "input":
      if (Bo(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Rs(r);
            if (!i) throw Error(P(90));
            cd(r), Bo(r, i);
          }
        }
      }
      break;
    case "textarea":
      dd(e, n);
      break;
    case "select":
      t = n.value, t != null && Mn(e, !!n.multiple, t, !1);
  }
};
xd = Da;
wd = ln;
var uv = { usingClientEntryPoint: !1, Events: [ni, vn, Rs, yd, vd, Da] }, lr = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, cv = { bundleType: lr.bundleType, version: lr.version, rendererPackageName: lr.rendererPackageName, rendererConfig: lr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: gt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Td(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: lr.findFiberByHostInstance || lv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ai.isDisabled && Ai.supportsFiber) try {
    Ps = Ai.inject(cv), Je = Ai;
  } catch {
  }
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uv;
Ve.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_a(t)) throw Error(P(200));
  return ov(e, t, null, n);
};
Ve.createRoot = function(e, t) {
  if (!_a(e)) throw Error(P(299));
  var n = !1, r = "", i = th;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Va(e, 1, !1, null, null, n, !1, r, i), e[ft] = t.current, zr(e.nodeType === 8 ? e.parentNode : e), new Na(t);
};
Ve.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(P(188)) : (e = Object.keys(e).join(","), Error(P(268, e)));
  return e = Td(t), e = e === null ? null : e.stateNode, e;
};
Ve.flushSync = function(e) {
  return ln(e);
};
Ve.hydrate = function(e, t, n) {
  if (!Os(t)) throw Error(P(200));
  return zs(null, e, t, !0, n);
};
Ve.hydrateRoot = function(e, t, n) {
  if (!_a(e)) throw Error(P(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", o = th;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = eh(t, null, e, 1, n ?? null, i, !1, s, o), e[ft] = t.current, zr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new Is(t);
};
Ve.render = function(e, t, n) {
  if (!Os(t)) throw Error(P(200));
  return zs(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function(e) {
  if (!Os(e)) throw Error(P(40));
  return e._reactRootContainer ? (ln(function() {
    zs(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ft] = null;
    });
  }), !0) : !1;
};
Ve.unstable_batchedUpdates = Da;
Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Os(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return zs(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function nh() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nh);
    } catch (e) {
      console.error(e);
    }
}
nh(), nd.exports = Ve;
var fv = nd.exports, rh, Cc = fv;
rh = Cc.createRoot, Cc.hydrateRoot;
const dv = '.jwf{--tm-bg: #000000;--tm-surface: #0d0d0d;--tm-fg: #ffffff;--tm-dim: #8a8a8a;--tm-faint: #4a4a4a;--tm-border: #262626;--tm-accent: #ffffff;--tm-accent-fg: #000000;--tm-radius: 14px;--tm-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--tm-font-digit: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--jwf-tabbar-height: 44px;position:relative;display:flex;flex-direction:column;height:100%;min-height:320px;background:var(--tm-bg);color:var(--tm-fg);font-family:var(--tm-font);margin:-1px;border-radius:inherit}.jwf *,.jwf *:before,.jwf *:after{box-sizing:border-box}:where(.jwf button){font-family:inherit;cursor:pointer;border:none;background:none;color:inherit;padding:0;outline:none}:where(.jwf input){font-family:inherit;outline:none}.jwf-tabs{display:flex;align-items:stretch;gap:22px;height:var(--jwf-tabbar-height);padding:0 22px;border-bottom:1px solid var(--tm-border);user-select:none;flex:none}.jwf-tab{position:relative;display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:var(--tm-faint);transition:color .18s ease}.jwf-tab:hover{color:var(--tm-dim)}.jwf-tab[data-active=true]{color:var(--tm-fg)}.jwf-tab[data-active=true]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--tm-accent)}.jwf-tab-dot{width:5px;height:5px;border-radius:999px;background:currentColor;animation:jwf-pulse 2.4s ease-in-out infinite}@keyframes jwf-pulse{0%,to{opacity:1}50%{opacity:.25}}.tm-tab{position:static;flex:1;display:flex;flex-direction:column;align-items:center;gap:28px;padding:34px 32px 30px}.tm-clock{position:absolute;top:calc(var(--jwf-tabbar-height) + 14px);left:18px;font-size:15px;font-weight:300;letter-spacing:-.01em;color:var(--tm-dim);transition:opacity .35s ease;user-select:none}.tm-clock[data-dimmed=true]{opacity:.15}.tm-digits{font-family:var(--tm-font-digit);font-size:72px;line-height:1;font-variant-numeric:tabular-nums;letter-spacing:-.02em;user-select:none;transition:color .5s ease}.tm-digits[data-state=idle]{color:var(--tm-dim)}.tm-digits[data-state=finished]{color:var(--tm-faint)}.tm-label{font-size:11px;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:var(--tm-dim)}.tm-presets{display:flex;flex-wrap:wrap;justify-content:center;gap:7px}.tm-preset{border-radius:999px;padding:7px 15px;font-size:13px;font-weight:500;background:var(--tm-surface);color:var(--tm-dim);border:1px solid var(--tm-border);transition:all .18s ease}.tm-preset:hover{color:var(--tm-fg)}.tm-preset[data-selected=true]{background:var(--tm-accent);color:var(--tm-accent-fg);border-color:var(--tm-accent)}.tm-custom{width:108px;border-radius:10px;border:1px solid var(--tm-border);background:var(--tm-surface);color:var(--tm-fg);padding:8px 12px;text-align:center;font-size:13px}.tm-custom::placeholder{color:var(--tm-faint)}.tm-row{display:flex;align-items:center;gap:10px}.tm-primary{border-radius:999px;padding:11px 34px;font-size:14px;font-weight:500;background:var(--tm-accent);color:var(--tm-accent-fg);transition:opacity .18s ease,transform .12s ease}.tm-primary:hover{opacity:.88}.tm-primary:active{transform:scale(.97)}.tm-circle{width:46px;height:46px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:var(--tm-surface);border:1px solid var(--tm-border);color:var(--tm-fg);transition:background .18s ease,transform .12s ease}.tm-circle:hover{background:var(--tm-border)}.tm-circle:active{transform:scale(.95)}.tm-ghost{font-size:12px;color:var(--tm-dim);transition:color .18s ease}.tm-ghost:hover{color:var(--tm-fg)}.tm-reminders{width:100%;max-width:330px}.tm-reminders-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.tm-reminder{display:flex;align-items:center;justify-content:space-between;padding:10px 13px;border-radius:var(--tm-radius);background:var(--tm-surface);border:1px solid var(--tm-border);margin-bottom:6px}.tm-reminder-label{font-size:13px;color:var(--tm-fg)}.tm-reminder-sub{font-size:11px;color:var(--tm-dim)}.tm-add{display:flex;flex-direction:column;gap:8px;padding:13px;border-radius:var(--tm-radius);background:var(--tm-surface);border:1px solid var(--tm-border);margin-bottom:8px}.tm-add input{border-radius:9px;border:1px solid var(--tm-border);background:var(--tm-bg);color:var(--tm-fg);padding:7px 10px;font-size:13px}.tm-chip{font-size:11px;color:var(--tm-dim);background:var(--tm-surface);border:1px solid var(--tm-border);border-radius:999px;padding:4px 11px}.tm-alert{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;background:color-mix(in srgb,var(--tm-bg) 88%,transparent);backdrop-filter:blur(6px);border-radius:inherit}.tm-alert-card{display:flex;flex-direction:column;align-items:center;gap:18px;padding:32px 36px;border-radius:22px;background:var(--tm-surface);border:1px solid var(--tm-border);max-width:300px;text-align:center}.tm-alert-icon{width:56px;height:56px;border-radius:999px;background:var(--tm-accent);color:var(--tm-accent-fg);display:flex;align-items:center;justify-content:center;font-size:26px}.tm-footer{display:flex;align-items:center;justify-content:center;gap:8px;padding-top:2px}.tm-toggle{display:inline-flex;align-items:center;gap:7px;font-size:11px;color:var(--tm-faint);transition:color .18s ease}.tm-toggle:hover{color:var(--tm-dim)}.tm-toggle-dot{width:7px;height:7px;border-radius:999px;border:1px solid currentColor}.tm-toggle[data-on=true] .tm-toggle-dot{background:currentColor}.jwf-tasks{flex:1;display:flex;flex-direction:column;padding:12px 22px 16px;min-height:0}.jwf-subtabs{display:flex;gap:16px;padding-bottom:8px;border-bottom:1px solid var(--tm-border);user-select:none;flex:none}.jwf-subtab{font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:var(--tm-faint);transition:color .18s ease}.jwf-subtab:hover{color:var(--tm-dim)}.jwf-subtab[data-active=true]{color:var(--tm-fg)}.jwf-filters{display:flex;gap:6px;padding:10px 0 6px;flex:none}.jwf-filter{border-radius:999px;border:1px solid var(--tm-border);background:var(--tm-surface);color:var(--tm-dim);padding:4px 12px;font-size:11px;transition:all .18s ease}.jwf-filter:hover{color:var(--tm-fg)}.jwf-filter[data-active=true]{background:var(--tm-accent);border-color:var(--tm-accent);color:var(--tm-accent-fg)}.jwf-task-list{flex:1;overflow-y:auto;min-height:0;padding-right:4px}.jwf-task{display:flex;align-items:baseline;gap:11px;width:100%;text-align:left;padding:7px 6px;margin-left:-6px;border-radius:8px;font-size:14px;line-height:1.45;user-select:none;transition:background .15s ease}.jwf-task:hover{background:var(--tm-surface)}.jwf-task-text{color:var(--tm-fg);overflow-wrap:anywhere;transition:color .2s ease}.jwf-task-text[data-done=true]{color:var(--tm-faint);text-decoration:line-through;text-decoration-color:var(--tm-faint)}.jwf-task-date{margin-left:auto;flex:none;font-size:11px;font-family:var(--tm-font-digit);color:var(--tm-faint);user-select:none}.jwf-done-empty{font-size:12px;color:var(--tm-faint);text-align:center;padding:14px 0}.jwf-task-input-row{flex:none;padding-top:12px}.jwf-task-input{width:100%;border:none;border-top:1px solid var(--tm-border);background:transparent;color:var(--tm-fg);padding:10px 2px 2px;font-size:14px}.jwf-task-input::placeholder{color:var(--tm-faint)}', Pc = "jwf-styles";
function pv() {
  if (document.getElementById(Pc)) return;
  const e = document.createElement("style");
  e.id = Pc, e.textContent = dv, document.head.append(e);
}
const hv = [
  ["--tm-bg", "--theme-canvas"],
  ["--tm-surface", "--theme-surface"],
  ["--tm-fg", "--theme-ink"],
  ["--tm-dim", "--theme-ink-dim"],
  ["--tm-faint", "--theme-muted"],
  ["--tm-border", "--theme-border"],
  ["--tm-accent", "--theme-accent"],
  ["--tm-accent-fg", "--theme-accent-fg"]
], mv = [
  ["--tm-font-digit", "--theme-font-code"]
];
function gv(e, t) {
  const n = getComputedStyle(document.documentElement);
  for (const [r, i] of [...hv, ...mv]) {
    if (!t) {
      e.style.removeProperty(r);
      continue;
    }
    const s = n.getPropertyValue(i).trim();
    s && e.style.setProperty(r, s);
  }
}
function yv(e) {
  const t = new MutationObserver(e);
  return t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["data-mode", "data-contrast", "style", "class"]
  }), () => t.disconnect();
}
function vv({
  activeTab: e,
  timerRunning: t,
  onSelect: n
}) {
  return /* @__PURE__ */ S.jsxs("nav", { className: "jwf-tabs", role: "tablist", "aria-label": "Workspace lanes", children: [
    /* @__PURE__ */ S.jsxs(
      "button",
      {
        type: "button",
        className: "jwf-tab",
        role: "tab",
        "aria-selected": e === "timer",
        "data-active": e === "timer",
        onClick: () => n("timer"),
        children: [
          "Timer",
          t && e !== "timer" ? /* @__PURE__ */ S.jsx("span", { className: "jwf-tab-dot" }) : null
        ]
      }
    ),
    /* @__PURE__ */ S.jsx(
      "button",
      {
        type: "button",
        className: "jwf-tab",
        role: "tab",
        "aria-selected": e === "tasks",
        "data-active": e === "tasks",
        onClick: () => n("tasks"),
        children: "Tasks"
      }
    )
  ] });
}
const Fa = k.createContext({});
function cn(e) {
  const t = k.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Bs = k.createContext(null), Us = k.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class xv extends k.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function wv({ children: e, isPresent: t }) {
  const n = k.useId(), r = k.useRef(null), i = k.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = k.useContext(Us);
  return k.useInsertionEffect(() => {
    const { width: o, height: l, top: a, left: u } = i.current;
    if (t || !r.current || !o || !l)
      return;
    r.current.dataset.motionPopId = n;
    const c = document.createElement("style");
    return s && (c.nonce = s), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), S.jsx(xv, { isPresent: t, childRef: r, sizeRef: i, children: k.cloneElement(e, { ref: r }) });
}
const Sv = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o }) => {
  const l = cn(kv), a = k.useId(), u = k.useCallback((f) => {
    l.set(f, !0);
    for (const d of l.values())
      if (!d)
        return;
    r && r();
  }, [l, r]), c = k.useMemo(
    () => ({
      id: a,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: u,
      register: (f) => (l.set(f, !1), () => l.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random(), u] : [n, u]
  );
  return k.useMemo(() => {
    l.forEach((f, d) => l.set(d, !1));
  }, [n]), k.useEffect(() => {
    !n && !l.size && r && r();
  }, [n]), o === "popLayout" && (e = S.jsx(wv, { isPresent: n, children: e })), S.jsx(Bs.Provider, { value: c, children: e });
};
function kv() {
  return /* @__PURE__ */ new Map();
}
function ih(e = !0) {
  const t = k.useContext(Bs);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, s = k.useId();
  k.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = k.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Di = (e) => e.key || "";
function Ec(e) {
  const t = [];
  return k.Children.forEach(e, (n) => {
    k.isValidElement(n) && t.push(n);
  }), t;
}
const Ia = typeof window < "u", Oa = Ia ? k.useLayoutEffect : k.useEffect, Qr = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: s = "sync", propagate: o = !1 }) => {
  const [l, a] = ih(o), u = k.useMemo(() => Ec(e), [e]), c = o && !l ? [] : u.map(Di), f = k.useRef(!0), d = k.useRef(u), g = cn(() => /* @__PURE__ */ new Map()), [y, v] = k.useState(u), [T, m] = k.useState(u);
  Oa(() => {
    f.current = !1, d.current = u;
    for (let x = 0; x < T.length; x++) {
      const w = Di(T[x]);
      c.includes(w) ? g.delete(w) : g.get(w) !== !0 && g.set(w, !1);
    }
  }, [T, c.length, c.join("-")]);
  const p = [];
  if (u !== y) {
    let x = [...u];
    for (let w = 0; w < T.length; w++) {
      const E = T[w], A = Di(E);
      c.includes(A) || (x.splice(w, 0, E), p.push(E));
    }
    s === "wait" && p.length && (x = p), m(Ec(x)), v(u);
    return;
  }
  const { forceRender: h } = k.useContext(Fa);
  return S.jsx(S.Fragment, { children: T.map((x) => {
    const w = Di(x), E = o && !l ? !1 : u === T || c.includes(w), A = () => {
      if (g.has(w))
        g.set(w, !0);
      else
        return;
      let C = !0;
      g.forEach((N) => {
        N || (C = !1);
      }), C && (h?.(), m(d.current), o && a?.(), r && r());
    };
    return S.jsx(Sv, { isPresent: E, initial: !f.current || n ? void 0 : !1, custom: E ? void 0 : t, presenceAffectsLayout: i, mode: s, onExitComplete: E ? void 0 : A, children: x }, w);
  }) });
}, Re = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let sh = Re;
// @__NO_SIDE_EFFECTS__
function za(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Wn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, at = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ut = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Tv = {
  useManualTiming: !1
};
function Cv(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    s.has(u) && (a.schedule(u), e()), u(o);
  }
  const a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return c && s.add(u), g.has(u) || g.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (o = u, r) {
        i = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(l), t.clear(), r = !1, i && (i = !1, a.process(u));
    }
  };
  return a;
}
const Ri = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Pv = 40;
function oh(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, o = Ri.reduce((m, p) => (m[p] = Cv(s), m), {}), { read: l, resolveKeyframes: a, update: u, preRender: c, render: f, postRender: d } = o, g = () => {
    const m = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, Pv), 1), i.timestamp = m, i.isProcessing = !0, l.process(i), a.process(i), u.process(i), c.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(g));
  }, y = () => {
    n = !0, r = !0, i.isProcessing || e(g);
  };
  return { schedule: Ri.reduce((m, p) => {
    const h = o[p];
    return m[p] = (x, w = !1, E = !1) => (n || y(), h.schedule(x, w, E)), m;
  }, {}), cancel: (m) => {
    for (let p = 0; p < Ri.length; p++)
      o[Ri[p]].cancel(m);
  }, state: i, steps: o };
}
const { schedule: z, cancel: ht, state: le, steps: So } = oh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Re, !0), lh = k.createContext({ strict: !1 }), Ac = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Hn = {};
for (const e in Ac)
  Hn[e] = {
    isEnabled: (t) => Ac[e].some((n) => !!t[n])
  };
function Ev(e) {
  for (const t in e)
    Hn[t] = {
      ...Hn[t],
      ...e[t]
    };
}
const Av = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ys(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Av.has(e);
}
let ah = (e) => !ys(e);
function Dv(e) {
  e && (ah = (t) => t.startsWith("on") ? !ys(t) : e(t));
}
try {
  Dv(require("@emotion/is-prop-valid").default);
} catch {
}
function Rv(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (ah(i) || n === !0 && ys(i) || !t && !ys(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
function Mv(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => e(...r);
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
  });
}
const $s = k.createContext({});
function Xr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ws(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ba = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Ua = ["initial", ...Ba];
function Hs(e) {
  return Ws(e.animate) || Ua.some((t) => Xr(e[t]));
}
function uh(e) {
  return !!(Hs(e) || e.variants);
}
function jv(e, t) {
  if (Hs(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Xr(n) ? n : void 0,
      animate: Xr(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Vv(e) {
  const { initial: t, animate: n } = jv(e, k.useContext($s));
  return k.useMemo(() => ({ initial: t, animate: n }), [Dc(t), Dc(n)]);
}
function Dc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Lv = Symbol.for("motionComponentSymbol");
function Pn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Nv(e, t, n) {
  return k.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Pn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const $a = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), _v = "framerAppearId", ch = "data-" + $a(_v), { schedule: Wa } = oh(queueMicrotask, !1), fh = k.createContext({});
function Fv(e, t, n, r, i) {
  var s, o;
  const { visualElement: l } = k.useContext($s), a = k.useContext(lh), u = k.useContext(Bs), c = k.useContext(Us).reducedMotion, f = k.useRef(null);
  r = r || a.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: l,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = f.current, g = k.useContext(fh);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && Iv(f.current, n, i, g);
  const y = k.useRef(!1);
  k.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const v = n[ch], T = k.useRef(!!v && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, v)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, v)));
  return Oa(() => {
    d && (y.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Wa.render(d.render), T.current && d.animationState && d.animationState.animateChanges());
  }), k.useEffect(() => {
    d && (!T.current && d.animationState && d.animationState.animateChanges(), T.current && (queueMicrotask(() => {
      var m;
      (m = window.MotionHandoffMarkAsComplete) === null || m === void 0 || m.call(window, v);
    }), T.current = !1));
  }), d;
}
function Iv(e, t, n, r) {
  const { layoutId: i, layout: s, drag: o, dragConstraints: l, layoutScroll: a, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : dh(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: s,
    alwaysMeasureLayout: !!o || l && Pn(l),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    layoutScroll: a,
    layoutRoot: u
  });
}
function dh(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : dh(e.parent);
}
function Ov({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  var s, o;
  e && Ev(e);
  function l(u, c) {
    let f;
    const d = {
      ...k.useContext(Us),
      ...u,
      layoutId: zv(u)
    }, { isStatic: g } = d, y = Vv(u), v = r(u, g);
    if (!g && Ia) {
      Bv();
      const T = Uv(d);
      f = T.MeasureLayout, y.visualElement = Fv(i, v, d, t, T.ProjectionNode);
    }
    return S.jsxs($s.Provider, { value: y, children: [f && y.visualElement ? S.jsx(f, { visualElement: y.visualElement, ...d }) : null, n(i, u, Nv(v, y.visualElement, c), v, g, y.visualElement)] });
  }
  l.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const a = k.forwardRef(l);
  return a[Lv] = i, a;
}
function zv({ layoutId: e }) {
  const t = k.useContext(Fa).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Bv(e, t) {
  k.useContext(lh).strict;
}
function Uv(e) {
  const { drag: t, layout: n } = Hn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const $v = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Ha(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!($v.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Rc(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Ka(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Rc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, s] = Rc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const El = (e) => Array.isArray(e), Wv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Hv = (e) => El(e) ? e[e.length - 1] || 0 : e, ae = (e) => !!(e && e.getVelocity);
function Hi(e) {
  const t = ae(e) ? e.get() : e;
  return Wv(t) ? t.toValue() : t;
}
function Kv({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, s) {
  const o = {
    latestValues: Gv(r, i, s, e),
    renderState: t()
  };
  return n && (o.onMount = (l) => n({ props: r, current: l, ...o }), o.onUpdate = (l) => n(l)), o;
}
const ph = (e) => (t, n) => {
  const r = k.useContext($s), i = k.useContext(Bs), s = () => Kv(e, t, r, i);
  return n ? s() : cn(s);
};
function Gv(e, t, n, r) {
  const i = {}, s = r(e, {});
  for (const d in s)
    i[d] = Hi(s[d]);
  let { initial: o, animate: l } = e;
  const a = Hs(e), u = uh(e);
  t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? l : o;
  if (f && typeof f != "boolean" && !Ws(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = Ka(e, d[g]);
      if (y) {
        const { transitionEnd: v, transition: T, ...m } = y;
        for (const p in m) {
          let h = m[p];
          if (Array.isArray(h)) {
            const x = c ? h.length - 1 : 0;
            h = h[x];
          }
          h !== null && (i[p] = h);
        }
        for (const p in v)
          i[p] = v[p];
      }
    }
  }
  return i;
}
const Yn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], fn = new Set(Yn), hh = (e) => (t) => typeof t == "string" && t.startsWith(e), mh = /* @__PURE__ */ hh("--"), bv = /* @__PURE__ */ hh("var(--"), Ga = (e) => bv(e) ? Qv.test(e.split("/*")[0].trim()) : !1, Qv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, gh = (e, t) => t && typeof e == "number" ? t.transform(e) : e, mt = (e, t, n) => n > t ? t : n < e ? e : n, Zn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Yr = {
  ...Zn,
  transform: (e) => mt(0, 1, e)
}, Mi = {
  ...Zn,
  default: 1
}, ii = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), xt = /* @__PURE__ */ ii("deg"), tt = /* @__PURE__ */ ii("%"), M = /* @__PURE__ */ ii("px"), Xv = /* @__PURE__ */ ii("vh"), Yv = /* @__PURE__ */ ii("vw"), Mc = {
  ...tt,
  parse: (e) => tt.parse(e) / 100,
  transform: (e) => tt.transform(e * 100)
}, Zv = {
  // Border props
  borderWidth: M,
  borderTopWidth: M,
  borderRightWidth: M,
  borderBottomWidth: M,
  borderLeftWidth: M,
  borderRadius: M,
  radius: M,
  borderTopLeftRadius: M,
  borderTopRightRadius: M,
  borderBottomRightRadius: M,
  borderBottomLeftRadius: M,
  // Positioning props
  width: M,
  maxWidth: M,
  height: M,
  maxHeight: M,
  top: M,
  right: M,
  bottom: M,
  left: M,
  // Spacing props
  padding: M,
  paddingTop: M,
  paddingRight: M,
  paddingBottom: M,
  paddingLeft: M,
  margin: M,
  marginTop: M,
  marginRight: M,
  marginBottom: M,
  marginLeft: M,
  // Misc
  backgroundPositionX: M,
  backgroundPositionY: M
}, qv = {
  rotate: xt,
  rotateX: xt,
  rotateY: xt,
  rotateZ: xt,
  scale: Mi,
  scaleX: Mi,
  scaleY: Mi,
  scaleZ: Mi,
  skew: xt,
  skewX: xt,
  skewY: xt,
  distance: M,
  translateX: M,
  translateY: M,
  translateZ: M,
  x: M,
  y: M,
  z: M,
  perspective: M,
  transformPerspective: M,
  opacity: Yr,
  originX: Mc,
  originY: Mc,
  originZ: M
}, jc = {
  ...Zn,
  transform: Math.round
}, ba = {
  ...Zv,
  ...qv,
  zIndex: jc,
  size: M,
  // SVG
  fillOpacity: Yr,
  strokeOpacity: Yr,
  numOctaves: jc
}, Jv = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, e0 = Yn.length;
function t0(e, t, n) {
  let r = "", i = !0;
  for (let s = 0; s < e0; s++) {
    const o = Yn[s], l = e[o];
    if (l === void 0)
      continue;
    let a = !0;
    if (typeof l == "number" ? a = l === (o.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0, !a || n) {
      const u = gh(l, ba[o]);
      if (!a) {
        i = !1;
        const c = Jv[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function Qa(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1, l = !1;
  for (const a in t) {
    const u = t[a];
    if (fn.has(a)) {
      o = !0;
      continue;
    } else if (mh(a)) {
      i[a] = u;
      continue;
    } else {
      const c = gh(u, ba[a]);
      a.startsWith("origin") ? (l = !0, s[a] = c) : r[a] = c;
    }
  }
  if (t.transform || (o || n ? r.transform = t0(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
const n0 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, r0 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function i0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? n0 : r0;
  e[s.offset] = M.transform(-r);
  const o = M.transform(t), l = M.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Vc(e, t, n) {
  return typeof e == "string" ? e : M.transform(t + n * e);
}
function s0(e, t, n) {
  const r = Vc(t, e.x, e.width), i = Vc(n, e.y, e.height);
  return `${r} ${i}`;
}
function Xa(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: s,
  pathLength: o,
  pathSpacing: l = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, f) {
  if (Qa(e, u, f), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform), y && (i !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = s0(y, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), o !== void 0 && i0(d, o, l, a, !1);
}
const Ya = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), yh = () => ({
  ...Ya(),
  attrs: {}
}), Za = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function vh(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const xh = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function wh(e, t, n, r) {
  vh(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(xh.has(i) ? i : $a(i), t.attrs[i]);
}
const vs = {};
function o0(e) {
  Object.assign(vs, e);
}
function Sh(e, { layout: t, layoutId: n }) {
  return fn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!vs[e] || e === "opacity");
}
function qa(e, t, n) {
  var r;
  const { style: i } = e, s = {};
  for (const o in i)
    (ae(i[o]) || t.style && ae(t.style[o]) || Sh(o, e) || ((r = n?.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
  return s;
}
function kh(e, t, n) {
  const r = qa(e, t, n);
  for (const i in e)
    if (ae(e[i]) || ae(t[i])) {
      const s = Yn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
function l0(e, t) {
  try {
    t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }
}
const Lc = ["x", "y", "width", "height", "cx", "cy", "r"], a0 = {
  useVisualState: ph({
    scrapeMotionValuesFromProps: kh,
    createRenderState: yh,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const l in i)
          if (fn.has(l)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let o = !t;
      if (t)
        for (let l = 0; l < Lc.length; l++) {
          const a = Lc[l];
          e[a] !== t[a] && (o = !0);
        }
      o && z.read(() => {
        l0(n, r), z.render(() => {
          Xa(r, i, Za(n.tagName), e.transformTemplate), wh(n, r);
        });
      });
    }
  })
}, u0 = {
  useVisualState: ph({
    scrapeMotionValuesFromProps: qa,
    createRenderState: Ya
  })
};
function Th(e, t, n) {
  for (const r in t)
    !ae(t[r]) && !Sh(r, n) && (e[r] = t[r]);
}
function c0({ transformTemplate: e }, t) {
  return k.useMemo(() => {
    const n = Ya();
    return Qa(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function f0(e, t) {
  const n = e.style || {}, r = {};
  return Th(r, n, e), Object.assign(r, c0(e, t)), r;
}
function d0(e, t) {
  const n = {}, r = f0(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function p0(e, t, n, r) {
  const i = k.useMemo(() => {
    const s = yh();
    return Xa(s, t, Za(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Th(s, e.style, e), i.style = { ...s, ...i.style };
  }
  return i;
}
function h0(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (Ha(n) ? p0 : d0)(r, s, o, n), u = Rv(r, typeof n == "string", e), c = n !== k.Fragment ? { ...u, ...a, ref: i } : {}, { children: f } = r, d = k.useMemo(() => ae(f) ? f.get() : f, [f]);
    return k.createElement(n, {
      ...c,
      children: d
    });
  };
}
function m0(e, t) {
  return function(r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...Ha(r) ? a0 : u0,
      preloadedFeatures: e,
      useRender: h0(i),
      createVisualElement: t,
      Component: r
    };
    return Ov(o);
  };
}
function Ch(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Ks(e, t, n) {
  const r = e.getProps();
  return Ka(r, t, n !== void 0 ? n : r.custom, e);
}
const g0 = /* @__PURE__ */ za(() => window.ScrollTimeline !== void 0);
class y0 {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((t) => "finished" in t ? t.finished : t));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (g0() && i.attachTimeline)
        return i.attachTimeline(t);
      if (typeof n == "function")
        return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class v0 extends y0 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Ja(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Al = 2e4;
function Ph(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Al; )
    t += n, r = e.next(t);
  return t >= Al ? 1 / 0 : t;
}
function eu(e) {
  return typeof e == "function";
}
function Nc(e, t) {
  e.timeline = t, e.onfinish = null;
}
const tu = (e) => Array.isArray(e) && typeof e[0] == "number", x0 = {
  linearEasing: void 0
};
function w0(e, t) {
  const n = /* @__PURE__ */ za(e);
  return () => {
    var r;
    return (r = x0[t]) !== null && r !== void 0 ? r : n();
  };
}
const xs = /* @__PURE__ */ w0(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Eh = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < i; s++)
    r += e(/* @__PURE__ */ Wn(0, i - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Ah(e) {
  return !!(typeof e == "function" && xs() || !e || typeof e == "string" && (e in Dl || xs()) || tu(e) || Array.isArray(e) && e.every(Ah));
}
const hr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Dl = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ hr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ hr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ hr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ hr([0.33, 1.53, 0.69, 0.99])
};
function Dh(e, t) {
  if (e)
    return typeof e == "function" && xs() ? Eh(e, t) : tu(e) ? hr(e) : Array.isArray(e) ? e.map((n) => Dh(n, t) || Dl.easeOut) : Dl[e];
}
const We = {
  x: !1,
  y: !1
};
function Rh() {
  return We.x || We.y;
}
function S0(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function Mh(e, t) {
  const n = S0(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function _c(e) {
  return (t) => {
    t.pointerType === "touch" || Rh() || e(t);
  };
}
function k0(e, t, n = {}) {
  const [r, i, s] = Mh(e, n), o = _c((l) => {
    const { target: a } = l, u = t(l);
    if (typeof u != "function" || !a)
      return;
    const c = _c((f) => {
      u(f), a.removeEventListener("pointerleave", c);
    });
    a.addEventListener("pointerleave", c, i);
  });
  return r.forEach((l) => {
    l.addEventListener("pointerenter", o, i);
  }), s;
}
const jh = (e, t) => t ? e === t ? !0 : jh(e, t.parentElement) : !1, nu = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, T0 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function C0(e) {
  return T0.has(e.tagName) || e.tabIndex !== -1;
}
const mr = /* @__PURE__ */ new WeakSet();
function Fc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function ko(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const P0 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Fc(() => {
    if (mr.has(n))
      return;
    ko(n, "down");
    const i = Fc(() => {
      ko(n, "up");
    }), s = () => ko(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ic(e) {
  return nu(e) && !Rh();
}
function E0(e, t, n = {}) {
  const [r, i, s] = Mh(e, n), o = (l) => {
    const a = l.currentTarget;
    if (!Ic(l) || mr.has(a))
      return;
    mr.add(a);
    const u = t(l), c = (g, y) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!Ic(g) || !mr.has(a)) && (mr.delete(a), typeof u == "function" && u(g, { success: y }));
    }, f = (g) => {
      c(g, n.useGlobalTarget || jh(a, g.target));
    }, d = (g) => {
      c(g, !1);
    };
    window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i);
  };
  return r.forEach((l) => {
    !C0(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0), (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i), l.addEventListener("focus", (u) => P0(u, i), i);
  }), s;
}
function A0(e) {
  return e === "x" || e === "y" ? We[e] ? null : (We[e] = !0, () => {
    We[e] = !1;
  }) : We.x || We.y ? null : (We.x = We.y = !0, () => {
    We.x = We.y = !1;
  });
}
const Vh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Yn
]);
let Ki;
function D0() {
  Ki = void 0;
}
const nt = {
  now: () => (Ki === void 0 && nt.set(le.isProcessing || Tv.useManualTiming ? le.timestamp : performance.now()), Ki),
  set: (e) => {
    Ki = e, queueMicrotask(D0);
  }
};
function ru(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function iu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function R0([...e], t, n) {
  const r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    const i = n < 0 ? e.length + n : n, [s] = e.splice(t, 1);
    e.splice(i, 0, s);
  }
  return e;
}
class su {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ru(this.subscriptions, t), () => iu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Lh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Oc = 30, M0 = (e) => !isNaN(parseFloat(e)), Er = {
  current: void 0
};
class j0 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      const s = nt.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = nt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = M0(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new su());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), z.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return Er.current && Er.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = nt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Oc)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Oc);
    return Lh(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Kn(e, t) {
  return new j0(e, t);
}
function V0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Kn(n));
}
function L0(e, t) {
  const n = Ks(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = Hv(s[o]);
    V0(e, o, l);
  }
}
function N0(e) {
  return !!(ae(e) && e.add);
}
function Rl(e, t) {
  const n = e.getValue("willChange");
  if (N0(n))
    return n.add(t);
}
function Nh(e) {
  return e.props[ch];
}
const _h = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, _0 = 1e-7, F0 = 12;
function I0(e, t, n, r, i) {
  let s, o, l = 0;
  do
    o = t + (n - t) / 2, s = _h(o, r, i) - e, s > 0 ? n = o : t = o;
  while (Math.abs(s) > _0 && ++l < F0);
  return o;
}
function si(e, t, n, r) {
  if (e === t && n === r)
    return Re;
  const i = (s) => I0(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : _h(i(s), t, r);
}
const Fh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Ih = (e) => (t) => 1 - e(1 - t), Oh = /* @__PURE__ */ si(0.33, 1.53, 0.69, 0.99), ou = /* @__PURE__ */ Ih(Oh), zh = /* @__PURE__ */ Fh(ou), Bh = (e) => (e *= 2) < 1 ? 0.5 * ou(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), lu = (e) => 1 - Math.sin(Math.acos(e)), Uh = Ih(lu), $h = Fh(lu), Wh = (e) => /^0[^.\s]+$/u.test(e);
function O0(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Wh(e) : !0;
}
const Ar = (e) => Math.round(e * 1e5) / 1e5, au = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function z0(e) {
  return e == null;
}
const B0 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, uu = (e, t) => (n) => !!(typeof n == "string" && B0.test(n) && n.startsWith(e) || t && !z0(n) && Object.prototype.hasOwnProperty.call(n, t)), Hh = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, s, o, l] = r.match(au);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, U0 = (e) => mt(0, 255, e), To = {
  ...Zn,
  transform: (e) => Math.round(U0(e))
}, qt = {
  test: /* @__PURE__ */ uu("rgb", "red"),
  parse: /* @__PURE__ */ Hh("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + To.transform(e) + ", " + To.transform(t) + ", " + To.transform(n) + ", " + Ar(Yr.transform(r)) + ")"
};
function $0(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Ml = {
  test: /* @__PURE__ */ uu("#"),
  parse: $0,
  transform: qt.transform
}, En = {
  test: /* @__PURE__ */ uu("hsl", "hue"),
  parse: /* @__PURE__ */ Hh("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tt.transform(Ar(t)) + ", " + tt.transform(Ar(n)) + ", " + Ar(Yr.transform(r)) + ")"
}, pe = {
  test: (e) => qt.test(e) || Ml.test(e) || En.test(e),
  parse: (e) => qt.test(e) ? qt.parse(e) : En.test(e) ? En.parse(e) : Ml.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? qt.transform(e) : En.transform(e)
}, W0 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function H0(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(au)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(W0)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Kh = "number", Gh = "color", K0 = "var", G0 = "var(", zc = "${}", b0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Zr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let s = 0;
  const l = t.replace(b0, (a) => (pe.test(a) ? (r.color.push(s), i.push(Gh), n.push(pe.parse(a))) : a.startsWith(G0) ? (r.var.push(s), i.push(K0), n.push(a)) : (r.number.push(s), i.push(Kh), n.push(parseFloat(a))), ++s, zc)).split(zc);
  return { values: n, split: l, indexes: r, types: i };
}
function bh(e) {
  return Zr(e).values;
}
function Qh(e) {
  const { split: t, types: n } = Zr(e), r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (s += t[o], i[o] !== void 0) {
        const l = n[o];
        l === Kh ? s += Ar(i[o]) : l === Gh ? s += pe.transform(i[o]) : s += i[o];
      }
    return s;
  };
}
const Q0 = (e) => typeof e == "number" ? 0 : e;
function X0(e) {
  const t = bh(e);
  return Qh(e)(t.map(Q0));
}
const Ft = {
  test: H0,
  parse: bh,
  createTransformer: Qh,
  getAnimatableNone: X0
}, Y0 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Z0(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(au) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let s = Y0.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const q0 = /\b([a-z-]*)\(.*?\)/gu, jl = {
  ...Ft,
  getAnimatableNone: (e) => {
    const t = e.match(q0);
    return t ? t.map(Z0).join(" ") : e;
  }
}, J0 = {
  ...ba,
  // Color props
  color: pe,
  backgroundColor: pe,
  outlineColor: pe,
  fill: pe,
  stroke: pe,
  // Border props
  borderColor: pe,
  borderTopColor: pe,
  borderRightColor: pe,
  borderBottomColor: pe,
  borderLeftColor: pe,
  filter: jl,
  WebkitFilter: jl
}, cu = (e) => J0[e];
function Xh(e, t) {
  let n = cu(e);
  return n !== jl && (n = Ft), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const e1 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function t1(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !e1.has(s) && Zr(s).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const s of t)
      e[s] = Xh(n, i);
}
const Bc = (e) => e === Zn || e === M, Uc = (e, t) => parseFloat(e.split(", ")[t]), $c = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return Uc(i[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? Uc(s[1], e) : 0;
  }
}, n1 = /* @__PURE__ */ new Set(["x", "y", "z"]), r1 = Yn.filter((e) => !n1.has(e));
function i1(e) {
  const t = [];
  return r1.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Gn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: $c(4, 13),
  y: $c(5, 14)
};
Gn.translateX = Gn.x;
Gn.translateY = Gn.y;
const tn = /* @__PURE__ */ new Set();
let Vl = !1, Ll = !1;
function Yh() {
  if (Ll) {
    const e = Array.from(tn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = i1(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([s, o]) => {
        var l;
        (l = r.getValue(s)) === null || l === void 0 || l.set(o);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Ll = !1, Vl = !1, tn.forEach((e) => e.complete()), tn.clear();
}
function Zh() {
  tn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ll = !0);
  });
}
function s1() {
  Zh(), Yh();
}
class fu {
  constructor(t, n, r, i, s, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (tn.add(this), Vl || (Vl = !0, z.read(Zh), z.resolveKeyframes(Yh))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i?.get(), l = t[t.length - 1];
          if (o !== void 0)
            t[0] = o;
          else if (r && n) {
            const a = r.readValue(n, l);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0]);
        } else
          t[s] = t[s - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), tn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, tn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const qh = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), o1 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function l1(e) {
  const t = o1.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Jh(e, t, n = 1) {
  const [r, i] = l1(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return qh(o) ? parseFloat(o) : o;
  }
  return Ga(i) ? Jh(i, t, n + 1) : i;
}
const em = (e) => (t) => t.test(e), a1 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, tm = [Zn, M, tt, xt, Yv, Xv, a1], Wc = (e) => tm.find(em(e));
class nm extends fu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let a = 0; a < t.length; a++) {
      let u = t[a];
      if (typeof u == "string" && (u = u.trim(), Ga(u))) {
        const c = Jh(u, n.current);
        c !== void 0 && (t[a] = c), a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Vh.has(r) || t.length !== 2)
      return;
    const [i, s] = t, o = Wc(i), l = Wc(s);
    if (o !== l)
      if (Bc(o) && Bc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a];
          typeof u == "string" && (t[a] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      O0(t[i]) && r.push(i);
    r.length && t1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Gn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1, l = i[o];
    i[o] = Gn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a, u]) => {
      n.getValue(a).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const Hc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ft.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function u1(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function c1(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], o = Hc(i, t), l = Hc(s, t);
  return !o || !l ? !1 : u1(e) || (n === "spring" || eu(n)) && r;
}
const f1 = (e) => e !== null;
function Gs(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(f1), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const d1 = 40;
class rm {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = nt.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: s,
      repeatType: o,
      ...l
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > d1 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && s1(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = nt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: s, delay: o, onComplete: l, onUpdate: a, isGenerator: u } = this.options;
    if (!u && !c1(t, r, i, s))
      if (o)
        this.options.duration = 0;
      else {
        a && a(Gs(t, this.options, n)), l && l(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...c
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const W = (e, t, n) => e + (t - e) * n;
function Co(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function p1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, s = 0, o = 0;
  if (!t)
    i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - l;
    i = Co(a, l, e + 1 / 3), s = Co(a, l, e), o = Co(a, l, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function ws(e, t) {
  return (n) => n > 0 ? t : e;
}
const Po = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, h1 = [Ml, qt, En], m1 = (e) => h1.find((t) => t.test(e));
function Kc(e) {
  const t = m1(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === En && (n = p1(n)), n;
}
const Gc = (e, t) => {
  const n = Kc(e), r = Kc(t);
  if (!n || !r)
    return ws(e, t);
  const i = { ...n };
  return (s) => (i.red = Po(n.red, r.red, s), i.green = Po(n.green, r.green, s), i.blue = Po(n.blue, r.blue, s), i.alpha = W(n.alpha, r.alpha, s), qt.transform(i));
}, g1 = (e, t) => (n) => t(e(n)), oi = (...e) => e.reduce(g1), Nl = /* @__PURE__ */ new Set(["none", "hidden"]);
function y1(e, t) {
  return Nl.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function v1(e, t) {
  return (n) => W(e, t, n);
}
function du(e) {
  return typeof e == "number" ? v1 : typeof e == "string" ? Ga(e) ? ws : pe.test(e) ? Gc : S1 : Array.isArray(e) ? im : typeof e == "object" ? pe.test(e) ? Gc : x1 : ws;
}
function im(e, t) {
  const n = [...e], r = n.length, i = e.map((s, o) => du(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++)
      n[o] = i[o](s);
    return n;
  };
}
function x1(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = du(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}
function w1(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s], l = e.indexes[o][i[o]], a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[s] = a, i[o]++;
  }
  return r;
}
const S1 = (e, t) => {
  const n = Ft.createTransformer(t), r = Zr(e), i = Zr(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Nl.has(e) && !i.values.length || Nl.has(t) && !r.values.length ? y1(e, t) : oi(im(w1(r, i), i.values), n) : ws(e, t);
};
function sm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? W(e, t, n) : du(e)(e, t);
}
const k1 = 5;
function om(e, t, n) {
  const r = Math.max(t - k1, 0);
  return Lh(n - e(r), t - r);
}
const b = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Eo = 1e-3;
function T1({ duration: e = b.duration, bounce: t = b.bounce, velocity: n = b.velocity, mass: r = b.mass }) {
  let i, s, o = 1 - t;
  o = mt(b.minDamping, b.maxDamping, o), e = mt(b.minDuration, b.maxDuration, /* @__PURE__ */ ut(e)), o < 1 ? (i = (u) => {
    const c = u * o, f = c * e, d = c - n, g = _l(u, o), y = Math.exp(-f);
    return Eo - d / g * y;
  }, s = (u) => {
    const f = u * o * e, d = f * n + n, g = Math.pow(o, 2) * Math.pow(u, 2) * e, y = Math.exp(-f), v = _l(Math.pow(u, 2), o);
    return (-i(u) + Eo > 0 ? -1 : 1) * ((d - g) * y) / v;
  }) : (i = (u) => {
    const c = Math.exp(-u * e), f = (u - n) * e + 1;
    return -Eo + c * f;
  }, s = (u) => {
    const c = Math.exp(-u * e), f = (n - u) * (e * e);
    return c * f;
  });
  const l = 5 / e, a = P1(i, s, l);
  if (e = /* @__PURE__ */ at(e), isNaN(a))
    return {
      stiffness: b.stiffness,
      damping: b.damping,
      duration: e
    };
  {
    const u = Math.pow(a, 2) * r;
    return {
      stiffness: u,
      damping: o * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const C1 = 12;
function P1(e, t, n) {
  let r = n;
  for (let i = 1; i < C1; i++)
    r = r - e(r) / t(r);
  return r;
}
function _l(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const E1 = ["duration", "bounce"], A1 = ["stiffness", "damping", "mass"];
function bc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function D1(e) {
  let t = {
    velocity: b.velocity,
    stiffness: b.stiffness,
    damping: b.damping,
    mass: b.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!bc(e, A1) && bc(e, E1))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, s = 2 * mt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: b.mass,
        stiffness: i,
        damping: s
      };
    } else {
      const n = T1(e);
      t = {
        ...t,
        ...n,
        mass: b.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function lm(e = b.visualDuration, t = b.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], l = { done: !1, value: s }, { stiffness: a, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: g } = D1({
    ...n,
    velocity: -/* @__PURE__ */ ut(n.velocity || 0)
  }), y = d || 0, v = u / (2 * Math.sqrt(a * c)), T = o - s, m = /* @__PURE__ */ ut(Math.sqrt(a / c)), p = Math.abs(T) < 5;
  r || (r = p ? b.restSpeed.granular : b.restSpeed.default), i || (i = p ? b.restDelta.granular : b.restDelta.default);
  let h;
  if (v < 1) {
    const w = _l(m, v);
    h = (E) => {
      const A = Math.exp(-v * m * E);
      return o - A * ((y + v * m * T) / w * Math.sin(w * E) + T * Math.cos(w * E));
    };
  } else if (v === 1)
    h = (w) => o - Math.exp(-m * w) * (T + (y + m * T) * w);
  else {
    const w = m * Math.sqrt(v * v - 1);
    h = (E) => {
      const A = Math.exp(-v * m * E), C = Math.min(w * E, 300);
      return o - A * ((y + v * m * T) * Math.sinh(C) + w * T * Math.cosh(C)) / w;
    };
  }
  const x = {
    calculatedDuration: g && f || null,
    next: (w) => {
      const E = h(w);
      if (g)
        l.done = w >= f;
      else {
        let A = 0;
        v < 1 && (A = w === 0 ? /* @__PURE__ */ at(y) : om(h, w, E));
        const C = Math.abs(A) <= r, N = Math.abs(o - E) <= i;
        l.done = C && N;
      }
      return l.value = l.done ? o : E, l;
    },
    toString: () => {
      const w = Math.min(Ph(x), Al), E = Eh((A) => x.next(w * A).value, w, 30);
      return w + "ms " + E;
    }
  };
  return x;
}
function Qc({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: l, max: a, restDelta: u = 0.5, restSpeed: c }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, g = (C) => l !== void 0 && C < l || a !== void 0 && C > a, y = (C) => l === void 0 ? a : a === void 0 || Math.abs(l - C) < Math.abs(a - C) ? l : a;
  let v = n * t;
  const T = f + v, m = o === void 0 ? T : o(T);
  m !== T && (v = m - f);
  const p = (C) => -v * Math.exp(-C / r), h = (C) => m + p(C), x = (C) => {
    const N = p(C), j = h(C);
    d.done = Math.abs(N) <= u, d.value = d.done ? m : j;
  };
  let w, E;
  const A = (C) => {
    g(d.value) && (w = C, E = lm({
      keyframes: [d.value, y(d.value)],
      velocity: om(h, C, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (C) => {
      let N = !1;
      return !E && w === void 0 && (N = !0, x(C), A(C)), w !== void 0 && C >= w ? E.next(C - w) : (!N && x(C), d);
    }
  };
}
const R1 = /* @__PURE__ */ si(0.42, 0, 1, 1), M1 = /* @__PURE__ */ si(0, 0, 0.58, 1), am = /* @__PURE__ */ si(0.42, 0, 0.58, 1), j1 = (e) => Array.isArray(e) && typeof e[0] != "number", V1 = {
  linear: Re,
  easeIn: R1,
  easeInOut: am,
  easeOut: M1,
  circIn: lu,
  circInOut: $h,
  circOut: Uh,
  backIn: ou,
  backInOut: zh,
  backOut: Oh,
  anticipate: Bh
}, Xc = (e) => {
  if (tu(e)) {
    sh(e.length === 4);
    const [t, n, r, i] = e;
    return si(t, n, r, i);
  } else if (typeof e == "string")
    return V1[e];
  return e;
};
function L1(e, t, n) {
  const r = [], i = n || sm, s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || Re : t;
      l = oi(a, l);
    }
    r.push(l);
  }
  return r;
}
function um(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (sh(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = L1(t, r, i), a = l.length, u = (c) => {
    if (o && c < e[0])
      return t[0];
    let f = 0;
    if (a > 1)
      for (; f < e.length - 2 && !(c < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ Wn(e[f], e[f + 1], c);
    return l[f](d);
  };
  return n ? (c) => u(mt(e[0], e[s - 1], c)) : u;
}
function N1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ Wn(0, t, r);
    e.push(W(n, 1, i));
  }
}
function _1(e) {
  const t = [0];
  return N1(t, e.length - 1), t;
}
function F1(e, t) {
  return e.map((n) => n * t);
}
function I1(e, t) {
  return e.map(() => t || am).splice(0, e.length - 1);
}
function Ss({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = j1(r) ? r.map(Xc) : Xc(r), s = {
    done: !1,
    value: t[0]
  }, o = F1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : _1(t),
    e
  ), l = um(o, t, {
    ease: Array.isArray(i) ? i : I1(t, i)
  });
  return {
    calculatedDuration: e,
    next: (a) => (s.value = l(a), s.done = a >= e, s)
  };
}
const O1 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => z.update(t, !0),
    stop: () => ht(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => le.isProcessing ? le.timestamp : nt.now()
  };
}, z1 = {
  decay: Qc,
  inertia: Qc,
  tween: Ss,
  keyframes: Ss,
  spring: lm
}, B1 = (e) => e / 100;
class pu extends rm {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: a } = this.options;
      a && a();
    };
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options, o = i?.KeyframeResolver || fu, l = (a, u) => this.onKeyframesResolved(a, u);
    this.resolver = new o(s, l, n, r, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: o = 0 } = this.options, l = eu(n) ? n : z1[n] || Ss;
    let a, u;
    l !== Ss && typeof t[0] != "number" && (a = oi(B1, sm(t[0], t[1])), t = [0, 100]);
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" && (u = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -o
    })), c.calculatedDuration === null && (c.calculatedDuration = Ph(c));
    const { calculatedDuration: f } = c, d = f + i, g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: C } = this.options;
      return { done: !0, value: C[C.length - 1] };
    }
    const { finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: d, repeat: g, repeatType: y, repeatDelay: v, onUpdate: T } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const m = this.currentTime - d * (this.speed >= 0 ? 1 : -1), p = this.speed >= 0 ? m < 0 : m > c;
    this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let h = this.currentTime, x = s;
    if (g) {
      const C = Math.min(this.currentTime, c) / f;
      let N = Math.floor(C), j = C % 1;
      !j && C >= 1 && (j = 1), j === 1 && N--, N = Math.min(N, g + 1), !!(N % 2) && (y === "reverse" ? (j = 1 - j, v && (j -= v / f)) : y === "mirror" && (x = o)), h = mt(0, 1, j) * f;
    }
    const w = p ? { done: !1, value: a[0] } : x.next(h);
    l && (w.value = l(w.value));
    let { done: E } = w;
    !p && u !== null && (E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return A && i !== void 0 && (w.value = Gs(a, this.options, i)), T && T(w.value), A && this.finish(), w;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ ut(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ ut(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ at(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ ut(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = O1, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const i = this.driver.now();
    this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const U1 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function $1(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = "loop", ease: l = "easeInOut", times: a } = {}) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Dh(l, i);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
const W1 = /* @__PURE__ */ za(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ks = 10, H1 = 2e4;
function K1(e) {
  return eu(e.type) || e.type === "spring" || !Ah(e.ease);
}
function G1(e, t) {
  const n = new pu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < H1; )
    r = n.sample(s), i.push(r.value), s += ks;
  return {
    times: void 0,
    keyframes: i,
    duration: s - ks,
    ease: "linear"
  };
}
const cm = {
  anticipate: Bh,
  backInOut: zh,
  circInOut: $h
};
function b1(e) {
  return e in cm;
}
class Yc extends rm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    this.resolver = new nm(s, (o, l) => this.onKeyframesResolved(o, l), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: i, ease: s, type: o, motionValue: l, name: a, startTime: u } = this.options;
    if (!l.owner || !l.owner.current)
      return !1;
    if (typeof s == "string" && xs() && b1(s) && (s = cm[s]), K1(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: g, element: y, ...v } = this.options, T = G1(t, v);
      t = T.keyframes, t.length === 1 && (t[1] = t[0]), r = T.duration, i = T.times, s = T.ease, o = "keyframes";
    }
    const c = $1(l.owner.current, a, t, { ...this.options, duration: r, times: i, ease: s });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (Nc(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: f } = this.options;
      l.set(Gs(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
      duration: r,
      times: i,
      type: o,
      ease: s,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ ut(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ ut(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ at(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Re;
      const { animation: r } = n;
      Nc(r, t);
    }
    return Re;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: i, type: s, ease: o, times: l } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: c, onComplete: f, element: d, ...g } = this.options, y = new pu({
        ...g,
        keyframes: r,
        duration: i,
        type: s,
        ease: o,
        times: l,
        isGenerator: !0
      }), v = /* @__PURE__ */ at(this.time);
      u.setWithVelocity(y.sample(v - ks).value, y.sample(v).value, ks);
    }
    const { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: l } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: a, transformTemplate: u } = n.owner.getProps();
    return W1() && r && U1.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !a && !u && !i && s !== "mirror" && o !== 0 && l !== "inertia";
  }
}
const Q1 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, X1 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Y1 = {
  type: "keyframes",
  duration: 0.8
}, Z1 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, q1 = (e, { keyframes: t }) => t.length > 2 ? Y1 : fn.has(e) ? e.startsWith("scale") ? X1(t[1]) : Q1 : Z1;
function J1({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const hu = (e, t, n, r = {}, i, s) => (o) => {
  const l = Ja(r, e) || {}, a = l.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ at(a);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -u,
    onUpdate: (d) => {
      t.set(d), l.onUpdate && l.onUpdate(d);
    },
    onComplete: () => {
      o(), l.onComplete && l.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : i
  };
  J1(l) || (c = {
    ...c,
    ...q1(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ at(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ at(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !s && t.get() !== void 0) {
    const d = Gs(c.keyframes, l);
    if (d !== void 0)
      return z.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new v0([]);
  }
  return !s && Yc.supports(c) ? new Yc(c) : new pu(c);
};
function ex({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function fm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (o = r);
  const u = [], c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null), g = a[f];
    if (g === void 0 || c && ex(c, f))
      continue;
    const y = {
      delay: n,
      ...Ja(o || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const m = Nh(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, f, z);
        p !== null && (y.startTime = p, v = !0);
      }
    }
    Rl(e, f), d.start(hu(f, d, g, e.shouldReduceMotion && Vh.has(f) ? { type: !1 } : y, e, v));
    const T = d.animation;
    T && u.push(T);
  }
  return l && Promise.all(u).then(() => {
    z.update(() => {
      l && L0(e, l);
    });
  }), u;
}
function Fl(e, t, n = {}) {
  var r;
  const i = Ks(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(fm(e, i, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = s;
    return tx(e, t, c + u, f, d, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else
    return Promise.all([o(), l(n.delay)]);
}
function tx(e, t, n = 0, r = 0, i = 1, s) {
  const o = [], l = (e.variantChildren.size - 1) * r, a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return Array.from(e.variantChildren).sort(nx).forEach((u, c) => {
    u.notify("AnimationStart", t), o.push(Fl(u, t, {
      ...s,
      delay: n + a(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(o);
}
function nx(e, t) {
  return e.sortNodePosition(t);
}
function rx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Fl(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = Fl(e, t, n);
  else {
    const i = typeof t == "function" ? Ks(e, t, n.custom) : t;
    r = Promise.all(fm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const ix = Ua.length;
function dm(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? dm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < ix; n++) {
    const r = Ua[n], i = e.props[r];
    (Xr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const sx = [...Ba].reverse(), ox = Ba.length;
function lx(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => rx(e, n, r)));
}
function ax(e) {
  let t = lx(e), n = Zc(), r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = Ks(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: g, transitionEnd: y, ...v } = d;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function s(a) {
    t = a(e);
  }
  function o(a) {
    const { props: u } = e, c = dm(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let g = {}, y = 1 / 0;
    for (let T = 0; T < ox; T++) {
      const m = sx[T], p = n[m], h = u[m] !== void 0 ? u[m] : c[m], x = Xr(h), w = m === a ? p.isActive : null;
      w === !1 && (y = T);
      let E = h === c[m] && h !== u[m] && x;
      if (E && r && e.manuallyAnimateOnMount && (E = !1), p.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !p.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !h && !p.prevProp || // Or if the prop doesn't define an animation
      Ws(h) || typeof h == "boolean")
        continue;
      const A = ux(p.prevProp, h);
      let C = A || // If we're making this variant active, we want to always make it active
      m === a && p.isActive && !E && x || // If we removed a higher-priority variant (i is in reverse order)
      T > y && x, N = !1;
      const j = Array.isArray(h) ? h : [h];
      let ne = j.reduce(i(m), {});
      w === !1 && (ne = {});
      const { prevResolvedValues: yt = {} } = p, Ut = {
        ...yt,
        ...ne
      }, Jn = (J) => {
        C = !0, d.has(J) && (N = !0, d.delete(J)), p.needsAnimating[J] = !0;
        const D = e.getValue(J);
        D && (D.liveStyle = !1);
      };
      for (const J in Ut) {
        const D = ne[J], V = yt[J];
        if (g.hasOwnProperty(J))
          continue;
        let L = !1;
        El(D) && El(V) ? L = !Ch(D, V) : L = D !== V, L ? D != null ? Jn(J) : d.add(J) : D !== void 0 && d.has(J) ? Jn(J) : p.protectedKeys[J] = !0;
      }
      p.prevProp = h, p.prevResolvedValues = ne, p.isActive && (g = { ...g, ...ne }), r && e.blockInitialAnimation && (C = !1), C && (!(E && A) || N) && f.push(...j.map((J) => ({
        animation: J,
        options: { type: m }
      })));
    }
    if (d.size) {
      const T = {};
      d.forEach((m) => {
        const p = e.getBaseTarget(m), h = e.getValue(m);
        h && (h.liveStyle = !0), T[m] = p ?? null;
      }), f.push({ animation: T });
    }
    let v = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve();
  }
  function l(a, u) {
    var c;
    if (n[a].isActive === u)
      return Promise.resolve();
    (c = e.variantChildren) === null || c === void 0 || c.forEach((d) => {
      var g;
      return (g = d.animationState) === null || g === void 0 ? void 0 : g.setActive(a, u);
    }), n[a].isActive = u;
    const f = o(a);
    for (const d in n)
      n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = Zc(), r = !0;
    }
  };
}
function ux(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ch(t, e) : !1;
}
function Ht(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Zc() {
  return {
    animate: Ht(!0),
    whileInView: Ht(),
    whileHover: Ht(),
    whileTap: Ht(),
    whileDrag: Ht(),
    whileFocus: Ht(),
    exit: Ht()
  };
}
class Bt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class cx extends Bt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = ax(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ws(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let fx = 0;
class dx extends Bt {
  constructor() {
    super(...arguments), this.id = fx++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const px = {
  animation: {
    Feature: cx
  },
  exit: {
    Feature: dx
  }
};
function qr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function li(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const hx = (e) => (t) => nu(t) && e(t, li(t));
function Dr(e, t, n, r) {
  return qr(e, t, hx(n), r);
}
const qc = (e, t) => Math.abs(e - t);
function mx(e, t) {
  const n = qc(e.x, t.x), r = qc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class pm {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Do(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, g = mx(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !g)
        return;
      const { point: y } = f, { timestamp: v } = le;
      this.history.push({ ...y, timestamp: v });
      const { onStart: T, onMove: m } = this.handlers;
      d || (T && T(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Ao(d, this.transformPagePoint), z.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const T = Do(f.type === "pointercancel" ? this.lastMoveEventInfo : Ao(d, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, T), y && y(f, T);
    }, !nu(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const o = li(t), l = Ao(o, this.transformPagePoint), { point: a } = l, { timestamp: u } = le;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Do(l, this.history)), this.removeListeners = oi(Dr(this.contextWindow, "pointermove", this.handlePointerMove), Dr(this.contextWindow, "pointerup", this.handlePointerUp), Dr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ht(this.updatePoint);
  }
}
function Ao(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Jc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Do({ point: e }, t) {
  return {
    point: e,
    delta: Jc(e, hm(t)),
    offset: Jc(e, gx(t)),
    velocity: yx(t, 0.1)
  };
}
function gx(e) {
  return e[0];
}
function hm(e) {
  return e[e.length - 1];
}
function yx(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = hm(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ at(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ ut(i.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const mm = 1e-4, vx = 1 - mm, xx = 1 + mm, gm = 0.01, wx = 0 - gm, Sx = 0 + gm;
function je(e) {
  return e.max - e.min;
}
function kx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function ef(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = W(t.min, t.max, e.origin), e.scale = je(n) / je(t), e.translate = W(n.min, n.max, e.origin) - e.originPoint, (e.scale >= vx && e.scale <= xx || isNaN(e.scale)) && (e.scale = 1), (e.translate >= wx && e.translate <= Sx || isNaN(e.translate)) && (e.translate = 0);
}
function Rr(e, t, n, r) {
  ef(e.x, t.x, n.x, r ? r.originX : void 0), ef(e.y, t.y, n.y, r ? r.originY : void 0);
}
function tf(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + je(t);
}
function Tx(e, t, n) {
  tf(e.x, t.x, n.x), tf(e.y, t.y, n.y);
}
function nf(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + je(t);
}
function Mr(e, t, n) {
  nf(e.x, t.x, n.x), nf(e.y, t.y, n.y);
}
function Cx(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? W(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)), e;
}
function rf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Px(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: rf(e.x, n, i),
    y: rf(e.y, t, r)
  };
}
function sf(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Ex(e, t) {
  return {
    x: sf(e.x, t.x),
    y: sf(e.y, t.y)
  };
}
function Ax(e, t) {
  let n = 0.5;
  const r = je(e), i = je(t);
  return i > r ? n = /* @__PURE__ */ Wn(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Wn(e.min, e.max - i, t.min)), mt(0, 1, n);
}
function Dx(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Il = 0.35;
function Rx(e = Il) {
  return e === !1 ? e = 0 : e === !0 && (e = Il), {
    x: of(e, "left", "right"),
    y: of(e, "top", "bottom")
  };
}
function of(e, t, n) {
  return {
    min: lf(e, t),
    max: lf(e, n)
  };
}
function lf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const af = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), An = () => ({
  x: af(),
  y: af()
}), uf = () => ({ min: 0, max: 0 }), Y = () => ({
  x: uf(),
  y: uf()
});
function _e(e) {
  return [e("x"), e("y")];
}
function ym({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Mx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function jx(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Ro(e) {
  return e === void 0 || e === 1;
}
function Ol({ scale: e, scaleX: t, scaleY: n }) {
  return !Ro(e) || !Ro(t) || !Ro(n);
}
function bt(e) {
  return Ol(e) || vm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function vm(e) {
  return cf(e.x) || cf(e.y);
}
function cf(e) {
  return e && e !== "0%";
}
function Ts(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function ff(e, t, n, r, i) {
  return i !== void 0 && (e = Ts(e, i, r)), Ts(e, n, r) + t;
}
function zl(e, t = 0, n = 1, r, i) {
  e.min = ff(e.min, t, n, r, i), e.max = ff(e.max, t, n, r, i);
}
function xm(e, { x: t, y: n }) {
  zl(e.x, t.translate, t.scale, t.originPoint), zl(e.y, n.translate, n.scale, n.originPoint);
}
const df = 0.999999999999, pf = 1.0000000000001;
function Vx(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    s = n[l], o = s.projectionDelta;
    const { visualElement: a } = s.options;
    a && a.props.style && a.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Rn(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, xm(e, o)), r && bt(s.latestValues) && Rn(e, s.latestValues));
  }
  t.x < pf && t.x > df && (t.x = 1), t.y < pf && t.y > df && (t.y = 1);
}
function Dn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function hf(e, t, n, r, i = 0.5) {
  const s = W(e.min, e.max, i);
  zl(e, t, n, s, r);
}
function Rn(e, t) {
  hf(e.x, t.x, t.scaleX, t.scale, t.originX), hf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function wm(e, t) {
  return ym(jx(e.getBoundingClientRect(), t));
}
function Lx(e, t, n) {
  const r = wm(e, n), { scroll: i } = t;
  return i && (Dn(r.x, i.offset.x), Dn(r.y, i.offset.y)), r;
}
const Sm = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Nx = /* @__PURE__ */ new WeakMap();
class _x {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Y(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(li(c).point);
    }, s = (c, f) => {
      const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
      if (d && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = A0(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _e((T) => {
        let m = this.getAxisMotionValue(T).get() || 0;
        if (tt.test(m)) {
          const { projection: p } = this.visualElement;
          if (p && p.layout) {
            const h = p.layout.layoutBox[T];
            h && (m = je(h) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[T] = m;
      }), y && z.postRender(() => y(c, f)), Rl(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, o = (c, f) => {
      const { dragPropagation: d, dragDirectionLock: g, onDirectionLock: y, onDrag: v } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: T } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = Fx(T), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, T), this.updateAxis("y", f.point, T), this.visualElement.render(), v && v(c, f);
    }, l = (c, f) => this.stop(c, f), a = () => _e((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new pm(t, {
      onSessionStart: i,
      onStart: s,
      onMove: o,
      onSessionEnd: l,
      resumeAnimation: a
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Sm(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && z.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !ji(t, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = Cx(o, this.constraints[t], this.elastic[t])), s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Pn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Px(i.layoutBox, n) : this.constraints = !1, this.elastic = Rx(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && _e((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Dx(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Pn(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const s = Lx(r, i.root, this.visualElement.getTransformPagePoint());
    let o = Ex(i.layout.layoutBox, s);
    if (n) {
      const l = n(Mx(o));
      this.hasMutatedConstraints = !!l, l && (o = ym(l));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l } = this.getProps(), a = this.constraints || {}, u = _e((c) => {
      if (!ji(c, n, this.currentDirection))
        return;
      let f = a && a[c] || {};
      o && (f = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, g = i ? 40 : 1e7, y = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: d,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(c, y);
    });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Rl(this.visualElement, t), r.start(hu(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    _e((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    _e((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    _e((n) => {
      const { drag: r } = this.getProps();
      if (!ji(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - W(o, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Pn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _e((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = Ax({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), _e((o) => {
      if (!ji(o, t, null))
        return;
      const l = this.getAxisMotionValue(o), { min: a, max: u } = this.constraints[o];
      l.set(W(a, u, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Nx.set(this.visualElement, this);
    const t = this.visualElement.current, n = Dr(t, "pointerdown", (a) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(a);
    }), r = () => {
      const { dragConstraints: a } = this.getProps();
      Pn(a) && a.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), z.read(r);
    const o = qr(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: u }) => {
      this.isDragging && u && (_e((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += a[c].translate, f.set(f.get() + a[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = Il, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l
    };
  }
}
function ji(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Fx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Ix extends Bt {
  constructor(t) {
    super(t), this.removeGroupControls = Re, this.removeListeners = Re, this.controls = new _x(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Re;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const mf = (e) => (t, n) => {
  e && z.postRender(() => e(t, n));
};
class Ox extends Bt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Re;
  }
  onPointerDown(t) {
    this.session = new pm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Sm(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: mf(t),
      onStart: mf(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && z.postRender(() => i(s, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Dr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Gi = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function gf(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ar = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (M.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = gf(e, t.target.x), r = gf(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, zx = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = Ft.parse(e);
    if (i.length > 5)
      return r;
    const s = Ft.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, l = n.x.scale * t.x, a = n.y.scale * t.y;
    i[0 + o] /= l, i[1 + o] /= a;
    const u = W(l, a, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i);
  }
};
class Bx extends k.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = t;
    o0(Ux), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Gi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, o = r.projection;
    return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || z.postRender(() => {
      const l = o.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Wa.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function km(e) {
  const [t, n] = ih(), r = k.useContext(Fa);
  return S.jsx(Bx, { ...e, layoutGroup: r, switchLayoutGroup: k.useContext(fh), isPresent: t, safeToRemove: n });
}
const Ux = {
  borderRadius: {
    ...ar,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ar,
  borderTopRightRadius: ar,
  borderBottomLeftRadius: ar,
  borderBottomRightRadius: ar,
  boxShadow: zx
};
function $x(e, t, n) {
  const r = ae(e) ? e : Kn(e);
  return r.start(hu("", r, t, n)), r.animation;
}
function Wx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Hx = (e, t) => e.depth - t.depth;
class Kx {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ru(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    iu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Hx), this.isDirty = !1, this.children.forEach(t);
  }
}
function Gx(e, t) {
  const n = nt.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= t && (ht(r), e(s - t));
  };
  return z.read(r, !0), () => ht(r);
}
const Tm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], bx = Tm.length, yf = (e) => typeof e == "string" ? parseFloat(e) : e, vf = (e) => typeof e == "number" || M.test(e);
function Qx(e, t, n, r, i, s) {
  i ? (e.opacity = W(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Xx(r)
  ), e.opacityExit = W(t.opacity !== void 0 ? t.opacity : 1, 0, Yx(r))) : s && (e.opacity = W(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < bx; o++) {
    const l = `border${Tm[o]}Radius`;
    let a = xf(t, l), u = xf(n, l);
    if (a === void 0 && u === void 0)
      continue;
    a || (a = 0), u || (u = 0), a === 0 || u === 0 || vf(a) === vf(u) ? (e[l] = Math.max(W(yf(a), yf(u), r), 0), (tt.test(u) || tt.test(a)) && (e[l] += "%")) : e[l] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r));
}
function xf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Xx = /* @__PURE__ */ Cm(0, 0.5, Uh), Yx = /* @__PURE__ */ Cm(0.5, 0.95, Re);
function Cm(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Wn(e, t, r));
}
function wf(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ne(e, t) {
  wf(e.x, t.x), wf(e.y, t.y);
}
function Sf(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function kf(e, t, n, r, i) {
  return e -= t, e = Ts(e, 1 / n, r), i !== void 0 && (e = Ts(e, 1 / i, r)), e;
}
function Zx(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (tt.test(t) && (t = parseFloat(t), t = W(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let l = W(s.min, s.max, r);
  e === s && (l -= t), e.min = kf(e.min, t, n, l, i), e.max = kf(e.max, t, n, l, i);
}
function Tf(e, t, [n, r, i], s, o) {
  Zx(e, t[n], t[r], t[i], t.scale, s, o);
}
const qx = ["x", "scaleX", "originX"], Jx = ["y", "scaleY", "originY"];
function Cf(e, t, n, r) {
  Tf(e.x, t, qx, n ? n.x : void 0, r ? r.x : void 0), Tf(e.y, t, Jx, n ? n.y : void 0, r ? r.y : void 0);
}
function Pf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Pm(e) {
  return Pf(e.x) && Pf(e.y);
}
function Ef(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ew(e, t) {
  return Ef(e.x, t.x) && Ef(e.y, t.y);
}
function Af(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Em(e, t) {
  return Af(e.x, t.x) && Af(e.y, t.y);
}
function Df(e) {
  return je(e.x) / je(e.y);
}
function Rf(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class tw {
  constructor() {
    this.members = [];
  }
  add(t) {
    ru(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (iu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function nw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, s = e.y.translate / t.y, o = n?.z || 0;
  if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: g, skewY: y } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), y && (r += `skewY(${y}deg) `);
  }
  const l = e.x.scale * t.x, a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const Qt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, gr = typeof window < "u" && window.MotionDebug !== void 0, Mo = ["", "X", "Y", "Z"], rw = { visibility: "hidden" }, Mf = 1e3;
let iw = 0;
function jo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Am(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Nh(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", z, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Am(r);
}
function Dm({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, l = t?.()) {
      this.id = iw++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, gr && (Qt.totalNodes = Qt.resolvedTargetDeltas = Qt.recalculatedProjection = 0), this.nodes.forEach(lw), this.nodes.forEach(dw), this.nodes.forEach(pw), this.nodes.forEach(aw), gr && window.MotionDebug.record(Qt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Kx());
    }
    addEventListener(o, l) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new su()), this.eventHandlers.get(o).add(l);
    }
    notifyListeners(o, ...l) {
      const a = this.eventHandlers.get(o);
      a && a.notify(...l);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o, l = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Wx(o), this.instance = o;
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = Gx(d, 250), Gi.hasAnimatedSinceResize && (Gi.hasAnimatedSinceResize = !1, this.nodes.forEach(Vf));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || c.getDefaultTransition() || vw, { onLayoutAnimationStart: T, onLayoutAnimationComplete: m } = c.getProps(), p = !this.targetLayout || !Em(this.targetLayout, y) || g, h = !d && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || h || d && (p || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, h);
          const x = {
            ...Ja(v, "layout"),
            onPlay: T,
            onComplete: m
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          d || Vf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ht(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(hw), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Am(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jf);
        return;
      }
      this.isUpdating || this.nodes.forEach(cw), this.isUpdating = !1, this.nodes.forEach(fw), this.nodes.forEach(sw), this.nodes.forEach(ow), this.clearAllSnapshots();
      const l = nt.now();
      le.delta = mt(0, 1e3 / 60, l - le.timestamp), le.timestamp = l, le.isProcessing = !0, So.update.process(le), So.preRender.process(le), So.render.process(le), le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Wa.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(uw), this.sharedNodes.forEach(mw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++)
          this.path[a].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Y(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1), l) {
        const a = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !Pm(this.projectionDelta), a = this.getTransformTemplate(), u = a ? a(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && (l || bt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return o && (a = this.removeTransform(a)), xw(a), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: a,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var o;
      const { visualElement: l } = this.options;
      if (!l)
        return Y();
      const a = l.measureViewportBox();
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(ww))) {
        const { scroll: c } = this.root;
        c && (Dn(a.x, c.offset.x), Dn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Y();
      if (Ne(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && Ne(a, o), Dn(a.x, f.offset.x), Dn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, l = !1) {
      const a = Y();
      Ne(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l && c.options.layoutScroll && c.scroll && c !== c.root && Rn(a, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), bt(c.latestValues) && Rn(a, c.latestValues);
      }
      return bt(this.latestValues) && Rn(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = Y();
      Ne(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !bt(u.latestValues))
          continue;
        Ol(u.latestValues) && u.updateSnapshot();
        const c = Y(), f = u.measurePageBox();
        Ne(c, f), Cf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return bt(this.latestValues) && Cf(l, this.latestValues), l;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== le.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (this.resolvedRelativeTargetAt = le.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), Mr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Tx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ne(this.target, this.layout.layoutBox), xm(this.target, this.targetDelta)) : Ne(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), Mr(this.relativeTargetOrigin, this.target, g.target), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          gr && Qt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ol(this.parent.latestValues) || vm(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var o;
      const l = this.getLead(), a = !!this.resumingFrom || this !== l;
      let u = !0;
      if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === le.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
        return;
      Ne(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, g = this.treeScale.y;
      Vx(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = Y());
      const { target: y } = l;
      if (!y) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Sf(this.prevProjectionDelta.x, this.projectionDelta.x), Sf(this.prevProjectionDelta.y, this.projectionDelta.y)), Rr(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !Rf(this.projectionDelta.x, this.prevProjectionDelta.x) || !Rf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), gr && Qt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var l;
      if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = An(), this.projectionDelta = An(), this.projectionDeltaWithTransform = An();
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot, u = a ? a.latestValues : {}, c = { ...this.latestValues }, f = An();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const d = Y(), g = a ? a.source : void 0, y = this.layout ? this.layout.source : void 0, v = g !== y, T = this.getStack(), m = !T || T.members.length <= 1, p = !!(v && !m && this.options.crossfade === !0 && !this.path.some(yw));
      this.animationProgress = 0;
      let h;
      this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        Lf(f.x, o.x, w), Lf(f.y, o.y, w), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Mr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), gw(this.relativeTarget, this.relativeTargetOrigin, d, w), h && ew(this.relativeTarget, h) && (this.isProjectionDirty = !1), h || (h = Y()), Ne(h, this.relativeTarget)), v && (this.animationValues = c, Qx(c, u, this.latestValues, w, p, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ht(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = z.update(() => {
        Gi.hasAnimatedSinceResize = !0, this.currentAnimation = $x(0, Mf, {
          ...o,
          onUpdate: (l) => {
            this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l);
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Mf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = o;
      if (!(!l || !a || !u)) {
        if (this !== o && this.layout && u && Rm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          a = this.target || Y();
          const f = je(this.layout.layoutBox.x);
          a.x.min = o.target.x.min, a.x.max = a.x.min + f;
          const d = je(this.layout.layoutBox.y);
          a.y.min = o.target.y.min, a.y.max = a.y.min + d;
        }
        Ne(l, a), Rn(l, c), Rr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new tw()), this.sharedNodes.get(o).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: l } = this.options;
      return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: l } = this.options;
      return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a), o && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let l = !1;
      const { latestValues: a } = o;
      if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0), !l)
        return;
      const u = {};
      a.z && jo("z", o, u, this.animationValues);
      for (let c = 0; c < Mo.length; c++)
        jo(`rotate${Mo[c]}`, o, u, this.animationValues), jo(`skew${Mo[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var l, a;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return rw;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Hi(o?.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Hi(o?.pointerEvents) || ""), this.hasProjected && !bt(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = nw(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in vs) {
        if (d[v] === void 0)
          continue;
        const { correct: T, applyTo: m } = vs[v], p = u.transform === "none" ? d[v] : T(d[v], f);
        if (m) {
          const h = m.length;
          for (let x = 0; x < h; x++)
            u[m[x]] = p;
        } else
          u[v] = p;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Hi(o?.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(jf), this.root.sharedNodes.clear();
    }
  };
}
function sw(e) {
  e.updateLayout();
}
function ow(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: s } = e.options, o = n.source !== e.layout.source;
    s === "size" ? _e((f) => {
      const d = o ? n.measuredBox[f] : n.layoutBox[f], g = je(d);
      d.min = r[f].min, d.max = d.min + g;
    }) : Rm(s, n.layoutBox, r) && _e((f) => {
      const d = o ? n.measuredBox[f] : n.layoutBox[f], g = je(r[f]);
      d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const l = An();
    Rr(l, r, n.layoutBox);
    const a = An();
    o ? Rr(a, e.applyTransform(i, !0), n.measuredBox) : Rr(a, r, n.layoutBox);
    const u = !Pm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = Y();
          Mr(y, n.layoutBox, d.layoutBox);
          const v = Y();
          Mr(v, r, g.layoutBox), Em(y, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = y, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function lw(e) {
  gr && Qt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function aw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function uw(e) {
  e.clearSnapshot();
}
function jf(e) {
  e.clearMeasurements();
}
function cw(e) {
  e.isLayoutDirty = !1;
}
function fw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Vf(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function dw(e) {
  e.resolveTargetDelta();
}
function pw(e) {
  e.calcProjection();
}
function hw(e) {
  e.resetSkewAndRotation();
}
function mw(e) {
  e.removeLeadSnapshot();
}
function Lf(e, t, n) {
  e.translate = W(t.translate, 0, n), e.scale = W(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Nf(e, t, n, r) {
  e.min = W(t.min, n.min, r), e.max = W(t.max, n.max, r);
}
function gw(e, t, n, r) {
  Nf(e.x, t.x, n.x, r), Nf(e.y, t.y, n.y, r);
}
function yw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const vw = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, _f = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ff = _f("applewebkit/") && !_f("chrome/") ? Math.round : Re;
function If(e) {
  e.min = Ff(e.min), e.max = Ff(e.max);
}
function xw(e) {
  If(e.x), If(e.y);
}
function Rm(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !kx(Df(t), Df(n), 0.2);
}
function ww(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Sw = Dm({
  attachResizeListener: (e, t) => qr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Vo = {
  current: void 0
}, Mm = Dm({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Vo.current) {
      const e = new Sw({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Vo.current = e;
    }
    return Vo.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), kw = {
  pan: {
    Feature: Ox
  },
  drag: {
    Feature: Ix,
    ProjectionNode: Mm,
    MeasureLayout: km
  }
};
function Of(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, s = r[i];
  s && z.postRender(() => s(t, li(t)));
}
class Tw extends Bt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = k0(t, (n) => (Of(this.node, n, "Start"), (r) => Of(this.node, r, "End"))));
  }
  unmount() {
  }
}
class Cw extends Bt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = oi(qr(this.node.current, "focus", () => this.onFocus()), qr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function zf(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), s = r[i];
  s && z.postRender(() => s(t, li(t)));
}
class Pw extends Bt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = E0(t, (n) => (zf(this.node, n, "Start"), (r, { success: i }) => zf(this.node, r, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Bl = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), Ew = (e) => {
  const t = Bl.get(e.target);
  t && t(e);
}, Aw = (e) => {
  e.forEach(Ew);
};
function Dw({ root: e, ...t }) {
  const n = e || document;
  Lo.has(n) || Lo.set(n, {});
  const r = Lo.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Aw, { root: e, ...t })), r[i];
}
function Rw(e, t, n) {
  const r = Dw(t);
  return Bl.set(e, n), r.observe(e), () => {
    Bl.delete(e), r.unobserve(e);
  };
}
const Mw = {
  some: 0,
  all: 1
};
class jw extends Bt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Mw[i]
    }, l = (a) => {
      const { isIntersecting: u } = a;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
      d && d(a);
    };
    return Rw(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Vw(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Vw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Lw = {
  inView: {
    Feature: jw
  },
  tap: {
    Feature: Pw
  },
  focus: {
    Feature: Cw
  },
  hover: {
    Feature: Tw
  }
}, Nw = {
  layout: {
    ProjectionNode: Mm,
    MeasureLayout: km
  }
}, Ul = { current: null }, jm = { current: !1 };
function _w() {
  if (jm.current = !0, !!Ia)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ul.current = e.matches;
      e.addListener(t), t();
    } else
      Ul.current = !1;
}
const Fw = [...tm, pe, Ft], Iw = (e) => Fw.find(em(e)), Bf = /* @__PURE__ */ new WeakMap();
function Ow(e, t, n) {
  for (const r in t) {
    const i = t[r], s = n[r];
    if (ae(i))
      e.addValue(r, i);
    else if (ae(s))
      e.addValue(r, Kn(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Kn(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Uf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class zw {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o }, l = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = fu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = nt.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, z.render(this.render, !1, !0));
    };
    const { latestValues: a, renderState: u, onUpdate: c } = o;
    this.onUpdate = c, this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = Hs(n), this.isVariantNode = uh(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in d) {
      const y = d[g];
      a[g] !== void 0 && ae(y) && y.set(a[g], !1);
    }
  }
  mount(t) {
    this.current = t, Bf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), jm.current || _w(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ul.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Bf.delete(this.current), this.projection && this.projection.unmount(), ht(this.notifyUpdate), ht(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = fn.has(t), i = n.on("change", (l) => {
      this.latestValues[t] = l, this.props.onUpdate && z.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), s(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Hn) {
      const n = Hn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Y();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < Uf.length; r++) {
      const i = Uf[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = "on" + i, o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = Ow(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Kn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (qh(i) || Wh(i)) ? i = parseFloat(i) : !Iw(i) && Ft.test(n) && (i = Xh(t, n)), this.setBaseTarget(t, ae(i) ? i.get() : i)), ae(i) ? i.get() : i;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Ka(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (i = o[t]);
    }
    if (r && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ae(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new su()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Vm extends zw {
  constructor() {
    super(...arguments), this.KeyframeResolver = nm;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ae(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Bw(e) {
  return window.getComputedStyle(e);
}
class Uw extends Vm {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = vh;
  }
  readValueFromInstance(t, n) {
    if (fn.has(n)) {
      const r = cu(n);
      return r && r.default || 0;
    } else {
      const r = Bw(t), i = (mh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return wm(t, n);
  }
  build(t, n, r) {
    Qa(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return qa(t, n, r);
  }
}
class $w extends Vm {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Y;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (fn.has(n)) {
      const r = cu(n);
      return r && r.default || 0;
    }
    return n = xh.has(n) ? n : $a(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return kh(t, n, r);
  }
  build(t, n, r) {
    Xa(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    wh(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = Za(t.tagName), super.mount(t);
  }
}
const Ww = (e, t) => Ha(e) ? new $w(t) : new Uw(t, {
  allowProjection: e !== k.Fragment
}), Hw = /* @__PURE__ */ m0({
  ...px,
  ...Lw,
  ...kw,
  ...Nw
}, Ww), Pe = /* @__PURE__ */ Mv(Hw);
function Lm(e) {
  const t = cn(() => Kn(e)), { isStatic: n } = k.useContext(Us);
  if (n) {
    const [, r] = k.useState(e);
    k.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function Nm(e, t) {
  const n = Lm(t()), r = () => n.set(t());
  return r(), Oa(() => {
    const i = () => z.preRender(r, !1, !0), s = e.map((o) => o.on("change", i));
    return () => {
      s.forEach((o) => o()), ht(r);
    };
  }), n;
}
const Kw = (e) => e && typeof e == "object" && e.mix, Gw = (e) => Kw(e) ? e.mix : void 0;
function bw(...e) {
  const t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], s = e[2 + n], o = e[3 + n], l = um(i, s, {
    mixer: Gw(s[0]),
    ...o
  });
  return t ? l(r) : l;
}
function Qw(e) {
  Er.current = [], e();
  const t = Nm(Er.current, e);
  return Er.current = void 0, t;
}
function Xw(e, t, n, r) {
  if (typeof e == "function")
    return Qw(e);
  const i = typeof t == "function" ? t : bw(t, n, r);
  return Array.isArray(e) ? $f(e, i) : $f([e], ([s]) => i(s));
}
function $f(e, t) {
  const n = cn(() => []);
  return Nm(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++)
      n[i] = e[i].get();
    return t(n);
  });
}
const _m = k.createContext(null);
function Yw(e, t, n, r) {
  if (!r)
    return e;
  const i = e.findIndex((c) => c.value === t);
  if (i === -1)
    return e;
  const s = r > 0 ? 1 : -1, o = e[i + s];
  if (!o)
    return e;
  const l = e[i], a = o.layout, u = W(a.min, a.max, 0.5);
  return s === 1 && l.layout.max + n > u || s === -1 && l.layout.min + n < u ? R0(e, i, i + s) : e;
}
function Zw({ children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...s }, o) {
  const l = cn(() => Pe[t]), a = [], u = k.useRef(!1), c = {
    axis: n,
    registerItem: (f, d) => {
      const g = a.findIndex((y) => f === y.value);
      g !== -1 ? a[g].layout = d[n] : a.push({ value: f, layout: d[n] }), a.sort(eS);
    },
    updateOrder: (f, d, g) => {
      if (u.current)
        return;
      const y = Yw(a, f, d, g);
      a !== y && (u.current = !0, r(y.map(Jw).filter((v) => i.indexOf(v) !== -1)));
    }
  };
  return k.useEffect(() => {
    u.current = !1;
  }), S.jsx(l, { ...s, ref: o, ignoreStrict: !0, children: S.jsx(_m.Provider, { value: c, children: e }) });
}
const qw = /* @__PURE__ */ k.forwardRef(Zw);
function Jw(e) {
  return e.value;
}
function eS(e, t) {
  return e.layout.min - t.layout.min;
}
function Wf(e, t = 0) {
  return ae(e) ? e : Lm(t);
}
function tS({ children: e, style: t = {}, value: n, as: r = "li", onDrag: i, layout: s = !0, ...o }, l) {
  const a = cn(() => Pe[r]), u = k.useContext(_m), c = {
    x: Wf(t.x),
    y: Wf(t.y)
  }, f = Xw([c.x, c.y], ([v, T]) => v || T ? 1 : "unset"), { axis: d, registerItem: g, updateOrder: y } = u;
  return S.jsx(a, { drag: d, ...o, dragSnapToOrigin: !0, style: { ...t, x: c.x, y: c.y, zIndex: f }, layout: s, onDrag: (v, T) => {
    const { velocity: m } = T;
    m[d] && y(n, c[d].get(), m[d]), i && i(v, T);
  }, onLayoutMeasure: (v) => g(n, v), ref: l, ignoreStrict: !0, children: e });
}
const nS = /* @__PURE__ */ k.forwardRef(tS), rS = [
  { id: "today", label: "Today" },
  { id: "week", label: "7 days" },
  { id: "all", label: "All" }
];
function Fm() {
  const e = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), e.getTime();
}
function iS(e) {
  const t = new Date(e);
  return t.getTime() >= Fm() ? t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : t.toLocaleDateString([], { month: "short", day: "numeric" });
}
function sS({
  state: e,
  send: t
}) {
  const [n, r] = k.useState("todo"), [i, s] = k.useState("all"), [o, l] = k.useState(""), a = e.tasks.filter((h) => !h.done), u = e.tasks.filter((h) => h.done).sort((h, x) => (x.doneAt ?? 0) - (h.doneAt ?? 0)), c = u.filter((h) => i === "all" || h.doneAt == null ? !0 : h.doneAt >= (i === "today" ? Fm() : Date.now() - 7 * 864e5)), f = k.useRef(!1), d = k.useRef(null), [g, y] = k.useState(null), v = (h) => {
    d.current = h, y(h);
  };
  k.useEffect(() => {
    f.current || (d.current = null, y(null));
  }, [e.tasks]);
  const T = g ?? a, m = () => {
    f.current = !1;
    const h = d.current;
    d.current = null, y(null), h && t({ type: "reorder", ids: [...h.map((x) => x.id), ...u.map((x) => x.id)] });
  }, p = () => {
    const h = o.trim();
    h.length !== 0 && (t({ type: "add", text: h }), l(""));
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "jwf-tasks", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "jwf-subtabs", role: "tablist", "aria-label": "Task lists", children: [
      /* @__PURE__ */ S.jsx(
        "button",
        {
          type: "button",
          className: "jwf-subtab",
          role: "tab",
          "aria-selected": n === "todo",
          "data-active": n === "todo",
          onClick: () => r("todo"),
          children: "To do"
        }
      ),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          type: "button",
          className: "jwf-subtab",
          role: "tab",
          "aria-selected": n === "done",
          "data-active": n === "done",
          onClick: () => r("done"),
          children: "Done"
        }
      )
    ] }),
    n === "todo" ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx(
        qw,
        {
          axis: "y",
          values: T,
          onReorder: (h) => v(h),
          className: "jwf-task-list",
          as: "div",
          children: /* @__PURE__ */ S.jsx(Qr, { initial: !1, children: T.map((h) => /* @__PURE__ */ S.jsx(
            Hf,
            {
              task: h,
              send: t,
              drag: !0,
              onDragState: (x) => {
                f.current = x;
              },
              onDragSettled: m
            },
            h.id
          )) })
        }
      ),
      /* @__PURE__ */ S.jsx("div", { className: "jwf-task-input-row", children: /* @__PURE__ */ S.jsx(
        "input",
        {
          autoFocus: !0,
          className: "jwf-task-input",
          type: "text",
          "aria-label": "Add a task",
          maxLength: Om,
          placeholder: "Add a task…",
          value: o,
          onChange: (h) => l(h.target.value),
          onKeyDown: (h) => {
            if (h.stopPropagation(), h.key === "Enter")
              h.preventDefault(), p();
            else if (h.key === "Backspace" && o.length === 0) {
              const x = T.at(-1);
              x && t({ type: "remove", id: x.id });
            }
          }
        }
      ) })
    ] }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx("div", { className: "jwf-filters", children: rS.map((h) => /* @__PURE__ */ S.jsx(
        "button",
        {
          type: "button",
          className: "jwf-filter",
          "data-active": i === h.id,
          "aria-pressed": i === h.id,
          onClick: () => s(h.id),
          children: h.label
        },
        h.id
      )) }),
      /* @__PURE__ */ S.jsxs("div", { className: "jwf-task-list", role: "list", children: [
        /* @__PURE__ */ S.jsx(Qr, { initial: !1, children: c.map((h) => /* @__PURE__ */ S.jsx(Hf, { task: h, send: t }, h.id)) }),
        c.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "jwf-done-empty", children: u.length === 0 ? "Nothing completed yet" : "Nothing in this range" }) : null
      ] })
    ] })
  ] });
}
function Hf({
  task: e,
  send: t,
  drag: n = !1,
  onDragState: r,
  onDragSettled: i
}) {
  const s = e.done ? "Click to reopen · right-click to delete" : "Click to complete · drag to reorder · right-click to delete", o = /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsx("span", { className: "jwf-task-text", children: e.text }),
    e.done && e.doneAt != null ? /* @__PURE__ */ S.jsx("span", { className: "jwf-task-date", children: iS(e.doneAt) }) : null
  ] }), l = {
    className: "jwf-task",
    "data-done": e.done,
    title: s,
    onClick: () => t({ type: "toggle", id: e.id }),
    // Right-click is the delete gesture — the only way a row grows a second
    // action without growing a second visible control.
    onContextMenu: (a) => {
      a.preventDefault(), t({ type: "remove", id: e.id });
    }
  };
  return n ? /* @__PURE__ */ S.jsx(
    nS,
    {
      as: "button",
      type: "button",
      value: e,
      ...l,
      onDragStart: () => r?.(!0),
      onDragEnd: () => i?.(),
      initial: { opacity: 0, x: -6 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 6 },
      transition: { duration: 0.16 },
      style: { position: "relative" },
      children: o
    }
  ) : /* @__PURE__ */ S.jsx(
    Pe.button,
    {
      type: "button",
      role: "listitem",
      ...l,
      initial: { opacity: 0, x: -6 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 6 },
      transition: { duration: 0.16 },
      children: o
    }
  );
}
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Im = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var lS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aS = k.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: s,
    iconNode: o,
    ...l
  }, a) => k.createElement(
    "svg",
    {
      ref: a,
      ...lS,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Im("lucide", i),
      ...l
    },
    [
      ...o.map(([u, c]) => k.createElement(u, c)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = (e, t) => {
  const n = k.forwardRef(
    ({ className: r, ...i }, s) => k.createElement(aS, {
      ref: s,
      iconNode: t,
      className: Im(`lucide-${oS(e)}`, r),
      ...i
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uS = qn("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cS = qn("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fS = qn("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dS = qn("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pS = qn("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hS = qn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), mS = [880, 1046, 1174], gS = 20, yS = 2;
class vS {
  context = null;
  /**
   * WHY the AudioContext is created per-play and closed on stop, rather than
   * created once and reused: a long-lived context keeps the audio hardware
   * awake, and this extension can sit idle for hours between reminders. Creating
   * one costs a few milliseconds at the exact moment we are already making
   * noise.
   */
  play() {
    this.stop();
    try {
      const t = new AudioContext();
      this.context = t;
      const n = (i, s) => {
        const o = t.createOscillator(), l = t.createGain();
        o.connect(l), l.connect(t.destination), o.type = "sine", o.frequency.value = s, l.gain.setValueAtTime(0.3, i), l.gain.exponentialRampToValueAtTime(0.01, i + 0.3), o.start(i), o.stop(i + 0.3);
      }, r = t.currentTime;
      for (let i = 0; i < gS; i += 1) {
        const s = r + i * yS;
        mS.forEach((o, l) => n(s + l * 0.35, o));
      }
    } catch {
      this.context = null;
    }
  }
  stop() {
    this.context && (this.context.close().catch(() => {
    }), this.context = null);
  }
}
function xS() {
  const [e, t] = k.useState(() => /* @__PURE__ */ new Date()), [n, r] = k.useState(!1);
  return k.useEffect(() => {
    const i = setInterval(() => t(/* @__PURE__ */ new Date()), 1e4);
    return () => clearInterval(i);
  }, []), /* @__PURE__ */ S.jsx(
    "button",
    {
      type: "button",
      className: "tm-clock",
      "data-dimmed": n,
      onClick: () => r((i) => !i),
      title: n ? "Show clock" : "Dim clock",
      children: e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  );
}
const wS = [15, 25, 30, 45, 60, 90, 120];
function SS(e) {
  if (e < 60) return `${e}m`;
  const t = e / 60;
  return Number.isInteger(t) ? `${t}h` : `${t}h`;
}
function kS({
  totalSeconds: e,
  onSelect: t,
  onStart: n
}) {
  const [r, i] = k.useState(""), s = Math.round(e / 60);
  return /* @__PURE__ */ S.jsxs(
    Pe.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
      style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 18 },
      children: [
        /* @__PURE__ */ S.jsx("span", { className: "tm-label", children: "Focus duration" }),
        /* @__PURE__ */ S.jsx("div", { className: "tm-presets", children: wS.map((o) => /* @__PURE__ */ S.jsx(
          "button",
          {
            type: "button",
            className: "tm-preset",
            "data-selected": !r && s === o,
            onClick: () => {
              i(""), t(o);
            },
            children: SS(o)
          },
          o
        )) }),
        /* @__PURE__ */ S.jsx("div", { className: "tm-row", children: /* @__PURE__ */ S.jsx(
          "input",
          {
            className: "tm-custom",
            type: "number",
            min: 1,
            max: 480,
            placeholder: "Custom",
            value: r,
            onChange: (o) => {
              const l = o.target.value;
              i(l);
              const a = Number.parseInt(l, 10);
              Number.isFinite(a) && a > 0 && t(a);
            },
            onKeyDown: (o) => {
              o.key === "Enter" && (o.preventDefault(), o.stopPropagation(), n());
            }
          }
        ) }),
        /* @__PURE__ */ S.jsx("button", { type: "button", className: "tm-primary", onClick: n, children: "Start focus" })
      ]
    }
  );
}
function TS({
  reminder: e,
  onDismiss: t
}) {
  return /* @__PURE__ */ S.jsx(
    Pe.div,
    {
      className: "tm-alert",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.25 },
      children: /* @__PURE__ */ S.jsxs(
        Pe.div,
        {
          className: "tm-alert-card",
          initial: { scale: 0.94, y: 10 },
          animate: { scale: 1, y: 0 },
          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          children: [
            /* @__PURE__ */ S.jsx(
              Pe.div,
              {
                className: "tm-alert-icon",
                animate: { scale: [1, 1.08, 1] },
                transition: { repeat: 1 / 0, duration: 1.6 },
                children: "⏰"
              }
            ),
            /* @__PURE__ */ S.jsxs("div", { children: [
              /* @__PURE__ */ S.jsx("div", { style: { fontSize: 17, fontWeight: 600, marginBottom: 3 }, children: e.label }),
              /* @__PURE__ */ S.jsx("div", { className: "tm-reminder-sub", children: "Timer paused until you dismiss this" })
            ] }),
            /* @__PURE__ */ S.jsx("button", { type: "button", className: "tm-primary", style: { width: "100%" }, onClick: t, children: "Done" })
          ]
        }
      )
    }
  );
}
function CS({
  reminders: e,
  onAdd: t,
  onRemove: n
}) {
  const [r, i] = k.useState(""), [s, o] = k.useState("30"), [l, a] = k.useState(!1), u = () => {
    const f = Number.parseInt(s, 10);
    !r.trim() || !Number.isFinite(f) || f <= 0 || (t(r, f), i(""), o("30"), a(!1));
  }, c = (f) => f.stopPropagation();
  return /* @__PURE__ */ S.jsxs(
    Pe.div,
    {
      className: "tm-reminders",
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.12 },
      children: [
        /* @__PURE__ */ S.jsxs("div", { className: "tm-reminders-head", children: [
          /* @__PURE__ */ S.jsxs("span", { className: "tm-label", style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ S.jsx(uS, { size: 12 }),
            "Reminders"
          ] }),
          l ? null : /* @__PURE__ */ S.jsxs(
            "button",
            {
              type: "button",
              className: "tm-ghost",
              style: { display: "inline-flex", alignItems: "center", gap: 4 },
              onClick: () => a(!0),
              children: [
                /* @__PURE__ */ S.jsx(dS, { size: 12 }),
                "Add"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs(Qr, { mode: "popLayout", children: [
          l ? /* @__PURE__ */ S.jsxs(
            Pe.div,
            {
              className: "tm-add",
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              children: [
                /* @__PURE__ */ S.jsx(
                  "input",
                  {
                    autoFocus: !0,
                    type: "text",
                    placeholder: "e.g. Stand up and stretch",
                    value: r,
                    onChange: (f) => i(f.target.value),
                    onKeyDown: (f) => {
                      c(f), f.key === "Enter" && u(), f.key === "Escape" && a(!1);
                    }
                  }
                ),
                /* @__PURE__ */ S.jsxs("div", { className: "tm-row", children: [
                  /* @__PURE__ */ S.jsx("span", { className: "tm-reminder-sub", children: "Every" }),
                  /* @__PURE__ */ S.jsx(
                    "input",
                    {
                      type: "number",
                      min: 1,
                      style: { width: 62, textAlign: "center" },
                      value: s,
                      onChange: (f) => o(f.target.value),
                      onKeyDown: (f) => {
                        c(f), f.key === "Enter" && u();
                      }
                    }
                  ),
                  /* @__PURE__ */ S.jsx("span", { className: "tm-reminder-sub", children: "min" })
                ] }),
                /* @__PURE__ */ S.jsxs("div", { className: "tm-row", style: { marginTop: 2 }, children: [
                  /* @__PURE__ */ S.jsx(
                    "button",
                    {
                      type: "button",
                      className: "tm-primary",
                      style: { flex: 1, padding: "8px 0", fontSize: 13 },
                      onClick: u,
                      children: "Add"
                    }
                  ),
                  /* @__PURE__ */ S.jsx(
                    "button",
                    {
                      type: "button",
                      className: "tm-circle",
                      style: { width: "auto", height: "auto", padding: "8px 16px", borderRadius: 999 },
                      onClick: () => a(!1),
                      children: /* @__PURE__ */ S.jsx("span", { style: { fontSize: 13 }, children: "Cancel" })
                    }
                  )
                ] })
              ]
            },
            "add"
          ) : null,
          e.map((f) => /* @__PURE__ */ S.jsxs(
            Pe.div,
            {
              className: "tm-reminder",
              initial: { opacity: 0, x: -6 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 6 },
              transition: { duration: 0.2 },
              children: [
                /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                  /* @__PURE__ */ S.jsx("span", { className: "tm-reminder-label", children: f.label }),
                  /* @__PURE__ */ S.jsxs("span", { className: "tm-reminder-sub", children: [
                    "Every ",
                    f.intervalMinutes,
                    " min"
                  ] })
                ] }),
                /* @__PURE__ */ S.jsx(
                  "button",
                  {
                    type: "button",
                    className: "tm-ghost",
                    onClick: () => n(f.id),
                    title: "Remove reminder",
                    children: /* @__PURE__ */ S.jsx(hS, { size: 13 })
                  }
                )
              ]
            },
            f.id
          ))
        ] }),
        e.length === 0 && !l ? /* @__PURE__ */ S.jsx("p", { className: "tm-reminder-sub", style: { textAlign: "center", padding: "8px 0" }, children: "No reminders set" }) : null
      ]
    }
  );
}
function ur(e) {
  return e.toString().padStart(2, "0");
}
function PS({
  remainingSeconds: e,
  phase: t
}) {
  const n = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), i = e % 60, s = n > 0 ? `${ur(n)}:${ur(r)}:${ur(i)}` : `${ur(r)}:${ur(i)}`;
  return /* @__PURE__ */ S.jsx(
    Pe.span,
    {
      className: "tm-digits",
      "data-state": t,
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      children: s
    }
  );
}
function ES({
  api: e,
  state: t,
  send: n
}) {
  k.useEffect(() => {
    n({ type: "syncSettings" });
  }, [n]);
  const r = k.useRef(null), i = k.useRef(null);
  k.useEffect(() => {
    r.current ??= new vS();
    const u = t.phase === "reminding" && i.current !== "reminding", c = t.phase === "finished" && i.current != null && i.current !== "finished";
    u || c ? r.current.play() : t.phase !== "reminding" && r.current.stop(), i.current = t.phase;
  }, [t.phase]), k.useEffect(() => () => r.current?.stop(), []);
  const [s, o] = k.useState(null);
  k.useEffect(() => {
    let u = !0;
    const c = () => {
      e.sessions.observe().then((d) => {
        u && o(
          d.filter((g) => g.kind && g.kind !== "terminal" && g.kind !== "extension-view").length
        );
      }).catch(() => {
      });
    };
    c();
    const f = e.sessions.subscribe(c);
    return () => {
      u = !1, f();
    };
  }, [e]);
  const l = t.activeReminderId != null ? t.reminders.find((u) => u.id === t.activeReminderId) ?? null : null, a = t.phase === "idle";
  return /* @__PURE__ */ S.jsxs("div", { className: "tm-tab", children: [
    /* @__PURE__ */ S.jsx(xS, {}),
    s !== null ? /* @__PURE__ */ S.jsxs(
      "div",
      {
        style: { marginTop: -16, fontSize: 11, letterSpacing: "0.03em", opacity: 0.55 },
        title: "Agent sessions open in Agent Code — live via the sessions.observe capability",
        children: [
          s,
          " ",
          s === 1 ? "agent" : "agents",
          " active"
        ]
      }
    ) : null,
    /* @__PURE__ */ S.jsx(PS, { remainingSeconds: t.remainingSeconds, phase: t.phase }),
    /* @__PURE__ */ S.jsx(Qr, { mode: "wait", children: a ? /* @__PURE__ */ S.jsxs(
      Pe.div,
      {
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.2 },
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 24, width: "100%" },
        children: [
          /* @__PURE__ */ S.jsx(
            kS,
            {
              totalSeconds: t.totalSeconds,
              onSelect: (u) => n({ type: "setDuration", minutes: u }),
              onStart: () => n({ type: "start" })
            }
          ),
          /* @__PURE__ */ S.jsx(
            CS,
            {
              reminders: t.reminders,
              onAdd: (u, c) => n({
                type: "addReminder",
                label: u,
                intervalMinutes: c
              }),
              onRemove: (u) => n({ type: "removeReminder", id: u })
            }
          )
        ]
      },
      "setup"
    ) : /* @__PURE__ */ S.jsxs(
      Pe.div,
      {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.25 },
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 16 },
        children: [
          /* @__PURE__ */ S.jsxs("div", { className: "tm-row", children: [
            t.phase === "running" ? /* @__PURE__ */ S.jsx(
              "button",
              {
                type: "button",
                className: "tm-circle",
                onClick: () => n({ type: "pause" }),
                title: "Pause",
                children: /* @__PURE__ */ S.jsx(cS, { size: 17 })
              }
            ) : null,
            t.phase === "paused" ? /* @__PURE__ */ S.jsx(
              "button",
              {
                type: "button",
                className: "tm-circle",
                onClick: () => n({ type: "resume" }),
                title: "Resume",
                children: /* @__PURE__ */ S.jsx(fS, { size: 17, style: { marginLeft: 2 } })
              }
            ) : null,
            /* @__PURE__ */ S.jsx("button", { type: "button", className: "tm-circle", onClick: () => n({ type: "reset" }), title: "Reset", children: /* @__PURE__ */ S.jsx(pS, { size: 17 }) })
          ] }),
          t.phase === "finished" ? /* @__PURE__ */ S.jsx(
            Pe.span,
            {
              className: "tm-reminder-sub",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              children: "Session complete"
            }
          ) : null,
          t.reminders.length > 0 && t.phase !== "finished" ? /* @__PURE__ */ S.jsx("div", { className: "tm-presets", style: { marginTop: 2 }, children: t.reminders.map((u) => /* @__PURE__ */ S.jsxs("span", { className: "tm-chip", children: [
            u.label,
            " · ",
            u.intervalMinutes,
            "m"
          ] }, u.id)) }) : null
        ]
      },
      "running"
    ) }),
    /* @__PURE__ */ S.jsx("div", { className: "tm-footer", children: /* @__PURE__ */ S.jsxs(
      "button",
      {
        type: "button",
        className: "tm-toggle",
        "data-on": t.inheritTheme,
        onClick: () => n({ type: "setInheritTheme", value: !t.inheritTheme }),
        title: t.inheritTheme ? "Using Agent Code theme — click for black & white" : "Using black & white — click to inherit Agent Code theme",
        children: [
          /* @__PURE__ */ S.jsx("span", { className: "tm-toggle-dot" }),
          t.inheritTheme ? "Inheriting theme" : "Black & white"
        ]
      }
    ) }),
    /* @__PURE__ */ S.jsx(Qr, { children: l ? /* @__PURE__ */ S.jsx(TS, { reminder: l, onDismiss: () => n({ type: "dismissReminder" }) }) : null })
  ] });
}
const AS = {
  activeTab: "timer",
  timer: {
    phase: "idle",
    totalSeconds: 30 * 60,
    remainingSeconds: 30 * 60,
    reminders: [],
    activeReminderId: null,
    firedReminderKeys: [],
    inheritTheme: !1
  },
  tasks: { tasks: [] }
};
function DS({ context: e }) {
  const { api: t } = e, [n, r] = k.useState(() => e.runtime.state() ?? AS);
  k.useEffect(() => e.runtime.subscribe(r), [e]);
  const i = k.useCallback((u, c) => {
    e.runtime.request(u, c).catch((f) => {
      t.ui.showToast(f instanceof Error ? f.message : String(f));
    });
  }, [t.ui, e.runtime]), s = k.useCallback((u) => i("timerAction", u), [i]), o = k.useCallback((u) => i("tasksAction", u), [i]), l = k.useCallback((u) => i("selectTab", { tab: u }), [i]), a = k.useRef(null);
  return k.useEffect(() => {
    const u = a.current;
    if (!u) return;
    const c = () => gv(u, n.timer.inheritTheme);
    return c(), n.timer.inheritTheme ? yv(c) : void 0;
  }, [n.timer.inheritTheme]), /* @__PURE__ */ S.jsxs("div", { className: "jwf", ref: a, children: [
    /* @__PURE__ */ S.jsx(
      vv,
      {
        activeTab: n.activeTab,
        timerRunning: n.timer.phase === "running",
        onSelect: l
      }
    ),
    n.activeTab === "tasks" ? /* @__PURE__ */ S.jsx(sS, { state: n.tasks, send: o }) : /* @__PURE__ */ S.jsx(ES, { api: t, state: n.timer, send: s })
  ] });
}
function RS(e, t) {
  pv();
  const n = rh(e);
  return n.render(/* @__PURE__ */ S.jsx(DS, { context: t })), () => {
    queueMicrotask(() => n.unmount());
  };
}
const VS = zm({
  mount: RS
});
export {
  VS as default
};
