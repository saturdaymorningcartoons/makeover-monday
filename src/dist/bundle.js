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

!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(t.d3 = {});
}(undefined, function (t) {
  "use strict";
  function e(t) {
    var e = t += "",
        n = e.indexOf(":");return n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), Xn.hasOwnProperty(e) ? { space: Xn[e], local: t } : t;
  }function n(t) {
    return function () {
      var e = this.ownerDocument,
          n = this.namespaceURI;return n === Zn && e.documentElement.namespaceURI === Zn ? e.createElement(t) : e.createElementNS(n, t);
    };
  }function r(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }function i(t) {
    var i = e(t);return (i.local ? r : n)(i);
  }function a(t, e, n) {
    return t = u(t, e, n), function (e) {
      var n = e.relatedTarget;n && (n === this || 8 & n.compareDocumentPosition(this)) || t.call(this, e);
    };
  }function u(t, e, n) {
    return function (r) {
      var i = Kn;Kn = r;try {
        t.call(this, this.__data__, e, n);
      } finally {
        Kn = i;
      }
    };
  }function o(t) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var e = "",
          n = t.indexOf(".");return n >= 0 && (e = t.slice(n + 1), t = t.slice(0, n)), { type: t, name: e };
    });
  }function c(t) {
    return function () {
      var e = this.__on;if (e) {
        for (var n, r = 0, i = -1, a = e.length; r < a; ++r) {
          n = e[r], t.type && n.type !== t.type || n.name !== t.name ? e[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
        }++i ? e.length = i : delete this.__on;
      }
    };
  }function f(t, e, n) {
    var r = Gn.hasOwnProperty(t.type) ? a : u;return function (i, a, u) {
      var o,
          c = this.__on,
          f = r(e, a, u);if (c) for (var l = 0, s = c.length; l < s; ++l) {
        if ((o = c[l]).type === t.type && o.name === t.name) return this.removeEventListener(o.type, o.listener, o.capture), this.addEventListener(o.type, o.listener = f, o.capture = n), void (o.value = e);
      }this.addEventListener(t.type, f, n), o = { type: t.type, name: t.name, value: e, listener: f, capture: n }, c ? c.push(o) : this.__on = [o];
    };
  }function l(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  }function s(t, e, n) {
    var r = l(t),
        i = r.CustomEvent;"function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
  }function h(t, e) {
    return function () {
      return s(this, t, e);
    };
  }function d(t, e) {
    return function () {
      return s(this, t, e.apply(this, arguments));
    };
  }function b() {
    var t = this.parentNode;t && t.removeChild(this);
  }function p() {}function g(t) {
    return null == t ? p : function () {
      return this.querySelector(t);
    };
  }function y() {
    return null;
  }function m() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function v() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function w() {
    this.innerHTML = "";
  }function M(t) {
    return function () {
      this.innerHTML = t;
    };
  }function _(t) {
    return function () {
      var e = t.apply(this, arguments);this.innerHTML = null == e ? "" : e;
    };
  }function x() {
    this.textContent = "";
  }function T(t) {
    return function () {
      this.textContent = t;
    };
  }function C(t) {
    return function () {
      var e = t.apply(this, arguments);this.textContent = null == e ? "" : e;
    };
  }function k(t) {
    return t.trim().split(/^|\s+/);
  }function A(t) {
    return t.classList || new N(t);
  }function N(t) {
    this._node = t, this._names = k(t.getAttribute("class") || "");
  }function S(t, e) {
    for (var n = A(t), r = -1, i = e.length; ++r < i;) {
      n.add(e[r]);
    }
  }function U(t, e) {
    for (var n = A(t), r = -1, i = e.length; ++r < i;) {
      n.remove(e[r]);
    }
  }function D(t) {
    return function () {
      S(this, t);
    };
  }function F(t) {
    return function () {
      U(this, t);
    };
  }function E(t, e) {
    return function () {
      (e.apply(this, arguments) ? S : U)(this, t);
    };
  }function H(t) {
    return function () {
      delete this[t];
    };
  }function L(t, e) {
    return function () {
      this[t] = e;
    };
  }function Y(t, e) {
    return function () {
      var n = e.apply(this, arguments);null == n ? delete this[t] : this[t] = n;
    };
  }function j(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }function O(t, e, n) {
    return function () {
      this.style.setProperty(t, e, n);
    };
  }function q(t, e, n) {
    return function () {
      var r = e.apply(this, arguments);null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
    };
  }function $(t, e) {
    return t.style.getPropertyValue(e) || l(t).getComputedStyle(t, null).getPropertyValue(e);
  }function P(t) {
    return function () {
      this.removeAttribute(t);
    };
  }function R(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }function z(t, e) {
    return function () {
      this.setAttribute(t, e);
    };
  }function I(t, e) {
    return function () {
      this.setAttributeNS(t.space, t.local, e);
    };
  }function Z(t, e) {
    return function () {
      var n = e.apply(this, arguments);null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
    };
  }function X(t, e) {
    return function () {
      var n = e.apply(this, arguments);null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
    };
  }function B(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
  }function W(t) {
    return new Array(t.length);
  }function V(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
  }function J(t) {
    return function () {
      return t;
    };
  }function G(t, e, n, r, i, a) {
    for (var u, o = 0, c = e.length, f = a.length; o < f; ++o) {
      (u = e[o]) ? (u.__data__ = a[o], r[o] = u) : n[o] = new V(t, a[o]);
    }for (; o < c; ++o) {
      (u = e[o]) && (i[o] = u);
    }
  }function K(t, e, n, r, i, a, u) {
    var o,
        c,
        f,
        l = {},
        s = e.length,
        h = a.length,
        d = new Array(s);for (o = 0; o < s; ++o) {
      (c = e[o]) && (d[o] = f = Qn + u.call(c, c.__data__, o, e), f in l ? i[o] = c : l[f] = c);
    }for (o = 0; o < h; ++o) {
      (c = l[f = Qn + u.call(t, a[o], o, a)]) ? (r[o] = c, c.__data__ = a[o], l[f] = null) : n[o] = new V(t, a[o]);
    }for (o = 0; o < s; ++o) {
      (c = e[o]) && l[d[o]] === c && (i[o] = c);
    }
  }function Q() {
    return [];
  }function tt(t) {
    return null == t ? Q : function () {
      return this.querySelectorAll(t);
    };
  }function et(t, e) {
    this._groups = t, this._parents = e;
  }function nt() {}function rt(t, e) {
    var n = new nt();if (t instanceof nt) t.each(function (t, e) {
      n.set(e, t);
    });else if (Array.isArray(t)) {
      var r,
          i = -1,
          a = t.length;if (null == e) for (; ++i < a;) {
        n.set(i, t[i]);
      } else for (; ++i < a;) {
        n.set(e(r = t[i], i, t), r);
      }
    } else if (t) for (var u in t) {
      n.set(u, t[u]);
    }return n;
  }function it() {
    return {};
  }function at(t, e, n) {
    t[e] = n;
  }function ut() {
    return rt();
  }function ot(t, e, n) {
    t.set(e, n);
  }function ct() {
    for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
      if (!(t = arguments[e] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new ft(r);
  }function ft(t) {
    this._ = t;
  }function lt(t, e) {
    return t.trim().split(/^|\s+/).map(function (t) {
      var n = "",
          r = t.indexOf(".");if (r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), t && !e.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: n };
    });
  }function st(t, e) {
    for (var n, r = 0, i = t.length; r < i; ++r) {
      if ((n = t[r]).name === e) return n.value;
    }
  }function ht(t, e, n) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === e) {
        t[r] = er, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != n && t.push({ name: e, value: n }), t;
  }function dt(t, e) {
    function n(t) {
      var e,
          n = f.status;if (!n && pt(f) || n >= 200 && n < 300 || 304 === n) {
        if (a) try {
          e = a.call(r, f);
        } catch (t) {
          return void o.call("error", r, t);
        } else e = f;o.call("load", r, e);
      } else o.call("error", r, t);
    }var r,
        i,
        a,
        u,
        o = ct("beforesend", "progress", "load", "error"),
        c = rt(),
        f = new XMLHttpRequest(),
        l = null,
        s = null,
        h = 0;if ("undefined" == typeof XDomainRequest || "withCredentials" in f || !/^(http(s)?:)?\/\//.test(t) || (f = new XDomainRequest()), "onload" in f ? f.onload = f.onerror = f.ontimeout = n : f.onreadystatechange = function (t) {
      f.readyState > 3 && n(t);
    }, f.onprogress = function (t) {
      o.call("progress", r, t);
    }, r = { header: function header(t, e) {
        return t = (t + "").toLowerCase(), arguments.length < 2 ? c.get(t) : (null == e ? c.remove(t) : c.set(t, e + ""), r);
      }, mimeType: function mimeType(t) {
        return arguments.length ? (i = null == t ? null : t + "", r) : i;
      }, responseType: function responseType(t) {
        return arguments.length ? (u = t, r) : u;
      }, timeout: function timeout(t) {
        return arguments.length ? (h = +t, r) : h;
      }, user: function user(t) {
        return arguments.length < 1 ? l : (l = null == t ? null : t + "", r);
      }, password: function password(t) {
        return arguments.length < 1 ? s : (s = null == t ? null : t + "", r);
      }, response: function response(t) {
        return a = t, r;
      }, get: function get(t, e) {
        return r.send("GET", t, e);
      }, post: function post(t, e) {
        return r.send("POST", t, e);
      }, send: function send(e, n, a) {
        return f.open(e, t, !0, l, s), null == i || c.has("accept") || c.set("accept", i + ",*/*"), f.setRequestHeader && c.each(function (t, e) {
          f.setRequestHeader(e, t);
        }), null != i && f.overrideMimeType && f.overrideMimeType(i), null != u && (f.responseType = u), h > 0 && (f.timeout = h), null == a && "function" == typeof n && (a = n, n = null), null != a && 1 === a.length && (a = bt(a)), null != a && r.on("error", a).on("load", function (t) {
          a(null, t);
        }), o.call("beforesend", r, f), f.send(null == n ? null : n), r;
      }, abort: function abort() {
        return f.abort(), r;
      }, on: function on() {
        var t = o.on.apply(o, arguments);return t === o ? r : t;
      } }, null != e) {
      if ("function" != typeof e) throw new Error("invalid callback: " + e);return r.get(e);
    }return r;
  }function bt(t) {
    return function (e, n) {
      t(null == e ? n : null);
    };
  }function pt(t) {
    var e = t.responseType;return e && "text" !== e ? t.response : t.responseText;
  }function gt(t) {
    return new Function("d", "return {" + t.map(function (t, e) {
      return JSON.stringify(t) + ": d[" + e + "]";
    }).join(",") + "}");
  }function yt(t, e) {
    var n = gt(t);return function (r, i) {
      return e(n(r), i, t);
    };
  }function mt(t) {
    var e = Object.create(null),
        n = [];return t.forEach(function (t) {
      for (var r in t) {
        r in e || n.push(e[r] = r);
      }
    }), n;
  }function vt(t) {
    function e(t, e) {
      function n() {
        if (l >= f) return o;if (i) return i = !1, u;var e,
            n = l;if (34 === t.charCodeAt(n)) {
          for (var r = n; r++ < f;) {
            if (34 === t.charCodeAt(r)) {
              if (34 !== t.charCodeAt(r + 1)) break;++r;
            }
          }return l = r + 2, 13 === (e = t.charCodeAt(r + 1)) ? (i = !0, 10 === t.charCodeAt(r + 2) && ++l) : 10 === e && (i = !0), t.slice(n + 1, r).replace(/""/g, '"');
        }for (; l < f;) {
          var c = 1;if (10 === (e = t.charCodeAt(l++))) i = !0;else if (13 === e) i = !0, 10 === t.charCodeAt(l) && (++l, ++c);else if (e !== a) continue;return t.slice(n, l - c);
        }return t.slice(n);
      }for (var r, i, u = {}, o = {}, c = [], f = t.length, l = 0, s = 0; (r = n()) !== o;) {
        for (var h = []; r !== u && r !== o;) {
          h.push(r), r = n();
        }e && null == (h = e(h, s++)) || c.push(h);
      }return c;
    }function n(e) {
      return e.map(r).join(t);
    }function r(t) {
      return null == t ? "" : i.test(t += "") ? '"' + t.replace(/\"/g, '""') + '"' : t;
    }var i = new RegExp('["' + t + "\n\r]"),
        a = t.charCodeAt(0);return { parse: function parse(t, n) {
        var r,
            i,
            a = e(t, function (t, e) {
          if (r) return r(t, e - 1);i = t, r = n ? yt(t, n) : gt(t);
        });return a.columns = i, a;
      }, parseRows: e, format: function format(e, n) {
        return null == n && (n = mt(e)), [n.map(r).join(t)].concat(e.map(function (e) {
          return n.map(function (t) {
            return r(e[t]);
          }).join(t);
        })).join("\n");
      }, formatRows: function formatRows(t) {
        return t.map(n).join("\n");
      } };
  }function wt(t, e) {
    return function (n) {
      return t(n.responseText, e);
    };
  }function Mt(t, e) {
    return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
  }function _t(t) {
    return function (e, n) {
      return Mt(t(e), n);
    };
  }function xt(t, e, n) {
    var r,
        i,
        a,
        u = e < t,
        o = -1;if (u && (r = t, t = e, e = r), 0 === (a = Tt(t, e, n)) || !isFinite(a)) return [];if (a > 0) for (t = Math.ceil(t / a), e = Math.floor(e / a), i = new Array(r = Math.ceil(e - t + 1)); ++o < r;) {
      i[o] = (t + o) * a;
    } else for (t = Math.floor(t * a), e = Math.ceil(e * a), i = new Array(r = Math.ceil(t - e + 1)); ++o < r;) {
      i[o] = (t - o) / a;
    }return u && i.reverse(), i;
  }function Tt(t, e, n) {
    var r = (e - t) / Math.max(0, n),
        i = Math.floor(Math.log(r) / Math.LN10),
        a = r / Math.pow(10, i);return i >= 0 ? (a >= ar ? 10 : a >= ur ? 5 : a >= or ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= ar ? 10 : a >= ur ? 5 : a >= or ? 2 : 1);
  }function Ct(t, e, n) {
    var r = Math.abs(e - t) / Math.max(0, n),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        a = r / i;return a >= ar ? i *= 10 : a >= ur ? i *= 5 : a >= or && (i *= 2), e < t ? -i : i;
  }function kt(t, e, n) {
    t.prototype = e.prototype = n, n.constructor = t;
  }function At(t, e) {
    var n = Object.create(t.prototype);for (var r in e) {
      n[r] = e[r];
    }return n;
  }function Nt() {}function St(t) {
    var e;return t = (t + "").trim().toLowerCase(), (e = br.exec(t)) ? (e = parseInt(e[1], 16), new Ht(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1)) : (e = pr.exec(t)) ? Ut(parseInt(e[1], 16)) : (e = gr.exec(t)) ? new Ht(e[1], e[2], e[3], 1) : (e = yr.exec(t)) ? new Ht(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = mr.exec(t)) ? Dt(e[1], e[2], e[3], e[4]) : (e = vr.exec(t)) ? Dt(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = wr.exec(t)) ? Lt(e[1], e[2] / 100, e[3] / 100, 1) : (e = Mr.exec(t)) ? Lt(e[1], e[2] / 100, e[3] / 100, e[4]) : _r.hasOwnProperty(t) ? Ut(_r[t]) : "transparent" === t ? new Ht(NaN, NaN, NaN, 0) : null;
  }function Ut(t) {
    return new Ht(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function Dt(t, e, n, r) {
    return r <= 0 && (t = e = n = NaN), new Ht(t, e, n, r);
  }function Ft(t) {
    return t instanceof Nt || (t = St(t)), t ? (t = t.rgb(), new Ht(t.r, t.g, t.b, t.opacity)) : new Ht();
  }function Et(t, e, n, r) {
    return 1 === arguments.length ? Ft(t) : new Ht(t, e, n, null == r ? 1 : r);
  }function Ht(t, e, n, r) {
    this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
  }function Lt(t, e, n, r) {
    return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new jt(t, e, n, r);
  }function Yt(t) {
    if (t instanceof jt) return new jt(t.h, t.s, t.l, t.opacity);if (t instanceof Nt || (t = St(t)), !t) return new jt();if (t instanceof jt) return t;var e = (t = t.rgb()).r / 255,
        n = t.g / 255,
        r = t.b / 255,
        i = Math.min(e, n, r),
        a = Math.max(e, n, r),
        u = NaN,
        o = a - i,
        c = (a + i) / 2;return o ? (u = e === a ? (n - r) / o + 6 * (n < r) : n === a ? (r - e) / o + 2 : (e - n) / o + 4, o /= c < .5 ? a + i : 2 - a - i, u *= 60) : o = c > 0 && c < 1 ? 0 : u, new jt(u, o, c, t.opacity);
  }function jt(t, e, n, r) {
    this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
  }function Ot(t, e, n) {
    return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e);
  }function qt(t) {
    if (t instanceof $t) return new $t(t.l, t.a, t.b, t.opacity);if (t instanceof Xt) {
      var e = t.h * xr;return new $t(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
    }t instanceof Ht || (t = Ft(t));var n = It(t.r),
        r = It(t.g),
        i = It(t.b),
        a = Pt((.4124564 * n + .3575761 * r + .1804375 * i) / Cr),
        u = Pt((.2126729 * n + .7151522 * r + .072175 * i) / kr);return new $t(116 * u - 16, 500 * (a - u), 200 * (u - Pt((.0193339 * n + .119192 * r + .9503041 * i) / Ar)), t.opacity);
  }function $t(t, e, n, r) {
    this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
  }function Pt(t) {
    return t > Dr ? Math.pow(t, 1 / 3) : t / Ur + Nr;
  }function Rt(t) {
    return t > Sr ? t * t * t : Ur * (t - Nr);
  }function zt(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function It(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function Zt(t) {
    if (t instanceof Xt) return new Xt(t.h, t.c, t.l, t.opacity);t instanceof $t || (t = qt(t));var e = Math.atan2(t.b, t.a) * Tr;return new Xt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
  }function Xt(t, e, n, r) {
    this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
  }function Bt(t) {
    if (t instanceof Vt) return new Vt(t.h, t.s, t.l, t.opacity);t instanceof Ht || (t = Ft(t));var e = t.r / 255,
        n = t.g / 255,
        r = t.b / 255,
        i = (qr * r + jr * e - Or * n) / (qr + jr - Or),
        a = r - i,
        u = (Yr * (n - i) - Hr * a) / Lr,
        o = Math.sqrt(u * u + a * a) / (Yr * i * (1 - i)),
        c = o ? Math.atan2(u, a) * Tr - 120 : NaN;return new Vt(c < 0 ? c + 360 : c, o, i, t.opacity);
  }function Wt(t, e, n, r) {
    return 1 === arguments.length ? Bt(t) : new Vt(t, e, n, null == r ? 1 : r);
  }function Vt(t, e, n, r) {
    this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
  }function Jt(t) {
    return function () {
      return t;
    };
  }function Gt(t, e) {
    return function (n) {
      return t + n * e;
    };
  }function Kt(t, e, n) {
    return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
      return Math.pow(t + r * e, n);
    };
  }function Qt(t) {
    return 1 == (t = +t) ? te : function (e, n) {
      return n - e ? Kt(e, n, t) : Jt(isNaN(e) ? n : e);
    };
  }function te(t, e) {
    var n = e - t;return n ? Gt(t, n) : Jt(isNaN(t) ? e : t);
  }function ee(t, e) {
    var n,
        r = e ? e.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        a = new Array(r),
        u = new Array(r);for (n = 0; n < i; ++n) {
      a[n] = ce(t[n], e[n]);
    }for (; n < r; ++n) {
      u[n] = e[n];
    }return function (t) {
      for (n = 0; n < i; ++n) {
        u[n] = a[n](t);
      }return u;
    };
  }function ne(t, e) {
    var n = new Date();return t = +t, e -= t, function (r) {
      return n.setTime(t + e * r), n;
    };
  }function re(t, e) {
    return t = +t, e -= t, function (n) {
      return t + e * n;
    };
  }function ie(t, e) {
    var n,
        r = {},
        i = {};null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = {}), null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || (e = {});for (n in e) {
      n in t ? r[n] = ce(t[n], e[n]) : i[n] = e[n];
    }return function (t) {
      for (n in r) {
        i[n] = r[n](t);
      }return i;
    };
  }function ae(t) {
    return function () {
      return t;
    };
  }function ue(t) {
    return function (e) {
      return t(e) + "";
    };
  }function oe(t, e) {
    var n,
        r,
        i,
        a = Pr.lastIndex = Rr.lastIndex = 0,
        u = -1,
        o = [],
        c = [];for (t += "", e += ""; (n = Pr.exec(t)) && (r = Rr.exec(e));) {
      (i = r.index) > a && (i = e.slice(a, i), o[u] ? o[u] += i : o[++u] = i), (n = n[0]) === (r = r[0]) ? o[u] ? o[u] += r : o[++u] = r : (o[++u] = null, c.push({ i: u, x: re(n, r) })), a = Rr.lastIndex;
    }return a < e.length && (i = e.slice(a), o[u] ? o[u] += i : o[++u] = i), o.length < 2 ? c[0] ? ue(c[0].x) : ae(e) : (e = c.length, function (t) {
      for (var n, r = 0; r < e; ++r) {
        o[(n = c[r]).i] = n.x(t);
      }return o.join("");
    });
  }function ce(t, e) {
    var n,
        r = typeof e === "undefined" ? "undefined" : _typeof(e);return null == e || "boolean" === r ? Jt(e) : ("number" === r ? re : "string" === r ? (n = St(e)) ? (e = n, $r) : oe : e instanceof St ? $r : e instanceof Date ? ne : Array.isArray(e) ? ee : "function" != typeof e.valueOf && "function" != typeof e.toString || isNaN(e) ? ie : re)(t, e);
  }function fe(t, e) {
    return t = +t, e -= t, function (n) {
      return Math.round(t + e * n);
    };
  }function le(t) {
    return function e(n) {
      function r(e, r) {
        var i = t((e = Wt(e)).h, (r = Wt(r)).h),
            a = te(e.s, r.s),
            u = te(e.l, r.l),
            o = te(e.opacity, r.opacity);return function (t) {
          return e.h = i(t), e.s = a(t), e.l = u(Math.pow(t, n)), e.opacity = o(t), e + "";
        };
      }return n = +n, r.gamma = e, r;
    }(1);
  }function se(t) {
    return function () {
      return t;
    };
  }function he(t) {
    return +t;
  }function de(t, e) {
    return (e -= t = +t) ? function (n) {
      return (n - t) / e;
    } : se(e);
  }function be(t) {
    return function (e, n) {
      var r = t(e = +e, n = +n);return function (t) {
        return t <= e ? 0 : t >= n ? 1 : r(t);
      };
    };
  }function pe(t) {
    return function (e, n) {
      var r = t(e = +e, n = +n);return function (t) {
        return t <= 0 ? e : t >= 1 ? n : r(t);
      };
    };
  }function ge(t, e, n, r) {
    var i = t[0],
        a = t[1],
        u = e[0],
        o = e[1];return a < i ? (i = n(a, i), u = r(o, u)) : (i = n(i, a), u = r(u, o)), function (t) {
      return u(i(t));
    };
  }function ye(t, e, n, r) {
    var i = Math.min(t.length, e.length) - 1,
        a = new Array(i),
        u = new Array(i),
        o = -1;for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < i;) {
      a[o] = n(t[o], t[o + 1]), u[o] = r(e[o], e[o + 1]);
    }return function (e) {
      var n = ir(t, e, 1, i) - 1;return u[n](a[n](e));
    };
  }function me(t, e) {
    return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
  }function ve(t, e) {
    function n() {
      return i = Math.min(o.length, c.length) > 2 ? ye : ge, a = u = null, r;
    }function r(e) {
      return (a || (a = i(o, c, l ? be(t) : t, f)))(+e);
    }var i,
        a,
        u,
        o = Zr,
        c = Zr,
        f = ce,
        l = !1;return r.invert = function (t) {
      return (u || (u = i(c, o, de, l ? pe(e) : e)))(+t);
    }, r.domain = function (t) {
      return arguments.length ? (o = fr.call(t, he), n()) : o.slice();
    }, r.range = function (t) {
      return arguments.length ? (c = lr.call(t), n()) : c.slice();
    }, r.rangeRound = function (t) {
      return c = lr.call(t), f = fe, n();
    }, r.clamp = function (t) {
      return arguments.length ? (l = !!t, n()) : l;
    }, r.interpolate = function (t) {
      return arguments.length ? (f = t, n()) : f;
    }, n();
  }function we(t) {
    return t;
  }function Me(t, e) {
    if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;var n,
        r = t.slice(0, n);return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
  }function _e(t) {
    return (t = Me(Math.abs(t))) ? t[1] : NaN;
  }function xe(t, e) {
    return function (n, r) {
      for (var i = n.length, a = [], u = 0, o = t[0], c = 0; i > 0 && o > 0 && (c + o + 1 > r && (o = Math.max(1, r - c)), a.push(n.substring(i -= o, i + o)), !((c += o + 1) > r));) {
        o = t[u = (u + 1) % t.length];
      }return a.reverse().join(e);
    };
  }function Te(t) {
    return function (e) {
      return e.replace(/[0-9]/g, function (e) {
        return t[+e];
      });
    };
  }function Ce(t, e) {
    var n = Me(t, e);if (!n) return t + "";var r = n[0],
        i = n[1];return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
  }function ke(t) {
    return new Ae(t);
  }function Ae(t) {
    if (!(e = Br.exec(t))) throw new Error("invalid format: " + t);var e,
        n = e[1] || " ",
        r = e[2] || ">",
        i = e[3] || "-",
        a = e[4] || "",
        u = !!e[5],
        o = e[6] && +e[6],
        c = !!e[7],
        f = e[8] && +e[8].slice(1),
        l = e[9] || "";"n" === l ? (c = !0, l = "g") : Xr[l] || (l = ""), (u || "0" === n && "=" === r) && (u = !0, n = "0", r = "="), this.fill = n, this.align = r, this.sign = i, this.symbol = a, this.zero = u, this.width = o, this.comma = c, this.precision = f, this.type = l;
  }function Ne(t) {
    function e(t) {
      function e(t) {
        var e,
            r,
            u,
            l = g,
            w = y;if ("c" === p) w = m(t) + w, t = "";else {
          var M = (t = +t) < 0;if (t = m(Math.abs(t), b), M && 0 == +t && (M = !1), l = (M ? "(" === f ? f : "-" : "-" === f || "(" === f ? "" : f) + l, w = w + ("s" === p ? Gr[8 + zr / 3] : "") + (M && "(" === f ? ")" : ""), v) for (e = -1, r = t.length; ++e < r;) {
            if (48 > (u = t.charCodeAt(e)) || u > 57) {
              w = (46 === u ? i + t.slice(e + 1) : t.slice(e)) + w, t = t.slice(0, e);break;
            }
          }
        }d && !s && (t = n(t, 1 / 0));var _ = l.length + t.length + w.length,
            x = _ < h ? new Array(h - _ + 1).join(o) : "";switch (d && s && (t = n(x + t, x.length ? h - w.length : 1 / 0), x = ""), c) {case "<":
            t = l + t + w + x;break;case "=":
            t = l + x + t + w;break;case "^":
            t = x.slice(0, _ = x.length >> 1) + l + t + w + x.slice(_);break;default:
            t = x + l + t + w;}return a(t);
      }var o = (t = ke(t)).fill,
          c = t.align,
          f = t.sign,
          l = t.symbol,
          s = t.zero,
          h = t.width,
          d = t.comma,
          b = t.precision,
          p = t.type,
          g = "$" === l ? r[0] : "#" === l && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
          y = "$" === l ? r[1] : /[%p]/.test(p) ? u : "",
          m = Xr[p],
          v = !p || /[defgprs%]/.test(p);return b = null == b ? p ? 6 : 12 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b)), e.toString = function () {
        return t + "";
      }, e;
    }var n = t.grouping && t.thousands ? xe(t.grouping, t.thousands) : we,
        r = t.currency,
        i = t.decimal,
        a = t.numerals ? Te(t.numerals) : we,
        u = t.percent || "%";return { format: e, formatPrefix: function formatPrefix(t, n) {
        var r = e((t = ke(t), t.type = "f", t)),
            i = 3 * Math.max(-8, Math.min(8, Math.floor(_e(n) / 3))),
            a = Math.pow(10, -i),
            u = Gr[8 + i / 3];return function (t) {
          return r(a * t) + u;
        };
      } };
  }function Se(t) {
    return Math.max(0, -_e(Math.abs(t)));
  }function Ue(t, e) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(_e(e) / 3))) - _e(Math.abs(t)));
  }function De(t, e) {
    return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, _e(e) - _e(t)) + 1;
  }function Fe(t, e, n) {
    var r,
        i = t[0],
        a = t[t.length - 1],
        u = Ct(i, a, null == e ? 10 : e);switch ((n = ke(null == n ? ",f" : n)).type) {case "s":
        var o = Math.max(Math.abs(i), Math.abs(a));return null != n.precision || isNaN(r = Ue(u, o)) || (n.precision = r), Jr(n, o);case "":case "e":case "g":case "p":case "r":
        null != n.precision || isNaN(r = De(u, Math.max(Math.abs(i), Math.abs(a)))) || (n.precision = r - ("e" === n.type));break;case "f":case "%":
        null != n.precision || isNaN(r = Se(u)) || (n.precision = r - 2 * ("%" === n.type));}return Vr(n);
  }function Ee(t) {
    var e = t.domain;return t.ticks = function (t) {
      var n = e();return xt(n[0], n[n.length - 1], null == t ? 10 : t);
    }, t.tickFormat = function (t, n) {
      return Fe(e(), t, n);
    }, t.nice = function (n) {
      null == n && (n = 10);var r,
          i = e(),
          a = 0,
          u = i.length - 1,
          o = i[a],
          c = i[u];return c < o && (r = o, o = c, c = r, r = a, a = u, u = r), (r = Tt(o, c, n)) > 0 ? r = Tt(o = Math.floor(o / r) * r, c = Math.ceil(c / r) * r, n) : r < 0 && (r = Tt(o = Math.ceil(o * r) / r, c = Math.floor(c * r) / r, n)), r > 0 ? (i[a] = Math.floor(o / r) * r, i[u] = Math.ceil(c / r) * r, e(i)) : r < 0 && (i[a] = Math.ceil(o * r) / r, i[u] = Math.floor(c * r) / r, e(i)), t;
    }, t;
  }function He() {
    var t = ve(de, re);return t.copy = function () {
      return me(t, He());
    }, Ee(t);
  }function Le(t, e, n, r) {
    function i(e) {
      return t(e = new Date(+e)), e;
    }return i.floor = i, i.ceil = function (n) {
      return t(n = new Date(n - 1)), e(n, 1), t(n), n;
    }, i.round = function (t) {
      var e = i(t),
          n = i.ceil(t);return t - e < n - t ? e : n;
    }, i.offset = function (t, n) {
      return e(t = new Date(+t), null == n ? 1 : Math.floor(n)), t;
    }, i.range = function (n, r, a) {
      var u = [];if (n = i.ceil(n), a = null == a ? 1 : Math.floor(a), !(n < r && a > 0)) return u;do {
        u.push(new Date(+n));
      } while ((e(n, a), t(n), n < r));return u;
    }, i.filter = function (n) {
      return Le(function (e) {
        if (e >= e) for (; t(e), !n(e);) {
          e.setTime(e - 1);
        }
      }, function (t, r) {
        if (t >= t) if (r < 0) for (; ++r <= 0;) {
          for (; e(t, -1), !n(t);) {}
        } else for (; --r >= 0;) {
          for (; e(t, 1), !n(t);) {}
        }
      });
    }, n && (i.count = function (e, r) {
      return Kr.setTime(+e), Qr.setTime(+r), t(Kr), t(Qr), Math.floor(n(Kr, Qr));
    }, i.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (e) {
        return r(e) % t == 0;
      } : function (e) {
        return i.count(0, e) % t == 0;
      }) : i : null;
    }), i;
  }function Ye(t) {
    return Le(function (e) {
      e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setDate(t.getDate() + 7 * e);
    }, function (t, e) {
      return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * ei) / ni;
    });
  }function je(t) {
    return Le(function (e) {
      e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setUTCDate(t.getUTCDate() + 7 * e);
    }, function (t, e) {
      return (e - t) / ni;
    });
  }function Oe(t) {
    if (0 <= t.y && t.y < 100) {
      var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);return e.setFullYear(t.y), e;
    }return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }function qe(t) {
    if (0 <= t.y && t.y < 100) {
      var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));return e.setUTCFullYear(t.y), e;
    }return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }function $e(t) {
    return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }function Pe(t) {
    function e(t, e) {
      return function (n) {
        var r,
            i,
            a,
            u = [],
            o = -1,
            c = 0,
            f = t.length;for (n instanceof Date || (n = new Date(+n)); ++o < f;) {
          37 === t.charCodeAt(o) && (u.push(t.slice(c, o)), null != (i = gi[r = t.charAt(++o)]) ? r = t.charAt(++o) : i = "e" === r ? " " : "0", (a = e[r]) && (r = a(n, i)), u.push(r), c = o + 1);
        }return u.push(t.slice(c, o)), u.join("");
      };
    }function n(t, e) {
      return function (n) {
        var i = $e(1900);if (r(i, t, n += "", 0) != n.length) return null;if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
          "w" in i || (i.w = "W" in i ? 1 : 0);var a = "Z" in i ? qe($e(i.y)).getUTCDay() : e($e(i.y)).getDay();i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (a + 5) % 7 : i.w + 7 * i.U - (a + 6) % 7;
        }return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, qe(i)) : e(i);
      };
    }function r(t, e, n, r) {
      for (var i, a, u = 0, o = e.length, c = n.length; u < o;) {
        if (r >= c) return -1;if (37 === (i = e.charCodeAt(u++))) {
          if (i = e.charAt(u++), !(a = T[i in gi ? e.charAt(u++) : i]) || (r = a(t, n, r)) < 0) return -1;
        } else if (i != n.charCodeAt(r++)) return -1;
      }return r;
    }var i = t.dateTime,
        a = t.date,
        u = t.time,
        o = t.periods,
        c = t.days,
        f = t.shortDays,
        l = t.months,
        s = t.shortMonths,
        h = Ie(o),
        d = Ze(o),
        b = Ie(c),
        p = Ze(c),
        g = Ie(f),
        y = Ze(f),
        m = Ie(l),
        v = Ze(l),
        w = Ie(s),
        M = Ze(s),
        _ = { a: function a(t) {
        return f[t.getDay()];
      }, A: function A(t) {
        return c[t.getDay()];
      }, b: function b(t) {
        return s[t.getMonth()];
      }, B: function B(t) {
        return l[t.getMonth()];
      }, c: null, d: on, e: on, H: cn, I: fn, j: ln, L: sn, m: hn, M: dn, p: function p(t) {
        return o[+(t.getHours() >= 12)];
      }, S: bn, U: pn, w: gn, W: yn, x: null, X: null, y: mn, Y: vn, Z: wn, "%": Ln },
        x = { a: function a(t) {
        return f[t.getUTCDay()];
      }, A: function A(t) {
        return c[t.getUTCDay()];
      }, b: function b(t) {
        return s[t.getUTCMonth()];
      }, B: function B(t) {
        return l[t.getUTCMonth()];
      }, c: null, d: Mn, e: Mn, H: _n, I: xn, j: Tn, L: Cn, m: kn, M: An, p: function p(t) {
        return o[+(t.getUTCHours() >= 12)];
      }, S: Nn, U: Sn, w: Un, W: Dn, x: null, X: null, y: Fn, Y: En, Z: Hn, "%": Ln },
        T = { a: function a(t, e, n) {
        var r = g.exec(e.slice(n));return r ? (t.w = y[r[0].toLowerCase()], n + r[0].length) : -1;
      }, A: function A(t, e, n) {
        var r = b.exec(e.slice(n));return r ? (t.w = p[r[0].toLowerCase()], n + r[0].length) : -1;
      }, b: function b(t, e, n) {
        var r = w.exec(e.slice(n));return r ? (t.m = M[r[0].toLowerCase()], n + r[0].length) : -1;
      }, B: function B(t, e, n) {
        var r = m.exec(e.slice(n));return r ? (t.m = v[r[0].toLowerCase()], n + r[0].length) : -1;
      }, c: function c(t, e, n) {
        return r(t, i, e, n);
      }, d: Qe, e: Qe, H: en, I: en, j: tn, L: an, m: Ke, M: nn, p: function p(t, e, n) {
        var r = h.exec(e.slice(n));return r ? (t.p = d[r[0].toLowerCase()], n + r[0].length) : -1;
      }, S: rn, U: Be, w: Xe, W: We, x: function x(t, e, n) {
        return r(t, a, e, n);
      }, X: function X(t, e, n) {
        return r(t, u, e, n);
      }, y: Je, Y: Ve, Z: Ge, "%": un };return _.x = e(a, _), _.X = e(u, _), _.c = e(i, _), x.x = e(a, x), x.X = e(u, x), x.c = e(i, x), { format: function format(t) {
        var n = e(t += "", _);return n.toString = function () {
          return t;
        }, n;
      }, parse: function parse(t) {
        var e = n(t += "", Oe);return e.toString = function () {
          return t;
        }, e;
      }, utcFormat: function utcFormat(t) {
        var n = e(t += "", x);return n.toString = function () {
          return t;
        }, n;
      }, utcParse: function utcParse(t) {
        var e = n(t, qe);return e.toString = function () {
          return t;
        }, e;
      } };
  }function Re(t, e, n) {
    var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        a = i.length;return r + (a < n ? new Array(n - a + 1).join(e) + i : i);
  }function ze(t) {
    return t.replace(vi, "\\$&");
  }function Ie(t) {
    return new RegExp("^(?:" + t.map(ze).join("|") + ")", "i");
  }function Ze(t) {
    for (var e = {}, n = -1, r = t.length; ++n < r;) {
      e[t[n].toLowerCase()] = n;
    }return e;
  }function Xe(t, e, n) {
    var r = yi.exec(e.slice(n, n + 1));return r ? (t.w = +r[0], n + r[0].length) : -1;
  }function Be(t, e, n) {
    var r = yi.exec(e.slice(n));return r ? (t.U = +r[0], n + r[0].length) : -1;
  }function We(t, e, n) {
    var r = yi.exec(e.slice(n));return r ? (t.W = +r[0], n + r[0].length) : -1;
  }function Ve(t, e, n) {
    var r = yi.exec(e.slice(n, n + 4));return r ? (t.y = +r[0], n + r[0].length) : -1;
  }function Je(t, e, n) {
    var r = yi.exec(e.slice(n, n + 2));return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
  }function Ge(t, e, n) {
    var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(e.slice(n, n + 6));return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
  }function Ke(t, e, n) {
    var r = yi.exec(e.slice(n, n + 2));return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
  }function Qe(t, e, n) {
    var r = yi.exec(e.slice(n, n + 2));return r ? (t.d = +r[0], n + r[0].length) : -1;
  }function tn(t, e, n) {
    var r = yi.exec(e.slice(n, n + 3));return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
  }function en(t, e, n) {
    var r = yi.exec(e.slice(n, n + 2));return r ? (t.H = +r[0], n + r[0].length) : -1;
  }function nn(t, e, n) {
    var r = yi.exec(e.slice(n, n + 2));return r ? (t.M = +r[0], n + r[0].length) : -1;
  }function rn(t, e, n) {
    var r = yi.exec(e.slice(n, n + 2));return r ? (t.S = +r[0], n + r[0].length) : -1;
  }function an(t, e, n) {
    var r = yi.exec(e.slice(n, n + 3));return r ? (t.L = +r[0], n + r[0].length) : -1;
  }function un(t, e, n) {
    var r = mi.exec(e.slice(n, n + 1));return r ? n + r[0].length : -1;
  }function on(t, e) {
    return Re(t.getDate(), e, 2);
  }function cn(t, e) {
    return Re(t.getHours(), e, 2);
  }function fn(t, e) {
    return Re(t.getHours() % 12 || 12, e, 2);
  }function ln(t, e) {
    return Re(1 + ri.count(ui(t), t), e, 3);
  }function sn(t, e) {
    return Re(t.getMilliseconds(), e, 3);
  }function hn(t, e) {
    return Re(t.getMonth() + 1, e, 2);
  }function dn(t, e) {
    return Re(t.getMinutes(), e, 2);
  }function bn(t, e) {
    return Re(t.getSeconds(), e, 2);
  }function pn(t, e) {
    return Re(ii.count(ui(t), t), e, 2);
  }function gn(t) {
    return t.getDay();
  }function yn(t, e) {
    return Re(ai.count(ui(t), t), e, 2);
  }function mn(t, e) {
    return Re(t.getFullYear() % 100, e, 2);
  }function vn(t, e) {
    return Re(t.getFullYear() % 1e4, e, 4);
  }function wn(t) {
    var e = t.getTimezoneOffset();return (e > 0 ? "-" : (e *= -1, "+")) + Re(e / 60 | 0, "0", 2) + Re(e % 60, "0", 2);
  }function Mn(t, e) {
    return Re(t.getUTCDate(), e, 2);
  }function _n(t, e) {
    return Re(t.getUTCHours(), e, 2);
  }function xn(t, e) {
    return Re(t.getUTCHours() % 12 || 12, e, 2);
  }function Tn(t, e) {
    return Re(1 + oi.count(li(t), t), e, 3);
  }function Cn(t, e) {
    return Re(t.getUTCMilliseconds(), e, 3);
  }function kn(t, e) {
    return Re(t.getUTCMonth() + 1, e, 2);
  }function An(t, e) {
    return Re(t.getUTCMinutes(), e, 2);
  }function Nn(t, e) {
    return Re(t.getUTCSeconds(), e, 2);
  }function Sn(t, e) {
    return Re(ci.count(li(t), t), e, 2);
  }function Un(t) {
    return t.getUTCDay();
  }function Dn(t, e) {
    return Re(fi.count(li(t), t), e, 2);
  }function Fn(t, e) {
    return Re(t.getUTCFullYear() % 100, e, 2);
  }function En(t, e) {
    return Re(t.getUTCFullYear() % 1e4, e, 4);
  }function Hn() {
    return "+0000";
  }function Ln() {
    return "%";
  }function Yn(t) {
    return t.match(/.{6}/g).map(function (t) {
      return "#" + t;
    });
  }function jn(t) {
    var e = t.length;return function (n) {
      return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
    };
  }function On(t) {
    return t;
  }function qn(t) {
    return "translate(" + (t + .5) + ",0)";
  }function $n(t) {
    return "translate(0," + (t + .5) + ")";
  }function Pn(t) {
    return function (e) {
      return +t(e);
    };
  }function Rn(t) {
    var e = Math.max(0, t.bandwidth() - 1) / 2;return t.round() && (e = Math.round(e)), function (n) {
      return +t(n) + e;
    };
  }function zn() {
    return !this.__axis;
  }function In(t, e) {
    function n(n) {
      var h = null == i ? e.ticks ? e.ticks.apply(e, r) : e.domain() : i,
          d = null == a ? e.tickFormat ? e.tickFormat.apply(e, r) : On : a,
          b = Math.max(u, 0) + c,
          p = e.range(),
          g = +p[0] + .5,
          y = +p[p.length - 1] + .5,
          m = (e.bandwidth ? Rn : Pn)(e.copy()),
          v = n.selection ? n.selection() : n,
          w = v.selectAll(".domain").data([null]),
          M = v.selectAll(".tick").data(h, e).order(),
          _ = M.exit(),
          x = M.enter().append("g").attr("class", "tick"),
          T = M.select("line"),
          C = M.select("text");w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), M = M.merge(x), T = T.merge(x.append("line").attr("stroke", "#000").attr(l + "2", f * u)), C = C.merge(x.append("text").attr("fill", "#000").attr(l, f * b).attr("dy", t === Mi ? "0em" : t === xi ? "0.71em" : "0.32em")), n !== v && (w = w.transition(n), M = M.transition(n), T = T.transition(n), C = C.transition(n), _ = _.transition(n).attr("opacity", Ci).attr("transform", function (t) {
        return isFinite(t = m(t)) ? s(t) : this.getAttribute("transform");
      }), x.attr("opacity", Ci).attr("transform", function (t) {
        var e = this.parentNode.__axis;return s(e && isFinite(e = e(t)) ? e : m(t));
      })), _.remove(), w.attr("d", t === Ti || t == _i ? "M" + f * o + "," + g + "H0.5V" + y + "H" + f * o : "M" + g + "," + f * o + "V0.5H" + y + "V" + f * o), M.attr("opacity", 1).attr("transform", function (t) {
        return s(m(t));
      }), T.attr(l + "2", f * u), C.attr(l, f * b).text(d), v.filter(zn).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === _i ? "start" : t === Ti ? "end" : "middle"), v.each(function () {
        this.__axis = m;
      });
    }var r = [],
        i = null,
        a = null,
        u = 6,
        o = 6,
        c = 3,
        f = t === Mi || t === Ti ? -1 : 1,
        l = t === Ti || t === _i ? "x" : "y",
        s = t === Mi || t === xi ? qn : $n;return n.scale = function (t) {
      return arguments.length ? (e = t, n) : e;
    }, n.ticks = function () {
      return r = wi.call(arguments), n;
    }, n.tickArguments = function (t) {
      return arguments.length ? (r = null == t ? [] : wi.call(t), n) : r.slice();
    }, n.tickValues = function (t) {
      return arguments.length ? (i = null == t ? null : wi.call(t), n) : i && i.slice();
    }, n.tickFormat = function (t) {
      return arguments.length ? (a = t, n) : a;
    }, n.tickSize = function (t) {
      return arguments.length ? (u = o = +t, n) : u;
    }, n.tickSizeInner = function (t) {
      return arguments.length ? (u = +t, n) : u;
    }, n.tickSizeOuter = function (t) {
      return arguments.length ? (o = +t, n) : o;
    }, n.tickPadding = function (t) {
      return arguments.length ? (c = +t, n) : c;
    }, n;
  }var Zn = "http://www.w3.org/1999/xhtml",
      Xn = { svg: "http://www.w3.org/2000/svg", xhtml: Zn, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      Bn = function Bn(t) {
    return function () {
      return this.matches(t);
    };
  };if ("undefined" != typeof document) {
    var Wn = document.documentElement;if (!Wn.matches) {
      var Vn = Wn.webkitMatchesSelector || Wn.msMatchesSelector || Wn.mozMatchesSelector || Wn.oMatchesSelector;Bn = function Bn(t) {
        return function () {
          return Vn.call(this, t);
        };
      };
    }
  }var Jn = Bn,
      Gn = {},
      Kn = null;"undefined" != typeof document && ("onmouseenter" in document.documentElement || (Gn = { mouseenter: "mouseover", mouseleave: "mouseout" })), N.prototype = { add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      var e = this._names.indexOf(t);e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return this._names.indexOf(t) >= 0;
    } }, V.prototype = { constructor: V, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, e) {
      return this._parent.insertBefore(t, e);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var Qn = "$",
      tr = [null];et.prototype = function () {
    return new et([[document.documentElement]], tr);
  }.prototype = { constructor: et, select: function select(t) {
      "function" != typeof t && (t = g(t));for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) {
        for (var a, u, o = e[i], c = o.length, f = r[i] = new Array(c), l = 0; l < c; ++l) {
          (a = o[l]) && (u = t.call(a, a.__data__, l, o)) && ("__data__" in a && (u.__data__ = a.__data__), f[l] = u);
        }
      }return new et(r, this._parents);
    }, selectAll: function selectAll(t) {
      "function" != typeof t && (t = tt(t));for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a) {
        for (var u, o = e[a], c = o.length, f = 0; f < c; ++f) {
          (u = o[f]) && (r.push(t.call(u, u.__data__, f, o)), i.push(u));
        }
      }return new et(r, i);
    }, filter: function filter(t) {
      "function" != typeof t && (t = Jn(t));for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) {
        for (var a, u = e[i], o = u.length, c = r[i] = [], f = 0; f < o; ++f) {
          (a = u[f]) && t.call(a, a.__data__, f, u) && c.push(a);
        }
      }return new et(r, this._parents);
    }, data: function data(t, e) {
      if (!t) return d = new Array(this.size()), f = -1, this.each(function (t) {
        d[++f] = t;
      }), d;var n = e ? K : G,
          r = this._parents,
          i = this._groups;"function" != typeof t && (t = J(t));for (var a = i.length, u = new Array(a), o = new Array(a), c = new Array(a), f = 0; f < a; ++f) {
        var l = r[f],
            s = i[f],
            h = s.length,
            d = t.call(l, l && l.__data__, f, r),
            b = d.length,
            p = o[f] = new Array(b),
            g = u[f] = new Array(b);n(l, s, p, g, c[f] = new Array(h), d, e);for (var y, m, v = 0, w = 0; v < b; ++v) {
          if (y = p[v]) {
            for (v >= w && (w = v + 1); !(m = g[w]) && ++w < b;) {}y._next = m || null;
          }
        }
      }return u = new et(u, r), u._enter = o, u._exit = c, u;
    }, enter: function enter() {
      return new et(this._enter || this._groups.map(W), this._parents);
    }, exit: function exit() {
      return new et(this._exit || this._groups.map(W), this._parents);
    }, merge: function merge(t) {
      for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), u = new Array(r), o = 0; o < a; ++o) {
        for (var c, f = e[o], l = n[o], s = f.length, h = u[o] = new Array(s), d = 0; d < s; ++d) {
          (c = f[d] || l[d]) && (h[d] = c);
        }
      }for (; o < r; ++o) {
        u[o] = e[o];
      }return new et(u, this._parents);
    }, order: function order() {
      for (var t = this._groups, e = -1, n = t.length; ++e < n;) {
        for (var r, i = t[e], a = i.length - 1, u = i[a]; --a >= 0;) {
          (r = i[a]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
        }
      }return this;
    }, sort: function sort(t) {
      t || (t = B);for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) {
        for (var a, u = e[i], o = u.length, c = r[i] = new Array(o), f = 0; f < o; ++f) {
          (a = u[f]) && (c[f] = a);
        }c.sort(function (e, n) {
          return e && n ? t(e.__data__, n.__data__) : !e - !n;
        });
      }return new et(r, this._parents).order();
    }, call: function call() {
      var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
    }, nodes: function nodes() {
      var t = new Array(this.size()),
          e = -1;return this.each(function () {
        t[++e] = this;
      }), t;
    }, node: function node() {
      for (var t = this._groups, e = 0, n = t.length; e < n; ++e) {
        for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
          var u = r[i];if (u) return u;
        }
      }return null;
    }, size: function size() {
      var t = 0;return this.each(function () {
        ++t;
      }), t;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(t) {
      for (var e = this._groups, n = 0, r = e.length; n < r; ++n) {
        for (var i, a = e[n], u = 0, o = a.length; u < o; ++u) {
          (i = a[u]) && t.call(i, i.__data__, u, a);
        }
      }return this;
    }, attr: function attr(t, n) {
      var r = e(t);if (arguments.length < 2) {
        var i = this.node();return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
      }return this.each((null == n ? r.local ? R : P : "function" == typeof n ? r.local ? X : Z : r.local ? I : z)(r, n));
    }, style: function style(t, e, n) {
      return arguments.length > 1 ? this.each((null == e ? j : "function" == typeof e ? q : O)(t, e, null == n ? "" : n)) : $(this.node(), t);
    }, property: function property(t, e) {
      return arguments.length > 1 ? this.each((null == e ? H : "function" == typeof e ? Y : L)(t, e)) : this.node()[t];
    }, classed: function classed(t, e) {
      var n = k(t + "");if (arguments.length < 2) {
        for (var r = A(this.node()), i = -1, a = n.length; ++i < a;) {
          if (!r.contains(n[i])) return !1;
        }return !0;
      }return this.each(("function" == typeof e ? E : e ? D : F)(n, e));
    }, text: function text(t) {
      return arguments.length ? this.each(null == t ? x : ("function" == typeof t ? C : T)(t)) : this.node().textContent;
    }, html: function html(t) {
      return arguments.length ? this.each(null == t ? w : ("function" == typeof t ? _ : M)(t)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each(v);
    }, lower: function lower() {
      return this.each(m);
    }, append: function append(t) {
      var e = "function" == typeof t ? t : i(t);return this.select(function () {
        return this.appendChild(e.apply(this, arguments));
      });
    }, insert: function insert(t, e) {
      var n = "function" == typeof t ? t : i(t),
          r = null == e ? y : "function" == typeof e ? e : g(e);return this.select(function () {
        return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(b);
    }, datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    }, on: function on(t, e, n) {
      var r,
          i,
          a = o(t + ""),
          u = a.length;{
        if (!(arguments.length < 2)) {
          for (l = e ? f : c, null == n && (n = !1), r = 0; r < u; ++r) {
            this.each(l(a[r], e, n));
          }return this;
        }var l = this.node().__on;if (l) for (var s, h = 0, d = l.length; h < d; ++h) {
          for (r = 0, s = l[h]; r < u; ++r) {
            if ((i = a[r]).type === s.type && i.name === s.name) return s.value;
          }
        }
      }
    }, dispatch: function dispatch(t, e) {
      return this.each(("function" == typeof e ? d : h)(t, e));
    } };nt.prototype = rt.prototype = { constructor: nt, has: function has(t) {
      return "$" + t in this;
    }, get: function get(t) {
      return this["$" + t];
    }, set: function set(t, e) {
      return this["$" + t] = e, this;
    }, remove: function remove(t) {
      var e = "$" + t;return e in this && delete this[e];
    }, clear: function clear() {
      for (var t in this) {
        "$" === t[0] && delete this[t];
      }
    }, keys: function keys() {
      var t = [];for (var e in this) {
        "$" === e[0] && t.push(e.slice(1));
      }return t;
    }, values: function values() {
      var t = [];for (var e in this) {
        "$" === e[0] && t.push(this[e]);
      }return t;
    }, entries: function entries() {
      var t = [];for (var e in this) {
        "$" === e[0] && t.push({ key: e.slice(1), value: this[e] });
      }return t;
    }, size: function size() {
      var t = 0;for (var e in this) {
        "$" === e[0] && ++t;
      }return t;
    }, empty: function empty() {
      for (var t in this) {
        if ("$" === t[0]) return !1;
      }return !0;
    }, each: function each(t) {
      for (var e in this) {
        "$" === e[0] && t(this[e], e.slice(1), this);
      }
    } };rt.prototype;var er = { value: function value() {} };ft.prototype = ct.prototype = { constructor: ft, on: function on(t, e) {
      var n,
          r = this._,
          i = lt(t + "", r),
          a = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);for (; ++a < u;) {
            if (n = (t = i[a]).type) r[n] = ht(r[n], t.name, e);else if (null == e) for (n in r) {
              r[n] = ht(r[n], t.name, null);
            }
          }return this;
        }for (; ++a < u;) {
          if ((n = (t = i[a]).type) && (n = st(r[n], t.name))) return n;
        }
      }
    }, copy: function copy() {
      var t = {},
          e = this._;for (var n in e) {
        t[n] = e[n].slice();
      }return new ft(t);
    }, call: function call(t, e) {
      if ((n = arguments.length - 2) > 0) for (var n, r, i = new Array(n), a = 0; a < n; ++a) {
        i[a] = arguments[a + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (a = 0, n = (r = this._[t]).length; a < n; ++a) {
        r[a].value.apply(e, i);
      }
    }, apply: function apply(t, e, n) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, a = r.length; i < a; ++i) {
        r[i].value.apply(e, n);
      }
    } };var nr = vt(",").parse,
      rr = (vt("\t"), function (t, e) {
    return function (n, r, i) {
      arguments.length < 3 && (i = r, r = null);var a = dt(n).mimeType(t);return a.row = function (t) {
        return arguments.length ? a.response(wt(e, r = t)) : r;
      }, a.row(r), i ? a.get(i) : a;
    };
  }("text/csv", nr)),
      ir = function (t) {
    return 1 === t.length && (t = _t(t)), { left: function left(e, n, r, i) {
        for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
          var a = r + i >>> 1;t(e[a], n) < 0 ? r = a + 1 : i = a;
        }return r;
      }, right: function right(e, n, r, i) {
        for (null == r && (r = 0), null == i && (i = e.length); r < i;) {
          var a = r + i >>> 1;t(e[a], n) > 0 ? i = a : r = a + 1;
        }return r;
      } };
  }(Mt).right,
      ar = Math.sqrt(50),
      ur = Math.sqrt(10),
      or = Math.sqrt(2),
      cr = Array.prototype,
      fr = cr.map,
      lr = cr.slice,
      sr = "\\s*([+-]?\\d+)\\s*",
      hr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      dr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      br = /^#([0-9a-f]{3})$/,
      pr = /^#([0-9a-f]{6})$/,
      gr = new RegExp("^rgb\\(" + [sr, sr, sr] + "\\)$"),
      yr = new RegExp("^rgb\\(" + [dr, dr, dr] + "\\)$"),
      mr = new RegExp("^rgba\\(" + [sr, sr, sr, hr] + "\\)$"),
      vr = new RegExp("^rgba\\(" + [dr, dr, dr, hr] + "\\)$"),
      wr = new RegExp("^hsl\\(" + [hr, dr, dr] + "\\)$"),
      Mr = new RegExp("^hsla\\(" + [hr, dr, dr, hr] + "\\)$"),
      _r = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };kt(Nt, St, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), kt(Ht, Et, At(Nt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ht(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Ht(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), kt(jt, function (t, e, n, r) {
    return 1 === arguments.length ? Yt(t) : new jt(t, e, n, null == r ? 1 : r);
  }, At(Nt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new jt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new jt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          n = this.l,
          r = n + (n < .5 ? n : 1 - n) * e,
          i = 2 * n - r;return new Ht(Ot(t >= 240 ? t - 240 : t + 120, i, r), Ot(t, i, r), Ot(t < 120 ? t + 240 : t - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var xr = Math.PI / 180,
      Tr = 180 / Math.PI,
      Cr = .95047,
      kr = 1,
      Ar = 1.08883,
      Nr = 4 / 29,
      Sr = 6 / 29,
      Ur = 3 * Sr * Sr,
      Dr = Sr * Sr * Sr;kt($t, function (t, e, n, r) {
    return 1 === arguments.length ? qt(t) : new $t(t, e, n, null == r ? 1 : r);
  }, At(Nt, { brighter: function brighter(t) {
      return new $t(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new $t(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          e = isNaN(this.a) ? t : t + this.a / 500,
          n = isNaN(this.b) ? t : t - this.b / 200;return t = kr * Rt(t), e = Cr * Rt(e), n = Ar * Rt(n), new Ht(zt(3.2404542 * e - 1.5371385 * t - .4985314 * n), zt(-.969266 * e + 1.8760108 * t + .041556 * n), zt(.0556434 * e - .2040259 * t + 1.0572252 * n), this.opacity);
    } })), kt(Xt, function (t, e, n, r) {
    return 1 === arguments.length ? Zt(t) : new Xt(t, e, n, null == r ? 1 : r);
  }, At(Nt, { brighter: function brighter(t) {
      return new Xt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new Xt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return qt(this).rgb();
    } }));var Fr = -.14861,
      Er = 1.78277,
      Hr = -.29227,
      Lr = -.90649,
      Yr = 1.97294,
      jr = Yr * Lr,
      Or = Yr * Er,
      qr = Er * Hr - Lr * Fr;kt(Vt, Wt, At(Nt, { brighter: function brighter(t) {
      return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Vt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Vt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * xr,
          e = +this.l,
          n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
          r = Math.cos(t),
          i = Math.sin(t);return new Ht(255 * (e + n * (Fr * r + Er * i)), 255 * (e + n * (Hr * r + Lr * i)), 255 * (e + n * (Yr * r)), this.opacity);
    } }));var $r = function t(e) {
    function n(t, e) {
      var n = r((t = Et(t)).r, (e = Et(e)).r),
          i = r(t.g, e.g),
          a = r(t.b, e.b),
          u = te(t.opacity, e.opacity);return function (e) {
        return t.r = n(e), t.g = i(e), t.b = a(e), t.opacity = u(e), t + "";
      };
    }var r = Qt(e);return n.gamma = t, n;
  }(1),
      Pr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Rr = new RegExp(Pr.source, "g");le(function (t, e) {
    var n = e - t;return n ? Gt(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Jt(isNaN(t) ? e : t);
  });var zr,
      Ir = le(te),
      Zr = [0, 1],
      Xr = { "": function _(t, e) {
      t: for (var n, r = (t = t.toPrecision(e)).length, i = 1, a = -1; i < r; ++i) {
        switch (t[i]) {case ".":
            a = n = i;break;case "0":
            0 === a && (a = i), n = i;break;case "e":
            break t;default:
            a > 0 && (a = 0);}
      }return a > 0 ? t.slice(0, a) + t.slice(n + 1) : t;
    }, "%": function _(t, e) {
      return (100 * t).toFixed(e);
    }, b: function b(t) {
      return Math.round(t).toString(2);
    }, c: function c(t) {
      return t + "";
    }, d: function d(t) {
      return Math.round(t).toString(10);
    }, e: function e(t, _e2) {
      return t.toExponential(_e2);
    }, f: function f(t, e) {
      return t.toFixed(e);
    }, g: function g(t, e) {
      return t.toPrecision(e);
    }, o: function o(t) {
      return Math.round(t).toString(8);
    }, p: function p(t, e) {
      return Ce(100 * t, e);
    }, r: Ce, s: function s(t, e) {
      var n = Me(t, e);if (!n) return t + "";var r = n[0],
          i = n[1],
          a = i - (zr = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          u = r.length;return a === u ? r : a > u ? r + new Array(a - u + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Me(t, Math.max(0, e + a - 1))[0];
    }, X: function X(t) {
      return Math.round(t).toString(16).toUpperCase();
    }, x: function x(t) {
      return Math.round(t).toString(16);
    } },
      Br = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;ke.prototype = Ae.prototype, Ae.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
  };var Wr,
      Vr,
      Jr,
      Gr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];!function (t) {
    Wr = Ne(t), Vr = Wr.format, Jr = Wr.formatPrefix;
  }({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });var Kr = new Date(),
      Qr = new Date(),
      ti = Le(function () {}, function (t, e) {
    t.setTime(+t + e);
  }, function (t, e) {
    return e - t;
  });ti.every = function (t) {
    return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Le(function (e) {
      e.setTime(Math.floor(e / t) * t);
    }, function (e, n) {
      e.setTime(+e + n * t);
    }, function (e, n) {
      return (n - e) / t;
    }) : ti : null;
  };var ei = 6e4,
      ni = 6048e5,
      ri = (Le(function (t) {
    t.setTime(1e3 * Math.floor(t / 1e3));
  }, function (t, e) {
    t.setTime(+t + 1e3 * e);
  }, function (t, e) {
    return (e - t) / 1e3;
  }, function (t) {
    return t.getUTCSeconds();
  }), Le(function (t) {
    t.setTime(Math.floor(t / ei) * ei);
  }, function (t, e) {
    t.setTime(+t + e * ei);
  }, function (t, e) {
    return (e - t) / ei;
  }, function (t) {
    return t.getMinutes();
  }), Le(function (t) {
    var e = t.getTimezoneOffset() * ei % 36e5;e < 0 && (e += 36e5), t.setTime(36e5 * Math.floor((+t - e) / 36e5) + e);
  }, function (t, e) {
    t.setTime(+t + 36e5 * e);
  }, function (t, e) {
    return (e - t) / 36e5;
  }, function (t) {
    return t.getHours();
  }), Le(function (t) {
    t.setHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setDate(t.getDate() + e);
  }, function (t, e) {
    return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * ei) / 864e5;
  }, function (t) {
    return t.getDate() - 1;
  })),
      ii = Ye(0),
      ai = Ye(1),
      ui = (Le(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setMonth(t.getMonth() + e);
  }, function (t, e) {
    return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }), Le(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setFullYear(t.getFullYear() + e);
  }, function (t, e) {
    return e.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  }));ui.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Le(function (e) {
      e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    }, function (e, n) {
      e.setFullYear(e.getFullYear() + n * t);
    }) : null;
  };Le(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, e) {
    t.setTime(+t + e * ei);
  }, function (t, e) {
    return (e - t) / ei;
  }, function (t) {
    return t.getUTCMinutes();
  }), Le(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, e) {
    t.setTime(+t + 36e5 * e);
  }, function (t, e) {
    return (e - t) / 36e5;
  }, function (t) {
    return t.getUTCHours();
  });var oi = Le(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setUTCDate(t.getUTCDate() + e);
  }, function (t, e) {
    return (e - t) / 864e5;
  }, function (t) {
    return t.getUTCDate() - 1;
  }),
      ci = je(0),
      fi = je(1),
      li = (Le(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setUTCMonth(t.getUTCMonth() + e);
  }, function (t, e) {
    return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }), Le(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setUTCFullYear(t.getUTCFullYear() + e);
  }, function (t, e) {
    return e.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  }));li.every = function (t) {
    return isFinite(t = Math.floor(t)) && t > 0 ? Le(function (e) {
      e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    }, function (e, n) {
      e.setUTCFullYear(e.getUTCFullYear() + n * t);
    }) : null;
  };var si,
      hi,
      di,
      bi,
      pi,
      gi = { "-": "", _: " ", 0: "0" },
      yi = /^\s*\d+/,
      mi = /^%/,
      vi = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;!function (t) {
    si = Pe(t), hi = si.format, di = si.parse, bi = si.utcFormat, pi = si.utcParse;
  }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });Date.prototype.toISOString || bi("%Y-%m-%dT%H:%M:%S.%LZ"), +new Date("2000-01-01T00:00:00.000Z") || pi("%Y-%m-%dT%H:%M:%S.%LZ");Yn("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Yn("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), Yn("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), Yn("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Ir(Wt(300, .5, 0), Wt(-240, .5, 1));Ir(Wt(-100, .75, .35), Wt(80, 1.5, .8)), Ir(Wt(260, .75, .35), Wt(80, 1.5, .8)), Wt();jn(Yn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));jn(Yn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), jn(Yn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), jn(Yn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));var wi = Array.prototype.slice,
      Mi = 1,
      _i = 2,
      xi = 3,
      Ti = 4,
      Ci = 1e-6;t.select = function (t) {
    return "string" == typeof t ? new et([[document.querySelector(t)]], [document.documentElement]) : new et([[t]], tr);
  }, t.selectAll = function (t) {
    return "string" == typeof t ? new et([document.querySelectorAll(t)], [document.documentElement]) : new et([null == t ? [] : t], tr);
  }, t.csv = rr, t.scaleLinear = He, t.nest = function () {
    function t(e, i, u, o) {
      if (i >= a.length) return null != n && e.sort(n), null != r ? r(e) : e;for (var c, f, l, s = -1, h = e.length, d = a[i++], b = rt(), p = u(); ++s < h;) {
        (l = b.get(c = d(f = e[s]) + "")) ? l.push(f) : b.set(c, [f]);
      }return b.each(function (e, n) {
        o(p, n, t(e, i, u, o));
      }), p;
    }function e(t, n) {
      if (++n > a.length) return t;var i,
          o = u[n - 1];return null != r && n >= a.length ? i = t.entries() : (i = [], t.each(function (t, r) {
        i.push({ key: r, values: e(t, n) });
      })), null != o ? i.sort(function (t, e) {
        return o(t.key, e.key);
      }) : i;
    }var n,
        r,
        i,
        a = [],
        u = [];return i = { object: function object(e) {
        return t(e, 0, it, at);
      }, map: function map(e) {
        return t(e, 0, ut, ot);
      }, entries: function entries(n) {
        return e(t(n, 0, ut, ot), 0);
      }, key: function key(t) {
        return a.push(t), i;
      }, sortKeys: function sortKeys(t) {
        return u[a.length - 1] = t, i;
      }, sortValues: function sortValues(t) {
        return n = t, i;
      }, rollup: function rollup(t) {
        return r = t, i;
      } };
  }, t.axisTop = function (t) {
    return In(Mi, t);
  }, t.axisRight = function (t) {
    return In(_i, t);
  }, t.axisBottom = function (t) {
    return In(xi, t);
  }, t.axisLeft = function (t) {
    return In(Ti, t);
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TriangleBarGraphic = __webpack_require__(2);

var d3 = __webpack_require__(0);

d3.csv('src/data/restricted-dietary-requirements.csv', function (error, data) {
  if (error) throw error;

  data.map(function (d) {
    // coerce to numerals
    d.followers_pct = parseInt(d.followers.replace(/\%/g, ''));
  });

  // nest data on diets
  var dietData = d3.nest().key(function (d) {
    return d.diet;
  }).entries(data);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dietData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var diet = _step.value;

      console.log(diet);
      new _TriangleBarGraphic.TriangleBar('#graph', diet, { top: 20, right: 10, bottom: 20, left: 10 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).init();
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

var TriangleBar = exports.TriangleBar = function () {
  function TriangleBar(el, d, m, w, h) {
    _classCallCheck(this, TriangleBar);

    this.mount = el;
    this.data = d;
    this.margin = m;
    this.width = w - this.margin.right - this.margin.left;
    this.height = h - this.margin.bottom - this.margin.top;
  }

  _createClass(TriangleBar, [{
    key: 'init',
    value: function init() {
      // mount svg element to DOM
      var graph = d3.select(this.mount).append('svg').attr('width', this.width + this.margin.right + this.margin.left).attr('height', this.height + this.margin.bottom + this.margin.top).append('g').attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');

      graph.append('rect').attr('width', this.width).attr('height', this.height).attr('stroke', '#444');

      console.log(this.data);
    }
  }]);

  return TriangleBar;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map