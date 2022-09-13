import { N as Js, Z as Pi, a3 as ua } from './iframe.1f3a3e8b.js';
import { c as zo, a as Mo } from './index.ef5de913.js';
function za($a) {
  return (
    (za =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (ar) {
            return typeof ar;
          }
        : function (ar) {
            return ar &&
              typeof Symbol == 'function' &&
              ar.constructor === Symbol &&
              ar !== Symbol.prototype
              ? 'symbol'
              : typeof ar;
          }),
    za($a)
  );
}
var Xs = { exports: {} };
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */ (function ($a) {
  (function (ar, Lr) {
    $a.exports = Lr(ar, ar.document, void 0);
  })(typeof window < 'u' ? window : zo, function (ar, Lr, z) {
    var zt = 'OverlayScrollbars',
      _ = {
        o: 'object',
        f: 'function',
        a: 'array',
        s: 'string',
        b: 'boolean',
        n: 'number',
        u: 'undefined',
        z: 'null',
      },
      i = {
        c: 'class',
        s: 'style',
        i: 'id',
        l: 'length',
        p: 'prototype',
        ti: 'tabindex',
        oH: 'offsetHeight',
        cH: 'clientHeight',
        sH: 'scrollHeight',
        oW: 'offsetWidth',
        cW: 'clientWidth',
        sW: 'scrollWidth',
        hOP: 'hasOwnProperty',
        bCR: 'getBoundingClientRect',
      },
      Se = (function () {
        var A = {},
          O = {},
          x = ['-webkit-', '-moz-', '-o-', '-ms-'],
          e = ['WebKit', 'Moz', 'O', 'MS'];
        function u(f) {
          return f.charAt(0).toUpperCase() + f.slice(1);
        }
        return {
          _cssPrefixes: x,
          _jsPrefixes: e,
          _cssProperty: function (d) {
            var B = O[d];
            if (O[i.hOP](d)) return B;
            for (
              var sr = u(d), w = Lr.createElement('div')[i.s], M, vr = 0, R, Sr;
              vr < x.length;
              vr++
            )
              for (
                Sr = x[vr].replace(/-/g, ''), M = [d, x[vr] + d, Sr + sr, u(Sr) + sr], R = 0;
                R < M[i.l];
                R++
              )
                if (w[M[R]] !== z) {
                  B = M[R];
                  break;
                }
            return (O[d] = B), B;
          },
          _cssPropertyValue: function (d, B, sr) {
            var w = d + ' ' + B,
              M = O[w];
            if (O[i.hOP](w)) return M;
            for (
              var vr = Lr.createElement('div')[i.s],
                R = B.split(' '),
                Sr = sr || '',
                H = 0,
                j = -1,
                G;
              H < R[i.l];
              H++
            )
              for (; j < Se._cssPrefixes[i.l]; j++)
                if (
                  ((G = j < 0 ? R[H] : Se._cssPrefixes[j] + R[H]),
                  (vr.cssText = d + ':' + G + Sr),
                  vr[i.l])
                ) {
                  M = G;
                  break;
                }
            return (O[w] = M), M;
          },
          _jsAPI: function (d, B, sr) {
            var w = 0,
              M = A[d];
            if (!A[i.hOP](d)) {
              for (M = ar[d]; w < e[i.l]; w++) M = M || ar[(B ? e[w] : e[w].toLowerCase()) + u(d)];
              A[d] = M;
            }
            return M || sr;
          },
        };
      })(),
      T = (function () {
        function A(x) {
          return x
            ? ar.innerWidth || Lr.documentElement[i.cW] || Lr.body[i.cW]
            : ar.innerHeight || Lr.documentElement[i.cH] || Lr.body[i.cH];
        }
        function O(x, e) {
          if (za(x) != _.f) throw "Can't bind function!";
          var u = i.p,
            f = Array[u].slice.call(arguments, 2),
            d = function () {},
            B = function () {
              return x.apply(
                this instanceof d ? this : e,
                f.concat(Array[u].slice.call(arguments)),
              );
            };
          return x[u] && (d[u] = x[u]), (B[u] = new d()), B;
        }
        return {
          wW: O(A, 0, !0),
          wH: O(A, 0),
          mO: O(Se._jsAPI, 0, 'MutationObserver', !0),
          rO: O(Se._jsAPI, 0, 'ResizeObserver', !0),
          rAF: O(Se._jsAPI, 0, 'requestAnimationFrame', !1, function (x) {
            return ar.setTimeout(x, 1e3 / 60);
          }),
          cAF: O(Se._jsAPI, 0, 'cancelAnimationFrame', !1, function (x) {
            return ar.clearTimeout(x);
          }),
          now: function () {
            return (Date.now && Date.now()) || new Date().getTime();
          },
          stpP: function (e) {
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
          },
          prvD: function (e) {
            e.preventDefault && e.cancelable ? e.preventDefault() : (e.returnValue = !1);
          },
          page: function (e) {
            e = e.originalEvent || e;
            var u = 'page',
              f = 'client',
              d = 'X',
              B = 'Y',
              sr = e.target || e.srcElement || Lr,
              w = sr.ownerDocument || Lr,
              M = w.documentElement,
              vr = w.body;
            if (e.touches !== z) {
              var R = e.touches[0];
              return { x: R[u + d], y: R[u + B] };
            }
            return !e[u + d] && e[f + d] && e[f + d] != null
              ? {
                  x:
                    e[f + d] +
                    ((M && M.scrollLeft) || (vr && vr.scrollLeft) || 0) -
                    ((M && M.clientLeft) || (vr && vr.clientLeft) || 0),
                  y:
                    e[f + B] +
                    ((M && M.scrollTop) || (vr && vr.scrollTop) || 0) -
                    ((M && M.clientTop) || (vr && vr.clientTop) || 0),
                }
              : { x: e[u + d], y: e[u + B] };
          },
          mBtn: function (e) {
            var u = e.button;
            return !e.which && u !== z ? (u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0) : e.which;
          },
          inA: function (e, u) {
            for (var f = 0; f < u[i.l]; f++)
              try {
                if (u[f] === e) return f;
              } catch {}
            return -1;
          },
          isA: function (e) {
            var u = Array.isArray;
            return u ? u(e) : this.type(e) == _.a;
          },
          type: function (e) {
            return e === z || e === null
              ? e + ''
              : Object[i.p].toString
                  .call(e)
                  .replace(/^\[object (.+)\]$/, '$1')
                  .toLowerCase();
          },
          bind: O,
        };
      })(),
      N = Math,
      vt = ar.jQuery,
      $s = (function () {
        var A = {
          p: N.PI,
          c: N.cos,
          s: N.sin,
          w: N.pow,
          t: N.sqrt,
          n: N.asin,
          a: N.abs,
          o: 1.70158,
        };
        return {
          swing: function (x, e, u, f, d) {
            return 0.5 - A.c(x * A.p) / 2;
          },
          linear: function (x, e, u, f, d) {
            return x;
          },
          easeInQuad: function (x, e, u, f, d) {
            return f * (e /= d) * e + u;
          },
          easeOutQuad: function (x, e, u, f, d) {
            return -f * (e /= d) * (e - 2) + u;
          },
          easeInOutQuad: function (x, e, u, f, d) {
            return (e /= d / 2) < 1 ? (f / 2) * e * e + u : (-f / 2) * (--e * (e - 2) - 1) + u;
          },
          easeInCubic: function (x, e, u, f, d) {
            return f * (e /= d) * e * e + u;
          },
          easeOutCubic: function (x, e, u, f, d) {
            return f * ((e = e / d - 1) * e * e + 1) + u;
          },
          easeInOutCubic: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e * e + u
              : (f / 2) * ((e -= 2) * e * e + 2) + u;
          },
          easeInQuart: function (x, e, u, f, d) {
            return f * (e /= d) * e * e * e + u;
          },
          easeOutQuart: function (x, e, u, f, d) {
            return -f * ((e = e / d - 1) * e * e * e - 1) + u;
          },
          easeInOutQuart: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e * e * e + u
              : (-f / 2) * ((e -= 2) * e * e * e - 2) + u;
          },
          easeInQuint: function (x, e, u, f, d) {
            return f * (e /= d) * e * e * e * e + u;
          },
          easeOutQuint: function (x, e, u, f, d) {
            return f * ((e = e / d - 1) * e * e * e * e + 1) + u;
          },
          easeInOutQuint: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e * e * e * e + u
              : (f / 2) * ((e -= 2) * e * e * e * e + 2) + u;
          },
          easeInSine: function (x, e, u, f, d) {
            return -f * A.c((e / d) * (A.p / 2)) + f + u;
          },
          easeOutSine: function (x, e, u, f, d) {
            return f * A.s((e / d) * (A.p / 2)) + u;
          },
          easeInOutSine: function (x, e, u, f, d) {
            return (-f / 2) * (A.c((A.p * e) / d) - 1) + u;
          },
          easeInExpo: function (x, e, u, f, d) {
            return e == 0 ? u : f * A.w(2, 10 * (e / d - 1)) + u;
          },
          easeOutExpo: function (x, e, u, f, d) {
            return e == d ? u + f : f * (-A.w(2, (-10 * e) / d) + 1) + u;
          },
          easeInOutExpo: function (x, e, u, f, d) {
            return e == 0
              ? u
              : e == d
              ? u + f
              : (e /= d / 2) < 1
              ? (f / 2) * A.w(2, 10 * (e - 1)) + u
              : (f / 2) * (-A.w(2, -10 * --e) + 2) + u;
          },
          easeInCirc: function (x, e, u, f, d) {
            return -f * (A.t(1 - (e /= d) * e) - 1) + u;
          },
          easeOutCirc: function (x, e, u, f, d) {
            return f * A.t(1 - (e = e / d - 1) * e) + u;
          },
          easeInOutCirc: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (-f / 2) * (A.t(1 - e * e) - 1) + u
              : (f / 2) * (A.t(1 - (e -= 2) * e) + 1) + u;
          },
          easeInElastic: function (x, e, u, f, d) {
            var B = A.o,
              sr = 0,
              w = f;
            return e == 0
              ? u
              : (e /= d) == 1
              ? u + f
              : (sr || (sr = d * 0.3),
                w < A.a(f) ? ((w = f), (B = sr / 4)) : (B = (sr / (2 * A.p)) * A.n(f / w)),
                -(w * A.w(2, 10 * (e -= 1)) * A.s(((e * d - B) * (2 * A.p)) / sr)) + u);
          },
          easeOutElastic: function (x, e, u, f, d) {
            var B = A.o,
              sr = 0,
              w = f;
            return e == 0
              ? u
              : (e /= d) == 1
              ? u + f
              : (sr || (sr = d * 0.3),
                w < A.a(f) ? ((w = f), (B = sr / 4)) : (B = (sr / (2 * A.p)) * A.n(f / w)),
                w * A.w(2, -10 * e) * A.s(((e * d - B) * (2 * A.p)) / sr) + f + u);
          },
          easeInOutElastic: function (x, e, u, f, d) {
            var B = A.o,
              sr = 0,
              w = f;
            return e == 0
              ? u
              : (e /= d / 2) == 2
              ? u + f
              : (sr || (sr = d * (0.3 * 1.5)),
                w < A.a(f) ? ((w = f), (B = sr / 4)) : (B = (sr / (2 * A.p)) * A.n(f / w)),
                e < 1
                  ? -0.5 * (w * A.w(2, 10 * (e -= 1)) * A.s(((e * d - B) * (2 * A.p)) / sr)) + u
                  : w * A.w(2, -10 * (e -= 1)) * A.s(((e * d - B) * (2 * A.p)) / sr) * 0.5 + f + u);
          },
          easeInBack: function (x, e, u, f, d, B) {
            return (B = B || A.o), f * (e /= d) * e * ((B + 1) * e - B) + u;
          },
          easeOutBack: function (x, e, u, f, d, B) {
            return (B = B || A.o), f * ((e = e / d - 1) * e * ((B + 1) * e + B) + 1) + u;
          },
          easeInOutBack: function (x, e, u, f, d, B) {
            return (
              (B = B || A.o),
              (e /= d / 2) < 1
                ? (f / 2) * (e * e * (((B *= 1.525) + 1) * e - B)) + u
                : (f / 2) * ((e -= 2) * e * (((B *= 1.525) + 1) * e + B) + 2) + u
            );
          },
          easeInBounce: function (x, e, u, f, d) {
            return f - this.easeOutBounce(x, d - e, 0, f, d) + u;
          },
          easeOutBounce: function (x, e, u, f, d) {
            var B = 7.5625;
            return (e /= d) < 1 / 2.75
              ? f * (B * e * e) + u
              : e < 2 / 2.75
              ? f * (B * (e -= 1.5 / 2.75) * e + 0.75) + u
              : e < 2.5 / 2.75
              ? f * (B * (e -= 2.25 / 2.75) * e + 0.9375) + u
              : f * (B * (e -= 2.625 / 2.75) * e + 0.984375) + u;
          },
          easeInOutBounce: function (x, e, u, f, d) {
            return e < d / 2
              ? this.easeInBounce(x, e * 2, 0, f, d) * 0.5 + u
              : this.easeOutBounce(x, e * 2 - d, 0, f, d) * 0.5 + f * 0.5 + u;
          },
        };
      })(),
      V = (function () {
        var A = /[^\x20\t\r\n\f]+/g,
          O = ' ',
          x = '',
          e = 'scrollLeft',
          u = 'scrollTop',
          f = [],
          d = T.type,
          B = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          };
        function sr() {
          var v,
            n,
            s,
            c,
            p,
            y,
            E = arguments[0] || {},
            D = 1,
            q = arguments[i.l],
            I = !1;
          for (
            d(E) == _.b && ((I = E), (E = arguments[1] || {}), (D = 2)),
              d(E) != _.o && !d(E) == _.f && (E = {}),
              q === D && ((E = $), --D);
            D < q;
            D++
          )
            if ((p = arguments[D]) != null)
              for (c in p)
                (v = E[c]),
                  (s = p[c]),
                  E !== s &&
                    (I && s && (R(s) || (n = T.isA(s)))
                      ? (n ? ((n = !1), (y = v && T.isA(v) ? v : [])) : (y = v && R(v) ? v : {}),
                        (E[c] = sr(I, y, s)))
                      : s !== z && (E[c] = s));
          return E;
        }
        function w(v, n, s) {
          for (var c = s || 0; c < n[i.l]; c++) if (n[c] === v) return c;
          return -1;
        }
        function M(v) {
          return d(v) == _.f;
        }
        function vr(v) {
          for (var n in v) return !1;
          return !0;
        }
        function R(v) {
          if (!v || d(v) != _.o) return !1;
          var n,
            s = i.p,
            c = Object[s].hasOwnProperty,
            p = c.call(v, 'constructor'),
            y = v.constructor && v.constructor[s] && c.call(v.constructor[s], 'isPrototypeOf');
          if (v.constructor && !p && !y) return !1;
          for (n in v);
          return d(n) == _.u || c.call(v, n);
        }
        function Sr(v, n) {
          var s = 0;
          if (H(v)) for (; s < v[i.l] && n.call(v[s], s, v[s]) !== !1; s++);
          else for (s in v) if (n.call(v[s], s, v[s]) === !1) break;
          return v;
        }
        function H(v) {
          var n = !!v && [i.l] in v && v[i.l],
            s = d(v);
          return M(s) ? !1 : s == _.a || n === 0 || (d(n) == _.n && n > 0 && n - 1 in v);
        }
        function j(v) {
          var n = v.match(A) || [];
          return n.join(O);
        }
        function G(v, n) {
          for (var s = (v.parentNode || Lr).querySelectorAll(n) || [], c = s[i.l]; c--; )
            if (s[c] == v) return !0;
          return !1;
        }
        function L(v, n, s) {
          if (T.isA(s)) for (var c = 0; c < s[i.l]; c++) L(v, n, s[c]);
          else
            d(s) == _.s
              ? v.insertAdjacentHTML(n, s)
              : v.insertAdjacentElement(n, s.nodeType ? s : s[0]);
        }
        function ur(v, n, s) {
          try {
            v[i.s][n] !== z && (v[i.s][n] = De(n, s));
          } catch {}
        }
        function De(v, n) {
          return !B[v.toLowerCase()] && d(n) == _.n && (n += 'px'), n;
        }
        function X(v, n) {
          var s, c;
          n !== !1 && v.q.splice(0, 1),
            v.q[i.l] > 0
              ? ((c = v.q[0]), k(v.el, c.props, c.duration, c.easing, c.complete, !0))
              : ((s = w(v, f)), s > -1 && f.splice(s, 1));
        }
        function jr(v, n, s) {
          n === e || n === u ? (v[n] = s) : ur(v, n, s);
        }
        function k(v, n, s, c, p, y) {
          var E = R(s),
            D = {},
            q = {},
            I = 0,
            rr,
            Hr,
            Pr,
            Tr,
            Vr,
            Dr;
          for (
            E
              ? ((c = s.easing),
                (Pr = s.progress),
                (Tr = s.step),
                (Vr = s.specialEasing),
                (p = s.complete),
                (Dr = s.duration))
              : (Dr = s),
              Vr = Vr || {},
              Dr = Dr || 400,
              c = c || 'swing',
              y = y || !1;
            I < f[i.l];
            I++
          )
            if (f[I].el === v) {
              Hr = f[I];
              break;
            }
          Hr || ((Hr = { el: v, q: [] }), f.push(Hr));
          for (rr in n) rr === e || rr === u ? (D[rr] = v[rr]) : (D[rr] = $(v).css(rr));
          for (rr in D) D[rr] !== n[rr] && n[rr] !== z && (q[rr] = n[rr]);
          if (vr(q)) y && X(Hr);
          else {
            var Te,
              Be,
              ze,
              mr,
              ye,
              fr,
              gr,
              fa,
              je,
              ha = y ? 0 : w(dr, Hr.q),
              dr = { props: q, duration: E ? s : Dr, easing: c, complete: p };
            if ((ha === -1 && ((ha = Hr.q[i.l]), Hr.q.push(dr)), ha === 0))
              if (Dr > 0)
                (gr = T.now()),
                  (fa = function () {
                    (Te = T.now()),
                      (je = Te - gr),
                      (Be = dr.stop || je >= Dr),
                      (ze = 1 - (N.max(0, gr + Dr - Te) / Dr || 0));
                    for (rr in q)
                      (mr = parseFloat(D[rr])),
                        (ye = parseFloat(q[rr])),
                        (fr = (ye - mr) * $s[Vr[rr] || c](ze, ze * Dr, 0, 1, Dr) + mr),
                        jr(v, rr, fr),
                        M(Tr) &&
                          Tr(fr, {
                            elem: v,
                            prop: rr,
                            start: mr,
                            now: fr,
                            end: ye,
                            pos: ze,
                            options: {
                              easing: c,
                              speacialEasing: Vr,
                              duration: Dr,
                              complete: p,
                              step: Tr,
                            },
                            startTime: gr,
                          });
                    M(Pr) && Pr({}, ze, N.max(0, Dr - je)),
                      Be ? (X(Hr), M(p) && p()) : (dr.frame = T.rAF()(fa));
                  }),
                  (dr.frame = T.rAF()(fa));
              else {
                for (rr in q) jr(v, rr, q[rr]);
                X(Hr);
              }
          }
        }
        function hr(v, n, s) {
          for (var c, p, y, E = 0; E < f[i.l]; E++)
            if (((c = f[E]), c.el === v)) {
              if (c.q[i.l] > 0) {
                if (((p = c.q[0]), (p.stop = !0), T.cAF()(p.frame), c.q.splice(0, 1), s))
                  for (y in p.props) jr(v, y, p.props[y]);
                n ? (c.q = []) : X(c, !1);
              }
              break;
            }
        }
        function br(v) {
          return !!(v[i.oW] || v[i.oH] || v.getClientRects()[i.l]);
        }
        function $(v) {
          if (arguments[i.l] === 0) return this;
          var n = new $(),
            s = v,
            c = 0,
            p,
            y;
          if (d(v) == _.s)
            for (
              s = [],
                v.charAt(0) === '<'
                  ? ((y = Lr.createElement('div')), (y.innerHTML = v), (p = y.children))
                  : (p = Lr.querySelectorAll(v));
              c < p[i.l];
              c++
            )
              s.push(p[c]);
          if (s) {
            for (
              d(s) != _.s && (!H(s) || s === ar || s === s.self) && (s = [s]), c = 0;
              c < s[i.l];
              c++
            )
              n[c] = s[c];
            n[i.l] = s[i.l];
          }
          return n;
        }
        return (
          ($[i.p] = {
            on: function (n, s) {
              n = (n || x).match(A) || [x];
              var c = n[i.l],
                p = 0,
                y;
              return this.each(function () {
                y = this;
                try {
                  if (y.addEventListener) for (; p < c; p++) y.addEventListener(n[p], s);
                  else if (y.detachEvent) for (; p < c; p++) y.attachEvent('on' + n[p], s);
                } catch {}
              });
            },
            off: function (n, s) {
              n = (n || x).match(A) || [x];
              var c = n[i.l],
                p = 0,
                y;
              return this.each(function () {
                y = this;
                try {
                  if (y.removeEventListener) for (; p < c; p++) y.removeEventListener(n[p], s);
                  else if (y.detachEvent) for (; p < c; p++) y.detachEvent('on' + n[p], s);
                } catch {}
              });
            },
            one: function (n, s) {
              return (
                (n = (n || x).match(A) || [x]),
                this.each(function () {
                  var c = $(this);
                  $.each(n, function (p, y) {
                    var E = function D(q) {
                      s.call(this, q), c.off(y, D);
                    };
                    c.on(y, E);
                  });
                })
              );
            },
            trigger: function (n) {
              var s, c;
              return this.each(function () {
                (s = this),
                  Lr.createEvent
                    ? ((c = Lr.createEvent('HTMLEvents')),
                      c.initEvent(n, !0, !1),
                      s.dispatchEvent(c))
                    : s.fireEvent('on' + n);
              });
            },
            append: function (n) {
              return this.each(function () {
                L(this, 'beforeend', n);
              });
            },
            prepend: function (n) {
              return this.each(function () {
                L(this, 'afterbegin', n);
              });
            },
            before: function (n) {
              return this.each(function () {
                L(this, 'beforebegin', n);
              });
            },
            after: function (n) {
              return this.each(function () {
                L(this, 'afterend', n);
              });
            },
            remove: function () {
              return this.each(function () {
                var n = this,
                  s = n.parentNode;
                s != null && s.removeChild(n);
              });
            },
            unwrap: function () {
              var n = [],
                s,
                c,
                p;
              for (
                this.each(function () {
                  (p = this.parentNode), w(p, n) === -1 && n.push(p);
                }),
                  s = 0;
                s < n[i.l];
                s++
              ) {
                for (c = n[s], p = c.parentNode; c.firstChild; ) p.insertBefore(c.firstChild, c);
                p.removeChild(c);
              }
              return this;
            },
            wrapAll: function (n) {
              for (
                var s, c = this, p = $(n)[0], y = p, E = c[0].parentNode, D = c[0].previousSibling;
                y.childNodes[i.l] > 0;

              )
                y = y.childNodes[0];
              for (s = 0; c[i.l] - s; y.firstChild === c[0] && s++) y.appendChild(c[s]);
              var q = D ? D.nextSibling : E.firstChild;
              return E.insertBefore(p, q), this;
            },
            wrapInner: function (n) {
              return this.each(function () {
                var s = $(this),
                  c = s.contents();
                c[i.l] ? c.wrapAll(n) : s.append(n);
              });
            },
            wrap: function (n) {
              return this.each(function () {
                $(this).wrapAll(n);
              });
            },
            css: function (n, s) {
              var c,
                p,
                y,
                E = ar.getComputedStyle;
              return d(n) == _.s
                ? s === z
                  ? ((c = this[0]),
                    (y = E ? E(c, null) : c.currentStyle[n]),
                    E ? (y != null ? y.getPropertyValue(n) : c[i.s][n]) : y)
                  : this.each(function () {
                      ur(this, n, s);
                    })
                : this.each(function () {
                    for (p in n) ur(this, p, n[p]);
                  });
            },
            hasClass: function (n) {
              for (var s, c = 0, p = O + n + O, y; (s = this[c++]); ) {
                if (((y = s.classList), y && y.contains(n))) return !0;
                if (s.nodeType === 1 && (O + j(s.className + x) + O).indexOf(p) > -1) return !0;
              }
              return !1;
            },
            addClass: function (n) {
              var s,
                c,
                p,
                y,
                E,
                D,
                q,
                I,
                rr = 0,
                Hr = 0;
              if (n) {
                for (s = n.match(A) || []; (c = this[rr++]); )
                  if (((I = c.classList), q === z && (q = I !== z), q))
                    for (; (E = s[Hr++]); ) I.add(E);
                  else if (((y = c.className + x), (p = c.nodeType === 1 && O + j(y) + O), p)) {
                    for (; (E = s[Hr++]); ) p.indexOf(O + E + O) < 0 && (p += E + O);
                    (D = j(p)), y !== D && (c.className = D);
                  }
              }
              return this;
            },
            removeClass: function (n) {
              var s,
                c,
                p,
                y,
                E,
                D,
                q,
                I,
                rr = 0,
                Hr = 0;
              if (n) {
                for (s = n.match(A) || []; (c = this[rr++]); )
                  if (((I = c.classList), q === z && (q = I !== z), q))
                    for (; (E = s[Hr++]); ) I.remove(E);
                  else if (((y = c.className + x), (p = c.nodeType === 1 && O + j(y) + O), p)) {
                    for (; (E = s[Hr++]); )
                      for (; p.indexOf(O + E + O) > -1; ) p = p.replace(O + E + O, O);
                    (D = j(p)), y !== D && (c.className = D);
                  }
              }
              return this;
            },
            hide: function () {
              return this.each(function () {
                this[i.s].display = 'none';
              });
            },
            show: function () {
              return this.each(function () {
                this[i.s].display = 'block';
              });
            },
            attr: function (n, s) {
              for (var c = 0, p; (p = this[c++]); ) {
                if (s === z) return p.getAttribute(n);
                p.setAttribute(n, s);
              }
              return this;
            },
            removeAttr: function (n) {
              return this.each(function () {
                this.removeAttribute(n);
              });
            },
            offset: function () {
              var n = this[0],
                s = n[i.bCR](),
                c = ar.pageXOffset || Lr.documentElement[e],
                p = ar.pageYOffset || Lr.documentElement[u];
              return { top: s.top + p, left: s.left + c };
            },
            position: function () {
              var n = this[0];
              return { top: n.offsetTop, left: n.offsetLeft };
            },
            scrollLeft: function (n) {
              for (var s = 0, c; (c = this[s++]); ) {
                if (n === z) return c[e];
                c[e] = n;
              }
              return this;
            },
            scrollTop: function (n) {
              for (var s = 0, c; (c = this[s++]); ) {
                if (n === z) return c[u];
                c[u] = n;
              }
              return this;
            },
            val: function (n) {
              var s = this[0];
              return n ? ((s.value = n), this) : s.value;
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (n) {
              return $(this[n >= 0 ? n : this[i.l] + n]);
            },
            find: function (n) {
              var s = [],
                c;
              return (
                this.each(function () {
                  var p = this,
                    y = p.querySelectorAll(n);
                  for (c = 0; c < y[i.l]; c++) s.push(y[c]);
                }),
                $(s)
              );
            },
            children: function (n) {
              var s = [],
                c,
                p,
                y;
              return (
                this.each(function () {
                  for (p = this.children, y = 0; y < p[i.l]; y++)
                    (c = p[y]),
                      n ? ((c.matches && c.matches(n)) || G(c, n)) && s.push(c) : s.push(c);
                }),
                $(s)
              );
            },
            parent: function (n) {
              var s = [],
                c;
              return (
                this.each(function () {
                  (c = this.parentNode), (!n || $(c).is(n)) && s.push(c);
                }),
                $(s)
              );
            },
            is: function (n) {
              var s, c;
              for (c = 0; c < this[i.l]; c++) {
                if (((s = this[c]), n === ':visible')) return br(s);
                if (n === ':hidden') return !br(s);
                if ((s.matches && s.matches(n)) || G(s, n)) return !0;
              }
              return !1;
            },
            contents: function () {
              var n = [],
                s,
                c;
              return (
                this.each(function () {
                  for (s = this.childNodes, c = 0; c < s[i.l]; c++) n.push(s[c]);
                }),
                $(n)
              );
            },
            each: function (n) {
              return Sr(this, n);
            },
            animate: function (n, s, c, p) {
              return this.each(function () {
                k(this, n, s, c, p);
              });
            },
            stop: function (n, s) {
              return this.each(function () {
                hr(this, n, s);
              });
            },
          }),
          sr($, { extend: sr, inArray: w, isEmptyObject: vr, isPlainObject: R, each: Sr }),
          $
        );
      })(),
      Ma = (function () {
        var A = [],
          O = '__overlayScrollbars__';
        return function (x, e) {
          var u = arguments[i.l];
          if (u < 1) return A;
          if (e) (x[O] = e), A.push(x);
          else {
            var f = T.inA(x, A);
            if (f > -1)
              if (u > 1) delete x[O], A.splice(f, 1);
              else return A[f][O];
          }
        };
      })(),
      Dn = (function () {
        var A,
          O,
          x,
          e = [],
          u = (function () {
            var w = T.type,
              M = [_.b, _.n, _.s, _.a, _.o, _.f, _.z],
              vr = ' ',
              R = ':',
              Sr = [_.z, _.s],
              H = _.n,
              j = [_.z, _.b],
              G = [!0, _.b],
              L = [!1, _.b],
              ur = [null, [_.z, _.f]],
              De = [['img'], [_.s, _.a, _.z]],
              X = [
                ['style', 'class'],
                [_.s, _.a, _.z],
              ],
              jr = 'n:none b:both h:horizontal v:vertical',
              k = 'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden',
              hr = 'v:visible h:hidden a:auto',
              br = 'n:never s:scroll l:leave m:move',
              $ = {
                className: ['os-theme-dark', Sr],
                resize: ['none', jr],
                sizeAutoCapable: G,
                clipAlways: G,
                normalizeRTL: G,
                paddingAbsolute: L,
                autoUpdate: [null, j],
                autoUpdateInterval: [33, H],
                updateOnLoad: De,
                nativeScrollbarsOverlaid: { showNativeScrollbars: L, initialize: G },
                overflowBehavior: { x: ['scroll', k], y: ['scroll', k] },
                scrollbars: {
                  visibility: ['auto', hr],
                  autoHide: ['never', br],
                  autoHideDelay: [800, H],
                  dragScrolling: G,
                  clickScrolling: L,
                  touchSupport: G,
                  snapHandle: L,
                },
                textarea: { dynWidth: L, dynHeight: L, inheritedAttrs: X },
                callbacks: {
                  onInitialized: ur,
                  onInitializationWithdrawn: ur,
                  onDestroyed: ur,
                  onScrollStart: ur,
                  onScroll: ur,
                  onScrollStop: ur,
                  onOverflowChanged: ur,
                  onOverflowAmountChanged: ur,
                  onDirectionChanged: ur,
                  onContentSizeChanged: ur,
                  onHostSizeChanged: ur,
                  onUpdated: ur,
                },
              },
              v = function (s) {
                var c = function p(y) {
                  var E, D, q;
                  for (E in y)
                    !y[i.hOP](E) ||
                      ((D = y[E]),
                      (q = w(D)),
                      q == _.a ? (y[E] = D[s ? 1 : 0]) : q == _.o && (y[E] = p(D)));
                  return y;
                };
                return c(V.extend(!0, {}, $));
              };
            return {
              _defaults: v(),
              _template: v(!0),
              _validate: function (s, c, p, y) {
                var E = {},
                  D = {},
                  q = V.extend(!0, {}, s),
                  I = V.inArray,
                  rr = V.isEmptyObject,
                  Hr = function Pr(Tr, Vr, Dr, Te, Be, ze) {
                    for (var mr in Vr)
                      if (Vr[i.hOP](mr) && Tr[i.hOP](mr)) {
                        var ye = !1,
                          fr = !1,
                          gr = Vr[mr],
                          fa = w(gr),
                          je = fa == _.o,
                          ha = T.isA(gr) ? gr : [gr],
                          dr = Dr[mr],
                          me = Tr[mr],
                          ut = w(me),
                          le = ze ? ze + '.' : '',
                          Me = 'The option "' + le + mr + `" wasn't set, because`,
                          Je = [],
                          qr = [],
                          ve,
                          ue,
                          _r,
                          Re,
                          da,
                          J,
                          xr,
                          xe;
                        if (((dr = dr === z ? {} : dr), je && ut == _.o))
                          (Te[mr] = {}),
                            (Be[mr] = {}),
                            Pr(me, gr, dr, Te[mr], Be[mr], le + mr),
                            V.each([Tr, Te, Be], function (K, zr) {
                              rr(zr[mr]) && delete zr[mr];
                            });
                        else if (!je) {
                          for (J = 0; J < ha[i.l]; J++)
                            if (
                              ((da = ha[J]), (fa = w(da)), (_r = fa == _.s && I(da, M) === -1), _r)
                            )
                              for (
                                Je.push(_.s), ve = da.split(vr), qr = qr.concat(ve), xr = 0;
                                xr < ve[i.l];
                                xr++
                              ) {
                                for (ue = ve[xr].split(R), Re = ue[0], xe = 0; xe < ue[i.l]; xe++)
                                  if (me === ue[xe]) {
                                    ye = !0;
                                    break;
                                  }
                                if (ye) break;
                              }
                            else if ((Je.push(da), ut === da)) {
                              ye = !0;
                              break;
                            }
                          ye
                            ? ((fr = me !== dr),
                              fr && (Te[mr] = me),
                              (_r ? I(dr, ue) < 0 : fr) && (Be[mr] = _r ? Re : me))
                            : p &&
                              console.warn(
                                Me +
                                  " it doesn't accept the type [ " +
                                  ut.toUpperCase() +
                                  ' ] with the value of "' +
                                  me +
                                  `".\r
Accepted types are: [ ` +
                                  Je.join(', ').toUpperCase() +
                                  ' ].' +
                                  (qr[length] > 0
                                    ? `\r
Valid strings are: [ ` +
                                      qr.join(', ').split(R).join(', ') +
                                      ' ].'
                                    : ''),
                              ),
                            delete Tr[mr];
                        }
                      }
                  };
                return (
                  Hr(q, c, y || {}, E, D),
                  !rr(q) &&
                    p &&
                    console.warn(
                      `The following options are discarded due to invalidity:\r
` + ar.JSON.stringify(q, null, 2),
                    ),
                  { _default: E, _prepared: D }
                );
              },
            };
          })();
        function f() {
          O || (O = new d(u._defaults)), x || (x = new B(O));
        }
        function d(w) {
          var M = this,
            vr = 'overflow',
            R = 'hidden',
            Sr = 'scroll',
            H = V('body'),
            j = V('<div id="os-dummy-scrollbar-size"><div></div></div>'),
            G = j[0],
            L = V(j.children('div').eq(0));
          H.append(j), j.hide().show();
          var ur = jr(G),
            De = { x: ur.x === 0, y: ur.y === 0 },
            X = (function () {
              var k = ar.navigator.userAgent,
                hr = 'indexOf',
                br = 'substring',
                $ = k[hr]('MSIE '),
                v = k[hr]('Trident/'),
                n = k[hr]('Edge/'),
                s = k[hr]('rv:'),
                c,
                p = parseInt;
              return (
                $ > 0
                  ? (c = p(k[br]($ + 5, k[hr]('.', $)), 10))
                  : v > 0
                  ? (c = p(k[br](s + 3, k[hr]('.', s)), 10))
                  : n > 0 && (c = p(k[br](n + 5, k[hr]('.', n)), 10)),
                c
              );
            })();
          V.extend(M, {
            defaultOptions: w,
            msie: X,
            autoUpdateLoop: !1,
            autoUpdateRecommended: !T.mO(),
            nativeScrollbarSize: ur,
            nativeScrollbarIsOverlaid: De,
            nativeScrollbarStyling: (function () {
              var k = !1;
              j.addClass('os-viewport-native-scrollbars-invisible');
              try {
                k =
                  (j.css('scrollbar-width') === 'none' && (X > 9 || !X)) ||
                  ar.getComputedStyle(G, '::-webkit-scrollbar').getPropertyValue('display') ===
                    'none';
              } catch {}
              return k;
            })(),
            overlayScrollbarDummySize: { x: 30, y: 30 },
            cssCalc: Se._cssPropertyValue('width', 'calc', '(1px)') || null,
            restrictedMeasuring: (function () {
              j.css(vr, R);
              var k = { w: G[i.sW], h: G[i.sH] };
              j.css(vr, 'visible');
              var hr = { w: G[i.sW], h: G[i.sH] };
              return k.w - hr.w !== 0 || k.h - hr.h !== 0;
            })(),
            rtlScrollBehavior: (function () {
              j.css({ 'overflow-y': R, 'overflow-x': Sr, direction: 'rtl' }).scrollLeft(0);
              var k = j.offset(),
                hr = L.offset();
              j.scrollLeft(-999);
              var br = L.offset();
              return { i: k.left === hr.left, n: hr.left !== br.left };
            })(),
            supportTransform: !!Se._cssProperty('transform'),
            supportTransition: !!Se._cssProperty('transition'),
            supportPassiveEvents: (function () {
              var k = !1;
              try {
                ar.addEventListener(
                  'test',
                  null,
                  Object.defineProperty({}, 'passive', {
                    get: function () {
                      k = !0;
                    },
                  }),
                );
              } catch {}
              return k;
            })(),
            supportResizeObserver: !!T.rO(),
            supportMutationObserver: !!T.mO(),
          }),
            j.removeAttr(i.s).remove(),
            (function () {
              if (De.x && De.y) return;
              var k = N.abs,
                hr = T.wW(),
                br = T.wH(),
                $ = s(),
                v = function () {
                  if (Ma().length > 0) {
                    var p = T.wW(),
                      y = T.wH(),
                      E = p - hr,
                      D = y - br;
                    if (E === 0 && D === 0) return;
                    var q = N.round(p / (hr / 100)),
                      I = N.round(y / (br / 100)),
                      rr = k(E),
                      Hr = k(D),
                      Pr = k(q),
                      Tr = k(I),
                      Vr = s(),
                      Dr = rr > 2 && Hr > 2,
                      Te = !n(Pr, Tr),
                      Be = Vr !== $ && $ > 0,
                      ze = Dr && Te && Be,
                      mr = M.nativeScrollbarSize,
                      ye;
                    ze &&
                      (H.append(j),
                      (ye = M.nativeScrollbarSize = jr(j[0])),
                      j.remove(),
                      (mr.x !== ye.x || mr.y !== ye.y) &&
                        V.each(Ma(), function () {
                          Ma(this) && Ma(this).update('zoom');
                        })),
                      (hr = p),
                      (br = y),
                      ($ = Vr);
                  }
                };
              function n(c, p) {
                var y = k(c),
                  E = k(p);
                return !(y === E || y + 1 === E || y - 1 === E);
              }
              function s() {
                var c = ar.screen.deviceXDPI || 0,
                  p = ar.screen.logicalXDPI || 1;
                return ar.devicePixelRatio || c / p;
              }
              V(ar).on('resize', v);
            })();
          function jr(k) {
            return { x: k[i.oH] - k[i.cH], y: k[i.oW] - k[i.cW] };
          }
        }
        function B(w) {
          var M = this,
            vr = V.inArray,
            R = T.now,
            Sr = 'autoUpdate',
            H = Sr + 'Interval',
            j = i.l,
            G = [],
            L = [],
            ur = !1,
            De = 33,
            X = De,
            jr = R(),
            k,
            hr = function br() {
              if (G[j] > 0 && ur) {
                k = T.rAF()(function () {
                  br();
                });
                var $ = R(),
                  v = $ - jr,
                  n,
                  s,
                  c,
                  p,
                  y,
                  E;
                if (v > X) {
                  (jr = $ - (v % X)), (n = De);
                  for (var D = 0; D < G[j]; D++)
                    (s = G[D]),
                      s !== z &&
                        ((c = s.options()),
                        (p = c[Sr]),
                        (y = N.max(1, c[H])),
                        (E = R()),
                        (p === !0 || p === null) &&
                          E - L[D] > y &&
                          (s.update('auto'), (L[D] = new Date((E += y)))),
                        (n = N.max(1, N.min(n, y))));
                  X = n;
                }
              } else X = De;
            };
          (M.add = function (br) {
            vr(br, G) === -1 &&
              (G.push(br),
              L.push(R()),
              G[j] > 0 && !ur && ((ur = !0), (w.autoUpdateLoop = ur), hr()));
          }),
            (M.remove = function (br) {
              var $ = vr(br, G);
              $ > -1 &&
                (L.splice($, 1),
                G.splice($, 1),
                G[j] === 0 &&
                  ur &&
                  ((ur = !1), (w.autoUpdateLoop = ur), k !== z && (T.cAF()(k), (k = -1))));
            });
        }
        function sr(w, M, vr, R, Sr) {
          var H = T.type,
            j = V.inArray,
            G = V.each,
            L = new A(),
            ur = V[i.p];
          if (!Ms(w)) return;
          if (Ma(w)) {
            var De = Ma(w);
            return De.options(M), De;
          }
          var X,
            jr,
            k,
            hr,
            br,
            $,
            v,
            n,
            s,
            c,
            p,
            y,
            E,
            D,
            q,
            I,
            rr,
            Hr,
            Pr,
            Tr,
            Vr,
            Dr,
            Te,
            Be,
            ze,
            mr,
            ye,
            fr,
            gr,
            fa = {},
            je = {},
            ha = {},
            dr = {},
            me = {},
            ut = '-hidden',
            le = 'margin-',
            Me = 'padding-',
            Je = 'border-',
            qr = 'top',
            ve = 'right',
            ue = 'bottom',
            _r = 'left',
            Re = 'min-',
            da = 'max-',
            J = 'width',
            xr = 'height',
            xe = 'float',
            K = '',
            zr = 'auto',
            zn = 'sync',
            Fe = 'scroll',
            Ra = '100%',
            Mt = 'x',
            Rt = 'y',
            Ue = '.',
            fe = ' ',
            Mn = 'scrollbar',
            Rn = '-horizontal',
            Wn = '-vertical',
            he = Fe + 'Left',
            de = Fe + 'Top',
            St = 'mousedown touchstart',
            Wt = 'mouseup touchend touchcancel',
            Bt = 'mousemove touchmove',
            Di = 'mouseenter',
            zi = 'mouseleave',
            Bn = 'keydown',
            Fn = 'keyup',
            Ft = 'selectstart',
            Un = 'transitionend webkitTransitionEnd oTransitionEnd',
            Qn = '__overlayScrollbarsRO__',
            Ee = 'os-',
            Mi = Ee + 'html',
            ge = Ee + 'host',
            ln = ge + '-foreign',
            Vn = ge + '-textarea',
            Ri = ge + '-' + Mn + Rn + ut,
            Wi = ge + '-' + Mn + Wn + ut,
            Bi = ge + '-transition',
            Fi = ge + '-rtl',
            qn = ge + '-resize-disabled',
            vn = ge + '-scrolling',
            Ut = ge + '-overflow',
            Ut = ge + '-overflow',
            Ui = Ut + '-x',
            Qi = Ut + '-y',
            un = Ee + 'textarea',
            ro = un + '-cover',
            Kn = Ee + 'padding',
            fn = Ee + 'viewport',
            Yn = fn + '-native-scrollbars-invisible',
            Vi = fn + '-native-scrollbars-overlaid',
            Gn = Ee + 'content',
            eo = Ee + 'content-arrange',
            ao = Ee + 'content-glue',
            to = Ee + 'size-auto-observer',
            ft = Ee + 'resize-observer',
            hn = Ee + 'resize-observer-item',
            qi = hn + '-final',
            dn = Ee + 'text-inherit',
            Wa = Ee + Mn,
            Ki = Wa + '-track',
            Yi = Ki + '-off',
            Gi = Wa + '-handle',
            ji = Gi + '-off',
            Ji = Wa + '-unusable',
            Qt = Wa + '-' + zr + ut,
            jn = Wa + '-corner',
            Vt = jn + '-resize',
            Zi = Vt + '-both',
            Xi = Vt + Rn,
            $i = Vt + Wn,
            no = Wa + Rn,
            io = Wa + Wn,
            ht = Ee + 'dragging',
            pn = Ee + 'theme-none',
            Jn = [Yn, Vi, Yi, ji, Ji, Qt, Vt, Zi, Xi, $i, ht].join(fe),
            Zn = [],
            Xn = [i.ti],
            rs,
            qt,
            ae,
            Ba = {},
            so = 'added removed on contract',
            es,
            dt = {},
            as,
            ts = 42,
            $n = 'load',
            Kt = [],
            _n,
            wa,
            Tt,
            pt,
            or,
            Y,
            pa,
            _a,
            Ze,
            tr,
            Mr,
            Fa,
            Ce,
            Ua,
            Le,
            _t,
            bn,
            Yt,
            bt,
            yn,
            Gt,
            jt,
            Et,
            rt,
            Qe,
            mn,
            xn,
            et,
            yt,
            ba,
            Jt,
            mt,
            ns,
            ka,
            Zt,
            Xe,
            at,
            is,
            ri,
            ss,
            os,
            cs,
            ls,
            vs,
            us,
            fs,
            Lt,
            Ht,
            ei,
            ai,
            hs,
            ds,
            ps,
            _s,
            bs,
            ys,
            ti,
            ms,
            Qa,
            Xt,
            ni,
            gn,
            ii,
            xs,
            gs,
            Cs,
            tt,
            As = {},
            Cn,
            An,
            si,
            oi,
            Sa,
            Os = ['wrap', 'cols', 'rows'],
            ci = [i.i, i.c, i.s, 'open'].concat(Xn),
            li = [],
            vi,
            ws,
            ks,
            ui,
            fi,
            nt,
            $e,
            xt,
            hi,
            it,
            On,
            wn,
            di,
            pi;
          function We(r, a, t, o, l) {
            var h = T.isA(a) && T.isA(t),
              b = o ? 'removeEventListener' : 'addEventListener',
              g = o ? 'off' : 'on',
              m = h ? !1 : a.split(fe),
              C = 0,
              Q = V.isPlainObject(l),
              P = (p && (Q ? l._passive : l)) || !1,
              er = Q && (l._capture || !1),
              nr = p ? { passive: P, capture: er } : er;
            if (h) for (; C < a[i.l]; C++) We(r, a[C], t[C], o, l);
            else for (; C < m[i.l]; C++) p ? r[0][b](m[C], t, nr) : r[g](m[C], t);
          }
          function ya(r, a, t, o) {
            We(r, a, t, !1, o), li.push(T.bind(We, 0, r, a, t, !0, o));
          }
          function kn(r, a) {
            if (r) {
              var t = T.rO(),
                o = 'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart',
                l = 'childNodes',
                h = 3333333,
                b = function () {
                  r[de](h)[he](fr ? (k.n ? -h : k.i ? 0 : h) : h), a();
                };
              if (a) {
                if (y) {
                  var g = r.addClass('observed').append(qe(ft)).contents()[0],
                    m = (g[Qn] = new t(b));
                  m.observe(g);
                } else if (br > 9 || !hr) {
                  r.prepend(
                    qe(
                      ft,
                      qe(
                        { c: hn, dir: 'ltr' },
                        qe(hn, qe(qi)) + qe(hn, qe({ c: qi, style: 'width: 200%; height: 200%' })),
                      ),
                    ),
                  );
                  var C = r[0][l][0][l][0],
                    Q = V(C[l][1]),
                    P = V(C[l][0]),
                    er = V(P[0][l][0]),
                    nr = C[i.oW],
                    pr = C[i.oH],
                    U,
                    cr,
                    Z,
                    wr,
                    ie = 2,
                    Kr = R.nativeScrollbarSize,
                    Ne = function () {
                      P[he](h)[de](h), Q[he](h)[de](h);
                    },
                    se = function () {
                      (cr = 0), U && ((nr = Z), (pr = wr), b());
                    },
                    Zr = function (S) {
                      return (
                        (Z = C[i.oW]),
                        (wr = C[i.oH]),
                        (U = Z != nr || wr != pr),
                        S && U && !cr ? (T.cAF()(cr), (cr = T.rAF()(se))) : S || se(),
                        Ne(),
                        S && (T.prvD(S), T.stpP(S)),
                        !1
                      );
                    },
                    Xr = {},
                    te = {};
                  gt(te, K, [-((Kr.y + 1) * ie), Kr.x * -ie, Kr.y * -ie, -((Kr.x + 1) * ie)]),
                    V(C).css(te),
                    P.on(Fe, Zr),
                    Q.on(Fe, Zr),
                    r.on(o, function () {
                      Zr(!1);
                    }),
                    (Xr[J] = h),
                    (Xr[xr] = h),
                    er.css(Xr),
                    Ne();
                } else {
                  var Ie = Et.attachEvent,
                    $r = br !== z;
                  if (Ie) r.prepend(qe(ft)), Nt(r, Ue + ft)[0].attachEvent('onresize', b);
                  else {
                    var Rr = Et.createElement(_.o);
                    Rr.setAttribute(i.ti, '-1'),
                      Rr.setAttribute(i.c, ft),
                      (Rr.onload = function () {
                        var Nr = this.contentDocument.defaultView;
                        Nr.addEventListener('resize', b),
                          (Nr.document.documentElement.style.display = 'none');
                      }),
                      (Rr.type = 'text/html'),
                      $r && r.prepend(Rr),
                      (Rr.data = 'about:blank'),
                      $r || r.prepend(Rr),
                      r.on(o, b);
                  }
                }
                if (r[0] === xn) {
                  var aa = function () {
                    var S = Y.css('direction'),
                      Ar = {},
                      kr = 0,
                      Ae = !1;
                    return (
                      S !== ls &&
                        (S === 'ltr'
                          ? ((Ar[_r] = 0), (Ar[ve] = zr), (kr = h))
                          : ((Ar[_r] = zr), (Ar[ve] = 0), (kr = k.n ? -h : k.i ? 0 : h)),
                        _a.children().eq(0).css(Ar),
                        _a[he](kr)[de](h),
                        (ls = S),
                        (Ae = !0)),
                      Ae
                    );
                  };
                  aa(),
                    ya(r, Fe, function (Nr) {
                      return aa() && ma(), T.prvD(Nr), T.stpP(Nr), !1;
                    });
                }
              } else if (y) {
                var g = r.contents()[0],
                  Cr = g[Qn];
                Cr && (Cr.disconnect(), delete g[Qn]);
              } else qa(r.children(Ue + ft).eq(0));
            }
          }
          function oo() {
            if (E) {
              var r = 11,
                a = T.mO(),
                t = T.now(),
                o,
                l,
                h,
                b,
                g,
                m,
                C,
                Q,
                P,
                er;
              (si = function (pr) {
                var U = !1,
                  cr = !1,
                  Z,
                  wr = [];
                return (
                  D &&
                    !gr &&
                    (G(pr, function () {
                      (Z = this),
                        (o = Z.target),
                        (l = Z.attributeName),
                        (h = l === i.c),
                        (b = Z.oldValue),
                        (g = o.className),
                        Pr &&
                          h &&
                          !cr &&
                          b.indexOf(ln) > -1 &&
                          g.indexOf(ln) < 0 &&
                          ((m = zs(!0)),
                          (Qe.className = g
                            .split(fe)
                            .concat(
                              b.split(fe).filter(function (ie) {
                                return ie.match(m);
                              }),
                            )
                            .join(fe)),
                          (U = cr = !0)),
                        U || (U = h ? Hs(b, g) : l === i.s ? b !== o[i.s].cssText : !0),
                        wr.push(l);
                    }),
                    mi(wr),
                    U && L.update(cr || zr)),
                  U
                );
              }),
                (oi = function (pr) {
                  var U = !1,
                    cr;
                  return (
                    D &&
                      !gr &&
                      (G(pr, function () {
                        return (cr = this), (U = vo(cr)), !U;
                      }),
                      U &&
                        ((Q = T.now()),
                        (P = at || Xe),
                        (er = function () {
                          q || ((t = Q), I && xi(), P ? ma() : L.update(zr));
                        }),
                        clearTimeout(C),
                        r <= 0 || Q - t > r || !P ? er() : (C = setTimeout(er, r)))),
                    U
                  );
                }),
                (Cn = new a(si)),
                (An = new a(oi));
            }
          }
          function Ss() {
            E &&
              !Sa &&
              (Cn.observe(Qe, { attributes: !0, attributeOldValue: !0, attributeFilter: ci }),
              An.observe(I ? rt : ba, {
                attributes: !0,
                attributeOldValue: !0,
                subtree: !I,
                childList: !I,
                characterData: !I,
                attributeFilter: I ? Os : ci,
              }),
              (Sa = !0));
          }
          function _i() {
            E && Sa && (Cn.disconnect(), An.disconnect(), (Sa = !1));
          }
          function co() {
            if (!gr) {
              var r,
                a = { w: xn[i.sW], h: xn[i.sH] };
              (r = Ct(a, ps)), (ps = a), r && ma({ _hostSizeChanged: !0 });
            }
          }
          function Ts() {
            xt && Ta(!0);
          }
          function Es() {
            xt && !pt.hasClass(ht) && Ta(!1);
          }
          function lo() {
            $e &&
              (Ta(!0),
              clearTimeout(ks),
              (ks = setTimeout(function () {
                $e && !q && Ta(!1);
              }, 100)));
          }
          function $t(r) {
            return T.prvD(r), !1;
          }
          function bi(r) {
            var a = V(r.target);
            Ws(function (t, o) {
              a.is(o) && ma({ _contentSizeChanged: !0 });
            });
          }
          function yi(r) {
            r || yi(!0),
              We(Y, Bt.split(fe)[0], lo, !$e || r, !0),
              We(Y, [Di, zi], [Ts, Es], !xt || r, !0),
              !D && !r && Y.one('mouseover', Ts);
          }
          function Ls() {
            var r = {};
            return (
              rr &&
                Fa &&
                ((r.w = Ea(Fa.css(Re + J))),
                (r.h = Ea(Fa.css(Re + xr))),
                (r.c = Ct(r, tt)),
                (r.f = !0)),
              (tt = r),
              !!r.c
            );
          }
          function Hs(r, a) {
            var t = za(a) == _.s ? a.split(fe) : [],
              o = za(r) == _.s ? r.split(fe) : [],
              l = yo(o, t),
              h = j(pn, l),
              b,
              g;
            if ((h > -1 && l.splice(h, 1), l[i.l] > 0)) {
              for (g = zs(!0, !0), b = 0; b < l.length; b++) if (!l[b].match(g)) return !0;
            }
            return !1;
          }
          function vo(r) {
            var a = r.attributeName,
              t = r.target,
              o = r.type,
              l = 'closest';
            if (t === ba) return a === null;
            if (o === 'attributes' && (a === i.c || a === i.s) && !I) {
              if (a === i.c && V(t).hasClass(ge)) return Hs(r.oldValue, t.className);
              if (za(t[l]) != _.f) return !0;
              if (t[l](Ue + ft) !== null || t[l](Ue + Wa) !== null || t[l](Ue + jn) !== null)
                return !1;
            }
            return !0;
          }
          function uo() {
            if (gr) return !1;
            var r = Rs(),
              a = I && Xe && !gn ? or.val().length : 0,
              t = !Sa && Xe && !I,
              o = {},
              l,
              h,
              b,
              g;
            return (
              t && ((l = Mr.css(xe)), (o[xe] = fr ? ve : _r), (o[J] = zr), Mr.css(o)),
              (g = { w: r[i.sW] + a, h: r[i.sH] + a }),
              t && ((o[xe] = l), (o[J] = Ra), Mr.css(o)),
              (h = Ls()),
              (b = Ct(g, ds)),
              (ds = g),
              b || h
            );
          }
          function fo() {
            if (!(gr || Sa)) {
              var r,
                a,
                t,
                o = [],
                l = [
                  { _elem: Y, _attrs: ci.concat(':visible') },
                  { _elem: I ? or : z, _attrs: Os },
                ];
              return (
                G(l, function (h, b) {
                  (r = b._elem),
                    r &&
                      G(b._attrs, function (g, m) {
                        (a = m.charAt(0) === ':' ? r.is(m) : r.attr(m)),
                          (t = As[m]),
                          Ct(a, t) && o.push(m),
                          (As[m] = a);
                      });
                }),
                mi(o),
                o[i.l] > 0
              );
            }
          }
          function ho(r) {
            if (!D) return !0;
            var a = 'flex-grow',
              t = 'flex-shrink',
              o = 'flex-basis',
              l = [
                J,
                Re + J,
                da + J,
                le + _r,
                le + ve,
                _r,
                ve,
                'font-weight',
                'word-spacing',
                a,
                t,
                o,
              ],
              h = [Me + _r, Me + ve, Je + _r + J, Je + ve + J],
              b = [xr, Re + xr, da + xr, le + qr, le + ue, qr, ue, 'line-height', a, t, o],
              g = [Me + qr, Me + ue, Je + qr + J, Je + ue + J],
              m = 's',
              C = 'v-s',
              Q = Lt.x === m || Lt.x === C,
              P = Lt.y === m || Lt.y === C,
              er = !1,
              nr = function (U, cr) {
                for (var Z = 0; Z < U[i.l]; Z++) if (U[Z] === cr) return !0;
                return !1;
              };
            return (
              P && ((er = nr(b, r)), !er && !Tr && (er = nr(g, r))),
              Q && !er && ((er = nr(l, r)), !er && !Tr && (er = nr(h, r))),
              er
            );
          }
          function mi(r) {
            (r = r || Xn),
              G(r, function (a, t) {
                if (T.inA(t, Xn) > -1) {
                  var o = or.attr(t);
                  H(o) == _.s ? tr.attr(t, o) : tr.removeAttr(t);
                }
              });
          }
          function xi() {
            if (!gr) {
              var r = !gn,
                a = dr.w,
                t = dr.h,
                o = {},
                l = Xe || r,
                h,
                b,
                g,
                m;
              return (
                (o[Re + J] = K),
                (o[Re + xr] = K),
                (o[J] = zr),
                or.css(o),
                (h = rt[i.oW]),
                (b = l ? N.max(h, rt[i.sW] - 1) : 1),
                (o[J] = Xe ? zr : Ra),
                (o[Re + J] = Ra),
                (o[xr] = zr),
                or.css(o),
                (g = rt[i.oH]),
                (m = N.max(g, rt[i.sH] - 1)),
                (o[J] = b),
                (o[xr] = m),
                Ua.css(o),
                (o[Re + J] = a),
                (o[Re + xr] = t),
                or.css(o),
                { _originalWidth: h, _originalHeight: g, _dynamicWidth: b, _dynamicHeight: m }
              );
            }
          }
          function ma(r) {
            clearTimeout(as),
              (r = r || {}),
              (dt._hostSizeChanged |= r._hostSizeChanged),
              (dt._contentSizeChanged |= r._contentSizeChanged),
              (dt._force |= r._force);
            var a = T.now(),
              t = !!dt._hostSizeChanged,
              o = !!dt._contentSizeChanged,
              l = !!dt._force,
              h = r._changedOptions,
              b = D && !q && !l && !h && a - es < ts && !at && !Xe,
              g;
            if (
              (b && (as = setTimeout(ma, ts)),
              !(
                q ||
                b ||
                (gr && !h) ||
                (D && !l && (g = Y.is(':hidden'))) ||
                Y.css('display') === 'inline'
              ))
            ) {
              (es = a),
                (dt = {}),
                $ && !(X.x && X.y) ? ((n.x = 0), (n.y = 0)) : (n = He({}, R.nativeScrollbarSize)),
                (me = { x: (n.x + (X.x ? 0 : 3)) * 3, y: (n.y + (X.y ? 0 : 3)) * 3 }),
                (h = h || {});
              var m = function () {
                  return Ct.apply(this, [].slice.call(arguments).concat([l]));
                },
                C = { x: tr[he](), y: tr[de]() },
                Q = ae.scrollbars,
                P = ae.textarea,
                er = Q.visibility,
                nr = m(er, _s),
                pr = Q.autoHide,
                U = m(pr, bs),
                cr = Q.clickScrolling,
                Z = m(cr, ys),
                wr = Q.dragScrolling,
                ie = m(wr, ti),
                Kr = ae.className,
                Ne = m(Kr, Xt),
                se = ae.resize,
                Zr = m(se, ms) && !rr,
                Xr = ae.paddingAbsolute,
                te = m(Xr, vs),
                Ie = ae.clipAlways,
                $r = m(Ie, us),
                Rr = ae.sizeAutoCapable && !rr,
                aa = m(Rr, hs),
                Cr = ae.nativeScrollbarsOverlaid.showNativeScrollbars,
                Nr = m(Cr, ei),
                S = ae.autoUpdate,
                Ar = m(S, ai),
                kr = ae.overflowBehavior,
                Ae = m(kr, Lt, l),
                Ka = P.dynWidth,
                At = m(Cs, Ka),
                Pe = P.dynHeight,
                La = m(gs, Pe);
              if (
                ((fi = pr === 'n'),
                (nt = pr === 's'),
                ($e = pr === 'm'),
                (xt = pr === 'l'),
                (ui = Q.autoHideDelay),
                (ni = Xt),
                (On = se === 'n'),
                (wn = se === 'b'),
                (di = se === 'h'),
                (pi = se === 'v'),
                (Qa = ae.normalizeRTL),
                (Cr = Cr && X.x && X.y),
                (_s = er),
                (bs = pr),
                (ys = cr),
                (ti = wr),
                (Xt = Kr),
                (ms = se),
                (vs = Xr),
                (us = Ie),
                (hs = Rr),
                (ei = Cr),
                (ai = S),
                (Lt = He({}, kr)),
                (Cs = Ka),
                (gs = Pe),
                (ka = ka || { x: !1, y: !1 }),
                Ne &&
                  (pe(Y, ni + fe + pn), Jr(Y, Kr !== z && Kr !== null && Kr.length > 0 ? Kr : pn)),
                Ar && (S === !0 || (S === null && hr) ? (_i(), Sr.add(L)) : (Sr.remove(L), Ss())),
                aa)
              )
                if (Rr)
                  if ((Ce ? Ce.show() : ((Ce = V(qe(ao))), Ze.before(Ce)), Vr)) pa.show();
                  else {
                    (pa = V(qe(to))), (mn = pa[0]), Ce.before(pa);
                    var Ha = { w: -1, h: -1 };
                    kn(pa, function () {
                      var Da = { w: mn[i.oW], h: mn[i.oH] };
                      Ct(Da, Ha) &&
                        ((D && at && Da.h > 0) ||
                          (Xe && Da.w > 0) ||
                          (D && !at && Da.h === 0) ||
                          (!Xe && Da.w === 0)) &&
                        ma(),
                        (Ha = Da);
                    }),
                      (Vr = !0),
                      v !== null && pa.css(xr, v + '(100% + 1px)');
                  }
                else Vr && pa.hide(), Ce && Ce.hide();
              l && (_a.find('*').trigger(Fe), Vr && pa.find('*').trigger(Fe)),
                (g = g === z ? Y.is(':hidden') : g);
              var Ke = I ? or.attr('wrap') !== 'off' : !1,
                en = m(Ke, gn),
                Ye = Y.css('direction'),
                Oe = m(Ye, cs),
                Ya = Y.css('box-sizing'),
                Ge = m(Ya, is),
                Wr = ki(Me),
                ta;
              try {
                ta = Vr ? mn[i.bCR]() : null;
              } catch {
                return;
              }
              (fr = Ye === 'rtl'), (Tr = Ya === 'border-box');
              var re = fr ? _r : ve,
                ir = fr ? ve : _r,
                Ga = !1,
                ja =
                  Vr && Y.css(xe) !== 'none'
                    ? N.round(ta.right - ta.left) === 0 && (Xr ? !0 : Qe[i.cW] - Dr > 0)
                    : !1;
              if (Rr && !ja) {
                var Ja = Qe[i.oW],
                  Ot = Ce.css(J);
                Ce.css(J, zr);
                var na = Qe[i.oW];
                Ce.css(J, Ot),
                  (Ga = Ja !== na),
                  Ga || (Ce.css(J, Ja + 1), (na = Qe[i.oW]), Ce.css(J, Ot), (Ga = Ja !== na));
              }
              var Yr = (ja || Ga) && Rr && !g,
                yr = m(Yr, Xe),
                ia = !Yr && Xe,
                Br = Vr && Rr && !g ? N.round(ta.bottom - ta.top) === 0 : !1,
                ne = m(Br, at),
                sa = !Br && at,
                It = (Yr && Tr) || !Tr,
                wt = (Br && Tr) || !Tr,
                oa = ki(Je, '-' + J, !It, !wt),
                Na = ki(le),
                F = {},
                W = {},
                Fr = function () {
                  return { w: Qe[i.cW], h: Qe[i.cH] };
                },
                we = function () {
                  return {
                    w: et[i.oW] + N.max(0, ba[i.cW] - ba[i.sW]),
                    h: et[i.oH] + N.max(0, ba[i.cH] - ba[i.sH]),
                  };
                },
                Ur = (Dr = Wr.l + Wr.r),
                oe = (Te = Wr.t + Wr.b);
              if (
                ((Ur *= Xr ? 1 : 0),
                (oe *= Xr ? 1 : 0),
                (Wr.c = m(Wr, ri)),
                (Be = oa.l + oa.r),
                (ze = oa.t + oa.b),
                (oa.c = m(oa, ss)),
                (mr = Na.l + Na.r),
                (ye = Na.t + Na.b),
                (Na.c = m(Na, os)),
                (gn = Ke),
                (cs = Ye),
                (is = Ya),
                (Xe = Yr),
                (at = Br),
                (ri = Wr),
                (ss = oa),
                (os = Na),
                Oe && Vr && pa.css(xe, ir),
                Wr.c || Oe || te || yr || ne || Ge || aa)
              ) {
                var ee = {},
                  ke = {},
                  st = [Wr.t, Wr.r, Wr.b, Wr.l];
                gt(W, le, [-Wr.t, -Wr.r, -Wr.b, -Wr.l]),
                  Xr ? (gt(ee, K, st), gt(I ? ke : F, Me)) : (gt(ee, K), gt(I ? ke : F, Me, st)),
                  Ze.css(ee),
                  or.css(ke);
              }
              dr = we();
              var Ir = I ? xi() : !1,
                Za = I && m(Ir, xs),
                ca =
                  I && Ir
                    ? {
                        w: Ka ? Ir._dynamicWidth : Ir._originalWidth,
                        h: Pe ? Ir._dynamicHeight : Ir._originalHeight,
                      }
                    : {};
              if (
                ((xs = Ir),
                Br && (ne || te || Ge || Wr.c || oa.c) ? (F[xr] = zr) : (ne || te) && (F[xr] = Ra),
                Yr && (yr || te || Ge || Wr.c || oa.c || Oe)
                  ? ((F[J] = zr), (W[da + J] = Ra))
                  : (yr || te) && ((F[J] = Ra), (F[xe] = K), (W[da + J] = K)),
                Yr
                  ? ((W[J] = zr),
                    (F[J] = Se._cssPropertyValue(J, 'max-content intrinsic') || zr),
                    (F[xe] = ir))
                  : (W[J] = K),
                Br ? (W[xr] = ca.h || ba[i.cH]) : (W[xr] = K),
                Rr && Ce.css(W),
                Mr.css(F),
                (F = {}),
                (W = {}),
                t ||
                  o ||
                  Za ||
                  Oe ||
                  Ge ||
                  te ||
                  yr ||
                  Yr ||
                  ne ||
                  Br ||
                  Nr ||
                  Ae ||
                  $r ||
                  Zr ||
                  nr ||
                  U ||
                  ie ||
                  Z ||
                  At ||
                  La ||
                  en)
              ) {
                var _e = 'overflow',
                  ga = _e + '-x',
                  Ca = _e + '-y',
                  ot = 'hidden',
                  la = 'visible';
                if (!$) {
                  var Aa = {},
                    an = ka.y && Zt.ys && !Cr ? (X.y ? tr.css(re) : -n.y) : 0,
                    Co = ka.x && Zt.xs && !Cr ? (X.x ? tr.css(ue) : -n.x) : 0;
                  gt(Aa, K), tr.css(Aa);
                }
                var ct = Rs(),
                  tn = { w: ca.w || ct[i.cW], h: ca.h || ct[i.cH] },
                  Bs = { w: ct[i.sW], h: ct[i.sH] };
                $ || ((Aa[ue] = sa ? K : Co), (Aa[re] = ia ? K : an), tr.css(Aa)), (dr = we());
                var nn = Fr(),
                  Ei = { w: nn.w - mr - Be - (Tr ? 0 : Dr), h: nn.h - ye - ze - (Tr ? 0 : Te) },
                  Pt = {
                    w: N.max((Yr ? tn.w : Bs.w) + Ur, Ei.w),
                    h: N.max((Br ? tn.h : Bs.h) + oe, Ei.h),
                  };
                if (((Pt.c = m(Pt, fs)), (fs = Pt), Rr)) {
                  (Pt.c || Br || Yr) &&
                    ((W[J] = Pt.w), (W[xr] = Pt.h), I || (tn = { w: ct[i.cW], h: ct[i.cH] }));
                  var Fs = {},
                    Us = function (Gr) {
                      var be = ra(Gr),
                        va = be._w_h,
                        Qr = be._width_height,
                        lr = Gr ? Yr : Br,
                        Oa = Gr ? Be : ze,
                        kt = Gr ? Dr : Te,
                        In = Gr ? mr : ye,
                        Pn = dr[va] - Oa - In - (Tr ? 0 : kt);
                      (!lr || (!lr && oa.c)) && (W[Qr] = Ei[va] - 1),
                        lr &&
                          tn[va] < Pn &&
                          (Gr && I ? !Ke : !0) &&
                          (I && (Fs[Qr] = Ea(Ua.css(Qr)) - 1), (W[Qr] -= 1)),
                        tn[va] > 0 && (W[Qr] = N.max(1, W[Qr]));
                    };
                  Us(!0), Us(!1), I && Ua.css(Fs), Ce.css(W);
                }
                Yr && (F[J] = Ra), Yr && !Tr && !Sa && (F[xe] = 'none'), Mr.css(F), (F = {});
                var lt = { w: ct[i.sW], h: ct[i.sH] };
                (lt.c = o = m(lt, mt)),
                  (mt = lt),
                  (dr = we()),
                  (nn = Fr()),
                  (t = m(nn, Jt)),
                  (Jt = nn);
                var Li = I && (dr.w === 0 || dr.h === 0),
                  Sn = Ht,
                  Dt = {},
                  sn = {},
                  Qs = {},
                  Ia = {},
                  Er = {},
                  Or = {},
                  on = {},
                  Vs = et[i.bCR](),
                  qs = function (Gr) {
                    var be = ra(Gr),
                      va = ra(!Gr),
                      Qr = va._x_y,
                      lr = be._x_y,
                      Oa = be._w_h,
                      kt = be._width_height,
                      In = Fe + be._Left_Top + 'Max',
                      Pn = Vs[kt] ? N.abs(Vs[kt] - dr[Oa]) : 0,
                      Do = Sn && Sn[lr] > 0 && yt[In] === 0;
                    (Dt[lr] = kr[lr] === 'v-s'),
                      (sn[lr] = kr[lr] === 'v-h'),
                      (Qs[lr] = kr[lr] === 's'),
                      (Ia[lr] = N.max(0, N.round((lt[Oa] - dr[Oa]) * 100) / 100)),
                      (Ia[lr] *= Li || (Do && Pn > 0 && Pn < 1) ? 0 : 1),
                      (Er[lr] = Ia[lr] > 0),
                      (Or[lr] = Dt[lr] || sn[lr] ? Er[Qr] && !Dt[Qr] && !sn[Qr] : Er[lr]),
                      (Or[lr + 's'] = Or[lr] ? Qs[lr] || Dt[lr] : !1),
                      (on[lr] = Er[lr] && Or[lr + 's']);
                  };
                if (
                  (qs(!0),
                  qs(!1),
                  (Ia.c = m(Ia, Ht)),
                  (Ht = Ia),
                  (Er.c = m(Er, ka)),
                  (ka = Er),
                  (Or.c = m(Or, Zt)),
                  (Zt = Or),
                  X.x || X.y)
                ) {
                  var Ao = 'px solid transparent',
                    Hi = {},
                    Xa = {},
                    Tn = l,
                    Ni;
                  (Er.x || Er.y) &&
                    ((Xa.w = X.y && Er.y ? lt.w + jr.y : K),
                    (Xa.h = X.x && Er.x ? lt.h + jr.x : K),
                    (Tn = m(Xa, ns)),
                    (ns = Xa)),
                    (Er.c || Or.c || lt.c || Oe || yr || ne || Yr || Br || Nr) &&
                      ((F[le + ir] = F[Je + ir] = K),
                      (Ni = function (Gr) {
                        var be = ra(Gr),
                          va = ra(!Gr),
                          Qr = be._x_y,
                          lr = Gr ? ue : re,
                          Oa = Gr ? Br : Yr;
                        X[Qr] && Er[Qr] && Or[Qr + 's']
                          ? ((F[le + lr] = Oa ? (Cr ? K : jr[Qr]) : K),
                            (F[Je + lr] = (Gr ? !Oa : !0) && !Cr ? jr[Qr] + Ao : K))
                          : ((Xa[va._w_h] = F[le + lr] = F[Je + lr] = K), (Tn = !0));
                      }),
                      $ ? ea(tr, Yn, !Cr) : (Ni(!0), Ni(!1))),
                    Cr && ((Xa.w = Xa.h = K), (Tn = !0)),
                    Tn &&
                      !$ &&
                      ((Hi[J] = Or.y ? Xa.w : K),
                      (Hi[xr] = Or.x ? Xa.h : K),
                      Fa || ((Fa = V(qe(eo))), tr.prepend(Fa)),
                      Fa.css(Hi)),
                    Mr.css(F);
                }
                var ce = {},
                  ee = {},
                  Ii;
                if (
                  (t || Er.c || Or.c || lt.c || Ae || Ge || Nr || Oe || $r || ne) &&
                  ((ce[ir] = K),
                  (Ii = function (Gr) {
                    var be = ra(Gr),
                      va = ra(!Gr),
                      Qr = be._x_y,
                      lr = be._X_Y,
                      Oa = Gr ? ue : re,
                      kt = function () {
                        (ce[Oa] = K), (fa[va._w_h] = 0);
                      };
                    Er[Qr] && Or[Qr + 's']
                      ? ((ce[_e + lr] = Fe),
                        Cr || $
                          ? kt()
                          : ((ce[Oa] = -(X[Qr] ? jr[Qr] : n[Qr])),
                            (fa[va._w_h] = X[Qr] ? jr[va._x_y] : 0)))
                      : ((ce[_e + lr] = K), kt());
                  }),
                  Ii(!0),
                  Ii(!1),
                  !$ &&
                  (dr.h < me.x || dr.w < me.y) &&
                  ((Er.x && Or.x && !X.x) || (Er.y && Or.y && !X.y))
                    ? ((ce[Me + qr] = me.x),
                      (ce[le + qr] = -me.x),
                      (ce[Me + ir] = me.y),
                      (ce[le + ir] = -me.y))
                    : (ce[Me + qr] = ce[le + qr] = ce[Me + ir] = ce[le + ir] = K),
                  (ce[Me + re] = ce[le + re] = K),
                  (Er.x && Or.x) || (Er.y && Or.y) || Li
                    ? I && Li && (ee[ga] = ee[Ca] = ot)
                    : (!Ie || sn.x || Dt.x || sn.y || Dt.y) &&
                      (I && (ee[ga] = ee[Ca] = K), (ce[ga] = ce[Ca] = la)),
                  Ze.css(ee),
                  tr.css(ce),
                  (ce = {}),
                  (Er.c || Ge || yr || ne) && !(X.x && X.y))
                ) {
                  var En = ba[i.s];
                  (En.webkitTransform = 'scale(1)'),
                    (En.display = 'run-in'),
                    (En.display = K),
                    (En.webkitTransform = K);
                }
                if (((F = {}), Oe || yr || ne))
                  if (fr && Yr) {
                    var Oo = Mr.css(xe),
                      Ks = N.round(Mr.css(xe, K).css(_r, K).position().left);
                    Mr.css(xe, Oo);
                    var wo = N.round(Mr.position().left);
                    Ks !== wo && (F[_r] = Ks);
                  } else F[_r] = K;
                if ((Mr.css(F), I && o)) {
                  var Pa = mo();
                  if (Pa) {
                    var Ys = ii === z ? !0 : Pa._rows !== ii._rows,
                      Gs = Pa._cursorRow,
                      ko = Pa._cursorColumn,
                      So = Pa._widestRow,
                      To = Pa._rows,
                      Eo = Pa._columns,
                      Lo = Pa._cursorPosition,
                      Ho = Pa._cursorMax,
                      js = Lo >= Ho && vi,
                      Ln = {
                        x: !Ke && ko === Eo && Gs === So ? Ht.x : -1,
                        y: (Ke ? js || (Ys && (Sn ? C.y === Sn.y : !1)) : (js || Ys) && Gs === To)
                          ? Ht.y
                          : -1,
                      };
                    (C.x = Ln.x > -1 ? (fr && Qa && k.i ? 0 : Ln.x) : C.x),
                      (C.y = Ln.y > -1 ? Ln.y : C.y);
                  }
                  ii = Pa;
                }
                fr && k.i && X.y && Er.x && Qa && (C.x += fa.w || 0),
                  Yr && Y[he](0),
                  Br && Y[de](0),
                  tr[he](C.x)[de](C.y);
                var No = er === 'v',
                  Io = er === 'h',
                  Po = er === 'a',
                  Hn = function (Gr, be) {
                    (be = be === z ? Gr : be), Ps(!0, Gr, on.x), Ps(!1, be, on.y);
                  };
                ea(Y, Ut, Or.x || Or.y),
                  ea(Y, Ui, Or.x),
                  ea(Y, Qi, Or.y),
                  Oe && !rr && ea(Y, Fi, fr),
                  rr && Jr(Y, qn),
                  Zr &&
                    (ea(Y, qn, On),
                    ea(Le, Vt, !On),
                    ea(Le, Zi, wn),
                    ea(Le, Xi, di),
                    ea(Le, $i, pi)),
                  (nr || Ae || Or.c || Er.c || Nr) &&
                    (Cr
                      ? Nr && (pe(Y, vn), Cr && Hn(!1))
                      : Po
                      ? Hn(on.x, on.y)
                      : No
                      ? Hn(!0)
                      : Io && Hn(!1)),
                  (U || Nr) && (yi(!xt && !$e), Ta(fi, !fi)),
                  (t || Ia.c || ne || yr || Zr || Ge || te || Nr || Oe) &&
                    (Oi(!0), xa(!0), Oi(!1), xa(!1)),
                  Z && Ds(!0, cr),
                  ie && Ds(!1, wr),
                  Ve('onDirectionChanged', { isRTL: fr, dir: Ye }, Oe),
                  Ve('onHostSizeChanged', { width: Jt.w, height: Jt.h }, t),
                  Ve('onContentSizeChanged', { width: mt.w, height: mt.h }, o),
                  Ve(
                    'onOverflowChanged',
                    {
                      x: Er.x,
                      y: Er.y,
                      xScrollable: Or.xs,
                      yScrollable: Or.ys,
                      clipped: Or.x || Or.y,
                    },
                    Er.c || Or.c,
                  ),
                  Ve('onOverflowAmountChanged', { x: Ia.x, y: Ia.y }, Ia.c);
              }
              rr &&
                tt &&
                (ka.c || tt.c) &&
                (tt.f || Ls(),
                X.y && ka.x && Mr.css(Re + J, tt.w + jr.y),
                X.x && ka.y && Mr.css(Re + xr, tt.h + jr.x),
                (tt.c = !1)),
                D && h.updateOnLoad && Ns(),
                Ve('onUpdated', { forced: l });
            }
          }
          function Ns() {
            I ||
              Ws(function (r, a) {
                Mr.find(a).each(function (t, o) {
                  T.inA(o, Kt) < 0 && (Kt.push(o), V(o).off($n, bi).on($n, bi));
                });
              });
          }
          function gi(r) {
            var a = u._validate(r, u._template, !0, qt);
            return (qt = He({}, qt, a._default)), (ae = He({}, ae, a._prepared)), a._prepared;
          }
          function Ci(r) {
            var a = 'parent',
              t = 'os-resize-observer-host',
              o = un + fe + dn,
              l = I ? fe + dn : K,
              h = ae.textarea.inheritedAttrs,
              b = {},
              g = function () {
                var P = r ? or : Y;
                G(b, function (er, nr) {
                  H(nr) == _.s && (er == i.c ? P.addClass(nr) : P.attr(er, nr));
                });
              },
              m = [ge, ln, Vn, qn, Fi, Ri, Wi, Bi, vn, Ut, Ui, Qi, pn, un, dn, Xt].join(fe),
              C = {};
            (Y = Y || (I ? (Pr ? or[a]()[a]()[a]()[a]() : V(qe(Vn))) : or)),
              (Mr = Mr || Va(Gn + l)),
              (tr = tr || Va(fn + l)),
              (Ze = Ze || Va(Kn + l)),
              (_a = _a || Va(t)),
              (Ua = Ua || (I ? Va(ro) : z)),
              Pr && Jr(Y, ln),
              r && pe(Y, m),
              (h = H(h) == _.s ? h.split(fe) : h),
              T.isA(h) &&
                I &&
                G(h, function (Q, P) {
                  H(P) == _.s && (b[P] = r ? Y.attr(P) : or.attr(P));
                }),
              r
                ? (Pr && D
                    ? (_a.children().remove(),
                      G([Ze, tr, Mr, Ua], function (Q, P) {
                        P && pe(P.removeAttr(i.s), Jn);
                      }),
                      Jr(Y, I ? Vn : ge))
                    : (qa(_a),
                      Mr.contents().unwrap().unwrap().unwrap(),
                      I && (or.unwrap(), qa(Y), qa(Ua), g())),
                  I && or.removeAttr(i.s),
                  rr && pe(Tt, Mi))
                : (I &&
                    (ae.sizeAutoCapable || ((C[J] = or.css(J)), (C[xr] = or.css(xr))),
                    Pr || or.addClass(dn).wrap(Y),
                    (Y = or[a]().css(C))),
                  Pr ||
                    (Jr(or, I ? o : ge),
                    Y.wrapInner(Mr).wrapInner(tr).wrapInner(Ze).prepend(_a),
                    (Mr = Nt(Y, Ue + Gn)),
                    (tr = Nt(Y, Ue + fn)),
                    (Ze = Nt(Y, Ue + Kn)),
                    I && (Mr.prepend(Ua), g())),
                  $ && Jr(tr, Yn),
                  X.x && X.y && Jr(tr, Vi),
                  rr && Jr(Tt, Mi),
                  (xn = _a[0]),
                  (Qe = Y[0]),
                  (et = Ze[0]),
                  (yt = tr[0]),
                  (ba = Mr[0]),
                  mi());
          }
          function po() {
            var r = [
                112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38, 39, 40, 16,
                17, 18, 19, 20, 144,
              ],
              a = [],
              t,
              o,
              l = 175,
              h = 'focus';
            function b(U) {
              xi(), L.update(zr), U && hr && clearInterval(t);
            }
            function g(U) {
              return or[he](k.i && Qa ? 9999999 : 0), or[de](0), T.prvD(U), T.stpP(U), !1;
            }
            function m(U) {
              setTimeout(function () {
                q || b();
              }, 50);
            }
            function C() {
              (vi = !0), Jr(Y, h);
            }
            function Q() {
              (vi = !1), (a = []), pe(Y, h), b(!0);
            }
            function P(U) {
              var cr = U.keyCode;
              j(cr, r) < 0 &&
                (a[i.l] || (b(), (t = setInterval(b, 1e3 / 60))), j(cr, a) < 0 && a.push(cr));
            }
            function er(U) {
              var cr = U.keyCode,
                Z = j(cr, a);
              j(cr, r) < 0 && (Z > -1 && a.splice(Z, 1), a[i.l] || b(!0));
            }
            function nr(U) {
              ai !== !0 && ((U = U.originalEvent || U), ho(U.propertyName) && L.update(zr));
            }
            function pr(U) {
              gr ||
                (o !== z
                  ? clearTimeout(o)
                  : ((nt || $e) && Ta(!0), rn() || Jr(Y, vn), Ve('onScrollStart', U)),
                it || (xa(!0), xa(!1)),
                Ve('onScroll', U),
                (o = setTimeout(function () {
                  q ||
                    (clearTimeout(o),
                    (o = z),
                    (nt || $e) && Ta(!1),
                    rn() || pe(Y, vn),
                    Ve('onScrollStop', U));
                }, l)));
            }
            I
              ? (br > 9 || !hr ? ya(or, 'input', b) : ya(or, [Bn, Fn], [P, er]),
                ya(or, [Fe, 'drop', h, h + 'out'], [g, m, C, Q]))
              : ya(Mr, Un, nr),
              ya(tr, Fe, pr, !0);
          }
          function Ai(r) {
            var a = function (b) {
              var g = b ? no : io,
                m = Va(Wa + fe + g, !0),
                C = Va(Ki, m),
                Q = Va(Gi, m);
              return (
                !Pr && !r && (m.append(C), C.append(Q)), { _scrollbar: m, _track: C, _handle: Q }
              );
            };
            function t(h) {
              var b = ra(h),
                g = b._scrollbar,
                m = b._track,
                C = b._handle;
              Pr && D
                ? G([g, m, C], function (Q, P) {
                    pe(P.removeAttr(i.s), Jn);
                  })
                : qa(g || a(h)._scrollbar);
            }
            var o, l;
            r
              ? (t(!0), t())
              : ((o = a(!0)),
                (l = a()),
                (_t = o._scrollbar),
                (bn = o._track),
                (Yt = o._handle),
                (bt = l._scrollbar),
                (yn = l._track),
                (Gt = l._handle),
                Pr || (Ze.after(bt), Ze.after(_t)));
          }
          function Is(r) {
            var a = ra(r),
              t = a._info,
              o = jt.top !== jt,
              l = a._x_y,
              h = a._X_Y,
              b = Fe + a._Left_Top,
              g = 'active',
              m = 'snapHandle',
              C = 'click',
              Q = 1,
              P = [16, 17],
              er,
              nr,
              pr,
              U;
            function cr(S) {
              return br && o ? S['screen' + h] : T.page(S)[l];
            }
            function Z(S) {
              return ae.scrollbars[S];
            }
            function wr() {
              Q = 0.5;
            }
            function ie() {
              Q = 1;
            }
            function Kr(S) {
              T.stpP(S);
            }
            function Ne(S) {
              j(S.keyCode, P) > -1 && wr();
            }
            function se(S) {
              j(S.keyCode, P) > -1 && ie();
            }
            function Zr(S) {
              var Ar = S.originalEvent || S,
                kr = Ar.touches !== z;
              return gr || q || rn() || !ti || (kr && !Z('touchSupport'))
                ? !1
                : T.mBtn(S) === 1 || kr;
            }
            function Xr(S) {
              if (Zr(S)) {
                var Ar = t._trackLength,
                  kr = t._handleLength,
                  Ae = t._maxScroll,
                  Ka = (cr(S) - pr) * U,
                  At = Ka / (Ar - kr),
                  Pe = Ae * At;
                (Pe = isFinite(Pe) ? Pe : 0),
                  fr && r && !k.i && (Pe *= -1),
                  tr[b](N.round(nr + Pe)),
                  it && xa(r, nr + Pe),
                  p || T.prvD(S);
              } else te(S);
            }
            function te(S) {
              if (
                ((S = S || S.originalEvent),
                We(wa, [Bt, Wt, Bn, Fn, Ft], [Xr, te, Ne, se, $t], !0),
                T.rAF()(function () {
                  We(wa, C, Kr, !0, { _capture: !0 });
                }),
                it && xa(r, !0),
                (it = !1),
                pe(pt, ht),
                pe(a._handle, g),
                pe(a._track, g),
                pe(a._scrollbar, g),
                (nr = z),
                (pr = z),
                (U = 1),
                ie(),
                er !== z && (L.scrollStop(), clearTimeout(er), (er = z)),
                S)
              ) {
                var Ar = Qe[i.bCR](),
                  kr =
                    S.clientX >= Ar.left &&
                    S.clientX <= Ar.right &&
                    S.clientY >= Ar.top &&
                    S.clientY <= Ar.bottom;
                kr || Es(), (nt || $e) && Ta(!1);
              }
            }
            function Ie(S) {
              Zr(S) && $r(S);
            }
            function $r(S) {
              (nr = tr[b]()),
                (nr = isNaN(nr) ? 0 : nr),
                ((fr && r && !k.n) || !fr) && (nr = nr < 0 ? 0 : nr),
                (U = Si()[l]),
                (pr = cr(S)),
                (it = !Z(m)),
                Jr(pt, ht),
                Jr(a._handle, g),
                Jr(a._scrollbar, g),
                We(wa, [Bt, Wt, Ft], [Xr, te, $t]),
                T.rAF()(function () {
                  We(wa, C, Kr, !1, { _capture: !0 });
                }),
                (br || !Hr) && T.prvD(S),
                T.stpP(S);
            }
            function Rr(S) {
              if (Zr(S)) {
                var Ar =
                    a._info._handleLength /
                    Math.round(N.min(1, dr[a._w_h] / mt[a._w_h]) * a._info._trackLength),
                  kr = N.round(dr[a._w_h] * Ar),
                  Ae = 270 * Ar,
                  Ka = 400 * Ar,
                  At = a._track.offset()[a._left_top],
                  Pe = S.ctrlKey,
                  La = S.shiftKey,
                  Ha = La && Pe,
                  Ke = !0,
                  en = 'linear',
                  Ye,
                  Oe,
                  Ya = function (re) {
                    it && xa(r, re);
                  },
                  Ge = function () {
                    Ya(), $r(S);
                  },
                  Wr = function ta() {
                    if (!q) {
                      var re = (pr - At) * U,
                        ir = t._handleOffset,
                        Ga = t._trackLength,
                        ja = t._handleLength,
                        Ja = t._maxScroll,
                        Ot = t._currentScroll,
                        na = Ae * Q,
                        Yr = Ke ? N.max(Ka, na) : na,
                        yr = Ja * ((re - ja / 2) / (Ga - ja)),
                        ia = fr && r && ((!k.i && !k.n) || Qa),
                        Br = ia ? ir < re : ir > re,
                        ne = {},
                        sa = {
                          easing: en,
                          step: function (wt) {
                            it && (tr[b](wt), xa(r, wt));
                          },
                        };
                      (yr = isFinite(yr) ? yr : 0),
                        (yr = fr && r && !k.i ? Ja - yr : yr),
                        La
                          ? (tr[b](yr),
                            Ha
                              ? ((yr = tr[b]()),
                                tr[b](Ot),
                                (yr = ia && k.i ? Ja - yr : yr),
                                (yr = ia && k.n ? -yr : yr),
                                (ne[l] = yr),
                                L.scroll(ne, He(sa, { duration: 130, complete: Ge })))
                              : Ge())
                          : ((Ye = Ke ? Br : Ye),
                            (Oe = ia
                              ? Ye
                                ? ir + ja >= re
                                : ir <= re
                              : Ye
                              ? ir <= re
                              : ir + ja >= re),
                            Oe
                              ? (clearTimeout(er), L.scrollStop(), (er = z), Ya(!0))
                              : ((er = setTimeout(ta, Yr)),
                                (ne[l] = (Ye ? '-=' : '+=') + kr),
                                L.scroll(ne, He(sa, { duration: na }))),
                            (Ke = !1));
                    }
                  };
                Pe && wr(),
                  (U = Si()[l]),
                  (pr = T.page(S)[l]),
                  (it = !Z(m)),
                  Jr(pt, ht),
                  Jr(a._track, g),
                  Jr(a._scrollbar, g),
                  We(wa, [Wt, Bn, Fn, Ft], [te, Ne, se, $t]),
                  Wr(),
                  T.prvD(S),
                  T.stpP(S);
              }
            }
            function aa(S) {
              (hi = !0), (nt || $e) && Ta(!0);
            }
            function Cr(S) {
              (hi = !1), (nt || $e) && Ta(!1);
            }
            function Nr(S) {
              T.stpP(S);
            }
            ya(a._handle, St, Ie),
              ya(a._track, [St, Di, zi], [Rr, aa, Cr]),
              ya(a._scrollbar, St, Nr),
              s &&
                ya(a._scrollbar, Un, function (S) {
                  S.target === a._scrollbar[0] && (Oi(r), xa(r));
                });
          }
          function Ps(r, a, t) {
            var o = r ? Ri : Wi,
              l = r ? _t : bt;
            ea(Y, o, !a), ea(l, Ji, !t);
          }
          function Ta(r, a) {
            if ((clearTimeout(ws), r)) pe(_t, Qt), pe(bt, Qt);
            else {
              var t,
                o = 'active',
                l = function () {
                  !hi &&
                    !q &&
                    ((t = Yt.hasClass(o) || Gt.hasClass(o)),
                    !t && (nt || $e || xt) && Jr(_t, Qt),
                    !t && (nt || $e || xt) && Jr(bt, Qt));
                };
              ui > 0 && a !== !0 ? (ws = setTimeout(l, ui)) : l();
            }
          }
          function Oi(r) {
            var a = {},
              t = ra(r),
              o = t._info,
              l = 1e6,
              h = N.min(1, dr[t._w_h] / mt[t._w_h]);
            (a[t._width_height] = N.floor(h * 100 * l) / l + '%'),
              rn() || t._handle.css(a),
              (o._handleLength = t._handle[0]['offset' + t._Width_Height]),
              (o._handleLengthRatio = h);
          }
          function xa(r, a) {
            var t = H(a) == _.b,
              o = 250,
              l = fr && r,
              h = ra(r),
              b = h._info,
              g = 'translate(',
              m = Se._cssProperty('transform'),
              C = Se._cssProperty('transition'),
              Q = r ? tr[he]() : tr[de](),
              P = a === z || t ? Q : a,
              er = b._handleLength,
              nr = h._track[0]['offset' + h._Width_Height],
              pr = nr - er,
              U = {},
              cr,
              Z,
              wr =
                (yt[Fe + h._Width_Height] - yt['client' + h._Width_Height]) * (k.n && l ? -1 : 1),
              ie = function (Ie) {
                return isNaN(Ie / wr) ? 0 : N.max(0, N.min(1, Ie / wr));
              },
              Kr = function (Ie) {
                var $r = pr * Ie;
                return (
                  ($r = isNaN($r) ? 0 : $r),
                  ($r = l && !k.i ? nr - er - $r : $r),
                  ($r = N.max(0, $r)),
                  $r
                );
              },
              Ne = ie(Q),
              se = ie(P),
              Zr = Kr(se),
              Xr = Kr(Ne);
            (b._maxScroll = wr),
              (b._currentScroll = Q),
              (b._currentScrollRatio = Ne),
              c
                ? ((cr = l ? -(nr - er - Zr) : Zr),
                  (Z = r ? g + cr + 'px, 0)' : g + '0, ' + cr + 'px)'),
                  (U[m] = Z),
                  s &&
                    (U[C] =
                      t && N.abs(Zr - b._handleOffset) > 1
                        ? bo(h._handle) + ', ' + (m + fe + o + 'ms')
                        : K))
                : (U[h._left_top] = Zr),
              rn() ||
                (h._handle.css(U),
                c &&
                  s &&
                  t &&
                  h._handle.one(Un, function () {
                    q || h._handle.css(C, K);
                  })),
              (b._handleOffset = Zr),
              (b._snappedHandleOffset = Xr),
              (b._trackLength = nr);
          }
          function Ds(r, a) {
            var t = a ? 'removeClass' : 'addClass',
              o = r ? bn : Yt,
              l = r ? yn : Gt,
              h = r ? Yi : ji;
            o[t](h), l[t](h);
          }
          function ra(r) {
            return {
              _width_height: r ? J : xr,
              _Width_Height: r ? 'Width' : 'Height',
              _left_top: r ? _r : qr,
              _Left_Top: r ? 'Left' : 'Top',
              _x_y: r ? Mt : Rt,
              _X_Y: r ? 'X' : 'Y',
              _w_h: r ? 'w' : 'h',
              _l_t: r ? 'l' : 't',
              _track: r ? bn : yn,
              _handle: r ? Yt : Gt,
              _scrollbar: r ? _t : bt,
              _info: r ? je : ha,
            };
          }
          function wi(r) {
            (Le = Le || Va(jn, !0)),
              r ? (Pr && D ? pe(Le.removeAttr(i.s), Jn) : qa(Le)) : Pr || Y.append(Le);
          }
          function _o() {
            var r = jt.top !== jt,
              a = {},
              t = {},
              o = {},
              l;
            function h(C) {
              if (g(C)) {
                var Q = m(C),
                  P = {};
                (di || wn) && (P[J] = t.w + (Q.x - a.x) * o.x),
                  (pi || wn) && (P[xr] = t.h + (Q.y - a.y) * o.y),
                  Y.css(P),
                  T.stpP(C);
              } else b(C);
            }
            function b(C) {
              var Q = C !== z;
              We(wa, [Ft, Bt, Wt], [$t, h, b], !0),
                pe(pt, ht),
                Le.releaseCapture && Le.releaseCapture(),
                Q && (l && Ss(), L.update(zr)),
                (l = !1);
            }
            function g(C) {
              var Q = C.originalEvent || C,
                P = Q.touches !== z;
              return gr || q ? !1 : T.mBtn(C) === 1 || P;
            }
            function m(C) {
              return br && r ? { x: C.screenX, y: C.screenY } : T.page(C);
            }
            ya(Le, St, function (C) {
              g(C) &&
                !On &&
                (Sa && ((l = !0), _i()),
                (a = m(C)),
                (t.w = Qe[i.oW] - (Tr ? 0 : Dr)),
                (t.h = Qe[i.oH] - (Tr ? 0 : Te)),
                (o = Si()),
                We(wa, [Ft, Bt, Wt], [$t, h, b]),
                Jr(pt, ht),
                Le.setCapture && Le.setCapture(),
                T.prvD(C),
                T.stpP(C));
            });
          }
          function Ve(r, a, t) {
            if (t !== !1)
              if (D) {
                var o = ae.callbacks[r],
                  l = r,
                  h;
                l.substr(0, 2) === 'on' && (l = l.substr(2, 1).toLowerCase() + l.substr(3)),
                  H(o) == _.f && o.call(L, a),
                  G(Ba, function () {
                    (h = this), H(h.on) == _.f && h.on(l, a);
                  });
              } else q || Zn.push({ n: r, a });
          }
          function gt(r, a, t) {
            (a = a || K),
              (t = t || [K, K, K, K]),
              (r[a + qr] = t[0]),
              (r[a + ve] = t[1]),
              (r[a + ue] = t[2]),
              (r[a + _r] = t[3]);
          }
          function ki(r, a, t, o) {
            return (
              (a = a || K),
              (r = r || K),
              {
                t: o ? 0 : Ea(Y.css(r + qr + a)),
                r: t ? 0 : Ea(Y.css(r + ve + a)),
                b: o ? 0 : Ea(Y.css(r + ue + a)),
                l: t ? 0 : Ea(Y.css(r + _r + a)),
              }
            );
          }
          function bo(r) {
            var a = Se._cssProperty('transition'),
              t = r.css(a);
            if (t) return t;
            for (
              var o = '\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*',
                l = new RegExp(o),
                h = new RegExp('^(' + o + ')+$'),
                b = 'property duration timing-function delay'.split(' '),
                g = [],
                m,
                C,
                Q = 0,
                P,
                er = function (pr) {
                  if (((m = []), !pr.match(h))) return pr;
                  for (; pr.match(l); ) m.push(RegExp.$1), (pr = pr.replace(l, K));
                  return m;
                };
              Q < b[i.l];
              Q++
            )
              for (C = er(r.css(a + '-' + b[Q])), P = 0; P < C[i.l]; P++)
                g[P] = (g[P] ? g[P] + fe : K) + C[P];
            return g.join(', ');
          }
          function zs(r, a) {
            var t,
              o,
              l,
              h = function (g, m) {
                if (((l = ''), m && za(g) == _.s))
                  for (o = g.split(fe), t = 0; t < o[i.l]; t++) l += '|' + o[t] + '$';
                return l;
              };
            return new RegExp('(^' + ge + '([-_].+|)$)' + h(Xt, r) + h(ni, a), 'g');
          }
          function Si() {
            var r = et[i.bCR]();
            return {
              x: (c && 1 / (N.round(r.width) / et[i.oW])) || 1,
              y: (c && 1 / (N.round(r.height) / et[i.oH])) || 1,
            };
          }
          function Ms(r) {
            var a = 'ownerDocument',
              t = 'HTMLElement',
              o = (r && r[a] && r[a].parentWindow) || ar;
            return za(o[t]) == _.o
              ? r instanceof o[t]
              : r && za(r) == _.o && r !== null && r.nodeType === 1 && za(r.nodeName) == _.s;
          }
          function yo(r, a) {
            var t = [],
              o = [],
              l,
              h;
            for (l = 0; l < r.length; l++) t[r[l]] = !0;
            for (l = 0; l < a.length; l++) t[a[l]] ? delete t[a[l]] : (t[a[l]] = !0);
            for (h in t) o.push(h);
            return o;
          }
          function Ea(r, a) {
            var t = a ? parseFloat(r) : parseInt(r, 10);
            return isNaN(t) ? 0 : t;
          }
          function mo() {
            var r = rt.selectionStart;
            if (r !== z) {
              var a = or.val(),
                t = a[i.l],
                o = a.split(`
`),
                l = o[i.l],
                h = a.substr(0, r).split(`
`),
                b = 0,
                g = 0,
                m = h[i.l],
                C = h[h[i.l] - 1][i.l],
                Q,
                P;
              for (P = 0; P < o[i.l]; P++) (Q = o[P][i.l]), Q > g && ((b = P + 1), (g = Q));
              return {
                _cursorRow: m,
                _cursorColumn: C,
                _rows: l,
                _columns: g,
                _widestRow: b,
                _cursorPosition: r,
                _cursorMax: t,
              };
            }
          }
          function rn() {
            return ei && X.x && X.y;
          }
          function Rs() {
            return I ? Ua[0] : ba;
          }
          function qe(r, a) {
            return (
              '<div ' +
              (r
                ? H(r) == _.s
                  ? 'class="' + r + '"'
                  : (function () {
                      var t,
                        o = K;
                      if (V.isPlainObject(r))
                        for (t in r) o += (t === 'c' ? 'class' : t) + '="' + r[t] + '" ';
                      return o;
                    })()
                : K) +
              '>' +
              (a || K) +
              '</div>'
            );
          }
          function Va(r, a) {
            var t = H(a) == _.b,
              o = t ? Y : a || Y;
            return Pr && !o[i.l]
              ? null
              : Pr
              ? o[t ? 'children' : 'find'](Ue + r.replace(/\s/g, Ue)).eq(0)
              : V(qe(r));
          }
          function Ti(r, a) {
            for (var t = a.split(Ue), o = 0, l; o < t.length; o++) {
              if (!r[i.hOP](t[o])) return;
              (l = r[t[o]]), o < t.length && H(l) == _.o && (r = l);
            }
            return l;
          }
          function xo(r, a, t) {
            for (var o = a.split(Ue), l = o.length, h = 0, b = {}, g = b; h < l; h++)
              b = b[o[h]] = h + 1 < l ? {} : t;
            V.extend(r, g, !0);
          }
          function Ws(r) {
            var a = ae.updateOnLoad;
            (a = H(a) == _.s ? a.split(fe) : a), T.isA(a) && !q && G(a, r);
          }
          function Ct(r, a, t) {
            if (t) return t;
            if (H(r) == _.o && H(a) == _.o) {
              for (var o in r)
                if (o !== 'c')
                  if (r[i.hOP](o) && a[i.hOP](o)) {
                    if (Ct(r[o], a[o])) return !0;
                  } else return !0;
            } else return r !== a;
            return !1;
          }
          function He() {
            return V.extend.apply(this, [!0].concat([].slice.call(arguments)));
          }
          function Jr(r, a) {
            return ur.addClass.call(r, a);
          }
          function pe(r, a) {
            return ur.removeClass.call(r, a);
          }
          function ea(r, a, t) {
            return t ? Jr(r, a) : pe(r, a);
          }
          function qa(r) {
            return ur.remove.call(r);
          }
          function Nt(r, a) {
            return ur.find.call(r, a).eq(0);
          }
          (L.sleep = function () {
            gr = !0;
          }),
            (L.update = function (r) {
              if (!q) {
                var a,
                  t,
                  o = H(r) == _.s,
                  l,
                  h,
                  b;
                return (
                  o
                    ? r === zr
                      ? ((a = fo()),
                        (t = uo()),
                        (l = a || t),
                        l && ma({ _contentSizeChanged: t, _changedOptions: D ? z : ae }))
                      : r === zn
                      ? Sa
                        ? ((h = si(Cn.takeRecords())), (b = oi(An.takeRecords())))
                        : (h = L.update(zr))
                      : r === 'zoom' && ma({ _hostSizeChanged: !0, _contentSizeChanged: !0 })
                    : ((r = gr || r), (gr = !1), (!L.update(zn) || r) && ma({ _force: r })),
                  Ns(),
                  l || h || b
                );
              }
            }),
            (L.options = function (r, a) {
              var t = {},
                o;
              if (V.isEmptyObject(r) || !V.isPlainObject(r))
                if (H(r) == _.s)
                  if (arguments.length > 1) xo(t, r, a), (o = gi(t));
                  else return Ti(qt, r);
                else return qt;
              else o = gi(r);
              V.isEmptyObject(o) || ma({ _changedOptions: o });
            }),
            (L.destroy = function () {
              if (!q) {
                Sr.remove(L), _i(), kn(_a), kn(pa);
                for (var r in Ba) L.removeExt(r);
                for (; li[i.l] > 0; ) li.pop()();
                yi(!0), Ce && qa(Ce), Fa && qa(Fa), Vr && qa(pa), Ai(!0), wi(!0), Ci(!0);
                for (var a = 0; a < Kt[i.l]; a++) V(Kt[a]).off($n, bi);
                (Kt = z), (q = !0), (gr = !0), Ma(w, 0), Ve('onDestroyed');
              }
            }),
            (L.scroll = function (r, a, t, o) {
              if (arguments.length === 0 || r === z) {
                var l = je,
                  h = ha,
                  b = Qa && fr && k.i,
                  g = Qa && fr && k.n,
                  m = l._currentScroll,
                  C = l._currentScrollRatio,
                  Q = l._maxScroll;
                return (
                  (C = b ? 1 - C : C),
                  (m = b ? Q - m : m),
                  (m *= g ? -1 : 1),
                  (Q *= g ? -1 : 1),
                  {
                    position: { x: m, y: h._currentScroll },
                    ratio: { x: C, y: h._currentScrollRatio },
                    max: { x: Q, y: h._maxScroll },
                    handleOffset: { x: l._handleOffset, y: h._handleOffset },
                    handleLength: { x: l._handleLength, y: h._handleLength },
                    handleLengthRatio: { x: l._handleLengthRatio, y: h._handleLengthRatio },
                    trackLength: { x: l._trackLength, y: h._trackLength },
                    snappedHandleOffset: { x: l._snappedHandleOffset, y: h._snappedHandleOffset },
                    isRTL: fr,
                    isRTLNormalized: Qa,
                  }
                );
              }
              L.update(zn);
              var P = Qa,
                er = [Mt, _r, 'l'],
                nr = [Rt, qr, 't'],
                pr = ['+=', '-=', '*=', '/='],
                U = H(a) == _.o,
                cr = U ? a.complete : o,
                Z,
                wr = {},
                ie = {},
                Kr,
                Ne,
                se,
                Zr = 'end',
                Xr = 'begin',
                te = 'center',
                Ie = 'nearest',
                $r = 'always',
                Rr = 'never',
                aa = 'ifneeded',
                Cr = i.l,
                Nr,
                S,
                Ar,
                kr,
                Ae,
                Ka = [Mt, Rt, 'xy', 'yx'],
                At = [Xr, Zr, te, Ie],
                Pe = [$r, Rr, aa],
                La = r[i.hOP]('el'),
                Ha = La ? r.el : r,
                Ke = Ha instanceof V || vt ? Ha instanceof vt : !1,
                en = Ke ? !1 : Ms(Ha),
                Ye = function () {
                  Kr && xa(!0), Ne && xa(!1);
                },
                Oe =
                  H(cr) != _.f
                    ? z
                    : function () {
                        Ye(), cr();
                      };
              function Ya(F, W) {
                for (Z = 0; Z < W[Cr]; Z++) if (F === W[Z]) return !0;
                return !1;
              }
              function Ge(F, W) {
                var Fr = F ? er : nr;
                if (((W = H(W) == _.s || H(W) == _.n ? [W, W] : W), T.isA(W)))
                  return F ? W[0] : W[1];
                if (H(W) == _.o) {
                  for (Z = 0; Z < Fr[Cr]; Z++) if (Fr[Z] in W) return W[Fr[Z]];
                }
              }
              function Wr(F, W) {
                var Fr = H(W) == _.s,
                  we,
                  Ur,
                  oe = F ? je : ha,
                  ee = oe._currentScroll,
                  ke = oe._maxScroll,
                  st = ' * ',
                  Ir,
                  Za = fr && F,
                  ca = Za && k.n && !P,
                  _e = 'replace',
                  ga = eval,
                  Ca;
                if (
                  (Fr
                    ? (W[Cr] > 2 && ((Ca = W.substr(0, 2)), j(Ca, pr) > -1 && (we = Ca)),
                      (W = we ? W.substr(2) : W),
                      (W = W[_e](/min/g, 0)
                        [_e](/</g, 0)
                        [_e](/max/g, (ca ? '-' : K) + Ra)
                        [_e](/>/g, (ca ? '-' : K) + Ra)
                        [_e](/px/g, K)
                        [_e](/%/g, st + (ke * (Za && k.n ? -1 : 1)) / 100)
                        [_e](/vw/g, st + dr.w)
                        [_e](/vh/g, st + dr.h)),
                      (Ur = Ea(isNaN(W) ? Ea(ga(W), !0).toFixed() : W)))
                    : (Ur = W),
                  Ur !== z && !isNaN(Ur) && H(Ur) == _.n)
                ) {
                  var ot = P && Za,
                    la = ee * (ot && k.n ? -1 : 1),
                    Aa = ot && k.i,
                    an = ot && k.n;
                  switch (((la = Aa ? ke - la : la), we)) {
                    case '+=':
                      Ir = la + Ur;
                      break;
                    case '-=':
                      Ir = la - Ur;
                      break;
                    case '*=':
                      Ir = la * Ur;
                      break;
                    case '/=':
                      Ir = la / Ur;
                      break;
                    default:
                      Ir = Ur;
                      break;
                  }
                  (Ir = Aa ? ke - Ir : Ir),
                    (Ir *= an ? -1 : 1),
                    (Ir = Za && k.n ? N.min(0, N.max(ke, Ir)) : N.max(0, N.min(ke, Ir)));
                }
                return Ir === ee ? z : Ir;
              }
              function ta(F, W, Fr, we) {
                var Ur = [Fr, Fr],
                  oe = H(F),
                  ee,
                  ke;
                if (oe == W) F = [F, F];
                else if (oe == _.a) {
                  if (((ee = F[Cr]), ee > 2 || ee < 1)) F = Ur;
                  else
                    for (ee === 1 && (F[1] = Fr), Z = 0; Z < ee; Z++)
                      if (((ke = F[Z]), H(ke) != W || !Ya(ke, we))) {
                        F = Ur;
                        break;
                      }
                } else oe == _.o ? (F = [F[Mt] || Fr, F[Rt] || Fr]) : (F = Ur);
                return { x: F[0], y: F[1] };
              }
              function re(F) {
                var W = [],
                  Fr,
                  we,
                  Ur = [qr, ve, ue, _r];
                for (Z = 0; Z < F[Cr] && Z !== Ur[Cr]; Z++)
                  (Fr = F[Z]),
                    (we = H(Fr)),
                    we == _.b
                      ? W.push(Fr ? Ea(Ae.css(le + Ur[Z])) : 0)
                      : W.push(we == _.n ? Fr : 0);
                return W;
              }
              if (Ke || en) {
                var ir = La ? r.margin : 0,
                  Ga = La ? r.axis : 0,
                  ja = La ? r.scroll : 0,
                  Ja = La ? r.block : 0,
                  Ot = [0, 0, 0, 0],
                  na = H(ir),
                  Yr;
                if (((Ae = Ke ? Ha : V(Ha)), Ae[Cr] > 0)) {
                  na == _.n || na == _.b
                    ? (ir = re([ir, ir, ir, ir]))
                    : na == _.a
                    ? ((Yr = ir[Cr]),
                      Yr === 2
                        ? (ir = re([ir[0], ir[1], ir[0], ir[1]]))
                        : Yr >= 4
                        ? (ir = re(ir))
                        : (ir = Ot))
                    : na == _.o
                    ? (ir = re([ir[qr], ir[ve], ir[ue], ir[_r]]))
                    : (ir = Ot),
                    (Nr = Ya(Ga, Ka) ? Ga : 'xy'),
                    (S = ta(ja, _.s, $r, Pe)),
                    (Ar = ta(Ja, _.s, Xr, At)),
                    (kr = ir);
                  var yr = { l: je._currentScroll, t: ha._currentScroll },
                    ia = Ze.offset(),
                    Br = Ae.offset(),
                    ne = { x: S.x == Rr || Nr == Rt, y: S.y == Rr || Nr == Mt };
                  (Br[qr] -= kr[0]), (Br[_r] -= kr[3]);
                  var sa = {
                    x: N.round(Br[_r] - ia[_r] + yr.l),
                    y: N.round(Br[qr] - ia[qr] + yr.t),
                  };
                  if (
                    (fr &&
                      (!k.n && !k.i && (sa.x = N.round(ia[_r] - Br[_r] + yr.l)),
                      k.n && P && (sa.x *= -1),
                      k.i && P && (sa.x = N.round(ia[_r] - Br[_r] + (je._maxScroll - yr.l)))),
                    Ar.x != Xr || Ar.y != Xr || S.x == aa || S.y == aa || fr)
                  ) {
                    var It = Ae[0],
                      wt = c ? It[i.bCR]() : { width: It[i.oW], height: It[i.oH] },
                      oa = { w: wt[J] + kr[3] + kr[1], h: wt[xr] + kr[0] + kr[2] },
                      Na = function (W) {
                        var Fr = ra(W),
                          we = Fr._w_h,
                          Ur = Fr._left_top,
                          oe = Fr._x_y,
                          ee = Ar[oe] == (W && fr ? Xr : Zr),
                          ke = Ar[oe] == te,
                          st = Ar[oe] == Ie,
                          Ir = S[oe] == Rr,
                          Za = S[oe] == aa,
                          ca = dr[we],
                          _e = ia[Ur],
                          ga = oa[we],
                          Ca = Br[Ur],
                          ot = ke ? 2 : 1,
                          la = Ca + ga / 2,
                          Aa = _e + ca / 2,
                          an = ga <= ca && Ca >= _e && Ca + ga <= _e + ca;
                        Ir
                          ? (ne[oe] = !0)
                          : ne[oe] ||
                            ((st || Za) &&
                              ((ne[oe] = Za ? an : !1), (ee = ga < ca ? la > Aa : la < Aa)),
                            (sa[oe] -=
                              ee || ke ? (ca / ot - ga / ot) * (W && fr && P ? -1 : 1) : 0));
                      };
                    Na(!0), Na(!1);
                  }
                  ne.y && delete sa.y, ne.x && delete sa.x, (r = sa);
                }
              }
              (wr[he] = Wr(!0, Ge(!0, r))),
                (wr[de] = Wr(!1, Ge(!1, r))),
                (Kr = wr[he] !== z),
                (Ne = wr[de] !== z),
                (Kr || Ne) && (a > 0 || U)
                  ? U
                    ? ((a.complete = Oe), tr.animate(wr, a))
                    : ((se = { duration: a, complete: Oe }),
                      T.isA(t) || V.isPlainObject(t)
                        ? ((ie[he] = t[0] || t.x), (ie[de] = t[1] || t.y), (se.specialEasing = ie))
                        : (se.easing = t),
                      tr.animate(wr, se))
                  : (Kr && tr[he](wr[he]), Ne && tr[de](wr[de]), Ye());
            }),
            (L.scrollStop = function (r, a, t) {
              return tr.stop(r, a, t), L;
            }),
            (L.getElements = function (r) {
              var a = {
                target: rt,
                host: Qe,
                padding: et,
                viewport: yt,
                content: ba,
                scrollbarHorizontal: { scrollbar: _t[0], track: bn[0], handle: Yt[0] },
                scrollbarVertical: { scrollbar: bt[0], track: yn[0], handle: Gt[0] },
                scrollbarCorner: Le[0],
              };
              return H(r) == _.s ? Ti(a, r) : a;
            }),
            (L.getState = function (r) {
              function a(o) {
                if (!V.isPlainObject(o)) return o;
                var l = He({}, o),
                  h = function (g, m) {
                    l[i.hOP](g) && ((l[m] = l[g]), delete l[g]);
                  };
                return h('w', J), h('h', xr), delete l.c, l;
              }
              var t = {
                destroyed: !!a(q),
                sleeping: !!a(gr),
                autoUpdate: a(!Sa),
                widthAuto: a(Xe),
                heightAuto: a(at),
                padding: a(ri),
                overflowAmount: a(Ht),
                hideOverflow: a(Zt),
                hasOverflow: a(ka),
                contentScrollSize: a(mt),
                viewportSize: a(dr),
                hostSize: a(Jt),
                documentMixed: a(Hr),
              };
              return H(r) == _.s ? Ti(t, r) : t;
            }),
            (L.ext = function (r) {
              var a,
                t = so.split(' '),
                o = 0;
              if (H(r) == _.s) {
                if (Ba[i.hOP](r)) for (a = He({}, Ba[r]); o < t.length; o++) delete a[t[o]];
              } else {
                a = {};
                for (o in Ba) a[o] = He({}, L.ext(o));
              }
              return a;
            }),
            (L.addExt = function (r, a) {
              var t = A.extension(r),
                o,
                l,
                h,
                b,
                g = !0;
              if (t) {
                if (Ba[i.hOP](r)) return L.ext(r);
                if (
                  ((o = t.extensionFactory.call(L, He({}, t.defaultOptions), V, T)),
                  o &&
                    ((h = o.contract), H(h) == _.f && ((b = h(ar)), (g = H(b) == _.b ? b : g)), g))
                )
                  return (Ba[r] = o), (l = o.added), H(l) == _.f && l(a), L.ext(r);
              } else console.warn('A extension with the name "' + r + `" isn't registered.`);
            }),
            (L.removeExt = function (r) {
              var a = Ba[r],
                t;
              return a ? (delete Ba[r], (t = a.removed), H(t) == _.f && t(), !0) : !1;
            });
          function go(r, a, t) {
            (rs = R.defaultOptions),
              ($ = R.nativeScrollbarStyling),
              (n = He({}, R.nativeScrollbarSize)),
              (X = He({}, R.nativeScrollbarIsOverlaid)),
              (jr = He({}, R.overlayScrollbarDummySize)),
              (k = He({}, R.rtlScrollBehavior)),
              gi(He({}, rs, a)),
              (v = R.cssCalc),
              (br = R.msie),
              (hr = R.autoUpdateRecommended),
              (s = R.supportTransition),
              (c = R.supportTransform),
              (p = R.supportPassiveEvents),
              (y = R.supportResizeObserver),
              (E = R.supportMutationObserver),
              (wa = V(r.ownerDocument)),
              (Et = wa[0]),
              (_n = V(Et.defaultView || Et.parentWindow)),
              (jt = _n[0]),
              (Tt = Nt(wa, 'html')),
              (pt = Nt(Tt, 'body')),
              (or = V(r)),
              (rt = or[0]),
              (I = or.is('textarea')),
              (rr = or.is('body')),
              (Hr = Et !== Lr),
              (Pr = I
                ? or.hasClass(un) && or.parent().hasClass(Gn)
                : or.hasClass(ge) && or.children(Ue + Kn)[i.l]);
            var o, l;
            return X.x && X.y && !ae.nativeScrollbarsOverlaid.initialize
              ? (Ve('onInitializationWithdrawn'),
                Pr && (Ci(!0), Ai(!0), wi(!0)),
                (q = !0),
                (gr = !0),
                L)
              : (rr &&
                  ((o = {}),
                  (o.l = N.max(or[he](), Tt[he](), _n[he]())),
                  (o.t = N.max(or[de](), Tt[de](), _n[de]())),
                  (l = function () {
                    tr.removeAttr(i.ti), We(tr, St, l, !0, !0);
                  })),
                Ci(),
                Ai(),
                wi(),
                po(),
                Is(!0),
                Is(!1),
                _o(),
                oo(),
                kn(_a, co),
                rr &&
                  (tr[he](o.l)[de](o.t),
                  Lr.activeElement == r &&
                    yt.focus &&
                    (tr.attr(i.ti, '-1'), yt.focus(), We(tr, St, l, !1, !0))),
                L.update(zr),
                (D = !0),
                Ve('onInitialized'),
                G(Zn, function (h, b) {
                  Ve(b.n, b.a);
                }),
                (Zn = []),
                H(t) == _.s && (t = [t]),
                T.isA(t)
                  ? G(t, function (h, b) {
                      L.addExt(b);
                    })
                  : V.isPlainObject(t) &&
                    G(t, function (h, b) {
                      L.addExt(h, b);
                    }),
                setTimeout(function () {
                  s && !q && Jr(Y, Bi);
                }, 333),
                L);
          }
          return A.valid(go(w, M, vr)) && Ma(w, L), L;
        }
        return (
          (A = ar[zt] =
            function (w, M, vr) {
              if (arguments[i.l] === 0) return this;
              var R = [],
                Sr = V.isPlainObject(M),
                H,
                j;
              return w
                ? ((w = w[i.l] != z ? w : [w[0] || w]),
                  f(),
                  w[i.l] > 0 &&
                    (Sr
                      ? V.each(w, function (G, L) {
                          (H = L), H !== z && R.push(sr(H, M, vr, O, x));
                        })
                      : V.each(w, function (G, L) {
                          (H = Ma(L)),
                            ((M === '!' && A.valid(H)) ||
                              (T.type(M) == _.f && M(L, H)) ||
                              M === z) &&
                              R.push(H);
                        }),
                    (j = R[i.l] === 1 ? R[0] : R)),
                  j)
                : Sr || !M
                ? j
                : R;
            }),
          (A.globals = function () {
            f();
            var w = V.extend(!0, {}, O);
            return delete w.msie, w;
          }),
          (A.defaultOptions = function (w) {
            f();
            var M = O.defaultOptions;
            if (w === z) return V.extend(!0, {}, M);
            O.defaultOptions = V.extend(!0, {}, M, u._validate(w, u._template, !0, M)._default);
          }),
          (A.valid = function (w) {
            return w instanceof A && !w.getState().destroyed;
          }),
          (A.extension = function (w, M, vr) {
            var R = T.type(w) == _.s,
              Sr = arguments[i.l],
              H = 0;
            if (Sr < 1 || !R) return V.extend(!0, { length: e[i.l] }, e);
            if (R) {
              if (T.type(M) == _.f) e.push({ name: w, extensionFactory: M, defaultOptions: vr });
              else
                for (; H < e[i.l]; H++)
                  if (e[H].name === w)
                    if (Sr > 1) e.splice(H, 1);
                    else return V.extend(!0, {}, e[H]);
            }
          }),
          A
        );
      })();
    return (
      vt &&
        vt.fn &&
        (vt.fn.overlayScrollbars = function (A, O) {
          var x = this;
          return vt.isPlainObject(A)
            ? (vt.each(x, function () {
                Dn(this, A, O);
              }),
              x)
            : Dn(x, A);
        }),
      Dn
    );
  });
})(Xs);
var cn = Xs.exports,
  Bo = function (ar) {
    var Lr = ar.options,
      z = Lr === void 0 ? {} : Lr,
      zt = ar.extensions,
      _ = ar.className,
      i = ar.children,
      Se = Mo(ar, ['options', 'extensions', 'className', 'children']),
      T = Js(),
      N = Js();
    return (
      Pi(function () {
        return (
          (N.current = cn(T.current, z, zt)),
          Zs(N.current, _),
          function () {
            cn.valid(N.current) && (N.current.destroy(), (N.current = null));
          }
        );
      }, []),
      Pi(
        function () {
          cn.valid(N.current) && N.current.options(z);
        },
        [z],
      ),
      Pi(
        function () {
          cn.valid(N.current) && Zs(N.current, _);
        },
        [_],
      ),
      ua('div', {
        ...Object.assign({ className: 'os-host' }, Se, { ref: T }),
        children: [
          ua('div', { className: 'os-resize-observer-host' }),
          ua('div', {
            className: 'os-padding',
            children: ua('div', {
              className: 'os-viewport',
              children: ua('div', { className: 'os-content', children: i }),
            }),
          }),
          ua('div', {
            className: 'os-scrollbar os-scrollbar-horizontal ',
            children: ua('div', {
              className: 'os-scrollbar-track',
              children: ua('div', { className: 'os-scrollbar-handle' }),
            }),
          }),
          ua('div', {
            className: 'os-scrollbar os-scrollbar-vertical',
            children: ua('div', {
              className: 'os-scrollbar-track',
              children: ua('div', { className: 'os-scrollbar-handle' }),
            }),
          }),
          ua('div', { className: 'os-scrollbar-corner' }),
        ],
      })
    );
  };
function Zs($a, ar) {
  if (cn.valid($a)) {
    var Lr = $a.getElements(),
      z = Lr.host,
      zt = new RegExp(
        '(^os-host([-_].+|)$)|'.concat($a.options().className.replace(/\s/g, '$|'), '$'),
        'g',
      ),
      _ = z.className
        .split(' ')
        .filter(function (i) {
          return i.match(zt);
        })
        .join(' ');
    z.className = ''.concat(_, ' ').concat(ar || '');
  }
}
export { Bo as OverlayScrollbarsComponent, Bo as default };
//# sourceMappingURL=OverlayScrollbars-1355f44c.4f4c1cec.js.map
