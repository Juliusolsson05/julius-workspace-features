import { M as Bm, b as Um } from "./types-YYypkfS4.js";
var Gf = { exports: {} }, Es = {}, Qf = { exports: {} }, _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei = Symbol.for("react.element"), $m = Symbol.for("react.portal"), Wm = Symbol.for("react.fragment"), Hm = Symbol.for("react.strict_mode"), Km = Symbol.for("react.profiler"), bm = Symbol.for("react.provider"), Gm = Symbol.for("react.context"), Qm = Symbol.for("react.forward_ref"), Xm = Symbol.for("react.suspense"), Ym = Symbol.for("react.memo"), Zm = Symbol.for("react.lazy"), vu = Symbol.iterator;
function qm(e) {
  return e === null || typeof e != "object" ? null : (e = vu && e[vu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Xf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Yf = Object.assign, Zf = {};
function Qn(e, t, n) {
  this.props = e, this.context = t, this.refs = Zf, this.updater = n || Xf;
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qf() {
}
qf.prototype = Qn.prototype;
function Hl(e, t, n) {
  this.props = e, this.context = t, this.refs = Zf, this.updater = n || Xf;
}
var Kl = Hl.prototype = new qf();
Kl.constructor = Hl;
Yf(Kl, Qn.prototype);
Kl.isPureReactComponent = !0;
var xu = Array.isArray, Jf = Object.prototype.hasOwnProperty, bl = { current: null }, ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function td(e, t, n) {
  var r, i = {}, s = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Jf.call(t, r) && !ed.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: ei, type: e, key: s, ref: o, props: i, _owner: bl.current };
}
function Jm(e, t) {
  return { $$typeof: ei, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Gl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ei;
}
function eg(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var wu = /\/+/g;
function Ys(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? eg("" + e.key) : t.toString(36);
}
function Li(e, t, n, r, i) {
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
        case ei:
        case $m:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Ys(o, 0) : r, xu(i) ? (n = "", e != null && (n = e.replace(wu, "$&/") + "/"), Li(i, t, n, "", function(u) {
    return u;
  })) : i != null && (Gl(i) && (i = Jm(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(wu, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", xu(e)) for (var l = 0; l < e.length; l++) {
    s = e[l];
    var a = r + Ys(s, l);
    o += Li(s, t, n, a, i);
  }
  else if (a = qm(e), typeof a == "function") for (e = a.call(e), l = 0; !(s = e.next()).done; ) s = s.value, a = r + Ys(s, l++), o += Li(s, t, n, a, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function di(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Li(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function tg(e) {
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
var ve = { current: null }, Ni = { transition: null }, ng = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: Ni, ReactCurrentOwner: bl };
function nd() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = { map: di, forEach: function(e, t, n) {
  di(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return di(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return di(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Gl(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
_.Component = Qn;
_.Fragment = Wm;
_.Profiler = Km;
_.PureComponent = Hl;
_.StrictMode = Hm;
_.Suspense = Xm;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ng;
_.act = nd;
_.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yf({}, e.props), i = e.key, s = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = bl.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Jf.call(t, a) && !ed.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ei, type: e.type, key: i, ref: s, props: r, _owner: o };
};
_.createContext = function(e) {
  return e = { $$typeof: Gm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: bm, _context: e }, e.Consumer = e;
};
_.createElement = td;
_.createFactory = function(e) {
  var t = td.bind(null, e);
  return t.type = e, t;
};
_.createRef = function() {
  return { current: null };
};
_.forwardRef = function(e) {
  return { $$typeof: Qm, render: e };
};
_.isValidElement = Gl;
_.lazy = function(e) {
  return { $$typeof: Zm, _payload: { _status: -1, _result: e }, _init: tg };
};
_.memo = function(e, t) {
  return { $$typeof: Ym, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function(e) {
  var t = Ni.transition;
  Ni.transition = {};
  try {
    e();
  } finally {
    Ni.transition = t;
  }
};
_.unstable_act = nd;
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
Qf.exports = _;
var k = Qf.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rg = k, ig = Symbol.for("react.element"), sg = Symbol.for("react.fragment"), og = Object.prototype.hasOwnProperty, lg = rg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ag = { key: !0, ref: !0, __self: !0, __source: !0 };
function rd(e, t, n) {
  var r, i = {}, s = null, o = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) og.call(t, r) && !ag.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: ig, type: e, key: s, ref: o, props: i, _owner: lg.current };
}
Es.Fragment = sg;
Es.jsx = rd;
Es.jsxs = rd;
Gf.exports = Es;
var S = Gf.exports, id = { exports: {} }, Ve = {}, sd = { exports: {} }, od = {};
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
      var Y = L - 1 >>> 1, re = D[Y];
      if (0 < i(re, V)) D[Y] = V, D[L] = re, L = Y;
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
      e: for (var Y = 0, re = D.length, ci = re >>> 1; Y < ci; ) {
        var Wt = 2 * (Y + 1) - 1, Xs = D[Wt], Ht = Wt + 1, fi = D[Ht];
        if (0 > i(Xs, L)) Ht < re && 0 > i(fi, Xs) ? (D[Y] = fi, D[Ht] = L, Y = Ht) : (D[Y] = Xs, D[Wt] = L, Y = Wt);
        else if (Ht < re && 0 > i(fi, L)) D[Y] = fi, D[Ht] = L, Y = Ht;
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
  var a = [], u = [], c = 1, f = null, d = 3, g = !1, y = !1, v = !1, T = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(D) {
    for (var V = n(u); V !== null; ) {
      if (V.callback === null) r(u);
      else if (V.startTime <= D) r(u), V.sortIndex = V.expirationTime, t(a, V);
      else break;
      V = n(u);
    }
  }
  function x(D) {
    if (v = !1, m(D), !y) if (n(a) !== null) y = !0, ui(w);
    else {
      var V = n(u);
      V !== null && ee(x, V.startTime - D);
    }
  }
  function w(D, V) {
    y = !1, v && (v = !1, h(C), C = -1), g = !0;
    var L = d;
    try {
      for (m(V), f = n(a); f !== null && (!(f.expirationTime > V) || D && !I()); ) {
        var Y = f.callback;
        if (typeof Y == "function") {
          f.callback = null, d = f.priorityLevel;
          var re = Y(f.expirationTime <= V);
          V = e.unstable_now(), typeof re == "function" ? f.callback = re : f === n(a) && r(a), m(V);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ci = !0;
      else {
        var Wt = n(u);
        Wt !== null && ee(x, Wt.startTime - V), ci = !1;
      }
      return ci;
    } finally {
      f = null, d = L, g = !1;
    }
  }
  var E = !1, R = null, C = -1, N = 5, P = -1;
  function I() {
    return !(e.unstable_now() - P < N);
  }
  function $e() {
    if (R !== null) {
      var D = e.unstable_now();
      P = D;
      var V = !0;
      try {
        V = R(!0, D);
      } finally {
        V ? $t() : (E = !1, R = null);
      }
    } else E = !1;
  }
  var $t;
  if (typeof p == "function") $t = function() {
    p($e);
  };
  else if (typeof MessageChannel < "u") {
    var er = new MessageChannel(), yu = er.port2;
    er.port1.onmessage = $e, $t = function() {
      yu.postMessage(null);
    };
  } else $t = function() {
    T($e, 0);
  };
  function ui(D) {
    R = D, E || (E = !0, $t());
  }
  function ee(D, V) {
    C = T(function() {
      D(e.unstable_now());
    }, V);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    y || g || (y = !0, ui(w));
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
    var Y = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? Y + L : Y) : L = Y, D) {
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
    return re = L + re, D = { id: c++, callback: V, priorityLevel: D, startTime: L, expirationTime: re, sortIndex: -1 }, L > Y ? (D.sortIndex = L, t(u, D), n(a) === null && D === n(u) && (v ? (h(C), C = -1) : v = !0, ee(x, L - Y))) : (D.sortIndex = re, t(a, D), y || g || (y = !0, ui(w))), D;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(D) {
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
})(od);
sd.exports = od;
var ug = sd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cg = k, Me = ug;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ld = /* @__PURE__ */ new Set(), Vr = {};
function un(e, t) {
  In(e, t), In(e + "Capture", t);
}
function In(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) ld.add(t[e]);
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fo = Object.prototype.hasOwnProperty, fg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Su = {}, ku = {};
function dg(e) {
  return Fo.call(ku, e) ? !0 : Fo.call(Su, e) ? !1 : fg.test(e) ? ku[e] = !0 : (Su[e] = !0, !1);
}
function pg(e, t, n, r) {
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
function hg(e, t, n, r) {
  if (t === null || typeof t > "u" || pg(e, t, n, r)) return !0;
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
var Ql = /[\-:]([a-z])/g;
function Xl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ql,
    Xl
  );
  ce[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ql, Xl);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ql, Xl);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yl(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (hg(t, n, i, r) && (n = null), r || i === null ? dg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vt = cg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pi = Symbol.for("react.element"), hn = Symbol.for("react.portal"), mn = Symbol.for("react.fragment"), Zl = Symbol.for("react.strict_mode"), Io = Symbol.for("react.profiler"), ad = Symbol.for("react.provider"), ud = Symbol.for("react.context"), ql = Symbol.for("react.forward_ref"), Oo = Symbol.for("react.suspense"), zo = Symbol.for("react.suspense_list"), Jl = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), cd = Symbol.for("react.offscreen"), Tu = Symbol.iterator;
function tr(e) {
  return e === null || typeof e != "object" ? null : (e = Tu && e[Tu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Zs;
function fr(e) {
  if (Zs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Zs = t && t[1] || "";
  }
  return `
` + Zs + e;
}
var qs = !1;
function Js(e, t) {
  if (!e || qs) return "";
  qs = !0;
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
    qs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? fr(e) : "";
}
function mg(e) {
  switch (e.tag) {
    case 5:
      return fr(e.type);
    case 16:
      return fr("Lazy");
    case 13:
      return fr("Suspense");
    case 19:
      return fr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Js(e.type, !1), e;
    case 11:
      return e = Js(e.type.render, !1), e;
    case 1:
      return e = Js(e.type, !0), e;
    default:
      return "";
  }
}
function Bo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mn:
      return "Fragment";
    case hn:
      return "Portal";
    case Io:
      return "Profiler";
    case Zl:
      return "StrictMode";
    case Oo:
      return "Suspense";
    case zo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ud:
      return (e.displayName || "Context") + ".Consumer";
    case ad:
      return (e._context.displayName || "Context") + ".Provider";
    case ql:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Jl:
      return t = e.displayName || null, t !== null ? t : Bo(e.type) || "Memo";
    case St:
      t = e._payload, e = e._init;
      try {
        return Bo(e(t));
      } catch {
      }
  }
  return null;
}
function gg(e) {
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
      return Bo(t);
    case 8:
      return t === Zl ? "StrictMode" : "Mode";
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
function _t(e) {
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
function fd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function yg(e) {
  var t = fd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function hi(e) {
  e._valueTracker || (e._valueTracker = yg(e));
}
function dd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = fd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Xi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Uo(e, t) {
  var n = t.checked;
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = _t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function pd(e, t) {
  t = t.checked, t != null && Yl(e, "checked", t, !1);
}
function $o(e, t) {
  pd(e, t);
  var n = _t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Wo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wo(e, t.type, _t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Pu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Wo(e, t, n) {
  (t !== "number" || Xi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var dr = Array.isArray;
function jn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ho(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Eu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (dr(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: _t(n) };
}
function hd(e, t) {
  var n = _t(t.value), r = _t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function md(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ko(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? md(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mi, gd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (mi = mi || document.createElement("div"), mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
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
}, vg = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function(e) {
  vg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), vr[t] = vr[e];
  });
});
function yd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || vr.hasOwnProperty(e) && vr[e] ? ("" + t).trim() : t + "px";
}
function vd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = yd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var xg = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function bo(e, t) {
  if (t) {
    if (xg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function Go(e, t) {
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
var Qo = null;
function ea(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Xo = null, Vn = null, Ln = null;
function Ru(e) {
  if (e = ri(e)) {
    if (typeof Xo != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = js(t), Xo(e.stateNode, e.type, t));
  }
}
function xd(e) {
  Vn ? Ln ? Ln.push(e) : Ln = [e] : Vn = e;
}
function wd() {
  if (Vn) {
    var e = Vn, t = Ln;
    if (Ln = Vn = null, Ru(e), t) for (e = 0; e < t.length; e++) Ru(t[e]);
  }
}
function Sd(e, t) {
  return e(t);
}
function kd() {
}
var eo = !1;
function Td(e, t, n) {
  if (eo) return e(t, n);
  eo = !0;
  try {
    return Sd(e, t, n);
  } finally {
    eo = !1, (Vn !== null || Ln !== null) && (kd(), wd());
  }
}
function Nr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = js(n);
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
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var Yo = !1;
if (dt) try {
  var nr = {};
  Object.defineProperty(nr, "passive", { get: function() {
    Yo = !0;
  } }), window.addEventListener("test", nr, nr), window.removeEventListener("test", nr, nr);
} catch {
  Yo = !1;
}
function wg(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xr = !1, Yi = null, Zi = !1, Zo = null, Sg = { onError: function(e) {
  xr = !0, Yi = e;
} };
function kg(e, t, n, r, i, s, o, l, a) {
  xr = !1, Yi = null, wg.apply(Sg, arguments);
}
function Tg(e, t, n, r, i, s, o, l, a) {
  if (kg.apply(this, arguments), xr) {
    if (xr) {
      var u = Yi;
      xr = !1, Yi = null;
    } else throw Error(A(198));
    Zi || (Zi = !0, Zo = u);
  }
}
function cn(e) {
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
function Cd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Du(e) {
  if (cn(e) !== e) throw Error(A(188));
}
function Cg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = cn(e), t === null) throw Error(A(188));
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
        if (s === n) return Du(i), e;
        if (s === r) return Du(i), t;
        s = s.sibling;
      }
      throw Error(A(188));
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
        if (!o) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Pd(e) {
  return e = Cg(e), e !== null ? Ed(e) : null;
}
function Ed(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ed(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ad = Me.unstable_scheduleCallback, Mu = Me.unstable_cancelCallback, Pg = Me.unstable_shouldYield, Eg = Me.unstable_requestPaint, q = Me.unstable_now, Ag = Me.unstable_getCurrentPriorityLevel, ta = Me.unstable_ImmediatePriority, Rd = Me.unstable_UserBlockingPriority, qi = Me.unstable_NormalPriority, Rg = Me.unstable_LowPriority, Dd = Me.unstable_IdlePriority, As = null, tt = null;
function Dg(e) {
  if (tt && typeof tt.onCommitFiberRoot == "function") try {
    tt.onCommitFiberRoot(As, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Xe = Math.clz32 ? Math.clz32 : Vg, Mg = Math.log, jg = Math.LN2;
function Vg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Mg(e) / jg | 0) | 0;
}
var gi = 64, yi = 4194304;
function pr(e) {
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
function Ji(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? r = pr(l) : (s &= o, s !== 0 && (r = pr(s)));
  } else o = n & ~i, o !== 0 ? r = pr(o) : s !== 0 && (r = pr(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Xe(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Lg(e, t) {
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
function Ng(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - Xe(s), l = 1 << o, a = i[o];
    a === -1 ? (!(l & n) || l & r) && (i[o] = Lg(l, t)) : a <= t && (e.expiredLanes |= l), s &= ~l;
  }
}
function qo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Md() {
  var e = gi;
  return gi <<= 1, !(gi & 4194240) && (gi = 64), e;
}
function to(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ti(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xe(t), e[t] = n;
}
function _g(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Xe(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function na(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var O = 0;
function jd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Vd, ra, Ld, Nd, _d, Jo = !1, vi = [], At = null, Rt = null, Dt = null, _r = /* @__PURE__ */ new Map(), Fr = /* @__PURE__ */ new Map(), Tt = [], Fg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ju(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      At = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function rr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = ri(t), t !== null && ra(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Ig(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return At = rr(At, e, t, n, r, i), !0;
    case "dragenter":
      return Rt = rr(Rt, e, t, n, r, i), !0;
    case "mouseover":
      return Dt = rr(Dt, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return _r.set(s, rr(_r.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, Fr.set(s, rr(Fr.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Fd(e) {
  var t = Yt(e.target);
  if (t !== null) {
    var n = cn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Cd(n), t !== null) {
          e.blockedOn = t, _d(e.priority, function() {
            Ld(n);
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
function _i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = el(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Qo = r, n.target.dispatchEvent(r), Qo = null;
    } else return t = ri(n), t !== null && ra(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Vu(e, t, n) {
  _i(e) && n.delete(t);
}
function Og() {
  Jo = !1, At !== null && _i(At) && (At = null), Rt !== null && _i(Rt) && (Rt = null), Dt !== null && _i(Dt) && (Dt = null), _r.forEach(Vu), Fr.forEach(Vu);
}
function ir(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Jo || (Jo = !0, Me.unstable_scheduleCallback(Me.unstable_NormalPriority, Og)));
}
function Ir(e) {
  function t(i) {
    return ir(i, e);
  }
  if (0 < vi.length) {
    ir(vi[0], e);
    for (var n = 1; n < vi.length; n++) {
      var r = vi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (At !== null && ir(At, e), Rt !== null && ir(Rt, e), Dt !== null && ir(Dt, e), _r.forEach(t), Fr.forEach(t), n = 0; n < Tt.length; n++) r = Tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && (n = Tt[0], n.blockedOn === null); ) Fd(n), n.blockedOn === null && Tt.shift();
}
var Nn = vt.ReactCurrentBatchConfig, es = !0;
function zg(e, t, n, r) {
  var i = O, s = Nn.transition;
  Nn.transition = null;
  try {
    O = 1, ia(e, t, n, r);
  } finally {
    O = i, Nn.transition = s;
  }
}
function Bg(e, t, n, r) {
  var i = O, s = Nn.transition;
  Nn.transition = null;
  try {
    O = 4, ia(e, t, n, r);
  } finally {
    O = i, Nn.transition = s;
  }
}
function ia(e, t, n, r) {
  if (es) {
    var i = el(e, t, n, r);
    if (i === null) fo(e, t, r, ts, n), ju(e, r);
    else if (Ig(i, e, t, n, r)) r.stopPropagation();
    else if (ju(e, r), t & 4 && -1 < Fg.indexOf(e)) {
      for (; i !== null; ) {
        var s = ri(i);
        if (s !== null && Vd(s), s = el(e, t, n, r), s === null && fo(e, t, r, ts, n), s === i) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else fo(e, t, r, null, n);
  }
}
var ts = null;
function el(e, t, n, r) {
  if (ts = null, e = ea(r), e = Yt(e), e !== null) if (t = cn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Cd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ts = e, null;
}
function Id(e) {
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
      switch (Ag()) {
        case ta:
          return 1;
        case Rd:
          return 4;
        case qi:
        case Rg:
          return 16;
        case Dd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pt = null, sa = null, Fi = null;
function Od() {
  if (Fi) return Fi;
  var e, t = sa, n = t.length, r, i = "value" in Pt ? Pt.value : Pt.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++) ;
  return Fi = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Ii(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function xi() {
  return !0;
}
function Lu() {
  return !1;
}
function Le(e) {
  function t(n, r, i, s, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? xi : Lu, this.isPropagationStopped = Lu, this;
  }
  return G(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = xi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = xi);
  }, persist: function() {
  }, isPersistent: xi }), t;
}
var Xn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, oa = Le(Xn), ni = G({}, Xn, { view: 0, detail: 0 }), Ug = Le(ni), no, ro, sr, Rs = G({}, ni, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: la, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== sr && (sr && e.type === "mousemove" ? (no = e.screenX - sr.screenX, ro = e.screenY - sr.screenY) : ro = no = 0, sr = e), no);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ro;
} }), Nu = Le(Rs), $g = G({}, Rs, { dataTransfer: 0 }), Wg = Le($g), Hg = G({}, ni, { relatedTarget: 0 }), io = Le(Hg), Kg = G({}, Xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bg = Le(Kg), Gg = G({}, Xn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Qg = Le(Gg), Xg = G({}, Xn, { data: 0 }), _u = Le(Xg), Yg = {
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
}, Zg = {
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
}, qg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qg[e]) ? !!t[e] : !1;
}
function la() {
  return Jg;
}
var ey = G({}, ni, { key: function(e) {
  if (e.key) {
    var t = Yg[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ii(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zg[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: la, charCode: function(e) {
  return e.type === "keypress" ? Ii(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ii(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ty = Le(ey), ny = G({}, Rs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fu = Le(ny), ry = G({}, ni, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: la }), iy = Le(ry), sy = G({}, Xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), oy = Le(sy), ly = G({}, Rs, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ay = Le(ly), uy = [9, 13, 27, 32], aa = dt && "CompositionEvent" in window, wr = null;
dt && "documentMode" in document && (wr = document.documentMode);
var cy = dt && "TextEvent" in window && !wr, zd = dt && (!aa || wr && 8 < wr && 11 >= wr), Iu = " ", Ou = !1;
function Bd(e, t) {
  switch (e) {
    case "keyup":
      return uy.indexOf(t.keyCode) !== -1;
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
function Ud(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var gn = !1;
function fy(e, t) {
  switch (e) {
    case "compositionend":
      return Ud(t);
    case "keypress":
      return t.which !== 32 ? null : (Ou = !0, Iu);
    case "textInput":
      return e = t.data, e === Iu && Ou ? null : e;
    default:
      return null;
  }
}
function dy(e, t) {
  if (gn) return e === "compositionend" || !aa && Bd(e, t) ? (e = Od(), Fi = sa = Pt = null, gn = !1, e) : null;
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
      return zd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var py = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function zu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!py[e.type] : t === "textarea";
}
function $d(e, t, n, r) {
  xd(r), t = ns(t, "onChange"), 0 < t.length && (n = new oa("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Sr = null, Or = null;
function hy(e) {
  Jd(e, 0);
}
function Ds(e) {
  var t = xn(e);
  if (dd(t)) return e;
}
function my(e, t) {
  if (e === "change") return t;
}
var Wd = !1;
if (dt) {
  var so;
  if (dt) {
    var oo = "oninput" in document;
    if (!oo) {
      var Bu = document.createElement("div");
      Bu.setAttribute("oninput", "return;"), oo = typeof Bu.oninput == "function";
    }
    so = oo;
  } else so = !1;
  Wd = so && (!document.documentMode || 9 < document.documentMode);
}
function Uu() {
  Sr && (Sr.detachEvent("onpropertychange", Hd), Or = Sr = null);
}
function Hd(e) {
  if (e.propertyName === "value" && Ds(Or)) {
    var t = [];
    $d(t, Or, e, ea(e)), Td(hy, t);
  }
}
function gy(e, t, n) {
  e === "focusin" ? (Uu(), Sr = t, Or = n, Sr.attachEvent("onpropertychange", Hd)) : e === "focusout" && Uu();
}
function yy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ds(Or);
}
function vy(e, t) {
  if (e === "click") return Ds(t);
}
function xy(e, t) {
  if (e === "input" || e === "change") return Ds(t);
}
function wy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ze = typeof Object.is == "function" ? Object.is : wy;
function zr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Fo.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function $u(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wu(e, t) {
  var n = $u(e);
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
    n = $u(n);
  }
}
function Kd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function bd() {
  for (var e = window, t = Xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xi(e.document);
  }
  return t;
}
function ua(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Sy(e) {
  var t = bd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Kd(n.ownerDocument.documentElement, n)) {
    if (r !== null && ua(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = Wu(n, s);
        var o = Wu(
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
var ky = dt && "documentMode" in document && 11 >= document.documentMode, yn = null, tl = null, kr = null, nl = !1;
function Hu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  nl || yn == null || yn !== Xi(r) || (r = yn, "selectionStart" in r && ua(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), kr && zr(kr, r) || (kr = r, r = ns(tl, "onSelect"), 0 < r.length && (t = new oa("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yn)));
}
function wi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var vn = { animationend: wi("Animation", "AnimationEnd"), animationiteration: wi("Animation", "AnimationIteration"), animationstart: wi("Animation", "AnimationStart"), transitionend: wi("Transition", "TransitionEnd") }, lo = {}, Gd = {};
dt && (Gd = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
function Ms(e) {
  if (lo[e]) return lo[e];
  if (!vn[e]) return e;
  var t = vn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gd) return lo[e] = t[n];
  return e;
}
var Qd = Ms("animationend"), Xd = Ms("animationiteration"), Yd = Ms("animationstart"), Zd = Ms("transitionend"), qd = /* @__PURE__ */ new Map(), Ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ot(e, t) {
  qd.set(e, t), un(t, [e]);
}
for (var ao = 0; ao < Ku.length; ao++) {
  var uo = Ku[ao], Ty = uo.toLowerCase(), Cy = uo[0].toUpperCase() + uo.slice(1);
  Ot(Ty, "on" + Cy);
}
Ot(Qd, "onAnimationEnd");
Ot(Xd, "onAnimationIteration");
Ot(Yd, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Zd, "onTransitionEnd");
In("onMouseEnter", ["mouseout", "mouseover"]);
In("onMouseLeave", ["mouseout", "mouseover"]);
In("onPointerEnter", ["pointerout", "pointerover"]);
In("onPointerLeave", ["pointerout", "pointerover"]);
un("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
un("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
un("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Py = new Set("cancel close invalid load scroll toggle".split(" ").concat(hr));
function bu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Tg(r, t, void 0, e), e.currentTarget = null;
}
function Jd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var l = r[o], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== s && i.isPropagationStopped()) break e;
        bu(i, l, u), s = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (l = r[o], a = l.instance, u = l.currentTarget, l = l.listener, a !== s && i.isPropagationStopped()) break e;
        bu(i, l, u), s = a;
      }
    }
  }
  if (Zi) throw e = Zo, Zi = !1, Zo = null, e;
}
function U(e, t) {
  var n = t[ll];
  n === void 0 && (n = t[ll] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ep(t, e, 2, !1), n.add(r));
}
function co(e, t, n) {
  var r = 0;
  t && (r |= 4), ep(n, e, r, t);
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function Br(e) {
  if (!e[Si]) {
    e[Si] = !0, ld.forEach(function(n) {
      n !== "selectionchange" && (Py.has(n) || co(n, !1, e), co(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || (t[Si] = !0, co("selectionchange", !1, t));
  }
}
function ep(e, t, n, r) {
  switch (Id(t)) {
    case 1:
      var i = zg;
      break;
    case 4:
      i = Bg;
      break;
    default:
      i = ia;
  }
  n = i.bind(null, t, n, e), i = void 0, !Yo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function fo(e, t, n, r, i) {
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
        if (o = Yt(l), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = s = o;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Td(function() {
    var u = s, c = ea(n), f = [];
    e: {
      var d = qd.get(e);
      if (d !== void 0) {
        var g = oa, y = e;
        switch (e) {
          case "keypress":
            if (Ii(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = ty;
            break;
          case "focusin":
            y = "focus", g = io;
            break;
          case "focusout":
            y = "blur", g = io;
            break;
          case "beforeblur":
          case "afterblur":
            g = io;
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
            g = Nu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Wg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = iy;
            break;
          case Qd:
          case Xd:
          case Yd:
            g = bg;
            break;
          case Zd:
            g = oy;
            break;
          case "scroll":
            g = Ug;
            break;
          case "wheel":
            g = ay;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Qg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Fu;
        }
        var v = (t & 4) !== 0, T = !v && e === "scroll", h = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var x = m.stateNode;
          if (m.tag === 5 && x !== null && (m = x, h !== null && (x = Nr(p, h), x != null && v.push(Ur(p, x, m)))), T) break;
          p = p.return;
        }
        0 < v.length && (d = new g(d, y, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Qo && (y = n.relatedTarget || n.fromElement) && (Yt(y) || y[pt])) break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = u, y = y ? Yt(y) : null, y !== null && (T = cn(y), y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = u), g !== y)) {
          if (v = Nu, x = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = Fu, x = "onPointerLeave", h = "onPointerEnter", p = "pointer"), T = g == null ? d : xn(g), m = y == null ? d : xn(y), d = new v(x, p + "leave", g, n, c), d.target = T, d.relatedTarget = m, x = null, Yt(c) === u && (v = new v(h, p + "enter", y, n, c), v.target = m, v.relatedTarget = T, x = v), T = x, g && y) t: {
            for (v = g, h = y, p = 0, m = v; m; m = pn(m)) p++;
            for (m = 0, x = h; x; x = pn(x)) m++;
            for (; 0 < p - m; ) v = pn(v), p--;
            for (; 0 < m - p; ) h = pn(h), m--;
            for (; p--; ) {
              if (v === h || h !== null && v === h.alternate) break t;
              v = pn(v), h = pn(h);
            }
            v = null;
          }
          else v = null;
          g !== null && Gu(f, d, g, v, !1), y !== null && T !== null && Gu(f, T, y, v, !0);
        }
      }
      e: {
        if (d = u ? xn(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var w = my;
        else if (zu(d)) if (Wd) w = xy;
        else {
          w = yy;
          var E = gy;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = vy);
        if (w && (w = w(e, u))) {
          $d(f, w, n, c);
          break e;
        }
        E && E(e, d, u), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Wo(d, "number", d.value);
      }
      switch (E = u ? xn(u) : window, e) {
        case "focusin":
          (zu(E) || E.contentEditable === "true") && (yn = E, tl = u, kr = null);
          break;
        case "focusout":
          kr = tl = yn = null;
          break;
        case "mousedown":
          nl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          nl = !1, Hu(f, n, c);
          break;
        case "selectionchange":
          if (ky) break;
        case "keydown":
        case "keyup":
          Hu(f, n, c);
      }
      var R;
      if (aa) e: {
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
      else gn ? Bd(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C && (zd && n.locale !== "ko" && (gn || C !== "onCompositionStart" ? C === "onCompositionEnd" && gn && (R = Od()) : (Pt = c, sa = "value" in Pt ? Pt.value : Pt.textContent, gn = !0)), E = ns(u, C), 0 < E.length && (C = new _u(C, e, null, n, c), f.push({ event: C, listeners: E }), R ? C.data = R : (R = Ud(n), R !== null && (C.data = R)))), (R = cy ? fy(e, n) : dy(e, n)) && (u = ns(u, "onBeforeInput"), 0 < u.length && (c = new _u("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = R));
    }
    Jd(f, t);
  });
}
function Ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ns(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = Nr(e, n), s != null && r.unshift(Ur(e, s, i)), s = Nr(e, t), s != null && r.push(Ur(e, s, i))), e = e.return;
  }
  return r;
}
function pn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gu(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, i ? (a = Nr(n, s), a != null && o.unshift(Ur(n, a, l))) : i || (a = Nr(n, s), a != null && o.push(Ur(n, a, l)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ey = /\r\n?/g, Ay = /\u0000|\uFFFD/g;
function Qu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Ey, `
`).replace(Ay, "");
}
function ki(e, t, n) {
  if (t = Qu(t), Qu(e) !== t && n) throw Error(A(425));
}
function rs() {
}
var rl = null, il = null;
function sl(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ol = typeof setTimeout == "function" ? setTimeout : void 0, Ry = typeof clearTimeout == "function" ? clearTimeout : void 0, Xu = typeof Promise == "function" ? Promise : void 0, Dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xu < "u" ? function(e) {
  return Xu.resolve(null).then(e).catch(My);
} : ol;
function My(e) {
  setTimeout(function() {
    throw e;
  });
}
function po(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Ir(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Ir(t);
}
function Mt(e) {
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
function Yu(e) {
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
var Yn = Math.random().toString(36).slice(2), et = "__reactFiber$" + Yn, $r = "__reactProps$" + Yn, pt = "__reactContainer$" + Yn, ll = "__reactEvents$" + Yn, jy = "__reactListeners$" + Yn, Vy = "__reactHandles$" + Yn;
function Yt(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[pt] || n[et]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Yu(e); e !== null; ) {
        if (n = e[et]) return n;
        e = Yu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ri(e) {
  return e = e[et] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function js(e) {
  return e[$r] || null;
}
var al = [], wn = -1;
function zt(e) {
  return { current: e };
}
function $(e) {
  0 > wn || (e.current = al[wn], al[wn] = null, wn--);
}
function z(e, t) {
  wn++, al[wn] = e.current, e.current = t;
}
var Ft = {}, me = zt(Ft), ke = zt(!1), rn = Ft;
function On(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n) i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Te(e) {
  return e = e.childContextTypes, e != null;
}
function is() {
  $(ke), $(me);
}
function Zu(e, t, n) {
  if (me.current !== Ft) throw Error(A(168));
  z(me, t), z(ke, n);
}
function tp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(A(108, gg(e) || "Unknown", i));
  return G({}, n, r);
}
function ss(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, rn = me.current, z(me, e), z(ke, ke.current), !0;
}
function qu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = tp(e, t, rn), r.__reactInternalMemoizedMergedChildContext = e, $(ke), $(me), z(me, e)) : $(ke), z(ke, n);
}
var ot = null, Vs = !1, ho = !1;
function np(e) {
  ot === null ? ot = [e] : ot.push(e);
}
function Ly(e) {
  Vs = !0, np(e);
}
function Bt() {
  if (!ho && ot !== null) {
    ho = !0;
    var e = 0, t = O;
    try {
      var n = ot;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      ot = null, Vs = !1;
    } catch (i) {
      throw ot !== null && (ot = ot.slice(e + 1)), Ad(ta, Bt), i;
    } finally {
      O = t, ho = !1;
    }
  }
  return null;
}
var Sn = [], kn = 0, os = null, ls = 0, Fe = [], Ie = 0, sn = null, lt = 1, at = "";
function bt(e, t) {
  Sn[kn++] = ls, Sn[kn++] = os, os = e, ls = t;
}
function rp(e, t, n) {
  Fe[Ie++] = lt, Fe[Ie++] = at, Fe[Ie++] = sn, sn = e;
  var r = lt;
  e = at;
  var i = 32 - Xe(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - Xe(t) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, lt = 1 << 32 - Xe(t) + i | n << i | r, at = s + e;
  } else lt = 1 << s | n << i | r, at = e;
}
function ca(e) {
  e.return !== null && (bt(e, 1), rp(e, 1, 0));
}
function fa(e) {
  for (; e === os; ) os = Sn[--kn], Sn[kn] = null, ls = Sn[--kn], Sn[kn] = null;
  for (; e === sn; ) sn = Fe[--Ie], Fe[Ie] = null, at = Fe[--Ie], Fe[Ie] = null, lt = Fe[--Ie], Fe[Ie] = null;
}
var Re = null, Ae = null, W = !1, Qe = null;
function ip(e, t) {
  var n = Oe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ju(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Re = e, Ae = Mt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Re = e, Ae = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sn !== null ? { id: lt, overflow: at } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Oe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Re = e, Ae = null, !0) : !1;
    default:
      return !1;
  }
}
function ul(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function cl(e) {
  if (W) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Ju(e, t)) {
        if (ul(e)) throw Error(A(418));
        t = Mt(n.nextSibling);
        var r = Re;
        t && Ju(e, t) ? ip(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, Re = e);
      }
    } else {
      if (ul(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, W = !1, Re = e;
    }
  }
}
function ec(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Re = e;
}
function Ti(e) {
  if (e !== Re) return !1;
  if (!W) return ec(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !sl(e.type, e.memoizedProps)), t && (t = Ae)) {
    if (ul(e)) throw sp(), Error(A(418));
    for (; t; ) ip(e, t), t = Mt(t.nextSibling);
  }
  if (ec(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Re ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function sp() {
  for (var e = Ae; e; ) e = Mt(e.nextSibling);
}
function zn() {
  Ae = Re = null, W = !1;
}
function da(e) {
  Qe === null ? Qe = [e] : Qe.push(e);
}
var Ny = vt.ReactCurrentBatchConfig;
function or(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var i = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
        var l = i.refs;
        o === null ? delete l[s] : l[s] = o;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Ci(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function tc(e) {
  var t = e._init;
  return t(e._payload);
}
function op(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? (h.deletions = [p], h.flags |= 16) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), p = p.sibling;
    return null;
  }
  function r(h, p) {
    for (h = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), p = p.sibling;
    return h;
  }
  function i(h, p) {
    return h = Nt(h, p), h.index = 0, h.sibling = null, h;
  }
  function s(h, p, m) {
    return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < p ? (h.flags |= 2, p) : m) : (h.flags |= 2, p)) : (h.flags |= 1048576, p);
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, m, x) {
    return p === null || p.tag !== 6 ? (p = So(m, h.mode, x), p.return = h, p) : (p = i(p, m), p.return = h, p);
  }
  function a(h, p, m, x) {
    var w = m.type;
    return w === mn ? c(h, p, m.props.children, x, m.key) : p !== null && (p.elementType === w || typeof w == "object" && w !== null && w.$$typeof === St && tc(w) === p.type) ? (x = i(p, m.props), x.ref = or(h, p, m), x.return = h, x) : (x = Hi(m.type, m.key, m.props, null, h.mode, x), x.ref = or(h, p, m), x.return = h, x);
  }
  function u(h, p, m, x) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = ko(m, h.mode, x), p.return = h, p) : (p = i(p, m.children || []), p.return = h, p);
  }
  function c(h, p, m, x, w) {
    return p === null || p.tag !== 7 ? (p = tn(m, h.mode, x, w), p.return = h, p) : (p = i(p, m), p.return = h, p);
  }
  function f(h, p, m) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = So("" + p, h.mode, m), p.return = h, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case pi:
          return m = Hi(p.type, p.key, p.props, null, h.mode, m), m.ref = or(h, null, p), m.return = h, m;
        case hn:
          return p = ko(p, h.mode, m), p.return = h, p;
        case St:
          var x = p._init;
          return f(h, x(p._payload), m);
      }
      if (dr(p) || tr(p)) return p = tn(p, h.mode, m, null), p.return = h, p;
      Ci(h, p);
    }
    return null;
  }
  function d(h, p, m, x) {
    var w = p !== null ? p.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return w !== null ? null : l(h, p, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case pi:
          return m.key === w ? a(h, p, m, x) : null;
        case hn:
          return m.key === w ? u(h, p, m, x) : null;
        case St:
          return w = m._init, d(
            h,
            p,
            w(m._payload),
            x
          );
      }
      if (dr(m) || tr(m)) return w !== null ? null : c(h, p, m, x, null);
      Ci(h, m);
    }
    return null;
  }
  function g(h, p, m, x, w) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return h = h.get(m) || null, l(p, h, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case pi:
          return h = h.get(x.key === null ? m : x.key) || null, a(p, h, x, w);
        case hn:
          return h = h.get(x.key === null ? m : x.key) || null, u(p, h, x, w);
        case St:
          var E = x._init;
          return g(h, p, m, E(x._payload), w);
      }
      if (dr(x) || tr(x)) return h = h.get(m) || null, c(p, h, x, w, null);
      Ci(p, x);
    }
    return null;
  }
  function y(h, p, m, x) {
    for (var w = null, E = null, R = p, C = p = 0, N = null; R !== null && C < m.length; C++) {
      R.index > C ? (N = R, R = null) : N = R.sibling;
      var P = d(h, R, m[C], x);
      if (P === null) {
        R === null && (R = N);
        break;
      }
      e && R && P.alternate === null && t(h, R), p = s(P, p, C), E === null ? w = P : E.sibling = P, E = P, R = N;
    }
    if (C === m.length) return n(h, R), W && bt(h, C), w;
    if (R === null) {
      for (; C < m.length; C++) R = f(h, m[C], x), R !== null && (p = s(R, p, C), E === null ? w = R : E.sibling = R, E = R);
      return W && bt(h, C), w;
    }
    for (R = r(h, R); C < m.length; C++) N = g(R, h, C, m[C], x), N !== null && (e && N.alternate !== null && R.delete(N.key === null ? C : N.key), p = s(N, p, C), E === null ? w = N : E.sibling = N, E = N);
    return e && R.forEach(function(I) {
      return t(h, I);
    }), W && bt(h, C), w;
  }
  function v(h, p, m, x) {
    var w = tr(m);
    if (typeof w != "function") throw Error(A(150));
    if (m = w.call(m), m == null) throw Error(A(151));
    for (var E = w = null, R = p, C = p = 0, N = null, P = m.next(); R !== null && !P.done; C++, P = m.next()) {
      R.index > C ? (N = R, R = null) : N = R.sibling;
      var I = d(h, R, P.value, x);
      if (I === null) {
        R === null && (R = N);
        break;
      }
      e && R && I.alternate === null && t(h, R), p = s(I, p, C), E === null ? w = I : E.sibling = I, E = I, R = N;
    }
    if (P.done) return n(
      h,
      R
    ), W && bt(h, C), w;
    if (R === null) {
      for (; !P.done; C++, P = m.next()) P = f(h, P.value, x), P !== null && (p = s(P, p, C), E === null ? w = P : E.sibling = P, E = P);
      return W && bt(h, C), w;
    }
    for (R = r(h, R); !P.done; C++, P = m.next()) P = g(R, h, C, P.value, x), P !== null && (e && P.alternate !== null && R.delete(P.key === null ? C : P.key), p = s(P, p, C), E === null ? w = P : E.sibling = P, E = P);
    return e && R.forEach(function($e) {
      return t(h, $e);
    }), W && bt(h, C), w;
  }
  function T(h, p, m, x) {
    if (typeof m == "object" && m !== null && m.type === mn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case pi:
          e: {
            for (var w = m.key, E = p; E !== null; ) {
              if (E.key === w) {
                if (w = m.type, w === mn) {
                  if (E.tag === 7) {
                    n(h, E.sibling), p = i(E, m.props.children), p.return = h, h = p;
                    break e;
                  }
                } else if (E.elementType === w || typeof w == "object" && w !== null && w.$$typeof === St && tc(w) === E.type) {
                  n(h, E.sibling), p = i(E, m.props), p.ref = or(h, E, m), p.return = h, h = p;
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            m.type === mn ? (p = tn(m.props.children, h.mode, x, m.key), p.return = h, h = p) : (x = Hi(m.type, m.key, m.props, null, h.mode, x), x.ref = or(h, p, m), x.return = h, h = x);
          }
          return o(h);
        case hn:
          e: {
            for (E = m.key; p !== null; ) {
              if (p.key === E) if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                n(h, p.sibling), p = i(p, m.children || []), p.return = h, h = p;
                break e;
              } else {
                n(h, p);
                break;
              }
              else t(h, p);
              p = p.sibling;
            }
            p = ko(m, h.mode, x), p.return = h, h = p;
          }
          return o(h);
        case St:
          return E = m._init, T(h, p, E(m._payload), x);
      }
      if (dr(m)) return y(h, p, m, x);
      if (tr(m)) return v(h, p, m, x);
      Ci(h, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(h, p.sibling), p = i(p, m), p.return = h, h = p) : (n(h, p), p = So(m, h.mode, x), p.return = h, h = p), o(h)) : n(h, p);
  }
  return T;
}
var Bn = op(!0), lp = op(!1), as = zt(null), us = null, Tn = null, pa = null;
function ha() {
  pa = Tn = us = null;
}
function ma(e) {
  var t = as.current;
  $(as), e._currentValue = t;
}
function fl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function _n(e, t) {
  us = e, pa = Tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Be(e) {
  var t = e._currentValue;
  if (pa !== e) if (e = { context: e, memoizedValue: t, next: null }, Tn === null) {
    if (us === null) throw Error(A(308));
    Tn = e, us.dependencies = { lanes: 0, firstContext: e };
  } else Tn = Tn.next = e;
  return t;
}
var Zt = null;
function ga(e) {
  Zt === null ? Zt = [e] : Zt.push(e);
}
function ap(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, ga(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ht(e, r);
}
function ht(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var kt = !1;
function ya(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function up(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function ut(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ht(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, ga(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ht(e, n);
}
function Oi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, na(e, n);
  }
}
function nc(e, t) {
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
function cs(e, t, n, r) {
  var i = e.updateQueue;
  kt = !1;
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
              kt = !0;
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
    ln |= o, e.lanes = o, e.memoizedState = f;
  }
}
function rc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(A(191, i));
      i.call(r);
    }
  }
}
var ii = {}, nt = zt(ii), Wr = zt(ii), Hr = zt(ii);
function qt(e) {
  if (e === ii) throw Error(A(174));
  return e;
}
function va(e, t) {
  switch (z(Hr, t), z(Wr, e), z(nt, ii), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ko(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ko(t, e);
  }
  $(nt), z(nt, t);
}
function Un() {
  $(nt), $(Wr), $(Hr);
}
function cp(e) {
  qt(Hr.current);
  var t = qt(nt.current), n = Ko(t, e.type);
  t !== n && (z(Wr, e), z(nt, n));
}
function xa(e) {
  Wr.current === e && ($(nt), $(Wr));
}
var K = zt(0);
function fs(e) {
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
var mo = [];
function wa() {
  for (var e = 0; e < mo.length; e++) mo[e]._workInProgressVersionPrimary = null;
  mo.length = 0;
}
var zi = vt.ReactCurrentDispatcher, go = vt.ReactCurrentBatchConfig, on = 0, b = null, te = null, ie = null, ds = !1, Tr = !1, Kr = 0, _y = 0;
function fe() {
  throw Error(A(321));
}
function Sa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function ka(e, t, n, r, i, s) {
  if (on = s, b = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, zi.current = e === null || e.memoizedState === null ? zy : By, e = n(r, i), Tr) {
    s = 0;
    do {
      if (Tr = !1, Kr = 0, 25 <= s) throw Error(A(301));
      s += 1, ie = te = null, t.updateQueue = null, zi.current = Uy, e = n(r, i);
    } while (Tr);
  }
  if (zi.current = ps, t = te !== null && te.next !== null, on = 0, ie = te = b = null, ds = !1, t) throw Error(A(300));
  return e;
}
function Ta() {
  var e = Kr !== 0;
  return Kr = 0, e;
}
function Je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? b.memoizedState = ie = e : ie = ie.next = e, ie;
}
function Ue() {
  if (te === null) {
    var e = b.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = ie === null ? b.memoizedState : ie.next;
  if (t !== null) ie = t, te = e;
  else {
    if (e === null) throw Error(A(310));
    te = e, e = { memoizedState: te.memoizedState, baseState: te.baseState, baseQueue: te.baseQueue, queue: te.queue, next: null }, ie === null ? b.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function br(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yo(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = te, i = r.baseQueue, s = n.pending;
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
      if ((on & c) === c) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f, o = r) : a = a.next = f, b.lanes |= c, ln |= c;
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? o = r : a.next = l, Ze(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      s = i.lane, b.lanes |= s, ln |= s, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function vo(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = i = i.next;
    do
      s = e(s, o.action), o = o.next;
    while (o !== i);
    Ze(s, t.memoizedState) || (Se = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function fp() {
}
function dp(e, t) {
  var n = b, r = Ue(), i = t(), s = !Ze(r.memoizedState, i);
  if (s && (r.memoizedState = i, Se = !0), r = r.queue, Ca(mp.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, Gr(9, hp.bind(null, n, r, i, t), void 0, null), se === null) throw Error(A(349));
    on & 30 || pp(n, t, i);
  }
  return i;
}
function pp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = b.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, b.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function hp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, gp(t) && yp(e);
}
function mp(e, t, n) {
  return n(function() {
    gp(t) && yp(e);
  });
}
function gp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function yp(e) {
  var t = ht(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function ic(e) {
  var t = Je();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: br, lastRenderedState: e }, t.queue = e, e = e.dispatch = Oy.bind(null, b, e), [t.memoizedState, e];
}
function Gr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = b.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, b.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function vp() {
  return Ue().memoizedState;
}
function Bi(e, t, n, r) {
  var i = Je();
  b.flags |= e, i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ls(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (te !== null) {
    var o = te.memoizedState;
    if (s = o.destroy, r !== null && Sa(r, o.deps)) {
      i.memoizedState = Gr(t, n, s, r);
      return;
    }
  }
  b.flags |= e, i.memoizedState = Gr(1 | t, n, s, r);
}
function sc(e, t) {
  return Bi(8390656, 8, e, t);
}
function Ca(e, t) {
  return Ls(2048, 8, e, t);
}
function xp(e, t) {
  return Ls(4, 2, e, t);
}
function wp(e, t) {
  return Ls(4, 4, e, t);
}
function Sp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function kp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ls(4, 4, Sp.bind(null, t, e), n);
}
function Pa() {
}
function Tp(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Cp(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Pp(e, t, n) {
  return on & 21 ? (Ze(n, t) || (n = Md(), b.lanes |= n, ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function Fy(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = go.transition;
  go.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, go.transition = r;
  }
}
function Ep() {
  return Ue().memoizedState;
}
function Iy(e, t, n) {
  var r = Lt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ap(e)) Rp(t, n);
  else if (n = ap(e, t, n, r), n !== null) {
    var i = ye();
    Ye(n, e, r, i), Dp(n, t, r);
  }
}
function Oy(e, t, n) {
  var r = Lt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ap(e)) Rp(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var o = t.lastRenderedState, l = s(o, n);
      if (i.hasEagerState = !0, i.eagerState = l, Ze(l, o)) {
        var a = t.interleaved;
        a === null ? (i.next = i, ga(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = ap(e, t, i, r), n !== null && (i = ye(), Ye(n, e, r, i), Dp(n, t, r));
  }
}
function Ap(e) {
  var t = e.alternate;
  return e === b || t !== null && t === b;
}
function Rp(e, t) {
  Tr = ds = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Dp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, na(e, n);
  }
}
var ps = { readContext: Be, useCallback: fe, useContext: fe, useEffect: fe, useImperativeHandle: fe, useInsertionEffect: fe, useLayoutEffect: fe, useMemo: fe, useReducer: fe, useRef: fe, useState: fe, useDebugValue: fe, useDeferredValue: fe, useTransition: fe, useMutableSource: fe, useSyncExternalStore: fe, useId: fe, unstable_isNewReconciler: !1 }, zy = { readContext: Be, useCallback: function(e, t) {
  return Je().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Be, useEffect: sc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Bi(
    4194308,
    4,
    Sp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Bi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Bi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Je();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Je();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Iy.bind(null, b, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Je();
  return e = { current: e }, t.memoizedState = e;
}, useState: ic, useDebugValue: Pa, useDeferredValue: function(e) {
  return Je().memoizedState = e;
}, useTransition: function() {
  var e = ic(!1), t = e[0];
  return e = Fy.bind(null, e[1]), Je().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = b, i = Je();
  if (W) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(A(349));
    on & 30 || pp(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, sc(mp.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, Gr(9, hp.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Je(), t = se.identifierPrefix;
  if (W) {
    var n = at, r = lt;
    n = (r & ~(1 << 32 - Xe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Kr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = _y++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, By = {
  readContext: Be,
  useCallback: Tp,
  useContext: Be,
  useEffect: Ca,
  useImperativeHandle: kp,
  useInsertionEffect: xp,
  useLayoutEffect: wp,
  useMemo: Cp,
  useReducer: yo,
  useRef: vp,
  useState: function() {
    return yo(br);
  },
  useDebugValue: Pa,
  useDeferredValue: function(e) {
    var t = Ue();
    return Pp(t, te.memoizedState, e);
  },
  useTransition: function() {
    var e = yo(br)[0], t = Ue().memoizedState;
    return [e, t];
  },
  useMutableSource: fp,
  useSyncExternalStore: dp,
  useId: Ep,
  unstable_isNewReconciler: !1
}, Uy = { readContext: Be, useCallback: Tp, useContext: Be, useEffect: Ca, useImperativeHandle: kp, useInsertionEffect: xp, useLayoutEffect: wp, useMemo: Cp, useReducer: vo, useRef: vp, useState: function() {
  return vo(br);
}, useDebugValue: Pa, useDeferredValue: function(e) {
  var t = Ue();
  return te === null ? t.memoizedState = e : Pp(t, te.memoizedState, e);
}, useTransition: function() {
  var e = vo(br)[0], t = Ue().memoizedState;
  return [e, t];
}, useMutableSource: fp, useSyncExternalStore: dp, useId: Ep, unstable_isNewReconciler: !1 };
function be(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function dl(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ns = { isMounted: function(e) {
  return (e = e._reactInternals) ? cn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), i = Lt(e), s = ut(r, i);
  s.payload = t, n != null && (s.callback = n), t = jt(e, s, i), t !== null && (Ye(t, e, i, r), Oi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), i = Lt(e), s = ut(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = jt(e, s, i), t !== null && (Ye(t, e, i, r), Oi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = Lt(e), i = ut(n, r);
  i.tag = 2, t != null && (i.callback = t), t = jt(e, i, r), t !== null && (Ye(t, e, r, n), Oi(t, e, r));
} };
function oc(e, t, n, r, i, s, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !zr(n, r) || !zr(i, s) : !0;
}
function Mp(e, t, n) {
  var r = !1, i = Ft, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Be(s) : (i = Te(t) ? rn : me.current, r = t.contextTypes, s = (r = r != null) ? On(e, i) : Ft), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ns, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function lc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ns.enqueueReplaceState(t, t.state, null);
}
function pl(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, ya(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = Be(s) : (s = Te(t) ? rn : me.current, i.context = On(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (dl(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ns.enqueueReplaceState(i, i.state, null), cs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "", r = t;
    do
      n += mg(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function xo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function hl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var $y = typeof WeakMap == "function" ? WeakMap : Map;
function jp(e, t, n) {
  n = ut(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ms || (ms = !0, Cl = r), hl(e, t);
  }, n;
}
function Vp(e, t, n) {
  n = ut(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      hl(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    hl(e, t), typeof r != "function" && (Vt === null ? Vt = /* @__PURE__ */ new Set([this]) : Vt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ac(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $y();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = nv.bind(null, e, t, n), t.then(e, e));
}
function uc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cc(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ut(-1, 1), t.tag = 2, jt(n, t, 1))), n.lanes |= 1), e);
}
var Wy = vt.ReactCurrentOwner, Se = !1;
function ge(e, t, n, r) {
  t.child = e === null ? lp(t, null, n, r) : Bn(t, e.child, n, r);
}
function fc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return _n(t, i), r = ka(e, t, n, r, s, i), n = Ta(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, mt(e, t, i)) : (W && n && ca(t), t.flags |= 1, ge(e, t, r, i), t.child);
}
function dc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !La(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Lp(e, t, s, r, i)) : (e = Hi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : zr, n(o, r) && e.ref === t.ref) return mt(e, t, i);
  }
  return t.flags |= 1, e = Nt(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Lp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (zr(s, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, mt(e, t, i);
  }
  return ml(e, t, n, r, i);
}
function Np(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, z(Pn, Ee), Ee |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, z(Pn, Ee), Ee |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, z(Pn, Ee), Ee |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, z(Pn, Ee), Ee |= r;
  return ge(e, t, i, n), t.child;
}
function _p(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ml(e, t, n, r, i) {
  var s = Te(n) ? rn : me.current;
  return s = On(t, s), _n(t, i), n = ka(e, t, n, r, s, i), r = Ta(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, mt(e, t, i)) : (W && r && ca(t), t.flags |= 1, ge(e, t, n, i), t.child);
}
function pc(e, t, n, r, i) {
  if (Te(n)) {
    var s = !0;
    ss(t);
  } else s = !1;
  if (_n(t, i), t.stateNode === null) Ui(e, t), Mp(t, n, r), pl(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, l = t.memoizedProps;
    o.props = l;
    var a = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Be(u) : (u = Te(n) ? rn : me.current, u = On(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && lc(t, o, r, u), kt = !1;
    var d = t.memoizedState;
    o.state = d, cs(t, r, o, i), a = t.memoizedState, l !== r || d !== a || ke.current || kt ? (typeof c == "function" && (dl(t, n, c, r), a = t.memoizedState), (l = kt || oc(t, n, l, r, d, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, up(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : be(t.type, l), o.props = u, f = t.pendingProps, d = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Be(a) : (a = Te(n) ? rn : me.current, a = On(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || d !== a) && lc(t, o, r, a), kt = !1, d = t.memoizedState, o.state = d, cs(t, r, o, i);
    var y = t.memoizedState;
    l !== f || d !== y || ke.current || kt ? (typeof g == "function" && (dl(t, n, g, r), y = t.memoizedState), (u = kt || oc(t, n, u, r, d, y, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return gl(e, t, n, r, s, i);
}
function gl(e, t, n, r, i, s) {
  _p(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && qu(t, n, !1), mt(e, t, s);
  r = t.stateNode, Wy.current = t;
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Bn(t, e.child, null, s), t.child = Bn(t, null, l, s)) : ge(e, t, l, s), t.memoizedState = r.state, i && qu(t, n, !0), t.child;
}
function Fp(e) {
  var t = e.stateNode;
  t.pendingContext ? Zu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zu(e, t.context, !1), va(e, t.containerInfo);
}
function hc(e, t, n, r, i) {
  return zn(), da(i), t.flags |= 256, ge(e, t, n, r), t.child;
}
var yl = { dehydrated: null, treeContext: null, retryLane: 0 };
function vl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ip(e, t, n) {
  var r = t.pendingProps, i = K.current, s = !1, o = (t.flags & 128) !== 0, l;
  if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), z(K, i & 1), e === null)
    return cl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Is(o, r, 0, null), e = tn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = vl(n), t.memoizedState = yl, e) : Ea(t, o));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return Hy(e, t, o, r, l, i, n);
  if (s) {
    s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Nt(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = Nt(l, s) : (s = tn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? vl(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = yl, r;
  }
  return s = e.child, e = s.sibling, r = Nt(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ea(e, t) {
  return t = Is({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pi(e, t, n, r) {
  return r !== null && da(r), Bn(t, e.child, null, n), e = Ea(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Hy(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = xo(Error(A(422))), Pi(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Is({ mode: "visible", children: r.children }, i, 0, null), s = tn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Bn(t, e.child, null, o), t.child.memoizedState = vl(o), t.memoizedState = yl, s);
  if (!(t.mode & 1)) return Pi(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
    return r = l, s = Error(A(419)), r = xo(s, r, void 0), Pi(e, t, o, r);
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
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, ht(e, i), Ye(r, e, i, -1));
    }
    return Va(), r = xo(Error(A(421))), Pi(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = rv.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ae = Mt(i.nextSibling), Re = t, W = !0, Qe = null, e !== null && (Fe[Ie++] = lt, Fe[Ie++] = at, Fe[Ie++] = sn, lt = e.id, at = e.overflow, sn = t), t = Ea(t, r.children), t.flags |= 4096, t);
}
function mc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), fl(e.return, t, n);
}
function wo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function Op(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (ge(e, t, r.children, n), r = K.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mc(e, n, t);
      else if (e.tag === 19) mc(e, n, t);
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
  if (z(K, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && fs(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), wo(t, !1, i, n, s);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && fs(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      wo(t, !0, n, null, s);
      break;
    case "together":
      wo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ui(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function mt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), ln |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = Nt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Nt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ky(e, t, n) {
  switch (t.tag) {
    case 3:
      Fp(t), zn();
      break;
    case 5:
      cp(t);
      break;
    case 1:
      Te(t.type) && ss(t);
      break;
    case 4:
      va(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      z(as, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (z(K, K.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ip(e, t, n) : (z(K, K.current & 1), e = mt(e, t, n), e !== null ? e.sibling : null);
      z(K, K.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Op(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), z(K, K.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Np(e, t, n);
  }
  return mt(e, t, n);
}
var zp, xl, Bp, Up;
zp = function(e, t) {
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
xl = function() {
};
Bp = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, qt(nt.current);
    var s = null;
    switch (n) {
      case "input":
        i = Uo(e, i), r = Uo(e, r), s = [];
        break;
      case "select":
        i = G({}, i, { value: void 0 }), r = G({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = Ho(e, i), r = Ho(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = rs);
    }
    bo(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var l = i[u];
      for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Vr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = i?.[u], r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (o in l) !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Vr.hasOwnProperty(u) ? (a != null && u === "onScroll" && U("scroll", e), s || l === a || (s = [])) : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Up = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lr(e, t) {
  if (!W) switch (e.tailMode) {
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
function by(e, t, n) {
  var r = t.pendingProps;
  switch (fa(t), t.tag) {
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
      return Te(t.type) && is(), de(t), null;
    case 3:
      return r = t.stateNode, Un(), $(ke), $(me), wa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ti(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qe !== null && (Al(Qe), Qe = null))), xl(e, t), de(t), null;
    case 5:
      xa(t);
      var i = qt(Hr.current);
      if (n = t.type, e !== null && t.stateNode != null) Bp(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return de(t), null;
        }
        if (e = qt(nt.current), Ti(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[et] = t, r[$r] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < hr.length; i++) U(hr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U(
                "error",
                r
              ), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Cu(r, s), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, U("invalid", r);
              break;
            case "textarea":
              Eu(r, s), U("invalid", r);
          }
          bo(n, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var l = s[o];
            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && ki(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && ki(
              r.textContent,
              l,
              e
            ), i = ["children", "" + l]) : Vr.hasOwnProperty(o) && l != null && o === "onScroll" && U("scroll", r);
          }
          switch (n) {
            case "input":
              hi(r), Pu(r, s, !0);
              break;
            case "textarea":
              hi(r), Au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = rs);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = md(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[et] = t, e[$r] = r, zp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Go(n, r), n) {
              case "dialog":
                U("cancel", e), U("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < hr.length; i++) U(hr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                U(
                  "error",
                  e
                ), U("load", e), i = r;
                break;
              case "details":
                U("toggle", e), i = r;
                break;
              case "input":
                Cu(e, r), i = Uo(e, r), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = G({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                Eu(e, r), i = Ho(e, r), U("invalid", e);
                break;
              default:
                i = r;
            }
            bo(n, i), l = i;
            for (s in l) if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "style" ? vd(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && gd(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Lr(e, a) : typeof a == "number" && Lr(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Vr.hasOwnProperty(s) ? a != null && s === "onScroll" && U("scroll", e) : a != null && Yl(e, s, a, o));
            }
            switch (n) {
              case "input":
                hi(e), Pu(e, r, !1);
                break;
              case "textarea":
                hi(e), Au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? jn(e, !!r.multiple, s, !1) : r.defaultValue != null && jn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = rs);
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
      if (e && t.stateNode != null) Up(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = qt(Hr.current), qt(nt.current), Ti(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[et] = t, (s = r.nodeValue !== n) && (e = Re, e !== null)) switch (e.tag) {
            case 3:
              ki(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && ki(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[et] = t, t.stateNode = r;
      }
      return de(t), null;
    case 13:
      if ($(K), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Ae !== null && t.mode & 1 && !(t.flags & 128)) sp(), zn(), t.flags |= 98560, s = !1;
        else if (s = Ti(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(A(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(A(317));
            s[et] = t;
          } else zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          de(t), s = !1;
        } else Qe !== null && (Al(Qe), Qe = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || K.current & 1 ? ne === 0 && (ne = 3) : Va())), t.updateQueue !== null && (t.flags |= 4), de(t), null);
    case 4:
      return Un(), xl(e, t), e === null && Br(t.stateNode.containerInfo), de(t), null;
    case 10:
      return ma(t.type._context), de(t), null;
    case 17:
      return Te(t.type) && is(), de(t), null;
    case 19:
      if ($(K), s = t.memoizedState, s === null) return de(t), null;
      if (r = (t.flags & 128) !== 0, o = s.rendering, o === null) if (r) lr(s, !1);
      else {
        if (ne !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = fs(e), o !== null) {
            for (t.flags |= 128, lr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return z(K, K.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && q() > Wn && (t.flags |= 128, r = !0, lr(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = fs(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), lr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !W) return de(t), null;
        } else 2 * q() - s.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128, r = !0, lr(s, !1), t.lanes = 4194304);
        s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = q(), t.sibling = null, n = K.current, z(K, r ? n & 1 | 2 : n & 1), t) : (de(t), null);
    case 22:
    case 23:
      return ja(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ee & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function Gy(e, t) {
  switch (fa(t), t.tag) {
    case 1:
      return Te(t.type) && is(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Un(), $(ke), $(me), wa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return xa(t), null;
    case 13:
      if ($(K), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        zn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return $(K), null;
    case 4:
      return Un(), null;
    case 10:
      return ma(t.type._context), null;
    case 22:
    case 23:
      return ja(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ei = !1, he = !1, Qy = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function Cn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    X(e, t, r);
  }
  else n.current = null;
}
function wl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var gc = !1;
function Xy(e, t) {
  if (rl = es, e = bd(), ua(e)) {
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
  for (il = { focusedElem: e, selectionRange: n }, es = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
  else for (; M !== null; ) {
    t = M;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var v = y.memoizedProps, T = y.memoizedState, h = t.stateNode, p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : be(t.type, v), T);
            h.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var m = t.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(A(163));
      }
    } catch (x) {
      X(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return y = gc, gc = !1, y;
}
function Cr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && wl(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function _s(e, t) {
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
function Sl(e) {
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
function $p(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, $p(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[et], delete t[$r], delete t[ll], delete t[jy], delete t[Vy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Wp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function kl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = rs));
  else if (r !== 4 && (e = e.child, e !== null)) for (kl(e, t, n), e = e.sibling; e !== null; ) kl(e, t, n), e = e.sibling;
}
function Tl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Tl(e, t, n), e = e.sibling; e !== null; ) Tl(e, t, n), e = e.sibling;
}
var oe = null, Ge = !1;
function xt(e, t, n) {
  for (n = n.child; n !== null; ) Hp(e, t, n), n = n.sibling;
}
function Hp(e, t, n) {
  if (tt && typeof tt.onCommitFiberUnmount == "function") try {
    tt.onCommitFiberUnmount(As, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      he || Cn(n, t);
    case 6:
      var r = oe, i = Ge;
      oe = null, xt(e, t, n), oe = r, Ge = i, oe !== null && (Ge ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null && (Ge ? (e = oe, n = n.stateNode, e.nodeType === 8 ? po(e.parentNode, n) : e.nodeType === 1 && po(e, n), Ir(e)) : po(oe, n.stateNode));
      break;
    case 4:
      r = oe, i = Ge, oe = n.stateNode.containerInfo, Ge = !0, xt(e, t, n), oe = r, Ge = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!he && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && wl(n, t, o), i = i.next;
        } while (i !== r);
      }
      xt(e, t, n);
      break;
    case 1:
      if (!he && (Cn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        X(n, t, l);
      }
      xt(e, t, n);
      break;
    case 21:
      xt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (he = (r = he) || n.memoizedState !== null, xt(e, t, n), he = r) : xt(e, t, n);
      break;
    default:
      xt(e, t, n);
  }
}
function vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qy()), t.forEach(function(r) {
      var i = iv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var s = e, o = t, l = o;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            oe = l.stateNode, Ge = !1;
            break e;
          case 3:
            oe = l.stateNode.containerInfo, Ge = !0;
            break e;
          case 4:
            oe = l.stateNode.containerInfo, Ge = !0;
            break e;
        }
        l = l.return;
      }
      if (oe === null) throw Error(A(160));
      Hp(s, o, i), oe = null, Ge = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (u) {
      X(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Kp(t, e), t = t.sibling;
}
function Kp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (We(t, e), qe(e), r & 4) {
        try {
          Cr(3, e, e.return), _s(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          Cr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      We(t, e), qe(e), r & 512 && n !== null && Cn(n, n.return);
      break;
    case 5:
      if (We(t, e), qe(e), r & 512 && n !== null && Cn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Lr(i, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && s.type === "radio" && s.name != null && pd(i, s), Go(l, o);
          var u = Go(l, s);
          for (o = 0; o < a.length; o += 2) {
            var c = a[o], f = a[o + 1];
            c === "style" ? vd(i, f) : c === "dangerouslySetInnerHTML" ? gd(i, f) : c === "children" ? Lr(i, f) : Yl(i, c, f, u);
          }
          switch (l) {
            case "input":
              $o(i, s);
              break;
            case "textarea":
              hd(i, s);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? jn(i, !!s.multiple, g, !1) : d !== !!s.multiple && (s.defaultValue != null ? jn(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : jn(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[$r] = s;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 6:
      if (We(t, e), qe(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (We(t, e), qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ir(t.containerInfo);
      } catch (v) {
        X(e, e.return, v);
      }
      break;
    case 4:
      We(t, e), qe(e);
      break;
    case 13:
      We(t, e), qe(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Da = q())), r & 4 && vc(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (he = (u = he) || c, We(t, e), he = u) : We(t, e), qe(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (M = e, c = e.child; c !== null; ) {
          for (f = M = c; M !== null; ) {
            switch (d = M, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Cr(4, d, d.return);
                break;
              case 1:
                Cn(d, d.return);
                var y = d.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    X(r, n, v);
                  }
                }
                break;
              case 5:
                Cn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  wc(f);
                  continue;
                }
            }
            g !== null ? (g.return = d, M = g) : wc(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = yd("display", o));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (v) {
              X(e, e.return, v);
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
      We(t, e), qe(e), r & 4 && vc(e);
      break;
    case 21:
      break;
    default:
      We(
        t,
        e
      ), qe(e);
  }
}
function qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Lr(i, ""), r.flags &= -33);
          var s = yc(e);
          Tl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, l = yc(e);
          kl(e, l, o);
          break;
        default:
          throw Error(A(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Yy(e, t, n) {
  M = e, bp(e);
}
function bp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M, s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ei;
      if (!o) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || he;
        l = Ei;
        var u = he;
        if (Ei = o, (he = a) && !u) for (M = i; M !== null; ) o = M, a = o.child, o.tag === 22 && o.memoizedState !== null ? Sc(i) : a !== null ? (a.return = o, M = a) : Sc(i);
        for (; s !== null; ) M = s, bp(s), s = s.sibling;
        M = i, Ei = l, he = u;
      }
      xc(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, M = s) : xc(e);
  }
}
function xc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            he || _s(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !he) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : be(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && rc(t, s, r);
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
              rc(t, o, n);
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
                  f !== null && Ir(f);
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
            throw Error(A(163));
        }
        he || t.flags & 512 && Sl(t);
      } catch (d) {
        X(t, t.return, d);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function wc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, M = n;
      break;
    }
    M = t.return;
  }
}
function Sc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _s(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var s = t.return;
          try {
            Sl(t);
          } catch (a) {
            X(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Sl(t);
          } catch (a) {
            X(t, o, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, M = l;
      break;
    }
    M = t.return;
  }
}
var Zy = Math.ceil, hs = vt.ReactCurrentDispatcher, Aa = vt.ReactCurrentOwner, ze = vt.ReactCurrentBatchConfig, F = 0, se = null, J = null, ue = 0, Ee = 0, Pn = zt(0), ne = 0, Qr = null, ln = 0, Fs = 0, Ra = 0, Pr = null, we = null, Da = 0, Wn = 1 / 0, st = null, ms = !1, Cl = null, Vt = null, Ai = !1, Et = null, gs = 0, Er = 0, Pl = null, $i = -1, Wi = 0;
function ye() {
  return F & 6 ? q() : $i !== -1 ? $i : $i = q();
}
function Lt(e) {
  return e.mode & 1 ? F & 2 && ue !== 0 ? ue & -ue : Ny.transition !== null ? (Wi === 0 && (Wi = Md()), Wi) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Id(e.type)), e) : 1;
}
function Ye(e, t, n, r) {
  if (50 < Er) throw Er = 0, Pl = null, Error(A(185));
  ti(e, n, r), (!(F & 2) || e !== se) && (e === se && (!(F & 2) && (Fs |= n), ne === 4 && Ct(e, ue)), Ce(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Wn = q() + 500, Vs && Bt()));
}
function Ce(e, t) {
  var n = e.callbackNode;
  Ng(e, t);
  var r = Ji(e, e === se ? ue : 0);
  if (r === 0) n !== null && Mu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Mu(n), t === 1) e.tag === 0 ? Ly(kc.bind(null, e)) : np(kc.bind(null, e)), Dy(function() {
      !(F & 6) && Bt();
    }), n = null;
    else {
      switch (jd(r)) {
        case 1:
          n = ta;
          break;
        case 4:
          n = Rd;
          break;
        case 16:
          n = qi;
          break;
        case 536870912:
          n = Dd;
          break;
        default:
          n = qi;
      }
      n = eh(n, Gp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Gp(e, t) {
  if ($i = -1, Wi = 0, F & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = Ji(e, e === se ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ys(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var s = Xp();
    (se !== e || ue !== t) && (st = null, Wn = q() + 500, en(e, t));
    do
      try {
        ev();
        break;
      } catch (l) {
        Qp(e, l);
      }
    while (!0);
    ha(), hs.current = s, F = i, J !== null ? t = 0 : (se = null, ue = 0, t = ne);
  }
  if (t !== 0) {
    if (t === 2 && (i = qo(e), i !== 0 && (r = i, t = El(e, i))), t === 1) throw n = Qr, en(e, 0), Ct(e, r), Ce(e, q()), n;
    if (t === 6) Ct(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !qy(i) && (t = ys(e, r), t === 2 && (s = qo(e), s !== 0 && (r = s, t = El(e, s))), t === 1)) throw n = Qr, en(e, 0), Ct(e, r), Ce(e, q()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          Gt(e, we, st);
          break;
        case 3:
          if (Ct(e, r), (r & 130023424) === r && (t = Da + 500 - q(), 10 < t)) {
            if (Ji(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = ol(Gt.bind(null, e, we, st), t);
            break;
          }
          Gt(e, we, st);
          break;
        case 4:
          if (Ct(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Xe(r);
            s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
          }
          if (r = i, r = q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = ol(Gt.bind(null, e, we, st), r);
            break;
          }
          Gt(e, we, st);
          break;
        case 5:
          Gt(e, we, st);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return Ce(e, q()), e.callbackNode === n ? Gp.bind(null, e) : null;
}
function El(e, t) {
  var n = Pr;
  return e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256), e = ys(e, t), e !== 2 && (t = we, we = n, t !== null && Al(t)), e;
}
function Al(e) {
  we === null ? we = e : we.push.apply(we, e);
}
function qy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], s = i.getSnapshot;
        i = i.value;
        try {
          if (!Ze(s(), i)) return !1;
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
function Ct(e, t) {
  for (t &= ~Ra, t &= ~Fs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Xe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function kc(e) {
  if (F & 6) throw Error(A(327));
  Fn();
  var t = Ji(e, 0);
  if (!(t & 1)) return Ce(e, q()), null;
  var n = ys(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = qo(e);
    r !== 0 && (t = r, n = El(e, r));
  }
  if (n === 1) throw n = Qr, en(e, 0), Ct(e, t), Ce(e, q()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, we, st), Ce(e, q()), null;
}
function Ma(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Wn = q() + 500, Vs && Bt());
  }
}
function an(e) {
  Et !== null && Et.tag === 0 && !(F & 6) && Fn();
  var t = F;
  F |= 1;
  var n = ze.transition, r = O;
  try {
    if (ze.transition = null, O = 1, e) return e();
  } finally {
    O = r, ze.transition = n, F = t, !(F & 6) && Bt();
  }
}
function ja() {
  Ee = Pn.current, $(Pn);
}
function en(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ry(n)), J !== null) for (n = J.return; n !== null; ) {
    var r = n;
    switch (fa(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && is();
        break;
      case 3:
        Un(), $(ke), $(me), wa();
        break;
      case 5:
        xa(r);
        break;
      case 4:
        Un();
        break;
      case 13:
        $(K);
        break;
      case 19:
        $(K);
        break;
      case 10:
        ma(r.type._context);
        break;
      case 22:
      case 23:
        ja();
    }
    n = n.return;
  }
  if (se = e, J = e = Nt(e.current, null), ue = Ee = t, ne = 0, Qr = null, Ra = Fs = ln = 0, we = Pr = null, Zt !== null) {
    for (t = 0; t < Zt.length; t++) if (n = Zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, s = n.pending;
      if (s !== null) {
        var o = s.next;
        s.next = i, r.next = o;
      }
      n.pending = r;
    }
    Zt = null;
  }
  return e;
}
function Qp(e, t) {
  do {
    var n = J;
    try {
      if (ha(), zi.current = ps, ds) {
        for (var r = b.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        ds = !1;
      }
      if (on = 0, ie = te = b = null, Tr = !1, Kr = 0, Aa.current = null, n === null || n.return === null) {
        ne = 1, Qr = t, J = null;
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
          var g = uc(o);
          if (g !== null) {
            g.flags &= -257, cc(g, o, l, s, t), g.mode & 1 && ac(s, u, t), t = g, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ac(s, u, t), Va();
              break e;
            }
            a = Error(A(426));
          }
        } else if (W && l.mode & 1) {
          var T = uc(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), cc(T, o, l, s, t), da($n(a, l));
            break e;
          }
        }
        s = a = $n(a, l), ne !== 4 && (ne = 2), Pr === null ? Pr = [s] : Pr.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var h = jp(s, a, t);
              nc(s, h);
              break e;
            case 1:
              l = a;
              var p = s.type, m = s.stateNode;
              if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Vt === null || !Vt.has(m)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var x = Vp(s, l, t);
                nc(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Zp(n);
    } catch (w) {
      t = w, J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xp() {
  var e = hs.current;
  return hs.current = ps, e === null ? ps : e;
}
function Va() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), se === null || !(ln & 268435455) && !(Fs & 268435455) || Ct(se, ue);
}
function ys(e, t) {
  var n = F;
  F |= 2;
  var r = Xp();
  (se !== e || ue !== t) && (st = null, en(e, t));
  do
    try {
      Jy();
      break;
    } catch (i) {
      Qp(e, i);
    }
  while (!0);
  if (ha(), F = n, hs.current = r, J !== null) throw Error(A(261));
  return se = null, ue = 0, ne;
}
function Jy() {
  for (; J !== null; ) Yp(J);
}
function ev() {
  for (; J !== null && !Pg(); ) Yp(J);
}
function Yp(e) {
  var t = Jp(e.alternate, e, Ee);
  e.memoizedProps = e.pendingProps, t === null ? Zp(e) : J = t, Aa.current = null;
}
function Zp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Gy(n, t), n !== null) {
        n.flags &= 32767, J = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ne = 6, J = null;
        return;
      }
    } else if (n = by(n, t, Ee), n !== null) {
      J = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Gt(e, t, n) {
  var r = O, i = ze.transition;
  try {
    ze.transition = null, O = 1, tv(e, t, n, r);
  } finally {
    ze.transition = i, O = r;
  }
  return null;
}
function tv(e, t, n, r) {
  do
    Fn();
  while (Et !== null);
  if (F & 6) throw Error(A(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (_g(e, s), e === se && (J = se = null, ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ai || (Ai = !0, eh(qi, function() {
    return Fn(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = ze.transition, ze.transition = null;
    var o = O;
    O = 1;
    var l = F;
    F |= 4, Aa.current = null, Xy(e, n), Kp(n, e), Sy(il), es = !!rl, il = rl = null, e.current = n, Yy(n), Eg(), F = l, O = o, ze.transition = s;
  } else e.current = n;
  if (Ai && (Ai = !1, Et = e, gs = i), s = e.pendingLanes, s === 0 && (Vt = null), Dg(n.stateNode), Ce(e, q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ms) throw ms = !1, e = Cl, Cl = null, e;
  return gs & 1 && e.tag !== 0 && Fn(), s = e.pendingLanes, s & 1 ? e === Pl ? Er++ : (Er = 0, Pl = e) : Er = 0, Bt(), null;
}
function Fn() {
  if (Et !== null) {
    var e = jd(gs), t = ze.transition, n = O;
    try {
      if (ze.transition = null, O = 16 > e ? 16 : e, Et === null) var r = !1;
      else {
        if (e = Et, Et = null, gs = 0, F & 6) throw Error(A(331));
        var i = F;
        for (F |= 4, M = e.current; M !== null; ) {
          var s = M, o = s.child;
          if (M.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cr(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, M = f;
                  else for (; M !== null; ) {
                    c = M;
                    var d = c.sibling, g = c.return;
                    if ($p(c), c === u) {
                      M = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = g, M = d;
                      break;
                    }
                    M = g;
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
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) o.return = s, M = o;
          else e: for (; M !== null; ) {
            if (s = M, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Cr(9, s, s.return);
            }
            var h = s.sibling;
            if (h !== null) {
              h.return = s.return, M = h;
              break e;
            }
            M = s.return;
          }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          o = M;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, M = m;
          else e: for (o = p; M !== null; ) {
            if (l = M, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  _s(9, l);
              }
            } catch (w) {
              X(l, l.return, w);
            }
            if (l === o) {
              M = null;
              break e;
            }
            var x = l.sibling;
            if (x !== null) {
              x.return = l.return, M = x;
              break e;
            }
            M = l.return;
          }
        }
        if (F = i, Bt(), tt && typeof tt.onPostCommitFiberRoot == "function") try {
          tt.onPostCommitFiberRoot(As, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, ze.transition = t;
    }
  }
  return !1;
}
function Tc(e, t, n) {
  t = $n(n, t), t = jp(e, t, 1), e = jt(e, t, 1), t = ye(), e !== null && (ti(e, 1, t), Ce(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) Tc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Tc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vt === null || !Vt.has(r))) {
        e = $n(n, e), e = Vp(t, e, 1), t = jt(t, e, 1), e = ye(), t !== null && (ti(t, 1, e), Ce(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function nv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ue & n) === n && (ne === 4 || ne === 3 && (ue & 130023424) === ue && 500 > q() - Da ? en(e, 0) : Ra |= n), Ce(e, t);
}
function qp(e, t) {
  t === 0 && (e.mode & 1 ? (t = yi, yi <<= 1, !(yi & 130023424) && (yi = 4194304)) : t = 1);
  var n = ye();
  e = ht(e, t), e !== null && (ti(e, t, n), Ce(e, n));
}
function rv(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), qp(e, n);
}
function iv(e, t) {
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
      throw Error(A(314));
  }
  r !== null && r.delete(t), qp(e, n);
}
var Jp;
Jp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, Ky(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, W && t.flags & 1048576 && rp(t, ls, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ui(e, t), e = t.pendingProps;
      var i = On(t, me.current);
      _n(t, n), i = ka(null, t, r, e, i, n);
      var s = Ta();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (s = !0, ss(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, ya(t), i.updater = Ns, t.stateNode = i, i._reactInternals = t, pl(t, r, e, n), t = gl(null, t, r, !0, s, n)) : (t.tag = 0, W && s && ca(t), ge(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ui(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = ov(r), e = be(r, e), i) {
          case 0:
            t = ml(null, t, r, e, n);
            break e;
          case 1:
            t = pc(null, t, r, e, n);
            break e;
          case 11:
            t = fc(null, t, r, e, n);
            break e;
          case 14:
            t = dc(null, t, r, be(r.type, e), n);
            break e;
        }
        throw Error(A(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : be(r, i), ml(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : be(r, i), pc(e, t, r, i, n);
    case 3:
      e: {
        if (Fp(t), e === null) throw Error(A(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, up(e, t), cs(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = $n(Error(A(423)), t), t = hc(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = $n(Error(A(424)), t), t = hc(e, t, r, n, i);
          break e;
        } else for (Ae = Mt(t.stateNode.containerInfo.firstChild), Re = t, W = !0, Qe = null, n = lp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (zn(), r === i) {
            t = mt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return cp(t), e === null && cl(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, sl(r, i) ? o = null : s !== null && sl(r, s) && (t.flags |= 32), _p(e, t), ge(e, t, o, n), t.child;
    case 6:
      return e === null && cl(t), null;
    case 13:
      return Ip(e, t, n);
    case 4:
      return va(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Bn(t, null, r, n) : ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : be(r, i), fc(e, t, r, i, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, z(as, r._currentValue), r._currentValue = o, s !== null) if (Ze(s.value, o)) {
          if (s.children === i.children && !ke.current) {
            t = mt(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var l = s.dependencies;
          if (l !== null) {
            o = s.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (s.tag === 1) {
                  a = ut(-1, n & -n), a.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                  }
                }
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), fl(
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
            if (o = s.return, o === null) throw Error(A(341));
            o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), fl(o, n, t), o = s.sibling;
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
      return i = t.type, r = t.pendingProps.children, _n(t, n), i = Be(i), r = r(i), t.flags |= 1, ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = be(r, t.pendingProps), i = be(r.type, i), dc(e, t, r, i, n);
    case 15:
      return Lp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : be(r, i), Ui(e, t), t.tag = 1, Te(r) ? (e = !0, ss(t)) : e = !1, _n(t, n), Mp(t, r, i), pl(t, r, i, n), gl(null, t, r, !0, e, n);
    case 19:
      return Op(e, t, n);
    case 22:
      return Np(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function eh(e, t) {
  return Ad(e, t);
}
function sv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Oe(e, t, n, r) {
  return new sv(e, t, n, r);
}
function La(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ov(e) {
  if (typeof e == "function") return La(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ql) return 11;
    if (e === Jl) return 14;
  }
  return 2;
}
function Nt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Oe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Hi(e, t, n, r, i, s) {
  var o = 2;
  if (r = e, typeof e == "function") La(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case mn:
      return tn(n.children, i, s, t);
    case Zl:
      o = 8, i |= 8;
      break;
    case Io:
      return e = Oe(12, n, t, i | 2), e.elementType = Io, e.lanes = s, e;
    case Oo:
      return e = Oe(13, n, t, i), e.elementType = Oo, e.lanes = s, e;
    case zo:
      return e = Oe(19, n, t, i), e.elementType = zo, e.lanes = s, e;
    case cd:
      return Is(n, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ad:
          o = 10;
          break e;
        case ud:
          o = 9;
          break e;
        case ql:
          o = 11;
          break e;
        case Jl:
          o = 14;
          break e;
        case St:
          o = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = Oe(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function tn(e, t, n, r) {
  return e = Oe(7, e, r, t), e.lanes = n, e;
}
function Is(e, t, n, r) {
  return e = Oe(22, e, r, t), e.elementType = cd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function So(e, t, n) {
  return e = Oe(6, e, null, t), e.lanes = n, e;
}
function ko(e, t, n) {
  return t = Oe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function lv(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = to(0), this.expirationTimes = to(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = to(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Na(e, t, n, r, i, s, o, l, a) {
  return e = new lv(e, t, n, l, a), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Oe(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ya(s), e;
}
function av(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function th(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (cn(e) !== e || e.tag !== 1) throw Error(A(170));
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
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return tp(e, n, t);
  }
  return t;
}
function nh(e, t, n, r, i, s, o, l, a) {
  return e = Na(n, r, !0, e, i, s, o, l, a), e.context = th(null), n = e.current, r = ye(), i = Lt(n), s = ut(r, i), s.callback = t ?? null, jt(n, s, i), e.current.lanes = i, ti(e, i, r), Ce(e, r), e;
}
function Os(e, t, n, r) {
  var i = t.current, s = ye(), o = Lt(i);
  return n = th(n), t.context === null ? t.context = n : t.pendingContext = n, t = ut(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = jt(i, t, o), e !== null && (Ye(e, i, o, s), Oi(e, i, o)), o;
}
function vs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _a(e, t) {
  Cc(e, t), (e = e.alternate) && Cc(e, t);
}
function uv() {
  return null;
}
var rh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Fa(e) {
  this._internalRoot = e;
}
zs.prototype.render = Fa.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Os(e, t, null, null);
};
zs.prototype.unmount = Fa.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function() {
      Os(null, e, null, null);
    }), t[pt] = null;
  }
};
function zs(e) {
  this._internalRoot = e;
}
zs.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Nd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++) ;
    Tt.splice(n, 0, e), n === 0 && Fd(e);
  }
};
function Ia(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Bs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Pc() {
}
function cv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = vs(o);
        s.call(u);
      };
    }
    var o = nh(t, r, e, 0, null, !1, !1, "", Pc);
    return e._reactRootContainer = o, e[pt] = o.current, Br(e.nodeType === 8 ? e.parentNode : e), an(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = vs(a);
      l.call(u);
    };
  }
  var a = Na(e, 0, !1, null, null, !1, !1, "", Pc);
  return e._reactRootContainer = a, e[pt] = a.current, Br(e.nodeType === 8 ? e.parentNode : e), an(function() {
    Os(t, a, n, r);
  }), a;
}
function Us(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var a = vs(o);
        l.call(a);
      };
    }
    Os(t, o, e, i);
  } else o = cv(n, t, e, i, r);
  return vs(o);
}
Vd = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 && (na(t, n | 1), Ce(t, q()), !(F & 6) && (Wn = q() + 500, Bt()));
      }
      break;
    case 13:
      an(function() {
        var r = ht(e, 1);
        if (r !== null) {
          var i = ye();
          Ye(r, e, 1, i);
        }
      }), _a(e, 1);
  }
};
ra = function(e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728);
    if (t !== null) {
      var n = ye();
      Ye(t, e, 134217728, n);
    }
    _a(e, 134217728);
  }
};
Ld = function(e) {
  if (e.tag === 13) {
    var t = Lt(e), n = ht(e, t);
    if (n !== null) {
      var r = ye();
      Ye(n, e, t, r);
    }
    _a(e, t);
  }
};
Nd = function() {
  return O;
};
_d = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
Xo = function(e, t, n) {
  switch (t) {
    case "input":
      if ($o(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = js(r);
            if (!i) throw Error(A(90));
            dd(r), $o(r, i);
          }
        }
      }
      break;
    case "textarea":
      hd(e, n);
      break;
    case "select":
      t = n.value, t != null && jn(e, !!n.multiple, t, !1);
  }
};
Sd = Ma;
kd = an;
var fv = { usingClientEntryPoint: !1, Events: [ri, xn, js, xd, wd, Ma] }, ar = { findFiberByHostInstance: Yt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, dv = { bundleType: ar.bundleType, version: ar.version, rendererPackageName: ar.rendererPackageName, rendererConfig: ar.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Pd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ar.findFiberByHostInstance || uv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ri.isDisabled && Ri.supportsFiber) try {
    As = Ri.inject(dv), tt = Ri;
  } catch {
  }
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fv;
Ve.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ia(t)) throw Error(A(200));
  return av(e, t, null, n);
};
Ve.createRoot = function(e, t) {
  if (!Ia(e)) throw Error(A(299));
  var n = !1, r = "", i = rh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Na(e, 1, !1, null, null, n, !1, r, i), e[pt] = t.current, Br(e.nodeType === 8 ? e.parentNode : e), new Fa(t);
};
Ve.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = Pd(t), e = e === null ? null : e.stateNode, e;
};
Ve.flushSync = function(e) {
  return an(e);
};
Ve.hydrate = function(e, t, n) {
  if (!Bs(t)) throw Error(A(200));
  return Us(null, e, t, !0, n);
};
Ve.hydrateRoot = function(e, t, n) {
  if (!Ia(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", o = rh;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = nh(t, null, e, 1, n ?? null, i, !1, s, o), e[pt] = t.current, Br(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new zs(t);
};
Ve.render = function(e, t, n) {
  if (!Bs(t)) throw Error(A(200));
  return Us(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function(e) {
  if (!Bs(e)) throw Error(A(40));
  return e._reactRootContainer ? (an(function() {
    Us(null, null, e, !1, function() {
      e._reactRootContainer = null, e[pt] = null;
    });
  }), !0) : !1;
};
Ve.unstable_batchedUpdates = Ma;
Ve.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Bs(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Us(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function ih() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ih);
    } catch (e) {
      console.error(e);
    }
}
ih(), id.exports = Ve;
var pv = id.exports, sh, Ec = pv;
sh = Ec.createRoot, Ec.hydrateRoot;
const hv = '.jwf{--tm-bg: #000000;--tm-surface: #0d0d0d;--tm-fg: #ffffff;--tm-dim: #8a8a8a;--tm-faint: #4a4a4a;--tm-border: #262626;--tm-accent: #ffffff;--tm-accent-fg: #000000;--tm-radius: 14px;--tm-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--tm-font-digit: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--jwf-tabbar-height: 44px;position:relative;display:flex;flex-direction:column;height:100%;min-height:320px;background:var(--tm-bg);color:var(--tm-fg);font-family:var(--tm-font);margin:-1px;border-radius:inherit}.jwf *,.jwf *:before,.jwf *:after{box-sizing:border-box}:where(.jwf button){font-family:inherit;cursor:pointer;border:none;background:none;color:inherit;padding:0;outline:none}:where(.jwf input){font-family:inherit;outline:none}.jwf-tabs{display:flex;align-items:stretch;gap:22px;height:var(--jwf-tabbar-height);padding:0 22px;border-bottom:1px solid var(--tm-border);user-select:none;flex:none}.jwf-tab{position:relative;display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:var(--tm-faint);transition:color .18s ease}.jwf-tab:hover{color:var(--tm-dim)}.jwf-tab[data-active=true]{color:var(--tm-fg)}.jwf-tab[data-active=true]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--tm-accent)}.jwf-tab-dot{width:5px;height:5px;border-radius:999px;background:currentColor;animation:jwf-pulse 2.4s ease-in-out infinite}@keyframes jwf-pulse{0%,to{opacity:1}50%{opacity:.25}}.tm-tab{position:static;flex:1;display:flex;flex-direction:column;align-items:center;gap:28px;padding:34px 32px 30px}.tm-clock{position:absolute;top:calc(var(--jwf-tabbar-height) + 14px);left:18px;font-size:15px;font-weight:300;letter-spacing:-.01em;color:var(--tm-dim);transition:opacity .35s ease;user-select:none}.tm-clock[data-dimmed=true]{opacity:.15}.tm-digits{font-family:var(--tm-font-digit);font-size:72px;line-height:1;font-variant-numeric:tabular-nums;letter-spacing:-.02em;user-select:none;transition:color .5s ease}.tm-digits[data-state=idle]{color:var(--tm-dim)}.tm-digits[data-state=finished]{color:var(--tm-faint)}.tm-label{font-size:11px;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:var(--tm-dim)}.tm-presets{display:flex;flex-wrap:wrap;justify-content:center;gap:7px}.tm-preset{border-radius:999px;padding:7px 15px;font-size:13px;font-weight:500;background:var(--tm-surface);color:var(--tm-dim);border:1px solid var(--tm-border);transition:all .18s ease}.tm-preset:hover{color:var(--tm-fg)}.tm-preset[data-selected=true]{background:var(--tm-accent);color:var(--tm-accent-fg);border-color:var(--tm-accent)}.tm-custom{width:108px;border-radius:10px;border:1px solid var(--tm-border);background:var(--tm-surface);color:var(--tm-fg);padding:8px 12px;text-align:center;font-size:13px}.tm-custom::placeholder{color:var(--tm-faint)}.tm-row{display:flex;align-items:center;gap:10px}.tm-primary{border-radius:999px;padding:11px 34px;font-size:14px;font-weight:500;background:var(--tm-accent);color:var(--tm-accent-fg);transition:opacity .18s ease,transform .12s ease}.tm-primary:hover{opacity:.88}.tm-primary:active{transform:scale(.97)}.tm-circle{width:46px;height:46px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:var(--tm-surface);border:1px solid var(--tm-border);color:var(--tm-fg);transition:background .18s ease,transform .12s ease}.tm-circle:hover{background:var(--tm-border)}.tm-circle:active{transform:scale(.95)}.tm-ghost{font-size:12px;color:var(--tm-dim);transition:color .18s ease}.tm-ghost:hover{color:var(--tm-fg)}.tm-reminders{width:100%;max-width:330px}.tm-reminders-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.tm-reminder{display:flex;align-items:center;justify-content:space-between;padding:10px 13px;border-radius:var(--tm-radius);background:var(--tm-surface);border:1px solid var(--tm-border);margin-bottom:6px}.tm-reminder-label{font-size:13px;color:var(--tm-fg)}.tm-reminder-sub{font-size:11px;color:var(--tm-dim)}.tm-add{display:flex;flex-direction:column;gap:8px;padding:13px;border-radius:var(--tm-radius);background:var(--tm-surface);border:1px solid var(--tm-border);margin-bottom:8px}.tm-add input{border-radius:9px;border:1px solid var(--tm-border);background:var(--tm-bg);color:var(--tm-fg);padding:7px 10px;font-size:13px}.tm-chip{font-size:11px;color:var(--tm-dim);background:var(--tm-surface);border:1px solid var(--tm-border);border-radius:999px;padding:4px 11px}.tm-alert{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;background:color-mix(in srgb,var(--tm-bg) 88%,transparent);backdrop-filter:blur(6px);border-radius:inherit}.tm-alert-card{display:flex;flex-direction:column;align-items:center;gap:18px;padding:32px 36px;border-radius:22px;background:var(--tm-surface);border:1px solid var(--tm-border);max-width:300px;text-align:center}.tm-alert-icon{width:56px;height:56px;border-radius:999px;background:var(--tm-accent);color:var(--tm-accent-fg);display:flex;align-items:center;justify-content:center;font-size:26px}.tm-footer{display:flex;align-items:center;justify-content:center;gap:8px;padding-top:2px}.tm-toggle{display:inline-flex;align-items:center;gap:7px;font-size:11px;color:var(--tm-faint);transition:color .18s ease}.tm-toggle:hover{color:var(--tm-dim)}.tm-toggle-dot{width:7px;height:7px;border-radius:999px;border:1px solid currentColor}.tm-toggle[data-on=true] .tm-toggle-dot{background:currentColor}.jwf-tasks{position:relative;flex:1;display:flex;flex-direction:column;padding:12px 22px 16px;min-height:0}.jwf-menu-backdrop{position:absolute;inset:0;z-index:5}.jwf-menu{position:absolute;z-index:6;min-width:148px;padding:4px;border-radius:10px;background:var(--tm-surface);border:1px solid var(--tm-border);box-shadow:0 8px 24px #00000073}.jwf-menu-item{display:block;width:100%;text-align:left;padding:8px 12px;border-radius:7px;font-size:13px;color:var(--tm-fg);transition:background .12s ease}.jwf-menu-item:hover,.jwf-menu-item:focus-visible{background:var(--tm-border);outline:none}.jwf-subtabs{display:flex;gap:16px;padding-bottom:8px;border-bottom:1px solid var(--tm-border);user-select:none;flex:none}.jwf-subtab{font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:var(--tm-faint);transition:color .18s ease}.jwf-subtab:hover{color:var(--tm-dim)}.jwf-subtab[data-active=true]{color:var(--tm-fg)}.jwf-filters{display:flex;gap:6px;padding:10px 0 6px;flex:none}.jwf-filter{border-radius:999px;border:1px solid var(--tm-border);background:var(--tm-surface);color:var(--tm-dim);padding:4px 12px;font-size:11px;transition:all .18s ease}.jwf-filter:hover{color:var(--tm-fg)}.jwf-filter[data-active=true]{background:var(--tm-accent);border-color:var(--tm-accent);color:var(--tm-accent-fg)}.jwf-task-list{flex:1;overflow-y:auto;min-height:0;padding-right:4px}.jwf-task{display:flex;align-items:baseline;gap:11px;width:100%;text-align:left;padding:7px 6px;margin-left:-6px;border-radius:8px;font-size:14px;line-height:1.45;user-select:none;transition:background .15s ease}.jwf-task:hover{background:var(--tm-surface)}.jwf-task-text{color:var(--tm-fg);overflow-wrap:anywhere;transition:color .2s ease}.jwf-task-text[data-done=true]{color:var(--tm-faint);text-decoration:line-through;text-decoration-color:var(--tm-faint)}.jwf-task-date{margin-left:auto;flex:none;font-size:11px;font-family:var(--tm-font-digit);color:var(--tm-faint);user-select:none}.jwf-done-empty{font-size:12px;color:var(--tm-faint);text-align:center;padding:14px 0}.jwf-task-input-row{flex:none;padding-top:12px}.jwf-task-input{width:100%;border:none;border-top:1px solid var(--tm-border);background:transparent;color:var(--tm-fg);padding:10px 2px 2px;font-size:14px}.jwf-task-input::placeholder{color:var(--tm-faint)}', Ac = "jwf-styles";
function mv() {
  if (document.getElementById(Ac)) return;
  const e = document.createElement("style");
  e.id = Ac, e.textContent = hv, document.head.append(e);
}
const gv = [
  ["--tm-bg", "--theme-canvas"],
  ["--tm-surface", "--theme-surface"],
  ["--tm-fg", "--theme-ink"],
  ["--tm-dim", "--theme-ink-dim"],
  ["--tm-faint", "--theme-muted"],
  ["--tm-border", "--theme-border"],
  ["--tm-accent", "--theme-accent"],
  ["--tm-accent-fg", "--theme-accent-fg"]
], yv = [
  ["--tm-font-digit", "--theme-font-code"]
];
function vv(e, t) {
  const n = getComputedStyle(document.documentElement);
  for (const [r, i] of [...gv, ...yv]) {
    if (!t) {
      e.style.removeProperty(r);
      continue;
    }
    const s = n.getPropertyValue(i).trim();
    s && e.style.setProperty(r, s);
  }
}
function xv(e) {
  const t = new MutationObserver(e);
  return t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["data-mode", "data-contrast", "style", "class"]
  }), () => t.disconnect();
}
function wv({
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
const Oa = k.createContext({});
function fn(e) {
  const t = k.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const $s = k.createContext(null), Ws = k.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class Sv extends k.Component {
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
function kv({ children: e, isPresent: t }) {
  const n = k.useId(), r = k.useRef(null), i = k.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = k.useContext(Ws);
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
  }, [t]), S.jsx(Sv, { isPresent: t, childRef: r, sizeRef: i, children: k.cloneElement(e, { ref: r }) });
}
const Tv = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o }) => {
  const l = fn(Cv), a = k.useId(), u = k.useCallback((f) => {
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
  }, [n]), o === "popLayout" && (e = S.jsx(kv, { isPresent: n, children: e })), S.jsx($s.Provider, { value: c, children: e });
};
function Cv() {
  return /* @__PURE__ */ new Map();
}
function oh(e = !0) {
  const t = k.useContext($s);
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
function Rc(e) {
  const t = [];
  return k.Children.forEach(e, (n) => {
    k.isValidElement(n) && t.push(n);
  }), t;
}
const za = typeof window < "u", Ba = za ? k.useLayoutEffect : k.useEffect, Xr = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: s = "sync", propagate: o = !1 }) => {
  const [l, a] = oh(o), u = k.useMemo(() => Rc(e), [e]), c = o && !l ? [] : u.map(Di), f = k.useRef(!0), d = k.useRef(u), g = fn(() => /* @__PURE__ */ new Map()), [y, v] = k.useState(u), [T, h] = k.useState(u);
  Ba(() => {
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
      const E = T[w], R = Di(E);
      c.includes(R) || (x.splice(w, 0, E), p.push(E));
    }
    s === "wait" && p.length && (x = p), h(Rc(x)), v(u);
    return;
  }
  const { forceRender: m } = k.useContext(Oa);
  return S.jsx(S.Fragment, { children: T.map((x) => {
    const w = Di(x), E = o && !l ? !1 : u === T || c.includes(w), R = () => {
      if (g.has(w))
        g.set(w, !0);
      else
        return;
      let C = !0;
      g.forEach((N) => {
        N || (C = !1);
      }), C && (m?.(), h(d.current), o && a?.(), r && r());
    };
    return S.jsx(Tv, { isPresent: E, initial: !f.current || n ? void 0 : !1, custom: E ? void 0 : t, presenceAffectsLayout: i, mode: s, onExitComplete: E ? void 0 : R, children: x }, w);
  }) });
}, De = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let lh = De;
// @__NO_SIDE_EFFECTS__
function Ua(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Hn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, ct = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ft = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Pv = {
  useManualTiming: !1
};
function Ev(e) {
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
const Mi = [
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
], Av = 40;
function ah(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, o = Mi.reduce((h, p) => (h[p] = Ev(s), h), {}), { read: l, resolveKeyframes: a, update: u, preRender: c, render: f, postRender: d } = o, g = () => {
    const h = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, Av), 1), i.timestamp = h, i.isProcessing = !0, l.process(i), a.process(i), u.process(i), c.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(g));
  }, y = () => {
    n = !0, r = !0, i.isProcessing || e(g);
  };
  return { schedule: Mi.reduce((h, p) => {
    const m = o[p];
    return h[p] = (x, w = !1, E = !1) => (n || y(), m.schedule(x, w, E)), h;
  }, {}), cancel: (h) => {
    for (let p = 0; p < Mi.length; p++)
      o[Mi[p]].cancel(h);
  }, state: i, steps: o };
}
const { schedule: B, cancel: gt, state: le, steps: To } = ah(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, !0), uh = k.createContext({ strict: !1 }), Dc = {
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
}, Kn = {};
for (const e in Dc)
  Kn[e] = {
    isEnabled: (t) => Dc[e].some((n) => !!t[n])
  };
function Rv(e) {
  for (const t in e)
    Kn[t] = {
      ...Kn[t],
      ...e[t]
    };
}
const Dv = /* @__PURE__ */ new Set([
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
function xs(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Dv.has(e);
}
let ch = (e) => !xs(e);
function Mv(e) {
  e && (ch = (t) => t.startsWith("on") ? !xs(t) : e(t));
}
try {
  Mv(require("@emotion/is-prop-valid").default);
} catch {
}
function jv(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (ch(i) || n === !0 && xs(i) || !t && !xs(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
function Vv(e) {
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
const Hs = k.createContext({});
function Yr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ks(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const $a = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Wa = ["initial", ...$a];
function bs(e) {
  return Ks(e.animate) || Wa.some((t) => Yr(e[t]));
}
function fh(e) {
  return !!(bs(e) || e.variants);
}
function Lv(e, t) {
  if (bs(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Yr(n) ? n : void 0,
      animate: Yr(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Nv(e) {
  const { initial: t, animate: n } = Lv(e, k.useContext(Hs));
  return k.useMemo(() => ({ initial: t, animate: n }), [Mc(t), Mc(n)]);
}
function Mc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const _v = Symbol.for("motionComponentSymbol");
function En(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Fv(e, t, n) {
  return k.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : En(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Ha = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Iv = "framerAppearId", dh = "data-" + Ha(Iv), { schedule: Ka } = ah(queueMicrotask, !1), ph = k.createContext({});
function Ov(e, t, n, r, i) {
  var s, o;
  const { visualElement: l } = k.useContext(Hs), a = k.useContext(uh), u = k.useContext($s), c = k.useContext(Ws).reducedMotion, f = k.useRef(null);
  r = r || a.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: l,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = f.current, g = k.useContext(ph);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && zv(f.current, n, i, g);
  const y = k.useRef(!1);
  k.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const v = n[dh], T = k.useRef(!!v && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, v)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, v)));
  return Ba(() => {
    d && (y.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Ka.render(d.render), T.current && d.animationState && d.animationState.animateChanges());
  }), k.useEffect(() => {
    d && (!T.current && d.animationState && d.animationState.animateChanges(), T.current && (queueMicrotask(() => {
      var h;
      (h = window.MotionHandoffMarkAsComplete) === null || h === void 0 || h.call(window, v);
    }), T.current = !1));
  }), d;
}
function zv(e, t, n, r) {
  const { layoutId: i, layout: s, drag: o, dragConstraints: l, layoutScroll: a, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : hh(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: s,
    alwaysMeasureLayout: !!o || l && En(l),
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
function hh(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : hh(e.parent);
}
function Bv({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  var s, o;
  e && Rv(e);
  function l(u, c) {
    let f;
    const d = {
      ...k.useContext(Ws),
      ...u,
      layoutId: Uv(u)
    }, { isStatic: g } = d, y = Nv(u), v = r(u, g);
    if (!g && za) {
      $v();
      const T = Wv(d);
      f = T.MeasureLayout, y.visualElement = Ov(i, v, d, t, T.ProjectionNode);
    }
    return S.jsxs(Hs.Provider, { value: y, children: [f && y.visualElement ? S.jsx(f, { visualElement: y.visualElement, ...d }) : null, n(i, u, Fv(v, y.visualElement, c), v, g, y.visualElement)] });
  }
  l.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const a = k.forwardRef(l);
  return a[_v] = i, a;
}
function Uv({ layoutId: e }) {
  const t = k.useContext(Oa).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function $v(e, t) {
  k.useContext(uh).strict;
}
function Wv(e) {
  const { drag: t, layout: n } = Kn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Hv = [
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
function ba(e) {
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
      !!(Hv.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function jc(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Ga(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = jc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, s] = jc(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const Rl = (e) => Array.isArray(e), Kv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), bv = (e) => Rl(e) ? e[e.length - 1] || 0 : e, ae = (e) => !!(e && e.getVelocity);
function Ki(e) {
  const t = ae(e) ? e.get() : e;
  return Kv(t) ? t.toValue() : t;
}
function Gv({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, s) {
  const o = {
    latestValues: Qv(r, i, s, e),
    renderState: t()
  };
  return n && (o.onMount = (l) => n({ props: r, current: l, ...o }), o.onUpdate = (l) => n(l)), o;
}
const mh = (e) => (t, n) => {
  const r = k.useContext(Hs), i = k.useContext($s), s = () => Gv(e, t, r, i);
  return n ? s() : fn(s);
};
function Qv(e, t, n, r) {
  const i = {}, s = r(e, {});
  for (const d in s)
    i[d] = Ki(s[d]);
  let { initial: o, animate: l } = e;
  const a = bs(e), u = fh(e);
  t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? l : o;
  if (f && typeof f != "boolean" && !Ks(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = Ga(e, d[g]);
      if (y) {
        const { transitionEnd: v, transition: T, ...h } = y;
        for (const p in h) {
          let m = h[p];
          if (Array.isArray(m)) {
            const x = c ? m.length - 1 : 0;
            m = m[x];
          }
          m !== null && (i[p] = m);
        }
        for (const p in v)
          i[p] = v[p];
      }
    }
  }
  return i;
}
const Zn = [
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
], dn = new Set(Zn), gh = (e) => (t) => typeof t == "string" && t.startsWith(e), yh = /* @__PURE__ */ gh("--"), Xv = /* @__PURE__ */ gh("var(--"), Qa = (e) => Xv(e) ? Yv.test(e.split("/*")[0].trim()) : !1, Yv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, vh = (e, t) => t && typeof e == "number" ? t.transform(e) : e, yt = (e, t, n) => n > t ? t : n < e ? e : n, qn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Zr = {
  ...qn,
  transform: (e) => yt(0, 1, e)
}, ji = {
  ...qn,
  default: 1
}, si = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), wt = /* @__PURE__ */ si("deg"), rt = /* @__PURE__ */ si("%"), j = /* @__PURE__ */ si("px"), Zv = /* @__PURE__ */ si("vh"), qv = /* @__PURE__ */ si("vw"), Vc = {
  ...rt,
  parse: (e) => rt.parse(e) / 100,
  transform: (e) => rt.transform(e * 100)
}, Jv = {
  // Border props
  borderWidth: j,
  borderTopWidth: j,
  borderRightWidth: j,
  borderBottomWidth: j,
  borderLeftWidth: j,
  borderRadius: j,
  radius: j,
  borderTopLeftRadius: j,
  borderTopRightRadius: j,
  borderBottomRightRadius: j,
  borderBottomLeftRadius: j,
  // Positioning props
  width: j,
  maxWidth: j,
  height: j,
  maxHeight: j,
  top: j,
  right: j,
  bottom: j,
  left: j,
  // Spacing props
  padding: j,
  paddingTop: j,
  paddingRight: j,
  paddingBottom: j,
  paddingLeft: j,
  margin: j,
  marginTop: j,
  marginRight: j,
  marginBottom: j,
  marginLeft: j,
  // Misc
  backgroundPositionX: j,
  backgroundPositionY: j
}, e0 = {
  rotate: wt,
  rotateX: wt,
  rotateY: wt,
  rotateZ: wt,
  scale: ji,
  scaleX: ji,
  scaleY: ji,
  scaleZ: ji,
  skew: wt,
  skewX: wt,
  skewY: wt,
  distance: j,
  translateX: j,
  translateY: j,
  translateZ: j,
  x: j,
  y: j,
  z: j,
  perspective: j,
  transformPerspective: j,
  opacity: Zr,
  originX: Vc,
  originY: Vc,
  originZ: j
}, Lc = {
  ...qn,
  transform: Math.round
}, Xa = {
  ...Jv,
  ...e0,
  zIndex: Lc,
  size: j,
  // SVG
  fillOpacity: Zr,
  strokeOpacity: Zr,
  numOctaves: Lc
}, t0 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, n0 = Zn.length;
function r0(e, t, n) {
  let r = "", i = !0;
  for (let s = 0; s < n0; s++) {
    const o = Zn[s], l = e[o];
    if (l === void 0)
      continue;
    let a = !0;
    if (typeof l == "number" ? a = l === (o.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0, !a || n) {
      const u = vh(l, Xa[o]);
      if (!a) {
        i = !1;
        const c = t0[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function Ya(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1, l = !1;
  for (const a in t) {
    const u = t[a];
    if (dn.has(a)) {
      o = !0;
      continue;
    } else if (yh(a)) {
      i[a] = u;
      continue;
    } else {
      const c = vh(u, Xa[a]);
      a.startsWith("origin") ? (l = !0, s[a] = c) : r[a] = c;
    }
  }
  if (t.transform || (o || n ? r.transform = r0(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
const i0 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, s0 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function o0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? i0 : s0;
  e[s.offset] = j.transform(-r);
  const o = j.transform(t), l = j.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Nc(e, t, n) {
  return typeof e == "string" ? e : j.transform(t + n * e);
}
function l0(e, t, n) {
  const r = Nc(t, e.x, e.width), i = Nc(n, e.y, e.height);
  return `${r} ${i}`;
}
function Za(e, {
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
  if (Ya(e, u, f), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform), y && (i !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = l0(y, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), o !== void 0 && o0(d, o, l, a, !1);
}
const qa = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), xh = () => ({
  ...qa(),
  attrs: {}
}), Ja = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function wh(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const Sh = /* @__PURE__ */ new Set([
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
function kh(e, t, n, r) {
  wh(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(Sh.has(i) ? i : Ha(i), t.attrs[i]);
}
const ws = {};
function a0(e) {
  Object.assign(ws, e);
}
function Th(e, { layout: t, layoutId: n }) {
  return dn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ws[e] || e === "opacity");
}
function eu(e, t, n) {
  var r;
  const { style: i } = e, s = {};
  for (const o in i)
    (ae(i[o]) || t.style && ae(t.style[o]) || Th(o, e) || ((r = n?.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
  return s;
}
function Ch(e, t, n) {
  const r = eu(e, t, n);
  for (const i in e)
    if (ae(e[i]) || ae(t[i])) {
      const s = Zn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
function u0(e, t) {
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
const _c = ["x", "y", "width", "height", "cx", "cy", "r"], c0 = {
  useVisualState: mh({
    scrapeMotionValuesFromProps: Ch,
    createRenderState: xh,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const l in i)
          if (dn.has(l)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let o = !t;
      if (t)
        for (let l = 0; l < _c.length; l++) {
          const a = _c[l];
          e[a] !== t[a] && (o = !0);
        }
      o && B.read(() => {
        u0(n, r), B.render(() => {
          Za(r, i, Ja(n.tagName), e.transformTemplate), kh(n, r);
        });
      });
    }
  })
}, f0 = {
  useVisualState: mh({
    scrapeMotionValuesFromProps: eu,
    createRenderState: qa
  })
};
function Ph(e, t, n) {
  for (const r in t)
    !ae(t[r]) && !Th(r, n) && (e[r] = t[r]);
}
function d0({ transformTemplate: e }, t) {
  return k.useMemo(() => {
    const n = qa();
    return Ya(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function p0(e, t) {
  const n = e.style || {}, r = {};
  return Ph(r, n, e), Object.assign(r, d0(e, t)), r;
}
function h0(e, t) {
  const n = {}, r = p0(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function m0(e, t, n, r) {
  const i = k.useMemo(() => {
    const s = xh();
    return Za(s, t, Ja(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    Ph(s, e.style, e), i.style = { ...s, ...i.style };
  }
  return i;
}
function g0(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (ba(n) ? m0 : h0)(r, s, o, n), u = jv(r, typeof n == "string", e), c = n !== k.Fragment ? { ...u, ...a, ref: i } : {}, { children: f } = r, d = k.useMemo(() => ae(f) ? f.get() : f, [f]);
    return k.createElement(n, {
      ...c,
      children: d
    });
  };
}
function y0(e, t) {
  return function(r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...ba(r) ? c0 : f0,
      preloadedFeatures: e,
      useRender: g0(i),
      createVisualElement: t,
      Component: r
    };
    return Bv(o);
  };
}
function Eh(e, t) {
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
function Gs(e, t, n) {
  const r = e.getProps();
  return Ga(r, t, n !== void 0 ? n : r.custom, e);
}
const v0 = /* @__PURE__ */ Ua(() => window.ScrollTimeline !== void 0);
class x0 {
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
      if (v0() && i.attachTimeline)
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
class w0 extends x0 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function tu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Dl = 2e4;
function Ah(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Dl; )
    t += n, r = e.next(t);
  return t >= Dl ? 1 / 0 : t;
}
function nu(e) {
  return typeof e == "function";
}
function Fc(e, t) {
  e.timeline = t, e.onfinish = null;
}
const ru = (e) => Array.isArray(e) && typeof e[0] == "number", S0 = {
  linearEasing: void 0
};
function k0(e, t) {
  const n = /* @__PURE__ */ Ua(e);
  return () => {
    var r;
    return (r = S0[t]) !== null && r !== void 0 ? r : n();
  };
}
const Ss = /* @__PURE__ */ k0(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Rh = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < i; s++)
    r += e(/* @__PURE__ */ Hn(0, i - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Dh(e) {
  return !!(typeof e == "function" && Ss() || !e || typeof e == "string" && (e in Ml || Ss()) || ru(e) || Array.isArray(e) && e.every(Dh));
}
const mr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Ml = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ mr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ mr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ mr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ mr([0.33, 1.53, 0.69, 0.99])
};
function Mh(e, t) {
  if (e)
    return typeof e == "function" && Ss() ? Rh(e, t) : ru(e) ? mr(e) : Array.isArray(e) ? e.map((n) => Mh(n, t) || Ml.easeOut) : Ml[e];
}
const Ke = {
  x: !1,
  y: !1
};
function jh() {
  return Ke.x || Ke.y;
}
function T0(e, t, n) {
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
function Vh(e, t) {
  const n = T0(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Ic(e) {
  return (t) => {
    t.pointerType === "touch" || jh() || e(t);
  };
}
function C0(e, t, n = {}) {
  const [r, i, s] = Vh(e, n), o = Ic((l) => {
    const { target: a } = l, u = t(l);
    if (typeof u != "function" || !a)
      return;
    const c = Ic((f) => {
      u(f), a.removeEventListener("pointerleave", c);
    });
    a.addEventListener("pointerleave", c, i);
  });
  return r.forEach((l) => {
    l.addEventListener("pointerenter", o, i);
  }), s;
}
const Lh = (e, t) => t ? e === t ? !0 : Lh(e, t.parentElement) : !1, iu = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, P0 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function E0(e) {
  return P0.has(e.tagName) || e.tabIndex !== -1;
}
const gr = /* @__PURE__ */ new WeakSet();
function Oc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Co(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const A0 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Oc(() => {
    if (gr.has(n))
      return;
    Co(n, "down");
    const i = Oc(() => {
      Co(n, "up");
    }), s = () => Co(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function zc(e) {
  return iu(e) && !jh();
}
function R0(e, t, n = {}) {
  const [r, i, s] = Vh(e, n), o = (l) => {
    const a = l.currentTarget;
    if (!zc(l) || gr.has(a))
      return;
    gr.add(a);
    const u = t(l), c = (g, y) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!zc(g) || !gr.has(a)) && (gr.delete(a), typeof u == "function" && u(g, { success: y }));
    }, f = (g) => {
      c(g, n.useGlobalTarget || Lh(a, g.target));
    }, d = (g) => {
      c(g, !1);
    };
    window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i);
  };
  return r.forEach((l) => {
    !E0(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0), (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i), l.addEventListener("focus", (u) => A0(u, i), i);
  }), s;
}
function D0(e) {
  return e === "x" || e === "y" ? Ke[e] ? null : (Ke[e] = !0, () => {
    Ke[e] = !1;
  }) : Ke.x || Ke.y ? null : (Ke.x = Ke.y = !0, () => {
    Ke.x = Ke.y = !1;
  });
}
const Nh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Zn
]);
let bi;
function M0() {
  bi = void 0;
}
const it = {
  now: () => (bi === void 0 && it.set(le.isProcessing || Pv.useManualTiming ? le.timestamp : performance.now()), bi),
  set: (e) => {
    bi = e, queueMicrotask(M0);
  }
};
function su(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ou(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function j0([...e], t, n) {
  const r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    const i = n < 0 ? e.length + n : n, [s] = e.splice(t, 1);
    e.splice(i, 0, s);
  }
  return e;
}
class lu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return su(this.subscriptions, t), () => ou(this.subscriptions, t);
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
function _h(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Bc = 30, V0 = (e) => !isNaN(parseFloat(e)), Ar = {
  current: void 0
};
class L0 {
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
      const s = it.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = it.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = V0(this.current));
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
    this.events[t] || (this.events[t] = new lu());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), B.read(() => {
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
    return Ar.current && Ar.current.push(this), this.current;
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
    const t = it.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Bc)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Bc);
    return _h(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function bn(e, t) {
  return new L0(e, t);
}
function N0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, bn(n));
}
function _0(e, t) {
  const n = Gs(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = bv(s[o]);
    N0(e, o, l);
  }
}
function F0(e) {
  return !!(ae(e) && e.add);
}
function jl(e, t) {
  const n = e.getValue("willChange");
  if (F0(n))
    return n.add(t);
}
function Fh(e) {
  return e.props[dh];
}
const Ih = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, I0 = 1e-7, O0 = 12;
function z0(e, t, n, r, i) {
  let s, o, l = 0;
  do
    o = t + (n - t) / 2, s = Ih(o, r, i) - e, s > 0 ? n = o : t = o;
  while (Math.abs(s) > I0 && ++l < O0);
  return o;
}
function oi(e, t, n, r) {
  if (e === t && n === r)
    return De;
  const i = (s) => z0(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Ih(i(s), t, r);
}
const Oh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, zh = (e) => (t) => 1 - e(1 - t), Bh = /* @__PURE__ */ oi(0.33, 1.53, 0.69, 0.99), au = /* @__PURE__ */ zh(Bh), Uh = /* @__PURE__ */ Oh(au), $h = (e) => (e *= 2) < 1 ? 0.5 * au(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), uu = (e) => 1 - Math.sin(Math.acos(e)), Wh = zh(uu), Hh = Oh(uu), Kh = (e) => /^0[^.\s]+$/u.test(e);
function B0(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Kh(e) : !0;
}
const Rr = (e) => Math.round(e * 1e5) / 1e5, cu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function U0(e) {
  return e == null;
}
const $0 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, fu = (e, t) => (n) => !!(typeof n == "string" && $0.test(n) && n.startsWith(e) || t && !U0(n) && Object.prototype.hasOwnProperty.call(n, t)), bh = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, s, o, l] = r.match(cu);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, W0 = (e) => yt(0, 255, e), Po = {
  ...qn,
  transform: (e) => Math.round(W0(e))
}, Jt = {
  test: /* @__PURE__ */ fu("rgb", "red"),
  parse: /* @__PURE__ */ bh("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Po.transform(e) + ", " + Po.transform(t) + ", " + Po.transform(n) + ", " + Rr(Zr.transform(r)) + ")"
};
function H0(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Vl = {
  test: /* @__PURE__ */ fu("#"),
  parse: H0,
  transform: Jt.transform
}, An = {
  test: /* @__PURE__ */ fu("hsl", "hue"),
  parse: /* @__PURE__ */ bh("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + rt.transform(Rr(t)) + ", " + rt.transform(Rr(n)) + ", " + Rr(Zr.transform(r)) + ")"
}, pe = {
  test: (e) => Jt.test(e) || Vl.test(e) || An.test(e),
  parse: (e) => Jt.test(e) ? Jt.parse(e) : An.test(e) ? An.parse(e) : Vl.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Jt.transform(e) : An.transform(e)
}, K0 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function b0(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(cu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(K0)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Gh = "number", Qh = "color", G0 = "var", Q0 = "var(", Uc = "${}", X0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function qr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let s = 0;
  const l = t.replace(X0, (a) => (pe.test(a) ? (r.color.push(s), i.push(Qh), n.push(pe.parse(a))) : a.startsWith(Q0) ? (r.var.push(s), i.push(G0), n.push(a)) : (r.number.push(s), i.push(Gh), n.push(parseFloat(a))), ++s, Uc)).split(Uc);
  return { values: n, split: l, indexes: r, types: i };
}
function Xh(e) {
  return qr(e).values;
}
function Yh(e) {
  const { split: t, types: n } = qr(e), r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (s += t[o], i[o] !== void 0) {
        const l = n[o];
        l === Gh ? s += Rr(i[o]) : l === Qh ? s += pe.transform(i[o]) : s += i[o];
      }
    return s;
  };
}
const Y0 = (e) => typeof e == "number" ? 0 : e;
function Z0(e) {
  const t = Xh(e);
  return Yh(e)(t.map(Y0));
}
const It = {
  test: b0,
  parse: Xh,
  createTransformer: Yh,
  getAnimatableNone: Z0
}, q0 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function J0(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(cu) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let s = q0.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const e1 = /\b([a-z-]*)\(.*?\)/gu, Ll = {
  ...It,
  getAnimatableNone: (e) => {
    const t = e.match(e1);
    return t ? t.map(J0).join(" ") : e;
  }
}, t1 = {
  ...Xa,
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
  filter: Ll,
  WebkitFilter: Ll
}, du = (e) => t1[e];
function Zh(e, t) {
  let n = du(e);
  return n !== Ll && (n = It), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const n1 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function r1(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !n1.has(s) && qr(s).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const s of t)
      e[s] = Zh(n, i);
}
const $c = (e) => e === qn || e === j, Wc = (e, t) => parseFloat(e.split(", ")[t]), Hc = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return Wc(i[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? Wc(s[1], e) : 0;
  }
}, i1 = /* @__PURE__ */ new Set(["x", "y", "z"]), s1 = Zn.filter((e) => !i1.has(e));
function o1(e) {
  const t = [];
  return s1.forEach((n) => {
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
  x: Hc(4, 13),
  y: Hc(5, 14)
};
Gn.translateX = Gn.x;
Gn.translateY = Gn.y;
const nn = /* @__PURE__ */ new Set();
let Nl = !1, _l = !1;
function qh() {
  if (_l) {
    const e = Array.from(nn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = o1(r);
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
  _l = !1, Nl = !1, nn.forEach((e) => e.complete()), nn.clear();
}
function Jh() {
  nn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (_l = !0);
  });
}
function l1() {
  Jh(), qh();
}
class pu {
  constructor(t, n, r, i, s, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (nn.add(this), Nl || (Nl = !0, B.read(Jh), B.resolveKeyframes(qh))) : (this.readKeyframes(), this.complete());
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), nn.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, nn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const em = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), a1 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function u1(e) {
  const t = a1.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function tm(e, t, n = 1) {
  const [r, i] = u1(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return em(o) ? parseFloat(o) : o;
  }
  return Qa(i) ? tm(i, t, n + 1) : i;
}
const nm = (e) => (t) => t.test(e), c1 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, rm = [qn, j, rt, wt, qv, Zv, c1], Kc = (e) => rm.find(nm(e));
class im extends pu {
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
      if (typeof u == "string" && (u = u.trim(), Qa(u))) {
        const c = tm(u, n.current);
        c !== void 0 && (t[a] = c), a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Nh.has(r) || t.length !== 2)
      return;
    const [i, s] = t, o = Kc(i), l = Kc(s);
    if (o !== l)
      if ($c(o) && $c(l))
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
      B0(t[i]) && r.push(i);
    r.length && r1(t, r, n);
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
const bc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(It.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function f1(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function d1(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], o = bc(i, t), l = bc(s, t);
  return !o || !l ? !1 : f1(e) || (n === "spring" || nu(n)) && r;
}
const p1 = (e) => e !== null;
function Qs(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(p1), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const h1 = 40;
class sm {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = it.now(), this.options = {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > h1 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && l1(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = it.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: s, delay: o, onComplete: l, onUpdate: a, isGenerator: u } = this.options;
    if (!u && !d1(t, r, i, s))
      if (o)
        this.options.duration = 0;
      else {
        a && a(Qs(t, this.options, n)), l && l(), this.resolveFinishedPromise();
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
const H = (e, t, n) => e + (t - e) * n;
function Eo(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function m1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, s = 0, o = 0;
  if (!t)
    i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - l;
    i = Eo(a, l, e + 1 / 3), s = Eo(a, l, e), o = Eo(a, l, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function ks(e, t) {
  return (n) => n > 0 ? t : e;
}
const Ao = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, g1 = [Vl, Jt, An], y1 = (e) => g1.find((t) => t.test(e));
function Gc(e) {
  const t = y1(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === An && (n = m1(n)), n;
}
const Qc = (e, t) => {
  const n = Gc(e), r = Gc(t);
  if (!n || !r)
    return ks(e, t);
  const i = { ...n };
  return (s) => (i.red = Ao(n.red, r.red, s), i.green = Ao(n.green, r.green, s), i.blue = Ao(n.blue, r.blue, s), i.alpha = H(n.alpha, r.alpha, s), Jt.transform(i));
}, v1 = (e, t) => (n) => t(e(n)), li = (...e) => e.reduce(v1), Fl = /* @__PURE__ */ new Set(["none", "hidden"]);
function x1(e, t) {
  return Fl.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function w1(e, t) {
  return (n) => H(e, t, n);
}
function hu(e) {
  return typeof e == "number" ? w1 : typeof e == "string" ? Qa(e) ? ks : pe.test(e) ? Qc : T1 : Array.isArray(e) ? om : typeof e == "object" ? pe.test(e) ? Qc : S1 : ks;
}
function om(e, t) {
  const n = [...e], r = n.length, i = e.map((s, o) => hu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++)
      n[o] = i[o](s);
    return n;
  };
}
function S1(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = hu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}
function k1(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s], l = e.indexes[o][i[o]], a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[s] = a, i[o]++;
  }
  return r;
}
const T1 = (e, t) => {
  const n = It.createTransformer(t), r = qr(e), i = qr(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Fl.has(e) && !i.values.length || Fl.has(t) && !r.values.length ? x1(e, t) : li(om(k1(r, i), i.values), n) : ks(e, t);
};
function lm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? H(e, t, n) : hu(e)(e, t);
}
const C1 = 5;
function am(e, t, n) {
  const r = Math.max(t - C1, 0);
  return _h(n - e(r), t - r);
}
const Q = {
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
}, Ro = 1e-3;
function P1({ duration: e = Q.duration, bounce: t = Q.bounce, velocity: n = Q.velocity, mass: r = Q.mass }) {
  let i, s, o = 1 - t;
  o = yt(Q.minDamping, Q.maxDamping, o), e = yt(Q.minDuration, Q.maxDuration, /* @__PURE__ */ ft(e)), o < 1 ? (i = (u) => {
    const c = u * o, f = c * e, d = c - n, g = Il(u, o), y = Math.exp(-f);
    return Ro - d / g * y;
  }, s = (u) => {
    const f = u * o * e, d = f * n + n, g = Math.pow(o, 2) * Math.pow(u, 2) * e, y = Math.exp(-f), v = Il(Math.pow(u, 2), o);
    return (-i(u) + Ro > 0 ? -1 : 1) * ((d - g) * y) / v;
  }) : (i = (u) => {
    const c = Math.exp(-u * e), f = (u - n) * e + 1;
    return -Ro + c * f;
  }, s = (u) => {
    const c = Math.exp(-u * e), f = (n - u) * (e * e);
    return c * f;
  });
  const l = 5 / e, a = A1(i, s, l);
  if (e = /* @__PURE__ */ ct(e), isNaN(a))
    return {
      stiffness: Q.stiffness,
      damping: Q.damping,
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
const E1 = 12;
function A1(e, t, n) {
  let r = n;
  for (let i = 1; i < E1; i++)
    r = r - e(r) / t(r);
  return r;
}
function Il(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const R1 = ["duration", "bounce"], D1 = ["stiffness", "damping", "mass"];
function Xc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function M1(e) {
  let t = {
    velocity: Q.velocity,
    stiffness: Q.stiffness,
    damping: Q.damping,
    mass: Q.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Xc(e, D1) && Xc(e, R1))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, s = 2 * yt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: Q.mass,
        stiffness: i,
        damping: s
      };
    } else {
      const n = P1(e);
      t = {
        ...t,
        ...n,
        mass: Q.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function um(e = Q.visualDuration, t = Q.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], l = { done: !1, value: s }, { stiffness: a, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: g } = M1({
    ...n,
    velocity: -/* @__PURE__ */ ft(n.velocity || 0)
  }), y = d || 0, v = u / (2 * Math.sqrt(a * c)), T = o - s, h = /* @__PURE__ */ ft(Math.sqrt(a / c)), p = Math.abs(T) < 5;
  r || (r = p ? Q.restSpeed.granular : Q.restSpeed.default), i || (i = p ? Q.restDelta.granular : Q.restDelta.default);
  let m;
  if (v < 1) {
    const w = Il(h, v);
    m = (E) => {
      const R = Math.exp(-v * h * E);
      return o - R * ((y + v * h * T) / w * Math.sin(w * E) + T * Math.cos(w * E));
    };
  } else if (v === 1)
    m = (w) => o - Math.exp(-h * w) * (T + (y + h * T) * w);
  else {
    const w = h * Math.sqrt(v * v - 1);
    m = (E) => {
      const R = Math.exp(-v * h * E), C = Math.min(w * E, 300);
      return o - R * ((y + v * h * T) * Math.sinh(C) + w * T * Math.cosh(C)) / w;
    };
  }
  const x = {
    calculatedDuration: g && f || null,
    next: (w) => {
      const E = m(w);
      if (g)
        l.done = w >= f;
      else {
        let R = 0;
        v < 1 && (R = w === 0 ? /* @__PURE__ */ ct(y) : am(m, w, E));
        const C = Math.abs(R) <= r, N = Math.abs(o - E) <= i;
        l.done = C && N;
      }
      return l.value = l.done ? o : E, l;
    },
    toString: () => {
      const w = Math.min(Ah(x), Dl), E = Rh((R) => x.next(w * R).value, w, 30);
      return w + "ms " + E;
    }
  };
  return x;
}
function Yc({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: l, max: a, restDelta: u = 0.5, restSpeed: c }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, g = (C) => l !== void 0 && C < l || a !== void 0 && C > a, y = (C) => l === void 0 ? a : a === void 0 || Math.abs(l - C) < Math.abs(a - C) ? l : a;
  let v = n * t;
  const T = f + v, h = o === void 0 ? T : o(T);
  h !== T && (v = h - f);
  const p = (C) => -v * Math.exp(-C / r), m = (C) => h + p(C), x = (C) => {
    const N = p(C), P = m(C);
    d.done = Math.abs(N) <= u, d.value = d.done ? h : P;
  };
  let w, E;
  const R = (C) => {
    g(d.value) && (w = C, E = um({
      keyframes: [d.value, y(d.value)],
      velocity: am(m, C, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return R(0), {
    calculatedDuration: null,
    next: (C) => {
      let N = !1;
      return !E && w === void 0 && (N = !0, x(C), R(C)), w !== void 0 && C >= w ? E.next(C - w) : (!N && x(C), d);
    }
  };
}
const j1 = /* @__PURE__ */ oi(0.42, 0, 1, 1), V1 = /* @__PURE__ */ oi(0, 0, 0.58, 1), cm = /* @__PURE__ */ oi(0.42, 0, 0.58, 1), L1 = (e) => Array.isArray(e) && typeof e[0] != "number", N1 = {
  linear: De,
  easeIn: j1,
  easeInOut: cm,
  easeOut: V1,
  circIn: uu,
  circInOut: Hh,
  circOut: Wh,
  backIn: au,
  backInOut: Uh,
  backOut: Bh,
  anticipate: $h
}, Zc = (e) => {
  if (ru(e)) {
    lh(e.length === 4);
    const [t, n, r, i] = e;
    return oi(t, n, r, i);
  } else if (typeof e == "string")
    return N1[e];
  return e;
};
function _1(e, t, n) {
  const r = [], i = n || lm, s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || De : t;
      l = li(a, l);
    }
    r.push(l);
  }
  return r;
}
function fm(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (lh(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = _1(t, r, i), a = l.length, u = (c) => {
    if (o && c < e[0])
      return t[0];
    let f = 0;
    if (a > 1)
      for (; f < e.length - 2 && !(c < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ Hn(e[f], e[f + 1], c);
    return l[f](d);
  };
  return n ? (c) => u(yt(e[0], e[s - 1], c)) : u;
}
function F1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ Hn(0, t, r);
    e.push(H(n, 1, i));
  }
}
function I1(e) {
  const t = [0];
  return F1(t, e.length - 1), t;
}
function O1(e, t) {
  return e.map((n) => n * t);
}
function z1(e, t) {
  return e.map(() => t || cm).splice(0, e.length - 1);
}
function Ts({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = L1(r) ? r.map(Zc) : Zc(r), s = {
    done: !1,
    value: t[0]
  }, o = O1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : I1(t),
    e
  ), l = fm(o, t, {
    ease: Array.isArray(i) ? i : z1(t, i)
  });
  return {
    calculatedDuration: e,
    next: (a) => (s.value = l(a), s.done = a >= e, s)
  };
}
const B1 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => B.update(t, !0),
    stop: () => gt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => le.isProcessing ? le.timestamp : it.now()
  };
}, U1 = {
  decay: Yc,
  inertia: Yc,
  tween: Ts,
  keyframes: Ts,
  spring: um
}, $1 = (e) => e / 100;
class mu extends sm {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: a } = this.options;
      a && a();
    };
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options, o = i?.KeyframeResolver || pu, l = (a, u) => this.onKeyframesResolved(a, u);
    this.resolver = new o(s, l, n, r, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: o = 0 } = this.options, l = nu(n) ? n : U1[n] || Ts;
    let a, u;
    l !== Ts && typeof t[0] != "number" && (a = li($1, lm(t[0], t[1])), t = [0, 100]);
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" && (u = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -o
    })), c.calculatedDuration === null && (c.calculatedDuration = Ah(c));
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
    const h = this.currentTime - d * (this.speed >= 0 ? 1 : -1), p = this.speed >= 0 ? h < 0 : h > c;
    this.currentTime = Math.max(h, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let m = this.currentTime, x = s;
    if (g) {
      const C = Math.min(this.currentTime, c) / f;
      let N = Math.floor(C), P = C % 1;
      !P && C >= 1 && (P = 1), P === 1 && N--, N = Math.min(N, g + 1), !!(N % 2) && (y === "reverse" ? (P = 1 - P, v && (P -= v / f)) : y === "mirror" && (x = o)), m = yt(0, 1, P) * f;
    }
    const w = p ? { done: !1, value: a[0] } : x.next(m);
    l && (w.value = l(w.value));
    let { done: E } = w;
    !p && u !== null && (E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const R = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return R && i !== void 0 && (w.value = Qs(a, this.options, i)), T && T(w.value), R && this.finish(), w;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ ft(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ ft(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ ct(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ ft(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = B1, onPlay: n, startTime: r } = this.options;
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
const W1 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function H1(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = "loop", ease: l = "easeInOut", times: a } = {}) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Mh(l, i);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
const K1 = /* @__PURE__ */ Ua(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Cs = 10, b1 = 2e4;
function G1(e) {
  return nu(e.type) || e.type === "spring" || !Dh(e.ease);
}
function Q1(e, t) {
  const n = new mu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < b1; )
    r = n.sample(s), i.push(r.value), s += Cs;
  return {
    times: void 0,
    keyframes: i,
    duration: s - Cs,
    ease: "linear"
  };
}
const dm = {
  anticipate: $h,
  backInOut: Uh,
  circInOut: Hh
};
function X1(e) {
  return e in dm;
}
class qc extends sm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    this.resolver = new im(s, (o, l) => this.onKeyframesResolved(o, l), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: i, ease: s, type: o, motionValue: l, name: a, startTime: u } = this.options;
    if (!l.owner || !l.owner.current)
      return !1;
    if (typeof s == "string" && Ss() && X1(s) && (s = dm[s]), G1(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: g, element: y, ...v } = this.options, T = Q1(t, v);
      t = T.keyframes, t.length === 1 && (t[1] = t[0]), r = T.duration, i = T.times, s = T.ease, o = "keyframes";
    }
    const c = H1(l.owner.current, a, t, { ...this.options, duration: r, times: i, ease: s });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (Fc(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: f } = this.options;
      l.set(Qs(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
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
    return /* @__PURE__ */ ft(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ ft(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ ct(t);
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
        return De;
      const { animation: r } = n;
      Fc(r, t);
    }
    return De;
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
      const { motionValue: u, onUpdate: c, onComplete: f, element: d, ...g } = this.options, y = new mu({
        ...g,
        keyframes: r,
        duration: i,
        type: s,
        ease: o,
        times: l,
        isGenerator: !0
      }), v = /* @__PURE__ */ ct(this.time);
      u.setWithVelocity(y.sample(v - Cs).value, y.sample(v).value, Cs);
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
    return K1() && r && W1.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !a && !u && !i && s !== "mirror" && o !== 0 && l !== "inertia";
  }
}
const Y1 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Z1 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), q1 = {
  type: "keyframes",
  duration: 0.8
}, J1 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ex = (e, { keyframes: t }) => t.length > 2 ? q1 : dn.has(e) ? e.startsWith("scale") ? Z1(t[1]) : Y1 : J1;
function tx({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const gu = (e, t, n, r = {}, i, s) => (o) => {
  const l = tu(r, e) || {}, a = l.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ ct(a);
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
  tx(l) || (c = {
    ...c,
    ...ex(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ ct(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ ct(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !s && t.get() !== void 0) {
    const d = Qs(c.keyframes, l);
    if (d !== void 0)
      return B.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new w0([]);
  }
  return !s && qc.supports(c) ? new qc(c) : new mu(c);
};
function nx({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function pm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (o = r);
  const u = [], c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null), g = a[f];
    if (g === void 0 || c && nx(c, f))
      continue;
    const y = {
      delay: n,
      ...tu(o || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const h = Fh(e);
      if (h) {
        const p = window.MotionHandoffAnimation(h, f, B);
        p !== null && (y.startTime = p, v = !0);
      }
    }
    jl(e, f), d.start(gu(f, d, g, e.shouldReduceMotion && Nh.has(f) ? { type: !1 } : y, e, v));
    const T = d.animation;
    T && u.push(T);
  }
  return l && Promise.all(u).then(() => {
    B.update(() => {
      l && _0(e, l);
    });
  }), u;
}
function Ol(e, t, n = {}) {
  var r;
  const i = Gs(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(pm(e, i, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = s;
    return rx(e, t, c + u, f, d, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else
    return Promise.all([o(), l(n.delay)]);
}
function rx(e, t, n = 0, r = 0, i = 1, s) {
  const o = [], l = (e.variantChildren.size - 1) * r, a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return Array.from(e.variantChildren).sort(ix).forEach((u, c) => {
    u.notify("AnimationStart", t), o.push(Ol(u, t, {
      ...s,
      delay: n + a(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(o);
}
function ix(e, t) {
  return e.sortNodePosition(t);
}
function sx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ol(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = Ol(e, t, n);
  else {
    const i = typeof t == "function" ? Gs(e, t, n.custom) : t;
    r = Promise.all(pm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const ox = Wa.length;
function hm(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? hm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < ox; n++) {
    const r = Wa[n], i = e.props[r];
    (Yr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const lx = [...$a].reverse(), ax = $a.length;
function ux(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => sx(e, n, r)));
}
function cx(e) {
  let t = ux(e), n = Jc(), r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = Gs(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
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
    const { props: u } = e, c = hm(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let g = {}, y = 1 / 0;
    for (let T = 0; T < ax; T++) {
      const h = lx[T], p = n[h], m = u[h] !== void 0 ? u[h] : c[h], x = Yr(m), w = h === a ? p.isActive : null;
      w === !1 && (y = T);
      let E = m === c[h] && m !== u[h] && x;
      if (E && r && e.manuallyAnimateOnMount && (E = !1), p.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !p.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !m && !p.prevProp || // Or if the prop doesn't define an animation
      Ks(m) || typeof m == "boolean")
        continue;
      const R = fx(p.prevProp, m);
      let C = R || // If we're making this variant active, we want to always make it active
      h === a && p.isActive && !E && x || // If we removed a higher-priority variant (i is in reverse order)
      T > y && x, N = !1;
      const P = Array.isArray(m) ? m : [m];
      let I = P.reduce(i(h), {});
      w === !1 && (I = {});
      const { prevResolvedValues: $e = {} } = p, $t = {
        ...$e,
        ...I
      }, er = (ee) => {
        C = !0, d.has(ee) && (N = !0, d.delete(ee)), p.needsAnimating[ee] = !0;
        const D = e.getValue(ee);
        D && (D.liveStyle = !1);
      };
      for (const ee in $t) {
        const D = I[ee], V = $e[ee];
        if (g.hasOwnProperty(ee))
          continue;
        let L = !1;
        Rl(D) && Rl(V) ? L = !Eh(D, V) : L = D !== V, L ? D != null ? er(ee) : d.add(ee) : D !== void 0 && d.has(ee) ? er(ee) : p.protectedKeys[ee] = !0;
      }
      p.prevProp = m, p.prevResolvedValues = I, p.isActive && (g = { ...g, ...I }), r && e.blockInitialAnimation && (C = !1), C && (!(E && R) || N) && f.push(...P.map((ee) => ({
        animation: ee,
        options: { type: h }
      })));
    }
    if (d.size) {
      const T = {};
      d.forEach((h) => {
        const p = e.getBaseTarget(h), m = e.getValue(h);
        m && (m.liveStyle = !0), T[h] = p ?? null;
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
      n = Jc(), r = !0;
    }
  };
}
function fx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Eh(t, e) : !1;
}
function Kt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Jc() {
  return {
    animate: Kt(!0),
    whileInView: Kt(),
    whileHover: Kt(),
    whileTap: Kt(),
    whileDrag: Kt(),
    whileFocus: Kt(),
    exit: Kt()
  };
}
class Ut {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class dx extends Ut {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = cx(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ks(t) && (this.unmountControls = t.subscribe(this.node));
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
let px = 0;
class hx extends Ut {
  constructor() {
    super(...arguments), this.id = px++;
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
const mx = {
  animation: {
    Feature: dx
  },
  exit: {
    Feature: hx
  }
};
function Jr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ai(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const gx = (e) => (t) => iu(t) && e(t, ai(t));
function Dr(e, t, n, r) {
  return Jr(e, t, gx(n), r);
}
const ef = (e, t) => Math.abs(e - t);
function yx(e, t) {
  const n = ef(e.x, t.x), r = ef(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class mm {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Mo(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, g = yx(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !g)
        return;
      const { point: y } = f, { timestamp: v } = le;
      this.history.push({ ...y, timestamp: v });
      const { onStart: T, onMove: h } = this.handlers;
      d || (T && T(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Do(d, this.transformPagePoint), B.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const T = Mo(f.type === "pointercancel" ? this.lastMoveEventInfo : Do(d, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, T), y && y(f, T);
    }, !iu(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const o = ai(t), l = Do(o, this.transformPagePoint), { point: a } = l, { timestamp: u } = le;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Mo(l, this.history)), this.removeListeners = li(Dr(this.contextWindow, "pointermove", this.handlePointerMove), Dr(this.contextWindow, "pointerup", this.handlePointerUp), Dr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), gt(this.updatePoint);
  }
}
function Do(e, t) {
  return t ? { point: t(e.point) } : e;
}
function tf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Mo({ point: e }, t) {
  return {
    point: e,
    delta: tf(e, gm(t)),
    offset: tf(e, vx(t)),
    velocity: xx(t, 0.1)
  };
}
function vx(e) {
  return e[0];
}
function gm(e) {
  return e[e.length - 1];
}
function xx(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = gm(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ ct(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ ft(i.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const ym = 1e-4, wx = 1 - ym, Sx = 1 + ym, vm = 0.01, kx = 0 - vm, Tx = 0 + vm;
function je(e) {
  return e.max - e.min;
}
function Cx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function nf(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = H(t.min, t.max, e.origin), e.scale = je(n) / je(t), e.translate = H(n.min, n.max, e.origin) - e.originPoint, (e.scale >= wx && e.scale <= Sx || isNaN(e.scale)) && (e.scale = 1), (e.translate >= kx && e.translate <= Tx || isNaN(e.translate)) && (e.translate = 0);
}
function Mr(e, t, n, r) {
  nf(e.x, t.x, n.x, r ? r.originX : void 0), nf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function rf(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + je(t);
}
function Px(e, t, n) {
  rf(e.x, t.x, n.x), rf(e.y, t.y, n.y);
}
function sf(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + je(t);
}
function jr(e, t, n) {
  sf(e.x, t.x, n.x), sf(e.y, t.y, n.y);
}
function Ex(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? H(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)), e;
}
function of(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Ax(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: of(e.x, n, i),
    y: of(e.y, t, r)
  };
}
function lf(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Rx(e, t) {
  return {
    x: lf(e.x, t.x),
    y: lf(e.y, t.y)
  };
}
function Dx(e, t) {
  let n = 0.5;
  const r = je(e), i = je(t);
  return i > r ? n = /* @__PURE__ */ Hn(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Hn(e.min, e.max - i, t.min)), yt(0, 1, n);
}
function Mx(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const zl = 0.35;
function jx(e = zl) {
  return e === !1 ? e = 0 : e === !0 && (e = zl), {
    x: af(e, "left", "right"),
    y: af(e, "top", "bottom")
  };
}
function af(e, t, n) {
  return {
    min: uf(e, t),
    max: uf(e, n)
  };
}
function uf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const cf = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Rn = () => ({
  x: cf(),
  y: cf()
}), ff = () => ({ min: 0, max: 0 }), Z = () => ({
  x: ff(),
  y: ff()
});
function _e(e) {
  return [e("x"), e("y")];
}
function xm({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Vx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Lx(e, t) {
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
function jo(e) {
  return e === void 0 || e === 1;
}
function Bl({ scale: e, scaleX: t, scaleY: n }) {
  return !jo(e) || !jo(t) || !jo(n);
}
function Qt(e) {
  return Bl(e) || wm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function wm(e) {
  return df(e.x) || df(e.y);
}
function df(e) {
  return e && e !== "0%";
}
function Ps(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function pf(e, t, n, r, i) {
  return i !== void 0 && (e = Ps(e, i, r)), Ps(e, n, r) + t;
}
function Ul(e, t = 0, n = 1, r, i) {
  e.min = pf(e.min, t, n, r, i), e.max = pf(e.max, t, n, r, i);
}
function Sm(e, { x: t, y: n }) {
  Ul(e.x, t.translate, t.scale, t.originPoint), Ul(e.y, n.translate, n.scale, n.originPoint);
}
const hf = 0.999999999999, mf = 1.0000000000001;
function Nx(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    s = n[l], o = s.projectionDelta;
    const { visualElement: a } = s.options;
    a && a.props.style && a.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Mn(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Sm(e, o)), r && Qt(s.latestValues) && Mn(e, s.latestValues));
  }
  t.x < mf && t.x > hf && (t.x = 1), t.y < mf && t.y > hf && (t.y = 1);
}
function Dn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function gf(e, t, n, r, i = 0.5) {
  const s = H(e.min, e.max, i);
  Ul(e, t, n, s, r);
}
function Mn(e, t) {
  gf(e.x, t.x, t.scaleX, t.scale, t.originX), gf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function km(e, t) {
  return xm(Lx(e.getBoundingClientRect(), t));
}
function _x(e, t, n) {
  const r = km(e, n), { scroll: i } = t;
  return i && (Dn(r.x, i.offset.x), Dn(r.y, i.offset.y)), r;
}
const Tm = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Fx = /* @__PURE__ */ new WeakMap();
class Ix {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Z(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ai(c).point);
    }, s = (c, f) => {
      const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
      if (d && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = D0(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _e((T) => {
        let h = this.getAxisMotionValue(T).get() || 0;
        if (rt.test(h)) {
          const { projection: p } = this.visualElement;
          if (p && p.layout) {
            const m = p.layout.layoutBox[T];
            m && (h = je(m) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[T] = h;
      }), y && B.postRender(() => y(c, f)), jl(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, o = (c, f) => {
      const { dragPropagation: d, dragDirectionLock: g, onDirectionLock: y, onDrag: v } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: T } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = Ox(T), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, T), this.updateAxis("y", f.point, T), this.visualElement.render(), v && v(c, f);
    }, l = (c, f) => this.stop(c, f), a = () => _e((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new mm(t, {
      onSessionStart: i,
      onStart: s,
      onMove: o,
      onSessionEnd: l,
      resumeAnimation: a
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Tm(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && B.postRender(() => s(t, n));
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
    if (!r || !Vi(t, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = Ex(o, this.constraints[t], this.elastic[t])), s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && En(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Ax(i.layoutBox, n) : this.constraints = !1, this.elastic = jx(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && _e((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Mx(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !En(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const s = _x(r, i.root, this.visualElement.getTransformPagePoint());
    let o = Rx(i.layout.layoutBox, s);
    if (n) {
      const l = n(Vx(o));
      this.hasMutatedConstraints = !!l, l && (o = xm(l));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l } = this.getProps(), a = this.constraints || {}, u = _e((c) => {
      if (!Vi(c, n, this.currentDirection))
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
    return jl(this.visualElement, t), r.start(gu(t, r, 0, n, this.visualElement, !1));
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
      if (!Vi(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n];
        s.set(t[n] - H(o, l, 0.5));
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
    if (!En(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _e((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = Dx({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), _e((o) => {
      if (!Vi(o, t, null))
        return;
      const l = this.getAxisMotionValue(o), { min: a, max: u } = this.constraints[o];
      l.set(H(a, u, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Fx.set(this.visualElement, this);
    const t = this.visualElement.current, n = Dr(t, "pointerdown", (a) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(a);
    }), r = () => {
      const { dragConstraints: a } = this.getProps();
      En(a) && a.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), B.read(r);
    const o = Jr(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: u }) => {
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
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = zl, dragMomentum: l = !0 } = t;
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
function Vi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ox(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class zx extends Ut {
  constructor(t) {
    super(t), this.removeGroupControls = De, this.removeListeners = De, this.controls = new Ix(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || De;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const yf = (e) => (t, n) => {
  e && B.postRender(() => e(t, n));
};
class Bx extends Ut {
  constructor() {
    super(...arguments), this.removePointerDownListener = De;
  }
  onPointerDown(t) {
    this.session = new mm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Tm(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: yf(t),
      onStart: yf(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && B.postRender(() => i(s, o));
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
function vf(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ur = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (j.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = vf(e, t.target.x), r = vf(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Ux = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = It.parse(e);
    if (i.length > 5)
      return r;
    const s = It.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, l = n.x.scale * t.x, a = n.y.scale * t.y;
    i[0 + o] /= l, i[1 + o] /= a;
    const u = H(l, a, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i);
  }
};
class $x extends k.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = t;
    a0(Wx), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Gi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, o = r.projection;
    return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || B.postRender(() => {
      const l = o.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ka.postRender(() => {
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
function Cm(e) {
  const [t, n] = oh(), r = k.useContext(Oa);
  return S.jsx($x, { ...e, layoutGroup: r, switchLayoutGroup: k.useContext(ph), isPresent: t, safeToRemove: n });
}
const Wx = {
  borderRadius: {
    ...ur,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ur,
  borderTopRightRadius: ur,
  borderBottomLeftRadius: ur,
  borderBottomRightRadius: ur,
  boxShadow: Ux
};
function Hx(e, t, n) {
  const r = ae(e) ? e : bn(e);
  return r.start(gu("", r, t, n)), r.animation;
}
function Kx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const bx = (e, t) => e.depth - t.depth;
class Gx {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    su(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ou(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(bx), this.isDirty = !1, this.children.forEach(t);
  }
}
function Qx(e, t) {
  const n = it.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= t && (gt(r), e(s - t));
  };
  return B.read(r, !0), () => gt(r);
}
const Pm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Xx = Pm.length, xf = (e) => typeof e == "string" ? parseFloat(e) : e, wf = (e) => typeof e == "number" || j.test(e);
function Yx(e, t, n, r, i, s) {
  i ? (e.opacity = H(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    Zx(r)
  ), e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, qx(r))) : s && (e.opacity = H(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < Xx; o++) {
    const l = `border${Pm[o]}Radius`;
    let a = Sf(t, l), u = Sf(n, l);
    if (a === void 0 && u === void 0)
      continue;
    a || (a = 0), u || (u = 0), a === 0 || u === 0 || wf(a) === wf(u) ? (e[l] = Math.max(H(xf(a), xf(u), r), 0), (rt.test(u) || rt.test(a)) && (e[l] += "%")) : e[l] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function Sf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Zx = /* @__PURE__ */ Em(0, 0.5, Wh), qx = /* @__PURE__ */ Em(0.5, 0.95, De);
function Em(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Hn(e, t, r));
}
function kf(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ne(e, t) {
  kf(e.x, t.x), kf(e.y, t.y);
}
function Tf(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Cf(e, t, n, r, i) {
  return e -= t, e = Ps(e, 1 / n, r), i !== void 0 && (e = Ps(e, 1 / i, r)), e;
}
function Jx(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (rt.test(t) && (t = parseFloat(t), t = H(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let l = H(s.min, s.max, r);
  e === s && (l -= t), e.min = Cf(e.min, t, n, l, i), e.max = Cf(e.max, t, n, l, i);
}
function Pf(e, t, [n, r, i], s, o) {
  Jx(e, t[n], t[r], t[i], t.scale, s, o);
}
const ew = ["x", "scaleX", "originX"], tw = ["y", "scaleY", "originY"];
function Ef(e, t, n, r) {
  Pf(e.x, t, ew, n ? n.x : void 0, r ? r.x : void 0), Pf(e.y, t, tw, n ? n.y : void 0, r ? r.y : void 0);
}
function Af(e) {
  return e.translate === 0 && e.scale === 1;
}
function Am(e) {
  return Af(e.x) && Af(e.y);
}
function Rf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function nw(e, t) {
  return Rf(e.x, t.x) && Rf(e.y, t.y);
}
function Df(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Rm(e, t) {
  return Df(e.x, t.x) && Df(e.y, t.y);
}
function Mf(e) {
  return je(e.x) / je(e.y);
}
function jf(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class rw {
  constructor() {
    this.members = [];
  }
  add(t) {
    su(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ou(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function iw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, s = e.y.translate / t.y, o = n?.z || 0;
  if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: g, skewY: y } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), y && (r += `skewY(${y}deg) `);
  }
  const l = e.x.scale * t.x, a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const Xt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, yr = typeof window < "u" && window.MotionDebug !== void 0, Vo = ["", "X", "Y", "Z"], sw = { visibility: "hidden" }, Vf = 1e3;
let ow = 0;
function Lo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Dm(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Fh(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", B, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Dm(r);
}
function Mm({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, l = t?.()) {
      this.id = ow++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, yr && (Xt.totalNodes = Xt.resolvedTargetDeltas = Xt.recalculatedProjection = 0), this.nodes.forEach(uw), this.nodes.forEach(hw), this.nodes.forEach(mw), this.nodes.forEach(cw), yr && window.MotionDebug.record(Xt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gx());
    }
    addEventListener(o, l) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new lu()), this.eventHandlers.get(o).add(l);
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
      this.isSVG = Kx(o), this.instance = o;
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = Qx(d, 250), Gi.hasAnimatedSinceResize && (Gi.hasAnimatedSinceResize = !1, this.nodes.forEach(Nf));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || c.getDefaultTransition() || ww, { onLayoutAnimationStart: T, onLayoutAnimationComplete: h } = c.getProps(), p = !this.targetLayout || !Rm(this.targetLayout, y) || g, m = !d && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (p || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
          const x = {
            ...tu(v, "layout"),
            onPlay: T,
            onComplete: h
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          d || Nf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, gt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(gw), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Dm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Lf);
        return;
      }
      this.isUpdating || this.nodes.forEach(dw), this.isUpdating = !1, this.nodes.forEach(pw), this.nodes.forEach(lw), this.nodes.forEach(aw), this.clearAllSnapshots();
      const l = it.now();
      le.delta = yt(0, 1e3 / 60, l - le.timestamp), le.timestamp = l, le.isProcessing = !0, To.update.process(le), To.preRender.process(le), To.render.process(le), le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ka.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(fw), this.sharedNodes.forEach(yw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, B.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      B.postRender(() => {
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
      this.layout = this.measure(!1), this.layoutCorrected = Z(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !Am(this.projectionDelta), a = this.getTransformTemplate(), u = a ? a(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && (l || Qt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return o && (a = this.removeTransform(a)), Sw(a), {
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
        return Z();
      const a = l.measureViewportBox();
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(kw))) {
        const { scroll: c } = this.root;
        c && (Dn(a.x, c.offset.x), Dn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Z();
      if (Ne(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && Ne(a, o), Dn(a.x, f.offset.x), Dn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, l = !1) {
      const a = Z();
      Ne(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l && c.options.layoutScroll && c.scroll && c !== c.root && Mn(a, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Qt(c.latestValues) && Mn(a, c.latestValues);
      }
      return Qt(this.latestValues) && Mn(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = Z();
      Ne(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Qt(u.latestValues))
          continue;
        Bl(u.latestValues) && u.updateSnapshot();
        const c = Z(), f = u.measurePageBox();
        Ne(c, f), Ef(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Qt(this.latestValues) && Ef(l, this.latestValues), l;
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
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), jr(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Z(), this.targetWithTransforms = Z()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Px(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ne(this.target, this.layout.layoutBox), Sm(this.target, this.targetDelta)) : Ne(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Z(), this.relativeTargetOrigin = Z(), jr(this.relativeTargetOrigin, this.target, g.target), Ne(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          yr && Xt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Bl(this.parent.latestValues) || wm(this.parent.latestValues)))
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
      Nx(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = Z());
      const { target: y } = l;
      if (!y) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Tf(this.prevProjectionDelta.x, this.projectionDelta.x), Tf(this.prevProjectionDelta.y, this.projectionDelta.y)), Mr(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !jf(this.projectionDelta.x, this.prevProjectionDelta.x) || !jf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), yr && Xt.recalculatedProjection++;
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
      this.prevProjectionDelta = Rn(), this.projectionDelta = Rn(), this.projectionDeltaWithTransform = Rn();
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot, u = a ? a.latestValues : {}, c = { ...this.latestValues }, f = Rn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const d = Z(), g = a ? a.source : void 0, y = this.layout ? this.layout.source : void 0, v = g !== y, T = this.getStack(), h = !T || T.members.length <= 1, p = !!(v && !h && this.options.crossfade === !0 && !this.path.some(xw));
      this.animationProgress = 0;
      let m;
      this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        _f(f.x, o.x, w), _f(f.y, o.y, w), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (jr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), vw(this.relativeTarget, this.relativeTargetOrigin, d, w), m && nw(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = Z()), Ne(m, this.relativeTarget)), v && (this.animationValues = c, Yx(c, u, this.latestValues, w, p, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (gt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = B.update(() => {
        Gi.hasAnimatedSinceResize = !0, this.currentAnimation = Hx(0, Vf, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Vf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = o;
      if (!(!l || !a || !u)) {
        if (this !== o && this.layout && u && jm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          a = this.target || Z();
          const f = je(this.layout.layoutBox.x);
          a.x.min = o.target.x.min, a.x.max = a.x.min + f;
          const d = je(this.layout.layoutBox.y);
          a.y.min = o.target.y.min, a.y.max = a.y.min + d;
        }
        Ne(l, a), Mn(l, c), Mr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new rw()), this.sharedNodes.get(o).add(l);
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
      a.z && Lo("z", o, u, this.animationValues);
      for (let c = 0; c < Vo.length; c++)
        Lo(`rotate${Vo[c]}`, o, u, this.animationValues), Lo(`skew${Vo[c]}`, o, u, this.animationValues);
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
        return sw;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ki(o?.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Ki(o?.pointerEvents) || ""), this.hasProjected && !Qt(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = iw(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in ws) {
        if (d[v] === void 0)
          continue;
        const { correct: T, applyTo: h } = ws[v], p = u.transform === "none" ? d[v] : T(d[v], f);
        if (h) {
          const m = h.length;
          for (let x = 0; x < m; x++)
            u[h[x]] = p;
        } else
          u[v] = p;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Ki(o?.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(Lf), this.root.sharedNodes.clear();
    }
  };
}
function lw(e) {
  e.updateLayout();
}
function aw(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: s } = e.options, o = n.source !== e.layout.source;
    s === "size" ? _e((f) => {
      const d = o ? n.measuredBox[f] : n.layoutBox[f], g = je(d);
      d.min = r[f].min, d.max = d.min + g;
    }) : jm(s, n.layoutBox, r) && _e((f) => {
      const d = o ? n.measuredBox[f] : n.layoutBox[f], g = je(r[f]);
      d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const l = Rn();
    Mr(l, r, n.layoutBox);
    const a = Rn();
    o ? Mr(a, e.applyTransform(i, !0), n.measuredBox) : Mr(a, r, n.layoutBox);
    const u = !Am(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = Z();
          jr(y, n.layoutBox, d.layoutBox);
          const v = Z();
          jr(v, r, g.layoutBox), Rm(y, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = y, e.relativeParent = f);
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
function uw(e) {
  yr && Xt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function cw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function fw(e) {
  e.clearSnapshot();
}
function Lf(e) {
  e.clearMeasurements();
}
function dw(e) {
  e.isLayoutDirty = !1;
}
function pw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Nf(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function hw(e) {
  e.resolveTargetDelta();
}
function mw(e) {
  e.calcProjection();
}
function gw(e) {
  e.resetSkewAndRotation();
}
function yw(e) {
  e.removeLeadSnapshot();
}
function _f(e, t, n) {
  e.translate = H(t.translate, 0, n), e.scale = H(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ff(e, t, n, r) {
  e.min = H(t.min, n.min, r), e.max = H(t.max, n.max, r);
}
function vw(e, t, n, r) {
  Ff(e.x, t.x, n.x, r), Ff(e.y, t.y, n.y, r);
}
function xw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ww = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, If = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Of = If("applewebkit/") && !If("chrome/") ? Math.round : De;
function zf(e) {
  e.min = Of(e.min), e.max = Of(e.max);
}
function Sw(e) {
  zf(e.x), zf(e.y);
}
function jm(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Cx(Mf(t), Mf(n), 0.2);
}
function kw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Tw = Mm({
  attachResizeListener: (e, t) => Jr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), No = {
  current: void 0
}, Vm = Mm({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!No.current) {
      const e = new Tw({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), No.current = e;
    }
    return No.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Cw = {
  pan: {
    Feature: Bx
  },
  drag: {
    Feature: zx,
    ProjectionNode: Vm,
    MeasureLayout: Cm
  }
};
function Bf(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, s = r[i];
  s && B.postRender(() => s(t, ai(t)));
}
class Pw extends Ut {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = C0(t, (n) => (Bf(this.node, n, "Start"), (r) => Bf(this.node, r, "End"))));
  }
  unmount() {
  }
}
class Ew extends Ut {
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
    this.unmount = li(Jr(this.node.current, "focus", () => this.onFocus()), Jr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Uf(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), s = r[i];
  s && B.postRender(() => s(t, ai(t)));
}
class Aw extends Ut {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = R0(t, (n) => (Uf(this.node, n, "Start"), (r, { success: i }) => Uf(this.node, r, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const $l = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap(), Rw = (e) => {
  const t = $l.get(e.target);
  t && t(e);
}, Dw = (e) => {
  e.forEach(Rw);
};
function Mw({ root: e, ...t }) {
  const n = e || document;
  _o.has(n) || _o.set(n, {});
  const r = _o.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Dw, { root: e, ...t })), r[i];
}
function jw(e, t, n) {
  const r = Mw(t);
  return $l.set(e, n), r.observe(e), () => {
    $l.delete(e), r.unobserve(e);
  };
}
const Vw = {
  some: 0,
  all: 1
};
class Lw extends Ut {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Vw[i]
    }, l = (a) => {
      const { isIntersecting: u } = a;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
      d && d(a);
    };
    return jw(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Nw(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Nw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const _w = {
  inView: {
    Feature: Lw
  },
  tap: {
    Feature: Aw
  },
  focus: {
    Feature: Ew
  },
  hover: {
    Feature: Pw
  }
}, Fw = {
  layout: {
    ProjectionNode: Vm,
    MeasureLayout: Cm
  }
}, Wl = { current: null }, Lm = { current: !1 };
function Iw() {
  if (Lm.current = !0, !!za)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Wl.current = e.matches;
      e.addListener(t), t();
    } else
      Wl.current = !1;
}
const Ow = [...rm, pe, It], zw = (e) => Ow.find(nm(e)), $f = /* @__PURE__ */ new WeakMap();
function Bw(e, t, n) {
  for (const r in t) {
    const i = t[r], s = n[r];
    if (ae(i))
      e.addValue(r, i);
    else if (ae(s))
      e.addValue(r, bn(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, bn(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Wf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Uw {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = pu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = it.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, B.render(this.render, !1, !0));
    };
    const { latestValues: a, renderState: u, onUpdate: c } = o;
    this.onUpdate = c, this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = bs(n), this.isVariantNode = fh(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in d) {
      const y = d[g];
      a[g] !== void 0 && ae(y) && y.set(a[g], !1);
    }
  }
  mount(t) {
    this.current = t, $f.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Lm.current || Iw(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Wl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    $f.delete(this.current), this.projection && this.projection.unmount(), gt(this.notifyUpdate), gt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = dn.has(t), i = n.on("change", (l) => {
      this.latestValues[t] = l, this.props.onUpdate && B.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Kn) {
      const n = Kn[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Z();
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
    for (let r = 0; r < Wf.length; r++) {
      const i = Wf[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = "on" + i, o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = Bw(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = bn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (em(i) || Kh(i)) ? i = parseFloat(i) : !zw(i) && It.test(n) && (i = Zh(t, n)), this.setBaseTarget(t, ae(i) ? i.get() : i)), ae(i) ? i.get() : i;
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
      const o = Ga(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (i = o[t]);
    }
    if (r && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !ae(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new lu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Nm extends Uw {
  constructor() {
    super(...arguments), this.KeyframeResolver = im;
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
function $w(e) {
  return window.getComputedStyle(e);
}
class Ww extends Nm {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = wh;
  }
  readValueFromInstance(t, n) {
    if (dn.has(n)) {
      const r = du(n);
      return r && r.default || 0;
    } else {
      const r = $w(t), i = (yh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return km(t, n);
  }
  build(t, n, r) {
    Ya(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return eu(t, n, r);
  }
}
class Hw extends Nm {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Z;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (dn.has(n)) {
      const r = du(n);
      return r && r.default || 0;
    }
    return n = Sh.has(n) ? n : Ha(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ch(t, n, r);
  }
  build(t, n, r) {
    Za(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    kh(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = Ja(t.tagName), super.mount(t);
  }
}
const Kw = (e, t) => ba(e) ? new Hw(t) : new Ww(t, {
  allowProjection: e !== k.Fragment
}), bw = /* @__PURE__ */ y0({
  ...mx,
  ..._w,
  ...Cw,
  ...Fw
}, Kw), Pe = /* @__PURE__ */ Vv(bw);
function _m(e) {
  const t = fn(() => bn(e)), { isStatic: n } = k.useContext(Ws);
  if (n) {
    const [, r] = k.useState(e);
    k.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function Fm(e, t) {
  const n = _m(t()), r = () => n.set(t());
  return r(), Ba(() => {
    const i = () => B.preRender(r, !1, !0), s = e.map((o) => o.on("change", i));
    return () => {
      s.forEach((o) => o()), gt(r);
    };
  }), n;
}
const Gw = (e) => e && typeof e == "object" && e.mix, Qw = (e) => Gw(e) ? e.mix : void 0;
function Xw(...e) {
  const t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], s = e[2 + n], o = e[3 + n], l = fm(i, s, {
    mixer: Qw(s[0]),
    ...o
  });
  return t ? l(r) : l;
}
function Yw(e) {
  Ar.current = [], e();
  const t = Fm(Ar.current, e);
  return Ar.current = void 0, t;
}
function Zw(e, t, n, r) {
  if (typeof e == "function")
    return Yw(e);
  const i = typeof t == "function" ? t : Xw(t, n, r);
  return Array.isArray(e) ? Hf(e, i) : Hf([e], ([s]) => i(s));
}
function Hf(e, t) {
  const n = fn(() => []);
  return Fm(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++)
      n[i] = e[i].get();
    return t(n);
  });
}
const Im = k.createContext(null);
function qw(e, t, n, r) {
  if (!r)
    return e;
  const i = e.findIndex((c) => c.value === t);
  if (i === -1)
    return e;
  const s = r > 0 ? 1 : -1, o = e[i + s];
  if (!o)
    return e;
  const l = e[i], a = o.layout, u = H(a.min, a.max, 0.5);
  return s === 1 && l.layout.max + n > u || s === -1 && l.layout.min + n < u ? j0(e, i, i + s) : e;
}
function Jw({ children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...s }, o) {
  const l = fn(() => Pe[t]), a = [], u = k.useRef(!1), c = {
    axis: n,
    registerItem: (f, d) => {
      const g = a.findIndex((y) => f === y.value);
      g !== -1 ? a[g].layout = d[n] : a.push({ value: f, layout: d[n] }), a.sort(nS);
    },
    updateOrder: (f, d, g) => {
      if (u.current)
        return;
      const y = qw(a, f, d, g);
      a !== y && (u.current = !0, r(y.map(tS).filter((v) => i.indexOf(v) !== -1)));
    }
  };
  return k.useEffect(() => {
    u.current = !1;
  }), S.jsx(l, { ...s, ref: o, ignoreStrict: !0, children: S.jsx(Im.Provider, { value: c, children: e }) });
}
const eS = /* @__PURE__ */ k.forwardRef(Jw);
function tS(e) {
  return e.value;
}
function nS(e, t) {
  return e.layout.min - t.layout.min;
}
function Kf(e, t = 0) {
  return ae(e) ? e : _m(t);
}
function rS({ children: e, style: t = {}, value: n, as: r = "li", onDrag: i, layout: s = !0, ...o }, l) {
  const a = fn(() => Pe[r]), u = k.useContext(Im), c = {
    x: Kf(t.x),
    y: Kf(t.y)
  }, f = Zw([c.x, c.y], ([v, T]) => v || T ? 1 : "unset"), { axis: d, registerItem: g, updateOrder: y } = u;
  return S.jsx(a, { drag: d, ...o, dragSnapToOrigin: !0, style: { ...t, x: c.x, y: c.y, zIndex: f }, layout: s, onDrag: (v, T) => {
    const { velocity: h } = T;
    h[d] && y(n, c[d].get(), h[d]), i && i(v, T);
  }, onLayoutMeasure: (v) => g(n, v), ref: l, ignoreStrict: !0, children: e });
}
const iS = /* @__PURE__ */ k.forwardRef(rS);
function sS({
  target: e,
  onDelete: t,
  onClose: n
}) {
  const r = k.useRef(null);
  k.useEffect(() => {
    r.current?.focus();
    const s = (o) => {
      o.key === "Escape" && (o.stopPropagation(), n());
    };
    return window.addEventListener("keydown", s, !0), () => window.removeEventListener("keydown", s, !0);
  }, [n]);
  const i = () => {
    t({ type: "remove", id: e.taskId }), n();
  };
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsx(
      "div",
      {
        className: "jwf-menu-backdrop",
        onClick: n,
        onContextMenu: (s) => {
          s.preventDefault(), n();
        }
      }
    ),
    /* @__PURE__ */ S.jsx(
      "div",
      {
        className: "jwf-menu",
        role: "menu",
        "aria-label": `Actions for “${e.label}”`,
        style: { left: e.x, top: e.y },
        children: /* @__PURE__ */ S.jsx(
          "button",
          {
            ref: r,
            type: "button",
            className: "jwf-menu-item",
            role: "menuitem",
            onClick: i,
            children: "Delete"
          }
        )
      }
    )
  ] });
}
function He(e, t, n, r, i = !0) {
  return { frequency: e, delay: t, gain: n, decay: r, shimmer: i };
}
class Qi {
  context = null;
  broken = !1;
  acquire() {
    if (this.broken) return null;
    if (this.context)
      return this.context.resume().catch(() => {
      }), this.context;
    try {
      return this.context = new AudioContext(), this.context;
    } catch {
      return this.broken = !0, null;
    }
  }
  /** The one primitive every voice reduces to. */
  play(t) {
    const n = this.acquire();
    if (n)
      try {
        const r = n.currentTime;
        for (const i of t) {
          const s = r + i.delay, o = n.createOscillator(), l = n.createGain();
          if (o.connect(l), l.connect(n.destination), o.type = "sine", o.frequency.value = i.frequency, l.gain.setValueAtTime(1e-4, s), l.gain.linearRampToValueAtTime(i.gain, s + 5e-3), l.gain.exponentialRampToValueAtTime(1e-4, s + i.decay), o.start(s), o.stop(s + i.decay + 0.02), i.shimmer) {
            const a = n.createOscillator(), u = n.createGain();
            a.connect(u), u.connect(n.destination), a.type = "sine", a.frequency.value = i.frequency * 2, u.gain.setValueAtTime(1e-4, s), u.gain.linearRampToValueAtTime(i.gain * 0.25, s + 5e-3), u.gain.exponentialRampToValueAtTime(1e-4, s + i.decay * 0.7), a.start(s), a.stop(s + i.decay + 0.02);
          }
        }
      } catch {
      }
  }
  /** Task completed: the signature sound — an ascending dink-donk. */
  taskComplete() {
    this.play([He(659.25, 0, 0.14, 0.18), He(880, 0.085, 0.12, 0.22)]);
  }
  /** Task added: one soft low blip — present, not celebratory. */
  taskAdd() {
    this.play([He(440, 0, 0.09, 0.12)]);
  }
  /** Task deleted: a muted descending pair — resolution, not punishment. */
  taskDelete() {
    this.play([He(440, 0, 0.1, 0.13), He(329.63, 0.07, 0.09, 0.16)]);
  }
  /** Task reopened: a gentle single between the add and complete voices. */
  taskReopen() {
    this.play([He(587.33, 0, 0.1, 0.15)]);
  }
  /** Focus session started: a two-note lift, slightly longer decay. */
  timerStart() {
    this.play([He(523.25, 0, 0.12, 0.2), He(783.99, 0.09, 0.1, 0.28)]);
  }
  /** Focus session complete: a quiet major arpeggio — earned, warm, brief. */
  timerComplete() {
    this.play([
      He(523.25, 0, 0.13, 0.35),
      He(659.25, 0.09, 0.11, 0.38),
      He(783.99, 0.18, 0.1, 0.5)
    ]);
  }
}
const oS = [
  { id: "today", label: "Today" },
  { id: "week", label: "7 days" },
  { id: "all", label: "All" }
];
function Om() {
  const e = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), e.getTime();
}
function lS(e) {
  const t = new Date(e);
  return t.getTime() >= Om() ? t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : t.toLocaleDateString([], { month: "short", day: "numeric" });
}
function aS({
  state: e,
  send: t
}) {
  const [n, r] = k.useState("todo"), [i, s] = k.useState("all"), [o, l] = k.useState(""), [a, u] = k.useState(null), c = k.useRef(null), f = e.tasks.filter((P) => !P.done), d = e.tasks.filter((P) => P.done).sort((P, I) => (I.doneAt ?? 0) - (P.doneAt ?? 0)), g = d.filter((P) => i === "all" || P.doneAt == null ? !0 : P.doneAt >= (i === "today" ? Om() : Date.now() - 7 * 864e5)), y = k.useRef(!1), v = k.useRef(null), [T, h] = k.useState(null), p = (P) => {
    v.current = P, h(P);
  };
  k.useEffect(() => {
    y.current || (v.current = null, h(null));
  }, [e.tasks]);
  const m = T ?? f, x = () => {
    y.current = !1;
    const P = v.current;
    v.current = null, h(null), P && t({ type: "reorder", ids: [...P.map((I) => I.id), ...d.map((I) => I.id)] });
  }, w = (P) => {
    c.current ??= new Qi(), P.done ? c.current.taskReopen() : c.current.taskComplete(), t({ type: "toggle", id: P.id });
  }, E = () => {
    const P = o.trim();
    P.length !== 0 && (c.current ??= new Qi(), c.current.taskAdd(), t({ type: "add", text: P }), l(""));
  }, R = (P) => {
    c.current ??= new Qi(), c.current.taskDelete(), t(P);
  }, C = k.useRef(null), N = (P, I) => {
    P.preventDefault(), P.stopPropagation();
    const $e = C.current?.getBoundingClientRect();
    u({
      taskId: I.id,
      label: I.text,
      x: P.clientX - ($e?.left ?? 0),
      y: P.clientY - ($e?.top ?? 0)
    });
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "jwf-tasks", ref: C, children: [
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
        eS,
        {
          axis: "y",
          values: m,
          onReorder: (P) => p(P),
          className: "jwf-task-list",
          as: "div",
          children: /* @__PURE__ */ S.jsx(Xr, { initial: !1, children: m.map((P) => /* @__PURE__ */ S.jsx(
            bf,
            {
              task: P,
              onToggle: w,
              onMenu: N,
              drag: !0,
              onDragState: (I) => {
                y.current = I;
              },
              onDragSettled: x
            },
            P.id
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
          maxLength: Bm,
          placeholder: "Add a task…",
          value: o,
          onChange: (P) => l(P.target.value),
          onKeyDown: (P) => {
            if (P.stopPropagation(), P.key === "Enter")
              P.preventDefault(), E();
            else if (P.key === "Backspace" && o.length === 0) {
              const I = m.at(-1);
              I && t({ type: "remove", id: I.id });
            }
          }
        }
      ) })
    ] }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx("div", { className: "jwf-filters", children: oS.map((P) => /* @__PURE__ */ S.jsx(
        "button",
        {
          type: "button",
          className: "jwf-filter",
          "data-active": i === P.id,
          "aria-pressed": i === P.id,
          onClick: () => s(P.id),
          children: P.label
        },
        P.id
      )) }),
      /* @__PURE__ */ S.jsxs("div", { className: "jwf-task-list", role: "list", children: [
        /* @__PURE__ */ S.jsx(Xr, { initial: !1, children: g.map((P) => /* @__PURE__ */ S.jsx(
          bf,
          {
            task: P,
            onToggle: w,
            onMenu: N
          },
          P.id
        )) }),
        g.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "jwf-done-empty", children: d.length === 0 ? "Nothing completed yet" : "Nothing in this range" }) : null
      ] })
    ] }),
    a ? /* @__PURE__ */ S.jsx(sS, { target: a, onDelete: R, onClose: () => u(null) }) : null
  ] });
}
function bf({
  task: e,
  onToggle: t,
  onMenu: n,
  drag: r = !1,
  onDragState: i,
  onDragSettled: s
}) {
  const o = e.done ? "Click to reopen · right-click for options" : "Click to complete · drag to reorder · right-click for options", l = /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    /* @__PURE__ */ S.jsx("span", { className: "jwf-task-text", children: e.text }),
    e.done && e.doneAt != null ? /* @__PURE__ */ S.jsx("span", { className: "jwf-task-date", children: lS(e.doneAt) }) : null
  ] }), a = {
    className: "jwf-task",
    "data-done": e.done,
    title: o,
    onClick: () => t(e),
    // Right-click OPENS the menu; deletion happens from its Delete item, so
    // the destructive act always has its own deliberate click.
    onContextMenu: (u) => n(u, e)
  };
  return r ? /* @__PURE__ */ S.jsx(
    iS,
    {
      as: "button",
      type: "button",
      value: e,
      ...a,
      onDragStart: () => i?.(!0),
      onDragEnd: () => s?.(),
      initial: { opacity: 0, x: -6 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 6 },
      transition: { duration: 0.16 },
      style: { position: "relative" },
      children: l
    }
  ) : /* @__PURE__ */ S.jsx(
    Pe.button,
    {
      type: "button",
      role: "listitem",
      ...a,
      initial: { opacity: 0, x: -6 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 6 },
      transition: { duration: 0.16 },
      children: l
    }
  );
}
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), zm = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var cS = {
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
const fS = k.forwardRef(
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
      ...cS,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: zm("lucide", i),
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
const Jn = (e, t) => {
  const n = k.forwardRef(
    ({ className: r, ...i }, s) => k.createElement(fS, {
      ref: s,
      iconNode: t,
      className: zm(`lucide-${uS(e)}`, r),
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
const dS = Jn("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pS = Jn("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hS = Jn("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mS = Jn("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gS = Jn("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yS = Jn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), vS = [880, 1046, 1174], xS = 20, wS = 2;
class SS {
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
      for (let i = 0; i < xS; i += 1) {
        const s = r + i * wS;
        vS.forEach((o, l) => n(s + l * 0.35, o));
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
function kS() {
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
const TS = [15, 25, 30, 45, 60, 90, 120];
function CS(e) {
  if (e < 60) return `${e}m`;
  const t = e / 60;
  return Number.isInteger(t) ? `${t}h` : `${t}h`;
}
function PS({
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
        /* @__PURE__ */ S.jsx("div", { className: "tm-presets", children: TS.map((o) => /* @__PURE__ */ S.jsx(
          "button",
          {
            type: "button",
            className: "tm-preset",
            "data-selected": !r && s === o,
            onClick: () => {
              i(""), t(o);
            },
            children: CS(o)
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
function ES({
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
function AS({
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
            /* @__PURE__ */ S.jsx(dS, { size: 12 }),
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
                /* @__PURE__ */ S.jsx(mS, { size: 12 }),
                "Add"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs(Xr, { mode: "popLayout", children: [
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
                    children: /* @__PURE__ */ S.jsx(yS, { size: 13 })
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
function cr(e) {
  return e.toString().padStart(2, "0");
}
function RS({
  remainingSeconds: e,
  phase: t
}) {
  const n = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), i = e % 60, s = n > 0 ? `${cr(n)}:${cr(r)}:${cr(i)}` : `${cr(r)}:${cr(i)}`;
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
function DS({
  api: e,
  state: t,
  send: n
}) {
  k.useEffect(() => {
    n({ type: "syncSettings" });
  }, [n]);
  const r = k.useRef(null), i = k.useRef(null), s = k.useRef(null);
  k.useEffect(() => {
    r.current ??= new SS(), i.current ??= new Qi();
    const c = t.phase === "reminding" && s.current !== "reminding", f = t.phase === "finished" && s.current != null && s.current !== "finished";
    c ? r.current.play() : f && i.current.timerComplete(), t.phase !== "reminding" && r.current.stop(), s.current = t.phase;
  }, [t.phase]), k.useEffect(() => () => r.current?.stop(), []);
  const [o, l] = k.useState(null);
  k.useEffect(() => {
    let c = !0;
    const f = () => {
      e.sessions.observe().then((g) => {
        c && l(
          g.filter((y) => y.kind && y.kind !== "terminal" && y.kind !== "extension-view").length
        );
      }).catch(() => {
      });
    };
    f();
    const d = e.sessions.subscribe(f);
    return () => {
      c = !1, d();
    };
  }, [e]);
  const a = t.activeReminderId != null ? t.reminders.find((c) => c.id === t.activeReminderId) ?? null : null, u = t.phase === "idle";
  return /* @__PURE__ */ S.jsxs("div", { className: "tm-tab", children: [
    /* @__PURE__ */ S.jsx(kS, {}),
    o !== null ? /* @__PURE__ */ S.jsxs(
      "div",
      {
        style: { marginTop: -16, fontSize: 11, letterSpacing: "0.03em", opacity: 0.55 },
        title: "Agent sessions open in Agent Code — live via the sessions.observe capability",
        children: [
          o,
          " ",
          o === 1 ? "agent" : "agents",
          " active"
        ]
      }
    ) : null,
    /* @__PURE__ */ S.jsx(RS, { remainingSeconds: t.remainingSeconds, phase: t.phase }),
    /* @__PURE__ */ S.jsx(Xr, { mode: "wait", children: u ? /* @__PURE__ */ S.jsxs(
      Pe.div,
      {
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.2 },
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 24, width: "100%" },
        children: [
          /* @__PURE__ */ S.jsx(
            PS,
            {
              totalSeconds: t.totalSeconds,
              onSelect: (c) => n({ type: "setDuration", minutes: c }),
              onStart: () => {
                i.current?.timerStart(), n({ type: "start" });
              }
            }
          ),
          /* @__PURE__ */ S.jsx(
            AS,
            {
              reminders: t.reminders,
              onAdd: (c, f) => n({
                type: "addReminder",
                label: c,
                intervalMinutes: f
              }),
              onRemove: (c) => n({ type: "removeReminder", id: c })
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
                children: /* @__PURE__ */ S.jsx(pS, { size: 17 })
              }
            ) : null,
            t.phase === "paused" ? /* @__PURE__ */ S.jsx(
              "button",
              {
                type: "button",
                className: "tm-circle",
                onClick: () => n({ type: "resume" }),
                title: "Resume",
                children: /* @__PURE__ */ S.jsx(hS, { size: 17, style: { marginLeft: 2 } })
              }
            ) : null,
            /* @__PURE__ */ S.jsx("button", { type: "button", className: "tm-circle", onClick: () => n({ type: "reset" }), title: "Reset", children: /* @__PURE__ */ S.jsx(gS, { size: 17 }) })
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
          t.reminders.length > 0 && t.phase !== "finished" ? /* @__PURE__ */ S.jsx("div", { className: "tm-presets", style: { marginTop: 2 }, children: t.reminders.map((c) => /* @__PURE__ */ S.jsxs("span", { className: "tm-chip", children: [
            c.label,
            " · ",
            c.intervalMinutes,
            "m"
          ] }, c.id)) }) : null
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
    /* @__PURE__ */ S.jsx(Xr, { children: a ? /* @__PURE__ */ S.jsx(ES, { reminder: a, onDismiss: () => n({ type: "dismissReminder" }) }) : null })
  ] });
}
const MS = {
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
function jS({ context: e }) {
  const { api: t } = e, [n, r] = k.useState(() => e.runtime.state() ?? MS);
  k.useEffect(() => e.runtime.subscribe(r), [e]);
  const i = k.useCallback((u, c) => {
    e.runtime.request(u, c).catch((f) => {
      t.ui.showToast(f instanceof Error ? f.message : String(f));
    });
  }, [t.ui, e.runtime]), s = k.useCallback((u) => i("timerAction", u), [i]), o = k.useCallback((u) => i("tasksAction", u), [i]), l = k.useCallback((u) => i("selectTab", { tab: u }), [i]), a = k.useRef(null);
  return k.useEffect(() => {
    const u = a.current;
    if (!u) return;
    const c = () => vv(u, n.timer.inheritTheme);
    return c(), n.timer.inheritTheme ? xv(c) : void 0;
  }, [n.timer.inheritTheme]), /* @__PURE__ */ S.jsxs("div", { className: "jwf", ref: a, children: [
    /* @__PURE__ */ S.jsx(
      wv,
      {
        activeTab: n.activeTab,
        timerRunning: n.timer.phase === "running",
        onSelect: l
      }
    ),
    n.activeTab === "tasks" ? /* @__PURE__ */ S.jsx(aS, { state: n.tasks, send: o }) : /* @__PURE__ */ S.jsx(DS, { api: t, state: n.timer, send: s })
  ] });
}
function VS(e, t) {
  mv();
  const n = sh(e);
  return n.render(/* @__PURE__ */ S.jsx(jS, { context: t })), () => {
    queueMicrotask(() => n.unmount());
  };
}
const _S = Um({
  mount: VS
});
export {
  _S as default
};
