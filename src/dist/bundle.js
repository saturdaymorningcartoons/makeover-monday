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

!function (n, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(n.d3 = {});
}(undefined, function (n) {
  "use strict";
  function t(n) {
    var t = n += "",
        e = t.indexOf(":");return e >= 0 && "xmlns" !== (t = n.slice(0, e)) && (n = n.slice(e + 1)), Ve.hasOwnProperty(t) ? { space: Ve[t], local: n } : n;
  }function e(n) {
    return function () {
      var t = this.ownerDocument,
          e = this.namespaceURI;return e === We && t.documentElement.namespaceURI === We ? t.createElement(n) : t.createElementNS(e, n);
    };
  }function r(n) {
    return function () {
      return this.ownerDocument.createElementNS(n.space, n.local);
    };
  }function i(n) {
    var i = t(n);return (i.local ? r : e)(i);
  }function a(n, t, e) {
    return n = u(n, t, e), function (t) {
      var e = t.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || n.call(this, t);
    };
  }function u(n, t, e) {
    return function (r) {
      var i = tr;tr = r;try {
        n.call(this, this.__data__, t, e);
      } finally {
        tr = i;
      }
    };
  }function o(n) {
    return n.trim().split(/^|\s+/).map(function (n) {
      var t = "",
          e = n.indexOf(".");return e >= 0 && (t = n.slice(e + 1), n = n.slice(0, e)), { type: n, name: t };
    });
  }function c(n) {
    return function () {
      var t = this.__on;if (t) {
        for (var e, r = 0, i = -1, a = t.length; r < a; ++r) {
          e = t[r], n.type && e.type !== n.type || e.name !== n.name ? t[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }++i ? t.length = i : delete this.__on;
      }
    };
  }function f(n, t, e) {
    var r = nr.hasOwnProperty(n.type) ? a : u;return function (i, a, u) {
      var o,
          c = this.__on,
          f = r(t, a, u);if (c) for (var l = 0, s = c.length; l < s; ++l) {
        if ((o = c[l]).type === n.type && o.name === n.name) return this.removeEventListener(o.type, o.listener, o.capture), this.addEventListener(o.type, o.listener = f, o.capture = e), void (o.value = t);
      }this.addEventListener(n.type, f, e), o = { type: n.type, name: n.name, value: t, listener: f, capture: e }, c ? c.push(o) : this.__on = [o];
    };
  }function l(n) {
    return n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView;
  }function s(n, t, e) {
    var r = l(n),
        i = r.CustomEvent;"function" == typeof i ? i = new i(t, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(t, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(t, !1, !1)), n.dispatchEvent(i);
  }function h(n, t) {
    return function () {
      return s(this, n, t);
    };
  }function d(n, t) {
    return function () {
      return s(this, n, t.apply(this, arguments));
    };
  }function b() {
    var n = this.parentNode;n && n.removeChild(this);
  }function p() {}function g(n) {
    return null == n ? p : function () {
      return this.querySelector(n);
    };
  }function m() {
    return null;
  }function y() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function v() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function w() {
    this.innerHTML = "";
  }function M(n) {
    return function () {
      this.innerHTML = n;
    };
  }function x(n) {
    return function () {
      var t = n.apply(this, arguments);this.innerHTML = null == t ? "" : t;
    };
  }function _() {
    this.textContent = "";
  }function T(n) {
    return function () {
      this.textContent = n;
    };
  }function C(n) {
    return function () {
      var t = n.apply(this, arguments);this.textContent = null == t ? "" : t;
    };
  }function k(n) {
    return n.trim().split(/^|\s+/);
  }function A(n) {
    return n.classList || new N(n);
  }function N(n) {
    this._node = n, this._names = k(n.getAttribute("class") || "");
  }function S(n, t) {
    for (var e = A(n), r = -1, i = t.length; ++r < i;) {
      e.add(t[r]);
    }
  }function U(n, t) {
    for (var e = A(n), r = -1, i = t.length; ++r < i;) {
      e.remove(t[r]);
    }
  }function D(n) {
    return function () {
      S(this, n);
    };
  }function F(n) {
    return function () {
      U(this, n);
    };
  }function E(n, t) {
    return function () {
      (t.apply(this, arguments) ? S : U)(this, n);
    };
  }function H(n) {
    return function () {
      delete this[n];
    };
  }function L(n, t) {
    return function () {
      this[n] = t;
    };
  }function Y(n, t) {
    return function () {
      var e = t.apply(this, arguments);null == e ? delete this[n] : this[n] = e;
    };
  }function O(n) {
    return function () {
      this.style.removeProperty(n);
    };
  }function j(n, t, e) {
    return function () {
      this.style.setProperty(n, t, e);
    };
  }function q(n, t, e) {
    return function () {
      var r = t.apply(this, arguments);null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e);
    };
  }function $(n, t) {
    return n.style.getPropertyValue(t) || l(n).getComputedStyle(n, null).getPropertyValue(t);
  }function P(n) {
    return function () {
      this.removeAttribute(n);
    };
  }function R(n) {
    return function () {
      this.removeAttributeNS(n.space, n.local);
    };
  }function z(n, t) {
    return function () {
      this.setAttribute(n, t);
    };
  }function I(n, t) {
    return function () {
      this.setAttributeNS(n.space, n.local, t);
    };
  }function Z(n, t) {
    return function () {
      var e = t.apply(this, arguments);null == e ? this.removeAttribute(n) : this.setAttribute(n, e);
    };
  }function X(n, t) {
    return function () {
      var e = t.apply(this, arguments);null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e);
    };
  }function B(n, t) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }function W(n) {
    return new Array(n.length);
  }function V(n, t) {
    this.ownerDocument = n.ownerDocument, this.namespaceURI = n.namespaceURI, this._next = null, this._parent = n, this.__data__ = t;
  }function J(n) {
    return function () {
      return n;
    };
  }function G(n, t, e, r, i, a) {
    for (var u, o = 0, c = t.length, f = a.length; o < f; ++o) {
      (u = t[o]) ? (u.__data__ = a[o], r[o] = u) : e[o] = new V(n, a[o]);
    }for (; o < c; ++o) {
      (u = t[o]) && (i[o] = u);
    }
  }function K(n, t, e, r, i, a, u) {
    var o,
        c,
        f,
        l = {},
        s = t.length,
        h = a.length,
        d = new Array(s);for (o = 0; o < s; ++o) {
      (c = t[o]) && (d[o] = f = er + u.call(c, c.__data__, o, t), f in l ? i[o] = c : l[f] = c);
    }for (o = 0; o < h; ++o) {
      (c = l[f = er + u.call(n, a[o], o, a)]) ? (r[o] = c, c.__data__ = a[o], l[f] = null) : e[o] = new V(n, a[o]);
    }for (o = 0; o < s; ++o) {
      (c = t[o]) && l[d[o]] === c && (i[o] = c);
    }
  }function Q() {
    return [];
  }function nn(n) {
    return null == n ? Q : function () {
      return this.querySelectorAll(n);
    };
  }function tn(n, t) {
    this._groups = n, this._parents = t;
  }function en() {}function rn(n, t) {
    var e = new en();if (n instanceof en) n.each(function (n, t) {
      e.set(t, n);
    });else if (Array.isArray(n)) {
      var r,
          i = -1,
          a = n.length;if (null == t) for (; ++i < a;) {
        e.set(i, n[i]);
      } else for (; ++i < a;) {
        e.set(t(r = n[i], i, n), r);
      }
    } else if (n) for (var u in n) {
      e.set(u, n[u]);
    }return e;
  }function an() {
    return {};
  }function un(n, t, e) {
    n[t] = e;
  }function on() {
    return rn();
  }function cn(n, t, e) {
    n.set(t, e);
  }function fn() {
    for (var n, t = 0, e = arguments.length, r = {}; t < e; ++t) {
      if (!(n = arguments[t] + "") || n in r) throw new Error("illegal type: " + n);r[n] = [];
    }return new ln(r);
  }function ln(n) {
    this._ = n;
  }function sn(n, t) {
    return n.trim().split(/^|\s+/).map(function (n) {
      var e = "",
          r = n.indexOf(".");if (r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);return { type: n, name: e };
    });
  }function hn(n, t) {
    for (var e, r = 0, i = n.length; r < i; ++r) {
      if ((e = n[r]).name === t) return e.value;
    }
  }function dn(n, t, e) {
    for (var r = 0, i = n.length; r < i; ++r) {
      if (n[r].name === t) {
        n[r] = ir, n = n.slice(0, r).concat(n.slice(r + 1));break;
      }
    }return null != e && n.push({ name: t, value: e }), n;
  }function bn(n, t) {
    function e(n) {
      var t,
          e = f.status;if (!e && gn(f) || e >= 200 && e < 300 || 304 === e) {
        if (a) try {
          t = a.call(r, f);
        } catch (n) {
          return void o.call("error", r, n);
        } else t = f;o.call("load", r, t);
      } else o.call("error", r, n);
    }var r,
        i,
        a,
        u,
        o = fn("beforesend", "progress", "load", "error"),
        c = rn(),
        f = new XMLHttpRequest(),
        l = null,
        s = null,
        h = 0;if ("undefined" == typeof XDomainRequest || "withCredentials" in f || !/^(http(s)?:)?\/\//.test(n) || (f = new XDomainRequest()), "onload" in f ? f.onload = f.onerror = f.ontimeout = e : f.onreadystatechange = function (n) {
      f.readyState > 3 && e(n);
    }, f.onprogress = function (n) {
      o.call("progress", r, n);
    }, r = { header: function header(n, t) {
        return n = (n + "").toLowerCase(), arguments.length < 2 ? c.get(n) : (null == t ? c.remove(n) : c.set(n, t + ""), r);
      }, mimeType: function mimeType(n) {
        return arguments.length ? (i = null == n ? null : n + "", r) : i;
      }, responseType: function responseType(n) {
        return arguments.length ? (u = n, r) : u;
      }, timeout: function timeout(n) {
        return arguments.length ? (h = +n, r) : h;
      }, user: function user(n) {
        return arguments.length < 1 ? l : (l = null == n ? null : n + "", r);
      }, password: function password(n) {
        return arguments.length < 1 ? s : (s = null == n ? null : n + "", r);
      }, response: function response(n) {
        return a = n, r;
      }, get: function get(n, t) {
        return r.send("GET", n, t);
      }, post: function post(n, t) {
        return r.send("POST", n, t);
      }, send: function send(t, e, a) {
        return f.open(t, n, !0, l, s), null == i || c.has("accept") || c.set("accept", i + ",*/*"), f.setRequestHeader && c.each(function (n, t) {
          f.setRequestHeader(t, n);
        }), null != i && f.overrideMimeType && f.overrideMimeType(i), null != u && (f.responseType = u), h > 0 && (f.timeout = h), null == a && "function" == typeof e && (a = e, e = null), null != a && 1 === a.length && (a = pn(a)), null != a && r.on("error", a).on("load", function (n) {
          a(null, n);
        }), o.call("beforesend", r, f), f.send(null == e ? null : e), r;
      }, abort: function abort() {
        return f.abort(), r;
      }, on: function on() {
        var n = o.on.apply(o, arguments);return n === o ? r : n;
      } }, null != t) {
      if ("function" != typeof t) throw new Error("invalid callback: " + t);return r.get(t);
    }return r;
  }function pn(n) {
    return function (t, e) {
      n(null == t ? e : null);
    };
  }function gn(n) {
    var t = n.responseType;return t && "text" !== t ? n.response : n.responseText;
  }function mn(n) {
    return new Function("d", "return {" + n.map(function (n, t) {
      return JSON.stringify(n) + ": d[" + t + "]";
    }).join(",") + "}");
  }function yn(n, t) {
    var e = mn(n);return function (r, i) {
      return t(e(r), i, n);
    };
  }function vn(n) {
    var t = Object.create(null),
        e = [];return n.forEach(function (n) {
      for (var r in n) {
        r in t || e.push(t[r] = r);
      }
    }), e;
  }function wn(n) {
    function t(n, t) {
      function e() {
        if (l >= f) return o;if (i) return i = !1, u;var t,
            e = l;if (34 === n.charCodeAt(e)) {
          for (var r = e; r++ < f;) {
            if (34 === n.charCodeAt(r)) {
              if (34 !== n.charCodeAt(r + 1)) break;++r;
            }
          }return l = r + 2, 13 === (t = n.charCodeAt(r + 1)) ? (i = !0, 10 === n.charCodeAt(r + 2) && ++l) : 10 === t && (i = !0), n.slice(e + 1, r).replace(/""/g, '"');
        }for (; l < f;) {
          var c = 1;if (10 === (t = n.charCodeAt(l++))) i = !0;else if (13 === t) i = !0, 10 === n.charCodeAt(l) && (++l, ++c);else if (t !== a) continue;return n.slice(e, l - c);
        }return n.slice(e);
      }for (var r, i, u = {}, o = {}, c = [], f = n.length, l = 0, s = 0; (r = e()) !== o;) {
        for (var h = []; r !== u && r !== o;) {
          h.push(r), r = e();
        }t && null == (h = t(h, s++)) || c.push(h);
      }return c;
    }function e(t) {
      return t.map(r).join(n);
    }function r(n) {
      return null == n ? "" : i.test(n += "") ? '"' + n.replace(/\"/g, '""') + '"' : n;
    }var i = new RegExp('["' + n + "\n\r]"),
        a = n.charCodeAt(0);return { parse: function parse(n, e) {
        var r,
            i,
            a = t(n, function (n, t) {
          if (r) return r(n, t - 1);i = n, r = e ? yn(n, e) : mn(n);
        });return a.columns = i, a;
      }, parseRows: t, format: function format(t, e) {
        return null == e && (e = vn(t)), [e.map(r).join(n)].concat(t.map(function (t) {
          return e.map(function (n) {
            return r(t[n]);
          }).join(n);
        })).join("\n");
      }, formatRows: function formatRows(n) {
        return n.map(e).join("\n");
      } };
  }function Mn(n, t) {
    return function (e) {
      return n(e.responseText, t);
    };
  }function xn(n, t) {
    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
  }function _n(n) {
    return function (t, e) {
      return xn(n(t), e);
    };
  }function Tn(n, t, e) {
    n = +n, t = +t, e = (i = arguments.length) < 2 ? (t = n, n = 0, 1) : i < 3 ? 1 : +e;for (var r = -1, i = 0 | Math.max(0, Math.ceil((t - n) / e)), a = new Array(i); ++r < i;) {
      a[r] = n + r * e;
    }return a;
  }function Cn(n, t, e) {
    var r,
        i,
        a,
        u = t < n,
        o = -1;if (u && (r = n, n = t, t = r), 0 === (a = kn(n, t, e)) || !isFinite(a)) return [];if (a > 0) for (n = Math.ceil(n / a), t = Math.floor(t / a), i = new Array(r = Math.ceil(t - n + 1)); ++o < r;) {
      i[o] = (n + o) * a;
    } else for (n = Math.floor(n * a), t = Math.ceil(t * a), i = new Array(r = Math.ceil(n - t + 1)); ++o < r;) {
      i[o] = (n - o) / a;
    }return u && i.reverse(), i;
  }function kn(n, t, e) {
    var r = (t - n) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        a = r / Math.pow(10, i);return i >= 0 ? (a >= cr ? 10 : a >= fr ? 5 : a >= lr ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (a >= cr ? 10 : a >= fr ? 5 : a >= lr ? 2 : 1);
  }function An(n, t, e) {
    var r = Math.abs(t - n) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        a = r / i;return a >= cr ? i *= 10 : a >= fr ? i *= 5 : a >= lr && (i *= 2), t < n ? -i : i;
  }function Nn(n) {
    function t(t) {
      var a = t + "",
          u = e.get(a);if (!u) {
        if (i !== br) return i;e.set(a, u = r.push(t));
      }return n[(u - 1) % n.length];
    }var e = rn(),
        r = [],
        i = br;return n = null == n ? [] : dr.call(n), t.domain = function (n) {
      if (!arguments.length) return r.slice();r = [], e = rn();for (var i, a, u = -1, o = n.length; ++u < o;) {
        e.has(a = (i = n[u]) + "") || e.set(a, r.push(i));
      }return t;
    }, t.range = function (e) {
      return arguments.length ? (n = dr.call(e), t) : n.slice();
    }, t.unknown = function (n) {
      return arguments.length ? (i = n, t) : i;
    }, t.copy = function () {
      return Nn().domain(r).range(n).unknown(i);
    }, t;
  }function Sn() {
    function n() {
      var n = i().length,
          r = u[1] < u[0],
          s = u[r - 0],
          h = u[1 - r];t = (h - s) / Math.max(1, n - c + 2 * f), o && (t = Math.floor(t)), s += (h - s - t * (n - c)) * l, e = t * (1 - c), o && (s = Math.round(s), e = Math.round(e));var d = Tn(n).map(function (n) {
        return s + t * n;
      });return a(r ? d.reverse() : d);
    }var t,
        e,
        r = Nn().unknown(void 0),
        i = r.domain,
        a = r.range,
        u = [0, 1],
        o = !1,
        c = 0,
        f = 0,
        l = .5;return delete r.unknown, r.domain = function (t) {
      return arguments.length ? (i(t), n()) : i();
    }, r.range = function (t) {
      return arguments.length ? (u = [+t[0], +t[1]], n()) : u.slice();
    }, r.rangeRound = function (t) {
      return u = [+t[0], +t[1]], o = !0, n();
    }, r.bandwidth = function () {
      return e;
    }, r.step = function () {
      return t;
    }, r.round = function (t) {
      return arguments.length ? (o = !!t, n()) : o;
    }, r.padding = function (t) {
      return arguments.length ? (c = f = Math.max(0, Math.min(1, t)), n()) : c;
    }, r.paddingInner = function (t) {
      return arguments.length ? (c = Math.max(0, Math.min(1, t)), n()) : c;
    }, r.paddingOuter = function (t) {
      return arguments.length ? (f = Math.max(0, Math.min(1, t)), n()) : f;
    }, r.align = function (t) {
      return arguments.length ? (l = Math.max(0, Math.min(1, t)), n()) : l;
    }, r.copy = function () {
      return Sn().domain(i()).range(u).round(o).paddingInner(c).paddingOuter(f).align(l);
    }, n();
  }function Un(n, t, e) {
    n.prototype = t.prototype = e, e.constructor = n;
  }function Dn(n, t) {
    var e = Object.create(n.prototype);for (var r in t) {
      e[r] = t[r];
    }return e;
  }function Fn() {}function En(n) {
    var t;return n = (n + "").trim().toLowerCase(), (t = yr.exec(n)) ? (t = parseInt(t[1], 16), new jn(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1)) : (t = vr.exec(n)) ? Hn(parseInt(t[1], 16)) : (t = wr.exec(n)) ? new jn(t[1], t[2], t[3], 1) : (t = Mr.exec(n)) ? new jn(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = xr.exec(n)) ? Ln(t[1], t[2], t[3], t[4]) : (t = _r.exec(n)) ? Ln(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = Tr.exec(n)) ? qn(t[1], t[2] / 100, t[3] / 100, 1) : (t = Cr.exec(n)) ? qn(t[1], t[2] / 100, t[3] / 100, t[4]) : kr.hasOwnProperty(n) ? Hn(kr[n]) : "transparent" === n ? new jn(NaN, NaN, NaN, 0) : null;
  }function Hn(n) {
    return new jn(n >> 16 & 255, n >> 8 & 255, 255 & n, 1);
  }function Ln(n, t, e, r) {
    return r <= 0 && (n = t = e = NaN), new jn(n, t, e, r);
  }function Yn(n) {
    return n instanceof Fn || (n = En(n)), n ? (n = n.rgb(), new jn(n.r, n.g, n.b, n.opacity)) : new jn();
  }function On(n, t, e, r) {
    return 1 === arguments.length ? Yn(n) : new jn(n, t, e, null == r ? 1 : r);
  }function jn(n, t, e, r) {
    this.r = +n, this.g = +t, this.b = +e, this.opacity = +r;
  }function qn(n, t, e, r) {
    return r <= 0 ? n = t = e = NaN : e <= 0 || e >= 1 ? n = t = NaN : t <= 0 && (n = NaN), new Pn(n, t, e, r);
  }function $n(n) {
    if (n instanceof Pn) return new Pn(n.h, n.s, n.l, n.opacity);if (n instanceof Fn || (n = En(n)), !n) return new Pn();if (n instanceof Pn) return n;var t = (n = n.rgb()).r / 255,
        e = n.g / 255,
        r = n.b / 255,
        i = Math.min(t, e, r),
        a = Math.max(t, e, r),
        u = NaN,
        o = a - i,
        c = (a + i) / 2;return o ? (u = t === a ? (e - r) / o + 6 * (e < r) : e === a ? (r - t) / o + 2 : (t - e) / o + 4, o /= c < .5 ? a + i : 2 - a - i, u *= 60) : o = c > 0 && c < 1 ? 0 : u, new Pn(u, o, c, n.opacity);
  }function Pn(n, t, e, r) {
    this.h = +n, this.s = +t, this.l = +e, this.opacity = +r;
  }function Rn(n, t, e) {
    return 255 * (n < 60 ? t + (e - t) * n / 60 : n < 180 ? e : n < 240 ? t + (e - t) * (240 - n) / 60 : t);
  }function zn(n) {
    if (n instanceof In) return new In(n.l, n.a, n.b, n.opacity);if (n instanceof Jn) {
      var t = n.h * Ar;return new In(n.l, Math.cos(t) * n.c, Math.sin(t) * n.c, n.opacity);
    }n instanceof jn || (n = Yn(n));var e = Wn(n.r),
        r = Wn(n.g),
        i = Wn(n.b),
        a = Zn((.4124564 * e + .3575761 * r + .1804375 * i) / Sr),
        u = Zn((.2126729 * e + .7151522 * r + .072175 * i) / Ur);return new In(116 * u - 16, 500 * (a - u), 200 * (u - Zn((.0193339 * e + .119192 * r + .9503041 * i) / Dr)), n.opacity);
  }function In(n, t, e, r) {
    this.l = +n, this.a = +t, this.b = +e, this.opacity = +r;
  }function Zn(n) {
    return n > Lr ? Math.pow(n, 1 / 3) : n / Hr + Fr;
  }function Xn(n) {
    return n > Er ? n * n * n : Hr * (n - Fr);
  }function Bn(n) {
    return 255 * (n <= .0031308 ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055);
  }function Wn(n) {
    return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
  }function Vn(n) {
    if (n instanceof Jn) return new Jn(n.h, n.c, n.l, n.opacity);n instanceof In || (n = zn(n));var t = Math.atan2(n.b, n.a) * Nr;return new Jn(t < 0 ? t + 360 : t, Math.sqrt(n.a * n.a + n.b * n.b), n.l, n.opacity);
  }function Jn(n, t, e, r) {
    this.h = +n, this.c = +t, this.l = +e, this.opacity = +r;
  }function Gn(n) {
    if (n instanceof Qn) return new Qn(n.h, n.s, n.l, n.opacity);n instanceof jn || (n = Yn(n));var t = n.r / 255,
        e = n.g / 255,
        r = n.b / 255,
        i = (zr * r + Pr * t - Rr * e) / (zr + Pr - Rr),
        a = r - i,
        u = ($r * (e - i) - jr * a) / qr,
        o = Math.sqrt(u * u + a * a) / ($r * i * (1 - i)),
        c = o ? Math.atan2(u, a) * Nr - 120 : NaN;return new Qn(c < 0 ? c + 360 : c, o, i, n.opacity);
  }function Kn(n, t, e, r) {
    return 1 === arguments.length ? Gn(n) : new Qn(n, t, e, null == r ? 1 : r);
  }function Qn(n, t, e, r) {
    this.h = +n, this.s = +t, this.l = +e, this.opacity = +r;
  }function nt(n) {
    return function () {
      return n;
    };
  }function tt(n, t) {
    return function (e) {
      return n + e * t;
    };
  }function et(n, t, e) {
    return n = Math.pow(n, e), t = Math.pow(t, e) - n, e = 1 / e, function (r) {
      return Math.pow(n + r * t, e);
    };
  }function rt(n) {
    return 1 == (n = +n) ? it : function (t, e) {
      return e - t ? et(t, e, n) : nt(isNaN(t) ? e : t);
    };
  }function it(n, t) {
    var e = t - n;return e ? tt(n, e) : nt(isNaN(n) ? t : n);
  }function at(n, t) {
    var e,
        r = t ? t.length : 0,
        i = n ? Math.min(r, n.length) : 0,
        a = new Array(r),
        u = new Array(r);for (e = 0; e < i; ++e) {
      a[e] = ht(n[e], t[e]);
    }for (; e < r; ++e) {
      u[e] = t[e];
    }return function (n) {
      for (e = 0; e < i; ++e) {
        u[e] = a[e](n);
      }return u;
    };
  }function ut(n, t) {
    var e = new Date();return n = +n, t -= n, function (r) {
      return e.setTime(n + t * r), e;
    };
  }function ot(n, t) {
    return n = +n, t -= n, function (e) {
      return n + t * e;
    };
  }function ct(n, t) {
    var e,
        r = {},
        i = {};null !== n && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) || (n = {}), null !== t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || (t = {});for (e in t) {
      e in n ? r[e] = ht(n[e], t[e]) : i[e] = t[e];
    }return function (n) {
      for (e in r) {
        i[e] = r[e](n);
      }return i;
    };
  }function ft(n) {
    return function () {
      return n;
    };
  }function lt(n) {
    return function (t) {
      return n(t) + "";
    };
  }function st(n, t) {
    var e,
        r,
        i,
        a = Zr.lastIndex = Xr.lastIndex = 0,
        u = -1,
        o = [],
        c = [];for (n += "", t += ""; (e = Zr.exec(n)) && (r = Xr.exec(t));) {
      (i = r.index) > a && (i = t.slice(a, i), o[u] ? o[u] += i : o[++u] = i), (e = e[0]) === (r = r[0]) ? o[u] ? o[u] += r : o[++u] = r : (o[++u] = null, c.push({ i: u, x: ot(e, r) })), a = Xr.lastIndex;
    }return a < t.length && (i = t.slice(a), o[u] ? o[u] += i : o[++u] = i), o.length < 2 ? c[0] ? lt(c[0].x) : ft(t) : (t = c.length, function (n) {
      for (var e, r = 0; r < t; ++r) {
        o[(e = c[r]).i] = e.x(n);
      }return o.join("");
    });
  }function ht(n, t) {
    var e,
        r = typeof t === "undefined" ? "undefined" : _typeof(t);return null == t || "boolean" === r ? nt(t) : ("number" === r ? ot : "string" === r ? (e = En(t)) ? (t = e, Ir) : st : t instanceof En ? Ir : t instanceof Date ? ut : Array.isArray(t) ? at : "function" != typeof t.valueOf && "function" != typeof t.toString || isNaN(t) ? ct : ot)(n, t);
  }function dt(n, t) {
    return n = +n, t -= n, function (e) {
      return Math.round(n + t * e);
    };
  }function bt(n) {
    return function t(e) {
      function r(t, r) {
        var i = n((t = Kn(t)).h, (r = Kn(r)).h),
            a = it(t.s, r.s),
            u = it(t.l, r.l),
            o = it(t.opacity, r.opacity);return function (n) {
          return t.h = i(n), t.s = a(n), t.l = u(Math.pow(n, e)), t.opacity = o(n), t + "";
        };
      }return e = +e, r.gamma = t, r;
    }(1);
  }function pt(n) {
    return function () {
      return n;
    };
  }function gt(n) {
    return +n;
  }function mt(n, t) {
    return (t -= n = +n) ? function (e) {
      return (e - n) / t;
    } : pt(t);
  }function yt(n) {
    return function (t, e) {
      var r = n(t = +t, e = +e);return function (n) {
        return n <= t ? 0 : n >= e ? 1 : r(n);
      };
    };
  }function vt(n) {
    return function (t, e) {
      var r = n(t = +t, e = +e);return function (n) {
        return n <= 0 ? t : n >= 1 ? e : r(n);
      };
    };
  }function wt(n, t, e, r) {
    var i = n[0],
        a = n[1],
        u = t[0],
        o = t[1];return a < i ? (i = e(a, i), u = r(o, u)) : (i = e(i, a), u = r(u, o)), function (n) {
      return u(i(n));
    };
  }function Mt(n, t, e, r) {
    var i = Math.min(n.length, t.length) - 1,
        a = new Array(i),
        u = new Array(i),
        o = -1;for (n[i] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o < i;) {
      a[o] = e(n[o], n[o + 1]), u[o] = r(t[o], t[o + 1]);
    }return function (t) {
      var e = or(n, t, 1, i) - 1;return u[e](a[e](t));
    };
  }function xt(n, t) {
    return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp());
  }function _t(n, t) {
    function e() {
      return i = Math.min(o.length, c.length) > 2 ? Mt : wt, a = u = null, r;
    }function r(t) {
      return (a || (a = i(o, c, l ? yt(n) : n, f)))(+t);
    }var i,
        a,
        u,
        o = Vr,
        c = Vr,
        f = ht,
        l = !1;return r.invert = function (n) {
      return (u || (u = i(c, o, mt, l ? vt(t) : t)))(+n);
    }, r.domain = function (n) {
      return arguments.length ? (o = hr.call(n, gt), e()) : o.slice();
    }, r.range = function (n) {
      return arguments.length ? (c = dr.call(n), e()) : c.slice();
    }, r.rangeRound = function (n) {
      return c = dr.call(n), f = dt, e();
    }, r.clamp = function (n) {
      return arguments.length ? (l = !!n, e()) : l;
    }, r.interpolate = function (n) {
      return arguments.length ? (f = n, e()) : f;
    }, e();
  }function Tt(n) {
    return n;
  }function Ct(n, t) {
    if ((e = (n = t ? n.toExponential(t - 1) : n.toExponential()).indexOf("e")) < 0) return null;var e,
        r = n.slice(0, e);return [r.length > 1 ? r[0] + r.slice(2) : r, +n.slice(e + 1)];
  }function kt(n) {
    return (n = Ct(Math.abs(n))) ? n[1] : NaN;
  }function At(n, t) {
    return function (e, r) {
      for (var i = e.length, a = [], u = 0, o = n[0], c = 0; i > 0 && o > 0 && (c + o + 1 > r && (o = Math.max(1, r - c)), a.push(e.substring(i -= o, i + o)), !((c += o + 1) > r));) {
        o = n[u = (u + 1) % n.length];
      }return a.reverse().join(t);
    };
  }function Nt(n) {
    return function (t) {
      return t.replace(/[0-9]/g, function (t) {
        return n[+t];
      });
    };
  }function St(n, t) {
    var e = Ct(n, t);if (!e) return n + "";var r = e[0],
        i = e[1];return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
  }function Ut(n) {
    return new Dt(n);
  }function Dt(n) {
    if (!(t = Gr.exec(n))) throw new Error("invalid format: " + n);var t,
        e = t[1] || " ",
        r = t[2] || ">",
        i = t[3] || "-",
        a = t[4] || "",
        u = !!t[5],
        o = t[6] && +t[6],
        c = !!t[7],
        f = t[8] && +t[8].slice(1),
        l = t[9] || "";"n" === l ? (c = !0, l = "g") : Jr[l] || (l = ""), (u || "0" === e && "=" === r) && (u = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = a, this.zero = u, this.width = o, this.comma = c, this.precision = f, this.type = l;
  }function Ft(n) {
    function t(n) {
      function t(n) {
        var t,
            r,
            u,
            l = g,
            w = m;if ("c" === p) w = y(n) + w, n = "";else {
          var M = (n = +n) < 0;if (n = y(Math.abs(n), b), M && 0 == +n && (M = !1), l = (M ? "(" === f ? f : "-" : "-" === f || "(" === f ? "" : f) + l, w = w + ("s" === p ? ti[8 + Br / 3] : "") + (M && "(" === f ? ")" : ""), v) for (t = -1, r = n.length; ++t < r;) {
            if (48 > (u = n.charCodeAt(t)) || u > 57) {
              w = (46 === u ? i + n.slice(t + 1) : n.slice(t)) + w, n = n.slice(0, t);break;
            }
          }
        }d && !s && (n = e(n, 1 / 0));var x = l.length + n.length + w.length,
            _ = x < h ? new Array(h - x + 1).join(o) : "";switch (d && s && (n = e(_ + n, _.length ? h - w.length : 1 / 0), _ = ""), c) {case "<":
            n = l + n + w + _;break;case "=":
            n = l + _ + n + w;break;case "^":
            n = _.slice(0, x = _.length >> 1) + l + n + w + _.slice(x);break;default:
            n = _ + l + n + w;}return a(n);
      }var o = (n = Ut(n)).fill,
          c = n.align,
          f = n.sign,
          l = n.symbol,
          s = n.zero,
          h = n.width,
          d = n.comma,
          b = n.precision,
          p = n.type,
          g = "$" === l ? r[0] : "#" === l && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
          m = "$" === l ? r[1] : /[%p]/.test(p) ? u : "",
          y = Jr[p],
          v = !p || /[defgprs%]/.test(p);return b = null == b ? p ? 6 : 12 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b)), t.toString = function () {
        return n + "";
      }, t;
    }var e = n.grouping && n.thousands ? At(n.grouping, n.thousands) : Tt,
        r = n.currency,
        i = n.decimal,
        a = n.numerals ? Nt(n.numerals) : Tt,
        u = n.percent || "%";return { format: t, formatPrefix: function formatPrefix(n, e) {
        var r = t((n = Ut(n), n.type = "f", n)),
            i = 3 * Math.max(-8, Math.min(8, Math.floor(kt(e) / 3))),
            a = Math.pow(10, -i),
            u = ti[8 + i / 3];return function (n) {
          return r(a * n) + u;
        };
      } };
  }function Et(n) {
    return Math.max(0, -kt(Math.abs(n)));
  }function Ht(n, t) {
    return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(kt(t) / 3))) - kt(Math.abs(n)));
  }function Lt(n, t) {
    return n = Math.abs(n), t = Math.abs(t) - n, Math.max(0, kt(t) - kt(n)) + 1;
  }function Yt(n, t, e) {
    var r,
        i = n[0],
        a = n[n.length - 1],
        u = An(i, a, null == t ? 10 : t);switch ((e = Ut(null == e ? ",f" : e)).type) {case "s":
        var o = Math.max(Math.abs(i), Math.abs(a));return null != e.precision || isNaN(r = Ht(u, o)) || (e.precision = r), ni(e, o);case "":case "e":case "g":case "p":case "r":
        null != e.precision || isNaN(r = Lt(u, Math.max(Math.abs(i), Math.abs(a)))) || (e.precision = r - ("e" === e.type));break;case "f":case "%":
        null != e.precision || isNaN(r = Et(u)) || (e.precision = r - 2 * ("%" === e.type));}return Qr(e);
  }function Ot(n) {
    var t = n.domain;return n.ticks = function (n) {
      var e = t();return Cn(e[0], e[e.length - 1], null == n ? 10 : n);
    }, n.tickFormat = function (n, e) {
      return Yt(t(), n, e);
    }, n.nice = function (e) {
      null == e && (e = 10);var r,
          i = t(),
          a = 0,
          u = i.length - 1,
          o = i[a],
          c = i[u];return c < o && (r = o, o = c, c = r, r = a, a = u, u = r), (r = kn(o, c, e)) > 0 ? r = kn(o = Math.floor(o / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = kn(o = Math.ceil(o * r) / r, c = Math.floor(c * r) / r, e)), r > 0 ? (i[a] = Math.floor(o / r) * r, i[u] = Math.ceil(c / r) * r, t(i)) : r < 0 && (i[a] = Math.ceil(o * r) / r, i[u] = Math.floor(c * r) / r, t(i)), n;
    }, n;
  }function jt() {
    var n = _t(mt, ot);return n.copy = function () {
      return xt(n, jt());
    }, Ot(n);
  }function qt(n, t, e, r) {
    function i(t) {
      return n(t = new Date(+t)), t;
    }return i.floor = i, i.ceil = function (e) {
      return n(e = new Date(e - 1)), t(e, 1), n(e), e;
    }, i.round = function (n) {
      var t = i(n),
          e = i.ceil(n);return n - t < e - n ? t : e;
    }, i.offset = function (n, e) {
      return t(n = new Date(+n), null == e ? 1 : Math.floor(e)), n;
    }, i.range = function (e, r, a) {
      var u = [];if (e = i.ceil(e), a = null == a ? 1 : Math.floor(a), !(e < r && a > 0)) return u;do {
        u.push(new Date(+e));
      } while ((t(e, a), n(e), e < r));return u;
    }, i.filter = function (e) {
      return qt(function (t) {
        if (t >= t) for (; n(t), !e(t);) {
          t.setTime(t - 1);
        }
      }, function (n, r) {
        if (n >= n) if (r < 0) for (; ++r <= 0;) {
          for (; t(n, -1), !e(n);) {}
        } else for (; --r >= 0;) {
          for (; t(n, 1), !e(n);) {}
        }
      });
    }, e && (i.count = function (t, r) {
      return ei.setTime(+t), ri.setTime(+r), n(ei), n(ri), Math.floor(e(ei, ri));
    }, i.every = function (n) {
      return n = Math.floor(n), isFinite(n) && n > 0 ? n > 1 ? i.filter(r ? function (t) {
        return r(t) % n == 0;
      } : function (t) {
        return i.count(0, t) % n == 0;
      }) : i : null;
    }), i;
  }function $t(n) {
    return qt(function (t) {
      t.setDate(t.getDate() - (t.getDay() + 7 - n) % 7), t.setHours(0, 0, 0, 0);
    }, function (n, t) {
      n.setDate(n.getDate() + 7 * t);
    }, function (n, t) {
      return (t - n - (t.getTimezoneOffset() - n.getTimezoneOffset()) * ai) / ui;
    });
  }function Pt(n) {
    return qt(function (t) {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - n) % 7), t.setUTCHours(0, 0, 0, 0);
    }, function (n, t) {
      n.setUTCDate(n.getUTCDate() + 7 * t);
    }, function (n, t) {
      return (t - n) / ui;
    });
  }function Rt(n) {
    if (0 <= n.y && n.y < 100) {
      var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);return t.setFullYear(n.y), t;
    }return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
  }function zt(n) {
    if (0 <= n.y && n.y < 100) {
      var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));return t.setUTCFullYear(n.y), t;
    }return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
  }function It(n) {
    return { y: n, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }function Zt(n) {
    function t(n, t) {
      return function (e) {
        var r,
            i,
            a,
            u = [],
            o = -1,
            c = 0,
            f = n.length;for (e instanceof Date || (e = new Date(+e)); ++o < f;) {
          37 === n.charCodeAt(o) && (u.push(n.slice(c, o)), null != (i = wi[r = n.charAt(++o)]) ? r = n.charAt(++o) : i = "e" === r ? " " : "0", (a = t[r]) && (r = a(e, i)), u.push(r), c = o + 1);
        }return u.push(n.slice(c, o)), u.join("");
      };
    }function e(n, t) {
      return function (e) {
        var i = It(1900);if (r(i, n, e += "", 0) != e.length) return null;if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
          "w" in i || (i.w = "W" in i ? 1 : 0);var a = "Z" in i ? zt(It(i.y)).getUTCDay() : t(It(i.y)).getDay();i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (a + 5) % 7 : i.w + 7 * i.U - (a + 6) % 7;
        }return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, zt(i)) : t(i);
      };
    }function r(n, t, e, r) {
      for (var i, a, u = 0, o = t.length, c = e.length; u < o;) {
        if (r >= c) return -1;if (37 === (i = t.charCodeAt(u++))) {
          if (i = t.charAt(u++), !(a = T[i in wi ? t.charAt(u++) : i]) || (r = a(n, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }return r;
    }var i = n.dateTime,
        a = n.date,
        u = n.time,
        o = n.periods,
        c = n.days,
        f = n.shortDays,
        l = n.months,
        s = n.shortMonths,
        h = Wt(o),
        d = Vt(o),
        b = Wt(c),
        p = Vt(c),
        g = Wt(f),
        m = Vt(f),
        y = Wt(l),
        v = Vt(l),
        w = Wt(s),
        M = Vt(s),
        x = { a: function a(n) {
        return f[n.getDay()];
      }, A: function A(n) {
        return c[n.getDay()];
      }, b: function b(n) {
        return s[n.getMonth()];
      }, B: function B(n) {
        return l[n.getMonth()];
      }, c: null, d: le, e: le, H: se, I: he, j: de, L: be, m: pe, M: ge, p: function p(n) {
        return o[+(n.getHours() >= 12)];
      }, S: me, U: ye, w: ve, W: we, x: null, X: null, y: Me, Y: xe, Z: _e, "%": je },
        _ = { a: function a(n) {
        return f[n.getUTCDay()];
      }, A: function A(n) {
        return c[n.getUTCDay()];
      }, b: function b(n) {
        return s[n.getUTCMonth()];
      }, B: function B(n) {
        return l[n.getUTCMonth()];
      }, c: null, d: Te, e: Te, H: Ce, I: ke, j: Ae, L: Ne, m: Se, M: Ue, p: function p(n) {
        return o[+(n.getUTCHours() >= 12)];
      }, S: De, U: Fe, w: Ee, W: He, x: null, X: null, y: Le, Y: Ye, Z: Oe, "%": je },
        T = { a: function a(n, t, e) {
        var r = g.exec(t.slice(e));return r ? (n.w = m[r[0].toLowerCase()], e + r[0].length) : -1;
      }, A: function A(n, t, e) {
        var r = b.exec(t.slice(e));return r ? (n.w = p[r[0].toLowerCase()], e + r[0].length) : -1;
      }, b: function b(n, t, e) {
        var r = w.exec(t.slice(e));return r ? (n.m = M[r[0].toLowerCase()], e + r[0].length) : -1;
      }, B: function B(n, t, e) {
        var r = y.exec(t.slice(e));return r ? (n.m = v[r[0].toLowerCase()], e + r[0].length) : -1;
      }, c: function c(n, t, e) {
        return r(n, i, t, e);
      }, d: re, e: re, H: ae, I: ae, j: ie, L: ce, m: ee, M: ue, p: function p(n, t, e) {
        var r = h.exec(t.slice(e));return r ? (n.p = d[r[0].toLowerCase()], e + r[0].length) : -1;
      }, S: oe, U: Gt, w: Jt, W: Kt, x: function x(n, t, e) {
        return r(n, a, t, e);
      }, X: function X(n, t, e) {
        return r(n, u, t, e);
      }, y: ne, Y: Qt, Z: te, "%": fe };return x.x = t(a, x), x.X = t(u, x), x.c = t(i, x), _.x = t(a, _), _.X = t(u, _), _.c = t(i, _), { format: function format(n) {
        var e = t(n += "", x);return e.toString = function () {
          return n;
        }, e;
      }, parse: function parse(n) {
        var t = e(n += "", Rt);return t.toString = function () {
          return n;
        }, t;
      }, utcFormat: function utcFormat(n) {
        var e = t(n += "", _);return e.toString = function () {
          return n;
        }, e;
      }, utcParse: function utcParse(n) {
        var t = e(n, zt);return t.toString = function () {
          return n;
        }, t;
      } };
  }function Xt(n, t, e) {
    var r = n < 0 ? "-" : "",
        i = (r ? -n : n) + "",
        a = i.length;return r + (a < e ? new Array(e - a + 1).join(t) + i : i);
  }function Bt(n) {
    return n.replace(_i, "\\$&");
  }function Wt(n) {
    return new RegExp("^(?:" + n.map(Bt).join("|") + ")", "i");
  }function Vt(n) {
    for (var t = {}, e = -1, r = n.length; ++e < r;) {
      t[n[e].toLowerCase()] = e;
    }return t;
  }function Jt(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 1));return r ? (n.w = +r[0], e + r[0].length) : -1;
  }function Gt(n, t, e) {
    var r = Mi.exec(t.slice(e));return r ? (n.U = +r[0], e + r[0].length) : -1;
  }function Kt(n, t, e) {
    var r = Mi.exec(t.slice(e));return r ? (n.W = +r[0], e + r[0].length) : -1;
  }function Qt(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 4));return r ? (n.y = +r[0], e + r[0].length) : -1;
  }function ne(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 2));return r ? (n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
  }function te(n, t, e) {
    var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(t.slice(e, e + 6));return r ? (n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
  }function ee(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 2));return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
  }function re(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 2));return r ? (n.d = +r[0], e + r[0].length) : -1;
  }function ie(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 3));return r ? (n.m = 0, n.d = +r[0], e + r[0].length) : -1;
  }function ae(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 2));return r ? (n.H = +r[0], e + r[0].length) : -1;
  }function ue(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 2));return r ? (n.M = +r[0], e + r[0].length) : -1;
  }function oe(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 2));return r ? (n.S = +r[0], e + r[0].length) : -1;
  }function ce(n, t, e) {
    var r = Mi.exec(t.slice(e, e + 3));return r ? (n.L = +r[0], e + r[0].length) : -1;
  }function fe(n, t, e) {
    var r = xi.exec(t.slice(e, e + 1));return r ? e + r[0].length : -1;
  }function le(n, t) {
    return Xt(n.getDate(), t, 2);
  }function se(n, t) {
    return Xt(n.getHours(), t, 2);
  }function he(n, t) {
    return Xt(n.getHours() % 12 || 12, t, 2);
  }function de(n, t) {
    return Xt(1 + oi.count(li(n), n), t, 3);
  }function be(n, t) {
    return Xt(n.getMilliseconds(), t, 3);
  }function pe(n, t) {
    return Xt(n.getMonth() + 1, t, 2);
  }function ge(n, t) {
    return Xt(n.getMinutes(), t, 2);
  }function me(n, t) {
    return Xt(n.getSeconds(), t, 2);
  }function ye(n, t) {
    return Xt(ci.count(li(n), n), t, 2);
  }function ve(n) {
    return n.getDay();
  }function we(n, t) {
    return Xt(fi.count(li(n), n), t, 2);
  }function Me(n, t) {
    return Xt(n.getFullYear() % 100, t, 2);
  }function xe(n, t) {
    return Xt(n.getFullYear() % 1e4, t, 4);
  }function _e(n) {
    var t = n.getTimezoneOffset();return (t > 0 ? "-" : (t *= -1, "+")) + Xt(t / 60 | 0, "0", 2) + Xt(t % 60, "0", 2);
  }function Te(n, t) {
    return Xt(n.getUTCDate(), t, 2);
  }function Ce(n, t) {
    return Xt(n.getUTCHours(), t, 2);
  }function ke(n, t) {
    return Xt(n.getUTCHours() % 12 || 12, t, 2);
  }function Ae(n, t) {
    return Xt(1 + si.count(bi(n), n), t, 3);
  }function Ne(n, t) {
    return Xt(n.getUTCMilliseconds(), t, 3);
  }function Se(n, t) {
    return Xt(n.getUTCMonth() + 1, t, 2);
  }function Ue(n, t) {
    return Xt(n.getUTCMinutes(), t, 2);
  }function De(n, t) {
    return Xt(n.getUTCSeconds(), t, 2);
  }function Fe(n, t) {
    return Xt(hi.count(bi(n), n), t, 2);
  }function Ee(n) {
    return n.getUTCDay();
  }function He(n, t) {
    return Xt(di.count(bi(n), n), t, 2);
  }function Le(n, t) {
    return Xt(n.getUTCFullYear() % 100, t, 2);
  }function Ye(n, t) {
    return Xt(n.getUTCFullYear() % 1e4, t, 4);
  }function Oe() {
    return "+0000";
  }function je() {
    return "%";
  }function qe(n) {
    return n.match(/.{6}/g).map(function (n) {
      return "#" + n;
    });
  }function $e(n) {
    var t = n.length;return function (e) {
      return n[Math.max(0, Math.min(t - 1, Math.floor(e * t)))];
    };
  }function Pe(n) {
    return n;
  }function Re(n) {
    return "translate(" + (n + .5) + ",0)";
  }function ze(n) {
    return "translate(0," + (n + .5) + ")";
  }function Ie(n) {
    return function (t) {
      return +n(t);
    };
  }function Ze(n) {
    var t = Math.max(0, n.bandwidth() - 1) / 2;return n.round() && (t = Math.round(t)), function (e) {
      return +n(e) + t;
    };
  }function Xe() {
    return !this.__axis;
  }function Be(n, t) {
    function e(e) {
      var h = null == i ? t.ticks ? t.ticks.apply(t, r) : t.domain() : i,
          d = null == a ? t.tickFormat ? t.tickFormat.apply(t, r) : Pe : a,
          b = Math.max(u, 0) + c,
          p = t.range(),
          g = +p[0] + .5,
          m = +p[p.length - 1] + .5,
          y = (t.bandwidth ? Ze : Ie)(t.copy()),
          v = e.selection ? e.selection() : e,
          w = v.selectAll(".domain").data([null]),
          M = v.selectAll(".tick").data(h, t).order(),
          x = M.exit(),
          _ = M.enter().append("g").attr("class", "tick"),
          T = M.select("line"),
          C = M.select("text");w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), M = M.merge(_), T = T.merge(_.append("line").attr("stroke", "#000").attr(l + "2", f * u)), C = C.merge(_.append("text").attr("fill", "#000").attr(l, f * b).attr("dy", n === Ci ? "0em" : n === Ai ? "0.71em" : "0.32em")), e !== v && (w = w.transition(e), M = M.transition(e), T = T.transition(e), C = C.transition(e), x = x.transition(e).attr("opacity", Si).attr("transform", function (n) {
        return isFinite(n = y(n)) ? s(n) : this.getAttribute("transform");
      }), _.attr("opacity", Si).attr("transform", function (n) {
        var t = this.parentNode.__axis;return s(t && isFinite(t = t(n)) ? t : y(n));
      })), x.remove(), w.attr("d", n === Ni || n == ki ? "M" + f * o + "," + g + "H0.5V" + m + "H" + f * o : "M" + g + "," + f * o + "V0.5H" + m + "V" + f * o), M.attr("opacity", 1).attr("transform", function (n) {
        return s(y(n));
      }), T.attr(l + "2", f * u), C.attr(l, f * b).text(d), v.filter(Xe).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", n === ki ? "start" : n === Ni ? "end" : "middle"), v.each(function () {
        this.__axis = y;
      });
    }var r = [],
        i = null,
        a = null,
        u = 6,
        o = 6,
        c = 3,
        f = n === Ci || n === Ni ? -1 : 1,
        l = n === Ni || n === ki ? "x" : "y",
        s = n === Ci || n === Ai ? Re : ze;return e.scale = function (n) {
      return arguments.length ? (t = n, e) : t;
    }, e.ticks = function () {
      return r = Ti.call(arguments), e;
    }, e.tickArguments = function (n) {
      return arguments.length ? (r = null == n ? [] : Ti.call(n), e) : r.slice();
    }, e.tickValues = function (n) {
      return arguments.length ? (i = null == n ? null : Ti.call(n), e) : i && i.slice();
    }, e.tickFormat = function (n) {
      return arguments.length ? (a = n, e) : a;
    }, e.tickSize = function (n) {
      return arguments.length ? (u = o = +n, e) : u;
    }, e.tickSizeInner = function (n) {
      return arguments.length ? (u = +n, e) : u;
    }, e.tickSizeOuter = function (n) {
      return arguments.length ? (o = +n, e) : o;
    }, e.tickPadding = function (n) {
      return arguments.length ? (c = +n, e) : c;
    }, e;
  }var We = "http://www.w3.org/1999/xhtml",
      Ve = { svg: "http://www.w3.org/2000/svg", xhtml: We, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      Je = function Je(n) {
    return function () {
      return this.matches(n);
    };
  };if ("undefined" != typeof document) {
    var Ge = document.documentElement;if (!Ge.matches) {
      var Ke = Ge.webkitMatchesSelector || Ge.msMatchesSelector || Ge.mozMatchesSelector || Ge.oMatchesSelector;Je = function Je(n) {
        return function () {
          return Ke.call(this, n);
        };
      };
    }
  }var Qe = Je,
      nr = {},
      tr = null;"undefined" != typeof document && ("onmouseenter" in document.documentElement || (nr = { mouseenter: "mouseover", mouseleave: "mouseout" })), N.prototype = { add: function add(n) {
      this._names.indexOf(n) < 0 && (this._names.push(n), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(n) {
      var t = this._names.indexOf(n);t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(n) {
      return this._names.indexOf(n) >= 0;
    } }, V.prototype = { constructor: V, appendChild: function appendChild(n) {
      return this._parent.insertBefore(n, this._next);
    }, insertBefore: function insertBefore(n, t) {
      return this._parent.insertBefore(n, t);
    }, querySelector: function querySelector(n) {
      return this._parent.querySelector(n);
    }, querySelectorAll: function querySelectorAll(n) {
      return this._parent.querySelectorAll(n);
    } };var er = "$",
      rr = [null];tn.prototype = function () {
    return new tn([[document.documentElement]], rr);
  }.prototype = { constructor: tn, select: function select(n) {
      "function" != typeof n && (n = g(n));for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var a, u, o = t[i], c = o.length, f = r[i] = new Array(c), l = 0; l < c; ++l) {
          (a = o[l]) && (u = n.call(a, a.__data__, l, o)) && ("__data__" in a && (u.__data__ = a.__data__), f[l] = u);
        }
      }return new tn(r, this._parents);
    }, selectAll: function selectAll(n) {
      "function" != typeof n && (n = nn(n));for (var t = this._groups, e = t.length, r = [], i = [], a = 0; a < e; ++a) {
        for (var u, o = t[a], c = o.length, f = 0; f < c; ++f) {
          (u = o[f]) && (r.push(n.call(u, u.__data__, f, o)), i.push(u));
        }
      }return new tn(r, i);
    }, filter: function filter(n) {
      "function" != typeof n && (n = Qe(n));for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var a, u = t[i], o = u.length, c = r[i] = [], f = 0; f < o; ++f) {
          (a = u[f]) && n.call(a, a.__data__, f, u) && c.push(a);
        }
      }return new tn(r, this._parents);
    }, data: function data(n, t) {
      if (!n) return d = new Array(this.size()), f = -1, this.each(function (n) {
        d[++f] = n;
      }), d;var e = t ? K : G,
          r = this._parents,
          i = this._groups;"function" != typeof n && (n = J(n));for (var a = i.length, u = new Array(a), o = new Array(a), c = new Array(a), f = 0; f < a; ++f) {
        var l = r[f],
            s = i[f],
            h = s.length,
            d = n.call(l, l && l.__data__, f, r),
            b = d.length,
            p = o[f] = new Array(b),
            g = u[f] = new Array(b);e(l, s, p, g, c[f] = new Array(h), d, t);for (var m, y, v = 0, w = 0; v < b; ++v) {
          if (m = p[v]) {
            for (v >= w && (w = v + 1); !(y = g[w]) && ++w < b;) {}m._next = y || null;
          }
        }
      }return u = new tn(u, r), u._enter = o, u._exit = c, u;
    }, enter: function enter() {
      return new tn(this._enter || this._groups.map(W), this._parents);
    }, exit: function exit() {
      return new tn(this._exit || this._groups.map(W), this._parents);
    }, merge: function merge(n) {
      for (var t = this._groups, e = n._groups, r = t.length, i = e.length, a = Math.min(r, i), u = new Array(r), o = 0; o < a; ++o) {
        for (var c, f = t[o], l = e[o], s = f.length, h = u[o] = new Array(s), d = 0; d < s; ++d) {
          (c = f[d] || l[d]) && (h[d] = c);
        }
      }for (; o < r; ++o) {
        u[o] = t[o];
      }return new tn(u, this._parents);
    }, order: function order() {
      for (var n = this._groups, t = -1, e = n.length; ++t < e;) {
        for (var r, i = n[t], a = i.length - 1, u = i[a]; --a >= 0;) {
          (r = i[a]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
        }
      }return this;
    }, sort: function sort(n) {
      n || (n = B);for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var a, u = t[i], o = u.length, c = r[i] = new Array(o), f = 0; f < o; ++f) {
          (a = u[f]) && (c[f] = a);
        }c.sort(function (t, e) {
          return t && e ? n(t.__data__, e.__data__) : !t - !e;
        });
      }return new tn(r, this._parents).order();
    }, call: function call() {
      var n = arguments[0];return arguments[0] = this, n.apply(null, arguments), this;
    }, nodes: function nodes() {
      var n = new Array(this.size()),
          t = -1;return this.each(function () {
        n[++t] = this;
      }), n;
    }, node: function node() {
      for (var n = this._groups, t = 0, e = n.length; t < e; ++t) {
        for (var r = n[t], i = 0, a = r.length; i < a; ++i) {
          var u = r[i];if (u) return u;
        }
      }return null;
    }, size: function size() {
      var n = 0;return this.each(function () {
        ++n;
      }), n;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(n) {
      for (var t = this._groups, e = 0, r = t.length; e < r; ++e) {
        for (var i, a = t[e], u = 0, o = a.length; u < o; ++u) {
          (i = a[u]) && n.call(i, i.__data__, u, a);
        }
      }return this;
    }, attr: function attr(n, e) {
      var r = t(n);if (arguments.length < 2) {
        var i = this.node();return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
      }return this.each((null == e ? r.local ? R : P : "function" == typeof e ? r.local ? X : Z : r.local ? I : z)(r, e));
    }, style: function style(n, t, e) {
      return arguments.length > 1 ? this.each((null == t ? O : "function" == typeof t ? q : j)(n, t, null == e ? "" : e)) : $(this.node(), n);
    }, property: function property(n, t) {
      return arguments.length > 1 ? this.each((null == t ? H : "function" == typeof t ? Y : L)(n, t)) : this.node()[n];
    }, classed: function classed(n, t) {
      var e = k(n + "");if (arguments.length < 2) {
        for (var r = A(this.node()), i = -1, a = e.length; ++i < a;) {
          if (!r.contains(e[i])) return !1;
        }return !0;
      }return this.each(("function" == typeof t ? E : t ? D : F)(e, t));
    }, text: function text(n) {
      return arguments.length ? this.each(null == n ? _ : ("function" == typeof n ? C : T)(n)) : this.node().textContent;
    }, html: function html(n) {
      return arguments.length ? this.each(null == n ? w : ("function" == typeof n ? x : M)(n)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each(v);
    }, lower: function lower() {
      return this.each(y);
    }, append: function append(n) {
      var t = "function" == typeof n ? n : i(n);return this.select(function () {
        return this.appendChild(t.apply(this, arguments));
      });
    }, insert: function insert(n, t) {
      var e = "function" == typeof n ? n : i(n),
          r = null == t ? m : "function" == typeof t ? t : g(t);return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(b);
    }, datum: function datum(n) {
      return arguments.length ? this.property("__data__", n) : this.node().__data__;
    }, on: function on(n, t, e) {
      var r,
          i,
          a = o(n + ""),
          u = a.length;{
        if (!(arguments.length < 2)) {
          for (l = t ? f : c, null == e && (e = !1), r = 0; r < u; ++r) {
            this.each(l(a[r], t, e));
          }return this;
        }var l = this.node().__on;if (l) for (var s, h = 0, d = l.length; h < d; ++h) {
          for (r = 0, s = l[h]; r < u; ++r) {
            if ((i = a[r]).type === s.type && i.name === s.name) return s.value;
          }
        }
      }
    }, dispatch: function dispatch(n, t) {
      return this.each(("function" == typeof t ? d : h)(n, t));
    } };en.prototype = rn.prototype = { constructor: en, has: function has(n) {
      return "$" + n in this;
    }, get: function get(n) {
      return this["$" + n];
    }, set: function set(n, t) {
      return this["$" + n] = t, this;
    }, remove: function remove(n) {
      var t = "$" + n;return t in this && delete this[t];
    }, clear: function clear() {
      for (var n in this) {
        "$" === n[0] && delete this[n];
      }
    }, keys: function keys() {
      var n = [];for (var t in this) {
        "$" === t[0] && n.push(t.slice(1));
      }return n;
    }, values: function values() {
      var n = [];for (var t in this) {
        "$" === t[0] && n.push(this[t]);
      }return n;
    }, entries: function entries() {
      var n = [];for (var t in this) {
        "$" === t[0] && n.push({ key: t.slice(1), value: this[t] });
      }return n;
    }, size: function size() {
      var n = 0;for (var t in this) {
        "$" === t[0] && ++n;
      }return n;
    }, empty: function empty() {
      for (var n in this) {
        if ("$" === n[0]) return !1;
      }return !0;
    }, each: function each(n) {
      for (var t in this) {
        "$" === t[0] && n(this[t], t.slice(1), this);
      }
    } };rn.prototype;var ir = { value: function value() {} };ln.prototype = fn.prototype = { constructor: ln, on: function on(n, t) {
      var e,
          r = this._,
          i = sn(n + "", r),
          a = -1,
          u = i.length;{
        if (!(arguments.length < 2)) {
          if (null != t && "function" != typeof t) throw new Error("invalid callback: " + t);for (; ++a < u;) {
            if (e = (n = i[a]).type) r[e] = dn(r[e], n.name, t);else if (null == t) for (e in r) {
              r[e] = dn(r[e], n.name, null);
            }
          }return this;
        }for (; ++a < u;) {
          if ((e = (n = i[a]).type) && (e = hn(r[e], n.name))) return e;
        }
      }
    }, copy: function copy() {
      var n = {},
          t = this._;for (var e in t) {
        n[e] = t[e].slice();
      }return new ln(n);
    }, call: function call(n, t) {
      if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), a = 0; a < e; ++a) {
        i[a] = arguments[a + 2];
      }if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);for (a = 0, e = (r = this._[n]).length; a < e; ++a) {
        r[a].value.apply(t, i);
      }
    }, apply: function apply(n, t, e) {
      if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);for (var r = this._[n], i = 0, a = r.length; i < a; ++i) {
        r[i].value.apply(t, e);
      }
    } };var ar = wn(",").parse,
      ur = (wn("\t"), function (n, t) {
    return function (e, r, i) {
      arguments.length < 3 && (i = r, r = null);var a = bn(e).mimeType(n);return a.row = function (n) {
        return arguments.length ? a.response(Mn(t, r = n)) : r;
      }, a.row(r), i ? a.get(i) : a;
    };
  }("text/csv", ar)),
      or = function (n) {
    return 1 === n.length && (n = _n(n)), { left: function left(t, e, r, i) {
        for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
          var a = r + i >>> 1;n(t[a], e) < 0 ? r = a + 1 : i = a;
        }return r;
      }, right: function right(t, e, r, i) {
        for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
          var a = r + i >>> 1;n(t[a], e) > 0 ? i = a : r = a + 1;
        }return r;
      } };
  }(xn).right,
      cr = Math.sqrt(50),
      fr = Math.sqrt(10),
      lr = Math.sqrt(2),
      sr = Array.prototype,
      hr = sr.map,
      dr = sr.slice,
      br = { name: "implicit" },
      pr = "\\s*([+-]?\\d+)\\s*",
      gr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      mr = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      yr = /^#([0-9a-f]{3})$/,
      vr = /^#([0-9a-f]{6})$/,
      wr = new RegExp("^rgb\\(" + [pr, pr, pr] + "\\)$"),
      Mr = new RegExp("^rgb\\(" + [mr, mr, mr] + "\\)$"),
      xr = new RegExp("^rgba\\(" + [pr, pr, pr, gr] + "\\)$"),
      _r = new RegExp("^rgba\\(" + [mr, mr, mr, gr] + "\\)$"),
      Tr = new RegExp("^hsl\\(" + [gr, mr, mr] + "\\)$"),
      Cr = new RegExp("^hsla\\(" + [gr, mr, mr, gr] + "\\)$"),
      kr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };Un(Fn, En, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), Un(jn, On, Dn(Fn, { brighter: function brighter(n) {
      return n = null == n ? 1 / .7 : Math.pow(1 / .7, n), new jn(this.r * n, this.g * n, this.b * n, this.opacity);
    }, darker: function darker(n) {
      return n = null == n ? .7 : Math.pow(.7, n), new jn(this.r * n, this.g * n, this.b * n, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var n = this.opacity;return (1 === (n = isNaN(n) ? 1 : Math.max(0, Math.min(1, n))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === n ? ")" : ", " + n + ")");
    } })), Un(Pn, function (n, t, e, r) {
    return 1 === arguments.length ? $n(n) : new Pn(n, t, e, null == r ? 1 : r);
  }, Dn(Fn, { brighter: function brighter(n) {
      return n = null == n ? 1 / .7 : Math.pow(1 / .7, n), new Pn(this.h, this.s, this.l * n, this.opacity);
    }, darker: function darker(n) {
      return n = null == n ? .7 : Math.pow(.7, n), new Pn(this.h, this.s, this.l * n, this.opacity);
    }, rgb: function rgb() {
      var n = this.h % 360 + 360 * (this.h < 0),
          t = isNaN(n) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          r = e + (e < .5 ? e : 1 - e) * t,
          i = 2 * e - r;return new jn(Rn(n >= 240 ? n - 240 : n + 120, i, r), Rn(n, i, r), Rn(n < 120 ? n + 240 : n - 120, i, r), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var Ar = Math.PI / 180,
      Nr = 180 / Math.PI,
      Sr = .95047,
      Ur = 1,
      Dr = 1.08883,
      Fr = 4 / 29,
      Er = 6 / 29,
      Hr = 3 * Er * Er,
      Lr = Er * Er * Er;Un(In, function (n, t, e, r) {
    return 1 === arguments.length ? zn(n) : new In(n, t, e, null == r ? 1 : r);
  }, Dn(Fn, { brighter: function brighter(n) {
      return new In(this.l + 18 * (null == n ? 1 : n), this.a, this.b, this.opacity);
    }, darker: function darker(n) {
      return new In(this.l - 18 * (null == n ? 1 : n), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var n = (this.l + 16) / 116,
          t = isNaN(this.a) ? n : n + this.a / 500,
          e = isNaN(this.b) ? n : n - this.b / 200;return n = Ur * Xn(n), t = Sr * Xn(t), e = Dr * Xn(e), new jn(Bn(3.2404542 * t - 1.5371385 * n - .4985314 * e), Bn(-.969266 * t + 1.8760108 * n + .041556 * e), Bn(.0556434 * t - .2040259 * n + 1.0572252 * e), this.opacity);
    } })), Un(Jn, function (n, t, e, r) {
    return 1 === arguments.length ? Vn(n) : new Jn(n, t, e, null == r ? 1 : r);
  }, Dn(Fn, { brighter: function brighter(n) {
      return new Jn(this.h, this.c, this.l + 18 * (null == n ? 1 : n), this.opacity);
    }, darker: function darker(n) {
      return new Jn(this.h, this.c, this.l - 18 * (null == n ? 1 : n), this.opacity);
    }, rgb: function rgb() {
      return zn(this).rgb();
    } }));var Yr = -.14861,
      Or = 1.78277,
      jr = -.29227,
      qr = -.90649,
      $r = 1.97294,
      Pr = $r * qr,
      Rr = $r * Or,
      zr = Or * jr - qr * Yr;Un(Qn, Kn, Dn(Fn, { brighter: function brighter(n) {
      return n = null == n ? 1 / .7 : Math.pow(1 / .7, n), new Qn(this.h, this.s, this.l * n, this.opacity);
    }, darker: function darker(n) {
      return n = null == n ? .7 : Math.pow(.7, n), new Qn(this.h, this.s, this.l * n, this.opacity);
    }, rgb: function rgb() {
      var n = isNaN(this.h) ? 0 : (this.h + 120) * Ar,
          t = +this.l,
          e = isNaN(this.s) ? 0 : this.s * t * (1 - t),
          r = Math.cos(n),
          i = Math.sin(n);return new jn(255 * (t + e * (Yr * r + Or * i)), 255 * (t + e * (jr * r + qr * i)), 255 * (t + e * ($r * r)), this.opacity);
    } }));var Ir = function n(t) {
    function e(n, t) {
      var e = r((n = On(n)).r, (t = On(t)).r),
          i = r(n.g, t.g),
          a = r(n.b, t.b),
          u = it(n.opacity, t.opacity);return function (t) {
        return n.r = e(t), n.g = i(t), n.b = a(t), n.opacity = u(t), n + "";
      };
    }var r = rt(t);return e.gamma = n, e;
  }(1),
      Zr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Xr = new RegExp(Zr.source, "g");bt(function (n, t) {
    var e = t - n;return e ? tt(n, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : nt(isNaN(n) ? t : n);
  });var Br,
      Wr = bt(it),
      Vr = [0, 1],
      Jr = { "": function _(n, t) {
      n: for (var e, r = (n = n.toPrecision(t)).length, i = 1, a = -1; i < r; ++i) {
        switch (n[i]) {case ".":
            a = e = i;break;case "0":
            0 === a && (a = i), e = i;break;case "e":
            break n;default:
            a > 0 && (a = 0);}
      }return a > 0 ? n.slice(0, a) + n.slice(e + 1) : n;
    }, "%": function _(n, t) {
      return (100 * n).toFixed(t);
    }, b: function b(n) {
      return Math.round(n).toString(2);
    }, c: function c(n) {
      return n + "";
    }, d: function d(n) {
      return Math.round(n).toString(10);
    }, e: function e(n, t) {
      return n.toExponential(t);
    }, f: function f(n, t) {
      return n.toFixed(t);
    }, g: function g(n, t) {
      return n.toPrecision(t);
    }, o: function o(n) {
      return Math.round(n).toString(8);
    }, p: function p(n, t) {
      return St(100 * n, t);
    }, r: St, s: function s(n, t) {
      var e = Ct(n, t);if (!e) return n + "";var r = e[0],
          i = e[1],
          a = i - (Br = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          u = r.length;return a === u ? r : a > u ? r + new Array(a - u + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Ct(n, Math.max(0, t + a - 1))[0];
    }, X: function X(n) {
      return Math.round(n).toString(16).toUpperCase();
    }, x: function x(n) {
      return Math.round(n).toString(16);
    } },
      Gr = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;Ut.prototype = Dt.prototype, Dt.prototype.toString = function () {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type;
  };var Kr,
      Qr,
      ni,
      ti = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];!function (n) {
    Kr = Ft(n), Qr = Kr.format, ni = Kr.formatPrefix;
  }({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });var ei = new Date(),
      ri = new Date(),
      ii = qt(function () {}, function (n, t) {
    n.setTime(+n + t);
  }, function (n, t) {
    return t - n;
  });ii.every = function (n) {
    return n = Math.floor(n), isFinite(n) && n > 0 ? n > 1 ? qt(function (t) {
      t.setTime(Math.floor(t / n) * n);
    }, function (t, e) {
      t.setTime(+t + e * n);
    }, function (t, e) {
      return (e - t) / n;
    }) : ii : null;
  };var ai = 6e4,
      ui = 6048e5,
      oi = (qt(function (n) {
    n.setTime(1e3 * Math.floor(n / 1e3));
  }, function (n, t) {
    n.setTime(+n + 1e3 * t);
  }, function (n, t) {
    return (t - n) / 1e3;
  }, function (n) {
    return n.getUTCSeconds();
  }), qt(function (n) {
    n.setTime(Math.floor(n / ai) * ai);
  }, function (n, t) {
    n.setTime(+n + t * ai);
  }, function (n, t) {
    return (t - n) / ai;
  }, function (n) {
    return n.getMinutes();
  }), qt(function (n) {
    var t = n.getTimezoneOffset() * ai % 36e5;t < 0 && (t += 36e5), n.setTime(36e5 * Math.floor((+n - t) / 36e5) + t);
  }, function (n, t) {
    n.setTime(+n + 36e5 * t);
  }, function (n, t) {
    return (t - n) / 36e5;
  }, function (n) {
    return n.getHours();
  }), qt(function (n) {
    n.setHours(0, 0, 0, 0);
  }, function (n, t) {
    n.setDate(n.getDate() + t);
  }, function (n, t) {
    return (t - n - (t.getTimezoneOffset() - n.getTimezoneOffset()) * ai) / 864e5;
  }, function (n) {
    return n.getDate() - 1;
  })),
      ci = $t(0),
      fi = $t(1),
      li = (qt(function (n) {
    n.setDate(1), n.setHours(0, 0, 0, 0);
  }, function (n, t) {
    n.setMonth(n.getMonth() + t);
  }, function (n, t) {
    return t.getMonth() - n.getMonth() + 12 * (t.getFullYear() - n.getFullYear());
  }, function (n) {
    return n.getMonth();
  }), qt(function (n) {
    n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
  }, function (n, t) {
    n.setFullYear(n.getFullYear() + t);
  }, function (n, t) {
    return t.getFullYear() - n.getFullYear();
  }, function (n) {
    return n.getFullYear();
  }));li.every = function (n) {
    return isFinite(n = Math.floor(n)) && n > 0 ? qt(function (t) {
      t.setFullYear(Math.floor(t.getFullYear() / n) * n), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setFullYear(t.getFullYear() + e * n);
    }) : null;
  };qt(function (n) {
    n.setUTCSeconds(0, 0);
  }, function (n, t) {
    n.setTime(+n + t * ai);
  }, function (n, t) {
    return (t - n) / ai;
  }, function (n) {
    return n.getUTCMinutes();
  }), qt(function (n) {
    n.setUTCMinutes(0, 0, 0);
  }, function (n, t) {
    n.setTime(+n + 36e5 * t);
  }, function (n, t) {
    return (t - n) / 36e5;
  }, function (n) {
    return n.getUTCHours();
  });var si = qt(function (n) {
    n.setUTCHours(0, 0, 0, 0);
  }, function (n, t) {
    n.setUTCDate(n.getUTCDate() + t);
  }, function (n, t) {
    return (t - n) / 864e5;
  }, function (n) {
    return n.getUTCDate() - 1;
  }),
      hi = Pt(0),
      di = Pt(1),
      bi = (qt(function (n) {
    n.setUTCDate(1), n.setUTCHours(0, 0, 0, 0);
  }, function (n, t) {
    n.setUTCMonth(n.getUTCMonth() + t);
  }, function (n, t) {
    return t.getUTCMonth() - n.getUTCMonth() + 12 * (t.getUTCFullYear() - n.getUTCFullYear());
  }, function (n) {
    return n.getUTCMonth();
  }), qt(function (n) {
    n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  }, function (n, t) {
    n.setUTCFullYear(n.getUTCFullYear() + t);
  }, function (n, t) {
    return t.getUTCFullYear() - n.getUTCFullYear();
  }, function (n) {
    return n.getUTCFullYear();
  }));bi.every = function (n) {
    return isFinite(n = Math.floor(n)) && n > 0 ? qt(function (t) {
      t.setUTCFullYear(Math.floor(t.getUTCFullYear() / n) * n), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setUTCFullYear(t.getUTCFullYear() + e * n);
    }) : null;
  };var pi,
      gi,
      mi,
      yi,
      vi,
      wi = { "-": "", _: " ", 0: "0" },
      Mi = /^\s*\d+/,
      xi = /^%/,
      _i = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;!function (n) {
    pi = Zt(n), gi = pi.format, mi = pi.parse, yi = pi.utcFormat, vi = pi.utcParse;
  }({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });Date.prototype.toISOString || yi("%Y-%m-%dT%H:%M:%S.%LZ"), +new Date("2000-01-01T00:00:00.000Z") || vi("%Y-%m-%dT%H:%M:%S.%LZ");qe("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), qe("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), qe("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), qe("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Wr(Kn(300, .5, 0), Kn(-240, .5, 1));Wr(Kn(-100, .75, .35), Kn(80, 1.5, .8)), Wr(Kn(260, .75, .35), Kn(80, 1.5, .8)), Kn();$e(qe("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));$e(qe("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), $e(qe("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), $e(qe("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));var Ti = Array.prototype.slice,
      Ci = 1,
      ki = 2,
      Ai = 3,
      Ni = 4,
      Si = 1e-6;n.select = function (n) {
    return "string" == typeof n ? new tn([[document.querySelector(n)]], [document.documentElement]) : new tn([[n]], rr);
  }, n.selectAll = function (n) {
    return "string" == typeof n ? new tn([document.querySelectorAll(n)], [document.documentElement]) : new tn([null == n ? [] : n], rr);
  }, n.csv = ur, n.scaleBand = Sn, n.scaleLinear = jt, n.nest = function () {
    function n(t, i, u, o) {
      if (i >= a.length) return null != e && t.sort(e), null != r ? r(t) : t;for (var c, f, l, s = -1, h = t.length, d = a[i++], b = rn(), p = u(); ++s < h;) {
        (l = b.get(c = d(f = t[s]) + "")) ? l.push(f) : b.set(c, [f]);
      }return b.each(function (t, e) {
        o(p, e, n(t, i, u, o));
      }), p;
    }function t(n, e) {
      if (++e > a.length) return n;var i,
          o = u[e - 1];return null != r && e >= a.length ? i = n.entries() : (i = [], n.each(function (n, r) {
        i.push({ key: r, values: t(n, e) });
      })), null != o ? i.sort(function (n, t) {
        return o(n.key, t.key);
      }) : i;
    }var e,
        r,
        i,
        a = [],
        u = [];return i = { object: function object(t) {
        return n(t, 0, an, un);
      }, map: function map(t) {
        return n(t, 0, on, cn);
      }, entries: function entries(e) {
        return t(n(e, 0, on, cn), 0);
      }, key: function key(n) {
        return a.push(n), i;
      }, sortKeys: function sortKeys(n) {
        return u[a.length - 1] = n, i;
      }, sortValues: function sortValues(n) {
        return e = n, i;
      }, rollup: function rollup(n) {
        return r = n, i;
      } };
  }, n.axisTop = function (n) {
    return Be(Ci, n);
  }, n.axisRight = function (n) {
    return Be(ki, n);
  }, n.axisBottom = function (n) {
    return Be(Ai, n);
  }, n.axisLeft = function (n) {
    return Be(Ni, n);
  };
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

  // Let's start with one and see if we can eventually flip it on a 45deg upward angle
  //new TriangleBar('#graph', dietData[0], regions, regionAbbreviations, { top: 20, right: 20, bottom: 20, left: 30 }, document.querySelector('#graph').clientWidth, document.querySelector('#graph').clientHeight).init();

  // space constraints are making me reconsider the small multiples idea for now – maybe if top axis was tilted on a 45deg upward angle
  new _Legend.Legend('#graph', dietData, regions, regionAbbreviations, { top: 20, right: 10, bottom: 20, left: 10 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).init();

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dietData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var diet = _step.value;

      new _TriangleBarGraphic.TriangleBar('#graph', diet, regions, regionAbbreviations, { top: 20, right: 10, bottom: 20, left: 25 }, document.querySelector('#graph').clientWidth / 6, document.querySelector('#graph').clientHeight / 2).smallMultiples();
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
  }

  _createClass(TriangleBar, [{
    key: 'init',
    value: function init() {
      // mount svg element to DOM
      var graph = d3.select(this.mount).append('svg').attr('width', this.width + this.margin.right + this.margin.left).attr('height', this.height + this.margin.bottom + this.margin.top).append('g').attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');

      var x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
      var y = d3.scaleLinear().rangeRound([this.height, 0]);

      var xAxis = d3.axisBottom(x);
      var yAxis = d3.axisLeft(y).ticks(4);

      x.domain(this.data.values.map(function (d) {
        return d.region;
      }));
      y.domain([0, 100]);

      graph.append('g').attr('class', 'x-axis').attr('transform', 'translate(0, ' + this.height + ')').call(xAxis);

      graph.append('g').attr('class', 'y-axis').call(yAxis);

      // create the points for an equilateral triangle
      // divide the length of the 60deg side by √3 to get the length of the 30deg side
      var points = function points(d) {
        return x(d.region) + x.bandwidth() / 2 - (y(d.followers_pct) - y(0)) / Math.sqrt(3) + ',' + y(0) + ' ' + (x(d.region) + x.bandwidth() / 2 + (y(d.followers_pct) - y(0)) / Math.sqrt(3)) + ',' + y(0) + ' ' + (x(d.region) + x.bandwidth() / 2) + ',' + y(d.followers_pct);
      };

      graph.selectAll('.triangle').data(this.data.values).enter().append('polygon').attr('class', 'triangle').attr('points', points).style('fill', '#fff').style('stroke', '#2fc3c7');
    }
  }, {
    key: 'smallMultiples',
    value: function smallMultiples() {
      var _this = this;

      // mount svg element to DOM
      var graph = d3.select(this.mount).append('svg').attr('width', this.width + this.margin.right + this.margin.left).attr('height', this.height + this.margin.bottom + this.margin.top).append('g').attr('transform', 'translate(' + this.margin.left + ', ' + this.margin.top + ')');

      var x = d3.scaleBand().rangeRound([0, this.width]).padding(0.1);
      var y = d3.scaleLinear().rangeRound([this.height, 0]);

      var xValues = [];
      this.regions.map(function (region) {
        return xValues.push(_this.regionsMap.get(region));
      });

      var xAxis = d3.axisBottom(x);
      var yAxis = d3.axisLeft(y).ticks(4);

      x.domain(this.data.values.map(function (d) {
        return _this.regionsMap.get(d.region);
      }));

      y.domain([0, 100]);

      graph.append('g').attr('class', 'x-axis').attr('transform', 'translate(0, ' + this.height + ')').call(xAxis);

      graph.append('g').attr('class', 'y-axis').call(yAxis);

      // create the points for an equilateral triangle
      // divide the length of the 60deg side by √3 to get the length of the 30deg side
      var points = function points(d) {
        return x(_this.regionsMap.get(d.region)) + x.bandwidth() / 2 - (y(d.followers_pct) - y(0)) / Math.sqrt(3) + ',' + y(0) + ' ' + (x(_this.regionsMap.get(d.region)) + x.bandwidth() / 2 + (y(d.followers_pct) - y(0)) / Math.sqrt(3)) + ',' + y(0) + ' ' + (x(_this.regionsMap.get(d.region)) + x.bandwidth() / 2) + ',' + y(d.followers_pct);
      };

      graph.selectAll('.triangle').data(this.data.values).enter().append('polygon').attr('class', 'triangle').attr('points', points).style('fill', '#fff').style('stroke', '#2fc3c7');
    }
  }]);

  return TriangleBar;
}();

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map