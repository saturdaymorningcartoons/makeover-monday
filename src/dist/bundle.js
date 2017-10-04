/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n(t.d3 = {});
}(undefined, function (t) {
  "use strict";
  function n(t) {
    return function () {
      var n = this.ownerDocument,
          e = this.namespaceURI;return e === rr && n.documentElement.namespaceURI === rr ? n.createElement(t) : n.createElementNS(e, t);
    };
  }function e(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }function r(t, n, e) {
    return t = i(t, n, e), function (n) {
      var e = n.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
    };
  }function i(t, n, e) {
    return function (r) {
      var i = hr;hr = r;try {
        t.call(this, this.__data__, n, e);
      } finally {
        hr = i;
      }
    };
  }function u(t) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var n = "",
          e = t.indexOf(".");return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n };
    });
  }function o(t) {
    return function () {
      var n = this.__on;if (n) {
        for (var e, r = 0, i = -1, u = n.length; r < u; ++r) {
          e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }++i ? n.length = i : delete this.__on;
      }
    };
  }function a(t, n, e) {
    var u = fr.hasOwnProperty(t.type) ? r : i;return function (r, i, o) {
      var a,
          c = this.__on,
          l = u(n, i, o);if (c) for (var s = 0, f = c.length; s < f; ++s) {
        if ((a = c[s]).type === t.type && a.name === t.name) return this.removeEventListener(a.type, a.listener, a.capture), this.addEventListener(a.type, a.listener = l, a.capture = e), void (a.value = n);
      }this.addEventListener(t.type, l, e), a = { type: t.type, name: t.name, value: n, listener: l, capture: e }, c ? c.push(a) : this.__on = [a];
    };
  }function c() {}function l() {
    return [];
  }function s(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }function f(t, n, e, r, i, u) {
    for (var o, a = 0, c = n.length, l = u.length; a < l; ++a) {
      (o = n[a]) ? (o.__data__ = u[a], r[a] = o) : e[a] = new s(t, u[a]);
    }for (; a < c; ++a) {
      (o = n[a]) && (i[a] = o);
    }
  }function h(t, n, e, r, i, u, o) {
    var a,
        c,
        l,
        f = {},
        h = n.length,
        p = u.length,
        d = new Array(h);for (a = 0; a < h; ++a) {
      (c = n[a]) && (d[a] = l = vr + o.call(c, c.__data__, a, n), l in f ? i[a] = c : f[l] = c);
    }for (a = 0; a < p; ++a) {
      (c = f[l = vr + o.call(t, u[a], a, u)]) ? (r[a] = c, c.__data__ = u[a], f[l] = null) : e[a] = new s(t, u[a]);
    }for (a = 0; a < h; ++a) {
      (c = n[a]) && f[d[a]] === c && (i[a] = c);
    }
  }function p(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }function d(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function g(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function m(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }function v(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }function y(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }function w(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
    };
  }function _(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function M(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }function b(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
    };
  }function x(t, n) {
    return t.style.getPropertyValue(n) || yr(t).getComputedStyle(t, null).getPropertyValue(n);
  }function T(t) {
    return function () {
      delete this[t];
    };
  }function A(t, n) {
    return function () {
      this[t] = n;
    };
  }function k(t, n) {
    return function () {
      var e = n.apply(this, arguments);null == e ? delete this[t] : this[t] = e;
    };
  }function C(t) {
    return t.trim().split(/^|\s+/);
  }function N(t) {
    return t.classList || new S(t);
  }function S(t) {
    this._node = t, this._names = C(t.getAttribute("class") || "");
  }function U(t, n) {
    for (var e = N(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }function D(t, n) {
    for (var e = N(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }function E(t) {
    return function () {
      U(this, t);
    };
  }function F(t) {
    return function () {
      D(this, t);
    };
  }function Y(t, n) {
    return function () {
      (n.apply(this, arguments) ? U : D)(this, t);
    };
  }function H() {
    this.textContent = "";
  }function L(t) {
    return function () {
      this.textContent = t;
    };
  }function O(t) {
    return function () {
      var n = t.apply(this, arguments);this.textContent = null == n ? "" : n;
    };
  }function P() {
    this.innerHTML = "";
  }function j(t) {
    return function () {
      this.innerHTML = t;
    };
  }function q(t) {
    return function () {
      var n = t.apply(this, arguments);this.innerHTML = null == n ? "" : n;
    };
  }function $() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function X() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function z() {
    return null;
  }function I() {
    var t = this.parentNode;t && t.removeChild(this);
  }function R(t, n, e) {
    var r = yr(t),
        i = r.CustomEvent;"function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }function V(t, n) {
    return function () {
      return R(this, t, n);
    };
  }function Z(t, n) {
    return function () {
      return R(this, t, n.apply(this, arguments));
    };
  }function B(t, n) {
    this._groups = t, this._parents = n;
  }function W() {
    return new B([[document.documentElement]], wr);
  }function J() {}function G(t, n) {
    var e = new J();if (t instanceof J) t.each(function (t, n) {
      e.set(n, t);
    });else if (Array.isArray(t)) {
      var r,
          i = -1,
          u = t.length;if (null == n) for (; ++i < u;) {
        e.set(i, t[i]);
      } else for (; ++i < u;) {
        e.set(n(r = t[i], i, t), r);
      }
    } else if (t) for (var o in t) {
      e.set(o, t[o]);
    }return e;
  }function K() {
    return {};
  }function Q(t, n, e) {
    t[n] = e;
  }function tt() {
    return G();
  }function nt(t, n, e) {
    t.set(n, e);
  }function et() {}function rt() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new it(r);
  }function it(t) {
    this._ = t;
  }function ut(t, n) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          r = t.indexOf(".");if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
    });
  }function ot(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) {
      if ((e = t[r]).name === n) return e.value;
    }
  }function at(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = Mr, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }function ct(t) {
    return function (n, e) {
      t(null == n ? e : null);
    };
  }function lt(t) {
    var n = t.responseType;return n && "text" !== n ? t.response : t.responseText;
  }function st(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + "]";
    }).join(",") + "}");
  }function ft(t, n) {
    var e = st(t);return function (r, i) {
      return n(e(r), i, t);
    };
  }function ht(t) {
    var n = Object.create(null),
        e = [];return t.forEach(function (t) {
      for (var r in t) {
        r in n || e.push(n[r] = r);
      }
    }), e;
  }function pt(t, n) {
    return function (e) {
      return t(e.responseText, n);
    };
  }function dt() {
    return Yr || (Or(gt), Yr = Lr.now() + Hr);
  }function gt() {
    Yr = 0;
  }function mt() {
    this._call = this._time = this._next = null;
  }function vt(t, n, e) {
    var r = new mt();return r.restart(t, n, e), r;
  }function yt() {
    dt(), ++Sr;for (var t, n = br; n;) {
      (t = Yr - n._time) >= 0 && n._call.call(null, t), n = n._next;
    }--Sr;
  }function wt() {
    Yr = (Fr = Lr.now()) + Hr, Sr = Ur = 0;try {
      yt();
    } finally {
      Sr = 0, Mt(), Yr = 0;
    }
  }function _t() {
    var t = Lr.now(),
        n = t - Fr;n > Er && (Hr -= n, Fr = t);
  }function Mt() {
    for (var t, n, e = br, r = 1 / 0; e;) {
      e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : br = n);
    }xr = t, bt(r);
  }function bt(t) {
    if (!Sr) {
      Ur && (Ur = clearTimeout(Ur));var n = t - Yr;n > 24 ? (t < 1 / 0 && (Ur = setTimeout(wt, n)), Dr && (Dr = clearInterval(Dr))) : (Dr || (Fr = Yr, Dr = setInterval(_t, Er)), Sr = 1, Or(wt));
    }
  }function xt(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > $r) throw new Error("too late");return e;
  }function Tt(t, n) {
    var e = t.__transition;if (!e || !(e = e[n]) || e.state > zr) throw new Error("too late");return e;
  }function At(t, n) {
    var e = t.__transition;if (!e || !(e = e[n])) throw new Error("too late");return e;
  }function kt(t, n, e) {
    function r(c) {
      var l, s, f, h;if (e.state !== Xr) return u();for (l in a) {
        if ((h = a[l]).name === e.name) {
          if (h.state === Ir) return Pr(r);h.state === Rr ? (h.state = Zr, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete a[l]) : +l < n && (h.state = Zr, h.timer.stop(), delete a[l]);
        }
      }if (Pr(function () {
        e.state === Ir && (e.state = Rr, e.timer.restart(i, e.delay, e.time), i(c));
      }), e.state = zr, e.on.call("start", t, t.__data__, e.index, e.group), e.state === zr) {
        for (e.state = Ir, o = new Array(f = e.tween.length), l = 0, s = -1; l < f; ++l) {
          (h = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (o[++s] = h);
        }o.length = s + 1;
      }
    }function i(n) {
      for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(u), e.state = Vr, 1), i = -1, a = o.length; ++i < a;) {
        o[i].call(null, r);
      }e.state === Vr && (e.on.call("end", t, t.__data__, e.index, e.group), u());
    }function u() {
      e.state = Zr, e.timer.stop(), delete a[n];for (var r in a) {
        return;
      }delete t.__transition;
    }var o,
        a = t.__transition;a[n] = e, e.timer = vt(function (t) {
      e.state = Xr, e.timer.restart(r, e.delay, e.time), e.delay <= t && r(t - e.delay);
    }, 0, e.time);
  }function Ct(t, n) {
    var e = Object.create(t.prototype);for (var r in n) {
      e[r] = n[r];
    }return e;
  }function Nt() {}function St(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = ti.exec(t)) ? (n = parseInt(n[1], 16), new Yt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = ni.exec(t)) ? Ut(parseInt(n[1], 16)) : (n = ei.exec(t)) ? new Yt(n[1], n[2], n[3], 1) : (n = ri.exec(t)) ? new Yt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = ii.exec(t)) ? Dt(n[1], n[2], n[3], n[4]) : (n = ui.exec(t)) ? Dt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = oi.exec(t)) ? Ht(n[1], n[2] / 100, n[3] / 100, 1) : (n = ai.exec(t)) ? Ht(n[1], n[2] / 100, n[3] / 100, n[4]) : ci.hasOwnProperty(t) ? Ut(ci[t]) : "transparent" === t ? new Yt(NaN, NaN, NaN, 0) : null;
  }function Ut(t) {
    return new Yt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function Dt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new Yt(t, n, e, r);
  }function Et(t) {
    return t instanceof Nt || (t = St(t)), t ? (t = t.rgb(), new Yt(t.r, t.g, t.b, t.opacity)) : new Yt();
  }function Ft(t, n, e, r) {
    return 1 === arguments.length ? Et(t) : new Yt(t, n, e, null == r ? 1 : r);
  }function Yt(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function Ht(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Ot(t, n, e, r);
  }function Lt(t) {
    if (t instanceof Ot) return new Ot(t.h, t.s, t.l, t.opacity);if (t instanceof Nt || (t = St(t)), !t) return new Ot();if (t instanceof Ot) return t;var n = (t = t.rgb()).r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = Math.min(n, e, r),
        u = Math.max(n, e, r),
        o = NaN,
        a = u - i,
        c = (u + i) / 2;return a ? (o = n === u ? (e - r) / a + 6 * (e < r) : e === u ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? u + i : 2 - u - i, o *= 60) : a = c > 0 && c < 1 ? 0 : o, new Ot(o, a, c, t.opacity);
  }function Ot(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Pt(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }function jt(t) {
    if (t instanceof qt) return new qt(t.l, t.a, t.b, t.opacity);if (t instanceof Vt) {
      var n = t.h * li;return new qt(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof Yt || (t = Et(t));var e = It(t.r),
        r = It(t.g),
        i = It(t.b),
        u = $t((.4124564 * e + .3575761 * r + .1804375 * i) / fi),
        o = $t((.2126729 * e + .7151522 * r + .072175 * i) / hi);return new qt(116 * o - 16, 500 * (u - o), 200 * (o - $t((.0193339 * e + .119192 * r + .9503041 * i) / pi)), t.opacity);
  }function qt(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function $t(t) {
    return t > vi ? Math.pow(t, 1 / 3) : t / mi + di;
  }function Xt(t) {
    return t > gi ? t * t * t : mi * (t - di);
  }function zt(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function It(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function Rt(t) {
    if (t instanceof Vt) return new Vt(t.h, t.c, t.l, t.opacity);t instanceof qt || (t = jt(t));var n = Math.atan2(t.b, t.a) * si;return new Vt(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }function Vt(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }function Zt(t) {
    if (t instanceof Wt) return new Wt(t.h, t.s, t.l, t.opacity);t instanceof Yt || (t = Et(t));var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (Ai * r + xi * n - Ti * e) / (Ai + xi - Ti),
        u = r - i,
        o = (bi * (e - i) - _i * u) / Mi,
        a = Math.sqrt(o * o + u * u) / (bi * i * (1 - i)),
        c = a ? Math.atan2(o, u) * si - 120 : NaN;return new Wt(c < 0 ? c + 360 : c, a, i, t.opacity);
  }function Bt(t, n, e, r) {
    return 1 === arguments.length ? Zt(t) : new Wt(t, n, e, null == r ? 1 : r);
  }function Wt(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Jt(t, n) {
    return function (e) {
      return t + e * n;
    };
  }function Gt(t, n, e) {
    return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
      return Math.pow(t + r * n, e);
    };
  }function Kt(t) {
    return 1 == (t = +t) ? Qt : function (n, e) {
      return e - n ? Gt(n, e, t) : Ui(isNaN(n) ? e : n);
    };
  }function Qt(t, n) {
    var e = n - t;return e ? Jt(t, e) : Ui(isNaN(t) ? n : t);
  }function tn(t) {
    return function () {
      return t;
    };
  }function nn(t) {
    return function (n) {
      return t(n) + "";
    };
  }function en(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }function u(t, r, i, u, o, a) {
      if (t !== i || r !== u) {
        var c = o.push("translate(", null, n, null, e);a.push({ i: c - 4, x: Yi(t, i) }, { i: c - 2, x: Yi(r, u) });
      } else (i || u) && o.push("translate(" + i + n + u + e);
    }function o(t, n, e, u) {
      t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), u.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: Yi(t, n) })) : n && e.push(i(e) + "rotate(" + n + r);
    }function a(t, n, e, u) {
      t !== n ? u.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: Yi(t, n) }) : n && e.push(i(e) + "skewX(" + n + r);
    }function c(t, n, e, r, u, o) {
      if (t !== e || n !== r) {
        var a = u.push(i(u) + "scale(", null, ",", null, ")");o.push({ i: a - 4, x: Yi(t, e) }, { i: a - 2, x: Yi(n, r) });
      } else 1 === e && 1 === r || u.push(i(u) + "scale(" + e + "," + r + ")");
    }return function (n, e) {
      var r = [],
          i = [];return n = t(n), e = t(e), u(n.translateX, n.translateY, e.translateX, e.translateY, r, i), o(n.rotate, e.rotate, r, i), a(n.skewX, e.skewX, r, i), c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
        for (var n, e = -1, u = i.length; ++e < u;) {
          r[(n = i[e]).i] = n.x(t);
        }return r.join("");
      };
    };
  }function rn(t) {
    return function n(e) {
      function r(n, r) {
        var i = t((n = Bt(n)).h, (r = Bt(r)).h),
            u = Qt(n.s, r.s),
            o = Qt(n.l, r.l),
            a = Qt(n.opacity, r.opacity);return function (t) {
          return n.h = i(t), n.s = u(t), n.l = o(Math.pow(t, e)), n.opacity = a(t), n + "";
        };
      }return e = +e, r.gamma = n, r;
    }(1);
  }function un(t, n) {
    var e, r;return function () {
      var i = Tt(this, t),
          u = i.tween;if (u !== e) for (var o = 0, a = (r = e = u).length; o < a; ++o) {
        if (r[o].name === n) {
          (r = r.slice()).splice(o, 1);break;
        }
      }i.tween = r;
    };
  }function on(t, n, e) {
    var r, i;if ("function" != typeof e) throw new Error();return function () {
      var u = Tt(this, t),
          o = u.tween;if (o !== r) {
        i = (r = o).slice();for (var a = { name: n, value: e }, c = 0, l = i.length; c < l; ++c) {
          if (i[c].name === n) {
            i[c] = a;break;
          }
        }c === l && i.push(a);
      }u.tween = i;
    };
  }function an(t, n, e) {
    var r = t._id;return t.each(function () {
      var t = Tt(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return At(t, r).value[n];
    };
  }function cn(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function ln(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function sn(t, n, e) {
    var r, i;return function () {
      var u = this.getAttribute(t);return u === e ? null : u === r ? i : i = n(r = u, e);
    };
  }function fn(t, n, e) {
    var r, i;return function () {
      var u = this.getAttributeNS(t.space, t.local);return u === e ? null : u === r ? i : i = n(r = u, e);
    };
  }function hn(t, n, e) {
    var r, i, u;return function () {
      var o,
          a = e(this);{
        if (null != a) return (o = this.getAttribute(t)) === a ? null : o === r && a === i ? u : u = n(r = o, i = a);this.removeAttribute(t);
      }
    };
  }function pn(t, n, e) {
    var r, i, u;return function () {
      var o,
          a = e(this);{
        if (null != a) return (o = this.getAttributeNS(t.space, t.local)) === a ? null : o === r && a === i ? u : u = n(r = o, i = a);this.removeAttributeNS(t.space, t.local);
      }
    };
  }function dn(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttributeNS(t.space, t.local, r(n));
      };
    }return e._value = n, e;
  }function gn(t, n) {
    function e() {
      var e = this,
          r = n.apply(e, arguments);return r && function (n) {
        e.setAttribute(t, r(n));
      };
    }return e._value = n, e;
  }function mn(t, n) {
    return function () {
      xt(this, t).delay = +n.apply(this, arguments);
    };
  }function vn(t, n) {
    return n = +n, function () {
      xt(this, t).delay = n;
    };
  }function yn(t, n) {
    return function () {
      Tt(this, t).duration = +n.apply(this, arguments);
    };
  }function wn(t, n) {
    return n = +n, function () {
      Tt(this, t).duration = n;
    };
  }function _n(t, n) {
    if ("function" != typeof n) throw new Error();return function () {
      Tt(this, t).ease = n;
    };
  }function Mn(t) {
    return (t + "").trim().split(/^|\s+/).every(function (t) {
      var n = t.indexOf(".");return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
    });
  }function bn(t, n, e) {
    var r,
        i,
        u = Mn(n) ? xt : Tt;return function () {
      var o = u(this, t),
          a = o.on;a !== r && (i = (r = a).copy()).on(n, e), o.on = i;
    };
  }function xn(t) {
    return function () {
      var n = this.parentNode;for (var e in this.__transition) {
        if (+e !== t) return;
      }n && n.removeChild(this);
    };
  }function Tn(t, n) {
    var e, r, i;return function () {
      var u = x(this, t),
          o = (this.style.removeProperty(t), x(this, t));return u === o ? null : u === e && o === r ? i : i = n(e = u, r = o);
    };
  }function An(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function kn(t, n, e) {
    var r, i;return function () {
      var u = x(this, t);return u === e ? null : u === r ? i : i = n(r = u, e);
    };
  }function Cn(t, n, e) {
    var r, i, u;return function () {
      var o = x(this, t),
          a = e(this);return null == a && (this.style.removeProperty(t), a = x(this, t)), o === a ? null : o === r && a === i ? u : u = n(r = o, i = a);
    };
  }function Nn(t, n, e) {
    function r() {
      var r = this,
          i = n.apply(r, arguments);return i && function (n) {
        r.style.setProperty(t, i(n), e);
      };
    }return r._value = n, r;
  }function Sn(t) {
    return function () {
      this.textContent = t;
    };
  }function Un(t) {
    return function () {
      var n = t(this);this.textContent = null == n ? "" : n;
    };
  }function Dn(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }function En(t) {
    return W().transition(t);
  }function Fn() {
    return ++Wi;
  }function Yn(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]);) {
      if (!(t = t.parentNode)) return Ki.time = dt(), Ki;
    }return e;
  }function Hn(t) {
    return function (n, e) {
      return tu(t(n), e);
    };
  }function Ln(t, n, e) {
    var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        u = r / Math.pow(10, i);return i >= 0 ? (u >= ru ? 10 : u >= iu ? 5 : u >= uu ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (u >= ru ? 10 : u >= iu ? 5 : u >= uu ? 2 : 1);
  }function On(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        u = r / i;return u >= ru ? i *= 10 : u >= iu ? i *= 5 : u >= uu && (i *= 2), n < t ? -i : i;
  }function Pn(t) {
    function n(n) {
      var u = n + "",
          o = e.get(u);if (!o) {
        if (i !== su) return i;e.set(u, o = r.push(n));
      }return t[(o - 1) % t.length];
    }var e = G(),
        r = [],
        i = su;return t = null == t ? [] : lu.call(t), n.domain = function (t) {
      if (!arguments.length) return r.slice();r = [], e = G();for (var i, u, o = -1, a = t.length; ++o < a;) {
        e.has(u = (i = t[o]) + "") || e.set(u, r.push(i));
      }return n;
    }, n.range = function (e) {
      return arguments.length ? (t = lu.call(e), n) : t.slice();
    }, n.unknown = function (t) {
      return arguments.length ? (i = t, n) : i;
    }, n.copy = function () {
      return Pn().domain(r).range(t).unknown(i);
    }, n;
  }function jn() {
    function t() {
      var t = i().length,
          r = o[1] < o[0],
          f = o[r - 0],
          h = o[1 - r];n = (h - f) / Math.max(1, t - c + 2 * l), a && (n = Math.floor(n)), f += (h - f - n * (t - c)) * s, e = n * (1 - c), a && (f = Math.round(f), e = Math.round(e));var p = eu(t).map(function (t) {
        return f + n * t;
      });return u(r ? p.reverse() : p);
    }var n,
        e,
        r = Pn().unknown(void 0),
        i = r.domain,
        u = r.range,
        o = [0, 1],
        a = !1,
        c = 0,
        l = 0,
        s = .5;return delete r.unknown, r.domain = function (n) {
      return arguments.length ? (i(n), t()) : i();
    }, r.range = function (n) {
      return arguments.length ? (o = [+n[0], +n[1]], t()) : o.slice();
    }, r.rangeRound = function (n) {
      return o = [+n[0], +n[1]], a = !0, t();
    }, r.bandwidth = function () {
      return e;
    }, r.step = function () {
      return n;
    }, r.round = function (n) {
      return arguments.length ? (a = !!n, t()) : a;
    }, r.padding = function (n) {
      return arguments.length ? (c = l = Math.max(0, Math.min(1, n)), t()) : c;
    }, r.paddingInner = function (n) {
      return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c;
    }, r.paddingOuter = function (n) {
      return arguments.length ? (l = Math.max(0, Math.min(1, n)), t()) : l;
    }, r.align = function (n) {
      return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s;
    }, r.copy = function () {
      return jn().domain(i()).range(o).round(a).paddingInner(c).paddingOuter(l).align(s);
    }, t();
  }function qn(t, n) {
    return (n -= t = +t) ? function (e) {
      return (e - t) / n;
    } : fu(n);
  }function $n(t) {
    return function (n, e) {
      var r = t(n = +n, e = +e);return function (t) {
        return t <= n ? 0 : t >= e ? 1 : r(t);
      };
    };
  }function Xn(t) {
    return function (n, e) {
      var r = t(n = +n, e = +e);return function (t) {
        return t <= 0 ? n : t >= 1 ? e : r(t);
      };
    };
  }function zn(t, n, e, r) {
    var i = t[0],
        u = t[1],
        o = n[0],
        a = n[1];return u < i ? (i = e(u, i), o = r(a, o)) : (i = e(i, u), o = r(o, a)), function (t) {
      return o(i(t));
    };
  }function In(t, n, e, r) {
    var i = Math.min(t.length, n.length) - 1,
        u = new Array(i),
        o = new Array(i),
        a = -1;for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < i;) {
      u[a] = e(t[a], t[a + 1]), o[a] = r(n[a], n[a + 1]);
    }return function (n) {
      var e = nu(t, n, 1, i) - 1;return o[e](u[e](n));
    };
  }function Rn(t, n) {
    return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
  }function Vn(t, n) {
    function e() {
      return i = Math.min(a.length, c.length) > 2 ? In : zn, u = o = null, r;
    }function r(n) {
      return (u || (u = i(a, c, s ? $n(t) : t, l)))(+n);
    }var i,
        u,
        o,
        a = pu,
        c = pu,
        l = ji,
        s = !1;return r.invert = function (t) {
      return (o || (o = i(c, a, qn, s ? Xn(n) : n)))(+t);
    }, r.domain = function (t) {
      return arguments.length ? (a = cu.call(t, hu), e()) : a.slice();
    }, r.range = function (t) {
      return arguments.length ? (c = lu.call(t), e()) : c.slice();
    }, r.rangeRound = function (t) {
      return c = lu.call(t), l = qi, e();
    }, r.clamp = function (t) {
      return arguments.length ? (s = !!t, e()) : s;
    }, r.interpolate = function (t) {
      return arguments.length ? (l = t, e()) : l;
    }, e();
  }function Zn(t) {
    return new Bn(t);
  }function Bn(t) {
    if (!(n = _u.exec(t))) throw new Error("invalid format: " + t);var n,
        e = n[1] || " ",
        r = n[2] || ">",
        i = n[3] || "-",
        u = n[4] || "",
        o = !!n[5],
        a = n[6] && +n[6],
        c = !!n[7],
        l = n[8] && +n[8].slice(1),
        s = n[9] || "";"n" === s ? (c = !0, s = "g") : wu[s] || (s = ""), (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = u, this.zero = o, this.width = a, this.comma = c, this.precision = l, this.type = s;
  }function Wn(t) {
    var n = t.domain;return t.ticks = function (t) {
      var e = n();return ou(e[0], e[e.length - 1], null == t ? 10 : t);
    }, t.tickFormat = function (t, e) {
      return Su(n(), t, e);
    }, t.nice = function (e) {
      null == e && (e = 10);var r,
          i = n(),
          u = 0,
          o = i.length - 1,
          a = i[u],
          c = i[o];return c < a && (r = a, a = c, c = r, r = u, u = o, o = r), (r = Ln(a, c, e)) > 0 ? r = Ln(a = Math.floor(a / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = Ln(a = Math.ceil(a * r) / r, c = Math.floor(c * r) / r, e)), r > 0 ? (i[u] = Math.floor(a / r) * r, i[o] = Math.ceil(c / r) * r, n(i)) : r < 0 && (i[u] = Math.ceil(a * r) / r, i[o] = Math.floor(c * r) / r, n(i)), t;
    }, t;
  }function Jn() {
    var t = Vn(qn, Yi);return t.copy = function () {
      return Rn(t, Jn());
    }, Wn(t);
  }function Gn(t, n, e, r) {
    function i(n) {
      return t(n = new Date(+n)), n;
    }return i.floor = i, i.ceil = function (e) {
      return t(e = new Date(e - 1)), n(e, 1), t(e), e;
    }, i.round = function (t) {
      var n = i(t),
          e = i.ceil(t);return t - n < e - t ? n : e;
    }, i.offset = function (t, e) {
      return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
    }, i.range = function (e, r, u) {
      var o = [];if (e = i.ceil(e), u = null == u ? 1 : Math.floor(u), !(e < r && u > 0)) return o;do {
        o.push(new Date(+e));
      } while ((n(e, u), t(e), e < r));return o;
    }, i.filter = function (e) {
      return Gn(function (n) {
        if (n >= n) for (; t(n), !e(n);) {
          n.setTime(n - 1);
        }
      }, function (t, r) {
        if (t >= t) if (r < 0) for (; ++r <= 0;) {
          for (; n(t, -1), !e(t);) {}
        } else for (; --r >= 0;) {
          for (; n(t, 1), !e(t);) {}
        }
      });
    }, e && (i.count = function (n, r) {
      return Uu.setTime(+n), Du.setTime(+r), t(Uu), t(Du), Math.floor(e(Uu, Du));
    }, i.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
        return r(n) % t == 0;
      } : function (n) {
        return i.count(0, n) % t == 0;
      }) : i : null;
    }), i;
  }function Kn(t) {
    return Gn(function (n) {
      n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setDate(t.getDate() + 7 * n);
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Fu) / Yu;
    });
  }function Qn(t) {
    return Gn(function (n) {
      n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + 7 * n);
    }, function (t, n) {
      return (n - t) / Yu;
    });
  }function te(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);return n.setFullYear(t.y), n;
    }return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }function ne(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));return n.setUTCFullYear(t.y), n;
    }return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }function ee(t) {
    return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }function re(t) {
    function n(t, n) {
      return function (e) {
        var r,
            i,
            u,
            o = [],
            a = -1,
            c = 0,
            l = t.length;for (e instanceof Date || (e = new Date(+e)); ++a < l;) {
          37 === t.charCodeAt(a) && (o.push(t.slice(c, a)), null != (i = Bu[r = t.charAt(++a)]) ? r = t.charAt(++a) : i = "e" === r ? " " : "0", (u = n[r]) && (r = u(e, i)), o.push(r), c = a + 1);
        }return o.push(t.slice(c, a)), o.join("");
      };
    }function e(t, n) {
      return function (e) {
        var i = ee(1900);if (r(i, t, e += "", 0) != e.length) return null;if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
          "w" in i || (i.w = "W" in i ? 1 : 0);var u = "Z" in i ? ne(ee(i.y)).getUTCDay() : n(ee(i.y)).getDay();i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (u + 5) % 7 : i.w + 7 * i.U - (u + 6) % 7;
        }return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, ne(i)) : n(i);
      };
    }function r(t, n, e, r) {
      for (var i, u, o = 0, a = n.length, c = e.length; o < a;) {
        if (r >= c) return -1;if (37 === (i = n.charCodeAt(o++))) {
          if (i = n.charAt(o++), !(u = T[i in Bu ? n.charAt(o++) : i]) || (r = u(t, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }return r;
    }var i = t.dateTime,
        u = t.date,
        o = t.time,
        a = t.periods,
        c = t.days,
        l = t.shortDays,
        s = t.months,
        f = t.shortMonths,
        h = oe(a),
        _p = ae(a),
        d = oe(c),
        g = ae(c),
        m = oe(l),
        v = ae(l),
        y = oe(s),
        w = ae(s),
        _ = oe(f),
        M = ae(f),
        b = { a: function a(t) {
        return l[t.getDay()];
      }, A: function A(t) {
        return c[t.getDay()];
      }, b: function b(t) {
        return f[t.getMonth()];
      }, B: function B(t) {
        return s[t.getMonth()];
      }, c: null, d: be, e: be, H: xe, I: Te, j: Ae, L: ke, m: Ce, M: Ne, p: function p(t) {
        return a[+(t.getHours() >= 12)];
      }, S: Se, U: Ue, w: De, W: Ee, x: null, X: null, y: Fe, Y: Ye, Z: He, "%": Je },
        x = { a: function a(t) {
        return l[t.getUTCDay()];
      }, A: function A(t) {
        return c[t.getUTCDay()];
      }, b: function b(t) {
        return f[t.getUTCMonth()];
      }, B: function B(t) {
        return s[t.getUTCMonth()];
      }, c: null, d: Le, e: Le, H: Oe, I: Pe, j: je, L: qe, m: $e, M: Xe, p: function p(t) {
        return a[+(t.getUTCHours() >= 12)];
      }, S: ze, U: Ie, w: Re, W: Ve, x: null, X: null, y: Ze, Y: Be, Z: We, "%": Je },
        T = { a: function a(t, n, e) {
        var r = m.exec(n.slice(e));return r ? (t.w = v[r[0].toLowerCase()], e + r[0].length) : -1;
      }, A: function A(t, n, e) {
        var r = d.exec(n.slice(e));return r ? (t.w = g[r[0].toLowerCase()], e + r[0].length) : -1;
      }, b: function b(t, n, e) {
        var r = _.exec(n.slice(e));return r ? (t.m = M[r[0].toLowerCase()], e + r[0].length) : -1;
      }, B: function B(t, n, e) {
        var r = y.exec(n.slice(e));return r ? (t.m = w[r[0].toLowerCase()], e + r[0].length) : -1;
      }, c: function c(t, n, e) {
        return r(t, i, n, e);
      }, d: ge, e: ge, H: ve, I: ve, j: me, L: _e, m: de, M: ye, p: function p(t, n, e) {
        var r = h.exec(n.slice(e));return r ? (t.p = _p[r[0].toLowerCase()], e + r[0].length) : -1;
      }, S: we, U: le, w: ce, W: se, x: function x(t, n, e) {
        return r(t, u, n, e);
      }, X: function X(t, n, e) {
        return r(t, o, n, e);
      }, y: he, Y: fe, Z: pe, "%": Me };return b.x = n(u, b), b.X = n(o, b), b.c = n(i, b), x.x = n(u, x), x.X = n(o, x), x.c = n(i, x), { format: function format(t) {
        var e = n(t += "", b);return e.toString = function () {
          return t;
        }, e;
      }, parse: function parse(t) {
        var n = e(t += "", te);return n.toString = function () {
          return t;
        }, n;
      }, utcFormat: function utcFormat(t) {
        var e = n(t += "", x);return e.toString = function () {
          return t;
        }, e;
      }, utcParse: function utcParse(t) {
        var n = e(t, ne);return n.toString = function () {
          return t;
        }, n;
      } };
  }function ie(t, n, e) {
    var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        u = i.length;return r + (u < e ? new Array(e - u + 1).join(n) + i : i);
  }function ue(t) {
    return t.replace(Gu, "\\$&");
  }function oe(t) {
    return new RegExp("^(?:" + t.map(ue).join("|") + ")", "i");
  }function ae(t) {
    for (var n = {}, e = -1, r = t.length; ++e < r;) {
      n[t[e].toLowerCase()] = e;
    }return n;
  }function ce(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 1));return r ? (t.w = +r[0], e + r[0].length) : -1;
  }function le(t, n, e) {
    var r = Wu.exec(n.slice(e));return r ? (t.U = +r[0], e + r[0].length) : -1;
  }function se(t, n, e) {
    var r = Wu.exec(n.slice(e));return r ? (t.W = +r[0], e + r[0].length) : -1;
  }function fe(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 4));return r ? (t.y = +r[0], e + r[0].length) : -1;
  }function he(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 2));return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
  }function pe(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
  }function de(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 2));return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
  }function ge(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 2));return r ? (t.d = +r[0], e + r[0].length) : -1;
  }function me(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 3));return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
  }function ve(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 2));return r ? (t.H = +r[0], e + r[0].length) : -1;
  }function ye(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 2));return r ? (t.M = +r[0], e + r[0].length) : -1;
  }function we(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 2));return r ? (t.S = +r[0], e + r[0].length) : -1;
  }function _e(t, n, e) {
    var r = Wu.exec(n.slice(e, e + 3));return r ? (t.L = +r[0], e + r[0].length) : -1;
  }function Me(t, n, e) {
    var r = Ju.exec(n.slice(e, e + 1));return r ? e + r[0].length : -1;
  }function be(t, n) {
    return ie(t.getDate(), n, 2);
  }function xe(t, n) {
    return ie(t.getHours(), n, 2);
  }function Te(t, n) {
    return ie(t.getHours() % 12 || 12, n, 2);
  }function Ae(t, n) {
    return ie(1 + Hu.count(Pu(t), t), n, 3);
  }function ke(t, n) {
    return ie(t.getMilliseconds(), n, 3);
  }function Ce(t, n) {
    return ie(t.getMonth() + 1, n, 2);
  }function Ne(t, n) {
    return ie(t.getMinutes(), n, 2);
  }function Se(t, n) {
    return ie(t.getSeconds(), n, 2);
  }function Ue(t, n) {
    return ie(Lu.count(Pu(t), t), n, 2);
  }function De(t) {
    return t.getDay();
  }function Ee(t, n) {
    return ie(Ou.count(Pu(t), t), n, 2);
  }function Fe(t, n) {
    return ie(t.getFullYear() % 100, n, 2);
  }function Ye(t, n) {
    return ie(t.getFullYear() % 1e4, n, 4);
  }function He(t) {
    var n = t.getTimezoneOffset();return (n > 0 ? "-" : (n *= -1, "+")) + ie(n / 60 | 0, "0", 2) + ie(n % 60, "0", 2);
  }function Le(t, n) {
    return ie(t.getUTCDate(), n, 2);
  }function Oe(t, n) {
    return ie(t.getUTCHours(), n, 2);
  }function Pe(t, n) {
    return ie(t.getUTCHours() % 12 || 12, n, 2);
  }function je(t, n) {
    return ie(1 + ju.count(Xu(t), t), n, 3);
  }function qe(t, n) {
    return ie(t.getUTCMilliseconds(), n, 3);
  }function $e(t, n) {
    return ie(t.getUTCMonth() + 1, n, 2);
  }function Xe(t, n) {
    return ie(t.getUTCMinutes(), n, 2);
  }function ze(t, n) {
    return ie(t.getUTCSeconds(), n, 2);
  }function Ie(t, n) {
    return ie(qu.count(Xu(t), t), n, 2);
  }function Re(t) {
    return t.getUTCDay();
  }function Ve(t, n) {
    return ie($u.count(Xu(t), t), n, 2);
  }function Ze(t, n) {
    return ie(t.getUTCFullYear() % 100, n, 2);
  }function Be(t, n) {
    return ie(t.getUTCFullYear() % 1e4, n, 4);
  }function We() {
    return "+0000";
  }function Je() {
    return "%";
  }function Ge(t) {
    return "translate(" + (t + .5) + ",0)";
  }function Ke(t) {
    return "translate(0," + (t + .5) + ")";
  }function Qe(t) {
    return function (n) {
      return +t(n);
    };
  }function tr(t) {
    var n = Math.max(0, t.bandwidth() - 1) / 2;return t.round() && (n = Math.round(n)), function (e) {
      return +t(e) + n;
    };
  }function nr() {
    return !this.__axis;
  }function er(t, n) {
    function e(e) {
      var h = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i,
          p = null == u ? n.tickFormat ? n.tickFormat.apply(n, r) : to : u,
          d = Math.max(o, 0) + c,
          g = n.range(),
          m = +g[0] + .5,
          v = +g[g.length - 1] + .5,
          y = (n.bandwidth ? tr : Qe)(n.copy()),
          w = e.selection ? e.selection() : e,
          _ = w.selectAll(".domain").data([null]),
          M = w.selectAll(".tick").data(h, n).order(),
          b = M.exit(),
          x = M.enter().append("g").attr("class", "tick"),
          T = M.select("line"),
          A = M.select("text");_ = _.merge(_.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), M = M.merge(x), T = T.merge(x.append("line").attr("stroke", "#000").attr(s + "2", l * o)), A = A.merge(x.append("text").attr("fill", "#000").attr(s, l * d).attr("dy", t === no ? "0em" : t === ro ? "0.71em" : "0.32em")), e !== w && (_ = _.transition(e), M = M.transition(e), T = T.transition(e), A = A.transition(e), b = b.transition(e).attr("opacity", uo).attr("transform", function (t) {
        return isFinite(t = y(t)) ? f(t) : this.getAttribute("transform");
      }), x.attr("opacity", uo).attr("transform", function (t) {
        var n = this.parentNode.__axis;return f(n && isFinite(n = n(t)) ? n : y(t));
      })), b.remove(), _.attr("d", t === io || t == eo ? "M" + l * a + "," + m + "H0.5V" + v + "H" + l * a : "M" + m + "," + l * a + "V0.5H" + v + "V" + l * a), M.attr("opacity", 1).attr("transform", function (t) {
        return f(y(t));
      }), T.attr(s + "2", l * o), A.attr(s, l * d).text(p), w.filter(nr).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === eo ? "start" : t === io ? "end" : "middle"), w.each(function () {
        this.__axis = y;
      });
    }var r = [],
        i = null,
        u = null,
        o = 6,
        a = 6,
        c = 3,
        l = t === no || t === io ? -1 : 1,
        s = t === io || t === eo ? "x" : "y",
        f = t === no || t === ro ? Ge : Ke;return e.scale = function (t) {
      return arguments.length ? (n = t, e) : n;
    }, e.ticks = function () {
      return r = Qu.call(arguments), e;
    }, e.tickArguments = function (t) {
      return arguments.length ? (r = null == t ? [] : Qu.call(t), e) : r.slice();
    }, e.tickValues = function (t) {
      return arguments.length ? (i = null == t ? null : Qu.call(t), e) : i && i.slice();
    }, e.tickFormat = function (t) {
      return arguments.length ? (u = t, e) : u;
    }, e.tickSize = function (t) {
      return arguments.length ? (o = a = +t, e) : o;
    }, e.tickSizeInner = function (t) {
      return arguments.length ? (o = +t, e) : o;
    }, e.tickSizeOuter = function (t) {
      return arguments.length ? (a = +t, e) : a;
    }, e.tickPadding = function (t) {
      return arguments.length ? (c = +t, e) : c;
    }, e;
  }var rr = "http://www.w3.org/1999/xhtml",
      ir = { svg: "http://www.w3.org/2000/svg", xhtml: rr, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      ur = function ur(t) {
    var n = t += "",
        e = n.indexOf(":");return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), ir.hasOwnProperty(n) ? { space: ir[n], local: t } : t;
  },
      or = function or(t) {
    var r = ur(t);return (r.local ? e : n)(r);
  },
      ar = function ar(t) {
    return function () {
      return this.matches(t);
    };
  };if ("undefined" != typeof document) {
    var cr = document.documentElement;if (!cr.matches) {
      var lr = cr.webkitMatchesSelector || cr.msMatchesSelector || cr.mozMatchesSelector || cr.oMatchesSelector;ar = function ar(t) {
        return function () {
          return lr.call(this, t);
        };
      };
    }
  }var sr = ar,
      fr = {},
      hr = null;"undefined" != typeof document && ("onmouseenter" in document.documentElement || (fr = { mouseenter: "mouseover", mouseleave: "mouseout" }));var pr = function pr(t) {
    return null == t ? c : function () {
      return this.querySelector(t);
    };
  },
      dr = function dr(t) {
    return null == t ? l : function () {
      return this.querySelectorAll(t);
    };
  },
      gr = function gr(t) {
    return new Array(t.length);
  };s.prototype = { constructor: s, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var mr = function mr(t) {
    return function () {
      return t;
    };
  },
      vr = "$",
      yr = function yr(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  };S.prototype = { add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      var n = this._names.indexOf(t);n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    } };var wr = [null];B.prototype = W.prototype = { constructor: B, select: function select(t) {
      "function" != typeof t && (t = pr(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var u, o, a = n[i], c = a.length, l = r[i] = new Array(c), s = 0; s < c; ++s) {
          (u = a[s]) && (o = t.call(u, u.__data__, s, a)) && ("__data__" in u && (o.__data__ = u.__data__), l[s] = o);
        }
      }return new B(r, this._parents);
    }, selectAll: function selectAll(t) {
      "function" != typeof t && (t = dr(t));for (var n = this._groups, e = n.length, r = [], i = [], u = 0; u < e; ++u) {
        for (var o, a = n[u], c = a.length, l = 0; l < c; ++l) {
          (o = a[l]) && (r.push(t.call(o, o.__data__, l, a)), i.push(o));
        }
      }return new B(r, i);
    }, filter: function filter(t) {
      "function" != typeof t && (t = sr(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var u, o = n[i], a = o.length, c = r[i] = [], l = 0; l < a; ++l) {
          (u = o[l]) && t.call(u, u.__data__, l, o) && c.push(u);
        }
      }return new B(r, this._parents);
    }, data: function data(t, n) {
      if (!t) return g = new Array(this.size()), l = -1, this.each(function (t) {
        g[++l] = t;
      }), g;var e = n ? h : f,
          r = this._parents,
          i = this._groups;"function" != typeof t && (t = mr(t));for (var u = i.length, o = new Array(u), a = new Array(u), c = new Array(u), l = 0; l < u; ++l) {
        var s = r[l],
            p = i[l],
            d = p.length,
            g = t.call(s, s && s.__data__, l, r),
            m = g.length,
            v = a[l] = new Array(m),
            y = o[l] = new Array(m);e(s, p, v, y, c[l] = new Array(d), g, n);for (var w, _, M = 0, b = 0; M < m; ++M) {
          if (w = v[M]) {
            for (M >= b && (b = M + 1); !(_ = y[b]) && ++b < m;) {}w._next = _ || null;
          }
        }
      }return o = new B(o, r), o._enter = a, o._exit = c, o;
    }, enter: function enter() {
      return new B(this._enter || this._groups.map(gr), this._parents);
    }, exit: function exit() {
      return new B(this._exit || this._groups.map(gr), this._parents);
    }, merge: function merge(t) {
      for (var n = this._groups, e = t._groups, r = n.length, i = e.length, u = Math.min(r, i), o = new Array(r), a = 0; a < u; ++a) {
        for (var c, l = n[a], s = e[a], f = l.length, h = o[a] = new Array(f), p = 0; p < f; ++p) {
          (c = l[p] || s[p]) && (h[p] = c);
        }
      }for (; a < r; ++a) {
        o[a] = n[a];
      }return new B(o, this._parents);
    }, order: function order() {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
        for (var r, i = t[n], u = i.length - 1, o = i[u]; --u >= 0;) {
          (r = i[u]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
        }
      }return this;
    }, sort: function sort(t) {
      t || (t = p);for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var u, o = n[i], a = o.length, c = r[i] = new Array(a), l = 0; l < a; ++l) {
          (u = o[l]) && (c[l] = u);
        }c.sort(function (n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e;
        });
      }return new B(r, this._parents).order();
    }, call: function call() {
      var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
    }, nodes: function nodes() {
      var t = new Array(this.size()),
          n = -1;return this.each(function () {
        t[++n] = this;
      }), t;
    }, node: function node() {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
        for (var r = t[n], i = 0, u = r.length; i < u; ++i) {
          var o = r[i];if (o) return o;
        }
      }return null;
    }, size: function size() {
      var t = 0;return this.each(function () {
        ++t;
      }), t;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
        for (var i, u = n[e], o = 0, a = u.length; o < a; ++o) {
          (i = u[o]) && t.call(i, i.__data__, o, u);
        }
      }return this;
    }, attr: function attr(t, n) {
      var e = ur(t);if (arguments.length < 2) {
        var r = this.node();return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }return this.each((null == n ? e.local ? g : d : "function" == typeof n ? e.local ? w : y : e.local ? v : m)(e, n));
    }, style: function style(t, n, e) {
      return arguments.length > 1 ? this.each((null == n ? _ : "function" == typeof n ? b : M)(t, n, null == e ? "" : e)) : x(this.node(), t);
    }, property: function property(t, n) {
      return arguments.length > 1 ? this.each((null == n ? T : "function" == typeof n ? k : A)(t, n)) : this.node()[t];
    }, classed: function classed(t, n) {
      var e = C(t + "");if (arguments.length < 2) {
        for (var r = N(this.node()), i = -1, u = e.length; ++i < u;) {
          if (!r.contains(e[i])) return !1;
        }return !0;
      }return this.each(("function" == typeof n ? Y : n ? E : F)(e, n));
    }, text: function text(t) {
      return arguments.length ? this.each(null == t ? H : ("function" == typeof t ? O : L)(t)) : this.node().textContent;
    }, html: function html(t) {
      return arguments.length ? this.each(null == t ? P : ("function" == typeof t ? q : j)(t)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each($);
    }, lower: function lower() {
      return this.each(X);
    }, append: function append(t) {
      var n = "function" == typeof t ? t : or(t);return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    }, insert: function insert(t, n) {
      var e = "function" == typeof t ? t : or(t),
          r = null == n ? z : "function" == typeof n ? n : pr(n);return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(I);
    }, datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    }, on: function on(t, n, e) {
      var r,
          i,
          c = u(t + ""),
          l = c.length;{
        if (!(arguments.length < 2)) {
          for (s = n ? a : o, null == e && (e = !1), r = 0; r < l; ++r) {
            this.each(s(c[r], n, e));
          }return this;
        }var s = this.node().__on;if (s) for (var f, h = 0, p = s.length; h < p; ++h) {
          for (r = 0, f = s[h]; r < l; ++r) {
            if ((i = c[r]).type === f.type && i.name === f.name) return f.value;
          }
        }
      }
    }, dispatch: function dispatch(t, n) {
      return this.each(("function" == typeof n ? Z : V)(t, n));
    } };J.prototype = G.prototype = { constructor: J, has: function has(t) {
      return "$" + t in this;
    }, get: function get(t) {
      return this["$" + t];
    }, set: function set(t, n) {
      return this["$" + t] = n, this;
    }, remove: function remove(t) {
      var n = "$" + t;return n in this && delete this[n];
    }, clear: function clear() {
      for (var t in this) {
        "$" === t[0] && delete this[t];
      }
    }, keys: function keys() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(n.slice(1));
      }return t;
    }, values: function values() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push(this[n]);
      }return t;
    }, entries: function entries() {
      var t = [];for (var n in this) {
        "$" === n[0] && t.push({ key: n.slice(1), value: this[n] });
      }return t;
    }, size: function size() {
      var t = 0;for (var n in this) {
        "$" === n[0] && ++t;
      }return t;
    }, empty: function empty() {
      for (var t in this) {
        if ("$" === t[0]) return !1;
      }return !0;
    }, each: function each(t) {
      for (var n in this) {
        "$" === n[0] && t(this[n], n.slice(1), this);
      }
    } };var _r = G.prototype;et.prototype = function (t, n) {
    var e = new et();if (t instanceof et) t.each(function (t) {
      e.add(t);
    });else if (t) {
      var r = -1,
          i = t.length;if (null == n) for (; ++r < i;) {
        e.add(t[r]);
      } else for (; ++r < i;) {
        e.add(n(t[r], r, t));
      }
    }return e;
  }.prototype = { constructor: et, has: _r.has, add: function add(t) {
      return t += "", this["$" + t] = t, this;
    }, remove: _r.remove, clear: _r.clear, values: _r.keys, size: _r.size, empty: _r.empty, each: _r.each };var Mr = { value: function value() {} };it.prototype = rt.prototype = { constructor: it, on: function on(t, n) {
      var e,
          r = this._,
          i = ut(t + "", r),
          u = -1,
          o = i.length;{
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++u < o;) {
            if (e = (t = i[u]).type) r[e] = at(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = at(r[e], t.name, null);
            }
          }return this;
        }for (; ++u < o;) {
          if ((e = (t = i[u]).type) && (e = ot(r[e], t.name))) return e;
        }
      }
    }, copy: function copy() {
      var t = {},
          n = this._;for (var e in n) {
        t[e] = n[e].slice();
      }return new it(t);
    }, call: function call(t, n) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), u = 0; u < e; ++u) {
        i[u] = arguments[u + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (u = 0, e = (r = this._[t]).length; u < e; ++u) {
        r[u].value.apply(n, i);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, u = r.length; i < u; ++i) {
        r[i].value.apply(n, e);
      }
    } };var br,
      xr,
      Tr = function Tr(t, n) {
    function e(t) {
      var n,
          e = l.status;if (!e && lt(l) || e >= 200 && e < 300 || 304 === e) {
        if (u) try {
          n = u.call(r, l);
        } catch (t) {
          return void a.call("error", r, t);
        } else n = l;a.call("load", r, n);
      } else a.call("error", r, t);
    }var r,
        i,
        u,
        o,
        a = rt("beforesend", "progress", "load", "error"),
        c = G(),
        l = new XMLHttpRequest(),
        s = null,
        f = null,
        h = 0;if ("undefined" == typeof XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(t) || (l = new XDomainRequest()), "onload" in l ? l.onload = l.onerror = l.ontimeout = e : l.onreadystatechange = function (t) {
      l.readyState > 3 && e(t);
    }, l.onprogress = function (t) {
      a.call("progress", r, t);
    }, r = { header: function header(t, n) {
        return t = (t + "").toLowerCase(), arguments.length < 2 ? c.get(t) : (null == n ? c.remove(t) : c.set(t, n + ""), r);
      }, mimeType: function mimeType(t) {
        return arguments.length ? (i = null == t ? null : t + "", r) : i;
      }, responseType: function responseType(t) {
        return arguments.length ? (o = t, r) : o;
      }, timeout: function timeout(t) {
        return arguments.length ? (h = +t, r) : h;
      }, user: function user(t) {
        return arguments.length < 1 ? s : (s = null == t ? null : t + "", r);
      }, password: function password(t) {
        return arguments.length < 1 ? f : (f = null == t ? null : t + "", r);
      }, response: function response(t) {
        return u = t, r;
      }, get: function get(t, n) {
        return r.send("GET", t, n);
      }, post: function post(t, n) {
        return r.send("POST", t, n);
      }, send: function send(n, e, u) {
        return l.open(n, t, !0, s, f), null == i || c.has("accept") || c.set("accept", i + ",*/*"), l.setRequestHeader && c.each(function (t, n) {
          l.setRequestHeader(n, t);
        }), null != i && l.overrideMimeType && l.overrideMimeType(i), null != o && (l.responseType = o), h > 0 && (l.timeout = h), null == u && "function" == typeof e && (u = e, e = null), null != u && 1 === u.length && (u = ct(u)), null != u && r.on("error", u).on("load", function (t) {
          u(null, t);
        }), a.call("beforesend", r, l), l.send(null == e ? null : e), r;
      }, abort: function abort() {
        return l.abort(), r;
      }, on: function on() {
        var t = a.on.apply(a, arguments);return t === a ? r : t;
      } }, null != n) {
      if ("function" != typeof n) throw new Error("invalid callback: " + n);return r.get(n);
    }return r;
  },
      Ar = function (t, n) {
    return function (e, r) {
      var i = Tr(e).mimeType(t).response(n);if (null != r) {
        if ("function" != typeof r) throw new Error("invalid callback: " + r);return i.get(r);
      }return i;
    };
  }("text/plain", function (t) {
    return t.responseText;
  }),
      kr = function kr(t) {
    function n(t, n) {
      function e() {
        if (s >= l) return a;if (i) return i = !1, o;var n,
            e = s;if (34 === t.charCodeAt(e)) {
          for (var r = e; r++ < l;) {
            if (34 === t.charCodeAt(r)) {
              if (34 !== t.charCodeAt(r + 1)) break;++r;
            }
          }return s = r + 2, 13 === (n = t.charCodeAt(r + 1)) ? (i = !0, 10 === t.charCodeAt(r + 2) && ++s) : 10 === n && (i = !0), t.slice(e + 1, r).replace(/""/g, '"');
        }for (; s < l;) {
          var c = 1;if (10 === (n = t.charCodeAt(s++))) i = !0;else if (13 === n) i = !0, 10 === t.charCodeAt(s) && (++s, ++c);else if (n !== u) continue;return t.slice(e, s - c);
        }return t.slice(e);
      }for (var r, i, o = {}, a = {}, c = [], l = t.length, s = 0, f = 0; (r = e()) !== a;) {
        for (var h = []; r !== o && r !== a;) {
          h.push(r), r = e();
        }n && null == (h = n(h, f++)) || c.push(h);
      }return c;
    }function e(n) {
      return n.map(r).join(t);
    }function r(t) {
      return null == t ? "" : i.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t;
    }var i = new RegExp('["' + t + "\n\r]"),
        u = t.charCodeAt(0);return { parse: function parse(t, e) {
        var r,
            i,
            u = n(t, function (t, n) {
          if (r) return r(t, n - 1);i = t, r = e ? ft(t, e) : st(t);
        });return u.columns = i, u;
      }, parseRows: n, format: function format(n, e) {
        return null == e && (e = ht(n)), [e.map(r).join(t)].concat(n.map(function (n) {
          return e.map(function (t) {
            return r(n[t]);
          }).join(t);
        })).join("\n");
      }, formatRows: function formatRows(t) {
        return t.map(e).join("\n");
      } };
  },
      Cr = kr(",").parse,
      Nr = (kr("\t"), function (t, n) {
    return function (e, r, i) {
      arguments.length < 3 && (i = r, r = null);var u = Tr(e).mimeType(t);return u.row = function (t) {
        return arguments.length ? u.response(pt(n, r = t)) : r;
      }, u.row(r), i ? u.get(i) : u;
    };
  }("text/csv", Cr)),
      Sr = 0,
      Ur = 0,
      Dr = 0,
      Er = 1e3,
      Fr = 0,
      Yr = 0,
      Hr = 0,
      Lr = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      Or = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
    setTimeout(t, 17);
  };mt.prototype = vt.prototype = { constructor: mt, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? dt() : +e) + (null == n ? 0 : +n), this._next || xr === this || (xr ? xr._next = this : br = this, xr = this), this._call = t, this._time = e, bt();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, bt());
    } };var Pr = function Pr(t, n, e) {
    var r = new mt();return n = null == n ? 0 : +n, r.restart(function (e) {
      r.stop(), t(e + n);
    }, n, e), r;
  },
      jr = rt("start", "end", "interrupt"),
      qr = [],
      $r = 0,
      Xr = 1,
      zr = 2,
      Ir = 3,
      Rr = 4,
      Vr = 5,
      Zr = 6,
      Br = function Br(t, n, e, r, i, u) {
    var o = t.__transition;if (o) {
      if (e in o) return;
    } else t.__transition = {};kt(t, e, { name: n, index: r, group: i, on: jr, tween: qr, time: u.time, delay: u.delay, duration: u.duration, ease: u.ease, timer: null, state: $r });
  },
      Wr = function Wr(t, n) {
    var e,
        r,
        i,
        u = t.__transition,
        o = !0;if (u) {
      n = null == n ? null : n + "";for (i in u) {
        (e = u[i]).name === n ? (r = e.state > zr && e.state < Vr, e.state = Zr, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete u[i]) : o = !1;
      }o && delete t.__transition;
    }
  },
      Jr = function Jr(t, n, e) {
    t.prototype = n.prototype = e, e.constructor = t;
  },
      Gr = "\\s*([+-]?\\d+)\\s*",
      Kr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Qr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      ti = /^#([0-9a-f]{3})$/,
      ni = /^#([0-9a-f]{6})$/,
      ei = new RegExp("^rgb\\(" + [Gr, Gr, Gr] + "\\)$"),
      ri = new RegExp("^rgb\\(" + [Qr, Qr, Qr] + "\\)$"),
      ii = new RegExp("^rgba\\(" + [Gr, Gr, Gr, Kr] + "\\)$"),
      ui = new RegExp("^rgba\\(" + [Qr, Qr, Qr, Kr] + "\\)$"),
      oi = new RegExp("^hsl\\(" + [Kr, Qr, Qr] + "\\)$"),
      ai = new RegExp("^hsla\\(" + [Kr, Qr, Qr, Kr] + "\\)$"),
      ci = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };Jr(Nt, St, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), Jr(Yt, Ft, Ct(Nt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Yt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Yt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), Jr(Ot, function (t, n, e, r) {
    return 1 === arguments.length ? Lt(t) : new Ot(t, n, e, null == r ? 1 : r);
  }, Ct(Nt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ot(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Ot(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * n,
          i = 2 * e - r;return new Yt(Pt(t >= 240 ? t - 240 : t + 120, i, r), Pt(t, i, r), Pt(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var li = Math.PI / 180,
      si = 180 / Math.PI,
      fi = .95047,
      hi = 1,
      pi = 1.08883,
      di = 4 / 29,
      gi = 6 / 29,
      mi = 3 * gi * gi,
      vi = gi * gi * gi;Jr(qt, function (t, n, e, r) {
    return 1 === arguments.length ? jt(t) : new qt(t, n, e, null == r ? 1 : r);
  }, Ct(Nt, { brighter: function brighter(t) {
      return new qt(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new qt(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;return t = hi * Xt(t), n = fi * Xt(n), e = pi * Xt(e), new Yt(zt(3.2404542 * n - 1.5371385 * t - .4985314 * e), zt(-.969266 * n + 1.8760108 * t + .041556 * e), zt(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), Jr(Vt, function (t, n, e, r) {
    return 1 === arguments.length ? Rt(t) : new Vt(t, n, e, null == r ? 1 : r);
  }, Ct(Nt, { brighter: function brighter(t) {
      return new Vt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new Vt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return jt(this).rgb();
    } }));var yi = -.14861,
      wi = 1.78277,
      _i = -.29227,
      Mi = -.90649,
      bi = 1.97294,
      xi = bi * Mi,
      Ti = bi * wi,
      Ai = wi * _i - Mi * yi;Jr(Wt, Bt, Ct(Nt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Wt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Wt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * li,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);return new Yt(255 * (n + e * (yi * r + wi * i)), 255 * (n + e * (_i * r + Mi * i)), 255 * (n + e * (bi * r)), this.opacity);
    } }));var ki,
      Ci,
      Ni,
      Si,
      Ui = function Ui(t) {
    return function () {
      return t;
    };
  },
      Di = function t(n) {
    function e(t, n) {
      var e = r((t = Ft(t)).r, (n = Ft(n)).r),
          i = r(t.g, n.g),
          u = r(t.b, n.b),
          o = Qt(t.opacity, n.opacity);return function (n) {
        return t.r = e(n), t.g = i(n), t.b = u(n), t.opacity = o(n), t + "";
      };
    }var r = Kt(n);return e.gamma = t, e;
  }(1),
      Ei = function Ei(t, n) {
    var e,
        r = n ? n.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        u = new Array(r),
        o = new Array(r);for (e = 0; e < i; ++e) {
      u[e] = ji(t[e], n[e]);
    }for (; e < r; ++e) {
      o[e] = n[e];
    }return function (t) {
      for (e = 0; e < i; ++e) {
        o[e] = u[e](t);
      }return o;
    };
  },
      Fi = function Fi(t, n) {
    var e = new Date();return t = +t, n -= t, function (r) {
      return e.setTime(t + n * r), e;
    };
  },
      Yi = function Yi(t, n) {
    return t = +t, n -= t, function (e) {
      return t + n * e;
    };
  },
      Hi = function Hi(t, n) {
    var e,
        r = {},
        i = {};null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = {}), null !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || (n = {});for (e in n) {
      e in t ? r[e] = ji(t[e], n[e]) : i[e] = n[e];
    }return function (t) {
      for (e in r) {
        i[e] = r[e](t);
      }return i;
    };
  },
      Li = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Oi = new RegExp(Li.source, "g"),
      Pi = function Pi(t, n) {
    var e,
        r,
        i,
        u = Li.lastIndex = Oi.lastIndex = 0,
        o = -1,
        a = [],
        c = [];for (t += "", n += ""; (e = Li.exec(t)) && (r = Oi.exec(n));) {
      (i = r.index) > u && (i = n.slice(u, i), a[o] ? a[o] += i : a[++o] = i), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, c.push({ i: o, x: Yi(e, r) })), u = Oi.lastIndex;
    }return u < n.length && (i = n.slice(u), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? c[0] ? nn(c[0].x) : tn(n) : (n = c.length, function (t) {
      for (var e, r = 0; r < n; ++r) {
        a[(e = c[r]).i] = e.x(t);
      }return a.join("");
    });
  },
      ji = function ji(t, n) {
    var e,
        r = typeof n === "undefined" ? "undefined" : _typeof(n);return null == n || "boolean" === r ? Ui(n) : ("number" === r ? Yi : "string" === r ? (e = St(n)) ? (n = e, Di) : Pi : n instanceof St ? Di : n instanceof Date ? Fi : Array.isArray(n) ? Ei : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? Hi : Yi)(t, n);
  },
      qi = function qi(t, n) {
    return t = +t, n -= t, function (e) {
      return Math.round(t + n * e);
    };
  },
      $i = 180 / Math.PI,
      Xi = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 },
      zi = function zi(t, n, e, r, i, u) {
    var o, a, c;return (o = Math.sqrt(t * t + n * n)) && (t /= o, n /= o), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, o = -o), { translateX: i, translateY: u, rotate: Math.atan2(n, t) * $i, skewX: Math.atan(c) * $i, scaleX: o, scaleY: a };
  },
      Ii = en(function (t) {
    return "none" === t ? Xi : (ki || (ki = document.createElement("DIV"), Ci = document.documentElement, Ni = document.defaultView), ki.style.transform = t, t = Ni.getComputedStyle(Ci.appendChild(ki), null).getPropertyValue("transform"), Ci.removeChild(ki), t = t.slice(7, -1).split(","), zi(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }, "px, ", "px)", "deg)"),
      Ri = en(function (t) {
    return null == t ? Xi : (Si || (Si = document.createElementNS("http://www.w3.org/2000/svg", "g")), Si.setAttribute("transform", t), (t = Si.transform.baseVal.consolidate()) ? (t = t.matrix, zi(t.a, t.b, t.c, t.d, t.e, t.f)) : Xi);
  }, ", ", ")", ")");rn(function (t, n) {
    var e = n - t;return e ? Jt(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : Ui(isNaN(t) ? n : t);
  });var Vi = rn(Qt),
      Zi = function Zi(t, n) {
    var e;return ("number" == typeof n ? Yi : n instanceof St ? Di : (e = St(n)) ? (n = e, Di) : Pi)(t, n);
  },
      Bi = W.prototype.constructor,
      Wi = 0,
      Ji = W.prototype;Dn.prototype = En.prototype = { constructor: Dn, select: function select(t) {
      var n = this._name,
          e = this._id;"function" != typeof t && (t = pr(t));for (var r = this._groups, i = r.length, u = new Array(i), o = 0; o < i; ++o) {
        for (var a, c, l = r[o], s = l.length, f = u[o] = new Array(s), h = 0; h < s; ++h) {
          (a = l[h]) && (c = t.call(a, a.__data__, h, l)) && ("__data__" in a && (c.__data__ = a.__data__), f[h] = c, Br(f[h], n, e, h, f, At(a, e)));
        }
      }return new Dn(u, this._parents, n, e);
    }, selectAll: function selectAll(t) {
      var n = this._name,
          e = this._id;"function" != typeof t && (t = dr(t));for (var r = this._groups, i = r.length, u = [], o = [], a = 0; a < i; ++a) {
        for (var c, l = r[a], s = l.length, f = 0; f < s; ++f) {
          if (c = l[f]) {
            for (var h, p = t.call(c, c.__data__, f, l), d = At(c, e), g = 0, m = p.length; g < m; ++g) {
              (h = p[g]) && Br(h, n, e, g, p, d);
            }u.push(p), o.push(c);
          }
        }
      }return new Dn(u, o, n, e);
    }, filter: function filter(t) {
      "function" != typeof t && (t = sr(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var u, o = n[i], a = o.length, c = r[i] = [], l = 0; l < a; ++l) {
          (u = o[l]) && t.call(u, u.__data__, l, o) && c.push(u);
        }
      }return new Dn(r, this._parents, this._name, this._id);
    }, merge: function merge(t) {
      if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, i = e.length, u = Math.min(r, i), o = new Array(r), a = 0; a < u; ++a) {
        for (var c, l = n[a], s = e[a], f = l.length, h = o[a] = new Array(f), p = 0; p < f; ++p) {
          (c = l[p] || s[p]) && (h[p] = c);
        }
      }for (; a < r; ++a) {
        o[a] = n[a];
      }return new Dn(o, this._parents, this._name, this._id);
    }, selection: function selection() {
      return new Bi(this._groups, this._parents);
    }, transition: function transition() {
      for (var t = this._name, n = this._id, e = Fn(), r = this._groups, i = r.length, u = 0; u < i; ++u) {
        for (var o, a = r[u], c = a.length, l = 0; l < c; ++l) {
          if (o = a[l]) {
            var s = At(o, n);Br(o, t, e, l, a, { time: s.time + s.delay + s.duration, delay: 0, duration: s.duration, ease: s.ease });
          }
        }
      }return new Dn(r, this._parents, t, e);
    }, call: Ji.call, nodes: Ji.nodes, node: Ji.node, size: Ji.size, empty: Ji.empty, each: Ji.each, on: function on(t, n) {
      var e = this._id;return arguments.length < 2 ? At(this.node(), e).on.on(t) : this.each(bn(e, t, n));
    }, attr: function attr(t, n) {
      var e = ur(t),
          r = "transform" === e ? Ri : Zi;return this.attrTween(t, "function" == typeof n ? (e.local ? pn : hn)(e, r, an(this, "attr." + t, n)) : null == n ? (e.local ? ln : cn)(e) : (e.local ? fn : sn)(e, r, n + ""));
    }, attrTween: function attrTween(t, n) {
      var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();var r = ur(t);return this.tween(e, (r.local ? dn : gn)(r, n));
    }, style: function style(t, n, e) {
      var r = "transform" == (t += "") ? Ii : Zi;return null == n ? this.styleTween(t, Tn(t, r)).on("end.style." + t, An(t)) : this.styleTween(t, "function" == typeof n ? Cn(t, r, an(this, "style." + t, n)) : kn(t, r, n + ""), e);
    }, styleTween: function styleTween(t, n, e) {
      var r = "style." + (t += "");if (arguments.length < 2) return (r = this.tween(r)) && r._value;if (null == n) return this.tween(r, null);if ("function" != typeof n) throw new Error();return this.tween(r, Nn(t, n, null == e ? "" : e));
    }, text: function text(t) {
      return this.tween("text", "function" == typeof t ? Un(an(this, "text", t)) : Sn(null == t ? "" : t + ""));
    }, remove: function remove() {
      return this.on("end.remove", xn(this._id));
    }, tween: function tween(t, n) {
      var e = this._id;if (t += "", arguments.length < 2) {
        for (var r, i = At(this.node(), e).tween, u = 0, o = i.length; u < o; ++u) {
          if ((r = i[u]).name === t) return r.value;
        }return null;
      }return this.each((null == n ? un : on)(e, t, n));
    }, delay: function delay(t) {
      var n = this._id;return arguments.length ? this.each(("function" == typeof t ? mn : vn)(n, t)) : At(this.node(), n).delay;
    }, duration: function duration(t) {
      var n = this._id;return arguments.length ? this.each(("function" == typeof t ? yn : wn)(n, t)) : At(this.node(), n).duration;
    }, ease: function ease(t) {
      var n = this._id;return arguments.length ? this.each(_n(n, t)) : At(this.node(), n).ease;
    } };(function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }return n = +n, e.exponent = t, e;
  })(3), function t(n) {
    function e(t) {
      return 1 - Math.pow(1 - t, n);
    }return n = +n, e.exponent = t, e;
  }(3), function t(n) {
    function e(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
    }return n = +n, e.exponent = t, e;
  }(3), function t(n) {
    function e(t) {
      return t * t * ((n + 1) * t - n);
    }return n = +n, e.overshoot = t, e;
  }(1.70158), function t(n) {
    function e(t) {
      return --t * t * ((n + 1) * t + n) + 1;
    }return n = +n, e.overshoot = t, e;
  }(1.70158), function t(n) {
    function e(t) {
      return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
    }return n = +n, e.overshoot = t, e;
  }(1.70158);var Gi = 2 * Math.PI,
      Ki = (function t(n, e) {
    function r(t) {
      return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gi);return r.amplitude = function (n) {
      return t(n, e * Gi);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3), function t(n, e) {
    function r(t) {
      return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gi);return r.amplitude = function (n) {
      return t(n, e * Gi);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3), function t(n, e) {
    function r(t) {
      return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2;
    }var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gi);return r.amplitude = function (n) {
      return t(n, e * Gi);
    }, r.period = function (e) {
      return t(n, e);
    }, r;
  }(1, .3), { time: null, delay: 0, duration: 250, ease: function ease(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    } });W.prototype.interrupt = function (t) {
    return this.each(function () {
      Wr(this, t);
    });
  }, W.prototype.transition = function (t) {
    var n, e;t instanceof Dn ? (n = t._id, t = t._name) : (n = Fn(), (e = Ki).time = dt(), t = null == t ? null : t + "");for (var r = this._groups, i = r.length, u = 0; u < i; ++u) {
      for (var o, a = r[u], c = a.length, l = 0; l < c; ++l) {
        (o = a[l]) && Br(o, t, n, l, a, e || Yn(o, n));
      }
    }return new Dn(r, this._parents, t, n);
  };var Qi,
      tu = function tu(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  },
      nu = function (t) {
    return 1 === t.length && (t = Hn(t)), { left: function left(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var u = r + i >>> 1;t(n[u], e) < 0 ? r = u + 1 : i = u;
        }return r;
      }, right: function right(n, e, r, i) {
        for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
          var u = r + i >>> 1;t(n[u], e) > 0 ? i = u : r = u + 1;
        }return r;
      } };
  }(tu).right,
      eu = function eu(t, n, e) {
    t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), u = new Array(i); ++r < i;) {
      u[r] = t + r * e;
    }return u;
  },
      ru = Math.sqrt(50),
      iu = Math.sqrt(10),
      uu = Math.sqrt(2),
      ou = function ou(t, n, e) {
    var r,
        i,
        u,
        o = n < t,
        a = -1;if (o && (r = t, t = n, n = r), 0 === (u = Ln(t, n, e)) || !isFinite(u)) return [];if (u > 0) for (t = Math.ceil(t / u), n = Math.floor(n / u), i = new Array(r = Math.ceil(n - t + 1)); ++a < r;) {
      i[a] = (t + a) * u;
    } else for (t = Math.floor(t * u), n = Math.ceil(n * u), i = new Array(r = Math.ceil(t - n + 1)); ++a < r;) {
      i[a] = (t - a) / u;
    }return o && i.reverse(), i;
  },
      au = Array.prototype,
      cu = au.map,
      lu = au.slice,
      su = { name: "implicit" },
      fu = function fu(t) {
    return function () {
      return t;
    };
  },
      hu = function hu(t) {
    return +t;
  },
      pu = [0, 1],
      du = function du(t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;var e,
        r = t.slice(0, e);return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  },
      gu = function gu(t) {
    return (t = du(Math.abs(t))) ? t[1] : NaN;
  },
      mu = function mu(t, n) {
    return function (e, r) {
      for (var i = e.length, u = [], o = 0, a = t[0], c = 0; i > 0 && a > 0 && (c + a + 1 > r && (a = Math.max(1, r - c)), u.push(e.substring(i -= a, i + a)), !((c += a + 1) > r));) {
        a = t[o = (o + 1) % t.length];
      }return u.reverse().join(n);
    };
  },
      vu = function vu(t) {
    return function (n) {
      return n.replace(/[0-9]/g, function (n) {
        return t[+n];
      });
    };
  },
      yu = function yu(t, n) {
    var e = du(t, n);if (!e) return t + "";var r = e[0],
        i = e[1];return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
  },
      wu = { "": function _(t, n) {
      t: for (var e, r = (t = t.toPrecision(n)).length, i = 1, u = -1; i < r; ++i) {
        switch (t[i]) {case ".":
            u = e = i;break;case "0":
            0 === u && (u = i), e = i;break;case "e":
            break t;default:
            u > 0 && (u = 0);}
      }return u > 0 ? t.slice(0, u) + t.slice(e + 1) : t;
    }, "%": function _(t, n) {
      return (100 * t).toFixed(n);
    }, b: function b(t) {
      return Math.round(t).toString(2);
    }, c: function c(t) {
      return t + "";
    }, d: function d(t) {
      return Math.round(t).toString(10);
    }, e: function e(t, n) {
      return t.toExponential(n);
    }, f: function f(t, n) {
      return t.toFixed(n);
    }, g: function g(t, n) {
      return t.toPrecision(n);
    }, o: function o(t) {
      return Math.round(t).toString(8);
    }, p: function p(t, n) {
      return yu(100 * t, n);
    }, r: yu, s: function s(t, n) {
      var e = du(t, n);if (!e) return t + "";var r = e[0],
          i = e[1],
          u = i - (Qi = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          o = r.length;return u === o ? r : u > o ? r + new Array(u - o + 1).join("0") : u > 0 ? r.slice(0, u) + "." + r.slice(u) : "0." + new Array(1 - u).join("0") + du(t, Math.max(0, n + u - 1))[0];
    }, X: function X(t) {
      return Math.round(t).toString(16).toUpperCase();
    }, x: function x(t) {
      return Math.round(t).toString(16);
    } },
      _u = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;Zn.prototype = Bn.prototype, Bn.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
  };var Mu,
      bu,
      xu = function xu(t) {
    return t;
  },
      Tu = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
      Au = function Au(t) {
    function n(t) {
      function n(t) {
        var n,
            r,
            o,
            s = m,
            _ = v;if ("c" === g) _ = y(t) + _, t = "";else {
          var M = (t = +t) < 0;if (t = y(Math.abs(t), d), M && 0 == +t && (M = !1), s = (M ? "(" === l ? l : "-" : "-" === l || "(" === l ? "" : l) + s, _ = _ + ("s" === g ? Tu[8 + Qi / 3] : "") + (M && "(" === l ? ")" : ""), w) for (n = -1, r = t.length; ++n < r;) {
            if (48 > (o = t.charCodeAt(n)) || o > 57) {
              _ = (46 === o ? i + t.slice(n + 1) : t.slice(n)) + _, t = t.slice(0, n);break;
            }
          }
        }p && !f && (t = e(t, 1 / 0));var b = s.length + t.length + _.length,
            x = b < h ? new Array(h - b + 1).join(a) : "";switch (p && f && (t = e(x + t, x.length ? h - _.length : 1 / 0), x = ""), c) {case "<":
            t = s + t + _ + x;break;case "=":
            t = s + x + t + _;break;case "^":
            t = x.slice(0, b = x.length >> 1) + s + t + _ + x.slice(b);break;default:
            t = x + s + t + _;}return u(t);
      }var a = (t = Zn(t)).fill,
          c = t.align,
          l = t.sign,
          s = t.symbol,
          f = t.zero,
          h = t.width,
          p = t.comma,
          d = t.precision,
          g = t.type,
          m = "$" === s ? r[0] : "#" === s && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
          v = "$" === s ? r[1] : /[%p]/.test(g) ? o : "",
          y = wu[g],
          w = !g || /[defgprs%]/.test(g);return d = null == d ? g ? 6 : 12 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), n.toString = function () {
        return t + "";
      }, n;
    }var e = t.grouping && t.thousands ? mu(t.grouping, t.thousands) : xu,
        r = t.currency,
        i = t.decimal,
        u = t.numerals ? vu(t.numerals) : xu,
        o = t.percent || "%";return { format: n, formatPrefix: function formatPrefix(t, e) {
        var r = n((t = Zn(t), t.type = "f", t)),
            i = 3 * Math.max(-8, Math.min(8, Math.floor(gu(e) / 3))),
            u = Math.pow(10, -i),
            o = Tu[8 + i / 3];return function (t) {
          return r(u * t) + o;
        };
      } };
  };!function (n) {
    Mu = Au(n), t.format = Mu.format, bu = Mu.formatPrefix;
  }({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });var ku = function ku(t) {
    return Math.max(0, -gu(Math.abs(t)));
  },
      Cu = function Cu(t, n) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(gu(n) / 3))) - gu(Math.abs(t)));
  },
      Nu = function Nu(t, n) {
    return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, gu(n) - gu(t)) + 1;
  },
      Su = function Su(n, e, r) {
    var i,
        u = n[0],
        o = n[n.length - 1],
        a = On(u, o, null == e ? 10 : e);switch ((r = Zn(null == r ? ",f" : r)).type) {case "s":
        var c = Math.max(Math.abs(u), Math.abs(o));return null != r.precision || isNaN(i = Cu(a, c)) || (r.precision = i), bu(r, c);case "":case "e":case "g":case "p":case "r":
        null != r.precision || isNaN(i = Nu(a, Math.max(Math.abs(u), Math.abs(o)))) || (r.precision = i - ("e" === r.type));break;case "f":case "%":
        null != r.precision || isNaN(i = ku(a)) || (r.precision = i - 2 * ("%" === r.type));}return t.format(r);
  },
      Uu = new Date(),
      Du = new Date(),
      Eu = Gn(function () {}, function (t, n) {
    t.setTime(+t + n);
  }, function (t, n) {
    return n - t;
  });Eu.every = function (t) {
    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Gn(function (n) {
      n.setTime(Math.floor(n / t) * t);
    }, function (n, e) {
      n.setTime(+n + e * t);
    }, function (n, e) {
      return (e - n) / t;
    }) : Eu : null;
  };var Fu = 6e4,
      Yu = 6048e5,
      Hu = (Gn(function (t) {
    t.setTime(1e3 * Math.floor(t / 1e3));
  }, function (t, n) {
    t.setTime(+t + 1e3 * n);
  }, function (t, n) {
    return (n - t) / 1e3;
  }, function (t) {
    return t.getUTCSeconds();
  }), Gn(function (t) {
    t.setTime(Math.floor(t / Fu) * Fu);
  }, function (t, n) {
    t.setTime(+t + n * Fu);
  }, function (t, n) {
    return (n - t) / Fu;
  }, function (t) {
    return t.getMinutes();
  }), Gn(function (t) {
    var n = t.getTimezoneOffset() * Fu % 36e5;n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n);
  }, function (t, n) {
    t.setTime(+t + 36e5 * n);
  }, function (t, n) {
    return (n - t) / 36e5;
  }, function (t) {
    return t.getHours();
  }), Gn(function (t) {
    t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setDate(t.getDate() + n);
  }, function (t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Fu) / 864e5;
  }, function (t) {
    return t.getDate() - 1;
  })),
      Lu = Kn(0),
      Ou = Kn(1),
      Pu = (Kn(2), Kn(3), Kn(4), Kn(5), Kn(6), Gn(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setMonth(t.getMonth() + n);
  }, function (t, n) {
    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }), Gn(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setFullYear(t.getFullYear() + n);
  }, function (t, n) {
    return n.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  }));Pu.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Gn(function (n) {
      n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setFullYear(n.getFullYear() + e * t);
    }) : null;
  };Gn(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, n) {
    t.setTime(+t + n * Fu);
  }, function (t, n) {
    return (n - t) / Fu;
  }, function (t) {
    return t.getUTCMinutes();
  }), Gn(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, n) {
    t.setTime(+t + 36e5 * n);
  }, function (t, n) {
    return (n - t) / 36e5;
  }, function (t) {
    return t.getUTCHours();
  });var ju = Gn(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCDate(t.getUTCDate() + n);
  }, function (t, n) {
    return (n - t) / 864e5;
  }, function (t) {
    return t.getUTCDate() - 1;
  }),
      qu = Qn(0),
      $u = Qn(1),
      Xu = (Qn(2), Qn(3), Qn(4), Qn(5), Qn(6), Gn(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCMonth(t.getUTCMonth() + n);
  }, function (t, n) {
    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }), Gn(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  }, function (t, n) {
    return n.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  }));Xu.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Gn(function (n) {
      n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
    }, function (n, e) {
      n.setUTCFullYear(n.getUTCFullYear() + e * t);
    }) : null;
  };var zu,
      Iu,
      Ru,
      Vu,
      Zu,
      Bu = { "-": "", _: " ", 0: "0" },
      Wu = /^\s*\d+/,
      Ju = /^%/,
      Gu = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;!function (t) {
    zu = re(t), Iu = zu.format, Ru = zu.parse, Vu = zu.utcFormat, Zu = zu.utcParse;
  }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });Date.prototype.toISOString || Vu("%Y-%m-%dT%H:%M:%S.%LZ"), +new Date("2000-01-01T00:00:00.000Z") || Zu("%Y-%m-%dT%H:%M:%S.%LZ");var Ku = function Ku(t) {
    return t.match(/.{6}/g).map(function (t) {
      return "#" + t;
    });
  };Ku("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Ku("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), Ku("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), Ku("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Vi(Bt(300, .5, 0), Bt(-240, .5, 1));Vi(Bt(-100, .75, .35), Bt(80, 1.5, .8)), Vi(Bt(260, .75, .35), Bt(80, 1.5, .8)), Bt();var Qu = Array.prototype.slice,
      to = function to(t) {
    return t;
  },
      no = 1,
      eo = 2,
      ro = 3,
      io = 4,
      uo = 1e-6;t.select = function (t) {
    return "string" == typeof t ? new B([[document.querySelector(t)]], [document.documentElement]) : new B([[t]], wr);
  }, t.selectAll = function (t) {
    return "string" == typeof t ? new B([document.querySelectorAll(t)], [document.documentElement]) : new B([null == t ? [] : t], wr);
  }, t.csv = Nr, t.text = Ar, t.transition = En, t.scaleLinear = Jn, t.scaleOrdinal = Pn, t.scaleBand = jn, t.axisBottom = function (t) {
    return er(ro, t);
  }, t.axisTop = function (t) {
    return er(no, t);
  }, t.axisLeft = function (t) {
    return er(io, t);
  }, t.nest = function () {
    function t(n, i, o, a) {
      if (i >= u.length) return null != e && n.sort(e), null != r ? r(n) : n;for (var c, l, s, f = -1, h = n.length, p = u[i++], d = G(), g = o(); ++f < h;) {
        (s = d.get(c = p(l = n[f]) + "")) ? s.push(l) : d.set(c, [l]);
      }return d.each(function (n, e) {
        a(g, e, t(n, i, o, a));
      }), g;
    }function n(t, e) {
      if (++e > u.length) return t;var i,
          a = o[e - 1];return null != r && e >= u.length ? i = t.entries() : (i = [], t.each(function (t, r) {
        i.push({ key: r, values: n(t, e) });
      })), null != a ? i.sort(function (t, n) {
        return a(t.key, n.key);
      }) : i;
    }var e,
        r,
        i,
        u = [],
        o = [];return i = { object: function object(n) {
        return t(n, 0, K, Q);
      }, map: function map(n) {
        return t(n, 0, tt, nt);
      }, entries: function entries(e) {
        return n(t(e, 0, tt, nt), 0);
      }, key: function key(t) {
        return u.push(t), i;
      }, sortKeys: function sortKeys(t) {
        return o[u.length - 1] = t, i;
      }, sortValues: function sortValues(t) {
        return e = t, i;
      }, rollup: function rollup(t) {
        return r = t, i;
      } };
  }, Object.defineProperty(t, "__esModule", { value: !0 });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Legend = __webpack_require__(2);

var _TriangleBarGraphic = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var d3 = __webpack_require__(0);

d3.csv('src/data/restricted-dietary-requirements.csv', function (error, data) {
  if (error) throw error;

  data.map(function (d) {
    // coerce to numerals
    d.followers_pct = parseInt(d.followers.replace(/\%/g, ''));
  });

  // get the collection of unique regions
  var regions = [].concat(_toConsumableArray(new Set(data.map(function (d) {
    return d.region;
  }))));

  // map abbreviations to regions
  var regionAbbreviations = new Map([['Asia-Pacific', 'ap'], ['Europe', 'e'], ['Africa/Middle East', 'ame'], ['Latin America', 'la'], ['North America', 'na']]);

  // nest data on diets
  var dietData = d3.nest().key(function (d) {
    return d.diet;
  }).entries(data);

  d3.select('main').insert('h1', ':first-child').html('How popular is it to go without?<span class="subtitle">Adherence to dietary restrictions around the globe</span>');

  // Let's start with one and see if we can eventually flip it on a 45deg upward angle
  //new TriangleBar('#graph', dietData[0], regions, regionAbbreviations, { top: 20, right: 20, bottom: 20, left: 30 }, document.querySelector('#graph').clientWidth, document.querySelector('#graph').clientHeight).init();

  new _Legend.Legend('#graph', dietData, regions, regionAbbreviations, { top: 20, right: 10, bottom: 20, left: 10 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).init();

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dietData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var diet = _step.value;

      new _TriangleBarGraphic.TriangleBar('#graph', diet, regions, regionAbbreviations, { top: 40, right: 10, bottom: 20, left: 25 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).smallMultiples();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var d3 = __webpack_require__(0);

var Legend = exports.Legend = function () {
  function Legend(el, d, r, rm, m, w, h) {
    _classCallCheck(this, Legend);

    this.mount = el;
    this.data = d;
    this.regions = r;
    this.regionsMap = rm;
    this.margin = m;
    this.width = w - this.margin.right - this.margin.left;
    this.height = h - this.margin.bottom - this.margin.top;
  }

  _createClass(Legend, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // mount legend to DOM
      var legend = d3.select(this.mount).append('svg').attr('width', this.width + this.margin.right + this.margin.left).attr('height', this.height + this.margin.bottom + this.margin.top).append('g').attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');

      this.regions.map(function (region, i) {
        legend.append('text').attr('class', 'legend-text').attr('x', 15).attr('y', i * 18 + 15).text(_this.regionsMap.get(region) + ': ' + region);
      });
    }
  }]);

  return Legend;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var d3 = __webpack_require__(0);

var TriangleBar = exports.TriangleBar = function () {
  function TriangleBar(el, d, r, rm, m, w, h) {
    _classCallCheck(this, TriangleBar);

    this.mount = el;
    this.data = d;
    this.regions = r;
    this.regionsMap = rm;
    this.margin = m;
    this.width = w - this.margin.right - this.margin.left;
    this.height = h - this.margin.bottom - this.margin.top;
    this.colors = ['rgba(30,29,73,1)', 'rgba(103,72,168,1)', 'rgba(127,68,158,1)', 'rgba(151,61,147,1)', 'rgba(251,167,215,1)'];
  }

  _createClass(TriangleBar, [{
    key: 'init',
    value: function init() {
      // mount svg element to DOM
      var graph = d3.select(this.mount).append('svg').attr('width', this.width + this.margin.right + this.margin.left).attr('height', this.height + this.margin.bottom + this.margin.top).append('g').attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');

      var colors = d3.scaleOrdinal().domain(this.data.values.map(function (d) {
        return d.region;
      })).range(this.colors);
      var x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
      var y = d3.scaleLinear().rangeRound([this.height, 0]);

      var xAxis = d3.axisBottom(x);
      var yAxis = d3.axisLeft(y).tickFormat(function (d) {
        return d + '%';
      }).ticks(4);

      x.domain(this.data.values.map(function (d) {
        return d.region;
      }));
      y.domain([0, 100]);

      graph.append('g').attr('class', 'x-axis').attr('transform', 'translate(0, ' + this.height + ')').call(xAxis);

      graph.append('g').attr('class', 'y-axis').call(yAxis);

      // remove the first and last tick on the y-axis
      graph.selectAll('.tick').filter(function (t) {
        return t === 100 || t === 0;
      }).remove();

      // create the points for an equilateral triangle
      // divide the length of the 60deg side by √3 to get the length of the 30deg side
      var points = function points(d) {
        return x(d.region) + x.bandwidth() / 2 - (y(d.followers_pct) - y(0)) / Math.sqrt(3) + ',' + y(0) + ' ' + (x(d.region) + x.bandwidth() / 2 + (y(d.followers_pct) - y(0)) / Math.sqrt(3)) + ',' + y(0) + ' ' + (x(d.region) + x.bandwidth() / 2) + ',' + y(d.followers_pct);
      };

      graph.selectAll('.triangle').data(this.data.values).enter().append('polygon').attr('class', 'triangle').attr('points', points).style('fill', function (d) {
        return colors(d.region);
      });
    }
  }, {
    key: 'smallMultiples',
    value: function smallMultiples() {
      var _this = this;

      // mount svg element to DOM
      var graph = d3.select(this.mount).append('svg').attr('width', this.width + this.margin.right + this.margin.left).attr('height', this.height + this.margin.bottom + this.margin.top).append('g').attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');

      var colors = d3.scaleOrdinal().domain(this.data.values.map(function (d) {
        return d.region;
      })).range(this.colors);
      var x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
      var y = d3.scaleLinear().rangeRound([this.height, 0]);

      var xValues = [];
      this.regions.map(function (region) {
        return xValues.push(_this.regionsMap.get(region));
      });

      var xAxis = d3.axisTop(x);
      var yAxis = d3.axisLeft(y).tickFormat(function (d) {
        return d + '%';
      }).ticks(4);

      x.domain(this.data.values.map(function (d) {
        return _this.regionsMap.get(d.region);
      }));

      y.domain([70, 0]);

      graph.append('g').attr('class', 'x-axis').call(xAxis);

      graph.append('g').attr('class', 'y-axis').call(yAxis);

      // remove the first and last tick on the y-axis
      graph.selectAll('.tick').filter(function (t) {
        return t === 100 || t === 0;
      }).remove();

      graph.selectAll('.x-axis .tick').each(function (t, i) {
        d3.select(this).on('mouseover', function (d) {
          // select graph
          var parent = d3.select(this.parentNode.parentNode);
          parent.selectAll('.triangle').each(function (tri, j) {
            if (j != i) {
              d3.select(this).transition(200).style('opacity', '0.3');
            } else {
              var data = d3.select(this).data();
              parent.select('.percentage').transition(200).style('opacity', 1).text(data[0].followers);
            }
          });
        }).on('mouseout', function () {
          var parent = d3.select(this.parentNode.parentNode);
          var triangles = parent.selectAll('.triangle');
          triangles.transition(200).style('opacity', 1);
          parent.select('.percentage').transition(200).style('opacity', 0).text('');
        });
      });

      // create the points for an equilateral triangle
      // divide the length of the 60deg side by √3 to get the length of the 30deg side
      var points = function points(d) {
        return x(_this.regionsMap.get(d.region)) + x.bandwidth() / 2 - (y(d.followers_pct) - y(0)) / Math.sqrt(3) + ',' + y(0) + ' ' + (x(_this.regionsMap.get(d.region)) + x.bandwidth() / 2 + (y(d.followers_pct) - y(0)) / Math.sqrt(3)) + ',' + y(0) + ' ' + (x(_this.regionsMap.get(d.region)) + x.bandwidth() / 2) + ',' + y(d.followers_pct);
      };

      graph.selectAll('.triangle').data(this.data.values).enter().append('polygon').attr('class', 'triangle').attr('points', points).style('fill', function (d) {
        return colors(d.region);
      }).each(function (t, i) {
        d3.select(this).on('mouseover', function (d) {
          // select graph
          var parent = d3.select(this.parentNode);
          parent.selectAll('.triangle').each(function (tri, j) {
            if (j != i) {
              d3.select(this).transition(200).style('opacity', '0.3');
            } else {
              var data = d3.select(this).data();
              parent.select('.percentage').transition(200).style('opacity', 1).text(data[0].followers);
            }
          });
        }).on('mouseout', function () {
          var parent = d3.select(this.parentNode.parentNode);
          var triangles = parent.selectAll('.triangle');
          triangles.transition(200).style('opacity', 1);
          parent.select('.percentage').transition(200).style('opacity', 0).text('');
        });
      });

      var diet = this.data.values[0].diet;

      graph.append('text').attr('class', 'graph-label').attr('x', this.width / 2 - diet.length / 2 * 8).attr('y', -25).text(diet);

      graph.append('text').attr('class', 'percentage').attr('x', this.width / 2 - 3 * 8).attr('y', this.height).text('');
    }
  }]);

  return TriangleBar;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map