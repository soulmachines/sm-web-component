!(function () {
  function e(t) {
    var n = 'function' == typeof Map ? new Map() : void 0;
    return (e = function (e) {
      if (
        null === e ||
        ((t = e), -1 === Function.toString.call(t).indexOf('[native code]'))
      )
        return e;
      var t;
      if ('function' != typeof e)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      if (void 0 !== n) {
        if (n.has(e)) return n.get(e);
        n.set(e, i);
      }
      function i() {
        return r(e, arguments, f(this).constructor);
      }
      return (
        (i.prototype = Object.create(e.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        a(i, e)
      );
    })(t);
  }
  function t(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
          return;
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var a, s = e[Symbol.iterator]();
            !(r = (a = s.next()).done) &&
            (n.push(a.value), !t || n.length !== t);
            r = !0
          );
        } catch (u) {
          (i = !0), (o = u);
        } finally {
          try {
            r || null == s.return || s.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      })(e, t) ||
      d(e, t) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function n(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return v(e);
      })(e) ||
      (function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      })(e) ||
      d(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function r(e, t, n) {
    return (r = c()
      ? Reflect.construct
      : function (e, t, n) {
          var r = [null];
          r.push.apply(r, t);
          var i = new (Function.bind.apply(e, r))();
          return n && a(i, n.prototype), i;
        }).apply(null, arguments);
  }
  function i(e, t, n) {
    return (i =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (e, t, n) {
            var r = (function (e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = f(e));

              );
              return e;
            })(e, t);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, t);
              return i.get ? i.get.call(n) : i.value;
            }
          })(e, t, n || e);
  }
  function o(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      t && a(e, t);
  }
  function a(e, t) {
    return (a =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function s(e) {
    var t = c();
    return function () {
      var n,
        r = f(e);
      if (t) {
        var i = f(this).constructor;
        n = Reflect.construct(r, arguments, i);
      } else n = r.apply(this, arguments);
      return u(this, n);
    };
  }
  function u(e, t) {
    return !t || ('object' != typeof t && 'function' != typeof t) ? l(e) : t;
  }
  function l(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function c() {
    if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ('function' == typeof Proxy) return !0;
    try {
      return (
        Date.prototype.toString.call(
          Reflect.construct(Date, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  }
  function f(e) {
    return (f = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function h(e, t) {
    var n;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
      if (
        Array.isArray(e) ||
        (n = d(e)) ||
        (t && e && 'number' == typeof e.length)
      ) {
        n && (e = n);
        var r = 0,
          i = function () {};
        return {
          s: i,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: i,
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }
    var o,
      a = !0,
      s = !1;
    return {
      s: function () {
        n = e[Symbol.iterator]();
      },
      n: function () {
        var e = n.next();
        return (a = e.done), e;
      },
      e: function (e) {
        (s = !0), (o = e);
      },
      f: function () {
        try {
          a || null == n.return || n.return();
        } finally {
          if (s) throw o;
        }
      },
    };
  }
  function d(e, t) {
    if (e) {
      if ('string' == typeof e) return v(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? v(e, t)
          : void 0
      );
    }
  }
  function v(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function p(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function y(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function m(e, t, n) {
    return t && y(e.prototype, t), n && y(e, n), e;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
      0: function (e, t, n) {
        e.exports = n('zUnb');
      },
      KJ4T: function (e, t) {
        !(function (e, t) {
          'use strict';
          function n() {
            var e = C.splice(0, C.length);
            for (Qe = 0; e.length; ) e.shift().call(null, e.shift());
          }
          function r(e, t) {
            for (var n = 0, r = e.length; n < r; n++) v(e[n], t);
          }
          function i(e) {
            return function (t) {
              He(t) && (v(t, e), oe.length && r(t.querySelectorAll(oe), e));
            };
          }
          function o(e) {
            var t = Ze.call(e, 'is'),
              n = e.nodeName.toUpperCase(),
              r = se.call(re, t ? ee + t.toUpperCase() : $ + n);
            return t && -1 < r && !a(n, t) ? -1 : r;
          }
          function a(e, t) {
            return -1 < oe.indexOf(e + '[is="' + t + '"]');
          }
          function s(e) {
            var t = e.currentTarget,
              n = e.attrChange,
              r = e.attrName,
              i = e.target,
              o = e[J] || 2,
              a = e[K] || 3;
            !rt ||
              (i && i !== t) ||
              !t[Z] ||
              'style' === r ||
              (e.prevValue === e.newValue &&
                ('' !== e.newValue || (n !== o && n !== a))) ||
              t[Z](
                r,
                n === o ? null : e.prevValue,
                n === a ? null : e.newValue
              );
          }
          function u(e) {
            var t = i(e);
            return function (e) {
              C.push(t, e.target),
                Qe && clearTimeout(Qe),
                (Qe = setTimeout(n, 1));
            };
          }
          function l(e) {
            nt && ((nt = !1), e.currentTarget.removeEventListener(Q, l)),
              oe.length &&
                r((e.target || w).querySelectorAll(oe), e.detail === z ? z : L),
              Re &&
                (function () {
                  for (var e, t = 0, n = je.length; t < n; t++)
                    ae.contains((e = je[t])) ||
                      (n--, je.splice(t--, 1), v(e, z));
                })();
          }
          function c(e, t) {
            var n = this;
            qe.call(n, e, t), S.call(n, { target: n });
          }
          function f(e, t, n) {
            var r = t.apply(e, n),
              i = o(r);
            return (
              -1 < i && M(r, ie[i]),
              n.pop() &&
                oe.length &&
                (function (e) {
                  for (var t, n = 0, r = e.length; n < r; n++)
                    M((t = e[n]), ie[o(t)]);
                })(r.querySelectorAll(oe)),
              r
            );
          }
          function h(e, t) {
            Ae(e, t),
              I
                ? I.observe(e, Ke)
                : (tt && ((e.setAttribute = c), (e[H] = O(e)), e[j](Y, S)),
                  e[j](X, s)),
              e[W] && rt && ((e.created = !0), e[W](), (e.created = !1));
          }
          function d(e) {
            throw new Error('A ' + e + ' type is already registered');
          }
          function v(e, t) {
            var n,
              r,
              i = o(e);
            -1 < i &&
              !ze.call(e, 'TEMPLATE') &&
              (N(e, ie[i]),
              (i = 0),
              t !== L || e[L]
                ? t !== z ||
                  e[z] ||
                  ((e[L] = !1), (e[z] = !0), (r = 'disconnected'), (i = 1))
                : ((e[z] = !1),
                  (e[L] = !0),
                  (r = 'connected'),
                  (i = 1),
                  Re && se.call(je, e) < 0 && je.push(e)),
              i && (n = e[t + F] || e[r + F]) && n.call(e));
          }
          function p() {}
          function y(e, t, n) {
            var r = (n && n[V]) || '',
              i = t.prototype,
              o = Ie(i),
              a = t.observedAttributes || he,
              s = { prototype: o };
            Pe(o, W, {
              value: function () {
                if (Te) Te = !1;
                else if (!this[ge]) {
                  (this[ge] = !0), new t(this), i[W] && i[W].call(this);
                  var e = Ce[xe.get(t)];
                  (!ke || e.create.length > 1) && _(this);
                }
              },
            }),
              Pe(o, Z, {
                value: function (e) {
                  -1 < se.call(a, e) && i[Z] && i[Z].apply(this, arguments);
                },
              }),
              i[U] && Pe(o, B, { value: i[U] }),
              i[q] && Pe(o, G, { value: i[q] }),
              r && (s[V] = r),
              (e = e.toUpperCase()),
              (Ce[e] = { constructor: t, create: r ? [r, Oe(e)] : [e] }),
              xe.set(t, e),
              w[R](e.toLowerCase(), s),
              k(e),
              Se[e].r();
          }
          function m(e) {
            var t = Ce[e.toUpperCase()];
            return t && t.constructor;
          }
          function g(e) {
            return 'string' == typeof e ? e : (e && e.is) || '';
          }
          function _(e) {
            for (
              var t, n = e[Z], r = n ? e.attributes : he, i = r.length;
              i--;

            )
              n.call(
                e,
                (t = r[i]).name || t.nodeName,
                null,
                t.value || t.nodeValue
              );
          }
          function k(e) {
            return (
              (e = e.toUpperCase()) in Se ||
                ((Se[e] = {}),
                (Se[e].p = new Ee(function (t) {
                  Se[e].r = t;
                }))),
              Se[e].p
            );
          }
          function b() {
            _e && delete e.customElements,
              fe(e, 'customElements', { configurable: !0, value: new p() }),
              fe(e, 'CustomElementRegistry', { configurable: !0, value: p });
            for (
              var t = T.get(/^HTML[A-Z]*[a-z]/), n = t.length;
              n--;
              (function (t) {
                var n = e[t];
                if (n) {
                  (e[t] = function (e) {
                    var t, r;
                    return (
                      e || (e = this),
                      e[ge] ||
                        ((Te = !0),
                        (t = Ce[xe.get(e.constructor)]),
                        ((e = (r = ke && 1 === t.create.length)
                          ? Reflect.construct(n, he, t.constructor)
                          : w.createElement.apply(w, t.create))[ge] = !0),
                        (Te = !1),
                        r || _(e)),
                      e
                    );
                  }),
                    (e[t].prototype = n.prototype);
                  try {
                    n.prototype.constructor = e[t];
                  } catch (r) {
                    fe(n, ge, { value: e[t] });
                  }
                }
              })(t[n])
            );
            (w.createElement = function (e, t) {
              var n = g(t);
              return n ? Je.call(this, e, Oe(n)) : Je.call(this, e);
            }),
              Ye || ((et = !0), w[R](''));
          }
          var w = e.document,
            E = e.Object,
            T = (function (e) {
              var t,
                n,
                r,
                i,
                o = /^[A-Z]+[a-z]/,
                a = function (e, t) {
                  (t = t.toLowerCase()) in s ||
                    ((s[e] = (s[e] || []).concat(t)),
                    (s[t] = s[t.toUpperCase()] = e));
                },
                s = (E.create || E)(null),
                u = {};
              for (n in e)
                for (i in e[n])
                  for (s[i] = r = e[n][i], t = 0; t < r.length; t++)
                    s[r[t].toLowerCase()] = s[r[t].toUpperCase()] = i;
              return (
                (u.get = function (e) {
                  return 'string' == typeof e
                    ? s[e] || (o.test(e) ? [] : '')
                    : (function (e) {
                        var t,
                          n = [];
                        for (t in s) e.test(t) && n.push(t);
                        return n;
                      })(e);
                }),
                (u.set = function (e, t) {
                  return o.test(e) ? a(e, t) : a(t, e), u;
                }),
                u
              );
            })({
              collections: {
                HTMLAllCollection: ['all'],
                HTMLCollection: ['forms'],
                HTMLFormControlsCollection: ['elements'],
                HTMLOptionsCollection: ['options'],
              },
              elements: {
                Element: ['element'],
                HTMLAnchorElement: ['a'],
                HTMLAppletElement: ['applet'],
                HTMLAreaElement: ['area'],
                HTMLAttachmentElement: ['attachment'],
                HTMLAudioElement: ['audio'],
                HTMLBRElement: ['br'],
                HTMLBaseElement: ['base'],
                HTMLBodyElement: ['body'],
                HTMLButtonElement: ['button'],
                HTMLCanvasElement: ['canvas'],
                HTMLContentElement: ['content'],
                HTMLDListElement: ['dl'],
                HTMLDataElement: ['data'],
                HTMLDataListElement: ['datalist'],
                HTMLDetailsElement: ['details'],
                HTMLDialogElement: ['dialog'],
                HTMLDirectoryElement: ['dir'],
                HTMLDivElement: ['div'],
                HTMLDocument: ['document'],
                HTMLElement: [
                  'element',
                  'abbr',
                  'address',
                  'article',
                  'aside',
                  'b',
                  'bdi',
                  'bdo',
                  'cite',
                  'code',
                  'command',
                  'dd',
                  'dfn',
                  'dt',
                  'em',
                  'figcaption',
                  'figure',
                  'footer',
                  'header',
                  'i',
                  'kbd',
                  'mark',
                  'nav',
                  'noscript',
                  'rp',
                  'rt',
                  'ruby',
                  's',
                  'samp',
                  'section',
                  'small',
                  'strong',
                  'sub',
                  'summary',
                  'sup',
                  'u',
                  'var',
                  'wbr',
                ],
                HTMLEmbedElement: ['embed'],
                HTMLFieldSetElement: ['fieldset'],
                HTMLFontElement: ['font'],
                HTMLFormElement: ['form'],
                HTMLFrameElement: ['frame'],
                HTMLFrameSetElement: ['frameset'],
                HTMLHRElement: ['hr'],
                HTMLHeadElement: ['head'],
                HTMLHeadingElement: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
                HTMLHtmlElement: ['html'],
                HTMLIFrameElement: ['iframe'],
                HTMLImageElement: ['img'],
                HTMLInputElement: ['input'],
                HTMLKeygenElement: ['keygen'],
                HTMLLIElement: ['li'],
                HTMLLabelElement: ['label'],
                HTMLLegendElement: ['legend'],
                HTMLLinkElement: ['link'],
                HTMLMapElement: ['map'],
                HTMLMarqueeElement: ['marquee'],
                HTMLMediaElement: ['media'],
                HTMLMenuElement: ['menu'],
                HTMLMenuItemElement: ['menuitem'],
                HTMLMetaElement: ['meta'],
                HTMLMeterElement: ['meter'],
                HTMLModElement: ['del', 'ins'],
                HTMLOListElement: ['ol'],
                HTMLObjectElement: ['object'],
                HTMLOptGroupElement: ['optgroup'],
                HTMLOptionElement: ['option'],
                HTMLOutputElement: ['output'],
                HTMLParagraphElement: ['p'],
                HTMLParamElement: ['param'],
                HTMLPictureElement: ['picture'],
                HTMLPreElement: ['pre'],
                HTMLProgressElement: ['progress'],
                HTMLQuoteElement: ['blockquote', 'q', 'quote'],
                HTMLScriptElement: ['script'],
                HTMLSelectElement: ['select'],
                HTMLShadowElement: ['shadow'],
                HTMLSlotElement: ['slot'],
                HTMLSourceElement: ['source'],
                HTMLSpanElement: ['span'],
                HTMLStyleElement: ['style'],
                HTMLTableCaptionElement: ['caption'],
                HTMLTableCellElement: ['td', 'th'],
                HTMLTableColElement: ['col', 'colgroup'],
                HTMLTableElement: ['table'],
                HTMLTableRowElement: ['tr'],
                HTMLTableSectionElement: ['thead', 'tbody', 'tfoot'],
                HTMLTemplateElement: ['template'],
                HTMLTextAreaElement: ['textarea'],
                HTMLTimeElement: ['time'],
                HTMLTitleElement: ['title'],
                HTMLTrackElement: ['track'],
                HTMLUListElement: ['ul'],
                HTMLUnknownElement: ['unknown', 'vhgroupv', 'vkeygen'],
                HTMLVideoElement: ['video'],
              },
              nodes: {
                Attr: ['node'],
                Audio: ['audio'],
                CDATASection: ['node'],
                CharacterData: ['node'],
                Comment: ['#comment'],
                Document: ['#document'],
                DocumentFragment: ['#document-fragment'],
                DocumentType: ['node'],
                HTMLDocument: ['#document'],
                Image: ['img'],
                Option: ['option'],
                ProcessingInstruction: ['node'],
                ShadowRoot: ['#shadow-root'],
                Text: ['#text'],
                XMLDocument: ['xml'],
              },
            });
          'object' != typeof t && (t = { type: t || 'auto' });
          var C,
            S,
            x,
            O,
            I,
            A,
            N,
            M,
            D,
            R = 'registerElement',
            P = (1e5 * e.Math.random()) >> 0,
            H = '__' + R + P,
            j = 'addEventListener',
            L = 'attached',
            F = 'Callback',
            z = 'detached',
            V = 'extends',
            Z = 'attributeChanged' + F,
            B = L + F,
            U = 'connected' + F,
            q = 'disconnected' + F,
            W = 'created' + F,
            G = z + F,
            J = 'ADDITION',
            K = 'REMOVAL',
            X = 'DOMAttrModified',
            Q = 'DOMContentLoaded',
            Y = 'DOMSubtreeModified',
            $ = '<',
            ee = '=',
            te = /^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,
            ne = [
              'ANNOTATION-XML',
              'COLOR-PROFILE',
              'FONT-FACE',
              'FONT-FACE-SRC',
              'FONT-FACE-URI',
              'FONT-FACE-FORMAT',
              'FONT-FACE-NAME',
              'MISSING-GLYPH',
            ],
            re = [],
            ie = [],
            oe = '',
            ae = w.documentElement,
            se =
              re.indexOf ||
              function (e) {
                for (var t = this.length; t-- && this[t] !== e; );
                return t;
              },
            ue = E.prototype,
            le = ue.hasOwnProperty,
            ce = ue.isPrototypeOf,
            fe = E.defineProperty,
            he = [],
            de = E.getOwnPropertyDescriptor,
            ve = E.getOwnPropertyNames,
            pe = E.getPrototypeOf,
            ye = E.setPrototypeOf,
            me = !!E.__proto__,
            ge = '__dreCEv1',
            _e = e.customElements,
            ke =
              !/^force/.test(t.type) &&
              !!(_e && _e.define && _e.get && _e.whenDefined),
            be = E.create || E,
            we =
              e.Map ||
              function () {
                var e,
                  t = [],
                  n = [];
                return {
                  get: function (e) {
                    return n[se.call(t, e)];
                  },
                  set: function (r, i) {
                    (e = se.call(t, r)) < 0
                      ? (n[t.push(r) - 1] = i)
                      : (n[e] = i);
                  },
                };
              },
            Ee =
              e.Promise ||
              function (e) {
                function t(e) {
                  for (r = !0; n.length; ) n.shift()(e);
                }
                var n = [],
                  r = !1,
                  i = {
                    catch: function () {
                      return i;
                    },
                    then: function (e) {
                      return n.push(e), r && setTimeout(t, 1), i;
                    },
                  };
                return e(t), i;
              },
            Te = !1,
            Ce = be(null),
            Se = be(null),
            xe = new we(),
            Oe = function (e) {
              return e.toLowerCase();
            },
            Ie =
              E.create ||
              function e(t) {
                return t ? ((e.prototype = t), new e()) : this;
              },
            Ae =
              ye ||
              (me
                ? function (e, t) {
                    return (e.__proto__ = t), e;
                  }
                : ve && de
                ? (function () {
                    function e(e, t) {
                      for (var n, r = ve(t), i = 0, o = r.length; i < o; i++)
                        le.call(e, (n = r[i])) || fe(e, n, de(t, n));
                    }
                    return function (t, n) {
                      do {
                        e(t, n);
                      } while ((n = pe(n)) && !ce.call(n, t));
                      return t;
                    };
                  })()
                : function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e;
                  }),
            Ne = e.MutationObserver || e.WebKitMutationObserver,
            Me = e.HTMLAnchorElement,
            De = (e.HTMLElement || e.Element || e.Node).prototype,
            Re = !ce.call(De, ae),
            Pe = Re
              ? function (e, t, n) {
                  return (e[t] = n.value), e;
                }
              : fe,
            He = Re
              ? function (e) {
                  return 1 === e.nodeType;
                }
              : function (e) {
                  return ce.call(De, e);
                },
            je = Re && [],
            Le = De.attachShadow,
            Fe = De.cloneNode,
            ze =
              De.closest ||
              function (e) {
                for (var t = this; t && t.nodeName !== e; ) t = t.parentNode;
                return t;
              },
            Ve = De.dispatchEvent,
            Ze = De.getAttribute,
            Be = De.hasAttribute,
            Ue = De.removeAttribute,
            qe = De.setAttribute,
            We = w.createElement,
            Ge = w.importNode,
            Je = We,
            Ke = Ne && {
              attributes: !0,
              characterData: !0,
              attributeOldValue: !0,
            },
            Xe =
              Ne ||
              function (e) {
                (tt = !1), ae.removeEventListener(X, Xe);
              },
            Qe = 0,
            Ye = R in w && !/^force-all/.test(t.type),
            $e = !0,
            et = !1,
            tt = !0,
            nt = !0,
            rt = !0;
          if (
            (Ne &&
              (((D = w.createElement('div')).innerHTML =
                '<div><div></div></div>'),
              new Ne(function (e, t) {
                if (
                  e[0] &&
                  'childList' == e[0].type &&
                  !e[0].removedNodes[0].childNodes.length
                ) {
                  var n = (D = de(De, 'innerHTML')) && D.set;
                  n &&
                    fe(De, 'innerHTML', {
                      set: function (e) {
                        for (; this.lastChild; )
                          this.removeChild(this.lastChild);
                        n.call(this, e);
                      },
                    });
                }
                t.disconnect(), (D = null);
              }).observe(D, { childList: !0, subtree: !0 }),
              (D.innerHTML = '')),
            Ye ||
              (ye || me
                ? ((N = function (e, t) {
                    ce.call(t, e) || h(e, t);
                  }),
                  (M = h))
                : (M = N =
                    function (e, t) {
                      e[H] || ((e[H] = E(!0)), h(e, t));
                    }),
              Re
                ? ((tt = !1),
                  (function () {
                    var e = de(De, j),
                      t = e.value,
                      n = function (e) {
                        var t = new CustomEvent(X, { bubbles: !0 });
                        (t.attrName = e),
                          (t.prevValue = Ze.call(this, e)),
                          (t.newValue = null),
                          (t[K] = t.attrChange = 2),
                          Ue.call(this, e),
                          Ve.call(this, t);
                      },
                      r = function (e, t) {
                        var n = Be.call(this, e),
                          r = n && Ze.call(this, e),
                          i = new CustomEvent(X, { bubbles: !0 });
                        qe.call(this, e, t),
                          (i.attrName = e),
                          (i.prevValue = n ? r : null),
                          (i.newValue = t),
                          n
                            ? (i.MODIFICATION = i.attrChange = 1)
                            : (i[J] = i.attrChange = 0),
                          Ve.call(this, i);
                      },
                      i = function (e) {
                        var t,
                          n = e.currentTarget,
                          r = n[H],
                          i = e.propertyName;
                        r.hasOwnProperty(i) &&
                          ((r = r[i]),
                          ((t = new CustomEvent(X, { bubbles: !0 })).attrName =
                            r.name),
                          (t.prevValue = r.value || null),
                          (t.newValue = r.value = n[i] || null),
                          null == t.prevValue
                            ? (t[J] = t.attrChange = 0)
                            : (t.MODIFICATION = t.attrChange = 1),
                          Ve.call(n, t));
                      };
                    (e.value = function (e, o, a) {
                      e === X &&
                        this[Z] &&
                        this.setAttribute !== r &&
                        ((this[H] = {
                          className: { name: 'class', value: this.className },
                        }),
                        (this.setAttribute = r),
                        (this.removeAttribute = n),
                        t.call(this, 'propertychange', i)),
                        t.call(this, e, o, a);
                    }),
                      fe(De, j, e);
                  })())
                : Ne ||
                  (ae[j](X, Xe),
                  ae.setAttribute(H, 1),
                  ae.removeAttribute(H),
                  tt &&
                    ((S = function (e) {
                      var t,
                        n,
                        r,
                        i = this;
                      if (i === e.target) {
                        for (r in ((t = i[H]), (i[H] = n = O(i)), n)) {
                          if (!(r in t)) return x(0, i, r, t[r], n[r], J);
                          if (n[r] !== t[r])
                            return x(1, i, r, t[r], n[r], 'MODIFICATION');
                        }
                        for (r in t)
                          if (!(r in n)) return x(2, i, r, t[r], n[r], K);
                      }
                    }),
                    (x = function (e, t, n, r, i, o) {
                      var a = {
                        attrChange: e,
                        currentTarget: t,
                        attrName: n,
                        prevValue: r,
                        newValue: i,
                      };
                      (a[o] = e), s(a);
                    }),
                    (O = function (e) {
                      for (
                        var t, n, r = {}, i = e.attributes, o = 0, a = i.length;
                        o < a;
                        o++
                      )
                        'setAttribute' !== (n = (t = i[o]).name) &&
                          (r[n] = t.value);
                      return r;
                    }))),
              (w[R] = function (e, t) {
                if (
                  ((n = e.toUpperCase()),
                  $e &&
                    (($e = !1),
                    Ne
                      ? ((I = (function (e, t) {
                          function n(e, t) {
                            for (var n = 0, r = e.length; n < r; t(e[n++]));
                          }
                          return new Ne(function (r) {
                            for (var i, o, a, s = 0, u = r.length; s < u; s++)
                              'childList' === (i = r[s]).type
                                ? (n(i.addedNodes, e), n(i.removedNodes, t))
                                : ((o = i.target),
                                  rt &&
                                    o[Z] &&
                                    'style' !== i.attributeName &&
                                    (a = Ze.call(o, i.attributeName)) !==
                                      i.oldValue &&
                                    o[Z](i.attributeName, i.oldValue, a));
                          });
                        })(i(L), i(z))),
                        (A = function (e) {
                          return (
                            I.observe(e, { childList: !0, subtree: !0 }), e
                          );
                        })(w),
                        Le &&
                          (De.attachShadow = function () {
                            return A(Le.apply(this, arguments));
                          }))
                      : ((C = []),
                        w[j]('DOMNodeInserted', u(L)),
                        w[j]('DOMNodeRemoved', u(z))),
                    w[j](Q, l),
                    w[j]('readystatechange', l),
                    (w.importNode = function (e, t) {
                      switch (e.nodeType) {
                        case 1:
                          return f(w, Ge, [e, !!t]);
                        case 11:
                          for (
                            var n = w.createDocumentFragment(),
                              r = e.childNodes,
                              i = r.length,
                              o = 0;
                            o < i;
                            o++
                          )
                            n.appendChild(w.importNode(r[o], !!t));
                          return n;
                        default:
                          return Fe.call(e, !!t);
                      }
                    }),
                    (De.cloneNode = function (e) {
                      return f(this, Fe, [!!e]);
                    })),
                  et)
                )
                  return (et = !1);
                if (
                  (-2 < se.call(re, ee + n) + se.call(re, $ + n) && d(e),
                  !te.test(n) || -1 < se.call(ne, n))
                )
                  throw new Error('The type ' + e + ' is invalid');
                var n,
                  o,
                  a = function () {
                    return c ? w.createElement(h, n) : w.createElement(h);
                  },
                  s = t || ue,
                  c = le.call(s, V),
                  h = c ? t[V].toUpperCase() : n;
                return (
                  c && -1 < se.call(re, $ + h) && d(h),
                  (o = re.push((c ? ee : $) + n) - 1),
                  (oe = oe.concat(
                    oe.length ? ',' : '',
                    c ? h + '[is="' + e.toLowerCase() + '"]' : h
                  )),
                  (a.prototype = ie[o] =
                    le.call(s, 'prototype') ? s.prototype : Ie(De)),
                  oe.length && r(w.querySelectorAll(oe), L),
                  a
                );
              }),
              (w.createElement = Je =
                function (e, t) {
                  var n = g(t),
                    r = n ? We.call(w, e, Oe(n)) : We.call(w, e),
                    i = '' + e,
                    o = se.call(re, (n ? ee : $) + (n || i).toUpperCase()),
                    s = -1 < o;
                  return (
                    n &&
                      (r.setAttribute('is', (n = n.toLowerCase())),
                      s && (s = a(i.toUpperCase(), n))),
                    (rt = !w.createElement.innerHTMLHelper),
                    s && M(r, ie[o]),
                    r
                  );
                })),
            addEventListener(
              'beforeunload',
              function () {
                delete w.createElement, delete w.importNode, delete w[R];
              },
              !1
            ),
            (p.prototype = {
              constructor: p,
              define: ke
                ? function (e, t, n) {
                    if (n) y(e, t, n);
                    else {
                      var r = e.toUpperCase();
                      (Ce[r] = { constructor: t, create: [r] }),
                        xe.set(t, r),
                        _e.define(e, t);
                    }
                  }
                : y,
              get: ke
                ? function (e) {
                    return _e.get(e) || m(e);
                  }
                : m,
              whenDefined: ke
                ? function (e) {
                    return Ee.race([_e.whenDefined(e), k(e)]);
                  }
                : k,
            }),
            !_e || /^force/.test(t.type))
          )
            b();
          else if (!t.noBuiltIn)
            try {
              !(function (t, n, r) {
                var i = new RegExp('^<a\\s+is=(\'|")' + r + '\\1></a>$');
                if (
                  ((n[V] = 'a'),
                  ((t.prototype = Ie(Me.prototype)).constructor = t),
                  e.customElements.define(r, t, n),
                  !i.test(w.createElement('a', { is: r }).outerHTML) ||
                    !i.test(new t().outerHTML))
                )
                  throw n;
              })(
                function e() {
                  return Reflect.construct(Me, [], e);
                },
                {},
                'document-register-element-a' + P
              );
            } catch (it) {
              b();
            }
          if (!t.noBuiltIn)
            try {
              if (We.call(w, 'a', 'a').outerHTML.indexOf('is') < 0) throw {};
            } catch (ot) {
              Oe = function (e) {
                return { is: e.toLowerCase() };
              };
            }
        })(window);
      },
      NlG8: function (e, t, n) {
        var r, i;
        void 0 ===
          (i =
            'function' ==
            typeof (r = function () {
              'use strict';
              Zone.__load_patch('getUserMedia', function (e, t, n) {
                var r,
                  i = e.navigator;
                i &&
                  i.getUserMedia &&
                  (i.getUserMedia =
                    ((r = i.getUserMedia),
                    function () {
                      var e = Array.prototype.slice.call(arguments),
                        t = n.bindArguments(e, r.name);
                      return r.apply(this, t);
                    }));
              });
            })
              ? r.call(t, n, t, e)
              : r) || (e.exports = i);
      },
      crnd: function (e, t) {
        function n(e) {
          return Promise.resolve().then(function () {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = 'MODULE_NOT_FOUND'), t);
          });
        }
        (n.keys = function () {
          return [];
        }),
          (n.resolve = n),
          (e.exports = n),
          (n.id = 'crnd');
      },
      eCJE: function (e, t, n) {
        var r, i;
        void 0 ===
          (i =
            'function' ==
            typeof (r = function () {
              'use strict';
              Zone.__load_patch('RTCPeerConnection', function (e, t, n) {
                var r = e.RTCPeerConnection;
                if (r) {
                  var i = n.symbol('addEventListener'),
                    o = n.symbol('removeEventListener');
                  (r.prototype.addEventListener = r.prototype[i]),
                    (r.prototype.removeEventListener = r.prototype[o]),
                    (r.prototype[i] = null),
                    (r.prototype[o] = null),
                    n.patchEventTarget(e, [r.prototype], { useG: !1 });
                }
              });
            })
              ? r.call(t, n, t, e)
              : r) || (e.exports = i);
      },
      'hN/g': function (e, t, n) {
        'use strict';
        n.r(t), n('pDpN'), n('eCJE'), n('NlG8');
        var r = n('uyix'),
          i = n.n(r);
        n('KJ4T'), (window.EventTarget = i.a);
      },
      pDpN: function (e, t, n) {
        var r, i;
        void 0 ===
          (i =
            'function' ==
            typeof (r = function () {
              'use strict';
              !(function (e) {
                var t = e.performance;
                function n(e) {
                  t && t.mark && t.mark(e);
                }
                function r(e, n) {
                  t && t.measure && t.measure(e, n);
                }
                n('Zone');
                var i = e.__Zone_symbol_prefix || '__zone_symbol__';
                function o(e) {
                  return i + e;
                }
                var a = !0 === e[o('forceDuplicateZoneCheck')];
                if (e.Zone) {
                  if (a || 'function' != typeof e.Zone.__symbol__)
                    throw new Error('Zone already loaded.');
                  return e.Zone;
                }
                var s = (function () {
                  function t(e, n) {
                    p(this, t),
                      (this._parent = e),
                      (this._name = n ? n.name || 'unnamed' : '<root>'),
                      (this._properties = (n && n.properties) || {}),
                      (this._zoneDelegate = new c(
                        this,
                        this._parent && this._parent._zoneDelegate,
                        n
                      ));
                  }
                  return (
                    m(
                      t,
                      [
                        {
                          key: 'get',
                          value: function (e) {
                            var t = this.getZoneWith(e);
                            if (t) return t._properties[e];
                          },
                        },
                        {
                          key: 'getZoneWith',
                          value: function (e) {
                            for (var t = this; t; ) {
                              if (t._properties.hasOwnProperty(e)) return t;
                              t = t._parent;
                            }
                            return null;
                          },
                        },
                        {
                          key: 'fork',
                          value: function (e) {
                            if (!e) throw new Error('ZoneSpec required!');
                            return this._zoneDelegate.fork(this, e);
                          },
                        },
                        {
                          key: 'wrap',
                          value: function (e, t) {
                            if ('function' != typeof e)
                              throw new Error('Expecting function got: ' + e);
                            var n = this._zoneDelegate.intercept(this, e, t),
                              r = this;
                            return function () {
                              return r.runGuarded(n, this, arguments, t);
                            };
                          },
                        },
                        {
                          key: 'run',
                          value: function (e, t, n, r) {
                            D = { parent: D, zone: this };
                            try {
                              return this._zoneDelegate.invoke(
                                this,
                                e,
                                t,
                                n,
                                r
                              );
                            } finally {
                              D = D.parent;
                            }
                          },
                        },
                        {
                          key: 'runGuarded',
                          value: function (e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : null,
                              n = arguments.length > 2 ? arguments[2] : void 0,
                              r = arguments.length > 3 ? arguments[3] : void 0;
                            D = { parent: D, zone: this };
                            try {
                              try {
                                return this._zoneDelegate.invoke(
                                  this,
                                  e,
                                  t,
                                  n,
                                  r
                                );
                              } catch (i) {
                                if (this._zoneDelegate.handleError(this, i))
                                  throw i;
                              }
                            } finally {
                              D = D.parent;
                            }
                          },
                        },
                        {
                          key: 'runTask',
                          value: function (e, t, n) {
                            if (e.zone != this)
                              throw new Error(
                                'A task can only be run in the zone of creation! (Creation: ' +
                                  (e.zone || b).name +
                                  '; Execution: ' +
                                  this.name +
                                  ')'
                              );
                            if (
                              e.state !== w ||
                              (e.type !== A && e.type !== I)
                            ) {
                              var r = e.state != C;
                              r && e._transitionTo(C, T), e.runCount++;
                              var i = R;
                              (R = e), (D = { parent: D, zone: this });
                              try {
                                e.type == I &&
                                  e.data &&
                                  !e.data.isPeriodic &&
                                  (e.cancelFn = void 0);
                                try {
                                  return this._zoneDelegate.invokeTask(
                                    this,
                                    e,
                                    t,
                                    n
                                  );
                                } catch (o) {
                                  if (this._zoneDelegate.handleError(this, o))
                                    throw o;
                                }
                              } finally {
                                e.state !== w &&
                                  e.state !== x &&
                                  (e.type == A || (e.data && e.data.isPeriodic)
                                    ? r && e._transitionTo(T, C)
                                    : ((e.runCount = 0),
                                      this._updateTaskCount(e, -1),
                                      r && e._transitionTo(w, C, w))),
                                  (D = D.parent),
                                  (R = i);
                              }
                            }
                          },
                        },
                        {
                          key: 'scheduleTask',
                          value: function (e) {
                            if (e.zone && e.zone !== this)
                              for (var t = this; t; ) {
                                if (t === e.zone)
                                  throw Error(
                                    'can not reschedule task to '
                                      .concat(
                                        this.name,
                                        ' which is descendants of the original zone '
                                      )
                                      .concat(e.zone.name)
                                  );
                                t = t.parent;
                              }
                            e._transitionTo(E, w);
                            var n = [];
                            (e._zoneDelegates = n), (e._zone = this);
                            try {
                              e = this._zoneDelegate.scheduleTask(this, e);
                            } catch (r) {
                              throw (
                                (e._transitionTo(x, E, w),
                                this._zoneDelegate.handleError(this, r),
                                r)
                              );
                            }
                            return (
                              e._zoneDelegates === n &&
                                this._updateTaskCount(e, 1),
                              e.state == E && e._transitionTo(T, E),
                              e
                            );
                          },
                        },
                        {
                          key: 'scheduleMicroTask',
                          value: function (e, t, n, r) {
                            return this.scheduleTask(
                              new f(O, e, t, n, r, void 0)
                            );
                          },
                        },
                        {
                          key: 'scheduleMacroTask',
                          value: function (e, t, n, r, i) {
                            return this.scheduleTask(new f(I, e, t, n, r, i));
                          },
                        },
                        {
                          key: 'scheduleEventTask',
                          value: function (e, t, n, r, i) {
                            return this.scheduleTask(new f(A, e, t, n, r, i));
                          },
                        },
                        {
                          key: 'cancelTask',
                          value: function (e) {
                            if (e.zone != this)
                              throw new Error(
                                'A task can only be cancelled in the zone of creation! (Creation: ' +
                                  (e.zone || b).name +
                                  '; Execution: ' +
                                  this.name +
                                  ')'
                              );
                            e._transitionTo(S, T, C);
                            try {
                              this._zoneDelegate.cancelTask(this, e);
                            } catch (t) {
                              throw (
                                (e._transitionTo(x, S),
                                this._zoneDelegate.handleError(this, t),
                                t)
                              );
                            }
                            return (
                              this._updateTaskCount(e, -1),
                              e._transitionTo(w, S),
                              (e.runCount = 0),
                              e
                            );
                          },
                        },
                        {
                          key: '_updateTaskCount',
                          value: function (e, t) {
                            var n = e._zoneDelegates;
                            -1 == t && (e._zoneDelegates = null);
                            for (var r = 0; r < n.length; r++)
                              n[r]._updateTaskCount(e.type, t);
                          },
                        },
                        {
                          key: 'parent',
                          get: function () {
                            return this._parent;
                          },
                        },
                        {
                          key: 'name',
                          get: function () {
                            return this._name;
                          },
                        },
                      ],
                      [
                        {
                          key: 'assertZonePatched',
                          value: function () {
                            if (e.Promise !== N.ZoneAwarePromise)
                              throw new Error(
                                'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)'
                              );
                          },
                        },
                        {
                          key: '__load_patch',
                          value: function (i, o) {
                            if (N.hasOwnProperty(i)) {
                              if (a) throw Error('Already loaded patch: ' + i);
                            } else if (!e['__Zone_disable_' + i]) {
                              var s = 'Zone:' + i;
                              n(s), (N[i] = o(e, t, M)), r(s, s);
                            }
                          },
                        },
                        {
                          key: 'root',
                          get: function () {
                            for (var e = t.current; e.parent; ) e = e.parent;
                            return e;
                          },
                        },
                        {
                          key: 'current',
                          get: function () {
                            return D.zone;
                          },
                        },
                        {
                          key: 'currentTask',
                          get: function () {
                            return R;
                          },
                        },
                      ]
                    ),
                    t
                  );
                })();
                s.__symbol__ = o;
                var u,
                  l = {
                    name: '',
                    onHasTask: function (e, t, n, r) {
                      return e.hasTask(n, r);
                    },
                    onScheduleTask: function (e, t, n, r) {
                      return e.scheduleTask(n, r);
                    },
                    onInvokeTask: function (e, t, n, r, i, o) {
                      return e.invokeTask(n, r, i, o);
                    },
                    onCancelTask: function (e, t, n, r) {
                      return e.cancelTask(n, r);
                    },
                  },
                  c = (function () {
                    function e(t, n, r) {
                      p(this, e),
                        (this._taskCounts = {
                          microTask: 0,
                          macroTask: 0,
                          eventTask: 0,
                        }),
                        (this.zone = t),
                        (this._parentDelegate = n),
                        (this._forkZS = r && (r && r.onFork ? r : n._forkZS)),
                        (this._forkDlgt = r && (r.onFork ? n : n._forkDlgt)),
                        (this._forkCurrZone =
                          r && (r.onFork ? this.zone : n._forkCurrZone)),
                        (this._interceptZS =
                          r && (r.onIntercept ? r : n._interceptZS)),
                        (this._interceptDlgt =
                          r && (r.onIntercept ? n : n._interceptDlgt)),
                        (this._interceptCurrZone =
                          r &&
                          (r.onIntercept ? this.zone : n._interceptCurrZone)),
                        (this._invokeZS = r && (r.onInvoke ? r : n._invokeZS)),
                        (this._invokeDlgt =
                          r && (r.onInvoke ? n : n._invokeDlgt)),
                        (this._invokeCurrZone =
                          r && (r.onInvoke ? this.zone : n._invokeCurrZone)),
                        (this._handleErrorZS =
                          r && (r.onHandleError ? r : n._handleErrorZS)),
                        (this._handleErrorDlgt =
                          r && (r.onHandleError ? n : n._handleErrorDlgt)),
                        (this._handleErrorCurrZone =
                          r &&
                          (r.onHandleError
                            ? this.zone
                            : n._handleErrorCurrZone)),
                        (this._scheduleTaskZS =
                          r && (r.onScheduleTask ? r : n._scheduleTaskZS)),
                        (this._scheduleTaskDlgt =
                          r && (r.onScheduleTask ? n : n._scheduleTaskDlgt)),
                        (this._scheduleTaskCurrZone =
                          r &&
                          (r.onScheduleTask
                            ? this.zone
                            : n._scheduleTaskCurrZone)),
                        (this._invokeTaskZS =
                          r && (r.onInvokeTask ? r : n._invokeTaskZS)),
                        (this._invokeTaskDlgt =
                          r && (r.onInvokeTask ? n : n._invokeTaskDlgt)),
                        (this._invokeTaskCurrZone =
                          r &&
                          (r.onInvokeTask ? this.zone : n._invokeTaskCurrZone)),
                        (this._cancelTaskZS =
                          r && (r.onCancelTask ? r : n._cancelTaskZS)),
                        (this._cancelTaskDlgt =
                          r && (r.onCancelTask ? n : n._cancelTaskDlgt)),
                        (this._cancelTaskCurrZone =
                          r &&
                          (r.onCancelTask ? this.zone : n._cancelTaskCurrZone)),
                        (this._hasTaskZS = null),
                        (this._hasTaskDlgt = null),
                        (this._hasTaskDlgtOwner = null),
                        (this._hasTaskCurrZone = null);
                      var i = r && r.onHasTask;
                      (i || (n && n._hasTaskZS)) &&
                        ((this._hasTaskZS = i ? r : l),
                        (this._hasTaskDlgt = n),
                        (this._hasTaskDlgtOwner = this),
                        (this._hasTaskCurrZone = t),
                        r.onScheduleTask ||
                          ((this._scheduleTaskZS = l),
                          (this._scheduleTaskDlgt = n),
                          (this._scheduleTaskCurrZone = this.zone)),
                        r.onInvokeTask ||
                          ((this._invokeTaskZS = l),
                          (this._invokeTaskDlgt = n),
                          (this._invokeTaskCurrZone = this.zone)),
                        r.onCancelTask ||
                          ((this._cancelTaskZS = l),
                          (this._cancelTaskDlgt = n),
                          (this._cancelTaskCurrZone = this.zone)));
                    }
                    return (
                      m(e, [
                        {
                          key: 'fork',
                          value: function (e, t) {
                            return this._forkZS
                              ? this._forkZS.onFork(
                                  this._forkDlgt,
                                  this.zone,
                                  e,
                                  t
                                )
                              : new s(e, t);
                          },
                        },
                        {
                          key: 'intercept',
                          value: function (e, t, n) {
                            return this._interceptZS
                              ? this._interceptZS.onIntercept(
                                  this._interceptDlgt,
                                  this._interceptCurrZone,
                                  e,
                                  t,
                                  n
                                )
                              : t;
                          },
                        },
                        {
                          key: 'invoke',
                          value: function (e, t, n, r, i) {
                            return this._invokeZS
                              ? this._invokeZS.onInvoke(
                                  this._invokeDlgt,
                                  this._invokeCurrZone,
                                  e,
                                  t,
                                  n,
                                  r,
                                  i
                                )
                              : t.apply(n, r);
                          },
                        },
                        {
                          key: 'handleError',
                          value: function (e, t) {
                            return (
                              !this._handleErrorZS ||
                              this._handleErrorZS.onHandleError(
                                this._handleErrorDlgt,
                                this._handleErrorCurrZone,
                                e,
                                t
                              )
                            );
                          },
                        },
                        {
                          key: 'scheduleTask',
                          value: function (e, t) {
                            var n = t;
                            if (this._scheduleTaskZS)
                              this._hasTaskZS &&
                                n._zoneDelegates.push(this._hasTaskDlgtOwner),
                                (n = this._scheduleTaskZS.onScheduleTask(
                                  this._scheduleTaskDlgt,
                                  this._scheduleTaskCurrZone,
                                  e,
                                  t
                                )) || (n = t);
                            else if (t.scheduleFn) t.scheduleFn(t);
                            else {
                              if (t.type != O)
                                throw new Error('Task is missing scheduleFn.');
                              _(t);
                            }
                            return n;
                          },
                        },
                        {
                          key: 'invokeTask',
                          value: function (e, t, n, r) {
                            return this._invokeTaskZS
                              ? this._invokeTaskZS.onInvokeTask(
                                  this._invokeTaskDlgt,
                                  this._invokeTaskCurrZone,
                                  e,
                                  t,
                                  n,
                                  r
                                )
                              : t.callback.apply(n, r);
                          },
                        },
                        {
                          key: 'cancelTask',
                          value: function (e, t) {
                            var n;
                            if (this._cancelTaskZS)
                              n = this._cancelTaskZS.onCancelTask(
                                this._cancelTaskDlgt,
                                this._cancelTaskCurrZone,
                                e,
                                t
                              );
                            else {
                              if (!t.cancelFn)
                                throw Error('Task is not cancelable');
                              n = t.cancelFn(t);
                            }
                            return n;
                          },
                        },
                        {
                          key: 'hasTask',
                          value: function (e, t) {
                            try {
                              this._hasTaskZS &&
                                this._hasTaskZS.onHasTask(
                                  this._hasTaskDlgt,
                                  this._hasTaskCurrZone,
                                  e,
                                  t
                                );
                            } catch (n) {
                              this.handleError(e, n);
                            }
                          },
                        },
                        {
                          key: '_updateTaskCount',
                          value: function (e, t) {
                            var n = this._taskCounts,
                              r = n[e],
                              i = (n[e] = r + t);
                            if (i < 0)
                              throw new Error(
                                'More tasks executed then were scheduled.'
                              );
                            (0 != r && 0 != i) ||
                              this.hasTask(this.zone, {
                                microTask: n.microTask > 0,
                                macroTask: n.macroTask > 0,
                                eventTask: n.eventTask > 0,
                                change: e,
                              });
                          },
                        },
                      ]),
                      e
                    );
                  })(),
                  f = (function () {
                    function t(n, r, i, o, a, s) {
                      if (
                        (p(this, t),
                        (this._zone = null),
                        (this.runCount = 0),
                        (this._zoneDelegates = null),
                        (this._state = 'notScheduled'),
                        (this.type = n),
                        (this.source = r),
                        (this.data = o),
                        (this.scheduleFn = a),
                        (this.cancelFn = s),
                        !i)
                      )
                        throw new Error('callback is not defined');
                      this.callback = i;
                      var u = this;
                      this.invoke =
                        n === A && o && o.useG
                          ? t.invokeTask
                          : function () {
                              return t.invokeTask.call(e, u, this, arguments);
                            };
                    }
                    return (
                      m(
                        t,
                        [
                          {
                            key: 'cancelScheduleRequest',
                            value: function () {
                              this._transitionTo(w, E);
                            },
                          },
                          {
                            key: '_transitionTo',
                            value: function (e, t, n) {
                              if (this._state !== t && this._state !== n)
                                throw new Error(
                                  ''
                                    .concat(this.type, " '")
                                    .concat(
                                      this.source,
                                      "': can not transition to '"
                                    )
                                    .concat(e, "', expecting state '")
                                    .concat(t, "'")
                                    .concat(
                                      n ? " or '" + n + "'" : '',
                                      ", was '"
                                    )
                                    .concat(this._state, "'.")
                                );
                              (this._state = e),
                                e == w && (this._zoneDelegates = null);
                            },
                          },
                          {
                            key: 'toString',
                            value: function () {
                              return this.data && void 0 !== this.data.handleId
                                ? this.data.handleId.toString()
                                : Object.prototype.toString.call(this);
                            },
                          },
                          {
                            key: 'toJSON',
                            value: function () {
                              return {
                                type: this.type,
                                state: this.state,
                                source: this.source,
                                zone: this.zone.name,
                                runCount: this.runCount,
                              };
                            },
                          },
                          {
                            key: 'zone',
                            get: function () {
                              return this._zone;
                            },
                          },
                          {
                            key: 'state',
                            get: function () {
                              return this._state;
                            },
                          },
                        ],
                        [
                          {
                            key: 'invokeTask',
                            value: function (e, t, n) {
                              e || (e = this), P++;
                              try {
                                return e.runCount++, e.zone.runTask(e, t, n);
                              } finally {
                                1 == P && k(), P--;
                              }
                            },
                          },
                        ]
                      ),
                      t
                    );
                  })(),
                  h = o('setTimeout'),
                  d = o('Promise'),
                  v = o('then'),
                  y = [],
                  g = !1;
                function _(t) {
                  if (0 === P && 0 === y.length)
                    if ((u || (e[d] && (u = e[d].resolve(0))), u)) {
                      var n = u[v];
                      n || (n = u.then), n.call(u, k);
                    } else e[h](k, 0);
                  t && y.push(t);
                }
                function k() {
                  if (!g) {
                    for (g = !0; y.length; ) {
                      var e = y;
                      y = [];
                      for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        try {
                          n.zone.runTask(n, null, null);
                        } catch (r) {
                          M.onUnhandledError(r);
                        }
                      }
                    }
                    M.microtaskDrainDone(), (g = !1);
                  }
                }
                var b = { name: 'NO ZONE' },
                  w = 'notScheduled',
                  E = 'scheduling',
                  T = 'scheduled',
                  C = 'running',
                  S = 'canceling',
                  x = 'unknown',
                  O = 'microTask',
                  I = 'macroTask',
                  A = 'eventTask',
                  N = {},
                  M = {
                    symbol: o,
                    currentZoneFrame: function () {
                      return D;
                    },
                    onUnhandledError: H,
                    microtaskDrainDone: H,
                    scheduleMicroTask: _,
                    showUncaughtError: function () {
                      return !s[o('ignoreConsoleErrorUncaughtError')];
                    },
                    patchEventTarget: function () {
                      return [];
                    },
                    patchOnProperties: H,
                    patchMethod: function () {
                      return H;
                    },
                    bindArguments: function () {
                      return [];
                    },
                    patchThen: function () {
                      return H;
                    },
                    patchMacroTask: function () {
                      return H;
                    },
                    setNativePromise: function (e) {
                      e && 'function' == typeof e.resolve && (u = e.resolve(0));
                    },
                    patchEventPrototype: function () {
                      return H;
                    },
                    isIEOrEdge: function () {
                      return !1;
                    },
                    getGlobalObjects: function () {},
                    ObjectDefineProperty: function () {
                      return H;
                    },
                    ObjectGetOwnPropertyDescriptor: function () {},
                    ObjectCreate: function () {},
                    ArraySlice: function () {
                      return [];
                    },
                    patchClass: function () {
                      return H;
                    },
                    wrapWithCurrentZone: function () {
                      return H;
                    },
                    filterProperties: function () {
                      return [];
                    },
                    attachOriginToPatched: function () {
                      return H;
                    },
                    _redefineProperty: function () {
                      return H;
                    },
                    patchCallbacks: function () {
                      return H;
                    },
                  },
                  D = { parent: null, zone: new s(null, null) },
                  R = null,
                  P = 0;
                function H() {}
                r('Zone', 'Zone'), (e.Zone = s);
              })(
                ('undefined' != typeof window && window) ||
                  ('undefined' != typeof self && self) ||
                  global
              ),
                Zone.__load_patch('ZoneAwarePromise', function (e, t, n) {
                  var r = Object.getOwnPropertyDescriptor,
                    i = Object.defineProperty,
                    o = n.symbol,
                    a = [],
                    s =
                      !0 ===
                      e[o('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')],
                    u = o('Promise'),
                    l = o('then');
                  (n.onUnhandledError = function (e) {
                    if (n.showUncaughtError()) {
                      var t = e && e.rejection;
                      t
                        ? console.error(
                            'Unhandled Promise rejection:',
                            t instanceof Error ? t.message : t,
                            '; Zone:',
                            e.zone.name,
                            '; Task:',
                            e.task && e.task.source,
                            '; Value:',
                            t,
                            t instanceof Error ? t.stack : void 0
                          )
                        : console.error(e);
                    }
                  }),
                    (n.microtaskDrainDone = function () {
                      for (
                        var e = function () {
                          var e = a.shift();
                          try {
                            e.zone.runGuarded(function () {
                              throw e;
                            });
                          } catch (r) {
                            !(function (e) {
                              n.onUnhandledError(e);
                              try {
                                var r = t[c];
                                'function' == typeof r && r.call(this, e);
                              } catch (i) {}
                            })(r);
                          }
                        };
                        a.length;

                      )
                        e();
                    });
                  var c = o('unhandledPromiseRejectionHandler');
                  function f(e) {
                    return e && e.then;
                  }
                  function d(e) {
                    return e;
                  }
                  function v(e) {
                    return I.reject(e);
                  }
                  var y = o('state'),
                    g = o('value'),
                    _ = o('finally'),
                    k = o('parentPromiseValue'),
                    b = o('parentPromiseState');
                  function w(e, t) {
                    return function (n) {
                      try {
                        T(e, t, n);
                      } catch (r) {
                        T(e, !1, r);
                      }
                    };
                  }
                  var E = o('currentTaskTrace');
                  function T(e, r, o) {
                    var u,
                      l,
                      c =
                        ((u = !1),
                        function (e) {
                          return function () {
                            u || ((u = !0), e.apply(null, arguments));
                          };
                        });
                    if (e === o)
                      throw new TypeError('Promise resolved with itself');
                    if (null === e[y]) {
                      var f = null;
                      try {
                        ('object' != typeof o && 'function' != typeof o) ||
                          (f = o && o.then);
                      } catch (m) {
                        return (
                          c(function () {
                            T(e, !1, m);
                          })(),
                          e
                        );
                      }
                      if (
                        !1 !== r &&
                        o instanceof I &&
                        o.hasOwnProperty(y) &&
                        o.hasOwnProperty(g) &&
                        null !== o[y]
                      )
                        S(o), T(e, o[y], o[g]);
                      else if (!1 !== r && 'function' == typeof f)
                        try {
                          f.call(o, c(w(e, r)), c(w(e, !1)));
                        } catch (m) {
                          c(function () {
                            T(e, !1, m);
                          })();
                        }
                      else {
                        e[y] = r;
                        var h = e[g];
                        if (
                          ((e[g] = o),
                          e[_] === _ &&
                            !0 === r &&
                            ((e[y] = e[b]), (e[g] = e[k])),
                          !1 === r && o instanceof Error)
                        ) {
                          var d =
                            t.currentTask &&
                            t.currentTask.data &&
                            t.currentTask.data.__creationTrace__;
                          d &&
                            i(o, E, {
                              configurable: !0,
                              enumerable: !1,
                              writable: !0,
                              value: d,
                            });
                        }
                        for (var v = 0; v < h.length; )
                          x(e, h[v++], h[v++], h[v++], h[v++]);
                        if (0 == h.length && 0 == r) {
                          e[y] = 0;
                          var p = o;
                          if (!s)
                            try {
                              throw new Error(
                                'Uncaught (in promise): ' +
                                  ((l = o) &&
                                  l.toString === Object.prototype.toString
                                    ? ((l.constructor && l.constructor.name) ||
                                        '') +
                                      ': ' +
                                      JSON.stringify(l)
                                    : l
                                    ? l.toString()
                                    : Object.prototype.toString.call(l)) +
                                  (o && o.stack ? '\n' + o.stack : '')
                              );
                            } catch (m) {
                              p = m;
                            }
                          (p.rejection = o),
                            (p.promise = e),
                            (p.zone = t.current),
                            (p.task = t.currentTask),
                            a.push(p),
                            n.scheduleMicroTask();
                        }
                      }
                    }
                    return e;
                  }
                  var C = o('rejectionHandledHandler');
                  function S(e) {
                    if (0 === e[y]) {
                      try {
                        var n = t[C];
                        n &&
                          'function' == typeof n &&
                          n.call(this, { rejection: e[g], promise: e });
                      } catch (i) {}
                      e[y] = !1;
                      for (var r = 0; r < a.length; r++)
                        e === a[r].promise && a.splice(r, 1);
                    }
                  }
                  function x(e, t, n, r, i) {
                    S(e);
                    var o = e[y],
                      a = o
                        ? 'function' == typeof r
                          ? r
                          : d
                        : 'function' == typeof i
                        ? i
                        : v;
                    t.scheduleMicroTask(
                      'Promise.then',
                      function () {
                        try {
                          var r = e[g],
                            i = !!n && _ === n[_];
                          i && ((n[k] = r), (n[b] = o));
                          var s = t.run(
                            a,
                            void 0,
                            i && a !== v && a !== d ? [] : [r]
                          );
                          T(n, !0, s);
                        } catch (u) {
                          T(n, !1, u);
                        }
                      },
                      n
                    );
                  }
                  var O = function () {},
                    I = (function () {
                      function e(t) {
                        p(this, e);
                        var n = this;
                        if (!(n instanceof e))
                          throw new Error('Must be an instanceof Promise.');
                        (n[y] = null), (n[g] = []);
                        try {
                          t && t(w(n, !0), w(n, !1));
                        } catch (r) {
                          T(n, !1, r);
                        }
                      }
                      return (
                        m(e, null, [
                          {
                            key: 'toString',
                            value: function () {
                              return 'function ZoneAwarePromise() { [native code] }';
                            },
                          },
                          {
                            key: 'resolve',
                            value: function (e) {
                              return T(new this(null), !0, e);
                            },
                          },
                          {
                            key: 'reject',
                            value: function (e) {
                              return T(new this(null), !1, e);
                            },
                          },
                          {
                            key: 'race',
                            value: function (e) {
                              var t,
                                n,
                                r = new this(function (e, r) {
                                  (t = e), (n = r);
                                });
                              function i(e) {
                                t(e);
                              }
                              function o(e) {
                                n(e);
                              }
                              var a,
                                s = h(e);
                              try {
                                for (s.s(); !(a = s.n()).done; ) {
                                  var u = a.value;
                                  f(u) || (u = this.resolve(u)), u.then(i, o);
                                }
                              } catch (l) {
                                s.e(l);
                              } finally {
                                s.f();
                              }
                              return r;
                            },
                          },
                          {
                            key: 'all',
                            value: function (t) {
                              return e.allWithCallback(t);
                            },
                          },
                          {
                            key: 'allSettled',
                            value: function (t) {
                              return (
                                this && this.prototype instanceof e ? this : e
                              ).allWithCallback(t, {
                                thenCallback: function (e) {
                                  return { status: 'fulfilled', value: e };
                                },
                                errorCallback: function (e) {
                                  return { status: 'rejected', reason: e };
                                },
                              });
                            },
                          },
                          {
                            key: 'allWithCallback',
                            value: function (e, t) {
                              var n,
                                r,
                                i,
                                o = this,
                                a = new this(function (e, t) {
                                  (n = e), (r = t);
                                }),
                                s = 2,
                                u = 0,
                                l = [],
                                c = h(e);
                              try {
                                var d = function () {
                                  var e = i.value;
                                  f(e) || (e = o.resolve(e));
                                  var a = u;
                                  try {
                                    e.then(
                                      function (e) {
                                        (l[a] = t ? t.thenCallback(e) : e),
                                          0 === --s && n(l);
                                      },
                                      function (e) {
                                        t
                                          ? ((l[a] = t.errorCallback(e)),
                                            0 === --s && n(l))
                                          : r(e);
                                      }
                                    );
                                  } catch (c) {
                                    r(c);
                                  }
                                  s++, u++;
                                };
                                for (c.s(); !(i = c.n()).done; ) d();
                              } catch (v) {
                                c.e(v);
                              } finally {
                                c.f();
                              }
                              return 0 === (s -= 2) && n(l), a;
                            },
                          },
                        ]),
                        m(e, [
                          {
                            key: 'then',
                            value: function (n, r) {
                              var i = this.constructor[Symbol.species];
                              (i && 'function' == typeof i) ||
                                (i = this.constructor || e);
                              var o = new i(O),
                                a = t.current;
                              return (
                                null == this[y]
                                  ? this[g].push(a, o, n, r)
                                  : x(this, a, o, n, r),
                                o
                              );
                            },
                          },
                          {
                            key: 'catch',
                            value: function (e) {
                              return this.then(null, e);
                            },
                          },
                          {
                            key: 'finally',
                            value: function (n) {
                              var r = this.constructor[Symbol.species];
                              (r && 'function' == typeof r) || (r = e);
                              var i = new r(O);
                              i[_] = _;
                              var o = t.current;
                              return (
                                null == this[y]
                                  ? this[g].push(o, i, n, n)
                                  : x(this, o, i, n, n),
                                i
                              );
                            },
                          },
                          {
                            key: Symbol.toStringTag,
                            get: function () {
                              return 'Promise';
                            },
                          },
                          {
                            key: Symbol.species,
                            get: function () {
                              return e;
                            },
                          },
                        ]),
                        e
                      );
                    })();
                  (I.resolve = I.resolve),
                    (I.reject = I.reject),
                    (I.race = I.race),
                    (I.all = I.all);
                  var A = (e[u] = e.Promise),
                    N = t.__symbol__('ZoneAwarePromise'),
                    M = r(e, 'Promise');
                  (M && !M.configurable) ||
                    (M && delete M.writable,
                    M && delete M.value,
                    M || (M = { configurable: !0, enumerable: !0 }),
                    (M.get = function () {
                      return e[N] ? e[N] : e[u];
                    }),
                    (M.set = function (t) {
                      t === I
                        ? (e[N] = t)
                        : ((e[u] = t),
                          t.prototype[l] || P(t),
                          n.setNativePromise(t));
                    }),
                    i(e, 'Promise', M)),
                    (e.Promise = I);
                  var D,
                    R = o('thenPatched');
                  function P(e) {
                    var t = e.prototype,
                      n = r(t, 'then');
                    if (!n || (!1 !== n.writable && n.configurable)) {
                      var i = t.then;
                      (t[l] = i),
                        (e.prototype.then = function (e, t) {
                          var n = this;
                          return new I(function (e, t) {
                            i.call(n, e, t);
                          }).then(e, t);
                        }),
                        (e[R] = !0);
                    }
                  }
                  if (((n.patchThen = P), A)) {
                    P(A);
                    var H = e.fetch;
                    'function' == typeof H &&
                      ((e[n.symbol('fetch')] = H),
                      (e.fetch =
                        ((D = H),
                        function () {
                          var e = D.apply(this, arguments);
                          if (e instanceof I) return e;
                          var t = e.constructor;
                          return t[R] || P(t), e;
                        })));
                  }
                  return (
                    (Promise[t.__symbol__('uncaughtPromiseErrors')] = a), I
                  );
                });
              var e = Object.getOwnPropertyDescriptor,
                t = Object.defineProperty,
                n = Object.getPrototypeOf,
                r = Object.create,
                i = Array.prototype.slice,
                o = Zone.__symbol__('addEventListener'),
                a = Zone.__symbol__('removeEventListener'),
                s = Zone.__symbol__('');
              function u(e, t) {
                return Zone.current.wrap(e, t);
              }
              function l(e, t, n, r, i) {
                return Zone.current.scheduleMacroTask(e, t, n, r, i);
              }
              var c = Zone.__symbol__,
                f = 'undefined' != typeof window,
                d = f ? window : void 0,
                v = (f && d) || ('object' == typeof self && self) || global,
                y = [null];
              function g(e, t) {
                for (var n = e.length - 1; n >= 0; n--)
                  'function' == typeof e[n] && (e[n] = u(e[n], t + '_' + n));
                return e;
              }
              function _(e) {
                return (
                  !e ||
                  (!1 !== e.writable &&
                    !('function' == typeof e.get && void 0 === e.set))
                );
              }
              var k =
                  'undefined' != typeof WorkerGlobalScope &&
                  self instanceof WorkerGlobalScope,
                b =
                  !('nw' in v) &&
                  void 0 !== v.process &&
                  '[object process]' === {}.toString.call(v.process),
                w = !b && !k && !(!f || !d.HTMLElement),
                E =
                  void 0 !== v.process &&
                  '[object process]' === {}.toString.call(v.process) &&
                  !k &&
                  !(!f || !d.HTMLElement),
                T = {},
                C = function (e) {
                  if ((e = e || v.event)) {
                    var t = T[e.type];
                    t || (t = T[e.type] = c('ON_PROPERTY' + e.type));
                    var n,
                      r = this || e.target || v,
                      i = r[t];
                    if (w && r === d && 'error' === e.type) {
                      var o = e;
                      !0 ===
                        (n =
                          i &&
                          i.call(
                            this,
                            o.message,
                            o.filename,
                            o.lineno,
                            o.colno,
                            o.error
                          )) && e.preventDefault();
                    } else
                      null == (n = i && i.apply(this, arguments)) ||
                        n ||
                        e.preventDefault();
                    return n;
                  }
                };
              function S(n, r, i) {
                var o = e(n, r);
                if (
                  (!o &&
                    i &&
                    e(i, r) &&
                    (o = { enumerable: !0, configurable: !0 }),
                  o && o.configurable)
                ) {
                  var a = c('on' + r + 'patched');
                  if (!n.hasOwnProperty(a) || !n[a]) {
                    delete o.writable, delete o.value;
                    var s = o.get,
                      u = o.set,
                      l = r.substr(2),
                      f = T[l];
                    f || (f = T[l] = c('ON_PROPERTY' + l)),
                      (o.set = function (e) {
                        var t = this;
                        t || n !== v || (t = v),
                          t &&
                            (t[f] && t.removeEventListener(l, C),
                            u && u.apply(t, y),
                            'function' == typeof e
                              ? ((t[f] = e), t.addEventListener(l, C, !1))
                              : (t[f] = null));
                      }),
                      (o.get = function () {
                        var e = this;
                        if ((e || n !== v || (e = v), !e)) return null;
                        var t = e[f];
                        if (t) return t;
                        if (s) {
                          var i = s && s.call(this);
                          if (i)
                            return (
                              o.set.call(this, i),
                              'function' == typeof e.removeAttribute &&
                                e.removeAttribute(r),
                              i
                            );
                        }
                        return null;
                      }),
                      t(n, r, o),
                      (n[a] = !0);
                  }
                }
              }
              function x(e, t, n) {
                if (t) for (var r = 0; r < t.length; r++) S(e, 'on' + t[r], n);
                else {
                  var i = [];
                  for (var o in e) 'on' == o.substr(0, 2) && i.push(o);
                  for (var a = 0; a < i.length; a++) S(e, i[a], n);
                }
              }
              var O = c('originalInstance');
              function I(e) {
                var n = v[e];
                if (n) {
                  (v[c(e)] = n),
                    (v[e] = function () {
                      var t = g(arguments, e);
                      switch (t.length) {
                        case 0:
                          this[O] = new n();
                          break;
                        case 1:
                          this[O] = new n(t[0]);
                          break;
                        case 2:
                          this[O] = new n(t[0], t[1]);
                          break;
                        case 3:
                          this[O] = new n(t[0], t[1], t[2]);
                          break;
                        case 4:
                          this[O] = new n(t[0], t[1], t[2], t[3]);
                          break;
                        default:
                          throw new Error('Arg list too long.');
                      }
                    }),
                    M(v[e], n);
                  var r,
                    i = new n(function () {});
                  for (r in i)
                    ('XMLHttpRequest' === e && 'responseBlob' === r) ||
                      (function (n) {
                        'function' == typeof i[n]
                          ? (v[e].prototype[n] = function () {
                              return this[O][n].apply(this[O], arguments);
                            })
                          : t(v[e].prototype, n, {
                              set: function (t) {
                                'function' == typeof t
                                  ? ((this[O][n] = u(t, e + '.' + n)),
                                    M(this[O][n], t))
                                  : (this[O][n] = t);
                              },
                              get: function () {
                                return this[O][n];
                              },
                            });
                      })(r);
                  for (r in n)
                    'prototype' !== r &&
                      n.hasOwnProperty(r) &&
                      (v[e][r] = n[r]);
                }
              }
              function A(t, r, i) {
                for (var o = t; o && !o.hasOwnProperty(r); ) o = n(o);
                !o && t[r] && (o = t);
                var a = c(r),
                  s = null;
                if (o && !(s = o[a]) && ((s = o[a] = o[r]), _(o && e(o, r)))) {
                  var u = i(s, a, r);
                  (o[r] = function () {
                    return u(this, arguments);
                  }),
                    M(o[r], s);
                }
                return s;
              }
              function N(e, t, n) {
                var r = null;
                function i(e) {
                  var t = e.data;
                  return (
                    (t.args[t.cbIdx] = function () {
                      e.invoke.apply(this, arguments);
                    }),
                    r.apply(t.target, t.args),
                    e
                  );
                }
                r = A(e, t, function (e) {
                  return function (t, r) {
                    var o = n(t, r);
                    return o.cbIdx >= 0 && 'function' == typeof r[o.cbIdx]
                      ? l(o.name, r[o.cbIdx], o, i)
                      : e.apply(t, r);
                  };
                });
              }
              function M(e, t) {
                e[c('OriginalDelegate')] = t;
              }
              var D = !1,
                R = !1;
              function P() {
                try {
                  var e = d.navigator.userAgent;
                  if (-1 !== e.indexOf('MSIE ') || -1 !== e.indexOf('Trident/'))
                    return !0;
                } catch (t) {}
                return !1;
              }
              function H() {
                if (D) return R;
                D = !0;
                try {
                  var e = d.navigator.userAgent;
                  (-1 === e.indexOf('MSIE ') &&
                    -1 === e.indexOf('Trident/') &&
                    -1 === e.indexOf('Edge/')) ||
                    (R = !0);
                } catch (t) {}
                return R;
              }
              Zone.__load_patch('toString', function (e) {
                var t = Function.prototype.toString,
                  n = c('OriginalDelegate'),
                  r = c('Promise'),
                  i = c('Error'),
                  o = function () {
                    if ('function' == typeof this) {
                      var o = this[n];
                      if (o)
                        return 'function' == typeof o
                          ? t.call(o)
                          : Object.prototype.toString.call(o);
                      if (this === Promise) {
                        var a = e[r];
                        if (a) return t.call(a);
                      }
                      if (this === Error) {
                        var s = e[i];
                        if (s) return t.call(s);
                      }
                    }
                    return t.call(this);
                  };
                (o[n] = t), (Function.prototype.toString = o);
                var a = Object.prototype.toString;
                Object.prototype.toString = function () {
                  return this instanceof Promise
                    ? '[object Promise]'
                    : a.call(this);
                };
              });
              var j = !1;
              if ('undefined' != typeof window)
                try {
                  var L = Object.defineProperty({}, 'passive', {
                    get: function () {
                      j = !0;
                    },
                  });
                  window.addEventListener('test', L, L),
                    window.removeEventListener('test', L, L);
                } catch (fe) {
                  j = !1;
                }
              var F = { useG: !0 },
                z = {},
                V = {},
                Z = new RegExp('^' + s + '(\\w+)(true|false)$'),
                B = c('propagationStopped');
              function U(e, t) {
                var n = (t ? t(e) : e) + 'false',
                  r = (t ? t(e) : e) + 'true',
                  i = s + n,
                  o = s + r;
                (z[e] = {}), (z[e].false = i), (z[e].true = o);
              }
              function q(e, t, r) {
                var i = (r && r.add) || 'addEventListener',
                  o = (r && r.rm) || 'removeEventListener',
                  a = (r && r.listeners) || 'eventListeners',
                  u = (r && r.rmAll) || 'removeAllListeners',
                  l = c(i),
                  f = '.' + i + ':',
                  h = function (e, t, n) {
                    if (!e.isRemoved) {
                      var r = e.callback;
                      'object' == typeof r &&
                        r.handleEvent &&
                        ((e.callback = function (e) {
                          return r.handleEvent(e);
                        }),
                        (e.originalDelegate = r)),
                        e.invoke(e, t, [n]);
                      var i = e.options;
                      i &&
                        'object' == typeof i &&
                        i.once &&
                        t[o].call(
                          t,
                          n.type,
                          e.originalDelegate ? e.originalDelegate : e.callback,
                          i
                        );
                    }
                  },
                  d = function (t) {
                    if ((t = t || e.event)) {
                      var n = this || t.target || e,
                        r = n[z[t.type].false];
                      if (r)
                        if (1 === r.length) h(r[0], n, t);
                        else
                          for (
                            var i = r.slice(), o = 0;
                            o < i.length && (!t || !0 !== t[B]);
                            o++
                          )
                            h(i[o], n, t);
                    }
                  },
                  v = function (t) {
                    if ((t = t || e.event)) {
                      var n = this || t.target || e,
                        r = n[z[t.type].true];
                      if (r)
                        if (1 === r.length) h(r[0], n, t);
                        else
                          for (
                            var i = r.slice(), o = 0;
                            o < i.length && (!t || !0 !== t[B]);
                            o++
                          )
                            h(i[o], n, t);
                    }
                  };
                function p(t, r) {
                  if (!t) return !1;
                  var h = !0;
                  r && void 0 !== r.useG && (h = r.useG);
                  var p = r && r.vh,
                    y = !0;
                  r && void 0 !== r.chkDup && (y = r.chkDup);
                  var m = !1;
                  r && void 0 !== r.rt && (m = r.rt);
                  for (var g = t; g && !g.hasOwnProperty(i); ) g = n(g);
                  if ((!g && t[i] && (g = t), !g)) return !1;
                  if (g[l]) return !1;
                  var _,
                    k = r && r.eventNameToString,
                    w = {},
                    E = (g[l] = g[i]),
                    T = (g[c(o)] = g[o]),
                    C = (g[c(a)] = g[a]),
                    S = (g[c(u)] = g[u]);
                  function x(e, t) {
                    return !j && 'object' == typeof e && e
                      ? !!e.capture
                      : j && t
                      ? 'boolean' == typeof e
                        ? { capture: e, passive: !0 }
                        : e
                        ? 'object' == typeof e && !1 !== e.passive
                          ? Object.assign(Object.assign({}, e), { passive: !0 })
                          : e
                        : { passive: !0 }
                      : e;
                  }
                  r && r.prepend && (_ = g[c(r.prepend)] = g[r.prepend]);
                  var O = h
                      ? function (e) {
                          if (!w.isExisting)
                            return E.call(
                              w.target,
                              w.eventName,
                              w.capture ? v : d,
                              w.options
                            );
                        }
                      : function (e) {
                          return E.call(
                            w.target,
                            w.eventName,
                            e.invoke,
                            w.options
                          );
                        },
                    I = h
                      ? function (e) {
                          if (!e.isRemoved) {
                            var t,
                              n = z[e.eventName];
                            n && (t = n[e.capture ? 'true' : 'false']);
                            var r = t && e.target[t];
                            if (r)
                              for (var i = 0; i < r.length; i++)
                                if (r[i] === e) {
                                  r.splice(i, 1),
                                    (e.isRemoved = !0),
                                    0 === r.length &&
                                      ((e.allRemoved = !0),
                                      (e.target[t] = null));
                                  break;
                                }
                          }
                          if (e.allRemoved)
                            return T.call(
                              e.target,
                              e.eventName,
                              e.capture ? v : d,
                              e.options
                            );
                        }
                      : function (e) {
                          return T.call(
                            e.target,
                            e.eventName,
                            e.invoke,
                            e.options
                          );
                        },
                    A =
                      r && r.diff
                        ? r.diff
                        : function (e, t) {
                            var n = typeof t;
                            return (
                              ('function' === n && e.callback === t) ||
                              ('object' === n && e.originalDelegate === t)
                            );
                          },
                    N = Zone[c('BLACK_LISTED_EVENTS')],
                    D = e[c('PASSIVE_EVENTS')],
                    R = function (t, n, i, o) {
                      var a =
                          arguments.length > 4 &&
                          void 0 !== arguments[4] &&
                          arguments[4],
                        s =
                          arguments.length > 5 &&
                          void 0 !== arguments[5] &&
                          arguments[5];
                      return function () {
                        var u = this || e,
                          l = arguments[0];
                        r &&
                          r.transferEventName &&
                          (l = r.transferEventName(l));
                        var c = arguments[1];
                        if (!c) return t.apply(this, arguments);
                        if (b && 'uncaughtException' === l)
                          return t.apply(this, arguments);
                        var f = !1;
                        if ('function' != typeof c) {
                          if (!c.handleEvent) return t.apply(this, arguments);
                          f = !0;
                        }
                        if (!p || p(t, c, u, arguments)) {
                          var d = j && !!D && -1 !== D.indexOf(l),
                            v = x(arguments[2], d);
                          if (N)
                            for (var m = 0; m < N.length; m++)
                              if (l === N[m])
                                return d
                                  ? t.call(u, l, c, v)
                                  : t.apply(this, arguments);
                          var g = !!v && ('boolean' == typeof v || v.capture),
                            _ = !(!v || 'object' != typeof v) && v.once,
                            E = Zone.current,
                            T = z[l];
                          T || (U(l, k), (T = z[l]));
                          var C,
                            S = T[g ? 'true' : 'false'],
                            O = u[S],
                            I = !1;
                          if (O) {
                            if (((I = !0), y))
                              for (var M = 0; M < O.length; M++)
                                if (A(O[M], c)) return;
                          } else O = u[S] = [];
                          var R = u.constructor.name,
                            P = V[R];
                          P && (C = P[l]),
                            C || (C = R + n + (k ? k(l) : l)),
                            (w.options = v),
                            _ && (w.options.once = !1),
                            (w.target = u),
                            (w.capture = g),
                            (w.eventName = l),
                            (w.isExisting = I);
                          var H = h ? F : void 0;
                          H && (H.taskData = w);
                          var L = E.scheduleEventTask(C, c, H, i, o);
                          return (
                            (w.target = null),
                            H && (H.taskData = null),
                            _ && (v.once = !0),
                            (j || 'boolean' != typeof L.options) &&
                              (L.options = v),
                            (L.target = u),
                            (L.capture = g),
                            (L.eventName = l),
                            f && (L.originalDelegate = c),
                            s ? O.unshift(L) : O.push(L),
                            a ? u : void 0
                          );
                        }
                      };
                    };
                  return (
                    (g[i] = R(E, f, O, I, m)),
                    _ &&
                      (g.prependListener = R(
                        _,
                        '.prependListener:',
                        function (e) {
                          return _.call(
                            w.target,
                            w.eventName,
                            e.invoke,
                            w.options
                          );
                        },
                        I,
                        m,
                        !0
                      )),
                    (g[o] = function () {
                      var t = this || e,
                        n = arguments[0];
                      r && r.transferEventName && (n = r.transferEventName(n));
                      var i = arguments[2],
                        o = !!i && ('boolean' == typeof i || i.capture),
                        a = arguments[1];
                      if (!a) return T.apply(this, arguments);
                      if (!p || p(T, a, t, arguments)) {
                        var u,
                          l = z[n];
                        l && (u = l[o ? 'true' : 'false']);
                        var c = u && t[u];
                        if (c)
                          for (var f = 0; f < c.length; f++) {
                            var h = c[f];
                            if (A(h, a))
                              return (
                                c.splice(f, 1),
                                (h.isRemoved = !0),
                                0 === c.length &&
                                  ((h.allRemoved = !0),
                                  (t[u] = null),
                                  'string' == typeof n) &&
                                  (t[s + 'ON_PROPERTY' + n] = null),
                                h.zone.cancelTask(h),
                                m ? t : void 0
                              );
                          }
                        return T.apply(this, arguments);
                      }
                    }),
                    (g[a] = function () {
                      var t = this || e,
                        n = arguments[0];
                      r && r.transferEventName && (n = r.transferEventName(n));
                      for (
                        var i = [], o = W(t, k ? k(n) : n), a = 0;
                        a < o.length;
                        a++
                      ) {
                        var s = o[a];
                        i.push(
                          s.originalDelegate ? s.originalDelegate : s.callback
                        );
                      }
                      return i;
                    }),
                    (g[u] = function () {
                      var t = this || e,
                        n = arguments[0];
                      if (n) {
                        r &&
                          r.transferEventName &&
                          (n = r.transferEventName(n));
                        var i = z[n];
                        if (i) {
                          var a = t[i.false],
                            s = t[i.true];
                          if (a)
                            for (var l = a.slice(), c = 0; c < l.length; c++) {
                              var f = l[c];
                              this[o].call(
                                this,
                                n,
                                f.originalDelegate
                                  ? f.originalDelegate
                                  : f.callback,
                                f.options
                              );
                            }
                          if (s)
                            for (var h = s.slice(), d = 0; d < h.length; d++) {
                              var v = h[d];
                              this[o].call(
                                this,
                                n,
                                v.originalDelegate
                                  ? v.originalDelegate
                                  : v.callback,
                                v.options
                              );
                            }
                        }
                      } else {
                        for (var p = Object.keys(t), y = 0; y < p.length; y++) {
                          var g = Z.exec(p[y]),
                            _ = g && g[1];
                          _ && 'removeListener' !== _ && this[u].call(this, _);
                        }
                        this[u].call(this, 'removeListener');
                      }
                      if (m) return this;
                    }),
                    M(g[i], E),
                    M(g[o], T),
                    S && M(g[u], S),
                    C && M(g[a], C),
                    !0
                  );
                }
                for (var y = [], m = 0; m < t.length; m++) y[m] = p(t[m], r);
                return y;
              }
              function W(e, t) {
                if (!t) {
                  var n = [];
                  for (var r in e) {
                    var i = Z.exec(r),
                      o = i && i[1];
                    if (o && (!t || o === t)) {
                      var a = e[r];
                      if (a) for (var s = 0; s < a.length; s++) n.push(a[s]);
                    }
                  }
                  return n;
                }
                var u = z[t];
                u || (U(t), (u = z[t]));
                var l = e[u.false],
                  c = e[u.true];
                return l ? (c ? l.concat(c) : l.slice()) : c ? c.slice() : [];
              }
              function G(e, t) {
                var n = e.Event;
                n &&
                  n.prototype &&
                  t.patchMethod(
                    n.prototype,
                    'stopImmediatePropagation',
                    function (e) {
                      return function (t, n) {
                        (t[B] = !0), e && e.apply(t, n);
                      };
                    }
                  );
              }
              function J(e, t, n, r, i) {
                var o = Zone.__symbol__(r);
                if (!t[o]) {
                  var a = (t[o] = t[r]);
                  (t[r] = function (o, s, u) {
                    return (
                      s &&
                        s.prototype &&
                        i.forEach(function (t) {
                          var i = ''.concat(n, '.').concat(r, '::') + t,
                            o = s.prototype;
                          if (o.hasOwnProperty(t)) {
                            var a = e.ObjectGetOwnPropertyDescriptor(o, t);
                            a && a.value
                              ? ((a.value = e.wrapWithCurrentZone(a.value, i)),
                                e._redefineProperty(s.prototype, t, a))
                              : o[t] && (o[t] = e.wrapWithCurrentZone(o[t], i));
                          } else o[t] && (o[t] = e.wrapWithCurrentZone(o[t], i));
                        }),
                      a.call(t, o, s, u)
                    );
                  }),
                    e.attachOriginToPatched(t[r], a);
                }
              }
              var K = [
                  'absolutedeviceorientation',
                  'afterinput',
                  'afterprint',
                  'appinstalled',
                  'beforeinstallprompt',
                  'beforeprint',
                  'beforeunload',
                  'devicelight',
                  'devicemotion',
                  'deviceorientation',
                  'deviceorientationabsolute',
                  'deviceproximity',
                  'hashchange',
                  'languagechange',
                  'message',
                  'mozbeforepaint',
                  'offline',
                  'online',
                  'paint',
                  'pageshow',
                  'pagehide',
                  'popstate',
                  'rejectionhandled',
                  'storage',
                  'unhandledrejection',
                  'unload',
                  'userproximity',
                  'vrdisplayconnected',
                  'vrdisplaydisconnected',
                  'vrdisplaypresentchange',
                ],
                X = [
                  'encrypted',
                  'waitingforkey',
                  'msneedkey',
                  'mozinterruptbegin',
                  'mozinterruptend',
                ],
                Q = ['load'],
                Y = [
                  'blur',
                  'error',
                  'focus',
                  'load',
                  'resize',
                  'scroll',
                  'messageerror',
                ],
                $ = ['bounce', 'finish', 'start'],
                ee = [
                  'loadstart',
                  'progress',
                  'abort',
                  'error',
                  'load',
                  'progress',
                  'timeout',
                  'loadend',
                  'readystatechange',
                ],
                te = [
                  'upgradeneeded',
                  'complete',
                  'abort',
                  'success',
                  'error',
                  'blocked',
                  'versionchange',
                  'close',
                ],
                ne = ['close', 'error', 'open', 'message'],
                re = ['error', 'message'],
                ie = [
                  'abort',
                  'animationcancel',
                  'animationend',
                  'animationiteration',
                  'auxclick',
                  'beforeinput',
                  'blur',
                  'cancel',
                  'canplay',
                  'canplaythrough',
                  'change',
                  'compositionstart',
                  'compositionupdate',
                  'compositionend',
                  'cuechange',
                  'click',
                  'close',
                  'contextmenu',
                  'curechange',
                  'dblclick',
                  'drag',
                  'dragend',
                  'dragenter',
                  'dragexit',
                  'dragleave',
                  'dragover',
                  'drop',
                  'durationchange',
                  'emptied',
                  'ended',
                  'error',
                  'focus',
                  'focusin',
                  'focusout',
                  'gotpointercapture',
                  'input',
                  'invalid',
                  'keydown',
                  'keypress',
                  'keyup',
                  'load',
                  'loadstart',
                  'loadeddata',
                  'loadedmetadata',
                  'lostpointercapture',
                  'mousedown',
                  'mouseenter',
                  'mouseleave',
                  'mousemove',
                  'mouseout',
                  'mouseover',
                  'mouseup',
                  'mousewheel',
                  'orientationchange',
                  'pause',
                  'play',
                  'playing',
                  'pointercancel',
                  'pointerdown',
                  'pointerenter',
                  'pointerleave',
                  'pointerlockchange',
                  'mozpointerlockchange',
                  'webkitpointerlockerchange',
                  'pointerlockerror',
                  'mozpointerlockerror',
                  'webkitpointerlockerror',
                  'pointermove',
                  'pointout',
                  'pointerover',
                  'pointerup',
                  'progress',
                  'ratechange',
                  'reset',
                  'resize',
                  'scroll',
                  'seeked',
                  'seeking',
                  'select',
                  'selectionchange',
                  'selectstart',
                  'show',
                  'sort',
                  'stalled',
                  'submit',
                  'suspend',
                  'timeupdate',
                  'volumechange',
                  'touchcancel',
                  'touchmove',
                  'touchstart',
                  'touchend',
                  'transitioncancel',
                  'transitionend',
                  'waiting',
                  'wheel',
                ].concat(
                  [
                    'webglcontextrestored',
                    'webglcontextlost',
                    'webglcontextcreationerror',
                  ],
                  ['autocomplete', 'autocompleteerror'],
                  ['toggle'],
                  [
                    'afterscriptexecute',
                    'beforescriptexecute',
                    'DOMContentLoaded',
                    'freeze',
                    'fullscreenchange',
                    'mozfullscreenchange',
                    'webkitfullscreenchange',
                    'msfullscreenchange',
                    'fullscreenerror',
                    'mozfullscreenerror',
                    'webkitfullscreenerror',
                    'msfullscreenerror',
                    'readystatechange',
                    'visibilitychange',
                    'resume',
                  ],
                  K,
                  [
                    'beforecopy',
                    'beforecut',
                    'beforepaste',
                    'copy',
                    'cut',
                    'paste',
                    'dragstart',
                    'loadend',
                    'animationstart',
                    'search',
                    'transitionrun',
                    'transitionstart',
                    'webkitanimationend',
                    'webkitanimationiteration',
                    'webkitanimationstart',
                    'webkittransitionend',
                  ],
                  [
                    'activate',
                    'afterupdate',
                    'ariarequest',
                    'beforeactivate',
                    'beforedeactivate',
                    'beforeeditfocus',
                    'beforeupdate',
                    'cellchange',
                    'controlselect',
                    'dataavailable',
                    'datasetchanged',
                    'datasetcomplete',
                    'errorupdate',
                    'filterchange',
                    'layoutcomplete',
                    'losecapture',
                    'move',
                    'moveend',
                    'movestart',
                    'propertychange',
                    'resizeend',
                    'resizestart',
                    'rowenter',
                    'rowexit',
                    'rowsdelete',
                    'rowsinserted',
                    'command',
                    'compassneedscalibration',
                    'deactivate',
                    'help',
                    'mscontentzoom',
                    'msmanipulationstatechanged',
                    'msgesturechange',
                    'msgesturedoubletap',
                    'msgestureend',
                    'msgesturehold',
                    'msgesturestart',
                    'msgesturetap',
                    'msgotpointercapture',
                    'msinertiastart',
                    'mslostpointercapture',
                    'mspointercancel',
                    'mspointerdown',
                    'mspointerenter',
                    'mspointerhover',
                    'mspointerleave',
                    'mspointermove',
                    'mspointerout',
                    'mspointerover',
                    'mspointerup',
                    'pointerout',
                    'mssitemodejumplistitemremoved',
                    'msthumbnailclick',
                    'stop',
                    'storagecommit',
                  ]
                );
              function oe(e, t, n) {
                if (!n || 0 === n.length) return t;
                var r = n.filter(function (t) {
                  return t.target === e;
                });
                if (!r || 0 === r.length) return t;
                var i = r[0].ignoreProperties;
                return t.filter(function (e) {
                  return -1 === i.indexOf(e);
                });
              }
              function ae(e, t, n, r) {
                e && x(e, oe(e, t, n), r);
              }
              function se(e, t) {
                if ((!b || E) && !Zone[e.symbol('patchEvents')]) {
                  var r = 'undefined' != typeof WebSocket,
                    i = t.__Zone_ignore_on_properties;
                  if (w) {
                    var o = window,
                      a = P ? [{ target: o, ignoreProperties: ['error'] }] : [];
                    ae(
                      o,
                      ie.concat(['messageerror']),
                      i ? i.concat(a) : i,
                      n(o)
                    ),
                      ae(Document.prototype, ie, i),
                      void 0 !== o.SVGElement &&
                        ae(o.SVGElement.prototype, ie, i),
                      ae(Element.prototype, ie, i),
                      ae(HTMLElement.prototype, ie, i),
                      ae(HTMLMediaElement.prototype, X, i),
                      ae(HTMLFrameSetElement.prototype, K.concat(Y), i),
                      ae(HTMLBodyElement.prototype, K.concat(Y), i),
                      ae(HTMLFrameElement.prototype, Q, i),
                      ae(HTMLIFrameElement.prototype, Q, i);
                    var s = o.HTMLMarqueeElement;
                    s && ae(s.prototype, $, i);
                    var u = o.Worker;
                    u && ae(u.prototype, re, i);
                  }
                  var l = t.XMLHttpRequest;
                  l && ae(l.prototype, ee, i);
                  var c = t.XMLHttpRequestEventTarget;
                  c && ae(c && c.prototype, ee, i),
                    'undefined' != typeof IDBIndex &&
                      (ae(IDBIndex.prototype, te, i),
                      ae(IDBRequest.prototype, te, i),
                      ae(IDBOpenDBRequest.prototype, te, i),
                      ae(IDBDatabase.prototype, te, i),
                      ae(IDBTransaction.prototype, te, i),
                      ae(IDBCursor.prototype, te, i)),
                    r && ae(WebSocket.prototype, ne, i);
                }
              }
              Zone.__load_patch('util', function (n, o, a) {
                (a.patchOnProperties = x),
                  (a.patchMethod = A),
                  (a.bindArguments = g),
                  (a.patchMacroTask = N);
                var l = o.__symbol__('BLACK_LISTED_EVENTS'),
                  c = o.__symbol__('UNPATCHED_EVENTS');
                n[c] && (n[l] = n[c]),
                  n[l] && (o[l] = o[c] = n[l]),
                  (a.patchEventPrototype = G),
                  (a.patchEventTarget = q),
                  (a.isIEOrEdge = H),
                  (a.ObjectDefineProperty = t),
                  (a.ObjectGetOwnPropertyDescriptor = e),
                  (a.ObjectCreate = r),
                  (a.ArraySlice = i),
                  (a.patchClass = I),
                  (a.wrapWithCurrentZone = u),
                  (a.filterProperties = oe),
                  (a.attachOriginToPatched = M),
                  (a._redefineProperty = Object.defineProperty),
                  (a.patchCallbacks = J),
                  (a.getGlobalObjects = function () {
                    return {
                      globalSources: V,
                      zoneSymbolEventNames: z,
                      eventNames: ie,
                      isBrowser: w,
                      isMix: E,
                      isNode: b,
                      TRUE_STR: 'true',
                      FALSE_STR: 'false',
                      ZONE_SYMBOL_PREFIX: s,
                      ADD_EVENT_LISTENER_STR: 'addEventListener',
                      REMOVE_EVENT_LISTENER_STR: 'removeEventListener',
                    };
                  });
              });
              var ue = c('zoneTask');
              function le(e, t, n, r) {
                var i = null,
                  o = null;
                n += r;
                var a = {};
                function s(t) {
                  var n = t.data;
                  return (
                    (n.args[0] = function () {
                      try {
                        t.invoke.apply(this, arguments);
                      } finally {
                        (t.data && t.data.isPeriodic) ||
                          ('number' == typeof n.handleId
                            ? delete a[n.handleId]
                            : n.handleId && (n.handleId[ue] = null));
                      }
                    }),
                    (n.handleId = i.apply(e, n.args)),
                    t
                  );
                }
                function u(e) {
                  return o(e.data.handleId);
                }
                (i = A(e, (t += r), function (n) {
                  return function (i, o) {
                    if ('function' == typeof o[0]) {
                      var c = l(
                        t,
                        o[0],
                        {
                          isPeriodic: 'Interval' === r,
                          delay:
                            'Timeout' === r || 'Interval' === r
                              ? o[1] || 0
                              : void 0,
                          args: o,
                        },
                        s,
                        u
                      );
                      if (!c) return c;
                      var f = c.data.handleId;
                      return (
                        'number' == typeof f ? (a[f] = c) : f && (f[ue] = c),
                        f &&
                          f.ref &&
                          f.unref &&
                          'function' == typeof f.ref &&
                          'function' == typeof f.unref &&
                          ((c.ref = f.ref.bind(f)),
                          (c.unref = f.unref.bind(f))),
                        'number' == typeof f || f ? f : c
                      );
                    }
                    return n.apply(e, o);
                  };
                })),
                  (o = A(e, n, function (t) {
                    return function (n, r) {
                      var i,
                        o = r[0];
                      'number' == typeof o
                        ? (i = a[o])
                        : (i = o && o[ue]) || (i = o),
                        i && 'string' == typeof i.type
                          ? 'notScheduled' !== i.state &&
                            ((i.cancelFn && i.data.isPeriodic) ||
                              0 === i.runCount) &&
                            ('number' == typeof o
                              ? delete a[o]
                              : o && (o[ue] = null),
                            i.zone.cancelTask(i))
                          : t.apply(e, r);
                    };
                  }));
              }
              function ce(e, t) {
                if (!Zone[t.symbol('patchEventTarget')]) {
                  for (
                    var n = t.getGlobalObjects(),
                      r = n.eventNames,
                      i = n.zoneSymbolEventNames,
                      o = n.TRUE_STR,
                      a = n.FALSE_STR,
                      s = n.ZONE_SYMBOL_PREFIX,
                      u = 0;
                    u < r.length;
                    u++
                  ) {
                    var l = r[u],
                      c = s + (l + a),
                      f = s + (l + o);
                    (i[l] = {}), (i[l][a] = c), (i[l][o] = f);
                  }
                  var h = e.EventTarget;
                  return h && h.prototype
                    ? (t.patchEventTarget(e, [h && h.prototype]), !0)
                    : void 0;
                }
              }
              Zone.__load_patch('legacy', function (e) {
                var t = e[Zone.__symbol__('legacyPatch')];
                t && t();
              }),
                Zone.__load_patch('timers', function (e) {
                  le(e, 'set', 'clear', 'Timeout'),
                    le(e, 'set', 'clear', 'Interval'),
                    le(e, 'set', 'clear', 'Immediate');
                }),
                Zone.__load_patch('requestAnimationFrame', function (e) {
                  le(e, 'request', 'cancel', 'AnimationFrame'),
                    le(e, 'mozRequest', 'mozCancel', 'AnimationFrame'),
                    le(e, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
                }),
                Zone.__load_patch('blocking', function (e, t) {
                  for (
                    var n = ['alert', 'prompt', 'confirm'], r = 0;
                    r < n.length;
                    r++
                  )
                    A(e, n[r], function (n, r, i) {
                      return function (r, o) {
                        return t.current.run(n, e, o, i);
                      };
                    });
                }),
                Zone.__load_patch('EventTarget', function (e, t, n) {
                  (function (e, t) {
                    t.patchEventPrototype(e, t);
                  })(e, n),
                    ce(e, n);
                  var r = e.XMLHttpRequestEventTarget;
                  r && r.prototype && n.patchEventTarget(e, [r.prototype]),
                    I('MutationObserver'),
                    I('WebKitMutationObserver'),
                    I('IntersectionObserver'),
                    I('FileReader');
                }),
                Zone.__load_patch('on_property', function (e, t, n) {
                  se(n, e);
                }),
                Zone.__load_patch('customElements', function (e, t, n) {
                  !(function (e, t) {
                    var n = t.getGlobalObjects(),
                      r = n.isBrowser,
                      i = n.isMix;
                    (r || i) &&
                      e.customElements &&
                      'customElements' in e &&
                      t.patchCallbacks(
                        t,
                        e.customElements,
                        'customElements',
                        'define',
                        [
                          'connectedCallback',
                          'disconnectedCallback',
                          'adoptedCallback',
                          'attributeChangedCallback',
                        ]
                      );
                  })(e, n);
                }),
                Zone.__load_patch('XHR', function (e, t) {
                  !(function (e) {
                    var h = e.XMLHttpRequest;
                    if (h) {
                      var d = h.prototype,
                        v = d[o],
                        p = d[a];
                      if (!v) {
                        var y = e.XMLHttpRequestEventTarget;
                        if (y) {
                          var m = y.prototype;
                          (v = m[o]), (p = m[a]);
                        }
                      }
                      var g = A(d, 'open', function () {
                          return function (e, t) {
                            return (
                              (e[r] = 0 == t[2]), (e[u] = t[1]), g.apply(e, t)
                            );
                          };
                        }),
                        _ = c('fetchTaskAborting'),
                        k = c('fetchTaskScheduling'),
                        b = A(d, 'send', function () {
                          return function (e, n) {
                            if (!0 === t.current[k]) return b.apply(e, n);
                            if (e[r]) return b.apply(e, n);
                            var i = {
                                target: e,
                                url: e[u],
                                isPeriodic: !1,
                                args: n,
                                aborted: !1,
                              },
                              o = l('XMLHttpRequest.send', T, i, E, C);
                            e &&
                              !0 === e[f] &&
                              !i.aborted &&
                              'scheduled' === o.state &&
                              o.invoke();
                          };
                        }),
                        w = A(d, 'abort', function () {
                          return function (e, r) {
                            var i = e[n];
                            if (i && 'string' == typeof i.type) {
                              if (
                                null == i.cancelFn ||
                                (i.data && i.data.aborted)
                              )
                                return;
                              i.zone.cancelTask(i);
                            } else if (!0 === t.current[_]) return w.apply(e, r);
                          };
                        });
                    }
                    function E(e) {
                      var r = e.data,
                        u = r.target;
                      (u[s] = !1), (u[f] = !1);
                      var l = u[i];
                      v || ((v = u[o]), (p = u[a])),
                        l && p.call(u, 'readystatechange', l);
                      var c = (u[i] = function () {
                        if (u.readyState === u.DONE)
                          if (!r.aborted && u[s] && 'scheduled' === e.state) {
                            var n = u[t.__symbol__('loadfalse')];
                            if (n && n.length > 0) {
                              var i = e.invoke;
                              (e.invoke = function () {
                                for (
                                  var n = u[t.__symbol__('loadfalse')], o = 0;
                                  o < n.length;
                                  o++
                                )
                                  n[o] === e && n.splice(o, 1);
                                r.aborted ||
                                  'scheduled' !== e.state ||
                                  i.call(e);
                              }),
                                n.push(e);
                            } else e.invoke();
                          } else r.aborted || !1 !== u[s] || (u[f] = !0);
                      });
                      return (
                        v.call(u, 'readystatechange', c),
                        u[n] || (u[n] = e),
                        b.apply(u, r.args),
                        (u[s] = !0),
                        e
                      );
                    }
                    function T() {}
                    function C(e) {
                      var t = e.data;
                      return (t.aborted = !0), w.apply(t.target, t.args);
                    }
                  })(e);
                  var n = c('xhrTask'),
                    r = c('xhrSync'),
                    i = c('xhrListener'),
                    s = c('xhrScheduled'),
                    u = c('xhrURL'),
                    f = c('xhrErrorBeforeScheduled');
                }),
                Zone.__load_patch('geolocation', function (t) {
                  t.navigator &&
                    t.navigator.geolocation &&
                    (function (t, n) {
                      for (
                        var r = t.constructor.name,
                          i = function (i) {
                            var o = n[i],
                              a = t[o];
                            if (a) {
                              if (!_(e(t, o))) return 'continue';
                              t[o] = (function (e) {
                                var t = function () {
                                  return e.apply(
                                    this,
                                    g(arguments, r + '.' + o)
                                  );
                                };
                                return M(t, e), t;
                              })(a);
                            }
                          },
                          o = 0;
                        o < n.length;
                        o++
                      )
                        i(o);
                    })(t.navigator.geolocation, [
                      'getCurrentPosition',
                      'watchPosition',
                    ]);
                }),
                Zone.__load_patch('PromiseRejectionEvent', function (e, t) {
                  function n(t) {
                    return function (n) {
                      W(e, t).forEach(function (r) {
                        var i = e.PromiseRejectionEvent;
                        if (i) {
                          var o = new i(t, {
                            promise: n.promise,
                            reason: n.rejection,
                          });
                          r.invoke(o);
                        }
                      });
                    };
                  }
                  e.PromiseRejectionEvent &&
                    ((t[c('unhandledPromiseRejectionHandler')] =
                      n('unhandledrejection')),
                    (t[c('rejectionHandledHandler')] = n('rejectionhandled')));
                });
            })
              ? r.call(t, n, t, e)
              : r) || (e.exports = i);
      },
      uyix: function (e, t) {
        e.exports = (function (e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var i = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, 'default', {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && 'string' != typeof e)
              )
                for (var i in e)
                  n.d(
                    r,
                    i,
                    function (t) {
                      return e[t];
                    }.bind(null, i)
                  );
              return r;
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, 'a', t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = './src/EventTargetPolyfill.ts'))
          );
        })({
          './src/EventTargetPolyfill.ts': function (e, t, n) {
            'use strict';
            e.exports = (function () {
              function e() {
                p(this, e), (this.listeners = {});
              }
              return (
                m(e, [
                  {
                    key: 'addEventListener',
                    value: function (e, t) {
                      e in this.listeners || (this.listeners[e] = []),
                        this.listeners[e].push(t);
                    },
                  },
                  {
                    key: 'removeEventListener',
                    value: function (e, t) {
                      if (e in this.listeners)
                        for (
                          var n = this.listeners[e], r = 0, i = n.length;
                          r < i;
                          r++
                        )
                          if (n[r] === t) return void n.splice(r, 1);
                    },
                  },
                  {
                    key: 'dispatchEvent',
                    value: function (e) {
                      if (!(e.type in this.listeners)) return !0;
                      for (
                        var t = this.listeners[e.type].slice(),
                          n = 0,
                          r = t.length;
                        n < r;
                        n++
                      )
                        t[n].call(this, e);
                      return !e.defaultPrevented;
                    },
                  },
                ]),
                e
              );
            })();
          },
        });
      },
      zUnb: function (a, u, c) {
        'use strict';
        function d(e) {
          return 'function' == typeof e;
        }
        c.r(u), c('hN/g');
        var v = !1,
          y = {
            Promise: void 0,
            set useDeprecatedSynchronousErrorHandling(e) {
              if (e) {
                var t = new Error();
                console.warn(
                  'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                    t.stack
                );
              } else
                v &&
                  console.log(
                    'RxJS: Back to a better error behavior. Thank you. <3'
                  );
              v = e;
            },
            get useDeprecatedSynchronousErrorHandling() {
              return v;
            },
          };
        function g(e) {
          setTimeout(function () {
            throw e;
          }, 0);
        }
        var _ = {
            closed: !0,
            next: function (e) {},
            error: function (e) {
              if (y.useDeprecatedSynchronousErrorHandling) throw e;
              g(e);
            },
            complete: function () {},
          },
          k =
            Array.isArray ||
            function (e) {
              return e && 'number' == typeof e.length;
            };
        function b(e) {
          return null !== e && 'object' == typeof e;
        }
        var w,
          E = (function () {
            function e(e) {
              return (
                Error.call(this),
                (this.message = e
                  ? ''
                      .concat(
                        e.length,
                        ' errors occurred during unsubscription:\n'
                      )
                      .concat(
                        e
                          .map(function (e, t) {
                            return ''.concat(t + 1, ') ').concat(e.toString());
                          })
                          .join('\n  ')
                      )
                  : ''),
                (this.name = 'UnsubscriptionError'),
                (this.errors = e),
                this
              );
            }
            return (e.prototype = Object.create(Error.prototype)), e;
          })(),
          T =
            (((w = (function () {
              function e(t) {
                p(this, e),
                  (this.closed = !1),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
              }
              return (
                m(e, [
                  {
                    key: 'unsubscribe',
                    value: function () {
                      var t;
                      if (!this.closed) {
                        var n = this._parentOrParents,
                          r = this._ctorUnsubscribe,
                          i = this._unsubscribe,
                          o = this._subscriptions;
                        if (
                          ((this.closed = !0),
                          (this._parentOrParents = null),
                          (this._subscriptions = null),
                          n instanceof e)
                        )
                          n.remove(this);
                        else if (null !== n)
                          for (var a = 0; a < n.length; ++a) n[a].remove(this);
                        if (d(i)) {
                          r && (this._unsubscribe = void 0);
                          try {
                            i.call(this);
                          } catch (c) {
                            t = c instanceof E ? C(c.errors) : [c];
                          }
                        }
                        if (k(o))
                          for (var s = -1, u = o.length; ++s < u; ) {
                            var l = o[s];
                            if (b(l))
                              try {
                                l.unsubscribe();
                              } catch (c) {
                                (t = t || []),
                                  c instanceof E
                                    ? (t = t.concat(C(c.errors)))
                                    : t.push(c);
                              }
                          }
                        if (t) throw new E(t);
                      }
                    },
                  },
                  {
                    key: 'add',
                    value: function (t) {
                      var n = t;
                      if (!t) return e.EMPTY;
                      switch (typeof t) {
                        case 'function':
                          n = new e(t);
                        case 'object':
                          if (
                            n === this ||
                            n.closed ||
                            'function' != typeof n.unsubscribe
                          )
                            return n;
                          if (this.closed) return n.unsubscribe(), n;
                          if (!(n instanceof e)) {
                            var r = n;
                            (n = new e())._subscriptions = [r];
                          }
                          break;
                        default:
                          throw new Error(
                            'unrecognized teardown ' +
                              t +
                              ' added to Subscription.'
                          );
                      }
                      var i = n._parentOrParents;
                      if (null === i) n._parentOrParents = this;
                      else if (i instanceof e) {
                        if (i === this) return n;
                        n._parentOrParents = [i, this];
                      } else {
                        if (-1 !== i.indexOf(this)) return n;
                        i.push(this);
                      }
                      var o = this._subscriptions;
                      return (
                        null === o ? (this._subscriptions = [n]) : o.push(n), n
                      );
                    },
                  },
                  {
                    key: 'remove',
                    value: function (e) {
                      var t = this._subscriptions;
                      if (t) {
                        var n = t.indexOf(e);
                        -1 !== n && t.splice(n, 1);
                      }
                    },
                  },
                ]),
                e
              );
            })()).EMPTY = (function (e) {
              return (e.closed = !0), e;
            })(new w())),
            w);
        function C(e) {
          return e.reduce(function (e, t) {
            return e.concat(t instanceof E ? t.errors : t);
          }, []);
        }
        var S =
            'function' == typeof Symbol
              ? Symbol('rxSubscriber')
              : '@@rxSubscriber_' + Math.random(),
          x = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r, i) {
              var o;
              switch (
                (p(this, n),
                ((o = t.call(this)).syncErrorValue = null),
                (o.syncErrorThrown = !1),
                (o.syncErrorThrowable = !1),
                (o.isStopped = !1),
                arguments.length)
              ) {
                case 0:
                  o.destination = _;
                  break;
                case 1:
                  if (!e) {
                    o.destination = _;
                    break;
                  }
                  if ('object' == typeof e) {
                    e instanceof n
                      ? ((o.syncErrorThrowable = e.syncErrorThrowable),
                        (o.destination = e),
                        e.add(l(o)))
                      : ((o.syncErrorThrowable = !0),
                        (o.destination = new O(l(o), e)));
                    break;
                  }
                default:
                  (o.syncErrorThrowable = !0),
                    (o.destination = new O(l(o), e, r, i));
              }
              return o;
            }
            return (
              m(
                n,
                [
                  {
                    key: S,
                    value: function () {
                      return this;
                    },
                  },
                  {
                    key: 'next',
                    value: function (e) {
                      this.isStopped || this._next(e);
                    },
                  },
                  {
                    key: 'error',
                    value: function (e) {
                      this.isStopped || ((this.isStopped = !0), this._error(e));
                    },
                  },
                  {
                    key: 'complete',
                    value: function () {
                      this.isStopped ||
                        ((this.isStopped = !0), this._complete());
                    },
                  },
                  {
                    key: 'unsubscribe',
                    value: function () {
                      this.closed ||
                        ((this.isStopped = !0),
                        i(f(n.prototype), 'unsubscribe', this).call(this));
                    },
                  },
                  {
                    key: '_next',
                    value: function (e) {
                      this.destination.next(e);
                    },
                  },
                  {
                    key: '_error',
                    value: function (e) {
                      this.destination.error(e), this.unsubscribe();
                    },
                  },
                  {
                    key: '_complete',
                    value: function () {
                      this.destination.complete(), this.unsubscribe();
                    },
                  },
                  {
                    key: '_unsubscribeAndRecycle',
                    value: function () {
                      var e = this._parentOrParents;
                      return (
                        (this._parentOrParents = null),
                        this.unsubscribe(),
                        (this.closed = !1),
                        (this.isStopped = !1),
                        (this._parentOrParents = e),
                        this
                      );
                    },
                  },
                ],
                [
                  {
                    key: 'create',
                    value: function (e, t, r) {
                      var i = new n(e, t, r);
                      return (i.syncErrorThrowable = !1), i;
                    },
                  },
                ]
              ),
              n
            );
          })(T),
          O = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r, i, o) {
              var a, s;
              p(this, n), ((a = t.call(this))._parentSubscriber = e);
              var u = l(a);
              return (
                d(r)
                  ? (s = r)
                  : r &&
                    ((s = r.next),
                    (i = r.error),
                    (o = r.complete),
                    r !== _ &&
                      (d((u = Object.create(r)).unsubscribe) &&
                        a.add(u.unsubscribe.bind(u)),
                      (u.unsubscribe = a.unsubscribe.bind(l(a))))),
                (a._context = u),
                (a._next = s),
                (a._error = i),
                (a._complete = o),
                a
              );
            }
            return (
              m(n, [
                {
                  key: 'next',
                  value: function (e) {
                    if (!this.isStopped && this._next) {
                      var t = this._parentSubscriber;
                      y.useDeprecatedSynchronousErrorHandling &&
                      t.syncErrorThrowable
                        ? this.__tryOrSetError(t, this._next, e) &&
                          this.unsubscribe()
                        : this.__tryOrUnsub(this._next, e);
                    }
                  },
                },
                {
                  key: 'error',
                  value: function (e) {
                    if (!this.isStopped) {
                      var t = this._parentSubscriber,
                        n = y.useDeprecatedSynchronousErrorHandling;
                      if (this._error)
                        n && t.syncErrorThrowable
                          ? (this.__tryOrSetError(t, this._error, e),
                            this.unsubscribe())
                          : (this.__tryOrUnsub(this._error, e),
                            this.unsubscribe());
                      else if (t.syncErrorThrowable)
                        n
                          ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
                          : g(e),
                          this.unsubscribe();
                      else {
                        if ((this.unsubscribe(), n)) throw e;
                        g(e);
                      }
                    }
                  },
                },
                {
                  key: 'complete',
                  value: function () {
                    var e = this;
                    if (!this.isStopped) {
                      var t = this._parentSubscriber;
                      if (this._complete) {
                        var n = function () {
                          return e._complete.call(e._context);
                        };
                        y.useDeprecatedSynchronousErrorHandling &&
                        t.syncErrorThrowable
                          ? (this.__tryOrSetError(t, n), this.unsubscribe())
                          : (this.__tryOrUnsub(n), this.unsubscribe());
                      } else this.unsubscribe();
                    }
                  },
                },
                {
                  key: '__tryOrUnsub',
                  value: function (e, t) {
                    try {
                      e.call(this._context, t);
                    } catch (n) {
                      if (
                        (this.unsubscribe(),
                        y.useDeprecatedSynchronousErrorHandling)
                      )
                        throw n;
                      g(n);
                    }
                  },
                },
                {
                  key: '__tryOrSetError',
                  value: function (e, t, n) {
                    if (!y.useDeprecatedSynchronousErrorHandling)
                      throw new Error('bad call');
                    try {
                      t.call(this._context, n);
                    } catch (r) {
                      return y.useDeprecatedSynchronousErrorHandling
                        ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
                        : (g(r), !0);
                    }
                    return !1;
                  },
                },
                {
                  key: '_unsubscribe',
                  value: function () {
                    var e = this._parentSubscriber;
                    (this._context = null),
                      (this._parentSubscriber = null),
                      e.unsubscribe();
                  },
                },
              ]),
              n
            );
          })(x),
          I =
            ('function' == typeof Symbol && Symbol.observable) ||
            '@@observable';
        function A(e) {
          return e;
        }
        var N,
          M =
            (((N = (function () {
              function e(t) {
                p(this, e), (this._isScalar = !1), t && (this._subscribe = t);
              }
              return (
                m(e, [
                  {
                    key: 'lift',
                    value: function (t) {
                      var n = new e();
                      return (n.source = this), (n.operator = t), n;
                    },
                  },
                  {
                    key: 'subscribe',
                    value: function (e, t, n) {
                      var r = this.operator,
                        i = (function (e, t, n) {
                          if (e) {
                            if (e instanceof x) return e;
                            if (e[S]) return e[S]();
                          }
                          return e || t || n ? new x(e, t, n) : new x(_);
                        })(e, t, n);
                      if (
                        (i.add(
                          r
                            ? r.call(i, this.source)
                            : this.source ||
                              (y.useDeprecatedSynchronousErrorHandling &&
                                !i.syncErrorThrowable)
                            ? this._subscribe(i)
                            : this._trySubscribe(i)
                        ),
                        y.useDeprecatedSynchronousErrorHandling &&
                          i.syncErrorThrowable &&
                          ((i.syncErrorThrowable = !1), i.syncErrorThrown))
                      )
                        throw i.syncErrorValue;
                      return i;
                    },
                  },
                  {
                    key: '_trySubscribe',
                    value: function (e) {
                      try {
                        return this._subscribe(e);
                      } catch (t) {
                        y.useDeprecatedSynchronousErrorHandling &&
                          ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                          (function (e) {
                            for (; e; ) {
                              var t = e,
                                n = t.closed,
                                r = t.destination,
                                i = t.isStopped;
                              if (n || i) return !1;
                              e = r && r instanceof x ? r : null;
                            }
                            return !0;
                          })(e)
                            ? e.error(t)
                            : console.warn(t);
                      }
                    },
                  },
                  {
                    key: 'forEach',
                    value: function (e, t) {
                      var n = this;
                      return new (t = D(t))(function (t, r) {
                        var i;
                        i = n.subscribe(
                          function (t) {
                            try {
                              e(t);
                            } catch (n) {
                              r(n), i && i.unsubscribe();
                            }
                          },
                          r,
                          t
                        );
                      });
                    },
                  },
                  {
                    key: '_subscribe',
                    value: function (e) {
                      var t = this.source;
                      return t && t.subscribe(e);
                    },
                  },
                  {
                    key: I,
                    value: function () {
                      return this;
                    },
                  },
                  {
                    key: 'pipe',
                    value: function () {
                      for (
                        var e = arguments.length, t = new Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return 0 === t.length
                        ? this
                        : (0 === (r = t).length
                            ? A
                            : 1 === r.length
                            ? r[0]
                            : function (e) {
                                return r.reduce(function (e, t) {
                                  return t(e);
                                }, e);
                              })(this);
                      var r;
                    },
                  },
                  {
                    key: 'toPromise',
                    value: function (e) {
                      var t = this;
                      return new (e = D(e))(function (e, n) {
                        var r;
                        t.subscribe(
                          function (e) {
                            return (r = e);
                          },
                          function (e) {
                            return n(e);
                          },
                          function () {
                            return e(r);
                          }
                        );
                      });
                    },
                  },
                ]),
                e
              );
            })()).create = function (e) {
              return new N(e);
            }),
            N);
        function D(e) {
          if ((e || (e = y.Promise || Promise), !e))
            throw new Error('no Promise impl found');
          return e;
        }
        var R,
          P = (function () {
            function e() {
              return (
                Error.call(this),
                (this.message = 'object unsubscribed'),
                (this.name = 'ObjectUnsubscribedError'),
                this
              );
            }
            return (e.prototype = Object.create(Error.prototype)), e;
          })(),
          H = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i;
              return (
                p(this, n),
                ((i = t.call(this)).subject = e),
                (i.subscriber = r),
                (i.closed = !1),
                i
              );
            }
            return (
              m(n, [
                {
                  key: 'unsubscribe',
                  value: function () {
                    if (!this.closed) {
                      this.closed = !0;
                      var e = this.subject,
                        t = e.observers;
                      if (
                        ((this.subject = null),
                        t && 0 !== t.length && !e.isStopped && !e.closed)
                      ) {
                        var n = t.indexOf(this.subscriber);
                        -1 !== n && t.splice(n, 1);
                      }
                    }
                  },
                },
              ]),
              n
            );
          })(T),
          j = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e) {
              var r;
              return p(this, n), ((r = t.call(this, e)).destination = e), r;
            }
            return n;
          })(x),
          L =
            (((R = (function (e) {
              o(n, e);
              var t = s(n);
              function n() {
                var e;
                return (
                  p(this, n),
                  ((e = t.call(this)).observers = []),
                  (e.closed = !1),
                  (e.isStopped = !1),
                  (e.hasError = !1),
                  (e.thrownError = null),
                  e
                );
              }
              return (
                m(n, [
                  {
                    key: S,
                    value: function () {
                      return new j(this);
                    },
                  },
                  {
                    key: 'lift',
                    value: function (e) {
                      var t = new F(this, this);
                      return (t.operator = e), t;
                    },
                  },
                  {
                    key: 'next',
                    value: function (e) {
                      if (this.closed) throw new P();
                      if (!this.isStopped)
                        for (
                          var t = this.observers,
                            n = t.length,
                            r = t.slice(),
                            i = 0;
                          i < n;
                          i++
                        )
                          r[i].next(e);
                    },
                  },
                  {
                    key: 'error',
                    value: function (e) {
                      if (this.closed) throw new P();
                      (this.hasError = !0),
                        (this.thrownError = e),
                        (this.isStopped = !0);
                      for (
                        var t = this.observers,
                          n = t.length,
                          r = t.slice(),
                          i = 0;
                        i < n;
                        i++
                      )
                        r[i].error(e);
                      this.observers.length = 0;
                    },
                  },
                  {
                    key: 'complete',
                    value: function () {
                      if (this.closed) throw new P();
                      this.isStopped = !0;
                      for (
                        var e = this.observers,
                          t = e.length,
                          n = e.slice(),
                          r = 0;
                        r < t;
                        r++
                      )
                        n[r].complete();
                      this.observers.length = 0;
                    },
                  },
                  {
                    key: 'unsubscribe',
                    value: function () {
                      (this.isStopped = !0),
                        (this.closed = !0),
                        (this.observers = null);
                    },
                  },
                  {
                    key: '_trySubscribe',
                    value: function (e) {
                      if (this.closed) throw new P();
                      return i(f(n.prototype), '_trySubscribe', this).call(
                        this,
                        e
                      );
                    },
                  },
                  {
                    key: '_subscribe',
                    value: function (e) {
                      if (this.closed) throw new P();
                      return this.hasError
                        ? (e.error(this.thrownError), T.EMPTY)
                        : this.isStopped
                        ? (e.complete(), T.EMPTY)
                        : (this.observers.push(e), new H(this, e));
                    },
                  },
                  {
                    key: 'asObservable',
                    value: function () {
                      var e = new M();
                      return (e.source = this), e;
                    },
                  },
                ]),
                n
              );
            })(M)).create = function (e, t) {
              return new F(e, t);
            }),
            R),
          F = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i;
              return (
                p(this, n),
                ((i = t.call(this)).destination = e),
                (i.source = r),
                i
              );
            }
            return (
              m(n, [
                {
                  key: 'next',
                  value: function (e) {
                    var t = this.destination;
                    t && t.next && t.next(e);
                  },
                },
                {
                  key: 'error',
                  value: function (e) {
                    var t = this.destination;
                    t && t.error && this.destination.error(e);
                  },
                },
                {
                  key: 'complete',
                  value: function () {
                    var e = this.destination;
                    e && e.complete && this.destination.complete();
                  },
                },
                {
                  key: '_subscribe',
                  value: function (e) {
                    return this.source ? this.source.subscribe(e) : T.EMPTY;
                  },
                },
              ]),
              n
            );
          })(L);
        function z(e) {
          return e && 'function' == typeof e.schedule;
        }
        function V(e, t) {
          return function (n) {
            if ('function' != typeof e)
              throw new TypeError(
                'argument is not a function. Are you looking for `mapTo()`?'
              );
            return n.lift(new Z(e, t));
          };
        }
        var Z = (function () {
            function e(t, n) {
              p(this, e), (this.project = t), (this.thisArg = n);
            }
            return (
              m(e, [
                {
                  key: 'call',
                  value: function (e, t) {
                    return t.subscribe(new B(e, this.project, this.thisArg));
                  },
                },
              ]),
              e
            );
          })(),
          B = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r, i) {
              var o;
              return (
                p(this, n),
                ((o = t.call(this, e)).project = r),
                (o.count = 0),
                (o.thisArg = i || l(o)),
                o
              );
            }
            return (
              m(n, [
                {
                  key: '_next',
                  value: function (e) {
                    var t;
                    try {
                      t = this.project.call(this.thisArg, e, this.count++);
                    } catch (n) {
                      return void this.destination.error(n);
                    }
                    this.destination.next(t);
                  },
                },
              ]),
              n
            );
          })(x),
          U = function (e) {
            return function (t) {
              for (var n = 0, r = e.length; n < r && !t.closed; n++)
                t.next(e[n]);
              t.complete();
            };
          };
        var q =
            'function' == typeof Symbol && Symbol.iterator
              ? Symbol.iterator
              : '@@iterator',
          W = function (e) {
            return e && 'number' == typeof e.length && 'function' != typeof e;
          };
        function G(e) {
          return (
            !!e &&
            'function' != typeof e.subscribe &&
            'function' == typeof e.then
          );
        }
        var J = function (e) {
          if (e && 'function' == typeof e[I])
            return (
              (r = e),
              function (e) {
                var t = r[I]();
                if ('function' != typeof t.subscribe)
                  throw new TypeError(
                    'Provided object does not correctly implement Symbol.observable'
                  );
                return t.subscribe(e);
              }
            );
          if (W(e)) return U(e);
          if (G(e))
            return (
              (n = e),
              function (e) {
                return (
                  n
                    .then(
                      function (t) {
                        e.closed || (e.next(t), e.complete());
                      },
                      function (t) {
                        return e.error(t);
                      }
                    )
                    .then(null, g),
                  e
                );
              }
            );
          if (e && 'function' == typeof e[q])
            return (
              (t = e),
              function (e) {
                for (var n = t[q](); ; ) {
                  var r = void 0;
                  try {
                    r = n.next();
                  } catch (i) {
                    return e.error(i), e;
                  }
                  if (r.done) {
                    e.complete();
                    break;
                  }
                  if ((e.next(r.value), e.closed)) break;
                }
                return (
                  'function' == typeof n.return &&
                    e.add(function () {
                      n.return && n.return();
                    }),
                  e
                );
              }
            );
          var t,
            n,
            r,
            i = b(e) ? 'an invalid object' : "'".concat(e, "'");
          throw new TypeError(
            'You provided '.concat(
              i,
              ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
            )
          );
        };
        function K(e, t) {
          return new M(function (n) {
            var r = new T(),
              i = 0;
            return (
              r.add(
                t.schedule(function () {
                  i !== e.length
                    ? (n.next(e[i++]), n.closed || r.add(this.schedule()))
                    : n.complete();
                })
              ),
              r
            );
          });
        }
        function X(e, t) {
          return t
            ? (function (e, t) {
                if (null != e) {
                  if (
                    (function (e) {
                      return e && 'function' == typeof e[I];
                    })(e)
                  )
                    return (function (e, t) {
                      return new M(function (n) {
                        var r = new T();
                        return (
                          r.add(
                            t.schedule(function () {
                              var i = e[I]();
                              r.add(
                                i.subscribe({
                                  next: function (e) {
                                    r.add(
                                      t.schedule(function () {
                                        return n.next(e);
                                      })
                                    );
                                  },
                                  error: function (e) {
                                    r.add(
                                      t.schedule(function () {
                                        return n.error(e);
                                      })
                                    );
                                  },
                                  complete: function () {
                                    r.add(
                                      t.schedule(function () {
                                        return n.complete();
                                      })
                                    );
                                  },
                                })
                              );
                            })
                          ),
                          r
                        );
                      });
                    })(e, t);
                  if (G(e))
                    return (function (e, t) {
                      return new M(function (n) {
                        var r = new T();
                        return (
                          r.add(
                            t.schedule(function () {
                              return e.then(
                                function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      n.next(e),
                                        r.add(
                                          t.schedule(function () {
                                            return n.complete();
                                          })
                                        );
                                    })
                                  );
                                },
                                function (e) {
                                  r.add(
                                    t.schedule(function () {
                                      return n.error(e);
                                    })
                                  );
                                }
                              );
                            })
                          ),
                          r
                        );
                      });
                    })(e, t);
                  if (W(e)) return K(e, t);
                  if (
                    (function (e) {
                      return e && 'function' == typeof e[q];
                    })(e) ||
                    'string' == typeof e
                  )
                    return (function (e, t) {
                      if (!e) throw new Error('Iterable cannot be null');
                      return new M(function (n) {
                        var r,
                          i = new T();
                        return (
                          i.add(function () {
                            r && 'function' == typeof r.return && r.return();
                          }),
                          i.add(
                            t.schedule(function () {
                              (r = e[q]()),
                                i.add(
                                  t.schedule(function () {
                                    if (!n.closed) {
                                      var e, t;
                                      try {
                                        var i = r.next();
                                        (e = i.value), (t = i.done);
                                      } catch (o) {
                                        return void n.error(o);
                                      }
                                      t
                                        ? n.complete()
                                        : (n.next(e), this.schedule());
                                    }
                                  })
                                );
                            })
                          ),
                          i
                        );
                      });
                    })(e, t);
                }
                throw new TypeError(
                  ((null !== e && typeof e) || e) + ' is not observable'
                );
              })(e, t)
            : e instanceof M
            ? e
            : new M(J(e));
        }
        var Q = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e) {
              var r;
              return p(this, n), ((r = t.call(this)).parent = e), r;
            }
            return (
              m(n, [
                {
                  key: '_next',
                  value: function (e) {
                    this.parent.notifyNext(e);
                  },
                },
                {
                  key: '_error',
                  value: function (e) {
                    this.parent.notifyError(e), this.unsubscribe();
                  },
                },
                {
                  key: '_complete',
                  value: function () {
                    this.parent.notifyComplete(), this.unsubscribe();
                  },
                },
              ]),
              n
            );
          })(x),
          Y = (function (e) {
            o(n, e);
            var t = s(n);
            function n() {
              return p(this, n), t.apply(this, arguments);
            }
            return (
              m(n, [
                {
                  key: 'notifyNext',
                  value: function (e) {
                    this.destination.next(e);
                  },
                },
                {
                  key: 'notifyError',
                  value: function (e) {
                    this.destination.error(e);
                  },
                },
                {
                  key: 'notifyComplete',
                  value: function () {
                    this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(x);
        function $(e, t) {
          if (!t.closed) return e instanceof M ? e.subscribe(t) : J(e)(t);
        }
        function ee(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : Number.POSITIVE_INFINITY;
          return 'function' == typeof t
            ? function (r) {
                return r.pipe(
                  ee(function (n, r) {
                    return X(e(n, r)).pipe(
                      V(function (e, i) {
                        return t(n, e, r, i);
                      })
                    );
                  }, n)
                );
              }
            : ('number' == typeof t && (n = t),
              function (t) {
                return t.lift(new te(e, n));
              });
        }
        var te = (function () {
            function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Number.POSITIVE_INFINITY;
              p(this, e), (this.project = t), (this.concurrent = n);
            }
            return (
              m(e, [
                {
                  key: 'call',
                  value: function (e, t) {
                    return t.subscribe(
                      new ne(e, this.project, this.concurrent)
                    );
                  },
                },
              ]),
              e
            );
          })(),
          ne = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : Number.POSITIVE_INFINITY;
              return (
                p(this, n),
                ((i = t.call(this, e)).project = r),
                (i.concurrent = o),
                (i.hasCompleted = !1),
                (i.buffer = []),
                (i.active = 0),
                (i.index = 0),
                i
              );
            }
            return (
              m(n, [
                {
                  key: '_next',
                  value: function (e) {
                    this.active < this.concurrent
                      ? this._tryNext(e)
                      : this.buffer.push(e);
                  },
                },
                {
                  key: '_tryNext',
                  value: function (e) {
                    var t,
                      n = this.index++;
                    try {
                      t = this.project(e, n);
                    } catch (r) {
                      return void this.destination.error(r);
                    }
                    this.active++, this._innerSub(t);
                  },
                },
                {
                  key: '_innerSub',
                  value: function (e) {
                    var t = new Q(this),
                      n = this.destination;
                    n.add(t);
                    var r = $(e, t);
                    r !== t && n.add(r);
                  },
                },
                {
                  key: '_complete',
                  value: function () {
                    (this.hasCompleted = !0),
                      0 === this.active &&
                        0 === this.buffer.length &&
                        this.destination.complete(),
                      this.unsubscribe();
                  },
                },
                {
                  key: 'notifyNext',
                  value: function (e) {
                    this.destination.next(e);
                  },
                },
                {
                  key: 'notifyComplete',
                  value: function () {
                    var e = this.buffer;
                    this.active--,
                      e.length > 0
                        ? this._next(e.shift())
                        : 0 === this.active &&
                          this.hasCompleted &&
                          this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(Y);
        function re(e, t) {
          return t ? K(e, t) : new M(U(e));
        }
        function ie() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = Number.POSITIVE_INFINITY,
            i = null,
            o = t[t.length - 1];
          return (
            z(o)
              ? ((i = t.pop()),
                t.length > 1 &&
                  'number' == typeof t[t.length - 1] &&
                  (r = t.pop()))
              : 'number' == typeof o && (r = t.pop()),
            null === i && 1 === t.length && t[0] instanceof M
              ? t[0]
              : (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Number.POSITIVE_INFINITY;
                  return ee(A, e);
                })(r)(re(t, i))
          );
        }
        function oe() {
          return function (e) {
            return e.lift(new se(e));
          };
        }
        var ae,
          se = (function () {
            function e(t) {
              p(this, e), (this.connectable = t);
            }
            return (
              m(e, [
                {
                  key: 'call',
                  value: function (e, t) {
                    var n = this.connectable;
                    n._refCount++;
                    var r = new ue(e, n),
                      i = t.subscribe(r);
                    return r.closed || (r.connection = n.connect()), i;
                  },
                },
              ]),
              e
            );
          })(),
          ue = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i;
              return p(this, n), ((i = t.call(this, e)).connectable = r), i;
            }
            return (
              m(n, [
                {
                  key: '_unsubscribe',
                  value: function () {
                    var e = this.connectable;
                    if (e) {
                      this.connectable = null;
                      var t = e._refCount;
                      if (t <= 0) this.connection = null;
                      else if (((e._refCount = t - 1), t > 1))
                        this.connection = null;
                      else {
                        var n = this.connection,
                          r = e._connection;
                        (this.connection = null),
                          !r || (n && r !== n) || r.unsubscribe();
                      }
                    } else this.connection = null;
                  },
                },
              ]),
              n
            );
          })(x),
          le = {
            operator: { value: null },
            _refCount: { value: 0, writable: !0 },
            _subject: { value: null, writable: !0 },
            _connection: { value: null, writable: !0 },
            _subscribe: {
              value: (ae = (function (e) {
                o(n, e);
                var t = s(n);
                function n(e, r) {
                  var i;
                  return (
                    p(this, n),
                    ((i = t.call(this)).source = e),
                    (i.subjectFactory = r),
                    (i._refCount = 0),
                    (i._isComplete = !1),
                    i
                  );
                }
                return (
                  m(n, [
                    {
                      key: '_subscribe',
                      value: function (e) {
                        return this.getSubject().subscribe(e);
                      },
                    },
                    {
                      key: 'getSubject',
                      value: function () {
                        var e = this._subject;
                        return (
                          (e && !e.isStopped) ||
                            (this._subject = this.subjectFactory()),
                          this._subject
                        );
                      },
                    },
                    {
                      key: 'connect',
                      value: function () {
                        var e = this._connection;
                        return (
                          e ||
                            ((this._isComplete = !1),
                            (e = this._connection = new T()).add(
                              this.source.subscribe(
                                new ce(this.getSubject(), this)
                              )
                            ),
                            e.closed &&
                              ((this._connection = null), (e = T.EMPTY))),
                          e
                        );
                      },
                    },
                    {
                      key: 'refCount',
                      value: function () {
                        return oe()(this);
                      },
                    },
                  ]),
                  n
                );
              })(M).prototype)._subscribe,
            },
            _isComplete: { value: ae._isComplete, writable: !0 },
            getSubject: { value: ae.getSubject },
            connect: { value: ae.connect },
            refCount: { value: ae.refCount },
          },
          ce = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i;
              return p(this, n), ((i = t.call(this, e)).connectable = r), i;
            }
            return (
              m(n, [
                {
                  key: '_error',
                  value: function (e) {
                    this._unsubscribe(),
                      i(f(n.prototype), '_error', this).call(this, e);
                  },
                },
                {
                  key: '_complete',
                  value: function () {
                    (this.connectable._isComplete = !0),
                      this._unsubscribe(),
                      i(f(n.prototype), '_complete', this).call(this);
                  },
                },
                {
                  key: '_unsubscribe',
                  value: function () {
                    var e = this.connectable;
                    if (e) {
                      this.connectable = null;
                      var t = e._connection;
                      (e._refCount = 0),
                        (e._subject = null),
                        (e._connection = null),
                        t && t.unsubscribe();
                    }
                  },
                },
              ]),
              n
            );
          })(j);
        function fe() {
          return new L();
        }
        function he(e) {
          return { toString: e }.toString();
        }
        function de(e, t, n) {
          return he(function () {
            var i = (function (e) {
              return function () {
                if (e) {
                  var t = e.apply(void 0, arguments);
                  for (var n in t) this[n] = t[n];
                }
              };
            })(t);
            function o() {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              if (this instanceof o) return i.apply(this, t), this;
              var a = r(o, t);
              return (s.annotation = a), s;
              function s(e, t, n) {
                for (
                  var r = e.hasOwnProperty('__parameters__')
                    ? e.__parameters__
                    : Object.defineProperty(e, '__parameters__', { value: [] })
                        .__parameters__;
                  r.length <= n;

                )
                  r.push(null);
                return (r[n] = r[n] || []).push(a), e;
              }
            }
            return (
              n && (o.prototype = Object.create(n.prototype)),
              (o.prototype.ngMetadataName = e),
              (o.annotationCls = o),
              o
            );
          });
        }
        var ve = de('Inject', function (e) {
            return { token: e };
          }),
          pe = de('Optional'),
          ye = de('Self'),
          me = de('SkipSelf'),
          ge = (function (e) {
            return (
              (e[(e.Default = 0)] = 'Default'),
              (e[(e.Host = 1)] = 'Host'),
              (e[(e.Self = 2)] = 'Self'),
              (e[(e.SkipSelf = 4)] = 'SkipSelf'),
              (e[(e.Optional = 8)] = 'Optional'),
              e
            );
          })({});
        function _e(e) {
          for (var t in e) if (e[t] === _e) return t;
          throw Error('Could not find renamed property on target object.');
        }
        function ke(e) {
          return {
            token: e.token,
            providedIn: e.providedIn || null,
            factory: e.factory,
            value: void 0,
          };
        }
        function be(e) {
          return {
            factory: e.factory,
            providers: e.providers || [],
            imports: e.imports || [],
          };
        }
        function we(e) {
          return Ee(e, e[Ce]) || Ee(e, e[Oe]);
        }
        function Ee(e, t) {
          return t && t.token === e ? t : null;
        }
        function Te(e) {
          return e && (e.hasOwnProperty(Se) || e.hasOwnProperty(Ie))
            ? e[Se]
            : null;
        }
        var Ce = _e({ '\u0275prov': _e }),
          Se = _e({ '\u0275inj': _e }),
          xe = _e({ '\u0275provFallback': _e }),
          Oe = _e({ ngInjectableDef: _e }),
          Ie = _e({ ngInjectorDef: _e });
        function Ae(e) {
          if ('string' == typeof e) return e;
          if (Array.isArray(e)) return '[' + e.map(Ae).join(', ') + ']';
          if (null == e) return '' + e;
          if (e.overriddenName) return '' + e.overriddenName;
          if (e.name) return '' + e.name;
          var t = e.toString();
          if (null == t) return '' + t;
          var n = t.indexOf('\n');
          return -1 === n ? t : t.substring(0, n);
        }
        function Ne(e, t) {
          return null == e || '' === e
            ? null === t
              ? ''
              : t
            : null == t || '' === t
            ? e
            : e + ' ' + t;
        }
        var Me = _e({ __forward_ref__: _e });
        function De(e) {
          return (
            (e.__forward_ref__ = De),
            (e.toString = function () {
              return Ae(this());
            }),
            e
          );
        }
        function Re(e) {
          return 'function' == typeof (t = e) &&
            t.hasOwnProperty(Me) &&
            t.__forward_ref__ === De
            ? e()
            : e;
          var t;
        }
        var Pe,
          He = 'undefined' != typeof globalThis && globalThis,
          je = 'undefined' != typeof window && window,
          Le =
            'undefined' != typeof self &&
            'undefined' != typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            self,
          Fe = 'undefined' != typeof global && global,
          ze = He || Fe || je || Le,
          Ve = _e({ '\u0275cmp': _e }),
          Ze = _e({ '\u0275dir': _e }),
          Be = _e({ '\u0275pipe': _e }),
          Ue = _e({ '\u0275mod': _e }),
          qe = _e({ '\u0275loc': _e }),
          We = _e({ '\u0275fac': _e }),
          Ge = _e({ __NG_ELEMENT_ID__: _e }),
          Je = (function () {
            function e(t, n) {
              p(this, e),
                (this._desc = t),
                (this.ngMetadataName = 'InjectionToken'),
                (this.ɵprov = void 0),
                'number' == typeof n
                  ? (this.__NG_ELEMENT_ID__ = n)
                  : void 0 !== n &&
                    (this.ɵprov = ke({
                      token: this,
                      providedIn: n.providedIn || 'root',
                      factory: n.factory,
                    }));
            }
            return (
              m(e, [
                {
                  key: 'toString',
                  value: function () {
                    return 'InjectionToken ' + this._desc;
                  },
                },
              ]),
              e
            );
          })(),
          Ke = new Je('INJECTOR', -1),
          Xe = {},
          Qe = /\n/gm,
          Ye = _e({ provide: String, useValue: _e }),
          $e = void 0;
        function et(e) {
          var t = $e;
          return ($e = e), t;
        }
        function tt(e) {
          var t = Pe;
          return (Pe = e), t;
        }
        function nt(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ge.Default;
          if (void 0 === $e)
            throw new Error(
              'inject() must be called from an injection context'
            );
          return null === $e
            ? it(e, void 0, t)
            : $e.get(e, t & ge.Optional ? null : void 0, t);
        }
        function rt(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ge.Default;
          return (Pe || nt)(Re(e), t);
        }
        function it(e, t, n) {
          var r = we(e);
          if (r && 'root' == r.providedIn)
            return void 0 === r.value ? (r.value = r.factory()) : r.value;
          if (n & ge.Optional) return null;
          if (void 0 !== t) return t;
          throw new Error('Injector: NOT_FOUND ['.concat(Ae(e), ']'));
        }
        function ot(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var r = Re(e[n]);
            if (Array.isArray(r)) {
              if (0 === r.length)
                throw new Error('Arguments array must have arguments.');
              for (var i = void 0, o = ge.Default, a = 0; a < r.length; a++) {
                var s = r[a];
                s instanceof pe || 'Optional' === s.ngMetadataName || s === pe
                  ? (o |= ge.Optional)
                  : s instanceof me ||
                    'SkipSelf' === s.ngMetadataName ||
                    s === me
                  ? (o |= ge.SkipSelf)
                  : s instanceof ye || 'Self' === s.ngMetadataName || s === ye
                  ? (o |= ge.Self)
                  : (i = s instanceof ve || s === ve ? s.token : s);
              }
              t.push(rt(i, o));
            } else t.push(rt(r));
          }
          return t;
        }
        var at = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: 'get',
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Xe;
                    if (t === Xe) {
                      var n = new Error(
                        'NullInjectorError: No provider for '.concat(Ae(e), '!')
                      );
                      throw ((n.name = 'NullInjectorError'), n);
                    }
                    return t;
                  },
                },
              ]),
              e
            );
          })(),
          st = function e() {
            p(this, e);
          };
        function ut(e, t) {
          e.forEach(function (e) {
            return Array.isArray(e) ? ut(e, t) : t(e);
          });
        }
        function lt(e, t, n) {
          t >= e.length ? e.push(n) : e.splice(t, 0, n);
        }
        function ct(e, t) {
          return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
        }
        var ft,
          ht = (function (e) {
            return (
              (e[(e.OnPush = 0)] = 'OnPush'),
              (e[(e.Default = 1)] = 'Default'),
              e
            );
          })({}),
          dt =
            (((ft = {})[(ft.Emulated = 0)] = 'Emulated'),
            (ft[(ft.Native = 1)] = 'Native'),
            (ft[(ft.None = 2)] = 'None'),
            (ft[(ft.ShadowDom = 3)] = 'ShadowDom'),
            ft),
          vt = {},
          pt = [],
          yt = 0;
        function mt(e) {
          return (
            wt(e) ||
            (function (e) {
              return e[Ze] || null;
            })(e)
          );
        }
        function gt(e) {
          return (function (e) {
            return e[Be] || null;
          })(e);
        }
        var _t = {};
        function kt(e) {
          var t = {
            type: e.type,
            bootstrap: e.bootstrap || pt,
            declarations: e.declarations || pt,
            imports: e.imports || pt,
            exports: e.exports || pt,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return (
            null != e.id &&
              he(function () {
                _t[e.id] = e.type;
              }),
            t
          );
        }
        function bt(e, t) {
          if (null == e) return vt;
          var n = {};
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var i = e[r],
                o = i;
              Array.isArray(i) && ((o = i[1]), (i = i[0])),
                (n[i] = r),
                t && (t[i] = o);
            }
          return n;
        }
        function wt(e) {
          return e[Ve] || null;
        }
        function Et(e, t) {
          return e.hasOwnProperty(We) ? e[We] : null;
        }
        function Tt(e, t) {
          var n = e[Ue] || null;
          if (!n && !0 === t)
            throw new Error(
              'Type '.concat(Ae(e), " does not have '\u0275mod' property.")
            );
          return n;
        }
        function Ct(e) {
          return Array.isArray(e) && 'object' == typeof e[1];
        }
        function St(e) {
          return Array.isArray(e) && !0 === e[1];
        }
        function xt(e) {
          return 0 != (8 & e.flags);
        }
        function Ot(e) {
          return 2 == (2 & e.flags);
        }
        function It(e) {
          return null !== e.template;
        }
        function At(e) {
          return 0 != (512 & e[2]);
        }
        var Nt = (function () {
          function e(t, n, r) {
            p(this, e),
              (this.previousValue = t),
              (this.currentValue = n),
              (this.firstChange = r);
          }
          return (
            m(e, [
              {
                key: 'isFirstChange',
                value: function () {
                  return this.firstChange;
                },
              },
            ]),
            e
          );
        })();
        function Mt() {
          return Dt;
        }
        function Dt(e) {
          return e.type.prototype.ngOnChanges && (e.setInput = Pt), Rt;
        }
        function Rt() {
          var e = Ht(this),
            t = null == e ? void 0 : e.current;
          if (t) {
            var n = e.previous;
            if (n === vt) e.previous = t;
            else for (var r in t) n[r] = t[r];
            (e.current = null), this.ngOnChanges(t);
          }
        }
        function Pt(e, t, n, r) {
          var i =
              Ht(e) ||
              (function (e, t) {
                return (e.__ngSimpleChanges__ = t);
              })(e, { previous: vt, current: null }),
            o = i.current || (i.current = {}),
            a = i.previous,
            s = this.declaredInputs[n],
            u = a[s];
          (o[s] = new Nt(u && u.currentValue, t, a === vt)), (e[r] = t);
        }
        function Ht(e) {
          return e.__ngSimpleChanges__ || null;
        }
        Mt.ngInherit = !0;
        var jt = void 0;
        function Lt(e) {
          return !!e.listen;
        }
        var Ft = {
          createRenderer: function (e, t) {
            return void 0 !== jt
              ? jt
              : 'undefined' != typeof document
              ? document
              : void 0;
          },
        };
        function zt(e) {
          for (; Array.isArray(e); ) e = e[0];
          return e;
        }
        function Vt(e, t) {
          return zt(t[e.index]);
        }
        function Zt(e, t) {
          return e.data[t + 20];
        }
        function Bt(e, t) {
          var n = t[e];
          return Ct(n) ? n : n[0];
        }
        function Ut(e) {
          var t = (function (e) {
            return e.__ngContext__ || null;
          })(e);
          return t ? (Array.isArray(t) ? t : t.lView) : null;
        }
        function qt(e) {
          return 4 == (4 & e[2]);
        }
        function Wt(e) {
          return 128 == (128 & e[2]);
        }
        function Gt(e, t) {
          return null === e || null == t ? null : e[t];
        }
        function Jt(e) {
          e[18] = 0;
        }
        function Kt(e, t) {
          e[5] += t;
          for (
            var n = e, r = e[3];
            null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

          )
            (r[5] += t), (n = r), (r = r[3]);
        }
        var Xt = {
          lFrame: dn(null),
          bindingsEnabled: !0,
          checkNoChangesMode: !1,
        };
        function Qt() {
          return Xt.bindingsEnabled;
        }
        function Yt() {
          return Xt.lFrame.lView;
        }
        function $t() {
          return Xt.lFrame.tView;
        }
        function en() {
          return Xt.lFrame.currentTNode;
        }
        function tn(e, t) {
          (Xt.lFrame.currentTNode = e), (Xt.lFrame.isParent = t);
        }
        function nn() {
          return Xt.lFrame.isParent;
        }
        function rn() {
          return Xt.checkNoChangesMode;
        }
        function on(e) {
          Xt.checkNoChangesMode = e;
        }
        function an(e, t) {
          var n = Xt.lFrame;
          (n.bindingIndex = n.bindingRootIndex = e), sn(t);
        }
        function sn(e) {
          Xt.lFrame.currentDirectiveIndex = e;
        }
        function un() {
          return Xt.lFrame.currentQueryIndex;
        }
        function ln(e) {
          Xt.lFrame.currentQueryIndex = e;
        }
        function cn(e, t) {
          var n = hn();
          (Xt.lFrame = n), (n.currentTNode = t), (n.lView = e);
        }
        function fn(e) {
          var t = hn(),
            n = e[1];
          (Xt.lFrame = t),
            (t.currentTNode = n.firstChild),
            (t.lView = e),
            (t.tView = n),
            (t.contextLView = e),
            (t.bindingIndex = n.bindingStartIndex);
        }
        function hn() {
          var e = Xt.lFrame,
            t = null === e ? null : e.child;
          return null === t ? dn(e) : t;
        }
        function dn(e) {
          var t = {
            currentTNode: null,
            isParent: !0,
            lView: null,
            tView: null,
            selectedIndex: 0,
            contextLView: null,
            elementDepthCount: 0,
            currentNamespace: null,
            currentDirectiveIndex: -1,
            bindingRootIndex: -1,
            bindingIndex: -1,
            currentQueryIndex: 0,
            parent: e,
            child: null,
          };
          return null !== e && (e.child = t), t;
        }
        function vn() {
          var e = Xt.lFrame;
          return (
            (Xt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
          );
        }
        var pn = vn;
        function yn() {
          var e = vn();
          (e.isParent = !0),
            (e.tView = null),
            (e.selectedIndex = 0),
            (e.contextLView = null),
            (e.elementDepthCount = 0),
            (e.currentDirectiveIndex = -1),
            (e.currentNamespace = null),
            (e.bindingRootIndex = -1),
            (e.bindingIndex = -1),
            (e.currentQueryIndex = 0);
        }
        function mn(e) {
          Xt.lFrame.selectedIndex = e;
        }
        function gn(e, t) {
          for (var n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
            var i = e.data[n].type.prototype,
              o = i.ngAfterContentInit,
              a = i.ngAfterContentChecked,
              s = i.ngAfterViewInit,
              u = i.ngAfterViewChecked,
              l = i.ngOnDestroy;
            o && (e.contentHooks || (e.contentHooks = [])).push(-n, o),
              a &&
                ((e.contentHooks || (e.contentHooks = [])).push(n, a),
                (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, a)),
              s && (e.viewHooks || (e.viewHooks = [])).push(-n, s),
              u &&
                ((e.viewHooks || (e.viewHooks = [])).push(n, u),
                (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, u)),
              null != l && (e.destroyHooks || (e.destroyHooks = [])).push(n, l);
          }
        }
        function _n(e, t, n) {
          wn(e, t, 3, n);
        }
        function kn(e, t, n, r) {
          (3 & e[2]) === n && wn(e, t, n, r);
        }
        function bn(e, t) {
          var n = e[2];
          (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
        }
        function wn(e, t, n, r) {
          for (
            var i = null != r ? r : -1,
              o = 0,
              a = void 0 !== r ? 65535 & e[18] : 0;
            a < t.length;
            a++
          )
            if ('number' == typeof t[a + 1]) {
              if (((o = t[a]), null != r && o >= r)) break;
            } else
              t[a] < 0 && (e[18] += 65536),
                (o < i || -1 == i) &&
                  (En(e, n, t, a), (e[18] = (4294901760 & e[18]) + a + 2)),
                a++;
        }
        function En(e, t, n, r) {
          var i = n[r] < 0,
            o = n[r + 1],
            a = e[i ? -n[r] : n[r]];
          i
            ? e[2] >> 11 < e[18] >> 16 &&
              (3 & e[2]) === t &&
              ((e[2] += 2048), o.call(a))
            : o.call(a);
        }
        var Tn = function e(t, n, r) {
          p(this, e),
            (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        };
        function Cn(e, t, n) {
          for (var r = Lt(e), i = 0; i < n.length; ) {
            var o = n[i];
            if ('number' == typeof o) {
              if (0 !== o) break;
              i++;
              var a = n[i++],
                s = n[i++],
                u = n[i++];
              r ? e.setAttribute(t, s, u, a) : t.setAttributeNS(a, s, u);
            } else {
              var l = o,
                c = n[++i];
              Sn(l)
                ? r && e.setProperty(t, l, c)
                : r
                ? e.setAttribute(t, l, c)
                : t.setAttribute(l, c),
                i++;
            }
          }
          return i;
        }
        function Sn(e) {
          return 64 === e.charCodeAt(0);
        }
        function xn(e, t) {
          if (null === t || 0 === t.length);
          else if (null === e || 0 === e.length) e = t.slice();
          else
            for (var n = -1, r = 0; r < t.length; r++) {
              var i = t[r];
              'number' == typeof i
                ? (n = i)
                : 0 === n ||
                  On(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
            }
          return e;
        }
        function On(e, t, n, r, i) {
          var o = 0,
            a = e.length;
          if (-1 === t) a = -1;
          else
            for (; o < e.length; ) {
              var s = e[o++];
              if ('number' == typeof s) {
                if (s === t) {
                  a = -1;
                  break;
                }
                if (s > t) {
                  a = o - 1;
                  break;
                }
              }
            }
          for (; o < e.length; ) {
            var u = e[o];
            if ('number' == typeof u) break;
            if (u === n) {
              if (null === r) return void (null !== i && (e[o + 1] = i));
              if (r === e[o + 1]) return void (e[o + 2] = i);
            }
            o++, null !== r && o++, null !== i && o++;
          }
          -1 !== a && (e.splice(a, 0, t), (o = a + 1)),
            e.splice(o++, 0, n),
            null !== r && e.splice(o++, 0, r),
            null !== i && e.splice(o++, 0, i);
        }
        function In(e) {
          return -1 !== e;
        }
        function An(e) {
          return 32767 & e;
        }
        function Nn(e, t) {
          for (var n = e >> 16, r = t; n > 0; ) (r = r[15]), n--;
          return r;
        }
        function Mn(e) {
          return 'function' == typeof e
            ? e.name || e.toString()
            : 'object' == typeof e && null != e && 'function' == typeof e.type
            ? e.type.name || e.type.toString()
            : (function (e) {
                return 'string' == typeof e ? e : null == e ? '' : '' + e;
              })(e);
        }
        var Dn = (
          ('undefined' != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(ze);
        function Rn(e) {
          return e instanceof Function ? e() : e;
        }
        var Pn = !0;
        function Hn(e) {
          var t = Pn;
          return (Pn = e), t;
        }
        var jn = 0;
        function Ln(e, t) {
          var n = zn(e, t);
          if (-1 !== n) return n;
          var r = t[1];
          r.firstCreatePass &&
            ((e.injectorIndex = t.length),
            Fn(r.data, e),
            Fn(t, null),
            Fn(r.blueprint, null));
          var i = Vn(e, t),
            o = e.injectorIndex;
          if (In(i))
            for (var a = An(i), s = Nn(i, t), u = s[1].data, l = 0; l < 8; l++)
              t[o + l] = s[a + l] | u[a + l];
          return (t[o + 8] = i), o;
        }
        function Fn(e, t) {
          e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
        }
        function zn(e, t) {
          return -1 === e.injectorIndex ||
            (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
            null === t[e.injectorIndex + 8]
            ? -1
            : e.injectorIndex;
        }
        function Vn(e, t) {
          if (e.parent && -1 !== e.parent.injectorIndex)
            return e.parent.injectorIndex;
          for (var n = 0, r = null, i = t; null !== i; ) {
            var o = i[1],
              a = o.type;
            if (null === (r = 2 === a ? o.declTNode : 1 === a ? i[6] : null))
              return -1;
            if ((n++, (i = i[15]), -1 !== r.injectorIndex))
              return r.injectorIndex | (n << 16);
          }
          return -1;
        }
        function Zn(e, t, n) {
          !(function (e, t, n) {
            var r;
            'string' == typeof n
              ? (r = n.charCodeAt(0) || 0)
              : n.hasOwnProperty(Ge) && (r = n[Ge]),
              null == r && (r = n[Ge] = jn++);
            var i = 255 & r,
              o = 1 << i,
              a = 64 & i,
              s = 32 & i,
              u = t.data;
            128 & i
              ? a
                ? s
                  ? (u[e + 7] |= o)
                  : (u[e + 6] |= o)
                : s
                ? (u[e + 5] |= o)
                : (u[e + 4] |= o)
              : a
              ? s
                ? (u[e + 3] |= o)
                : (u[e + 2] |= o)
              : s
              ? (u[e + 1] |= o)
              : (u[e] |= o);
          })(e, t, n);
        }
        function Bn(e, t, n) {
          var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : ge.Default,
            i = arguments.length > 4 ? arguments[4] : void 0;
          if (null !== e) {
            var o = (function (e) {
              if ('string' == typeof e) return e.charCodeAt(0) || 0;
              var t = e.hasOwnProperty(Ge) ? e[Ge] : void 0;
              return 'number' == typeof t && t > 0 ? 255 & t : t;
            })(n);
            if ('function' == typeof o) {
              cn(t, e);
              try {
                var a = o();
                if (null != a || r & ge.Optional) return a;
                throw new Error('No provider for '.concat(Mn(n), '!'));
              } finally {
                pn();
              }
            } else if ('number' == typeof o) {
              if (-1 === o) return new Xn(e, t);
              var s = null,
                u = zn(e, t),
                l = -1,
                c = r & ge.Host ? t[16][6] : null;
              for (
                (-1 === u || r & ge.SkipSelf) &&
                (-1 !== (l = -1 === u ? Vn(e, t) : t[u + 8]) && Kn(r, !1)
                  ? ((s = t[1]), (u = An(l)), (t = Nn(l, t)))
                  : (u = -1));
                -1 !== u;

              ) {
                var f = t[1];
                if (Jn(o, u, f.data)) {
                  var h = qn(u, t, n, s, r, c);
                  if (h !== Un) return h;
                }
                -1 !== (l = t[u + 8]) &&
                Kn(r, t[1].data[u + 8] === c) &&
                Jn(o, u, t)
                  ? ((s = f), (u = An(l)), (t = Nn(l, t)))
                  : (u = -1);
              }
            }
          }
          if (
            (r & ge.Optional && void 0 === i && (i = null),
            0 == (r & (ge.Self | ge.Host)))
          ) {
            var d = t[9],
              v = tt(void 0);
            try {
              return d
                ? d.get(n, i, r & ge.Optional)
                : it(n, i, r & ge.Optional);
            } finally {
              tt(v);
            }
          }
          if (r & ge.Optional) return i;
          throw new Error('NodeInjector: NOT_FOUND ['.concat(Mn(n), ']'));
        }
        var Un = {};
        function qn(e, t, n, r, i, o) {
          var a = t[1],
            s = a.data[e + 8],
            u = Wn(
              s,
              a,
              n,
              null == r ? Ot(s) && Pn : r != a && 2 === s.type,
              i & ge.Host && o === s
            );
          return null !== u ? Gn(t, a, u, s) : Un;
        }
        function Wn(e, t, n, r, i) {
          for (
            var o = e.providerIndexes,
              a = t.data,
              s = 1048575 & o,
              u = e.directiveStart,
              l = o >> 20,
              c = i ? s + l : e.directiveEnd,
              f = r ? s : s + l;
            f < c;
            f++
          ) {
            var h = a[f];
            if ((f < u && n === h) || (f >= u && h.type === n)) return f;
          }
          if (i) {
            var d = a[u];
            if (d && It(d) && d.type === n) return u;
          }
          return null;
        }
        function Gn(e, t, n, r) {
          var i = e[n],
            o = t.data;
          if (i instanceof Tn) {
            var a = i;
            if (a.resolving) throw new Error('Circular dep for ' + Mn(o[n]));
            var s = Hn(a.canSeeViewProviders);
            a.resolving = !0;
            var u = a.injectImpl ? tt(a.injectImpl) : null;
            cn(e, r);
            try {
              (i = e[n] = a.factory(void 0, o, e, r)),
                t.firstCreatePass &&
                  n >= r.directiveStart &&
                  (function (e, t, n) {
                    var r = t.type.prototype,
                      i = r.ngOnChanges,
                      o = r.ngOnInit,
                      a = r.ngDoCheck;
                    if (i) {
                      var s = Dt(t);
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                        (
                          n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                        ).push(e, s);
                    }
                    o &&
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(
                        0 - e,
                        o
                      ),
                      a &&
                        ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, a),
                        (
                          n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                        ).push(e, a));
                  })(n, o[n], t);
            } finally {
              null !== u && tt(u), Hn(s), (a.resolving = !1), pn();
            }
          }
          return i;
        }
        function Jn(e, t, n) {
          var r = 64 & e,
            i = 32 & e;
          return !!(
            (128 & e
              ? r
                ? i
                  ? n[t + 7]
                  : n[t + 6]
                : i
                ? n[t + 5]
                : n[t + 4]
              : r
              ? i
                ? n[t + 3]
                : n[t + 2]
              : i
              ? n[t + 1]
              : n[t]) &
            (1 << e)
          );
        }
        function Kn(e, t) {
          return !(e & ge.Self || (e & ge.Host && t));
        }
        var Xn = (function () {
          function e(t, n) {
            p(this, e), (this._tNode = t), (this._lView = n);
          }
          return (
            m(e, [
              {
                key: 'get',
                value: function (e, t) {
                  return Bn(this._tNode, this._lView, e, void 0, t);
                },
              },
            ]),
            e
          );
        })();
        function Qn(e) {
          return e.ngDebugContext;
        }
        function Yn(e) {
          return e.ngOriginalError;
        }
        function $n(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          e.error.apply(e, n);
        }
        var er = (function () {
          function e() {
            p(this, e), (this._console = console);
          }
          return (
            m(e, [
              {
                key: 'handleError',
                value: function (e) {
                  var t = this._findOriginalError(e),
                    n = this._findContext(e),
                    r = (function (e) {
                      return e.ngErrorLogger || $n;
                    })(e);
                  r(this._console, 'ERROR', e),
                    t && r(this._console, 'ORIGINAL ERROR', t),
                    n && r(this._console, 'ERROR CONTEXT', n);
                },
              },
              {
                key: '_findContext',
                value: function (e) {
                  return e ? (Qn(e) ? Qn(e) : this._findContext(Yn(e))) : null;
                },
              },
              {
                key: '_findOriginalError',
                value: function (e) {
                  for (var t = Yn(e); t && Yn(t); ) t = Yn(t);
                  return t;
                },
              },
            ]),
            e
          );
        })();
        function tr() {
          return !0, !0;
        }
        function nr(e, t) {
          e.__ngContext__ = t;
        }
        function rr(e, t, n) {
          for (var r = e.length; ; ) {
            var i = e.indexOf(t, n);
            if (-1 === i) return i;
            if (0 === i || e.charCodeAt(i - 1) <= 32) {
              var o = t.length;
              if (i + o === r || e.charCodeAt(i + o) <= 32) return i;
            }
            n = i + 1;
          }
        }
        function ir(e, t, n) {
          for (var r = 0; r < e.length; ) {
            var i = e[r++];
            if (n && 'class' === i) {
              if (-1 !== rr((i = e[r]).toLowerCase(), t, 0)) return !0;
            } else if (1 === i) {
              for (; r < e.length && 'string' == typeof (i = e[r++]); )
                if (i.toLowerCase() === t) return !0;
              return !1;
            }
          }
          return !1;
        }
        function or(e) {
          return 0 === e.type && 'ng-template' !== e.tagName;
        }
        function ar(e, t, n) {
          return t === (0 !== e.type || n ? e.tagName : 'ng-template');
        }
        function sr(e, t, n) {
          for (
            var r = 4,
              i = e.attrs || [],
              o = (function (e) {
                for (var t = 0; t < e.length; t++)
                  if (3 === (n = e[t]) || 4 === n || 6 === n) return t;
                var n;
                return e.length;
              })(i),
              a = !1,
              s = 0;
            s < t.length;
            s++
          ) {
            var u = t[s];
            if ('number' != typeof u) {
              if (!a)
                if (4 & r) {
                  if (
                    ((r = 2 | (1 & r)),
                    ('' !== u && !ar(e, u, n)) || ('' === u && 1 === t.length))
                  ) {
                    if (ur(r)) return !1;
                    a = !0;
                  }
                } else {
                  var l = 8 & r ? u : t[++s];
                  if (8 & r && null !== e.attrs) {
                    if (!ir(e.attrs, l, n)) {
                      if (ur(r)) return !1;
                      a = !0;
                    }
                    continue;
                  }
                  var c = lr(8 & r ? 'class' : u, i, or(e), n);
                  if (-1 === c) {
                    if (ur(r)) return !1;
                    a = !0;
                    continue;
                  }
                  if ('' !== l) {
                    var f;
                    f = c > o ? '' : i[c + 1].toLowerCase();
                    var h = 8 & r ? f : null;
                    if ((h && -1 !== rr(h, l, 0)) || (2 & r && l !== f)) {
                      if (ur(r)) return !1;
                      a = !0;
                    }
                  }
                }
            } else {
              if (!a && !ur(r) && !ur(u)) return !1;
              if (a && ur(u)) continue;
              (a = !1), (r = u | (1 & r));
            }
          }
          return ur(r) || a;
        }
        function ur(e) {
          return 0 == (1 & e);
        }
        function lr(e, t, n, r) {
          if (null === t) return -1;
          var i = 0;
          if (r || !n) {
            for (var o = !1; i < t.length; ) {
              var a = t[i];
              if (a === e) return i;
              if (3 === a || 6 === a) o = !0;
              else {
                if (1 === a || 2 === a) {
                  for (var s = t[++i]; 'string' == typeof s; ) s = t[++i];
                  continue;
                }
                if (4 === a) break;
                if (0 === a) {
                  i += 4;
                  continue;
                }
              }
              i += o ? 1 : 2;
            }
            return -1;
          }
          return (function (e, t) {
            var n = e.indexOf(4);
            if (n > -1)
              for (n++; n < e.length; ) {
                var r = e[n];
                if ('number' == typeof r) return -1;
                if (r === t) return n;
                n++;
              }
            return -1;
          })(t, e);
        }
        function cr(e, t) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = 0;
            r < t.length;
            r++
          )
            if (sr(e, t[r], n)) return !0;
          return !1;
        }
        function fr(e, t) {
          return e ? ':not(' + t.trim() + ')' : t;
        }
        function hr(e) {
          for (var t = e[0], n = 1, r = 2, i = '', o = !1; n < e.length; ) {
            var a = e[n];
            if ('string' == typeof a)
              if (2 & r) {
                var s = e[++n];
                i += '[' + a + (s.length > 0 ? '="' + s + '"' : '') + ']';
              } else 8 & r ? (i += '.' + a) : 4 & r && (i += ' ' + a);
            else
              '' === i || ur(a) || ((t += fr(o, i)), (i = '')),
                (r = a),
                (o = o || !ur(r));
            n++;
          }
          return '' !== i && (t += fr(o, i)), t;
        }
        var dr = {};
        function vr(e) {
          var t = e[3];
          return St(t) ? t[3] : t;
        }
        function pr(e) {
          return mr(e[13]);
        }
        function yr(e) {
          return mr(e[4]);
        }
        function mr(e) {
          for (; null !== e && !St(e); ) e = e[4];
          return e;
        }
        function gr(e, t) {
          var n = e.contentQueries;
          if (null !== n)
            for (var r = 0; r < n.length; r += 2) {
              var i = n[r],
                o = n[r + 1];
              if (-1 !== o) {
                var a = e.data[o];
                ln(i), a.contentQueries(2, t[o], o);
              }
            }
        }
        function _r(e, t, n) {
          return Lt(t)
            ? t.createElement(e, n)
            : null === n
            ? t.createElement(e)
            : t.createElementNS(n, e);
        }
        function kr(e, t, n, r, i, o, a, s, u, l) {
          var c = t.blueprint.slice();
          return (
            (c[0] = i),
            (c[2] = 140 | r),
            Jt(c),
            (c[3] = c[15] = e),
            (c[8] = n),
            (c[10] = a || (e && e[10])),
            (c[11] = s || (e && e[11])),
            (c[12] = u || (e && e[12]) || null),
            (c[9] = l || (e && e[9]) || null),
            (c[6] = o),
            (c[16] = 2 == t.type ? e[16] : c),
            c
          );
        }
        function br(e, t, n, r, i) {
          var o = t + 20,
            a =
              e.data[o] ||
              (function (e, t, n, r, i) {
                var o = en(),
                  a = nn(),
                  s = (e.data[t] = (function (e, t, n, r, i, o) {
                    return {
                      type: n,
                      index: r,
                      injectorIndex: t ? t.injectorIndex : -1,
                      directiveStart: -1,
                      directiveEnd: -1,
                      directiveStylingLast: -1,
                      propertyBindings: null,
                      flags: 0,
                      providerIndexes: 0,
                      tagName: i,
                      attrs: o,
                      mergedAttrs: null,
                      localNames: null,
                      initialInputs: void 0,
                      inputs: null,
                      outputs: null,
                      tViews: null,
                      next: null,
                      projectionNext: null,
                      child: null,
                      parent: t,
                      projection: null,
                      styles: null,
                      stylesWithoutHost: null,
                      residualStyles: void 0,
                      classes: null,
                      classesWithoutHost: null,
                      residualClasses: void 0,
                      classBindings: 0,
                      styleBindings: 0,
                    };
                  })(0, a ? o : o && o.parent, n, t, r, i));
                return (
                  null === e.firstChild && (e.firstChild = s),
                  null !== o &&
                    (a && null == o.child && null !== s.parent
                      ? (o.child = s)
                      : a || (o.next = s)),
                  s
                );
              })(e, o, n, r, i);
          return tn(a, !0), a;
        }
        function wr(e, t, n) {
          fn(t);
          try {
            var r = e.viewQuery;
            null !== r && Wr(1, r, n);
            var i = e.template;
            null !== i && Cr(e, t, i, 1, n),
              e.firstCreatePass && (e.firstCreatePass = !1),
              e.staticContentQueries && gr(e, t),
              e.staticViewQueries && Wr(2, e.viewQuery, n);
            var o = e.components;
            null !== o &&
              (function (e, t) {
                for (var n = 0; n < t.length; n++) Zr(e, t[n]);
              })(t, o);
          } catch (a) {
            throw (e.firstCreatePass && (e.incompleteFirstPass = !0), a);
          } finally {
            (t[2] &= -5), yn();
          }
        }
        function Er(e, t, n, r) {
          var i = t[2];
          if (256 != (256 & i)) {
            fn(t);
            var o = rn();
            try {
              Jt(t),
                (Xt.lFrame.bindingIndex = e.bindingStartIndex),
                null !== n && Cr(e, t, n, 2, r);
              var a = 3 == (3 & i);
              if (!o)
                if (a) {
                  var s = e.preOrderCheckHooks;
                  null !== s && _n(t, s, null);
                } else {
                  var u = e.preOrderHooks;
                  null !== u && kn(t, u, 0, null), bn(t, 0);
                }
              if (
                ((function (e) {
                  for (var t = pr(e); null !== t; t = yr(t))
                    if (t[2])
                      for (var n = t[9], r = 0; r < n.length; r++) {
                        var i = n[r],
                          o = i[3];
                        0 == (1024 & i[2]) && Kt(o, 1), (i[2] |= 1024);
                      }
                })(t),
                (function (e) {
                  for (var t = pr(e); null !== t; t = yr(t))
                    for (var n = 10; n < t.length; n++) {
                      var r = t[n],
                        i = r[1];
                      Wt(r) && Er(i, r, i.template, r[8]);
                    }
                })(t),
                null !== e.contentQueries && gr(e, t),
                !o)
              )
                if (a) {
                  var l = e.contentCheckHooks;
                  null !== l && _n(t, l);
                } else {
                  var c = e.contentHooks;
                  null !== c && kn(t, c, 1), bn(t, 1);
                }
              !(function (e, t) {
                try {
                  var n = e.expandoInstructions;
                  if (null !== n)
                    for (
                      var r = e.expandoStartIndex, i = -1, o = 0;
                      o < n.length;
                      o++
                    ) {
                      var a = n[o];
                      'number' == typeof a
                        ? a <= 0
                          ? (mn(0 - a), (i = r += 9 + n[++o]))
                          : (r += a)
                        : (null !== a && (an(r, i), a(2, t[i])), i++);
                    }
                } finally {
                  mn(-1);
                }
              })(e, t);
              var f = e.components;
              null !== f &&
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) Vr(e, t[n]);
                })(t, f);
              var h = e.viewQuery;
              if ((null !== h && Wr(2, h, r), !o))
                if (a) {
                  var d = e.viewCheckHooks;
                  null !== d && _n(t, d);
                } else {
                  var v = e.viewHooks;
                  null !== v && kn(t, v, 2), bn(t, 2);
                }
              !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
                o || (t[2] &= -73),
                1024 & t[2] && ((t[2] &= -1025), Kt(t[3], -1));
            } finally {
              yn();
            }
          }
        }
        function Tr(e, t, n, r) {
          var i = t[10],
            o = !rn(),
            a = qt(t);
          try {
            o && !a && i.begin && i.begin(), a && wr(e, t, r), Er(e, t, n, r);
          } finally {
            o && !a && i.end && i.end();
          }
        }
        function Cr(e, t, n, r, i) {
          var o = Xt.lFrame.selectedIndex;
          try {
            mn(-1),
              2 & r &&
                t.length > 20 &&
                (function (e, t, n, r) {
                  if (!r)
                    if (3 == (3 & t[2])) {
                      var i = e.preOrderCheckHooks;
                      null !== i && _n(t, i, 0);
                    } else {
                      var o = e.preOrderHooks;
                      null !== o && kn(t, o, 0, 0);
                    }
                  mn(0);
                })(e, t, 0, rn()),
              n(r, i);
          } finally {
            mn(o);
          }
        }
        function Sr(e) {
          var t = e.tView;
          return null === t || t.incompleteFirstPass
            ? (e.tView = xr(
                1,
                null,
                e.template,
                e.decls,
                e.vars,
                e.directiveDefs,
                e.pipeDefs,
                e.viewQuery,
                e.schemas,
                e.consts
              ))
            : t;
        }
        function xr(e, t, n, r, i, o, a, s, u, l) {
          var c = 20 + r,
            f = c + i,
            h = (function (e, t) {
              for (var n = [], r = 0; r < t; r++) n.push(r < e ? null : dr);
              return n;
            })(c, f),
            d = 'function' == typeof l ? l() : l;
          return (h[1] = {
            type: e,
            blueprint: h,
            template: n,
            queries: null,
            viewQuery: s,
            declTNode: t,
            data: h.slice().fill(null, c),
            bindingStartIndex: c,
            expandoStartIndex: f,
            expandoInstructions: null,
            firstCreatePass: !0,
            firstUpdatePass: !0,
            staticViewQueries: !1,
            staticContentQueries: !1,
            preOrderHooks: null,
            preOrderCheckHooks: null,
            contentHooks: null,
            contentCheckHooks: null,
            viewHooks: null,
            viewCheckHooks: null,
            destroyHooks: null,
            cleanup: null,
            contentQueries: null,
            components: null,
            directiveRegistry: 'function' == typeof o ? o() : o,
            pipeRegistry: 'function' == typeof a ? a() : a,
            firstChild: null,
            schemas: u,
            consts: d,
            incompleteFirstPass: !1,
          });
        }
        function Or(e, t, n, r) {
          var i,
            o = (i = t)[7] || (i[7] = []);
          o.push(n),
            e.firstCreatePass &&
              (function (e) {
                return e.cleanup || (e.cleanup = []);
              })(e).push(r, o.length - 1);
        }
        function Ir(e, t, n) {
          for (var r in e)
            if (e.hasOwnProperty(r)) {
              var i = e[r];
              (n = null === n ? {} : n).hasOwnProperty(r)
                ? n[r].push(t, i)
                : (n[r] = [t, i]);
            }
          return n;
        }
        function Ar(e, t) {
          var n = e.expandoInstructions;
          n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars);
        }
        function Nr(e, t, n) {
          for (var r = 0; r < n; r++)
            t.push(dr), e.blueprint.push(dr), e.data.push(null);
        }
        function Mr(e, t) {
          null !== e.hostBindings && e.hostBindings(1, t);
        }
        function Dr(e, t, n) {
          var r = 20 - t.index,
            i = e.data.length - (1048575 & t.providerIndexes);
          (e.expandoInstructions || (e.expandoInstructions = [])).push(r, i, n);
        }
        function Rr(e, t) {
          (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
        }
        function Pr(e, t, n) {
          if (n) {
            if (t.exportAs)
              for (var r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
            It(t) && (n[''] = e);
          }
        }
        function Hr(e, t, n) {
          (e.flags |= 1),
            (e.directiveStart = t),
            (e.directiveEnd = t + n),
            (e.providerIndexes = t);
        }
        function jr(e, t, n) {
          e.data.push(n);
          var r = n.factory || (n.factory = Et(n.type)),
            i = new Tn(r, It(n), null);
          e.blueprint.push(i), t.push(i);
        }
        function Lr(e, t, n) {
          var r = Vt(t, e),
            i = Sr(n),
            o = e[10],
            a = Br(
              e,
              kr(
                e,
                i,
                null,
                n.onPush ? 64 : 16,
                r,
                t,
                o,
                o.createRenderer(r, n),
                null,
                null
              )
            );
          e[t.index] = a;
        }
        function Fr(e, t, n, r, i, o) {
          var a = o[t];
          if (null !== a)
            for (var s = r.setInput, u = 0; u < a.length; ) {
              var l = a[u++],
                c = a[u++],
                f = a[u++];
              null !== s ? r.setInput(n, f, l, c) : (n[c] = f);
            }
        }
        function zr(e, t) {
          for (var n = null, r = 0; r < t.length; ) {
            var i = t[r];
            if (0 !== i)
              if (5 !== i) {
                if ('number' == typeof i) break;
                e.hasOwnProperty(i) &&
                  (null === n && (n = []), n.push(i, e[i], t[r + 1])),
                  (r += 2);
              } else r += 2;
            else r += 4;
          }
          return n;
        }
        function Vr(e, t) {
          var n = Bt(t, e);
          if (Wt(n)) {
            var r = n[1];
            80 & n[2]
              ? Er(r, n, r.template, n[8])
              : n[5] > 0 &&
                (function e(t) {
                  for (var n = pr(t); null !== n; n = yr(n))
                    for (var r = 10; r < n.length; r++) {
                      var i = n[r];
                      if (1024 & i[2]) {
                        var o = i[1];
                        Er(o, i, o.template, i[8]);
                      } else i[5] > 0 && e(i);
                    }
                  var a = t[1].components;
                  if (null !== a)
                    for (var s = 0; s < a.length; s++) {
                      var u = Bt(a[s], t);
                      Wt(u) && u[5] > 0 && e(u);
                    }
                })(n);
          }
        }
        function Zr(e, t) {
          var n = Bt(t, e),
            r = n[1];
          !(function (e, t) {
            for (var n = t.length; n < e.blueprint.length; n++)
              t.push(e.blueprint[n]);
          })(r, n),
            wr(r, n, n[8]);
        }
        function Br(e, t) {
          return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
        }
        function Ur(e, t, n) {
          var r = t[10];
          r.begin && r.begin();
          try {
            Er(e, t, e.template, n);
          } catch (i) {
            throw (
              ((function (e, t) {
                var n = e[9],
                  r = n ? n.get(er, null) : null;
                r && r.handleError(t);
              })(t, i),
              i)
            );
          } finally {
            r.end && r.end();
          }
        }
        function qr(e) {
          !(function (e) {
            for (var t = 0; t < e.components.length; t++) {
              var n = e.components[t],
                r = Ut(n),
                i = r[1];
              Tr(i, r, i.template, n);
            }
          })(e[8]);
        }
        function Wr(e, t, n) {
          ln(0), t(e, n);
        }
        var Gr = Promise.resolve(null);
        function Jr(e, t, n, r, i) {
          for (var o = 0; o < n.length; ) {
            var a = n[o++],
              s = n[o++],
              u = t[a],
              l = e.data[a];
            null !== l.setInput ? l.setInput(u, i, r, s) : (u[s] = i);
          }
        }
        function Kr(e, t, n, r, i) {
          if (null != r) {
            var o,
              a = !1;
            St(r) ? (o = r) : Ct(r) && ((a = !0), (r = r[0]));
            var s = zt(r);
            0 === e && null !== n
              ? null == i
                ? ti(t, n, s)
                : ei(t, n, s, i || null)
              : 1 === e && null !== n
              ? ei(t, n, s, i || null)
              : 2 === e
              ? (function (e, t, n) {
                  var r = ri(e, t);
                  r &&
                    (function (e, t, n, r) {
                      Lt(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                    })(e, r, t, n);
                })(t, s, a)
              : 3 === e && t.destroyNode(s),
              null != o &&
                (function (e, t, n, r, i) {
                  var o = n[7];
                  o !== zt(n) && Kr(t, e, r, o, i);
                  for (var a = 10; a < n.length; a++) {
                    var s = n[a];
                    ai(s[1], s, e, t, r, o);
                  }
                })(t, e, o, n, i);
          }
        }
        function Xr(e, t) {
          var n = e[9],
            r = n.indexOf(t),
            i = t[3];
          1024 & t[2] && ((t[2] &= -1025), Kt(i, -1)), n.splice(r, 1);
        }
        function Qr(e, t) {
          if (!(e.length <= 10)) {
            var n,
              r = 10 + t,
              i = e[r];
            if (i) {
              var o = i[17];
              null !== o && o !== e && Xr(o, i), t > 0 && (e[r - 1][4] = i[4]);
              var a = ct(e, 10 + t);
              ai(i[1], (n = i), n[11], 2, null, null),
                (n[0] = null),
                (n[6] = null);
              var s = a[19];
              null !== s && s.detachView(a[1]),
                (i[3] = null),
                (i[4] = null),
                (i[2] &= -129);
            }
            return i;
          }
        }
        function Yr(e, t) {
          if (!(256 & t[2])) {
            var n = t[11];
            Lt(n) && n.destroyNode && ai(e, t, n, 3, null, null),
              (function (e) {
                var t = e[13];
                if (!t) return $r(e[1], e);
                for (; t; ) {
                  var n = null;
                  if (Ct(t)) n = t[13];
                  else {
                    var r = t[10];
                    r && (n = r);
                  }
                  if (!n) {
                    for (; t && !t[4] && t !== e; )
                      Ct(t) && $r(t[1], t), (t = t[3]);
                    null === t && (t = e),
                      Ct(t) && $r(t[1], t),
                      (n = t && t[4]);
                  }
                  t = n;
                }
              })(t);
          }
        }
        function $r(e, t) {
          if (!(256 & t[2])) {
            (t[2] &= -129),
              (t[2] |= 256),
              (function (e, t) {
                var n;
                if (null != e && null != (n = e.destroyHooks))
                  for (var r = 0; r < n.length; r += 2) {
                    var i = t[n[r]];
                    if (!(i instanceof Tn)) {
                      var o = n[r + 1];
                      if (Array.isArray(o))
                        for (var a = 0; a < o.length; a += 2)
                          o[a + 1].call(i[o[a]]);
                      else o.call(i);
                    }
                  }
              })(e, t),
              (function (e, t) {
                var n = e.cleanup;
                if (null !== n) {
                  for (var r = t[7], i = 0; i < n.length - 1; i += 2)
                    if ('string' == typeof n[i]) {
                      var o = n[i + 1],
                        a = 'function' == typeof o ? o(t) : zt(t[o]),
                        s = r[n[i + 2]],
                        u = n[i + 3];
                      'boolean' == typeof u
                        ? a.removeEventListener(n[i], s, u)
                        : u >= 0
                        ? r[u]()
                        : r[-u].unsubscribe(),
                        (i += 2);
                    } else n[i].call(r[n[i + 1]]);
                  t[7] = null;
                }
              })(e, t),
              1 === t[1].type && Lt(t[11]) && t[11].destroy();
            var n = t[17];
            if (null !== n && St(t[3])) {
              n !== t[3] && Xr(n, t);
              var r = t[19];
              null !== r && r.detachView(e);
            }
          }
        }
        function ei(e, t, n, r) {
          Lt(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0);
        }
        function ti(e, t, n) {
          Lt(e) ? e.appendChild(t, n) : t.appendChild(n);
        }
        function ni(e, t, n, r) {
          null !== r ? ei(e, t, n, r) : ti(e, t, n);
        }
        function ri(e, t) {
          return Lt(e) ? e.parentNode(t) : t.parentNode;
        }
        function ii(e, t, n, r) {
          var i = (function (e, t, n) {
            for (
              var r = t.parent;
              null != r && (3 === r.type || 4 === r.type);

            )
              r = (t = r).parent;
            if (null === r) return n[0];
            if (t && 4 === t.type && 4 & t.flags) return Vt(t, n).parentNode;
            if (2 & r.flags) {
              var i = e.data,
                o = i[i[r.index].directiveStart].encapsulation;
              if (o !== dt.ShadowDom && o !== dt.Native) return null;
            }
            return Vt(r, n);
          })(e, r, t);
          if (null != i) {
            var o = t[11],
              a = (function (e, t) {
                return 3 === e.type || 4 === e.type ? Vt(e, t) : null;
              })(r.parent || t[6], t);
            if (Array.isArray(n))
              for (var s = 0; s < n.length; s++) ni(o, i, n[s], a);
            else ni(o, i, n, a);
          }
        }
        function oi(e, t, n, r, i, o, a) {
          for (; null != n; ) {
            var s = r[n.index],
              u = n.type;
            a && 0 === t && (s && nr(zt(s), r), (n.flags |= 4)),
              64 != (64 & n.flags) &&
                (3 === u || 4 === u
                  ? (oi(e, t, n.child, r, i, o, !1), Kr(t, e, i, s, o))
                  : 1 === u
                  ? si(e, t, r, n, i, o)
                  : Kr(t, e, i, s, o)),
              (n = a ? n.projectionNext : n.next);
          }
        }
        function ai(e, t, n, r, i, o) {
          oi(n, r, e.firstChild, t, i, o, !1);
        }
        function si(e, t, n, r, i, o) {
          var a = n[16],
            s = a[6].projection[r.projection];
          if (Array.isArray(s))
            for (var u = 0; u < s.length; u++) Kr(t, e, i, s[u], o);
          else oi(e, t, s, a[3], i, o, !0);
        }
        function ui(e, t, n) {
          Lt(e) ? e.setAttribute(t, 'style', n) : (t.style.cssText = n);
        }
        function li(e, t, n) {
          Lt(e)
            ? '' === n
              ? e.removeAttribute(t, 'class')
              : e.setAttribute(t, 'class', n)
            : (t.className = n);
        }
        var ci,
          fi,
          hi,
          di = (function () {
            function e(t, n) {
              p(this, e),
                (this._lView = t),
                (this._cdRefInjectingView = n),
                (this._appRef = null),
                (this._viewContainerRef = null);
            }
            return (
              m(e, [
                {
                  key: 'destroy',
                  value: function () {
                    if (this._appRef) this._appRef.detachView(this);
                    else if (this._viewContainerRef) {
                      var e = this._viewContainerRef.indexOf(this);
                      e > -1 && this._viewContainerRef.detach(e),
                        (this._viewContainerRef = null);
                    }
                    Yr(this._lView[1], this._lView);
                  },
                },
                {
                  key: 'onDestroy',
                  value: function (e) {
                    Or(this._lView[1], this._lView, null, e);
                  },
                },
                {
                  key: 'markForCheck',
                  value: function () {
                    !(function (e) {
                      for (; e; ) {
                        e[2] |= 64;
                        var t = vr(e);
                        if (At(e) && !t) return e;
                        e = t;
                      }
                    })(this._cdRefInjectingView || this._lView);
                  },
                },
                {
                  key: 'detach',
                  value: function () {
                    this._lView[2] &= -129;
                  },
                },
                {
                  key: 'reattach',
                  value: function () {
                    this._lView[2] |= 128;
                  },
                },
                {
                  key: 'detectChanges',
                  value: function () {
                    Ur(this._lView[1], this._lView, this.context);
                  },
                },
                {
                  key: 'checkNoChanges',
                  value: function () {
                    !(function (e, t, n) {
                      on(!0);
                      try {
                        Ur(e, t, n);
                      } finally {
                        on(!1);
                      }
                    })(this._lView[1], this._lView, this.context);
                  },
                },
                {
                  key: 'attachToViewContainerRef',
                  value: function (e) {
                    if (this._appRef)
                      throw new Error(
                        'This view is already attached directly to the ApplicationRef!'
                      );
                    this._viewContainerRef = e;
                  },
                },
                {
                  key: 'detachFromAppRef',
                  value: function () {
                    var e;
                    (this._appRef = null),
                      ai(
                        this._lView[1],
                        (e = this._lView),
                        e[11],
                        2,
                        null,
                        null
                      );
                  },
                },
                {
                  key: 'attachToAppRef',
                  value: function (e) {
                    if (this._viewContainerRef)
                      throw new Error(
                        'This view is already attached to a ViewContainer!'
                      );
                    this._appRef = e;
                  },
                },
                {
                  key: 'rootNodes',
                  get: function () {
                    var e = this._lView,
                      t = e[1];
                    return (function e(t, r, i, o) {
                      for (
                        var a =
                          arguments.length > 4 &&
                          void 0 !== arguments[4] &&
                          arguments[4];
                        null !== i;

                      ) {
                        var s = r[i.index];
                        if ((null !== s && o.push(zt(s)), St(s)))
                          for (var u = 10; u < s.length; u++) {
                            var l = s[u],
                              c = l[1].firstChild;
                            null !== c && e(l[1], l, c, o);
                          }
                        var f = i.type;
                        if (3 === f || 4 === f) e(t, r, i.child, o);
                        else if (1 === f) {
                          var h = r[16],
                            d = h[6].projection[i.projection];
                          if (Array.isArray(d)) o.push.apply(o, n(d));
                          else {
                            var v = vr(h);
                            e(v[1], v, d, o, !0);
                          }
                        }
                        i = a ? i.projectionNext : i.next;
                      }
                      return o;
                    })(t, e, t.firstChild, []);
                  },
                },
                {
                  key: 'context',
                  get: function () {
                    return this._lView[8];
                  },
                },
                {
                  key: 'destroyed',
                  get: function () {
                    return 256 == (256 & this._lView[2]);
                  },
                },
              ]),
              e
            );
          })(),
          vi = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e) {
              var r;
              return p(this, n), ((r = t.call(this, e))._view = e), r;
            }
            return (
              m(n, [
                {
                  key: 'detectChanges',
                  value: function () {
                    qr(this._view);
                  },
                },
                {
                  key: 'checkNoChanges',
                  value: function () {
                    !(function (e) {
                      on(!0);
                      try {
                        qr(e);
                      } finally {
                        on(!1);
                      }
                    })(this._view);
                  },
                },
                {
                  key: 'context',
                  get: function () {
                    return null;
                  },
                },
              ]),
              n
            );
          })(di);
        function pi(e, t, n) {
          return (
            ci ||
              (ci = (function (e) {
                o(n, e);
                var t = s(n);
                function n() {
                  return p(this, n), t.apply(this, arguments);
                }
                return n;
              })(e)),
            new ci(Vt(t, n))
          );
        }
        function yi(e, t, n, r) {
          return (
            fi ||
              (fi = (function (e) {
                o(n, e);
                var t = s(n);
                function n(e, r, i) {
                  var o;
                  return (
                    p(this, n),
                    ((o = t.call(this))._declarationView = e),
                    (o._declarationTContainer = r),
                    (o.elementRef = i),
                    o
                  );
                }
                return (
                  m(n, [
                    {
                      key: 'createEmbeddedView',
                      value: function (e) {
                        var t = this._declarationTContainer.tViews,
                          n = kr(
                            this._declarationView,
                            t,
                            e,
                            16,
                            null,
                            t.declTNode,
                            null,
                            null,
                            null,
                            null
                          );
                        n[17] =
                          this._declarationView[
                            this._declarationTContainer.index
                          ];
                        var r = this._declarationView[19];
                        return (
                          null !== r && (n[19] = r.createEmbeddedView(t)),
                          wr(t, n, e),
                          new di(n)
                        );
                      },
                    },
                  ]),
                  n
                );
              })(e)),
            0 === n.type ? new fi(r, n, pi(t, n, r)) : null
          );
        }
        function mi(e, t, n, r) {
          var i;
          hi ||
            (hi = (function (e) {
              o(r, e);
              var n = s(r);
              function r(e, t, i) {
                var o;
                return (
                  p(this, r),
                  ((o = n.call(this))._lContainer = e),
                  (o._hostTNode = t),
                  (o._hostView = i),
                  o
                );
              }
              return (
                m(r, [
                  {
                    key: 'clear',
                    value: function () {
                      for (; this.length > 0; ) this.remove(this.length - 1);
                    },
                  },
                  {
                    key: 'get',
                    value: function (e) {
                      return (
                        (null !== this._lContainer[8] &&
                          this._lContainer[8][e]) ||
                        null
                      );
                    },
                  },
                  {
                    key: 'createEmbeddedView',
                    value: function (e, t, n) {
                      var r = e.createEmbeddedView(t || {});
                      return this.insert(r, n), r;
                    },
                  },
                  {
                    key: 'createComponent',
                    value: function (e, t, n, r, i) {
                      var o = n || this.parentInjector;
                      if (!i && null == e.ngModule && o) {
                        var a = o.get(st, null);
                        a && (i = a);
                      }
                      var s = e.create(o, r, void 0, i);
                      return this.insert(s.hostView, t), s;
                    },
                  },
                  {
                    key: 'insert',
                    value: function (e, t) {
                      var n = e._lView,
                        r = n[1];
                      if (e.destroyed)
                        throw new Error(
                          'Cannot insert a destroyed View in a ViewContainer!'
                        );
                      if ((this.allocateContainerIfNeeded(), St(n[3]))) {
                        var i = this.indexOf(e);
                        if (-1 !== i) this.detach(i);
                        else {
                          var o = n[3],
                            a = new hi(o, o[6], o[3]);
                          a.detach(a.indexOf(e));
                        }
                      }
                      var s = this._adjustIndex(t),
                        u = this._lContainer;
                      !(function (e, t, n, r) {
                        var i = 10 + r,
                          o = n.length;
                        r > 0 && (n[i - 1][4] = t),
                          r < o - 10
                            ? ((t[4] = n[i]), lt(n, 10 + r, t))
                            : (n.push(t), (t[4] = null)),
                          (t[3] = n);
                        var a = t[17];
                        null !== a &&
                          n !== a &&
                          (function (e, t) {
                            var n = e[9];
                            t[16] !== t[3][3][16] && (e[2] = !0),
                              null === n ? (e[9] = [t]) : n.push(t);
                          })(a, t);
                        var s = t[19];
                        null !== s && s.insertView(e), (t[2] |= 128);
                      })(r, n, u, s);
                      var l = (function e(t, n) {
                          var r = 10 + t + 1;
                          if (r < n.length) {
                            var i = n[r],
                              o = i[1].firstChild;
                            if (null !== o)
                              return (function t(n, r) {
                                if (null !== r) {
                                  var i = r.type;
                                  if (2 === i) return Vt(r, n);
                                  if (0 === i) return e(-1, n[r.index]);
                                  if (3 === i || 4 === i) {
                                    var o = r.child;
                                    if (null !== o) return t(n, o);
                                    var a = n[r.index];
                                    return St(a) ? e(-1, a) : zt(a);
                                  }
                                  var s = n[16],
                                    u = s[6],
                                    l = vr(s),
                                    c = u.projection[r.projection];
                                  return null != c ? t(l, c) : t(n, r.next);
                                }
                                return null;
                              })(i, o);
                          }
                          return n[7];
                        })(s, u),
                        c = n[11],
                        f = ri(c, u[7]);
                      return (
                        null !== f &&
                          (function (e, t, n, r, i, o) {
                            (r[0] = i), (r[6] = t), ai(e, r, n, 1, i, o);
                          })(r, u[6], c, n, f, l),
                        e.attachToViewContainerRef(this),
                        lt(u[8], s, e),
                        e
                      );
                    },
                  },
                  {
                    key: 'move',
                    value: function (e, t) {
                      if (e.destroyed)
                        throw new Error(
                          'Cannot move a destroyed View in a ViewContainer!'
                        );
                      return this.insert(e, t);
                    },
                  },
                  {
                    key: 'indexOf',
                    value: function (e) {
                      var t = this._lContainer[8];
                      return null !== t ? t.indexOf(e) : -1;
                    },
                  },
                  {
                    key: 'remove',
                    value: function (e) {
                      this.allocateContainerIfNeeded();
                      var t = this._adjustIndex(e, -1),
                        n = Qr(this._lContainer, t);
                      n && (ct(this._lContainer[8], t), Yr(n[1], n));
                    },
                  },
                  {
                    key: 'detach',
                    value: function (e) {
                      this.allocateContainerIfNeeded();
                      var t = this._adjustIndex(e, -1),
                        n = Qr(this._lContainer, t);
                      return n && null != ct(this._lContainer[8], t)
                        ? new di(n)
                        : null;
                    },
                  },
                  {
                    key: '_adjustIndex',
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                      return null == e ? this.length + t : e;
                    },
                  },
                  {
                    key: 'allocateContainerIfNeeded',
                    value: function () {
                      null === this._lContainer[8] &&
                        (this._lContainer[8] = []);
                    },
                  },
                  {
                    key: 'element',
                    get: function () {
                      return pi(t, this._hostTNode, this._hostView);
                    },
                  },
                  {
                    key: 'injector',
                    get: function () {
                      return new Xn(this._hostTNode, this._hostView);
                    },
                  },
                  {
                    key: 'parentInjector',
                    get: function () {
                      var e = Vn(this._hostTNode, this._hostView);
                      if (In(e)) {
                        var t = Nn(e, this._hostView),
                          n = An(e);
                        return new Xn(t[1].data[n + 8], t);
                      }
                      return new Xn(null, this._hostView);
                    },
                  },
                  {
                    key: 'length',
                    get: function () {
                      return this._lContainer.length - 10;
                    },
                  },
                ]),
                r
              );
            })(e));
          var a = r[n.index];
          if (St(a)) i = a;
          else {
            var u;
            if (3 === n.type) u = zt(a);
            else if (((u = r[11].createComment('')), At(r))) {
              var l = r[11],
                c = Vt(n, r);
              ei(
                l,
                ri(l, c),
                u,
                (function (e, t) {
                  return Lt(e) ? e.nextSibling(t) : t.nextSibling;
                })(l, c)
              );
            } else ii(r[1], r, u, n);
            (r[n.index] = i =
              new Array(a, !0, !1, r, null, 0, n, u, null, null)),
              Br(r, i);
          }
          return new hi(i, n, r);
        }
        var gi = new Je('Set Injector scope.'),
          _i = {},
          ki = {},
          bi = [],
          wi = void 0;
        function Ei() {
          return void 0 === wi && (wi = new at()), wi;
        }
        function Ti(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            r = arguments.length > 3 ? arguments[3] : void 0;
          return new Ci(e, n, t || Ei(), r);
        }
        var Ci = (function () {
          function e(t, n, r) {
            var i = this,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
            p(this, e),
              (this.parent = r),
              (this.records = new Map()),
              (this.injectorDefTypes = new Set()),
              (this.onDestroy = new Set()),
              (this._destroyed = !1);
            var a = [];
            n &&
              ut(n, function (e) {
                return i.processProvider(e, t, n);
              }),
              ut([t], function (e) {
                return i.processInjectorType(e, [], a);
              }),
              this.records.set(Ke, xi(void 0, this));
            var s = this.records.get(gi);
            (this.scope = null != s ? s.value : null),
              (this.source = o || ('object' == typeof t ? null : Ae(t)));
          }
          return (
            m(e, [
              {
                key: 'destroy',
                value: function () {
                  this.assertNotDestroyed(), (this._destroyed = !0);
                  try {
                    this.onDestroy.forEach(function (e) {
                      return e.ngOnDestroy();
                    });
                  } finally {
                    this.records.clear(),
                      this.onDestroy.clear(),
                      this.injectorDefTypes.clear();
                  }
                },
              },
              {
                key: 'get',
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : Xe,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : ge.Default;
                  this.assertNotDestroyed();
                  var r,
                    i = et(this);
                  try {
                    if (!(n & ge.SkipSelf)) {
                      var o = this.records.get(e);
                      if (void 0 === o) {
                        var a =
                          ('function' == typeof (r = e) ||
                            ('object' == typeof r && r instanceof Je)) &&
                          we(e);
                        (o =
                          a && this.injectableDefInScope(a)
                            ? xi(Si(e), _i)
                            : null),
                          this.records.set(e, o);
                      }
                      if (null != o) return this.hydrate(e, o);
                    }
                    return (n & ge.Self ? Ei() : this.parent).get(
                      e,
                      (t = n & ge.Optional && t === Xe ? null : t)
                    );
                  } catch (s) {
                    if ('NullInjectorError' === s.name) {
                      if (
                        ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(
                          Ae(e)
                        ),
                        i)
                      )
                        throw s;
                      return (function (e, t, n, r) {
                        var i = e.ngTempTokenPath;
                        throw (
                          (t.__source && i.unshift(t.__source),
                          (e.message = (function (e, t, n) {
                            var r =
                              arguments.length > 3 && void 0 !== arguments[3]
                                ? arguments[3]
                                : null;
                            e =
                              e &&
                              '\n' === e.charAt(0) &&
                              '\u0275' == e.charAt(1)
                                ? e.substr(2)
                                : e;
                            var i = Ae(t);
                            if (Array.isArray(t)) i = t.map(Ae).join(' -> ');
                            else if ('object' == typeof t) {
                              var o = [];
                              for (var a in t)
                                if (t.hasOwnProperty(a)) {
                                  var s = t[a];
                                  o.push(
                                    a +
                                      ':' +
                                      ('string' == typeof s
                                        ? JSON.stringify(s)
                                        : Ae(s))
                                  );
                                }
                              i = '{'.concat(o.join(', '), '}');
                            }
                            return ''
                              .concat(n)
                              .concat(r ? '(' + r + ')' : '', '[')
                              .concat(i, ']: ')
                              .concat(e.replace(Qe, '\n  '));
                          })('\n' + e.message, i, 'R3InjectorError', r)),
                          (e.ngTokenPath = i),
                          (e.ngTempTokenPath = null),
                          e)
                        );
                      })(s, e, 0, this.source);
                    }
                    throw s;
                  } finally {
                    et(i);
                  }
                },
              },
              {
                key: '_resolveInjectorDefTypes',
                value: function () {
                  var e = this;
                  this.injectorDefTypes.forEach(function (t) {
                    return e.get(t);
                  });
                },
              },
              {
                key: 'toString',
                value: function () {
                  var e = [];
                  return (
                    this.records.forEach(function (t, n) {
                      return e.push(Ae(n));
                    }),
                    'R3Injector['.concat(e.join(', '), ']')
                  );
                },
              },
              {
                key: 'assertNotDestroyed',
                value: function () {
                  if (this._destroyed)
                    throw new Error('Injector has already been destroyed.');
                },
              },
              {
                key: 'processInjectorType',
                value: function (e, t, n) {
                  var r = this;
                  if (!(e = Re(e))) return !1;
                  var i = Te(e),
                    o = (null == i && e.ngModule) || void 0,
                    a = void 0 === o ? e : o,
                    s = -1 !== n.indexOf(a);
                  if ((void 0 !== o && (i = Te(o)), null == i)) return !1;
                  if (null != i.imports && !s) {
                    var u;
                    n.push(a);
                    try {
                      ut(i.imports, function (e) {
                        r.processInjectorType(e, t, n) &&
                          (void 0 === u && (u = []), u.push(e));
                      });
                    } finally {
                    }
                    if (void 0 !== u)
                      for (
                        var l = function (e) {
                            var t = u[e],
                              n = t.ngModule,
                              i = t.providers;
                            ut(i, function (e) {
                              return r.processProvider(e, n, i || bi);
                            });
                          },
                          c = 0;
                        c < u.length;
                        c++
                      )
                        l(c);
                  }
                  this.injectorDefTypes.add(a),
                    this.records.set(a, xi(i.factory, _i));
                  var f = i.providers;
                  if (null != f && !s) {
                    var h = e;
                    ut(f, function (e) {
                      return r.processProvider(e, h, f);
                    });
                  }
                  return void 0 !== o && void 0 !== e.providers;
                },
              },
              {
                key: 'processProvider',
                value: function (e, t, i) {
                  var o = Ii((e = Re(e))) ? e : Re(e && e.provide),
                    a = (function (e, t, i) {
                      return Oi(e)
                        ? xi(void 0, e.useValue)
                        : xi(
                            (function (e, t, i) {
                              var o,
                                a = void 0;
                              if (Ii(e)) {
                                var s = Re(e);
                                return Et(s) || Si(s);
                              }
                              if (Oi(e))
                                a = function () {
                                  return Re(e.useValue);
                                };
                              else if ((o = e) && o.useFactory)
                                a = function () {
                                  return e.useFactory.apply(
                                    e,
                                    n(ot(e.deps || []))
                                  );
                                };
                              else if (
                                (function (e) {
                                  return !(!e || !e.useExisting);
                                })(e)
                              )
                                a = function () {
                                  return rt(Re(e.useExisting));
                                };
                              else {
                                var u = Re(e && (e.useClass || e.provide));
                                if (
                                  !(function (e) {
                                    return !!e.deps;
                                  })(e)
                                )
                                  return Et(u) || Si(u);
                                a = function () {
                                  return r(u, n(ot(e.deps)));
                                };
                              }
                              return a;
                            })(e),
                            _i
                          );
                    })(e);
                  if (Ii(e) || !0 !== e.multi) this.records.get(o);
                  else {
                    var s = this.records.get(o);
                    s ||
                      (((s = xi(void 0, _i, !0)).factory = function () {
                        return ot(s.multi);
                      }),
                      this.records.set(o, s)),
                      (o = e),
                      s.multi.push(e);
                  }
                  this.records.set(o, a);
                },
              },
              {
                key: 'hydrate',
                value: function (e, t) {
                  var n;
                  return (
                    t.value === _i && ((t.value = ki), (t.value = t.factory())),
                    'object' == typeof t.value &&
                      t.value &&
                      null !== (n = t.value) &&
                      'object' == typeof n &&
                      'function' == typeof n.ngOnDestroy &&
                      this.onDestroy.add(t.value),
                    t.value
                  );
                },
              },
              {
                key: 'injectableDefInScope',
                value: function (e) {
                  return (
                    !!e.providedIn &&
                    ('string' == typeof e.providedIn
                      ? 'any' === e.providedIn || e.providedIn === this.scope
                      : this.injectorDefTypes.has(e.providedIn))
                  );
                },
              },
              {
                key: 'destroyed',
                get: function () {
                  return this._destroyed;
                },
              },
            ]),
            e
          );
        })();
        function Si(e) {
          var t = we(e),
            n = null !== t ? t.factory : Et(e);
          if (null !== n) return n;
          var r = Te(e);
          if (null !== r) return r.factory;
          if (e instanceof Je)
            throw new Error(
              'Token '.concat(Ae(e), ' is missing a \u0275prov definition.')
            );
          if (e instanceof Function)
            return (function (e) {
              var t = e.length;
              if (t > 0) {
                var n = (function (e, t) {
                  for (var n = [], r = 0; r < e; r++) n.push('?');
                  return n;
                })(t);
                throw new Error(
                  "Can't resolve all parameters for "
                    .concat(Ae(e), ': (')
                    .concat(n.join(', '), ').')
                );
              }
              var r = (function (e) {
                var t = e && (e[Ce] || e[Oe] || (e[xe] && e[xe]()));
                if (t) {
                  var n = (function (e) {
                    if (e.hasOwnProperty('name')) return e.name;
                    var t = ('' + e).match(/^function\s*([^\s(]+)/);
                    return null === t ? '' : t[1];
                  })(e);
                  return (
                    console.warn(
                      'DEPRECATED: DI is instantiating a token "'
                        .concat(
                          n,
                          '" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "'
                        )
                        .concat(n, '" class.')
                    ),
                    t
                  );
                }
                return null;
              })(e);
              return null !== r
                ? function () {
                    return r.factory(e);
                  }
                : function () {
                    return new e();
                  };
            })(e);
          throw new Error('unreachable');
        }
        function xi(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return { factory: e, value: t, multi: n ? [] : void 0 };
        }
        function Oi(e) {
          return null !== e && 'object' == typeof e && Ye in e;
        }
        function Ii(e) {
          return 'function' == typeof e;
        }
        var Ai = function (e, t, n) {
            return (function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : null,
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = Ti(e, t, n, r);
              return i._resolveInjectorDefTypes(), i;
            })({ name: n }, t, e, n);
          },
          Ni = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, null, [
                  {
                    key: 'create',
                    value: function (e, t) {
                      return Array.isArray(e)
                        ? Ai(e, t, '')
                        : Ai(e.providers, e.parent, e.name || '');
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.THROW_IF_NOT_FOUND = Xe),
              (e.NULL = new at()),
              (e.ɵprov = ke({
                token: e,
                providedIn: 'any',
                factory: function () {
                  return rt(Ke);
                },
              })),
              (e.__NG_ELEMENT_ID__ = -1),
              e
            );
          })();
        function Mi(e, t, n) {
          var r = n ? e.styles : null,
            i = n ? e.classes : null,
            o = 0;
          if (null !== t)
            for (var a = 0; a < t.length; a++) {
              var s = t[a];
              'number' == typeof s
                ? (o = s)
                : 1 == o
                ? (i = Ne(i, s))
                : 2 == o && (r = Ne(r, s + ': ' + t[++a] + ';'));
            }
          n ? (e.styles = r) : (e.stylesWithoutHost = r),
            n ? (e.classes = i) : (e.classesWithoutHost = i);
        }
        function Di(e, t) {
          var n = Ut(e)[1],
            r = n.data.length - 1;
          gn(n, { directiveStart: r, directiveEnd: r + 1 });
        }
        var Ri = null;
        function Pi() {
          if (!Ri) {
            var e = ze.Symbol;
            if (e && e.iterator) Ri = e.iterator;
            else
              for (
                var t = Object.getOwnPropertyNames(Map.prototype), n = 0;
                n < t.length;
                ++n
              ) {
                var r = t[n];
                'entries' !== r &&
                  'size' !== r &&
                  Map.prototype[r] === Map.prototype.entries &&
                  (Ri = r);
              }
          }
          return Ri;
        }
        function Hi(e) {
          return (
            !!ji(e) && (Array.isArray(e) || (!(e instanceof Map) && Pi() in e))
          );
        }
        function ji(e) {
          return null !== e && ('function' == typeof e || 'object' == typeof e);
        }
        function Li(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ge.Default,
            n = Yt();
          return null === n ? rt(e, t) : Bn(en(), n, Re(e), t);
        }
        function Fi(e, t, n) {
          var r,
            i = Yt();
          return (
            (function (e, t, n) {
              return !Object.is(e[t], n) && ((e[t] = n), !0);
            })(i, Xt.lFrame.bindingIndex++, t) &&
              (function (e, t, n, r, i, o, a, s) {
                var u,
                  l,
                  c = Vt(t, n),
                  f = t.inputs;
                null != f && (u = f[r])
                  ? (Jr(e, n, u, r, i),
                    Ot(t) &&
                      (function (e, t) {
                        var n = Bt(t, e);
                        16 & n[2] || (n[2] |= 64);
                      })(n, t.index))
                  : 2 === t.type &&
                    ((r =
                      'class' === (l = r)
                        ? 'className'
                        : 'for' === l
                        ? 'htmlFor'
                        : 'formaction' === l
                        ? 'formAction'
                        : 'innerHtml' === l
                        ? 'innerHTML'
                        : 'readonly' === l
                        ? 'readOnly'
                        : 'tabindex' === l
                        ? 'tabIndex'
                        : l),
                    (i = null != a ? a(i, t.tagName || '', r) : i),
                    Lt(o)
                      ? o.setProperty(c, r, i)
                      : Sn(r) ||
                        (c.setProperty ? c.setProperty(r, i) : (c[r] = i)));
              })(
                $t(),
                Zt((r = Xt.lFrame).tView, r.selectedIndex),
                i,
                e,
                t,
                i[11],
                n
              ),
            Fi
          );
        }
        function zi(e, t, n, r, i) {
          var o = i ? 'class' : 'style';
          Jr(e, n, t.inputs[o], o, r);
        }
        function Vi(e) {
          return !!e && 'function' == typeof e.then;
        }
        var Zi = function e() {
            p(this, e);
          },
          Bi = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: 'resolveComponentFactory',
                  value: function (e) {
                    throw (function (e) {
                      var t = Error(
                        'No component factory found for '.concat(
                          Ae(e),
                          '. Did you add it to @NgModule.entryComponents?'
                        )
                      );
                      return (t.ngComponent = e), t;
                    })(e);
                  },
                },
              ]),
              e
            );
          })(),
          Ui = (function () {
            var e = function e() {
              p(this, e);
            };
            return (e.NULL = new Bi()), e;
          })(),
          qi = (function () {
            var e = function e(t) {
              p(this, e), (this.nativeElement = t);
            };
            return (
              (e.__NG_ELEMENT_ID__ = function () {
                return Wi(e);
              }),
              e
            );
          })(),
          Wi = function (e) {
            return pi(e, en(), Yt());
          },
          Gi = function e() {
            p(this, e);
          },
          Ji = (function (e) {
            return (
              (e[(e.Important = 1)] = 'Important'),
              (e[(e.DashCase = 2)] = 'DashCase'),
              e
            );
          })({}),
          Ki = (function () {
            var e = function e() {
              p(this, e);
            };
            return (
              (e.ɵprov = ke({
                token: e,
                providedIn: 'root',
                factory: function () {
                  return null;
                },
              })),
              e
            );
          })(),
          Xi = new (function e(t) {
            p(this, e),
              (this.full = t),
              (this.major = t.split('.')[0]),
              (this.minor = t.split('.')[1]),
              (this.patch = t.split('.').slice(2).join('.'));
          })('10.1.4'),
          Qi = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: 'supports',
                  value: function (e) {
                    return Hi(e);
                  },
                },
                {
                  key: 'create',
                  value: function (e) {
                    return new $i(e);
                  },
                },
              ]),
              e
            );
          })(),
          Yi = function (e, t) {
            return t;
          },
          $i = (function () {
            function e(t) {
              p(this, e),
                (this.length = 0),
                (this._linkedRecords = null),
                (this._unlinkedRecords = null),
                (this._previousItHead = null),
                (this._itHead = null),
                (this._itTail = null),
                (this._additionsHead = null),
                (this._additionsTail = null),
                (this._movesHead = null),
                (this._movesTail = null),
                (this._removalsHead = null),
                (this._removalsTail = null),
                (this._identityChangesHead = null),
                (this._identityChangesTail = null),
                (this._trackByFn = t || Yi);
            }
            return (
              m(e, [
                {
                  key: 'forEachItem',
                  value: function (e) {
                    var t;
                    for (t = this._itHead; null !== t; t = t._next) e(t);
                  },
                },
                {
                  key: 'forEachOperation',
                  value: function (e) {
                    for (
                      var t = this._itHead,
                        n = this._removalsHead,
                        r = 0,
                        i = null;
                      t || n;

                    ) {
                      var o = !n || (t && t.currentIndex < ro(n, r, i)) ? t : n,
                        a = ro(o, r, i),
                        s = o.currentIndex;
                      if (o === n) r--, (n = n._nextRemoved);
                      else if (((t = t._next), null == o.previousIndex)) r++;
                      else {
                        i || (i = []);
                        var u = a - r,
                          l = s - r;
                        if (u != l) {
                          for (var c = 0; c < u; c++) {
                            var f = c < i.length ? i[c] : (i[c] = 0),
                              h = f + c;
                            l <= h && h < u && (i[c] = f + 1);
                          }
                          i[o.previousIndex] = l - u;
                        }
                      }
                      a !== s && e(o, a, s);
                    }
                  },
                },
                {
                  key: 'forEachPreviousItem',
                  value: function (e) {
                    var t;
                    for (
                      t = this._previousItHead;
                      null !== t;
                      t = t._nextPrevious
                    )
                      e(t);
                  },
                },
                {
                  key: 'forEachAddedItem',
                  value: function (e) {
                    var t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded)
                      e(t);
                  },
                },
                {
                  key: 'forEachMovedItem',
                  value: function (e) {
                    var t;
                    for (t = this._movesHead; null !== t; t = t._nextMoved)
                      e(t);
                  },
                },
                {
                  key: 'forEachRemovedItem',
                  value: function (e) {
                    var t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved)
                      e(t);
                  },
                },
                {
                  key: 'forEachIdentityChange',
                  value: function (e) {
                    var t;
                    for (
                      t = this._identityChangesHead;
                      null !== t;
                      t = t._nextIdentityChange
                    )
                      e(t);
                  },
                },
                {
                  key: 'diff',
                  value: function (e) {
                    if ((null == e && (e = []), !Hi(e)))
                      throw new Error(
                        "Error trying to diff '".concat(
                          Ae(e),
                          "'. Only arrays and iterables are allowed"
                        )
                      );
                    return this.check(e) ? this : null;
                  },
                },
                { key: 'onDestroy', value: function () {} },
                {
                  key: 'check',
                  value: function (e) {
                    var t = this;
                    this._reset();
                    var n,
                      r,
                      i,
                      o = this._itHead,
                      a = !1;
                    if (Array.isArray(e)) {
                      this.length = e.length;
                      for (var s = 0; s < this.length; s++)
                        (r = e[s]),
                          (i = this._trackByFn(s, r)),
                          null !== o && Object.is(o.trackById, i)
                            ? (a && (o = this._verifyReinsertion(o, r, i, s)),
                              Object.is(o.item, r) ||
                                this._addIdentityChange(o, r))
                            : ((o = this._mismatch(o, r, i, s)), (a = !0)),
                          (o = o._next);
                    } else
                      (n = 0),
                        (function (e, t) {
                          if (Array.isArray(e))
                            for (var n = 0; n < e.length; n++) t(e[n]);
                          else
                            for (var r, i = e[Pi()](); !(r = i.next()).done; )
                              t(r.value);
                        })(e, function (e) {
                          (i = t._trackByFn(n, e)),
                            null !== o && Object.is(o.trackById, i)
                              ? (a && (o = t._verifyReinsertion(o, e, i, n)),
                                Object.is(o.item, e) ||
                                  t._addIdentityChange(o, e))
                              : ((o = t._mismatch(o, e, i, n)), (a = !0)),
                            (o = o._next),
                            n++;
                        }),
                        (this.length = n);
                    return (
                      this._truncate(o), (this.collection = e), this.isDirty
                    );
                  },
                },
                {
                  key: '_reset',
                  value: function () {
                    if (this.isDirty) {
                      var e;
                      for (
                        e = this._previousItHead = this._itHead;
                        null !== e;
                        e = e._next
                      )
                        e._nextPrevious = e._next;
                      for (
                        e = this._additionsHead;
                        null !== e;
                        e = e._nextAdded
                      )
                        e.previousIndex = e.currentIndex;
                      for (
                        this._additionsHead = this._additionsTail = null,
                          e = this._movesHead;
                        null !== e;
                        e = e._nextMoved
                      )
                        e.previousIndex = e.currentIndex;
                      (this._movesHead = this._movesTail = null),
                        (this._removalsHead = this._removalsTail = null),
                        (this._identityChangesHead = this._identityChangesTail =
                          null);
                    }
                  },
                },
                {
                  key: '_mismatch',
                  value: function (e, t, n, r) {
                    var i;
                    return (
                      null === e
                        ? (i = this._itTail)
                        : ((i = e._prev), this._remove(e)),
                      null !==
                      (e =
                        null === this._linkedRecords
                          ? null
                          : this._linkedRecords.get(n, r))
                        ? (Object.is(e.item, t) ||
                            this._addIdentityChange(e, t),
                          this._moveAfter(e, i, r))
                        : null !==
                          (e =
                            null === this._unlinkedRecords
                              ? null
                              : this._unlinkedRecords.get(n, null))
                        ? (Object.is(e.item, t) ||
                            this._addIdentityChange(e, t),
                          this._reinsertAfter(e, i, r))
                        : (e = this._addAfter(new eo(t, n), i, r)),
                      e
                    );
                  },
                },
                {
                  key: '_verifyReinsertion',
                  value: function (e, t, n, r) {
                    var i =
                      null === this._unlinkedRecords
                        ? null
                        : this._unlinkedRecords.get(n, null);
                    return (
                      null !== i
                        ? (e = this._reinsertAfter(i, e._prev, r))
                        : e.currentIndex != r &&
                          ((e.currentIndex = r), this._addToMoves(e, r)),
                      e
                    );
                  },
                },
                {
                  key: '_truncate',
                  value: function (e) {
                    for (; null !== e; ) {
                      var t = e._next;
                      this._addToRemovals(this._unlink(e)), (e = t);
                    }
                    null !== this._unlinkedRecords &&
                      this._unlinkedRecords.clear(),
                      null !== this._additionsTail &&
                        (this._additionsTail._nextAdded = null),
                      null !== this._movesTail &&
                        (this._movesTail._nextMoved = null),
                      null !== this._itTail && (this._itTail._next = null),
                      null !== this._removalsTail &&
                        (this._removalsTail._nextRemoved = null),
                      null !== this._identityChangesTail &&
                        (this._identityChangesTail._nextIdentityChange = null);
                  },
                },
                {
                  key: '_reinsertAfter',
                  value: function (e, t, n) {
                    null !== this._unlinkedRecords &&
                      this._unlinkedRecords.remove(e);
                    var r = e._prevRemoved,
                      i = e._nextRemoved;
                    return (
                      null === r
                        ? (this._removalsHead = i)
                        : (r._nextRemoved = i),
                      null === i
                        ? (this._removalsTail = r)
                        : (i._prevRemoved = r),
                      this._insertAfter(e, t, n),
                      this._addToMoves(e, n),
                      e
                    );
                  },
                },
                {
                  key: '_moveAfter',
                  value: function (e, t, n) {
                    return (
                      this._unlink(e),
                      this._insertAfter(e, t, n),
                      this._addToMoves(e, n),
                      e
                    );
                  },
                },
                {
                  key: '_addAfter',
                  value: function (e, t, n) {
                    return (
                      this._insertAfter(e, t, n),
                      (this._additionsTail =
                        null === this._additionsTail
                          ? (this._additionsHead = e)
                          : (this._additionsTail._nextAdded = e)),
                      e
                    );
                  },
                },
                {
                  key: '_insertAfter',
                  value: function (e, t, n) {
                    var r = null === t ? this._itHead : t._next;
                    return (
                      (e._next = r),
                      (e._prev = t),
                      null === r ? (this._itTail = e) : (r._prev = e),
                      null === t ? (this._itHead = e) : (t._next = e),
                      null === this._linkedRecords &&
                        (this._linkedRecords = new no()),
                      this._linkedRecords.put(e),
                      (e.currentIndex = n),
                      e
                    );
                  },
                },
                {
                  key: '_remove',
                  value: function (e) {
                    return this._addToRemovals(this._unlink(e));
                  },
                },
                {
                  key: '_unlink',
                  value: function (e) {
                    null !== this._linkedRecords &&
                      this._linkedRecords.remove(e);
                    var t = e._prev,
                      n = e._next;
                    return (
                      null === t ? (this._itHead = n) : (t._next = n),
                      null === n ? (this._itTail = t) : (n._prev = t),
                      e
                    );
                  },
                },
                {
                  key: '_addToMoves',
                  value: function (e, t) {
                    return (
                      e.previousIndex === t ||
                        (this._movesTail =
                          null === this._movesTail
                            ? (this._movesHead = e)
                            : (this._movesTail._nextMoved = e)),
                      e
                    );
                  },
                },
                {
                  key: '_addToRemovals',
                  value: function (e) {
                    return (
                      null === this._unlinkedRecords &&
                        (this._unlinkedRecords = new no()),
                      this._unlinkedRecords.put(e),
                      (e.currentIndex = null),
                      (e._nextRemoved = null),
                      null === this._removalsTail
                        ? ((this._removalsTail = this._removalsHead = e),
                          (e._prevRemoved = null))
                        : ((e._prevRemoved = this._removalsTail),
                          (this._removalsTail =
                            this._removalsTail._nextRemoved =
                              e)),
                      e
                    );
                  },
                },
                {
                  key: '_addIdentityChange',
                  value: function (e, t) {
                    return (
                      (e.item = t),
                      (this._identityChangesTail =
                        null === this._identityChangesTail
                          ? (this._identityChangesHead = e)
                          : (this._identityChangesTail._nextIdentityChange =
                              e)),
                      e
                    );
                  },
                },
                {
                  key: 'isDirty',
                  get: function () {
                    return (
                      null !== this._additionsHead ||
                      null !== this._movesHead ||
                      null !== this._removalsHead ||
                      null !== this._identityChangesHead
                    );
                  },
                },
              ]),
              e
            );
          })(),
          eo = function e(t, n) {
            p(this, e),
              (this.item = t),
              (this.trackById = n),
              (this.currentIndex = null),
              (this.previousIndex = null),
              (this._nextPrevious = null),
              (this._prev = null),
              (this._next = null),
              (this._prevDup = null),
              (this._nextDup = null),
              (this._prevRemoved = null),
              (this._nextRemoved = null),
              (this._nextAdded = null),
              (this._nextMoved = null),
              (this._nextIdentityChange = null);
          },
          to = (function () {
            function e() {
              p(this, e), (this._head = null), (this._tail = null);
            }
            return (
              m(e, [
                {
                  key: 'add',
                  value: function (e) {
                    null === this._head
                      ? ((this._head = this._tail = e),
                        (e._nextDup = null),
                        (e._prevDup = null))
                      : ((this._tail._nextDup = e),
                        (e._prevDup = this._tail),
                        (e._nextDup = null),
                        (this._tail = e));
                  },
                },
                {
                  key: 'get',
                  value: function (e, t) {
                    var n;
                    for (n = this._head; null !== n; n = n._nextDup)
                      if (
                        (null === t || t <= n.currentIndex) &&
                        Object.is(n.trackById, e)
                      )
                        return n;
                    return null;
                  },
                },
                {
                  key: 'remove',
                  value: function (e) {
                    var t = e._prevDup,
                      n = e._nextDup;
                    return (
                      null === t ? (this._head = n) : (t._nextDup = n),
                      null === n ? (this._tail = t) : (n._prevDup = t),
                      null === this._head
                    );
                  },
                },
              ]),
              e
            );
          })(),
          no = (function () {
            function e() {
              p(this, e), (this.map = new Map());
            }
            return (
              m(e, [
                {
                  key: 'put',
                  value: function (e) {
                    var t = e.trackById,
                      n = this.map.get(t);
                    n || ((n = new to()), this.map.set(t, n)), n.add(e);
                  },
                },
                {
                  key: 'get',
                  value: function (e, t) {
                    var n = this.map.get(e);
                    return n ? n.get(e, t) : null;
                  },
                },
                {
                  key: 'remove',
                  value: function (e) {
                    var t = e.trackById;
                    return this.map.get(t).remove(e) && this.map.delete(t), e;
                  },
                },
                {
                  key: 'clear',
                  value: function () {
                    this.map.clear();
                  },
                },
                {
                  key: 'isEmpty',
                  get: function () {
                    return 0 === this.map.size;
                  },
                },
              ]),
              e
            );
          })();
        function ro(e, t, n) {
          var r = e.previousIndex;
          if (null === r) return r;
          var i = 0;
          return n && r < n.length && (i = n[r]), r + t + i;
        }
        var io = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: 'supports',
                  value: function (e) {
                    return e instanceof Map || ji(e);
                  },
                },
                {
                  key: 'create',
                  value: function () {
                    return new oo();
                  },
                },
              ]),
              e
            );
          })(),
          oo = (function () {
            function e() {
              p(this, e),
                (this._records = new Map()),
                (this._mapHead = null),
                (this._appendAfter = null),
                (this._previousMapHead = null),
                (this._changesHead = null),
                (this._changesTail = null),
                (this._additionsHead = null),
                (this._additionsTail = null),
                (this._removalsHead = null),
                (this._removalsTail = null);
            }
            return (
              m(e, [
                {
                  key: 'forEachItem',
                  value: function (e) {
                    var t;
                    for (t = this._mapHead; null !== t; t = t._next) e(t);
                  },
                },
                {
                  key: 'forEachPreviousItem',
                  value: function (e) {
                    var t;
                    for (
                      t = this._previousMapHead;
                      null !== t;
                      t = t._nextPrevious
                    )
                      e(t);
                  },
                },
                {
                  key: 'forEachChangedItem',
                  value: function (e) {
                    var t;
                    for (t = this._changesHead; null !== t; t = t._nextChanged)
                      e(t);
                  },
                },
                {
                  key: 'forEachAddedItem',
                  value: function (e) {
                    var t;
                    for (t = this._additionsHead; null !== t; t = t._nextAdded)
                      e(t);
                  },
                },
                {
                  key: 'forEachRemovedItem',
                  value: function (e) {
                    var t;
                    for (t = this._removalsHead; null !== t; t = t._nextRemoved)
                      e(t);
                  },
                },
                {
                  key: 'diff',
                  value: function (e) {
                    if (e) {
                      if (!(e instanceof Map || ji(e)))
                        throw new Error(
                          "Error trying to diff '".concat(
                            Ae(e),
                            "'. Only maps and objects are allowed"
                          )
                        );
                    } else e = new Map();
                    return this.check(e) ? this : null;
                  },
                },
                { key: 'onDestroy', value: function () {} },
                {
                  key: 'check',
                  value: function (e) {
                    var t = this;
                    this._reset();
                    var n = this._mapHead;
                    if (
                      ((this._appendAfter = null),
                      this._forEach(e, function (e, r) {
                        if (n && n.key === r)
                          t._maybeAddToChanges(n, e),
                            (t._appendAfter = n),
                            (n = n._next);
                        else {
                          var i = t._getOrCreateRecordForKey(r, e);
                          n = t._insertBeforeOrAppend(n, i);
                        }
                      }),
                      n)
                    ) {
                      n._prev && (n._prev._next = null),
                        (this._removalsHead = n);
                      for (var r = n; null !== r; r = r._nextRemoved)
                        r === this._mapHead && (this._mapHead = null),
                          this._records.delete(r.key),
                          (r._nextRemoved = r._next),
                          (r.previousValue = r.currentValue),
                          (r.currentValue = null),
                          (r._prev = null),
                          (r._next = null);
                    }
                    return (
                      this._changesTail &&
                        (this._changesTail._nextChanged = null),
                      this._additionsTail &&
                        (this._additionsTail._nextAdded = null),
                      this.isDirty
                    );
                  },
                },
                {
                  key: '_insertBeforeOrAppend',
                  value: function (e, t) {
                    if (e) {
                      var n = e._prev;
                      return (
                        (t._next = e),
                        (t._prev = n),
                        (e._prev = t),
                        n && (n._next = t),
                        e === this._mapHead && (this._mapHead = t),
                        (this._appendAfter = e),
                        e
                      );
                    }
                    return (
                      this._appendAfter
                        ? ((this._appendAfter._next = t),
                          (t._prev = this._appendAfter))
                        : (this._mapHead = t),
                      (this._appendAfter = t),
                      null
                    );
                  },
                },
                {
                  key: '_getOrCreateRecordForKey',
                  value: function (e, t) {
                    if (this._records.has(e)) {
                      var n = this._records.get(e);
                      this._maybeAddToChanges(n, t);
                      var r = n._prev,
                        i = n._next;
                      return (
                        r && (r._next = i),
                        i && (i._prev = r),
                        (n._next = null),
                        (n._prev = null),
                        n
                      );
                    }
                    var o = new ao(e);
                    return (
                      this._records.set(e, o),
                      (o.currentValue = t),
                      this._addToAdditions(o),
                      o
                    );
                  },
                },
                {
                  key: '_reset',
                  value: function () {
                    if (this.isDirty) {
                      var e;
                      for (
                        this._previousMapHead = this._mapHead,
                          e = this._previousMapHead;
                        null !== e;
                        e = e._next
                      )
                        e._nextPrevious = e._next;
                      for (
                        e = this._changesHead;
                        null !== e;
                        e = e._nextChanged
                      )
                        e.previousValue = e.currentValue;
                      for (e = this._additionsHead; null != e; e = e._nextAdded)
                        e.previousValue = e.currentValue;
                      (this._changesHead = this._changesTail = null),
                        (this._additionsHead = this._additionsTail = null),
                        (this._removalsHead = null);
                    }
                  },
                },
                {
                  key: '_maybeAddToChanges',
                  value: function (e, t) {
                    Object.is(t, e.currentValue) ||
                      ((e.previousValue = e.currentValue),
                      (e.currentValue = t),
                      this._addToChanges(e));
                  },
                },
                {
                  key: '_addToAdditions',
                  value: function (e) {
                    null === this._additionsHead
                      ? (this._additionsHead = this._additionsTail = e)
                      : ((this._additionsTail._nextAdded = e),
                        (this._additionsTail = e));
                  },
                },
                {
                  key: '_addToChanges',
                  value: function (e) {
                    null === this._changesHead
                      ? (this._changesHead = this._changesTail = e)
                      : ((this._changesTail._nextChanged = e),
                        (this._changesTail = e));
                  },
                },
                {
                  key: '_forEach',
                  value: function (e, t) {
                    e instanceof Map
                      ? e.forEach(t)
                      : Object.keys(e).forEach(function (n) {
                          return t(e[n], n);
                        });
                  },
                },
                {
                  key: 'isDirty',
                  get: function () {
                    return (
                      null !== this._additionsHead ||
                      null !== this._changesHead ||
                      null !== this._removalsHead
                    );
                  },
                },
              ]),
              e
            );
          })(),
          ao = function e(t) {
            p(this, e),
              (this.key = t),
              (this.previousValue = null),
              (this.currentValue = null),
              (this._nextPrevious = null),
              (this._next = null),
              (this._prev = null),
              (this._nextAdded = null),
              (this._nextRemoved = null),
              (this._nextChanged = null);
          },
          so = (function () {
            var e = (function () {
              function e(t) {
                p(this, e), (this.factories = t);
              }
              return (
                m(
                  e,
                  [
                    {
                      key: 'find',
                      value: function (e) {
                        var t,
                          n = this.factories.find(function (t) {
                            return t.supports(e);
                          });
                        if (null != n) return n;
                        throw new Error(
                          "Cannot find a differ supporting object '"
                            .concat(e, "' of type '")
                            .concat((t = e).name || typeof t, "'")
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: 'create',
                      value: function (t, n) {
                        if (null != n) {
                          var r = n.factories.slice();
                          t = t.concat(r);
                        }
                        return new e(t);
                      },
                    },
                    {
                      key: 'extend',
                      value: function (t) {
                        return {
                          provide: e,
                          useFactory: function (n) {
                            if (!n)
                              throw new Error(
                                'Cannot extend IterableDiffers without a parent injector'
                              );
                            return e.create(t, n);
                          },
                          deps: [[e, new me(), new pe()]],
                        };
                      },
                    },
                  ]
                ),
                e
              );
            })();
            return (
              (e.ɵprov = ke({
                token: e,
                providedIn: 'root',
                factory: function () {
                  return new e([new Qi()]);
                },
              })),
              e
            );
          })(),
          uo = (function () {
            var e = (function () {
              function e(t) {
                p(this, e), (this.factories = t);
              }
              return (
                m(
                  e,
                  [
                    {
                      key: 'find',
                      value: function (e) {
                        var t = this.factories.find(function (t) {
                          return t.supports(e);
                        });
                        if (t) return t;
                        throw new Error(
                          "Cannot find a differ supporting object '".concat(
                            e,
                            "'"
                          )
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: 'create',
                      value: function (t, n) {
                        if (n) {
                          var r = n.factories.slice();
                          t = t.concat(r);
                        }
                        return new e(t);
                      },
                    },
                    {
                      key: 'extend',
                      value: function (t) {
                        return {
                          provide: e,
                          useFactory: function (n) {
                            if (!n)
                              throw new Error(
                                'Cannot extend KeyValueDiffers without a parent injector'
                              );
                            return e.create(t, n);
                          },
                          deps: [[e, new me(), new pe()]],
                        };
                      },
                    },
                  ]
                ),
                e
              );
            })();
            return (
              (e.ɵprov = ke({
                token: e,
                providedIn: 'root',
                factory: function () {
                  return new e([new io()]);
                },
              })),
              e
            );
          })(),
          lo = [new io()],
          co = new so([new Qi()]),
          fo = new uo(lo),
          ho = (function () {
            var e = function e() {
              p(this, e);
            };
            return (
              (e.__NG_ELEMENT_ID__ = function () {
                return vo(e, qi);
              }),
              e
            );
          })(),
          vo = function (e, t) {
            return yi(e, t, en(), Yt());
          },
          po = (function () {
            var e = function e() {
              p(this, e);
            };
            return (
              (e.__NG_ELEMENT_ID__ = function () {
                return yo(e, qi);
              }),
              e
            );
          })(),
          yo = function (e, t) {
            return mi(e, t, en(), Yt());
          },
          mo = {},
          go = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e) {
              var r;
              return p(this, n), ((r = t.call(this)).ngModule = e), r;
            }
            return (
              m(n, [
                {
                  key: 'resolveComponentFactory',
                  value: function (e) {
                    var t = wt(e);
                    return new bo(t, this.ngModule);
                  },
                },
              ]),
              n
            );
          })(Ui);
        function _o(e) {
          var t = [];
          for (var n in e)
            e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
          return t;
        }
        var ko = new Je('SCHEDULER_TOKEN', {
            providedIn: 'root',
            factory: function () {
              return Dn;
            },
          }),
          bo = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i;
              return (
                p(this, n),
                ((i = t.call(this)).componentDef = e),
                (i.ngModule = r),
                (i.componentType = e.type),
                (i.selector = e.selectors.map(hr).join(',')),
                (i.ngContentSelectors = e.ngContentSelectors
                  ? e.ngContentSelectors
                  : []),
                (i.isBoundToModule = !!r),
                i
              );
            }
            return (
              m(n, [
                {
                  key: 'create',
                  value: function (e, t, n, r) {
                    var i,
                      o,
                      a = (r = r || this.ngModule)
                        ? (function (e, t) {
                            return {
                              get: function (n, r, i) {
                                var o = e.get(n, mo, i);
                                return o !== mo || r === mo
                                  ? o
                                  : t.get(n, r, i);
                              },
                            };
                          })(e, r.injector)
                        : e,
                      s = a.get(Gi, Ft),
                      u = a.get(Ki, null),
                      l = s.createRenderer(null, this.componentDef),
                      c = this.componentDef.selectors[0][0] || 'div',
                      f = n
                        ? (function (e, t, n) {
                            if (Lt(e))
                              return e.selectRootElement(t, n === dt.ShadowDom);
                            var r =
                              'string' == typeof t ? e.querySelector(t) : t;
                            return (r.textContent = ''), r;
                          })(l, n, this.componentDef.encapsulation)
                        : _r(
                            c,
                            s.createRenderer(null, this.componentDef),
                            (function (e) {
                              var t = e.toLowerCase();
                              return 'svg' === t
                                ? 'http://www.w3.org/2000/svg'
                                : 'math' === t
                                ? 'http://www.w3.org/1998/MathML/'
                                : null;
                            })(c)
                          ),
                      h = this.componentDef.onPush ? 576 : 528,
                      d = {
                        components: [],
                        scheduler: Dn,
                        clean: Gr,
                        playerHandler: null,
                        flags: 0,
                      },
                      v = xr(0, null, null, 1, 0, null, null, null, null, null),
                      p = kr(null, v, d, h, null, null, s, l, u, a);
                    fn(p);
                    try {
                      var y = (function (e, t, n, r, i, o) {
                        var a = n[1];
                        n[20] = e;
                        var s = br(a, 0, 2, null, null),
                          u = (s.mergedAttrs = t.hostAttrs);
                        null !== u &&
                          (Mi(s, u, !0),
                          null !== e &&
                            (Cn(i, e, u),
                            null !== s.classes && li(i, e, s.classes),
                            null !== s.styles && ui(i, e, s.styles)));
                        var l = r.createRenderer(e, t),
                          c = kr(
                            n,
                            Sr(t),
                            null,
                            t.onPush ? 64 : 16,
                            n[20],
                            s,
                            r,
                            l,
                            null,
                            null
                          );
                        return (
                          a.firstCreatePass &&
                            (Zn(Ln(s, n), a, t.type),
                            Rr(a, s),
                            Hr(s, n.length, 1)),
                          Br(n, c),
                          (n[20] = c)
                        );
                      })(f, this.componentDef, p, s, l);
                      if (f)
                        if (n) Cn(l, f, ['ng-version', Xi.full]);
                        else {
                          var m = (function (e) {
                              for (
                                var t = [], n = [], r = 1, i = 2;
                                r < e.length;

                              ) {
                                var o = e[r];
                                if ('string' == typeof o)
                                  2 === i
                                    ? '' !== o && t.push(o, e[++r])
                                    : 8 === i && n.push(o);
                                else {
                                  if (!ur(i)) break;
                                  i = o;
                                }
                                r++;
                              }
                              return { attrs: t, classes: n };
                            })(this.componentDef.selectors[0]),
                            g = m.attrs,
                            _ = m.classes;
                          g && Cn(l, f, g),
                            _ && _.length > 0 && li(l, f, _.join(' '));
                        }
                      if (((o = Zt(v, 0)), void 0 !== t))
                        for (
                          var k = (o.projection = []), b = 0;
                          b < this.ngContentSelectors.length;
                          b++
                        ) {
                          var w = t[b];
                          k.push(null != w ? Array.from(w) : null);
                        }
                      (i = (function (e, t, n, r, i) {
                        var o = n[1],
                          a = (function (e, t, n) {
                            var r = en();
                            e.firstCreatePass &&
                              (n.providersResolver && n.providersResolver(n),
                              Dr(e, r, 1),
                              jr(e, t, n));
                            var i = Gn(t, e, t.length - 1, r);
                            nr(i, t);
                            var o = Vt(r, t);
                            return o && nr(o, t), i;
                          })(o, n, t);
                        r.components.push(a),
                          (e[8] = a),
                          i &&
                            i.forEach(function (e) {
                              return e(a, t);
                            }),
                          t.contentQueries &&
                            t.contentQueries(1, a, n.length - 1);
                        var s = en();
                        if (
                          o.firstCreatePass &&
                          (null !== t.hostBindings || null !== t.hostAttrs)
                        ) {
                          mn(s.index - 20);
                          var u = n[1];
                          Ar(u, t), Nr(u, n, t.hostVars), Mr(t, a);
                        }
                        return a;
                      })(y, this.componentDef, p, d, [Di])),
                        wr(v, p, null);
                    } finally {
                      yn();
                    }
                    return new wo(this.componentType, i, pi(qi, o, p), p, o);
                  },
                },
                {
                  key: 'inputs',
                  get: function () {
                    return _o(this.componentDef.inputs);
                  },
                },
                {
                  key: 'outputs',
                  get: function () {
                    return _o(this.componentDef.outputs);
                  },
                },
              ]),
              n
            );
          })(Zi),
          wo = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r, i, o, a) {
              var s;
              return (
                p(this, n),
                ((s = t.call(this)).location = i),
                (s._rootLView = o),
                (s._tNode = a),
                (s.destroyCbs = []),
                (s.instance = r),
                (s.hostView = s.changeDetectorRef = new vi(o)),
                (s.componentType = e),
                s
              );
            }
            return (
              m(n, [
                {
                  key: 'destroy',
                  value: function () {
                    this.destroyCbs &&
                      (this.destroyCbs.forEach(function (e) {
                        return e();
                      }),
                      (this.destroyCbs = null),
                      !this.hostView.destroyed && this.hostView.destroy());
                  },
                },
                {
                  key: 'onDestroy',
                  value: function (e) {
                    this.destroyCbs && this.destroyCbs.push(e);
                  },
                },
                {
                  key: 'injector',
                  get: function () {
                    return new Xn(this._tNode, this._rootLView);
                  },
                },
              ]),
              n
            );
          })(
            (function () {
              return function e() {
                p(this, e);
              };
            })()
          ),
          Eo = void 0,
          To = [
            'en',
            [['a', 'p'], ['AM', 'PM'], Eo],
            [['AM', 'PM'], Eo, Eo],
            [
              ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
              ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ],
              ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            ],
            Eo,
            [
              ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
              [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ],
            ],
            Eo,
            [
              ['B', 'A'],
              ['BC', 'AD'],
              ['Before Christ', 'Anno Domini'],
            ],
            0,
            [6, 0],
            ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
            ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
            ['{1}, {0}', Eo, "{1} 'at' {0}", Eo],
            [
              '.',
              ',',
              ';',
              '%',
              '+',
              '-',
              'E',
              '\xd7',
              '\u2030',
              '\u221e',
              'NaN',
              ':',
            ],
            ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
            'USD',
            '$',
            'US Dollar',
            {},
            'ltr',
            function (e) {
              var t = Math.floor(Math.abs(e)),
                n = e.toString().replace(/^[^.]*\.?/, '').length;
              return 1 === t && 0 === n ? 1 : 5;
            },
          ],
          Co = {};
        function So(e) {
          return (
            e in Co ||
              (Co[e] =
                ze.ng &&
                ze.ng.common &&
                ze.ng.common.locales &&
                ze.ng.common.locales[e]),
            Co[e]
          );
        }
        var xo = (function (e) {
          return (
            (e[(e.LocaleId = 0)] = 'LocaleId'),
            (e[(e.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
            (e[(e.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
            (e[(e.DaysFormat = 3)] = 'DaysFormat'),
            (e[(e.DaysStandalone = 4)] = 'DaysStandalone'),
            (e[(e.MonthsFormat = 5)] = 'MonthsFormat'),
            (e[(e.MonthsStandalone = 6)] = 'MonthsStandalone'),
            (e[(e.Eras = 7)] = 'Eras'),
            (e[(e.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
            (e[(e.WeekendRange = 9)] = 'WeekendRange'),
            (e[(e.DateFormat = 10)] = 'DateFormat'),
            (e[(e.TimeFormat = 11)] = 'TimeFormat'),
            (e[(e.DateTimeFormat = 12)] = 'DateTimeFormat'),
            (e[(e.NumberSymbols = 13)] = 'NumberSymbols'),
            (e[(e.NumberFormats = 14)] = 'NumberFormats'),
            (e[(e.CurrencyCode = 15)] = 'CurrencyCode'),
            (e[(e.CurrencySymbol = 16)] = 'CurrencySymbol'),
            (e[(e.CurrencyName = 17)] = 'CurrencyName'),
            (e[(e.Currencies = 18)] = 'Currencies'),
            (e[(e.Directionality = 19)] = 'Directionality'),
            (e[(e.PluralCase = 20)] = 'PluralCase'),
            (e[(e.ExtraData = 21)] = 'ExtraData'),
            e
          );
        })({});
        function Oo(e) {
          var t;
          null == (t = e) &&
            (function (e, t, n, r) {
              throw new Error(
                'ASSERTION ERROR: Expected localeId to be defined' +
                  ' [Expected=> null != '.concat(t, ' <=Actual]')
              );
            })(0, t),
            'string' == typeof e && e.toLowerCase().replace(/_/g, '-');
        }
        var Io = new Map(),
          Ao = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i;
              p(this, n),
                ((i = t.call(this))._parent = r),
                (i._bootstrapComponents = []),
                (i.injector = l(i)),
                (i.destroyCbs = []),
                (i.componentFactoryResolver = new go(l(i)));
              var o = Tt(e),
                a = e[qe] || null;
              return (
                a && Oo(a),
                (i._bootstrapComponents = Rn(o.bootstrap)),
                (i._r3Injector = Ti(
                  e,
                  r,
                  [
                    { provide: st, useValue: l(i) },
                    { provide: Ui, useValue: i.componentFactoryResolver },
                  ],
                  Ae(e)
                )),
                i._r3Injector._resolveInjectorDefTypes(),
                (i.instance = i.get(e)),
                i
              );
            }
            return (
              m(n, [
                {
                  key: 'get',
                  value: function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : Ni.THROW_IF_NOT_FOUND,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : ge.Default;
                    return e === Ni || e === st || e === Ke
                      ? this
                      : this._r3Injector.get(e, t, n);
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    var e = this._r3Injector;
                    !e.destroyed && e.destroy(),
                      this.destroyCbs.forEach(function (e) {
                        return e();
                      }),
                      (this.destroyCbs = null);
                  },
                },
                {
                  key: 'onDestroy',
                  value: function (e) {
                    this.destroyCbs.push(e);
                  },
                },
              ]),
              n
            );
          })(st),
          No = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e) {
              var r;
              return (
                p(this, n),
                ((r = t.call(this)).moduleType = e),
                null !== Tt(e) &&
                  (function e(t) {
                    if (null !== t.ɵmod.id) {
                      var n = t.ɵmod.id;
                      (function (e, t, n) {
                        if (t && t !== n)
                          throw new Error(
                            'Duplicate module registered for '
                              .concat(e, ' - ')
                              .concat(Ae(t), ' vs ')
                              .concat(Ae(t.name))
                          );
                      })(n, Io.get(n), t),
                        Io.set(n, t);
                    }
                    var r = t.ɵmod.imports;
                    r instanceof Function && (r = r()),
                      r &&
                        r.forEach(function (t) {
                          return e(t);
                        });
                  })(e),
                r
              );
            }
            return (
              m(n, [
                {
                  key: 'create',
                  value: function (e) {
                    return new Ao(this.moduleType, e);
                  },
                },
              ]),
              n
            );
          })(
            (function () {
              return function e() {
                p(this, e);
              };
            })()
          ),
          Mo = (function (e) {
            o(n, e);
            var t = s(n);
            function n() {
              var e,
                r =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              return p(this, n), ((e = t.call(this)).__isAsync = r), e;
            }
            return (
              m(n, [
                {
                  key: 'emit',
                  value: function (e) {
                    i(f(n.prototype), 'next', this).call(this, e);
                  },
                },
                {
                  key: 'subscribe',
                  value: function (e, t, r) {
                    var o,
                      a = function (e) {
                        return null;
                      },
                      s = function () {
                        return null;
                      };
                    e && 'object' == typeof e
                      ? ((o = this.__isAsync
                          ? function (t) {
                              setTimeout(function () {
                                return e.next(t);
                              });
                            }
                          : function (t) {
                              e.next(t);
                            }),
                        e.error &&
                          (a = this.__isAsync
                            ? function (t) {
                                setTimeout(function () {
                                  return e.error(t);
                                });
                              }
                            : function (t) {
                                e.error(t);
                              }),
                        e.complete &&
                          (s = this.__isAsync
                            ? function () {
                                setTimeout(function () {
                                  return e.complete();
                                });
                              }
                            : function () {
                                e.complete();
                              }))
                      : ((o = this.__isAsync
                          ? function (t) {
                              setTimeout(function () {
                                return e(t);
                              });
                            }
                          : function (t) {
                              e(t);
                            }),
                        t &&
                          (a = this.__isAsync
                            ? function (e) {
                                setTimeout(function () {
                                  return t(e);
                                });
                              }
                            : function (e) {
                                t(e);
                              }),
                        r &&
                          (s = this.__isAsync
                            ? function () {
                                setTimeout(function () {
                                  return r();
                                });
                              }
                            : function () {
                                r();
                              }));
                    var u = i(f(n.prototype), 'subscribe', this).call(
                      this,
                      o,
                      a,
                      s
                    );
                    return e instanceof T && e.add(u), u;
                  },
                },
              ]),
              n
            );
          })(L);
        function Do() {
          return this._results[Pi()]();
        }
        var Ro = (function () {
            function e() {
              p(this, e),
                (this.dirty = !0),
                (this._results = []),
                (this.changes = new Mo()),
                (this.length = 0);
              var t = Pi(),
                n = e.prototype;
              n[t] || (n[t] = Do);
            }
            return (
              m(e, [
                {
                  key: 'map',
                  value: function (e) {
                    return this._results.map(e);
                  },
                },
                {
                  key: 'filter',
                  value: function (e) {
                    return this._results.filter(e);
                  },
                },
                {
                  key: 'find',
                  value: function (e) {
                    return this._results.find(e);
                  },
                },
                {
                  key: 'reduce',
                  value: function (e, t) {
                    return this._results.reduce(e, t);
                  },
                },
                {
                  key: 'forEach',
                  value: function (e) {
                    this._results.forEach(e);
                  },
                },
                {
                  key: 'some',
                  value: function (e) {
                    return this._results.some(e);
                  },
                },
                {
                  key: 'toArray',
                  value: function () {
                    return this._results.slice();
                  },
                },
                {
                  key: 'toString',
                  value: function () {
                    return this._results.toString();
                  },
                },
                {
                  key: 'reset',
                  value: function (e) {
                    (this._results = (function e(t, n) {
                      void 0 === n && (n = t);
                      for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        Array.isArray(i)
                          ? (n === t && (n = t.slice(0, r)), e(i, n))
                          : n !== t && n.push(i);
                      }
                      return n;
                    })(e)),
                      (this.dirty = !1),
                      (this.length = this._results.length),
                      (this.last = this._results[this.length - 1]),
                      (this.first = this._results[0]);
                  },
                },
                {
                  key: 'notifyOnChanges',
                  value: function () {
                    this.changes.emit(this);
                  },
                },
                {
                  key: 'setDirty',
                  value: function () {
                    this.dirty = !0;
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    this.changes.complete(), this.changes.unsubscribe();
                  },
                },
              ]),
              e
            );
          })(),
          Po = (function () {
            function e(t) {
              p(this, e), (this.queryList = t), (this.matches = null);
            }
            return (
              m(e, [
                {
                  key: 'clone',
                  value: function () {
                    return new e(this.queryList);
                  },
                },
                {
                  key: 'setDirty',
                  value: function () {
                    this.queryList.setDirty();
                  },
                },
              ]),
              e
            );
          })(),
          Ho = (function () {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              p(this, e), (this.queries = t);
            }
            return (
              m(e, [
                {
                  key: 'createEmbeddedView',
                  value: function (t) {
                    var n = t.queries;
                    if (null !== n) {
                      for (
                        var r =
                            null !== t.contentQueries
                              ? t.contentQueries[0]
                              : n.length,
                          i = [],
                          o = 0;
                        o < r;
                        o++
                      ) {
                        var a = n.getByIndex(o);
                        i.push(this.queries[a.indexInDeclarationView].clone());
                      }
                      return new e(i);
                    }
                    return null;
                  },
                },
                {
                  key: 'insertView',
                  value: function (e) {
                    this.dirtyQueriesWithMatches(e);
                  },
                },
                {
                  key: 'detachView',
                  value: function (e) {
                    this.dirtyQueriesWithMatches(e);
                  },
                },
                {
                  key: 'dirtyQueriesWithMatches',
                  value: function (e) {
                    for (var t = 0; t < this.queries.length; t++)
                      null !== Bo(e, t).matches && this.queries[t].setDirty();
                  },
                },
              ]),
              e
            );
          })(),
          jo = function e(t, n, r) {
            var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            p(this, e),
              (this.predicate = t),
              (this.descendants = n),
              (this.isStatic = r),
              (this.read = i);
          },
          Lo = (function () {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              p(this, e), (this.queries = t);
            }
            return (
              m(e, [
                {
                  key: 'elementStart',
                  value: function (e, t) {
                    for (var n = 0; n < this.queries.length; n++)
                      this.queries[n].elementStart(e, t);
                  },
                },
                {
                  key: 'elementEnd',
                  value: function (e) {
                    for (var t = 0; t < this.queries.length; t++)
                      this.queries[t].elementEnd(e);
                  },
                },
                {
                  key: 'embeddedTView',
                  value: function (t) {
                    for (var n = null, r = 0; r < this.length; r++) {
                      var i = null !== n ? n.length : 0,
                        o = this.getByIndex(r).embeddedTView(t, i);
                      o &&
                        ((o.indexInDeclarationView = r),
                        null !== n ? n.push(o) : (n = [o]));
                    }
                    return null !== n ? new e(n) : null;
                  },
                },
                {
                  key: 'template',
                  value: function (e, t) {
                    for (var n = 0; n < this.queries.length; n++)
                      this.queries[n].template(e, t);
                  },
                },
                {
                  key: 'getByIndex',
                  value: function (e) {
                    return this.queries[e];
                  },
                },
                {
                  key: 'track',
                  value: function (e) {
                    this.queries.push(e);
                  },
                },
                {
                  key: 'length',
                  get: function () {
                    return this.queries.length;
                  },
                },
              ]),
              e
            );
          })(),
          Fo = (function () {
            function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : -1;
              p(this, e),
                (this.metadata = t),
                (this.matches = null),
                (this.indexInDeclarationView = -1),
                (this.crossesNgTemplate = !1),
                (this._appliesToNextNode = !0),
                (this._declarationNodeIndex = n);
            }
            return (
              m(e, [
                {
                  key: 'elementStart',
                  value: function (e, t) {
                    this.isApplyingToNode(t) && this.matchTNode(e, t);
                  },
                },
                {
                  key: 'elementEnd',
                  value: function (e) {
                    this._declarationNodeIndex === e.index &&
                      (this._appliesToNextNode = !1);
                  },
                },
                {
                  key: 'template',
                  value: function (e, t) {
                    this.elementStart(e, t);
                  },
                },
                {
                  key: 'embeddedTView',
                  value: function (t, n) {
                    return this.isApplyingToNode(t)
                      ? ((this.crossesNgTemplate = !0),
                        this.addMatch(-t.index, n),
                        new e(this.metadata))
                      : null;
                  },
                },
                {
                  key: 'isApplyingToNode',
                  value: function (e) {
                    if (
                      this._appliesToNextNode &&
                      !1 === this.metadata.descendants
                    ) {
                      for (
                        var t = this._declarationNodeIndex, n = e.parent;
                        null !== n && 3 === n.type && n.index !== t;

                      )
                        n = n.parent;
                      return t === (null !== n ? n.index : -1);
                    }
                    return this._appliesToNextNode;
                  },
                },
                {
                  key: 'matchTNode',
                  value: function (e, t) {
                    var n = this.metadata.predicate;
                    if (Array.isArray(n))
                      for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        this.matchTNodeWithReadOption(e, t, zo(t, i)),
                          this.matchTNodeWithReadOption(
                            e,
                            t,
                            Wn(t, e, i, !1, !1)
                          );
                      }
                    else
                      n === ho
                        ? 0 === t.type &&
                          this.matchTNodeWithReadOption(e, t, -1)
                        : this.matchTNodeWithReadOption(
                            e,
                            t,
                            Wn(t, e, n, !1, !1)
                          );
                  },
                },
                {
                  key: 'matchTNodeWithReadOption',
                  value: function (e, t, n) {
                    if (null !== n) {
                      var r = this.metadata.read;
                      if (null !== r)
                        if (r === qi || r === po || (r === ho && 0 === t.type))
                          this.addMatch(t.index, -2);
                        else {
                          var i = Wn(t, e, r, !1, !1);
                          null !== i && this.addMatch(t.index, i);
                        }
                      else this.addMatch(t.index, n);
                    }
                  },
                },
                {
                  key: 'addMatch',
                  value: function (e, t) {
                    null === this.matches
                      ? (this.matches = [e, t])
                      : this.matches.push(e, t);
                  },
                },
              ]),
              e
            );
          })();
        function zo(e, t) {
          var n = e.localNames;
          if (null !== n)
            for (var r = 0; r < n.length; r += 2)
              if (n[r] === t) return n[r + 1];
          return null;
        }
        function Vo(e, t, n, r) {
          return -1 === n
            ? (function (e, t) {
                return 2 === e.type || 3 === e.type
                  ? pi(qi, e, t)
                  : 0 === e.type
                  ? yi(ho, qi, e, t)
                  : null;
              })(t, e)
            : -2 === n
            ? (function (e, t, n) {
                return n === qi
                  ? pi(qi, t, e)
                  : n === ho
                  ? yi(ho, qi, t, e)
                  : n === po
                  ? mi(po, qi, t, e)
                  : void 0;
              })(e, t, r)
            : Gn(e, e[1], n, t);
        }
        function Zo(e, t, n, r) {
          var i = t[19].queries[r];
          if (null === i.matches) {
            for (
              var o = e.data, a = n.matches, s = [], u = 0;
              u < a.length;
              u += 2
            ) {
              var l = a[u];
              s.push(l < 0 ? null : Vo(t, o[l], a[u + 1], n.metadata.read));
            }
            i.matches = s;
          }
          return i.matches;
        }
        function Bo(e, t) {
          return e.queries.getByIndex(t);
        }
        var Uo = new Je('Application Initializer'),
          qo = (function () {
            var e = (function () {
              function e(t) {
                var n = this;
                p(this, e),
                  (this.appInits = t),
                  (this.initialized = !1),
                  (this.done = !1),
                  (this.donePromise = new Promise(function (e, t) {
                    (n.resolve = e), (n.reject = t);
                  }));
              }
              return (
                m(e, [
                  {
                    key: 'runInitializers',
                    value: function () {
                      var e = this;
                      if (!this.initialized) {
                        var t = [],
                          n = function () {
                            (e.done = !0), e.resolve();
                          };
                        if (this.appInits)
                          for (var r = 0; r < this.appInits.length; r++) {
                            var i = this.appInits[r]();
                            Vi(i) && t.push(i);
                          }
                        Promise.all(t)
                          .then(function () {
                            n();
                          })
                          .catch(function (t) {
                            e.reject(t);
                          }),
                          0 === t.length && n(),
                          (this.initialized = !0);
                      }
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(rt(Uo, 8));
              }),
              (e.ɵprov = ke({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          Wo = new Je('AppId'),
          Go = {
            provide: Wo,
            useFactory: function () {
              return ''.concat(Jo()).concat(Jo()).concat(Jo());
            },
            deps: [],
          };
        function Jo() {
          return String.fromCharCode(97 + Math.floor(25 * Math.random()));
        }
        var Ko = new Je('Platform Initializer'),
          Xo = new Je('Platform ID'),
          Qo = new Je('appBootstrapListener'),
          Yo = (function () {
            var e = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, [
                  {
                    key: 'log',
                    value: function (e) {
                      console.log(e);
                    },
                  },
                  {
                    key: 'warn',
                    value: function (e) {
                      console.warn(e);
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = ke({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          $o = new Je('LocaleId'),
          ea = new Je('DefaultCurrencyCode'),
          ta = function e(t, n) {
            p(this, e),
              (this.ngModuleFactory = t),
              (this.componentFactories = n);
          },
          na = function (e) {
            return new No(e);
          },
          ra = na,
          ia = function (e) {
            return Promise.resolve(na(e));
          },
          oa = function (e) {
            var t = na(e),
              n = Rn(Tt(e).declarations).reduce(function (e, t) {
                var n = wt(t);
                return n && e.push(new bo(n)), e;
              }, []);
            return new ta(t, n);
          },
          aa = oa,
          sa = function (e) {
            return Promise.resolve(oa(e));
          },
          ua = (function () {
            var e = (function () {
              function e() {
                p(this, e),
                  (this.compileModuleSync = ra),
                  (this.compileModuleAsync = ia),
                  (this.compileModuleAndAllComponentsSync = aa),
                  (this.compileModuleAndAllComponentsAsync = sa);
              }
              return (
                m(e, [
                  { key: 'clearCache', value: function () {} },
                  { key: 'clearCacheFor', value: function (e) {} },
                  { key: 'getModuleId', value: function (e) {} },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = ke({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          la = Promise.resolve(0);
        function ca(e) {
          'undefined' == typeof Zone
            ? la.then(function () {
                e && e.apply(null, null);
              })
            : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
        }
        var fa = (function () {
          function e(t) {
            var n,
              r,
              i = t.enableLongStackTrace,
              o = void 0 !== i && i,
              a = t.shouldCoalesceEventChangeDetection,
              s = void 0 !== a && a;
            if (
              (p(this, e),
              (this.hasPendingMacrotasks = !1),
              (this.hasPendingMicrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new Mo(!1)),
              (this.onMicrotaskEmpty = new Mo(!1)),
              (this.onStable = new Mo(!1)),
              (this.onError = new Mo(!1)),
              'undefined' == typeof Zone)
            )
              throw new Error('In this configuration Angular requires Zone.js');
            Zone.assertZonePatched(),
              (this._nesting = 0),
              (this._outer = this._inner = Zone.current),
              Zone.wtfZoneSpec &&
                (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
              Zone.TaskTrackingZoneSpec &&
                (this._inner = this._inner.fork(
                  new Zone.TaskTrackingZoneSpec()
                )),
              o &&
                Zone.longStackTraceZoneSpec &&
                (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
              (this.shouldCoalesceEventChangeDetection = s),
              (this.lastRequestAnimationFrameId = -1),
              (this.nativeRequestAnimationFrame = (function () {
                var e = ze.requestAnimationFrame,
                  t = ze.cancelAnimationFrame;
                if ('undefined' != typeof Zone && e && t) {
                  var n = e[Zone.__symbol__('OriginalDelegate')];
                  n && (e = n);
                  var r = t[Zone.__symbol__('OriginalDelegate')];
                  r && (t = r);
                }
                return {
                  nativeRequestAnimationFrame: e,
                  nativeCancelAnimationFrame: t,
                };
              })().nativeRequestAnimationFrame),
              (r =
                !!(n = this).shouldCoalesceEventChangeDetection &&
                n.nativeRequestAnimationFrame &&
                function () {
                  !(function (e) {
                    -1 === e.lastRequestAnimationFrameId &&
                      ((e.lastRequestAnimationFrameId =
                        e.nativeRequestAnimationFrame.call(ze, function () {
                          e.fakeTopEventTask ||
                            (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                              'fakeTopEventTask',
                              function () {
                                (e.lastRequestAnimationFrameId = -1),
                                  pa(e),
                                  va(e);
                              },
                              void 0,
                              function () {},
                              function () {}
                            )),
                            e.fakeTopEventTask.invoke();
                        })),
                      pa(e));
                  })(n);
                }),
              (n._inner = n._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0, maybeDelayChangeDetection: r },
                onInvokeTask: function (e, t, i, o, a, s) {
                  try {
                    return ya(n), e.invokeTask(i, o, a, s);
                  } finally {
                    r && 'eventTask' === o.type && r(), ma(n);
                  }
                },
                onInvoke: function (e, t, r, i, o, a, s) {
                  try {
                    return ya(n), e.invoke(r, i, o, a, s);
                  } finally {
                    ma(n);
                  }
                },
                onHasTask: function (e, t, r, i) {
                  e.hasTask(r, i),
                    t === r &&
                      ('microTask' == i.change
                        ? ((n._hasPendingMicrotasks = i.microTask),
                          pa(n),
                          va(n))
                        : 'macroTask' == i.change &&
                          (n.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: function (e, t, r, i) {
                  return (
                    e.handleError(r, i),
                    n.runOutsideAngular(function () {
                      return n.onError.emit(i);
                    }),
                    !1
                  );
                },
              }));
          }
          return (
            m(
              e,
              [
                {
                  key: 'run',
                  value: function (e, t, n) {
                    return this._inner.run(e, t, n);
                  },
                },
                {
                  key: 'runTask',
                  value: function (e, t, n, r) {
                    var i = this._inner,
                      o = i.scheduleEventTask(
                        'NgZoneEvent: ' + r,
                        e,
                        da,
                        ha,
                        ha
                      );
                    try {
                      return i.runTask(o, t, n);
                    } finally {
                      i.cancelTask(o);
                    }
                  },
                },
                {
                  key: 'runGuarded',
                  value: function (e, t, n) {
                    return this._inner.runGuarded(e, t, n);
                  },
                },
                {
                  key: 'runOutsideAngular',
                  value: function (e) {
                    return this._outer.run(e);
                  },
                },
              ],
              [
                {
                  key: 'isInAngularZone',
                  value: function () {
                    return !0 === Zone.current.get('isAngularZone');
                  },
                },
                {
                  key: 'assertInAngularZone',
                  value: function () {
                    if (!e.isInAngularZone())
                      throw new Error(
                        'Expected to be in Angular Zone, but it is not!'
                      );
                  },
                },
                {
                  key: 'assertNotInAngularZone',
                  value: function () {
                    if (e.isInAngularZone())
                      throw new Error(
                        'Expected to not be in Angular Zone, but it is!'
                      );
                  },
                },
              ]
            ),
            e
          );
        })();
        function ha() {}
        var da = {};
        function va(e) {
          if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
            try {
              e._nesting++, e.onMicrotaskEmpty.emit(null);
            } finally {
              if ((e._nesting--, !e.hasPendingMicrotasks))
                try {
                  e.runOutsideAngular(function () {
                    return e.onStable.emit(null);
                  });
                } finally {
                  e.isStable = !0;
                }
            }
        }
        function pa(e) {
          e.hasPendingMicrotasks = !!(
            e._hasPendingMicrotasks ||
            (e.shouldCoalesceEventChangeDetection &&
              -1 !== e.lastRequestAnimationFrameId)
          );
        }
        function ya(e) {
          e._nesting++,
            e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
        }
        function ma(e) {
          e._nesting--, va(e);
        }
        var ga,
          _a = (function () {
            function e() {
              p(this, e),
                (this.hasPendingMicrotasks = !1),
                (this.hasPendingMacrotasks = !1),
                (this.isStable = !0),
                (this.onUnstable = new Mo()),
                (this.onMicrotaskEmpty = new Mo()),
                (this.onStable = new Mo()),
                (this.onError = new Mo());
            }
            return (
              m(e, [
                {
                  key: 'run',
                  value: function (e, t, n) {
                    return e.apply(t, n);
                  },
                },
                {
                  key: 'runGuarded',
                  value: function (e, t, n) {
                    return e.apply(t, n);
                  },
                },
                {
                  key: 'runOutsideAngular',
                  value: function (e) {
                    return e();
                  },
                },
                {
                  key: 'runTask',
                  value: function (e, t, n, r) {
                    return e.apply(t, n);
                  },
                },
              ]),
              e
            );
          })(),
          ka = (function () {
            var e = (function () {
              function e(t) {
                var n = this;
                p(this, e),
                  (this._ngZone = t),
                  (this._pendingCount = 0),
                  (this._isZoneStable = !0),
                  (this._didWork = !1),
                  (this._callbacks = []),
                  (this.taskTrackingZone = null),
                  this._watchAngularEvents(),
                  t.run(function () {
                    n.taskTrackingZone =
                      'undefined' == typeof Zone
                        ? null
                        : Zone.current.get('TaskTrackingZone');
                  });
              }
              return (
                m(e, [
                  {
                    key: '_watchAngularEvents',
                    value: function () {
                      var e = this;
                      this._ngZone.onUnstable.subscribe({
                        next: function () {
                          (e._didWork = !0), (e._isZoneStable = !1);
                        },
                      }),
                        this._ngZone.runOutsideAngular(function () {
                          e._ngZone.onStable.subscribe({
                            next: function () {
                              fa.assertNotInAngularZone(),
                                ca(function () {
                                  (e._isZoneStable = !0),
                                    e._runCallbacksIfReady();
                                });
                            },
                          });
                        });
                    },
                  },
                  {
                    key: 'increasePendingRequestCount',
                    value: function () {
                      return (
                        (this._pendingCount += 1),
                        (this._didWork = !0),
                        this._pendingCount
                      );
                    },
                  },
                  {
                    key: 'decreasePendingRequestCount',
                    value: function () {
                      if (((this._pendingCount -= 1), this._pendingCount < 0))
                        throw new Error('pending async requests below zero');
                      return this._runCallbacksIfReady(), this._pendingCount;
                    },
                  },
                  {
                    key: 'isStable',
                    value: function () {
                      return (
                        this._isZoneStable &&
                        0 === this._pendingCount &&
                        !this._ngZone.hasPendingMacrotasks
                      );
                    },
                  },
                  {
                    key: '_runCallbacksIfReady',
                    value: function () {
                      var e = this;
                      if (this.isStable())
                        ca(function () {
                          for (; 0 !== e._callbacks.length; ) {
                            var t = e._callbacks.pop();
                            clearTimeout(t.timeoutId), t.doneCb(e._didWork);
                          }
                          e._didWork = !1;
                        });
                      else {
                        var t = this.getPendingTasks();
                        (this._callbacks = this._callbacks.filter(function (e) {
                          return (
                            !e.updateCb ||
                            !e.updateCb(t) ||
                            (clearTimeout(e.timeoutId), !1)
                          );
                        })),
                          (this._didWork = !0);
                      }
                    },
                  },
                  {
                    key: 'getPendingTasks',
                    value: function () {
                      return this.taskTrackingZone
                        ? this.taskTrackingZone.macroTasks.map(function (e) {
                            return {
                              source: e.source,
                              creationLocation: e.creationLocation,
                              data: e.data,
                            };
                          })
                        : [];
                    },
                  },
                  {
                    key: 'addCallback',
                    value: function (e, t, n) {
                      var r = this,
                        i = -1;
                      t &&
                        t > 0 &&
                        (i = setTimeout(function () {
                          (r._callbacks = r._callbacks.filter(function (e) {
                            return e.timeoutId !== i;
                          })),
                            e(r._didWork, r.getPendingTasks());
                        }, t)),
                        this._callbacks.push({
                          doneCb: e,
                          timeoutId: i,
                          updateCb: n,
                        });
                    },
                  },
                  {
                    key: 'whenStable',
                    value: function (e, t, n) {
                      if (n && !this.taskTrackingZone)
                        throw new Error(
                          'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                        );
                      this.addCallback(e, t, n), this._runCallbacksIfReady();
                    },
                  },
                  {
                    key: 'getPendingRequestCount',
                    value: function () {
                      return this._pendingCount;
                    },
                  },
                  {
                    key: 'findProviders',
                    value: function (e, t, n) {
                      return [];
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(rt(fa));
              }),
              (e.ɵprov = ke({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          ba = (function () {
            var e = (function () {
              function e() {
                p(this, e),
                  (this._applications = new Map()),
                  wa.addToWindow(this);
              }
              return (
                m(e, [
                  {
                    key: 'registerApplication',
                    value: function (e, t) {
                      this._applications.set(e, t);
                    },
                  },
                  {
                    key: 'unregisterApplication',
                    value: function (e) {
                      this._applications.delete(e);
                    },
                  },
                  {
                    key: 'unregisterAllApplications',
                    value: function () {
                      this._applications.clear();
                    },
                  },
                  {
                    key: 'getTestability',
                    value: function (e) {
                      return this._applications.get(e) || null;
                    },
                  },
                  {
                    key: 'getAllTestabilities',
                    value: function () {
                      return Array.from(this._applications.values());
                    },
                  },
                  {
                    key: 'getAllRootElements',
                    value: function () {
                      return Array.from(this._applications.keys());
                    },
                  },
                  {
                    key: 'findTestabilityInTree',
                    value: function (e) {
                      var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                      return wa.findTestabilityInTree(this, e, t);
                    },
                  },
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵprov = ke({ token: e, factory: e.ɵfac })),
              e
            );
          })(),
          wa = new ((function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                { key: 'addToWindow', value: function (e) {} },
                {
                  key: 'findTestabilityInTree',
                  value: function (e, t, n) {
                    return null;
                  },
                },
              ]),
              e
            );
          })())(),
          Ea = new Je('AllowMultipleToken');
        function Ta(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : [],
            r = 'Platform: ' + t,
            i = new Je(r);
          return function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              o = Ca();
            if (!o || o.injector.get(Ea, !1))
              if (e) e(n.concat(t).concat({ provide: i, useValue: !0 }));
              else {
                var a = n
                  .concat(t)
                  .concat(
                    { provide: i, useValue: !0 },
                    { provide: gi, useValue: 'platform' }
                  );
                !(function (e) {
                  if (ga && !ga.destroyed && !ga.injector.get(Ea, !1))
                    throw new Error(
                      'There can be only one platform. Destroy the previous one to create a new one.'
                    );
                  ga = e.get(Sa);
                  var t = e.get(Ko, null);
                  t &&
                    t.forEach(function (e) {
                      return e();
                    });
                })(Ni.create({ providers: a, name: r }));
              }
            return (function (e) {
              var t = Ca();
              if (!t) throw new Error('No platform exists!');
              if (!t.injector.get(e, null))
                throw new Error(
                  'A platform with a different configuration has been created. Please destroy it first.'
                );
              return t;
            })(i);
          };
        }
        function Ca() {
          return ga && !ga.destroyed ? ga : null;
        }
        var Sa = (function () {
          var e = (function () {
            function e(t) {
              p(this, e),
                (this._injector = t),
                (this._modules = []),
                (this._destroyListeners = []),
                (this._destroyed = !1);
            }
            return (
              m(e, [
                {
                  key: 'bootstrapModuleFactory',
                  value: function (e, t) {
                    var n,
                      r,
                      i = this,
                      o =
                        ((n = t ? t.ngZone : void 0),
                        (r = (t && t.ngZoneEventCoalescing) || !1),
                        'noop' === n
                          ? new _a()
                          : ('zone.js' === n ? void 0 : n) ||
                            new fa({
                              enableLongStackTrace: tr(),
                              shouldCoalesceEventChangeDetection: r,
                            })),
                      a = [{ provide: fa, useValue: o }];
                    return o.run(function () {
                      var t = Ni.create({
                          providers: a,
                          parent: i.injector,
                          name: e.moduleType.name,
                        }),
                        n = e.create(t),
                        r = n.injector.get(er, null);
                      if (!r)
                        throw new Error(
                          'No ErrorHandler. Is platform module (BrowserModule) included?'
                        );
                      return (
                        n.onDestroy(function () {
                          return Aa(i._modules, n);
                        }),
                        o.runOutsideAngular(function () {
                          return o.onError.subscribe({
                            next: function (e) {
                              r.handleError(e);
                            },
                          });
                        }),
                        (function (e, t, r) {
                          try {
                            var o =
                              ((a = n.injector.get(qo)).runInitializers(),
                              a.donePromise.then(function () {
                                return (
                                  Oo(n.injector.get($o, 'en-US') || 'en-US'),
                                  i._moduleDoBootstrap(n),
                                  n
                                );
                              }));
                            return Vi(o)
                              ? o.catch(function (n) {
                                  throw (
                                    (t.runOutsideAngular(function () {
                                      return e.handleError(n);
                                    }),
                                    n)
                                  );
                                })
                              : o;
                          } catch (s) {
                            throw (
                              (t.runOutsideAngular(function () {
                                return e.handleError(s);
                              }),
                              s)
                            );
                          }
                          var a;
                        })(r, o)
                      );
                    });
                  },
                },
                {
                  key: 'bootstrapModule',
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      r = xa({}, n);
                    return (function (e, t, n) {
                      var r = new No(n);
                      return Promise.resolve(r);
                    })(0, 0, e).then(function (e) {
                      return t.bootstrapModuleFactory(e, r);
                    });
                  },
                },
                {
                  key: '_moduleDoBootstrap',
                  value: function (e) {
                    var t = e.injector.get(Ia);
                    if (e._bootstrapComponents.length > 0)
                      e._bootstrapComponents.forEach(function (e) {
                        return t.bootstrap(e);
                      });
                    else {
                      if (!e.instance.ngDoBootstrap)
                        throw new Error(
                          'The module '.concat(
                            Ae(e.instance.constructor),
                            ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
                          )
                        );
                      e.instance.ngDoBootstrap(t);
                    }
                    this._modules.push(e);
                  },
                },
                {
                  key: 'onDestroy',
                  value: function (e) {
                    this._destroyListeners.push(e);
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    if (this._destroyed)
                      throw new Error(
                        'The platform has already been destroyed!'
                      );
                    this._modules.slice().forEach(function (e) {
                      return e.destroy();
                    }),
                      this._destroyListeners.forEach(function (e) {
                        return e();
                      }),
                      (this._destroyed = !0);
                  },
                },
                {
                  key: 'injector',
                  get: function () {
                    return this._injector;
                  },
                },
                {
                  key: 'destroyed',
                  get: function () {
                    return this._destroyed;
                  },
                },
              ]),
              e
            );
          })();
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(rt(Ni));
            }),
            (e.ɵprov = ke({ token: e, factory: e.ɵfac })),
            e
          );
        })();
        function xa(e, t) {
          return Array.isArray(t)
            ? t.reduce(xa, e)
            : Object.assign(Object.assign({}, e), t);
        }
        var Oa,
          Ia =
            (((Oa = (function () {
              function e(t, n, r, i, o, a) {
                var s = this;
                p(this, e),
                  (this._zone = t),
                  (this._console = n),
                  (this._injector = r),
                  (this._exceptionHandler = i),
                  (this._componentFactoryResolver = o),
                  (this._initStatus = a),
                  (this._bootstrapListeners = []),
                  (this._views = []),
                  (this._runningTick = !1),
                  (this._enforceNoNewChanges = !1),
                  (this._stable = !0),
                  (this.componentTypes = []),
                  (this.components = []),
                  (this._enforceNoNewChanges = tr()),
                  this._zone.onMicrotaskEmpty.subscribe({
                    next: function () {
                      s._zone.run(function () {
                        s.tick();
                      });
                    },
                  });
                var u = new M(function (e) {
                    (s._stable =
                      s._zone.isStable &&
                      !s._zone.hasPendingMacrotasks &&
                      !s._zone.hasPendingMicrotasks),
                      s._zone.runOutsideAngular(function () {
                        e.next(s._stable), e.complete();
                      });
                  }),
                  l = new M(function (e) {
                    var t;
                    s._zone.runOutsideAngular(function () {
                      t = s._zone.onStable.subscribe(function () {
                        fa.assertNotInAngularZone(),
                          ca(function () {
                            s._stable ||
                              s._zone.hasPendingMacrotasks ||
                              s._zone.hasPendingMicrotasks ||
                              ((s._stable = !0), e.next(!0));
                          });
                      });
                    });
                    var n = s._zone.onUnstable.subscribe(function () {
                      fa.assertInAngularZone(),
                        s._stable &&
                          ((s._stable = !1),
                          s._zone.runOutsideAngular(function () {
                            e.next(!1);
                          }));
                    });
                    return function () {
                      t.unsubscribe(), n.unsubscribe();
                    };
                  });
                this.isStable = ie(
                  u,
                  l.pipe(function (e) {
                    return oe()(
                      ((t = fe),
                      function (e) {
                        var n;
                        n =
                          'function' == typeof t
                            ? t
                            : function () {
                                return t;
                              };
                        var r = Object.create(e, le);
                        return (r.source = e), (r.subjectFactory = n), r;
                      })(e)
                    );
                    var t;
                  })
                );
              }
              return (
                m(e, [
                  {
                    key: 'bootstrap',
                    value: function (e, t) {
                      var n,
                        r = this;
                      if (!this._initStatus.done)
                        throw new Error(
                          'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
                        );
                      (n =
                        e instanceof Zi
                          ? e
                          : this._componentFactoryResolver.resolveComponentFactory(
                              e
                            )),
                        this.componentTypes.push(n.componentType);
                      var i = n.isBoundToModule
                          ? void 0
                          : this._injector.get(st),
                        o = n.create(Ni.NULL, [], t || n.selector, i);
                      o.onDestroy(function () {
                        r._unloadComponent(o);
                      });
                      var a = o.injector.get(ka, null);
                      return (
                        a &&
                          o.injector
                            .get(ba)
                            .registerApplication(o.location.nativeElement, a),
                        this._loadComponent(o),
                        tr() &&
                          this._console.log(
                            'Angular is running in development mode. Call enableProdMode() to enable production mode.'
                          ),
                        o
                      );
                    },
                  },
                  {
                    key: 'tick',
                    value: function () {
                      var e = this;
                      if (this._runningTick)
                        throw new Error(
                          'ApplicationRef.tick is called recursively'
                        );
                      try {
                        this._runningTick = !0;
                        var t,
                          n = h(this._views);
                        try {
                          for (n.s(); !(t = n.n()).done; )
                            t.value.detectChanges();
                        } catch (o) {
                          n.e(o);
                        } finally {
                          n.f();
                        }
                        if (this._enforceNoNewChanges) {
                          var r,
                            i = h(this._views);
                          try {
                            for (i.s(); !(r = i.n()).done; )
                              r.value.checkNoChanges();
                          } catch (o) {
                            i.e(o);
                          } finally {
                            i.f();
                          }
                        }
                      } catch (a) {
                        this._zone.runOutsideAngular(function () {
                          return e._exceptionHandler.handleError(a);
                        });
                      } finally {
                        this._runningTick = !1;
                      }
                    },
                  },
                  {
                    key: 'attachView',
                    value: function (e) {
                      var t = e;
                      this._views.push(t), t.attachToAppRef(this);
                    },
                  },
                  {
                    key: 'detachView',
                    value: function (e) {
                      var t = e;
                      Aa(this._views, t), t.detachFromAppRef();
                    },
                  },
                  {
                    key: '_loadComponent',
                    value: function (e) {
                      this.attachView(e.hostView),
                        this.tick(),
                        this.components.push(e),
                        this._injector
                          .get(Qo, [])
                          .concat(this._bootstrapListeners)
                          .forEach(function (t) {
                            return t(e);
                          });
                    },
                  },
                  {
                    key: '_unloadComponent',
                    value: function (e) {
                      this.detachView(e.hostView), Aa(this.components, e);
                    },
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this._views.slice().forEach(function (e) {
                        return e.destroy();
                      });
                    },
                  },
                  {
                    key: 'viewCount',
                    get: function () {
                      return this._views.length;
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Oa)(
                rt(fa),
                rt(Yo),
                rt(Ni),
                rt(er),
                rt(Ui),
                rt(qo)
              );
            }),
            (Oa.ɵprov = ke({ token: Oa, factory: Oa.ɵfac })),
            Oa);
        function Aa(e, t) {
          var n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
        var Na = Ta(null, 'core', [
            { provide: Xo, useValue: 'unknown' },
            { provide: Sa, deps: [Ni] },
            { provide: ba, deps: [] },
            { provide: Yo, deps: [] },
          ]),
          Ma = [
            { provide: Ia, useClass: Ia, deps: [fa, Yo, Ni, er, Ui, qo] },
            {
              provide: ko,
              deps: [fa],
              useFactory: function (e) {
                var t = [];
                return (
                  e.onStable.subscribe(function () {
                    for (; t.length; ) t.pop()();
                  }),
                  function (e) {
                    t.push(e);
                  }
                );
              },
            },
            { provide: qo, useClass: qo, deps: [[new pe(), Uo]] },
            { provide: ua, useClass: ua, deps: [] },
            Go,
            {
              provide: so,
              useFactory: function () {
                return co;
              },
              deps: [],
            },
            {
              provide: uo,
              useFactory: function () {
                return fo;
              },
              deps: [],
            },
            {
              provide: $o,
              useFactory: function (e) {
                return (
                  Oo(
                    (e =
                      e ||
                      ('undefined' != typeof $localize && $localize.locale) ||
                      'en-US')
                  ),
                  e
                );
              },
              deps: [[new ve($o), new pe(), new me()]],
            },
            { provide: ea, useValue: 'USD' },
          ],
          Da = (function () {
            var e = function e(t) {
              p(this, e);
            };
            return (
              (e.ɵmod = kt({ type: e })),
              (e.ɵinj = be({
                factory: function (t) {
                  return new (t || e)(rt(Ia));
                },
                providers: Ma,
              })),
              e
            );
          })(),
          Ra = null;
        function Pa() {
          return Ra;
        }
        var Ha,
          ja = new Je('DocumentToken'),
          La = (function (e) {
            return (
              (e[(e.Zero = 0)] = 'Zero'),
              (e[(e.One = 1)] = 'One'),
              (e[(e.Two = 2)] = 'Two'),
              (e[(e.Few = 3)] = 'Few'),
              (e[(e.Many = 4)] = 'Many'),
              (e[(e.Other = 5)] = 'Other'),
              e
            );
          })({}),
          Fa = function e() {
            p(this, e);
          },
          za =
            (((Ha = (function (e) {
              o(n, e);
              var t = s(n);
              function n(e) {
                var r;
                return p(this, n), ((r = t.call(this)).locale = e), r;
              }
              return (
                m(n, [
                  {
                    key: 'getPluralCategory',
                    value: function (e, t) {
                      switch (
                        (function (e) {
                          return (function (e) {
                            var t = (function (e) {
                                return e.toLowerCase().replace(/_/g, '-');
                              })(e),
                              n = So(t);
                            if (n) return n;
                            var r = t.split('-')[0];
                            if ((n = So(r))) return n;
                            if ('en' === r) return To;
                            throw new Error(
                              'Missing locale data for the locale "'.concat(
                                e,
                                '".'
                              )
                            );
                          })(e)[xo.PluralCase];
                        })(t || this.locale)(e)
                      ) {
                        case La.Zero:
                          return 'zero';
                        case La.One:
                          return 'one';
                        case La.Two:
                          return 'two';
                        case La.Few:
                          return 'few';
                        case La.Many:
                          return 'many';
                        default:
                          return 'other';
                      }
                    },
                  },
                ]),
                n
              );
            })(Fa)).ɵfac = function (e) {
              return new (e || Ha)(rt($o));
            }),
            (Ha.ɵprov = ke({ token: Ha, factory: Ha.ɵfac })),
            Ha);
        function Va(e, n) {
          n = encodeURIComponent(n);
          var r,
            i = h(e.split(';'));
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var o = r.value,
                a = o.indexOf('='),
                s = t(-1 == a ? [o, ''] : [o.slice(0, a), o.slice(a + 1)], 2),
                u = s[0],
                l = s[1];
              if (u.trim() === n) return decodeURIComponent(l);
            }
          } catch (c) {
            i.e(c);
          } finally {
            i.f();
          }
          return null;
        }
        var Za,
          Ba,
          Ua,
          qa,
          Wa,
          Ga =
            (((Za = function e() {
              p(this, e);
            }).ɵmod = kt({ type: Za })),
            (Za.ɵinj = be({
              factory: function (e) {
                return new (e || Za)();
              },
              providers: [{ provide: Fa, useClass: za }],
            })),
            Za),
          Ja = (function (e) {
            o(n, e);
            var t = s(n);
            function n() {
              return p(this, n), t.apply(this, arguments);
            }
            return (
              m(
                n,
                [
                  {
                    key: 'getProperty',
                    value: function (e, t) {
                      return e[t];
                    },
                  },
                  {
                    key: 'log',
                    value: function (e) {
                      window.console &&
                        window.console.log &&
                        window.console.log(e);
                    },
                  },
                  {
                    key: 'logGroup',
                    value: function (e) {
                      window.console &&
                        window.console.group &&
                        window.console.group(e);
                    },
                  },
                  {
                    key: 'logGroupEnd',
                    value: function () {
                      window.console &&
                        window.console.groupEnd &&
                        window.console.groupEnd();
                    },
                  },
                  {
                    key: 'onAndCancel',
                    value: function (e, t, n) {
                      return (
                        e.addEventListener(t, n, !1),
                        function () {
                          e.removeEventListener(t, n, !1);
                        }
                      );
                    },
                  },
                  {
                    key: 'dispatchEvent',
                    value: function (e, t) {
                      e.dispatchEvent(t);
                    },
                  },
                  {
                    key: 'remove',
                    value: function (e) {
                      return e.parentNode && e.parentNode.removeChild(e), e;
                    },
                  },
                  {
                    key: 'getValue',
                    value: function (e) {
                      return e.value;
                    },
                  },
                  {
                    key: 'createElement',
                    value: function (e, t) {
                      return (t = t || this.getDefaultDocument()).createElement(
                        e
                      );
                    },
                  },
                  {
                    key: 'createHtmlDocument',
                    value: function () {
                      return document.implementation.createHTMLDocument(
                        'fakeTitle'
                      );
                    },
                  },
                  {
                    key: 'getDefaultDocument',
                    value: function () {
                      return document;
                    },
                  },
                  {
                    key: 'isElementNode',
                    value: function (e) {
                      return e.nodeType === Node.ELEMENT_NODE;
                    },
                  },
                  {
                    key: 'isShadowRoot',
                    value: function (e) {
                      return e instanceof DocumentFragment;
                    },
                  },
                  {
                    key: 'getGlobalEventTarget',
                    value: function (e, t) {
                      return 'window' === t
                        ? window
                        : 'document' === t
                        ? e
                        : 'body' === t
                        ? e.body
                        : null;
                    },
                  },
                  {
                    key: 'getHistory',
                    value: function () {
                      return window.history;
                    },
                  },
                  {
                    key: 'getLocation',
                    value: function () {
                      return window.location;
                    },
                  },
                  {
                    key: 'getBaseHref',
                    value: function (e) {
                      var t,
                        n =
                          Ka || (Ka = document.querySelector('base'))
                            ? Ka.getAttribute('href')
                            : null;
                      return null == n
                        ? null
                        : ((t = n),
                          Ba || (Ba = document.createElement('a')),
                          Ba.setAttribute('href', t),
                          '/' === Ba.pathname.charAt(0)
                            ? Ba.pathname
                            : '/' + Ba.pathname);
                    },
                  },
                  {
                    key: 'resetBaseElement',
                    value: function () {
                      Ka = null;
                    },
                  },
                  {
                    key: 'getUserAgent',
                    value: function () {
                      return window.navigator.userAgent;
                    },
                  },
                  {
                    key: 'performanceNow',
                    value: function () {
                      return window.performance && window.performance.now
                        ? window.performance.now()
                        : new Date().getTime();
                    },
                  },
                  {
                    key: 'supportsCookies',
                    value: function () {
                      return !0;
                    },
                  },
                  {
                    key: 'getCookie',
                    value: function (e) {
                      return Va(document.cookie, e);
                    },
                  },
                ],
                [
                  {
                    key: 'makeCurrent',
                    value: function () {
                      var e;
                      (e = new n()), Ra || (Ra = e);
                    },
                  },
                ]
              ),
              n
            );
          })(
            (function (e) {
              o(n, e);
              var t = s(n);
              function n() {
                return p(this, n), t.call(this);
              }
              return (
                m(n, [
                  {
                    key: 'supportsDOMEvents',
                    value: function () {
                      return !0;
                    },
                  },
                ]),
                n
              );
            })(
              (function () {
                return function e() {
                  p(this, e);
                };
              })()
            )
          ),
          Ka = null,
          Xa = new Je('TRANSITION_ID'),
          Qa = [
            {
              provide: Uo,
              useFactory: function (e, t, n) {
                return function () {
                  n.get(qo).donePromise.then(function () {
                    var n = Pa();
                    Array.prototype.slice
                      .apply(t.querySelectorAll('style[ng-transition]'))
                      .filter(function (t) {
                        return t.getAttribute('ng-transition') === e;
                      })
                      .forEach(function (e) {
                        return n.remove(e);
                      });
                  });
                };
              },
              deps: [Xa, ja, Ni],
              multi: !0,
            },
          ],
          Ya = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(
                e,
                [
                  {
                    key: 'addToWindow',
                    value: function (e) {
                      (ze.getAngularTestability = function (t) {
                        var n =
                            !(
                              arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1],
                          r = e.findTestabilityInTree(t, n);
                        if (null == r)
                          throw new Error(
                            'Could not find testability for element.'
                          );
                        return r;
                      }),
                        (ze.getAllAngularTestabilities = function () {
                          return e.getAllTestabilities();
                        }),
                        (ze.getAllAngularRootElements = function () {
                          return e.getAllRootElements();
                        }),
                        ze.frameworkStabilizers ||
                          (ze.frameworkStabilizers = []),
                        ze.frameworkStabilizers.push(function (e) {
                          var t = ze.getAllAngularTestabilities(),
                            n = t.length,
                            r = !1,
                            i = function (t) {
                              (r = r || t), 0 == --n && e(r);
                            };
                          t.forEach(function (e) {
                            e.whenStable(i);
                          });
                        });
                    },
                  },
                  {
                    key: 'findTestabilityInTree',
                    value: function (e, t, n) {
                      if (null == t) return null;
                      var r = e.getTestability(t);
                      return null != r
                        ? r
                        : n
                        ? Pa().isShadowRoot(t)
                          ? this.findTestabilityInTree(e, t.host, !0)
                          : this.findTestabilityInTree(e, t.parentElement, !0)
                        : null;
                    },
                  },
                ],
                [
                  {
                    key: 'init',
                    value: function () {
                      var t;
                      (t = new e()), (wa = t);
                    },
                  },
                ]
              ),
              e
            );
          })(),
          $a = new Je('EventManagerPlugins'),
          es =
            (((Ua = (function () {
              function e(t, n) {
                var r = this;
                p(this, e),
                  (this._zone = n),
                  (this._eventNameToPlugin = new Map()),
                  t.forEach(function (e) {
                    return (e.manager = r);
                  }),
                  (this._plugins = t.slice().reverse());
              }
              return (
                m(e, [
                  {
                    key: 'addEventListener',
                    value: function (e, t, n) {
                      return this._findPluginFor(t).addEventListener(e, t, n);
                    },
                  },
                  {
                    key: 'addGlobalEventListener',
                    value: function (e, t, n) {
                      return this._findPluginFor(t).addGlobalEventListener(
                        e,
                        t,
                        n
                      );
                    },
                  },
                  {
                    key: 'getZone',
                    value: function () {
                      return this._zone;
                    },
                  },
                  {
                    key: '_findPluginFor',
                    value: function (e) {
                      var t = this._eventNameToPlugin.get(e);
                      if (t) return t;
                      for (var n = this._plugins, r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (i.supports(e))
                          return this._eventNameToPlugin.set(e, i), i;
                      }
                      throw new Error(
                        'No event manager plugin found for event ' + e
                      );
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Ua)(rt($a), rt(fa));
            }),
            (Ua.ɵprov = ke({ token: Ua, factory: Ua.ɵfac })),
            Ua),
          ts = (function () {
            function e(t) {
              p(this, e), (this._doc = t);
            }
            return (
              m(e, [
                {
                  key: 'addGlobalEventListener',
                  value: function (e, t, n) {
                    var r = Pa().getGlobalEventTarget(this._doc, e);
                    if (!r)
                      throw new Error(
                        'Unsupported event target '
                          .concat(r, ' for event ')
                          .concat(t)
                      );
                    return this.addEventListener(r, t, n);
                  },
                },
              ]),
              e
            );
          })(),
          ns =
            (((Wa = (function () {
              function e() {
                p(this, e), (this._stylesSet = new Set());
              }
              return (
                m(e, [
                  {
                    key: 'addStyles',
                    value: function (e) {
                      var t = this,
                        n = new Set();
                      e.forEach(function (e) {
                        t._stylesSet.has(e) || (t._stylesSet.add(e), n.add(e));
                      }),
                        this.onStylesAdded(n);
                    },
                  },
                  { key: 'onStylesAdded', value: function (e) {} },
                  {
                    key: 'getAllStyles',
                    value: function () {
                      return Array.from(this._stylesSet);
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Wa)();
            }),
            (Wa.ɵprov = ke({ token: Wa, factory: Wa.ɵfac })),
            Wa),
          rs =
            (((qa = (function (e) {
              o(n, e);
              var t = s(n);
              function n(e) {
                var r;
                return (
                  p(this, n),
                  ((r = t.call(this))._doc = e),
                  (r._hostNodes = new Set()),
                  (r._styleNodes = new Set()),
                  r._hostNodes.add(e.head),
                  r
                );
              }
              return (
                m(n, [
                  {
                    key: '_addStylesToHost',
                    value: function (e, t) {
                      var n = this;
                      e.forEach(function (e) {
                        var r = n._doc.createElement('style');
                        (r.textContent = e),
                          n._styleNodes.add(t.appendChild(r));
                      });
                    },
                  },
                  {
                    key: 'addHost',
                    value: function (e) {
                      this._addStylesToHost(this._stylesSet, e),
                        this._hostNodes.add(e);
                    },
                  },
                  {
                    key: 'removeHost',
                    value: function (e) {
                      this._hostNodes.delete(e);
                    },
                  },
                  {
                    key: 'onStylesAdded',
                    value: function (e) {
                      var t = this;
                      this._hostNodes.forEach(function (n) {
                        return t._addStylesToHost(e, n);
                      });
                    },
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this._styleNodes.forEach(function (e) {
                        return Pa().remove(e);
                      });
                    },
                  },
                ]),
                n
              );
            })(ns)).ɵfac = function (e) {
              return new (e || qa)(rt(ja));
            }),
            (qa.ɵprov = ke({ token: qa, factory: qa.ɵfac })),
            qa),
          is = {
            svg: 'http://www.w3.org/2000/svg',
            xhtml: 'http://www.w3.org/1999/xhtml',
            xlink: 'http://www.w3.org/1999/xlink',
            xml: 'http://www.w3.org/XML/1998/namespace',
            xmlns: 'http://www.w3.org/2000/xmlns/',
          },
          os = /%COMP%/g;
        function as(e, t, n) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            Array.isArray(i)
              ? as(e, i, n)
              : ((i = i.replace(os, e)), n.push(i));
          }
          return n;
        }
        function ss(e) {
          return function (t) {
            if ('__ngUnwrap__' === t) return e;
            !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
          };
        }
        var us,
          ls,
          cs,
          fs,
          hs =
            (((us = (function () {
              function e(t, n, r) {
                p(this, e),
                  (this.eventManager = t),
                  (this.sharedStylesHost = n),
                  (this.appId = r),
                  (this.rendererByCompId = new Map()),
                  (this.defaultRenderer = new ds(t));
              }
              return (
                m(e, [
                  {
                    key: 'createRenderer',
                    value: function (e, t) {
                      if (!e || !t) return this.defaultRenderer;
                      switch (t.encapsulation) {
                        case dt.Emulated:
                          var n = this.rendererByCompId.get(t.id);
                          return (
                            n ||
                              ((n = new vs(
                                this.eventManager,
                                this.sharedStylesHost,
                                t,
                                this.appId
                              )),
                              this.rendererByCompId.set(t.id, n)),
                            n.applyToHost(e),
                            n
                          );
                        case dt.Native:
                        case dt.ShadowDom:
                          return new ps(
                            this.eventManager,
                            this.sharedStylesHost,
                            e,
                            t
                          );
                        default:
                          if (!this.rendererByCompId.has(t.id)) {
                            var r = as(t.id, t.styles, []);
                            this.sharedStylesHost.addStyles(r),
                              this.rendererByCompId.set(
                                t.id,
                                this.defaultRenderer
                              );
                          }
                          return this.defaultRenderer;
                      }
                    },
                  },
                  { key: 'begin', value: function () {} },
                  { key: 'end', value: function () {} },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || us)(rt(es), rt(rs), rt(Wo));
            }),
            (us.ɵprov = ke({ token: us, factory: us.ɵfac })),
            us),
          ds = (function () {
            function e(t) {
              p(this, e),
                (this.eventManager = t),
                (this.data = Object.create(null));
            }
            return (
              m(e, [
                { key: 'destroy', value: function () {} },
                {
                  key: 'createElement',
                  value: function (e, t) {
                    return t
                      ? document.createElementNS(is[t] || t, e)
                      : document.createElement(e);
                  },
                },
                {
                  key: 'createComment',
                  value: function (e) {
                    return document.createComment(e);
                  },
                },
                {
                  key: 'createText',
                  value: function (e) {
                    return document.createTextNode(e);
                  },
                },
                {
                  key: 'appendChild',
                  value: function (e, t) {
                    e.appendChild(t);
                  },
                },
                {
                  key: 'insertBefore',
                  value: function (e, t, n) {
                    e && e.insertBefore(t, n);
                  },
                },
                {
                  key: 'removeChild',
                  value: function (e, t) {
                    e && e.removeChild(t);
                  },
                },
                {
                  key: 'selectRootElement',
                  value: function (e, t) {
                    var n =
                      'string' == typeof e ? document.querySelector(e) : e;
                    if (!n)
                      throw new Error(
                        'The selector "'.concat(
                          e,
                          '" did not match any elements'
                        )
                      );
                    return t || (n.textContent = ''), n;
                  },
                },
                {
                  key: 'parentNode',
                  value: function (e) {
                    return e.parentNode;
                  },
                },
                {
                  key: 'nextSibling',
                  value: function (e) {
                    return e.nextSibling;
                  },
                },
                {
                  key: 'setAttribute',
                  value: function (e, t, n, r) {
                    if (r) {
                      t = r + ':' + t;
                      var i = is[r];
                      i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n);
                    } else e.setAttribute(t, n);
                  },
                },
                {
                  key: 'removeAttribute',
                  value: function (e, t, n) {
                    if (n) {
                      var r = is[n];
                      r
                        ? e.removeAttributeNS(r, t)
                        : e.removeAttribute(''.concat(n, ':').concat(t));
                    } else e.removeAttribute(t);
                  },
                },
                {
                  key: 'addClass',
                  value: function (e, t) {
                    e.classList.add(t);
                  },
                },
                {
                  key: 'removeClass',
                  value: function (e, t) {
                    e.classList.remove(t);
                  },
                },
                {
                  key: 'setStyle',
                  value: function (e, t, n, r) {
                    r & Ji.DashCase
                      ? e.style.setProperty(
                          t,
                          n,
                          r & Ji.Important ? 'important' : ''
                        )
                      : (e.style[t] = n);
                  },
                },
                {
                  key: 'removeStyle',
                  value: function (e, t, n) {
                    n & Ji.DashCase
                      ? e.style.removeProperty(t)
                      : (e.style[t] = '');
                  },
                },
                {
                  key: 'setProperty',
                  value: function (e, t, n) {
                    e[t] = n;
                  },
                },
                {
                  key: 'setValue',
                  value: function (e, t) {
                    e.nodeValue = t;
                  },
                },
                {
                  key: 'listen',
                  value: function (e, t, n) {
                    return 'string' == typeof e
                      ? this.eventManager.addGlobalEventListener(e, t, ss(n))
                      : this.eventManager.addEventListener(e, t, ss(n));
                  },
                },
              ]),
              e
            );
          })(),
          vs = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r, i, o) {
              var a;
              p(this, n), ((a = t.call(this, e)).component = i);
              var s = as(o + '-' + i.id, i.styles, []);
              return (
                r.addStyles(s),
                (a.contentAttr = '_ngcontent-%COMP%'.replace(
                  os,
                  o + '-' + i.id
                )),
                (a.hostAttr = '_nghost-%COMP%'.replace(os, o + '-' + i.id)),
                a
              );
            }
            return (
              m(n, [
                {
                  key: 'applyToHost',
                  value: function (e) {
                    i(f(n.prototype), 'setAttribute', this).call(
                      this,
                      e,
                      this.hostAttr,
                      ''
                    );
                  },
                },
                {
                  key: 'createElement',
                  value: function (e, t) {
                    var r = i(f(n.prototype), 'createElement', this).call(
                      this,
                      e,
                      t
                    );
                    return (
                      i(f(n.prototype), 'setAttribute', this).call(
                        this,
                        r,
                        this.contentAttr,
                        ''
                      ),
                      r
                    );
                  },
                },
              ]),
              n
            );
          })(ds),
          ps = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r, i, o) {
              var a;
              p(this, n),
                ((a = t.call(this, e)).sharedStylesHost = r),
                (a.hostEl = i),
                (a.component = o),
                (a.shadowRoot =
                  o.encapsulation === dt.ShadowDom
                    ? i.attachShadow({ mode: 'open' })
                    : i.createShadowRoot()),
                a.sharedStylesHost.addHost(a.shadowRoot);
              for (var s = as(o.id, o.styles, []), u = 0; u < s.length; u++) {
                var l = document.createElement('style');
                (l.textContent = s[u]), a.shadowRoot.appendChild(l);
              }
              return a;
            }
            return (
              m(n, [
                {
                  key: 'nodeOrShadowRoot',
                  value: function (e) {
                    return e === this.hostEl ? this.shadowRoot : e;
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    this.sharedStylesHost.removeHost(this.shadowRoot);
                  },
                },
                {
                  key: 'appendChild',
                  value: function (e, t) {
                    return i(f(n.prototype), 'appendChild', this).call(
                      this,
                      this.nodeOrShadowRoot(e),
                      t
                    );
                  },
                },
                {
                  key: 'insertBefore',
                  value: function (e, t, r) {
                    return i(f(n.prototype), 'insertBefore', this).call(
                      this,
                      this.nodeOrShadowRoot(e),
                      t,
                      r
                    );
                  },
                },
                {
                  key: 'removeChild',
                  value: function (e, t) {
                    return i(f(n.prototype), 'removeChild', this).call(
                      this,
                      this.nodeOrShadowRoot(e),
                      t
                    );
                  },
                },
                {
                  key: 'parentNode',
                  value: function (e) {
                    return this.nodeOrShadowRoot(
                      i(f(n.prototype), 'parentNode', this).call(
                        this,
                        this.nodeOrShadowRoot(e)
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(ds),
          ys =
            (((ls = (function (e) {
              o(n, e);
              var t = s(n);
              function n(e) {
                return p(this, n), t.call(this, e);
              }
              return (
                m(n, [
                  {
                    key: 'supports',
                    value: function (e) {
                      return !0;
                    },
                  },
                  {
                    key: 'addEventListener',
                    value: function (e, t, n) {
                      var r = this;
                      return (
                        e.addEventListener(t, n, !1),
                        function () {
                          return r.removeEventListener(e, t, n);
                        }
                      );
                    },
                  },
                  {
                    key: 'removeEventListener',
                    value: function (e, t, n) {
                      return e.removeEventListener(t, n);
                    },
                  },
                ]),
                n
              );
            })(ts)).ɵfac = function (e) {
              return new (e || ls)(rt(ja));
            }),
            (ls.ɵprov = ke({ token: ls, factory: ls.ɵfac })),
            ls),
          ms = ['alt', 'control', 'meta', 'shift'],
          gs = {
            '\b': 'Backspace',
            '\t': 'Tab',
            '\x7f': 'Delete',
            '\x1b': 'Escape',
            Del: 'Delete',
            Esc: 'Escape',
            Left: 'ArrowLeft',
            Right: 'ArrowRight',
            Up: 'ArrowUp',
            Down: 'ArrowDown',
            Menu: 'ContextMenu',
            Scroll: 'ScrollLock',
            Win: 'OS',
          },
          _s = {
            A: '1',
            B: '2',
            C: '3',
            D: '4',
            E: '5',
            F: '6',
            G: '7',
            H: '8',
            I: '9',
            J: '*',
            K: '+',
            M: '-',
            N: '.',
            O: '/',
            '`': '0',
            '\x90': 'NumLock',
          },
          ks = {
            alt: function (e) {
              return e.altKey;
            },
            control: function (e) {
              return e.ctrlKey;
            },
            meta: function (e) {
              return e.metaKey;
            },
            shift: function (e) {
              return e.shiftKey;
            },
          },
          bs =
            (((cs = (function (e) {
              o(n, e);
              var t = s(n);
              function n(e) {
                return p(this, n), t.call(this, e);
              }
              return (
                m(
                  n,
                  [
                    {
                      key: 'supports',
                      value: function (e) {
                        return null != n.parseEventName(e);
                      },
                    },
                    {
                      key: 'addEventListener',
                      value: function (e, t, r) {
                        var i = n.parseEventName(t),
                          o = n.eventCallback(
                            i.fullKey,
                            r,
                            this.manager.getZone()
                          );
                        return this.manager
                          .getZone()
                          .runOutsideAngular(function () {
                            return Pa().onAndCancel(e, i.domEventName, o);
                          });
                      },
                    },
                  ],
                  [
                    {
                      key: 'parseEventName',
                      value: function (e) {
                        var t = e.toLowerCase().split('.'),
                          r = t.shift();
                        if (
                          0 === t.length ||
                          ('keydown' !== r && 'keyup' !== r)
                        )
                          return null;
                        var i = n._normalizeKey(t.pop()),
                          o = '';
                        if (
                          (ms.forEach(function (e) {
                            var n = t.indexOf(e);
                            n > -1 && (t.splice(n, 1), (o += e + '.'));
                          }),
                          (o += i),
                          0 != t.length || 0 === i.length)
                        )
                          return null;
                        var a = {};
                        return (a.domEventName = r), (a.fullKey = o), a;
                      },
                    },
                    {
                      key: 'getEventFullKey',
                      value: function (e) {
                        var t = '',
                          n = (function (e) {
                            var t = e.key;
                            if (null == t) {
                              if (null == (t = e.keyIdentifier))
                                return 'Unidentified';
                              t.startsWith('U+') &&
                                ((t = String.fromCharCode(
                                  parseInt(t.substring(2), 16)
                                )),
                                3 === e.location &&
                                  _s.hasOwnProperty(t) &&
                                  (t = _s[t]));
                            }
                            return gs[t] || t;
                          })(e);
                        return (
                          ' ' === (n = n.toLowerCase())
                            ? (n = 'space')
                            : '.' === n && (n = 'dot'),
                          ms.forEach(function (r) {
                            r != n && (0, ks[r])(e) && (t += r + '.');
                          }),
                          (t += n)
                        );
                      },
                    },
                    {
                      key: 'eventCallback',
                      value: function (e, t, r) {
                        return function (i) {
                          n.getEventFullKey(i) === e &&
                            r.runGuarded(function () {
                              return t(i);
                            });
                        };
                      },
                    },
                    {
                      key: '_normalizeKey',
                      value: function (e) {
                        switch (e) {
                          case 'esc':
                            return 'escape';
                          default:
                            return e;
                        }
                      },
                    },
                  ]
                ),
                n
              );
            })(ts)).ɵfac = function (e) {
              return new (e || cs)(rt(ja));
            }),
            (cs.ɵprov = ke({ token: cs, factory: cs.ɵfac })),
            cs),
          ws = Ta(Na, 'browser', [
            { provide: Xo, useValue: 'browser' },
            {
              provide: Ko,
              useValue: function () {
                Ja.makeCurrent(), Ya.init();
              },
              multi: !0,
            },
            {
              provide: ja,
              useFactory: function () {
                return (
                  (function (e) {
                    jt = e;
                  })(document),
                  document
                );
              },
              deps: [],
            },
          ]),
          Es = [
            [],
            { provide: gi, useValue: 'root' },
            {
              provide: er,
              useFactory: function () {
                return new er();
              },
              deps: [],
            },
            { provide: $a, useClass: ys, multi: !0, deps: [ja, fa, Xo] },
            { provide: $a, useClass: bs, multi: !0, deps: [ja] },
            [],
            { provide: hs, useClass: hs, deps: [es, rs, Wo] },
            { provide: Gi, useExisting: hs },
            { provide: ns, useExisting: rs },
            { provide: rs, useClass: rs, deps: [ja] },
            { provide: ka, useClass: ka, deps: [fa] },
            { provide: es, useClass: es, deps: [$a, fa] },
            [],
          ],
          Ts =
            (((fs = (function () {
              function e(t) {
                if ((p(this, e), t))
                  throw new Error(
                    'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
                  );
              }
              return (
                m(e, null, [
                  {
                    key: 'withServerTransition',
                    value: function (t) {
                      return {
                        ngModule: e,
                        providers: [
                          { provide: Wo, useValue: t.appId },
                          { provide: Xa, useExisting: Wo },
                          Qa,
                        ],
                      };
                    },
                  },
                ]),
                e
              );
            })()).ɵmod = kt({ type: fs })),
            (fs.ɵinj = be({
              factory: function (e) {
                return new (e || fs)(rt(fs, 12));
              },
              providers: Es,
              imports: [Ga, Da],
            })),
            fs);
        function Cs() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[t.length - 1];
          return z(r) ? (t.pop(), K(t, r)) : re(t);
        }
        'undefined' != typeof window && window;
        var Ss = (function () {
            function e(t, n) {
              p(this, e), (this.predicate = t), (this.thisArg = n);
            }
            return (
              m(e, [
                {
                  key: 'call',
                  value: function (e, t) {
                    return t.subscribe(new xs(e, this.predicate, this.thisArg));
                  },
                },
              ]),
              e
            );
          })(),
          xs = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r, i) {
              var o;
              return (
                p(this, n),
                ((o = t.call(this, e)).predicate = r),
                (o.thisArg = i),
                (o.count = 0),
                o
              );
            }
            return (
              m(n, [
                {
                  key: '_next',
                  value: function (e) {
                    var t;
                    try {
                      t = this.predicate.call(this.thisArg, e, this.count++);
                    } catch (n) {
                      return void this.destination.error(n);
                    }
                    t && this.destination.next(e);
                  },
                },
              ]),
              n
            );
          })(x),
          Os = function e() {
            p(this, e);
          },
          Is = function e() {
            p(this, e);
          },
          As = (function () {
            function e(t) {
              var n = this;
              p(this, e),
                (this.normalizedNames = new Map()),
                (this.lazyUpdate = null),
                t
                  ? (this.lazyInit =
                      'string' == typeof t
                        ? function () {
                            (n.headers = new Map()),
                              t.split('\n').forEach(function (e) {
                                var t = e.indexOf(':');
                                if (t > 0) {
                                  var r = e.slice(0, t),
                                    i = r.toLowerCase(),
                                    o = e.slice(t + 1).trim();
                                  n.maybeSetNormalizedName(r, i),
                                    n.headers.has(i)
                                      ? n.headers.get(i).push(o)
                                      : n.headers.set(i, [o]);
                                }
                              });
                          }
                        : function () {
                            (n.headers = new Map()),
                              Object.keys(t).forEach(function (e) {
                                var r = t[e],
                                  i = e.toLowerCase();
                                'string' == typeof r && (r = [r]),
                                  r.length > 0 &&
                                    (n.headers.set(i, r),
                                    n.maybeSetNormalizedName(e, i));
                              });
                          })
                  : (this.headers = new Map());
            }
            return (
              m(e, [
                {
                  key: 'has',
                  value: function (e) {
                    return this.init(), this.headers.has(e.toLowerCase());
                  },
                },
                {
                  key: 'get',
                  value: function (e) {
                    this.init();
                    var t = this.headers.get(e.toLowerCase());
                    return t && t.length > 0 ? t[0] : null;
                  },
                },
                {
                  key: 'keys',
                  value: function () {
                    return (
                      this.init(), Array.from(this.normalizedNames.values())
                    );
                  },
                },
                {
                  key: 'getAll',
                  value: function (e) {
                    return (
                      this.init(), this.headers.get(e.toLowerCase()) || null
                    );
                  },
                },
                {
                  key: 'append',
                  value: function (e, t) {
                    return this.clone({ name: e, value: t, op: 'a' });
                  },
                },
                {
                  key: 'set',
                  value: function (e, t) {
                    return this.clone({ name: e, value: t, op: 's' });
                  },
                },
                {
                  key: 'delete',
                  value: function (e, t) {
                    return this.clone({ name: e, value: t, op: 'd' });
                  },
                },
                {
                  key: 'maybeSetNormalizedName',
                  value: function (e, t) {
                    this.normalizedNames.has(t) ||
                      this.normalizedNames.set(t, e);
                  },
                },
                {
                  key: 'init',
                  value: function () {
                    var t = this;
                    this.lazyInit &&
                      (this.lazyInit instanceof e
                        ? this.copyFrom(this.lazyInit)
                        : this.lazyInit(),
                      (this.lazyInit = null),
                      this.lazyUpdate &&
                        (this.lazyUpdate.forEach(function (e) {
                          return t.applyUpdate(e);
                        }),
                        (this.lazyUpdate = null)));
                  },
                },
                {
                  key: 'copyFrom',
                  value: function (e) {
                    var t = this;
                    e.init(),
                      Array.from(e.headers.keys()).forEach(function (n) {
                        t.headers.set(n, e.headers.get(n)),
                          t.normalizedNames.set(n, e.normalizedNames.get(n));
                      });
                  },
                },
                {
                  key: 'clone',
                  value: function (t) {
                    var n = new e();
                    return (
                      (n.lazyInit =
                        this.lazyInit && this.lazyInit instanceof e
                          ? this.lazyInit
                          : this),
                      (n.lazyUpdate = (this.lazyUpdate || []).concat([t])),
                      n
                    );
                  },
                },
                {
                  key: 'applyUpdate',
                  value: function (e) {
                    var t = e.name.toLowerCase();
                    switch (e.op) {
                      case 'a':
                      case 's':
                        var r = e.value;
                        if (('string' == typeof r && (r = [r]), 0 === r.length))
                          return;
                        this.maybeSetNormalizedName(e.name, t);
                        var i =
                          ('a' === e.op ? this.headers.get(t) : void 0) || [];
                        i.push.apply(i, n(r)), this.headers.set(t, i);
                        break;
                      case 'd':
                        var o = e.value;
                        if (o) {
                          var a = this.headers.get(t);
                          if (!a) return;
                          0 ===
                          (a = a.filter(function (e) {
                            return -1 === o.indexOf(e);
                          })).length
                            ? (this.headers.delete(t),
                              this.normalizedNames.delete(t))
                            : this.headers.set(t, a);
                        } else
                          this.headers.delete(t),
                            this.normalizedNames.delete(t);
                    }
                  },
                },
                {
                  key: 'forEach',
                  value: function (e) {
                    var t = this;
                    this.init(),
                      Array.from(this.normalizedNames.keys()).forEach(function (
                        n
                      ) {
                        return e(t.normalizedNames.get(n), t.headers.get(n));
                      });
                  },
                },
              ]),
              e
            );
          })(),
          Ns = (function () {
            function e() {
              p(this, e);
            }
            return (
              m(e, [
                {
                  key: 'encodeKey',
                  value: function (e) {
                    return Ms(e);
                  },
                },
                {
                  key: 'encodeValue',
                  value: function (e) {
                    return Ms(e);
                  },
                },
                {
                  key: 'decodeKey',
                  value: function (e) {
                    return decodeURIComponent(e);
                  },
                },
                {
                  key: 'decodeValue',
                  value: function (e) {
                    return decodeURIComponent(e);
                  },
                },
              ]),
              e
            );
          })();
        function Ms(e) {
          return encodeURIComponent(e)
            .replace(/%40/gi, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/gi, '$')
            .replace(/%2C/gi, ',')
            .replace(/%3B/gi, ';')
            .replace(/%2B/gi, '+')
            .replace(/%3D/gi, '=')
            .replace(/%3F/gi, '?')
            .replace(/%2F/gi, '/');
        }
        var Ds = (function () {
          function e() {
            var n = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if (
              (p(this, e),
              (this.updates = null),
              (this.cloneFrom = null),
              (this.encoder = r.encoder || new Ns()),
              r.fromString)
            ) {
              if (r.fromObject)
                throw new Error(
                  'Cannot specify both fromString and fromObject.'
                );
              this.map = (function (e, n) {
                var r = new Map();
                return (
                  e.length > 0 &&
                    e.split('&').forEach(function (e) {
                      var i = e.indexOf('='),
                        o = t(
                          -1 == i
                            ? [n.decodeKey(e), '']
                            : [
                                n.decodeKey(e.slice(0, i)),
                                n.decodeValue(e.slice(i + 1)),
                              ],
                          2
                        ),
                        a = o[0],
                        s = o[1],
                        u = r.get(a) || [];
                      u.push(s), r.set(a, u);
                    }),
                  r
                );
              })(r.fromString, this.encoder);
            } else
              r.fromObject
                ? ((this.map = new Map()),
                  Object.keys(r.fromObject).forEach(function (e) {
                    var t = r.fromObject[e];
                    n.map.set(e, Array.isArray(t) ? t : [t]);
                  }))
                : (this.map = null);
          }
          return (
            m(e, [
              {
                key: 'has',
                value: function (e) {
                  return this.init(), this.map.has(e);
                },
              },
              {
                key: 'get',
                value: function (e) {
                  this.init();
                  var t = this.map.get(e);
                  return t ? t[0] : null;
                },
              },
              {
                key: 'getAll',
                value: function (e) {
                  return this.init(), this.map.get(e) || null;
                },
              },
              {
                key: 'keys',
                value: function () {
                  return this.init(), Array.from(this.map.keys());
                },
              },
              {
                key: 'append',
                value: function (e, t) {
                  return this.clone({ param: e, value: t, op: 'a' });
                },
              },
              {
                key: 'set',
                value: function (e, t) {
                  return this.clone({ param: e, value: t, op: 's' });
                },
              },
              {
                key: 'delete',
                value: function (e, t) {
                  return this.clone({ param: e, value: t, op: 'd' });
                },
              },
              {
                key: 'toString',
                value: function () {
                  var e = this;
                  return (
                    this.init(),
                    this.keys()
                      .map(function (t) {
                        var n = e.encoder.encodeKey(t);
                        return e.map
                          .get(t)
                          .map(function (t) {
                            return n + '=' + e.encoder.encodeValue(t);
                          })
                          .join('&');
                      })
                      .filter(function (e) {
                        return '' !== e;
                      })
                      .join('&')
                  );
                },
              },
              {
                key: 'clone',
                value: function (t) {
                  var n = new e({ encoder: this.encoder });
                  return (
                    (n.cloneFrom = this.cloneFrom || this),
                    (n.updates = (this.updates || []).concat([t])),
                    n
                  );
                },
              },
              {
                key: 'init',
                value: function () {
                  var e = this;
                  null === this.map && (this.map = new Map()),
                    null !== this.cloneFrom &&
                      (this.cloneFrom.init(),
                      this.cloneFrom.keys().forEach(function (t) {
                        return e.map.set(t, e.cloneFrom.map.get(t));
                      }),
                      this.updates.forEach(function (t) {
                        switch (t.op) {
                          case 'a':
                          case 's':
                            var n =
                              ('a' === t.op ? e.map.get(t.param) : void 0) ||
                              [];
                            n.push(t.value), e.map.set(t.param, n);
                            break;
                          case 'd':
                            if (void 0 === t.value) {
                              e.map.delete(t.param);
                              break;
                            }
                            var r = e.map.get(t.param) || [],
                              i = r.indexOf(t.value);
                            -1 !== i && r.splice(i, 1),
                              r.length > 0
                                ? e.map.set(t.param, r)
                                : e.map.delete(t.param);
                        }
                      }),
                      (this.cloneFrom = this.updates = null));
                },
              },
            ]),
            e
          );
        })();
        function Rs(e) {
          return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer;
        }
        function Ps(e) {
          return 'undefined' != typeof Blob && e instanceof Blob;
        }
        function Hs(e) {
          return 'undefined' != typeof FormData && e instanceof FormData;
        }
        var js = (function () {
            function e(t, n, r, i) {
              var o;
              if (
                (p(this, e),
                (this.url = n),
                (this.body = null),
                (this.reportProgress = !1),
                (this.withCredentials = !1),
                (this.responseType = 'json'),
                (this.method = t.toUpperCase()),
                (function (e) {
                  switch (e) {
                    case 'DELETE':
                    case 'GET':
                    case 'HEAD':
                    case 'OPTIONS':
                    case 'JSONP':
                      return !1;
                    default:
                      return !0;
                  }
                })(this.method) || i
                  ? ((this.body = void 0 !== r ? r : null), (o = i))
                  : (o = r),
                o &&
                  ((this.reportProgress = !!o.reportProgress),
                  (this.withCredentials = !!o.withCredentials),
                  o.responseType && (this.responseType = o.responseType),
                  o.headers && (this.headers = o.headers),
                  o.params && (this.params = o.params)),
                this.headers || (this.headers = new As()),
                this.params)
              ) {
                var a = this.params.toString();
                if (0 === a.length) this.urlWithParams = n;
                else {
                  var s = n.indexOf('?');
                  this.urlWithParams =
                    n + (-1 === s ? '?' : s < n.length - 1 ? '&' : '') + a;
                }
              } else (this.params = new Ds()), (this.urlWithParams = n);
            }
            return (
              m(e, [
                {
                  key: 'serializeBody',
                  value: function () {
                    return null === this.body
                      ? null
                      : Rs(this.body) ||
                        Ps(this.body) ||
                        Hs(this.body) ||
                        'string' == typeof this.body
                      ? this.body
                      : this.body instanceof Ds
                      ? this.body.toString()
                      : 'object' == typeof this.body ||
                        'boolean' == typeof this.body ||
                        Array.isArray(this.body)
                      ? JSON.stringify(this.body)
                      : this.body.toString();
                  },
                },
                {
                  key: 'detectContentTypeHeader',
                  value: function () {
                    return null === this.body || Hs(this.body)
                      ? null
                      : Ps(this.body)
                      ? this.body.type || null
                      : Rs(this.body)
                      ? null
                      : 'string' == typeof this.body
                      ? 'text/plain'
                      : this.body instanceof Ds
                      ? 'application/x-www-form-urlencoded;charset=UTF-8'
                      : 'object' == typeof this.body ||
                        'number' == typeof this.body ||
                        Array.isArray(this.body)
                      ? 'application/json'
                      : null;
                  },
                },
                {
                  key: 'clone',
                  value: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n = t.method || this.method,
                      r = t.url || this.url,
                      i = t.responseType || this.responseType,
                      o = void 0 !== t.body ? t.body : this.body,
                      a =
                        void 0 !== t.withCredentials
                          ? t.withCredentials
                          : this.withCredentials,
                      s =
                        void 0 !== t.reportProgress
                          ? t.reportProgress
                          : this.reportProgress,
                      u = t.headers || this.headers,
                      l = t.params || this.params;
                    return (
                      void 0 !== t.setHeaders &&
                        (u = Object.keys(t.setHeaders).reduce(function (e, n) {
                          return e.set(n, t.setHeaders[n]);
                        }, u)),
                      t.setParams &&
                        (l = Object.keys(t.setParams).reduce(function (e, n) {
                          return e.set(n, t.setParams[n]);
                        }, l)),
                      new e(n, r, o, {
                        params: l,
                        headers: u,
                        reportProgress: s,
                        responseType: i,
                        withCredentials: a,
                      })
                    );
                  },
                },
              ]),
              e
            );
          })(),
          Ls = (function (e) {
            return (
              (e[(e.Sent = 0)] = 'Sent'),
              (e[(e.UploadProgress = 1)] = 'UploadProgress'),
              (e[(e.ResponseHeader = 2)] = 'ResponseHeader'),
              (e[(e.DownloadProgress = 3)] = 'DownloadProgress'),
              (e[(e.Response = 4)] = 'Response'),
              (e[(e.User = 5)] = 'User'),
              e
            );
          })({}),
          Fs = function e(t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 200,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'OK';
            p(this, e),
              (this.headers = t.headers || new As()),
              (this.status = void 0 !== t.status ? t.status : n),
              (this.statusText = t.statusText || r),
              (this.url = t.url || null),
              (this.ok = this.status >= 200 && this.status < 300);
          },
          zs = (function (e) {
            o(n, e);
            var t = s(n);
            function n() {
              var e,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                p(this, n), ((e = t.call(this, r)).type = Ls.ResponseHeader), e
              );
            }
            return (
              m(n, [
                {
                  key: 'clone',
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return new n({
                      headers: e.headers || this.headers,
                      status: void 0 !== e.status ? e.status : this.status,
                      statusText: e.statusText || this.statusText,
                      url: e.url || this.url || void 0,
                    });
                  },
                },
              ]),
              n
            );
          })(Fs),
          Vs = (function (e) {
            o(n, e);
            var t = s(n);
            function n() {
              var e,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                p(this, n),
                ((e = t.call(this, r)).type = Ls.Response),
                (e.body = void 0 !== r.body ? r.body : null),
                e
              );
            }
            return (
              m(n, [
                {
                  key: 'clone',
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return new n({
                      body: void 0 !== e.body ? e.body : this.body,
                      headers: e.headers || this.headers,
                      status: void 0 !== e.status ? e.status : this.status,
                      statusText: e.statusText || this.statusText,
                      url: e.url || this.url || void 0,
                    });
                  },
                },
              ]),
              n
            );
          })(Fs),
          Zs = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e) {
              var r;
              return (
                p(this, n),
                ((r = t.call(this, e, 0, 'Unknown Error')).name =
                  'HttpErrorResponse'),
                (r.ok = !1),
                (r.message =
                  r.status >= 200 && r.status < 300
                    ? 'Http failure during parsing for ' +
                      (e.url || '(unknown url)')
                    : 'Http failure response for '
                        .concat(e.url || '(unknown url)', ': ')
                        .concat(e.status, ' ')
                        .concat(e.statusText)),
                (r.error = e.error || null),
                r
              );
            }
            return n;
          })(Fs);
        function Bs(e, t) {
          return {
            body: t,
            headers: e.headers,
            observe: e.observe,
            params: e.params,
            reportProgress: e.reportProgress,
            responseType: e.responseType,
            withCredentials: e.withCredentials,
          };
        }
        var Us,
          qs,
          Ws,
          Gs,
          Js,
          Ks,
          Xs,
          Qs,
          Ys,
          $s,
          eu,
          tu,
          nu =
            (((Us = (function () {
              function e(t) {
                p(this, e), (this.handler = t);
              }
              return (
                m(e, [
                  {
                    key: 'request',
                    value: function (e, t) {
                      var n,
                        r = this,
                        i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                      if (e instanceof js) n = e;
                      else {
                        var o = void 0;
                        o =
                          i.headers instanceof As
                            ? i.headers
                            : new As(i.headers);
                        var a = void 0;
                        i.params &&
                          (a =
                            i.params instanceof Ds
                              ? i.params
                              : new Ds({ fromObject: i.params })),
                          (n = new js(e, t, void 0 !== i.body ? i.body : null, {
                            headers: o,
                            params: a,
                            reportProgress: i.reportProgress,
                            responseType: i.responseType || 'json',
                            withCredentials: i.withCredentials,
                          }));
                      }
                      var s = Cs(n).pipe(
                        ee(
                          function (e) {
                            return r.handler.handle(e);
                          },
                          void 0,
                          1
                        )
                      );
                      if (e instanceof js || 'events' === i.observe) return s;
                      var u,
                        l = s.pipe(
                          ((u = function (e) {
                            return e instanceof Vs;
                          }),
                          function (e) {
                            return e.lift(new Ss(u, void 0));
                          })
                        );
                      switch (i.observe || 'body') {
                        case 'body':
                          switch (n.responseType) {
                            case 'arraybuffer':
                              return l.pipe(
                                V(function (e) {
                                  if (
                                    null !== e.body &&
                                    !(e.body instanceof ArrayBuffer)
                                  )
                                    throw new Error(
                                      'Response is not an ArrayBuffer.'
                                    );
                                  return e.body;
                                })
                              );
                            case 'blob':
                              return l.pipe(
                                V(function (e) {
                                  if (
                                    null !== e.body &&
                                    !(e.body instanceof Blob)
                                  )
                                    throw new Error('Response is not a Blob.');
                                  return e.body;
                                })
                              );
                            case 'text':
                              return l.pipe(
                                V(function (e) {
                                  if (
                                    null !== e.body &&
                                    'string' != typeof e.body
                                  )
                                    throw new Error(
                                      'Response is not a string.'
                                    );
                                  return e.body;
                                })
                              );
                            case 'json':
                            default:
                              return l.pipe(
                                V(function (e) {
                                  return e.body;
                                })
                              );
                          }
                        case 'response':
                          return l;
                        default:
                          throw new Error(
                            'Unreachable: unhandled observe type '.concat(
                              i.observe,
                              '}'
                            )
                          );
                      }
                    },
                  },
                  {
                    key: 'delete',
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.request('DELETE', e, t);
                    },
                  },
                  {
                    key: 'get',
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.request('GET', e, t);
                    },
                  },
                  {
                    key: 'head',
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.request('HEAD', e, t);
                    },
                  },
                  {
                    key: 'jsonp',
                    value: function (e, t) {
                      return this.request('JSONP', e, {
                        params: new Ds().append(t, 'JSONP_CALLBACK'),
                        observe: 'body',
                        responseType: 'json',
                      });
                    },
                  },
                  {
                    key: 'options',
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                      return this.request('OPTIONS', e, t);
                    },
                  },
                  {
                    key: 'patch',
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      return this.request('PATCH', e, Bs(n, t));
                    },
                  },
                  {
                    key: 'post',
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      return this.request('POST', e, Bs(n, t));
                    },
                  },
                  {
                    key: 'put',
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : {};
                      return this.request('PUT', e, Bs(n, t));
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Us)(rt(Os));
            }),
            (Us.ɵprov = ke({ token: Us, factory: Us.ɵfac })),
            Us),
          ru = (function () {
            function e(t, n) {
              p(this, e), (this.next = t), (this.interceptor = n);
            }
            return (
              m(e, [
                {
                  key: 'handle',
                  value: function (e) {
                    return this.interceptor.intercept(e, this.next);
                  },
                },
              ]),
              e
            );
          })(),
          iu = new Je('HTTP_INTERCEPTORS'),
          ou =
            (((qs = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, [
                  {
                    key: 'intercept',
                    value: function (e, t) {
                      return t.handle(e);
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || qs)();
            }),
            (qs.ɵprov = ke({ token: qs, factory: qs.ɵfac })),
            qs),
          au = /^\)\]\}',?\n/,
          su = function e() {
            p(this, e);
          },
          uu =
            (((Gs = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, [
                  {
                    key: 'build',
                    value: function () {
                      return new XMLHttpRequest();
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Gs)();
            }),
            (Gs.ɵprov = ke({ token: Gs, factory: Gs.ɵfac })),
            Gs),
          lu =
            (((Ws = (function () {
              function e(t) {
                p(this, e), (this.xhrFactory = t);
              }
              return (
                m(e, [
                  {
                    key: 'handle',
                    value: function (e) {
                      var t = this;
                      if ('JSONP' === e.method)
                        throw new Error(
                          'Attempted to construct Jsonp request without HttpClientJsonpModule installed.'
                        );
                      return new M(function (n) {
                        var r = t.xhrFactory.build();
                        if (
                          (r.open(e.method, e.urlWithParams),
                          e.withCredentials && (r.withCredentials = !0),
                          e.headers.forEach(function (e, t) {
                            return r.setRequestHeader(e, t.join(','));
                          }),
                          e.headers.has('Accept') ||
                            r.setRequestHeader(
                              'Accept',
                              'application/json, text/plain, */*'
                            ),
                          !e.headers.has('Content-Type'))
                        ) {
                          var i = e.detectContentTypeHeader();
                          null !== i && r.setRequestHeader('Content-Type', i);
                        }
                        if (e.responseType) {
                          var o = e.responseType.toLowerCase();
                          r.responseType = 'json' !== o ? o : 'text';
                        }
                        var a = e.serializeBody(),
                          s = null,
                          u = function () {
                            if (null !== s) return s;
                            var t = 1223 === r.status ? 204 : r.status,
                              n = r.statusText || 'OK',
                              i = new As(r.getAllResponseHeaders()),
                              o =
                                (function (e) {
                                  return 'responseURL' in e && e.responseURL
                                    ? e.responseURL
                                    : /^X-Request-URL:/m.test(
                                        e.getAllResponseHeaders()
                                      )
                                    ? e.getResponseHeader('X-Request-URL')
                                    : null;
                                })(r) || e.url;
                            return (s = new zs({
                              headers: i,
                              status: t,
                              statusText: n,
                              url: o,
                            }));
                          },
                          l = function () {
                            var t = u(),
                              i = t.headers,
                              o = t.status,
                              a = t.statusText,
                              s = t.url,
                              l = null;
                            204 !== o &&
                              (l =
                                void 0 === r.response
                                  ? r.responseText
                                  : r.response),
                              0 === o && (o = l ? 200 : 0);
                            var c = o >= 200 && o < 300;
                            if (
                              'json' === e.responseType &&
                              'string' == typeof l
                            ) {
                              var f = l;
                              l = l.replace(au, '');
                              try {
                                l = '' !== l ? JSON.parse(l) : null;
                              } catch (h) {
                                (l = f),
                                  c && ((c = !1), (l = { error: h, text: l }));
                              }
                            }
                            c
                              ? (n.next(
                                  new Vs({
                                    body: l,
                                    headers: i,
                                    status: o,
                                    statusText: a,
                                    url: s || void 0,
                                  })
                                ),
                                n.complete())
                              : n.error(
                                  new Zs({
                                    error: l,
                                    headers: i,
                                    status: o,
                                    statusText: a,
                                    url: s || void 0,
                                  })
                                );
                          },
                          c = function (e) {
                            var t = u().url,
                              i = new Zs({
                                error: e,
                                status: r.status || 0,
                                statusText: r.statusText || 'Unknown Error',
                                url: t || void 0,
                              });
                            n.error(i);
                          },
                          f = !1,
                          h = function (t) {
                            f || (n.next(u()), (f = !0));
                            var i = {
                              type: Ls.DownloadProgress,
                              loaded: t.loaded,
                            };
                            t.lengthComputable && (i.total = t.total),
                              'text' === e.responseType &&
                                r.responseText &&
                                (i.partialText = r.responseText),
                              n.next(i);
                          },
                          d = function (e) {
                            var t = {
                              type: Ls.UploadProgress,
                              loaded: e.loaded,
                            };
                            e.lengthComputable && (t.total = e.total),
                              n.next(t);
                          };
                        return (
                          r.addEventListener('load', l),
                          r.addEventListener('error', c),
                          e.reportProgress &&
                            (r.addEventListener('progress', h),
                            null !== a &&
                              r.upload &&
                              r.upload.addEventListener('progress', d)),
                          r.send(a),
                          n.next({ type: Ls.Sent }),
                          function () {
                            r.removeEventListener('error', c),
                              r.removeEventListener('load', l),
                              e.reportProgress &&
                                (r.removeEventListener('progress', h),
                                null !== a &&
                                  r.upload &&
                                  r.upload.removeEventListener('progress', d)),
                              r.readyState !== r.DONE && r.abort();
                          }
                        );
                      });
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Ws)(rt(su));
            }),
            (Ws.ɵprov = ke({ token: Ws, factory: Ws.ɵfac })),
            Ws),
          cu = new Je('XSRF_COOKIE_NAME'),
          fu = new Je('XSRF_HEADER_NAME'),
          hu = function e() {
            p(this, e);
          },
          du =
            (((Ys = (function () {
              function e(t, n, r) {
                p(this, e),
                  (this.doc = t),
                  (this.platform = n),
                  (this.cookieName = r),
                  (this.lastCookieString = ''),
                  (this.lastToken = null),
                  (this.parseCount = 0);
              }
              return (
                m(e, [
                  {
                    key: 'getToken',
                    value: function () {
                      if ('server' === this.platform) return null;
                      var e = this.doc.cookie || '';
                      return (
                        e !== this.lastCookieString &&
                          (this.parseCount++,
                          (this.lastToken = Va(e, this.cookieName)),
                          (this.lastCookieString = e)),
                        this.lastToken
                      );
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Ys)(rt(ja), rt(Xo), rt(cu));
            }),
            (Ys.ɵprov = ke({ token: Ys, factory: Ys.ɵfac })),
            Ys),
          vu =
            (((Qs = (function () {
              function e(t, n) {
                p(this, e), (this.tokenService = t), (this.headerName = n);
              }
              return (
                m(e, [
                  {
                    key: 'intercept',
                    value: function (e, t) {
                      var n = e.url.toLowerCase();
                      if (
                        'GET' === e.method ||
                        'HEAD' === e.method ||
                        n.startsWith('http://') ||
                        n.startsWith('https://')
                      )
                        return t.handle(e);
                      var r = this.tokenService.getToken();
                      return (
                        null === r ||
                          e.headers.has(this.headerName) ||
                          (e = e.clone({
                            headers: e.headers.set(this.headerName, r),
                          })),
                        t.handle(e)
                      );
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Qs)(rt(hu), rt(fu));
            }),
            (Qs.ɵprov = ke({ token: Qs, factory: Qs.ɵfac })),
            Qs),
          pu =
            (((Xs = (function () {
              function e(t, n) {
                p(this, e),
                  (this.backend = t),
                  (this.injector = n),
                  (this.chain = null);
              }
              return (
                m(e, [
                  {
                    key: 'handle',
                    value: function (e) {
                      if (null === this.chain) {
                        var t = this.injector.get(iu, []);
                        this.chain = t.reduceRight(function (e, t) {
                          return new ru(e, t);
                        }, this.backend);
                      }
                      return this.chain.handle(e);
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Xs)(rt(Is), rt(Ni));
            }),
            (Xs.ɵprov = ke({ token: Xs, factory: Xs.ɵfac })),
            Xs),
          yu =
            (((Ks = (function () {
              function e() {
                p(this, e);
              }
              return (
                m(e, null, [
                  {
                    key: 'disable',
                    value: function () {
                      return {
                        ngModule: e,
                        providers: [{ provide: vu, useClass: ou }],
                      };
                    },
                  },
                  {
                    key: 'withOptions',
                    value: function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                      return {
                        ngModule: e,
                        providers: [
                          t.cookieName
                            ? { provide: cu, useValue: t.cookieName }
                            : [],
                          t.headerName
                            ? { provide: fu, useValue: t.headerName }
                            : [],
                        ],
                      };
                    },
                  },
                ]),
                e
              );
            })()).ɵmod = kt({ type: Ks })),
            (Ks.ɵinj = be({
              factory: function (e) {
                return new (e || Ks)();
              },
              providers: [
                vu,
                { provide: iu, useExisting: vu, multi: !0 },
                { provide: hu, useClass: du },
                { provide: cu, useValue: 'XSRF-TOKEN' },
                { provide: fu, useValue: 'X-XSRF-TOKEN' },
              ],
            })),
            Ks),
          mu =
            (((Js = function e() {
              p(this, e);
            }).ɵmod = kt({ type: Js })),
            (Js.ɵinj = be({
              factory: function (e) {
                return new (e || Js)();
              },
              providers: [
                nu,
                { provide: Os, useClass: pu },
                lu,
                { provide: Is, useExisting: lu },
                uu,
                { provide: su, useExisting: uu },
              ],
              imports: [
                [
                  yu.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                  }),
                ],
              ],
            })),
            Js),
          gu = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i;
              return (
                p(this, n),
                ((i = t.call(this, e, r)).scheduler = e),
                (i.work = r),
                i
              );
            }
            return (
              m(n, [
                {
                  key: 'schedule',
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                    return t > 0
                      ? i(f(n.prototype), 'schedule', this).call(this, e, t)
                      : ((this.delay = t),
                        (this.state = e),
                        this.scheduler.flush(this),
                        this);
                  },
                },
                {
                  key: 'execute',
                  value: function (e, t) {
                    return t > 0 || this.closed
                      ? i(f(n.prototype), 'execute', this).call(this, e, t)
                      : this._execute(e, t);
                  },
                },
                {
                  key: 'requestAsyncId',
                  value: function (e, t) {
                    var r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0;
                    return (null !== r && r > 0) ||
                      (null === r && this.delay > 0)
                      ? i(f(n.prototype), 'requestAsyncId', this).call(
                          this,
                          e,
                          t,
                          r
                        )
                      : e.flush(this);
                  },
                },
              ]),
              n
            );
          })(
            (function (e) {
              o(n, e);
              var t = s(n);
              function n(e, r) {
                var i;
                return (
                  p(this, n),
                  ((i = t.call(this, e, r)).scheduler = e),
                  (i.work = r),
                  (i.pending = !1),
                  i
                );
              }
              return (
                m(n, [
                  {
                    key: 'schedule',
                    value: function (e) {
                      var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0;
                      if (this.closed) return this;
                      this.state = e;
                      var n = this.id,
                        r = this.scheduler;
                      return (
                        null != n && (this.id = this.recycleAsyncId(r, n, t)),
                        (this.pending = !0),
                        (this.delay = t),
                        (this.id =
                          this.id || this.requestAsyncId(r, this.id, t)),
                        this
                      );
                    },
                  },
                  {
                    key: 'requestAsyncId',
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0;
                      return setInterval(e.flush.bind(e, this), n);
                    },
                  },
                  {
                    key: 'recycleAsyncId',
                    value: function (e, t) {
                      var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0;
                      if (null !== n && this.delay === n && !1 === this.pending)
                        return t;
                      clearInterval(t);
                    },
                  },
                  {
                    key: 'execute',
                    value: function (e, t) {
                      if (this.closed)
                        return new Error('executing a cancelled action');
                      this.pending = !1;
                      var n = this._execute(e, t);
                      if (n) return n;
                      !1 === this.pending &&
                        null != this.id &&
                        (this.id = this.recycleAsyncId(
                          this.scheduler,
                          this.id,
                          null
                        ));
                    },
                  },
                  {
                    key: '_execute',
                    value: function (e, t) {
                      var n = !1,
                        r = void 0;
                      try {
                        this.work(e);
                      } catch (i) {
                        (n = !0), (r = (!!i && i) || new Error(i));
                      }
                      if (n) return this.unsubscribe(), r;
                    },
                  },
                  {
                    key: '_unsubscribe',
                    value: function () {
                      var e = this.id,
                        t = this.scheduler,
                        n = t.actions,
                        r = n.indexOf(this);
                      (this.work = null),
                        (this.state = null),
                        (this.pending = !1),
                        (this.scheduler = null),
                        -1 !== r && n.splice(r, 1),
                        null != e &&
                          (this.id = this.recycleAsyncId(t, e, null)),
                        (this.delay = null);
                    },
                  },
                ]),
                n
              );
            })(
              (function (e) {
                o(n, e);
                var t = s(n);
                function n(e, r) {
                  return p(this, n), t.call(this);
                }
                return (
                  m(n, [
                    {
                      key: 'schedule',
                      value: function (e) {
                        return this;
                      },
                    },
                  ]),
                  n
                );
              })(T)
            )
          ),
          _u =
            ((($s = (function () {
              function e(t) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e.now;
                p(this, e), (this.SchedulerAction = t), (this.now = n);
              }
              return (
                m(e, [
                  {
                    key: 'schedule',
                    value: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                      return new this.SchedulerAction(this, e).schedule(n, t);
                    },
                  },
                ]),
                e
              );
            })()).now = function () {
              return Date.now();
            }),
            $s),
          ku = new ((function (e) {
            o(n, e);
            var t = s(n);
            function n() {
              return p(this, n), t.apply(this, arguments);
            }
            return n;
          })(
            (function (e) {
              o(n, e);
              var t = s(n);
              function n(e) {
                var r,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : _u.now;
                return (
                  p(this, n),
                  ((r = t.call(this, e, function () {
                    return n.delegate && n.delegate !== l(r)
                      ? n.delegate.now()
                      : i();
                  })).actions = []),
                  (r.active = !1),
                  (r.scheduled = void 0),
                  r
                );
              }
              return (
                m(n, [
                  {
                    key: 'schedule',
                    value: function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                      return n.delegate && n.delegate !== this
                        ? n.delegate.schedule(e, t, r)
                        : i(f(n.prototype), 'schedule', this).call(
                            this,
                            e,
                            t,
                            r
                          );
                    },
                  },
                  {
                    key: 'flush',
                    value: function (e) {
                      var t = this.actions;
                      if (this.active) t.push(e);
                      else {
                        var n;
                        this.active = !0;
                        do {
                          if ((n = e.execute(e.state, e.delay))) break;
                        } while ((e = t.shift()));
                        if (((this.active = !1), n)) {
                          for (; (e = t.shift()); ) e.unsubscribe();
                          throw n;
                        }
                      }
                    },
                  },
                ]),
                n
              );
            })(_u)
          ))(gu),
          bu = new M(function (e) {
            return e.complete();
          }),
          wu =
            (((eu = (function () {
              function e(t, n, r) {
                p(this, e),
                  (this.kind = t),
                  (this.value = n),
                  (this.error = r),
                  (this.hasValue = 'N' === t);
              }
              return (
                m(
                  e,
                  [
                    {
                      key: 'observe',
                      value: function (e) {
                        switch (this.kind) {
                          case 'N':
                            return e.next && e.next(this.value);
                          case 'E':
                            return e.error && e.error(this.error);
                          case 'C':
                            return e.complete && e.complete();
                        }
                      },
                    },
                    {
                      key: 'do',
                      value: function (e, t, n) {
                        switch (this.kind) {
                          case 'N':
                            return e && e(this.value);
                          case 'E':
                            return t && t(this.error);
                          case 'C':
                            return n && n();
                        }
                      },
                    },
                    {
                      key: 'accept',
                      value: function (e, t, n) {
                        return e && 'function' == typeof e.next
                          ? this.observe(e)
                          : this.do(e, t, n);
                      },
                    },
                    {
                      key: 'toObservable',
                      value: function () {
                        switch (this.kind) {
                          case 'N':
                            return Cs(this.value);
                          case 'E':
                            return (
                              (e = this.error),
                              new M(function (t) {
                                return t.error(e);
                              })
                            );
                          case 'C':
                            return bu;
                        }
                        var e;
                        throw new Error('unexpected notification kind value');
                      },
                    },
                  ],
                  [
                    {
                      key: 'createNext',
                      value: function (t) {
                        return void 0 !== t
                          ? new e('N', t)
                          : e.undefinedValueNotification;
                      },
                    },
                    {
                      key: 'createError',
                      value: function (t) {
                        return new e('E', void 0, t);
                      },
                    },
                    {
                      key: 'createComplete',
                      value: function () {
                        return e.completeNotification;
                      },
                    },
                  ]
                ),
                e
              );
            })()).completeNotification = new eu('C')),
            (eu.undefinedValueNotification = new eu('N', void 0)),
            eu),
          Eu = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
              return (
                p(this, n),
                ((i = t.call(this, e)).scheduler = r),
                (i.delay = o),
                i
              );
            }
            return (
              m(
                n,
                [
                  {
                    key: 'scheduleMessage',
                    value: function (e) {
                      this.destination.add(
                        this.scheduler.schedule(
                          n.dispatch,
                          this.delay,
                          new Tu(e, this.destination)
                        )
                      );
                    },
                  },
                  {
                    key: '_next',
                    value: function (e) {
                      this.scheduleMessage(wu.createNext(e));
                    },
                  },
                  {
                    key: '_error',
                    value: function (e) {
                      this.scheduleMessage(wu.createError(e)),
                        this.unsubscribe();
                    },
                  },
                  {
                    key: '_complete',
                    value: function () {
                      this.scheduleMessage(wu.createComplete()),
                        this.unsubscribe();
                    },
                  },
                ],
                [
                  {
                    key: 'dispatch',
                    value: function (e) {
                      var t = e.notification,
                        n = e.destination;
                      t.observe(n), this.unsubscribe();
                    },
                  },
                ]
              ),
              n
            );
          })(x),
          Tu = function e(t, n) {
            p(this, e), (this.notification = t), (this.destination = n);
          },
          Cu = (function (e) {
            o(n, e);
            var t = s(n);
            function n() {
              var e,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Number.POSITIVE_INFINITY,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Number.POSITIVE_INFINITY,
                o = arguments.length > 2 ? arguments[2] : void 0;
              return (
                p(this, n),
                ((e = t.call(this)).scheduler = o),
                (e._events = []),
                (e._infiniteTimeWindow = !1),
                (e._bufferSize = r < 1 ? 1 : r),
                (e._windowTime = i < 1 ? 1 : i),
                i === Number.POSITIVE_INFINITY
                  ? ((e._infiniteTimeWindow = !0),
                    (e.next = e.nextInfiniteTimeWindow))
                  : (e.next = e.nextTimeWindow),
                e
              );
            }
            return (
              m(n, [
                {
                  key: 'nextInfiniteTimeWindow',
                  value: function (e) {
                    if (!this.isStopped) {
                      var t = this._events;
                      t.push(e), t.length > this._bufferSize && t.shift();
                    }
                    i(f(n.prototype), 'next', this).call(this, e);
                  },
                },
                {
                  key: 'nextTimeWindow',
                  value: function (e) {
                    this.isStopped ||
                      (this._events.push(new Su(this._getNow(), e)),
                      this._trimBufferThenGetEvents()),
                      i(f(n.prototype), 'next', this).call(this, e);
                  },
                },
                {
                  key: '_subscribe',
                  value: function (e) {
                    var t,
                      n = this._infiniteTimeWindow,
                      r = n ? this._events : this._trimBufferThenGetEvents(),
                      i = this.scheduler,
                      o = r.length;
                    if (this.closed) throw new P();
                    if (
                      (this.isStopped || this.hasError
                        ? (t = T.EMPTY)
                        : (this.observers.push(e), (t = new H(this, e))),
                      i && e.add((e = new Eu(e, i))),
                      n)
                    )
                      for (var a = 0; a < o && !e.closed; a++) e.next(r[a]);
                    else
                      for (var s = 0; s < o && !e.closed; s++)
                        e.next(r[s].value);
                    return (
                      this.hasError
                        ? e.error(this.thrownError)
                        : this.isStopped && e.complete(),
                      t
                    );
                  },
                },
                {
                  key: '_getNow',
                  value: function () {
                    return (this.scheduler || ku).now();
                  },
                },
                {
                  key: '_trimBufferThenGetEvents',
                  value: function () {
                    for (
                      var e = this._getNow(),
                        t = this._bufferSize,
                        n = this._windowTime,
                        r = this._events,
                        i = r.length,
                        o = 0;
                      o < i && !(e - r[o].time < n);

                    )
                      o++;
                    return (
                      i > t && (o = Math.max(o, i - t)),
                      o > 0 && r.splice(0, o),
                      r
                    );
                  },
                },
              ]),
              n
            );
          })(L),
          Su = function e(t, n) {
            p(this, e), (this.time = t), (this.value = n);
          },
          xu = (function () {
            function e(t) {
              p(this, e), (this.project = t);
            }
            return (
              m(e, [
                {
                  key: 'call',
                  value: function (e, t) {
                    return t.subscribe(new Ou(e, this.project));
                  },
                },
              ]),
              e
            );
          })(),
          Ou = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r) {
              var i;
              return (
                p(this, n),
                ((i = t.call(this, e)).project = r),
                (i.index = 0),
                i
              );
            }
            return (
              m(n, [
                {
                  key: '_next',
                  value: function (e) {
                    var t,
                      n = this.index++;
                    try {
                      t = this.project(e, n);
                    } catch (r) {
                      return void this.destination.error(r);
                    }
                    this._innerSub(t);
                  },
                },
                {
                  key: '_innerSub',
                  value: function (e) {
                    var t = this.innerSubscription;
                    t && t.unsubscribe();
                    var n = new Q(this),
                      r = this.destination;
                    r.add(n),
                      (this.innerSubscription = $(e, n)),
                      this.innerSubscription !== n &&
                        r.add(this.innerSubscription);
                  },
                },
                {
                  key: '_complete',
                  value: function () {
                    var e = this.innerSubscription;
                    (e && !e.closed) ||
                      i(f(n.prototype), '_complete', this).call(this),
                      this.unsubscribe();
                  },
                },
                {
                  key: '_unsubscribe',
                  value: function () {
                    this.innerSubscription = void 0;
                  },
                },
                {
                  key: 'notifyComplete',
                  value: function () {
                    (this.innerSubscription = void 0),
                      this.isStopped &&
                        i(f(n.prototype), '_complete', this).call(this);
                  },
                },
                {
                  key: 'notifyNext',
                  value: function (e) {
                    this.destination.next(e);
                  },
                },
              ]),
              n
            );
          })(Y),
          Iu =
            (tu = Element.prototype).matches ||
            tu.matchesSelector ||
            tu.mozMatchesSelector ||
            tu.msMatchesSelector ||
            tu.oMatchesSelector ||
            tu.webkitMatchesSelector,
          Au = {
            schedule: function (e, t) {
              var n = setTimeout(e, t);
              return function () {
                return clearTimeout(n);
              };
            },
            scheduleBeforeRender: function (e) {
              if ('undefined' == typeof window) return Au.schedule(e, 0);
              if (void 0 === window.requestAnimationFrame)
                return Au.schedule(e, 16);
              var t = window.requestAnimationFrame(e);
              return function () {
                return window.cancelAnimationFrame(t);
              };
            },
          };
        function Nu(e, t, n) {
          var r = n;
          return (
            (function (e) {
              return !!e && e.nodeType === Node.ELEMENT_NODE;
            })(e) &&
              t.some(function (t, n) {
                return !(
                  '*' === t ||
                  !(function (e, t) {
                    return Iu.call(e, t);
                  })(e, t) ||
                  ((r = n), 0)
                );
              }),
            r
          );
        }
        var Mu = (function () {
            function e(t, n) {
              p(this, e),
                (this.componentFactory = n.get(Ui).resolveComponentFactory(t));
            }
            return (
              m(e, [
                {
                  key: 'create',
                  value: function (e) {
                    return new Du(this.componentFactory, e);
                  },
                },
              ]),
              e
            );
          })(),
          Du = (function () {
            function e(t, r) {
              p(this, e),
                (this.componentFactory = t),
                (this.injector = r),
                (this.eventEmitters = new Cu(1)),
                (this.events = this.eventEmitters.pipe(
                  (function e(t, n) {
                    return 'function' == typeof n
                      ? function (r) {
                          return r.pipe(
                            e(function (e, r) {
                              return X(t(e, r)).pipe(
                                V(function (t, i) {
                                  return n(e, t, r, i);
                                })
                              );
                            })
                          );
                        }
                      : function (e) {
                          return e.lift(new xu(t));
                        };
                  })(function (e) {
                    return ie.apply(void 0, n(e));
                  })
                )),
                (this.componentRef = null),
                (this.inputChanges = null),
                (this.implementsOnChanges = !1),
                (this.scheduledChangeDetectionFn = null),
                (this.scheduledDestroyFn = null),
                (this.initialInputValues = new Map()),
                (this.unchangedInputs = new Set()),
                (this.ngZone = this.injector.get(fa)),
                (this.elementZone =
                  'undefined' == typeof Zone
                    ? null
                    : this.ngZone.run(function () {
                        return Zone.current;
                      }));
            }
            return (
              m(e, [
                {
                  key: 'connect',
                  value: function (e) {
                    var t = this;
                    this.runInZone(function () {
                      if (null !== t.scheduledDestroyFn)
                        return (
                          t.scheduledDestroyFn(),
                          void (t.scheduledDestroyFn = null)
                        );
                      null === t.componentRef && t.initializeComponent(e);
                    });
                  },
                },
                {
                  key: 'disconnect',
                  value: function () {
                    var e = this;
                    this.runInZone(function () {
                      null !== e.componentRef &&
                        null === e.scheduledDestroyFn &&
                        (e.scheduledDestroyFn = Au.schedule(function () {
                          null !== e.componentRef &&
                            (e.componentRef.destroy(), (e.componentRef = null));
                        }, 10));
                    });
                  },
                },
                {
                  key: 'getInputValue',
                  value: function (e) {
                    var t = this;
                    return this.runInZone(function () {
                      return null === t.componentRef
                        ? t.initialInputValues.get(e)
                        : t.componentRef.instance[e];
                    });
                  },
                },
                {
                  key: 'setInputValue',
                  value: function (e, t) {
                    var n = this;
                    this.runInZone(function () {
                      var r, i;
                      null !== n.componentRef
                        ? (((r = t) !== (i = n.getInputValue(e)) &&
                            (r == r || i == i)) ||
                            (void 0 === t && n.unchangedInputs.has(e))) &&
                          (n.recordInputChange(e, t),
                          (n.componentRef.instance[e] = t),
                          n.scheduleDetectChanges())
                        : n.initialInputValues.set(e, t);
                    });
                  },
                },
                {
                  key: 'initializeComponent',
                  value: function (e) {
                    var t = Ni.create({ providers: [], parent: this.injector }),
                      n = (function (e, t) {
                        var n = e.childNodes,
                          r = t.map(function () {
                            return [];
                          }),
                          i = -1;
                        t.some(function (e, t) {
                          return '*' === e && ((i = t), !0);
                        });
                        for (var o = 0, a = n.length; o < a; ++o) {
                          var s = n[o],
                            u = Nu(s, t, i);
                          -1 !== u && r[u].push(s);
                        }
                        return r;
                      })(e, this.componentFactory.ngContentSelectors);
                    (this.componentRef = this.componentFactory.create(t, n, e)),
                      (this.implementsOnChanges =
                        'function' ==
                        typeof this.componentRef.instance.ngOnChanges),
                      this.initializeInputs(),
                      this.initializeOutputs(this.componentRef),
                      this.detectChanges(),
                      this.injector
                        .get(Ia)
                        .attachView(this.componentRef.hostView);
                  },
                },
                {
                  key: 'initializeInputs',
                  value: function () {
                    var e = this;
                    this.componentFactory.inputs.forEach(function (t) {
                      var n = t.propName;
                      e.implementsOnChanges && e.unchangedInputs.add(n),
                        e.initialInputValues.has(n) &&
                          e.setInputValue(n, e.initialInputValues.get(n));
                    }),
                      this.initialInputValues.clear();
                  },
                },
                {
                  key: 'initializeOutputs',
                  value: function (e) {
                    var t = this.componentFactory.outputs.map(function (t) {
                      var n = t.propName,
                        r = t.templateName;
                      return e.instance[n].pipe(
                        V(function (e) {
                          return { name: r, value: e };
                        })
                      );
                    });
                    this.eventEmitters.next(t);
                  },
                },
                {
                  key: 'callNgOnChanges',
                  value: function (e) {
                    if (
                      this.implementsOnChanges &&
                      null !== this.inputChanges
                    ) {
                      var t = this.inputChanges;
                      (this.inputChanges = null), e.instance.ngOnChanges(t);
                    }
                  },
                },
                {
                  key: 'scheduleDetectChanges',
                  value: function () {
                    var e = this;
                    this.scheduledChangeDetectionFn ||
                      (this.scheduledChangeDetectionFn =
                        Au.scheduleBeforeRender(function () {
                          (e.scheduledChangeDetectionFn = null),
                            e.detectChanges();
                        }));
                  },
                },
                {
                  key: 'recordInputChange',
                  value: function (e, t) {
                    if (
                      null === this.componentRef ||
                      this.implementsOnChanges
                    ) {
                      null === this.inputChanges && (this.inputChanges = {});
                      var n = this.inputChanges[e];
                      if (n) n.currentValue = t;
                      else {
                        var r = this.unchangedInputs.has(e);
                        this.unchangedInputs.delete(e);
                        var i = r ? void 0 : this.getInputValue(e);
                        this.inputChanges[e] = new Nt(i, t, r);
                      }
                    }
                  },
                },
                {
                  key: 'detectChanges',
                  value: function () {
                    null !== this.componentRef &&
                      (this.callNgOnChanges(this.componentRef),
                      this.componentRef.changeDetectorRef.detectChanges());
                  },
                },
                {
                  key: 'runInZone',
                  value: function (e) {
                    return this.elementZone && Zone.current !== this.elementZone
                      ? this.ngZone.run(e)
                      : e();
                  },
                },
              ]),
              e
            );
          })(),
          Ru = (function (e) {
            o(n, e);
            var t = s(n);
            function n() {
              var e;
              return (
                p(this, n),
                ((e = t.apply(this, arguments)).ngElementEventsSubscription =
                  null),
                e
              );
            }
            return n;
          })(e(HTMLElement));
        function Pu(e, t) {
          e.forEach(function (e) {
            var n = e.propName;
            Object.defineProperty(t, n, {
              get: function () {
                return this.ngElementStrategy.getInputValue(n);
              },
              set: function (e) {
                this.ngElementStrategy.setInputValue(n, e);
              },
              configurable: !0,
              enumerable: !0,
            });
          });
        }
        var Hu,
          ju =
            (((Hu = function e() {
              p(this, e);
            }).ɵmod = kt({ type: Hu })),
            (Hu.ɵinj = be({
              factory: function (e) {
                return new (e || Hu)();
              },
              imports: [[Ga]],
            })),
            Hu);
        function Lu() {}
        var Fu,
          zu = (function () {
            function e(t, n, r) {
              p(this, e),
                (this.nextOrObserver = t),
                (this.error = n),
                (this.complete = r);
            }
            return (
              m(e, [
                {
                  key: 'call',
                  value: function (e, t) {
                    return t.subscribe(
                      new Vu(e, this.nextOrObserver, this.error, this.complete)
                    );
                  },
                },
              ]),
              e
            );
          })(),
          Vu = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e, r, i, o) {
              var a;
              return (
                p(this, n),
                ((a = t.call(this, e))._tapNext = Lu),
                (a._tapError = Lu),
                (a._tapComplete = Lu),
                (a._tapError = i || Lu),
                (a._tapComplete = o || Lu),
                d(r)
                  ? ((a._context = l(a)), (a._tapNext = r))
                  : r &&
                    ((a._context = r),
                    (a._tapNext = r.next || Lu),
                    (a._tapError = r.error || Lu),
                    (a._tapComplete = r.complete || Lu)),
                a
              );
            }
            return (
              m(n, [
                {
                  key: '_next',
                  value: function (e) {
                    try {
                      this._tapNext.call(this._context, e);
                    } catch (t) {
                      return void this.destination.error(t);
                    }
                    this.destination.next(e);
                  },
                },
                {
                  key: '_error',
                  value: function (e) {
                    try {
                      this._tapError.call(this._context, e);
                    } catch (e) {
                      return void this.destination.error(e);
                    }
                    this.destination.error(e);
                  },
                },
                {
                  key: '_complete',
                  value: function () {
                    try {
                      this._tapComplete.call(this._context);
                    } catch (e) {
                      return void this.destination.error(e);
                    }
                    return this.destination.complete();
                  },
                },
              ]),
              n
            );
          })(x),
          Zu = [];
        !(function (e) {
          (e.BORDER_BOX = 'border-box'),
            (e.CONTENT_BOX = 'content-box'),
            (e.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box');
        })(Fu || (Fu = {}));
        var Bu,
          Uu,
          qu,
          Wu,
          Gu,
          Ju = function (e) {
            return Object.freeze(e);
          },
          Ku = function (e, t) {
            (this.inlineSize = e), (this.blockSize = t), Ju(this);
          },
          Xu = (function () {
            function e(e, t, n, r) {
              return (
                (this.x = e),
                (this.y = t),
                (this.width = n),
                (this.height = r),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                Ju(this)
              );
            }
            return (
              (e.prototype.toJSON = function () {
                var e = this;
                return {
                  x: e.x,
                  y: e.y,
                  top: e.top,
                  right: e.right,
                  bottom: e.bottom,
                  left: e.left,
                  width: e.width,
                  height: e.height,
                };
              }),
              (e.fromRect = function (t) {
                return new e(t.x, t.y, t.width, t.height);
              }),
              e
            );
          })(),
          Qu = function (e) {
            return e instanceof SVGElement && 'getBBox' in e;
          },
          Yu = function (e) {
            if (Qu(e)) {
              var t = e.getBBox();
              return !t.width && !t.height;
            }
            return !(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          },
          $u = function (e) {
            var t, n;
            if (e instanceof Element) return !0;
            var r =
              null ===
                (n =
                  null === (t = e) || void 0 === t
                    ? void 0
                    : t.ownerDocument) || void 0 === n
                ? void 0
                : n.defaultView;
            return !!(r && e instanceof r.Element);
          },
          el = 'undefined' != typeof window ? window : {},
          tl = new WeakMap(),
          nl = /auto|scroll/,
          rl = /^tb|vertical/,
          il = /msie|trident/i.test(el.navigator && el.navigator.userAgent),
          ol = function (e) {
            return parseFloat(e || '0');
          },
          al = function (e, t, n) {
            return (
              void 0 === e && (e = 0),
              void 0 === t && (t = 0),
              void 0 === n && (n = !1),
              new Ku((n ? t : e) || 0, (n ? e : t) || 0)
            );
          },
          sl = Ju({
            devicePixelContentBoxSize: al(),
            borderBoxSize: al(),
            contentBoxSize: al(),
            contentRect: new Xu(0, 0, 0, 0),
          }),
          ul = function (e, t) {
            if ((void 0 === t && (t = !1), tl.has(e) && !t)) return tl.get(e);
            if (Yu(e)) return tl.set(e, sl), sl;
            var n = getComputedStyle(e),
              r = Qu(e) && e.ownerSVGElement && e.getBBox(),
              i = !il && 'border-box' === n.boxSizing,
              o = rl.test(n.writingMode || ''),
              a = !r && nl.test(n.overflowY || ''),
              s = !r && nl.test(n.overflowX || ''),
              u = r ? 0 : ol(n.paddingTop),
              l = r ? 0 : ol(n.paddingRight),
              c = r ? 0 : ol(n.paddingBottom),
              f = r ? 0 : ol(n.paddingLeft),
              h = r ? 0 : ol(n.borderTopWidth),
              d = r ? 0 : ol(n.borderRightWidth),
              v = r ? 0 : ol(n.borderBottomWidth),
              p = f + l,
              y = u + c,
              m = (r ? 0 : ol(n.borderLeftWidth)) + d,
              g = h + v,
              _ = s ? e.offsetHeight - g - e.clientHeight : 0,
              k = a ? e.offsetWidth - m - e.clientWidth : 0,
              b = i ? p + m : 0,
              w = i ? y + g : 0,
              E = r ? r.width : ol(n.width) - b - k,
              T = r ? r.height : ol(n.height) - w - _,
              C = E + p + k + m,
              S = T + y + _ + g,
              x = Ju({
                devicePixelContentBoxSize: al(
                  Math.round(E * devicePixelRatio),
                  Math.round(T * devicePixelRatio),
                  o
                ),
                borderBoxSize: al(C, S, o),
                contentBoxSize: al(E, T, o),
                contentRect: new Xu(f, u, E, T),
              });
            return tl.set(e, x), x;
          },
          ll = function (e, t, n) {
            var r = ul(e, n),
              i = r.borderBoxSize,
              o = r.contentBoxSize,
              a = r.devicePixelContentBoxSize;
            switch (t) {
              case Fu.DEVICE_PIXEL_CONTENT_BOX:
                return a;
              case Fu.BORDER_BOX:
                return i;
              default:
                return o;
            }
          },
          cl = function (e) {
            var t = ul(e);
            (this.target = e),
              (this.contentRect = t.contentRect),
              (this.borderBoxSize = Ju([t.borderBoxSize])),
              (this.contentBoxSize = Ju([t.contentBoxSize])),
              (this.devicePixelContentBoxSize = Ju([
                t.devicePixelContentBoxSize,
              ]));
          },
          fl = function (e) {
            if (Yu(e)) return 1 / 0;
            for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
            return t;
          },
          hl = function () {
            var e = 1 / 0,
              t = [];
            Zu.forEach(function (n) {
              if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function (t) {
                  var n = new cl(t.target),
                    i = fl(t.target);
                  r.push(n),
                    (t.lastReportedSize = ll(t.target, t.observedBox)),
                    i < e && (e = i);
                }),
                  t.push(function () {
                    n.callback.call(n.observer, r, n.observer);
                  }),
                  n.activeTargets.splice(0, n.activeTargets.length);
              }
            });
            for (var n = 0, r = t; n < r.length; n++) (0, r[n])();
            return e;
          },
          dl = function (e) {
            Zu.forEach(function (t) {
              t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (n) {
                  n.isActive() &&
                    (fl(n.target) > e
                      ? t.activeTargets.push(n)
                      : t.skippedTargets.push(n));
                });
            });
          },
          vl = [],
          pl = 0,
          yl = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          ml = [
            'resize',
            'load',
            'transitionend',
            'animationend',
            'animationstart',
            'animationiteration',
            'keyup',
            'keydown',
            'mouseup',
            'mousedown',
            'mouseover',
            'mouseout',
            'blur',
            'focus',
          ],
          gl = function (e) {
            return void 0 === e && (e = 0), Date.now() + e;
          },
          _l = !1,
          kl = new ((function () {
            function e() {
              var e = this;
              (this.stopped = !0),
                (this.listener = function () {
                  return e.schedule();
                });
            }
            return (
              (e.prototype.run = function (e) {
                var t = this;
                if ((void 0 === e && (e = 250), !_l)) {
                  _l = !0;
                  var n,
                    r = gl(e);
                  (n = function () {
                    var n = !1;
                    try {
                      n = (function () {
                        var e,
                          t = 0;
                        for (
                          dl(t);
                          Zu.some(function (e) {
                            return e.activeTargets.length > 0;
                          });

                        )
                          (t = hl()), dl(t);
                        return (
                          Zu.some(function (e) {
                            return e.skippedTargets.length > 0;
                          }) &&
                            ('function' == typeof ErrorEvent
                              ? (e = new ErrorEvent('error', {
                                  message:
                                    'ResizeObserver loop completed with undelivered notifications.',
                                }))
                              : ((e = document.createEvent('Event')).initEvent(
                                  'error',
                                  !1,
                                  !1
                                ),
                                (e.message =
                                  'ResizeObserver loop completed with undelivered notifications.')),
                            window.dispatchEvent(e)),
                          t > 0
                        );
                      })();
                    } finally {
                      if (((_l = !1), (e = r - gl()), !pl)) return;
                      n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                    }
                  }),
                    (function (e) {
                      if (!Bu) {
                        var t = 0,
                          r = document.createTextNode('');
                        new MutationObserver(function () {
                          return vl.splice(0).forEach(function (e) {
                            return e();
                          });
                        }).observe(r, { characterData: !0 }),
                          (Bu = function () {
                            r.textContent = '' + (t ? t-- : t++);
                          });
                      }
                      vl.push(function () {
                        requestAnimationFrame(n);
                      }),
                        Bu();
                    })();
                }
              }),
              (e.prototype.schedule = function () {
                this.stop(), this.run();
              }),
              (e.prototype.observe = function () {
                var e = this,
                  t = function () {
                    return e.observer && e.observer.observe(document.body, yl);
                  };
                document.body
                  ? t()
                  : el.addEventListener('DOMContentLoaded', t);
              }),
              (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                  ((this.stopped = !1),
                  (this.observer = new MutationObserver(this.listener)),
                  this.observe(),
                  ml.forEach(function (t) {
                    return el.addEventListener(t, e.listener, !0);
                  }));
              }),
              (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                  (this.observer && this.observer.disconnect(),
                  ml.forEach(function (t) {
                    return el.removeEventListener(t, e.listener, !0);
                  }),
                  (this.stopped = !0));
              }),
              e
            );
          })())(),
          bl = function (e) {
            !pl && e > 0 && kl.start(), !(pl += e) && kl.stop();
          },
          wl = (function () {
            function e(e, t) {
              (this.target = e),
                (this.observedBox = t || Fu.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
            }
            return (
              (e.prototype.isActive = function () {
                var e,
                  t = ll(this.target, this.observedBox, !0);
                return (
                  Qu((e = this.target)) ||
                    (function (e) {
                      switch (e.tagName) {
                        case 'INPUT':
                          if ('image' !== e.type) break;
                        case 'VIDEO':
                        case 'AUDIO':
                        case 'EMBED':
                        case 'OBJECT':
                        case 'CANVAS':
                        case 'IFRAME':
                        case 'IMG':
                          return !0;
                      }
                      return !1;
                    })(e) ||
                    'inline' !== getComputedStyle(e).display ||
                    (this.lastReportedSize = t),
                  this.lastReportedSize.inlineSize !== t.inlineSize ||
                    this.lastReportedSize.blockSize !== t.blockSize
                );
              }),
              e
            );
          })(),
          El = function (e, t) {
            (this.activeTargets = []),
              (this.skippedTargets = []),
              (this.observationTargets = []),
              (this.observer = e),
              (this.callback = t);
          },
          Tl = new WeakMap(),
          Cl = function (e, t) {
            for (var n = 0; n < e.length; n += 1)
              if (e[n].target === t) return n;
            return -1;
          },
          Sl = (function () {
            function e() {}
            return (
              (e.connect = function (e, t) {
                var n = new El(e, t);
                Tl.set(e, n);
              }),
              (e.observe = function (e, t, n) {
                var r = Tl.get(e),
                  i = 0 === r.observationTargets.length;
                Cl(r.observationTargets, t) < 0 &&
                  (i && Zu.push(r),
                  r.observationTargets.push(new wl(t, n && n.box)),
                  bl(1),
                  kl.schedule());
              }),
              (e.unobserve = function (e, t) {
                var n = Tl.get(e),
                  r = Cl(n.observationTargets, t);
                r >= 0 &&
                  (1 === n.observationTargets.length &&
                    Zu.splice(Zu.indexOf(n), 1),
                  n.observationTargets.splice(r, 1),
                  bl(-1));
              }),
              (e.disconnect = function (e) {
                var t = this,
                  n = Tl.get(e);
                n.observationTargets.slice().forEach(function (n) {
                  return t.unobserve(e, n.target);
                }),
                  n.activeTargets.splice(0, n.activeTargets.length);
              }),
              e
            );
          })(),
          xl = (function () {
            function e(e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if ('function' != typeof e)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                );
              Sl.connect(this, e);
            }
            return (
              (e.prototype.observe = function (e, t) {
                if (0 === arguments.length)
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!$u(e))
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                Sl.observe(this, e, t);
              }),
              (e.prototype.unobserve = function (e) {
                if (0 === arguments.length)
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!$u(e))
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                Sl.unobserve(this, e);
              }),
              (e.prototype.disconnect = function () {
                Sl.disconnect(this);
              }),
              (e.toString = function () {
                return 'function ResizeObserver () { [polyfill code] }';
              }),
              e
            );
          })(),
          Ol = (function (e) {
            return (
              (e.Accepted = 'accepted'),
              (e.Answer = 'answer'),
              (e.Connected = 'connected'),
              (e.Close = 'close'),
              (e.Established = 'established'),
              (e.Ice = 'ice'),
              (e.Offer = 'offer'),
              (e.VideoBounds = 'videoBounds'),
              e
            );
          })({}),
          Il = (function (e) {
            return (
              (e.ConversationResult = 'conversationResult'),
              (e.PersonaResponse = 'personaResponse'),
              (e.RecognizeResults = 'recognizeResults'),
              (e.State = 'state'),
              e
            );
          })({}),
          Al = (function () {
            function e(t) {
              var n = this;
              p(this, e),
                (this.session = t),
                console.log('>> add message listener'),
                this.session.addEventListener('message', function (e) {
                  return n.onWebsocketMessage(e);
                });
            }
            return (
              m(e, [
                {
                  key: 'sendVideoBounds',
                  value: function (e, t) {
                    this.sendWebsocketMessage({
                      category: 'webrtc',
                      kind: 'event',
                      name: Ol.VideoBounds,
                      body: { width: e, height: t },
                    });
                  },
                },
                {
                  key: 'onWebsocketMessage',
                  value: function (e) {
                    var t = JSON.parse(e.data),
                      n = t.body;
                    switch (t.name) {
                      case Ol.Established:
                        this.onEstablished(n);
                        break;
                      case Ol.Offer:
                        this.onSdpOffer(n);
                        break;
                      case Ol.Accepted:
                        this.onAccepted(n);
                        break;
                      case Ol.Answer:
                        this.onSdpAnswer(n);
                        break;
                      case Ol.Connected:
                        this.onConnected(n);
                        break;
                      case Ol.Ice:
                        this.onRemoteIceCandidate(n);
                    }
                  },
                },
                {
                  key: 'onEstablished',
                  value: function (e) {
                    console.log('onEstablished', { event: e });
                    var t = e.iceServers || [],
                      n = t.includes(function (e) {
                        return e.urls.includes(function (e) {
                          return 0 === e.indexOf('turn:');
                        });
                      });
                    this.connect({
                      iceServers: t,
                      iceTransportPolicy: n ? 'relay' : 'all',
                    });
                  },
                },
                {
                  key: 'onSdpOffer',
                  value: function (e) {
                    var t = this;
                    console.log('onSdpOffer', { event: e });
                    var n = new RTCSessionDescription(e);
                    this.rtcPeerConnection
                      .setRemoteDescription(n)
                      .then(function () {
                        return t.rtcPeerConnection.createAnswer();
                      })
                      .then(function (e) {
                        return t.sendWebsocketMessage({
                          category: 'webrtc',
                          kind: 'event',
                          name: Ol.Answer,
                          body: e,
                        });
                      });
                  },
                },
                {
                  key: 'onAccepted',
                  value: function (e) {
                    console.log('accepted, session_id = ' + e.sessionId),
                      this.sendVideoBounds(200, 100);
                  },
                },
                {
                  key: 'onSdpAnswer',
                  value: function (e) {
                    console.log('onSdpAnswer', { event: e });
                    var t = new RTCSessionDescription(e);
                    this.rtcPeerConnection.setRemoteDescription(t);
                  },
                },
                {
                  key: 'onConnected',
                  value: function (e) {
                    console.log('onConnected', { event: e });
                  },
                },
                {
                  key: 'onRemoteIceCandidate',
                  value: function (e) {
                    if (
                      (console.log('onRemoteIceCandidate', { event: e }),
                      e.candidate)
                    ) {
                      var t = new RTCIceCandidate(e);
                      this.rtcPeerConnection.addIceCandidate(t);
                    }
                  },
                },
                {
                  key: 'connect',
                  value: function (e) {
                    var t = this;
                    navigator.mediaDevices
                      .getUserMedia({ audio: !0, video: !0 })
                      .then(function (n) {
                        (t.localStream = n),
                          (t.rtcPeerConnection = new RTCPeerConnection(e)),
                          t.rtcPeerConnection.addEventListener(
                            'icecandidate',
                            function (e) {
                              return t.onLocalIceCandidate(e);
                            }
                          ),
                          t.rtcPeerConnection.addEventListener(
                            'track',
                            function (e) {
                              return t.onRemoteTrackAdded(e);
                            }
                          ),
                          t.localStream.getTracks().forEach(function (e) {
                            t.rtcPeerConnection.addTrack(e, t.localStream);
                          }),
                          t.sendSdpOffer();
                      });
                  },
                },
                {
                  key: 'onLocalIceCandidate',
                  value: function (e) {
                    console.log('onIceCandidate', { event: e }),
                      e.candidate &&
                        this.sendWebsocketMessage({
                          category: 'webrtc',
                          kind: 'event',
                          name: Ol.Ice,
                          body: e.candidate,
                        });
                  },
                },
                {
                  key: 'onRemoteTrackAdded',
                  value: function (e) {
                    console.log('onRemoteTrackAdded', { event: e }),
                      (this.remoteStream = e.streams[0]);
                  },
                },
                {
                  key: 'sendSdpOffer',
                  value: function () {
                    var e = this;
                    this.rtcPeerConnection
                      .createOffer({
                        voiceActivityDetection: !1,
                        offerToReceiveAudio: !0,
                        offerToReceiveVideo: !0,
                      })
                      .then(function (t) {
                        return e.rtcPeerConnection.setLocalDescription(t);
                      })
                      .then(function () {
                        return e.sendWebsocketMessage({
                          category: 'webrtc',
                          kind: 'event',
                          name: Ol.Offer,
                          body: e.rtcPeerConnection.localDescription.toJSON(),
                        });
                      });
                  },
                },
                {
                  key: 'sendWebsocketMessage',
                  value: function (e) {
                    this.session.send(JSON.stringify(e));
                  },
                },
              ]),
              e
            );
          })(),
          Nl = (function (e) {
            o(n, e);
            var t = s(n);
            function n(e) {
              var r;
              return (
                p(this, n),
                ((r = t.call(this)).isRuntimeHost =
                  !!window.SmIsUnderRuntimeHost),
                r.isRuntimeHost
                  ? r.configureRuntimeHost()
                  : r.configureWebSocket(e),
                r
              );
            }
            return (
              m(n, [
                {
                  key: 'configureRuntimeHost',
                  value: function () {
                    var e = this;
                    (window.SmRuntimeHostReceiveMessage = function (t) {
                      var n = new MessageEvent('message', { data: t });
                      e.dispatchEvent(n);
                    }),
                      (this.send = function (e) {
                        return window.SmRuntimeHostSendMessage(e);
                      }),
                      window.setTimeout(function () {
                        console.log('>> send fake connected message');
                        var t = JSON.stringify({
                            category: 'webrtc',
                            kind: 'event',
                            name: Ol.Connected,
                            body: {},
                          }),
                          n = new MessageEvent('message', { data: t });
                        e.dispatchEvent(n);
                      }, 3e3);
                  },
                },
                {
                  key: 'configureWebSocket',
                  value: function (e) {
                    var t = this;
                    (this.ws = new WebSocket(
                      ''.concat(e.url, '?access_token=').concat(e.jwt)
                    )),
                      (this.addEventListener = function (e, n) {
                        return t.ws.addEventListener(e, n);
                      }),
                      (this.removeEventListener = function (e, n) {
                        return t.ws.removeEventListener(e, n);
                      }),
                      (this.send = function (e) {
                        return t.ws.send(e);
                      }),
                      (this.close = function (e, n) {
                        return t.ws.close(e, n);
                      });
                  },
                },
              ]),
              n
            );
          })(e(EventTarget)),
          Ml = function e(t) {
            p(this, e), (this.session = t);
          },
          Dl = (function () {
            function e(t) {
              p(this, e), (this.session = t);
            }
            return (
              m(e, [
                {
                  key: 'startRecognize',
                  value: function () {
                    this.websocketSend('startRecognize', {});
                  },
                },
                {
                  key: 'stopRecognize',
                  value: function () {
                    this.websocketSend('stopRecognize', {});
                  },
                },
                {
                  key: 'websocketSend',
                  value: function (e, t) {
                    this.session.send(
                      JSON.stringify({
                        category: 'scene',
                        kind: 'request',
                        name: e,
                        body: t,
                      })
                    );
                  },
                },
              ]),
              e
            );
          })(),
          Rl =
            (((Uu = (function (e) {
              o(n, e);
              var t = s(n);
              function n() {
                return p(this, n), t.call(this);
              }
              return (
                m(n, [
                  {
                    key: 'connect',
                    value: function (e) {
                      var t = this;
                      console.log('sm.connect', { config: e }),
                        (this.session = new Nl(e)),
                        this.session.addEventListener('message', function (e) {
                          return t.emitMessageAsEvent(e);
                        }),
                        (this.webrtc = new Al(this.session)),
                        (this.scene = new Dl(this.session)),
                        (this.persona = new Ml(this.session));
                    },
                  },
                  {
                    key: 'emitMessageAsEvent',
                    value: function (e) {
                      var t = JSON.parse(e.data),
                        n = t.name,
                        r = t.body,
                        i = new CustomEvent(n, { detail: r });
                      this.dispatchEvent(i);
                    },
                  },
                  {
                    key: 'on',
                    value: function (e, t) {
                      console.log('add event listener for', e);
                    },
                  },
                ]),
                n
              );
            })(e(EventTarget))).ɵfac = function (e) {
              return new (e || Uu)();
            }),
            (Uu.ɵprov = ke({
              token: Uu,
              factory: Uu.ɵfac,
              providedIn: 'root',
            })),
            Uu),
          Pl = ['video'],
          Hl =
            (((Gu = (function () {
              function e(t, n, r) {
                var i = this;
                p(this, e),
                  (this.sm = t),
                  (this.http = n),
                  (this.hostRef = r),
                  (this.autoconnect = !1),
                  (this.debug = 'true'),
                  (this.connectEvent = new Mo()),
                  (this.disconnectEvent = new Mo()),
                  (this.speechmarkerEvent = new Mo()),
                  (this.conversationResultEvent = new Mo()),
                  (this.personaResponseEvent = new Mo()),
                  this.log('widget: constructor', this.tokenserver),
                  (this.hostRef.nativeElement.disconnect = function () {
                    return i.disconnect();
                  }),
                  (this.hostRef.nativeElement.setMicrophoneEnabled = function (
                    e
                  ) {
                    return i.setMicrophoneEnabled(e);
                  }),
                  this.sm.addEventListener(Ol.Connected, function (e) {
                    i.onConnect(), i.connectEvent.emit(e.detail);
                  }),
                  this.sm.addEventListener(Ol.Close, function (e) {
                    return i.disconnectEvent.emit(e.detail);
                  }),
                  this.sm.addEventListener(Il.ConversationResult, function (e) {
                    return i.conversationResultEvent.emit(e.detail);
                  }),
                  this.sm.addEventListener(Il.PersonaResponse, function (e) {
                    return i.personaResponseEvent.emit(e.detail);
                  });
              }
              return (
                m(e, [
                  {
                    key: 'ngOnChanges',
                    value: function (e) {
                      this.log({ changes: e }),
                        this.tokenserver && this.autoconnect && this.connect();
                    },
                  },
                  {
                    key: 'ngAfterViewInit',
                    value: function () {
                      this.initHostResizeWatcher();
                    },
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this.resizeObserver.unobserve(this.hostRef.nativeElement);
                    },
                  },
                  {
                    key: 'connect',
                    value: function () {
                      var e,
                        t = this;
                      this.http
                        .get(this.tokenserver)
                        .pipe(
                          ((e = function (e) {
                            return t.sm.connect(e);
                          }),
                          function (t) {
                            return t.lift(new zu(e, void 0, void 0));
                          })
                        )
                        .subscribe();
                    },
                  },
                  {
                    key: 'disconnect',
                    value: function () {
                      this.sm.session.close();
                    },
                  },
                  {
                    key: 'setMicrophoneEnabled',
                    value: function (e) {
                      e
                        ? this.sm.scene.startRecognize()
                        : this.sm.scene.stopRecognize();
                    },
                  },
                  {
                    key: 'initHostResizeWatcher',
                    value: function () {
                      var e = this;
                      (this.resizeObserver = new xl(function () {
                        return e.resizeVideoStream();
                      })),
                        this.resizeObserver.observe(this.hostRef.nativeElement);
                    },
                  },
                  {
                    key: 'resizeVideoStream',
                    value: function () {
                      if (this.sm.webrtc) {
                        var e = this.hostRef.nativeElement;
                        this.sm.webrtc.sendVideoBounds(
                          e.clientWidth,
                          e.clientHeight
                        );
                      }
                    },
                  },
                  {
                    key: 'onConnect',
                    value: function () {
                      this.resizeVideoStream();
                    },
                  },
                  {
                    key: 'log',
                    value: function () {
                      var e;
                      'true' === this.debug &&
                        (e = console).log.apply(e, arguments);
                    },
                  },
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Gu)(Li(Rl), Li(nu), Li(qi));
            }),
            (Gu.ɵcmp =
              ((Wu = {
                type: Gu,
                selectors: [['app-widget']],
                viewQuery: function (e, t) {
                  var n, r, i, o;
                  1 & e &&
                    ((o = Pl),
                    (function (e, t, n, r, i, o) {
                      e.firstCreatePass &&
                        (function (e, t, n) {
                          null === e.queries && (e.queries = new Lo()),
                            e.queries.track(new Fo(t, -1));
                        })(e, new jo(n, !0, !1, void 0)),
                        (function (e, t) {
                          var n = new Ro();
                          Or(e, t, n, n.destroy),
                            null === t[19] && (t[19] = new Ho()),
                            t[19].queries.push(new Po(n));
                        })(e, t);
                    })($t(), Yt(), o)),
                    2 & e &&
                      (function (e) {
                        var t = Yt(),
                          n = $t(),
                          r = un();
                        ln(r + 1);
                        var i = Bo(n, r);
                        if (e.dirty && qt(t) === i.metadata.isStatic) {
                          if (null === i.matches) e.reset([]);
                          else {
                            var o = i.crossesNgTemplate
                              ? (function e(t, n, r, i) {
                                  var o = t.queries.getByIndex(r),
                                    a = o.matches;
                                  if (null !== a)
                                    for (
                                      var s = Zo(t, n, o, r), u = 0;
                                      u < a.length;
                                      u += 2
                                    ) {
                                      var l = a[u];
                                      if (l > 0) i.push(s[u / 2]);
                                      else {
                                        for (
                                          var c = a[u + 1], f = n[-l], h = 10;
                                          h < f.length;
                                          h++
                                        ) {
                                          var d = f[h];
                                          d[17] === d[3] && e(d[1], d, c, i);
                                        }
                                        if (null !== f[9])
                                          for (
                                            var v = f[9], p = 0;
                                            p < v.length;
                                            p++
                                          ) {
                                            var y = v[p];
                                            e(y[1], y, c, i);
                                          }
                                      }
                                    }
                                  return i;
                                })(n, t, r, [])
                              : Zo(n, t, i, r);
                            e.reset(o), e.notifyOnChanges();
                          }
                          return !0;
                        }
                        return !1;
                      })(
                        ((r = Yt()),
                        (i = un()),
                        (n = r[19].queries[i].queryList))
                      ) &&
                      (t.videoRef = n.first);
                },
                inputs: {
                  tokenserver: 'tokenserver',
                  autoconnect: 'autoconnect',
                  debug: 'debug',
                },
                outputs: {
                  connectEvent: 'connect',
                  disconnectEvent: 'disconnect',
                  speechmarkerEvent: 'speechmarker',
                  conversationResultEvent: 'conversationResult',
                  personaResponseEvent: 'personaResponse',
                },
                features: [Mt],
                decls: 2,
                vars: 1,
                consts: [
                  ['autoplay', '', 'playsinline', '', 3, 'srcObject'],
                  ['video', ''],
                ],
                template: function (e, t) {
                  1 & e &&
                    ((function (e, t, n, r) {
                      var i = Yt(),
                        o = $t(),
                        a = 20 + e,
                        s = i[11],
                        u = (i[a] = _r(t, s, Xt.lFrame.currentNamespace)),
                        l = o.firstCreatePass
                          ? (function (e, t, n, r, i, o, a) {
                              var s = t.consts,
                                u = br(t, e, 2, i, Gt(s, o));
                              return (
                                (function (e, t, n, r) {
                                  if (Qt()) {
                                    var i = (function (e, t, n) {
                                        var r = e.directiveRegistry,
                                          i = null;
                                        if (r)
                                          for (var o = 0; o < r.length; o++) {
                                            var a = r[o];
                                            cr(n, a.selectors, !1) &&
                                              (i || (i = []),
                                              Zn(Ln(n, t), e, a.type),
                                              It(a)
                                                ? (Rr(e, n), i.unshift(a))
                                                : i.push(a));
                                          }
                                        return i;
                                      })(e, t, n),
                                      o = null === r ? null : { '': -1 };
                                    if (null !== i) {
                                      var a = 0;
                                      Hr(n, e.data.length, i.length);
                                      for (var s = 0; s < i.length; s++) {
                                        var u = i[s];
                                        u.providersResolver &&
                                          u.providersResolver(u);
                                      }
                                      Dr(e, n, i.length);
                                      for (
                                        var l = !1, c = !1, f = 0;
                                        f < i.length;
                                        f++
                                      ) {
                                        var h = i[f];
                                        (n.mergedAttrs = xn(
                                          n.mergedAttrs,
                                          h.hostAttrs
                                        )),
                                          jr(e, t, h),
                                          Pr(e.data.length - 1, h, o),
                                          null !== h.contentQueries &&
                                            (n.flags |= 8),
                                          (null === h.hostBindings &&
                                            null === h.hostAttrs &&
                                            0 === h.hostVars) ||
                                            (n.flags |= 128);
                                        var d = h.type.prototype;
                                        !l &&
                                          (d.ngOnChanges ||
                                            d.ngOnInit ||
                                            d.ngDoCheck) &&
                                          ((
                                            e.preOrderHooks ||
                                            (e.preOrderHooks = [])
                                          ).push(n.index - 20),
                                          (l = !0)),
                                          c ||
                                            (!d.ngOnChanges && !d.ngDoCheck) ||
                                            ((
                                              e.preOrderCheckHooks ||
                                              (e.preOrderCheckHooks = [])
                                            ).push(n.index - 20),
                                            (c = !0)),
                                          Ar(e, h),
                                          (a += h.hostVars);
                                      }
                                      !(function (e, t) {
                                        for (
                                          var n = t.directiveEnd,
                                            r = e.data,
                                            i = t.attrs,
                                            o = [],
                                            a = null,
                                            s = null,
                                            u = t.directiveStart;
                                          u < n;
                                          u++
                                        ) {
                                          var l = r[u],
                                            c = l.inputs,
                                            f =
                                              null === i || or(t)
                                                ? null
                                                : zr(c, i);
                                          o.push(f),
                                            (a = Ir(c, u, a)),
                                            (s = Ir(l.outputs, u, s));
                                        }
                                        null !== a &&
                                          (a.hasOwnProperty('class') &&
                                            (t.flags |= 16),
                                          a.hasOwnProperty('style') &&
                                            (t.flags |= 32)),
                                          (t.initialInputs = o),
                                          (t.inputs = a),
                                          (t.outputs = s);
                                      })(e, n),
                                        Nr(e, t, a);
                                    }
                                    o &&
                                      (function (e, t, n) {
                                        if (t)
                                          for (
                                            var r = (e.localNames = []), i = 0;
                                            i < t.length;
                                            i += 2
                                          ) {
                                            var o = n[t[i + 1]];
                                            if (null == o)
                                              throw new Error(
                                                "Export of name '".concat(
                                                  t[i + 1],
                                                  "' not found!"
                                                )
                                              );
                                            r.push(t[i], o);
                                          }
                                      })(n, r, o);
                                  }
                                  n.mergedAttrs = xn(n.mergedAttrs, n.attrs);
                                })(t, n, u, Gt(s, a)),
                                null !== u.attrs && Mi(u, u.attrs, !1),
                                null !== u.mergedAttrs &&
                                  Mi(u, u.mergedAttrs, !0),
                                null !== t.queries &&
                                  t.queries.elementStart(t, u),
                                u
                              );
                            })(e, o, i, 0, t, n, r)
                          : o.data[a];
                      tn(l, !0);
                      var c = l.mergedAttrs;
                      null !== c && Cn(s, u, c);
                      var f = l.classes;
                      null !== f && li(s, u, f);
                      var h = l.styles;
                      null !== h && ui(s, u, h),
                        ii(o, i, u, l),
                        0 === Xt.lFrame.elementDepthCount && nr(u, i),
                        Xt.lFrame.elementDepthCount++,
                        (function (e) {
                          return 1 == (1 & e.flags);
                        })(l) &&
                          ((function (e, t, n) {
                            Qt() &&
                              ((function (e, t, n, r) {
                                var i = n.directiveStart,
                                  o = n.directiveEnd;
                                e.firstCreatePass || Ln(n, t), nr(r, t);
                                for (
                                  var a = n.initialInputs, s = i;
                                  s < o;
                                  s++
                                ) {
                                  var u = e.data[s],
                                    l = It(u);
                                  l && Lr(t, n, u);
                                  var c = Gn(t, e, s, n);
                                  nr(c, t),
                                    null !== a && Fr(0, s - i, c, u, 0, a),
                                    l && (Bt(n.index, t)[8] = c);
                                }
                              })(e, t, n, Vt(n, t)),
                              128 == (128 & n.flags) &&
                                (function (e, t, n) {
                                  var r = n.directiveStart,
                                    i = n.directiveEnd,
                                    o = e.expandoInstructions,
                                    a = e.firstCreatePass,
                                    s = n.index - 20,
                                    u = Xt.lFrame.currentDirectiveIndex;
                                  try {
                                    mn(s);
                                    for (var l = r; l < i; l++) {
                                      var c = e.data[l],
                                        f = t[l];
                                      sn(l),
                                        null !== c.hostBindings ||
                                        0 !== c.hostVars ||
                                        null !== c.hostAttrs
                                          ? Mr(c, f)
                                          : a && o.push(null);
                                    }
                                  } finally {
                                    mn(-1), sn(u);
                                  }
                                })(e, t, n));
                          })(o, i, l),
                          (function (e, t, n) {
                            if (xt(t))
                              for (
                                var r = t.directiveEnd, i = t.directiveStart;
                                i < r;
                                i++
                              ) {
                                var o = e.data[i];
                                o.contentQueries &&
                                  o.contentQueries(1, n[i], i);
                              }
                          })(o, l, i)),
                        null !== r &&
                          (function (e, t) {
                            var n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : Vt,
                              r = t.localNames;
                            if (null !== r)
                              for (
                                var i = t.index + 1, o = 0;
                                o < r.length;
                                o += 2
                              ) {
                                var a = r[o + 1],
                                  s = -1 === a ? n(t, e) : e[a];
                                e[i++] = s;
                              }
                          })(i, l);
                    })(0, 'video', 0, 1),
                    (function () {
                      var e = en();
                      nn() ? (Xt.lFrame.isParent = !1) : tn((e = e.parent), !1);
                      var t = e;
                      Xt.lFrame.elementDepthCount--;
                      var n = $t();
                      n.firstCreatePass &&
                        (gn(n, e), xt(e) && n.queries.elementEnd(e)),
                        null != t.classesWithoutHost &&
                          (function (e) {
                            return 0 != (16 & e.flags);
                          })(t) &&
                          zi(n, t, Yt(), t.classesWithoutHost, !0),
                        null != t.stylesWithoutHost &&
                          (function (e) {
                            return 0 != (32 & e.flags);
                          })(t) &&
                          zi(n, t, Yt(), t.stylesWithoutHost, !1);
                    })()),
                    2 & e &&
                      Fi(
                        'srcObject',
                        null == t.sm.webrtc ? null : t.sm.webrtc.remoteStream
                      );
                },
                styles: [
                  '[_nghost-%COMP%]{display:block;border:2px solid grey;width:400px;height:350px}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%}',
                ],
              }),
              he(function () {
                var e = {},
                  t = {
                    type: Wu.type,
                    providersResolver: null,
                    decls: Wu.decls,
                    vars: Wu.vars,
                    factory: null,
                    template: Wu.template || null,
                    consts: Wu.consts || null,
                    ngContentSelectors: Wu.ngContentSelectors,
                    hostBindings: Wu.hostBindings || null,
                    hostVars: Wu.hostVars || 0,
                    hostAttrs: Wu.hostAttrs || null,
                    contentQueries: Wu.contentQueries || null,
                    declaredInputs: e,
                    inputs: null,
                    outputs: null,
                    exportAs: Wu.exportAs || null,
                    onPush: Wu.changeDetection === ht.OnPush,
                    directiveDefs: null,
                    pipeDefs: null,
                    selectors: Wu.selectors || pt,
                    viewQuery: Wu.viewQuery || null,
                    features: Wu.features || null,
                    data: Wu.data || {},
                    encapsulation: Wu.encapsulation || dt.Emulated,
                    id: 'c',
                    styles: Wu.styles || pt,
                    _: null,
                    setInput: null,
                    schemas: Wu.schemas || null,
                    tView: null,
                  },
                  n = Wu.directives,
                  r = Wu.features,
                  i = Wu.pipes;
                return (
                  (t.id += yt++),
                  (t.inputs = bt(Wu.inputs, e)),
                  (t.outputs = bt(Wu.outputs)),
                  r &&
                    r.forEach(function (e) {
                      return e(t);
                    }),
                  (t.directiveDefs = n
                    ? function () {
                        return ('function' == typeof n ? n() : n).map(mt);
                      }
                    : null),
                  (t.pipeDefs = i
                    ? function () {
                        return ('function' == typeof i ? i() : i).map(gt);
                      }
                    : null),
                  t
                );
              }))),
            Gu),
          jl =
            (((qu = (function () {
              function e(n) {
                p(this, e);
                var r,
                  i,
                  a,
                  u,
                  l,
                  c,
                  f =
                    ((a = (function (e, t) {
                      return t.get(Ui).resolveComponentFactory(e).inputs;
                    })((r = Hl), (i = { injector: n }).injector)),
                    (u = i.strategyFactory || new Mu(r, i.injector)),
                    (l = (function (e) {
                      var t = {};
                      return (
                        e.forEach(function (e) {
                          var n,
                            r = e.propName,
                            i = e.templateName;
                          t[
                            ((n = i),
                            n.replace(/[A-Z]/g, function (e) {
                              return '-' + e.toLowerCase();
                            }))
                          ] = r;
                        }),
                        t
                      );
                    })(a)),
                    ((c = (function (e) {
                      o(r, e);
                      var n = s(r);
                      function r(e) {
                        var t;
                        return p(this, r), ((t = n.call(this)).injector = e), t;
                      }
                      return (
                        m(r, [
                          {
                            key: 'attributeChangedCallback',
                            value: function (e, t, n, r) {
                              this.ngElementStrategy.setInputValue(l[e], n);
                            },
                          },
                          {
                            key: 'connectedCallback',
                            value: function () {
                              var e = !1;
                              this.ngElementStrategy.events &&
                                (this.subscribeToEvents(), (e = !0)),
                                this.ngElementStrategy.connect(this),
                                e || this.subscribeToEvents();
                            },
                          },
                          {
                            key: 'disconnectedCallback',
                            value: function () {
                              this._ngElementStrategy &&
                                this._ngElementStrategy.disconnect(),
                                this.ngElementEventsSubscription &&
                                  (this.ngElementEventsSubscription.unsubscribe(),
                                  (this.ngElementEventsSubscription = null));
                            },
                          },
                          {
                            key: 'subscribeToEvents',
                            value: function () {
                              var e = this;
                              this.ngElementEventsSubscription =
                                this.ngElementStrategy.events.subscribe(
                                  function (t) {
                                    var n = (function (e, t, n) {
                                      if ('function' != typeof CustomEvent) {
                                        var r = e.createEvent('CustomEvent');
                                        return (
                                          r.initCustomEvent(t, !1, !1, n), r
                                        );
                                      }
                                      return new CustomEvent(t, {
                                        bubbles: !1,
                                        cancelable: !1,
                                        detail: n,
                                      });
                                    })(e.ownerDocument, t.name, t.value);
                                    e.dispatchEvent(n);
                                  }
                                );
                            },
                          },
                          {
                            key: 'ngElementStrategy',
                            get: function () {
                              var e = this;
                              if (!this._ngElementStrategy) {
                                var n = (this._ngElementStrategy = u.create(
                                    this.injector || i.injector
                                  )),
                                  o = a
                                    .filter(function (t) {
                                      var n = t.propName;
                                      return e.hasOwnProperty(n);
                                    })
                                    .map(function (t) {
                                      var n = t.propName;
                                      return [n, e[n]];
                                    });
                                this instanceof r
                                  ? o.forEach(function (n) {
                                      var r = t(n, 1)[0];
                                      return delete e[r];
                                    })
                                  : Pu(a, this),
                                  o.forEach(function (e) {
                                    var r = t(e, 2),
                                      i = r[0],
                                      o = r[1];
                                    return n.setInputValue(i, o);
                                  });
                              }
                              return this._ngElementStrategy;
                            },
                          },
                        ]),
                        r
                      );
                    })(Ru)).observedAttributes = Object.keys(l)),
                    Object.defineProperty(c.prototype, 'ngElementStrategy', {
                      enumerable: !0,
                    }),
                    Pu(a, c.prototype),
                    c);
                customElements.define('sm-widget', f);
              }
              return m(e, [{ key: 'ngDoBootstrap', value: function () {} }]), e;
            })()).ɵmod = kt({ type: qu })),
            (qu.ɵinj = be({
              factory: function (e) {
                return new (e || qu)(rt(Ni));
              },
              imports: [[Ts, mu, ju]],
            })),
            qu);
        ws()
          .bootstrapModule(jl)
          .then(function (e) {
            window.ngRef && window.ngRef.destroy(), (window.ngRef = e);
          })
          .catch(function (e) {
            return console.error(e);
          });
      },
    },
    [[0, 0]],
  ]);
})();
