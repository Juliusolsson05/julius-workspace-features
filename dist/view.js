import { M as jm, b as Vm } from "./types-YYypkfS4.js";
var Uf = { exports: {} }, ks = {}, $f = { exports: {} }, _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr = Symbol.for("react.element"), Lm = Symbol.for("react.portal"), Nm = Symbol.for("react.fragment"), _m = Symbol.for("react.strict_mode"), Fm = Symbol.for("react.profiler"), Im = Symbol.for("react.provider"), Om = Symbol.for("react.context"), zm = Symbol.for("react.forward_ref"), Bm = Symbol.for("react.suspense"), Um = Symbol.for("react.memo"), $m = Symbol.for("react.lazy"), hu = Symbol.iterator;
function Wm(e) {
  return e === null || typeof e != "object" ? null : (e = hu && e[hu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Wf = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Hf = Object.assign, Kf = {};
function Kn(e, t, n) {
  this.props = e, this.context = t, this.refs = Kf, this.updater = n || Wf;
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gf() {
}
Gf.prototype = Kn.prototype;
function zl(e, t, n) {
  this.props = e, this.context = t, this.refs = Kf, this.updater = n || Wf;
}
var Bl = zl.prototype = new Gf();
Bl.constructor = zl;
Hf(Bl, Kn.prototype);
Bl.isPureReactComponent = !0;
var mu = Array.isArray, Qf = Object.prototype.hasOwnProperty, Ul = { current: null }, bf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xf(e, t, n) {
  var r, i = {}, s = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) Qf.call(t, r) && !bf.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Zr, type: e, key: s, ref: o, props: i, _owner: Ul.current };
}
function Hm(e, t) {
  return { $$typeof: Zr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function $l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zr;
}
function Km(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var gu = /\/+/g;
function Ks(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Km("" + e.key) : t.toString(36);
}
function Mi(e, t, n, r, i) {
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
        case Zr:
        case Lm:
          o = !0;
      }
  }
  if (o) return o = e, i = i(o), e = r === "" ? "." + Ks(o, 0) : r, mu(i) ? (n = "", e != null && (n = e.replace(gu, "$&/") + "/"), Mi(i, t, n, "", function(u) {
    return u;
  })) : i != null && ($l(i) && (i = Hm(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(gu, "$&/") + "/") + e)), t.push(i)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", mu(e)) for (var l = 0; l < e.length; l++) {
    s = e[l];
    var a = r + Ks(s, l);
    o += Mi(s, t, n, a, i);
  }
  else if (a = Wm(e), typeof a == "function") for (e = a.call(e), l = 0; !(s = e.next()).done; ) s = s.value, a = r + Ks(s, l++), o += Mi(s, t, n, a, i);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ui(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return Mi(e, r, "", "", function(s) {
    return t.call(n, s, i++);
  }), r;
}
function Gm(e) {
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
var ve = { current: null }, ji = { transition: null }, Qm = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: ji, ReactCurrentOwner: Ul };
function Yf() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = { map: ui, forEach: function(e, t, n) {
  ui(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ui(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ui(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!$l(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
_.Component = Kn;
_.Fragment = Nm;
_.Profiler = Fm;
_.PureComponent = zl;
_.StrictMode = _m;
_.Suspense = Bm;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm;
_.act = Yf;
_.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Hf({}, e.props), i = e.key, s = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, o = Ul.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Qf.call(t, a) && !bf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Zr, type: e.type, key: i, ref: s, props: r, _owner: o };
};
_.createContext = function(e) {
  return e = { $$typeof: Om, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Im, _context: e }, e.Consumer = e;
};
_.createElement = Xf;
_.createFactory = function(e) {
  var t = Xf.bind(null, e);
  return t.type = e, t;
};
_.createRef = function() {
  return { current: null };
};
_.forwardRef = function(e) {
  return { $$typeof: zm, render: e };
};
_.isValidElement = $l;
_.lazy = function(e) {
  return { $$typeof: $m, _payload: { _status: -1, _result: e }, _init: Gm };
};
_.memo = function(e, t) {
  return { $$typeof: Um, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function(e) {
  var t = ji.transition;
  ji.transition = {};
  try {
    e();
  } finally {
    ji.transition = t;
  }
};
_.unstable_act = Yf;
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
$f.exports = _;
var P = $f.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bm = P, Xm = Symbol.for("react.element"), Ym = Symbol.for("react.fragment"), Zm = Object.prototype.hasOwnProperty, qm = bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Jm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zf(e, t, n) {
  var r, i = {}, s = null, o = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Zm.call(t, r) && !Jm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: Xm, type: e, key: s, ref: o, props: i, _owner: qm.current };
}
ks.Fragment = Ym;
ks.jsx = Zf;
ks.jsxs = Zf;
Uf.exports = ks;
var S = Uf.exports, qf = { exports: {} }, je = {}, Jf = { exports: {} }, ed = {};
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
      e: for (var X = 0, re = D.length, li = re >>> 1; X < li; ) {
        var $t = 2 * (X + 1) - 1, Hs = D[$t], Wt = $t + 1, ai = D[Wt];
        if (0 > i(Hs, L)) Wt < re && 0 > i(ai, Hs) ? (D[X] = ai, D[Wt] = L, X = Wt) : (D[X] = Hs, D[$t] = L, X = $t);
        else if (Wt < re && 0 > i(ai, L)) D[X] = ai, D[Wt] = L, X = Wt;
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
  var a = [], u = [], c = 1, f = null, d = 3, g = !1, y = !1, v = !1, k = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
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
    if (v = !1, m(D), !y) if (n(a) !== null) y = !0, oi(w);
    else {
      var V = n(u);
      V !== null && J(x, V.startTime - D);
    }
  }
  function w(D, V) {
    y = !1, v && (v = !1, h(T), T = -1), g = !0;
    var L = d;
    try {
      for (m(V), f = n(a); f !== null && (!(f.expirationTime > V) || D && !ne()); ) {
        var X = f.callback;
        if (typeof X == "function") {
          f.callback = null, d = f.priorityLevel;
          var re = X(f.expirationTime <= V);
          V = e.unstable_now(), typeof re == "function" ? f.callback = re : f === n(a) && r(a), m(V);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var li = !0;
      else {
        var $t = n(u);
        $t !== null && J(x, $t.startTime - V), li = !1;
      }
      return li;
    } finally {
      f = null, d = L, g = !1;
    }
  }
  var E = !1, A = null, T = -1, N = 5, j = -1;
  function ne() {
    return !(e.unstable_now() - j < N);
  }
  function gt() {
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
    p(gt);
  };
  else if (typeof MessageChannel < "u") {
    var Zn = new MessageChannel(), pu = Zn.port2;
    Zn.port1.onmessage = gt, Ut = function() {
      pu.postMessage(null);
    };
  } else Ut = function() {
    k(gt, 0);
  };
  function oi(D) {
    A = D, E || (E = !0, Ut());
  }
  function J(D, V) {
    T = k(function() {
      D(e.unstable_now());
    }, V);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    y || g || (y = !0, oi(w));
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
    return re = L + re, D = { id: c++, callback: V, priorityLevel: D, startTime: L, expirationTime: re, sortIndex: -1 }, L > X ? (D.sortIndex = L, t(u, D), n(a) === null && D === n(u) && (v ? (h(T), T = -1) : v = !0, J(x, L - X))) : (D.sortIndex = re, t(a, D), y || g || (y = !0, oi(w))), D;
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
})(ed);
Jf.exports = ed;
var eg = Jf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tg = P, Re = eg;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var td = /* @__PURE__ */ new Set(), Dr = {};
function an(e, t) {
  _n(e, t), _n(e + "Capture", t);
}
function _n(e, t) {
  for (Dr[e] = t, e = 0; e < t.length; e++) td.add(t[e]);
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), jo = Object.prototype.hasOwnProperty, ng = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, yu = {}, vu = {};
function rg(e) {
  return jo.call(vu, e) ? !0 : jo.call(yu, e) ? !1 : ng.test(e) ? vu[e] = !0 : (yu[e] = !0, !1);
}
function ig(e, t, n, r) {
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
function sg(e, t, n, r) {
  if (t === null || typeof t > "u" || ig(e, t, n, r)) return !0;
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
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ue[e] = new xe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ue[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ue[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ue[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ue[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ue[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ue[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ue[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ue[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wl = /[\-:]([a-z])/g;
function Hl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Wl,
    Hl
  );
  ue[t] = new xe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Wl, Hl);
  ue[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Wl, Hl);
  ue[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ue[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new xe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ue[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Kl(e, t, n, r) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (sg(t, n, i, r) && (n = null), r || i === null ? rg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mt = tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ci = Symbol.for("react.element"), dn = Symbol.for("react.portal"), pn = Symbol.for("react.fragment"), Gl = Symbol.for("react.strict_mode"), Vo = Symbol.for("react.profiler"), nd = Symbol.for("react.provider"), rd = Symbol.for("react.context"), Ql = Symbol.for("react.forward_ref"), Lo = Symbol.for("react.suspense"), No = Symbol.for("react.suspense_list"), bl = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), id = Symbol.for("react.offscreen"), xu = Symbol.iterator;
function qn(e) {
  return e === null || typeof e != "object" ? null : (e = xu && e[xu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var G = Object.assign, Gs;
function ar(e) {
  if (Gs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Gs = t && t[1] || "";
  }
  return `
` + Gs + e;
}
var Qs = !1;
function bs(e, t) {
  if (!e || Qs) return "";
  Qs = !0;
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
    Qs = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ar(e) : "";
}
function og(e) {
  switch (e.tag) {
    case 5:
      return ar(e.type);
    case 16:
      return ar("Lazy");
    case 13:
      return ar("Suspense");
    case 19:
      return ar("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = bs(e.type, !1), e;
    case 11:
      return e = bs(e.type.render, !1), e;
    case 1:
      return e = bs(e.type, !0), e;
    default:
      return "";
  }
}
function _o(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pn:
      return "Fragment";
    case dn:
      return "Portal";
    case Vo:
      return "Profiler";
    case Gl:
      return "StrictMode";
    case Lo:
      return "Suspense";
    case No:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case rd:
      return (e.displayName || "Context") + ".Consumer";
    case nd:
      return (e._context.displayName || "Context") + ".Provider";
    case Ql:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case bl:
      return t = e.displayName || null, t !== null ? t : _o(e.type) || "Memo";
    case xt:
      t = e._payload, e = e._init;
      try {
        return _o(e(t));
      } catch {
      }
  }
  return null;
}
function lg(e) {
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
      return _o(t);
    case 8:
      return t === Gl ? "StrictMode" : "Mode";
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
function Lt(e) {
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
function sd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function ag(e) {
  var t = sd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function fi(e) {
  e._valueTracker || (e._valueTracker = ag(e));
}
function od(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = sd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ki(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fo(e, t) {
  var n = t.checked;
  return G({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function wu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Lt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ld(e, t) {
  t = t.checked, t != null && Kl(e, "checked", t, !1);
}
function Io(e, t) {
  ld(e, t);
  var n = Lt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Oo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Oo(e, t.type, Lt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Su(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Oo(e, t, n) {
  (t !== "number" || Ki(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ur = Array.isArray;
function Rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function zo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return G({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ku(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(C(92));
      if (ur(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Lt(n) };
}
function ad(e, t) {
  var n = Lt(t.value), r = Lt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Tu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ud(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ud(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var di, cd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (di = di || document.createElement("div"), di.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = di.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Rr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var mr = {
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
}, ug = ["Webkit", "ms", "Moz", "O"];
Object.keys(mr).forEach(function(e) {
  ug.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), mr[t] = mr[e];
  });
});
function fd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mr.hasOwnProperty(e) && mr[e] ? ("" + t).trim() : t + "px";
}
function dd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = fd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var cg = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Uo(e, t) {
  if (t) {
    if (cg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function $o(e, t) {
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
var Wo = null;
function Xl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ho = null, Mn = null, jn = null;
function Pu(e) {
  if (e = ei(e)) {
    if (typeof Ho != "function") throw Error(C(280));
    var t = e.stateNode;
    t && (t = As(t), Ho(e.stateNode, e.type, t));
  }
}
function pd(e) {
  Mn ? jn ? jn.push(e) : jn = [e] : Mn = e;
}
function hd() {
  if (Mn) {
    var e = Mn, t = jn;
    if (jn = Mn = null, Pu(e), t) for (e = 0; e < t.length; e++) Pu(t[e]);
  }
}
function md(e, t) {
  return e(t);
}
function gd() {
}
var Xs = !1;
function yd(e, t, n) {
  if (Xs) return e(t, n);
  Xs = !0;
  try {
    return md(e, t, n);
  } finally {
    Xs = !1, (Mn !== null || jn !== null) && (gd(), hd());
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = As(n);
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Ko = !1;
if (ct) try {
  var Jn = {};
  Object.defineProperty(Jn, "passive", { get: function() {
    Ko = !0;
  } }), window.addEventListener("test", Jn, Jn), window.removeEventListener("test", Jn, Jn);
} catch {
  Ko = !1;
}
function fg(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var gr = !1, Gi = null, Qi = !1, Go = null, dg = { onError: function(e) {
  gr = !0, Gi = e;
} };
function pg(e, t, n, r, i, s, o, l, a) {
  gr = !1, Gi = null, fg.apply(dg, arguments);
}
function hg(e, t, n, r, i, s, o, l, a) {
  if (pg.apply(this, arguments), gr) {
    if (gr) {
      var u = Gi;
      gr = !1, Gi = null;
    } else throw Error(C(198));
    Qi || (Qi = !0, Go = u);
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
function vd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Cu(e) {
  if (un(e) !== e) throw Error(C(188));
}
function mg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = un(e), t === null) throw Error(C(188));
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
        if (s === n) return Cu(i), e;
        if (s === r) return Cu(i), t;
        s = s.sibling;
      }
      throw Error(C(188));
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
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function xd(e) {
  return e = mg(e), e !== null ? wd(e) : null;
}
function wd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sd = Re.unstable_scheduleCallback, Eu = Re.unstable_cancelCallback, gg = Re.unstable_shouldYield, yg = Re.unstable_requestPaint, Z = Re.unstable_now, vg = Re.unstable_getCurrentPriorityLevel, Yl = Re.unstable_ImmediatePriority, kd = Re.unstable_UserBlockingPriority, bi = Re.unstable_NormalPriority, xg = Re.unstable_LowPriority, Td = Re.unstable_IdlePriority, Ts = null, Je = null;
function wg(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function") try {
    Je.onCommitFiberRoot(Ts, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Qe = Math.clz32 ? Math.clz32 : Tg, Sg = Math.log, kg = Math.LN2;
function Tg(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Sg(e) / kg | 0) | 0;
}
var pi = 64, hi = 4194304;
function cr(e) {
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
function Xi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, s = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? r = cr(l) : (s &= o, s !== 0 && (r = cr(s)));
  } else o = n & ~i, o !== 0 ? r = cr(o) : s !== 0 && (r = cr(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Qe(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function Pg(e, t) {
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
function Cg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - Qe(s), l = 1 << o, a = i[o];
    a === -1 ? (!(l & n) || l & r) && (i[o] = Pg(l, t)) : a <= t && (e.expiredLanes |= l), s &= ~l;
  }
}
function Qo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Pd() {
  var e = pi;
  return pi <<= 1, !(pi & 4194240) && (pi = 64), e;
}
function Ys(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n;
}
function Eg(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Qe(n), s = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s;
  }
}
function Zl(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Qe(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var I = 0;
function Cd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Ed, ql, Ad, Dd, Rd, bo = !1, mi = [], Ct = null, Et = null, At = null, jr = /* @__PURE__ */ new Map(), Vr = /* @__PURE__ */ new Map(), St = [], Ag = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Au(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      Et = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vr.delete(t.pointerId);
  }
}
function er(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }, t !== null && (t = ei(t), t !== null && ql(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function Dg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Ct = er(Ct, e, t, n, r, i), !0;
    case "dragenter":
      return Et = er(Et, e, t, n, r, i), !0;
    case "mouseover":
      return At = er(At, e, t, n, r, i), !0;
    case "pointerover":
      var s = i.pointerId;
      return jr.set(s, er(jr.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return s = i.pointerId, Vr.set(s, er(Vr.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Md(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = un(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = vd(n), t !== null) {
          e.blockedOn = t, Rd(e.priority, function() {
            Ad(n);
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
function Vi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Wo = r, n.target.dispatchEvent(r), Wo = null;
    } else return t = ei(n), t !== null && ql(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Du(e, t, n) {
  Vi(e) && n.delete(t);
}
function Rg() {
  bo = !1, Ct !== null && Vi(Ct) && (Ct = null), Et !== null && Vi(Et) && (Et = null), At !== null && Vi(At) && (At = null), jr.forEach(Du), Vr.forEach(Du);
}
function tr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, bo || (bo = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, Rg)));
}
function Lr(e) {
  function t(i) {
    return tr(i, e);
  }
  if (0 < mi.length) {
    tr(mi[0], e);
    for (var n = 1; n < mi.length; n++) {
      var r = mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ct !== null && tr(Ct, e), Et !== null && tr(Et, e), At !== null && tr(At, e), jr.forEach(t), Vr.forEach(t), n = 0; n < St.length; n++) r = St[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < St.length && (n = St[0], n.blockedOn === null); ) Md(n), n.blockedOn === null && St.shift();
}
var Vn = mt.ReactCurrentBatchConfig, Yi = !0;
function Mg(e, t, n, r) {
  var i = I, s = Vn.transition;
  Vn.transition = null;
  try {
    I = 1, Jl(e, t, n, r);
  } finally {
    I = i, Vn.transition = s;
  }
}
function jg(e, t, n, r) {
  var i = I, s = Vn.transition;
  Vn.transition = null;
  try {
    I = 4, Jl(e, t, n, r);
  } finally {
    I = i, Vn.transition = s;
  }
}
function Jl(e, t, n, r) {
  if (Yi) {
    var i = Xo(e, t, n, r);
    if (i === null) oo(e, t, r, Zi, n), Au(e, r);
    else if (Dg(i, e, t, n, r)) r.stopPropagation();
    else if (Au(e, r), t & 4 && -1 < Ag.indexOf(e)) {
      for (; i !== null; ) {
        var s = ei(i);
        if (s !== null && Ed(s), s = Xo(e, t, n, r), s === null && oo(e, t, r, Zi, n), s === i) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else oo(e, t, r, null, n);
  }
}
var Zi = null;
function Xo(e, t, n, r) {
  if (Zi = null, e = Xl(r), e = Xt(e), e !== null) if (t = un(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = vd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Zi = e, null;
}
function jd(e) {
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
      switch (vg()) {
        case Yl:
          return 1;
        case kd:
          return 4;
        case bi:
        case xg:
          return 16;
        case Td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null, ea = null, Li = null;
function Vd() {
  if (Li) return Li;
  var e, t = ea, n = t.length, r, i = "value" in Tt ? Tt.value : Tt.textContent, s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++) ;
  return Li = i.slice(e, 1 < r ? 1 - r : void 0);
}
function Ni(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function gi() {
  return !0;
}
function Ru() {
  return !1;
}
function Ve(e) {
  function t(n, r, i, s, o) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? gi : Ru, this.isPropagationStopped = Ru, this;
  }
  return G(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gi);
  }, persist: function() {
  }, isPersistent: gi }), t;
}
var Gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ta = Ve(Gn), Jr = G({}, Gn, { view: 0, detail: 0 }), Vg = Ve(Jr), Zs, qs, nr, Ps = G({}, Jr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: na, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== nr && (nr && e.type === "mousemove" ? (Zs = e.screenX - nr.screenX, qs = e.screenY - nr.screenY) : qs = Zs = 0, nr = e), Zs);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : qs;
} }), Mu = Ve(Ps), Lg = G({}, Ps, { dataTransfer: 0 }), Ng = Ve(Lg), _g = G({}, Jr, { relatedTarget: 0 }), Js = Ve(_g), Fg = G({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ig = Ve(Fg), Og = G({}, Gn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), zg = Ve(Og), Bg = G({}, Gn, { data: 0 }), ju = Ve(Bg), Ug = {
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
}, $g = {
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
}, Wg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Hg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Wg[e]) ? !!t[e] : !1;
}
function na() {
  return Hg;
}
var Kg = G({}, Jr, { key: function(e) {
  if (e.key) {
    var t = Ug[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ni(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $g[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: na, charCode: function(e) {
  return e.type === "keypress" ? Ni(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Gg = Ve(Kg), Qg = G({}, Ps, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Vu = Ve(Qg), bg = G({}, Jr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: na }), Xg = Ve(bg), Yg = G({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zg = Ve(Yg), qg = G({}, Ps, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Jg = Ve(qg), ey = [9, 13, 27, 32], ra = ct && "CompositionEvent" in window, yr = null;
ct && "documentMode" in document && (yr = document.documentMode);
var ty = ct && "TextEvent" in window && !yr, Ld = ct && (!ra || yr && 8 < yr && 11 >= yr), Lu = " ", Nu = !1;
function Nd(e, t) {
  switch (e) {
    case "keyup":
      return ey.indexOf(t.keyCode) !== -1;
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
function _d(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var hn = !1;
function ny(e, t) {
  switch (e) {
    case "compositionend":
      return _d(t);
    case "keypress":
      return t.which !== 32 ? null : (Nu = !0, Lu);
    case "textInput":
      return e = t.data, e === Lu && Nu ? null : e;
    default:
      return null;
  }
}
function ry(e, t) {
  if (hn) return e === "compositionend" || !ra && Nd(e, t) ? (e = Vd(), Li = ea = Tt = null, hn = !1, e) : null;
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
      return Ld && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var iy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!iy[e.type] : t === "textarea";
}
function Fd(e, t, n, r) {
  pd(r), t = qi(t, "onChange"), 0 < t.length && (n = new ta("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var vr = null, Nr = null;
function sy(e) {
  Qd(e, 0);
}
function Cs(e) {
  var t = yn(e);
  if (od(t)) return e;
}
function oy(e, t) {
  if (e === "change") return t;
}
var Id = !1;
if (ct) {
  var eo;
  if (ct) {
    var to = "oninput" in document;
    if (!to) {
      var Fu = document.createElement("div");
      Fu.setAttribute("oninput", "return;"), to = typeof Fu.oninput == "function";
    }
    eo = to;
  } else eo = !1;
  Id = eo && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  vr && (vr.detachEvent("onpropertychange", Od), Nr = vr = null);
}
function Od(e) {
  if (e.propertyName === "value" && Cs(Nr)) {
    var t = [];
    Fd(t, Nr, e, Xl(e)), yd(sy, t);
  }
}
function ly(e, t, n) {
  e === "focusin" ? (Iu(), vr = t, Nr = n, vr.attachEvent("onpropertychange", Od)) : e === "focusout" && Iu();
}
function ay(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Cs(Nr);
}
function uy(e, t) {
  if (e === "click") return Cs(t);
}
function cy(e, t) {
  if (e === "input" || e === "change") return Cs(t);
}
function fy(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Xe = typeof Object.is == "function" ? Object.is : fy;
function _r(e, t) {
  if (Xe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!jo.call(t, i) || !Xe(e[i], t[i])) return !1;
  }
  return !0;
}
function Ou(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, t) {
  var n = Ou(e);
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
    n = Ou(n);
  }
}
function zd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Bd() {
  for (var e = window, t = Ki(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ki(e.document);
  }
  return t;
}
function ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function dy(e) {
  var t = Bd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && zd(n.ownerDocument.documentElement, n)) {
    if (r !== null && ia(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, s = Math.min(r.start, i);
        r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = zu(n, s);
        var o = zu(
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
var py = ct && "documentMode" in document && 11 >= document.documentMode, mn = null, Yo = null, xr = null, Zo = !1;
function Bu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zo || mn == null || mn !== Ki(r) || (r = mn, "selectionStart" in r && ia(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), xr && _r(xr, r) || (xr = r, r = qi(Yo, "onSelect"), 0 < r.length && (t = new ta("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
}
function yi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var gn = { animationend: yi("Animation", "AnimationEnd"), animationiteration: yi("Animation", "AnimationIteration"), animationstart: yi("Animation", "AnimationStart"), transitionend: yi("Transition", "TransitionEnd") }, no = {}, Ud = {};
ct && (Ud = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
function Es(e) {
  if (no[e]) return no[e];
  if (!gn[e]) return e;
  var t = gn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ud) return no[e] = t[n];
  return e;
}
var $d = Es("animationend"), Wd = Es("animationiteration"), Hd = Es("animationstart"), Kd = Es("transitionend"), Gd = /* @__PURE__ */ new Map(), Uu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function It(e, t) {
  Gd.set(e, t), an(t, [e]);
}
for (var ro = 0; ro < Uu.length; ro++) {
  var io = Uu[ro], hy = io.toLowerCase(), my = io[0].toUpperCase() + io.slice(1);
  It(hy, "on" + my);
}
It($d, "onAnimationEnd");
It(Wd, "onAnimationIteration");
It(Hd, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(Kd, "onTransitionEnd");
_n("onMouseEnter", ["mouseout", "mouseover"]);
_n("onMouseLeave", ["mouseout", "mouseover"]);
_n("onPointerEnter", ["pointerout", "pointerover"]);
_n("onPointerLeave", ["pointerout", "pointerover"]);
an("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
an("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
an("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
an("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
an("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
an("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gy = new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));
function $u(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, hg(r, t, void 0, e), e.currentTarget = null;
}
function Qd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var l = r[o], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== s && i.isPropagationStopped()) break e;
        $u(i, l, u), s = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (l = r[o], a = l.instance, u = l.currentTarget, l = l.listener, a !== s && i.isPropagationStopped()) break e;
        $u(i, l, u), s = a;
      }
    }
  }
  if (Qi) throw e = Go, Qi = !1, Go = null, e;
}
function z(e, t) {
  var n = t[nl];
  n === void 0 && (n = t[nl] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (bd(t, e, 2, !1), n.add(r));
}
function so(e, t, n) {
  var r = 0;
  t && (r |= 4), bd(n, e, r, t);
}
var vi = "_reactListening" + Math.random().toString(36).slice(2);
function Fr(e) {
  if (!e[vi]) {
    e[vi] = !0, td.forEach(function(n) {
      n !== "selectionchange" && (gy.has(n) || so(n, !1, e), so(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vi] || (t[vi] = !0, so("selectionchange", !1, t));
  }
}
function bd(e, t, n, r) {
  switch (jd(t)) {
    case 1:
      var i = Mg;
      break;
    case 4:
      i = jg;
      break;
    default:
      i = Jl;
  }
  n = i.bind(null, t, n, e), i = void 0, !Ko || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function oo(e, t, n, r, i) {
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
  yd(function() {
    var u = s, c = Xl(n), f = [];
    e: {
      var d = Gd.get(e);
      if (d !== void 0) {
        var g = ta, y = e;
        switch (e) {
          case "keypress":
            if (Ni(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Gg;
            break;
          case "focusin":
            y = "focus", g = Js;
            break;
          case "focusout":
            y = "blur", g = Js;
            break;
          case "beforeblur":
          case "afterblur":
            g = Js;
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
            g = Mu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Ng;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Xg;
            break;
          case $d:
          case Wd:
          case Hd:
            g = Ig;
            break;
          case Kd:
            g = Zg;
            break;
          case "scroll":
            g = Vg;
            break;
          case "wheel":
            g = Jg;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = zg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Vu;
        }
        var v = (t & 4) !== 0, k = !v && e === "scroll", h = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var x = m.stateNode;
          if (m.tag === 5 && x !== null && (m = x, h !== null && (x = Mr(p, h), x != null && v.push(Ir(p, x, m)))), k) break;
          p = p.return;
        }
        0 < v.length && (d = new g(d, y, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Wo && (y = n.relatedTarget || n.fromElement) && (Xt(y) || y[ft])) break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = u, y = y ? Xt(y) : null, y !== null && (k = un(y), y !== k || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = u), g !== y)) {
          if (v = Mu, x = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = Vu, x = "onPointerLeave", h = "onPointerEnter", p = "pointer"), k = g == null ? d : yn(g), m = y == null ? d : yn(y), d = new v(x, p + "leave", g, n, c), d.target = k, d.relatedTarget = m, x = null, Xt(c) === u && (v = new v(h, p + "enter", y, n, c), v.target = m, v.relatedTarget = k, x = v), k = x, g && y) t: {
            for (v = g, h = y, p = 0, m = v; m; m = fn(m)) p++;
            for (m = 0, x = h; x; x = fn(x)) m++;
            for (; 0 < p - m; ) v = fn(v), p--;
            for (; 0 < m - p; ) h = fn(h), m--;
            for (; p--; ) {
              if (v === h || h !== null && v === h.alternate) break t;
              v = fn(v), h = fn(h);
            }
            v = null;
          }
          else v = null;
          g !== null && Wu(f, d, g, v, !1), y !== null && k !== null && Wu(f, k, y, v, !0);
        }
      }
      e: {
        if (d = u ? yn(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var w = oy;
        else if (_u(d)) if (Id) w = cy;
        else {
          w = ay;
          var E = ly;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = uy);
        if (w && (w = w(e, u))) {
          Fd(f, w, n, c);
          break e;
        }
        E && E(e, d, u), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && Oo(d, "number", d.value);
      }
      switch (E = u ? yn(u) : window, e) {
        case "focusin":
          (_u(E) || E.contentEditable === "true") && (mn = E, Yo = u, xr = null);
          break;
        case "focusout":
          xr = Yo = mn = null;
          break;
        case "mousedown":
          Zo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Zo = !1, Bu(f, n, c);
          break;
        case "selectionchange":
          if (py) break;
        case "keydown":
        case "keyup":
          Bu(f, n, c);
      }
      var A;
      if (ra) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else hn ? Nd(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Ld && n.locale !== "ko" && (hn || T !== "onCompositionStart" ? T === "onCompositionEnd" && hn && (A = Vd()) : (Tt = c, ea = "value" in Tt ? Tt.value : Tt.textContent, hn = !0)), E = qi(u, T), 0 < E.length && (T = new ju(T, e, null, n, c), f.push({ event: T, listeners: E }), A ? T.data = A : (A = _d(n), A !== null && (T.data = A)))), (A = ty ? ny(e, n) : ry(e, n)) && (u = qi(u, "onBeforeInput"), 0 < u.length && (c = new ju("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = A));
    }
    Qd(f, t);
  });
}
function Ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = Mr(e, n), s != null && r.unshift(Ir(e, s, i)), s = Mr(e, t), s != null && r.push(Ir(e, s, i))), e = e.return;
  }
  return r;
}
function fn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wu(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, i ? (a = Mr(n, s), a != null && o.unshift(Ir(n, a, l))) : i || (a = Mr(n, s), a != null && o.push(Ir(n, a, l)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var yy = /\r\n?/g, vy = /\u0000|\uFFFD/g;
function Hu(e) {
  return (typeof e == "string" ? e : "" + e).replace(yy, `
`).replace(vy, "");
}
function xi(e, t, n) {
  if (t = Hu(t), Hu(e) !== t && n) throw Error(C(425));
}
function Ji() {
}
var qo = null, Jo = null;
function el(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var tl = typeof setTimeout == "function" ? setTimeout : void 0, xy = typeof clearTimeout == "function" ? clearTimeout : void 0, Ku = typeof Promise == "function" ? Promise : void 0, wy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ku < "u" ? function(e) {
  return Ku.resolve(null).then(e).catch(Sy);
} : tl;
function Sy(e) {
  setTimeout(function() {
    throw e;
  });
}
function lo(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Lr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Lr(t);
}
function Dt(e) {
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
function Gu(e) {
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
var Qn = Math.random().toString(36).slice(2), qe = "__reactFiber$" + Qn, Or = "__reactProps$" + Qn, ft = "__reactContainer$" + Qn, nl = "__reactEvents$" + Qn, ky = "__reactListeners$" + Qn, Ty = "__reactHandles$" + Qn;
function Xt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[ft] || n[qe]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Gu(e); e !== null; ) {
        if (n = e[qe]) return n;
        e = Gu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ei(e) {
  return e = e[qe] || e[ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function yn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function As(e) {
  return e[Or] || null;
}
var rl = [], vn = -1;
function Ot(e) {
  return { current: e };
}
function B(e) {
  0 > vn || (e.current = rl[vn], rl[vn] = null, vn--);
}
function O(e, t) {
  vn++, rl[vn] = e.current, e.current = t;
}
var Nt = {}, me = Ot(Nt), ke = Ot(!1), nn = Nt;
function Fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in n) i[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function Te(e) {
  return e = e.childContextTypes, e != null;
}
function es() {
  B(ke), B(me);
}
function Qu(e, t, n) {
  if (me.current !== Nt) throw Error(C(168));
  O(me, t), O(ke, n);
}
function Xd(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, lg(e) || "Unknown", i));
  return G({}, n, r);
}
function ts(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nt, nn = me.current, O(me, e), O(ke, ke.current), !0;
}
function bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n ? (e = Xd(e, t, nn), r.__reactInternalMemoizedMergedChildContext = e, B(ke), B(me), O(me, e)) : B(ke), O(ke, n);
}
var it = null, Ds = !1, ao = !1;
function Yd(e) {
  it === null ? it = [e] : it.push(e);
}
function Py(e) {
  Ds = !0, Yd(e);
}
function zt() {
  if (!ao && it !== null) {
    ao = !0;
    var e = 0, t = I;
    try {
      var n = it;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      it = null, Ds = !1;
    } catch (i) {
      throw it !== null && (it = it.slice(e + 1)), Sd(Yl, zt), i;
    } finally {
      I = t, ao = !1;
    }
  }
  return null;
}
var xn = [], wn = 0, ns = null, rs = 0, _e = [], Fe = 0, rn = null, st = 1, ot = "";
function Kt(e, t) {
  xn[wn++] = rs, xn[wn++] = ns, ns = e, rs = t;
}
function Zd(e, t, n) {
  _e[Fe++] = st, _e[Fe++] = ot, _e[Fe++] = rn, rn = e;
  var r = st;
  e = ot;
  var i = 32 - Qe(r) - 1;
  r &= ~(1 << i), n += 1;
  var s = 32 - Qe(t) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, st = 1 << 32 - Qe(t) + i | n << i | r, ot = s + e;
  } else st = 1 << s | n << i | r, ot = e;
}
function sa(e) {
  e.return !== null && (Kt(e, 1), Zd(e, 1, 0));
}
function oa(e) {
  for (; e === ns; ) ns = xn[--wn], xn[wn] = null, rs = xn[--wn], xn[wn] = null;
  for (; e === rn; ) rn = _e[--Fe], _e[Fe] = null, ot = _e[--Fe], _e[Fe] = null, st = _e[--Fe], _e[Fe] = null;
}
var Ae = null, Ee = null, $ = !1, Ge = null;
function qd(e, t) {
  var n = Ie(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Xu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Ee = Dt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Ee = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = rn !== null ? { id: st, overflow: ot } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ie(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Ee = null, !0) : !1;
    default:
      return !1;
  }
}
function il(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sl(e) {
  if ($) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!Xu(e, t)) {
        if (il(e)) throw Error(C(418));
        t = Dt(n.nextSibling);
        var r = Ae;
        t && Xu(e, t) ? qd(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, Ae = e);
      }
    } else {
      if (il(e)) throw Error(C(418));
      e.flags = e.flags & -4097 | 2, $ = !1, Ae = e;
    }
  }
}
function Yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ae = e;
}
function wi(e) {
  if (e !== Ae) return !1;
  if (!$) return Yu(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !el(e.type, e.memoizedProps)), t && (t = Ee)) {
    if (il(e)) throw Jd(), Error(C(418));
    for (; t; ) qd(e, t), t = Dt(t.nextSibling);
  }
  if (Yu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ae ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Jd() {
  for (var e = Ee; e; ) e = Dt(e.nextSibling);
}
function In() {
  Ee = Ae = null, $ = !1;
}
function la(e) {
  Ge === null ? Ge = [e] : Ge.push(e);
}
var Cy = mt.ReactCurrentBatchConfig;
function rr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
        var l = i.refs;
        o === null ? delete l[s] : l[s] = o;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Si(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Zu(e) {
  var t = e._init;
  return t(e._payload);
}
function ep(e) {
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
    return h = Vt(h, p), h.index = 0, h.sibling = null, h;
  }
  function s(h, p, m) {
    return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < p ? (h.flags |= 2, p) : m) : (h.flags |= 2, p)) : (h.flags |= 1048576, p);
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, m, x) {
    return p === null || p.tag !== 6 ? (p = go(m, h.mode, x), p.return = h, p) : (p = i(p, m), p.return = h, p);
  }
  function a(h, p, m, x) {
    var w = m.type;
    return w === pn ? c(h, p, m.props.children, x, m.key) : p !== null && (p.elementType === w || typeof w == "object" && w !== null && w.$$typeof === xt && Zu(w) === p.type) ? (x = i(p, m.props), x.ref = rr(h, p, m), x.return = h, x) : (x = Ui(m.type, m.key, m.props, null, h.mode, x), x.ref = rr(h, p, m), x.return = h, x);
  }
  function u(h, p, m, x) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = yo(m, h.mode, x), p.return = h, p) : (p = i(p, m.children || []), p.return = h, p);
  }
  function c(h, p, m, x, w) {
    return p === null || p.tag !== 7 ? (p = en(m, h.mode, x, w), p.return = h, p) : (p = i(p, m), p.return = h, p);
  }
  function f(h, p, m) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = go("" + p, h.mode, m), p.return = h, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ci:
          return m = Ui(p.type, p.key, p.props, null, h.mode, m), m.ref = rr(h, null, p), m.return = h, m;
        case dn:
          return p = yo(p, h.mode, m), p.return = h, p;
        case xt:
          var x = p._init;
          return f(h, x(p._payload), m);
      }
      if (ur(p) || qn(p)) return p = en(p, h.mode, m, null), p.return = h, p;
      Si(h, p);
    }
    return null;
  }
  function d(h, p, m, x) {
    var w = p !== null ? p.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return w !== null ? null : l(h, p, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ci:
          return m.key === w ? a(h, p, m, x) : null;
        case dn:
          return m.key === w ? u(h, p, m, x) : null;
        case xt:
          return w = m._init, d(
            h,
            p,
            w(m._payload),
            x
          );
      }
      if (ur(m) || qn(m)) return w !== null ? null : c(h, p, m, x, null);
      Si(h, m);
    }
    return null;
  }
  function g(h, p, m, x, w) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return h = h.get(m) || null, l(p, h, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ci:
          return h = h.get(x.key === null ? m : x.key) || null, a(p, h, x, w);
        case dn:
          return h = h.get(x.key === null ? m : x.key) || null, u(p, h, x, w);
        case xt:
          var E = x._init;
          return g(h, p, m, E(x._payload), w);
      }
      if (ur(x) || qn(x)) return h = h.get(m) || null, c(p, h, x, w, null);
      Si(p, x);
    }
    return null;
  }
  function y(h, p, m, x) {
    for (var w = null, E = null, A = p, T = p = 0, N = null; A !== null && T < m.length; T++) {
      A.index > T ? (N = A, A = null) : N = A.sibling;
      var j = d(h, A, m[T], x);
      if (j === null) {
        A === null && (A = N);
        break;
      }
      e && A && j.alternate === null && t(h, A), p = s(j, p, T), E === null ? w = j : E.sibling = j, E = j, A = N;
    }
    if (T === m.length) return n(h, A), $ && Kt(h, T), w;
    if (A === null) {
      for (; T < m.length; T++) A = f(h, m[T], x), A !== null && (p = s(A, p, T), E === null ? w = A : E.sibling = A, E = A);
      return $ && Kt(h, T), w;
    }
    for (A = r(h, A); T < m.length; T++) N = g(A, h, T, m[T], x), N !== null && (e && N.alternate !== null && A.delete(N.key === null ? T : N.key), p = s(N, p, T), E === null ? w = N : E.sibling = N, E = N);
    return e && A.forEach(function(ne) {
      return t(h, ne);
    }), $ && Kt(h, T), w;
  }
  function v(h, p, m, x) {
    var w = qn(m);
    if (typeof w != "function") throw Error(C(150));
    if (m = w.call(m), m == null) throw Error(C(151));
    for (var E = w = null, A = p, T = p = 0, N = null, j = m.next(); A !== null && !j.done; T++, j = m.next()) {
      A.index > T ? (N = A, A = null) : N = A.sibling;
      var ne = d(h, A, j.value, x);
      if (ne === null) {
        A === null && (A = N);
        break;
      }
      e && A && ne.alternate === null && t(h, A), p = s(ne, p, T), E === null ? w = ne : E.sibling = ne, E = ne, A = N;
    }
    if (j.done) return n(
      h,
      A
    ), $ && Kt(h, T), w;
    if (A === null) {
      for (; !j.done; T++, j = m.next()) j = f(h, j.value, x), j !== null && (p = s(j, p, T), E === null ? w = j : E.sibling = j, E = j);
      return $ && Kt(h, T), w;
    }
    for (A = r(h, A); !j.done; T++, j = m.next()) j = g(A, h, T, j.value, x), j !== null && (e && j.alternate !== null && A.delete(j.key === null ? T : j.key), p = s(j, p, T), E === null ? w = j : E.sibling = j, E = j);
    return e && A.forEach(function(gt) {
      return t(h, gt);
    }), $ && Kt(h, T), w;
  }
  function k(h, p, m, x) {
    if (typeof m == "object" && m !== null && m.type === pn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ci:
          e: {
            for (var w = m.key, E = p; E !== null; ) {
              if (E.key === w) {
                if (w = m.type, w === pn) {
                  if (E.tag === 7) {
                    n(h, E.sibling), p = i(E, m.props.children), p.return = h, h = p;
                    break e;
                  }
                } else if (E.elementType === w || typeof w == "object" && w !== null && w.$$typeof === xt && Zu(w) === E.type) {
                  n(h, E.sibling), p = i(E, m.props), p.ref = rr(h, E, m), p.return = h, h = p;
                  break e;
                }
                n(h, E);
                break;
              } else t(h, E);
              E = E.sibling;
            }
            m.type === pn ? (p = en(m.props.children, h.mode, x, m.key), p.return = h, h = p) : (x = Ui(m.type, m.key, m.props, null, h.mode, x), x.ref = rr(h, p, m), x.return = h, h = x);
          }
          return o(h);
        case dn:
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
            p = yo(m, h.mode, x), p.return = h, h = p;
          }
          return o(h);
        case xt:
          return E = m._init, k(h, p, E(m._payload), x);
      }
      if (ur(m)) return y(h, p, m, x);
      if (qn(m)) return v(h, p, m, x);
      Si(h, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(h, p.sibling), p = i(p, m), p.return = h, h = p) : (n(h, p), p = go(m, h.mode, x), p.return = h, h = p), o(h)) : n(h, p);
  }
  return k;
}
var On = ep(!0), tp = ep(!1), is = Ot(null), ss = null, Sn = null, aa = null;
function ua() {
  aa = Sn = ss = null;
}
function ca(e) {
  var t = is.current;
  B(is), e._currentValue = t;
}
function ol(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Ln(e, t) {
  ss = e, aa = Sn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function Be(e) {
  var t = e._currentValue;
  if (aa !== e) if (e = { context: e, memoizedValue: t, next: null }, Sn === null) {
    if (ss === null) throw Error(C(308));
    Sn = e, ss.dependencies = { lanes: 0, firstContext: e };
  } else Sn = Sn.next = e;
  return t;
}
var Yt = null;
function fa(e) {
  Yt === null ? Yt = [e] : Yt.push(e);
}
function np(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, fa(t)) : (n.next = i.next, i.next = n), t.interleaved = n, dt(e, r);
}
function dt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var wt = !1;
function da(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function rp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Rt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, dt(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, fa(r)) : (t.next = i.next, i.next = t), r.interleaved = t, dt(e, n);
}
function _i(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zl(e, n);
  }
}
function qu(e, t) {
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
function os(e, t, n, r) {
  var i = e.updateQueue;
  wt = !1;
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
              wt = !0;
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
function Ju(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(C(191, i));
      i.call(r);
    }
  }
}
var ti = {}, et = Ot(ti), zr = Ot(ti), Br = Ot(ti);
function Zt(e) {
  if (e === ti) throw Error(C(174));
  return e;
}
function pa(e, t) {
  switch (O(Br, t), O(zr, e), O(et, ti), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bo(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bo(t, e);
  }
  B(et), O(et, t);
}
function zn() {
  B(et), B(zr), B(Br);
}
function ip(e) {
  Zt(Br.current);
  var t = Zt(et.current), n = Bo(t, e.type);
  t !== n && (O(zr, e), O(et, n));
}
function ha(e) {
  zr.current === e && (B(et), B(zr));
}
var W = Ot(0);
function ls(e) {
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
var uo = [];
function ma() {
  for (var e = 0; e < uo.length; e++) uo[e]._workInProgressVersionPrimary = null;
  uo.length = 0;
}
var Fi = mt.ReactCurrentDispatcher, co = mt.ReactCurrentBatchConfig, sn = 0, K = null, ee = null, ie = null, as = !1, wr = !1, Ur = 0, Ey = 0;
function ce() {
  throw Error(C(321));
}
function ga(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Xe(e[n], t[n])) return !1;
  return !0;
}
function ya(e, t, n, r, i, s) {
  if (sn = s, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Fi.current = e === null || e.memoizedState === null ? My : jy, e = n(r, i), wr) {
    s = 0;
    do {
      if (wr = !1, Ur = 0, 25 <= s) throw Error(C(301));
      s += 1, ie = ee = null, t.updateQueue = null, Fi.current = Vy, e = n(r, i);
    } while (wr);
  }
  if (Fi.current = us, t = ee !== null && ee.next !== null, sn = 0, ie = ee = K = null, as = !1, t) throw Error(C(300));
  return e;
}
function va() {
  var e = Ur !== 0;
  return Ur = 0, e;
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
    if (e === null) throw Error(C(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, ie === null ? K.memoizedState = ie = e : ie = ie.next = e;
  }
  return ie;
}
function $r(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fo(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(C(311));
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
function po(e) {
  var t = Ue(), n = t.queue;
  if (n === null) throw Error(C(311));
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
function sp() {
}
function op(e, t) {
  var n = K, r = Ue(), i = t(), s = !Xe(r.memoizedState, i);
  if (s && (r.memoizedState = i, Se = !0), r = r.queue, xa(up.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ie !== null && ie.memoizedState.tag & 1) {
    if (n.flags |= 2048, Wr(9, ap.bind(null, n, r, i, t), void 0, null), se === null) throw Error(C(349));
    sn & 30 || lp(n, t, i);
  }
  return i;
}
function lp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ap(e, t, n, r) {
  t.value = n, t.getSnapshot = r, cp(t) && fp(e);
}
function up(e, t, n) {
  return n(function() {
    cp(t) && fp(e);
  });
}
function cp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xe(e, n);
  } catch {
    return !0;
  }
}
function fp(e) {
  var t = dt(e, 1);
  t !== null && be(t, e, 1, -1);
}
function ec(e) {
  var t = Ze();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: $r, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ry.bind(null, K, e), [t.memoizedState, e];
}
function Wr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = K.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, K.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function dp() {
  return Ue().memoizedState;
}
function Ii(e, t, n, r) {
  var i = Ze();
  K.flags |= e, i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Rs(e, t, n, r) {
  var i = Ue();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ee !== null) {
    var o = ee.memoizedState;
    if (s = o.destroy, r !== null && ga(r, o.deps)) {
      i.memoizedState = Wr(t, n, s, r);
      return;
    }
  }
  K.flags |= e, i.memoizedState = Wr(1 | t, n, s, r);
}
function tc(e, t) {
  return Ii(8390656, 8, e, t);
}
function xa(e, t) {
  return Rs(2048, 8, e, t);
}
function pp(e, t) {
  return Rs(4, 2, e, t);
}
function hp(e, t) {
  return Rs(4, 4, e, t);
}
function mp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function gp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rs(4, 4, mp.bind(null, t, e), n);
}
function wa() {
}
function yp(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ga(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function vp(e, t) {
  var n = Ue();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ga(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function xp(e, t, n) {
  return sn & 21 ? (Xe(n, t) || (n = Pd(), K.lanes |= n, on |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Se = !0), e.memoizedState = n);
}
function Ay(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = co.transition;
  co.transition = {};
  try {
    e(!1), t();
  } finally {
    I = n, co.transition = r;
  }
}
function wp() {
  return Ue().memoizedState;
}
function Dy(e, t, n) {
  var r = jt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Sp(e)) kp(t, n);
  else if (n = np(e, t, n, r), n !== null) {
    var i = ye();
    be(n, e, r, i), Tp(n, t, r);
  }
}
function Ry(e, t, n) {
  var r = jt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sp(e)) kp(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var o = t.lastRenderedState, l = s(o, n);
      if (i.hasEagerState = !0, i.eagerState = l, Xe(l, o)) {
        var a = t.interleaved;
        a === null ? (i.next = i, fa(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = np(e, t, i, r), n !== null && (i = ye(), be(n, e, r, i), Tp(n, t, r));
  }
}
function Sp(e) {
  var t = e.alternate;
  return e === K || t !== null && t === K;
}
function kp(e, t) {
  wr = as = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Tp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Zl(e, n);
  }
}
var us = { readContext: Be, useCallback: ce, useContext: ce, useEffect: ce, useImperativeHandle: ce, useInsertionEffect: ce, useLayoutEffect: ce, useMemo: ce, useReducer: ce, useRef: ce, useState: ce, useDebugValue: ce, useDeferredValue: ce, useTransition: ce, useMutableSource: ce, useSyncExternalStore: ce, useId: ce, unstable_isNewReconciler: !1 }, My = { readContext: Be, useCallback: function(e, t) {
  return Ze().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Be, useEffect: tc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ii(
    4194308,
    4,
    mp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ii(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ii(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ze();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ze();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Dy.bind(null, K, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ze();
  return e = { current: e }, t.memoizedState = e;
}, useState: ec, useDebugValue: wa, useDeferredValue: function(e) {
  return Ze().memoizedState = e;
}, useTransition: function() {
  var e = ec(!1), t = e[0];
  return e = Ay.bind(null, e[1]), Ze().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = K, i = Ze();
  if ($) {
    if (n === void 0) throw Error(C(407));
    n = n();
  } else {
    if (n = t(), se === null) throw Error(C(349));
    sn & 30 || lp(r, t, n);
  }
  i.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return i.queue = s, tc(up.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, Wr(9, ap.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = Ze(), t = se.identifierPrefix;
  if ($) {
    var n = ot, r = st;
    n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ur++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ey++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, jy = {
  readContext: Be,
  useCallback: yp,
  useContext: Be,
  useEffect: xa,
  useImperativeHandle: gp,
  useInsertionEffect: pp,
  useLayoutEffect: hp,
  useMemo: vp,
  useReducer: fo,
  useRef: dp,
  useState: function() {
    return fo($r);
  },
  useDebugValue: wa,
  useDeferredValue: function(e) {
    var t = Ue();
    return xp(t, ee.memoizedState, e);
  },
  useTransition: function() {
    var e = fo($r)[0], t = Ue().memoizedState;
    return [e, t];
  },
  useMutableSource: sp,
  useSyncExternalStore: op,
  useId: wp,
  unstable_isNewReconciler: !1
}, Vy = { readContext: Be, useCallback: yp, useContext: Be, useEffect: xa, useImperativeHandle: gp, useInsertionEffect: pp, useLayoutEffect: hp, useMemo: vp, useReducer: po, useRef: dp, useState: function() {
  return po($r);
}, useDebugValue: wa, useDeferredValue: function(e) {
  var t = Ue();
  return ee === null ? t.memoizedState = e : xp(t, ee.memoizedState, e);
}, useTransition: function() {
  var e = po($r)[0], t = Ue().memoizedState;
  return [e, t];
}, useMutableSource: sp, useSyncExternalStore: op, useId: wp, unstable_isNewReconciler: !1 };
function He(e, t) {
  if (e && e.defaultProps) {
    t = G({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ll(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ms = { isMounted: function(e) {
  return (e = e._reactInternals) ? un(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), i = jt(e), s = lt(r, i);
  s.payload = t, n != null && (s.callback = n), t = Rt(e, s, i), t !== null && (be(t, e, i, r), _i(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ye(), i = jt(e), s = lt(r, i);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Rt(e, s, i), t !== null && (be(t, e, i, r), _i(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ye(), r = jt(e), i = lt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Rt(e, i, r), t !== null && (be(t, e, r, n), _i(t, e, r));
} };
function nc(e, t, n, r, i, s, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !_r(n, r) || !_r(i, s) : !0;
}
function Pp(e, t, n) {
  var r = !1, i = Nt, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Be(s) : (i = Te(t) ? nn : me.current, r = t.contextTypes, s = (r = r != null) ? Fn(e, i) : Nt), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ms, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function rc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ms.enqueueReplaceState(t, t.state, null);
}
function al(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, da(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? i.context = Be(s) : (s = Te(t) ? nn : me.current, i.context = Fn(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ll(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ms.enqueueReplaceState(i, i.state, null), os(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bn(e, t) {
  try {
    var n = "", r = t;
    do
      n += og(r), r = r.return;
    while (r);
    var i = n;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ho(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ul(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Ly = typeof WeakMap == "function" ? WeakMap : Map;
function Cp(e, t, n) {
  n = lt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    fs || (fs = !0, xl = r), ul(e, t);
  }, n;
}
function Ep(e, t, n) {
  n = lt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      ul(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    ul(e, t), typeof r != "function" && (Mt === null ? Mt = /* @__PURE__ */ new Set([this]) : Mt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ic(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ly();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = Qy.bind(null, e, t, n), t.then(e, e));
}
function sc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function oc(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = lt(-1, 1), t.tag = 2, Rt(n, t, 1))), n.lanes |= 1), e);
}
var Ny = mt.ReactCurrentOwner, Se = !1;
function ge(e, t, n, r) {
  t.child = e === null ? tp(t, null, n, r) : On(t, e.child, n, r);
}
function lc(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return Ln(t, i), r = ya(e, t, n, r, s, i), n = va(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : ($ && n && sa(t), t.flags |= 1, ge(e, t, r, i), t.child);
}
function ac(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !Da(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Ap(e, t, s, r, i)) : (e = Ui(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & i)) {
    var o = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : _r, n(o, r) && e.ref === t.ref) return pt(e, t, i);
  }
  return t.flags |= 1, e = Vt(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ap(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (_r(s, r) && e.ref === t.ref) if (Se = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Se = !0);
    else return t.lanes = e.lanes, pt(e, t, i);
  }
  return cl(e, t, n, r, i);
}
function Dp(e, t, n) {
  var r = t.pendingProps, i = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(Tn, Ce), Ce |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, O(Tn, Ce), Ce |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, O(Tn, Ce), Ce |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, O(Tn, Ce), Ce |= r;
  return ge(e, t, i, n), t.child;
}
function Rp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function cl(e, t, n, r, i) {
  var s = Te(n) ? nn : me.current;
  return s = Fn(t, s), Ln(t, i), n = ya(e, t, n, r, s, i), r = va(), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : ($ && r && sa(t), t.flags |= 1, ge(e, t, n, i), t.child);
}
function uc(e, t, n, r, i) {
  if (Te(n)) {
    var s = !0;
    ts(t);
  } else s = !1;
  if (Ln(t, i), t.stateNode === null) Oi(e, t), Pp(t, n, r), al(t, n, r, i), r = !0;
  else if (e === null) {
    var o = t.stateNode, l = t.memoizedProps;
    o.props = l;
    var a = o.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = Be(u) : (u = Te(n) ? nn : me.current, u = Fn(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && rc(t, o, r, u), wt = !1;
    var d = t.memoizedState;
    o.state = d, os(t, r, o, i), a = t.memoizedState, l !== r || d !== a || ke.current || wt ? (typeof c == "function" && (ll(t, n, c, r), a = t.memoizedState), (l = wt || nc(t, n, l, r, d, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, rp(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : He(t.type, l), o.props = u, f = t.pendingProps, d = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Be(a) : (a = Te(n) ? nn : me.current, a = Fn(t, a));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || d !== a) && rc(t, o, r, a), wt = !1, d = t.memoizedState, o.state = d, os(t, r, o, i);
    var y = t.memoizedState;
    l !== f || d !== y || ke.current || wt ? (typeof g == "function" && (ll(t, n, g, r), y = t.memoizedState), (u = wt || nc(t, n, u, r, d, y, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return fl(e, t, n, r, s, i);
}
function fl(e, t, n, r, i, s) {
  Rp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && bu(t, n, !1), pt(e, t, s);
  r = t.stateNode, Ny.current = t;
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = On(t, e.child, null, s), t.child = On(t, null, l, s)) : ge(e, t, l, s), t.memoizedState = r.state, i && bu(t, n, !0), t.child;
}
function Mp(e) {
  var t = e.stateNode;
  t.pendingContext ? Qu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Qu(e, t.context, !1), pa(e, t.containerInfo);
}
function cc(e, t, n, r, i) {
  return In(), la(i), t.flags |= 256, ge(e, t, n, r), t.child;
}
var dl = { dehydrated: null, treeContext: null, retryLane: 0 };
function pl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jp(e, t, n) {
  var r = t.pendingProps, i = W.current, s = !1, o = (t.flags & 128) !== 0, l;
  if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), O(W, i & 1), e === null)
    return sl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = { mode: "hidden", children: o }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Ls(o, r, 0, null), e = en(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = pl(n), t.memoizedState = dl, e) : Sa(t, o));
  if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return _y(e, t, o, r, l, i, n);
  if (s) {
    s = r.fallback, o = t.mode, i = e.child, l = i.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Vt(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? s = Vt(l, s) : (s = en(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? pl(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = dl, r;
  }
  return s = e.child, e = s.sibling, r = Vt(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Sa(e, t) {
  return t = Ls({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ki(e, t, n, r) {
  return r !== null && la(r), On(t, e.child, null, n), e = Sa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function _y(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ho(Error(C(422))), ki(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = Ls({ mode: "visible", children: r.children }, i, 0, null), s = en(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && On(t, e.child, null, o), t.child.memoizedState = pl(o), t.memoizedState = dl, s);
  if (!(t.mode & 1)) return ki(e, t, o, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
    return r = l, s = Error(C(419)), r = ho(s, r, void 0), ki(e, t, o, r);
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
      i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, dt(e, i), be(r, e, i, -1));
    }
    return Aa(), r = ho(Error(C(421))), ki(e, t, o, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = by.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, Ee = Dt(i.nextSibling), Ae = t, $ = !0, Ge = null, e !== null && (_e[Fe++] = st, _e[Fe++] = ot, _e[Fe++] = rn, st = e.id, ot = e.overflow, rn = t), t = Sa(t, r.children), t.flags |= 4096, t);
}
function fc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ol(e.return, t, n);
}
function mo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i);
}
function Vp(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, s = r.tail;
  if (ge(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && fc(e, n, t);
      else if (e.tag === 19) fc(e, n, t);
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
  if (O(W, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && ls(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), mo(t, !1, i, n, s);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && ls(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      mo(t, !0, n, null, s);
      break;
    case "together":
      mo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Oi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function pt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), on |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Vt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Fy(e, t, n) {
  switch (t.tag) {
    case 3:
      Mp(t), In();
      break;
    case 5:
      ip(t);
      break;
    case 1:
      Te(t.type) && ts(t);
      break;
    case 4:
      pa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      O(is, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (O(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? jp(e, t, n) : (O(W, W.current & 1), e = pt(e, t, n), e !== null ? e.sibling : null);
      O(W, W.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Vp(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), O(W, W.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Dp(e, t, n);
  }
  return pt(e, t, n);
}
var Lp, hl, Np, _p;
Lp = function(e, t) {
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
hl = function() {
};
Np = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, Zt(et.current);
    var s = null;
    switch (n) {
      case "input":
        i = Fo(e, i), r = Fo(e, r), s = [];
        break;
      case "select":
        i = G({}, i, { value: void 0 }), r = G({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = zo(e, i), r = zo(e, r), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ji);
    }
    Uo(n, r);
    var o;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var l = i[u];
      for (o in l) l.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Dr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = i?.[u], r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (o in l) !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (s || (s = []), s.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Dr.hasOwnProperty(u) ? (a != null && u === "onScroll" && z("scroll", e), s || l === a || (s = [])) : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
_p = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ir(e, t) {
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
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Iy(e, t, n) {
  var r = t.pendingProps;
  switch (oa(t), t.tag) {
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
      return fe(t), null;
    case 1:
      return Te(t.type) && es(), fe(t), null;
    case 3:
      return r = t.stateNode, zn(), B(ke), B(me), ma(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ge !== null && (kl(Ge), Ge = null))), hl(e, t), fe(t), null;
    case 5:
      ha(t);
      var i = Zt(Br.current);
      if (n = t.type, e !== null && t.stateNode != null) Np(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return fe(t), null;
        }
        if (e = Zt(et.current), wi(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[qe] = t, r[Or] = s, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              z("cancel", r), z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              z("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < fr.length; i++) z(fr[i], r);
              break;
            case "source":
              z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              z(
                "error",
                r
              ), z("load", r);
              break;
            case "details":
              z("toggle", r);
              break;
            case "input":
              wu(r, s), z("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, z("invalid", r);
              break;
            case "textarea":
              ku(r, s), z("invalid", r);
          }
          Uo(n, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var l = s[o];
            o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && xi(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && xi(
              r.textContent,
              l,
              e
            ), i = ["children", "" + l]) : Dr.hasOwnProperty(o) && l != null && o === "onScroll" && z("scroll", r);
          }
          switch (n) {
            case "input":
              fi(r), Su(r, s, !0);
              break;
            case "textarea":
              fi(r), Tu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Ji);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ud(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[qe] = t, e[Or] = r, Lp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = $o(n, r), n) {
              case "dialog":
                z("cancel", e), z("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                z("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < fr.length; i++) z(fr[i], e);
                i = r;
                break;
              case "source":
                z("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                z(
                  "error",
                  e
                ), z("load", e), i = r;
                break;
              case "details":
                z("toggle", e), i = r;
                break;
              case "input":
                wu(e, r), i = Fo(e, r), z("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = G({}, r, { value: void 0 }), z("invalid", e);
                break;
              case "textarea":
                ku(e, r), i = zo(e, r), z("invalid", e);
                break;
              default:
                i = r;
            }
            Uo(n, i), l = i;
            for (s in l) if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "style" ? dd(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && cd(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Rr(e, a) : typeof a == "number" && Rr(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Dr.hasOwnProperty(s) ? a != null && s === "onScroll" && z("scroll", e) : a != null && Kl(e, s, a, o));
            }
            switch (n) {
              case "input":
                fi(e), Su(e, r, !1);
                break;
              case "textarea":
                fi(e), Tu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Rn(e, !!r.multiple, s, !1) : r.defaultValue != null && Rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ji);
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) _p(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (n = Zt(Br.current), Zt(et.current), wi(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[qe] = t, (s = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
            case 3:
              xi(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && xi(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[qe] = t, t.stateNode = r;
      }
      return fe(t), null;
    case 13:
      if (B(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && Ee !== null && t.mode & 1 && !(t.flags & 128)) Jd(), In(), t.flags |= 98560, s = !1;
        else if (s = wi(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(C(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(C(317));
            s[qe] = t;
          } else In(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          fe(t), s = !1;
        } else Ge !== null && (kl(Ge), Ge = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? te === 0 && (te = 3) : Aa())), t.updateQueue !== null && (t.flags |= 4), fe(t), null);
    case 4:
      return zn(), hl(e, t), e === null && Fr(t.stateNode.containerInfo), fe(t), null;
    case 10:
      return ca(t.type._context), fe(t), null;
    case 17:
      return Te(t.type) && es(), fe(t), null;
    case 19:
      if (B(W), s = t.memoizedState, s === null) return fe(t), null;
      if (r = (t.flags & 128) !== 0, o = s.rendering, o === null) if (r) ir(s, !1);
      else {
        if (te !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ls(e), o !== null) {
            for (t.flags |= 128, ir(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return O(W, W.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && Z() > Un && (t.flags |= 128, r = !0, ir(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ls(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ir(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !$) return fe(t), null;
        } else 2 * Z() - s.renderingStartTime > Un && n !== 1073741824 && (t.flags |= 128, r = !0, ir(s, !1), t.lanes = 4194304);
        s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = Z(), t.sibling = null, n = W.current, O(W, r ? n & 1 | 2 : n & 1), t) : (fe(t), null);
    case 22:
    case 23:
      return Ea(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : fe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Oy(e, t) {
  switch (oa(t), t.tag) {
    case 1:
      return Te(t.type) && es(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return zn(), B(ke), B(me), ma(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ha(t), null;
    case 13:
      if (B(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(C(340));
        In();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return B(W), null;
    case 4:
      return zn(), null;
    case 10:
      return ca(t.type._context), null;
    case 22:
    case 23:
      return Ea(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ti = !1, pe = !1, zy = typeof WeakSet == "function" ? WeakSet : Set, R = null;
function kn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    b(e, t, r);
  }
  else n.current = null;
}
function ml(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var dc = !1;
function By(e, t) {
  if (qo = Yi, e = Bd(), ia(e)) {
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
  for (Jo = { focusedElem: e, selectionRange: n }, Yi = !1, R = t; R !== null; ) if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
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
            var v = y.memoizedProps, k = y.memoizedState, h = t.stateNode, p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : He(t.type, v), k);
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
          throw Error(C(163));
      }
    } catch (x) {
      b(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, R = e;
      break;
    }
    R = t.return;
  }
  return y = dc, dc = !1, y;
}
function Sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && ml(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function js(e, t) {
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
function gl(e) {
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
function Fp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Fp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[qe], delete t[Or], delete t[nl], delete t[ky], delete t[Ty])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ip(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ip(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ji));
  else if (r !== 4 && (e = e.child, e !== null)) for (yl(e, t, n), e = e.sibling; e !== null; ) yl(e, t, n), e = e.sibling;
}
function vl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (vl(e, t, n), e = e.sibling; e !== null; ) vl(e, t, n), e = e.sibling;
}
var oe = null, Ke = !1;
function yt(e, t, n) {
  for (n = n.child; n !== null; ) Op(e, t, n), n = n.sibling;
}
function Op(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function") try {
    Je.onCommitFiberUnmount(Ts, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      pe || kn(n, t);
    case 6:
      var r = oe, i = Ke;
      oe = null, yt(e, t, n), oe = r, Ke = i, oe !== null && (Ke ? (e = oe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null && (Ke ? (e = oe, n = n.stateNode, e.nodeType === 8 ? lo(e.parentNode, n) : e.nodeType === 1 && lo(e, n), Lr(e)) : lo(oe, n.stateNode));
      break;
    case 4:
      r = oe, i = Ke, oe = n.stateNode.containerInfo, Ke = !0, yt(e, t, n), oe = r, Ke = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && ml(n, t, o), i = i.next;
        } while (i !== r);
      }
      yt(e, t, n);
      break;
    case 1:
      if (!pe && (kn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        b(n, t, l);
      }
      yt(e, t, n);
      break;
    case 21:
      yt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (pe = (r = pe) || n.memoizedState !== null, yt(e, t, n), pe = r) : yt(e, t, n);
      break;
    default:
      yt(e, t, n);
  }
}
function hc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zy()), t.forEach(function(r) {
      var i = Xy.bind(null, e, r);
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
      if (oe === null) throw Error(C(160));
      Op(s, o, i), oe = null, Ke = !1;
      var a = i.alternate;
      a !== null && (a.return = null), i.return = null;
    } catch (u) {
      b(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) zp(t, e), t = t.sibling;
}
function zp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ($e(t, e), Ye(e), r & 4) {
        try {
          Sr(3, e, e.return), js(3, e);
        } catch (v) {
          b(e, e.return, v);
        }
        try {
          Sr(5, e, e.return);
        } catch (v) {
          b(e, e.return, v);
        }
      }
      break;
    case 1:
      $e(t, e), Ye(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if ($e(t, e), Ye(e), r & 512 && n !== null && kn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          Rr(i, "");
        } catch (v) {
          b(e, e.return, v);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var s = e.memoizedProps, o = n !== null ? n.memoizedProps : s, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && s.type === "radio" && s.name != null && ld(i, s), $o(l, o);
          var u = $o(l, s);
          for (o = 0; o < a.length; o += 2) {
            var c = a[o], f = a[o + 1];
            c === "style" ? dd(i, f) : c === "dangerouslySetInnerHTML" ? cd(i, f) : c === "children" ? Rr(i, f) : Kl(i, c, f, u);
          }
          switch (l) {
            case "input":
              Io(i, s);
              break;
            case "textarea":
              ad(i, s);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var g = s.value;
              g != null ? Rn(i, !!s.multiple, g, !1) : d !== !!s.multiple && (s.defaultValue != null ? Rn(
                i,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Rn(i, !!s.multiple, s.multiple ? [] : "", !1));
          }
          i[Or] = s;
        } catch (v) {
          b(e, e.return, v);
        }
      }
      break;
    case 6:
      if ($e(t, e), Ye(e), r & 4) {
        if (e.stateNode === null) throw Error(C(162));
        i = e.stateNode, s = e.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (v) {
          b(e, e.return, v);
        }
      }
      break;
    case 3:
      if ($e(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Lr(t.containerInfo);
      } catch (v) {
        b(e, e.return, v);
      }
      break;
    case 4:
      $e(t, e), Ye(e);
      break;
    case 13:
      $e(t, e), Ye(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Pa = Z())), r & 4 && hc(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (pe = (u = pe) || c, $e(t, e), pe = u) : $e(t, e), Ye(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (R = e, c = e.child; c !== null; ) {
          for (f = R = c; R !== null; ) {
            switch (d = R, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Sr(4, d, d.return);
                break;
              case 1:
                kn(d, d.return);
                var y = d.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    b(r, n, v);
                  }
                }
                break;
              case 5:
                kn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  gc(f);
                  continue;
                }
            }
            g !== null ? (g.return = d, R = g) : gc(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = fd("display", o));
              } catch (v) {
                b(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (v) {
              b(e, e.return, v);
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
      $e(t, e), Ye(e), r & 4 && hc(e);
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
          if (Ip(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Rr(i, ""), r.flags &= -33);
          var s = pc(e);
          vl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, l = pc(e);
          yl(e, l, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      b(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Uy(e, t, n) {
  R = e, Bp(e);
}
function Bp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R, s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ti;
      if (!o) {
        var l = i.alternate, a = l !== null && l.memoizedState !== null || pe;
        l = Ti;
        var u = pe;
        if (Ti = o, (pe = a) && !u) for (R = i; R !== null; ) o = R, a = o.child, o.tag === 22 && o.memoizedState !== null ? yc(i) : a !== null ? (a.return = o, R = a) : yc(i);
        for (; s !== null; ) R = s, Bp(s), s = s.sibling;
        R = i, Ti = l, pe = u;
      }
      mc(e);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, R = s) : mc(e);
  }
}
function mc(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            pe || js(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !pe) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : He(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Ju(t, s, r);
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
              Ju(t, o, n);
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
                  f !== null && Lr(f);
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
            throw Error(C(163));
        }
        pe || t.flags & 512 && gl(t);
      } catch (d) {
        b(t, t.return, d);
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
function gc(e) {
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
function yc(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            js(4, t);
          } catch (a) {
            b(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              b(t, i, a);
            }
          }
          var s = t.return;
          try {
            gl(t);
          } catch (a) {
            b(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            gl(t);
          } catch (a) {
            b(t, o, a);
          }
      }
    } catch (a) {
      b(t, t.return, a);
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
var $y = Math.ceil, cs = mt.ReactCurrentDispatcher, ka = mt.ReactCurrentOwner, Oe = mt.ReactCurrentBatchConfig, F = 0, se = null, q = null, ae = 0, Ce = 0, Tn = Ot(0), te = 0, Hr = null, on = 0, Vs = 0, Ta = 0, kr = null, we = null, Pa = 0, Un = 1 / 0, rt = null, fs = !1, xl = null, Mt = null, Pi = !1, Pt = null, ds = 0, Tr = 0, wl = null, zi = -1, Bi = 0;
function ye() {
  return F & 6 ? Z() : zi !== -1 ? zi : zi = Z();
}
function jt(e) {
  return e.mode & 1 ? F & 2 && ae !== 0 ? ae & -ae : Cy.transition !== null ? (Bi === 0 && (Bi = Pd()), Bi) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : jd(e.type)), e) : 1;
}
function be(e, t, n, r) {
  if (50 < Tr) throw Tr = 0, wl = null, Error(C(185));
  qr(e, n, r), (!(F & 2) || e !== se) && (e === se && (!(F & 2) && (Vs |= n), te === 4 && kt(e, ae)), Pe(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Un = Z() + 500, Ds && zt()));
}
function Pe(e, t) {
  var n = e.callbackNode;
  Cg(e, t);
  var r = Xi(e, e === se ? ae : 0);
  if (r === 0) n !== null && Eu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Eu(n), t === 1) e.tag === 0 ? Py(vc.bind(null, e)) : Yd(vc.bind(null, e)), wy(function() {
      !(F & 6) && zt();
    }), n = null;
    else {
      switch (Cd(r)) {
        case 1:
          n = Yl;
          break;
        case 4:
          n = kd;
          break;
        case 16:
          n = bi;
          break;
        case 536870912:
          n = Td;
          break;
        default:
          n = bi;
      }
      n = bp(n, Up.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Up(e, t) {
  if (zi = -1, Bi = 0, F & 6) throw Error(C(327));
  var n = e.callbackNode;
  if (Nn() && e.callbackNode !== n) return null;
  var r = Xi(e, e === se ? ae : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ps(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var s = Wp();
    (se !== e || ae !== t) && (rt = null, Un = Z() + 500, Jt(e, t));
    do
      try {
        Ky();
        break;
      } catch (l) {
        $p(e, l);
      }
    while (!0);
    ua(), cs.current = s, F = i, q !== null ? t = 0 : (se = null, ae = 0, t = te);
  }
  if (t !== 0) {
    if (t === 2 && (i = Qo(e), i !== 0 && (r = i, t = Sl(e, i))), t === 1) throw n = Hr, Jt(e, 0), kt(e, r), Pe(e, Z()), n;
    if (t === 6) kt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !Wy(i) && (t = ps(e, r), t === 2 && (s = Qo(e), s !== 0 && (r = s, t = Sl(e, s))), t === 1)) throw n = Hr, Jt(e, 0), kt(e, r), Pe(e, Z()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          Gt(e, we, rt);
          break;
        case 3:
          if (kt(e, r), (r & 130023424) === r && (t = Pa + 500 - Z(), 10 < t)) {
            if (Xi(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              ye(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = tl(Gt.bind(null, e, we, rt), t);
            break;
          }
          Gt(e, we, rt);
          break;
        case 4:
          if (kt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Qe(r);
            s = 1 << o, o = t[o], o > i && (i = o), r &= ~s;
          }
          if (r = i, r = Z() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $y(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = tl(Gt.bind(null, e, we, rt), r);
            break;
          }
          Gt(e, we, rt);
          break;
        case 5:
          Gt(e, we, rt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Pe(e, Z()), e.callbackNode === n ? Up.bind(null, e) : null;
}
function Sl(e, t) {
  var n = kr;
  return e.current.memoizedState.isDehydrated && (Jt(e, t).flags |= 256), e = ps(e, t), e !== 2 && (t = we, we = n, t !== null && kl(t)), e;
}
function kl(e) {
  we === null ? we = e : we.push.apply(we, e);
}
function Wy(e) {
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
function kt(e, t) {
  for (t &= ~Ta, t &= ~Vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Qe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function vc(e) {
  if (F & 6) throw Error(C(327));
  Nn();
  var t = Xi(e, 0);
  if (!(t & 1)) return Pe(e, Z()), null;
  var n = ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qo(e);
    r !== 0 && (t = r, n = Sl(e, r));
  }
  if (n === 1) throw n = Hr, Jt(e, 0), kt(e, t), Pe(e, Z()), n;
  if (n === 6) throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, we, rt), Pe(e, Z()), null;
}
function Ca(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Un = Z() + 500, Ds && zt());
  }
}
function ln(e) {
  Pt !== null && Pt.tag === 0 && !(F & 6) && Nn();
  var t = F;
  F |= 1;
  var n = Oe.transition, r = I;
  try {
    if (Oe.transition = null, I = 1, e) return e();
  } finally {
    I = r, Oe.transition = n, F = t, !(F & 6) && zt();
  }
}
function Ea() {
  Ce = Tn.current, B(Tn);
}
function Jt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, xy(n)), q !== null) for (n = q.return; n !== null; ) {
    var r = n;
    switch (oa(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && es();
        break;
      case 3:
        zn(), B(ke), B(me), ma();
        break;
      case 5:
        ha(r);
        break;
      case 4:
        zn();
        break;
      case 13:
        B(W);
        break;
      case 19:
        B(W);
        break;
      case 10:
        ca(r.type._context);
        break;
      case 22:
      case 23:
        Ea();
    }
    n = n.return;
  }
  if (se = e, q = e = Vt(e.current, null), ae = Ce = t, te = 0, Hr = null, Ta = Vs = on = 0, we = kr = null, Yt !== null) {
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
function $p(e, t) {
  do {
    var n = q;
    try {
      if (ua(), Fi.current = us, as) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        as = !1;
      }
      if (sn = 0, ie = ee = K = null, wr = !1, Ur = 0, ka.current = null, n === null || n.return === null) {
        te = 1, Hr = t, q = null;
        break;
      }
      e: {
        var s = e, o = n.return, l = n, a = t;
        if (t = ae, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, c = l, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = sc(o);
          if (g !== null) {
            g.flags &= -257, oc(g, o, l, s, t), g.mode & 1 && ic(s, u, t), t = g, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(a), t.updateQueue = v;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ic(s, u, t), Aa();
              break e;
            }
            a = Error(C(426));
          }
        } else if ($ && l.mode & 1) {
          var k = sc(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), oc(k, o, l, s, t), la(Bn(a, l));
            break e;
          }
        }
        s = a = Bn(a, l), te !== 4 && (te = 2), kr === null ? kr = [s] : kr.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var h = Cp(s, a, t);
              qu(s, h);
              break e;
            case 1:
              l = a;
              var p = s.type, m = s.stateNode;
              if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Mt === null || !Mt.has(m)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var x = Ep(s, l, t);
                qu(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Kp(n);
    } catch (w) {
      t = w, q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Wp() {
  var e = cs.current;
  return cs.current = us, e === null ? us : e;
}
function Aa() {
  (te === 0 || te === 3 || te === 2) && (te = 4), se === null || !(on & 268435455) && !(Vs & 268435455) || kt(se, ae);
}
function ps(e, t) {
  var n = F;
  F |= 2;
  var r = Wp();
  (se !== e || ae !== t) && (rt = null, Jt(e, t));
  do
    try {
      Hy();
      break;
    } catch (i) {
      $p(e, i);
    }
  while (!0);
  if (ua(), F = n, cs.current = r, q !== null) throw Error(C(261));
  return se = null, ae = 0, te;
}
function Hy() {
  for (; q !== null; ) Hp(q);
}
function Ky() {
  for (; q !== null && !gg(); ) Hp(q);
}
function Hp(e) {
  var t = Qp(e.alternate, e, Ce);
  e.memoizedProps = e.pendingProps, t === null ? Kp(e) : q = t, ka.current = null;
}
function Kp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Oy(n, t), n !== null) {
        n.flags &= 32767, q = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        te = 6, q = null;
        return;
      }
    } else if (n = Iy(n, t, Ce), n !== null) {
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
  var r = I, i = Oe.transition;
  try {
    Oe.transition = null, I = 1, Gy(e, t, n, r);
  } finally {
    Oe.transition = i, I = r;
  }
  return null;
}
function Gy(e, t, n, r) {
  do
    Nn();
  while (Pt !== null);
  if (F & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (Eg(e, s), e === se && (q = se = null, ae = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pi || (Pi = !0, bp(bi, function() {
    return Nn(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = Oe.transition, Oe.transition = null;
    var o = I;
    I = 1;
    var l = F;
    F |= 4, ka.current = null, By(e, n), zp(n, e), dy(Jo), Yi = !!qo, Jo = qo = null, e.current = n, Uy(n), yg(), F = l, I = o, Oe.transition = s;
  } else e.current = n;
  if (Pi && (Pi = !1, Pt = e, ds = i), s = e.pendingLanes, s === 0 && (Mt = null), wg(n.stateNode), Pe(e, Z()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (fs) throw fs = !1, e = xl, xl = null, e;
  return ds & 1 && e.tag !== 0 && Nn(), s = e.pendingLanes, s & 1 ? e === wl ? Tr++ : (Tr = 0, wl = e) : Tr = 0, zt(), null;
}
function Nn() {
  if (Pt !== null) {
    var e = Cd(ds), t = Oe.transition, n = I;
    try {
      if (Oe.transition = null, I = 16 > e ? 16 : e, Pt === null) var r = !1;
      else {
        if (e = Pt, Pt = null, ds = 0, F & 6) throw Error(C(331));
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
                      Sr(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, R = f;
                  else for (; R !== null; ) {
                    c = R;
                    var d = c.sibling, g = c.return;
                    if (Fp(c), c === u) {
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
                    var k = v.sibling;
                    v.sibling = null, v = k;
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
                Sr(9, s, s.return);
            }
            var h = s.sibling;
            if (h !== null) {
              h.return = s.return, R = h;
              break e;
            }
            R = s.return;
          }
        }
        var p = e.current;
        for (R = p; R !== null; ) {
          o = R;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, R = m;
          else e: for (o = p; R !== null; ) {
            if (l = R, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  js(9, l);
              }
            } catch (w) {
              b(l, l.return, w);
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
          Je.onPostCommitFiberRoot(Ts, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = n, Oe.transition = t;
    }
  }
  return !1;
}
function xc(e, t, n) {
  t = Bn(n, t), t = Cp(e, t, 1), e = Rt(e, t, 1), t = ye(), e !== null && (qr(e, 1, t), Pe(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) xc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      xc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mt === null || !Mt.has(r))) {
        e = Bn(n, e), e = Ep(t, e, 1), t = Rt(t, e, 1), e = ye(), t !== null && (qr(t, 1, e), Pe(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Qy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ye(), e.pingedLanes |= e.suspendedLanes & n, se === e && (ae & n) === n && (te === 4 || te === 3 && (ae & 130023424) === ae && 500 > Z() - Pa ? Jt(e, 0) : Ta |= n), Pe(e, t);
}
function Gp(e, t) {
  t === 0 && (e.mode & 1 ? (t = hi, hi <<= 1, !(hi & 130023424) && (hi = 4194304)) : t = 1);
  var n = ye();
  e = dt(e, t), e !== null && (qr(e, t, n), Pe(e, n));
}
function by(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Gp(e, n);
}
function Xy(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), Gp(e, n);
}
var Qp;
Qp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ke.current) Se = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Se = !1, Fy(e, t, n);
    Se = !!(e.flags & 131072);
  }
  else Se = !1, $ && t.flags & 1048576 && Zd(t, rs, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Oi(e, t), e = t.pendingProps;
      var i = Fn(t, me.current);
      Ln(t, n), i = ya(null, t, r, e, i, n);
      var s = va();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (s = !0, ts(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, da(t), i.updater = Ms, t.stateNode = i, i._reactInternals = t, al(t, r, e, n), t = fl(null, t, r, !0, s, n)) : (t.tag = 0, $ && s && sa(t), ge(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Oi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Zy(r), e = He(r, e), i) {
          case 0:
            t = cl(null, t, r, e, n);
            break e;
          case 1:
            t = uc(null, t, r, e, n);
            break e;
          case 11:
            t = lc(null, t, r, e, n);
            break e;
          case 14:
            t = ac(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(C(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), cl(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), uc(e, t, r, i, n);
    case 3:
      e: {
        if (Mp(t), e === null) throw Error(C(387));
        r = t.pendingProps, s = t.memoizedState, i = s.element, rp(e, t), os(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          i = Bn(Error(C(423)), t), t = cc(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Bn(Error(C(424)), t), t = cc(e, t, r, n, i);
          break e;
        } else for (Ee = Dt(t.stateNode.containerInfo.firstChild), Ae = t, $ = !0, Ge = null, n = tp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (In(), r === i) {
            t = pt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ip(t), e === null && sl(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, el(r, i) ? o = null : s !== null && el(r, s) && (t.flags |= 32), Rp(e, t), ge(e, t, o, n), t.child;
    case 6:
      return e === null && sl(t), null;
    case 13:
      return jp(e, t, n);
    case 4:
      return pa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = On(t, null, r, n) : ge(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), lc(e, t, r, i, n);
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, O(is, r._currentValue), r._currentValue = o, s !== null) if (Xe(s.value, o)) {
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
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), ol(
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
            if (o = s.return, o === null) throw Error(C(341));
            o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), ol(o, n, t), o = s.sibling;
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
      return i = t.type, r = t.pendingProps.children, Ln(t, n), i = Be(i), r = r(i), t.flags |= 1, ge(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = He(r, t.pendingProps), i = He(r.type, i), ac(e, t, r, i, n);
    case 15:
      return Ap(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : He(r, i), Oi(e, t), t.tag = 1, Te(r) ? (e = !0, ts(t)) : e = !1, Ln(t, n), Pp(t, r, i), al(t, r, i, n), fl(null, t, r, !0, e, n);
    case 19:
      return Vp(e, t, n);
    case 22:
      return Dp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function bp(e, t) {
  return Sd(e, t);
}
function Yy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ie(e, t, n, r) {
  return new Yy(e, t, n, r);
}
function Da(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Zy(e) {
  if (typeof e == "function") return Da(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ql) return 11;
    if (e === bl) return 14;
  }
  return 2;
}
function Vt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ie(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ui(e, t, n, r, i, s) {
  var o = 2;
  if (r = e, typeof e == "function") Da(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case pn:
      return en(n.children, i, s, t);
    case Gl:
      o = 8, i |= 8;
      break;
    case Vo:
      return e = Ie(12, n, t, i | 2), e.elementType = Vo, e.lanes = s, e;
    case Lo:
      return e = Ie(13, n, t, i), e.elementType = Lo, e.lanes = s, e;
    case No:
      return e = Ie(19, n, t, i), e.elementType = No, e.lanes = s, e;
    case id:
      return Ls(n, i, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case nd:
          o = 10;
          break e;
        case rd:
          o = 9;
          break e;
        case Ql:
          o = 11;
          break e;
        case bl:
          o = 14;
          break e;
        case xt:
          o = 16, r = null;
          break e;
      }
      throw Error(C(130, e == null ? e : typeof e, ""));
  }
  return t = Ie(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t;
}
function en(e, t, n, r) {
  return e = Ie(7, e, r, t), e.lanes = n, e;
}
function Ls(e, t, n, r) {
  return e = Ie(22, e, r, t), e.elementType = id, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function go(e, t, n) {
  return e = Ie(6, e, null, t), e.lanes = n, e;
}
function yo(e, t, n) {
  return t = Ie(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function qy(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ys(0), this.expirationTimes = Ys(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ys(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Ra(e, t, n, r, i, s, o, l, a) {
  return e = new qy(e, t, n, l, a), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Ie(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, da(s), e;
}
function Jy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: dn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Xp(e) {
  if (!e) return Nt;
  e = e._reactInternals;
  e: {
    if (un(e) !== e || e.tag !== 1) throw Error(C(170));
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
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Xd(e, n, t);
  }
  return t;
}
function Yp(e, t, n, r, i, s, o, l, a) {
  return e = Ra(n, r, !0, e, i, s, o, l, a), e.context = Xp(null), n = e.current, r = ye(), i = jt(n), s = lt(r, i), s.callback = t ?? null, Rt(n, s, i), e.current.lanes = i, qr(e, i, r), Pe(e, r), e;
}
function Ns(e, t, n, r) {
  var i = t.current, s = ye(), o = jt(i);
  return n = Xp(n), t.context === null ? t.context = n : t.pendingContext = n, t = lt(s, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Rt(i, t, o), e !== null && (be(e, i, o, s), _i(e, i, o)), o;
}
function hs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ma(e, t) {
  wc(e, t), (e = e.alternate) && wc(e, t);
}
function ev() {
  return null;
}
var Zp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ja(e) {
  this._internalRoot = e;
}
_s.prototype.render = ja.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Ns(e, t, null, null);
};
_s.prototype.unmount = ja.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function() {
      Ns(null, e, null, null);
    }), t[ft] = null;
  }
};
function _s(e) {
  this._internalRoot = e;
}
_s.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Dd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++) ;
    St.splice(n, 0, e), n === 0 && Md(e);
  }
};
function Va(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Fs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Sc() {
}
function tv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var u = hs(o);
        s.call(u);
      };
    }
    var o = Yp(t, r, e, 0, null, !1, !1, "", Sc);
    return e._reactRootContainer = o, e[ft] = o.current, Fr(e.nodeType === 8 ? e.parentNode : e), ln(), o;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = hs(a);
      l.call(u);
    };
  }
  var a = Ra(e, 0, !1, null, null, !1, !1, "", Sc);
  return e._reactRootContainer = a, e[ft] = a.current, Fr(e.nodeType === 8 ? e.parentNode : e), ln(function() {
    Ns(t, a, n, r);
  }), a;
}
function Is(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function() {
        var a = hs(o);
        l.call(a);
      };
    }
    Ns(t, o, e, i);
  } else o = tv(n, t, e, i, r);
  return hs(o);
}
Ed = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cr(t.pendingLanes);
        n !== 0 && (Zl(t, n | 1), Pe(t, Z()), !(F & 6) && (Un = Z() + 500, zt()));
      }
      break;
    case 13:
      ln(function() {
        var r = dt(e, 1);
        if (r !== null) {
          var i = ye();
          be(r, e, 1, i);
        }
      }), Ma(e, 1);
  }
};
ql = function(e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var n = ye();
      be(t, e, 134217728, n);
    }
    Ma(e, 134217728);
  }
};
Ad = function(e) {
  if (e.tag === 13) {
    var t = jt(e), n = dt(e, t);
    if (n !== null) {
      var r = ye();
      be(n, e, t, r);
    }
    Ma(e, t);
  }
};
Dd = function() {
  return I;
};
Rd = function(e, t) {
  var n = I;
  try {
    return I = e, t();
  } finally {
    I = n;
  }
};
Ho = function(e, t, n) {
  switch (t) {
    case "input":
      if (Io(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = As(r);
            if (!i) throw Error(C(90));
            od(r), Io(r, i);
          }
        }
      }
      break;
    case "textarea":
      ad(e, n);
      break;
    case "select":
      t = n.value, t != null && Rn(e, !!n.multiple, t, !1);
  }
};
md = Ca;
gd = ln;
var nv = { usingClientEntryPoint: !1, Events: [ei, yn, As, pd, hd, Ca] }, sr = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rv = { bundleType: sr.bundleType, version: sr.version, rendererPackageName: sr.rendererPackageName, rendererConfig: sr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: mt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = xd(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: sr.findFiberByHostInstance || ev, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ci.isDisabled && Ci.supportsFiber) try {
    Ts = Ci.inject(rv), Je = Ci;
  } catch {
  }
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nv;
je.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Va(t)) throw Error(C(200));
  return Jy(e, t, null, n);
};
je.createRoot = function(e, t) {
  if (!Va(e)) throw Error(C(299));
  var n = !1, r = "", i = Zp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ra(e, 1, !1, null, null, n, !1, r, i), e[ft] = t.current, Fr(e.nodeType === 8 ? e.parentNode : e), new ja(t);
};
je.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = xd(t), e = e === null ? null : e.stateNode, e;
};
je.flushSync = function(e) {
  return ln(e);
};
je.hydrate = function(e, t, n) {
  if (!Fs(t)) throw Error(C(200));
  return Is(null, e, t, !0, n);
};
je.hydrateRoot = function(e, t, n) {
  if (!Va(e)) throw Error(C(405));
  var r = n != null && n.hydratedSources || null, i = !1, s = "", o = Zp;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Yp(t, null, e, 1, n ?? null, i, !1, s, o), e[ft] = t.current, Fr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new _s(t);
};
je.render = function(e, t, n) {
  if (!Fs(t)) throw Error(C(200));
  return Is(null, e, t, !1, n);
};
je.unmountComponentAtNode = function(e) {
  if (!Fs(e)) throw Error(C(40));
  return e._reactRootContainer ? (ln(function() {
    Is(null, null, e, !1, function() {
      e._reactRootContainer = null, e[ft] = null;
    });
  }), !0) : !1;
};
je.unstable_batchedUpdates = Ca;
je.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Fs(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Is(e, t, n, !1, r);
};
je.version = "18.3.1-next-f1338f8080-20240426";
function qp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qp);
    } catch (e) {
      console.error(e);
    }
}
qp(), qf.exports = je;
var iv = qf.exports, Jp, kc = iv;
Jp = kc.createRoot, kc.hydrateRoot;
const sv = '.jwf{--tm-bg: #000000;--tm-surface: #0d0d0d;--tm-fg: #ffffff;--tm-dim: #8a8a8a;--tm-faint: #4a4a4a;--tm-border: #262626;--tm-accent: #ffffff;--tm-accent-fg: #000000;--tm-radius: 14px;--tm-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--tm-font-digit: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--jwf-tabbar-height: 44px;position:relative;display:flex;flex-direction:column;height:100%;min-height:320px;background:var(--tm-bg);color:var(--tm-fg);font-family:var(--tm-font);margin:-1px;border-radius:inherit}.jwf *,.jwf *:before,.jwf *:after{box-sizing:border-box}.jwf button{font-family:inherit;cursor:pointer;border:none;background:none;color:inherit;padding:0;outline:none}.jwf input{font-family:inherit;outline:none}.jwf-tabs{display:flex;align-items:stretch;gap:22px;height:var(--jwf-tabbar-height);padding:0 22px;border-bottom:1px solid var(--tm-border);user-select:none;flex:none}.jwf-tab{position:relative;display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:var(--tm-faint);transition:color .18s ease}.jwf-tab:hover{color:var(--tm-dim)}.jwf-tab[data-active=true]{color:var(--tm-fg)}.jwf-tab[data-active=true]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--tm-accent)}.jwf-tab-dot{width:5px;height:5px;border-radius:999px;background:currentColor;animation:jwf-pulse 2.4s ease-in-out infinite}@keyframes jwf-pulse{0%,to{opacity:1}50%{opacity:.25}}.tm-tab{position:static;flex:1;display:flex;flex-direction:column;align-items:center;gap:28px;padding:34px 32px 30px}.tm-clock{position:absolute;top:calc(var(--jwf-tabbar-height) + 14px);left:18px;font-size:15px;font-weight:300;letter-spacing:-.01em;color:var(--tm-dim);transition:opacity .35s ease;user-select:none}.tm-clock[data-dimmed=true]{opacity:.15}.tm-digits{font-family:var(--tm-font-digit);font-size:72px;line-height:1;font-variant-numeric:tabular-nums;letter-spacing:-.02em;user-select:none;transition:color .5s ease}.tm-digits[data-state=idle]{color:var(--tm-dim)}.tm-digits[data-state=finished]{color:var(--tm-faint)}.tm-label{font-size:11px;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:var(--tm-dim)}.tm-presets{display:flex;flex-wrap:wrap;justify-content:center;gap:7px}.tm-preset{border-radius:999px;padding:7px 15px;font-size:13px;font-weight:500;background:var(--tm-surface);color:var(--tm-dim);border:1px solid var(--tm-border);transition:all .18s ease}.tm-preset:hover{color:var(--tm-fg)}.tm-preset[data-selected=true]{background:var(--tm-accent);color:var(--tm-accent-fg);border-color:var(--tm-accent)}.tm-custom{width:108px;border-radius:10px;border:1px solid var(--tm-border);background:var(--tm-surface);color:var(--tm-fg);padding:8px 12px;text-align:center;font-size:13px}.tm-custom::placeholder{color:var(--tm-faint)}.tm-row{display:flex;align-items:center;gap:10px}.tm-primary{border-radius:999px;padding:11px 34px;font-size:14px;font-weight:500;background:var(--tm-accent);color:var(--tm-accent-fg);transition:opacity .18s ease,transform .12s ease}.tm-primary:hover{opacity:.88}.tm-primary:active{transform:scale(.97)}.tm-circle{width:46px;height:46px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:var(--tm-surface);border:1px solid var(--tm-border);color:var(--tm-fg);transition:background .18s ease,transform .12s ease}.tm-circle:hover{background:var(--tm-border)}.tm-circle:active{transform:scale(.95)}.tm-ghost{font-size:12px;color:var(--tm-dim);transition:color .18s ease}.tm-ghost:hover{color:var(--tm-fg)}.tm-reminders{width:100%;max-width:330px}.tm-reminders-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.tm-reminder{display:flex;align-items:center;justify-content:space-between;padding:10px 13px;border-radius:var(--tm-radius);background:var(--tm-surface);border:1px solid var(--tm-border);margin-bottom:6px}.tm-reminder-label{font-size:13px;color:var(--tm-fg)}.tm-reminder-sub{font-size:11px;color:var(--tm-dim)}.tm-add{display:flex;flex-direction:column;gap:8px;padding:13px;border-radius:var(--tm-radius);background:var(--tm-surface);border:1px solid var(--tm-border);margin-bottom:8px}.tm-add input{border-radius:9px;border:1px solid var(--tm-border);background:var(--tm-bg);color:var(--tm-fg);padding:7px 10px;font-size:13px}.tm-chip{font-size:11px;color:var(--tm-dim);background:var(--tm-surface);border:1px solid var(--tm-border);border-radius:999px;padding:4px 11px}.tm-alert{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;background:color-mix(in srgb,var(--tm-bg) 88%,transparent);backdrop-filter:blur(6px);border-radius:inherit}.tm-alert-card{display:flex;flex-direction:column;align-items:center;gap:18px;padding:32px 36px;border-radius:22px;background:var(--tm-surface);border:1px solid var(--tm-border);max-width:300px;text-align:center}.tm-alert-icon{width:56px;height:56px;border-radius:999px;background:var(--tm-accent);color:var(--tm-accent-fg);display:flex;align-items:center;justify-content:center;font-size:26px}.tm-footer{display:flex;align-items:center;justify-content:center;gap:8px;padding-top:2px}.tm-toggle{display:inline-flex;align-items:center;gap:7px;font-size:11px;color:var(--tm-faint);transition:color .18s ease}.tm-toggle:hover{color:var(--tm-dim)}.tm-toggle-dot{width:7px;height:7px;border-radius:999px;border:1px solid currentColor}.tm-toggle[data-on=true] .tm-toggle-dot{background:currentColor}.jwf-tasks{flex:1;display:flex;flex-direction:column;padding:12px 22px 16px;min-height:0}.jwf-subtabs{display:flex;gap:16px;padding-bottom:8px;border-bottom:1px solid var(--tm-border);user-select:none;flex:none}.jwf-subtab{font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:var(--tm-faint);transition:color .18s ease}.jwf-subtab:hover{color:var(--tm-dim)}.jwf-subtab[data-active=true]{color:var(--tm-fg)}.jwf-filters{display:flex;gap:6px;padding:10px 0 6px;flex:none}.jwf-filter{border-radius:999px;border:1px solid var(--tm-border);background:var(--tm-surface);color:var(--tm-dim);padding:4px 12px;font-size:11px;transition:all .18s ease}.jwf-filter:hover{color:var(--tm-fg)}.jwf-filter[data-active=true]{background:var(--tm-accent);border-color:var(--tm-accent);color:var(--tm-accent-fg)}.jwf-task-list{flex:1;overflow-y:auto;min-height:0;padding-right:4px}.jwf-task{display:flex;align-items:baseline;gap:11px;width:100%;text-align:left;padding:7px 6px;margin-left:-6px;border-radius:8px;font-size:14px;line-height:1.45;transition:background .15s ease}.jwf-task:hover{background:var(--tm-surface)}.jwf-task-text{color:var(--tm-fg);overflow-wrap:anywhere;transition:color .2s ease}.jwf-task-text[data-done=true]{color:var(--tm-faint);text-decoration:line-through;text-decoration-color:var(--tm-faint)}.jwf-task-date{margin-left:auto;flex:none;font-size:11px;font-family:var(--tm-font-digit);color:var(--tm-faint);user-select:none}.jwf-done-empty{font-size:12px;color:var(--tm-faint);text-align:center;padding:14px 0}.jwf-task-input-row{flex:none;padding-top:12px}.jwf-task-input{width:100%;border:none;border-top:1px solid var(--tm-border);background:transparent;color:var(--tm-fg);padding:10px 2px 2px;font-size:14px}.jwf-task-input::placeholder{color:var(--tm-faint)}', Tc = "jwf-styles";
function ov() {
  if (document.getElementById(Tc)) return;
  const e = document.createElement("style");
  e.id = Tc, e.textContent = sv, document.head.append(e);
}
const lv = [
  ["--tm-bg", "--theme-canvas"],
  ["--tm-surface", "--theme-surface"],
  ["--tm-fg", "--theme-ink"],
  ["--tm-dim", "--theme-ink-dim"],
  ["--tm-faint", "--theme-muted"],
  ["--tm-border", "--theme-border"],
  ["--tm-accent", "--theme-accent"],
  ["--tm-accent-fg", "--theme-accent-fg"]
], av = [
  ["--tm-font-digit", "--theme-font-code"]
];
function uv(e, t) {
  const n = getComputedStyle(document.documentElement);
  for (const [r, i] of [...lv, ...av]) {
    if (!t) {
      e.style.removeProperty(r);
      continue;
    }
    const s = n.getPropertyValue(i).trim();
    s && e.style.setProperty(r, s);
  }
}
function cv(e) {
  const t = new MutationObserver(e);
  return t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["data-mode", "data-contrast", "style", "class"]
  }), () => t.disconnect();
}
function fv({
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
const La = P.createContext({});
function Na(e) {
  const t = P.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Os = P.createContext(null), _a = P.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class dv extends P.Component {
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
function pv({ children: e, isPresent: t }) {
  const n = P.useId(), r = P.useRef(null), i = P.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = P.useContext(_a);
  return P.useInsertionEffect(() => {
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
  }, [t]), S.jsx(dv, { isPresent: t, childRef: r, sizeRef: i, children: P.cloneElement(e, { ref: r }) });
}
const hv = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o }) => {
  const l = Na(mv), a = P.useId(), u = P.useCallback((f) => {
    l.set(f, !0);
    for (const d of l.values())
      if (!d)
        return;
    r && r();
  }, [l, r]), c = P.useMemo(
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
  return P.useMemo(() => {
    l.forEach((f, d) => l.set(d, !1));
  }, [n]), P.useEffect(() => {
    !n && !l.size && r && r();
  }, [n]), o === "popLayout" && (e = S.jsx(pv, { isPresent: n, children: e })), S.jsx(Os.Provider, { value: c, children: e });
};
function mv() {
  return /* @__PURE__ */ new Map();
}
function eh(e = !0) {
  const t = P.useContext(Os);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, s = P.useId();
  P.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = P.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Ei = (e) => e.key || "";
function Pc(e) {
  const t = [];
  return P.Children.forEach(e, (n) => {
    P.isValidElement(n) && t.push(n);
  }), t;
}
const Fa = typeof window < "u", th = Fa ? P.useLayoutEffect : P.useEffect, Kr = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: s = "sync", propagate: o = !1 }) => {
  const [l, a] = eh(o), u = P.useMemo(() => Pc(e), [e]), c = o && !l ? [] : u.map(Ei), f = P.useRef(!0), d = P.useRef(u), g = Na(() => /* @__PURE__ */ new Map()), [y, v] = P.useState(u), [k, h] = P.useState(u);
  th(() => {
    f.current = !1, d.current = u;
    for (let x = 0; x < k.length; x++) {
      const w = Ei(k[x]);
      c.includes(w) ? g.delete(w) : g.get(w) !== !0 && g.set(w, !1);
    }
  }, [k, c.length, c.join("-")]);
  const p = [];
  if (u !== y) {
    let x = [...u];
    for (let w = 0; w < k.length; w++) {
      const E = k[w], A = Ei(E);
      c.includes(A) || (x.splice(w, 0, E), p.push(E));
    }
    s === "wait" && p.length && (x = p), h(Pc(x)), v(u);
    return;
  }
  const { forceRender: m } = P.useContext(La);
  return S.jsx(S.Fragment, { children: k.map((x) => {
    const w = Ei(x), E = o && !l ? !1 : u === k || c.includes(w), A = () => {
      if (g.has(w))
        g.set(w, !0);
      else
        return;
      let T = !0;
      g.forEach((N) => {
        N || (T = !1);
      }), T && (m?.(), h(d.current), o && a?.(), r && r());
    };
    return S.jsx(hv, { isPresent: E, initial: !f.current || n ? void 0 : !1, custom: E ? void 0 : t, presenceAffectsLayout: i, mode: s, onExitComplete: E ? void 0 : A, children: x }, w);
  }) });
}, De = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let nh = De;
// @__NO_SIDE_EFFECTS__
function Ia(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const $n = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, at = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ut = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, gv = {
  useManualTiming: !1
};
function yv(e) {
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
const Ai = [
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
], vv = 40;
function rh(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, o = Ai.reduce((h, p) => (h[p] = yv(s), h), {}), { read: l, resolveKeyframes: a, update: u, preRender: c, render: f, postRender: d } = o, g = () => {
    const h = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, vv), 1), i.timestamp = h, i.isProcessing = !0, l.process(i), a.process(i), u.process(i), c.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(g));
  }, y = () => {
    n = !0, r = !0, i.isProcessing || e(g);
  };
  return { schedule: Ai.reduce((h, p) => {
    const m = o[p];
    return h[p] = (x, w = !1, E = !1) => (n || y(), m.schedule(x, w, E)), h;
  }, {}), cancel: (h) => {
    for (let p = 0; p < Ai.length; p++)
      o[Ai[p]].cancel(h);
  }, state: i, steps: o };
}
const { schedule: U, cancel: _t, state: le, steps: vo } = rh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : De, !0), ih = P.createContext({ strict: !1 }), Cc = {
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
}, Wn = {};
for (const e in Cc)
  Wn[e] = {
    isEnabled: (t) => Cc[e].some((n) => !!t[n])
  };
function xv(e) {
  for (const t in e)
    Wn[t] = {
      ...Wn[t],
      ...e[t]
    };
}
const wv = /* @__PURE__ */ new Set([
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
function ms(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || wv.has(e);
}
let sh = (e) => !ms(e);
function Sv(e) {
  e && (sh = (t) => t.startsWith("on") ? !ms(t) : e(t));
}
try {
  Sv(require("@emotion/is-prop-valid").default);
} catch {
}
function kv(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (sh(i) || n === !0 && ms(i) || !t && !ms(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
function Tv(e) {
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
const zs = P.createContext({});
function Gr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Bs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Oa = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], za = ["initial", ...Oa];
function Us(e) {
  return Bs(e.animate) || za.some((t) => Gr(e[t]));
}
function oh(e) {
  return !!(Us(e) || e.variants);
}
function Pv(e, t) {
  if (Us(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Gr(n) ? n : void 0,
      animate: Gr(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Cv(e) {
  const { initial: t, animate: n } = Pv(e, P.useContext(zs));
  return P.useMemo(() => ({ initial: t, animate: n }), [Ec(t), Ec(n)]);
}
function Ec(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Ev = Symbol.for("motionComponentSymbol");
function Pn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Av(e, t, n) {
  return P.useCallback(
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
const Ba = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Dv = "framerAppearId", lh = "data-" + Ba(Dv), { schedule: Ua } = rh(queueMicrotask, !1), ah = P.createContext({});
function Rv(e, t, n, r, i) {
  var s, o;
  const { visualElement: l } = P.useContext(zs), a = P.useContext(ih), u = P.useContext(Os), c = P.useContext(_a).reducedMotion, f = P.useRef(null);
  r = r || a.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: l,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = f.current, g = P.useContext(ah);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && Mv(f.current, n, i, g);
  const y = P.useRef(!1);
  P.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const v = n[lh], k = P.useRef(!!v && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, v)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, v)));
  return th(() => {
    d && (y.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), Ua.render(d.render), k.current && d.animationState && d.animationState.animateChanges());
  }), P.useEffect(() => {
    d && (!k.current && d.animationState && d.animationState.animateChanges(), k.current && (queueMicrotask(() => {
      var h;
      (h = window.MotionHandoffMarkAsComplete) === null || h === void 0 || h.call(window, v);
    }), k.current = !1));
  }), d;
}
function Mv(e, t, n, r) {
  const { layoutId: i, layout: s, drag: o, dragConstraints: l, layoutScroll: a, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : uh(e.parent)), e.projection.setOptions({
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
function uh(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : uh(e.parent);
}
function jv({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  var s, o;
  e && xv(e);
  function l(u, c) {
    let f;
    const d = {
      ...P.useContext(_a),
      ...u,
      layoutId: Vv(u)
    }, { isStatic: g } = d, y = Cv(u), v = r(u, g);
    if (!g && Fa) {
      Lv();
      const k = Nv(d);
      f = k.MeasureLayout, y.visualElement = Rv(i, v, d, t, k.ProjectionNode);
    }
    return S.jsxs(zs.Provider, { value: y, children: [f && y.visualElement ? S.jsx(f, { visualElement: y.visualElement, ...d }) : null, n(i, u, Av(v, y.visualElement, c), v, g, y.visualElement)] });
  }
  l.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const a = P.forwardRef(l);
  return a[Ev] = i, a;
}
function Vv({ layoutId: e }) {
  const t = P.useContext(La).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Lv(e, t) {
  P.useContext(ih).strict;
}
function Nv(e) {
  const { drag: t, layout: n } = Wn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const _v = [
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
function $a(e) {
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
      !!(_v.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Ac(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Wa(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Ac(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, s] = Ac(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const Tl = (e) => Array.isArray(e), Fv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Iv = (e) => Tl(e) ? e[e.length - 1] || 0 : e, he = (e) => !!(e && e.getVelocity);
function $i(e) {
  const t = he(e) ? e.get() : e;
  return Fv(t) ? t.toValue() : t;
}
function Ov({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, s) {
  const o = {
    latestValues: zv(r, i, s, e),
    renderState: t()
  };
  return n && (o.onMount = (l) => n({ props: r, current: l, ...o }), o.onUpdate = (l) => n(l)), o;
}
const ch = (e) => (t, n) => {
  const r = P.useContext(zs), i = P.useContext(Os), s = () => Ov(e, t, r, i);
  return n ? s() : Na(s);
};
function zv(e, t, n, r) {
  const i = {}, s = r(e, {});
  for (const d in s)
    i[d] = $i(s[d]);
  let { initial: o, animate: l } = e;
  const a = Us(e), u = oh(e);
  t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? l : o;
  if (f && typeof f != "boolean" && !Bs(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = Wa(e, d[g]);
      if (y) {
        const { transitionEnd: v, transition: k, ...h } = y;
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
const bn = [
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
], cn = new Set(bn), fh = (e) => (t) => typeof t == "string" && t.startsWith(e), dh = /* @__PURE__ */ fh("--"), Bv = /* @__PURE__ */ fh("var(--"), Ha = (e) => Bv(e) ? Uv.test(e.split("/*")[0].trim()) : !1, Uv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, ph = (e, t) => t && typeof e == "number" ? t.transform(e) : e, ht = (e, t, n) => n > t ? t : n < e ? e : n, Xn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Qr = {
  ...Xn,
  transform: (e) => ht(0, 1, e)
}, Di = {
  ...Xn,
  default: 1
}, ni = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), vt = /* @__PURE__ */ ni("deg"), tt = /* @__PURE__ */ ni("%"), M = /* @__PURE__ */ ni("px"), $v = /* @__PURE__ */ ni("vh"), Wv = /* @__PURE__ */ ni("vw"), Dc = {
  ...tt,
  parse: (e) => tt.parse(e) / 100,
  transform: (e) => tt.transform(e * 100)
}, Hv = {
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
}, Kv = {
  rotate: vt,
  rotateX: vt,
  rotateY: vt,
  rotateZ: vt,
  scale: Di,
  scaleX: Di,
  scaleY: Di,
  scaleZ: Di,
  skew: vt,
  skewX: vt,
  skewY: vt,
  distance: M,
  translateX: M,
  translateY: M,
  translateZ: M,
  x: M,
  y: M,
  z: M,
  perspective: M,
  transformPerspective: M,
  opacity: Qr,
  originX: Dc,
  originY: Dc,
  originZ: M
}, Rc = {
  ...Xn,
  transform: Math.round
}, Ka = {
  ...Hv,
  ...Kv,
  zIndex: Rc,
  size: M,
  // SVG
  fillOpacity: Qr,
  strokeOpacity: Qr,
  numOctaves: Rc
}, Gv = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Qv = bn.length;
function bv(e, t, n) {
  let r = "", i = !0;
  for (let s = 0; s < Qv; s++) {
    const o = bn[s], l = e[o];
    if (l === void 0)
      continue;
    let a = !0;
    if (typeof l == "number" ? a = l === (o.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0, !a || n) {
      const u = ph(l, Ka[o]);
      if (!a) {
        i = !1;
        const c = Gv[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function Ga(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1, l = !1;
  for (const a in t) {
    const u = t[a];
    if (cn.has(a)) {
      o = !0;
      continue;
    } else if (dh(a)) {
      i[a] = u;
      continue;
    } else {
      const c = ph(u, Ka[a]);
      a.startsWith("origin") ? (l = !0, s[a] = c) : r[a] = c;
    }
  }
  if (t.transform || (o || n ? r.transform = bv(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: a = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${a} ${u} ${c}`;
  }
}
const Xv = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Yv = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Zv(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Xv : Yv;
  e[s.offset] = M.transform(-r);
  const o = M.transform(t), l = M.transform(n);
  e[s.array] = `${o} ${l}`;
}
function Mc(e, t, n) {
  return typeof e == "string" ? e : M.transform(t + n * e);
}
function qv(e, t, n) {
  const r = Mc(t, e.x, e.width), i = Mc(n, e.y, e.height);
  return `${r} ${i}`;
}
function Qa(e, {
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
  if (Ga(e, u, f), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform), y && (i !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = qv(y, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), o !== void 0 && Zv(d, o, l, a, !1);
}
const ba = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), hh = () => ({
  ...ba(),
  attrs: {}
}), Xa = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function mh(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const gh = /* @__PURE__ */ new Set([
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
function yh(e, t, n, r) {
  mh(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(gh.has(i) ? i : Ba(i), t.attrs[i]);
}
const gs = {};
function Jv(e) {
  Object.assign(gs, e);
}
function vh(e, { layout: t, layoutId: n }) {
  return cn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!gs[e] || e === "opacity");
}
function Ya(e, t, n) {
  var r;
  const { style: i } = e, s = {};
  for (const o in i)
    (he(i[o]) || t.style && he(t.style[o]) || vh(o, e) || ((r = n?.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
  return s;
}
function xh(e, t, n) {
  const r = Ya(e, t, n);
  for (const i in e)
    if (he(e[i]) || he(t[i])) {
      const s = bn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
function e0(e, t) {
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
const jc = ["x", "y", "width", "height", "cx", "cy", "r"], t0 = {
  useVisualState: ch({
    scrapeMotionValuesFromProps: xh,
    createRenderState: hh,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
      if (!n)
        return;
      let s = !!e.drag;
      if (!s) {
        for (const l in i)
          if (cn.has(l)) {
            s = !0;
            break;
          }
      }
      if (!s)
        return;
      let o = !t;
      if (t)
        for (let l = 0; l < jc.length; l++) {
          const a = jc[l];
          e[a] !== t[a] && (o = !0);
        }
      o && U.read(() => {
        e0(n, r), U.render(() => {
          Qa(r, i, Xa(n.tagName), e.transformTemplate), yh(n, r);
        });
      });
    }
  })
}, n0 = {
  useVisualState: ch({
    scrapeMotionValuesFromProps: Ya,
    createRenderState: ba
  })
};
function wh(e, t, n) {
  for (const r in t)
    !he(t[r]) && !vh(r, n) && (e[r] = t[r]);
}
function r0({ transformTemplate: e }, t) {
  return P.useMemo(() => {
    const n = ba();
    return Ga(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function i0(e, t) {
  const n = e.style || {}, r = {};
  return wh(r, n, e), Object.assign(r, r0(e, t)), r;
}
function s0(e, t) {
  const n = {}, r = i0(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function o0(e, t, n, r) {
  const i = P.useMemo(() => {
    const s = hh();
    return Qa(s, t, Xa(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    wh(s, e.style, e), i.style = { ...s, ...i.style };
  }
  return i;
}
function l0(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = ($a(n) ? o0 : s0)(r, s, o, n), u = kv(r, typeof n == "string", e), c = n !== P.Fragment ? { ...u, ...a, ref: i } : {}, { children: f } = r, d = P.useMemo(() => he(f) ? f.get() : f, [f]);
    return P.createElement(n, {
      ...c,
      children: d
    });
  };
}
function a0(e, t) {
  return function(r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...$a(r) ? t0 : n0,
      preloadedFeatures: e,
      useRender: l0(i),
      createVisualElement: t,
      Component: r
    };
    return jv(o);
  };
}
function Sh(e, t) {
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
function $s(e, t, n) {
  const r = e.getProps();
  return Wa(r, t, n !== void 0 ? n : r.custom, e);
}
const u0 = /* @__PURE__ */ Ia(() => window.ScrollTimeline !== void 0);
class c0 {
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
      if (u0() && i.attachTimeline)
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
class f0 extends c0 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Za(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Pl = 2e4;
function kh(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Pl; )
    t += n, r = e.next(t);
  return t >= Pl ? 1 / 0 : t;
}
function qa(e) {
  return typeof e == "function";
}
function Vc(e, t) {
  e.timeline = t, e.onfinish = null;
}
const Ja = (e) => Array.isArray(e) && typeof e[0] == "number", d0 = {
  linearEasing: void 0
};
function p0(e, t) {
  const n = /* @__PURE__ */ Ia(e);
  return () => {
    var r;
    return (r = d0[t]) !== null && r !== void 0 ? r : n();
  };
}
const ys = /* @__PURE__ */ p0(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Th = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < i; s++)
    r += e(/* @__PURE__ */ $n(0, i - 1, s)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function Ph(e) {
  return !!(typeof e == "function" && ys() || !e || typeof e == "string" && (e in Cl || ys()) || Ja(e) || Array.isArray(e) && e.every(Ph));
}
const dr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Cl = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ dr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ dr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ dr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ dr([0.33, 1.53, 0.69, 0.99])
};
function Ch(e, t) {
  if (e)
    return typeof e == "function" && ys() ? Th(e, t) : Ja(e) ? dr(e) : Array.isArray(e) ? e.map((n) => Ch(n, t) || Cl.easeOut) : Cl[e];
}
const We = {
  x: !1,
  y: !1
};
function Eh() {
  return We.x || We.y;
}
function h0(e, t, n) {
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
function Ah(e, t) {
  const n = h0(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Lc(e) {
  return (t) => {
    t.pointerType === "touch" || Eh() || e(t);
  };
}
function m0(e, t, n = {}) {
  const [r, i, s] = Ah(e, n), o = Lc((l) => {
    const { target: a } = l, u = t(l);
    if (typeof u != "function" || !a)
      return;
    const c = Lc((f) => {
      u(f), a.removeEventListener("pointerleave", c);
    });
    a.addEventListener("pointerleave", c, i);
  });
  return r.forEach((l) => {
    l.addEventListener("pointerenter", o, i);
  }), s;
}
const Dh = (e, t) => t ? e === t ? !0 : Dh(e, t.parentElement) : !1, eu = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, g0 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function y0(e) {
  return g0.has(e.tagName) || e.tabIndex !== -1;
}
const pr = /* @__PURE__ */ new WeakSet();
function Nc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function xo(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const v0 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Nc(() => {
    if (pr.has(n))
      return;
    xo(n, "down");
    const i = Nc(() => {
      xo(n, "up");
    }), s = () => xo(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function _c(e) {
  return eu(e) && !Eh();
}
function x0(e, t, n = {}) {
  const [r, i, s] = Ah(e, n), o = (l) => {
    const a = l.currentTarget;
    if (!_c(l) || pr.has(a))
      return;
    pr.add(a);
    const u = t(l), c = (g, y) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!_c(g) || !pr.has(a)) && (pr.delete(a), typeof u == "function" && u(g, { success: y }));
    }, f = (g) => {
      c(g, n.useGlobalTarget || Dh(a, g.target));
    }, d = (g) => {
      c(g, !1);
    };
    window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i);
  };
  return r.forEach((l) => {
    !y0(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0), (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i), l.addEventListener("focus", (u) => v0(u, i), i);
  }), s;
}
function w0(e) {
  return e === "x" || e === "y" ? We[e] ? null : (We[e] = !0, () => {
    We[e] = !1;
  }) : We.x || We.y ? null : (We.x = We.y = !0, () => {
    We.x = We.y = !1;
  });
}
const Rh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...bn
]);
let Wi;
function S0() {
  Wi = void 0;
}
const nt = {
  now: () => (Wi === void 0 && nt.set(le.isProcessing || gv.useManualTiming ? le.timestamp : performance.now()), Wi),
  set: (e) => {
    Wi = e, queueMicrotask(S0);
  }
};
function tu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function nu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ru {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return tu(this.subscriptions, t), () => nu(this.subscriptions, t);
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
function Mh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Fc = 30, k0 = (e) => !isNaN(parseFloat(e));
class T0 {
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
    this.current = t, this.updatedAt = nt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = k0(this.current));
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
    this.events[t] || (this.events[t] = new ru());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), U.read(() => {
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
    return this.current;
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Fc)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Fc);
    return Mh(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function br(e, t) {
  return new T0(e, t);
}
function P0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, br(n));
}
function C0(e, t) {
  const n = $s(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const l = Iv(s[o]);
    P0(e, o, l);
  }
}
function E0(e) {
  return !!(he(e) && e.add);
}
function El(e, t) {
  const n = e.getValue("willChange");
  if (E0(n))
    return n.add(t);
}
function jh(e) {
  return e.props[lh];
}
const Vh = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, A0 = 1e-7, D0 = 12;
function R0(e, t, n, r, i) {
  let s, o, l = 0;
  do
    o = t + (n - t) / 2, s = Vh(o, r, i) - e, s > 0 ? n = o : t = o;
  while (Math.abs(s) > A0 && ++l < D0);
  return o;
}
function ri(e, t, n, r) {
  if (e === t && n === r)
    return De;
  const i = (s) => R0(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Vh(i(s), t, r);
}
const Lh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Nh = (e) => (t) => 1 - e(1 - t), _h = /* @__PURE__ */ ri(0.33, 1.53, 0.69, 0.99), iu = /* @__PURE__ */ Nh(_h), Fh = /* @__PURE__ */ Lh(iu), Ih = (e) => (e *= 2) < 1 ? 0.5 * iu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), su = (e) => 1 - Math.sin(Math.acos(e)), Oh = Nh(su), zh = Lh(su), Bh = (e) => /^0[^.\s]+$/u.test(e);
function M0(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Bh(e) : !0;
}
const Pr = (e) => Math.round(e * 1e5) / 1e5, ou = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function j0(e) {
  return e == null;
}
const V0 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, lu = (e, t) => (n) => !!(typeof n == "string" && V0.test(n) && n.startsWith(e) || t && !j0(n) && Object.prototype.hasOwnProperty.call(n, t)), Uh = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, s, o, l] = r.match(ou);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, L0 = (e) => ht(0, 255, e), wo = {
  ...Xn,
  transform: (e) => Math.round(L0(e))
}, qt = {
  test: /* @__PURE__ */ lu("rgb", "red"),
  parse: /* @__PURE__ */ Uh("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + wo.transform(e) + ", " + wo.transform(t) + ", " + wo.transform(n) + ", " + Pr(Qr.transform(r)) + ")"
};
function N0(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Al = {
  test: /* @__PURE__ */ lu("#"),
  parse: N0,
  transform: qt.transform
}, Cn = {
  test: /* @__PURE__ */ lu("hsl", "hue"),
  parse: /* @__PURE__ */ Uh("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + tt.transform(Pr(t)) + ", " + tt.transform(Pr(n)) + ", " + Pr(Qr.transform(r)) + ")"
}, de = {
  test: (e) => qt.test(e) || Al.test(e) || Cn.test(e),
  parse: (e) => qt.test(e) ? qt.parse(e) : Cn.test(e) ? Cn.parse(e) : Al.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? qt.transform(e) : Cn.transform(e)
}, _0 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function F0(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ou)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(_0)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const $h = "number", Wh = "color", I0 = "var", O0 = "var(", Ic = "${}", z0 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Xr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let s = 0;
  const l = t.replace(z0, (a) => (de.test(a) ? (r.color.push(s), i.push(Wh), n.push(de.parse(a))) : a.startsWith(O0) ? (r.var.push(s), i.push(I0), n.push(a)) : (r.number.push(s), i.push($h), n.push(parseFloat(a))), ++s, Ic)).split(Ic);
  return { values: n, split: l, indexes: r, types: i };
}
function Hh(e) {
  return Xr(e).values;
}
function Kh(e) {
  const { split: t, types: n } = Xr(e), r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (s += t[o], i[o] !== void 0) {
        const l = n[o];
        l === $h ? s += Pr(i[o]) : l === Wh ? s += de.transform(i[o]) : s += i[o];
      }
    return s;
  };
}
const B0 = (e) => typeof e == "number" ? 0 : e;
function U0(e) {
  const t = Hh(e);
  return Kh(e)(t.map(B0));
}
const Ft = {
  test: F0,
  parse: Hh,
  createTransformer: Kh,
  getAnimatableNone: U0
}, $0 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function W0(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ou) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let s = $0.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const H0 = /\b([a-z-]*)\(.*?\)/gu, Dl = {
  ...Ft,
  getAnimatableNone: (e) => {
    const t = e.match(H0);
    return t ? t.map(W0).join(" ") : e;
  }
}, K0 = {
  ...Ka,
  // Color props
  color: de,
  backgroundColor: de,
  outlineColor: de,
  fill: de,
  stroke: de,
  // Border props
  borderColor: de,
  borderTopColor: de,
  borderRightColor: de,
  borderBottomColor: de,
  borderLeftColor: de,
  filter: Dl,
  WebkitFilter: Dl
}, au = (e) => K0[e];
function Gh(e, t) {
  let n = au(e);
  return n !== Dl && (n = Ft), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const G0 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Q0(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !G0.has(s) && Xr(s).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const s of t)
      e[s] = Gh(n, i);
}
const Oc = (e) => e === Xn || e === M, zc = (e, t) => parseFloat(e.split(", ")[t]), Bc = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return zc(i[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? zc(s[1], e) : 0;
  }
}, b0 = /* @__PURE__ */ new Set(["x", "y", "z"]), X0 = bn.filter((e) => !b0.has(e));
function Y0(e) {
  const t = [];
  return X0.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Hn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Bc(4, 13),
  y: Bc(5, 14)
};
Hn.translateX = Hn.x;
Hn.translateY = Hn.y;
const tn = /* @__PURE__ */ new Set();
let Rl = !1, Ml = !1;
function Qh() {
  if (Ml) {
    const e = Array.from(tn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = Y0(r);
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
  Ml = !1, Rl = !1, tn.forEach((e) => e.complete()), tn.clear();
}
function bh() {
  tn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ml = !0);
  });
}
function Z0() {
  bh(), Qh();
}
class uu {
  constructor(t, n, r, i, s, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (tn.add(this), Rl || (Rl = !0, U.read(bh), U.resolveKeyframes(Qh))) : (this.readKeyframes(), this.complete());
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
const Xh = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), q0 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function J0(e) {
  const t = q0.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Yh(e, t, n = 1) {
  const [r, i] = J0(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return Xh(o) ? parseFloat(o) : o;
  }
  return Ha(i) ? Yh(i, t, n + 1) : i;
}
const Zh = (e) => (t) => t.test(e), e1 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, qh = [Xn, M, tt, vt, Wv, $v, e1], Uc = (e) => qh.find(Zh(e));
class Jh extends uu {
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
      if (typeof u == "string" && (u = u.trim(), Ha(u))) {
        const c = Yh(u, n.current);
        c !== void 0 && (t[a] = c), a === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Rh.has(r) || t.length !== 2)
      return;
    const [i, s] = t, o = Uc(i), l = Uc(s);
    if (o !== l)
      if (Oc(o) && Oc(l))
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
      M0(t[i]) && r.push(i);
    r.length && Q0(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Hn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    i[o] = Hn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a, u]) => {
      n.getValue(a).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const $c = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ft.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function t1(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function n1(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], o = $c(i, t), l = $c(s, t);
  return !o || !l ? !1 : t1(e) || (n === "spring" || qa(n)) && r;
}
const r1 = (e) => e !== null;
function Ws(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(r1), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const i1 = 40;
class em {
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > i1 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Z0(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = nt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: s, delay: o, onComplete: l, onUpdate: a, isGenerator: u } = this.options;
    if (!u && !n1(t, r, i, s))
      if (o)
        this.options.duration = 0;
      else {
        a && a(Ws(t, this.options, n)), l && l(), this.resolveFinishedPromise();
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
function So(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function s1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, s = 0, o = 0;
  if (!t)
    i = s = o = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - l;
    i = So(a, l, e + 1 / 3), s = So(a, l, e), o = So(a, l, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function vs(e, t) {
  return (n) => n > 0 ? t : e;
}
const ko = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, o1 = [Al, qt, Cn], l1 = (e) => o1.find((t) => t.test(e));
function Wc(e) {
  const t = l1(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Cn && (n = s1(n)), n;
}
const Hc = (e, t) => {
  const n = Wc(e), r = Wc(t);
  if (!n || !r)
    return vs(e, t);
  const i = { ...n };
  return (s) => (i.red = ko(n.red, r.red, s), i.green = ko(n.green, r.green, s), i.blue = ko(n.blue, r.blue, s), i.alpha = H(n.alpha, r.alpha, s), qt.transform(i));
}, a1 = (e, t) => (n) => t(e(n)), ii = (...e) => e.reduce(a1), jl = /* @__PURE__ */ new Set(["none", "hidden"]);
function u1(e, t) {
  return jl.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function c1(e, t) {
  return (n) => H(e, t, n);
}
function cu(e) {
  return typeof e == "number" ? c1 : typeof e == "string" ? Ha(e) ? vs : de.test(e) ? Hc : p1 : Array.isArray(e) ? tm : typeof e == "object" ? de.test(e) ? Hc : f1 : vs;
}
function tm(e, t) {
  const n = [...e], r = n.length, i = e.map((s, o) => cu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++)
      n[o] = i[o](s);
    return n;
  };
}
function f1(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = cu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}
function d1(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s], l = e.indexes[o][i[o]], a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[s] = a, i[o]++;
  }
  return r;
}
const p1 = (e, t) => {
  const n = Ft.createTransformer(t), r = Xr(e), i = Xr(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? jl.has(e) && !i.values.length || jl.has(t) && !r.values.length ? u1(e, t) : ii(tm(d1(r, i), i.values), n) : vs(e, t);
};
function nm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? H(e, t, n) : cu(e)(e, t);
}
const h1 = 5;
function rm(e, t, n) {
  const r = Math.max(t - h1, 0);
  return Mh(n - e(r), t - r);
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
}, To = 1e-3;
function m1({ duration: e = Q.duration, bounce: t = Q.bounce, velocity: n = Q.velocity, mass: r = Q.mass }) {
  let i, s, o = 1 - t;
  o = ht(Q.minDamping, Q.maxDamping, o), e = ht(Q.minDuration, Q.maxDuration, /* @__PURE__ */ ut(e)), o < 1 ? (i = (u) => {
    const c = u * o, f = c * e, d = c - n, g = Vl(u, o), y = Math.exp(-f);
    return To - d / g * y;
  }, s = (u) => {
    const f = u * o * e, d = f * n + n, g = Math.pow(o, 2) * Math.pow(u, 2) * e, y = Math.exp(-f), v = Vl(Math.pow(u, 2), o);
    return (-i(u) + To > 0 ? -1 : 1) * ((d - g) * y) / v;
  }) : (i = (u) => {
    const c = Math.exp(-u * e), f = (u - n) * e + 1;
    return -To + c * f;
  }, s = (u) => {
    const c = Math.exp(-u * e), f = (n - u) * (e * e);
    return c * f;
  });
  const l = 5 / e, a = y1(i, s, l);
  if (e = /* @__PURE__ */ at(e), isNaN(a))
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
const g1 = 12;
function y1(e, t, n) {
  let r = n;
  for (let i = 1; i < g1; i++)
    r = r - e(r) / t(r);
  return r;
}
function Vl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const v1 = ["duration", "bounce"], x1 = ["stiffness", "damping", "mass"];
function Kc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function w1(e) {
  let t = {
    velocity: Q.velocity,
    stiffness: Q.stiffness,
    damping: Q.damping,
    mass: Q.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Kc(e, x1) && Kc(e, v1))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, s = 2 * ht(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: Q.mass,
        stiffness: i,
        damping: s
      };
    } else {
      const n = m1(e);
      t = {
        ...t,
        ...n,
        mass: Q.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function im(e = Q.visualDuration, t = Q.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], l = { done: !1, value: s }, { stiffness: a, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: g } = w1({
    ...n,
    velocity: -/* @__PURE__ */ ut(n.velocity || 0)
  }), y = d || 0, v = u / (2 * Math.sqrt(a * c)), k = o - s, h = /* @__PURE__ */ ut(Math.sqrt(a / c)), p = Math.abs(k) < 5;
  r || (r = p ? Q.restSpeed.granular : Q.restSpeed.default), i || (i = p ? Q.restDelta.granular : Q.restDelta.default);
  let m;
  if (v < 1) {
    const w = Vl(h, v);
    m = (E) => {
      const A = Math.exp(-v * h * E);
      return o - A * ((y + v * h * k) / w * Math.sin(w * E) + k * Math.cos(w * E));
    };
  } else if (v === 1)
    m = (w) => o - Math.exp(-h * w) * (k + (y + h * k) * w);
  else {
    const w = h * Math.sqrt(v * v - 1);
    m = (E) => {
      const A = Math.exp(-v * h * E), T = Math.min(w * E, 300);
      return o - A * ((y + v * h * k) * Math.sinh(T) + w * k * Math.cosh(T)) / w;
    };
  }
  const x = {
    calculatedDuration: g && f || null,
    next: (w) => {
      const E = m(w);
      if (g)
        l.done = w >= f;
      else {
        let A = 0;
        v < 1 && (A = w === 0 ? /* @__PURE__ */ at(y) : rm(m, w, E));
        const T = Math.abs(A) <= r, N = Math.abs(o - E) <= i;
        l.done = T && N;
      }
      return l.value = l.done ? o : E, l;
    },
    toString: () => {
      const w = Math.min(kh(x), Pl), E = Th((A) => x.next(w * A).value, w, 30);
      return w + "ms " + E;
    }
  };
  return x;
}
function Gc({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: l, max: a, restDelta: u = 0.5, restSpeed: c }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, g = (T) => l !== void 0 && T < l || a !== void 0 && T > a, y = (T) => l === void 0 ? a : a === void 0 || Math.abs(l - T) < Math.abs(a - T) ? l : a;
  let v = n * t;
  const k = f + v, h = o === void 0 ? k : o(k);
  h !== k && (v = h - f);
  const p = (T) => -v * Math.exp(-T / r), m = (T) => h + p(T), x = (T) => {
    const N = p(T), j = m(T);
    d.done = Math.abs(N) <= u, d.value = d.done ? h : j;
  };
  let w, E;
  const A = (T) => {
    g(d.value) && (w = T, E = im({
      keyframes: [d.value, y(d.value)],
      velocity: rm(m, T, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: s,
      restDelta: u,
      restSpeed: c
    }));
  };
  return A(0), {
    calculatedDuration: null,
    next: (T) => {
      let N = !1;
      return !E && w === void 0 && (N = !0, x(T), A(T)), w !== void 0 && T >= w ? E.next(T - w) : (!N && x(T), d);
    }
  };
}
const S1 = /* @__PURE__ */ ri(0.42, 0, 1, 1), k1 = /* @__PURE__ */ ri(0, 0, 0.58, 1), sm = /* @__PURE__ */ ri(0.42, 0, 0.58, 1), T1 = (e) => Array.isArray(e) && typeof e[0] != "number", P1 = {
  linear: De,
  easeIn: S1,
  easeInOut: sm,
  easeOut: k1,
  circIn: su,
  circInOut: zh,
  circOut: Oh,
  backIn: iu,
  backInOut: Fh,
  backOut: _h,
  anticipate: Ih
}, Qc = (e) => {
  if (Ja(e)) {
    nh(e.length === 4);
    const [t, n, r, i] = e;
    return ri(t, n, r, i);
  } else if (typeof e == "string")
    return P1[e];
  return e;
};
function C1(e, t, n) {
  const r = [], i = n || nm, s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[o] || De : t;
      l = ii(a, l);
    }
    r.push(l);
  }
  return r;
}
function E1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (nh(s === t.length), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const l = C1(t, r, i), a = l.length, u = (c) => {
    if (o && c < e[0])
      return t[0];
    let f = 0;
    if (a > 1)
      for (; f < e.length - 2 && !(c < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ $n(e[f], e[f + 1], c);
    return l[f](d);
  };
  return n ? (c) => u(ht(e[0], e[s - 1], c)) : u;
}
function A1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ $n(0, t, r);
    e.push(H(n, 1, i));
  }
}
function D1(e) {
  const t = [0];
  return A1(t, e.length - 1), t;
}
function R1(e, t) {
  return e.map((n) => n * t);
}
function M1(e, t) {
  return e.map(() => t || sm).splice(0, e.length - 1);
}
function xs({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = T1(r) ? r.map(Qc) : Qc(r), s = {
    done: !1,
    value: t[0]
  }, o = R1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : D1(t),
    e
  ), l = E1(o, t, {
    ease: Array.isArray(i) ? i : M1(t, i)
  });
  return {
    calculatedDuration: e,
    next: (a) => (s.value = l(a), s.done = a >= e, s)
  };
}
const j1 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => U.update(t, !0),
    stop: () => _t(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => le.isProcessing ? le.timestamp : nt.now()
  };
}, V1 = {
  decay: Gc,
  inertia: Gc,
  tween: xs,
  keyframes: xs,
  spring: im
}, L1 = (e) => e / 100;
class fu extends em {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: a } = this.options;
      a && a();
    };
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options, o = i?.KeyframeResolver || uu, l = (a, u) => this.onKeyframesResolved(a, u);
    this.resolver = new o(s, l, n, r, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: o = 0 } = this.options, l = qa(n) ? n : V1[n] || xs;
    let a, u;
    l !== xs && typeof t[0] != "number" && (a = ii(L1, nm(t[0], t[1])), t = [0, 100]);
    const c = l({ ...this.options, keyframes: t });
    s === "mirror" && (u = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -o
    })), c.calculatedDuration === null && (c.calculatedDuration = kh(c));
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
      const { keyframes: T } = this.options;
      return { done: !0, value: T[T.length - 1] };
    }
    const { finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: d, repeat: g, repeatType: y, repeatDelay: v, onUpdate: k } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const h = this.currentTime - d * (this.speed >= 0 ? 1 : -1), p = this.speed >= 0 ? h < 0 : h > c;
    this.currentTime = Math.max(h, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let m = this.currentTime, x = s;
    if (g) {
      const T = Math.min(this.currentTime, c) / f;
      let N = Math.floor(T), j = T % 1;
      !j && T >= 1 && (j = 1), j === 1 && N--, N = Math.min(N, g + 1), !!(N % 2) && (y === "reverse" ? (j = 1 - j, v && (j -= v / f)) : y === "mirror" && (x = o)), m = ht(0, 1, j) * f;
    }
    const w = p ? { done: !1, value: a[0] } : x.next(m);
    l && (w.value = l(w.value));
    let { done: E } = w;
    !p && u !== null && (E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
    return A && i !== void 0 && (w.value = Ws(a, this.options, i)), k && k(w.value), A && this.finish(), w;
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
    const { driver: t = j1, onPlay: n, startTime: r } = this.options;
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
const N1 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function _1(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = "loop", ease: l = "easeInOut", times: a } = {}) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = Ch(l, i);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
const F1 = /* @__PURE__ */ Ia(() => Object.hasOwnProperty.call(Element.prototype, "animate")), ws = 10, I1 = 2e4;
function O1(e) {
  return qa(e.type) || e.type === "spring" || !Ph(e.ease);
}
function z1(e, t) {
  const n = new fu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < I1; )
    r = n.sample(s), i.push(r.value), s += ws;
  return {
    times: void 0,
    keyframes: i,
    duration: s - ws,
    ease: "linear"
  };
}
const om = {
  anticipate: Ih,
  backInOut: Fh,
  circInOut: zh
};
function B1(e) {
  return e in om;
}
class bc extends em {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    this.resolver = new Jh(s, (o, l) => this.onKeyframesResolved(o, l), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: i, ease: s, type: o, motionValue: l, name: a, startTime: u } = this.options;
    if (!l.owner || !l.owner.current)
      return !1;
    if (typeof s == "string" && ys() && B1(s) && (s = om[s]), O1(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: g, element: y, ...v } = this.options, k = z1(t, v);
      t = k.keyframes, t.length === 1 && (t[1] = t[0]), r = k.duration, i = k.times, s = k.ease, o = "keyframes";
    }
    const c = _1(l.owner.current, a, t, { ...this.options, duration: r, times: i, ease: s });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (Vc(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: f } = this.options;
      l.set(Ws(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
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
        return De;
      const { animation: r } = n;
      Vc(r, t);
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
      const { motionValue: u, onUpdate: c, onComplete: f, element: d, ...g } = this.options, y = new fu({
        ...g,
        keyframes: r,
        duration: i,
        type: s,
        ease: o,
        times: l,
        isGenerator: !0
      }), v = /* @__PURE__ */ at(this.time);
      u.setWithVelocity(y.sample(v - ws).value, y.sample(v).value, ws);
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
    return F1() && r && N1.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !a && !u && !i && s !== "mirror" && o !== 0 && l !== "inertia";
  }
}
const U1 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, $1 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), W1 = {
  type: "keyframes",
  duration: 0.8
}, H1 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, K1 = (e, { keyframes: t }) => t.length > 2 ? W1 : cn.has(e) ? e.startsWith("scale") ? $1(t[1]) : U1 : H1;
function G1({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const du = (e, t, n, r = {}, i, s) => (o) => {
  const l = Za(r, e) || {}, a = l.delay || r.delay || 0;
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
  G1(l) || (c = {
    ...c,
    ...K1(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ at(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ at(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !s && t.get() !== void 0) {
    const d = Ws(c.keyframes, l);
    if (d !== void 0)
      return U.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new f0([]);
  }
  return !s && bc.supports(c) ? new bc(c) : new fu(c);
};
function Q1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function lm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
  r && (o = r);
  const u = [], c = i && e.animationState && e.animationState.getState()[i];
  for (const f in a) {
    const d = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null), g = a[f];
    if (g === void 0 || c && Q1(c, f))
      continue;
    const y = {
      delay: n,
      ...Za(o || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const h = jh(e);
      if (h) {
        const p = window.MotionHandoffAnimation(h, f, U);
        p !== null && (y.startTime = p, v = !0);
      }
    }
    El(e, f), d.start(du(f, d, g, e.shouldReduceMotion && Rh.has(f) ? { type: !1 } : y, e, v));
    const k = d.animation;
    k && u.push(k);
  }
  return l && Promise.all(u).then(() => {
    U.update(() => {
      l && C0(e, l);
    });
  }), u;
}
function Ll(e, t, n = {}) {
  var r;
  const i = $s(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(lm(e, i, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = s;
    return b1(e, t, c + u, f, d, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, l] : [l, o];
    return u().then(() => c());
  } else
    return Promise.all([o(), l(n.delay)]);
}
function b1(e, t, n = 0, r = 0, i = 1, s) {
  const o = [], l = (e.variantChildren.size - 1) * r, a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return Array.from(e.variantChildren).sort(X1).forEach((u, c) => {
    u.notify("AnimationStart", t), o.push(Ll(u, t, {
      ...s,
      delay: n + a(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(o);
}
function X1(e, t) {
  return e.sortNodePosition(t);
}
function Y1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => Ll(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = Ll(e, t, n);
  else {
    const i = typeof t == "function" ? $s(e, t, n.custom) : t;
    r = Promise.all(lm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const Z1 = za.length;
function am(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? am(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Z1; n++) {
    const r = za[n], i = e.props[r];
    (Gr(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const q1 = [...Oa].reverse(), J1 = Oa.length;
function ex(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Y1(e, n, r)));
}
function tx(e) {
  let t = ex(e), n = Xc(), r = !0;
  const i = (a) => (u, c) => {
    var f;
    const d = $s(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
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
    const { props: u } = e, c = am(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let g = {}, y = 1 / 0;
    for (let k = 0; k < J1; k++) {
      const h = q1[k], p = n[h], m = u[h] !== void 0 ? u[h] : c[h], x = Gr(m), w = h === a ? p.isActive : null;
      w === !1 && (y = k);
      let E = m === c[h] && m !== u[h] && x;
      if (E && r && e.manuallyAnimateOnMount && (E = !1), p.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !p.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !m && !p.prevProp || // Or if the prop doesn't define an animation
      Bs(m) || typeof m == "boolean")
        continue;
      const A = nx(p.prevProp, m);
      let T = A || // If we're making this variant active, we want to always make it active
      h === a && p.isActive && !E && x || // If we removed a higher-priority variant (i is in reverse order)
      k > y && x, N = !1;
      const j = Array.isArray(m) ? m : [m];
      let ne = j.reduce(i(h), {});
      w === !1 && (ne = {});
      const { prevResolvedValues: gt = {} } = p, Ut = {
        ...gt,
        ...ne
      }, Zn = (J) => {
        T = !0, d.has(J) && (N = !0, d.delete(J)), p.needsAnimating[J] = !0;
        const D = e.getValue(J);
        D && (D.liveStyle = !1);
      };
      for (const J in Ut) {
        const D = ne[J], V = gt[J];
        if (g.hasOwnProperty(J))
          continue;
        let L = !1;
        Tl(D) && Tl(V) ? L = !Sh(D, V) : L = D !== V, L ? D != null ? Zn(J) : d.add(J) : D !== void 0 && d.has(J) ? Zn(J) : p.protectedKeys[J] = !0;
      }
      p.prevProp = m, p.prevResolvedValues = ne, p.isActive && (g = { ...g, ...ne }), r && e.blockInitialAnimation && (T = !1), T && (!(E && A) || N) && f.push(...j.map((J) => ({
        animation: J,
        options: { type: h }
      })));
    }
    if (d.size) {
      const k = {};
      d.forEach((h) => {
        const p = e.getBaseTarget(h), m = e.getValue(h);
        m && (m.liveStyle = !0), k[h] = p ?? null;
      }), f.push({ animation: k });
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
      n = Xc(), r = !0;
    }
  };
}
function nx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Sh(t, e) : !1;
}
function Ht(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Xc() {
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
class rx extends Bt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = tx(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Bs(t) && (this.unmountControls = t.subscribe(this.node));
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
let ix = 0;
class sx extends Bt {
  constructor() {
    super(...arguments), this.id = ix++;
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
const ox = {
  animation: {
    Feature: rx
  },
  exit: {
    Feature: sx
  }
};
function Yr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function si(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const lx = (e) => (t) => eu(t) && e(t, si(t));
function Cr(e, t, n, r) {
  return Yr(e, t, lx(n), r);
}
const Yc = (e, t) => Math.abs(e - t);
function ax(e, t) {
  const n = Yc(e.x, t.x), r = Yc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class um {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Co(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, g = ax(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !g)
        return;
      const { point: y } = f, { timestamp: v } = le;
      this.history.push({ ...y, timestamp: v });
      const { onStart: k, onMove: h } = this.handlers;
      d || (k && k(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Po(d, this.transformPagePoint), U.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const k = Co(f.type === "pointercancel" ? this.lastMoveEventInfo : Po(d, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, k), y && y(f, k);
    }, !eu(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const o = si(t), l = Po(o, this.transformPagePoint), { point: a } = l, { timestamp: u } = le;
    this.history = [{ ...a, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Co(l, this.history)), this.removeListeners = ii(Cr(this.contextWindow, "pointermove", this.handlePointerMove), Cr(this.contextWindow, "pointerup", this.handlePointerUp), Cr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), _t(this.updatePoint);
  }
}
function Po(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Zc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Co({ point: e }, t) {
  return {
    point: e,
    delta: Zc(e, cm(t)),
    offset: Zc(e, ux(t)),
    velocity: cx(t, 0.1)
  };
}
function ux(e) {
  return e[0];
}
function cm(e) {
  return e[e.length - 1];
}
function cx(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = cm(e);
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
const fm = 1e-4, fx = 1 - fm, dx = 1 + fm, dm = 0.01, px = 0 - dm, hx = 0 + dm;
function Me(e) {
  return e.max - e.min;
}
function mx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function qc(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = H(t.min, t.max, e.origin), e.scale = Me(n) / Me(t), e.translate = H(n.min, n.max, e.origin) - e.originPoint, (e.scale >= fx && e.scale <= dx || isNaN(e.scale)) && (e.scale = 1), (e.translate >= px && e.translate <= hx || isNaN(e.translate)) && (e.translate = 0);
}
function Er(e, t, n, r) {
  qc(e.x, t.x, n.x, r ? r.originX : void 0), qc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Jc(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Me(t);
}
function gx(e, t, n) {
  Jc(e.x, t.x, n.x), Jc(e.y, t.y, n.y);
}
function ef(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Me(t);
}
function Ar(e, t, n) {
  ef(e.x, t.x, n.x), ef(e.y, t.y, n.y);
}
function yx(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? H(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)), e;
}
function tf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function vx(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: tf(e.x, n, i),
    y: tf(e.y, t, r)
  };
}
function nf(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function xx(e, t) {
  return {
    x: nf(e.x, t.x),
    y: nf(e.y, t.y)
  };
}
function wx(e, t) {
  let n = 0.5;
  const r = Me(e), i = Me(t);
  return i > r ? n = /* @__PURE__ */ $n(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ $n(e.min, e.max - i, t.min)), ht(0, 1, n);
}
function Sx(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Nl = 0.35;
function kx(e = Nl) {
  return e === !1 ? e = 0 : e === !0 && (e = Nl), {
    x: rf(e, "left", "right"),
    y: rf(e, "top", "bottom")
  };
}
function rf(e, t, n) {
  return {
    min: sf(e, t),
    max: sf(e, n)
  };
}
function sf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const of = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), En = () => ({
  x: of(),
  y: of()
}), lf = () => ({ min: 0, max: 0 }), Y = () => ({
  x: lf(),
  y: lf()
});
function Ne(e) {
  return [e("x"), e("y")];
}
function pm({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Tx({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Px(e, t) {
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
function Eo(e) {
  return e === void 0 || e === 1;
}
function _l({ scale: e, scaleX: t, scaleY: n }) {
  return !Eo(e) || !Eo(t) || !Eo(n);
}
function Qt(e) {
  return _l(e) || hm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function hm(e) {
  return af(e.x) || af(e.y);
}
function af(e) {
  return e && e !== "0%";
}
function Ss(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function uf(e, t, n, r, i) {
  return i !== void 0 && (e = Ss(e, i, r)), Ss(e, n, r) + t;
}
function Fl(e, t = 0, n = 1, r, i) {
  e.min = uf(e.min, t, n, r, i), e.max = uf(e.max, t, n, r, i);
}
function mm(e, { x: t, y: n }) {
  Fl(e.x, t.translate, t.scale, t.originPoint), Fl(e.y, n.translate, n.scale, n.originPoint);
}
const cf = 0.999999999999, ff = 1.0000000000001;
function Cx(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let s, o;
  for (let l = 0; l < i; l++) {
    s = n[l], o = s.projectionDelta;
    const { visualElement: a } = s.options;
    a && a.props.style && a.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Dn(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, mm(e, o)), r && Qt(s.latestValues) && Dn(e, s.latestValues));
  }
  t.x < ff && t.x > cf && (t.x = 1), t.y < ff && t.y > cf && (t.y = 1);
}
function An(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function df(e, t, n, r, i = 0.5) {
  const s = H(e.min, e.max, i);
  Fl(e, t, n, s, r);
}
function Dn(e, t) {
  df(e.x, t.x, t.scaleX, t.scale, t.originX), df(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function gm(e, t) {
  return pm(Px(e.getBoundingClientRect(), t));
}
function Ex(e, t, n) {
  const r = gm(e, n), { scroll: i } = t;
  return i && (An(r.x, i.offset.x), An(r.y, i.offset.y)), r;
}
const ym = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Ax = /* @__PURE__ */ new WeakMap();
class Dx {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Y(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(si(c).point);
    }, s = (c, f) => {
      const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
      if (d && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = w0(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ne((k) => {
        let h = this.getAxisMotionValue(k).get() || 0;
        if (tt.test(h)) {
          const { projection: p } = this.visualElement;
          if (p && p.layout) {
            const m = p.layout.layoutBox[k];
            m && (h = Me(m) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[k] = h;
      }), y && U.postRender(() => y(c, f)), El(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, o = (c, f) => {
      const { dragPropagation: d, dragDirectionLock: g, onDirectionLock: y, onDrag: v } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: k } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = Rx(k), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, k), this.updateAxis("y", f.point, k), this.visualElement.render(), v && v(c, f);
    }, l = (c, f) => this.stop(c, f), a = () => Ne((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new um(t, {
      onSessionStart: i,
      onStart: s,
      onMove: o,
      onSessionEnd: l,
      resumeAnimation: a
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: ym(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && U.postRender(() => s(t, n));
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
    if (!r || !Ri(t, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = yx(o, this.constraints[t], this.elastic[t])), s.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && Pn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = vx(i.layoutBox, n) : this.constraints = !1, this.elastic = kx(r), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Ne((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Sx(i.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Pn(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const s = Ex(r, i.root, this.visualElement.getTransformPagePoint());
    let o = xx(i.layout.layoutBox, s);
    if (n) {
      const l = n(Tx(o));
      this.hasMutatedConstraints = !!l, l && (o = pm(l));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l } = this.getProps(), a = this.constraints || {}, u = Ne((c) => {
      if (!Ri(c, n, this.currentDirection))
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
    return El(this.visualElement, t), r.start(du(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Ne((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ne((t) => {
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
    Ne((n) => {
      const { drag: r } = this.getProps();
      if (!Ri(n, r, this.currentDirection))
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
    if (!Pn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ne((o) => {
      const l = this.getAxisMotionValue(o);
      if (l && this.constraints !== !1) {
        const a = l.get();
        i[o] = wx({ min: a, max: a }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Ne((o) => {
      if (!Ri(o, t, null))
        return;
      const l = this.getAxisMotionValue(o), { min: a, max: u } = this.constraints[o];
      l.set(H(a, u, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Ax.set(this.visualElement, this);
    const t = this.visualElement.current, n = Cr(t, "pointerdown", (a) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(a);
    }), r = () => {
      const { dragConstraints: a } = this.getProps();
      Pn(a) && a.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), U.read(r);
    const o = Yr(window, "resize", () => this.scalePositionWithinConstraints()), l = i.addEventListener("didUpdate", ({ delta: a, hasLayoutChanged: u }) => {
      this.isDragging && u && (Ne((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += a[c].translate, f.set(f.get() + a[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = Nl, dragMomentum: l = !0 } = t;
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
function Ri(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Rx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Mx extends Bt {
  constructor(t) {
    super(t), this.removeGroupControls = De, this.removeListeners = De, this.controls = new Dx(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || De;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const pf = (e) => (t, n) => {
  e && U.postRender(() => e(t, n));
};
class jx extends Bt {
  constructor() {
    super(...arguments), this.removePointerDownListener = De;
  }
  onPointerDown(t) {
    this.session = new um(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ym(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: pf(t),
      onStart: pf(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && U.postRender(() => i(s, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Cr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Hi = {
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
function hf(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const or = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (M.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = hf(e, t.target.x), r = hf(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Vx = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = Ft.parse(e);
    if (i.length > 5)
      return r;
    const s = Ft.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, l = n.x.scale * t.x, a = n.y.scale * t.y;
    i[0 + o] /= l, i[1 + o] /= a;
    const u = H(l, a, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i);
  }
};
class Lx extends P.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = t;
    Jv(Nx), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Hi.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, o = r.projection;
    return o && (o.isPresent = s, i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || U.postRender(() => {
      const l = o.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ua.postRender(() => {
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
function vm(e) {
  const [t, n] = eh(), r = P.useContext(La);
  return S.jsx(Lx, { ...e, layoutGroup: r, switchLayoutGroup: P.useContext(ah), isPresent: t, safeToRemove: n });
}
const Nx = {
  borderRadius: {
    ...or,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: or,
  borderTopRightRadius: or,
  borderBottomLeftRadius: or,
  borderBottomRightRadius: or,
  boxShadow: Vx
};
function _x(e, t, n) {
  const r = he(e) ? e : br(e);
  return r.start(du("", r, t, n)), r.animation;
}
function Fx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Ix = (e, t) => e.depth - t.depth;
class Ox {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    tu(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    nu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Ix), this.isDirty = !1, this.children.forEach(t);
  }
}
function zx(e, t) {
  const n = nt.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= t && (_t(r), e(s - t));
  };
  return U.read(r, !0), () => _t(r);
}
const xm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Bx = xm.length, mf = (e) => typeof e == "string" ? parseFloat(e) : e, gf = (e) => typeof e == "number" || M.test(e);
function Ux(e, t, n, r, i, s) {
  i ? (e.opacity = H(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    $x(r)
  ), e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, Wx(r))) : s && (e.opacity = H(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let o = 0; o < Bx; o++) {
    const l = `border${xm[o]}Radius`;
    let a = yf(t, l), u = yf(n, l);
    if (a === void 0 && u === void 0)
      continue;
    a || (a = 0), u || (u = 0), a === 0 || u === 0 || gf(a) === gf(u) ? (e[l] = Math.max(H(mf(a), mf(u), r), 0), (tt.test(u) || tt.test(a)) && (e[l] += "%")) : e[l] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function yf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const $x = /* @__PURE__ */ wm(0, 0.5, Oh), Wx = /* @__PURE__ */ wm(0.5, 0.95, De);
function wm(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ $n(e, t, r));
}
function vf(e, t) {
  e.min = t.min, e.max = t.max;
}
function Le(e, t) {
  vf(e.x, t.x), vf(e.y, t.y);
}
function xf(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function wf(e, t, n, r, i) {
  return e -= t, e = Ss(e, 1 / n, r), i !== void 0 && (e = Ss(e, 1 / i, r)), e;
}
function Hx(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (tt.test(t) && (t = parseFloat(t), t = H(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let l = H(s.min, s.max, r);
  e === s && (l -= t), e.min = wf(e.min, t, n, l, i), e.max = wf(e.max, t, n, l, i);
}
function Sf(e, t, [n, r, i], s, o) {
  Hx(e, t[n], t[r], t[i], t.scale, s, o);
}
const Kx = ["x", "scaleX", "originX"], Gx = ["y", "scaleY", "originY"];
function kf(e, t, n, r) {
  Sf(e.x, t, Kx, n ? n.x : void 0, r ? r.x : void 0), Sf(e.y, t, Gx, n ? n.y : void 0, r ? r.y : void 0);
}
function Tf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Sm(e) {
  return Tf(e.x) && Tf(e.y);
}
function Pf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Qx(e, t) {
  return Pf(e.x, t.x) && Pf(e.y, t.y);
}
function Cf(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function km(e, t) {
  return Cf(e.x, t.x) && Cf(e.y, t.y);
}
function Ef(e) {
  return Me(e.x) / Me(e.y);
}
function Af(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class bx {
  constructor() {
    this.members = [];
  }
  add(t) {
    tu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (nu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function Xx(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, s = e.y.translate / t.y, o = n?.z || 0;
  if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: g, skewY: y } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), y && (r += `skewY(${y}deg) `);
  }
  const l = e.x.scale * t.x, a = e.y.scale * t.y;
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none";
}
const bt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, hr = typeof window < "u" && window.MotionDebug !== void 0, Ao = ["", "X", "Y", "Z"], Yx = { visibility: "hidden" }, Df = 1e3;
let Zx = 0;
function Do(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Tm(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = jh(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Tm(r);
}
function Pm({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, l = t?.()) {
      this.id = Zx++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, hr && (bt.totalNodes = bt.resolvedTargetDeltas = bt.recalculatedProjection = 0), this.nodes.forEach(ew), this.nodes.forEach(sw), this.nodes.forEach(ow), this.nodes.forEach(tw), hr && window.MotionDebug.record(bt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Ox());
    }
    addEventListener(o, l) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new ru()), this.eventHandlers.get(o).add(l);
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
      this.isSVG = Fx(o), this.instance = o;
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(o, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = zx(d, 250), Hi.hasAnimatedSinceResize && (Hi.hasAnimatedSinceResize = !1, this.nodes.forEach(Mf));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || c.getDefaultTransition() || fw, { onLayoutAnimationStart: k, onLayoutAnimationComplete: h } = c.getProps(), p = !this.targetLayout || !km(this.targetLayout, y) || g, m = !d && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (p || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
          const x = {
            ...Za(v, "layout"),
            onPlay: k,
            onComplete: h
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          d || Mf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, _t(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(lw), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Tm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Rf);
        return;
      }
      this.isUpdating || this.nodes.forEach(rw), this.isUpdating = !1, this.nodes.forEach(iw), this.nodes.forEach(qx), this.nodes.forEach(Jx), this.clearAllSnapshots();
      const l = nt.now();
      le.delta = ht(0, 1e3 / 60, l - le.timestamp), le.timestamp = l, le.isProcessing = !0, vo.update.process(le), vo.preRender.process(le), vo.render.process(le), le.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ua.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(nw), this.sharedNodes.forEach(aw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, U.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      U.postRender(() => {
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
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !Sm(this.projectionDelta), a = this.getTransformTemplate(), u = a ? a(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && (l || Qt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return o && (a = this.removeTransform(a)), dw(a), {
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
      if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(pw))) {
        const { scroll: c } = this.root;
        c && (An(a.x, c.offset.x), An(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Y();
      if (Le(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && Le(a, o), An(a.x, f.offset.x), An(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, l = !1) {
      const a = Y();
      Le(a, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l && c.options.layoutScroll && c.scroll && c !== c.root && Dn(a, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Qt(c.latestValues) && Dn(a, c.latestValues);
      }
      return Qt(this.latestValues) && Dn(a, this.latestValues), a;
    }
    removeTransform(o) {
      const l = Y();
      Le(l, o);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !Qt(u.latestValues))
          continue;
        _l(u.latestValues) && u.updateSnapshot();
        const c = Y(), f = u.measurePageBox();
        Le(c, f), kf(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Qt(this.latestValues) && kf(l, this.latestValues), l;
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
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), Ar(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Y(), this.targetWithTransforms = Y()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), gx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Le(this.target, this.layout.layoutBox), mm(this.target, this.targetDelta)) : Le(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Y(), this.relativeTargetOrigin = Y(), Ar(this.relativeTargetOrigin, this.target, g.target), Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          hr && bt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || _l(this.parent.latestValues) || hm(this.parent.latestValues)))
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
      Le(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, g = this.treeScale.y;
      Cx(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = Y());
      const { target: y } = l;
      if (!y) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (xf(this.prevProjectionDelta.x, this.projectionDelta.x), xf(this.prevProjectionDelta.y, this.projectionDelta.y)), Er(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !Af(this.projectionDelta.x, this.prevProjectionDelta.x) || !Af(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), hr && bt.recalculatedProjection++;
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
      this.prevProjectionDelta = En(), this.projectionDelta = En(), this.projectionDeltaWithTransform = En();
    }
    setAnimationOrigin(o, l = !1) {
      const a = this.snapshot, u = a ? a.latestValues : {}, c = { ...this.latestValues }, f = En();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const d = Y(), g = a ? a.source : void 0, y = this.layout ? this.layout.source : void 0, v = g !== y, k = this.getStack(), h = !k || k.members.length <= 1, p = !!(v && !h && this.options.crossfade === !0 && !this.path.some(cw));
      this.animationProgress = 0;
      let m;
      this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        jf(f.x, o.x, w), jf(f.y, o.y, w), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ar(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), uw(this.relativeTarget, this.relativeTargetOrigin, d, w), m && Qx(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = Y()), Le(m, this.relativeTarget)), v && (this.animationValues = c, Ux(c, u, this.latestValues, w, p, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (_t(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = U.update(() => {
        Hi.hasAnimatedSinceResize = !0, this.currentAnimation = _x(0, Df, {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Df), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = o;
      if (!(!l || !a || !u)) {
        if (this !== o && this.layout && u && Cm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          a = this.target || Y();
          const f = Me(this.layout.layoutBox.x);
          a.x.min = o.target.x.min, a.x.max = a.x.min + f;
          const d = Me(this.layout.layoutBox.y);
          a.y.min = o.target.y.min, a.y.max = a.y.min + d;
        }
        Le(l, a), Dn(l, c), Er(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new bx()), this.sharedNodes.get(o).add(l);
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
      a.z && Do("z", o, u, this.animationValues);
      for (let c = 0; c < Ao.length; c++)
        Do(`rotate${Ao[c]}`, o, u, this.animationValues), Do(`skew${Ao[c]}`, o, u, this.animationValues);
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
        return Yx;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = $i(o?.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = $i(o?.pointerEvents) || ""), this.hasProjected && !Qt(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = Xx(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in gs) {
        if (d[v] === void 0)
          continue;
        const { correct: k, applyTo: h } = gs[v], p = u.transform === "none" ? d[v] : k(d[v], f);
        if (h) {
          const m = h.length;
          for (let x = 0; x < m; x++)
            u[h[x]] = p;
        } else
          u[v] = p;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? $i(o?.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var l;
        return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(Rf), this.root.sharedNodes.clear();
    }
  };
}
function qx(e) {
  e.updateLayout();
}
function Jx(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: s } = e.options, o = n.source !== e.layout.source;
    s === "size" ? Ne((f) => {
      const d = o ? n.measuredBox[f] : n.layoutBox[f], g = Me(d);
      d.min = r[f].min, d.max = d.min + g;
    }) : Cm(s, n.layoutBox, r) && Ne((f) => {
      const d = o ? n.measuredBox[f] : n.layoutBox[f], g = Me(r[f]);
      d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const l = En();
    Er(l, r, n.layoutBox);
    const a = En();
    o ? Er(a, e.applyTransform(i, !0), n.measuredBox) : Er(a, r, n.layoutBox);
    const u = !Sm(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = Y();
          Ar(y, n.layoutBox, d.layoutBox);
          const v = Y();
          Ar(v, r, g.layoutBox), km(y, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = y, e.relativeParent = f);
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
function ew(e) {
  hr && bt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function tw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function nw(e) {
  e.clearSnapshot();
}
function Rf(e) {
  e.clearMeasurements();
}
function rw(e) {
  e.isLayoutDirty = !1;
}
function iw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Mf(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function sw(e) {
  e.resolveTargetDelta();
}
function ow(e) {
  e.calcProjection();
}
function lw(e) {
  e.resetSkewAndRotation();
}
function aw(e) {
  e.removeLeadSnapshot();
}
function jf(e, t, n) {
  e.translate = H(t.translate, 0, n), e.scale = H(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Vf(e, t, n, r) {
  e.min = H(t.min, n.min, r), e.max = H(t.max, n.max, r);
}
function uw(e, t, n, r) {
  Vf(e.x, t.x, n.x, r), Vf(e.y, t.y, n.y, r);
}
function cw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const fw = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Lf = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Nf = Lf("applewebkit/") && !Lf("chrome/") ? Math.round : De;
function _f(e) {
  e.min = Nf(e.min), e.max = Nf(e.max);
}
function dw(e) {
  _f(e.x), _f(e.y);
}
function Cm(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !mx(Ef(t), Ef(n), 0.2);
}
function pw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const hw = Pm({
  attachResizeListener: (e, t) => Yr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ro = {
  current: void 0
}, Em = Pm({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Ro.current) {
      const e = new hw({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Ro.current = e;
    }
    return Ro.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), mw = {
  pan: {
    Feature: jx
  },
  drag: {
    Feature: Mx,
    ProjectionNode: Em,
    MeasureLayout: vm
  }
};
function Ff(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, s = r[i];
  s && U.postRender(() => s(t, si(t)));
}
class gw extends Bt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = m0(t, (n) => (Ff(this.node, n, "Start"), (r) => Ff(this.node, r, "End"))));
  }
  unmount() {
  }
}
class yw extends Bt {
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
    this.unmount = ii(Yr(this.node.current, "focus", () => this.onFocus()), Yr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function If(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), s = r[i];
  s && U.postRender(() => s(t, si(t)));
}
class vw extends Bt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = x0(t, (n) => (If(this.node, n, "Start"), (r, { success: i }) => If(this.node, r, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Il = /* @__PURE__ */ new WeakMap(), Mo = /* @__PURE__ */ new WeakMap(), xw = (e) => {
  const t = Il.get(e.target);
  t && t(e);
}, ww = (e) => {
  e.forEach(xw);
};
function Sw({ root: e, ...t }) {
  const n = e || document;
  Mo.has(n) || Mo.set(n, {});
  const r = Mo.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(ww, { root: e, ...t })), r[i];
}
function kw(e, t, n) {
  const r = Sw(t);
  return Il.set(e, n), r.observe(e), () => {
    Il.delete(e), r.unobserve(e);
  };
}
const Tw = {
  some: 0,
  all: 1
};
class Pw extends Bt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Tw[i]
    }, l = (a) => {
      const { isIntersecting: u } = a;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
      d && d(a);
    };
    return kw(this.node.current, o, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Cw(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Cw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Ew = {
  inView: {
    Feature: Pw
  },
  tap: {
    Feature: vw
  },
  focus: {
    Feature: yw
  },
  hover: {
    Feature: gw
  }
}, Aw = {
  layout: {
    ProjectionNode: Em,
    MeasureLayout: vm
  }
}, Ol = { current: null }, Am = { current: !1 };
function Dw() {
  if (Am.current = !0, !!Fa)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ol.current = e.matches;
      e.addListener(t), t();
    } else
      Ol.current = !1;
}
const Rw = [...qh, de, Ft], Mw = (e) => Rw.find(Zh(e)), Of = /* @__PURE__ */ new WeakMap();
function jw(e, t, n) {
  for (const r in t) {
    const i = t[r], s = n[r];
    if (he(i))
      e.addValue(r, i);
    else if (he(s))
      e.addValue(r, br(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, br(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const zf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Vw {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = uu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = nt.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, U.render(this.render, !1, !0));
    };
    const { latestValues: a, renderState: u, onUpdate: c } = o;
    this.onUpdate = c, this.latestValues = a, this.baseTarget = { ...a }, this.initialValues = n.initial ? { ...a } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = Us(n), this.isVariantNode = oh(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in d) {
      const y = d[g];
      a[g] !== void 0 && he(y) && y.set(a[g], !1);
    }
  }
  mount(t) {
    this.current = t, Of.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Am.current || Dw(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ol.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Of.delete(this.current), this.projection && this.projection.unmount(), _t(this.notifyUpdate), _t(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = cn.has(t), i = n.on("change", (l) => {
      this.latestValues[t] = l, this.props.onUpdate && U.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
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
    for (t in Wn) {
      const n = Wn[t];
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
    for (let r = 0; r < zf.length; r++) {
      const i = zf[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = "on" + i, o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = jw(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = br(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (Xh(i) || Bh(i)) ? i = parseFloat(i) : !Mw(i) && Ft.test(n) && (i = Gh(t, n)), this.setBaseTarget(t, he(i) ? i.get() : i)), he(i) ? i.get() : i;
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
      const o = Wa(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      o && (i = o[t]);
    }
    if (r && i !== void 0)
      return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !he(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ru()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Dm extends Vw {
  constructor() {
    super(...arguments), this.KeyframeResolver = Jh;
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
    he(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Lw(e) {
  return window.getComputedStyle(e);
}
class Nw extends Dm {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = mh;
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = au(n);
      return r && r.default || 0;
    } else {
      const r = Lw(t), i = (dh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return gm(t, n);
  }
  build(t, n, r) {
    Ga(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ya(t, n, r);
  }
}
class _w extends Dm {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Y;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (cn.has(n)) {
      const r = au(n);
      return r && r.default || 0;
    }
    return n = gh.has(n) ? n : Ba(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return xh(t, n, r);
  }
  build(t, n, r) {
    Qa(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    yh(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = Xa(t.tagName), super.mount(t);
  }
}
const Fw = (e, t) => $a(e) ? new _w(t) : new Nw(t, {
  allowProjection: e !== P.Fragment
}), Iw = /* @__PURE__ */ a0({
  ...ox,
  ...Ew,
  ...mw,
  ...Aw
}, Fw), ze = /* @__PURE__ */ Tv(Iw), Ow = [
  { id: "today", label: "Today" },
  { id: "week", label: "7 days" },
  { id: "all", label: "All" }
];
function Rm() {
  const e = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), e.getTime();
}
function zw(e) {
  const t = new Date(e);
  return t.getTime() >= Rm() ? t.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : t.toLocaleDateString([], { month: "short", day: "numeric" });
}
function Bw({
  state: e,
  send: t
}) {
  const [n, r] = P.useState("todo"), [i, s] = P.useState("all"), [o, l] = P.useState(""), a = e.tasks.filter((d) => !d.done), u = e.tasks.filter((d) => d.done).sort((d, g) => (g.doneAt ?? 0) - (d.doneAt ?? 0)), c = u.filter((d) => i === "all" || d.doneAt == null ? !0 : d.doneAt >= (i === "today" ? Rm() : Date.now() - 7 * 864e5)), f = () => {
    const d = o.trim();
    d.length !== 0 && (t({ type: "add", text: d }), l(""));
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
      /* @__PURE__ */ S.jsx("div", { className: "jwf-task-list", role: "list", children: /* @__PURE__ */ S.jsx(Kr, { initial: !1, children: a.map((d) => /* @__PURE__ */ S.jsx(Bf, { task: d, send: t }, d.id)) }) }),
      /* @__PURE__ */ S.jsx("div", { className: "jwf-task-input-row", children: /* @__PURE__ */ S.jsx(
        "input",
        {
          autoFocus: !0,
          className: "jwf-task-input",
          type: "text",
          "aria-label": "Add a task",
          maxLength: jm,
          placeholder: "Add a task…",
          value: o,
          onChange: (d) => l(d.target.value),
          onKeyDown: (d) => {
            if (d.stopPropagation(), d.key === "Enter")
              d.preventDefault(), f();
            else if (d.key === "Backspace" && o.length === 0) {
              const g = a.at(-1);
              g && t({ type: "remove", id: g.id });
            }
          }
        }
      ) })
    ] }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx("div", { className: "jwf-filters", children: Ow.map((d) => /* @__PURE__ */ S.jsx(
        "button",
        {
          type: "button",
          className: "jwf-filter",
          "data-active": i === d.id,
          "aria-pressed": i === d.id,
          onClick: () => s(d.id),
          children: d.label
        },
        d.id
      )) }),
      /* @__PURE__ */ S.jsxs("div", { className: "jwf-task-list", role: "list", children: [
        /* @__PURE__ */ S.jsx(Kr, { initial: !1, children: c.map((d) => /* @__PURE__ */ S.jsx(Bf, { task: d, send: t }, d.id)) }),
        c.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "jwf-done-empty", children: u.length === 0 ? "Nothing completed yet" : "Nothing in this range" }) : null
      ] })
    ] })
  ] });
}
function Bf({ task: e, send: t }) {
  return /* @__PURE__ */ S.jsxs(
    ze.button,
    {
      type: "button",
      role: "listitem",
      className: "jwf-task",
      "data-done": e.done,
      title: e.done ? "Reopen this task" : "Complete this task",
      onClick: () => t({ type: "toggle", id: e.id }),
      initial: { opacity: 0, x: -6 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 6 },
      transition: { duration: 0.16 },
      children: [
        /* @__PURE__ */ S.jsx("span", { className: "jwf-task-text", children: e.text }),
        e.done && e.doneAt != null ? /* @__PURE__ */ S.jsx("span", { className: "jwf-task-date", children: zw(e.doneAt) }) : null
      ]
    }
  );
}
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mm = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var $w = {
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
const Ww = P.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: s,
    iconNode: o,
    ...l
  }, a) => P.createElement(
    "svg",
    {
      ref: a,
      ...$w,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Mm("lucide", i),
      ...l
    },
    [
      ...o.map(([u, c]) => P.createElement(u, c)),
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
const Yn = (e, t) => {
  const n = P.forwardRef(
    ({ className: r, ...i }, s) => P.createElement(Ww, {
      ref: s,
      iconNode: t,
      className: Mm(`lucide-${Uw(e)}`, r),
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
const Hw = Yn("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kw = Yn("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gw = Yn("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qw = Yn("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bw = Yn("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xw = Yn("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Yw = [880, 1046, 1174], Zw = 20, qw = 2;
class Jw {
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
      for (let i = 0; i < Zw; i += 1) {
        const s = r + i * qw;
        Yw.forEach((o, l) => n(s + l * 0.35, o));
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
function eS() {
  const [e, t] = P.useState(() => /* @__PURE__ */ new Date()), [n, r] = P.useState(!1);
  return P.useEffect(() => {
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
const tS = [15, 25, 30, 45, 60, 90, 120];
function nS(e) {
  if (e < 60) return `${e}m`;
  const t = e / 60;
  return Number.isInteger(t) ? `${t}h` : `${t}h`;
}
function rS({
  totalSeconds: e,
  onSelect: t,
  onStart: n
}) {
  const [r, i] = P.useState(""), s = Math.round(e / 60);
  return /* @__PURE__ */ S.jsxs(
    ze.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
      style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 18 },
      children: [
        /* @__PURE__ */ S.jsx("span", { className: "tm-label", children: "Focus duration" }),
        /* @__PURE__ */ S.jsx("div", { className: "tm-presets", children: tS.map((o) => /* @__PURE__ */ S.jsx(
          "button",
          {
            type: "button",
            className: "tm-preset",
            "data-selected": !r && s === o,
            onClick: () => {
              i(""), t(o);
            },
            children: nS(o)
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
function iS({
  reminder: e,
  onDismiss: t
}) {
  return /* @__PURE__ */ S.jsx(
    ze.div,
    {
      className: "tm-alert",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.25 },
      children: /* @__PURE__ */ S.jsxs(
        ze.div,
        {
          className: "tm-alert-card",
          initial: { scale: 0.94, y: 10 },
          animate: { scale: 1, y: 0 },
          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          children: [
            /* @__PURE__ */ S.jsx(
              ze.div,
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
function sS({
  reminders: e,
  onAdd: t,
  onRemove: n
}) {
  const [r, i] = P.useState(""), [s, o] = P.useState("30"), [l, a] = P.useState(!1), u = () => {
    const f = Number.parseInt(s, 10);
    !r.trim() || !Number.isFinite(f) || f <= 0 || (t(r, f), i(""), o("30"), a(!1));
  }, c = (f) => f.stopPropagation();
  return /* @__PURE__ */ S.jsxs(
    ze.div,
    {
      className: "tm-reminders",
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.12 },
      children: [
        /* @__PURE__ */ S.jsxs("div", { className: "tm-reminders-head", children: [
          /* @__PURE__ */ S.jsxs("span", { className: "tm-label", style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ S.jsx(Hw, { size: 12 }),
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
                /* @__PURE__ */ S.jsx(Qw, { size: 12 }),
                "Add"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs(Kr, { mode: "popLayout", children: [
          l ? /* @__PURE__ */ S.jsxs(
            ze.div,
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
            ze.div,
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
                    children: /* @__PURE__ */ S.jsx(Xw, { size: 13 })
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
function lr(e) {
  return e.toString().padStart(2, "0");
}
function oS({
  remainingSeconds: e,
  phase: t
}) {
  const n = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), i = e % 60, s = n > 0 ? `${lr(n)}:${lr(r)}:${lr(i)}` : `${lr(r)}:${lr(i)}`;
  return /* @__PURE__ */ S.jsx(
    ze.span,
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
function lS({
  api: e,
  state: t,
  send: n
}) {
  P.useEffect(() => {
    n({ type: "syncSettings" });
  }, [n]);
  const r = P.useRef(null), i = P.useRef(null);
  P.useEffect(() => {
    r.current ??= new Jw();
    const u = t.phase === "reminding" && i.current !== "reminding", c = t.phase === "finished" && i.current != null && i.current !== "finished";
    u || c ? r.current.play() : t.phase !== "reminding" && r.current.stop(), i.current = t.phase;
  }, [t.phase]), P.useEffect(() => () => r.current?.stop(), []);
  const [s, o] = P.useState(null);
  P.useEffect(() => {
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
    /* @__PURE__ */ S.jsx(eS, {}),
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
    /* @__PURE__ */ S.jsx(oS, { remainingSeconds: t.remainingSeconds, phase: t.phase }),
    /* @__PURE__ */ S.jsx(Kr, { mode: "wait", children: a ? /* @__PURE__ */ S.jsxs(
      ze.div,
      {
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.2 },
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 24, width: "100%" },
        children: [
          /* @__PURE__ */ S.jsx(
            rS,
            {
              totalSeconds: t.totalSeconds,
              onSelect: (u) => n({ type: "setDuration", minutes: u }),
              onStart: () => n({ type: "start" })
            }
          ),
          /* @__PURE__ */ S.jsx(
            sS,
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
      ze.div,
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
                children: /* @__PURE__ */ S.jsx(Kw, { size: 17 })
              }
            ) : null,
            t.phase === "paused" ? /* @__PURE__ */ S.jsx(
              "button",
              {
                type: "button",
                className: "tm-circle",
                onClick: () => n({ type: "resume" }),
                title: "Resume",
                children: /* @__PURE__ */ S.jsx(Gw, { size: 17, style: { marginLeft: 2 } })
              }
            ) : null,
            /* @__PURE__ */ S.jsx("button", { type: "button", className: "tm-circle", onClick: () => n({ type: "reset" }), title: "Reset", children: /* @__PURE__ */ S.jsx(bw, { size: 17 }) })
          ] }),
          t.phase === "finished" ? /* @__PURE__ */ S.jsx(
            ze.span,
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
    /* @__PURE__ */ S.jsx(Kr, { children: l ? /* @__PURE__ */ S.jsx(iS, { reminder: l, onDismiss: () => n({ type: "dismissReminder" }) }) : null })
  ] });
}
const aS = {
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
function uS({ context: e }) {
  const { api: t } = e, [n, r] = P.useState(() => e.runtime.state() ?? aS);
  P.useEffect(() => e.runtime.subscribe(r), [e]);
  const i = P.useCallback((u, c) => {
    e.runtime.request(u, c).catch((f) => {
      t.ui.showToast(f instanceof Error ? f.message : String(f));
    });
  }, [t.ui, e.runtime]), s = P.useCallback((u) => i("timerAction", u), [i]), o = P.useCallback((u) => i("tasksAction", u), [i]), l = P.useCallback((u) => i("selectTab", { tab: u }), [i]), a = P.useRef(null);
  return P.useEffect(() => {
    const u = a.current;
    if (!u) return;
    const c = () => uv(u, n.timer.inheritTheme);
    return c(), n.timer.inheritTheme ? cv(c) : void 0;
  }, [n.timer.inheritTheme]), /* @__PURE__ */ S.jsxs("div", { className: "jwf", ref: a, children: [
    /* @__PURE__ */ S.jsx(
      fv,
      {
        activeTab: n.activeTab,
        timerRunning: n.timer.phase === "running",
        onSelect: l
      }
    ),
    n.activeTab === "tasks" ? /* @__PURE__ */ S.jsx(Bw, { state: n.tasks, send: o }) : /* @__PURE__ */ S.jsx(lS, { api: t, state: n.timer, send: s })
  ] });
}
function cS(e, t) {
  ov();
  const n = Jp(e);
  return n.render(/* @__PURE__ */ S.jsx(uS, { context: t })), () => {
    queueMicrotask(() => n.unmount());
  };
}
const pS = Vm({
  mount: cS
});
export {
  pS as default
};
