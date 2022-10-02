(function() {
  function r(e, n, t) {
      function o(i, f) {
          if (!n[i]) {
              if (!e[i]) {
                  var c = "function" == typeof require && require;
                  if (!f && c) return c(i, !0);
                  if (u) return u(i, !0);
                  var a = new Error("Cannot find module '" + i + "'");
                  throw a.code = "MODULE_NOT_FOUND", a
              }
              var p = n[i] = {
                  exports: {}
              };
              e[i][0].call(p.exports, function(r) {
                  var n = e[i][1][r];
                  return o(n || r)
              }, p, p.exports, r, e, n, t)
          }
          return n[i].exports
      }
      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
      return o
  }
  return r
})()({
  1: [function(require, module, exports) {
      try {
          var ce = new window.CustomEvent("test");
          if (ce.preventDefault(), !0 !== ce.defaultPrevented) throw new Error("Could not prevent default")
      } catch (e) {
          var CustomEvent = function(e, t) {
              var n, r;
              return t = t || {
                  bubbles: !1,
                  cancelable: !1,
                  detail: void 0
              }, n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r = n.preventDefault, n.preventDefault = function() {
                  r.call(this);
                  try {
                      Object.defineProperty(this, "defaultPrevented", {
                          get: function() {
                              return !0
                          }
                      })
                  } catch (e) {
                      this.defaultPrevented = !0
                  }
              }, n
          };
          CustomEvent.prototype = window.Event.prototype, window.CustomEvent = CustomEvent
      }
  }, {}],
  2: [function(require, module, exports) {
      (function(global) {
          "use strict";

          function _interopRequireDefault(e) {
              return e && e.__esModule ? e : {
                  default: e
              }
          }
          var _index = require("./index"),
              _index2 = _interopRequireDefault(_index);
          ! function(e) {
              e.customSelect = _index2.default
          }("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
  }, {
      "./index": 3
  }],
  3: [function(require, module, exports) {
      "use strict";

      function builder(e, t) {
          function n(e) {
              x && x.classList.remove(t.hasFocusClass), void 0 !== e ? (x = e, x.classList.add(t.hasFocusClass), T && (e.offsetTop < e.offsetParent.scrollTop || e.offsetTop > e.offsetParent.scrollTop + e.offsetParent.clientHeight - e.clientHeight) && e.dispatchEvent(new CustomEvent("custom-select:focus-outside-panel", {
                  bubbles: !0
              }))) : x = void 0
          }

          function s(e) {
              w && (w.classList.remove(t.isSelectedClass), w.removeAttribute("id"), A.removeAttribute("aria-activedescendant")), void 0 !== e ? (e.classList.add(t.isSelectedClass), e.setAttribute("id", E + "-" + L + "-selectedOption"), A.setAttribute("aria-activedescendant", E + "-" + L + "-selectedOption"), w = e, A.children[0].textContent = w.customSelectOriginalOption.text) : (w = void 0, A.children[0].textContent = ""), n(e)
          }

          function o(e) {
              var t = S.querySelector("option[value='" + e + "']");
              if (!t) {
                  t = _slicedToArray(S.options, 1)[0]
              }
              t.selected = !0, s(S.options[S.selectedIndex].customSelectCstOption)
          }

          function a(e) {
              var t = [].indexOf.call(S.options, x.customSelectOriginalOption);
              S.options[t + e] && n(S.options[t + e].customSelectCstOption)
          }

          function r(e) {
              if (e || void 0 === e) {
                  var s = document.querySelector("." + E + "." + t.isOpenClass);
                  s && (s.customSelect.open = !1), y.classList.add(t.isOpenClass), y.classList.add(t.isOpenClass), A.setAttribute("aria-expanded", "true"), w && (N.scrollTop = w.offsetTop), y.dispatchEvent(new CustomEvent("custom-select:open")), T = !0
              } else y.classList.remove(t.isOpenClass), A.setAttribute("aria-expanded", "false"), T = !1, n(w), y.dispatchEvent(new CustomEvent("custom-select:close"));
              return T
          }

          function i(e) {
              e.target === A || A.contains(e.target) ? T ? r(!1) : r() : e.target.classList && e.target.classList.contains(t.optionClass) && N.contains(e.target) ? (s(e.target), w.customSelectOriginalOption.selected = !0, r(!1), S.dispatchEvent(new CustomEvent("change"))) : e.target === S ? A !== document.activeElement && S !== document.activeElement && A.focus() : T && !y.contains(e.target) && r(!1)
          }

          function c(e) {
              e.target.classList && e.target.classList.contains(t.optionClass) && n(e.target)
          }

          function l(e) {
              if (T) switch (e.keyCode) {
                  case 13:
                  case 32:
                      s(x), w.customSelectOriginalOption.selected = !0, S.dispatchEvent(new CustomEvent("change")), r(!1);
                      break;
                  case 27:
                      r(!1);
                      break;
                  case 38:
                      a(-1);
                      break;
                  case 40:
                      a(1);
                      break;
                  default:
                      if (e.keyCode >= 48 && e.keyCode <= 90) {
                          P && clearTimeout(P), P = setTimeout(function() {
                              k = ""
                          }, 1500), k += String.fromCharCode(e.keyCode);
                          for (var t = 0, o = S.options.length; t < o; t++)
                              if (S.options[t].text.toUpperCase().substr(0, k.length) === k) {
                                  n(S.options[t].customSelectCstOption);
                                  break
                              }
                      }
              } else 40 !== e.keyCode && 38 !== e.keyCode && 32 !== e.keyCode || r()
          }

          function d() {
              var e = S.selectedIndex;
              s(-1 === e ? void 0 : S.options[e].customSelectCstOption)
          }

          function u(e) {
              var t = e.currentTarget,
                  n = e.target;
              n.offsetTop < t.scrollTop ? t.scrollTop = n.offsetTop : t.scrollTop = n.offsetTop + n.clientHeight - t.clientHeight
          }

          function p() {
              document.addEventListener("click", i), N.addEventListener("mouseover", c), N.addEventListener("custom-select:focus-outside-panel", u), S.addEventListener("change", d), y.addEventListener("keydown", l)
          }

          function m() {
              document.removeEventListener("click", i), N.removeEventListener("mouseover", c), N.removeEventListener("custom-select:focus-outside-panel", u), S.removeEventListener("change", d), y.removeEventListener("keydown", l)
          }

          function f(e) {
              e && !S.disabled ? (y.classList.add(t.isDisabledClass), S.disabled = !0, A.removeAttribute("tabindex"), y.dispatchEvent(new CustomEvent("custom-select:disabled")), m()) : !e && S.disabled && (y.classList.remove(t.isDisabledClass), S.disabled = !1, A.setAttribute("tabindex", "0"), y.dispatchEvent(new CustomEvent("custom-select:enabled")), p())
          }

          function v(e) {
              var n = e,
                  o = [];
              if (void 0 === n.length) throw new TypeError("Invalid Argument");
              for (var a = 0, r = n.length; a < r; a++)
                  if (n[a] instanceof HTMLElement && "OPTGROUP" === n[a].tagName.toUpperCase()) {
                      var i = document.createElement("div");
                      i.classList.add(t.optgroupClass), i.setAttribute("data-label", n[a].label), i.customSelectOriginalOptgroup = n[a], n[a].customSelectCstOptgroup = i;
                      for (var c = v(n[a].children), l = 0, d = c.length; l < d; l++) i.appendChild(c[l]);
                      o.push(i)
                  } else {
                      if (!(n[a] instanceof HTMLElement && "OPTION" === n[a].tagName.toUpperCase())) throw new TypeError("Invalid Argument");
                      var u = document.createElement("div");
                      u.classList.add(t.optionClass), u.textContent = n[a].text, u.setAttribute("data-value", n[a].value), u.setAttribute("role", "option"), u.customSelectOriginalOption = n[a], n[a].customSelectCstOption = u, n[a].selected && s(u), o.push(u)
                  } return o
          }

          function C(e, t, n) {
              var s = void 0;
              if (void 0 === n || n === S) s = N;
              else {
                  if (!(n instanceof HTMLElement && "OPTGROUP" === n.tagName.toUpperCase() && S.contains(n))) throw new TypeError("Invalid Argument");
                  s = n.customSelectCstOptgroup
              }
              var o = e instanceof HTMLElement ? [e] : e;
              if (t)
                  for (var a = 0, r = o.length; a < r; a++) s === N ? S.appendChild(o[a]) : s.customSelectOriginalOptgroup.appendChild(o[a]);
              for (var i = v(o), c = 0, l = i.length; c < l; c++) s.appendChild(i[c]);
              return o
          }

          function g(e, t) {
              var n = void 0;
              if (t instanceof HTMLElement && "OPTION" === t.tagName.toUpperCase() && S.contains(t)) n = t.customSelectCstOption;
              else {
                  if (!(t instanceof HTMLElement && "OPTGROUP" === t.tagName.toUpperCase() && S.contains(t))) throw new TypeError("Invalid Argument");
                  n = t.customSelectCstOptgroup
              }
              var s = v(e.length ? e : [e]);
              return n.parentNode.insertBefore(s[0], n), t.parentNode.insertBefore(e.length ? e[0] : e, t)
          }

          function b(e) {
              var t = void 0;
              if (e instanceof HTMLElement && "OPTION" === e.tagName.toUpperCase() && S.contains(e)) t = e.customSelectCstOption;
              else {
                  if (!(e instanceof HTMLElement && "OPTGROUP" === e.tagName.toUpperCase() && S.contains(e))) throw new TypeError("Invalid Argument");
                  t = e.customSelectCstOptgroup
              }
              t.parentNode.removeChild(t);
              var n = e.parentNode.removeChild(e);
              return d(), n
          }

          function h() {
              for (var e = []; S.children.length;) N.removeChild(N.children[0]), e.push(S.removeChild(S.children[0]));
              return s(), e
          }

          function O() {
              for (var e = 0, t = S.options.length; e < t; e++) delete S.options[e].customSelectCstOption;
              for (var n = S.getElementsByTagName("optgroup"), s = 0, o = n.length; s < o; s++) delete n.customSelectCstOptgroup;
              return m(), y.parentNode.replaceChild(S, y)
          }
          var E = "customSelect",
              T = !1,
              L = "",
              S = e,
              y = void 0,
              A = void 0,
              x = void 0,
              w = void 0,
              N = void 0,
              j = void 0,
              P = void 0,
              k = "";
          y = document.createElement("div"), y.classList.add(t.containerClass, E), A = document.createElement("span"), A.className = t.openerClass, A.setAttribute("role", "combobox"), A.setAttribute("aria-autocomplete", "list"), A.setAttribute("aria-expanded", "false"), A.innerHTML = "<span>\n   " + (-1 !== S.selectedIndex ? S.options[S.selectedIndex].text : "") + "\n   </span>", N = document.createElement("div");
          for (var H = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", U = 0; U < 5; U++) L += H.charAt(Math.floor(Math.random() * H.length));
          return N.id = E + "-" + L + "-panel", N.className = t.panelClass, N.setAttribute("role", "listbox"), A.setAttribute("aria-owns", N.id), C(S.children, !1), y.appendChild(A), S.parentNode.replaceChild(y, S), y.appendChild(S), y.appendChild(N), document.querySelector('label[for="' + S.id + '"]') ? j = document.querySelector('label[for="' + S.id + '"]') : "LABEL" === y.parentNode.tagName.toUpperCase() && (j = y.parentNode), void 0 !== j && (j.setAttribute("id", E + "-" + L + "-label"), A.setAttribute("aria-labelledby", E + "-" + L + "-label")), S.disabled ? y.classList.add(t.isDisabledClass) : (A.setAttribute("tabindex", "0"), S.setAttribute("tabindex", "-1"), p()), y.customSelect = {
              get pluginOptions() {
                  return t
              },
              get open() {
                  return T
              },
              set open(e) {
                  r(e)
              },
              get disabled() {
                  return S.disabled
              },
              set disabled(e) {
                  f(e)
              },
              get value() {
                  return S.value
              },
              set value(e) {
                  o(e)
              },
              append: function(e, t) {
                  return C(e, !0, t)
              },
              insertBefore: function(e, t) {
                  return g(e, t)
              },
              remove: b,
              empty: h,
              destroy: O,
              opener: A,
              select: S,
              panel: N,
              container: y
          }, S.customSelect = y.customSelect, y.customSelect
      }

      function customSelect(e, t) {
          var n = [],
              s = [];
          return function() {
              if (e && e instanceof HTMLElement && "SELECT" === e.tagName.toUpperCase()) n.push(e);
              else if (e && "string" == typeof e)
                  for (var o = document.querySelectorAll(e), a = 0, r = o.length; a < r; ++a) o[a] instanceof HTMLElement && "SELECT" === o[a].tagName.toUpperCase() && n.push(o[a]);
              else if (e && e.length)
                  for (var i = 0, c = e.length; i < c; ++i) e[i] instanceof HTMLElement && "SELECT" === e[i].tagName.toUpperCase() && n.push(e[i]);
              for (var l = 0, d = n.length; l < d; ++l) s.push(builder(n[l], _extends({}, defaultParams, t)));
              return s
          }()
      }
      Object.defineProperty(exports, "__esModule", {
          value: !0
      });
      var _extends = Object.assign || function(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
              }
              return e
          },
          _slicedToArray = function() {
              function e(e, t) {
                  var n = [],
                      s = !0,
                      o = !1,
                      a = void 0;
                  try {
                      for (var r, i = e[Symbol.iterator](); !(s = (r = i.next()).done) && (n.push(r.value), !t || n.length !== t); s = !0);
                  } catch (e) {
                      o = !0, a = e
                  } finally {
                      try {
                          !s && i.return && i.return()
                      } finally {
                          if (o) throw a
                      }
                  }
                  return n
              }
              return function(t, n) {
                  if (Array.isArray(t)) return t;
                  if (Symbol.iterator in Object(t)) return e(t, n);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance")
              }
          }();
      exports.default = customSelect, require("custom-event-polyfill");
      var defaultParams = {
          containerClass: "custom-select-container",
          openerClass: "custom-select-opener",
          panelClass: "custom-select-panel",
          optionClass: "custom-select-option",
          optgroupClass: "custom-select-optgroup",
          isSelectedClass: "is-selected",
          hasFocusClass: "has-focus",
          isDisabledClass: "is-disabled",
          isOpenClass: "is-open"
      };
  }, {
      "custom-event-polyfill": 1
  }]
}, {}, [2]);
