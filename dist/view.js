import { M as Ya, b as Gm } from "./types-B69RouoS.js";
var Jf = { exports: {} }, Vo = {}, ed = { exports: {} }, I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ui = Symbol.for("react.element"), Qm = Symbol.for("react.portal"), Xm = Symbol.for("react.fragment"), Ym = Symbol.for("react.strict_mode"), Zm = Symbol.for("react.profiler"), qm = Symbol.for("react.provider"), Jm = Symbol.for("react.context"), eg = Symbol.for("react.forward_ref"), tg = Symbol.for("react.suspense"), ng = Symbol.for("react.memo"), rg = Symbol.for("react.lazy"), Pu = Symbol.iterator;
function ig(e) {
  return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var td = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, nd = Object.assign, rd = {};
function nr(e, t, n) {
  this.props = e, this.context = t, this.refs = rd, this.updater = n || td;
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function id() {
}
id.prototype = nr.prototype;
function Za(e, t, n) {
  this.props = e, this.context = t, this.refs = rd, this.updater = n || td;
}
var qa = Za.prototype = new id();
qa.constructor = Za;
nd(qa, nr.prototype);
qa.isPureReactComponent = !0;
var Eu = Array.isArray, od = Object.prototype.hasOwnProperty, Ja = { current: null }, sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ad(e, t, n) {
  var r, i = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) od.call(t, r) && !sd.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
  return { $$typeof: ui, type: e, key: o, ref: s, props: i, _owner: Ja.current };
}
function og(e, t) {
  return { $$typeof: ui, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function el(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ui;
}
function sg(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ju = /\/+/g;
function ns(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? sg("" + e.key) : t.toString(36);
}
function zi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (o) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ui:
        case Qm:
          s = !0;
      }
  }
  if (s) return s = e, i = i(s), e = r === "" ? "." + ns(s, 0) : r, Eu(i) ? (n = "", e != null && (n = e.replace(ju, "$&/") + "/"), zi(i, t, n, "", function(u) {
    return u;
  })) : i != null && (el(i) && (i = og(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(ju, "$&/") + "/") + e)), t.push(i)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Eu(e)) for (var a = 0; a < e.length; a++) {
    o = e[a];
    var l = r + ns(o, a);
    s += zi(o, t, n, l, i);
  }
  else if (l = ig(e), typeof l == "function") for (e = l.call(e), a = 0; !(o = e.next()).done; ) o = o.value, l = r + ns(o, a++), s += zi(o, t, n, l, i);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function vi(e, t, n) {
  if (e == null) return e;
  var r = [], i = 0;
  return zi(e, r, "", "", function(o) {
    return t.call(n, o, i++);
  }), r;
}
function ag(e) {
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
var ke = { current: null }, Bi = { transition: null }, lg = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: Bi, ReactCurrentOwner: Ja };
function ld() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = { map: vi, forEach: function(e, t, n) {
  vi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return vi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return vi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!el(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
I.Component = nr;
I.Fragment = Xm;
I.Profiler = Zm;
I.PureComponent = Za;
I.StrictMode = Ym;
I.Suspense = tg;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg;
I.act = ld;
I.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = nd({}, e.props), i = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = Ja.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) od.call(t, l) && !sd.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ui, type: e.type, key: i, ref: o, props: r, _owner: s };
};
I.createContext = function(e) {
  return e = { $$typeof: Jm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: qm, _context: e }, e.Consumer = e;
};
I.createElement = ad;
I.createFactory = function(e) {
  var t = ad.bind(null, e);
  return t.type = e, t;
};
I.createRef = function() {
  return { current: null };
};
I.forwardRef = function(e) {
  return { $$typeof: eg, render: e };
};
I.isValidElement = el;
I.lazy = function(e) {
  return { $$typeof: rg, _payload: { _status: -1, _result: e }, _init: ag };
};
I.memo = function(e, t) {
  return { $$typeof: ng, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function(e) {
  var t = Bi.transition;
  Bi.transition = {};
  try {
    e();
  } finally {
    Bi.transition = t;
  }
};
I.unstable_act = ld;
I.useCallback = function(e, t) {
  return ke.current.useCallback(e, t);
};
I.useContext = function(e) {
  return ke.current.useContext(e);
};
I.useDebugValue = function() {
};
I.useDeferredValue = function(e) {
  return ke.current.useDeferredValue(e);
};
I.useEffect = function(e, t) {
  return ke.current.useEffect(e, t);
};
I.useId = function() {
  return ke.current.useId();
};
I.useImperativeHandle = function(e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function(e, t) {
  return ke.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function(e, t) {
  return ke.current.useLayoutEffect(e, t);
};
I.useMemo = function(e, t) {
  return ke.current.useMemo(e, t);
};
I.useReducer = function(e, t, n) {
  return ke.current.useReducer(e, t, n);
};
I.useRef = function(e) {
  return ke.current.useRef(e);
};
I.useState = function(e) {
  return ke.current.useState(e);
};
I.useSyncExternalStore = function(e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function() {
  return ke.current.useTransition();
};
I.version = "18.3.1";
ed.exports = I;
var k = ed.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ug = k, cg = Symbol.for("react.element"), fg = Symbol.for("react.fragment"), dg = Object.prototype.hasOwnProperty, pg = ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, hg = { key: !0, ref: !0, __self: !0, __source: !0 };
function ud(e, t, n) {
  var r, i = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) dg.call(t, r) && !hg.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: cg, type: e, key: o, ref: s, props: i, _owner: pg.current };
}
Vo.Fragment = fg;
Vo.jsx = ud;
Vo.jsxs = ud;
Jf.exports = Vo;
var w = Jf.exports, cd = { exports: {} }, _e = {}, fd = { exports: {} }, dd = {};
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
  function t(D, N) {
    var _ = D.length;
    D.push(N);
    e: for (; 0 < _; ) {
      var $ = _ - 1 >>> 1, te = D[$];
      if (0 < i(te, N)) D[$] = N, D[_] = te, _ = $;
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var N = D[0], _ = D.pop();
    if (_ !== N) {
      D[0] = _;
      e: for (var $ = 0, te = D.length, wn = te >>> 1; $ < wn; ) {
        var ct = 2 * ($ + 1) - 1, lr = D[ct], ft = ct + 1, Yt = D[ft];
        if (0 > i(lr, _)) ft < te && 0 > i(Yt, lr) ? (D[$] = Yt, D[ft] = _, $ = ft) : (D[$] = lr, D[ct] = _, $ = ct);
        else if (ft < te && 0 > i(Yt, _)) D[$] = Yt, D[ft] = _, $ = ft;
        else break e;
      }
    }
    return N;
  }
  function i(D, N) {
    var _ = D.sortIndex - N.sortIndex;
    return _ !== 0 ? _ : D.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], u = [], c = 1, f = null, d = 3, g = !1, y = !1, v = !1, T = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(D) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= D) r(u), N.sortIndex = N.expirationTime, t(l, N);
      else break;
      N = n(u);
    }
  }
  function x(D) {
    if (v = !1, m(D), !y) if (n(l) !== null) y = !0, xn(S);
    else {
      var N = n(u);
      N !== null && G(x, N.startTime - D);
    }
  }
  function S(D, N) {
    y = !1, v && (v = !1, h(P), P = -1), g = !0;
    var _ = d;
    try {
      for (m(N), f = n(l); f !== null && (!(f.expirationTime > N) || D && !Z()); ) {
        var $ = f.callback;
        if (typeof $ == "function") {
          f.callback = null, d = f.priorityLevel;
          var te = $(f.expirationTime <= N);
          N = e.unstable_now(), typeof te == "function" ? f.callback = te : f === n(l) && r(l), m(N);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var wn = !0;
      else {
        var ct = n(u);
        ct !== null && G(x, ct.startTime - N), wn = !1;
      }
      return wn;
    } finally {
      f = null, d = _, g = !1;
    }
  }
  var C = !1, j = null, P = -1, L = 5, R = -1;
  function Z() {
    return !(e.unstable_now() - R < L);
  }
  function lt() {
    if (j !== null) {
      var D = e.unstable_now();
      R = D;
      var N = !0;
      try {
        N = j(!0, D);
      } finally {
        N ? et() : (C = !1, j = null);
      }
    } else C = !1;
  }
  var et;
  if (typeof p == "function") et = function() {
    p(lt);
  };
  else if (typeof MessageChannel < "u") {
    var ut = new MessageChannel(), Xt = ut.port2;
    ut.port1.onmessage = lt, et = function() {
      Xt.postMessage(null);
    };
  } else et = function() {
    T(lt, 0);
  };
  function xn(D) {
    j = D, C || (C = !0, et());
  }
  function G(D, N) {
    P = T(function() {
      D(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, e.unstable_continueExecution = function() {
    y || g || (y = !0, xn(S));
  }, e.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < D ? Math.floor(1e3 / D) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(D) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = d;
    }
    var _ = d;
    d = N;
    try {
      return D();
    } finally {
      d = _;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(D, N) {
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
    var _ = d;
    d = D;
    try {
      return N();
    } finally {
      d = _;
    }
  }, e.unstable_scheduleCallback = function(D, N, _) {
    var $ = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? $ + _ : $) : _ = $, D) {
      case 1:
        var te = -1;
        break;
      case 2:
        te = 250;
        break;
      case 5:
        te = 1073741823;
        break;
      case 4:
        te = 1e4;
        break;
      default:
        te = 5e3;
    }
    return te = _ + te, D = { id: c++, callback: N, priorityLevel: D, startTime: _, expirationTime: te, sortIndex: -1 }, _ > $ ? (D.sortIndex = _, t(u, D), n(l) === null && D === n(u) && (v ? (h(P), P = -1) : v = !0, G(x, _ - $))) : (D.sortIndex = te, t(l, D), y || g || (y = !0, xn(S))), D;
  }, e.unstable_shouldYield = Z, e.unstable_wrapCallback = function(D) {
    var N = d;
    return function() {
      var _ = d;
      d = N;
      try {
        return D.apply(this, arguments);
      } finally {
        d = _;
      }
    };
  };
})(dd);
fd.exports = dd;
var mg = fd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gg = k, Le = mg;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var pd = /* @__PURE__ */ new Set(), Ur = {};
function mn(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) pd.add(t[e]);
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Us = Object.prototype.hasOwnProperty, yg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Du = {}, Au = {};
function vg(e) {
  return Us.call(Au, e) ? !0 : Us.call(Du, e) ? !1 : yg.test(e) ? Au[e] = !0 : (Du[e] = !0, !1);
}
function xg(e, t, n, r) {
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
function wg(e, t, n, r) {
  if (t === null || typeof t > "u" || xg(e, t, n, r)) return !0;
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
function Te(e, t, n, r, i, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  pe[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  pe[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  pe[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  pe[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  pe[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  pe[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  pe[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  pe[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  pe[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var tl = /[\-:]([a-z])/g;
function nl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    tl,
    nl
  );
  pe[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(tl, nl);
  pe[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(tl, nl);
  pe[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  pe[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  pe[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function rl(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (wg(t, n, i, r) && (n = null), r || i === null ? vg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Pt = gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xi = Symbol.for("react.element"), kn = Symbol.for("react.portal"), Tn = Symbol.for("react.fragment"), il = Symbol.for("react.strict_mode"), $s = Symbol.for("react.profiler"), hd = Symbol.for("react.provider"), md = Symbol.for("react.context"), ol = Symbol.for("react.forward_ref"), bs = Symbol.for("react.suspense"), Ws = Symbol.for("react.suspense_list"), sl = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), gd = Symbol.for("react.offscreen"), Ru = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object" ? null : (e = Ru && e[Ru] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Y = Object.assign, rs;
function wr(e) {
  if (rs === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    rs = t && t[1] || "";
  }
  return `
` + rs + e;
}
var is = !1;
function os(e, t) {
  if (!e || is) return "";
  is = !0;
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
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (i[s] !== o[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || i[s] !== o[a]) {
              var l = `
` + i[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    is = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function Sg(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = os(e.type, !1), e;
    case 11:
      return e = os(e.type.render, !1), e;
    case 1:
      return e = os(e.type, !0), e;
    default:
      return "";
  }
}
function Ks(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tn:
      return "Fragment";
    case kn:
      return "Portal";
    case $s:
      return "Profiler";
    case il:
      return "StrictMode";
    case bs:
      return "Suspense";
    case Ws:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case md:
      return (e.displayName || "Context") + ".Consumer";
    case hd:
      return (e._context.displayName || "Context") + ".Provider";
    case ol:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case sl:
      return t = e.displayName || null, t !== null ? t : Ks(e.type) || "Memo";
    case Dt:
      t = e._payload, e = e._init;
      try {
        return Ks(e(t));
      } catch {
      }
  }
  return null;
}
function kg(e) {
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
      return Ks(t);
    case 8:
      return t === il ? "StrictMode" : "Mode";
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
function $t(e) {
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
function yd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Tg(e) {
  var t = yd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return i.call(this);
    }, set: function(s) {
      r = "" + s, o.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function wi(e) {
  e._valueTracker || (e._valueTracker = Tg(e));
}
function vd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = yd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function eo(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hs(e, t) {
  var n = t.checked;
  return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Mu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = $t(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function xd(e, t) {
  t = t.checked, t != null && rl(e, "checked", t, !1);
}
function Gs(e, t) {
  xd(e, t);
  var n = $t(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Qs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qs(e, t.type, $t(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Vu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Qs(e, t, n) {
  (t !== "number" || eo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sr = Array.isArray;
function zn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        e[i].selected = !0, r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Xs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Lu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (Sr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: $t(n) };
}
function wd(e, t) {
  var n = $t(t.value), r = $t(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Nu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ys(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Sd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Si, kd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, i);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Si = Si || document.createElement("div"), Si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Si.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function $r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
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
}, Cg = ["Webkit", "ms", "Moz", "O"];
Object.keys(jr).forEach(function(e) {
  Cg.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), jr[t] = jr[e];
  });
});
function Td(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || jr.hasOwnProperty(e) && jr[e] ? ("" + t).trim() : t + "px";
}
function Cd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, i = Td(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
  }
}
var Pg = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Zs(e, t) {
  if (t) {
    if (Pg[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function qs(e, t) {
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
var Js = null;
function al(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ea = null, Bn = null, Un = null;
function _u(e) {
  if (e = di(e)) {
    if (typeof ea != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Fo(t), ea(e.stateNode, e.type, t));
  }
}
function Pd(e) {
  Bn ? Un ? Un.push(e) : Un = [e] : Bn = e;
}
function Ed() {
  if (Bn) {
    var e = Bn, t = Un;
    if (Un = Bn = null, _u(e), t) for (e = 0; e < t.length; e++) _u(t[e]);
  }
}
function jd(e, t) {
  return e(t);
}
function Dd() {
}
var ss = !1;
function Ad(e, t, n) {
  if (ss) return e(t, n);
  ss = !0;
  try {
    return jd(e, t, n);
  } finally {
    ss = !1, (Bn !== null || Un !== null) && (Dd(), Ed());
  }
}
function br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fo(n);
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
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var ta = !1;
if (xt) try {
  var cr = {};
  Object.defineProperty(cr, "passive", { get: function() {
    ta = !0;
  } }), window.addEventListener("test", cr, cr), window.removeEventListener("test", cr, cr);
} catch {
  ta = !1;
}
function Eg(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Dr = !1, to = null, no = !1, na = null, jg = { onError: function(e) {
  Dr = !0, to = e;
} };
function Dg(e, t, n, r, i, o, s, a, l) {
  Dr = !1, to = null, Eg.apply(jg, arguments);
}
function Ag(e, t, n, r, i, o, s, a, l) {
  if (Dg.apply(this, arguments), Dr) {
    if (Dr) {
      var u = to;
      Dr = !1, to = null;
    } else throw Error(E(198));
    no || (no = !0, na = u);
  }
}
function gn(e) {
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
function Rd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Iu(e) {
  if (gn(e) !== e) throw Error(E(188));
}
function Rg(e) {
  var t = e.alternate;
  if (!t) {
    if (t = gn(e), t === null) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (r = i.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Iu(i), e;
        if (o === r) return Iu(i), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = i, r = o;
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          s = !0, n = i, r = o;
          break;
        }
        if (a === r) {
          s = !0, r = i, n = o;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            s = !0, n = o, r = i;
            break;
          }
          if (a === r) {
            s = !0, r = o, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Md(e) {
  return e = Rg(e), e !== null ? Vd(e) : null;
}
function Vd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ld = Le.unstable_scheduleCallback, Fu = Le.unstable_cancelCallback, Mg = Le.unstable_shouldYield, Vg = Le.unstable_requestPaint, re = Le.unstable_now, Lg = Le.unstable_getCurrentPriorityLevel, ll = Le.unstable_ImmediatePriority, Nd = Le.unstable_UserBlockingPriority, ro = Le.unstable_NormalPriority, Ng = Le.unstable_LowPriority, _d = Le.unstable_IdlePriority, Lo = null, it = null;
function _g(e) {
  if (it && typeof it.onCommitFiberRoot == "function") try {
    it.onCommitFiberRoot(Lo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ze = Math.clz32 ? Math.clz32 : Og, Ig = Math.log, Fg = Math.LN2;
function Og(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ig(e) / Fg | 0) | 0;
}
var ki = 64, Ti = 4194304;
function kr(e) {
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
function io(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, i = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? r = kr(a) : (o &= s, o !== 0 && (r = kr(o)));
  } else s = n & ~i, s !== 0 ? r = kr(s) : o !== 0 && (r = kr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ze(t), i = 1 << n, r |= e[n], t &= ~i;
  return r;
}
function zg(e, t) {
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
function Bg(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - Ze(o), a = 1 << s, l = i[s];
    l === -1 ? (!(a & n) || a & r) && (i[s] = zg(a, t)) : l <= t && (e.expiredLanes |= a), o &= ~a;
  }
}
function ra(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Id() {
  var e = ki;
  return ki <<= 1, !(ki & 4194240) && (ki = 64), e;
}
function as(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ci(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ze(t), e[t] = n;
}
function Ug(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ze(n), o = 1 << i;
    t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o;
  }
}
function ul(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n), i = 1 << r;
    i & t | e[r] & t && (e[r] |= t), n &= ~i;
  }
}
var z = 0;
function Fd(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Od, cl, zd, Bd, Ud, ia = !1, Ci = [], Nt = null, _t = null, It = null, Wr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), Rt = [], $g = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ou(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      _t = null;
      break;
    case "mouseover":
    case "mouseout":
      It = null;
      break;
    case "pointerover":
    case "pointerout":
      Wr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kr.delete(t.pointerId);
  }
}
function fr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }, t !== null && (t = di(t), t !== null && cl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function bg(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return Nt = fr(Nt, e, t, n, r, i), !0;
    case "dragenter":
      return _t = fr(_t, e, t, n, r, i), !0;
    case "mouseover":
      return It = fr(It, e, t, n, r, i), !0;
    case "pointerover":
      var o = i.pointerId;
      return Wr.set(o, fr(Wr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return o = i.pointerId, Kr.set(o, fr(Kr.get(o) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function $d(e) {
  var t = nn(e.target);
  if (t !== null) {
    var n = gn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Rd(n), t !== null) {
          e.blockedOn = t, Ud(e.priority, function() {
            zd(n);
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
function Ui(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Js = r, n.target.dispatchEvent(r), Js = null;
    } else return t = di(n), t !== null && cl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function zu(e, t, n) {
  Ui(e) && n.delete(t);
}
function Wg() {
  ia = !1, Nt !== null && Ui(Nt) && (Nt = null), _t !== null && Ui(_t) && (_t = null), It !== null && Ui(It) && (It = null), Wr.forEach(zu), Kr.forEach(zu);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ia || (ia = !0, Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Wg)));
}
function Hr(e) {
  function t(i) {
    return dr(i, e);
  }
  if (0 < Ci.length) {
    dr(Ci[0], e);
    for (var n = 1; n < Ci.length; n++) {
      var r = Ci[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Nt !== null && dr(Nt, e), _t !== null && dr(_t, e), It !== null && dr(It, e), Wr.forEach(t), Kr.forEach(t), n = 0; n < Rt.length; n++) r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); ) $d(n), n.blockedOn === null && Rt.shift();
}
var $n = Pt.ReactCurrentBatchConfig, oo = !0;
function Kg(e, t, n, r) {
  var i = z, o = $n.transition;
  $n.transition = null;
  try {
    z = 1, fl(e, t, n, r);
  } finally {
    z = i, $n.transition = o;
  }
}
function Hg(e, t, n, r) {
  var i = z, o = $n.transition;
  $n.transition = null;
  try {
    z = 4, fl(e, t, n, r);
  } finally {
    z = i, $n.transition = o;
  }
}
function fl(e, t, n, r) {
  if (oo) {
    var i = oa(e, t, n, r);
    if (i === null) ys(e, t, r, so, n), Ou(e, r);
    else if (bg(i, e, t, n, r)) r.stopPropagation();
    else if (Ou(e, r), t & 4 && -1 < $g.indexOf(e)) {
      for (; i !== null; ) {
        var o = di(i);
        if (o !== null && Od(o), o = oa(e, t, n, r), o === null && ys(e, t, r, so, n), o === i) break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ys(e, t, r, null, n);
  }
}
var so = null;
function oa(e, t, n, r) {
  if (so = null, e = al(r), e = nn(e), e !== null) if (t = gn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Rd(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return so = e, null;
}
function bd(e) {
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
      switch (Lg()) {
        case ll:
          return 1;
        case Nd:
          return 4;
        case ro:
        case Ng:
          return 16;
        case _d:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Vt = null, dl = null, $i = null;
function Wd() {
  if ($i) return $i;
  var e, t = dl, n = t.length, r, i = "value" in Vt ? Vt.value : Vt.textContent, o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++) ;
  return $i = i.slice(e, 1 < r ? 1 - r : void 0);
}
function bi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Pi() {
  return !0;
}
function Bu() {
  return !1;
}
function Ie(e) {
  function t(n, r, i, o, s) {
    this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Pi : Bu, this.isPropagationStopped = Bu, this;
  }
  return Y(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pi);
  }, persist: function() {
  }, isPersistent: Pi }), t;
}
var rr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, pl = Ie(rr), fi = Y({}, rr, { view: 0, detail: 0 }), Gg = Ie(fi), ls, us, pr, No = Y({}, fi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== pr && (pr && e.type === "mousemove" ? (ls = e.screenX - pr.screenX, us = e.screenY - pr.screenY) : us = ls = 0, pr = e), ls);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : us;
} }), Uu = Ie(No), Qg = Y({}, No, { dataTransfer: 0 }), Xg = Ie(Qg), Yg = Y({}, fi, { relatedTarget: 0 }), cs = Ie(Yg), Zg = Y({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qg = Ie(Zg), Jg = Y({}, rr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), ey = Ie(Jg), ty = Y({}, rr, { data: 0 }), $u = Ie(ty), ny = {
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
}, ry = {
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
}, iy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function oy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = iy[e]) ? !!t[e] : !1;
}
function hl() {
  return oy;
}
var sy = Y({}, fi, { key: function(e) {
  if (e.key) {
    var t = ny[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = bi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ry[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hl, charCode: function(e) {
  return e.type === "keypress" ? bi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? bi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ay = Ie(sy), ly = Y({}, No, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), bu = Ie(ly), uy = Y({}, fi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hl }), cy = Ie(uy), fy = Y({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dy = Ie(fy), py = Y({}, No, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), hy = Ie(py), my = [9, 13, 27, 32], ml = xt && "CompositionEvent" in window, Ar = null;
xt && "documentMode" in document && (Ar = document.documentMode);
var gy = xt && "TextEvent" in window && !Ar, Kd = xt && (!ml || Ar && 8 < Ar && 11 >= Ar), Wu = " ", Ku = !1;
function Hd(e, t) {
  switch (e) {
    case "keyup":
      return my.indexOf(t.keyCode) !== -1;
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
function Gd(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Cn = !1;
function yy(e, t) {
  switch (e) {
    case "compositionend":
      return Gd(t);
    case "keypress":
      return t.which !== 32 ? null : (Ku = !0, Wu);
    case "textInput":
      return e = t.data, e === Wu && Ku ? null : e;
    default:
      return null;
  }
}
function vy(e, t) {
  if (Cn) return e === "compositionend" || !ml && Hd(e, t) ? (e = Wd(), $i = dl = Vt = null, Cn = !1, e) : null;
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
      return Kd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var xy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!xy[e.type] : t === "textarea";
}
function Qd(e, t, n, r) {
  Pd(r), t = ao(t, "onChange"), 0 < t.length && (n = new pl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Rr = null, Gr = null;
function wy(e) {
  op(e, 0);
}
function _o(e) {
  var t = jn(e);
  if (vd(t)) return e;
}
function Sy(e, t) {
  if (e === "change") return t;
}
var Xd = !1;
if (xt) {
  var fs;
  if (xt) {
    var ds = "oninput" in document;
    if (!ds) {
      var Gu = document.createElement("div");
      Gu.setAttribute("oninput", "return;"), ds = typeof Gu.oninput == "function";
    }
    fs = ds;
  } else fs = !1;
  Xd = fs && (!document.documentMode || 9 < document.documentMode);
}
function Qu() {
  Rr && (Rr.detachEvent("onpropertychange", Yd), Gr = Rr = null);
}
function Yd(e) {
  if (e.propertyName === "value" && _o(Gr)) {
    var t = [];
    Qd(t, Gr, e, al(e)), Ad(wy, t);
  }
}
function ky(e, t, n) {
  e === "focusin" ? (Qu(), Rr = t, Gr = n, Rr.attachEvent("onpropertychange", Yd)) : e === "focusout" && Qu();
}
function Ty(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return _o(Gr);
}
function Cy(e, t) {
  if (e === "click") return _o(t);
}
function Py(e, t) {
  if (e === "input" || e === "change") return _o(t);
}
function Ey(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Je = typeof Object.is == "function" ? Object.is : Ey;
function Qr(e, t) {
  if (Je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Us.call(t, i) || !Je(e[i], t[i])) return !1;
  }
  return !0;
}
function Xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yu(e, t) {
  var n = Xu(e);
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
    n = Xu(n);
  }
}
function Zd(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qd() {
  for (var e = window, t = eo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = eo(e.document);
  }
  return t;
}
function gl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function jy(e) {
  var t = qd(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Zd(n.ownerDocument.documentElement, n)) {
    if (r !== null && gl(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var i = n.textContent.length, o = Math.min(r.start, i);
        r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Yu(n, o);
        var s = Yu(
          n,
          r
        );
        i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Dy = xt && "documentMode" in document && 11 >= document.documentMode, Pn = null, sa = null, Mr = null, aa = !1;
function Zu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  aa || Pn == null || Pn !== eo(r) || (r = Pn, "selectionStart" in r && gl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Mr && Qr(Mr, r) || (Mr = r, r = ao(sa, "onSelect"), 0 < r.length && (t = new pl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Pn)));
}
function Ei(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var En = { animationend: Ei("Animation", "AnimationEnd"), animationiteration: Ei("Animation", "AnimationIteration"), animationstart: Ei("Animation", "AnimationStart"), transitionend: Ei("Transition", "TransitionEnd") }, ps = {}, Jd = {};
xt && (Jd = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
function Io(e) {
  if (ps[e]) return ps[e];
  if (!En[e]) return e;
  var t = En[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jd) return ps[e] = t[n];
  return e;
}
var ep = Io("animationend"), tp = Io("animationiteration"), np = Io("animationstart"), rp = Io("transitionend"), ip = /* @__PURE__ */ new Map(), qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kt(e, t) {
  ip.set(e, t), mn(t, [e]);
}
for (var hs = 0; hs < qu.length; hs++) {
  var ms = qu[hs], Ay = ms.toLowerCase(), Ry = ms[0].toUpperCase() + ms.slice(1);
  Kt(Ay, "on" + Ry);
}
Kt(ep, "onAnimationEnd");
Kt(tp, "onAnimationIteration");
Kt(np, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(rp, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), My = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
function Ju(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ag(r, t, void 0, e), e.currentTarget = null;
}
function op(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== o && i.isPropagationStopped()) break e;
        Ju(i, a, u), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break e;
        Ju(i, a, u), o = l;
      }
    }
  }
  if (no) throw e = na, no = !1, na = null, e;
}
function b(e, t) {
  var n = t[da];
  n === void 0 && (n = t[da] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (sp(t, e, 2, !1), n.add(r));
}
function gs(e, t, n) {
  var r = 0;
  t && (r |= 4), sp(n, e, r, t);
}
var ji = "_reactListening" + Math.random().toString(36).slice(2);
function Xr(e) {
  if (!e[ji]) {
    e[ji] = !0, pd.forEach(function(n) {
      n !== "selectionchange" && (My.has(n) || gs(n, !1, e), gs(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ji] || (t[ji] = !0, gs("selectionchange", !1, t));
  }
}
function sp(e, t, n, r) {
  switch (bd(t)) {
    case 1:
      var i = Kg;
      break;
    case 4:
      i = Hg;
      break;
    default:
      i = fl;
  }
  n = i.bind(null, t, n, e), i = void 0, !ta || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function ys(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === i || a.nodeType === 8 && a.parentNode === i) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = nn(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  Ad(function() {
    var u = o, c = al(n), f = [];
    e: {
      var d = ip.get(e);
      if (d !== void 0) {
        var g = pl, y = e;
        switch (e) {
          case "keypress":
            if (bi(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = ay;
            break;
          case "focusin":
            y = "focus", g = cs;
            break;
          case "focusout":
            y = "blur", g = cs;
            break;
          case "beforeblur":
          case "afterblur":
            g = cs;
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
            g = Uu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Xg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = cy;
            break;
          case ep:
          case tp:
          case np:
            g = qg;
            break;
          case rp:
            g = dy;
            break;
          case "scroll":
            g = Gg;
            break;
          case "wheel":
            g = hy;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = ey;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = bu;
        }
        var v = (t & 4) !== 0, T = !v && e === "scroll", h = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var x = m.stateNode;
          if (m.tag === 5 && x !== null && (m = x, h !== null && (x = br(p, h), x != null && v.push(Yr(p, x, m)))), T) break;
          p = p.return;
        }
        0 < v.length && (d = new g(d, y, null, n, c), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== Js && (y = n.relatedTarget || n.fromElement) && (nn(y) || y[wt])) break e;
        if ((g || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (y = n.relatedTarget || n.toElement, g = u, y = y ? nn(y) : null, y !== null && (T = gn(y), y !== T || y.tag !== 5 && y.tag !== 6) && (y = null)) : (g = null, y = u), g !== y)) {
          if (v = Uu, x = "onMouseLeave", h = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (v = bu, x = "onPointerLeave", h = "onPointerEnter", p = "pointer"), T = g == null ? d : jn(g), m = y == null ? d : jn(y), d = new v(x, p + "leave", g, n, c), d.target = T, d.relatedTarget = m, x = null, nn(c) === u && (v = new v(h, p + "enter", y, n, c), v.target = m, v.relatedTarget = T, x = v), T = x, g && y) t: {
            for (v = g, h = y, p = 0, m = v; m; m = Sn(m)) p++;
            for (m = 0, x = h; x; x = Sn(x)) m++;
            for (; 0 < p - m; ) v = Sn(v), p--;
            for (; 0 < m - p; ) h = Sn(h), m--;
            for (; p--; ) {
              if (v === h || h !== null && v === h.alternate) break t;
              v = Sn(v), h = Sn(h);
            }
            v = null;
          }
          else v = null;
          g !== null && ec(f, d, g, v, !1), y !== null && T !== null && ec(f, T, y, v, !0);
        }
      }
      e: {
        if (d = u ? jn(u) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var S = Sy;
        else if (Hu(d)) if (Xd) S = Py;
        else {
          S = Ty;
          var C = ky;
        }
        else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (S = Cy);
        if (S && (S = S(e, u))) {
          Qd(f, S, n, c);
          break e;
        }
        C && C(e, d, u), e === "focusout" && (C = d._wrapperState) && C.controlled && d.type === "number" && Qs(d, "number", d.value);
      }
      switch (C = u ? jn(u) : window, e) {
        case "focusin":
          (Hu(C) || C.contentEditable === "true") && (Pn = C, sa = u, Mr = null);
          break;
        case "focusout":
          Mr = sa = Pn = null;
          break;
        case "mousedown":
          aa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          aa = !1, Zu(f, n, c);
          break;
        case "selectionchange":
          if (Dy) break;
        case "keydown":
        case "keyup":
          Zu(f, n, c);
      }
      var j;
      if (ml) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Cn ? Hd(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Kd && n.locale !== "ko" && (Cn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Cn && (j = Wd()) : (Vt = c, dl = "value" in Vt ? Vt.value : Vt.textContent, Cn = !0)), C = ao(u, P), 0 < C.length && (P = new $u(P, e, null, n, c), f.push({ event: P, listeners: C }), j ? P.data = j : (j = Gd(n), j !== null && (P.data = j)))), (j = gy ? yy(e, n) : vy(e, n)) && (u = ao(u, "onBeforeInput"), 0 < u.length && (c = new $u("onBeforeInput", "beforeinput", null, n, c), f.push({ event: c, listeners: u }), c.data = j));
    }
    op(f, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ao(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e, o = i.stateNode;
    i.tag === 5 && o !== null && (i = o, o = br(e, n), o != null && r.unshift(Yr(e, o, i)), o = br(e, t), o != null && r.push(Yr(e, o, i))), e = e.return;
  }
  return r;
}
function Sn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ec(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, i ? (l = br(n, o), l != null && s.unshift(Yr(n, l, a))) : i || (l = br(n, o), l != null && s.push(Yr(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Vy = /\r\n?/g, Ly = /\u0000|\uFFFD/g;
function tc(e) {
  return (typeof e == "string" ? e : "" + e).replace(Vy, `
`).replace(Ly, "");
}
function Di(e, t, n) {
  if (t = tc(t), tc(e) !== t && n) throw Error(E(425));
}
function lo() {
}
var la = null, ua = null;
function ca(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fa = typeof setTimeout == "function" ? setTimeout : void 0, Ny = typeof clearTimeout == "function" ? clearTimeout : void 0, nc = typeof Promise == "function" ? Promise : void 0, _y = typeof queueMicrotask == "function" ? queueMicrotask : typeof nc < "u" ? function(e) {
  return nc.resolve(null).then(e).catch(Iy);
} : fa;
function Iy(e) {
  setTimeout(function() {
    throw e;
  });
}
function vs(e, t) {
  var n = t, r = 0;
  do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
      if (r === 0) {
        e.removeChild(i), Hr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
  } while (n);
  Hr(t);
}
function Ft(e) {
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
function rc(e) {
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
var ir = Math.random().toString(36).slice(2), rt = "__reactFiber$" + ir, Zr = "__reactProps$" + ir, wt = "__reactContainer$" + ir, da = "__reactEvents$" + ir, Fy = "__reactListeners$" + ir, Oy = "__reactHandles$" + ir;
function nn(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[wt] || n[rt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = rc(e); e !== null; ) {
        if (n = e[rt]) return n;
        e = rc(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function di(e) {
  return e = e[rt] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function jn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Fo(e) {
  return e[Zr] || null;
}
var pa = [], Dn = -1;
function Ht(e) {
  return { current: e };
}
function W(e) {
  0 > Dn || (e.current = pa[Dn], pa[Dn] = null, Dn--);
}
function B(e, t) {
  Dn++, pa[Dn] = e.current, e.current = t;
}
var bt = {}, xe = Ht(bt), Ee = Ht(!1), cn = bt;
function Hn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {}, o;
  for (o in n) i[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
}
function je(e) {
  return e = e.childContextTypes, e != null;
}
function uo() {
  W(Ee), W(xe);
}
function ic(e, t, n) {
  if (xe.current !== bt) throw Error(E(168));
  B(xe, t), B(Ee, n);
}
function ap(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, kg(e) || "Unknown", i));
  return Y({}, n, r);
}
function co(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || bt, cn = xe.current, B(xe, e), B(Ee, Ee.current), !0;
}
function oc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = ap(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, W(Ee), W(xe), B(xe, e)) : W(Ee), B(Ee, n);
}
var pt = null, Oo = !1, xs = !1;
function lp(e) {
  pt === null ? pt = [e] : pt.push(e);
}
function zy(e) {
  Oo = !0, lp(e);
}
function Gt() {
  if (!xs && pt !== null) {
    xs = !0;
    var e = 0, t = z;
    try {
      var n = pt;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      pt = null, Oo = !1;
    } catch (i) {
      throw pt !== null && (pt = pt.slice(e + 1)), Ld(ll, Gt), i;
    } finally {
      z = t, xs = !1;
    }
  }
  return null;
}
var An = [], Rn = 0, fo = null, po = 0, ze = [], Be = 0, fn = null, ht = 1, mt = "";
function qt(e, t) {
  An[Rn++] = po, An[Rn++] = fo, fo = e, po = t;
}
function up(e, t, n) {
  ze[Be++] = ht, ze[Be++] = mt, ze[Be++] = fn, fn = e;
  var r = ht;
  e = mt;
  var i = 32 - Ze(r) - 1;
  r &= ~(1 << i), n += 1;
  var o = 32 - Ze(t) + i;
  if (30 < o) {
    var s = i - i % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, ht = 1 << 32 - Ze(t) + i | n << i | r, mt = o + e;
  } else ht = 1 << o | n << i | r, mt = e;
}
function yl(e) {
  e.return !== null && (qt(e, 1), up(e, 1, 0));
}
function vl(e) {
  for (; e === fo; ) fo = An[--Rn], An[Rn] = null, po = An[--Rn], An[Rn] = null;
  for (; e === fn; ) fn = ze[--Be], ze[Be] = null, mt = ze[--Be], ze[Be] = null, ht = ze[--Be], ze[Be] = null;
}
var Me = null, Re = null, K = !1, Ye = null;
function cp(e, t) {
  var n = Ue(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function sc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, Re = Ft(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, Re = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? { id: ht, overflow: mt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ue(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, Re = null, !0) : !1;
    default:
      return !1;
  }
}
function ha(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ma(e) {
  if (K) {
    var t = Re;
    if (t) {
      var n = t;
      if (!sc(e, t)) {
        if (ha(e)) throw Error(E(418));
        t = Ft(n.nextSibling);
        var r = Me;
        t && sc(e, t) ? cp(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Me = e);
      }
    } else {
      if (ha(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, K = !1, Me = e;
    }
  }
}
function ac(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Me = e;
}
function Ai(e) {
  if (e !== Me) return !1;
  if (!K) return ac(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ca(e.type, e.memoizedProps)), t && (t = Re)) {
    if (ha(e)) throw fp(), Error(E(418));
    for (; t; ) cp(e, t), t = Ft(t.nextSibling);
  }
  if (ac(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Me ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function fp() {
  for (var e = Re; e; ) e = Ft(e.nextSibling);
}
function Gn() {
  Re = Me = null, K = !1;
}
function xl(e) {
  Ye === null ? Ye = [e] : Ye.push(e);
}
var By = Pt.ReactCurrentBatchConfig;
function hr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
        var a = i.refs;
        s === null ? delete a[o] : a[o] = s;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Ri(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function lc(e) {
  var t = e._init;
  return t(e._payload);
}
function dp(e) {
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
    return h = Ut(h, p), h.index = 0, h.sibling = null, h;
  }
  function o(h, p, m) {
    return h.index = m, e ? (m = h.alternate, m !== null ? (m = m.index, m < p ? (h.flags |= 2, p) : m) : (h.flags |= 2, p)) : (h.flags |= 1048576, p);
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, m, x) {
    return p === null || p.tag !== 6 ? (p = Es(m, h.mode, x), p.return = h, p) : (p = i(p, m), p.return = h, p);
  }
  function l(h, p, m, x) {
    var S = m.type;
    return S === Tn ? c(h, p, m.props.children, x, m.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Dt && lc(S) === p.type) ? (x = i(p, m.props), x.ref = hr(h, p, m), x.return = h, x) : (x = Yi(m.type, m.key, m.props, null, h.mode, x), x.ref = hr(h, p, m), x.return = h, x);
  }
  function u(h, p, m, x) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = js(m, h.mode, x), p.return = h, p) : (p = i(p, m.children || []), p.return = h, p);
  }
  function c(h, p, m, x, S) {
    return p === null || p.tag !== 7 ? (p = ln(m, h.mode, x, S), p.return = h, p) : (p = i(p, m), p.return = h, p);
  }
  function f(h, p, m) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = Es("" + p, h.mode, m), p.return = h, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case xi:
          return m = Yi(p.type, p.key, p.props, null, h.mode, m), m.ref = hr(h, null, p), m.return = h, m;
        case kn:
          return p = js(p, h.mode, m), p.return = h, p;
        case Dt:
          var x = p._init;
          return f(h, x(p._payload), m);
      }
      if (Sr(p) || ur(p)) return p = ln(p, h.mode, m, null), p.return = h, p;
      Ri(h, p);
    }
    return null;
  }
  function d(h, p, m, x) {
    var S = p !== null ? p.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return S !== null ? null : a(h, p, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xi:
          return m.key === S ? l(h, p, m, x) : null;
        case kn:
          return m.key === S ? u(h, p, m, x) : null;
        case Dt:
          return S = m._init, d(
            h,
            p,
            S(m._payload),
            x
          );
      }
      if (Sr(m) || ur(m)) return S !== null ? null : c(h, p, m, x, null);
      Ri(h, m);
    }
    return null;
  }
  function g(h, p, m, x, S) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return h = h.get(m) || null, a(p, h, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case xi:
          return h = h.get(x.key === null ? m : x.key) || null, l(p, h, x, S);
        case kn:
          return h = h.get(x.key === null ? m : x.key) || null, u(p, h, x, S);
        case Dt:
          var C = x._init;
          return g(h, p, m, C(x._payload), S);
      }
      if (Sr(x) || ur(x)) return h = h.get(m) || null, c(p, h, x, S, null);
      Ri(p, x);
    }
    return null;
  }
  function y(h, p, m, x) {
    for (var S = null, C = null, j = p, P = p = 0, L = null; j !== null && P < m.length; P++) {
      j.index > P ? (L = j, j = null) : L = j.sibling;
      var R = d(h, j, m[P], x);
      if (R === null) {
        j === null && (j = L);
        break;
      }
      e && j && R.alternate === null && t(h, j), p = o(R, p, P), C === null ? S = R : C.sibling = R, C = R, j = L;
    }
    if (P === m.length) return n(h, j), K && qt(h, P), S;
    if (j === null) {
      for (; P < m.length; P++) j = f(h, m[P], x), j !== null && (p = o(j, p, P), C === null ? S = j : C.sibling = j, C = j);
      return K && qt(h, P), S;
    }
    for (j = r(h, j); P < m.length; P++) L = g(j, h, P, m[P], x), L !== null && (e && L.alternate !== null && j.delete(L.key === null ? P : L.key), p = o(L, p, P), C === null ? S = L : C.sibling = L, C = L);
    return e && j.forEach(function(Z) {
      return t(h, Z);
    }), K && qt(h, P), S;
  }
  function v(h, p, m, x) {
    var S = ur(m);
    if (typeof S != "function") throw Error(E(150));
    if (m = S.call(m), m == null) throw Error(E(151));
    for (var C = S = null, j = p, P = p = 0, L = null, R = m.next(); j !== null && !R.done; P++, R = m.next()) {
      j.index > P ? (L = j, j = null) : L = j.sibling;
      var Z = d(h, j, R.value, x);
      if (Z === null) {
        j === null && (j = L);
        break;
      }
      e && j && Z.alternate === null && t(h, j), p = o(Z, p, P), C === null ? S = Z : C.sibling = Z, C = Z, j = L;
    }
    if (R.done) return n(
      h,
      j
    ), K && qt(h, P), S;
    if (j === null) {
      for (; !R.done; P++, R = m.next()) R = f(h, R.value, x), R !== null && (p = o(R, p, P), C === null ? S = R : C.sibling = R, C = R);
      return K && qt(h, P), S;
    }
    for (j = r(h, j); !R.done; P++, R = m.next()) R = g(j, h, P, R.value, x), R !== null && (e && R.alternate !== null && j.delete(R.key === null ? P : R.key), p = o(R, p, P), C === null ? S = R : C.sibling = R, C = R);
    return e && j.forEach(function(lt) {
      return t(h, lt);
    }), K && qt(h, P), S;
  }
  function T(h, p, m, x) {
    if (typeof m == "object" && m !== null && m.type === Tn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case xi:
          e: {
            for (var S = m.key, C = p; C !== null; ) {
              if (C.key === S) {
                if (S = m.type, S === Tn) {
                  if (C.tag === 7) {
                    n(h, C.sibling), p = i(C, m.props.children), p.return = h, h = p;
                    break e;
                  }
                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Dt && lc(S) === C.type) {
                  n(h, C.sibling), p = i(C, m.props), p.ref = hr(h, C, m), p.return = h, h = p;
                  break e;
                }
                n(h, C);
                break;
              } else t(h, C);
              C = C.sibling;
            }
            m.type === Tn ? (p = ln(m.props.children, h.mode, x, m.key), p.return = h, h = p) : (x = Yi(m.type, m.key, m.props, null, h.mode, x), x.ref = hr(h, p, m), x.return = h, h = x);
          }
          return s(h);
        case kn:
          e: {
            for (C = m.key; p !== null; ) {
              if (p.key === C) if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                n(h, p.sibling), p = i(p, m.children || []), p.return = h, h = p;
                break e;
              } else {
                n(h, p);
                break;
              }
              else t(h, p);
              p = p.sibling;
            }
            p = js(m, h.mode, x), p.return = h, h = p;
          }
          return s(h);
        case Dt:
          return C = m._init, T(h, p, C(m._payload), x);
      }
      if (Sr(m)) return y(h, p, m, x);
      if (ur(m)) return v(h, p, m, x);
      Ri(h, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(h, p.sibling), p = i(p, m), p.return = h, h = p) : (n(h, p), p = Es(m, h.mode, x), p.return = h, h = p), s(h)) : n(h, p);
  }
  return T;
}
var Qn = dp(!0), pp = dp(!1), ho = Ht(null), mo = null, Mn = null, wl = null;
function Sl() {
  wl = Mn = mo = null;
}
function kl(e) {
  var t = ho.current;
  W(ho), e._currentValue = t;
}
function ga(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function bn(e, t) {
  mo = e, wl = Mn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0), e.firstContext = null);
}
function be(e) {
  var t = e._currentValue;
  if (wl !== e) if (e = { context: e, memoizedValue: t, next: null }, Mn === null) {
    if (mo === null) throw Error(E(308));
    Mn = e, mo.dependencies = { lanes: 0, firstContext: e };
  } else Mn = Mn.next = e;
  return t;
}
var rn = null;
function Tl(e) {
  rn === null ? rn = [e] : rn.push(e);
}
function hp(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? (n.next = n, Tl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Cl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function mp(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function gt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, F & 2) {
    var i = r.pending;
    return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, St(e, n);
  }
  return i = r.interleaved, i === null ? (t.next = t, Tl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, St(e, n);
}
function Wi(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ul(e, n);
  }
}
function uc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? i = o = s : o = o.next = s, n = n.next;
      } while (n !== null);
      o === null ? i = o = t : o = o.next = t;
    } else i = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function go(e, t, n, r) {
  var i = e.updateQueue;
  At = !1;
  var o = i.firstBaseUpdate, s = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, s === null ? o = u : s.next = u, s = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l));
  }
  if (o !== null) {
    var f = i.baseState;
    s = 0, c = u = l = null, a = o;
    do {
      var d = a.lane, g = a.eventTime;
      if ((r & d) === d) {
        c !== null && (c = c.next = {
          eventTime: g,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var y = e, v = a;
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
              f = Y({}, f, d);
              break e;
            case 2:
              At = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
      } else g = { eventTime: g, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, c === null ? (u = c = g, l = f) : c = c.next = g, s |= d;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (!0);
    if (c === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
      i = t;
      do
        s |= i.lane, i = i.next;
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    pn |= s, e.lanes = s, e.memoizedState = f;
  }
}
function cc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], i = r.callback;
    if (i !== null) {
      if (r.callback = null, r = n, typeof i != "function") throw Error(E(191, i));
      i.call(r);
    }
  }
}
var pi = {}, ot = Ht(pi), qr = Ht(pi), Jr = Ht(pi);
function on(e) {
  if (e === pi) throw Error(E(174));
  return e;
}
function Pl(e, t) {
  switch (B(Jr, t), B(qr, e), B(ot, pi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ys(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ys(t, e);
  }
  W(ot), B(ot, t);
}
function Xn() {
  W(ot), W(qr), W(Jr);
}
function gp(e) {
  on(Jr.current);
  var t = on(ot.current), n = Ys(t, e.type);
  t !== n && (B(qr, e), B(ot, n));
}
function El(e) {
  qr.current === e && (W(ot), W(qr));
}
var Q = Ht(0);
function yo(e) {
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
var ws = [];
function jl() {
  for (var e = 0; e < ws.length; e++) ws[e]._workInProgressVersionPrimary = null;
  ws.length = 0;
}
var Ki = Pt.ReactCurrentDispatcher, Ss = Pt.ReactCurrentBatchConfig, dn = 0, X = null, oe = null, ae = null, vo = !1, Vr = !1, ei = 0, Uy = 0;
function he() {
  throw Error(E(321));
}
function Dl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Je(e[n], t[n])) return !1;
  return !0;
}
function Al(e, t, n, r, i, o) {
  if (dn = o, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ki.current = e === null || e.memoizedState === null ? Ky : Hy, e = n(r, i), Vr) {
    o = 0;
    do {
      if (Vr = !1, ei = 0, 25 <= o) throw Error(E(301));
      o += 1, ae = oe = null, t.updateQueue = null, Ki.current = Gy, e = n(r, i);
    } while (Vr);
  }
  if (Ki.current = xo, t = oe !== null && oe.next !== null, dn = 0, ae = oe = X = null, vo = !1, t) throw Error(E(300));
  return e;
}
function Rl() {
  var e = ei !== 0;
  return ei = 0, e;
}
function nt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ae === null ? X.memoizedState = ae = e : ae = ae.next = e, ae;
}
function We() {
  if (oe === null) {
    var e = X.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ae === null ? X.memoizedState : ae.next;
  if (t !== null) ae = t, oe = e;
  else {
    if (e === null) throw Error(E(310));
    oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ae === null ? X.memoizedState = ae = e : ae = ae.next = e;
  }
  return ae;
}
function ti(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ks(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = oe, i = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      i.next = o.next, o.next = s;
    }
    r.baseQueue = i = o, n.pending = null;
  }
  if (i !== null) {
    o = i.next, r = r.baseState;
    var a = s = null, l = null, u = o;
    do {
      var c = u.lane;
      if ((dn & c) === c) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = f, s = r) : l = l.next = f, X.lanes |= c, pn |= c;
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? s = r : l.next = a, Je(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    i = e;
    do
      o = i.lane, X.lanes |= o, pn |= o, i = i.next;
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ts(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, i = n.pending, o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== i);
    Je(o, t.memoizedState) || (Pe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function yp() {
}
function vp(e, t) {
  var n = X, r = We(), i = t(), o = !Je(r.memoizedState, i);
  if (o && (r.memoizedState = i, Pe = !0), r = r.queue, Ml(Sp.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ae !== null && ae.memoizedState.tag & 1) {
    if (n.flags |= 2048, ni(9, wp.bind(null, n, r, i, t), void 0, null), le === null) throw Error(E(349));
    dn & 30 || xp(n, t, i);
  }
  return i;
}
function xp(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function wp(e, t, n, r) {
  t.value = n, t.getSnapshot = r, kp(t) && Tp(e);
}
function Sp(e, t, n) {
  return n(function() {
    kp(t) && Tp(e);
  });
}
function kp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Je(e, n);
  } catch {
    return !0;
  }
}
function Tp(e) {
  var t = St(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function fc(e) {
  var t = nt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ti, lastRenderedState: e }, t.queue = e, e = e.dispatch = Wy.bind(null, X, e), [t.memoizedState, e];
}
function ni(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = X.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, X.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Cp() {
  return We().memoizedState;
}
function Hi(e, t, n, r) {
  var i = nt();
  X.flags |= e, i.memoizedState = ni(1 | t, n, void 0, r === void 0 ? null : r);
}
function zo(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (oe !== null) {
    var s = oe.memoizedState;
    if (o = s.destroy, r !== null && Dl(r, s.deps)) {
      i.memoizedState = ni(t, n, o, r);
      return;
    }
  }
  X.flags |= e, i.memoizedState = ni(1 | t, n, o, r);
}
function dc(e, t) {
  return Hi(8390656, 8, e, t);
}
function Ml(e, t) {
  return zo(2048, 8, e, t);
}
function Pp(e, t) {
  return zo(4, 2, e, t);
}
function Ep(e, t) {
  return zo(4, 4, e, t);
}
function jp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Dp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, zo(4, 4, jp.bind(null, t, e), n);
}
function Vl() {
}
function Ap(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Dl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Rp(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Dl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Mp(e, t, n) {
  return dn & 21 ? (Je(n, t) || (n = Id(), X.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Pe = !0), e.memoizedState = n);
}
function $y(e, t) {
  var n = z;
  z = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ss.transition;
  Ss.transition = {};
  try {
    e(!1), t();
  } finally {
    z = n, Ss.transition = r;
  }
}
function Vp() {
  return We().memoizedState;
}
function by(e, t, n) {
  var r = Bt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Lp(e)) Np(t, n);
  else if (n = hp(e, t, n, r), n !== null) {
    var i = Se();
    qe(n, e, r, i), _p(n, t, r);
  }
}
function Wy(e, t, n) {
  var r = Bt(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Lp(e)) Np(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, a = o(s, n);
      if (i.hasEagerState = !0, i.eagerState = a, Je(a, s)) {
        var l = t.interleaved;
        l === null ? (i.next = i, Tl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    n = hp(e, t, i, r), n !== null && (i = Se(), qe(n, e, r, i), _p(n, t, r));
  }
}
function Lp(e) {
  var t = e.alternate;
  return e === X || t !== null && t === X;
}
function Np(e, t) {
  Vr = vo = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function _p(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ul(e, n);
  }
}
var xo = { readContext: be, useCallback: he, useContext: he, useEffect: he, useImperativeHandle: he, useInsertionEffect: he, useLayoutEffect: he, useMemo: he, useReducer: he, useRef: he, useState: he, useDebugValue: he, useDeferredValue: he, useTransition: he, useMutableSource: he, useSyncExternalStore: he, useId: he, unstable_isNewReconciler: !1 }, Ky = { readContext: be, useCallback: function(e, t) {
  return nt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: be, useEffect: dc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hi(
    4194308,
    4,
    jp.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Hi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Hi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = nt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = nt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = by.bind(null, X, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = nt();
  return e = { current: e }, t.memoizedState = e;
}, useState: fc, useDebugValue: Vl, useDeferredValue: function(e) {
  return nt().memoizedState = e;
}, useTransition: function() {
  var e = fc(!1), t = e[0];
  return e = $y.bind(null, e[1]), nt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = X, i = nt();
  if (K) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), le === null) throw Error(E(349));
    dn & 30 || xp(r, t, n);
  }
  i.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return i.queue = o, dc(Sp.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, ni(9, wp.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = nt(), t = le.identifierPrefix;
  if (K) {
    var n = mt, r = ht;
    n = (r & ~(1 << 32 - Ze(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ei++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Uy++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Hy = {
  readContext: be,
  useCallback: Ap,
  useContext: be,
  useEffect: Ml,
  useImperativeHandle: Dp,
  useInsertionEffect: Pp,
  useLayoutEffect: Ep,
  useMemo: Rp,
  useReducer: ks,
  useRef: Cp,
  useState: function() {
    return ks(ti);
  },
  useDebugValue: Vl,
  useDeferredValue: function(e) {
    var t = We();
    return Mp(t, oe.memoizedState, e);
  },
  useTransition: function() {
    var e = ks(ti)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: yp,
  useSyncExternalStore: vp,
  useId: Vp,
  unstable_isNewReconciler: !1
}, Gy = { readContext: be, useCallback: Ap, useContext: be, useEffect: Ml, useImperativeHandle: Dp, useInsertionEffect: Pp, useLayoutEffect: Ep, useMemo: Rp, useReducer: Ts, useRef: Cp, useState: function() {
  return Ts(ti);
}, useDebugValue: Vl, useDeferredValue: function(e) {
  var t = We();
  return oe === null ? t.memoizedState = e : Mp(t, oe.memoizedState, e);
}, useTransition: function() {
  var e = Ts(ti)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: yp, useSyncExternalStore: vp, useId: Vp, unstable_isNewReconciler: !1 };
function Qe(e, t) {
  if (e && e.defaultProps) {
    t = Y({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ya(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bo = { isMounted: function(e) {
  return (e = e._reactInternals) ? gn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), i = Bt(e), o = gt(r, i);
  o.payload = t, n != null && (o.callback = n), t = Ot(e, o, i), t !== null && (qe(t, e, i, r), Wi(t, e, i));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Se(), i = Bt(e), o = gt(r, i);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Ot(e, o, i), t !== null && (qe(t, e, i, r), Wi(t, e, i));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Se(), r = Bt(e), i = gt(n, r);
  i.tag = 2, t != null && (i.callback = t), t = Ot(e, i, r), t !== null && (qe(t, e, r, n), Wi(t, e, r));
} };
function pc(e, t, n, r, i, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Qr(n, r) || !Qr(i, o) : !0;
}
function Ip(e, t, n) {
  var r = !1, i = bt, o = t.contextType;
  return typeof o == "object" && o !== null ? o = be(o) : (i = je(t) ? cn : xe.current, r = t.contextTypes, o = (r = r != null) ? Hn(e, i) : bt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Bo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function hc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
}
function va(e, t, n, r) {
  var i = e.stateNode;
  i.props = n, i.state = e.memoizedState, i.refs = {}, Cl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? i.context = be(o) : (o = je(t) ? cn : xe.current, i.context = Hn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ya(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Bo.enqueueReplaceState(i, i.state, null), go(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Yn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Sg(r), r = r.return;
    while (r);
    var i = n;
  } catch (o) {
    i = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Cs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Qy = typeof WeakMap == "function" ? WeakMap : Map;
function Fp(e, t, n) {
  n = gt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    So || (So = !0, Aa = r), xa(e, t);
  }, n;
}
function Op(e, t, n) {
  n = gt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    n.payload = function() {
      return r(i);
    }, n.callback = function() {
      xa(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    xa(e, t), typeof r != "function" && (zt === null ? zt = /* @__PURE__ */ new Set([this]) : zt.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function mc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qy();
    var i = /* @__PURE__ */ new Set();
    r.set(t, i);
  } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
  i.has(n) || (i.add(n), e = lv.bind(null, e, t, n), t.then(e, e));
}
function gc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function yc(e, t, n, r, i) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1), t.tag = 2, Ot(n, t, 1))), n.lanes |= 1), e);
}
var Xy = Pt.ReactCurrentOwner, Pe = !1;
function we(e, t, n, r) {
  t.child = e === null ? pp(t, null, n, r) : Qn(t, e.child, n, r);
}
function vc(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return bn(t, i), r = Al(e, t, n, r, o, i), n = Rl(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, kt(e, t, i)) : (K && n && yl(t), t.flags |= 1, we(e, t, r, i), t.child);
}
function xc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !Bl(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, zp(e, t, o, r, i)) : (e = Yi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & i)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Qr, n(s, r) && e.ref === t.ref) return kt(e, t, i);
  }
  return t.flags |= 1, e = Ut(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function zp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Qr(o, r) && e.ref === t.ref) if (Pe = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Pe = !0);
    else return t.lanes = e.lanes, kt(e, t, i);
  }
  return wa(e, t, n, r, i);
}
function Bp(e, t, n) {
  var r = t.pendingProps, i = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, B(Ln, Ae), Ae |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, B(Ln, Ae), Ae |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, B(Ln, Ae), Ae |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, B(Ln, Ae), Ae |= r;
  return we(e, t, i, n), t.child;
}
function Up(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function wa(e, t, n, r, i) {
  var o = je(n) ? cn : xe.current;
  return o = Hn(t, o), bn(t, i), n = Al(e, t, n, r, o, i), r = Rl(), e !== null && !Pe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, kt(e, t, i)) : (K && r && yl(t), t.flags |= 1, we(e, t, n, i), t.child);
}
function wc(e, t, n, r, i) {
  if (je(n)) {
    var o = !0;
    co(t);
  } else o = !1;
  if (bn(t, i), t.stateNode === null) Gi(e, t), Ip(t, n, r), va(t, n, r, i), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = be(u) : (u = je(n) ? cn : xe.current, u = Hn(t, u));
    var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && hc(t, s, r, u), At = !1;
    var d = t.memoizedState;
    s.state = d, go(t, r, s, i), l = t.memoizedState, a !== r || d !== l || Ee.current || At ? (typeof c == "function" && (ya(t, n, c, r), l = t.memoizedState), (a = At || pc(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, mp(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Qe(t.type, a), s.props = u, f = t.pendingProps, d = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = be(l) : (l = je(n) ? cn : xe.current, l = Hn(t, l));
    var g = n.getDerivedStateFromProps;
    (c = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && hc(t, s, r, l), At = !1, d = t.memoizedState, s.state = d, go(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || Ee.current || At ? (typeof g == "function" && (ya(t, n, g, r), y = t.memoizedState), (u = At || pc(t, n, u, r, d, y, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Sa(e, t, n, r, o, i);
}
function Sa(e, t, n, r, i, o) {
  Up(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && oc(t, n, !1), kt(e, t, o);
  r = t.stateNode, Xy.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Qn(t, e.child, null, o), t.child = Qn(t, null, a, o)) : we(e, t, a, o), t.memoizedState = r.state, i && oc(t, n, !0), t.child;
}
function $p(e) {
  var t = e.stateNode;
  t.pendingContext ? ic(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ic(e, t.context, !1), Pl(e, t.containerInfo);
}
function Sc(e, t, n, r, i) {
  return Gn(), xl(i), t.flags |= 256, we(e, t, n, r), t.child;
}
var ka = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ta(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bp(e, t, n) {
  var r = t.pendingProps, i = Q.current, o = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), B(Q, i & 1), e === null)
    return ma(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = bo(s, r, 0, null), e = ln(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ta(n), t.memoizedState = ka, e) : Ll(t, s));
  if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Yy(e, t, s, r, a, i, n);
  if (o) {
    o = r.fallback, s = t.mode, i = e.child, a = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Ut(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? o = Ut(a, o) : (o = ln(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ta(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = ka, r;
  }
  return o = e.child, e = o.sibling, r = Ut(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ll(e, t) {
  return t = bo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Mi(e, t, n, r) {
  return r !== null && xl(r), Qn(t, e.child, null, n), e = Ll(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Yy(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Cs(Error(E(422))), Mi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = bo({ mode: "visible", children: r.children }, i, 0, null), o = ln(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Qn(t, e.child, null, s), t.child.memoizedState = Ta(s), t.memoizedState = ka, o);
  if (!(t.mode & 1)) return Mi(e, t, s, null);
  if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
    return r = a, o = Error(E(419)), r = Cs(o, r, void 0), Mi(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, Pe || a) {
    if (r = le, r !== null) {
      switch (s & -s) {
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
      i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, St(e, i), qe(r, e, i, -1));
    }
    return zl(), r = Cs(Error(E(421))), Mi(e, t, s, r);
  }
  return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = uv.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Re = Ft(i.nextSibling), Me = t, K = !0, Ye = null, e !== null && (ze[Be++] = ht, ze[Be++] = mt, ze[Be++] = fn, ht = e.id, mt = e.overflow, fn = t), t = Ll(t, r.children), t.flags |= 4096, t);
}
function kc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ga(e.return, t, n);
}
function Ps(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i);
}
function Wp(e, t, n) {
  var r = t.pendingProps, i = r.revealOrder, o = r.tail;
  if (we(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
      else if (e.tag === 19) kc(e, n, t);
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
  if (B(Q, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && yo(e) === null && (i = n), n = n.sibling;
      n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ps(t, !1, i, n, o);
      break;
    case "backwards":
      for (n = null, i = t.child, t.child = null; i !== null; ) {
        if (e = i.alternate, e !== null && yo(e) === null) {
          t.child = i;
          break;
        }
        e = i.sibling, i.sibling = n, n = i, i = e;
      }
      Ps(t, !0, n, null, o);
      break;
    case "together":
      Ps(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Gi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function kt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Zy(e, t, n) {
  switch (t.tag) {
    case 3:
      $p(t), Gn();
      break;
    case 5:
      gp(t);
      break;
    case 1:
      je(t.type) && co(t);
      break;
    case 4:
      Pl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, i = t.memoizedProps.value;
      B(ho, r._currentValue), r._currentValue = i;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (B(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bp(e, t, n) : (B(Q, Q.current & 1), e = kt(e, t, n), e !== null ? e.sibling : null);
      B(Q, Q.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Wp(e, t, n);
        t.flags |= 128;
      }
      if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), B(Q, Q.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Bp(e, t, n);
  }
  return kt(e, t, n);
}
var Kp, Ca, Hp, Gp;
Kp = function(e, t) {
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
Ca = function() {
};
Hp = function(e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    e = t.stateNode, on(ot.current);
    var o = null;
    switch (n) {
      case "input":
        i = Hs(e, i), r = Hs(e, r), o = [];
        break;
      case "select":
        i = Y({}, i, { value: void 0 }), r = Y({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        i = Xs(e, i), r = Xs(e, r), o = [];
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = lo);
    }
    Zs(n, r);
    var s;
    n = null;
    for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var a = i[u];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ur.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = i?.[u], r.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        u,
        n
      )), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ur.hasOwnProperty(u) ? (l != null && u === "onScroll" && b("scroll", e), o || a === l || (o = [])) : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Gp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
  if (!K) switch (e.tailMode) {
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
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
  else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function qy(e, t, n) {
  var r = t.pendingProps;
  switch (vl(t), t.tag) {
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
      return me(t), null;
    case 1:
      return je(t.type) && uo(), me(t), null;
    case 3:
      return r = t.stateNode, Xn(), W(Ee), W(xe), jl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ai(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ye !== null && (Va(Ye), Ye = null))), Ca(e, t), me(t), null;
    case 5:
      El(t);
      var i = on(Jr.current);
      if (n = t.type, e !== null && t.stateNode != null) Hp(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return me(t), null;
        }
        if (e = on(ot.current), Ai(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[rt] = t, r[Zr] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              b("cancel", r), b("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              b("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Tr.length; i++) b(Tr[i], r);
              break;
            case "source":
              b("error", r);
              break;
            case "img":
            case "image":
            case "link":
              b(
                "error",
                r
              ), b("load", r);
              break;
            case "details":
              b("toggle", r);
              break;
            case "input":
              Mu(r, o), b("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, b("invalid", r);
              break;
            case "textarea":
              Lu(r, o), b("invalid", r);
          }
          Zs(n, o), i = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var a = o[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Di(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Di(
              r.textContent,
              a,
              e
            ), i = ["children", "" + a]) : Ur.hasOwnProperty(s) && a != null && s === "onScroll" && b("scroll", r);
          }
          switch (n) {
            case "input":
              wi(r), Vu(r, o, !0);
              break;
            case "textarea":
              wi(r), Nu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = lo);
          }
          r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[rt] = t, e[Zr] = r, Kp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = qs(n, r), n) {
              case "dialog":
                b("cancel", e), b("close", e), i = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                b("load", e), i = r;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Tr.length; i++) b(Tr[i], e);
                i = r;
                break;
              case "source":
                b("error", e), i = r;
                break;
              case "img":
              case "image":
              case "link":
                b(
                  "error",
                  e
                ), b("load", e), i = r;
                break;
              case "details":
                b("toggle", e), i = r;
                break;
              case "input":
                Mu(e, r), i = Hs(e, r), b("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, i = Y({}, r, { value: void 0 }), b("invalid", e);
                break;
              case "textarea":
                Lu(e, r), i = Xs(e, r), b("invalid", e);
                break;
              default:
                i = r;
            }
            Zs(n, i), a = i;
            for (o in a) if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === "style" ? Cd(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && kd(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && $r(e, l) : typeof l == "number" && $r(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ur.hasOwnProperty(o) ? l != null && o === "onScroll" && b("scroll", e) : l != null && rl(e, o, l, s));
            }
            switch (n) {
              case "input":
                wi(e), Vu(e, r, !1);
                break;
              case "textarea":
                wi(e), Nu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? zn(e, !!r.multiple, o, !1) : r.defaultValue != null && zn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = lo);
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
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Gp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = on(Jr.current), on(ot.current), Ai(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (o = r.nodeValue !== n) && (e = Me, e !== null)) switch (e.tag) {
            case 3:
              Di(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Di(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r;
      }
      return me(t), null;
    case 13:
      if (W(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && Re !== null && t.mode & 1 && !(t.flags & 128)) fp(), Gn(), t.flags |= 98560, o = !1;
        else if (o = Ai(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(E(317));
            o[rt] = t;
          } else Gn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          me(t), o = !1;
        } else Ye !== null && (Va(Ye), Ye = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? se === 0 && (se = 3) : zl())), t.updateQueue !== null && (t.flags |= 4), me(t), null);
    case 4:
      return Xn(), Ca(e, t), e === null && Xr(t.stateNode.containerInfo), me(t), null;
    case 10:
      return kl(t.type._context), me(t), null;
    case 17:
      return je(t.type) && uo(), me(t), null;
    case 19:
      if (W(Q), o = t.memoizedState, o === null) return me(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) mr(o, !1);
      else {
        if (se !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = yo(e), s !== null) {
            for (t.flags |= 128, mr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return B(Q, Q.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && re() > Zn && (t.flags |= 128, r = !0, mr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = yo(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !K) return me(t), null;
        } else 2 * re() - o.renderingStartTime > Zn && n !== 1073741824 && (t.flags |= 128, r = !0, mr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = re(), t.sibling = null, n = Q.current, B(Q, r ? n & 1 | 2 : n & 1), t) : (me(t), null);
    case 22:
    case 23:
      return Ol(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Jy(e, t) {
  switch (vl(t), t.tag) {
    case 1:
      return je(t.type) && uo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Xn(), W(Ee), W(xe), jl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return El(t), null;
    case 13:
      if (W(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        Gn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return W(Q), null;
    case 4:
      return Xn(), null;
    case 10:
      return kl(t.type._context), null;
    case 22:
    case 23:
      return Ol(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vi = !1, ye = !1, ev = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ee(e, t, r);
  }
  else n.current = null;
}
function Pa(e, t, n) {
  try {
    n();
  } catch (r) {
    ee(e, t, r);
  }
}
var Tc = !1;
function tv(e, t) {
  if (la = oo, e = qd(), gl(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var i = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var s = 0, a = -1, l = -1, u = 0, c = 0, f = e, d = null;
        t: for (; ; ) {
          for (var g; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (g = f.firstChild) !== null; )
            d = f, f = g;
          for (; ; ) {
            if (f === e) break t;
            if (d === n && ++u === i && (a = s), d === o && ++c === r && (l = s), (g = f.nextSibling) !== null) break;
            f = d, d = f.parentNode;
          }
          f = g;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ua = { focusedElem: e, selectionRange: n }, oo = !1, M = t; M !== null; ) if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
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
            var v = y.memoizedProps, T = y.memoizedState, h = t.stateNode, p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Qe(t.type, v), T);
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
          throw Error(E(163));
      }
    } catch (x) {
      ee(t, t.return, x);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, M = e;
      break;
    }
    M = t.return;
  }
  return y = Tc, Tc = !1, y;
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        i.destroy = void 0, o !== void 0 && Pa(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Uo(e, t) {
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
function Ea(e) {
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
function Qp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Qp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[Zr], delete t[da], delete t[Fy], delete t[Oy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = lo));
  else if (r !== 4 && (e = e.child, e !== null)) for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), e = e.sibling;
}
function Da(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Da(e, t, n), e = e.sibling; e !== null; ) Da(e, t, n), e = e.sibling;
}
var ue = null, Xe = !1;
function Et(e, t, n) {
  for (n = n.child; n !== null; ) Yp(e, t, n), n = n.sibling;
}
function Yp(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function") try {
    it.onCommitFiberUnmount(Lo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ye || Vn(n, t);
    case 6:
      var r = ue, i = Xe;
      ue = null, Et(e, t, n), ue = r, Xe = i, ue !== null && (Xe ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
      break;
    case 18:
      ue !== null && (Xe ? (e = ue, n = n.stateNode, e.nodeType === 8 ? vs(e.parentNode, n) : e.nodeType === 1 && vs(e, n), Hr(e)) : vs(ue, n.stateNode));
      break;
    case 4:
      r = ue, i = Xe, ue = n.stateNode.containerInfo, Xe = !0, Et(e, t, n), ue = r, Xe = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        i = r = r.next;
        do {
          var o = i, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Pa(n, t, s), i = i.next;
        } while (i !== r);
      }
      Et(e, t, n);
      break;
    case 1:
      if (!ye && (Vn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        ee(n, t, a);
      }
      Et(e, t, n);
      break;
    case 21:
      Et(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, Et(e, t, n), ye = r) : Et(e, t, n);
      break;
    default:
      Et(e, t, n);
  }
}
function Pc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ev()), t.forEach(function(r) {
      var i = cv.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(i, i));
    });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var i = n[r];
    try {
      var o = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            ue = a.stateNode, Xe = !1;
            break e;
          case 3:
            ue = a.stateNode.containerInfo, Xe = !0;
            break e;
          case 4:
            ue = a.stateNode.containerInfo, Xe = !0;
            break e;
        }
        a = a.return;
      }
      if (ue === null) throw Error(E(160));
      Yp(o, s, i), ue = null, Xe = !1;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      ee(i, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Zp(t, e), t = t.sibling;
}
function Zp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), tt(e), r & 4) {
        try {
          Lr(3, e, e.return), Uo(3, e);
        } catch (v) {
          ee(e, e.return, v);
        }
        try {
          Lr(5, e, e.return);
        } catch (v) {
          ee(e, e.return, v);
        }
      }
      break;
    case 1:
      Ke(t, e), tt(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (Ke(t, e), tt(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32) {
        var i = e.stateNode;
        try {
          $r(i, "");
        } catch (v) {
          ee(e, e.return, v);
        }
      }
      if (r & 4 && (i = e.stateNode, i != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && o.type === "radio" && o.name != null && xd(i, o), qs(a, s);
          var u = qs(a, o);
          for (s = 0; s < l.length; s += 2) {
            var c = l[s], f = l[s + 1];
            c === "style" ? Cd(i, f) : c === "dangerouslySetInnerHTML" ? kd(i, f) : c === "children" ? $r(i, f) : rl(i, c, f, u);
          }
          switch (a) {
            case "input":
              Gs(i, o);
              break;
            case "textarea":
              wd(i, o);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!o.multiple;
              var g = o.value;
              g != null ? zn(i, !!o.multiple, g, !1) : d !== !!o.multiple && (o.defaultValue != null ? zn(
                i,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : zn(i, !!o.multiple, o.multiple ? [] : "", !1));
          }
          i[Zr] = o;
        } catch (v) {
          ee(e, e.return, v);
        }
      }
      break;
    case 6:
      if (Ke(t, e), tt(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        i = e.stateNode, o = e.memoizedProps;
        try {
          i.nodeValue = o;
        } catch (v) {
          ee(e, e.return, v);
        }
      }
      break;
    case 3:
      if (Ke(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Hr(t.containerInfo);
      } catch (v) {
        ee(e, e.return, v);
      }
      break;
    case 4:
      Ke(t, e), tt(e);
      break;
    case 13:
      Ke(t, e), tt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (Il = re())), r & 4 && Pc(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (u = ye) || c, Ke(t, e), ye = u) : Ke(t, e), tt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for (M = e, c = e.child; c !== null; ) {
          for (f = M = c; M !== null; ) {
            switch (d = M, g = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Lr(4, d, d.return);
                break;
              case 1:
                Vn(d, d.return);
                var y = d.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = d, n = d.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (v) {
                    ee(r, n, v);
                  }
                }
                break;
              case 5:
                Vn(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  jc(f);
                  continue;
                }
            }
            g !== null ? (g.return = d, M = g) : jc(f);
          }
          c = c.sibling;
        }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                i = f.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Td("display", s));
              } catch (v) {
                ee(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (v) {
              ee(e, e.return, v);
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
      Ke(t, e), tt(e), r & 4 && Pc(e);
      break;
    case 21:
      break;
    default:
      Ke(
        t,
        e
      ), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && ($r(i, ""), r.flags &= -33);
          var o = Cc(e);
          Da(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Cc(e);
          ja(e, a, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (l) {
      ee(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function nv(e, t, n) {
  M = e, qp(e);
}
function qp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M, o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Vi;
      if (!s) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || ye;
        a = Vi;
        var u = ye;
        if (Vi = s, (ye = l) && !u) for (M = i; M !== null; ) s = M, l = s.child, s.tag === 22 && s.memoizedState !== null ? Dc(i) : l !== null ? (l.return = s, M = l) : Dc(i);
        for (; o !== null; ) M = o, qp(o), o = o.sibling;
        M = i, Vi = a, ye = u;
      }
      Ec(e);
    } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, M = o) : Ec(e);
  }
}
function Ec(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ye || Uo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ye) if (n === null) r.componentDidMount();
            else {
              var i = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
              r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && cc(t, o, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              cc(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
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
                  f !== null && Hr(f);
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
            throw Error(E(163));
        }
        ye || t.flags & 512 && Ea(t);
      } catch (d) {
        ee(t, t.return, d);
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
function jc(e) {
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
function Dc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Uo(4, t);
          } catch (l) {
            ee(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ee(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ea(t);
          } catch (l) {
            ee(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ea(t);
          } catch (l) {
            ee(t, s, l);
          }
      }
    } catch (l) {
      ee(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, M = a;
      break;
    }
    M = t.return;
  }
}
var rv = Math.ceil, wo = Pt.ReactCurrentDispatcher, Nl = Pt.ReactCurrentOwner, $e = Pt.ReactCurrentBatchConfig, F = 0, le = null, ie = null, de = 0, Ae = 0, Ln = Ht(0), se = 0, ri = null, pn = 0, $o = 0, _l = 0, Nr = null, Ce = null, Il = 0, Zn = 1 / 0, dt = null, So = !1, Aa = null, zt = null, Li = !1, Lt = null, ko = 0, _r = 0, Ra = null, Qi = -1, Xi = 0;
function Se() {
  return F & 6 ? re() : Qi !== -1 ? Qi : Qi = re();
}
function Bt(e) {
  return e.mode & 1 ? F & 2 && de !== 0 ? de & -de : By.transition !== null ? (Xi === 0 && (Xi = Id()), Xi) : (e = z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : bd(e.type)), e) : 1;
}
function qe(e, t, n, r) {
  if (50 < _r) throw _r = 0, Ra = null, Error(E(185));
  ci(e, n, r), (!(F & 2) || e !== le) && (e === le && (!(F & 2) && ($o |= n), se === 4 && Mt(e, de)), De(e, r), n === 1 && F === 0 && !(t.mode & 1) && (Zn = re() + 500, Oo && Gt()));
}
function De(e, t) {
  var n = e.callbackNode;
  Bg(e, t);
  var r = io(e, e === le ? de : 0);
  if (r === 0) n !== null && Fu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Fu(n), t === 1) e.tag === 0 ? zy(Ac.bind(null, e)) : lp(Ac.bind(null, e)), _y(function() {
      !(F & 6) && Gt();
    }), n = null;
    else {
      switch (Fd(r)) {
        case 1:
          n = ll;
          break;
        case 4:
          n = Nd;
          break;
        case 16:
          n = ro;
          break;
        case 536870912:
          n = _d;
          break;
        default:
          n = ro;
      }
      n = sh(n, Jp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Jp(e, t) {
  if (Qi = -1, Xi = 0, F & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (Wn() && e.callbackNode !== n) return null;
  var r = io(e, e === le ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = To(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = th();
    (le !== e || de !== t) && (dt = null, Zn = re() + 500, an(e, t));
    do
      try {
        sv();
        break;
      } catch (a) {
        eh(e, a);
      }
    while (!0);
    Sl(), wo.current = o, F = i, ie !== null ? t = 0 : (le = null, de = 0, t = se);
  }
  if (t !== 0) {
    if (t === 2 && (i = ra(e), i !== 0 && (r = i, t = Ma(e, i))), t === 1) throw n = ri, an(e, 0), Mt(e, r), De(e, re()), n;
    if (t === 6) Mt(e, r);
    else {
      if (i = e.current.alternate, !(r & 30) && !iv(i) && (t = To(e, r), t === 2 && (o = ra(e), o !== 0 && (r = o, t = Ma(e, o))), t === 1)) throw n = ri, an(e, 0), Mt(e, r), De(e, re()), n;
      switch (e.finishedWork = i, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Jt(e, Ce, dt);
          break;
        case 3:
          if (Mt(e, r), (r & 130023424) === r && (t = Il + 500 - re(), 10 < t)) {
            if (io(e, 0) !== 0) break;
            if (i = e.suspendedLanes, (i & r) !== r) {
              Se(), e.pingedLanes |= e.suspendedLanes & i;
              break;
            }
            e.timeoutHandle = fa(Jt.bind(null, e, Ce, dt), t);
            break;
          }
          Jt(e, Ce, dt);
          break;
        case 4:
          if (Mt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ze(r);
            o = 1 << s, s = t[s], s > i && (i = s), r &= ~o;
          }
          if (r = i, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * rv(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = fa(Jt.bind(null, e, Ce, dt), r);
            break;
          }
          Jt(e, Ce, dt);
          break;
        case 5:
          Jt(e, Ce, dt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return De(e, re()), e.callbackNode === n ? Jp.bind(null, e) : null;
}
function Ma(e, t) {
  var n = Nr;
  return e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256), e = To(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && Va(t)), e;
}
function Va(e) {
  Ce === null ? Ce = e : Ce.push.apply(Ce, e);
}
function iv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var i = n[r], o = i.getSnapshot;
        i = i.value;
        try {
          if (!Je(o(), i)) return !1;
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
function Mt(e, t) {
  for (t &= ~_l, t &= ~$o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ac(e) {
  if (F & 6) throw Error(E(327));
  Wn();
  var t = io(e, 0);
  if (!(t & 1)) return De(e, re()), null;
  var n = To(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ra(e);
    r !== 0 && (t = r, n = Ma(e, r));
  }
  if (n === 1) throw n = ri, an(e, 0), Mt(e, t), De(e, re()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jt(e, Ce, dt), De(e, re()), null;
}
function Fl(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    F = n, F === 0 && (Zn = re() + 500, Oo && Gt());
  }
}
function hn(e) {
  Lt !== null && Lt.tag === 0 && !(F & 6) && Wn();
  var t = F;
  F |= 1;
  var n = $e.transition, r = z;
  try {
    if ($e.transition = null, z = 1, e) return e();
  } finally {
    z = r, $e.transition = n, F = t, !(F & 6) && Gt();
  }
}
function Ol() {
  Ae = Ln.current, W(Ln);
}
function an(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ny(n)), ie !== null) for (n = ie.return; n !== null; ) {
    var r = n;
    switch (vl(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && uo();
        break;
      case 3:
        Xn(), W(Ee), W(xe), jl();
        break;
      case 5:
        El(r);
        break;
      case 4:
        Xn();
        break;
      case 13:
        W(Q);
        break;
      case 19:
        W(Q);
        break;
      case 10:
        kl(r.type._context);
        break;
      case 22:
      case 23:
        Ol();
    }
    n = n.return;
  }
  if (le = e, ie = e = Ut(e.current, null), de = Ae = t, se = 0, ri = null, _l = $o = pn = 0, Ce = Nr = null, rn !== null) {
    for (t = 0; t < rn.length; t++) if (n = rn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var i = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = i, r.next = s;
      }
      n.pending = r;
    }
    rn = null;
  }
  return e;
}
function eh(e, t) {
  do {
    var n = ie;
    try {
      if (Sl(), Ki.current = xo, vo) {
        for (var r = X.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), r = r.next;
        }
        vo = !1;
      }
      if (dn = 0, ae = oe = X = null, Vr = !1, ei = 0, Nl.current = null, n === null || n.return === null) {
        se = 1, ri = t, ie = null;
        break;
      }
      e: {
        var o = e, s = n.return, a = n, l = t;
        if (t = de, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, c = a, f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var g = gc(s);
          if (g !== null) {
            g.flags &= -257, yc(g, s, a, o, t), g.mode & 1 && mc(o, u, t), t = g, l = u;
            var y = t.updateQueue;
            if (y === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), t.updateQueue = v;
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              mc(o, u, t), zl();
              break e;
            }
            l = Error(E(426));
          }
        } else if (K && a.mode & 1) {
          var T = gc(s);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), yc(T, s, a, o, t), xl(Yn(l, a));
            break e;
          }
        }
        o = l = Yn(l, a), se !== 4 && (se = 2), Nr === null ? Nr = [o] : Nr.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var h = Fp(o, l, t);
              uc(o, h);
              break e;
            case 1:
              a = l;
              var p = o.type, m = o.stateNode;
              if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (zt === null || !zt.has(m)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var x = Op(o, a, t);
                uc(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      rh(n);
    } catch (S) {
      t = S, ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function th() {
  var e = wo.current;
  return wo.current = xo, e === null ? xo : e;
}
function zl() {
  (se === 0 || se === 3 || se === 2) && (se = 4), le === null || !(pn & 268435455) && !($o & 268435455) || Mt(le, de);
}
function To(e, t) {
  var n = F;
  F |= 2;
  var r = th();
  (le !== e || de !== t) && (dt = null, an(e, t));
  do
    try {
      ov();
      break;
    } catch (i) {
      eh(e, i);
    }
  while (!0);
  if (Sl(), F = n, wo.current = r, ie !== null) throw Error(E(261));
  return le = null, de = 0, se;
}
function ov() {
  for (; ie !== null; ) nh(ie);
}
function sv() {
  for (; ie !== null && !Mg(); ) nh(ie);
}
function nh(e) {
  var t = oh(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? rh(e) : ie = t, Nl.current = null;
}
function rh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Jy(n, t), n !== null) {
        n.flags &= 32767, ie = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        se = 6, ie = null;
        return;
      }
    } else if (n = qy(n, t, Ae), n !== null) {
      ie = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Jt(e, t, n) {
  var r = z, i = $e.transition;
  try {
    $e.transition = null, z = 1, av(e, t, n, r);
  } finally {
    $e.transition = i, z = r;
  }
  return null;
}
function av(e, t, n, r) {
  do
    Wn();
  while (Lt !== null);
  if (F & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Ug(e, o), e === le && (ie = le = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Li || (Li = !0, sh(ro, function() {
    return Wn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = $e.transition, $e.transition = null;
    var s = z;
    z = 1;
    var a = F;
    F |= 4, Nl.current = null, tv(e, n), Zp(n, e), jy(ua), oo = !!la, ua = la = null, e.current = n, nv(n), Vg(), F = a, z = s, $e.transition = o;
  } else e.current = n;
  if (Li && (Li = !1, Lt = e, ko = i), o = e.pendingLanes, o === 0 && (zt = null), _g(n.stateNode), De(e, re()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
  if (So) throw So = !1, e = Aa, Aa = null, e;
  return ko & 1 && e.tag !== 0 && Wn(), o = e.pendingLanes, o & 1 ? e === Ra ? _r++ : (_r = 0, Ra = e) : _r = 0, Gt(), null;
}
function Wn() {
  if (Lt !== null) {
    var e = Fd(ko), t = $e.transition, n = z;
    try {
      if ($e.transition = null, z = 16 > e ? 16 : e, Lt === null) var r = !1;
      else {
        if (e = Lt, Lt = null, ko = 0, F & 6) throw Error(E(331));
        var i = F;
        for (F |= 4, M = e.current; M !== null; ) {
          var o = M, s = o.child;
          if (M.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) f.return = c, M = f;
                  else for (; M !== null; ) {
                    c = M;
                    var d = c.sibling, g = c.return;
                    if (Qp(c), c === u) {
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
              var y = o.alternate;
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
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, M = s;
          else e: for (; M !== null; ) {
            if (o = M, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Lr(9, o, o.return);
            }
            var h = o.sibling;
            if (h !== null) {
              h.return = o.return, M = h;
              break e;
            }
            M = o.return;
          }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          s = M;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) m.return = s, M = m;
          else e: for (s = p; M !== null; ) {
            if (a = M, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Uo(9, a);
              }
            } catch (S) {
              ee(a, a.return, S);
            }
            if (a === s) {
              M = null;
              break e;
            }
            var x = a.sibling;
            if (x !== null) {
              x.return = a.return, M = x;
              break e;
            }
            M = a.return;
          }
        }
        if (F = i, Gt(), it && typeof it.onPostCommitFiberRoot == "function") try {
          it.onPostCommitFiberRoot(Lo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      z = n, $e.transition = t;
    }
  }
  return !1;
}
function Rc(e, t, n) {
  t = Yn(n, t), t = Fp(e, t, 1), e = Ot(e, t, 1), t = Se(), e !== null && (ci(e, 1, t), De(e, t));
}
function ee(e, t, n) {
  if (e.tag === 3) Rc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Rc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zt === null || !zt.has(r))) {
        e = Yn(n, e), e = Op(t, e, 1), t = Ot(t, e, 1), e = Se(), t !== null && (ci(t, 1, e), De(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function lv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Se(), e.pingedLanes |= e.suspendedLanes & n, le === e && (de & n) === n && (se === 4 || se === 3 && (de & 130023424) === de && 500 > re() - Il ? an(e, 0) : _l |= n), De(e, t);
}
function ih(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ti, Ti <<= 1, !(Ti & 130023424) && (Ti = 4194304)) : t = 1);
  var n = Se();
  e = St(e, t), e !== null && (ci(e, t, n), De(e, n));
}
function uv(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), ih(e, n);
}
function cv(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), ih(e, n);
}
var oh;
oh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Ee.current) Pe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Pe = !1, Zy(e, t, n);
    Pe = !!(e.flags & 131072);
  }
  else Pe = !1, K && t.flags & 1048576 && up(t, po, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Gi(e, t), e = t.pendingProps;
      var i = Hn(t, xe.current);
      bn(t, n), i = Al(null, t, r, e, i, n);
      var o = Rl();
      return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, je(r) ? (o = !0, co(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Cl(t), i.updater = Bo, t.stateNode = i, i._reactInternals = t, va(t, r, e, n), t = Sa(null, t, r, !0, o, n)) : (t.tag = 0, K && o && yl(t), we(null, t, i, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Gi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = dv(r), e = Qe(r, e), i) {
          case 0:
            t = wa(null, t, r, e, n);
            break e;
          case 1:
            t = wc(null, t, r, e, n);
            break e;
          case 11:
            t = vc(null, t, r, e, n);
            break e;
          case 14:
            t = xc(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(E(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Qe(r, i), wa(e, t, r, i, n);
    case 1:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Qe(r, i), wc(e, t, r, i, n);
    case 3:
      e: {
        if ($p(t), e === null) throw Error(E(387));
        r = t.pendingProps, o = t.memoizedState, i = o.element, mp(e, t), go(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          i = Yn(Error(E(423)), t), t = Sc(e, t, r, n, i);
          break e;
        } else if (r !== i) {
          i = Yn(Error(E(424)), t), t = Sc(e, t, r, n, i);
          break e;
        } else for (Re = Ft(t.stateNode.containerInfo.firstChild), Me = t, K = !0, Ye = null, n = pp(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Gn(), r === i) {
            t = kt(e, t, n);
            break e;
          }
          we(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return gp(t), e === null && ma(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, ca(r, i) ? s = null : o !== null && ca(r, o) && (t.flags |= 32), Up(e, t), we(e, t, s, n), t.child;
    case 6:
      return e === null && ma(t), null;
    case 13:
      return bp(e, t, n);
    case 4:
      return Pl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Qn(t, null, r, n) : we(e, t, r, n), t.child;
    case 11:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Qe(r, i), vc(e, t, r, i, n);
    case 7:
      return we(e, t, t.pendingProps, n), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, B(ho, r._currentValue), r._currentValue = s, o !== null) if (Je(o.value, s)) {
          if (o.children === i.children && !Ee.current) {
            t = kt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var a = o.dependencies;
          if (a !== null) {
            s = o.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = gt(-1, n & -n), l.tag = 2;
                  var u = o.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var c = u.pending;
                    c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), ga(
                  o.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (s = o.return, s === null) throw Error(E(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), ga(s, n, t), s = o.sibling;
          } else s = o.child;
          if (s !== null) s.return = o;
          else for (s = o; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (o = s.sibling, o !== null) {
              o.return = s.return, s = o;
              break;
            }
            s = s.return;
          }
          o = s;
        }
        we(e, t, i.children, n), t = t.child;
      }
      return t;
    case 9:
      return i = t.type, r = t.pendingProps.children, bn(t, n), i = be(i), r = r(i), t.flags |= 1, we(e, t, r, n), t.child;
    case 14:
      return r = t.type, i = Qe(r, t.pendingProps), i = Qe(r.type, i), xc(e, t, r, i, n);
    case 15:
      return zp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Qe(r, i), Gi(e, t), t.tag = 1, je(r) ? (e = !0, co(t)) : e = !1, bn(t, n), Ip(t, r, i), va(t, r, i, n), Sa(null, t, r, !0, e, n);
    case 19:
      return Wp(e, t, n);
    case 22:
      return Bp(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function sh(e, t) {
  return Ld(e, t);
}
function fv(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ue(e, t, n, r) {
  return new fv(e, t, n, r);
}
function Bl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function dv(e) {
  if (typeof e == "function") return Bl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ol) return 11;
    if (e === sl) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ue(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Yi(e, t, n, r, i, o) {
  var s = 2;
  if (r = e, typeof e == "function") Bl(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Tn:
      return ln(n.children, i, o, t);
    case il:
      s = 8, i |= 8;
      break;
    case $s:
      return e = Ue(12, n, t, i | 2), e.elementType = $s, e.lanes = o, e;
    case bs:
      return e = Ue(13, n, t, i), e.elementType = bs, e.lanes = o, e;
    case Ws:
      return e = Ue(19, n, t, i), e.elementType = Ws, e.lanes = o, e;
    case gd:
      return bo(n, i, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case hd:
          s = 10;
          break e;
        case md:
          s = 9;
          break e;
        case ol:
          s = 11;
          break e;
        case sl:
          s = 14;
          break e;
        case Dt:
          s = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = Ue(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t;
}
function ln(e, t, n, r) {
  return e = Ue(7, e, r, t), e.lanes = n, e;
}
function bo(e, t, n, r) {
  return e = Ue(22, e, r, t), e.elementType = gd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Es(e, t, n) {
  return e = Ue(6, e, null, t), e.lanes = n, e;
}
function js(e, t, n) {
  return t = Ue(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function pv(e, t, n, r, i) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = as(0), this.expirationTimes = as(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = as(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Ul(e, t, n, r, i, o, s, a, l) {
  return e = new pv(e, t, n, a, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ue(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(o), e;
}
function hv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: kn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ah(e) {
  if (!e) return bt;
  e = e._reactInternals;
  e: {
    if (gn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (je(n)) return ap(e, n, t);
  }
  return t;
}
function lh(e, t, n, r, i, o, s, a, l) {
  return e = Ul(n, r, !0, e, i, o, s, a, l), e.context = ah(null), n = e.current, r = Se(), i = Bt(n), o = gt(r, i), o.callback = t ?? null, Ot(n, o, i), e.current.lanes = i, ci(e, i, r), De(e, r), e;
}
function Wo(e, t, n, r) {
  var i = t.current, o = Se(), s = Bt(i);
  return n = ah(n), t.context === null ? t.context = n : t.pendingContext = n, t = gt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ot(i, t, s), e !== null && (qe(e, i, s, o), Wi(e, i, s)), s;
}
function Co(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $l(e, t) {
  Mc(e, t), (e = e.alternate) && Mc(e, t);
}
function mv() {
  return null;
}
var uh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function bl(e) {
  this._internalRoot = e;
}
Ko.prototype.render = bl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Wo(e, t, null, null);
};
Ko.prototype.unmount = bl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hn(function() {
      Wo(null, e, null, null);
    }), t[wt] = null;
  }
};
function Ko(e) {
  this._internalRoot = e;
}
Ko.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Bd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++) ;
    Rt.splice(n, 0, e), n === 0 && $d(e);
  }
};
function Wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ho(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Vc() {
}
function gv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var u = Co(s);
        o.call(u);
      };
    }
    var s = lh(t, r, e, 0, null, !1, !1, "", Vc);
    return e._reactRootContainer = s, e[wt] = s.current, Xr(e.nodeType === 8 ? e.parentNode : e), hn(), s;
  }
  for (; i = e.lastChild; ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = Co(l);
      a.call(u);
    };
  }
  var l = Ul(e, 0, !1, null, null, !1, !1, "", Vc);
  return e._reactRootContainer = l, e[wt] = l.current, Xr(e.nodeType === 8 ? e.parentNode : e), hn(function() {
    Wo(t, l, n, r);
  }), l;
}
function Go(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = Co(s);
        a.call(l);
      };
    }
    Wo(t, s, e, i);
  } else s = gv(n, t, e, i, r);
  return Co(s);
}
Od = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kr(t.pendingLanes);
        n !== 0 && (ul(t, n | 1), De(t, re()), !(F & 6) && (Zn = re() + 500, Gt()));
      }
      break;
    case 13:
      hn(function() {
        var r = St(e, 1);
        if (r !== null) {
          var i = Se();
          qe(r, e, 1, i);
        }
      }), $l(e, 1);
  }
};
cl = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Se();
      qe(t, e, 134217728, n);
    }
    $l(e, 134217728);
  }
};
zd = function(e) {
  if (e.tag === 13) {
    var t = Bt(e), n = St(e, t);
    if (n !== null) {
      var r = Se();
      qe(n, e, t, r);
    }
    $l(e, t);
  }
};
Bd = function() {
  return z;
};
Ud = function(e, t) {
  var n = z;
  try {
    return z = e, t();
  } finally {
    z = n;
  }
};
ea = function(e, t, n) {
  switch (t) {
    case "input":
      if (Gs(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Fo(r);
            if (!i) throw Error(E(90));
            vd(r), Gs(r, i);
          }
        }
      }
      break;
    case "textarea":
      wd(e, n);
      break;
    case "select":
      t = n.value, t != null && zn(e, !!n.multiple, t, !1);
  }
};
jd = Fl;
Dd = hn;
var yv = { usingClientEntryPoint: !1, Events: [di, jn, Fo, Pd, Ed, Fl] }, gr = { findFiberByHostInstance: nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, vv = { bundleType: gr.bundleType, version: gr.version, rendererPackageName: gr.rendererPackageName, rendererConfig: gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Pt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Md(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gr.findFiberByHostInstance || mv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ni.isDisabled && Ni.supportsFiber) try {
    Lo = Ni.inject(vv), it = Ni;
  } catch {
  }
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv;
_e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wl(t)) throw Error(E(200));
  return hv(e, t, null, n);
};
_e.createRoot = function(e, t) {
  if (!Wl(e)) throw Error(E(299));
  var n = !1, r = "", i = uh;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ul(e, 1, !1, null, null, n, !1, r, i), e[wt] = t.current, Xr(e.nodeType === 8 ? e.parentNode : e), new bl(t);
};
_e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = Md(t), e = e === null ? null : e.stateNode, e;
};
_e.flushSync = function(e) {
  return hn(e);
};
_e.hydrate = function(e, t, n) {
  if (!Ho(t)) throw Error(E(200));
  return Go(null, e, t, !0, n);
};
_e.hydrateRoot = function(e, t, n) {
  if (!Wl(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, i = !1, o = "", s = uh;
  if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = lh(t, null, e, 1, n ?? null, i, !1, o, s), e[wt] = t.current, Xr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
    n,
    i
  );
  return new Ko(t);
};
_e.render = function(e, t, n) {
  if (!Ho(t)) throw Error(E(200));
  return Go(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function(e) {
  if (!Ho(e)) throw Error(E(40));
  return e._reactRootContainer ? (hn(function() {
    Go(null, null, e, !1, function() {
      e._reactRootContainer = null, e[wt] = null;
    });
  }), !0) : !1;
};
_e.unstable_batchedUpdates = Fl;
_e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ho(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Go(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function ch() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ch);
    } catch (e) {
      console.error(e);
    }
}
ch(), cd.exports = _e;
var xv = cd.exports, fh, Lc = xv;
fh = Lc.createRoot, Lc.hydrateRoot;
const wv = '.jwf{--tm-bg: #000000;--tm-surface: #0d0d0d;--tm-fg: #ffffff;--tm-dim: #8a8a8a;--tm-faint: #4a4a4a;--tm-border: #262626;--tm-accent: #ffffff;--tm-accent-fg: #000000;--tm-radius: 14px;--tm-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--tm-font-digit: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;--jwf-tabbar-height: 44px;position:relative;display:flex;flex-direction:column;height:100%;min-height:320px;background:var(--tm-bg);color:var(--tm-fg);font-family:var(--tm-font);margin:-1px;border-radius:inherit}.jwf *,.jwf *:before,.jwf *:after{box-sizing:border-box}:where(.jwf button){font-family:inherit;cursor:pointer;border:none;background:none;color:inherit;padding:0;outline:none}:where(.jwf input){font-family:inherit;outline:none}.jwf-tabs{display:flex;align-items:stretch;gap:22px;height:var(--jwf-tabbar-height);padding:0 22px;border-bottom:1px solid var(--tm-border);user-select:none;flex:none}.jwf-tab{position:relative;display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:var(--tm-faint);transition:color .18s ease}.jwf-tab:hover{color:var(--tm-dim)}.jwf-tab[data-active=true]{color:var(--tm-fg)}.jwf-tab[data-active=true]:after{content:"";position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--tm-accent)}.jwf-tab-dot{width:5px;height:5px;border-radius:999px;background:currentColor;animation:jwf-pulse 2.4s ease-in-out infinite}@keyframes jwf-pulse{0%,to{opacity:1}50%{opacity:.25}}.tm-tab{position:static;flex:1;display:flex;flex-direction:column;align-items:center;gap:28px;padding:34px 32px 30px}.tm-clock{position:absolute;top:calc(var(--jwf-tabbar-height) + 14px);left:18px;font-size:15px;font-weight:300;letter-spacing:-.01em;color:var(--tm-dim);transition:opacity .35s ease;user-select:none}.tm-clock[data-dimmed=true]{opacity:.15}.tm-digits{font-family:var(--tm-font-digit);font-size:72px;line-height:1;font-variant-numeric:tabular-nums;letter-spacing:-.02em;user-select:none;transition:color .5s ease}.tm-digits[data-state=idle]{color:var(--tm-dim)}.tm-digits[data-state=finished]{color:var(--tm-faint)}.tm-label{font-size:11px;font-weight:500;letter-spacing:.09em;text-transform:uppercase;color:var(--tm-dim)}.tm-presets{display:flex;flex-wrap:wrap;justify-content:center;gap:7px}.tm-preset{border-radius:999px;padding:7px 15px;font-size:13px;font-weight:500;background:var(--tm-surface);color:var(--tm-dim);border:1px solid var(--tm-border);transition:all .18s ease}.tm-preset:hover{color:var(--tm-fg)}.tm-preset[data-selected=true]{background:var(--tm-accent);color:var(--tm-accent-fg);border-color:var(--tm-accent)}.tm-custom{width:108px;border-radius:10px;border:1px solid var(--tm-border);background:var(--tm-surface);color:var(--tm-fg);padding:8px 12px;text-align:center;font-size:13px}.tm-custom::placeholder{color:var(--tm-faint)}.tm-row{display:flex;align-items:center;gap:10px}.tm-primary{border-radius:999px;padding:11px 34px;font-size:14px;font-weight:500;background:var(--tm-accent);color:var(--tm-accent-fg);transition:opacity .18s ease,transform .12s ease}.tm-primary:hover{opacity:.88}.tm-primary:active{transform:scale(.97)}.tm-circle{width:46px;height:46px;border-radius:999px;display:flex;align-items:center;justify-content:center;background:var(--tm-surface);border:1px solid var(--tm-border);color:var(--tm-fg);transition:background .18s ease,transform .12s ease}.tm-circle:hover{background:var(--tm-border)}.tm-circle:active{transform:scale(.95)}.tm-ghost{font-size:12px;color:var(--tm-dim);transition:color .18s ease}.tm-ghost:hover{color:var(--tm-fg)}.tm-reminders{width:100%;max-width:330px}.tm-reminders-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.tm-reminder{display:flex;align-items:center;justify-content:space-between;padding:10px 13px;border-radius:var(--tm-radius);background:var(--tm-surface);border:1px solid var(--tm-border);margin-bottom:6px}.tm-reminder-label{font-size:13px;color:var(--tm-fg)}.tm-reminder-sub{font-size:11px;color:var(--tm-dim)}.tm-add{display:flex;flex-direction:column;gap:8px;padding:13px;border-radius:var(--tm-radius);background:var(--tm-surface);border:1px solid var(--tm-border);margin-bottom:8px}.tm-add input{border-radius:9px;border:1px solid var(--tm-border);background:var(--tm-bg);color:var(--tm-fg);padding:7px 10px;font-size:13px}.tm-chip{font-size:11px;color:var(--tm-dim);background:var(--tm-surface);border:1px solid var(--tm-border);border-radius:999px;padding:4px 11px}.tm-alert{position:absolute;inset:0;z-index:2;display:flex;align-items:center;justify-content:center;background:color-mix(in srgb,var(--tm-bg) 88%,transparent);backdrop-filter:blur(6px);border-radius:inherit}.tm-alert-card{display:flex;flex-direction:column;align-items:center;gap:18px;padding:32px 36px;border-radius:22px;background:var(--tm-surface);border:1px solid var(--tm-border);max-width:300px;text-align:center}.tm-alert-icon{width:56px;height:56px;border-radius:999px;background:var(--tm-accent);color:var(--tm-accent-fg);display:flex;align-items:center;justify-content:center;font-size:26px}.tm-footer{display:flex;align-items:center;justify-content:center;gap:8px;padding-top:2px}.tm-toggle{display:inline-flex;align-items:center;gap:7px;font-size:11px;color:var(--tm-faint);transition:color .18s ease}.tm-toggle:hover{color:var(--tm-dim)}.tm-toggle-dot{width:7px;height:7px;border-radius:999px;border:1px solid currentColor}.tm-toggle[data-on=true] .tm-toggle-dot{background:currentColor}.jwf-tasks{position:relative;flex:1;display:flex;flex-direction:column;padding:12px 22px 16px;min-height:0}.jwf-menu-backdrop{position:absolute;inset:0;z-index:5}.jwf-menu{position:absolute;z-index:6;min-width:148px;padding:4px;border-radius:10px;background:var(--tm-surface);border:1px solid var(--tm-border);box-shadow:0 8px 24px #00000073}.jwf-menu-item{display:block;width:100%;text-align:left;padding:8px 12px;border-radius:7px;font-size:13px;color:var(--tm-fg);transition:background .12s ease}.jwf-menu-item:hover,.jwf-menu-item:focus-visible{background:var(--tm-border);outline:none}.jwf-subtabs{display:flex;align-items:center;gap:16px;padding-bottom:8px;border-bottom:1px solid var(--tm-border);user-select:none;flex:none}.jwf-subtab{font-size:11px;font-weight:500;letter-spacing:.07em;text-transform:uppercase;color:var(--tm-faint);transition:color .18s ease}.jwf-subtab:hover{color:var(--tm-dim)}.jwf-subtab[data-active=true]{color:var(--tm-fg)}.jwf-filters{display:flex;align-items:center;gap:6px;padding:10px 0 6px;flex:none}.jwf-filter{border-radius:999px;border:1px solid var(--tm-border);background:var(--tm-surface);color:var(--tm-dim);padding:4px 12px;font-size:11px;transition:all .18s ease}.jwf-filter:hover{color:var(--tm-fg)}.jwf-filter[data-active=true]{background:var(--tm-accent);border-color:var(--tm-accent);color:var(--tm-accent-fg)}.jwf-task-list{flex:1;overflow-y:auto;min-height:0;padding-right:4px}.jwf-task{display:flex;align-items:baseline;gap:11px;width:100%;text-align:left;padding:7px 6px;margin-left:-6px;border-radius:8px;font-size:14px;line-height:1.45;user-select:none;transition:background .15s ease}.jwf-task:hover{background:var(--tm-surface)}.jwf-task-text{color:var(--tm-fg);overflow-wrap:anywhere;transition:color .2s ease}.jwf-task-text[data-done=true]{color:var(--tm-faint);text-decoration:line-through;text-decoration-color:var(--tm-faint)}.jwf-task-date{margin-left:auto;flex:none;font-size:11px;font-family:var(--tm-font-digit);color:var(--tm-faint);user-select:none}.jwf-done-empty{font-size:12px;color:var(--tm-faint);text-align:center;padding:14px 0}.jwf-task-input-row{flex:none;padding-top:12px}.jwf-task-input{width:100%;border:none;border-top:1px solid var(--tm-border);background:transparent;color:var(--tm-fg);padding:10px 2px 2px;font-size:14px}.jwf-task-input::placeholder{color:var(--tm-faint)}.jwf-check{flex:none;position:relative;width:15px;height:15px;align-self:center;border-radius:4px;border:1px solid var(--tm-faint);transition:background .15s ease,border-color .15s ease}.jwf-check:hover{border-color:var(--tm-dim)}.jwf-check[data-done=true]{background:var(--tm-accent);border-color:var(--tm-accent)}.jwf-check[data-done=true]:after{content:"";position:absolute;left:50%;top:50%;width:30%;height:55%;border:solid var(--tm-accent-fg);border-width:0 2px 2px 0;transform:translate(-50%,-60%) rotate(40deg)}.jwf-check[data-sub=true]{width:12px;height:12px}.jwf-subtab{white-space:nowrap}.jwf-search{margin-left:auto;width:120px;border:none;border-bottom:1px solid var(--tm-border);background:transparent;color:var(--tm-fg);padding:3px 2px;font-size:12px}.jwf-search::placeholder{color:var(--tm-faint)}.jwf-search:focus{border-bottom-color:var(--tm-dim)}.jwf-ghost-clear{margin-left:auto;font-size:11px;color:var(--tm-faint);transition:color .18s ease}.jwf-ghost-clear:hover:not(:disabled){color:var(--tm-fg)}.jwf-ghost-clear:disabled{opacity:.35;cursor:default}.jwf-task[data-sub=true]{padding-left:32px;font-size:13px}.jwf-task-text{cursor:default}.jwf-task-progress{margin-left:8px;font-size:11px;font-family:var(--tm-font-digit);color:var(--tm-faint)}.jwf-task-date[data-overdue=true]{color:var(--tm-fg);font-weight:600}.jwf-edit-input,.jwf-due-input{flex:1;border:none;border-bottom:1px solid var(--tm-dim);background:transparent;color:var(--tm-fg);padding:0 0 2px;font-size:14px}.jwf-due-input{color-scheme:dark;font-family:var(--tm-font-digit);font-size:13px}.jwf-sub-input-row{padding:2px 0 4px 26px}.jwf-sub-input{border-top:none;border-bottom:1px solid var(--tm-border);padding:4px 2px;font-size:13px}.jwf-undo{position:absolute;left:50%;bottom:54px;transform:translate(-50%);display:flex;align-items:center;gap:12px;padding:7px 8px 7px 14px;border-radius:999px;background:var(--tm-surface);border:1px solid var(--tm-border);font-size:12px;color:var(--tm-dim);z-index:4}.jwf-undo button{font-size:12px;color:var(--tm-fg);padding:3px 10px;border-radius:999px;transition:background .15s ease}.jwf-undo button:hover{background:var(--tm-border)}.jwf-menu-item[data-danger]{color:var(--tm-dim)}.jwf-menu-item[data-danger]:hover{color:var(--tm-fg)}.jwf-modal{height:auto;min-height:0;margin:0;width:440px}.jwf-modal .jwf-tasks{max-height:480px}', Nc = "jwf-styles";
function Sv() {
  if (document.getElementById(Nc)) return;
  const e = document.createElement("style");
  e.id = Nc, e.textContent = wv, document.head.append(e);
}
const kv = [
  ["--tm-bg", "--theme-canvas"],
  ["--tm-surface", "--theme-surface"],
  ["--tm-fg", "--theme-ink"],
  ["--tm-dim", "--theme-ink-dim"],
  ["--tm-faint", "--theme-muted"],
  ["--tm-border", "--theme-border"],
  ["--tm-accent", "--theme-accent"],
  ["--tm-accent-fg", "--theme-accent-fg"]
], Tv = [
  ["--tm-font-digit", "--theme-font-code"]
];
function Cv(e, t) {
  const n = getComputedStyle(document.documentElement);
  for (const [r, i] of [...kv, ...Tv]) {
    if (!t) {
      e.style.removeProperty(r);
      continue;
    }
    const o = n.getPropertyValue(i).trim();
    o && e.style.setProperty(r, o);
  }
}
function Pv(e) {
  const t = new MutationObserver(e);
  return t.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["data-mode", "data-contrast", "style", "class"]
  }), () => t.disconnect();
}
function Ev({
  activeTab: e,
  timerRunning: t,
  onSelect: n
}) {
  return /* @__PURE__ */ w.jsxs("nav", { className: "jwf-tabs", role: "tablist", "aria-label": "Workspace lanes", children: [
    /* @__PURE__ */ w.jsxs(
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
          t && e !== "timer" ? /* @__PURE__ */ w.jsx("span", { className: "jwf-tab-dot" }) : null
        ]
      }
    ),
    /* @__PURE__ */ w.jsx(
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
const Kl = k.createContext({});
function yn(e) {
  const t = k.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Qo = k.createContext(null), Xo = k.createContext({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class jv extends k.Component {
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
function Dv({ children: e, isPresent: t }) {
  const n = k.useId(), r = k.useRef(null), i = k.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: o } = k.useContext(Xo);
  return k.useInsertionEffect(() => {
    const { width: s, height: a, top: l, left: u } = i.current;
    if (t || !r.current || !s || !a)
      return;
    r.current.dataset.motionPopId = n;
    const c = document.createElement("style");
    return o && (c.nonce = o), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), w.jsx(jv, { isPresent: t, childRef: r, sizeRef: i, children: k.cloneElement(e, { ref: r }) });
}
const Av = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s }) => {
  const a = yn(Rv), l = k.useId(), u = k.useCallback((f) => {
    a.set(f, !0);
    for (const d of a.values())
      if (!d)
        return;
    r && r();
  }, [a, r]), c = k.useMemo(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: u,
      register: (f) => (a.set(f, !1), () => a.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    o ? [Math.random(), u] : [n, u]
  );
  return k.useMemo(() => {
    a.forEach((f, d) => a.set(d, !1));
  }, [n]), k.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), s === "popLayout" && (e = w.jsx(Dv, { isPresent: n, children: e })), w.jsx(Qo.Provider, { value: c, children: e });
};
function Rv() {
  return /* @__PURE__ */ new Map();
}
function dh(e = !0) {
  const t = k.useContext(Qo);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, o = k.useId();
  k.useEffect(() => {
    e && i(o);
  }, [e]);
  const s = k.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const _i = (e) => e.key || "";
function _c(e) {
  const t = [];
  return k.Children.forEach(e, (n) => {
    k.isValidElement(n) && t.push(n);
  }), t;
}
const Hl = typeof window < "u", Gl = Hl ? k.useLayoutEffect : k.useEffect, ii = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: s = !1 }) => {
  const [a, l] = dh(s), u = k.useMemo(() => _c(e), [e]), c = s && !a ? [] : u.map(_i), f = k.useRef(!0), d = k.useRef(u), g = yn(() => /* @__PURE__ */ new Map()), [y, v] = k.useState(u), [T, h] = k.useState(u);
  Gl(() => {
    f.current = !1, d.current = u;
    for (let x = 0; x < T.length; x++) {
      const S = _i(T[x]);
      c.includes(S) ? g.delete(S) : g.get(S) !== !0 && g.set(S, !1);
    }
  }, [T, c.length, c.join("-")]);
  const p = [];
  if (u !== y) {
    let x = [...u];
    for (let S = 0; S < T.length; S++) {
      const C = T[S], j = _i(C);
      c.includes(j) || (x.splice(S, 0, C), p.push(C));
    }
    o === "wait" && p.length && (x = p), h(_c(x)), v(u);
    return;
  }
  const { forceRender: m } = k.useContext(Kl);
  return w.jsx(w.Fragment, { children: T.map((x) => {
    const S = _i(x), C = s && !a ? !1 : u === T || c.includes(S), j = () => {
      if (g.has(S))
        g.set(S, !0);
      else
        return;
      let P = !0;
      g.forEach((L) => {
        L || (P = !1);
      }), P && (m?.(), h(d.current), s && l?.(), r && r());
    };
    return w.jsx(Av, { isPresent: C, initial: !f.current || n ? void 0 : !1, custom: C ? void 0 : t, presenceAffectsLayout: i, mode: o, onExitComplete: C ? void 0 : j, children: x }, S);
  }) });
}, Ve = /* @__NO_SIDE_EFFECTS__ */ (e) => e;
let ph = Ve;
// @__NO_SIDE_EFFECTS__
function Ql(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const qn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, yt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, vt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Mv = {
  useManualTiming: !1
};
function Vv(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(u) {
    o.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return c && o.add(u), g.has(u) || g.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (s = u, r) {
        i = !0;
        return;
      }
      r = !0, [t, n] = [n, t], t.forEach(a), t.clear(), r = !1, i && (i = !1, l.process(u));
    }
  };
  return l;
}
const Ii = [
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
], Lv = 40;
function hh(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, s = Ii.reduce((h, p) => (h[p] = Vv(o), h), {}), { read: a, resolveKeyframes: l, update: u, preRender: c, render: f, postRender: d } = s, g = () => {
    const h = performance.now();
    n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, Lv), 1), i.timestamp = h, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), f.process(i), d.process(i), i.isProcessing = !1, n && t && (r = !1, e(g));
  }, y = () => {
    n = !0, r = !0, i.isProcessing || e(g);
  };
  return { schedule: Ii.reduce((h, p) => {
    const m = s[p];
    return h[p] = (x, S = !1, C = !1) => (n || y(), m.schedule(x, S, C)), h;
  }, {}), cancel: (h) => {
    for (let p = 0; p < Ii.length; p++)
      s[Ii[p]].cancel(h);
  }, state: i, steps: s };
}
const { schedule: U, cancel: Tt, state: ce, steps: Ds } = hh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ve, !0), mh = k.createContext({ strict: !1 }), Ic = {
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
}, Jn = {};
for (const e in Ic)
  Jn[e] = {
    isEnabled: (t) => Ic[e].some((n) => !!t[n])
  };
function Nv(e) {
  for (const t in e)
    Jn[t] = {
      ...Jn[t],
      ...e[t]
    };
}
const _v = /* @__PURE__ */ new Set([
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
function Po(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || _v.has(e);
}
let gh = (e) => !Po(e);
function Iv(e) {
  e && (gh = (t) => t.startsWith("on") ? !Po(t) : e(t));
}
try {
  Iv(require("@emotion/is-prop-valid").default);
} catch {
}
function Fv(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (gh(i) || n === !0 && Po(i) || !t && !Po(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
function Ov(e) {
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
const Yo = k.createContext({});
function oi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Zo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Xl = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Yl = ["initial", ...Xl];
function qo(e) {
  return Zo(e.animate) || Yl.some((t) => oi(e[t]));
}
function yh(e) {
  return !!(qo(e) || e.variants);
}
function zv(e, t) {
  if (qo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || oi(n) ? n : void 0,
      animate: oi(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Bv(e) {
  const { initial: t, animate: n } = zv(e, k.useContext(Yo));
  return k.useMemo(() => ({ initial: t, animate: n }), [Fc(t), Fc(n)]);
}
function Fc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Uv = Symbol.for("motionComponentSymbol");
function Nn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function $v(e, t, n) {
  return k.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Nn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Zl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), bv = "framerAppearId", vh = "data-" + Zl(bv), { schedule: ql } = hh(queueMicrotask, !1), xh = k.createContext({});
function Wv(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = k.useContext(Yo), l = k.useContext(mh), u = k.useContext(Qo), c = k.useContext(Xo).reducedMotion, f = k.useRef(null);
  r = r || l.renderer, !f.current && r && (f.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: u,
    blockInitialAnimation: u ? u.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const d = f.current, g = k.useContext(xh);
  d && !d.projection && i && (d.type === "html" || d.type === "svg") && Kv(f.current, n, i, g);
  const y = k.useRef(!1);
  k.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const v = n[vh], T = k.useRef(!!v && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, v)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, v)));
  return Gl(() => {
    d && (y.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), ql.render(d.render), T.current && d.animationState && d.animationState.animateChanges());
  }), k.useEffect(() => {
    d && (!T.current && d.animationState && d.animationState.animateChanges(), T.current && (queueMicrotask(() => {
      var h;
      (h = window.MotionHandoffMarkAsComplete) === null || h === void 0 || h.call(window, v);
    }), T.current = !1));
  }), d;
}
function Kv(e, t, n, r) {
  const { layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : wh(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!s || a && Nn(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    layoutScroll: l,
    layoutRoot: u
  });
}
function wh(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : wh(e.parent);
}
function Hv({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
  var o, s;
  e && Nv(e);
  function a(u, c) {
    let f;
    const d = {
      ...k.useContext(Xo),
      ...u,
      layoutId: Gv(u)
    }, { isStatic: g } = d, y = Bv(u), v = r(u, g);
    if (!g && Hl) {
      Qv();
      const T = Xv(d);
      f = T.MeasureLayout, y.visualElement = Wv(i, v, d, t, T.ProjectionNode);
    }
    return w.jsxs(Yo.Provider, { value: y, children: [f && y.visualElement ? w.jsx(f, { visualElement: y.visualElement, ...d }) : null, n(i, u, $v(v, y.visualElement, c), v, g, y.visualElement)] });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && s !== void 0 ? s : ""})`}`;
  const l = k.forwardRef(a);
  return l[Uv] = i, l;
}
function Gv({ layoutId: e }) {
  const t = k.useContext(Kl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Qv(e, t) {
  k.useContext(mh).strict;
}
function Xv(e) {
  const { drag: t, layout: n } = Jn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Yv = [
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
function Jl(e) {
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
      !!(Yv.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Oc(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function eu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Oc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, o] = Oc(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const La = (e) => Array.isArray(e), Zv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), qv = (e) => La(e) ? e[e.length - 1] || 0 : e, fe = (e) => !!(e && e.getVelocity);
function Zi(e) {
  const t = fe(e) ? e.get() : e;
  return Zv(t) ? t.toValue() : t;
}
function Jv({ scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n }, r, i, o) {
  const s = {
    latestValues: e0(r, i, o, e),
    renderState: t()
  };
  return n && (s.onMount = (a) => n({ props: r, current: a, ...s }), s.onUpdate = (a) => n(a)), s;
}
const Sh = (e) => (t, n) => {
  const r = k.useContext(Yo), i = k.useContext(Qo), o = () => Jv(e, t, r, i);
  return n ? o() : yn(o);
};
function e0(e, t, n, r) {
  const i = {}, o = r(e, {});
  for (const d in o)
    i[d] = Zi(o[d]);
  let { initial: s, animate: a } = e;
  const l = qo(e), u = yh(e);
  t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  if (f && typeof f != "boolean" && !Zo(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = eu(e, d[g]);
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
const or = [
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
], vn = new Set(or), kh = (e) => (t) => typeof t == "string" && t.startsWith(e), Th = /* @__PURE__ */ kh("--"), t0 = /* @__PURE__ */ kh("var(--"), tu = (e) => t0(e) ? n0.test(e.split("/*")[0].trim()) : !1, n0 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ch = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Ct = (e, t, n) => n > t ? t : n < e ? e : n, sr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, si = {
  ...sr,
  transform: (e) => Ct(0, 1, e)
}, Fi = {
  ...sr,
  default: 1
}, hi = (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), jt = /* @__PURE__ */ hi("deg"), st = /* @__PURE__ */ hi("%"), V = /* @__PURE__ */ hi("px"), r0 = /* @__PURE__ */ hi("vh"), i0 = /* @__PURE__ */ hi("vw"), zc = {
  ...st,
  parse: (e) => st.parse(e) / 100,
  transform: (e) => st.transform(e * 100)
}, o0 = {
  // Border props
  borderWidth: V,
  borderTopWidth: V,
  borderRightWidth: V,
  borderBottomWidth: V,
  borderLeftWidth: V,
  borderRadius: V,
  radius: V,
  borderTopLeftRadius: V,
  borderTopRightRadius: V,
  borderBottomRightRadius: V,
  borderBottomLeftRadius: V,
  // Positioning props
  width: V,
  maxWidth: V,
  height: V,
  maxHeight: V,
  top: V,
  right: V,
  bottom: V,
  left: V,
  // Spacing props
  padding: V,
  paddingTop: V,
  paddingRight: V,
  paddingBottom: V,
  paddingLeft: V,
  margin: V,
  marginTop: V,
  marginRight: V,
  marginBottom: V,
  marginLeft: V,
  // Misc
  backgroundPositionX: V,
  backgroundPositionY: V
}, s0 = {
  rotate: jt,
  rotateX: jt,
  rotateY: jt,
  rotateZ: jt,
  scale: Fi,
  scaleX: Fi,
  scaleY: Fi,
  scaleZ: Fi,
  skew: jt,
  skewX: jt,
  skewY: jt,
  distance: V,
  translateX: V,
  translateY: V,
  translateZ: V,
  x: V,
  y: V,
  z: V,
  perspective: V,
  transformPerspective: V,
  opacity: si,
  originX: zc,
  originY: zc,
  originZ: V
}, Bc = {
  ...sr,
  transform: Math.round
}, nu = {
  ...o0,
  ...s0,
  zIndex: Bc,
  size: V,
  // SVG
  fillOpacity: si,
  strokeOpacity: si,
  numOctaves: Bc
}, a0 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, l0 = or.length;
function u0(e, t, n) {
  let r = "", i = !0;
  for (let o = 0; o < l0; o++) {
    const s = or[o], a = e[s];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Ch(a, nu[s]);
      if (!l) {
        i = !1;
        const c = a0[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function ru(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (vn.has(l)) {
      s = !0;
      continue;
    } else if (Th(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Ch(u, nu[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (s || n ? r.transform = u0(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const c0 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, f0 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function d0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? c0 : f0;
  e[o.offset] = V.transform(-r);
  const s = V.transform(t), a = V.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Uc(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function p0(e, t, n) {
  const r = Uc(t, e.x, e.width), i = Uc(n, e.y, e.height);
  return `${r} ${i}`;
}
function iu(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: i,
  originY: o,
  pathLength: s,
  pathSpacing: a = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, c, f) {
  if (ru(e, u, f), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform), y && (i !== void 0 || o !== void 0 || g.transform) && (g.transformOrigin = p0(y, i !== void 0 ? i : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && d0(d, s, a, l, !1);
}
const ou = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Ph = () => ({
  ...ou(),
  attrs: {}
}), su = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Eh(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n)
    e.style.setProperty(o, n[o]);
}
const jh = /* @__PURE__ */ new Set([
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
function Dh(e, t, n, r) {
  Eh(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(jh.has(i) ? i : Zl(i), t.attrs[i]);
}
const Eo = {};
function h0(e) {
  Object.assign(Eo, e);
}
function Ah(e, { layout: t, layoutId: n }) {
  return vn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Eo[e] || e === "opacity");
}
function au(e, t, n) {
  var r;
  const { style: i } = e, o = {};
  for (const s in i)
    (fe(i[s]) || t.style && fe(t.style[s]) || Ah(s, e) || ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
  return o;
}
function Rh(e, t, n) {
  const r = au(e, t, n);
  for (const i in e)
    if (fe(e[i]) || fe(t[i])) {
      const o = or.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[o] = e[i];
    }
  return r;
}
function m0(e, t) {
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
const $c = ["x", "y", "width", "height", "cx", "cy", "r"], g0 = {
  useVisualState: Sh({
    scrapeMotionValuesFromProps: Rh,
    createRenderState: Ph,
    onUpdate: ({ props: e, prevProps: t, current: n, renderState: r, latestValues: i }) => {
      if (!n)
        return;
      let o = !!e.drag;
      if (!o) {
        for (const a in i)
          if (vn.has(a)) {
            o = !0;
            break;
          }
      }
      if (!o)
        return;
      let s = !t;
      if (t)
        for (let a = 0; a < $c.length; a++) {
          const l = $c[a];
          e[l] !== t[l] && (s = !0);
        }
      s && U.read(() => {
        m0(n, r), U.render(() => {
          iu(r, i, su(n.tagName), e.transformTemplate), Dh(n, r);
        });
      });
    }
  })
}, y0 = {
  useVisualState: Sh({
    scrapeMotionValuesFromProps: au,
    createRenderState: ou
  })
};
function Mh(e, t, n) {
  for (const r in t)
    !fe(t[r]) && !Ah(r, n) && (e[r] = t[r]);
}
function v0({ transformTemplate: e }, t) {
  return k.useMemo(() => {
    const n = ou();
    return ru(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function x0(e, t) {
  const n = e.style || {}, r = {};
  return Mh(r, n, e), Object.assign(r, v0(e, t)), r;
}
function w0(e, t) {
  const n = {}, r = x0(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function S0(e, t, n, r) {
  const i = k.useMemo(() => {
    const o = Ph();
    return iu(o, t, su(r), e.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    Mh(o, e.style, e), i.style = { ...o, ...i.style };
  }
  return i;
}
function k0(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (Jl(n) ? S0 : w0)(r, o, s, n), u = Fv(r, typeof n == "string", e), c = n !== k.Fragment ? { ...u, ...l, ref: i } : {}, { children: f } = r, d = k.useMemo(() => fe(f) ? f.get() : f, [f]);
    return k.createElement(n, {
      ...c,
      children: d
    });
  };
}
function T0(e, t) {
  return function(r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...Jl(r) ? g0 : y0,
      preloadedFeatures: e,
      useRender: k0(i),
      createVisualElement: t,
      Component: r
    };
    return Hv(s);
  };
}
function Vh(e, t) {
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
function Jo(e, t, n) {
  const r = e.getProps();
  return eu(r, t, n !== void 0 ? n : r.custom, e);
}
const C0 = /* @__PURE__ */ Ql(() => window.ScrollTimeline !== void 0);
class P0 {
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
      if (C0() && i.attachTimeline)
        return i.attachTimeline(t);
      if (typeof n == "function")
        return n(i);
    });
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
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
class E0 extends P0 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function lu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const Na = 2e4;
function Lh(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Na; )
    t += n, r = e.next(t);
  return t >= Na ? 1 / 0 : t;
}
function uu(e) {
  return typeof e == "function";
}
function bc(e, t) {
  e.timeline = t, e.onfinish = null;
}
const cu = (e) => Array.isArray(e) && typeof e[0] == "number", j0 = {
  linearEasing: void 0
};
function D0(e, t) {
  const n = /* @__PURE__ */ Ql(e);
  return () => {
    var r;
    return (r = j0[t]) !== null && r !== void 0 ? r : n();
  };
}
const jo = /* @__PURE__ */ D0(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Nh = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let o = 0; o < i; o++)
    r += e(/* @__PURE__ */ qn(0, i - 1, o)) + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
};
function _h(e) {
  return !!(typeof e == "function" && jo() || !e || typeof e == "string" && (e in _a || jo()) || cu(e) || Array.isArray(e) && e.every(_h));
}
const Cr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, _a = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Cr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Cr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Cr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Cr([0.33, 1.53, 0.69, 0.99])
};
function Ih(e, t) {
  if (e)
    return typeof e == "function" && jo() ? Nh(e, t) : cu(e) ? Cr(e) : Array.isArray(e) ? e.map((n) => Ih(n, t) || _a.easeOut) : _a[e];
}
const Ge = {
  x: !1,
  y: !1
};
function Fh() {
  return Ge.x || Ge.y;
}
function A0(e, t, n) {
  var r;
  if (e instanceof Element)
    return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function Oh(e, t) {
  const n = A0(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Wc(e) {
  return (t) => {
    t.pointerType === "touch" || Fh() || e(t);
  };
}
function R0(e, t, n = {}) {
  const [r, i, o] = Oh(e, n), s = Wc((a) => {
    const { target: l } = a, u = t(a);
    if (typeof u != "function" || !l)
      return;
    const c = Wc((f) => {
      u(f), l.removeEventListener("pointerleave", c);
    });
    l.addEventListener("pointerleave", c, i);
  });
  return r.forEach((a) => {
    a.addEventListener("pointerenter", s, i);
  }), o;
}
const zh = (e, t) => t ? e === t ? !0 : zh(e, t.parentElement) : !1, fu = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, M0 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function V0(e) {
  return M0.has(e.tagName) || e.tabIndex !== -1;
}
const Pr = /* @__PURE__ */ new WeakSet();
function Kc(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function As(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const L0 = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Kc(() => {
    if (Pr.has(n))
      return;
    As(n, "down");
    const i = Kc(() => {
      As(n, "up");
    }), o = () => As(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Hc(e) {
  return fu(e) && !Fh();
}
function N0(e, t, n = {}) {
  const [r, i, o] = Oh(e, n), s = (a) => {
    const l = a.currentTarget;
    if (!Hc(a) || Pr.has(l))
      return;
    Pr.add(l);
    const u = t(a), c = (g, y) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", d), !(!Hc(g) || !Pr.has(l)) && (Pr.delete(l), typeof u == "function" && u(g, { success: y }));
    }, f = (g) => {
      c(g, n.useGlobalTarget || zh(l, g.target));
    }, d = (g) => {
      c(g, !1);
    };
    window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", d, i);
  };
  return r.forEach((a) => {
    !V0(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0), (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i), a.addEventListener("focus", (u) => L0(u, i), i);
  }), o;
}
function _0(e) {
  return e === "x" || e === "y" ? Ge[e] ? null : (Ge[e] = !0, () => {
    Ge[e] = !1;
  }) : Ge.x || Ge.y ? null : (Ge.x = Ge.y = !0, () => {
    Ge.x = Ge.y = !1;
  });
}
const Bh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...or
]);
let qi;
function I0() {
  qi = void 0;
}
const at = {
  now: () => (qi === void 0 && at.set(ce.isProcessing || Mv.useManualTiming ? ce.timestamp : performance.now()), qi),
  set: (e) => {
    qi = e, queueMicrotask(I0);
  }
};
function du(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function F0([...e], t, n) {
  const r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    const i = n < 0 ? e.length + n : n, [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
class hu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return du(this.subscriptions, t), () => pu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Uh(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Gc = 30, O0 = (e) => !isNaN(parseFloat(e)), Ir = {
  current: void 0
};
class z0 {
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
      const o = at.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = at.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = O0(this.current));
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
    this.events[t] || (this.events[t] = new hu());
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
    return Ir.current && Ir.current.push(this), this.current;
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
    const t = at.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Gc)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Gc);
    return Uh(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function er(e, t) {
  return new z0(e, t);
}
function B0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, er(n));
}
function U0(e, t) {
  const n = Jo(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = qv(o[s]);
    B0(e, s, a);
  }
}
function $0(e) {
  return !!(fe(e) && e.add);
}
function Ia(e, t) {
  const n = e.getValue("willChange");
  if ($0(n))
    return n.add(t);
}
function $h(e) {
  return e.props[vh];
}
const bh = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, b0 = 1e-7, W0 = 12;
function K0(e, t, n, r, i) {
  let o, s, a = 0;
  do
    s = t + (n - t) / 2, o = bh(s, r, i) - e, o > 0 ? n = s : t = s;
  while (Math.abs(o) > b0 && ++a < W0);
  return s;
}
function mi(e, t, n, r) {
  if (e === t && n === r)
    return Ve;
  const i = (o) => K0(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : bh(i(o), t, r);
}
const Wh = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Kh = (e) => (t) => 1 - e(1 - t), Hh = /* @__PURE__ */ mi(0.33, 1.53, 0.69, 0.99), mu = /* @__PURE__ */ Kh(Hh), Gh = /* @__PURE__ */ Wh(mu), Qh = (e) => (e *= 2) < 1 ? 0.5 * mu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), gu = (e) => 1 - Math.sin(Math.acos(e)), Xh = Kh(gu), Yh = Wh(gu), Zh = (e) => /^0[^.\s]+$/u.test(e);
function H0(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Zh(e) : !0;
}
const Fr = (e) => Math.round(e * 1e5) / 1e5, yu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function G0(e) {
  return e == null;
}
const Q0 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, vu = (e, t) => (n) => !!(typeof n == "string" && Q0.test(n) && n.startsWith(e) || t && !G0(n) && Object.prototype.hasOwnProperty.call(n, t)), qh = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, o, s, a] = r.match(yu);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(o),
    [n]: parseFloat(s),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, X0 = (e) => Ct(0, 255, e), Rs = {
  ...sr,
  transform: (e) => Math.round(X0(e))
}, sn = {
  test: /* @__PURE__ */ vu("rgb", "red"),
  parse: /* @__PURE__ */ qh("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Rs.transform(e) + ", " + Rs.transform(t) + ", " + Rs.transform(n) + ", " + Fr(si.transform(r)) + ")"
};
function Y0(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Fa = {
  test: /* @__PURE__ */ vu("#"),
  parse: Y0,
  transform: sn.transform
}, _n = {
  test: /* @__PURE__ */ vu("hsl", "hue"),
  parse: /* @__PURE__ */ qh("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + st.transform(Fr(t)) + ", " + st.transform(Fr(n)) + ", " + Fr(si.transform(r)) + ")"
}, ge = {
  test: (e) => sn.test(e) || Fa.test(e) || _n.test(e),
  parse: (e) => sn.test(e) ? sn.parse(e) : _n.test(e) ? _n.parse(e) : Fa.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? sn.transform(e) : _n.transform(e)
}, Z0 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function q0(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(yu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Z0)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Jh = "number", em = "color", J0 = "var", e1 = "var(", Qc = "${}", t1 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ai(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = t.replace(t1, (l) => (ge.test(l) ? (r.color.push(o), i.push(em), n.push(ge.parse(l))) : l.startsWith(e1) ? (r.var.push(o), i.push(J0), n.push(l)) : (r.number.push(o), i.push(Jh), n.push(parseFloat(l))), ++o, Qc)).split(Qc);
  return { values: n, split: a, indexes: r, types: i };
}
function tm(e) {
  return ai(e).values;
}
function nm(e) {
  const { split: t, types: n } = ai(e), r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (o += t[s], i[s] !== void 0) {
        const a = n[s];
        a === Jh ? o += Fr(i[s]) : a === em ? o += ge.transform(i[s]) : o += i[s];
      }
    return o;
  };
}
const n1 = (e) => typeof e == "number" ? 0 : e;
function r1(e) {
  const t = tm(e);
  return nm(e)(t.map(n1));
}
const Wt = {
  test: q0,
  parse: tm,
  createTransformer: nm,
  getAnimatableNone: r1
}, i1 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function o1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(yu) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let o = i1.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const s1 = /\b([a-z-]*)\(.*?\)/gu, Oa = {
  ...Wt,
  getAnimatableNone: (e) => {
    const t = e.match(s1);
    return t ? t.map(o1).join(" ") : e;
  }
}, a1 = {
  ...nu,
  // Color props
  color: ge,
  backgroundColor: ge,
  outlineColor: ge,
  fill: ge,
  stroke: ge,
  // Border props
  borderColor: ge,
  borderTopColor: ge,
  borderRightColor: ge,
  borderBottomColor: ge,
  borderLeftColor: ge,
  filter: Oa,
  WebkitFilter: Oa
}, xu = (e) => a1[e];
function rm(e, t) {
  let n = xu(e);
  return n !== Oa && (n = Wt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const l1 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function u1(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !l1.has(o) && ai(o).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const o of t)
      e[o] = rm(n, i);
}
const Xc = (e) => e === sr || e === V, Yc = (e, t) => parseFloat(e.split(", ")[t]), Zc = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const i = r.match(/^matrix3d\((.+)\)$/u);
  if (i)
    return Yc(i[1], t);
  {
    const o = r.match(/^matrix\((.+)\)$/u);
    return o ? Yc(o[1], e) : 0;
  }
}, c1 = /* @__PURE__ */ new Set(["x", "y", "z"]), f1 = or.filter((e) => !c1.has(e));
function d1(e) {
  const t = [];
  return f1.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const tr = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Zc(4, 13),
  y: Zc(5, 14)
};
tr.translateX = tr.x;
tr.translateY = tr.y;
const un = /* @__PURE__ */ new Set();
let za = !1, Ba = !1;
function im() {
  if (Ba) {
    const e = Array.from(un).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = d1(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([o, s]) => {
        var a;
        (a = r.getValue(o)) === null || a === void 0 || a.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Ba = !1, za = !1, un.forEach((e) => e.complete()), un.clear();
}
function om() {
  un.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ba = !0);
  });
}
function p1() {
  om(), im();
}
class wu {
  constructor(t, n, r, i, o, s = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (un.add(this), za || (za = !0, U.read(om), U.resolveKeyframes(im))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i?.get(), a = t[t.length - 1];
          if (s !== void 0)
            t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else
          t[o] = t[o - 1];
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
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), un.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, un.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const sm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), h1 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function m1(e) {
  const t = h1.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function am(e, t, n = 1) {
  const [r, i] = m1(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return sm(s) ? parseFloat(s) : s;
  }
  return tu(i) ? am(i, t, n + 1) : i;
}
const lm = (e) => (t) => t.test(e), g1 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, um = [sr, V, st, jt, i0, r0, g1], qc = (e) => um.find(lm(e));
class cm extends wu {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && (u = u.trim(), tu(u))) {
        const c = am(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Bh.has(r) || t.length !== 2)
      return;
    const [i, o] = t, s = qc(i), a = qc(o);
    if (s !== a)
      if (Xc(s) && Xc(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      H0(t[i]) && r.push(i);
    r.length && u1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = tr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current)
      return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1, a = i[s];
    i[s] = tr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([l, u]) => {
      n.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
const Jc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Wt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function y1(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function v1(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], s = Jc(i, t), a = Jc(o, t);
  return !s || !a ? !1 : y1(e) || (n === "spring" || uu(n)) && r;
}
const x1 = (e) => e !== null;
function es(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(x1), o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const w1 = 40;
class fm {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: s = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = at.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: o,
      repeatType: s,
      ...a
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
    return this.resolvedAt ? this.resolvedAt - this.createdAt > w1 ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && p1(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = at.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: i, velocity: o, delay: s, onComplete: a, onUpdate: l, isGenerator: u } = this.options;
    if (!u && !v1(t, r, i, o))
      if (s)
        this.options.duration = 0;
      else {
        l && l(es(t, this.options, n)), a && a(), this.resolveFinishedPromise();
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
function Ms(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function S1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, o = 0, s = 0;
  if (!t)
    i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    i = Ms(l, a, e + 1 / 3), o = Ms(l, a, e), s = Ms(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function Do(e, t) {
  return (n) => n > 0 ? t : e;
}
const Vs = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, k1 = [Fa, sn, _n], T1 = (e) => k1.find((t) => t.test(e));
function ef(e) {
  const t = T1(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === _n && (n = S1(n)), n;
}
const tf = (e, t) => {
  const n = ef(e), r = ef(t);
  if (!n || !r)
    return Do(e, t);
  const i = { ...n };
  return (o) => (i.red = Vs(n.red, r.red, o), i.green = Vs(n.green, r.green, o), i.blue = Vs(n.blue, r.blue, o), i.alpha = H(n.alpha, r.alpha, o), sn.transform(i));
}, C1 = (e, t) => (n) => t(e(n)), gi = (...e) => e.reduce(C1), Ua = /* @__PURE__ */ new Set(["none", "hidden"]);
function P1(e, t) {
  return Ua.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function E1(e, t) {
  return (n) => H(e, t, n);
}
function Su(e) {
  return typeof e == "number" ? E1 : typeof e == "string" ? tu(e) ? Do : ge.test(e) ? tf : A1 : Array.isArray(e) ? dm : typeof e == "object" ? ge.test(e) ? tf : j1 : Do;
}
function dm(e, t) {
  const n = [...e], r = n.length, i = e.map((o, s) => Su(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++)
      n[s] = i[s](o);
    return n;
  };
}
function j1(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Su(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r)
      n[o] = r[o](i);
    return n;
  };
}
function D1(e, t) {
  var n;
  const r = [], i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o], a = e.indexes[s][i[s]], l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    r[o] = l, i[s]++;
  }
  return r;
}
const A1 = (e, t) => {
  const n = Wt.createTransformer(t), r = ai(e), i = ai(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Ua.has(e) && !i.values.length || Ua.has(t) && !r.values.length ? P1(e, t) : gi(dm(D1(r, i), i.values), n) : Do(e, t);
};
function pm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? H(e, t, n) : Su(e)(e, t);
}
const R1 = 5;
function hm(e, t, n) {
  const r = Math.max(t - R1, 0);
  return Uh(n - e(r), t - r);
}
const J = {
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
}, Ls = 1e-3;
function M1({ duration: e = J.duration, bounce: t = J.bounce, velocity: n = J.velocity, mass: r = J.mass }) {
  let i, o, s = 1 - t;
  s = Ct(J.minDamping, J.maxDamping, s), e = Ct(J.minDuration, J.maxDuration, /* @__PURE__ */ vt(e)), s < 1 ? (i = (u) => {
    const c = u * s, f = c * e, d = c - n, g = $a(u, s), y = Math.exp(-f);
    return Ls - d / g * y;
  }, o = (u) => {
    const f = u * s * e, d = f * n + n, g = Math.pow(s, 2) * Math.pow(u, 2) * e, y = Math.exp(-f), v = $a(Math.pow(u, 2), s);
    return (-i(u) + Ls > 0 ? -1 : 1) * ((d - g) * y) / v;
  }) : (i = (u) => {
    const c = Math.exp(-u * e), f = (u - n) * e + 1;
    return -Ls + c * f;
  }, o = (u) => {
    const c = Math.exp(-u * e), f = (n - u) * (e * e);
    return c * f;
  });
  const a = 5 / e, l = L1(i, o, a);
  if (e = /* @__PURE__ */ yt(e), isNaN(l))
    return {
      stiffness: J.stiffness,
      damping: J.damping,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: s * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const V1 = 12;
function L1(e, t, n) {
  let r = n;
  for (let i = 1; i < V1; i++)
    r = r - e(r) / t(r);
  return r;
}
function $a(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const N1 = ["duration", "bounce"], _1 = ["stiffness", "damping", "mass"];
function nf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function I1(e) {
  let t = {
    velocity: J.velocity,
    stiffness: J.stiffness,
    damping: J.damping,
    mass: J.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!nf(e, _1) && nf(e, N1))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, o = 2 * Ct(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: J.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = M1(e);
      t = {
        ...t,
        ...n,
        mass: J.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function mm(e = J.visualDuration, t = J.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: g } = I1({
    ...n,
    velocity: -/* @__PURE__ */ vt(n.velocity || 0)
  }), y = d || 0, v = u / (2 * Math.sqrt(l * c)), T = s - o, h = /* @__PURE__ */ vt(Math.sqrt(l / c)), p = Math.abs(T) < 5;
  r || (r = p ? J.restSpeed.granular : J.restSpeed.default), i || (i = p ? J.restDelta.granular : J.restDelta.default);
  let m;
  if (v < 1) {
    const S = $a(h, v);
    m = (C) => {
      const j = Math.exp(-v * h * C);
      return s - j * ((y + v * h * T) / S * Math.sin(S * C) + T * Math.cos(S * C));
    };
  } else if (v === 1)
    m = (S) => s - Math.exp(-h * S) * (T + (y + h * T) * S);
  else {
    const S = h * Math.sqrt(v * v - 1);
    m = (C) => {
      const j = Math.exp(-v * h * C), P = Math.min(S * C, 300);
      return s - j * ((y + v * h * T) * Math.sinh(P) + S * T * Math.cosh(P)) / S;
    };
  }
  const x = {
    calculatedDuration: g && f || null,
    next: (S) => {
      const C = m(S);
      if (g)
        a.done = S >= f;
      else {
        let j = 0;
        v < 1 && (j = S === 0 ? /* @__PURE__ */ yt(y) : hm(m, S, C));
        const P = Math.abs(j) <= r, L = Math.abs(s - C) <= i;
        a.done = P && L;
      }
      return a.value = a.done ? s : C, a;
    },
    toString: () => {
      const S = Math.min(Lh(x), Na), C = Nh((j) => x.next(S * j).value, S, 30);
      return S + "ms " + C;
    }
  };
  return x;
}
function rf({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: s, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const f = e[0], d = {
    done: !1,
    value: f
  }, g = (P) => a !== void 0 && P < a || l !== void 0 && P > l, y = (P) => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
  let v = n * t;
  const T = f + v, h = s === void 0 ? T : s(T);
  h !== T && (v = h - f);
  const p = (P) => -v * Math.exp(-P / r), m = (P) => h + p(P), x = (P) => {
    const L = p(P), R = m(P);
    d.done = Math.abs(L) <= u, d.value = d.done ? h : R;
  };
  let S, C;
  const j = (P) => {
    g(d.value) && (S = P, C = mm({
      keyframes: [d.value, y(d.value)],
      velocity: hm(m, P, d.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return j(0), {
    calculatedDuration: null,
    next: (P) => {
      let L = !1;
      return !C && S === void 0 && (L = !0, x(P), j(P)), S !== void 0 && P >= S ? C.next(P - S) : (!L && x(P), d);
    }
  };
}
const F1 = /* @__PURE__ */ mi(0.42, 0, 1, 1), O1 = /* @__PURE__ */ mi(0, 0, 0.58, 1), gm = /* @__PURE__ */ mi(0.42, 0, 0.58, 1), z1 = (e) => Array.isArray(e) && typeof e[0] != "number", B1 = {
  linear: Ve,
  easeIn: F1,
  easeInOut: gm,
  easeOut: O1,
  circIn: gu,
  circInOut: Yh,
  circOut: Xh,
  backIn: mu,
  backInOut: Gh,
  backOut: Hh,
  anticipate: Qh
}, of = (e) => {
  if (cu(e)) {
    ph(e.length === 4);
    const [t, n, r, i] = e;
    return mi(t, n, r, i);
  } else if (typeof e == "string")
    return B1[e];
  return e;
};
function U1(e, t, n) {
  const r = [], i = n || pm, o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ve : t;
      a = gi(l, a);
    }
    r.push(a);
  }
  return r;
}
function ym(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if (ph(o === t.length), o === 1)
    return () => t[0];
  if (o === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = U1(t, r, i), l = a.length, u = (c) => {
    if (s && c < e[0])
      return t[0];
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(c < e[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ qn(e[f], e[f + 1], c);
    return a[f](d);
  };
  return n ? (c) => u(Ct(e[0], e[o - 1], c)) : u;
}
function $1(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ qn(0, t, r);
    e.push(H(n, 1, i));
  }
}
function b1(e) {
  const t = [0];
  return $1(t, e.length - 1), t;
}
function W1(e, t) {
  return e.map((n) => n * t);
}
function K1(e, t) {
  return e.map(() => t || gm).splice(0, e.length - 1);
}
function Ao({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = z1(r) ? r.map(of) : of(r), o = {
    done: !1,
    value: t[0]
  }, s = W1(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : b1(t),
    e
  ), a = ym(s, t, {
    ease: Array.isArray(i) ? i : K1(t, i)
  });
  return {
    calculatedDuration: e,
    next: (l) => (o.value = a(l), o.done = l >= e, o)
  };
}
const H1 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => U.update(t, !0),
    stop: () => Tt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ce.isProcessing ? ce.timestamp : at.now()
  };
}, G1 = {
  decay: rf,
  inertia: rf,
  tween: Ao,
  keyframes: Ao,
  spring: mm
}, Q1 = (e) => e / 100;
class ku extends fm {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options, s = i?.KeyframeResolver || wu, a = (l, u) => this.onKeyframesResolved(l, u);
    this.resolver = new s(o, a, n, r, i), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o, velocity: s = 0 } = this.options, a = uu(n) ? n : G1[n] || Ao;
    let l, u;
    a !== Ao && typeof t[0] != "number" && (l = gi(Q1, pm(t[0], t[1])), t = [0, 100]);
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" && (u = a({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -s
    })), c.calculatedDuration === null && (c.calculatedDuration = Lh(c));
    const { calculatedDuration: f } = c, d = f + i, g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
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
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const { finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: f } = r;
    if (this.startTime === null)
      return o.next(0);
    const { delay: d, repeat: g, repeatType: y, repeatDelay: v, onUpdate: T } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const h = this.currentTime - d * (this.speed >= 0 ? 1 : -1), p = this.speed >= 0 ? h < 0 : h > c;
    this.currentTime = Math.max(h, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    let m = this.currentTime, x = o;
    if (g) {
      const P = Math.min(this.currentTime, c) / f;
      let L = Math.floor(P), R = P % 1;
      !R && P >= 1 && (R = 1), R === 1 && L--, L = Math.min(L, g + 1), !!(L % 2) && (y === "reverse" ? (R = 1 - R, v && (R -= v / f)) : y === "mirror" && (x = s)), m = Ct(0, 1, R) * f;
    }
    const S = p ? { done: !1, value: l[0] } : x.next(m);
    a && (S.value = a(S.value));
    let { done: C } = S;
    !p && u !== null && (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const j = this.holdTime === null && (this.state === "finished" || this.state === "running" && C);
    return j && i !== void 0 && (S.value = es(l, this.options, i)), T && T(S.value), j && this.finish(), S;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? /* @__PURE__ */ vt(t.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ vt(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ yt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ vt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = H1, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
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
const X1 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Y1(e, t, n, { delay: r = 0, duration: i = 300, repeat: o = 0, repeatType: s = "loop", ease: a = "easeInOut", times: l } = {}) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = Ih(a, i);
  return Array.isArray(c) && (u.easing = c), e.animate(u, {
    delay: r,
    duration: i,
    easing: Array.isArray(c) ? "linear" : c,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  });
}
const Z1 = /* @__PURE__ */ Ql(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Ro = 10, q1 = 2e4;
function J1(e) {
  return uu(e.type) || e.type === "spring" || !_h(e.ease);
}
function ex(e, t) {
  const n = new ku({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < q1; )
    r = n.sample(o), i.push(r.value), o += Ro;
  return {
    times: void 0,
    keyframes: i,
    duration: o - Ro,
    ease: "linear"
  };
}
const vm = {
  anticipate: Qh,
  backInOut: Gh,
  circInOut: Yh
};
function tx(e) {
  return e in vm;
}
class sf extends fm {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    this.resolver = new cm(o, (s, a) => this.onKeyframesResolved(s, a), n, r, i), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let { duration: r = 300, times: i, ease: o, type: s, motionValue: a, name: l, startTime: u } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof o == "string" && jo() && tx(o) && (o = vm[o]), J1(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: g, element: y, ...v } = this.options, T = ex(t, v);
      t = T.keyframes, t.length === 1 && (t[1] = t[0]), r = T.duration, i = T.times, o = T.ease, s = "keyframes";
    }
    const c = Y1(a.owner.current, l, t, { ...this.options, duration: r, times: i, ease: o });
    return c.startTime = u ?? this.calcStartTime(), this.pendingTimeline ? (bc(c, this.pendingTimeline), this.pendingTimeline = void 0) : c.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(es(t, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: c,
      duration: r,
      times: i,
      type: s,
      ease: o,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return /* @__PURE__ */ vt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return /* @__PURE__ */ vt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = /* @__PURE__ */ yt(t);
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
        return Ve;
      const { animation: r } = n;
      bc(r, t);
    }
    return Ve;
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
    const { animation: n, keyframes: r, duration: i, type: o, ease: s, times: a } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: c, onComplete: f, element: d, ...g } = this.options, y = new ku({
        ...g,
        keyframes: r,
        duration: i,
        type: o,
        ease: s,
        times: a,
        isGenerator: !0
      }), v = /* @__PURE__ */ yt(this.time);
      u.setWithVelocity(y.sample(v - Ro).value, y.sample(v).value, Ro);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
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
    const { motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: a } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return Z1() && r && X1.has(r) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !l && !u && !i && o !== "mirror" && s !== 0 && a !== "inertia";
  }
}
const nx = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, rx = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ix = {
  type: "keyframes",
  duration: 0.8
}, ox = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, sx = (e, { keyframes: t }) => t.length > 2 ? ix : vn.has(e) ? e.startsWith("scale") ? rx(t[1]) : nx : ox;
function ax({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const Tu = (e, t, n, r = {}, i, o) => (s) => {
  const a = lu(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ yt(l);
  let c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (d) => {
      t.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      s(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : i
  };
  ax(a) || (c = {
    ...c,
    ...sx(e, c)
  }), c.duration && (c.duration = /* @__PURE__ */ yt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ yt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let f = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (f = !0)), f && !o && t.get() !== void 0) {
    const d = es(c.keyframes, a);
    if (d !== void 0)
      return U.update(() => {
        c.onUpdate(d), c.onComplete();
      }), new E0([]);
  }
  return !o && sf.supports(c) ? new sf(c) : new ku(c);
};
function lx({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function xm(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [], c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null), g = l[f];
    if (g === void 0 || c && lx(c, f))
      continue;
    const y = {
      delay: n,
      ...lu(s || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const h = $h(e);
      if (h) {
        const p = window.MotionHandoffAnimation(h, f, U);
        p !== null && (y.startTime = p, v = !0);
      }
    }
    Ia(e, f), d.start(Tu(f, d, g, e.shouldReduceMotion && Bh.has(f) ? { type: !1 } : y, e, v));
    const T = d.animation;
    T && u.push(T);
  }
  return a && Promise.all(u).then(() => {
    U.update(() => {
      a && U0(e, a);
    });
  }), u;
}
function ba(e, t, n = {}) {
  var r;
  const i = Jo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(xm(e, i, n)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = o;
    return ux(e, t, c + u, f, d, n);
  } : () => Promise.resolve(), { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else
    return Promise.all([s(), a(n.delay)]);
}
function ux(e, t, n = 0, r = 0, i = 1, o) {
  const s = [], a = (e.variantChildren.size - 1) * r, l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return Array.from(e.variantChildren).sort(cx).forEach((u, c) => {
    u.notify("AnimationStart", t), s.push(ba(u, t, {
      ...o,
      delay: n + l(c)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(s);
}
function cx(e, t) {
  return e.sortNodePosition(t);
}
function fx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => ba(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = ba(e, t, n);
  else {
    const i = typeof t == "function" ? Jo(e, t, n.custom) : t;
    r = Promise.all(xm(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const dx = Yl.length;
function wm(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? wm(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < dx; n++) {
    const r = Yl[n], i = e.props[r];
    (oi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const px = [...Xl].reverse(), hx = Xl.length;
function mx(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => fx(e, n, r)));
}
function gx(e) {
  let t = mx(e), n = af(), r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = Jo(e, c, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: g, transitionEnd: y, ...v } = d;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e, c = wm(e.parent) || {}, f = [], d = /* @__PURE__ */ new Set();
    let g = {}, y = 1 / 0;
    for (let T = 0; T < hx; T++) {
      const h = px[T], p = n[h], m = u[h] !== void 0 ? u[h] : c[h], x = oi(m), S = h === l ? p.isActive : null;
      S === !1 && (y = T);
      let C = m === c[h] && m !== u[h] && x;
      if (C && r && e.manuallyAnimateOnMount && (C = !1), p.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !p.isActive && S === null || // If we didn't and don't have any defined prop for this animation type
      !m && !p.prevProp || // Or if the prop doesn't define an animation
      Zo(m) || typeof m == "boolean")
        continue;
      const j = yx(p.prevProp, m);
      let P = j || // If we're making this variant active, we want to always make it active
      h === l && p.isActive && !C && x || // If we removed a higher-priority variant (i is in reverse order)
      T > y && x, L = !1;
      const R = Array.isArray(m) ? m : [m];
      let Z = R.reduce(i(h), {});
      S === !1 && (Z = {});
      const { prevResolvedValues: lt = {} } = p, et = {
        ...lt,
        ...Z
      }, ut = (G) => {
        P = !0, d.has(G) && (L = !0, d.delete(G)), p.needsAnimating[G] = !0;
        const D = e.getValue(G);
        D && (D.liveStyle = !1);
      };
      for (const G in et) {
        const D = Z[G], N = lt[G];
        if (g.hasOwnProperty(G))
          continue;
        let _ = !1;
        La(D) && La(N) ? _ = !Vh(D, N) : _ = D !== N, _ ? D != null ? ut(G) : d.add(G) : D !== void 0 && d.has(G) ? ut(G) : p.protectedKeys[G] = !0;
      }
      p.prevProp = m, p.prevResolvedValues = Z, p.isActive && (g = { ...g, ...Z }), r && e.blockInitialAnimation && (P = !1), P && (!(C && j) || L) && f.push(...R.map((G) => ({
        animation: G,
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
  function a(l, u) {
    var c;
    if (n[l].isActive === u)
      return Promise.resolve();
    (c = e.variantChildren) === null || c === void 0 || c.forEach((d) => {
      var g;
      return (g = d.animationState) === null || g === void 0 ? void 0 : g.setActive(l, u);
    }), n[l].isActive = u;
    const f = s(l);
    for (const d in n)
      n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = af(), r = !0;
    }
  };
}
function yx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Vh(t, e) : !1;
}
function Zt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function af() {
  return {
    animate: Zt(!0),
    whileInView: Zt(),
    whileHover: Zt(),
    whileTap: Zt(),
    whileDrag: Zt(),
    whileFocus: Zt(),
    exit: Zt()
  };
}
class Qt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class vx extends Qt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = gx(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Zo(t) && (this.unmountControls = t.subscribe(this.node));
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
let xx = 0;
class wx extends Qt {
  constructor() {
    super(...arguments), this.id = xx++;
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
const Sx = {
  animation: {
    Feature: vx
  },
  exit: {
    Feature: wx
  }
};
function li(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function yi(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const kx = (e) => (t) => fu(t) && e(t, yi(t));
function Or(e, t, n, r) {
  return li(e, t, kx(n), r);
}
const lf = (e, t) => Math.abs(e - t);
function Tx(e, t) {
  const n = lf(e.x, t.x), r = lf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Sm {
  constructor(t, n, { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = _s(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, g = Tx(f.offset, { x: 0, y: 0 }) >= 3;
      if (!d && !g)
        return;
      const { point: y } = f, { timestamp: v } = ce;
      this.history.push({ ...y, timestamp: v });
      const { onStart: T, onMove: h } = this.handlers;
      d || (T && T(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), h && h(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Ns(d, this.transformPagePoint), U.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const T = _s(f.type === "pointercancel" ? this.lastMoveEventInfo : Ns(d, this.transformPagePoint), this.history);
      this.startEvent && g && g(f, T), y && y(f, T);
    }, !fu(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
    const s = yi(t), a = Ns(s, this.transformPagePoint), { point: l } = a, { timestamp: u } = ce;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, _s(a, this.history)), this.removeListeners = gi(Or(this.contextWindow, "pointermove", this.handlePointerMove), Or(this.contextWindow, "pointerup", this.handlePointerUp), Or(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tt(this.updatePoint);
  }
}
function Ns(e, t) {
  return t ? { point: t(e.point) } : e;
}
function uf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function _s({ point: e }, t) {
  return {
    point: e,
    delta: uf(e, km(t)),
    offset: uf(e, Cx(t)),
    velocity: Px(t, 0.1)
  };
}
function Cx(e) {
  return e[0];
}
function km(e) {
  return e[e.length - 1];
}
function Px(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = km(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ yt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ vt(i.timestamp - r.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (i.x - r.x) / o,
    y: (i.y - r.y) / o
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const Tm = 1e-4, Ex = 1 - Tm, jx = 1 + Tm, Cm = 0.01, Dx = 0 - Cm, Ax = 0 + Cm;
function Ne(e) {
  return e.max - e.min;
}
function Rx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function cf(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = H(t.min, t.max, e.origin), e.scale = Ne(n) / Ne(t), e.translate = H(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Ex && e.scale <= jx || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Dx && e.translate <= Ax || isNaN(e.translate)) && (e.translate = 0);
}
function zr(e, t, n, r) {
  cf(e.x, t.x, n.x, r ? r.originX : void 0), cf(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ff(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Ne(t);
}
function Mx(e, t, n) {
  ff(e.x, t.x, n.x), ff(e.y, t.y, n.y);
}
function df(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Ne(t);
}
function Br(e, t, n) {
  df(e.x, t.x, n.x), df(e.y, t.y, n.y);
}
function Vx(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? H(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)), e;
}
function pf(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Lx(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: pf(e.x, n, i),
    y: pf(e.y, t, r)
  };
}
function hf(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Nx(e, t) {
  return {
    x: hf(e.x, t.x),
    y: hf(e.y, t.y)
  };
}
function _x(e, t) {
  let n = 0.5;
  const r = Ne(e), i = Ne(t);
  return i > r ? n = /* @__PURE__ */ qn(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ qn(e.min, e.max - i, t.min)), Ct(0, 1, n);
}
function Ix(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Wa = 0.35;
function Fx(e = Wa) {
  return e === !1 ? e = 0 : e === !0 && (e = Wa), {
    x: mf(e, "left", "right"),
    y: mf(e, "top", "bottom")
  };
}
function mf(e, t, n) {
  return {
    min: gf(e, t),
    max: gf(e, n)
  };
}
function gf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const yf = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), In = () => ({
  x: yf(),
  y: yf()
}), vf = () => ({ min: 0, max: 0 }), ne = () => ({
  x: vf(),
  y: vf()
});
function Oe(e) {
  return [e("x"), e("y")];
}
function Pm({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function Ox({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function zx(e, t) {
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
function Is(e) {
  return e === void 0 || e === 1;
}
function Ka({ scale: e, scaleX: t, scaleY: n }) {
  return !Is(e) || !Is(t) || !Is(n);
}
function en(e) {
  return Ka(e) || Em(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Em(e) {
  return xf(e.x) || xf(e.y);
}
function xf(e) {
  return e && e !== "0%";
}
function Mo(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function wf(e, t, n, r, i) {
  return i !== void 0 && (e = Mo(e, i, r)), Mo(e, n, r) + t;
}
function Ha(e, t = 0, n = 1, r, i) {
  e.min = wf(e.min, t, n, r, i), e.max = wf(e.max, t, n, r, i);
}
function jm(e, { x: t, y: n }) {
  Ha(e.x, t.translate, t.scale, t.originPoint), Ha(e.y, n.translate, n.scale, n.originPoint);
}
const Sf = 0.999999999999, kf = 1.0000000000001;
function Bx(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    o = n[a], s = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && On(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, jm(e, s)), r && en(o.latestValues) && On(e, o.latestValues));
  }
  t.x < kf && t.x > Sf && (t.x = 1), t.y < kf && t.y > Sf && (t.y = 1);
}
function Fn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Tf(e, t, n, r, i = 0.5) {
  const o = H(e.min, e.max, i);
  Ha(e, t, n, o, r);
}
function On(e, t) {
  Tf(e.x, t.x, t.scaleX, t.scale, t.originX), Tf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Dm(e, t) {
  return Pm(zx(e.getBoundingClientRect(), t));
}
function Ux(e, t, n) {
  const r = Dm(e, n), { scroll: i } = t;
  return i && (Fn(r.x, i.offset.x), Fn(r.y, i.offset.y)), r;
}
const Am = ({ current: e }) => e ? e.ownerDocument.defaultView : null, $x = /* @__PURE__ */ new WeakMap();
class bx {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ne(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const i = (c) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(yi(c).point);
    }, o = (c, f) => {
      const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
      if (d && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = _0(d), !this.openDragLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Oe((T) => {
        let h = this.getAxisMotionValue(T).get() || 0;
        if (st.test(h)) {
          const { projection: p } = this.visualElement;
          if (p && p.layout) {
            const m = p.layout.layoutBox[T];
            m && (h = Ne(m) * (parseFloat(h) / 100));
          }
        }
        this.originPoint[T] = h;
      }), y && U.postRender(() => y(c, f)), Ia(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, s = (c, f) => {
      const { dragPropagation: d, dragDirectionLock: g, onDirectionLock: y, onDrag: v } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: T } = f;
      if (g && this.currentDirection === null) {
        this.currentDirection = Wx(T), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, T), this.updateAxis("y", f.point, T), this.visualElement.render(), v && v(c, f);
    }, a = (c, f) => this.stop(c, f), l = () => Oe((c) => {
      var f;
      return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Sm(t, {
      onSessionStart: i,
      onStart: o,
      onMove: s,
      onSessionEnd: a,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: Am(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && U.postRender(() => o(t, n));
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
    if (!r || !Oi(t, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = Vx(s, this.constraints[t], this.elastic[t])), o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && Nn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Lx(i.layoutBox, n) : this.constraints = !1, this.elastic = Fx(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Oe((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Ix(i.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Nn(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Ux(r, i.root, this.visualElement.getTransformPagePoint());
    let s = Nx(i.layout.layoutBox, o);
    if (n) {
      const a = n(Ox(s));
      this.hasMutatedConstraints = !!a, a && (s = Pm(a));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = Oe((c) => {
      if (!Oi(c, n, this.currentDirection))
        return;
      let f = l && l[c] || {};
      s && (f = { min: 0, max: 0 });
      const d = i ? 200 : 1e6, g = i ? 40 : 1e7, y = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: d,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...f
      };
      return this.startAxisValueAnimation(c, y);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Ia(this.visualElement, t), r.start(Tu(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Oe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Oe((t) => {
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
    Oe((n) => {
      const { drag: r } = this.getProps();
      if (!Oi(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - H(s, a, 0.5));
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
    if (!Nn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Oe((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = _x({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Oe((s) => {
      if (!Oi(s, t, null))
        return;
      const a = this.getAxisMotionValue(s), { min: l, max: u } = this.constraints[s];
      a.set(H(l, u, i[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    $x.set(this.visualElement, this);
    const t = this.visualElement.current, n = Or(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Nn(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), U.read(r);
    const s = li(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (Oe((c) => {
        const f = this.getAxisMotionValue(c);
        f && (this.originPoint[c] += l[c].translate, f.set(f.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: s = Wa, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a
    };
  }
}
function Oi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Wx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Kx extends Qt {
  constructor(t) {
    super(t), this.removeGroupControls = Ve, this.removeListeners = Ve, this.controls = new bx(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ve;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Cf = (e) => (t, n) => {
  e && U.postRender(() => e(t, n));
};
class Hx extends Qt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ve;
  }
  onPointerDown(t) {
    this.session = new Sm(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Am(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Cf(t),
      onStart: Cf(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && U.postRender(() => i(o, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Or(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Ji = {
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
function Pf(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const yr = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (V.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Pf(e, t.target.x), r = Pf(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Gx = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = Wt.parse(e);
    if (i.length > 5)
      return r;
    const o = Wt.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    i[0 + s] /= a, i[1 + s] /= l;
    const u = H(a, l, 0.5);
    return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i);
  }
};
class Qx extends k.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: o } = t;
    h0(Xx), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), Ji.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: o } = this.props, s = r.projection;
    return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || U.postRender(() => {
      const a = s.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), ql.postRender(() => {
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
function Rm(e) {
  const [t, n] = dh(), r = k.useContext(Kl);
  return w.jsx(Qx, { ...e, layoutGroup: r, switchLayoutGroup: k.useContext(xh), isPresent: t, safeToRemove: n });
}
const Xx = {
  borderRadius: {
    ...yr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: yr,
  borderTopRightRadius: yr,
  borderBottomLeftRadius: yr,
  borderBottomRightRadius: yr,
  boxShadow: Gx
};
function Yx(e, t, n) {
  const r = fe(e) ? e : er(e);
  return r.start(Tu("", r, t, n)), r.animation;
}
function Zx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const qx = (e, t) => e.depth - t.depth;
class Jx {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    du(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    pu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(qx), this.isDirty = !1, this.children.forEach(t);
  }
}
function ew(e, t) {
  const n = at.now(), r = ({ timestamp: i }) => {
    const o = i - n;
    o >= t && (Tt(r), e(o - t));
  };
  return U.read(r, !0), () => Tt(r);
}
const Mm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], tw = Mm.length, Ef = (e) => typeof e == "string" ? parseFloat(e) : e, jf = (e) => typeof e == "number" || V.test(e);
function nw(e, t, n, r, i, o) {
  i ? (e.opacity = H(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    rw(r)
  ), e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, iw(r))) : o && (e.opacity = H(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let s = 0; s < tw; s++) {
    const a = `border${Mm[s]}Radius`;
    let l = Df(t, a), u = Df(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || jf(l) === jf(u) ? (e[a] = Math.max(H(Ef(l), Ef(u), r), 0), (st.test(u) || st.test(l)) && (e[a] += "%")) : e[a] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function Df(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const rw = /* @__PURE__ */ Vm(0, 0.5, Xh), iw = /* @__PURE__ */ Vm(0.5, 0.95, Ve);
function Vm(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ qn(e, t, r));
}
function Af(e, t) {
  e.min = t.min, e.max = t.max;
}
function Fe(e, t) {
  Af(e.x, t.x), Af(e.y, t.y);
}
function Rf(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Mf(e, t, n, r, i) {
  return e -= t, e = Mo(e, 1 / n, r), i !== void 0 && (e = Mo(e, 1 / i, r)), e;
}
function ow(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (st.test(t) && (t = parseFloat(t), t = H(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let a = H(o.min, o.max, r);
  e === o && (a -= t), e.min = Mf(e.min, t, n, a, i), e.max = Mf(e.max, t, n, a, i);
}
function Vf(e, t, [n, r, i], o, s) {
  ow(e, t[n], t[r], t[i], t.scale, o, s);
}
const sw = ["x", "scaleX", "originX"], aw = ["y", "scaleY", "originY"];
function Lf(e, t, n, r) {
  Vf(e.x, t, sw, n ? n.x : void 0, r ? r.x : void 0), Vf(e.y, t, aw, n ? n.y : void 0, r ? r.y : void 0);
}
function Nf(e) {
  return e.translate === 0 && e.scale === 1;
}
function Lm(e) {
  return Nf(e.x) && Nf(e.y);
}
function _f(e, t) {
  return e.min === t.min && e.max === t.max;
}
function lw(e, t) {
  return _f(e.x, t.x) && _f(e.y, t.y);
}
function If(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Nm(e, t) {
  return If(e.x, t.x) && If(e.y, t.y);
}
function Ff(e) {
  return Ne(e.x) / Ne(e.y);
}
function Of(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class uw {
  constructor() {
    this.members = [];
  }
  add(t) {
    du(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (pu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
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
function cw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, o = e.y.translate / t.y, s = n?.z || 0;
  if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: g, skewY: y } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), f && (r += `rotateX(${f}deg) `), d && (r += `rotateY(${d}deg) `), g && (r += `skewX(${g}deg) `), y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const tn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Er = typeof window < "u" && window.MotionDebug !== void 0, Fs = ["", "X", "Y", "Z"], fw = { visibility: "hidden" }, zf = 1e3;
let dw = 0;
function Os(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function _m(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = $h(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && _m(r);
}
function Im({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, a = t?.()) {
      this.id = dw++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Er && (tn.totalNodes = tn.resolvedTargetDeltas = tn.recalculatedProjection = 0), this.nodes.forEach(mw), this.nodes.forEach(ww), this.nodes.forEach(Sw), this.nodes.forEach(gw), Er && window.MotionDebug.record(tn);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Jx());
    }
    addEventListener(s, a) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new hu()), this.eventHandlers.get(s).add(a);
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Zx(s), this.instance = s;
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
        let f;
        const d = () => this.root.updateBlockedByResize = !1;
        e(s, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = ew(d, 250), Ji.hasAnimatedSinceResize && (Ji.hasAnimatedSinceResize = !1, this.nodes.forEach(Uf));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: g, layout: y }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || c.getDefaultTransition() || Ew, { onLayoutAnimationStart: T, onLayoutAnimationComplete: h } = c.getProps(), p = !this.targetLayout || !Nm(this.targetLayout, y) || g, m = !d && g;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (p || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, m);
          const x = {
            ...lu(v, "layout"),
            onPlay: T,
            onComplete: h
          };
          (c.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = !1), this.startAnimation(x);
        } else
          d || Uf(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = y;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Tt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(kw), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _m(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Bf);
        return;
      }
      this.isUpdating || this.nodes.forEach(vw), this.isUpdating = !1, this.nodes.forEach(xw), this.nodes.forEach(pw), this.nodes.forEach(hw), this.clearAllSnapshots();
      const a = at.now();
      ce.delta = Ct(0, 1e3 / 60, a - ce.timestamp), ce.timestamp = a, ce.isProcessing = !0, Ds.update.process(ce), Ds.preRender.process(ce), Ds.render.process(ce), ce.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, ql.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(yw), this.sharedNodes.forEach(Tw);
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
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ne(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Lm(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      s && (a || en(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return s && (l = this.removeTransform(l)), jw(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a)
        return ne();
      const l = a.measureViewportBox();
      if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(Dw))) {
        const { scroll: c } = this.root;
        c && (Fn(l.x, c.offset.x), Fn(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = ne();
      if (Fe(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: f, options: d } = c;
        c !== this.root && f && d.layoutScroll && (f.wasRoot && Fe(l, s), Fn(l.x, f.offset.x), Fn(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = ne();
      Fe(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && On(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), en(c.latestValues) && On(l, c.latestValues);
      }
      return en(this.latestValues) && On(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ne();
      Fe(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !en(u.latestValues))
          continue;
        Ka(u.latestValues) && u.updateSnapshot();
        const c = ne(), f = u.measurePageBox();
        Fe(c, f), Lf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return en(this.latestValues) && Lf(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (this.resolvedRelativeTargetAt = ce.timestamp, !this.targetDelta && !this.relativeTarget) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), Br(this.relativeTargetOrigin, this.layout.layoutBox, g.layout.layoutBox), Fe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ne(), this.targetWithTransforms = ne()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Mx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Fe(this.target, this.layout.layoutBox), jm(this.target, this.targetDelta)) : Fe(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g && !!g.resumingFrom == !!this.resumingFrom && !g.options.layoutScroll && g.target && this.animationProgress !== 1 ? (this.relativeParent = g, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ne(), this.relativeTargetOrigin = ne(), Br(this.relativeTargetOrigin, this.target, g.target), Fe(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Er && tn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ka(this.parent.latestValues) || Em(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var s;
      const a = this.getLead(), l = !!this.resumingFrom || this !== a;
      let u = !0;
      if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === ce.timestamp && (u = !1), u)
        return;
      const { layout: c, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || f))
        return;
      Fe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, g = this.treeScale.y;
      Bx(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox, a.targetWithTransforms = ne());
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Rf(this.prevProjectionDelta.x, this.projectionDelta.x), Rf(this.prevProjectionDelta.y, this.projectionDelta.y)), zr(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== g || !Of(this.projectionDelta.x, this.prevProjectionDelta.x) || !Of(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), Er && tn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(), s) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = In(), this.projectionDelta = In(), this.projectionDeltaWithTransform = In();
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, f = In();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const d = ne(), g = l ? l.source : void 0, y = this.layout ? this.layout.source : void 0, v = g !== y, T = this.getStack(), h = !T || T.members.length <= 1, p = !!(v && !h && this.options.crossfade === !0 && !this.path.some(Pw));
      this.animationProgress = 0;
      let m;
      this.mixTargetDelta = (x) => {
        const S = x / 1e3;
        $f(f.x, s.x, S), $f(f.y, s.y, S), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Br(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Cw(this.relativeTarget, this.relativeTargetOrigin, d, S), m && lw(this.relativeTarget, m) && (this.isProjectionDirty = !1), m || (m = ne()), Fe(m, this.relativeTarget)), v && (this.animationValues = c, nw(c, u, this.latestValues, S, p, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Tt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = U.update(() => {
        Ji.hasAnimatedSinceResize = !0, this.currentAnimation = Yx(0, zf, {
          ...s,
          onUpdate: (a) => {
            this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(zf), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = s;
      if (!(!a || !l || !u)) {
        if (this !== s && this.layout && u && Fm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || ne();
          const f = Ne(this.layout.layoutBox.x);
          l.x.min = s.target.x.min, l.x.max = l.x.min + f;
          const d = Ne(this.layout.layoutBox.y);
          l.y.min = s.target.y.min, l.y.max = l.y.min + d;
        }
        Fe(a, l), On(a, c), zr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new uw()), this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let a = !1;
      const { latestValues: l } = s;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && Os("z", s, u, this.animationValues);
      for (let c = 0; c < Fs.length; c++)
        Os(`rotate${Fs[c]}`, s, u, this.animationValues), Os(`skew${Fs[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return fw;
      const u = {
        visibility: ""
      }, c = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = Zi(s?.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = Zi(s?.pointerEvents) || ""), this.hasProjected && !en(this.latestValues) && (v.transform = c ? c({}, "") : "none", this.hasProjected = !1), v;
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = cw(this.projectionDeltaWithTransform, this.treeScale, d), c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
      for (const v in Eo) {
        if (d[v] === void 0)
          continue;
        const { correct: T, applyTo: h } = Eo[v], p = u.transform === "none" ? d[v] : T(d[v], f);
        if (h) {
          const m = h.length;
          for (let x = 0; x < m; x++)
            u[h[x]] = p;
        } else
          u[v] = p;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? Zi(s?.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Bf), this.root.sharedNodes.clear();
    }
  };
}
function pw(e) {
  e.updateLayout();
}
function hw(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout, { animationType: o } = e.options, s = n.source !== e.layout.source;
    o === "size" ? Oe((f) => {
      const d = s ? n.measuredBox[f] : n.layoutBox[f], g = Ne(d);
      d.min = r[f].min, d.max = d.min + g;
    }) : Fm(o, n.layoutBox, r) && Oe((f) => {
      const d = s ? n.measuredBox[f] : n.layoutBox[f], g = Ne(r[f]);
      d.max = d.min + g, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + g);
    });
    const a = In();
    zr(a, r, n.layoutBox);
    const l = In();
    s ? zr(l, e.applyTransform(i, !0), n.measuredBox) : zr(l, r, n.layoutBox);
    const u = !Lm(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = ne();
          Br(y, n.layoutBox, d.layoutBox);
          const v = ne();
          Br(v, r, g.layoutBox), Nm(y, v) || (c = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = y, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function mw(e) {
  Er && tn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function gw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function yw(e) {
  e.clearSnapshot();
}
function Bf(e) {
  e.clearMeasurements();
}
function vw(e) {
  e.isLayoutDirty = !1;
}
function xw(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Uf(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function ww(e) {
  e.resolveTargetDelta();
}
function Sw(e) {
  e.calcProjection();
}
function kw(e) {
  e.resetSkewAndRotation();
}
function Tw(e) {
  e.removeLeadSnapshot();
}
function $f(e, t, n) {
  e.translate = H(t.translate, 0, n), e.scale = H(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function bf(e, t, n, r) {
  e.min = H(t.min, n.min, r), e.max = H(t.max, n.max, r);
}
function Cw(e, t, n, r) {
  bf(e.x, t.x, n.x, r), bf(e.y, t.y, n.y, r);
}
function Pw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Ew = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Wf = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Kf = Wf("applewebkit/") && !Wf("chrome/") ? Math.round : Ve;
function Hf(e) {
  e.min = Kf(e.min), e.max = Kf(e.max);
}
function jw(e) {
  Hf(e.x), Hf(e.y);
}
function Fm(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Rx(Ff(t), Ff(n), 0.2);
}
function Dw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Aw = Im({
  attachResizeListener: (e, t) => li(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), zs = {
  current: void 0
}, Om = Im({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!zs.current) {
      const e = new Aw({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), zs.current = e;
    }
    return zs.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Rw = {
  pan: {
    Feature: Hx
  },
  drag: {
    Feature: Kx,
    ProjectionNode: Om,
    MeasureLayout: Rm
  }
};
function Gf(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = r[i];
  o && U.postRender(() => o(t, yi(t)));
}
class Mw extends Qt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = R0(t, (n) => (Gf(this.node, n, "Start"), (r) => Gf(this.node, r, "End"))));
  }
  unmount() {
  }
}
class Vw extends Qt {
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
    this.unmount = gi(li(this.node.current, "focus", () => this.onFocus()), li(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Qf(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = r[i];
  o && U.postRender(() => o(t, yi(t)));
}
class Lw extends Qt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = N0(t, (n) => (Qf(this.node, n, "Start"), (r, { success: i }) => Qf(this.node, r, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ga = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Nw = (e) => {
  const t = Ga.get(e.target);
  t && t(e);
}, _w = (e) => {
  e.forEach(Nw);
};
function Iw({ root: e, ...t }) {
  const n = e || document;
  Bs.has(n) || Bs.set(n, {});
  const r = Bs.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(_w, { root: e, ...t })), r[i];
}
function Fw(e, t, n) {
  const r = Iw(t);
  return Ga.set(e, n), r.observe(e), () => {
    Ga.delete(e), r.unobserve(e);
  };
}
const Ow = {
  some: 0,
  all: 1
};
class zw extends Qt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: o } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Ow[i]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(), d = u ? c : f;
      d && d(l);
    };
    return Fw(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Bw(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Bw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Uw = {
  inView: {
    Feature: zw
  },
  tap: {
    Feature: Lw
  },
  focus: {
    Feature: Vw
  },
  hover: {
    Feature: Mw
  }
}, $w = {
  layout: {
    ProjectionNode: Om,
    MeasureLayout: Rm
  }
}, Qa = { current: null }, zm = { current: !1 };
function bw() {
  if (zm.current = !0, !!Hl)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Qa.current = e.matches;
      e.addListener(t), t();
    } else
      Qa.current = !1;
}
const Ww = [...um, ge, Wt], Kw = (e) => Ww.find(lm(e)), Xf = /* @__PURE__ */ new WeakMap();
function Hw(e, t, n) {
  for (const r in t) {
    const i = t[r], o = n[r];
    if (fe(i))
      e.addValue(r, i);
    else if (fe(o))
      e.addValue(r, er(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, er(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Yf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Gw {
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
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = wu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const g = at.now();
      this.renderScheduledAt < g && (this.renderScheduledAt = g, U.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u, onUpdate: c } = s;
    this.onUpdate = c, this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = qo(n), this.isVariantNode = yh(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const g in d) {
      const y = d[g];
      l[g] !== void 0 && fe(y) && y.set(l[g], !1);
    }
  }
  mount(t) {
    this.current = t, Xf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), zm.current || bw(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Qa.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Xf.delete(this.current), this.projection && this.projection.unmount(), Tt(this.notifyUpdate), Tt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
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
    const r = vn.has(t), i = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && U.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), o(), s && s(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Jn) {
      const n = Jn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ne();
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
    for (let r = 0; r < Yf.length; r++) {
      const i = Yf[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = Hw(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
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
    return r === void 0 && n !== void 0 && (r = er(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return i != null && (typeof i == "string" && (sm(i) || Zh(i)) ? i = parseFloat(i) : !Kw(i) && Wt.test(n) && (i = rm(t, n)), this.setBaseTarget(t, fe(i) ? i.get() : i)), fe(i) ? i.get() : i;
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
      const s = eu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      s && (i = s[t]);
    }
    if (r && i !== void 0)
      return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !fe(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new hu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Bm extends Gw {
  constructor() {
    super(...arguments), this.KeyframeResolver = cm;
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
    fe(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Qw(e) {
  return window.getComputedStyle(e);
}
class Xw extends Bm {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Eh;
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = xu(n);
      return r && r.default || 0;
    } else {
      const r = Qw(t), i = (Th(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Dm(t, n);
  }
  build(t, n, r) {
    ru(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return au(t, n, r);
  }
}
class Yw extends Bm {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ne;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = xu(n);
      return r && r.default || 0;
    }
    return n = jh.has(n) ? n : Zl(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Rh(t, n, r);
  }
  build(t, n, r) {
    iu(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Dh(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = su(t.tagName), super.mount(t);
  }
}
const Zw = (e, t) => Jl(e) ? new Yw(t) : new Xw(t, {
  allowProjection: e !== k.Fragment
}), qw = /* @__PURE__ */ T0({
  ...Sx,
  ...Uw,
  ...Rw,
  ...$w
}, Zw), ve = /* @__PURE__ */ Ov(qw);
function Um(e) {
  const t = yn(() => er(e)), { isStatic: n } = k.useContext(Xo);
  if (n) {
    const [, r] = k.useState(e);
    k.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function $m(e, t) {
  const n = Um(t()), r = () => n.set(t());
  return r(), Gl(() => {
    const i = () => U.preRender(r, !1, !0), o = e.map((s) => s.on("change", i));
    return () => {
      o.forEach((s) => s()), Tt(r);
    };
  }), n;
}
const Jw = (e) => e && typeof e == "object" && e.mix, eS = (e) => Jw(e) ? e.mix : void 0;
function tS(...e) {
  const t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], o = e[2 + n], s = e[3 + n], a = ym(i, o, {
    mixer: eS(o[0]),
    ...s
  });
  return t ? a(r) : a;
}
function nS(e) {
  Ir.current = [], e();
  const t = $m(Ir.current, e);
  return Ir.current = void 0, t;
}
function rS(e, t, n, r) {
  if (typeof e == "function")
    return nS(e);
  const i = typeof t == "function" ? t : tS(t, n, r);
  return Array.isArray(e) ? Zf(e, i) : Zf([e], ([o]) => i(o));
}
function Zf(e, t) {
  const n = yn(() => []);
  return $m(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++)
      n[i] = e[i].get();
    return t(n);
  });
}
const bm = k.createContext(null);
function iS(e, t, n, r) {
  if (!r)
    return e;
  const i = e.findIndex((c) => c.value === t);
  if (i === -1)
    return e;
  const o = r > 0 ? 1 : -1, s = e[i + o];
  if (!s)
    return e;
  const a = e[i], l = s.layout, u = H(l.min, l.max, 0.5);
  return o === 1 && a.layout.max + n > u || o === -1 && a.layout.min + n < u ? F0(e, i, i + o) : e;
}
function oS({ children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o }, s) {
  const a = yn(() => ve[t]), l = [], u = k.useRef(!1), c = {
    axis: n,
    registerItem: (f, d) => {
      const g = l.findIndex((y) => f === y.value);
      g !== -1 ? l[g].layout = d[n] : l.push({ value: f, layout: d[n] }), l.sort(lS);
    },
    updateOrder: (f, d, g) => {
      if (u.current)
        return;
      const y = iS(l, f, d, g);
      l !== y && (u.current = !0, r(y.map(aS).filter((v) => i.indexOf(v) !== -1)));
    }
  };
  return k.useEffect(() => {
    u.current = !1;
  }), w.jsx(a, { ...o, ref: s, ignoreStrict: !0, children: w.jsx(bm.Provider, { value: c, children: e }) });
}
const sS = /* @__PURE__ */ k.forwardRef(oS);
function aS(e) {
  return e.value;
}
function lS(e, t) {
  return e.layout.min - t.layout.min;
}
function qf(e, t = 0) {
  return fe(e) ? e : Um(t);
}
function uS({ children: e, style: t = {}, value: n, as: r = "li", onDrag: i, layout: o = !0, ...s }, a) {
  const l = yn(() => ve[r]), u = k.useContext(bm), c = {
    x: qf(t.x),
    y: qf(t.y)
  }, f = rS([c.x, c.y], ([v, T]) => v || T ? 1 : "unset"), { axis: d, registerItem: g, updateOrder: y } = u;
  return w.jsx(l, { drag: d, ...s, dragSnapToOrigin: !0, style: { ...t, x: c.x, y: c.y, zIndex: f }, layout: o, onDrag: (v, T) => {
    const { velocity: h } = T;
    h[d] && y(n, c[d].get(), h[d]), i && i(v, T);
  }, onLayoutMeasure: (v) => g(n, v), ref: a, ignoreStrict: !0, children: e });
}
const cS = /* @__PURE__ */ k.forwardRef(uS);
function fS({
  target: e,
  onSetDue: t,
  onAddSubtask: n,
  onDelete: r,
  onClose: i
}) {
  const o = k.useRef(null);
  k.useEffect(() => {
    o.current?.focus();
    const a = (l) => {
      l.key === "Escape" && (l.stopPropagation(), i());
    };
    return window.addEventListener("keydown", a, !0), () => window.removeEventListener("keydown", a, !0);
  }, [i]);
  const s = (a) => () => {
    a(), i();
  };
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(
      "div",
      {
        className: "jwf-menu-backdrop",
        onClick: i,
        onContextMenu: (a) => {
          a.preventDefault(), i();
        }
      }
    ),
    /* @__PURE__ */ w.jsxs(
      "div",
      {
        className: "jwf-menu",
        role: "menu",
        "aria-label": `Actions for “${e.label}”`,
        style: { left: e.x, top: e.y },
        children: [
          /* @__PURE__ */ w.jsx(
            "button",
            {
              ref: o,
              type: "button",
              className: "jwf-menu-item",
              role: "menuitem",
              onClick: s(() => t({ id: e.taskId })),
              children: "Set due date"
            }
          ),
          /* @__PURE__ */ w.jsx(
            "button",
            {
              type: "button",
              className: "jwf-menu-item",
              role: "menuitem",
              onClick: s(() => n({ id: e.taskId })),
              children: "Add subtask"
            }
          ),
          /* @__PURE__ */ w.jsx(
            "button",
            {
              type: "button",
              className: "jwf-menu-item",
              role: "menuitem",
              "data-danger": !0,
              onClick: s(() => r({ id: e.taskId })),
              children: "Delete"
            }
          )
        ]
      }
    )
  ] });
}
function He(e, t, n, r, i = !0) {
  return { frequency: e, delay: t, gain: n, decay: r, shimmer: i };
}
class Wm {
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
          const o = r + i.delay, s = n.createOscillator(), a = n.createGain();
          if (s.connect(a), a.connect(n.destination), s.type = "sine", s.frequency.value = i.frequency, a.gain.setValueAtTime(1e-4, o), a.gain.linearRampToValueAtTime(i.gain, o + 5e-3), a.gain.exponentialRampToValueAtTime(1e-4, o + i.decay), s.start(o), s.stop(o + i.decay + 0.02), i.shimmer) {
            const l = n.createOscillator(), u = n.createGain();
            l.connect(u), u.connect(n.destination), l.type = "sine", l.frequency.value = i.frequency * 2, u.gain.setValueAtTime(1e-4, o), u.gain.linearRampToValueAtTime(i.gain * 0.25, o + 5e-3), u.gain.exponentialRampToValueAtTime(1e-4, o + i.decay * 0.7), l.start(o), l.stop(o + i.decay + 0.02);
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
function dS(e) {
  const t = new Date(e), n = /* @__PURE__ */ new Date();
  n.setHours(0, 0, 0, 0);
  const r = Math.round((t.getTime() - n.getTime()) / 864e5);
  return r < 0 ? { text: t.toLocaleDateString([], { month: "short", day: "numeric" }), overdue: !0 } : r === 0 ? { text: "Today", overdue: !1 } : r === 1 ? { text: "Tomorrow", overdue: !1 } : { text: t.toLocaleDateString([], { month: "short", day: "numeric" }), overdue: !1 };
}
function Xa({
  task: e,
  subProgress: t,
  dueEditing: n,
  onDueEditingDone: r,
  onToggle: i,
  onEdit: o,
  onSetDue: s,
  onMenu: a,
  drag: l = !1,
  onDragState: u,
  onDragSettled: c
}) {
  const [f, d] = k.useState(!1), [g, y] = k.useState(e.text), [v, T] = k.useState(""), h = k.useRef(null);
  k.useEffect(() => {
    d(!1), n || T("");
  }, [e.id, n]), k.useEffect(() => {
    if (!n) return;
    const R = e.dueAt != null ? new Date(e.dueAt).toISOString().slice(0, 10) : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    T(R);
  }, [n, e.dueAt]), k.useEffect(() => {
    f && h.current?.select();
  }, [f]);
  const p = () => {
    d(!1);
    const R = g.trim();
    R.length > 0 && R !== e.text ? o(e, R) : y(e.text);
  }, m = "Double-click to edit · right-click for options", x = e.dueAt != null && !e.done ? dS(e.dueAt) : null, S = n === !0, C = /* @__PURE__ */ w.jsx(
    "button",
    {
      type: "button",
      className: "jwf-check",
      "data-done": e.done,
      "data-sub": e.parentId != null,
      onClick: () => i(e),
      title: e.done ? "Mark as not done" : "Mark as done",
      "aria-label": e.done ? "Mark as not done" : "Mark as done"
    }
  ), j = /* @__PURE__ */ w.jsxs("span", { className: "jwf-task-text", "data-done": e.done, onDoubleClick: () => d(!0), children: [
    e.text,
    t ? /* @__PURE__ */ w.jsxs("span", { className: "jwf-task-progress", children: [
      t.done,
      "/",
      t.total
    ] }) : null
  ] }), P = e.done && e.doneAt != null ? /* @__PURE__ */ w.jsx("span", { className: "jwf-task-date", children: new Date(e.doneAt).toLocaleDateString([], { month: "short", day: "numeric" }) }) : x ? /* @__PURE__ */ w.jsx("span", { className: "jwf-task-date", "data-overdue": x.overdue, children: x.overdue ? `${x.text} · overdue` : x.text }) : null, L = {
    className: "jwf-task",
    "data-done": e.done,
    "data-sub": e.parentId != null,
    title: m,
    onContextMenu: (R) => a(R, e)
  };
  return S ? /* @__PURE__ */ w.jsxs(
    ve.div,
    {
      ...L,
      initial: { opacity: 0, x: -6 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 6 },
      transition: { duration: 0.16 },
      children: [
        C,
        /* @__PURE__ */ w.jsx(
          "input",
          {
            autoFocus: !0,
            className: "jwf-due-input",
            type: "date",
            value: v,
            onChange: (R) => T(R.target.value),
            onKeyDown: (R) => {
              R.stopPropagation(), R.key === "Enter" ? (R.preventDefault(), s(e, v ? (/* @__PURE__ */ new Date(`${v}T00:00:00`)).getTime() : null), r?.()) : R.key === "Escape" && r?.();
            },
            onBlur: () => r?.()
          }
        ),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            type: "button",
            className: "jwf-ghost-clear",
            title: "Clear due date",
            onClick: () => {
              s(e, null), r?.();
            },
            children: "Clear"
          }
        )
      ]
    }
  ) : f ? /* @__PURE__ */ w.jsxs(
    ve.div,
    {
      ...L,
      initial: { opacity: 0, x: -6 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 6 },
      transition: { duration: 0.16 },
      children: [
        C,
        /* @__PURE__ */ w.jsx(
          "input",
          {
            ref: h,
            autoFocus: !0,
            className: "jwf-edit-input",
            type: "text",
            value: g,
            maxLength: Ya,
            onChange: (R) => y(R.target.value),
            onKeyDown: (R) => {
              R.stopPropagation(), R.key === "Enter" ? (R.preventDefault(), p()) : R.key === "Escape" && (y(e.text), d(!1));
            },
            onBlur: p
          }
        )
      ]
    }
  ) : l ? /* @__PURE__ */ w.jsxs(
    cS,
    {
      as: "div",
      value: e,
      ...L,
      onDragStart: () => u?.(!0),
      onDragEnd: () => c?.(),
      initial: { opacity: 0, x: -6 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 6 },
      transition: { duration: 0.16 },
      style: { position: "relative" },
      children: [
        C,
        j,
        P
      ]
    }
  ) : /* @__PURE__ */ w.jsxs(
    ve.div,
    {
      ...L,
      initial: { opacity: 0, x: -6 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 6 },
      transition: { duration: 0.16 },
      children: [
        C,
        j,
        P
      ]
    }
  );
}
const pS = [
  { id: "today", label: "Today" },
  { id: "week", label: "7 days" },
  { id: "all", label: "All" }
];
function hS() {
  const e = /* @__PURE__ */ new Date();
  return e.setHours(0, 0, 0, 0), e.getTime();
}
let vr = null;
function mS({
  state: e,
  send: t
}) {
  const [n, r] = k.useState("todo"), [i, o] = k.useState("all"), [s, a] = k.useState(""), [l, u] = k.useState(""), [c, f] = k.useState(null), [d, g] = k.useState(null), [y, v] = k.useState(null), [T, h] = k.useState(null), p = k.useRef(null), m = () => p.current ??= new Wm(), x = k.useMemo(() => e.tasks.filter((A) => A.parentId === null), [e.tasks]), S = k.useMemo(() => {
    const A = /* @__PURE__ */ new Map();
    for (const O of e.tasks) {
      if (O.parentId == null) continue;
      const q = A.get(O.parentId) ?? [];
      q.push(O), A.set(O.parentId, q);
    }
    return A;
  }, [e.tasks]), C = k.useMemo(() => x.filter((A) => !A.done), [x]), j = k.useMemo(
    () => x.filter((A) => A.done).sort((A, O) => (O.doneAt ?? 0) - (A.doneAt ?? 0)),
    [x]
  ), P = e.tasks.filter((A) => !A.done).length, L = l.trim().toLowerCase(), R = (A) => A.text.toLowerCase().includes(L), Z = L ? C.filter((A) => R(A) || (S.get(A.id) ?? []).some(R)) : C, et = (L ? j.filter(R) : j).filter((A) => i === "all" || A.doneAt == null ? !0 : A.doneAt >= (i === "today" ? hS() : Date.now() - 7 * 864e5)), ut = k.useRef(!1), Xt = k.useRef(null), [xn, G] = k.useState(null), D = (A) => {
    Xt.current = A, G(A);
  };
  k.useEffect(() => {
    ut.current || (Xt.current = null, G(null));
  }, [e.tasks]);
  const N = xn ?? Z, _ = () => {
    ut.current = !1;
    const A = Xt.current;
    if (Xt.current = null, G(null), !A) return;
    const O = [];
    for (const q of A) {
      O.push(q.id);
      for (const ts of S.get(q.id) ?? []) O.push(ts.id);
    }
    for (const q of x)
      if (q.done) {
        O.push(q.id);
        for (const ts of S.get(q.id) ?? []) O.push(ts.id);
      }
    t({ type: "reorder", ids: O });
  }, $ = (A) => {
    h(A), vr != null && window.clearTimeout(vr), vr = window.setTimeout(() => h(null), 5e3);
  }, te = (A) => {
    A.done ? m().taskReopen() : m().taskComplete(), t({ type: "toggle", id: A.id });
  }, wn = () => {
    const A = s.trim();
    A.length !== 0 && (m().taskAdd(), t({ type: "add", text: A }), a(""));
  }, ct = (A) => {
    m().taskDelete(), t({ type: "remove", id: A.id }), $("Deleted");
  }, lr = () => {
    j.length !== 0 && (m().taskDelete(), t({ type: "clearCompleted" }), $(`Cleared ${j.length}`));
  }, ft = () => {
    vr != null && window.clearTimeout(vr), h(null), m().taskAdd(), t({ type: "undo" });
  }, Yt = k.useRef(null), Cu = (A, O) => {
    A.preventDefault(), A.stopPropagation();
    const q = Yt.current?.getBoundingClientRect();
    f({
      taskId: O.id,
      label: O.text,
      x: A.clientX - (q?.left ?? 0),
      y: A.clientY - (q?.top ?? 0)
    });
  }, Hm = /* @__PURE__ */ w.jsx(
    "input",
    {
      className: "jwf-search",
      type: "search",
      "aria-label": "Search tasks",
      placeholder: "Search",
      value: l,
      onChange: (A) => u(A.target.value),
      onKeyDown: (A) => {
        A.stopPropagation(), A.key === "Escape" && u("");
      }
    }
  );
  return /* @__PURE__ */ w.jsxs("div", { className: "jwf-tasks", ref: Yt, children: [
    /* @__PURE__ */ w.jsxs("div", { className: "jwf-subtabs", role: "tablist", "aria-label": "Task lists", children: [
      /* @__PURE__ */ w.jsxs(
        "button",
        {
          type: "button",
          className: "jwf-subtab",
          role: "tab",
          "aria-selected": n === "todo",
          "data-active": n === "todo",
          onClick: () => r("todo"),
          children: [
            "To do",
            P > 0 ? ` · ${P}` : ""
          ]
        }
      ),
      /* @__PURE__ */ w.jsx(
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
      ),
      Hm
    ] }),
    n === "todo" ? /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsxs(
        sS,
        {
          axis: "y",
          values: N,
          onReorder: (A) => D(A),
          className: "jwf-task-list",
          as: "div",
          children: [
            /* @__PURE__ */ w.jsx(ii, { initial: !1, children: N.map((A) => /* @__PURE__ */ w.jsx(
              gS,
              {
                task: A,
                subs: S.get(A.id) ?? [],
                subInputOpen: y === A.id,
                onSubInputClose: () => v(null),
                dueEditingId: d,
                onDueEditingDone: () => g(null),
                onToggle: te,
                onEdit: (O, q) => t({ type: "edit", id: O.id, text: q }),
                onSetDue: (O, q) => t({ type: "setDue", id: O.id, dueAt: q }),
                onMenu: Cu,
                onAddSub: (O, q) => {
                  m().taskAdd(), t({ type: "add", text: O, parentId: q });
                },
                onDragState: (O) => {
                  ut.current = O;
                },
                onDragSettled: _,
                drag: !L
              },
              A.id
            )) }),
            Z.length === 0 ? /* @__PURE__ */ w.jsx("p", { className: "jwf-done-empty", children: L ? "Nothing matches" : "Add a task below" }) : null
          ]
        }
      ),
      /* @__PURE__ */ w.jsx("div", { className: "jwf-task-input-row", children: /* @__PURE__ */ w.jsx(
        "input",
        {
          autoFocus: !0,
          className: "jwf-task-input",
          type: "text",
          "aria-label": "Add a task",
          maxLength: Ya,
          placeholder: "Add a task…",
          value: s,
          onChange: (A) => a(A.target.value),
          onKeyDown: (A) => {
            if (A.stopPropagation(), A.key === "Enter")
              A.preventDefault(), wn();
            else if (A.key === "Backspace" && s.length === 0) {
              const O = Z.at(-1);
              O && (m().taskDelete(), t({ type: "remove", id: O.id }), $("Deleted"));
            }
          }
        }
      ) })
    ] }) : /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsxs("div", { className: "jwf-filters", children: [
        pS.map((A) => /* @__PURE__ */ w.jsx(
          "button",
          {
            type: "button",
            className: "jwf-filter",
            "data-active": i === A.id,
            "aria-pressed": i === A.id,
            onClick: () => o(A.id),
            children: A.label
          },
          A.id
        )),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            type: "button",
            className: "jwf-ghost-clear",
            onClick: lr,
            disabled: j.length === 0,
            title: "Remove every completed task (undoable)",
            children: "Clear completed"
          }
        )
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "jwf-task-list", role: "list", children: [
        /* @__PURE__ */ w.jsx(ii, { initial: !1, children: et.map((A) => /* @__PURE__ */ w.jsx(
          Xa,
          {
            task: A,
            dueEditing: d === A.id,
            onDueEditingDone: () => g(null),
            onToggle: te,
            onEdit: (O, q) => t({ type: "edit", id: O.id, text: q }),
            onSetDue: (O, q) => t({ type: "setDue", id: O.id, dueAt: q }),
            onMenu: Cu
          },
          A.id
        )) }),
        et.length === 0 ? /* @__PURE__ */ w.jsx("p", { className: "jwf-done-empty", children: j.length === 0 ? "Nothing completed yet" : "Nothing in this range" }) : null
      ] })
    ] }),
    c ? /* @__PURE__ */ w.jsx(
      fS,
      {
        target: c,
        onSetDue: ({ id: A }) => g(A),
        onAddSubtask: ({ id: A }) => v(A),
        onDelete: ct,
        onClose: () => f(null)
      }
    ) : null,
    T ? /* @__PURE__ */ w.jsxs("div", { className: "jwf-undo", role: "status", children: [
      /* @__PURE__ */ w.jsx("span", { children: T }),
      /* @__PURE__ */ w.jsx("button", { type: "button", onClick: ft, children: "Undo" })
    ] }) : null
  ] });
}
function gS({
  task: e,
  subs: t,
  subInputOpen: n,
  onSubInputClose: r,
  dueEditingId: i,
  onDueEditingDone: o,
  onToggle: s,
  onEdit: a,
  onSetDue: l,
  onMenu: u,
  onAddSub: c,
  onDragState: f,
  onDragSettled: d,
  drag: g
}) {
  const [y, v] = k.useState("");
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(
      Xa,
      {
        task: e,
        subProgress: t.length > 0 ? { done: t.filter((T) => T.done).length, total: t.length } : void 0,
        dueEditing: i === e.id,
        onDueEditingDone: o,
        onToggle: s,
        onEdit: a,
        onSetDue: l,
        onMenu: u,
        drag: g,
        onDragState: f,
        onDragSettled: d
      }
    ),
    t.map((T) => /* @__PURE__ */ w.jsx(
      Xa,
      {
        task: T,
        dueEditing: i === T.id,
        onDueEditingDone: o,
        onToggle: s,
        onEdit: a,
        onSetDue: l,
        onMenu: u
      },
      T.id
    )),
    n ? /* @__PURE__ */ w.jsx("div", { className: "jwf-sub-input-row", children: /* @__PURE__ */ w.jsx(
      "input",
      {
        autoFocus: !0,
        className: "jwf-task-input jwf-sub-input",
        type: "text",
        "aria-label": "Add a subtask",
        maxLength: Ya,
        placeholder: "Add a subtask…",
        value: y,
        onChange: (T) => v(T.target.value),
        onKeyDown: (T) => {
          if (T.stopPropagation(), T.key === "Enter") {
            T.preventDefault();
            const h = y.trim();
            h.length > 0 && (c(h, e.id), v(""));
          } else T.key === "Escape" && r();
        },
        onBlur: r
      }
    ) }) : null
  ] });
}
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yS = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Km = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vS = {
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
const xS = k.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...a
  }, l) => k.createElement(
    "svg",
    {
      ref: l,
      ...vS,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Km("lucide", i),
      ...a
    },
    [
      ...s.map(([u, c]) => k.createElement(u, c)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = (e, t) => {
  const n = k.forwardRef(
    ({ className: r, ...i }, o) => k.createElement(xS, {
      ref: o,
      iconNode: t,
      className: Km(`lucide-${yS(e)}`, r),
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
const wS = ar("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SS = ar("Pause", [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kS = ar("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TS = ar("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CS = ar("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PS = ar("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), ES = [880, 1046, 1174], jS = 20, DS = 2;
class AS {
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
      const n = (i, o) => {
        const s = t.createOscillator(), a = t.createGain();
        s.connect(a), a.connect(t.destination), s.type = "sine", s.frequency.value = o, a.gain.setValueAtTime(0.3, i), a.gain.exponentialRampToValueAtTime(0.01, i + 0.3), s.start(i), s.stop(i + 0.3);
      }, r = t.currentTime;
      for (let i = 0; i < jS; i += 1) {
        const o = r + i * DS;
        ES.forEach((s, a) => n(o + a * 0.35, s));
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
function RS() {
  const [e, t] = k.useState(() => /* @__PURE__ */ new Date()), [n, r] = k.useState(!1);
  return k.useEffect(() => {
    const i = setInterval(() => t(/* @__PURE__ */ new Date()), 1e4);
    return () => clearInterval(i);
  }, []), /* @__PURE__ */ w.jsx(
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
const MS = [15, 25, 30, 45, 60, 90, 120];
function VS(e) {
  if (e < 60) return `${e}m`;
  const t = e / 60;
  return Number.isInteger(t) ? `${t}h` : `${t}h`;
}
function LS({
  totalSeconds: e,
  onSelect: t,
  onStart: n
}) {
  const [r, i] = k.useState(""), o = Math.round(e / 60);
  return /* @__PURE__ */ w.jsxs(
    ve.div,
    {
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
      style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 18 },
      children: [
        /* @__PURE__ */ w.jsx("span", { className: "tm-label", children: "Focus duration" }),
        /* @__PURE__ */ w.jsx("div", { className: "tm-presets", children: MS.map((s) => /* @__PURE__ */ w.jsx(
          "button",
          {
            type: "button",
            className: "tm-preset",
            "data-selected": !r && o === s,
            onClick: () => {
              i(""), t(s);
            },
            children: VS(s)
          },
          s
        )) }),
        /* @__PURE__ */ w.jsx("div", { className: "tm-row", children: /* @__PURE__ */ w.jsx(
          "input",
          {
            className: "tm-custom",
            type: "number",
            min: 1,
            max: 480,
            placeholder: "Custom",
            value: r,
            onChange: (s) => {
              const a = s.target.value;
              i(a);
              const l = Number.parseInt(a, 10);
              Number.isFinite(l) && l > 0 && t(l);
            },
            onKeyDown: (s) => {
              s.key === "Enter" && (s.preventDefault(), s.stopPropagation(), n());
            }
          }
        ) }),
        /* @__PURE__ */ w.jsx("button", { type: "button", className: "tm-primary", onClick: n, children: "Start focus" })
      ]
    }
  );
}
function NS({
  reminder: e,
  onDismiss: t
}) {
  return /* @__PURE__ */ w.jsx(
    ve.div,
    {
      className: "tm-alert",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.25 },
      children: /* @__PURE__ */ w.jsxs(
        ve.div,
        {
          className: "tm-alert-card",
          initial: { scale: 0.94, y: 10 },
          animate: { scale: 1, y: 0 },
          transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          children: [
            /* @__PURE__ */ w.jsx(
              ve.div,
              {
                className: "tm-alert-icon",
                animate: { scale: [1, 1.08, 1] },
                transition: { repeat: 1 / 0, duration: 1.6 },
                children: "⏰"
              }
            ),
            /* @__PURE__ */ w.jsxs("div", { children: [
              /* @__PURE__ */ w.jsx("div", { style: { fontSize: 17, fontWeight: 600, marginBottom: 3 }, children: e.label }),
              /* @__PURE__ */ w.jsx("div", { className: "tm-reminder-sub", children: "Timer paused until you dismiss this" })
            ] }),
            /* @__PURE__ */ w.jsx("button", { type: "button", className: "tm-primary", style: { width: "100%" }, onClick: t, children: "Done" })
          ]
        }
      )
    }
  );
}
function _S({
  reminders: e,
  onAdd: t,
  onRemove: n
}) {
  const [r, i] = k.useState(""), [o, s] = k.useState("30"), [a, l] = k.useState(!1), u = () => {
    const f = Number.parseInt(o, 10);
    !r.trim() || !Number.isFinite(f) || f <= 0 || (t(r, f), i(""), s("30"), l(!1));
  }, c = (f) => f.stopPropagation();
  return /* @__PURE__ */ w.jsxs(
    ve.div,
    {
      className: "tm-reminders",
      initial: { opacity: 0, y: 12 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.12 },
      children: [
        /* @__PURE__ */ w.jsxs("div", { className: "tm-reminders-head", children: [
          /* @__PURE__ */ w.jsxs("span", { className: "tm-label", style: { display: "inline-flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ w.jsx(wS, { size: 12 }),
            "Reminders"
          ] }),
          a ? null : /* @__PURE__ */ w.jsxs(
            "button",
            {
              type: "button",
              className: "tm-ghost",
              style: { display: "inline-flex", alignItems: "center", gap: 4 },
              onClick: () => l(!0),
              children: [
                /* @__PURE__ */ w.jsx(TS, { size: 12 }),
                "Add"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ w.jsxs(ii, { mode: "popLayout", children: [
          a ? /* @__PURE__ */ w.jsxs(
            ve.div,
            {
              className: "tm-add",
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              children: [
                /* @__PURE__ */ w.jsx(
                  "input",
                  {
                    autoFocus: !0,
                    type: "text",
                    placeholder: "e.g. Stand up and stretch",
                    value: r,
                    onChange: (f) => i(f.target.value),
                    onKeyDown: (f) => {
                      c(f), f.key === "Enter" && u(), f.key === "Escape" && l(!1);
                    }
                  }
                ),
                /* @__PURE__ */ w.jsxs("div", { className: "tm-row", children: [
                  /* @__PURE__ */ w.jsx("span", { className: "tm-reminder-sub", children: "Every" }),
                  /* @__PURE__ */ w.jsx(
                    "input",
                    {
                      type: "number",
                      min: 1,
                      style: { width: 62, textAlign: "center" },
                      value: o,
                      onChange: (f) => s(f.target.value),
                      onKeyDown: (f) => {
                        c(f), f.key === "Enter" && u();
                      }
                    }
                  ),
                  /* @__PURE__ */ w.jsx("span", { className: "tm-reminder-sub", children: "min" })
                ] }),
                /* @__PURE__ */ w.jsxs("div", { className: "tm-row", style: { marginTop: 2 }, children: [
                  /* @__PURE__ */ w.jsx(
                    "button",
                    {
                      type: "button",
                      className: "tm-primary",
                      style: { flex: 1, padding: "8px 0", fontSize: 13 },
                      onClick: u,
                      children: "Add"
                    }
                  ),
                  /* @__PURE__ */ w.jsx(
                    "button",
                    {
                      type: "button",
                      className: "tm-circle",
                      style: { width: "auto", height: "auto", padding: "8px 16px", borderRadius: 999 },
                      onClick: () => l(!1),
                      children: /* @__PURE__ */ w.jsx("span", { style: { fontSize: 13 }, children: "Cancel" })
                    }
                  )
                ] })
              ]
            },
            "add"
          ) : null,
          e.map((f) => /* @__PURE__ */ w.jsxs(
            ve.div,
            {
              className: "tm-reminder",
              initial: { opacity: 0, x: -6 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: 6 },
              transition: { duration: 0.2 },
              children: [
                /* @__PURE__ */ w.jsxs("div", { style: { display: "flex", flexDirection: "column" }, children: [
                  /* @__PURE__ */ w.jsx("span", { className: "tm-reminder-label", children: f.label }),
                  /* @__PURE__ */ w.jsxs("span", { className: "tm-reminder-sub", children: [
                    "Every ",
                    f.intervalMinutes,
                    " min"
                  ] })
                ] }),
                /* @__PURE__ */ w.jsx(
                  "button",
                  {
                    type: "button",
                    className: "tm-ghost",
                    onClick: () => n(f.id),
                    title: "Remove reminder",
                    children: /* @__PURE__ */ w.jsx(PS, { size: 13 })
                  }
                )
              ]
            },
            f.id
          ))
        ] }),
        e.length === 0 && !a ? /* @__PURE__ */ w.jsx("p", { className: "tm-reminder-sub", style: { textAlign: "center", padding: "8px 0" }, children: "No reminders set" }) : null
      ]
    }
  );
}
function xr(e) {
  return e.toString().padStart(2, "0");
}
function IS({
  remainingSeconds: e,
  phase: t
}) {
  const n = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), i = e % 60, o = n > 0 ? `${xr(n)}:${xr(r)}:${xr(i)}` : `${xr(r)}:${xr(i)}`;
  return /* @__PURE__ */ w.jsx(
    ve.span,
    {
      className: "tm-digits",
      "data-state": t,
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      children: o
    }
  );
}
function FS({
  api: e,
  state: t,
  send: n
}) {
  k.useEffect(() => {
    n({ type: "syncSettings" });
  }, [n]);
  const r = k.useRef(null), i = k.useRef(null), o = k.useRef(null);
  k.useEffect(() => {
    r.current ??= new AS(), i.current ??= new Wm();
    const c = t.phase === "reminding" && o.current !== "reminding", f = t.phase === "finished" && o.current != null && o.current !== "finished";
    c ? r.current.play() : f && i.current.timerComplete(), t.phase !== "reminding" && r.current.stop(), o.current = t.phase;
  }, [t.phase]), k.useEffect(() => () => r.current?.stop(), []);
  const [s, a] = k.useState(null);
  k.useEffect(() => {
    let c = !0;
    const f = () => {
      e.sessions.observe().then((g) => {
        c && a(
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
  const l = t.activeReminderId != null ? t.reminders.find((c) => c.id === t.activeReminderId) ?? null : null, u = t.phase === "idle";
  return /* @__PURE__ */ w.jsxs("div", { className: "tm-tab", children: [
    /* @__PURE__ */ w.jsx(RS, {}),
    s !== null ? /* @__PURE__ */ w.jsxs(
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
    /* @__PURE__ */ w.jsx(IS, { remainingSeconds: t.remainingSeconds, phase: t.phase }),
    /* @__PURE__ */ w.jsx(ii, { mode: "wait", children: u ? /* @__PURE__ */ w.jsxs(
      ve.div,
      {
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.2 },
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 24, width: "100%" },
        children: [
          /* @__PURE__ */ w.jsx(
            LS,
            {
              totalSeconds: t.totalSeconds,
              onSelect: (c) => n({ type: "setDuration", minutes: c }),
              onStart: () => {
                i.current?.timerStart(), n({ type: "start" });
              }
            }
          ),
          /* @__PURE__ */ w.jsx(
            _S,
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
    ) : /* @__PURE__ */ w.jsxs(
      ve.div,
      {
        initial: { opacity: 0, y: 6 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.25 },
        style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 16 },
        children: [
          /* @__PURE__ */ w.jsxs("div", { className: "tm-row", children: [
            t.phase === "running" ? /* @__PURE__ */ w.jsx(
              "button",
              {
                type: "button",
                className: "tm-circle",
                onClick: () => n({ type: "pause" }),
                title: "Pause",
                children: /* @__PURE__ */ w.jsx(SS, { size: 17 })
              }
            ) : null,
            t.phase === "paused" ? /* @__PURE__ */ w.jsx(
              "button",
              {
                type: "button",
                className: "tm-circle",
                onClick: () => n({ type: "resume" }),
                title: "Resume",
                children: /* @__PURE__ */ w.jsx(kS, { size: 17, style: { marginLeft: 2 } })
              }
            ) : null,
            /* @__PURE__ */ w.jsx("button", { type: "button", className: "tm-circle", onClick: () => n({ type: "reset" }), title: "Reset", children: /* @__PURE__ */ w.jsx(CS, { size: 17 }) })
          ] }),
          t.phase === "finished" ? /* @__PURE__ */ w.jsx(
            ve.span,
            {
              className: "tm-reminder-sub",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              children: "Session complete"
            }
          ) : null,
          t.reminders.length > 0 && t.phase !== "finished" ? /* @__PURE__ */ w.jsx("div", { className: "tm-presets", style: { marginTop: 2 }, children: t.reminders.map((c) => /* @__PURE__ */ w.jsxs("span", { className: "tm-chip", children: [
            c.label,
            " · ",
            c.intervalMinutes,
            "m"
          ] }, c.id)) }) : null
        ]
      },
      "running"
    ) }),
    /* @__PURE__ */ w.jsx("div", { className: "tm-footer", children: /* @__PURE__ */ w.jsxs(
      "button",
      {
        type: "button",
        className: "tm-toggle",
        "data-on": t.inheritTheme,
        onClick: () => n({ type: "setInheritTheme", value: !t.inheritTheme }),
        title: t.inheritTheme ? "Using Agent Code theme — click for black & white" : "Using black & white — click to inherit Agent Code theme",
        children: [
          /* @__PURE__ */ w.jsx("span", { className: "tm-toggle-dot" }),
          t.inheritTheme ? "Inheriting theme" : "Black & white"
        ]
      }
    ) }),
    /* @__PURE__ */ w.jsx(ii, { children: l ? /* @__PURE__ */ w.jsx(NS, { reminder: l, onDismiss: () => n({ type: "dismissReminder" }) }) : null })
  ] });
}
const OS = {
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
function zS({ context: e }) {
  const { api: t } = e, [n, r] = k.useState(() => e.runtime.state() ?? OS);
  k.useEffect(() => e.runtime.subscribe(r), [e]);
  const i = e.view.id.endsWith(".modal"), o = k.useCallback((c, f) => {
    e.runtime.request(c, f).catch((d) => {
      t.ui.showToast(d instanceof Error ? d.message : String(d));
    });
  }, [t.ui, e.runtime]), s = k.useCallback((c) => o("timerAction", c), [o]), a = k.useCallback((c) => o("tasksAction", c), [o]), l = k.useCallback((c) => o("selectTab", { tab: c }), [o]), u = k.useRef(null);
  return k.useEffect(() => {
    const c = u.current;
    if (!c) return;
    const f = () => Cv(c, n.timer.inheritTheme);
    return f(), n.timer.inheritTheme ? Pv(f) : void 0;
  }, [n.timer.inheritTheme]), /* @__PURE__ */ w.jsxs("div", { className: i ? "jwf jwf-modal" : "jwf", ref: u, children: [
    /* @__PURE__ */ w.jsx(
      Ev,
      {
        activeTab: n.activeTab,
        timerRunning: n.timer.phase === "running",
        onSelect: l
      }
    ),
    n.activeTab === "tasks" ? /* @__PURE__ */ w.jsx(mS, { state: n.tasks, send: a }) : /* @__PURE__ */ w.jsx(FS, { api: t, state: n.timer, send: s })
  ] });
}
function BS(e, t) {
  Sv();
  const n = fh(e);
  return n.render(/* @__PURE__ */ w.jsx(zS, { context: t })), () => {
    queueMicrotask(() => n.unmount());
  };
}
const bS = Gm({
  mount: BS
});
export {
  bS as default
};
