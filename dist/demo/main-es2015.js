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
          for (Xe = 0; e.length; ) e.shift().call(null, e.shift());
        }
        function r(e, t) {
          for (var n = 0, r = e.length; n < r; n++) f(e[n], t);
        }
        function s(e) {
          return function (t) {
            He(t) && (f(t, e), oe.length && r(t.querySelectorAll(oe), e));
          };
        }
        function o(e) {
          var t = Ze.call(e, 'is'),
            n = e.nodeName.toUpperCase(),
            r = ae.call(re, t ? ee + t.toUpperCase() : Y + n);
          return t && -1 < r && !i(n, t) ? -1 : r;
        }
        function i(e, t) {
          return -1 < oe.indexOf(e + '[is="' + t + '"]');
        }
        function a(e) {
          var t = e.currentTarget,
            n = e.attrChange,
            r = e.attrName,
            s = e.target,
            o = e[G] || 2,
            i = e[J] || 3;
          !rt ||
            (s && s !== t) ||
            !t[Z] ||
            'style' === r ||
            (e.prevValue === e.newValue &&
              ('' !== e.newValue || (n !== o && n !== i))) ||
            t[Z](r, n === o ? null : e.prevValue, n === i ? null : e.newValue);
        }
        function l(e) {
          var t = s(e);
          return function (e) {
            C.push(t, e.target),
              Xe && clearTimeout(Xe),
              (Xe = setTimeout(n, 1));
          };
        }
        function c(e) {
          nt && ((nt = !1), e.currentTarget.removeEventListener(X, c)),
            oe.length &&
              r((e.target || E).querySelectorAll(oe), e.detail === z ? z : j),
            Re &&
              (function () {
                for (var e, t = 0, n = Le.length; t < n; t++)
                  ie.contains((e = Le[t])) || (n--, Le.splice(t--, 1), f(e, z));
              })();
        }
        function u(e, t) {
          var n = this;
          qe.call(n, e, t), x.call(n, { target: n });
        }
        function h(e, t, n) {
          var r = t.apply(e, n),
            s = o(r);
          return (
            -1 < s && M(r, se[s]),
            n.pop() &&
              oe.length &&
              (function (e) {
                for (var t, n = 0, r = e.length; n < r; n++)
                  M((t = e[n]), se[o(t)]);
              })(r.querySelectorAll(oe)),
            r
          );
        }
        function d(e, t) {
          Ae(e, t),
            O
              ? O.observe(e, Je)
              : (tt && ((e.setAttribute = u), (e[H] = I(e)), e[L](Q, x)),
                e[L](K, a)),
            e[W] && rt && ((e.created = !0), e[W](), (e.created = !1));
        }
        function p(e) {
          throw new Error('A ' + e + ' type is already registered');
        }
        function f(e, t) {
          var n,
            r,
            s = o(e);
          -1 < s &&
            !ze.call(e, 'TEMPLATE') &&
            (N(e, se[s]),
            (s = 0),
            t !== j || e[j]
              ? t !== z ||
                e[z] ||
                ((e[j] = !1), (e[z] = !0), (r = 'disconnected'), (s = 1))
              : ((e[z] = !1),
                (e[j] = !0),
                (r = 'connected'),
                (s = 1),
                Re && ae.call(Le, e) < 0 && Le.push(e)),
            s && (n = e[t + F] || e[r + F]) && n.call(e));
        }
        function m() {}
        function g(e, t, n) {
          var r = (n && n[V]) || '',
            s = t.prototype,
            o = Oe(s),
            i = t.observedAttributes || de,
            a = { prototype: o };
          Pe(o, W, {
            value: function () {
              if (ke) ke = !1;
              else if (!this[ve]) {
                (this[ve] = !0), new t(this), s[W] && s[W].call(this);
                var e = Ce[Se.get(t)];
                (!be || e.create.length > 1) && _(this);
              }
            },
          }),
            Pe(o, Z, {
              value: function (e) {
                -1 < ae.call(i, e) && s[Z] && s[Z].apply(this, arguments);
              },
            }),
            s[U] && Pe(o, B, { value: s[U] }),
            s[q] && Pe(o, $, { value: s[q] }),
            r && (a[V] = r),
            (e = e.toUpperCase()),
            (Ce[e] = { constructor: t, create: r ? [r, Ie(e)] : [e] }),
            Se.set(t, e),
            E[R](e.toLowerCase(), a),
            b(e),
            xe[e].r();
        }
        function y(e) {
          var t = Ce[e.toUpperCase()];
          return t && t.constructor;
        }
        function v(e) {
          return 'string' == typeof e ? e : (e && e.is) || '';
        }
        function _(e) {
          for (var t, n = e[Z], r = n ? e.attributes : de, s = r.length; s--; )
            n.call(
              e,
              (t = r[s]).name || t.nodeName,
              null,
              t.value || t.nodeValue
            );
        }
        function b(e) {
          return (
            (e = e.toUpperCase()) in xe ||
              ((xe[e] = {}),
              (xe[e].p = new Te(function (t) {
                xe[e].r = t;
              }))),
            xe[e].p
          );
        }
        function w() {
          _e && delete e.customElements,
            he(e, 'customElements', { configurable: !0, value: new m() }),
            he(e, 'CustomElementRegistry', { configurable: !0, value: m });
          for (
            var t = k.get(/^HTML[A-Z]*[a-z]/), n = t.length;
            n--;
            (function (t) {
              var n = e[t];
              if (n) {
                (e[t] = function (e) {
                  var t, r;
                  return (
                    e || (e = this),
                    e[ve] ||
                      ((ke = !0),
                      (t = Ce[Se.get(e.constructor)]),
                      ((e = (r = be && 1 === t.create.length)
                        ? Reflect.construct(n, de, t.constructor)
                        : E.createElement.apply(E, t.create))[ve] = !0),
                      (ke = !1),
                      r || _(e)),
                    e
                  );
                }),
                  (e[t].prototype = n.prototype);
                try {
                  n.prototype.constructor = e[t];
                } catch (r) {
                  he(n, ve, { value: e[t] });
                }
              }
            })(t[n])
          );
          (E.createElement = function (e, t) {
            var n = v(t);
            return n ? Ge.call(this, e, Ie(n)) : Ge.call(this, e);
          }),
            Qe || ((et = !0), E[R](''));
        }
        var E = e.document,
          T = e.Object,
          k = (function (e) {
            var t,
              n,
              r,
              s,
              o = /^[A-Z]+[a-z]/,
              i = function (e, t) {
                (t = t.toLowerCase()) in a ||
                  ((a[e] = (a[e] || []).concat(t)),
                  (a[t] = a[t.toUpperCase()] = e));
              },
              a = (T.create || T)(null),
              l = {};
            for (n in e)
              for (s in e[n])
                for (a[s] = r = e[n][s], t = 0; t < r.length; t++)
                  a[r[t].toLowerCase()] = a[r[t].toUpperCase()] = s;
            return (
              (l.get = function (e) {
                return 'string' == typeof e
                  ? a[e] || (o.test(e) ? [] : '')
                  : (function (e) {
                      var t,
                        n = [];
                      for (t in a) e.test(t) && n.push(t);
                      return n;
                    })(e);
              }),
              (l.set = function (e, t) {
                return o.test(e) ? i(e, t) : i(t, e), l;
              }),
              l
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
          x,
          S,
          I,
          O,
          A,
          N,
          M,
          D,
          R = 'registerElement',
          P = (1e5 * e.Math.random()) >> 0,
          H = '__' + R + P,
          L = 'addEventListener',
          j = 'attached',
          F = 'Callback',
          z = 'detached',
          V = 'extends',
          Z = 'attributeChanged' + F,
          B = j + F,
          U = 'connected' + F,
          q = 'disconnected' + F,
          W = 'created' + F,
          $ = z + F,
          G = 'ADDITION',
          J = 'REMOVAL',
          K = 'DOMAttrModified',
          X = 'DOMContentLoaded',
          Q = 'DOMSubtreeModified',
          Y = '<',
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
          se = [],
          oe = '',
          ie = E.documentElement,
          ae =
            re.indexOf ||
            function (e) {
              for (var t = this.length; t-- && this[t] !== e; );
              return t;
            },
          le = T.prototype,
          ce = le.hasOwnProperty,
          ue = le.isPrototypeOf,
          he = T.defineProperty,
          de = [],
          pe = T.getOwnPropertyDescriptor,
          fe = T.getOwnPropertyNames,
          me = T.getPrototypeOf,
          ge = T.setPrototypeOf,
          ye = !!T.__proto__,
          ve = '__dreCEv1',
          _e = e.customElements,
          be =
            !/^force/.test(t.type) &&
            !!(_e && _e.define && _e.get && _e.whenDefined),
          we = T.create || T,
          Ee =
            e.Map ||
            function () {
              var e,
                t = [],
                n = [];
              return {
                get: function (e) {
                  return n[ae.call(t, e)];
                },
                set: function (r, s) {
                  (e = ae.call(t, r)) < 0 ? (n[t.push(r) - 1] = s) : (n[e] = s);
                },
              };
            },
          Te =
            e.Promise ||
            function (e) {
              function t(e) {
                for (r = !0; n.length; ) n.shift()(e);
              }
              var n = [],
                r = !1,
                s = {
                  catch: function () {
                    return s;
                  },
                  then: function (e) {
                    return n.push(e), r && setTimeout(t, 1), s;
                  },
                };
              return e(t), s;
            },
          ke = !1,
          Ce = we(null),
          xe = we(null),
          Se = new Ee(),
          Ie = function (e) {
            return e.toLowerCase();
          },
          Oe =
            T.create ||
            function e(t) {
              return t ? ((e.prototype = t), new e()) : this;
            },
          Ae =
            ge ||
            (ye
              ? function (e, t) {
                  return (e.__proto__ = t), e;
                }
              : fe && pe
              ? (function () {
                  function e(e, t) {
                    for (var n, r = fe(t), s = 0, o = r.length; s < o; s++)
                      ce.call(e, (n = r[s])) || he(e, n, pe(t, n));
                  }
                  return function (t, n) {
                    do {
                      e(t, n);
                    } while ((n = me(n)) && !ue.call(n, t));
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
          Re = !ue.call(De, ie),
          Pe = Re
            ? function (e, t, n) {
                return (e[t] = n.value), e;
              }
            : he,
          He = Re
            ? function (e) {
                return 1 === e.nodeType;
              }
            : function (e) {
                return ue.call(De, e);
              },
          Le = Re && [],
          je = De.attachShadow,
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
          We = E.createElement,
          $e = E.importNode,
          Ge = We,
          Je = Ne && {
            attributes: !0,
            characterData: !0,
            attributeOldValue: !0,
          },
          Ke =
            Ne ||
            function (e) {
              (tt = !1), ie.removeEventListener(K, Ke);
            },
          Xe = 0,
          Qe = R in E && !/^force-all/.test(t.type),
          Ye = !0,
          et = !1,
          tt = !0,
          nt = !0,
          rt = !0;
        if (
          (Ne &&
            (((D = E.createElement('div')).innerHTML =
              '<div><div></div></div>'),
            new Ne(function (e, t) {
              if (
                e[0] &&
                'childList' == e[0].type &&
                !e[0].removedNodes[0].childNodes.length
              ) {
                var n = (D = pe(De, 'innerHTML')) && D.set;
                n &&
                  he(De, 'innerHTML', {
                    set: function (e) {
                      for (; this.lastChild; ) this.removeChild(this.lastChild);
                      n.call(this, e);
                    },
                  });
              }
              t.disconnect(), (D = null);
            }).observe(D, { childList: !0, subtree: !0 }),
            (D.innerHTML = '')),
          Qe ||
            (ge || ye
              ? ((N = function (e, t) {
                  ue.call(t, e) || d(e, t);
                }),
                (M = d))
              : (M = N =
                  function (e, t) {
                    e[H] || ((e[H] = T(!0)), d(e, t));
                  }),
            Re
              ? ((tt = !1),
                (function () {
                  var e = pe(De, L),
                    t = e.value,
                    n = function (e) {
                      var t = new CustomEvent(K, { bubbles: !0 });
                      (t.attrName = e),
                        (t.prevValue = Ze.call(this, e)),
                        (t.newValue = null),
                        (t[J] = t.attrChange = 2),
                        Ue.call(this, e),
                        Ve.call(this, t);
                    },
                    r = function (e, t) {
                      var n = Be.call(this, e),
                        r = n && Ze.call(this, e),
                        s = new CustomEvent(K, { bubbles: !0 });
                      qe.call(this, e, t),
                        (s.attrName = e),
                        (s.prevValue = n ? r : null),
                        (s.newValue = t),
                        n
                          ? (s.MODIFICATION = s.attrChange = 1)
                          : (s[G] = s.attrChange = 0),
                        Ve.call(this, s);
                    },
                    s = function (e) {
                      var t,
                        n = e.currentTarget,
                        r = n[H],
                        s = e.propertyName;
                      r.hasOwnProperty(s) &&
                        ((r = r[s]),
                        ((t = new CustomEvent(K, { bubbles: !0 })).attrName =
                          r.name),
                        (t.prevValue = r.value || null),
                        (t.newValue = r.value = n[s] || null),
                        null == t.prevValue
                          ? (t[G] = t.attrChange = 0)
                          : (t.MODIFICATION = t.attrChange = 1),
                        Ve.call(n, t));
                    };
                  (e.value = function (e, o, i) {
                    e === K &&
                      this[Z] &&
                      this.setAttribute !== r &&
                      ((this[H] = {
                        className: { name: 'class', value: this.className },
                      }),
                      (this.setAttribute = r),
                      (this.removeAttribute = n),
                      t.call(this, 'propertychange', s)),
                      t.call(this, e, o, i);
                  }),
                    he(De, L, e);
                })())
              : Ne ||
                (ie[L](K, Ke),
                ie.setAttribute(H, 1),
                ie.removeAttribute(H),
                tt &&
                  ((x = function (e) {
                    var t,
                      n,
                      r,
                      s = this;
                    if (s === e.target) {
                      for (r in ((t = s[H]), (s[H] = n = I(s)), n)) {
                        if (!(r in t)) return S(0, s, r, t[r], n[r], G);
                        if (n[r] !== t[r])
                          return S(1, s, r, t[r], n[r], 'MODIFICATION');
                      }
                      for (r in t)
                        if (!(r in n)) return S(2, s, r, t[r], n[r], J);
                    }
                  }),
                  (S = function (e, t, n, r, s, o) {
                    var i = {
                      attrChange: e,
                      currentTarget: t,
                      attrName: n,
                      prevValue: r,
                      newValue: s,
                    };
                    (i[o] = e), a(i);
                  }),
                  (I = function (e) {
                    for (
                      var t, n, r = {}, s = e.attributes, o = 0, i = s.length;
                      o < i;
                      o++
                    )
                      'setAttribute' !== (n = (t = s[o]).name) &&
                        (r[n] = t.value);
                    return r;
                  }))),
            (E[R] = function (e, t) {
              if (
                ((n = e.toUpperCase()),
                Ye &&
                  ((Ye = !1),
                  Ne
                    ? ((O = (function (e, t) {
                        function n(e, t) {
                          for (var n = 0, r = e.length; n < r; t(e[n++]));
                        }
                        return new Ne(function (r) {
                          for (var s, o, i, a = 0, l = r.length; a < l; a++)
                            'childList' === (s = r[a]).type
                              ? (n(s.addedNodes, e), n(s.removedNodes, t))
                              : ((o = s.target),
                                rt &&
                                  o[Z] &&
                                  'style' !== s.attributeName &&
                                  (i = Ze.call(o, s.attributeName)) !==
                                    s.oldValue &&
                                  o[Z](s.attributeName, s.oldValue, i));
                        });
                      })(s(j), s(z))),
                      (A = function (e) {
                        return O.observe(e, { childList: !0, subtree: !0 }), e;
                      })(E),
                      je &&
                        (De.attachShadow = function () {
                          return A(je.apply(this, arguments));
                        }))
                    : ((C = []),
                      E[L]('DOMNodeInserted', l(j)),
                      E[L]('DOMNodeRemoved', l(z))),
                  E[L](X, c),
                  E[L]('readystatechange', c),
                  (E.importNode = function (e, t) {
                    switch (e.nodeType) {
                      case 1:
                        return h(E, $e, [e, !!t]);
                      case 11:
                        for (
                          var n = E.createDocumentFragment(),
                            r = e.childNodes,
                            s = r.length,
                            o = 0;
                          o < s;
                          o++
                        )
                          n.appendChild(E.importNode(r[o], !!t));
                        return n;
                      default:
                        return Fe.call(e, !!t);
                    }
                  }),
                  (De.cloneNode = function (e) {
                    return h(this, Fe, [!!e]);
                  })),
                et)
              )
                return (et = !1);
              if (
                (-2 < ae.call(re, ee + n) + ae.call(re, Y + n) && p(e),
                !te.test(n) || -1 < ae.call(ne, n))
              )
                throw new Error('The type ' + e + ' is invalid');
              var n,
                o,
                i = function () {
                  return u ? E.createElement(d, n) : E.createElement(d);
                },
                a = t || le,
                u = ce.call(a, V),
                d = u ? t[V].toUpperCase() : n;
              return (
                u && -1 < ae.call(re, Y + d) && p(d),
                (o = re.push((u ? ee : Y) + n) - 1),
                (oe = oe.concat(
                  oe.length ? ',' : '',
                  u ? d + '[is="' + e.toLowerCase() + '"]' : d
                )),
                (i.prototype = se[o] =
                  ce.call(a, 'prototype') ? a.prototype : Oe(De)),
                oe.length && r(E.querySelectorAll(oe), j),
                i
              );
            }),
            (E.createElement = Ge =
              function (e, t) {
                var n = v(t),
                  r = n ? We.call(E, e, Ie(n)) : We.call(E, e),
                  s = '' + e,
                  o = ae.call(re, (n ? ee : Y) + (n || s).toUpperCase()),
                  a = -1 < o;
                return (
                  n &&
                    (r.setAttribute('is', (n = n.toLowerCase())),
                    a && (a = i(s.toUpperCase(), n))),
                  (rt = !E.createElement.innerHTMLHelper),
                  a && M(r, se[o]),
                  r
                );
              })),
          addEventListener(
            'beforeunload',
            function () {
              delete E.createElement, delete E.importNode, delete E[R];
            },
            !1
          ),
          (m.prototype = {
            constructor: m,
            define: be
              ? function (e, t, n) {
                  if (n) g(e, t, n);
                  else {
                    var r = e.toUpperCase();
                    (Ce[r] = { constructor: t, create: [r] }),
                      Se.set(t, r),
                      _e.define(e, t);
                  }
                }
              : g,
            get: be
              ? function (e) {
                  return _e.get(e) || y(e);
                }
              : y,
            whenDefined: be
              ? function (e) {
                  return Te.race([_e.whenDefined(e), b(e)]);
                }
              : b,
          }),
          !_e || /^force/.test(t.type))
        )
          w();
        else if (!t.noBuiltIn)
          try {
            !(function (t, n, r) {
              var s = new RegExp('^<a\\s+is=(\'|")' + r + '\\1></a>$');
              if (
                ((n[V] = 'a'),
                ((t.prototype = Oe(Me.prototype)).constructor = t),
                e.customElements.define(r, t, n),
                !s.test(E.createElement('a', { is: r }).outerHTML) ||
                  !s.test(new t().outerHTML))
              )
                throw n;
            })(
              function e() {
                return Reflect.construct(Me, [], e);
              },
              {},
              'document-register-element-a' + P
            );
          } catch (st) {
            w();
          }
        if (!t.noBuiltIn)
          try {
            if (We.call(E, 'a', 'a').outerHTML.indexOf('is') < 0) throw {};
          } catch (ot) {
            Ie = function (e) {
              return { is: e.toLowerCase() };
            };
          }
      })(window);
    },
    NlG8: function (e, t, n) {
      var r, s;
      void 0 ===
        (s =
          'function' ==
          typeof (r = function () {
            'use strict';
            Zone.__load_patch('getUserMedia', function (e, t, n) {
              var r,
                s = e.navigator;
              s &&
                s.getUserMedia &&
                (s.getUserMedia =
                  ((r = s.getUserMedia),
                  function () {
                    var e = Array.prototype.slice.call(arguments),
                      t = n.bindArguments(e, r.name);
                    return r.apply(this, t);
                  }));
            });
          })
            ? r.call(t, n, t, e)
            : r) || (e.exports = s);
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
      var r, s;
      void 0 ===
        (s =
          'function' ==
          typeof (r = function () {
            'use strict';
            Zone.__load_patch('RTCPeerConnection', function (e, t, n) {
              var r = e.RTCPeerConnection;
              if (r) {
                var s = n.symbol('addEventListener'),
                  o = n.symbol('removeEventListener');
                (r.prototype.addEventListener = r.prototype[s]),
                  (r.prototype.removeEventListener = r.prototype[o]),
                  (r.prototype[s] = null),
                  (r.prototype[o] = null),
                  n.patchEventTarget(e, [r.prototype], { useG: !1 });
              }
            });
          })
            ? r.call(t, n, t, e)
            : r) || (e.exports = s);
    },
    'hN/g': function (e, t, n) {
      'use strict';
      n.r(t), n('pDpN'), n('eCJE'), n('NlG8');
      var r = n('uyix'),
        s = n.n(r);
      n('KJ4T'), (window.EventTarget = s.a);
    },
    pDpN: function (e, t, n) {
      var r, s;
      void 0 ===
        (s =
          'function' ==
          typeof (r = function () {
            'use strict';
            !(function (e) {
              const t = e.performance;
              function n(e) {
                t && t.mark && t.mark(e);
              }
              function r(e, n) {
                t && t.measure && t.measure(e, n);
              }
              n('Zone');
              const s = e.__Zone_symbol_prefix || '__zone_symbol__';
              function o(e) {
                return s + e;
              }
              const i = !0 === e[o('forceDuplicateZoneCheck')];
              if (e.Zone) {
                if (i || 'function' != typeof e.Zone.__symbol__)
                  throw new Error('Zone already loaded.');
                return e.Zone;
              }
              class a {
                constructor(e, t) {
                  (this._parent = e),
                    (this._name = t ? t.name || 'unnamed' : '<root>'),
                    (this._properties = (t && t.properties) || {}),
                    (this._zoneDelegate = new c(
                      this,
                      this._parent && this._parent._zoneDelegate,
                      t
                    ));
                }
                static assertZonePatched() {
                  if (e.Promise !== O.ZoneAwarePromise)
                    throw new Error(
                      'Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)'
                    );
                }
                static get root() {
                  let e = a.current;
                  for (; e.parent; ) e = e.parent;
                  return e;
                }
                static get current() {
                  return N.zone;
                }
                static get currentTask() {
                  return M;
                }
                static __load_patch(t, s) {
                  if (O.hasOwnProperty(t)) {
                    if (i) throw Error('Already loaded patch: ' + t);
                  } else if (!e['__Zone_disable_' + t]) {
                    const o = 'Zone:' + t;
                    n(o), (O[t] = s(e, a, A)), r(o, o);
                  }
                }
                get parent() {
                  return this._parent;
                }
                get name() {
                  return this._name;
                }
                get(e) {
                  const t = this.getZoneWith(e);
                  if (t) return t._properties[e];
                }
                getZoneWith(e) {
                  let t = this;
                  for (; t; ) {
                    if (t._properties.hasOwnProperty(e)) return t;
                    t = t._parent;
                  }
                  return null;
                }
                fork(e) {
                  if (!e) throw new Error('ZoneSpec required!');
                  return this._zoneDelegate.fork(this, e);
                }
                wrap(e, t) {
                  if ('function' != typeof e)
                    throw new Error('Expecting function got: ' + e);
                  const n = this._zoneDelegate.intercept(this, e, t),
                    r = this;
                  return function () {
                    return r.runGuarded(n, this, arguments, t);
                  };
                }
                run(e, t, n, r) {
                  N = { parent: N, zone: this };
                  try {
                    return this._zoneDelegate.invoke(this, e, t, n, r);
                  } finally {
                    N = N.parent;
                  }
                }
                runGuarded(e, t = null, n, r) {
                  N = { parent: N, zone: this };
                  try {
                    try {
                      return this._zoneDelegate.invoke(this, e, t, n, r);
                    } catch (s) {
                      if (this._zoneDelegate.handleError(this, s)) throw s;
                    }
                  } finally {
                    N = N.parent;
                  }
                }
                runTask(e, t, n) {
                  if (e.zone != this)
                    throw new Error(
                      'A task can only be run in the zone of creation! (Creation: ' +
                        (e.zone || _).name +
                        '; Execution: ' +
                        this.name +
                        ')'
                    );
                  if (e.state === b && (e.type === I || e.type === S)) return;
                  const r = e.state != T;
                  r && e._transitionTo(T, E), e.runCount++;
                  const s = M;
                  (M = e), (N = { parent: N, zone: this });
                  try {
                    e.type == S &&
                      e.data &&
                      !e.data.isPeriodic &&
                      (e.cancelFn = void 0);
                    try {
                      return this._zoneDelegate.invokeTask(this, e, t, n);
                    } catch (o) {
                      if (this._zoneDelegate.handleError(this, o)) throw o;
                    }
                  } finally {
                    e.state !== b &&
                      e.state !== C &&
                      (e.type == I || (e.data && e.data.isPeriodic)
                        ? r && e._transitionTo(E, T)
                        : ((e.runCount = 0),
                          this._updateTaskCount(e, -1),
                          r && e._transitionTo(b, T, b))),
                      (N = N.parent),
                      (M = s);
                  }
                }
                scheduleTask(e) {
                  if (e.zone && e.zone !== this) {
                    let t = this;
                    for (; t; ) {
                      if (t === e.zone)
                        throw Error(
                          `can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`
                        );
                      t = t.parent;
                    }
                  }
                  e._transitionTo(w, b);
                  const t = [];
                  (e._zoneDelegates = t), (e._zone = this);
                  try {
                    e = this._zoneDelegate.scheduleTask(this, e);
                  } catch (n) {
                    throw (
                      (e._transitionTo(C, w, b),
                      this._zoneDelegate.handleError(this, n),
                      n)
                    );
                  }
                  return (
                    e._zoneDelegates === t && this._updateTaskCount(e, 1),
                    e.state == w && e._transitionTo(E, w),
                    e
                  );
                }
                scheduleMicroTask(e, t, n, r) {
                  return this.scheduleTask(new u(x, e, t, n, r, void 0));
                }
                scheduleMacroTask(e, t, n, r, s) {
                  return this.scheduleTask(new u(S, e, t, n, r, s));
                }
                scheduleEventTask(e, t, n, r, s) {
                  return this.scheduleTask(new u(I, e, t, n, r, s));
                }
                cancelTask(e) {
                  if (e.zone != this)
                    throw new Error(
                      'A task can only be cancelled in the zone of creation! (Creation: ' +
                        (e.zone || _).name +
                        '; Execution: ' +
                        this.name +
                        ')'
                    );
                  e._transitionTo(k, E, T);
                  try {
                    this._zoneDelegate.cancelTask(this, e);
                  } catch (t) {
                    throw (
                      (e._transitionTo(C, k),
                      this._zoneDelegate.handleError(this, t),
                      t)
                    );
                  }
                  return (
                    this._updateTaskCount(e, -1),
                    e._transitionTo(b, k),
                    (e.runCount = 0),
                    e
                  );
                }
                _updateTaskCount(e, t) {
                  const n = e._zoneDelegates;
                  -1 == t && (e._zoneDelegates = null);
                  for (let r = 0; r < n.length; r++)
                    n[r]._updateTaskCount(e.type, t);
                }
              }
              a.__symbol__ = o;
              const l = {
                name: '',
                onHasTask: (e, t, n, r) => e.hasTask(n, r),
                onScheduleTask: (e, t, n, r) => e.scheduleTask(n, r),
                onInvokeTask: (e, t, n, r, s, o) => e.invokeTask(n, r, s, o),
                onCancelTask: (e, t, n, r) => e.cancelTask(n, r),
              };
              class c {
                constructor(e, t, n) {
                  (this._taskCounts = {
                    microTask: 0,
                    macroTask: 0,
                    eventTask: 0,
                  }),
                    (this.zone = e),
                    (this._parentDelegate = t),
                    (this._forkZS = n && (n && n.onFork ? n : t._forkZS)),
                    (this._forkDlgt = n && (n.onFork ? t : t._forkDlgt)),
                    (this._forkCurrZone =
                      n && (n.onFork ? this.zone : t._forkCurrZone)),
                    (this._interceptZS =
                      n && (n.onIntercept ? n : t._interceptZS)),
                    (this._interceptDlgt =
                      n && (n.onIntercept ? t : t._interceptDlgt)),
                    (this._interceptCurrZone =
                      n && (n.onIntercept ? this.zone : t._interceptCurrZone)),
                    (this._invokeZS = n && (n.onInvoke ? n : t._invokeZS)),
                    (this._invokeDlgt = n && (n.onInvoke ? t : t._invokeDlgt)),
                    (this._invokeCurrZone =
                      n && (n.onInvoke ? this.zone : t._invokeCurrZone)),
                    (this._handleErrorZS =
                      n && (n.onHandleError ? n : t._handleErrorZS)),
                    (this._handleErrorDlgt =
                      n && (n.onHandleError ? t : t._handleErrorDlgt)),
                    (this._handleErrorCurrZone =
                      n &&
                      (n.onHandleError ? this.zone : t._handleErrorCurrZone)),
                    (this._scheduleTaskZS =
                      n && (n.onScheduleTask ? n : t._scheduleTaskZS)),
                    (this._scheduleTaskDlgt =
                      n && (n.onScheduleTask ? t : t._scheduleTaskDlgt)),
                    (this._scheduleTaskCurrZone =
                      n &&
                      (n.onScheduleTask ? this.zone : t._scheduleTaskCurrZone)),
                    (this._invokeTaskZS =
                      n && (n.onInvokeTask ? n : t._invokeTaskZS)),
                    (this._invokeTaskDlgt =
                      n && (n.onInvokeTask ? t : t._invokeTaskDlgt)),
                    (this._invokeTaskCurrZone =
                      n &&
                      (n.onInvokeTask ? this.zone : t._invokeTaskCurrZone)),
                    (this._cancelTaskZS =
                      n && (n.onCancelTask ? n : t._cancelTaskZS)),
                    (this._cancelTaskDlgt =
                      n && (n.onCancelTask ? t : t._cancelTaskDlgt)),
                    (this._cancelTaskCurrZone =
                      n &&
                      (n.onCancelTask ? this.zone : t._cancelTaskCurrZone)),
                    (this._hasTaskZS = null),
                    (this._hasTaskDlgt = null),
                    (this._hasTaskDlgtOwner = null),
                    (this._hasTaskCurrZone = null);
                  const r = n && n.onHasTask;
                  (r || (t && t._hasTaskZS)) &&
                    ((this._hasTaskZS = r ? n : l),
                    (this._hasTaskDlgt = t),
                    (this._hasTaskDlgtOwner = this),
                    (this._hasTaskCurrZone = e),
                    n.onScheduleTask ||
                      ((this._scheduleTaskZS = l),
                      (this._scheduleTaskDlgt = t),
                      (this._scheduleTaskCurrZone = this.zone)),
                    n.onInvokeTask ||
                      ((this._invokeTaskZS = l),
                      (this._invokeTaskDlgt = t),
                      (this._invokeTaskCurrZone = this.zone)),
                    n.onCancelTask ||
                      ((this._cancelTaskZS = l),
                      (this._cancelTaskDlgt = t),
                      (this._cancelTaskCurrZone = this.zone)));
                }
                fork(e, t) {
                  return this._forkZS
                    ? this._forkZS.onFork(this._forkDlgt, this.zone, e, t)
                    : new a(e, t);
                }
                intercept(e, t, n) {
                  return this._interceptZS
                    ? this._interceptZS.onIntercept(
                        this._interceptDlgt,
                        this._interceptCurrZone,
                        e,
                        t,
                        n
                      )
                    : t;
                }
                invoke(e, t, n, r, s) {
                  return this._invokeZS
                    ? this._invokeZS.onInvoke(
                        this._invokeDlgt,
                        this._invokeCurrZone,
                        e,
                        t,
                        n,
                        r,
                        s
                      )
                    : t.apply(n, r);
                }
                handleError(e, t) {
                  return (
                    !this._handleErrorZS ||
                    this._handleErrorZS.onHandleError(
                      this._handleErrorDlgt,
                      this._handleErrorCurrZone,
                      e,
                      t
                    )
                  );
                }
                scheduleTask(e, t) {
                  let n = t;
                  if (this._scheduleTaskZS)
                    this._hasTaskZS &&
                      n._zoneDelegates.push(this._hasTaskDlgtOwner),
                      (n = this._scheduleTaskZS.onScheduleTask(
                        this._scheduleTaskDlgt,
                        this._scheduleTaskCurrZone,
                        e,
                        t
                      )),
                      n || (n = t);
                  else if (t.scheduleFn) t.scheduleFn(t);
                  else {
                    if (t.type != x)
                      throw new Error('Task is missing scheduleFn.');
                    y(t);
                  }
                  return n;
                }
                invokeTask(e, t, n, r) {
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
                }
                cancelTask(e, t) {
                  let n;
                  if (this._cancelTaskZS)
                    n = this._cancelTaskZS.onCancelTask(
                      this._cancelTaskDlgt,
                      this._cancelTaskCurrZone,
                      e,
                      t
                    );
                  else {
                    if (!t.cancelFn) throw Error('Task is not cancelable');
                    n = t.cancelFn(t);
                  }
                  return n;
                }
                hasTask(e, t) {
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
                }
                _updateTaskCount(e, t) {
                  const n = this._taskCounts,
                    r = n[e],
                    s = (n[e] = r + t);
                  if (s < 0)
                    throw new Error('More tasks executed then were scheduled.');
                  (0 != r && 0 != s) ||
                    this.hasTask(this.zone, {
                      microTask: n.microTask > 0,
                      macroTask: n.macroTask > 0,
                      eventTask: n.eventTask > 0,
                      change: e,
                    });
                }
              }
              class u {
                constructor(t, n, r, s, o, i) {
                  if (
                    ((this._zone = null),
                    (this.runCount = 0),
                    (this._zoneDelegates = null),
                    (this._state = 'notScheduled'),
                    (this.type = t),
                    (this.source = n),
                    (this.data = s),
                    (this.scheduleFn = o),
                    (this.cancelFn = i),
                    !r)
                  )
                    throw new Error('callback is not defined');
                  this.callback = r;
                  const a = this;
                  this.invoke =
                    t === I && s && s.useG
                      ? u.invokeTask
                      : function () {
                          return u.invokeTask.call(e, a, this, arguments);
                        };
                }
                static invokeTask(e, t, n) {
                  e || (e = this), D++;
                  try {
                    return e.runCount++, e.zone.runTask(e, t, n);
                  } finally {
                    1 == D && v(), D--;
                  }
                }
                get zone() {
                  return this._zone;
                }
                get state() {
                  return this._state;
                }
                cancelScheduleRequest() {
                  this._transitionTo(b, w);
                }
                _transitionTo(e, t, n) {
                  if (this._state !== t && this._state !== n)
                    throw new Error(
                      `${this.type} '${
                        this.source
                      }': can not transition to '${e}', expecting state '${t}'${
                        n ? " or '" + n + "'" : ''
                      }, was '${this._state}'.`
                    );
                  (this._state = e), e == b && (this._zoneDelegates = null);
                }
                toString() {
                  return this.data && void 0 !== this.data.handleId
                    ? this.data.handleId.toString()
                    : Object.prototype.toString.call(this);
                }
                toJSON() {
                  return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    runCount: this.runCount,
                  };
                }
              }
              const h = o('setTimeout'),
                d = o('Promise'),
                p = o('then');
              let f,
                m = [],
                g = !1;
              function y(t) {
                if (0 === D && 0 === m.length)
                  if ((f || (e[d] && (f = e[d].resolve(0))), f)) {
                    let e = f[p];
                    e || (e = f.then), e.call(f, v);
                  } else e[h](v, 0);
                t && m.push(t);
              }
              function v() {
                if (!g) {
                  for (g = !0; m.length; ) {
                    const t = m;
                    m = [];
                    for (let n = 0; n < t.length; n++) {
                      const r = t[n];
                      try {
                        r.zone.runTask(r, null, null);
                      } catch (e) {
                        A.onUnhandledError(e);
                      }
                    }
                  }
                  A.microtaskDrainDone(), (g = !1);
                }
              }
              const _ = { name: 'NO ZONE' },
                b = 'notScheduled',
                w = 'scheduling',
                E = 'scheduled',
                T = 'running',
                k = 'canceling',
                C = 'unknown',
                x = 'microTask',
                S = 'macroTask',
                I = 'eventTask',
                O = {},
                A = {
                  symbol: o,
                  currentZoneFrame: () => N,
                  onUnhandledError: R,
                  microtaskDrainDone: R,
                  scheduleMicroTask: y,
                  showUncaughtError: () =>
                    !a[o('ignoreConsoleErrorUncaughtError')],
                  patchEventTarget: () => [],
                  patchOnProperties: R,
                  patchMethod: () => R,
                  bindArguments: () => [],
                  patchThen: () => R,
                  patchMacroTask: () => R,
                  setNativePromise: (e) => {
                    e && 'function' == typeof e.resolve && (f = e.resolve(0));
                  },
                  patchEventPrototype: () => R,
                  isIEOrEdge: () => !1,
                  getGlobalObjects: () => {},
                  ObjectDefineProperty: () => R,
                  ObjectGetOwnPropertyDescriptor: () => {},
                  ObjectCreate: () => {},
                  ArraySlice: () => [],
                  patchClass: () => R,
                  wrapWithCurrentZone: () => R,
                  filterProperties: () => [],
                  attachOriginToPatched: () => R,
                  _redefineProperty: () => R,
                  patchCallbacks: () => R,
                };
              let N = { parent: null, zone: new a(null, null) },
                M = null,
                D = 0;
              function R() {}
              r('Zone', 'Zone'), (e.Zone = a);
            })(
              ('undefined' != typeof window && window) ||
                ('undefined' != typeof self && self) ||
                global
            ),
              Zone.__load_patch('ZoneAwarePromise', (e, t, n) => {
                const r = Object.getOwnPropertyDescriptor,
                  s = Object.defineProperty,
                  o = n.symbol,
                  i = [],
                  a =
                    !0 === e[o('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')],
                  l = o('Promise'),
                  c = o('then');
                (n.onUnhandledError = (e) => {
                  if (n.showUncaughtError()) {
                    const t = e && e.rejection;
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
                  (n.microtaskDrainDone = () => {
                    for (; i.length; ) {
                      const t = i.shift();
                      try {
                        t.zone.runGuarded(() => {
                          throw t;
                        });
                      } catch (e) {
                        h(e);
                      }
                    }
                  });
                const u = o('unhandledPromiseRejectionHandler');
                function h(e) {
                  n.onUnhandledError(e);
                  try {
                    const n = t[u];
                    'function' == typeof n && n.call(this, e);
                  } catch (r) {}
                }
                function d(e) {
                  return e && e.then;
                }
                function p(e) {
                  return e;
                }
                function f(e) {
                  return S.reject(e);
                }
                const m = o('state'),
                  g = o('value'),
                  y = o('finally'),
                  v = o('parentPromiseValue'),
                  _ = o('parentPromiseState');
                function b(e, t) {
                  return (n) => {
                    try {
                      E(e, t, n);
                    } catch (r) {
                      E(e, !1, r);
                    }
                  };
                }
                const w = o('currentTaskTrace');
                function E(e, r, o) {
                  const l = (function () {
                    let e = !1;
                    return function (t) {
                      return function () {
                        e || ((e = !0), t.apply(null, arguments));
                      };
                    };
                  })();
                  if (e === o)
                    throw new TypeError('Promise resolved with itself');
                  if (null === e[m]) {
                    let h = null;
                    try {
                      ('object' != typeof o && 'function' != typeof o) ||
                        (h = o && o.then);
                    } catch (u) {
                      return (
                        l(() => {
                          E(e, !1, u);
                        })(),
                        e
                      );
                    }
                    if (
                      !1 !== r &&
                      o instanceof S &&
                      o.hasOwnProperty(m) &&
                      o.hasOwnProperty(g) &&
                      null !== o[m]
                    )
                      k(o), E(e, o[m], o[g]);
                    else if (!1 !== r && 'function' == typeof h)
                      try {
                        h.call(o, l(b(e, r)), l(b(e, !1)));
                      } catch (u) {
                        l(() => {
                          E(e, !1, u);
                        })();
                      }
                    else {
                      e[m] = r;
                      const l = e[g];
                      if (
                        ((e[g] = o),
                        e[y] === y &&
                          !0 === r &&
                          ((e[m] = e[_]), (e[g] = e[v])),
                        !1 === r && o instanceof Error)
                      ) {
                        const e =
                          t.currentTask &&
                          t.currentTask.data &&
                          t.currentTask.data.__creationTrace__;
                        e &&
                          s(o, w, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: e,
                          });
                      }
                      for (let t = 0; t < l.length; )
                        C(e, l[t++], l[t++], l[t++], l[t++]);
                      if (0 == l.length && 0 == r) {
                        e[m] = 0;
                        let r = o;
                        if (!a)
                          try {
                            throw new Error(
                              'Uncaught (in promise): ' +
                                ((c = o) &&
                                c.toString === Object.prototype.toString
                                  ? ((c.constructor && c.constructor.name) ||
                                      '') +
                                    ': ' +
                                    JSON.stringify(c)
                                  : c
                                  ? c.toString()
                                  : Object.prototype.toString.call(c)) +
                                (o && o.stack ? '\n' + o.stack : '')
                            );
                          } catch (u) {
                            r = u;
                          }
                        (r.rejection = o),
                          (r.promise = e),
                          (r.zone = t.current),
                          (r.task = t.currentTask),
                          i.push(r),
                          n.scheduleMicroTask();
                      }
                    }
                  }
                  var c;
                  return e;
                }
                const T = o('rejectionHandledHandler');
                function k(e) {
                  if (0 === e[m]) {
                    try {
                      const n = t[T];
                      n &&
                        'function' == typeof n &&
                        n.call(this, { rejection: e[g], promise: e });
                    } catch (n) {}
                    e[m] = !1;
                    for (let t = 0; t < i.length; t++)
                      e === i[t].promise && i.splice(t, 1);
                  }
                }
                function C(e, t, n, r, s) {
                  k(e);
                  const o = e[m],
                    i = o
                      ? 'function' == typeof r
                        ? r
                        : p
                      : 'function' == typeof s
                      ? s
                      : f;
                  t.scheduleMicroTask(
                    'Promise.then',
                    () => {
                      try {
                        const r = e[g],
                          s = !!n && y === n[y];
                        s && ((n[v] = r), (n[_] = o));
                        const a = t.run(
                          i,
                          void 0,
                          s && i !== f && i !== p ? [] : [r]
                        );
                        E(n, !0, a);
                      } catch (r) {
                        E(n, !1, r);
                      }
                    },
                    n
                  );
                }
                const x = function () {};
                class S {
                  static toString() {
                    return 'function ZoneAwarePromise() { [native code] }';
                  }
                  static resolve(e) {
                    return E(new this(null), !0, e);
                  }
                  static reject(e) {
                    return E(new this(null), !1, e);
                  }
                  static race(e) {
                    let t,
                      n,
                      r = new this((e, r) => {
                        (t = e), (n = r);
                      });
                    function s(e) {
                      t(e);
                    }
                    function o(e) {
                      n(e);
                    }
                    for (let i of e)
                      d(i) || (i = this.resolve(i)), i.then(s, o);
                    return r;
                  }
                  static all(e) {
                    return S.allWithCallback(e);
                  }
                  static allSettled(e) {
                    return (
                      this && this.prototype instanceof S ? this : S
                    ).allWithCallback(e, {
                      thenCallback: (e) => ({ status: 'fulfilled', value: e }),
                      errorCallback: (e) => ({ status: 'rejected', reason: e }),
                    });
                  }
                  static allWithCallback(e, t) {
                    let n,
                      r,
                      s = new this((e, t) => {
                        (n = e), (r = t);
                      }),
                      o = 2,
                      i = 0;
                    const a = [];
                    for (let c of e) {
                      d(c) || (c = this.resolve(c));
                      const e = i;
                      try {
                        c.then(
                          (r) => {
                            (a[e] = t ? t.thenCallback(r) : r),
                              o--,
                              0 === o && n(a);
                          },
                          (s) => {
                            t
                              ? ((a[e] = t.errorCallback(s)),
                                o--,
                                0 === o && n(a))
                              : r(s);
                          }
                        );
                      } catch (l) {
                        r(l);
                      }
                      o++, i++;
                    }
                    return (o -= 2), 0 === o && n(a), s;
                  }
                  constructor(e) {
                    const t = this;
                    if (!(t instanceof S))
                      throw new Error('Must be an instanceof Promise.');
                    (t[m] = null), (t[g] = []);
                    try {
                      e && e(b(t, !0), b(t, !1));
                    } catch (n) {
                      E(t, !1, n);
                    }
                  }
                  get [Symbol.toStringTag]() {
                    return 'Promise';
                  }
                  get [Symbol.species]() {
                    return S;
                  }
                  then(e, n) {
                    let r = this.constructor[Symbol.species];
                    (r && 'function' == typeof r) ||
                      (r = this.constructor || S);
                    const s = new r(x),
                      o = t.current;
                    return (
                      null == this[m]
                        ? this[g].push(o, s, e, n)
                        : C(this, o, s, e, n),
                      s
                    );
                  }
                  catch(e) {
                    return this.then(null, e);
                  }
                  finally(e) {
                    let n = this.constructor[Symbol.species];
                    (n && 'function' == typeof n) || (n = S);
                    const r = new n(x);
                    r[y] = y;
                    const s = t.current;
                    return (
                      null == this[m]
                        ? this[g].push(s, r, e, e)
                        : C(this, s, r, e, e),
                      r
                    );
                  }
                }
                (S.resolve = S.resolve),
                  (S.reject = S.reject),
                  (S.race = S.race),
                  (S.all = S.all);
                const I = (e[l] = e.Promise),
                  O = t.__symbol__('ZoneAwarePromise');
                let A = r(e, 'Promise');
                (A && !A.configurable) ||
                  (A && delete A.writable,
                  A && delete A.value,
                  A || (A = { configurable: !0, enumerable: !0 }),
                  (A.get = function () {
                    return e[O] ? e[O] : e[l];
                  }),
                  (A.set = function (t) {
                    t === S
                      ? (e[O] = t)
                      : ((e[l] = t),
                        t.prototype[c] || M(t),
                        n.setNativePromise(t));
                  }),
                  s(e, 'Promise', A)),
                  (e.Promise = S);
                const N = o('thenPatched');
                function M(e) {
                  const t = e.prototype,
                    n = r(t, 'then');
                  if (n && (!1 === n.writable || !n.configurable)) return;
                  const s = t.then;
                  (t[c] = s),
                    (e.prototype.then = function (e, t) {
                      return new S((e, t) => {
                        s.call(this, e, t);
                      }).then(e, t);
                    }),
                    (e[N] = !0);
                }
                if (((n.patchThen = M), I)) {
                  M(I);
                  const t = e.fetch;
                  'function' == typeof t &&
                    ((e[n.symbol('fetch')] = t),
                    (e.fetch =
                      ((D = t),
                      function () {
                        let e = D.apply(this, arguments);
                        if (e instanceof S) return e;
                        let t = e.constructor;
                        return t[N] || M(t), e;
                      })));
                }
                var D;
                return (Promise[t.__symbol__('uncaughtPromiseErrors')] = i), S;
              });
            const e = Object.getOwnPropertyDescriptor,
              t = Object.defineProperty,
              n = Object.getPrototypeOf,
              r = Object.create,
              s = Array.prototype.slice,
              o = Zone.__symbol__('addEventListener'),
              i = Zone.__symbol__('removeEventListener'),
              a = Zone.__symbol__('');
            function l(e, t) {
              return Zone.current.wrap(e, t);
            }
            function c(e, t, n, r, s) {
              return Zone.current.scheduleMacroTask(e, t, n, r, s);
            }
            const u = Zone.__symbol__,
              h = 'undefined' != typeof window,
              d = h ? window : void 0,
              p = (h && d) || ('object' == typeof self && self) || global,
              f = [null];
            function m(e, t) {
              for (let n = e.length - 1; n >= 0; n--)
                'function' == typeof e[n] && (e[n] = l(e[n], t + '_' + n));
              return e;
            }
            function g(e) {
              return (
                !e ||
                (!1 !== e.writable &&
                  !('function' == typeof e.get && void 0 === e.set))
              );
            }
            const y =
                'undefined' != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope,
              v =
                !('nw' in p) &&
                void 0 !== p.process &&
                '[object process]' === {}.toString.call(p.process),
              _ = !v && !y && !(!h || !d.HTMLElement),
              b =
                void 0 !== p.process &&
                '[object process]' === {}.toString.call(p.process) &&
                !y &&
                !(!h || !d.HTMLElement),
              w = {},
              E = function (e) {
                if (!(e = e || p.event)) return;
                let t = w[e.type];
                t || (t = w[e.type] = u('ON_PROPERTY' + e.type));
                const n = this || e.target || p,
                  r = n[t];
                let s;
                if (_ && n === d && 'error' === e.type) {
                  const t = e;
                  (s =
                    r &&
                    r.call(
                      this,
                      t.message,
                      t.filename,
                      t.lineno,
                      t.colno,
                      t.error
                    )),
                    !0 === s && e.preventDefault();
                } else
                  (s = r && r.apply(this, arguments)),
                    null == s || s || e.preventDefault();
                return s;
              };
            function T(n, r, s) {
              let o = e(n, r);
              if (
                (!o &&
                  s &&
                  e(s, r) &&
                  (o = { enumerable: !0, configurable: !0 }),
                !o || !o.configurable)
              )
                return;
              const i = u('on' + r + 'patched');
              if (n.hasOwnProperty(i) && n[i]) return;
              delete o.writable, delete o.value;
              const a = o.get,
                l = o.set,
                c = r.substr(2);
              let h = w[c];
              h || (h = w[c] = u('ON_PROPERTY' + c)),
                (o.set = function (e) {
                  let t = this;
                  t || n !== p || (t = p),
                    t &&
                      (t[h] && t.removeEventListener(c, E),
                      l && l.apply(t, f),
                      'function' == typeof e
                        ? ((t[h] = e), t.addEventListener(c, E, !1))
                        : (t[h] = null));
                }),
                (o.get = function () {
                  let e = this;
                  if ((e || n !== p || (e = p), !e)) return null;
                  const t = e[h];
                  if (t) return t;
                  if (a) {
                    let t = a && a.call(this);
                    if (t)
                      return (
                        o.set.call(this, t),
                        'function' == typeof e.removeAttribute &&
                          e.removeAttribute(r),
                        t
                      );
                  }
                  return null;
                }),
                t(n, r, o),
                (n[i] = !0);
            }
            function k(e, t, n) {
              if (t) for (let r = 0; r < t.length; r++) T(e, 'on' + t[r], n);
              else {
                const t = [];
                for (const n in e) 'on' == n.substr(0, 2) && t.push(n);
                for (let r = 0; r < t.length; r++) T(e, t[r], n);
              }
            }
            const C = u('originalInstance');
            function x(e) {
              const n = p[e];
              if (!n) return;
              (p[u(e)] = n),
                (p[e] = function () {
                  const t = m(arguments, e);
                  switch (t.length) {
                    case 0:
                      this[C] = new n();
                      break;
                    case 1:
                      this[C] = new n(t[0]);
                      break;
                    case 2:
                      this[C] = new n(t[0], t[1]);
                      break;
                    case 3:
                      this[C] = new n(t[0], t[1], t[2]);
                      break;
                    case 4:
                      this[C] = new n(t[0], t[1], t[2], t[3]);
                      break;
                    default:
                      throw new Error('Arg list too long.');
                  }
                }),
                O(p[e], n);
              const r = new n(function () {});
              let s;
              for (s in r)
                ('XMLHttpRequest' === e && 'responseBlob' === s) ||
                  (function (n) {
                    'function' == typeof r[n]
                      ? (p[e].prototype[n] = function () {
                          return this[C][n].apply(this[C], arguments);
                        })
                      : t(p[e].prototype, n, {
                          set: function (t) {
                            'function' == typeof t
                              ? ((this[C][n] = l(t, e + '.' + n)),
                                O(this[C][n], t))
                              : (this[C][n] = t);
                          },
                          get: function () {
                            return this[C][n];
                          },
                        });
                  })(s);
              for (s in n)
                'prototype' !== s && n.hasOwnProperty(s) && (p[e][s] = n[s]);
            }
            function S(t, r, s) {
              let o = t;
              for (; o && !o.hasOwnProperty(r); ) o = n(o);
              !o && t[r] && (o = t);
              const i = u(r);
              let a = null;
              if (o && !(a = o[i]) && ((a = o[i] = o[r]), g(o && e(o, r)))) {
                const e = s(a, i, r);
                (o[r] = function () {
                  return e(this, arguments);
                }),
                  O(o[r], a);
              }
              return a;
            }
            function I(e, t, n) {
              let r = null;
              function s(e) {
                const t = e.data;
                return (
                  (t.args[t.cbIdx] = function () {
                    e.invoke.apply(this, arguments);
                  }),
                  r.apply(t.target, t.args),
                  e
                );
              }
              r = S(
                e,
                t,
                (e) =>
                  function (t, r) {
                    const o = n(t, r);
                    return o.cbIdx >= 0 && 'function' == typeof r[o.cbIdx]
                      ? c(o.name, r[o.cbIdx], o, s)
                      : e.apply(t, r);
                  }
              );
            }
            function O(e, t) {
              e[u('OriginalDelegate')] = t;
            }
            let A = !1,
              N = !1;
            function M() {
              try {
                const e = d.navigator.userAgent;
                if (-1 !== e.indexOf('MSIE ') || -1 !== e.indexOf('Trident/'))
                  return !0;
              } catch (e) {}
              return !1;
            }
            function D() {
              if (A) return N;
              A = !0;
              try {
                const e = d.navigator.userAgent;
                (-1 === e.indexOf('MSIE ') &&
                  -1 === e.indexOf('Trident/') &&
                  -1 === e.indexOf('Edge/')) ||
                  (N = !0);
              } catch (e) {}
              return N;
            }
            Zone.__load_patch('toString', (e) => {
              const t = Function.prototype.toString,
                n = u('OriginalDelegate'),
                r = u('Promise'),
                s = u('Error'),
                o = function () {
                  if ('function' == typeof this) {
                    const o = this[n];
                    if (o)
                      return 'function' == typeof o
                        ? t.call(o)
                        : Object.prototype.toString.call(o);
                    if (this === Promise) {
                      const n = e[r];
                      if (n) return t.call(n);
                    }
                    if (this === Error) {
                      const n = e[s];
                      if (n) return t.call(n);
                    }
                  }
                  return t.call(this);
                };
              (o[n] = t), (Function.prototype.toString = o);
              const i = Object.prototype.toString;
              Object.prototype.toString = function () {
                return this instanceof Promise
                  ? '[object Promise]'
                  : i.call(this);
              };
            });
            let R = !1;
            if ('undefined' != typeof window)
              try {
                const e = Object.defineProperty({}, 'passive', {
                  get: function () {
                    R = !0;
                  },
                });
                window.addEventListener('test', e, e),
                  window.removeEventListener('test', e, e);
              } catch (ae) {
                R = !1;
              }
            const P = { useG: !0 },
              H = {},
              L = {},
              j = new RegExp('^' + a + '(\\w+)(true|false)$'),
              F = u('propagationStopped');
            function z(e, t) {
              const n = (t ? t(e) : e) + 'false',
                r = (t ? t(e) : e) + 'true',
                s = a + n,
                o = a + r;
              (H[e] = {}), (H[e].false = s), (H[e].true = o);
            }
            function V(e, t, r) {
              const s = (r && r.add) || 'addEventListener',
                o = (r && r.rm) || 'removeEventListener',
                i = (r && r.listeners) || 'eventListeners',
                l = (r && r.rmAll) || 'removeAllListeners',
                c = u(s),
                h = '.' + s + ':',
                d = function (e, t, n) {
                  if (e.isRemoved) return;
                  const r = e.callback;
                  'object' == typeof r &&
                    r.handleEvent &&
                    ((e.callback = (e) => r.handleEvent(e)),
                    (e.originalDelegate = r)),
                    e.invoke(e, t, [n]);
                  const s = e.options;
                  s &&
                    'object' == typeof s &&
                    s.once &&
                    t[o].call(
                      t,
                      n.type,
                      e.originalDelegate ? e.originalDelegate : e.callback,
                      s
                    );
                },
                p = function (t) {
                  if (!(t = t || e.event)) return;
                  const n = this || t.target || e,
                    r = n[H[t.type].false];
                  if (r)
                    if (1 === r.length) d(r[0], n, t);
                    else {
                      const e = r.slice();
                      for (let r = 0; r < e.length && (!t || !0 !== t[F]); r++)
                        d(e[r], n, t);
                    }
                },
                f = function (t) {
                  if (!(t = t || e.event)) return;
                  const n = this || t.target || e,
                    r = n[H[t.type].true];
                  if (r)
                    if (1 === r.length) d(r[0], n, t);
                    else {
                      const e = r.slice();
                      for (let r = 0; r < e.length && (!t || !0 !== t[F]); r++)
                        d(e[r], n, t);
                    }
                };
              function m(t, r) {
                if (!t) return !1;
                let d = !0;
                r && void 0 !== r.useG && (d = r.useG);
                const m = r && r.vh;
                let g = !0;
                r && void 0 !== r.chkDup && (g = r.chkDup);
                let y = !1;
                r && void 0 !== r.rt && (y = r.rt);
                let _ = t;
                for (; _ && !_.hasOwnProperty(s); ) _ = n(_);
                if ((!_ && t[s] && (_ = t), !_)) return !1;
                if (_[c]) return !1;
                const b = r && r.eventNameToString,
                  w = {},
                  E = (_[c] = _[s]),
                  T = (_[u(o)] = _[o]),
                  k = (_[u(i)] = _[i]),
                  C = (_[u(l)] = _[l]);
                let x;
                function S(e, t) {
                  return !R && 'object' == typeof e && e
                    ? !!e.capture
                    : R && t
                    ? 'boolean' == typeof e
                      ? { capture: e, passive: !0 }
                      : e
                      ? 'object' == typeof e && !1 !== e.passive
                        ? Object.assign(Object.assign({}, e), { passive: !0 })
                        : e
                      : { passive: !0 }
                    : e;
                }
                r && r.prepend && (x = _[u(r.prepend)] = _[r.prepend]);
                const I = d
                    ? function (e) {
                        if (!w.isExisting)
                          return E.call(
                            w.target,
                            w.eventName,
                            w.capture ? f : p,
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
                  A = d
                    ? function (e) {
                        if (!e.isRemoved) {
                          const t = H[e.eventName];
                          let n;
                          t && (n = t[e.capture ? 'true' : 'false']);
                          const r = n && e.target[n];
                          if (r)
                            for (let s = 0; s < r.length; s++)
                              if (r[s] === e) {
                                r.splice(s, 1),
                                  (e.isRemoved = !0),
                                  0 === r.length &&
                                    ((e.allRemoved = !0), (e.target[n] = null));
                                break;
                              }
                        }
                        if (e.allRemoved)
                          return T.call(
                            e.target,
                            e.eventName,
                            e.capture ? f : p,
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
                  N =
                    r && r.diff
                      ? r.diff
                      : function (e, t) {
                          const n = typeof t;
                          return (
                            ('function' === n && e.callback === t) ||
                            ('object' === n && e.originalDelegate === t)
                          );
                        },
                  M = Zone[u('BLACK_LISTED_EVENTS')],
                  D = e[u('PASSIVE_EVENTS')],
                  F = function (t, n, s, o, i = !1, a = !1) {
                    return function () {
                      const l = this || e;
                      let c = arguments[0];
                      r && r.transferEventName && (c = r.transferEventName(c));
                      let u = arguments[1];
                      if (!u) return t.apply(this, arguments);
                      if (v && 'uncaughtException' === c)
                        return t.apply(this, arguments);
                      let h = !1;
                      if ('function' != typeof u) {
                        if (!u.handleEvent) return t.apply(this, arguments);
                        h = !0;
                      }
                      if (m && !m(t, u, l, arguments)) return;
                      const p = R && !!D && -1 !== D.indexOf(c),
                        f = S(arguments[2], p);
                      if (M)
                        for (let e = 0; e < M.length; e++)
                          if (c === M[e])
                            return p
                              ? t.call(l, c, u, f)
                              : t.apply(this, arguments);
                      const y = !!f && ('boolean' == typeof f || f.capture),
                        _ = !(!f || 'object' != typeof f) && f.once,
                        E = Zone.current;
                      let T = H[c];
                      T || (z(c, b), (T = H[c]));
                      const k = T[y ? 'true' : 'false'];
                      let C,
                        x = l[k],
                        I = !1;
                      if (x) {
                        if (((I = !0), g))
                          for (let e = 0; e < x.length; e++)
                            if (N(x[e], u)) return;
                      } else x = l[k] = [];
                      const O = l.constructor.name,
                        A = L[O];
                      A && (C = A[c]),
                        C || (C = O + n + (b ? b(c) : c)),
                        (w.options = f),
                        _ && (w.options.once = !1),
                        (w.target = l),
                        (w.capture = y),
                        (w.eventName = c),
                        (w.isExisting = I);
                      const j = d ? P : void 0;
                      j && (j.taskData = w);
                      const F = E.scheduleEventTask(C, u, j, s, o);
                      return (
                        (w.target = null),
                        j && (j.taskData = null),
                        _ && (f.once = !0),
                        (R || 'boolean' != typeof F.options) && (F.options = f),
                        (F.target = l),
                        (F.capture = y),
                        (F.eventName = c),
                        h && (F.originalDelegate = u),
                        a ? x.unshift(F) : x.push(F),
                        i ? l : void 0
                      );
                    };
                  };
                return (
                  (_[s] = F(E, h, I, A, y)),
                  x &&
                    (_.prependListener = F(
                      x,
                      '.prependListener:',
                      function (e) {
                        return x.call(
                          w.target,
                          w.eventName,
                          e.invoke,
                          w.options
                        );
                      },
                      A,
                      y,
                      !0
                    )),
                  (_[o] = function () {
                    const t = this || e;
                    let n = arguments[0];
                    r && r.transferEventName && (n = r.transferEventName(n));
                    const s = arguments[2],
                      o = !!s && ('boolean' == typeof s || s.capture),
                      i = arguments[1];
                    if (!i) return T.apply(this, arguments);
                    if (m && !m(T, i, t, arguments)) return;
                    const l = H[n];
                    let c;
                    l && (c = l[o ? 'true' : 'false']);
                    const u = c && t[c];
                    if (u)
                      for (let e = 0; e < u.length; e++) {
                        const r = u[e];
                        if (N(r, i))
                          return (
                            u.splice(e, 1),
                            (r.isRemoved = !0),
                            0 === u.length &&
                              ((r.allRemoved = !0),
                              (t[c] = null),
                              'string' == typeof n) &&
                              (t[a + 'ON_PROPERTY' + n] = null),
                            r.zone.cancelTask(r),
                            y ? t : void 0
                          );
                      }
                    return T.apply(this, arguments);
                  }),
                  (_[i] = function () {
                    const t = this || e;
                    let n = arguments[0];
                    r && r.transferEventName && (n = r.transferEventName(n));
                    const s = [],
                      o = Z(t, b ? b(n) : n);
                    for (let e = 0; e < o.length; e++) {
                      const t = o[e];
                      s.push(
                        t.originalDelegate ? t.originalDelegate : t.callback
                      );
                    }
                    return s;
                  }),
                  (_[l] = function () {
                    const t = this || e;
                    let n = arguments[0];
                    if (n) {
                      r && r.transferEventName && (n = r.transferEventName(n));
                      const e = H[n];
                      if (e) {
                        const r = t[e.false],
                          s = t[e.true];
                        if (r) {
                          const e = r.slice();
                          for (let t = 0; t < e.length; t++) {
                            const r = e[t];
                            this[o].call(
                              this,
                              n,
                              r.originalDelegate
                                ? r.originalDelegate
                                : r.callback,
                              r.options
                            );
                          }
                        }
                        if (s) {
                          const e = s.slice();
                          for (let t = 0; t < e.length; t++) {
                            const r = e[t];
                            this[o].call(
                              this,
                              n,
                              r.originalDelegate
                                ? r.originalDelegate
                                : r.callback,
                              r.options
                            );
                          }
                        }
                      }
                    } else {
                      const e = Object.keys(t);
                      for (let t = 0; t < e.length; t++) {
                        const n = j.exec(e[t]);
                        let r = n && n[1];
                        r && 'removeListener' !== r && this[l].call(this, r);
                      }
                      this[l].call(this, 'removeListener');
                    }
                    if (y) return this;
                  }),
                  O(_[s], E),
                  O(_[o], T),
                  C && O(_[l], C),
                  k && O(_[i], k),
                  !0
                );
              }
              let g = [];
              for (let n = 0; n < t.length; n++) g[n] = m(t[n], r);
              return g;
            }
            function Z(e, t) {
              if (!t) {
                const n = [];
                for (let r in e) {
                  const s = j.exec(r);
                  let o = s && s[1];
                  if (o && (!t || o === t)) {
                    const t = e[r];
                    if (t) for (let e = 0; e < t.length; e++) n.push(t[e]);
                  }
                }
                return n;
              }
              let n = H[t];
              n || (z(t), (n = H[t]));
              const r = e[n.false],
                s = e[n.true];
              return r ? (s ? r.concat(s) : r.slice()) : s ? s.slice() : [];
            }
            function B(e, t) {
              const n = e.Event;
              n &&
                n.prototype &&
                t.patchMethod(
                  n.prototype,
                  'stopImmediatePropagation',
                  (e) =>
                    function (t, n) {
                      (t[F] = !0), e && e.apply(t, n);
                    }
                );
            }
            function U(e, t, n, r, s) {
              const o = Zone.__symbol__(r);
              if (t[o]) return;
              const i = (t[o] = t[r]);
              (t[r] = function (o, a, l) {
                return (
                  a &&
                    a.prototype &&
                    s.forEach(function (t) {
                      const s = `${n}.${r}::` + t,
                        o = a.prototype;
                      if (o.hasOwnProperty(t)) {
                        const n = e.ObjectGetOwnPropertyDescriptor(o, t);
                        n && n.value
                          ? ((n.value = e.wrapWithCurrentZone(n.value, s)),
                            e._redefineProperty(a.prototype, t, n))
                          : o[t] && (o[t] = e.wrapWithCurrentZone(o[t], s));
                      } else o[t] && (o[t] = e.wrapWithCurrentZone(o[t], s));
                    }),
                  i.call(t, o, a, l)
                );
              }),
                e.attachOriginToPatched(t[r], i);
            }
            const q = [
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
              W = [
                'encrypted',
                'waitingforkey',
                'msneedkey',
                'mozinterruptbegin',
                'mozinterruptend',
              ],
              $ = ['load'],
              G = [
                'blur',
                'error',
                'focus',
                'load',
                'resize',
                'scroll',
                'messageerror',
              ],
              J = ['bounce', 'finish', 'start'],
              K = [
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
              X = [
                'upgradeneeded',
                'complete',
                'abort',
                'success',
                'error',
                'blocked',
                'versionchange',
                'close',
              ],
              Q = ['close', 'error', 'open', 'message'],
              Y = ['error', 'message'],
              ee = [
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
                q,
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
            function te(e, t, n) {
              if (!n || 0 === n.length) return t;
              const r = n.filter((t) => t.target === e);
              if (!r || 0 === r.length) return t;
              const s = r[0].ignoreProperties;
              return t.filter((e) => -1 === s.indexOf(e));
            }
            function ne(e, t, n, r) {
              e && k(e, te(e, t, n), r);
            }
            function re(e, t) {
              if (v && !b) return;
              if (Zone[e.symbol('patchEvents')]) return;
              const r = 'undefined' != typeof WebSocket,
                s = t.__Zone_ignore_on_properties;
              if (_) {
                const e = window,
                  t = M ? [{ target: e, ignoreProperties: ['error'] }] : [];
                ne(e, ee.concat(['messageerror']), s ? s.concat(t) : s, n(e)),
                  ne(Document.prototype, ee, s),
                  void 0 !== e.SVGElement && ne(e.SVGElement.prototype, ee, s),
                  ne(Element.prototype, ee, s),
                  ne(HTMLElement.prototype, ee, s),
                  ne(HTMLMediaElement.prototype, W, s),
                  ne(HTMLFrameSetElement.prototype, q.concat(G), s),
                  ne(HTMLBodyElement.prototype, q.concat(G), s),
                  ne(HTMLFrameElement.prototype, $, s),
                  ne(HTMLIFrameElement.prototype, $, s);
                const r = e.HTMLMarqueeElement;
                r && ne(r.prototype, J, s);
                const o = e.Worker;
                o && ne(o.prototype, Y, s);
              }
              const o = t.XMLHttpRequest;
              o && ne(o.prototype, K, s);
              const i = t.XMLHttpRequestEventTarget;
              i && ne(i && i.prototype, K, s),
                'undefined' != typeof IDBIndex &&
                  (ne(IDBIndex.prototype, X, s),
                  ne(IDBRequest.prototype, X, s),
                  ne(IDBOpenDBRequest.prototype, X, s),
                  ne(IDBDatabase.prototype, X, s),
                  ne(IDBTransaction.prototype, X, s),
                  ne(IDBCursor.prototype, X, s)),
                r && ne(WebSocket.prototype, Q, s);
            }
            Zone.__load_patch('util', (n, o, i) => {
              (i.patchOnProperties = k),
                (i.patchMethod = S),
                (i.bindArguments = m),
                (i.patchMacroTask = I);
              const c = o.__symbol__('BLACK_LISTED_EVENTS'),
                u = o.__symbol__('UNPATCHED_EVENTS');
              n[u] && (n[c] = n[u]),
                n[c] && (o[c] = o[u] = n[c]),
                (i.patchEventPrototype = B),
                (i.patchEventTarget = V),
                (i.isIEOrEdge = D),
                (i.ObjectDefineProperty = t),
                (i.ObjectGetOwnPropertyDescriptor = e),
                (i.ObjectCreate = r),
                (i.ArraySlice = s),
                (i.patchClass = x),
                (i.wrapWithCurrentZone = l),
                (i.filterProperties = te),
                (i.attachOriginToPatched = O),
                (i._redefineProperty = Object.defineProperty),
                (i.patchCallbacks = U),
                (i.getGlobalObjects = () => ({
                  globalSources: L,
                  zoneSymbolEventNames: H,
                  eventNames: ee,
                  isBrowser: _,
                  isMix: b,
                  isNode: v,
                  TRUE_STR: 'true',
                  FALSE_STR: 'false',
                  ZONE_SYMBOL_PREFIX: a,
                  ADD_EVENT_LISTENER_STR: 'addEventListener',
                  REMOVE_EVENT_LISTENER_STR: 'removeEventListener',
                }));
            });
            const se = u('zoneTask');
            function oe(e, t, n, r) {
              let s = null,
                o = null;
              n += r;
              const i = {};
              function a(t) {
                const n = t.data;
                return (
                  (n.args[0] = function () {
                    try {
                      t.invoke.apply(this, arguments);
                    } finally {
                      (t.data && t.data.isPeriodic) ||
                        ('number' == typeof n.handleId
                          ? delete i[n.handleId]
                          : n.handleId && (n.handleId[se] = null));
                    }
                  }),
                  (n.handleId = s.apply(e, n.args)),
                  t
                );
              }
              function l(e) {
                return o(e.data.handleId);
              }
              (s = S(
                e,
                (t += r),
                (n) =>
                  function (s, o) {
                    if ('function' == typeof o[0]) {
                      const e = c(
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
                        a,
                        l
                      );
                      if (!e) return e;
                      const n = e.data.handleId;
                      return (
                        'number' == typeof n ? (i[n] = e) : n && (n[se] = e),
                        n &&
                          n.ref &&
                          n.unref &&
                          'function' == typeof n.ref &&
                          'function' == typeof n.unref &&
                          ((e.ref = n.ref.bind(n)),
                          (e.unref = n.unref.bind(n))),
                        'number' == typeof n || n ? n : e
                      );
                    }
                    return n.apply(e, o);
                  }
              )),
                (o = S(
                  e,
                  n,
                  (t) =>
                    function (n, r) {
                      const s = r[0];
                      let o;
                      'number' == typeof s
                        ? (o = i[s])
                        : ((o = s && s[se]), o || (o = s)),
                        o && 'string' == typeof o.type
                          ? 'notScheduled' !== o.state &&
                            ((o.cancelFn && o.data.isPeriodic) ||
                              0 === o.runCount) &&
                            ('number' == typeof s
                              ? delete i[s]
                              : s && (s[se] = null),
                            o.zone.cancelTask(o))
                          : t.apply(e, r);
                    }
                ));
            }
            function ie(e, t) {
              if (Zone[t.symbol('patchEventTarget')]) return;
              const {
                eventNames: n,
                zoneSymbolEventNames: r,
                TRUE_STR: s,
                FALSE_STR: o,
                ZONE_SYMBOL_PREFIX: i,
              } = t.getGlobalObjects();
              for (let l = 0; l < n.length; l++) {
                const e = n[l],
                  t = i + (e + o),
                  a = i + (e + s);
                (r[e] = {}), (r[e][o] = t), (r[e][s] = a);
              }
              const a = e.EventTarget;
              return a && a.prototype
                ? (t.patchEventTarget(e, [a && a.prototype]), !0)
                : void 0;
            }
            Zone.__load_patch('legacy', (e) => {
              const t = e[Zone.__symbol__('legacyPatch')];
              t && t();
            }),
              Zone.__load_patch('timers', (e) => {
                oe(e, 'set', 'clear', 'Timeout'),
                  oe(e, 'set', 'clear', 'Interval'),
                  oe(e, 'set', 'clear', 'Immediate');
              }),
              Zone.__load_patch('requestAnimationFrame', (e) => {
                oe(e, 'request', 'cancel', 'AnimationFrame'),
                  oe(e, 'mozRequest', 'mozCancel', 'AnimationFrame'),
                  oe(e, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
              }),
              Zone.__load_patch('blocking', (e, t) => {
                const n = ['alert', 'prompt', 'confirm'];
                for (let r = 0; r < n.length; r++)
                  S(
                    e,
                    n[r],
                    (n, r, s) =>
                      function (r, o) {
                        return t.current.run(n, e, o, s);
                      }
                  );
              }),
              Zone.__load_patch('EventTarget', (e, t, n) => {
                (function (e, t) {
                  t.patchEventPrototype(e, t);
                })(e, n),
                  ie(e, n);
                const r = e.XMLHttpRequestEventTarget;
                r && r.prototype && n.patchEventTarget(e, [r.prototype]),
                  x('MutationObserver'),
                  x('WebKitMutationObserver'),
                  x('IntersectionObserver'),
                  x('FileReader');
              }),
              Zone.__load_patch('on_property', (e, t, n) => {
                re(n, e);
              }),
              Zone.__load_patch('customElements', (e, t, n) => {
                !(function (e, t) {
                  const { isBrowser: n, isMix: r } = t.getGlobalObjects();
                  (n || r) &&
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
              Zone.__load_patch('XHR', (e, t) => {
                !(function (e) {
                  const d = e.XMLHttpRequest;
                  if (!d) return;
                  const p = d.prototype;
                  let f = p[o],
                    m = p[i];
                  if (!f) {
                    const t = e.XMLHttpRequestEventTarget;
                    if (t) {
                      const e = t.prototype;
                      (f = e[o]), (m = e[i]);
                    }
                  }
                  function g(e) {
                    const r = e.data,
                      l = r.target;
                    (l[a] = !1), (l[h] = !1);
                    const c = l[s];
                    f || ((f = l[o]), (m = l[i])),
                      c && m.call(l, 'readystatechange', c);
                    const u = (l[s] = () => {
                      if (l.readyState === l.DONE)
                        if (!r.aborted && l[a] && 'scheduled' === e.state) {
                          const n = l[t.__symbol__('loadfalse')];
                          if (n && n.length > 0) {
                            const s = e.invoke;
                            (e.invoke = function () {
                              const n = l[t.__symbol__('loadfalse')];
                              for (let t = 0; t < n.length; t++)
                                n[t] === e && n.splice(t, 1);
                              r.aborted || 'scheduled' !== e.state || s.call(e);
                            }),
                              n.push(e);
                          } else e.invoke();
                        } else r.aborted || !1 !== l[a] || (l[h] = !0);
                    });
                    return (
                      f.call(l, 'readystatechange', u),
                      l[n] || (l[n] = e),
                      E.apply(l, r.args),
                      (l[a] = !0),
                      e
                    );
                  }
                  function y() {}
                  function v(e) {
                    const t = e.data;
                    return (t.aborted = !0), T.apply(t.target, t.args);
                  }
                  const _ = S(
                      p,
                      'open',
                      () =>
                        function (e, t) {
                          return (
                            (e[r] = 0 == t[2]), (e[l] = t[1]), _.apply(e, t)
                          );
                        }
                    ),
                    b = u('fetchTaskAborting'),
                    w = u('fetchTaskScheduling'),
                    E = S(
                      p,
                      'send',
                      () =>
                        function (e, n) {
                          if (!0 === t.current[w]) return E.apply(e, n);
                          if (e[r]) return E.apply(e, n);
                          {
                            const t = {
                                target: e,
                                url: e[l],
                                isPeriodic: !1,
                                args: n,
                                aborted: !1,
                              },
                              r = c('XMLHttpRequest.send', y, t, g, v);
                            e &&
                              !0 === e[h] &&
                              !t.aborted &&
                              'scheduled' === r.state &&
                              r.invoke();
                          }
                        }
                    ),
                    T = S(
                      p,
                      'abort',
                      () =>
                        function (e, r) {
                          const s = e[n];
                          if (s && 'string' == typeof s.type) {
                            if (
                              null == s.cancelFn ||
                              (s.data && s.data.aborted)
                            )
                              return;
                            s.zone.cancelTask(s);
                          } else if (!0 === t.current[b]) return T.apply(e, r);
                        }
                    );
                })(e);
                const n = u('xhrTask'),
                  r = u('xhrSync'),
                  s = u('xhrListener'),
                  a = u('xhrScheduled'),
                  l = u('xhrURL'),
                  h = u('xhrErrorBeforeScheduled');
              }),
              Zone.__load_patch('geolocation', (t) => {
                t.navigator &&
                  t.navigator.geolocation &&
                  (function (t, n) {
                    const r = t.constructor.name;
                    for (let s = 0; s < n.length; s++) {
                      const o = n[s],
                        i = t[o];
                      if (i) {
                        if (!g(e(t, o))) continue;
                        t[o] = ((e) => {
                          const t = function () {
                            return e.apply(this, m(arguments, r + '.' + o));
                          };
                          return O(t, e), t;
                        })(i);
                      }
                    }
                  })(t.navigator.geolocation, [
                    'getCurrentPosition',
                    'watchPosition',
                  ]);
              }),
              Zone.__load_patch('PromiseRejectionEvent', (e, t) => {
                function n(t) {
                  return function (n) {
                    Z(e, t).forEach((r) => {
                      const s = e.PromiseRejectionEvent;
                      if (s) {
                        const e = new s(t, {
                          promise: n.promise,
                          reason: n.rejection,
                        });
                        r.invoke(e);
                      }
                    });
                  };
                }
                e.PromiseRejectionEvent &&
                  ((t[u('unhandledPromiseRejectionHandler')] =
                    n('unhandledrejection')),
                  (t[u('rejectionHandledHandler')] = n('rejectionhandled')));
              });
          })
            ? r.call(t, n, t, e)
            : r) || (e.exports = s);
    },
    uyix: function (e, t) {
      e.exports = (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var s = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
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
              Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(e, '__esModule', { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
              2 & t && 'string' != typeof e)
            )
              for (var s in e)
                n.d(
                  r,
                  s,
                  function (t) {
                    return e[t];
                  }.bind(null, s)
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
          e.exports = class {
            constructor() {
              this.listeners = {};
            }
            addEventListener(e, t) {
              e in this.listeners || (this.listeners[e] = []),
                this.listeners[e].push(t);
            }
            removeEventListener(e, t) {
              if (!(e in this.listeners)) return;
              const n = this.listeners[e];
              for (let r = 0, s = n.length; r < s; r++)
                if (n[r] === t) return void n.splice(r, 1);
            }
            dispatchEvent(e) {
              if (!(e.type in this.listeners)) return !0;
              const t = this.listeners[e.type].slice();
              for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
              return !e.defaultPrevented;
            }
          };
        },
      });
    },
    zUnb: function (e, t, n) {
      'use strict';
      function r(e) {
        return 'function' == typeof e;
      }
      n.r(t), n('hN/g');
      let s = !1;
      const o = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            const e = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                e.stack
            );
          } else
            s &&
              console.log(
                'RxJS: Back to a better error behavior. Thank you. <3'
              );
          s = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function i(e) {
        setTimeout(() => {
          throw e;
        }, 0);
      }
      const a = {
          closed: !0,
          next(e) {},
          error(e) {
            if (o.useDeprecatedSynchronousErrorHandling) throw e;
            i(e);
          },
          complete() {},
        },
        l = (() =>
          Array.isArray || ((e) => e && 'number' == typeof e.length))();
      function c(e) {
        return null !== e && 'object' == typeof e;
      }
      const u = (() => {
        function e(e) {
          return (
            Error.call(this),
            (this.message = e
              ? `${e.length} errors occurred during unsubscription:\n${e
                  .map((e, t) => `${t + 1}) ${e.toString()}`)
                  .join('\n  ')}`
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = e),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      let h = (() => {
        class e {
          constructor(e) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
          }
          unsubscribe() {
            let t;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: s,
              _unsubscribe: o,
              _subscriptions: i,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof e)
            )
              n.remove(this);
            else if (null !== n)
              for (let e = 0; e < n.length; ++e) n[e].remove(this);
            if (r(o)) {
              s && (this._unsubscribe = void 0);
              try {
                o.call(this);
              } catch (a) {
                t = a instanceof u ? d(a.errors) : [a];
              }
            }
            if (l(i)) {
              let e = -1,
                n = i.length;
              for (; ++e < n; ) {
                const n = i[e];
                if (c(n))
                  try {
                    n.unsubscribe();
                  } catch (a) {
                    (t = t || []),
                      a instanceof u ? (t = t.concat(d(a.errors))) : t.push(a);
                  }
              }
            }
            if (t) throw new u(t);
          }
          add(t) {
            let n = t;
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
                  const t = n;
                  (n = new e()), (n._subscriptions = [t]);
                }
                break;
              default:
                throw new Error(
                  'unrecognized teardown ' + t + ' added to Subscription.'
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof e) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(e) {
            const t = this._subscriptions;
            if (t) {
              const n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }
        }
        return (
          (e.EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new e())),
          e
        );
      })();
      function d(e) {
        return e.reduce((e, t) => e.concat(t instanceof u ? t.errors : t), []);
      }
      const p = (() =>
        'function' == typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random())();
      class f extends h {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!e) {
                this.destination = a;
                break;
              }
              if ('object' == typeof e) {
                e instanceof f
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                    (this.destination = e),
                    e.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new m(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new m(this, e, t, n));
          }
        }
        [p]() {
          return this;
        }
        static create(e, t, n) {
          const r = new f(e, t, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: e } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = e),
            this
          );
        }
      }
      class m extends f {
        constructor(e, t, n, s) {
          let o;
          super(), (this._parentSubscriber = e);
          let i = this;
          r(t)
            ? (o = t)
            : t &&
              ((o = t.next),
              (n = t.error),
              (s = t.complete),
              t !== a &&
                ((i = Object.create(t)),
                r(i.unsubscribe) && this.add(i.unsubscribe.bind(i)),
                (i.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = i),
            (this._next = o),
            (this._error = n),
            (this._complete = s);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            o.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = o;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : i(e),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              i(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              o.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), o.useDeprecatedSynchronousErrorHandling))
              throw n;
            i(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!o.useDeprecatedSynchronousErrorHandling)
            throw new Error('bad call');
          try {
            t.call(this._context, n);
          } catch (r) {
            return o.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
              : (i(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            e.unsubscribe();
        }
      }
      const g = (() =>
        ('function' == typeof Symbol && Symbol.observable) || '@@observable')();
      function y(e) {
        return e;
      }
      let v = (() => {
        class e {
          constructor(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          lift(t) {
            const n = new e();
            return (n.source = this), (n.operator = t), n;
          }
          subscribe(e, t, n) {
            const { operator: r } = this,
              s = (function (e, t, n) {
                if (e) {
                  if (e instanceof f) return e;
                  if (e[p]) return e[p]();
                }
                return e || t || n ? new f(e, t, n) : new f(a);
              })(e, t, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (o.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              o.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              o.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function (e) {
                  for (; e; ) {
                    const { closed: t, destination: n, isStopped: r } = e;
                    if (t || r) return !1;
                    e = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }
          forEach(e, t) {
            return new (t = _(t))((t, n) => {
              let r;
              r = this.subscribe(
                (t) => {
                  try {
                    e(t);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [g]() {
            return this;
          }
          pipe(...e) {
            return 0 === e.length
              ? this
              : (0 === (t = e).length
                  ? y
                  : 1 === t.length
                  ? t[0]
                  : function (e) {
                      return t.reduce((e, t) => t(e), e);
                    })(this);
            var t;
          }
          toPromise(e) {
            return new (e = _(e))((e, t) => {
              let n;
              this.subscribe(
                (e) => (n = e),
                (e) => t(e),
                () => e(n)
              );
            });
          }
        }
        return (e.create = (t) => new e(t)), e;
      })();
      function _(e) {
        if ((e || (e = o.Promise || Promise), !e))
          throw new Error('no Promise impl found');
        return e;
      }
      const b = (() => {
        function e() {
          return (
            Error.call(this),
            (this.message = 'object unsubscribed'),
            (this.name = 'ObjectUnsubscribedError'),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      class w extends h {
        constructor(e, t) {
          super(),
            (this.subject = e),
            (this.subscriber = t),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (
            ((this.subject = null),
            !t || 0 === t.length || e.isStopped || e.closed)
          )
            return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      class E extends f {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      let T = (() => {
        class e extends v {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new E(this);
          }
          lift(e) {
            const t = new k(this, this);
            return (t.operator = e), t;
          }
          next(e) {
            if (this.closed) throw new b();
            if (!this.isStopped) {
              const { observers: t } = this,
                n = t.length,
                r = t.slice();
              for (let s = 0; s < n; s++) r[s].next(e);
            }
          }
          error(e) {
            if (this.closed) throw new b();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let s = 0; s < n; s++) r[s].error(e);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new b();
            this.isStopped = !0;
            const { observers: e } = this,
              t = e.length,
              n = e.slice();
            for (let r = 0; r < t; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(e) {
            if (this.closed) throw new b();
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) throw new b();
            return this.hasError
              ? (e.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (e.complete(), h.EMPTY)
              : (this.observers.push(e), new w(this, e));
          }
          asObservable() {
            const e = new v();
            return (e.source = this), e;
          }
        }
        return (e.create = (e, t) => new k(e, t)), e;
      })();
      class k extends T {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : h.EMPTY;
        }
      }
      function C(e) {
        return e && 'function' == typeof e.schedule;
      }
      function x(e, t) {
        return function (n) {
          if ('function' != typeof e)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new S(e, t));
        };
      }
      class S {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new I(e, this.project, this.thisArg));
        }
      }
      class I extends f {
        constructor(e, t, n) {
          super(e),
            (this.project = t),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      const O = (e) => (t) => {
        for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
        t.complete();
      };
      function A() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      const N = A(),
        M = (e) => e && 'number' == typeof e.length && 'function' != typeof e;
      function D(e) {
        return (
          !!e && 'function' != typeof e.subscribe && 'function' == typeof e.then
        );
      }
      const R = (e) => {
        if (e && 'function' == typeof e[g])
          return (
            (r = e),
            (e) => {
              const t = r[g]();
              if ('function' != typeof t.subscribe)
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              return t.subscribe(e);
            }
          );
        if (M(e)) return O(e);
        if (D(e))
          return (
            (n = e),
            (e) => (
              n
                .then(
                  (t) => {
                    e.closed || (e.next(t), e.complete());
                  },
                  (t) => e.error(t)
                )
                .then(null, i),
              e
            )
          );
        if (e && 'function' == typeof e[N])
          return (
            (t = e),
            (e) => {
              const n = t[N]();
              for (;;) {
                let t;
                try {
                  t = n.next();
                } catch (r) {
                  return e.error(r), e;
                }
                if (t.done) {
                  e.complete();
                  break;
                }
                if ((e.next(t.value), e.closed)) break;
              }
              return (
                'function' == typeof n.return &&
                  e.add(() => {
                    n.return && n.return();
                  }),
                e
              );
            }
          );
        {
          const t = c(e) ? 'an invalid object' : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var t, n, r;
      };
      function P(e, t) {
        return new v((n) => {
          const r = new h();
          let s = 0;
          return (
            r.add(
              t.schedule(function () {
                s !== e.length
                  ? (n.next(e[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function H(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if (
                  (function (e) {
                    return e && 'function' == typeof e[g];
                  })(e)
                )
                  return (function (e, t) {
                    return new v((n) => {
                      const r = new h();
                      return (
                        r.add(
                          t.schedule(() => {
                            const s = e[g]();
                            r.add(
                              s.subscribe({
                                next(e) {
                                  r.add(t.schedule(() => n.next(e)));
                                },
                                error(e) {
                                  r.add(t.schedule(() => n.error(e)));
                                },
                                complete() {
                                  r.add(t.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (D(e))
                  return (function (e, t) {
                    return new v((n) => {
                      const r = new h();
                      return (
                        r.add(
                          t.schedule(() =>
                            e.then(
                              (e) => {
                                r.add(
                                  t.schedule(() => {
                                    n.next(e),
                                      r.add(t.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (e) => {
                                r.add(t.schedule(() => n.error(e)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (M(e)) return P(e, t);
                if (
                  (function (e) {
                    return e && 'function' == typeof e[N];
                  })(e) ||
                  'string' == typeof e
                )
                  return (function (e, t) {
                    if (!e) throw new Error('Iterable cannot be null');
                    return new v((n) => {
                      const r = new h();
                      let s;
                      return (
                        r.add(() => {
                          s && 'function' == typeof s.return && s.return();
                        }),
                        r.add(
                          t.schedule(() => {
                            (s = e[N]()),
                              r.add(
                                t.schedule(function () {
                                  if (n.closed) return;
                                  let e, t;
                                  try {
                                    const n = s.next();
                                    (e = n.value), (t = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  t
                                    ? n.complete()
                                    : (n.next(e), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
              }
              throw new TypeError(
                ((null !== e && typeof e) || e) + ' is not observable'
              );
            })(e, t)
          : e instanceof v
          ? e
          : new v(R(e));
      }
      class L extends f {
        constructor(e) {
          super(), (this.parent = e);
        }
        _next(e) {
          this.parent.notifyNext(e);
        }
        _error(e) {
          this.parent.notifyError(e), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class j extends f {
        notifyNext(e) {
          this.destination.next(e);
        }
        notifyError(e) {
          this.destination.error(e);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function F(e, t) {
        if (!t.closed) return e instanceof v ? e.subscribe(t) : R(e)(t);
      }
      function z(e, t, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof t
          ? (r) =>
              r.pipe(
                z((n, r) => H(e(n, r)).pipe(x((e, s) => t(n, e, r, s))), n)
              )
          : ('number' == typeof t && (n = t), (t) => t.lift(new V(e, n)));
      }
      class V {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new Z(e, this.project, this.concurrent));
        }
      }
      class Z extends j {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent
            ? this._tryNext(e)
            : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t);
        }
        _innerSub(e) {
          const t = new L(this),
            n = this.destination;
          n.add(t);
          const r = F(e, t);
          r !== t && n.add(r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e) {
          this.destination.next(e);
        }
        notifyComplete() {
          const e = this.buffer;
          this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function B(e, t) {
        return t ? P(e, t) : new v(O(e));
      }
      function U(...e) {
        let t = Number.POSITIVE_INFINITY,
          n = null,
          r = e[e.length - 1];
        return (
          C(r)
            ? ((n = e.pop()),
              e.length > 1 &&
                'number' == typeof e[e.length - 1] &&
                (t = e.pop()))
            : 'number' == typeof r && (t = e.pop()),
          null === n && 1 === e.length && e[0] instanceof v
            ? e[0]
            : (function (e = Number.POSITIVE_INFINITY) {
                return z(y, e);
              })(t)(B(e, n))
        );
      }
      function q() {
        return function (e) {
          return e.lift(new W(e));
        };
      }
      class W {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new $(e, n),
            s = t.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class $ extends f {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = e._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class G extends v {
        constructor(e, t) {
          super(),
            (this.source = e),
            (this.subjectFactory = t),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(e) {
          return this.getSubject().subscribe(e);
        }
        getSubject() {
          const e = this._subject;
          return (
            (e && !e.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let e = this._connection;
          return (
            e ||
              ((this._isComplete = !1),
              (e = this._connection = new h()),
              e.add(this.source.subscribe(new K(this.getSubject(), this))),
              e.closed && ((this._connection = null), (e = h.EMPTY))),
            e
          );
        }
        refCount() {
          return q()(this);
        }
      }
      const J = (() => {
        const e = G.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: e._subscribe },
          _isComplete: { value: e._isComplete, writable: !0 },
          getSubject: { value: e.getSubject },
          connect: { value: e.connect },
          refCount: { value: e.refCount },
        };
      })();
      class K extends E {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0),
              (e._subject = null),
              (e._connection = null),
              t && t.unsubscribe();
          }
        }
      }
      function X() {
        return new T();
      }
      function Q(e) {
        return { toString: e }.toString();
      }
      function Y(e, t, n) {
        return Q(() => {
          const r = (function (e) {
            return function (...t) {
              if (e) {
                const n = e(...t);
                for (const e in n) this[e] = n[e];
              }
            };
          })(t);
          function s(...e) {
            if (this instanceof s) return r.apply(this, e), this;
            const t = new s(...e);
            return (n.annotation = t), n;
            function n(e, n, r) {
              const s = e.hasOwnProperty('__parameters__')
                ? e.__parameters__
                : Object.defineProperty(e, '__parameters__', { value: [] })
                    .__parameters__;
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(t), e;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = e),
            (s.annotationCls = s),
            s
          );
        });
      }
      const ee = Y('Inject', (e) => ({ token: e })),
        te = Y('Optional'),
        ne = Y('Self'),
        re = Y('SkipSelf');
      var se = (function (e) {
        return (
          (e[(e.Default = 0)] = 'Default'),
          (e[(e.Host = 1)] = 'Host'),
          (e[(e.Self = 2)] = 'Self'),
          (e[(e.SkipSelf = 4)] = 'SkipSelf'),
          (e[(e.Optional = 8)] = 'Optional'),
          e
        );
      })({});
      function oe(e) {
        for (let t in e) if (e[t] === oe) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function ie(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function ae(e) {
        return {
          factory: e.factory,
          providers: e.providers || [],
          imports: e.imports || [],
        };
      }
      function le(e) {
        return ce(e, e[he]) || ce(e, e[fe]);
      }
      function ce(e, t) {
        return t && t.token === e ? t : null;
      }
      function ue(e) {
        return e && (e.hasOwnProperty(de) || e.hasOwnProperty(me))
          ? e[de]
          : null;
      }
      const he = oe({ ɵprov: oe }),
        de = oe({ ɵinj: oe }),
        pe = oe({ ɵprovFallback: oe }),
        fe = oe({ ngInjectableDef: oe }),
        me = oe({ ngInjectorDef: oe });
      function ge(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(ge).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return '' + e.overriddenName;
        if (e.name) return '' + e.name;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function ye(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const ve = oe({ __forward_ref__: oe });
      function _e(e) {
        return (
          (e.__forward_ref__ = _e),
          (e.toString = function () {
            return ge(this());
          }),
          e
        );
      }
      function be(e) {
        return 'function' == typeof (t = e) &&
          t.hasOwnProperty(ve) &&
          t.__forward_ref__ === _e
          ? e()
          : e;
        var t;
      }
      const we = 'undefined' != typeof globalThis && globalThis,
        Ee = 'undefined' != typeof window && window,
        Te =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        ke = 'undefined' != typeof global && global,
        Ce = we || ke || Ee || Te,
        xe = oe({ ɵcmp: oe }),
        Se = oe({ ɵdir: oe }),
        Ie = oe({ ɵpipe: oe }),
        Oe = oe({ ɵmod: oe }),
        Ae = oe({ ɵloc: oe }),
        Ne = oe({ ɵfac: oe }),
        Me = oe({ __NG_ELEMENT_ID__: oe });
      class De {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ɵprov = ie({
                  token: this,
                  providedIn: t.providedIn || 'root',
                  factory: t.factory,
                }));
        }
        toString() {
          return 'InjectionToken ' + this._desc;
        }
      }
      const Re = new De('INJECTOR', -1),
        Pe = {},
        He = /\n/gm,
        Le = oe({ provide: String, useValue: oe });
      let je,
        Fe = void 0;
      function ze(e) {
        const t = Fe;
        return (Fe = e), t;
      }
      function Ve(e) {
        const t = je;
        return (je = e), t;
      }
      function Ze(e, t = se.Default) {
        if (void 0 === Fe)
          throw new Error('inject() must be called from an injection context');
        return null === Fe
          ? Ue(e, void 0, t)
          : Fe.get(e, t & se.Optional ? null : void 0, t);
      }
      function Be(e, t = se.Default) {
        return (je || Ze)(be(e), t);
      }
      function Ue(e, t, n) {
        const r = le(e);
        if (r && 'root' == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & se.Optional) return null;
        if (void 0 !== t) return t;
        throw new Error(`Injector: NOT_FOUND [${ge(e)}]`);
      }
      function qe(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = be(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error('Arguments array must have arguments.');
            let e = void 0,
              n = se.Default;
            for (let t = 0; t < r.length; t++) {
              const s = r[t];
              s instanceof te || 'Optional' === s.ngMetadataName || s === te
                ? (n |= se.Optional)
                : s instanceof re || 'SkipSelf' === s.ngMetadataName || s === re
                ? (n |= se.SkipSelf)
                : s instanceof ne || 'Self' === s.ngMetadataName || s === ne
                ? (n |= se.Self)
                : (e = s instanceof ee || s === ee ? s.token : s);
            }
            t.push(Be(e, n));
          } else t.push(Be(r));
        }
        return t;
      }
      class We {
        get(e, t = Pe) {
          if (t === Pe) {
            const t = new Error(`NullInjectorError: No provider for ${ge(e)}!`);
            throw ((t.name = 'NullInjectorError'), t);
          }
          return t;
        }
      }
      class $e {}
      function Ge(e, t) {
        e.forEach((e) => (Array.isArray(e) ? Ge(e, t) : t(e)));
      }
      function Je(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Ke(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      var Xe = (function (e) {
          return (
            (e[(e.OnPush = 0)] = 'OnPush'), (e[(e.Default = 1)] = 'Default'), e
          );
        })({}),
        Qe = (function (e) {
          return (
            (e[(e.Emulated = 0)] = 'Emulated'),
            (e[(e.Native = 1)] = 'Native'),
            (e[(e.None = 2)] = 'None'),
            (e[(e.ShadowDom = 3)] = 'ShadowDom'),
            e
          );
        })({});
      const Ye = {},
        et = [];
      let tt = 0;
      function nt(e) {
        return (
          at(e) ||
          (function (e) {
            return e[Se] || null;
          })(e)
        );
      }
      function rt(e) {
        return (function (e) {
          return e[Ie] || null;
        })(e);
      }
      const st = {};
      function ot(e) {
        const t = {
          type: e.type,
          bootstrap: e.bootstrap || et,
          declarations: e.declarations || et,
          imports: e.imports || et,
          exports: e.exports || et,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        };
        return (
          null != e.id &&
            Q(() => {
              st[e.id] = e.type;
            }),
          t
        );
      }
      function it(e, t) {
        if (null == e) return Ye;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let s = e[r],
              o = s;
            Array.isArray(s) && ((o = s[1]), (s = s[0])),
              (n[s] = r),
              t && (t[s] = o);
          }
        return n;
      }
      function at(e) {
        return e[xe] || null;
      }
      function lt(e, t) {
        return e.hasOwnProperty(Ne) ? e[Ne] : null;
      }
      function ct(e, t) {
        const n = e[Oe] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${ge(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function ut(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function ht(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function dt(e) {
        return 0 != (8 & e.flags);
      }
      function pt(e) {
        return 2 == (2 & e.flags);
      }
      function ft(e) {
        return null !== e.template;
      }
      function mt(e) {
        return 0 != (512 & e[2]);
      }
      class gt {
        constructor(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function yt() {
        return vt;
      }
      function vt(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = bt), _t;
      }
      function _t() {
        const e = wt(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === Ye) e.previous = t;
          else for (let e in t) n[e] = t[e];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function bt(e, t, n, r) {
        const s =
            wt(e) ||
            (function (e, t) {
              return (e.__ngSimpleChanges__ = t);
            })(e, { previous: Ye, current: null }),
          o = s.current || (s.current = {}),
          i = s.previous,
          a = this.declaredInputs[n],
          l = i[a];
        (o[a] = new gt(l && l.currentValue, t, i === Ye)), (e[r] = t);
      }
      function wt(e) {
        return e.__ngSimpleChanges__ || null;
      }
      yt.ngInherit = !0;
      let Et = void 0;
      function Tt(e) {
        return !!e.listen;
      }
      const kt = {
        createRenderer: (e, t) =>
          void 0 !== Et
            ? Et
            : 'undefined' != typeof document
            ? document
            : void 0,
      };
      function Ct(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function xt(e, t) {
        return Ct(t[e.index]);
      }
      function St(e, t) {
        return e.data[t + 20];
      }
      function It(e, t) {
        const n = t[e];
        return ut(n) ? n : n[0];
      }
      function Ot(e) {
        const t = (function (e) {
          return e.__ngContext__ || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function At(e) {
        return 4 == (4 & e[2]);
      }
      function Nt(e) {
        return 128 == (128 & e[2]);
      }
      function Mt(e, t) {
        return null === e || null == t ? null : e[t];
      }
      function Dt(e) {
        e[18] = 0;
      }
      function Rt(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const Pt = {
        lFrame: Xt(null),
        bindingsEnabled: !0,
        checkNoChangesMode: !1,
      };
      function Ht() {
        return Pt.bindingsEnabled;
      }
      function Lt() {
        return Pt.lFrame.lView;
      }
      function jt() {
        return Pt.lFrame.tView;
      }
      function Ft() {
        return Pt.lFrame.currentTNode;
      }
      function zt(e, t) {
        (Pt.lFrame.currentTNode = e), (Pt.lFrame.isParent = t);
      }
      function Vt() {
        return Pt.lFrame.isParent;
      }
      function Zt() {
        return Pt.checkNoChangesMode;
      }
      function Bt(e) {
        Pt.checkNoChangesMode = e;
      }
      function Ut(e, t) {
        const n = Pt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), qt(t);
      }
      function qt(e) {
        Pt.lFrame.currentDirectiveIndex = e;
      }
      function Wt() {
        return Pt.lFrame.currentQueryIndex;
      }
      function $t(e) {
        Pt.lFrame.currentQueryIndex = e;
      }
      function Gt(e, t) {
        const n = Kt();
        (Pt.lFrame = n), (n.currentTNode = t), (n.lView = e);
      }
      function Jt(e) {
        const t = Kt(),
          n = e[1];
        (Pt.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex);
      }
      function Kt() {
        const e = Pt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Xt(e) : t;
      }
      function Xt(e) {
        const t = {
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
      function Qt() {
        const e = Pt.lFrame;
        return (
          (Pt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Yt = Qt;
      function en() {
        const e = Qt();
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
      function tn(e) {
        Pt.lFrame.selectedIndex = e;
      }
      function nn(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const t = e.data[n].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: s,
              ngAfterViewInit: o,
              ngAfterViewChecked: i,
              ngOnDestroy: a,
            } = t;
          r && (e.contentHooks || (e.contentHooks = [])).push(-n, r),
            s &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, s),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, s)),
            o && (e.viewHooks || (e.viewHooks = [])).push(-n, o),
            i &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, i),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, i)),
            null != a && (e.destroyHooks || (e.destroyHooks = [])).push(n, a);
        }
      }
      function rn(e, t, n) {
        an(e, t, 3, n);
      }
      function sn(e, t, n, r) {
        (3 & e[2]) === n && an(e, t, n, r);
      }
      function on(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function an(e, t, n, r) {
        const s = null != r ? r : -1;
        let o = 0;
        for (let i = void 0 !== r ? 65535 & e[18] : 0; i < t.length; i++)
          if ('number' == typeof t[i + 1]) {
            if (((o = t[i]), null != r && o >= r)) break;
          } else
            t[i] < 0 && (e[18] += 65536),
              (o < s || -1 == s) &&
                (ln(e, n, t, i), (e[18] = (4294901760 & e[18]) + i + 2)),
              i++;
      }
      function ln(e, t, n, r) {
        const s = n[r] < 0,
          o = n[r + 1],
          i = e[s ? -n[r] : n[r]];
        s
          ? e[2] >> 11 < e[18] >> 16 &&
            (3 & e[2]) === t &&
            ((e[2] += 2048), o.call(i))
          : o.call(i);
      }
      class cn {
        constructor(e, t, n) {
          (this.factory = e),
            (this.resolving = !1),
            (this.canSeeViewProviders = t),
            (this.injectImpl = n);
        }
      }
      function un(e, t, n) {
        const r = Tt(e);
        let s = 0;
        for (; s < n.length; ) {
          const o = n[s];
          if ('number' == typeof o) {
            if (0 !== o) break;
            s++;
            const i = n[s++],
              a = n[s++],
              l = n[s++];
            r ? e.setAttribute(t, a, l, i) : t.setAttributeNS(i, a, l);
          } else {
            const i = o,
              a = n[++s];
            hn(i)
              ? r && e.setProperty(t, i, a)
              : r
              ? e.setAttribute(t, i, a)
              : t.setAttribute(i, a),
              s++;
          }
        }
        return s;
      }
      function hn(e) {
        return 64 === e.charCodeAt(0);
      }
      function dn(e, t) {
        if (null === t || 0 === t.length);
        else if (null === e || 0 === e.length) e = t.slice();
        else {
          let n = -1;
          for (let r = 0; r < t.length; r++) {
            const s = t[r];
            'number' == typeof s
              ? (n = s)
              : 0 === n ||
                pn(e, n, s, null, -1 === n || 2 === n ? t[++r] : null);
          }
        }
        return e;
      }
      function pn(e, t, n, r, s) {
        let o = 0,
          i = e.length;
        if (-1 === t) i = -1;
        else
          for (; o < e.length; ) {
            const n = e[o++];
            if ('number' == typeof n) {
              if (n === t) {
                i = -1;
                break;
              }
              if (n > t) {
                i = o - 1;
                break;
              }
            }
          }
        for (; o < e.length; ) {
          const t = e[o];
          if ('number' == typeof t) break;
          if (t === n) {
            if (null === r) return void (null !== s && (e[o + 1] = s));
            if (r === e[o + 1]) return void (e[o + 2] = s);
          }
          o++, null !== r && o++, null !== s && o++;
        }
        -1 !== i && (e.splice(i, 0, t), (o = i + 1)),
          e.splice(o++, 0, n),
          null !== r && e.splice(o++, 0, r),
          null !== s && e.splice(o++, 0, s);
      }
      function fn(e) {
        return -1 !== e;
      }
      function mn(e) {
        return 32767 & e;
      }
      function gn(e, t) {
        let n = e >> 16,
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      function yn(e) {
        return 'function' == typeof e
          ? e.name || e.toString()
          : 'object' == typeof e && null != e && 'function' == typeof e.type
          ? e.type.name || e.type.toString()
          : (function (e) {
              return 'string' == typeof e ? e : null == e ? '' : '' + e;
            })(e);
      }
      const vn = (() =>
        (
          ('undefined' != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Ce))();
      function _n(e) {
        return e instanceof Function ? e() : e;
      }
      let bn = !0;
      function wn(e) {
        const t = bn;
        return (bn = e), t;
      }
      let En = 0;
      function Tn(e, t) {
        const n = Cn(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          kn(r.data, e),
          kn(t, null),
          kn(r.blueprint, null));
        const s = xn(e, t),
          o = e.injectorIndex;
        if (fn(s)) {
          const e = mn(s),
            n = gn(s, t),
            r = n[1].data;
          for (let s = 0; s < 8; s++) t[o + s] = n[e + s] | r[e + s];
        }
        return (t[o + 8] = s), o;
      }
      function kn(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Cn(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function xn(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          s = t;
        for (; null !== s; ) {
          const e = s[1],
            t = e.type;
          if (((r = 2 === t ? e.declTNode : 1 === t ? s[6] : null), null === r))
            return -1;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Sn(e, t, n) {
        !(function (e, t, n) {
          let r;
          'string' == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Me) && (r = n[Me]),
            null == r && (r = n[Me] = En++);
          const s = 255 & r,
            o = 1 << s,
            i = 64 & s,
            a = 32 & s,
            l = t.data;
          128 & s
            ? i
              ? a
                ? (l[e + 7] |= o)
                : (l[e + 6] |= o)
              : a
              ? (l[e + 5] |= o)
              : (l[e + 4] |= o)
            : i
            ? a
              ? (l[e + 3] |= o)
              : (l[e + 2] |= o)
            : a
            ? (l[e + 1] |= o)
            : (l[e] |= o);
        })(e, t, n);
      }
      function In(e, t, n, r = se.Default, s) {
        if (null !== e) {
          const s = (function (e) {
            if ('string' == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(Me) ? e[Me] : void 0;
            return 'number' == typeof t && t > 0 ? 255 & t : t;
          })(n);
          if ('function' == typeof s) {
            Gt(t, e);
            try {
              const e = s();
              if (null != e || r & se.Optional) return e;
              throw new Error(`No provider for ${yn(n)}!`);
            } finally {
              Yt();
            }
          } else if ('number' == typeof s) {
            if (-1 === s) return new Pn(e, t);
            let o = null,
              i = Cn(e, t),
              a = -1,
              l = r & se.Host ? t[16][6] : null;
            for (
              (-1 === i || r & se.SkipSelf) &&
              ((a = -1 === i ? xn(e, t) : t[i + 8]),
              -1 !== a && Rn(r, !1)
                ? ((o = t[1]), (i = mn(a)), (t = gn(a, t)))
                : (i = -1));
              -1 !== i;

            ) {
              const e = t[1];
              if (Dn(s, i, e.data)) {
                const e = An(i, t, n, o, r, l);
                if (e !== On) return e;
              }
              (a = t[i + 8]),
                -1 !== a && Rn(r, t[1].data[i + 8] === l) && Dn(s, i, t)
                  ? ((o = e), (i = mn(a)), (t = gn(a, t)))
                  : (i = -1);
            }
          }
        }
        if (
          (r & se.Optional && void 0 === s && (s = null),
          0 == (r & (se.Self | se.Host)))
        ) {
          const e = t[9],
            o = Ve(void 0);
          try {
            return e ? e.get(n, s, r & se.Optional) : Ue(n, s, r & se.Optional);
          } finally {
            Ve(o);
          }
        }
        if (r & se.Optional) return s;
        throw new Error(`NodeInjector: NOT_FOUND [${yn(n)}]`);
      }
      const On = {};
      function An(e, t, n, r, s, o) {
        const i = t[1],
          a = i.data[e + 8],
          l = Nn(
            a,
            i,
            n,
            null == r ? pt(a) && bn : r != i && 2 === a.type,
            s & se.Host && o === a
          );
        return null !== l ? Mn(t, i, l, a) : On;
      }
      function Nn(e, t, n, r, s) {
        const o = e.providerIndexes,
          i = t.data,
          a = 1048575 & o,
          l = e.directiveStart,
          c = o >> 20,
          u = s ? a + c : e.directiveEnd;
        for (let h = r ? a : a + c; h < u; h++) {
          const e = i[h];
          if ((h < l && n === e) || (h >= l && e.type === n)) return h;
        }
        if (s) {
          const e = i[l];
          if (e && ft(e) && e.type === n) return l;
        }
        return null;
      }
      function Mn(e, t, n, r) {
        let s = e[n];
        const o = t.data;
        if (s instanceof cn) {
          const i = s;
          if (i.resolving) throw new Error('Circular dep for ' + yn(o[n]));
          const a = wn(i.canSeeViewProviders);
          i.resolving = !0;
          const l = i.injectImpl ? Ve(i.injectImpl) : null;
          Gt(e, r);
          try {
            (s = e[n] = i.factory(void 0, o, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function (e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: o,
                  } = t.type.prototype;
                  if (r) {
                    const r = vt(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, r),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, r);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, s),
                    o &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, o),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, o));
                })(n, o[n], t);
          } finally {
            null !== l && Ve(l), wn(a), (i.resolving = !1), Yt();
          }
        }
        return s;
      }
      function Dn(e, t, n) {
        const r = 64 & e,
          s = 32 & e;
        let o;
        return (
          (o =
            128 & e
              ? r
                ? s
                  ? n[t + 7]
                  : n[t + 6]
                : s
                ? n[t + 5]
                : n[t + 4]
              : r
              ? s
                ? n[t + 3]
                : n[t + 2]
              : s
              ? n[t + 1]
              : n[t]),
          !!(o & (1 << e))
        );
      }
      function Rn(e, t) {
        return !(e & se.Self || (e & se.Host && t));
      }
      class Pn {
        constructor(e, t) {
          (this._tNode = e), (this._lView = t);
        }
        get(e, t) {
          return In(this._tNode, this._lView, e, void 0, t);
        }
      }
      function Hn(e) {
        return e.ngDebugContext;
      }
      function Ln(e) {
        return e.ngOriginalError;
      }
      function jn(e, ...t) {
        e.error(...t);
      }
      class Fn {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function (e) {
              return e.ngErrorLogger || jn;
            })(e);
          r(this._console, 'ERROR', e),
            t && r(this._console, 'ORIGINAL ERROR', t),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(e) {
          return e ? (Hn(e) ? Hn(e) : this._findContext(Ln(e))) : null;
        }
        _findOriginalError(e) {
          let t = Ln(e);
          for (; t && Ln(t); ) t = Ln(t);
          return t;
        }
      }
      let zn = !1;
      function Vn() {
        return (zn = !0), !0;
      }
      function Zn(e, t) {
        e.__ngContext__ = t;
      }
      function Bn(e, t, n) {
        let r = e.length;
        for (;;) {
          const s = e.indexOf(t, n);
          if (-1 === s) return s;
          if (0 === s || e.charCodeAt(s - 1) <= 32) {
            const n = t.length;
            if (s + n === r || e.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function Un(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let s = e[r++];
          if (n && 'class' === s) {
            if (((s = e[r]), -1 !== Bn(s.toLowerCase(), t, 0))) return !0;
          } else if (1 === s) {
            for (; r < e.length && 'string' == typeof (s = e[r++]); )
              if (s.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function qn(e) {
        return 0 === e.type && 'ng-template' !== e.tagName;
      }
      function Wn(e, t, n) {
        return t === (0 !== e.type || n ? e.tagName : 'ng-template');
      }
      function $n(e, t, n) {
        let r = 4;
        const s = e.attrs || [],
          o = (function (e) {
            for (let n = 0; n < e.length; n++)
              if (3 === (t = e[n]) || 4 === t || 6 === t) return n;
            var t;
            return e.length;
          })(s);
        let i = !1;
        for (let a = 0; a < t.length; a++) {
          const l = t[a];
          if ('number' != typeof l) {
            if (!i)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== l && !Wn(e, l, n)) || ('' === l && 1 === t.length))
                ) {
                  if (Gn(r)) return !1;
                  i = !0;
                }
              } else {
                const c = 8 & r ? l : t[++a];
                if (8 & r && null !== e.attrs) {
                  if (!Un(e.attrs, c, n)) {
                    if (Gn(r)) return !1;
                    i = !0;
                  }
                  continue;
                }
                const u = Jn(8 & r ? 'class' : l, s, qn(e), n);
                if (-1 === u) {
                  if (Gn(r)) return !1;
                  i = !0;
                  continue;
                }
                if ('' !== c) {
                  let e;
                  e = u > o ? '' : s[u + 1].toLowerCase();
                  const t = 8 & r ? e : null;
                  if ((t && -1 !== Bn(t, c, 0)) || (2 & r && c !== e)) {
                    if (Gn(r)) return !1;
                    i = !0;
                  }
                }
              }
          } else {
            if (!i && !Gn(r) && !Gn(l)) return !1;
            if (i && Gn(l)) continue;
            (i = !1), (r = l | (1 & r));
          }
        }
        return Gn(r) || i;
      }
      function Gn(e) {
        return 0 == (1 & e);
      }
      function Jn(e, t, n, r) {
        if (null === t) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < t.length; ) {
            const r = t[s];
            if (r === e) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let e = t[++s];
                for (; 'string' == typeof e; ) e = t[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ('number' == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Kn(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if ($n(e, t[r], n)) return !0;
        return !1;
      }
      function Xn(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function Qn(e) {
        let t = e[0],
          n = 1,
          r = 2,
          s = '',
          o = !1;
        for (; n < e.length; ) {
          let i = e[n];
          if ('string' == typeof i)
            if (2 & r) {
              const t = e[++n];
              s += '[' + i + (t.length > 0 ? '="' + t + '"' : '') + ']';
            } else 8 & r ? (s += '.' + i) : 4 & r && (s += ' ' + i);
          else
            '' === s || Gn(i) || ((t += Xn(o, s)), (s = '')),
              (r = i),
              (o = o || !Gn(r));
          n++;
        }
        return '' !== s && (t += Xn(o, s)), t;
      }
      const Yn = {};
      function er(e) {
        const t = e[3];
        return ht(t) ? t[3] : t;
      }
      function tr(e) {
        return rr(e[13]);
      }
      function nr(e) {
        return rr(e[4]);
      }
      function rr(e) {
        for (; null !== e && !ht(e); ) e = e[4];
        return e;
      }
      function sr(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              o = n[r + 1];
            if (-1 !== o) {
              const n = e.data[o];
              $t(s), n.contentQueries(2, t[o], o);
            }
          }
      }
      function or(e, t, n) {
        return Tt(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e);
      }
      function ir(e, t, n, r, s, o, i, a, l, c) {
        const u = t.blueprint.slice();
        return (
          (u[0] = s),
          (u[2] = 140 | r),
          Dt(u),
          (u[3] = u[15] = e),
          (u[8] = n),
          (u[10] = i || (e && e[10])),
          (u[11] = a || (e && e[11])),
          (u[12] = l || (e && e[12]) || null),
          (u[9] = c || (e && e[9]) || null),
          (u[6] = o),
          (u[16] = 2 == t.type ? e[16] : u),
          u
        );
      }
      function ar(e, t, n, r, s) {
        const o = t + 20,
          i =
            e.data[o] ||
            (function (e, t, n, r, s) {
              const o = Ft(),
                i = Vt(),
                a = (e.data[t] = (function (e, t, n, r, s, o) {
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
                    tagName: s,
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
                })(0, i ? o : o && o.parent, n, t, r, s));
              return (
                null === e.firstChild && (e.firstChild = a),
                null !== o &&
                  (i && null == o.child && null !== a.parent
                    ? (o.child = a)
                    : i || (o.next = a)),
                a
              );
            })(e, o, n, r, s);
        return zt(i, !0), i;
      }
      function lr(e, t, n) {
        Jt(t);
        try {
          const r = e.viewQuery;
          null !== r && Mr(1, r, n);
          const s = e.template;
          null !== s && hr(e, t, s, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && sr(e, t),
            e.staticViewQueries && Mr(2, e.viewQuery, n);
          const o = e.components;
          null !== o &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) Ir(e, t[n]);
            })(t, o);
        } catch (r) {
          throw (e.firstCreatePass && (e.incompleteFirstPass = !0), r);
        } finally {
          (t[2] &= -5), en();
        }
      }
      function cr(e, t, n, r) {
        const s = t[2];
        if (256 == (256 & s)) return;
        Jt(t);
        const o = Zt();
        try {
          Dt(t),
            (Pt.lFrame.bindingIndex = e.bindingStartIndex),
            null !== n && hr(e, t, n, 2, r);
          const i = 3 == (3 & s);
          if (!o)
            if (i) {
              const n = e.preOrderCheckHooks;
              null !== n && rn(t, n, null);
            } else {
              const n = e.preOrderHooks;
              null !== n && sn(t, n, 0, null), on(t, 0);
            }
          if (
            ((function (e) {
              for (let t = tr(e); null !== t; t = nr(t)) {
                if (!t[2]) continue;
                const e = t[9];
                for (let t = 0; t < e.length; t++) {
                  const n = e[t],
                    r = n[3];
                  0 == (1024 & n[2]) && Rt(r, 1), (n[2] |= 1024);
                }
              }
            })(t),
            (function (e) {
              for (let t = tr(e); null !== t; t = nr(t))
                for (let e = 10; e < t.length; e++) {
                  const n = t[e],
                    r = n[1];
                  Nt(n) && cr(r, n, r.template, n[8]);
                }
            })(t),
            null !== e.contentQueries && sr(e, t),
            !o)
          )
            if (i) {
              const n = e.contentCheckHooks;
              null !== n && rn(t, n);
            } else {
              const n = e.contentHooks;
              null !== n && sn(t, n, 1), on(t, 1);
            }
          !(function (e, t) {
            try {
              const n = e.expandoInstructions;
              if (null !== n) {
                let r = e.expandoStartIndex,
                  s = -1,
                  o = -1;
                for (let e = 0; e < n.length; e++) {
                  const i = n[e];
                  'number' == typeof i
                    ? i <= 0
                      ? ((o = 0 - i), tn(o), (r += 9 + n[++e]), (s = r))
                      : (r += i)
                    : (null !== i && (Ut(r, s), i(2, t[s])), s++);
                }
              }
            } finally {
              tn(-1);
            }
          })(e, t);
          const a = e.components;
          null !== a &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) Sr(e, t[n]);
            })(t, a);
          const l = e.viewQuery;
          if ((null !== l && Mr(2, l, r), !o))
            if (i) {
              const n = e.viewCheckHooks;
              null !== n && rn(t, n);
            } else {
              const n = e.viewHooks;
              null !== n && sn(t, n, 2), on(t, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            o || (t[2] &= -73),
            1024 & t[2] && ((t[2] &= -1025), Rt(t[3], -1));
        } finally {
          en();
        }
      }
      function ur(e, t, n, r) {
        const s = t[10],
          o = !Zt(),
          i = At(t);
        try {
          o && !i && s.begin && s.begin(), i && lr(e, t, r), cr(e, t, n, r);
        } finally {
          o && !i && s.end && s.end();
        }
      }
      function hr(e, t, n, r, s) {
        const o = Pt.lFrame.selectedIndex;
        try {
          tn(-1),
            2 & r &&
              t.length > 20 &&
              (function (e, t, n, r) {
                if (!r)
                  if (3 == (3 & t[2])) {
                    const n = e.preOrderCheckHooks;
                    null !== n && rn(t, n, 0);
                  } else {
                    const n = e.preOrderHooks;
                    null !== n && sn(t, n, 0, 0);
                  }
                tn(0);
              })(e, t, 0, Zt()),
            n(r, s);
        } finally {
          tn(o);
        }
      }
      function dr(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = pr(
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
      function pr(e, t, n, r, s, o, i, a, l, c) {
        const u = 20 + r,
          h = u + s,
          d = (function (e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : Yn);
            return n;
          })(u, h),
          p = 'function' == typeof c ? c() : c;
        return (d[1] = {
          type: e,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: t,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
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
          pipeRegistry: 'function' == typeof i ? i() : i,
          firstChild: null,
          schemas: l,
          consts: p,
          incompleteFirstPass: !1,
        });
      }
      function fr(e, t, n, r) {
        const s = (o = t)[7] || (o[7] = []);
        var o;
        s.push(n),
          e.firstCreatePass &&
            (function (e) {
              return e.cleanup || (e.cleanup = []);
            })(e).push(r, s.length - 1);
      }
      function mr(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const s = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, s)
              : (n[r] = [t, s]);
          }
        return n;
      }
      function gr(e, t) {
        const n = e.expandoInstructions;
        n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars);
      }
      function yr(e, t, n) {
        for (let r = 0; r < n; r++)
          t.push(Yn), e.blueprint.push(Yn), e.data.push(null);
      }
      function vr(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function _r(e, t, n) {
        const r = 20 - t.index,
          s = e.data.length - (1048575 & t.providerIndexes);
        (e.expandoInstructions || (e.expandoInstructions = [])).push(r, s, n);
      }
      function br(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function wr(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          ft(t) && (n[''] = e);
        }
      }
      function Er(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Tr(e, t, n) {
        e.data.push(n);
        const r = n.factory || (n.factory = lt(n.type)),
          s = new cn(r, ft(n), null);
        e.blueprint.push(s), t.push(s);
      }
      function kr(e, t, n) {
        const r = xt(t, e),
          s = dr(n),
          o = e[10],
          i = Or(
            e,
            ir(
              e,
              s,
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
        e[t.index] = i;
      }
      function Cr(e, t, n, r, s, o) {
        const i = o[t];
        if (null !== i) {
          const e = r.setInput;
          for (let t = 0; t < i.length; ) {
            const s = i[t++],
              o = i[t++],
              a = i[t++];
            null !== e ? r.setInput(n, a, s, o) : (n[o] = a);
          }
        }
      }
      function xr(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const s = t[r];
          if (0 !== s)
            if (5 !== s) {
              if ('number' == typeof s) break;
              e.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, e[s], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Sr(e, t) {
        const n = It(t, e);
        if (Nt(n)) {
          const e = n[1];
          80 & n[2]
            ? cr(e, n, e.template, n[8])
            : n[5] > 0 &&
              (function e(t) {
                for (let r = tr(t); null !== r; r = nr(r))
                  for (let t = 10; t < r.length; t++) {
                    const n = r[t];
                    if (1024 & n[2]) {
                      const e = n[1];
                      cr(e, n, e.template, n[8]);
                    } else n[5] > 0 && e(n);
                  }
                const n = t[1].components;
                if (null !== n)
                  for (let r = 0; r < n.length; r++) {
                    const s = It(n[r], t);
                    Nt(s) && s[5] > 0 && e(s);
                  }
              })(n);
        }
      }
      function Ir(e, t) {
        const n = It(t, e),
          r = n[1];
        !(function (e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          lr(r, n, n[8]);
      }
      function Or(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Ar(e, t, n) {
        const r = t[10];
        r.begin && r.begin();
        try {
          cr(e, t, e.template, n);
        } catch (s) {
          throw (
            ((function (e, t) {
              const n = e[9],
                r = n ? n.get(Fn, null) : null;
              r && r.handleError(t);
            })(t, s),
            s)
          );
        } finally {
          r.end && r.end();
        }
      }
      function Nr(e) {
        !(function (e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = Ot(n),
              s = r[1];
            ur(s, r, s.template, n);
          }
        })(e[8]);
      }
      function Mr(e, t, n) {
        $t(0), t(e, n);
      }
      const Dr = (() => Promise.resolve(null))();
      function Rr(e, t, n, r, s) {
        for (let o = 0; o < n.length; ) {
          const i = n[o++],
            a = n[o++],
            l = t[i],
            c = e.data[i];
          null !== c.setInput ? c.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function Pr(e, t, n, r, s) {
        if (null != r) {
          let o,
            i = !1;
          ht(r) ? (o = r) : ut(r) && ((i = !0), (r = r[0]));
          const a = Ct(r);
          0 === e && null !== n
            ? null == s
              ? Vr(t, n, a)
              : zr(t, n, a, s || null)
            : 1 === e && null !== n
            ? zr(t, n, a, s || null)
            : 2 === e
            ? (function (e, t, n) {
                const r = Br(e, t);
                r &&
                  (function (e, t, n, r) {
                    Tt(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, a, i)
            : 3 === e && t.destroyNode(a),
            null != o &&
              (function (e, t, n, r, s) {
                const o = n[7];
                o !== Ct(n) && Pr(t, e, r, o, s);
                for (let i = 10; i < n.length; i++) {
                  const s = n[i];
                  Wr(s[1], s, e, t, r, o);
                }
              })(t, e, o, n, s);
        }
      }
      function Hr(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          s = t[3];
        1024 & t[2] && ((t[2] &= -1025), Rt(s, -1)), n.splice(r, 1);
      }
      function Lr(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const o = r[17];
          null !== o && o !== e && Hr(o, r), t > 0 && (e[n - 1][4] = r[4]);
          const i = Ke(e, 10 + t);
          Wr(r[1], (s = r), s[11], 2, null, null), (s[0] = null), (s[6] = null);
          const a = i[19];
          null !== a && a.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        var s;
        return r;
      }
      function jr(e, t) {
        if (!(256 & t[2])) {
          const n = t[11];
          Tt(n) && n.destroyNode && Wr(e, t, n, 3, null, null),
            (function (e) {
              let t = e[13];
              if (!t) return Fr(e[1], e);
              for (; t; ) {
                let n = null;
                if (ut(t)) n = t[13];
                else {
                  const e = t[10];
                  e && (n = e);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    ut(t) && Fr(t[1], t), (t = t[3]);
                  null === t && (t = e), ut(t) && Fr(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Fr(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function (e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const e = t[n[r]];
                  if (!(e instanceof cn)) {
                    const t = n[r + 1];
                    if (Array.isArray(t))
                      for (let n = 0; n < t.length; n += 2)
                        t[n + 1].call(e[t[n]]);
                    else t.call(e);
                  }
                }
            })(e, t),
            (function (e, t) {
              const n = e.cleanup;
              if (null !== n) {
                const e = t[7];
                for (let r = 0; r < n.length - 1; r += 2)
                  if ('string' == typeof n[r]) {
                    const s = n[r + 1],
                      o = 'function' == typeof s ? s(t) : Ct(t[s]),
                      i = e[n[r + 2]],
                      a = n[r + 3];
                    'boolean' == typeof a
                      ? o.removeEventListener(n[r], i, a)
                      : a >= 0
                      ? e[a]()
                      : e[-a].unsubscribe(),
                      (r += 2);
                  } else n[r].call(e[n[r + 1]]);
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && Tt(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && ht(t[3])) {
            n !== t[3] && Hr(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
        }
      }
      function zr(e, t, n, r) {
        Tt(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0);
      }
      function Vr(e, t, n) {
        Tt(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function Zr(e, t, n, r) {
        null !== r ? zr(e, t, n, r) : Vr(e, t, n);
      }
      function Br(e, t) {
        return Tt(e) ? e.parentNode(t) : t.parentNode;
      }
      function Ur(e, t, n, r) {
        const s = (function (e, t, n) {
          let r = t.parent;
          for (; null != r && (3 === r.type || 4 === r.type); )
            r = (t = r).parent;
          if (null === r) return n[0];
          if (t && 4 === t.type && 4 & t.flags) return xt(t, n).parentNode;
          if (2 & r.flags) {
            const t = e.data,
              n = t[t[r.index].directiveStart].encapsulation;
            if (n !== Qe.ShadowDom && n !== Qe.Native) return null;
          }
          return xt(r, n);
        })(e, r, t);
        if (null != s) {
          const e = t[11],
            o = (function (e, t) {
              return 3 === e.type || 4 === e.type ? xt(e, t) : null;
            })(r.parent || t[6], t);
          if (Array.isArray(n))
            for (let t = 0; t < n.length; t++) Zr(e, s, n[t], o);
          else Zr(e, s, n, o);
        }
      }
      function qr(e, t, n, r, s, o, i) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          i && 0 === t && (a && Zn(Ct(a), r), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (3 === l || 4 === l
                ? (qr(e, t, n.child, r, s, o, !1), Pr(t, e, s, a, o))
                : 1 === l
                ? $r(e, t, r, n, s, o)
                : Pr(t, e, s, a, o)),
            (n = i ? n.projectionNext : n.next);
        }
      }
      function Wr(e, t, n, r, s, o) {
        qr(n, r, e.firstChild, t, s, o, !1);
      }
      function $r(e, t, n, r, s, o) {
        const i = n[16],
          a = i[6].projection[r.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) Pr(t, e, s, a[l], o);
        else qr(e, t, a, i[3], s, o, !0);
      }
      function Gr(e, t, n) {
        Tt(e) ? e.setAttribute(t, 'style', n) : (t.style.cssText = n);
      }
      function Jr(e, t, n) {
        Tt(e)
          ? '' === n
            ? e.removeAttribute(t, 'class')
            : e.setAttribute(t, 'class', n)
          : (t.className = n);
      }
      class Kr {
        constructor(e, t) {
          (this._lView = e),
            (this._cdRefInjectingView = t),
            (this._appRef = null),
            (this._viewContainerRef = null);
        }
        get rootNodes() {
          const e = this._lView,
            t = e[1];
          return (function e(t, n, r, s, o = !1) {
            for (; null !== r; ) {
              const i = n[r.index];
              if ((null !== i && s.push(Ct(i)), ht(i)))
                for (let t = 10; t < i.length; t++) {
                  const n = i[t],
                    r = n[1].firstChild;
                  null !== r && e(n[1], n, r, s);
                }
              const a = r.type;
              if (3 === a || 4 === a) e(t, n, r.child, s);
              else if (1 === a) {
                const t = n[16],
                  o = t[6].projection[r.projection];
                if (Array.isArray(o)) s.push(...o);
                else {
                  const n = er(t);
                  e(n[1], n, o, s, !0);
                }
              }
              r = o ? r.projectionNext : r.next;
            }
            return s;
          })(t, e, t.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const e = this._viewContainerRef.indexOf(this);
            e > -1 && this._viewContainerRef.detach(e),
              (this._viewContainerRef = null);
          }
          jr(this._lView[1], this._lView);
        }
        onDestroy(e) {
          fr(this._lView[1], this._lView, null, e);
        }
        markForCheck() {
          !(function (e) {
            for (; e; ) {
              e[2] |= 64;
              const t = er(e);
              if (mt(e) && !t) return e;
              e = t;
            }
          })(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Ar(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (e, t, n) {
            Bt(!0);
            try {
              Ar(e, t, n);
            } finally {
              Bt(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef(e) {
          if (this._appRef)
            throw new Error(
              'This view is already attached directly to the ApplicationRef!'
            );
          this._viewContainerRef = e;
        }
        detachFromAppRef() {
          var e;
          (this._appRef = null),
            Wr(this._lView[1], (e = this._lView), e[11], 2, null, null);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef)
            throw new Error(
              'This view is already attached to a ViewContainer!'
            );
          this._appRef = e;
        }
      }
      class Xr extends Kr {
        constructor(e) {
          super(e), (this._view = e);
        }
        detectChanges() {
          Nr(this._view);
        }
        checkNoChanges() {
          !(function (e) {
            Bt(!0);
            try {
              Nr(e);
            } finally {
              Bt(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      let Qr, Yr, es;
      function ts(e, t, n) {
        return Qr || (Qr = class extends e {}), new Qr(xt(t, n));
      }
      function ns(e, t, n, r) {
        return (
          Yr ||
            (Yr = class extends e {
              constructor(e, t, n) {
                super(),
                  (this._declarationView = e),
                  (this._declarationTContainer = t),
                  (this.elementRef = n);
              }
              createEmbeddedView(e) {
                const t = this._declarationTContainer.tViews,
                  n = ir(
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
                  this._declarationView[this._declarationTContainer.index];
                const r = this._declarationView[19];
                return (
                  null !== r && (n[19] = r.createEmbeddedView(t)),
                  lr(t, n, e),
                  new Kr(n)
                );
              }
            }),
          0 === n.type ? new Yr(r, n, ts(t, n, r)) : null
        );
      }
      function rs(e, t, n, r) {
        let s;
        es ||
          (es = class extends e {
            constructor(e, t, n) {
              super(),
                (this._lContainer = e),
                (this._hostTNode = t),
                (this._hostView = n);
            }
            get element() {
              return ts(t, this._hostTNode, this._hostView);
            }
            get injector() {
              return new Pn(this._hostTNode, this._hostView);
            }
            get parentInjector() {
              const e = xn(this._hostTNode, this._hostView);
              if (fn(e)) {
                const t = gn(e, this._hostView),
                  n = mn(e);
                return new Pn(t[1].data[n + 8], t);
              }
              return new Pn(null, this._hostView);
            }
            clear() {
              for (; this.length > 0; ) this.remove(this.length - 1);
            }
            get(e) {
              return (
                (null !== this._lContainer[8] && this._lContainer[8][e]) || null
              );
            }
            get length() {
              return this._lContainer.length - 10;
            }
            createEmbeddedView(e, t, n) {
              const r = e.createEmbeddedView(t || {});
              return this.insert(r, n), r;
            }
            createComponent(e, t, n, r, s) {
              const o = n || this.parentInjector;
              if (!s && null == e.ngModule && o) {
                const e = o.get($e, null);
                e && (s = e);
              }
              const i = e.create(o, r, void 0, s);
              return this.insert(i.hostView, t), i;
            }
            insert(e, t) {
              const n = e._lView,
                r = n[1];
              if (e.destroyed)
                throw new Error(
                  'Cannot insert a destroyed View in a ViewContainer!'
                );
              if ((this.allocateContainerIfNeeded(), ht(n[3]))) {
                const t = this.indexOf(e);
                if (-1 !== t) this.detach(t);
                else {
                  const t = n[3],
                    r = new es(t, t[6], t[3]);
                  r.detach(r.indexOf(e));
                }
              }
              const s = this._adjustIndex(t),
                o = this._lContainer;
              !(function (e, t, n, r) {
                const s = 10 + r,
                  o = n.length;
                r > 0 && (n[s - 1][4] = t),
                  r < o - 10
                    ? ((t[4] = n[s]), Je(n, 10 + r, t))
                    : (n.push(t), (t[4] = null)),
                  (t[3] = n);
                const i = t[17];
                null !== i &&
                  n !== i &&
                  (function (e, t) {
                    const n = e[9];
                    t[16] !== t[3][3][16] && (e[2] = !0),
                      null === n ? (e[9] = [t]) : n.push(t);
                  })(i, t);
                const a = t[19];
                null !== a && a.insertView(e), (t[2] |= 128);
              })(r, n, o, s);
              const i = (function e(t, n) {
                  const r = 10 + t + 1;
                  if (r < n.length) {
                    const t = n[r],
                      s = t[1].firstChild;
                    if (null !== s)
                      return (function t(n, r) {
                        if (null !== r) {
                          const s = r.type;
                          if (2 === s) return xt(r, n);
                          if (0 === s) return e(-1, n[r.index]);
                          if (3 === s || 4 === s) {
                            const s = r.child;
                            if (null !== s) return t(n, s);
                            {
                              const t = n[r.index];
                              return ht(t) ? e(-1, t) : Ct(t);
                            }
                          }
                          {
                            const e = n[16],
                              s = e[6],
                              o = er(e),
                              i = s.projection[r.projection];
                            return null != i ? t(o, i) : t(n, r.next);
                          }
                        }
                        return null;
                      })(t, s);
                  }
                  return n[7];
                })(s, o),
                a = n[11],
                l = Br(a, o[7]);
              return (
                null !== l &&
                  (function (e, t, n, r, s, o) {
                    (r[0] = s), (r[6] = t), Wr(e, r, n, 1, s, o);
                  })(r, o[6], a, n, l, i),
                e.attachToViewContainerRef(this),
                Je(o[8], s, e),
                e
              );
            }
            move(e, t) {
              if (e.destroyed)
                throw new Error(
                  'Cannot move a destroyed View in a ViewContainer!'
                );
              return this.insert(e, t);
            }
            indexOf(e) {
              const t = this._lContainer[8];
              return null !== t ? t.indexOf(e) : -1;
            }
            remove(e) {
              this.allocateContainerIfNeeded();
              const t = this._adjustIndex(e, -1),
                n = Lr(this._lContainer, t);
              n && (Ke(this._lContainer[8], t), jr(n[1], n));
            }
            detach(e) {
              this.allocateContainerIfNeeded();
              const t = this._adjustIndex(e, -1),
                n = Lr(this._lContainer, t);
              return n && null != Ke(this._lContainer[8], t) ? new Kr(n) : null;
            }
            _adjustIndex(e, t = 0) {
              return null == e ? this.length + t : e;
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = []);
            }
          });
        const o = r[n.index];
        if (ht(o)) s = o;
        else {
          let e;
          if (3 === n.type) e = Ct(o);
          else if (((e = r[11].createComment('')), mt(r))) {
            const t = r[11],
              s = xt(n, r);
            zr(
              t,
              Br(t, s),
              e,
              (function (e, t) {
                return Tt(e) ? e.nextSibling(t) : t.nextSibling;
              })(t, s)
            );
          } else Ur(r[1], r, e, n);
          (r[n.index] = s = new Array(o, !0, !1, r, null, 0, n, e, null, null)),
            Or(r, s);
        }
        return new es(s, n, r);
      }
      const ss = new De('Set Injector scope.'),
        os = {},
        is = {},
        as = [];
      let ls = void 0;
      function cs() {
        return void 0 === ls && (ls = new We()), ls;
      }
      function us(e, t = null, n = null, r) {
        return new hs(e, n, t || cs(), r);
      }
      class hs {
        constructor(e, t, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          t && Ge(t, (n) => this.processProvider(n, e, t)),
            Ge([e], (e) => this.processInjectorType(e, [], s)),
            this.records.set(Re, ps(void 0, this));
          const o = this.records.get(ss);
          (this.scope = null != o ? o.value : null),
            (this.source = r || ('object' == typeof e ? null : ge(e)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((e) => e.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(e, t = Pe, n = se.Default) {
          this.assertNotDestroyed();
          const r = ze(this);
          try {
            if (!(n & se.SkipSelf)) {
              let t = this.records.get(e);
              if (void 0 === t) {
                const n =
                  ('function' == typeof (s = e) ||
                    ('object' == typeof s && s instanceof De)) &&
                  le(e);
                (t = n && this.injectableDefInScope(n) ? ps(ds(e), os) : null),
                  this.records.set(e, t);
              }
              if (null != t) return this.hydrate(e, t);
            }
            return (n & se.Self ? cs() : this.parent).get(
              e,
              (t = n & se.Optional && t === Pe ? null : t)
            );
          } catch (o) {
            if ('NullInjectorError' === o.name) {
              if (
                ((o.ngTempTokenPath = o.ngTempTokenPath || []).unshift(ge(e)),
                r)
              )
                throw o;
              return (function (e, t, n, r) {
                const s = e.ngTempTokenPath;
                throw (
                  (t.__source && s.unshift(t.__source),
                  (e.message = (function (e, t, n, r = null) {
                    e =
                      e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1)
                        ? e.substr(2)
                        : e;
                    let s = ge(t);
                    if (Array.isArray(t)) s = t.map(ge).join(' -> ');
                    else if ('object' == typeof t) {
                      let e = [];
                      for (let n in t)
                        if (t.hasOwnProperty(n)) {
                          let r = t[n];
                          e.push(
                            n +
                              ':' +
                              ('string' == typeof r ? JSON.stringify(r) : ge(r))
                          );
                        }
                      s = `{${e.join(', ')}}`;
                    }
                    return `${n}${r ? '(' + r + ')' : ''}[${s}]: ${e.replace(
                      He,
                      '\n  '
                    )}`;
                  })('\n' + e.message, s, n, r)),
                  (e.ngTokenPath = s),
                  (e.ngTempTokenPath = null),
                  e)
                );
              })(o, e, 'R3InjectorError', this.source);
            }
            throw o;
          } finally {
            ze(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((e) => this.get(e));
        }
        toString() {
          const e = [];
          return (
            this.records.forEach((t, n) => e.push(ge(n))),
            `R3Injector[${e.join(', ')}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error('Injector has already been destroyed.');
        }
        processInjectorType(e, t, n) {
          if (!(e = be(e))) return !1;
          let r = ue(e);
          const s = (null == r && e.ngModule) || void 0,
            o = void 0 === s ? e : s,
            i = -1 !== n.indexOf(o);
          if ((void 0 !== s && (r = ue(s)), null == r)) return !1;
          if (null != r.imports && !i) {
            let e;
            n.push(o);
            try {
              Ge(r.imports, (r) => {
                this.processInjectorType(r, t, n) &&
                  (void 0 === e && (e = []), e.push(r));
              });
            } finally {
            }
            if (void 0 !== e)
              for (let t = 0; t < e.length; t++) {
                const { ngModule: n, providers: r } = e[t];
                Ge(r, (e) => this.processProvider(e, n, r || as));
              }
          }
          this.injectorDefTypes.add(o), this.records.set(o, ps(r.factory, os));
          const a = r.providers;
          if (null != a && !i) {
            const t = e;
            Ge(a, (e) => this.processProvider(e, t, a));
          }
          return void 0 !== s && void 0 !== e.providers;
        }
        processProvider(e, t, n) {
          let r = ms((e = be(e))) ? e : be(e && e.provide);
          const s = (function (e, t, n) {
            return fs(e)
              ? ps(void 0, e.useValue)
              : ps(
                  (function (e, t, n) {
                    let r = void 0;
                    if (ms(e)) {
                      const t = be(e);
                      return lt(t) || ds(t);
                    }
                    if (fs(e)) r = () => be(e.useValue);
                    else if ((s = e) && s.useFactory)
                      r = () => e.useFactory(...qe(e.deps || []));
                    else if (
                      (function (e) {
                        return !(!e || !e.useExisting);
                      })(e)
                    )
                      r = () => Be(be(e.useExisting));
                    else {
                      const t = be(e && (e.useClass || e.provide));
                      if (
                        !(function (e) {
                          return !!e.deps;
                        })(e)
                      )
                        return lt(t) || ds(t);
                      r = () => new t(...qe(e.deps));
                    }
                    var s;
                    return r;
                  })(e),
                  os
                );
          })(e);
          if (ms(e) || !0 !== e.multi) this.records.get(r);
          else {
            let t = this.records.get(r);
            t ||
              ((t = ps(void 0, os, !0)),
              (t.factory = () => qe(t.multi)),
              this.records.set(r, t)),
              (r = e),
              t.multi.push(e);
          }
          this.records.set(r, s);
        }
        hydrate(e, t) {
          var n;
          return (
            t.value === os && ((t.value = is), (t.value = t.factory())),
            'object' == typeof t.value &&
              t.value &&
              null !== (n = t.value) &&
              'object' == typeof n &&
              'function' == typeof n.ngOnDestroy &&
              this.onDestroy.add(t.value),
            t.value
          );
        }
        injectableDefInScope(e) {
          return (
            !!e.providedIn &&
            ('string' == typeof e.providedIn
              ? 'any' === e.providedIn || e.providedIn === this.scope
              : this.injectorDefTypes.has(e.providedIn))
          );
        }
      }
      function ds(e) {
        const t = le(e),
          n = null !== t ? t.factory : lt(e);
        if (null !== n) return n;
        const r = ue(e);
        if (null !== r) return r.factory;
        if (e instanceof De)
          throw new Error(`Token ${ge(e)} is missing a \u0275prov definition.`);
        if (e instanceof Function)
          return (function (e) {
            const t = e.length;
            if (t > 0) {
              const n = (function (e, t) {
                const n = [];
                for (let r = 0; r < e; r++) n.push('?');
                return n;
              })(t);
              throw new Error(
                `Can't resolve all parameters for ${ge(e)}: (${n.join(', ')}).`
              );
            }
            const n = (function (e) {
              const t = e && (e[he] || e[fe] || (e[pe] && e[pe]()));
              if (t) {
                const n = (function (e) {
                  if (e.hasOwnProperty('name')) return e.name;
                  const t = ('' + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? '' : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new Error('unreachable');
      }
      function ps(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function fs(e) {
        return null !== e && 'object' == typeof e && Le in e;
      }
      function ms(e) {
        return 'function' == typeof e;
      }
      const gs = function (e, t, n) {
        return (function (e, t = null, n = null, r) {
          const s = us(e, t, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, t, e, n);
      };
      let ys = (() => {
        class e {
          static create(e, t) {
            return Array.isArray(e)
              ? gs(e, t, '')
              : gs(e.providers, e.parent, e.name || '');
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Pe),
          (e.NULL = new We()),
          (e.ɵprov = ie({
            token: e,
            providedIn: 'any',
            factory: () => Be(Re),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function vs(e, t, n) {
        let r = n ? e.styles : null,
          s = n ? e.classes : null,
          o = 0;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const e = t[i];
            'number' == typeof e
              ? (o = e)
              : 1 == o
              ? (s = ye(s, e))
              : 2 == o && (r = ye(r, e + ': ' + t[++i] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = s) : (e.classesWithoutHost = s);
      }
      function _s(e, t) {
        const n = Ot(e)[1],
          r = n.data.length - 1;
        nn(n, { directiveStart: r, directiveEnd: r + 1 });
      }
      let bs = null;
      function ws() {
        if (!bs) {
          const e = Ce.Symbol;
          if (e && e.iterator) bs = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              'entries' !== n &&
                'size' !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (bs = n);
            }
          }
        }
        return bs;
      }
      function Es(e) {
        return (
          !!Ts(e) && (Array.isArray(e) || (!(e instanceof Map) && ws() in e))
        );
      }
      function Ts(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function ks(e, t = se.Default) {
        const n = Lt();
        return null === n ? Be(e, t) : In(Ft(), n, be(e), t);
      }
      function Cs(e, t, n) {
        const r = Lt();
        return (
          (function (e, t, n) {
            return !Object.is(e[t], n) && ((e[t] = n), !0);
          })(r, Pt.lFrame.bindingIndex++, t) &&
            (function (e, t, n, r, s, o, i, a) {
              const l = xt(t, n);
              let c,
                u = t.inputs;
              var h;
              null != u && (c = u[r])
                ? (Rr(e, n, c, r, s),
                  pt(t) &&
                    (function (e, t) {
                      const n = It(t, e);
                      16 & n[2] || (n[2] |= 64);
                    })(n, t.index))
                : 2 === t.type &&
                  ((r =
                    'class' === (h = r)
                      ? 'className'
                      : 'for' === h
                      ? 'htmlFor'
                      : 'formaction' === h
                      ? 'formAction'
                      : 'innerHtml' === h
                      ? 'innerHTML'
                      : 'readonly' === h
                      ? 'readOnly'
                      : 'tabindex' === h
                      ? 'tabIndex'
                      : h),
                  (s = null != i ? i(s, t.tagName || '', r) : s),
                  Tt(o)
                    ? o.setProperty(l, r, s)
                    : hn(r) ||
                      (l.setProperty ? l.setProperty(r, s) : (l[r] = s)));
            })(
              jt(),
              (function () {
                const e = Pt.lFrame;
                return St(e.tView, e.selectedIndex);
              })(),
              r,
              e,
              t,
              r[11],
              n
            ),
          Cs
        );
      }
      function xs(e, t, n, r, s) {
        const o = s ? 'class' : 'style';
        Rr(e, n, t.inputs[o], o, r);
      }
      function Ss(e, t, n, r) {
        const s = Lt(),
          o = jt(),
          i = 20 + e,
          a = s[11],
          l = (s[i] = or(t, a, Pt.lFrame.currentNamespace)),
          c = o.firstCreatePass
            ? (function (e, t, n, r, s, o, i) {
                const a = t.consts,
                  l = ar(t, e, 2, s, Mt(a, o));
                return (
                  (function (e, t, n, r) {
                    let s = !1;
                    if (Ht()) {
                      const o = (function (e, t, n) {
                          const r = e.directiveRegistry;
                          let s = null;
                          if (r)
                            for (let o = 0; o < r.length; o++) {
                              const i = r[o];
                              Kn(n, i.selectors, !1) &&
                                (s || (s = []),
                                Sn(Tn(n, t), e, i.type),
                                ft(i) ? (br(e, n), s.unshift(i)) : s.push(i));
                            }
                          return s;
                        })(e, t, n),
                        i = null === r ? null : { '': -1 };
                      if (null !== o) {
                        let r = 0;
                        (s = !0), Er(n, e.data.length, o.length);
                        for (let e = 0; e < o.length; e++) {
                          const t = o[e];
                          t.providersResolver && t.providersResolver(t);
                        }
                        _r(e, n, o.length);
                        let a = !1,
                          l = !1;
                        for (let s = 0; s < o.length; s++) {
                          const c = o[s];
                          (n.mergedAttrs = dn(n.mergedAttrs, c.hostAttrs)),
                            Tr(e, t, c),
                            wr(e.data.length - 1, c, i),
                            null !== c.contentQueries && (n.flags |= 8),
                            (null === c.hostBindings &&
                              null === c.hostAttrs &&
                              0 === c.hostVars) ||
                              (n.flags |= 128);
                          const u = c.type.prototype;
                          !a &&
                            (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) &&
                            ((e.preOrderHooks || (e.preOrderHooks = [])).push(
                              n.index - 20
                            ),
                            (a = !0)),
                            l ||
                              (!u.ngOnChanges && !u.ngDoCheck) ||
                              ((
                                e.preOrderCheckHooks ||
                                (e.preOrderCheckHooks = [])
                              ).push(n.index - 20),
                              (l = !0)),
                            gr(e, c),
                            (r += c.hostVars);
                        }
                        !(function (e, t) {
                          const n = t.directiveEnd,
                            r = e.data,
                            s = t.attrs,
                            o = [];
                          let i = null,
                            a = null;
                          for (let l = t.directiveStart; l < n; l++) {
                            const e = r[l],
                              n = e.inputs,
                              c = null === s || qn(t) ? null : xr(n, s);
                            o.push(c),
                              (i = mr(n, l, i)),
                              (a = mr(e.outputs, l, a));
                          }
                          null !== i &&
                            (i.hasOwnProperty('class') && (t.flags |= 16),
                            i.hasOwnProperty('style') && (t.flags |= 32)),
                            (t.initialInputs = o),
                            (t.inputs = i),
                            (t.outputs = a);
                        })(e, n),
                          yr(e, t, r);
                      }
                      i &&
                        (function (e, t, n) {
                          if (t) {
                            const r = (e.localNames = []);
                            for (let e = 0; e < t.length; e += 2) {
                              const s = n[t[e + 1]];
                              if (null == s)
                                throw new Error(
                                  `Export of name '${t[e + 1]}' not found!`
                                );
                              r.push(t[e], s);
                            }
                          }
                        })(n, r, i);
                    }
                    n.mergedAttrs = dn(n.mergedAttrs, n.attrs);
                  })(t, n, l, Mt(a, i)),
                  null !== l.attrs && vs(l, l.attrs, !1),
                  null !== l.mergedAttrs && vs(l, l.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, l),
                  l
                );
              })(e, o, s, 0, t, n, r)
            : o.data[i];
        zt(c, !0);
        const u = c.mergedAttrs;
        null !== u && un(a, l, u);
        const h = c.classes;
        null !== h && Jr(a, l, h);
        const d = c.styles;
        null !== d && Gr(a, l, d),
          Ur(o, s, l, c),
          0 === Pt.lFrame.elementDepthCount && Zn(l, s),
          Pt.lFrame.elementDepthCount++,
          (function (e) {
            return 1 == (1 & e.flags);
          })(c) &&
            ((function (e, t, n) {
              Ht() &&
                ((function (e, t, n, r) {
                  const s = n.directiveStart,
                    o = n.directiveEnd;
                  e.firstCreatePass || Tn(n, t), Zn(r, t);
                  const i = n.initialInputs;
                  for (let a = s; a < o; a++) {
                    const r = e.data[a],
                      o = ft(r);
                    o && kr(t, n, r);
                    const l = Mn(t, e, a, n);
                    Zn(l, t),
                      null !== i && Cr(0, a - s, l, r, 0, i),
                      o && (It(n.index, t)[8] = l);
                  }
                })(e, t, n, xt(n, t)),
                128 == (128 & n.flags) &&
                  (function (e, t, n) {
                    const r = n.directiveStart,
                      s = n.directiveEnd,
                      o = e.expandoInstructions,
                      i = e.firstCreatePass,
                      a = n.index - 20,
                      l = Pt.lFrame.currentDirectiveIndex;
                    try {
                      tn(a);
                      for (let n = r; n < s; n++) {
                        const r = e.data[n],
                          s = t[n];
                        qt(n),
                          null !== r.hostBindings ||
                          0 !== r.hostVars ||
                          null !== r.hostAttrs
                            ? vr(r, s)
                            : i && o.push(null);
                      }
                    } finally {
                      tn(-1), qt(l);
                    }
                  })(e, t, n));
            })(o, s, c),
            (function (e, t, n) {
              if (dt(t)) {
                const r = t.directiveEnd;
                for (let s = t.directiveStart; s < r; s++) {
                  const t = e.data[s];
                  t.contentQueries && t.contentQueries(1, n[s], s);
                }
              }
            })(o, c, s)),
          null !== r &&
            (function (e, t, n = xt) {
              const r = t.localNames;
              if (null !== r) {
                let s = t.index + 1;
                for (let o = 0; o < r.length; o += 2) {
                  const i = r[o + 1],
                    a = -1 === i ? n(t, e) : e[i];
                  e[s++] = a;
                }
              }
            })(s, c);
      }
      function Is(e) {
        return !!e && 'function' == typeof e.then;
      }
      class Os {}
      class As {
        resolveComponentFactory(e) {
          throw (function (e) {
            const t = Error(
              `No component factory found for ${ge(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(e);
        }
      }
      let Ns = (() => {
          class e {}
          return (e.NULL = new As()), e;
        })(),
        Ms = (() => {
          class e {
            constructor(e) {
              this.nativeElement = e;
            }
          }
          return (e.__NG_ELEMENT_ID__ = () => Ds(e)), e;
        })();
      const Ds = function (e) {
        return ts(e, Ft(), Lt());
      };
      class Rs {}
      var Ps = (function (e) {
        return (
          (e[(e.Important = 1)] = 'Important'),
          (e[(e.DashCase = 2)] = 'DashCase'),
          e
        );
      })({});
      let Hs = (() => {
        class e {}
        return (
          (e.ɵprov = ie({ token: e, providedIn: 'root', factory: () => null })),
          e
        );
      })();
      class Ls {
        constructor(e) {
          (this.full = e),
            (this.major = e.split('.')[0]),
            (this.minor = e.split('.')[1]),
            (this.patch = e.split('.').slice(2).join('.'));
        }
      }
      const js = new Ls('10.1.4');
      class Fs {
        constructor() {}
        supports(e) {
          return Es(e);
        }
        create(e) {
          return new Vs(e);
        }
      }
      const zs = (e, t) => t;
      class Vs {
        constructor(e) {
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
            (this._trackByFn = e || zs);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; t || n; ) {
            const o = !n || (t && t.currentIndex < qs(n, r, s)) ? t : n,
              i = qs(o, r, s),
              a = o.currentIndex;
            if (o === n) r--, (n = n._nextRemoved);
            else if (((t = t._next), null == o.previousIndex)) r++;
            else {
              s || (s = []);
              const e = i - r,
                t = a - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    o = r + n;
                  t <= o && o < e && (s[n] = r + 1);
                }
                s[o.previousIndex] = t - e;
              }
            }
            i !== a && e(o, i, a);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (
            t = this._identityChangesHead;
            null !== t;
            t = t._nextIdentityChange
          )
            e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !Es(e)))
            throw new Error(
              `Error trying to diff '${ge(
                e
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            r,
            s = this._itHead,
            o = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (n = e[t]),
                (r = this._trackByFn(t, n)),
                null !== s && Object.is(s.trackById, r)
                  ? (o && (s = this._verifyReinsertion(s, n, r, t)),
                    Object.is(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, t)), (o = !0)),
                (s = s._next);
          } else
            (t = 0),
              (function (e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[ws()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(e, (e) => {
                (r = this._trackByFn(t, e)),
                  null !== s && Object.is(s.trackById, r)
                    ? (o && (s = this._verifyReinsertion(s, e, r, t)),
                      Object.is(s.item, e) || this._addIdentityChange(s, e))
                    : ((s = this._mismatch(s, e, r, t)), (o = !0)),
                  (s = s._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(s), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              e = this._previousItHead = this._itHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._additionsHead; null !== e; e = e._nextAdded)
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
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(e, t, n, r) {
          let s;
          return (
            null === e ? (s = this._itTail) : ((s = e._prev), this._remove(e)),
            null !==
            (e =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, r))
              ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
                this._moveAfter(e, s, r))
              : null !==
                (e =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
                this._reinsertAfter(e, s, r))
              : (e = this._addAfter(new Zs(t, n), s, r)),
            e
          );
        }
        _verifyReinsertion(e, t, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (e = this._reinsertAfter(s, e._prev, r))
              : e.currentIndex != r &&
                ((e.currentIndex = r), this._addToMoves(e, r)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const r = e._prevRemoved,
            s = e._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return (
            this._unlink(e),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = e)
                : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const r = null === t ? this._itHead : t._next;
          return (
            (e._next = r),
            (e._prev = t),
            null === r ? (this._itTail = e) : (r._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new Us()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return (
            null === t ? (this._itHead = n) : (t._next = n),
            null === n ? (this._itTail = t) : (n._prev = t),
            e
          );
        }
        _addToMoves(e, t) {
          return (
            e.previousIndex === t ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = e)
                  : (this._movesTail._nextMoved = e)),
            e
          );
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new Us()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e),
                (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class Zs {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
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
        }
      }
      class Bs {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e),
              (e._nextDup = null),
              (e._prevDup = null))
            : ((this._tail._nextDup = e),
              (e._prevDup = this._tail),
              (e._nextDup = null),
              (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === t || t <= n.currentIndex) &&
              Object.is(n.trackById, e)
            )
              return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class Us {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new Bs()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function qs(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class Ws {
        constructor() {}
        supports(e) {
          return e instanceof Map || Ts(e);
        }
        create() {
          return new $s();
        }
      }
      class $s {
        constructor() {
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
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || Ts(e)))
              throw new Error(
                `Error trying to diff '${ge(
                  e
                )}'. Only maps and objects are allowed`
              );
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n)
                this._maybeAddToChanges(t, e),
                  (this._appendAfter = t),
                  (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
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
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Gs(e);
          return (
            this._records.set(e, n),
            (n.currentValue = t),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              this._previousMapHead = this._mapHead, e = this._previousMapHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged)
              e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded)
              e.previousValue = e.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(e, t) {
          Object.is(t, e.currentValue) ||
            ((e.previousValue = e.currentValue),
            (e.currentValue = t),
            this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map
            ? e.forEach(t)
            : Object.keys(e).forEach((n) => t(e[n], n));
        }
      }
      class Gs {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Js = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (null != n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      'Cannot extend IterableDiffers without a parent injector'
                    );
                  return e.create(t, n);
                },
                deps: [[e, new re(), new te()]],
              };
            }
            find(e) {
              const t = this.factories.find((t) => t.supports(e));
              if (null != t) return t;
              throw new Error(
                `Cannot find a differ supporting object '${e}' of type '${
                  ((n = e), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (e.ɵprov = ie({
              token: e,
              providedIn: 'root',
              factory: () => new e([new Fs()]),
            })),
            e
          );
        })(),
        Ks = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      'Cannot extend KeyValueDiffers without a parent injector'
                    );
                  return e.create(t, n);
                },
                deps: [[e, new re(), new te()]],
              };
            }
            find(e) {
              const t = this.factories.find((t) => t.supports(e));
              if (t) return t;
              throw new Error(`Cannot find a differ supporting object '${e}'`);
            }
          }
          return (
            (e.ɵprov = ie({
              token: e,
              providedIn: 'root',
              factory: () => new e([new Ws()]),
            })),
            e
          );
        })();
      const Xs = [new Ws()],
        Qs = new Js([new Fs()]),
        Ys = new Ks(Xs);
      let eo = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => to(e, Ms)), e;
      })();
      const to = function (e, t) {
        return ns(e, t, Ft(), Lt());
      };
      let no = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => ro(e, Ms)), e;
      })();
      const ro = function (e, t) {
          return rs(e, t, Ft(), Lt());
        },
        so = {};
      class oo extends Ns {
        constructor(e) {
          super(), (this.ngModule = e);
        }
        resolveComponentFactory(e) {
          const t = at(e);
          return new lo(t, this.ngModule);
        }
      }
      function io(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      const ao = new De('SCHEDULER_TOKEN', {
        providedIn: 'root',
        factory: () => vn,
      });
      class lo extends Os {
        constructor(e, t) {
          super(),
            (this.componentDef = e),
            (this.ngModule = t),
            (this.componentType = e.type),
            (this.selector = e.selectors.map(Qn).join(',')),
            (this.ngContentSelectors = e.ngContentSelectors
              ? e.ngContentSelectors
              : []),
            (this.isBoundToModule = !!t);
        }
        get inputs() {
          return io(this.componentDef.inputs);
        }
        get outputs() {
          return io(this.componentDef.outputs);
        }
        create(e, t, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (e, t) {
                  return {
                    get: (n, r, s) => {
                      const o = e.get(n, so, s);
                      return o !== so || r === so ? o : t.get(n, r, s);
                    },
                  };
                })(e, r.injector)
              : e,
            o = s.get(Rs, kt),
            i = s.get(Hs, null),
            a = o.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || 'div',
            c = n
              ? (function (e, t, n) {
                  if (Tt(e)) return e.selectRootElement(t, n === Qe.ShadowDom);
                  let r = 'string' == typeof t ? e.querySelector(t) : t;
                  return (r.textContent = ''), r;
                })(a, n, this.componentDef.encapsulation)
              : or(
                  l,
                  o.createRenderer(null, this.componentDef),
                  (function (e) {
                    const t = e.toLowerCase();
                    return 'svg' === t
                      ? 'http://www.w3.org/2000/svg'
                      : 'math' === t
                      ? 'http://www.w3.org/1998/MathML/'
                      : null;
                  })(l)
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: vn,
              clean: Dr,
              playerHandler: null,
              flags: 0,
            },
            d = pr(0, null, null, 1, 0, null, null, null, null, null),
            p = ir(null, d, h, u, null, null, o, a, i, s);
          let f, m;
          Jt(p);
          try {
            const e = (function (e, t, n, r, s, o) {
              const i = n[1];
              n[20] = e;
              const a = ar(i, 0, 2, null, null),
                l = (a.mergedAttrs = t.hostAttrs);
              null !== l &&
                (vs(a, l, !0),
                null !== e &&
                  (un(s, e, l),
                  null !== a.classes && Jr(s, e, a.classes),
                  null !== a.styles && Gr(s, e, a.styles)));
              const c = r.createRenderer(e, t),
                u = ir(
                  n,
                  dr(t),
                  null,
                  t.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  c,
                  null,
                  null
                );
              return (
                i.firstCreatePass &&
                  (Sn(Tn(a, n), i, t.type), br(i, a), Er(a, n.length, 1)),
                Or(n, u),
                (n[20] = u)
              );
            })(c, this.componentDef, p, o, a);
            if (c)
              if (n) un(a, c, ['ng-version', js.full]);
              else {
                const { attrs: e, classes: t } = (function (e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < e.length; ) {
                    let o = e[r];
                    if ('string' == typeof o)
                      2 === s
                        ? '' !== o && t.push(o, e[++r])
                        : 8 === s && n.push(o);
                    else {
                      if (!Gn(s)) break;
                      s = o;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                e && un(a, c, e), t && t.length > 0 && Jr(a, c, t.join(' '));
              }
            if (((m = St(d, 0)), void 0 !== t)) {
              const e = (m.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = t[n];
                e.push(null != r ? Array.from(r) : null);
              }
            }
            (f = (function (e, t, n, r, s) {
              const o = n[1],
                i = (function (e, t, n) {
                  const r = Ft();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    _r(e, r, 1),
                    Tr(e, t, n));
                  const s = Mn(t, e, t.length - 1, r);
                  Zn(s, t);
                  const o = xt(r, t);
                  return o && Zn(o, t), s;
                })(o, n, t);
              r.components.push(i),
                (e[8] = i),
                s && s.forEach((e) => e(i, t)),
                t.contentQueries && t.contentQueries(1, i, n.length - 1);
              const a = Ft();
              if (
                o.firstCreatePass &&
                (null !== t.hostBindings || null !== t.hostAttrs)
              ) {
                tn(a.index - 20);
                const e = n[1];
                gr(e, t), yr(e, n, t.hostVars), vr(t, i);
              }
              return i;
            })(e, this.componentDef, p, h, [_s])),
              lr(d, p, null);
          } finally {
            en();
          }
          return new co(this.componentType, f, ts(Ms, m, p), p, m);
        }
      }
      class co extends class {} {
        constructor(e, t, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.destroyCbs = []),
            (this.instance = t),
            (this.hostView = this.changeDetectorRef = new Xr(r)),
            (this.componentType = e);
        }
        get injector() {
          return new Pn(this._tNode, this._rootLView);
        }
        destroy() {
          this.destroyCbs &&
            (this.destroyCbs.forEach((e) => e()),
            (this.destroyCbs = null),
            !this.hostView.destroyed && this.hostView.destroy());
        }
        onDestroy(e) {
          this.destroyCbs && this.destroyCbs.push(e);
        }
      }
      const uo = void 0;
      var ho = [
        'en',
        [['a', 'p'], ['AM', 'PM'], uo],
        [['AM', 'PM'], uo, uo],
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
        uo,
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
        uo,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', uo, "{1} 'at' {0}", uo],
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
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      let po = {};
      function fo(e) {
        return (
          e in po ||
            (po[e] =
              Ce.ng &&
              Ce.ng.common &&
              Ce.ng.common.locales &&
              Ce.ng.common.locales[e]),
          po[e]
        );
      }
      var mo = (function (e) {
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
      let go = 'en-US';
      function yo(e) {
        var t, n;
        (n = 'Expected localeId to be defined'),
          null == (t = e) &&
            (function (e, t, n, r) {
              throw new Error(
                'ASSERTION ERROR: ' + e + ` [Expected=> null != ${t} <=Actual]`
              );
            })(n, t),
          'string' == typeof e && (go = e.toLowerCase().replace(/_/g, '-'));
      }
      const vo = new Map();
      class _o extends $e {
        constructor(e, t) {
          super(),
            (this._parent = t),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new oo(this));
          const n = ct(e),
            r = e[Ae] || null;
          r && yo(r),
            (this._bootstrapComponents = _n(n.bootstrap)),
            (this._r3Injector = us(
              e,
              t,
              [
                { provide: $e, useValue: this },
                { provide: Ns, useValue: this.componentFactoryResolver },
              ],
              ge(e)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(e));
        }
        get(e, t = ys.THROW_IF_NOT_FOUND, n = se.Default) {
          return e === ys || e === $e || e === Re
            ? this
            : this._r3Injector.get(e, t, n);
        }
        destroy() {
          const e = this._r3Injector;
          !e.destroyed && e.destroy(),
            this.destroyCbs.forEach((e) => e()),
            (this.destroyCbs = null);
        }
        onDestroy(e) {
          this.destroyCbs.push(e);
        }
      }
      class bo extends class {} {
        constructor(e) {
          super(),
            (this.moduleType = e),
            null !== ct(e) &&
              (function e(t) {
                if (null !== t.ɵmod.id) {
                  const e = t.ɵmod.id;
                  (function (e, t, n) {
                    if (t && t !== n)
                      throw new Error(
                        `Duplicate module registered for ${e} - ${ge(
                          t
                        )} vs ${ge(t.name)}`
                      );
                  })(e, vo.get(e), t),
                    vo.set(e, t);
                }
                let n = t.ɵmod.imports;
                n instanceof Function && (n = n()), n && n.forEach((t) => e(t));
              })(e);
        }
        create(e) {
          return new _o(this.moduleType, e);
        }
      }
      const wo = class extends T {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let r,
            s = (e) => null,
            o = () => null;
          e && 'object' == typeof e
            ? ((r = this.__isAsync
                ? (t) => {
                    setTimeout(() => e.next(t));
                  }
                : (t) => {
                    e.next(t);
                  }),
              e.error &&
                (s = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e.error(t));
                    }
                  : (t) => {
                      e.error(t);
                    }),
              e.complete &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => e.complete());
                    }
                  : () => {
                      e.complete();
                    }))
            : ((r = this.__isAsync
                ? (t) => {
                    setTimeout(() => e(t));
                  }
                : (t) => {
                    e(t);
                  }),
              t &&
                (s = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t(e));
                    }
                  : (e) => {
                      t(e);
                    }),
              n &&
                (o = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const i = super.subscribe(r, s, o);
          return e instanceof h && e.add(i), i;
        }
      };
      function Eo() {
        return this._results[ws()]();
      }
      class To {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new wo()),
            (this.length = 0);
          const e = ws(),
            t = To.prototype;
          t[e] || (t[e] = Eo);
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          (this._results = (function e(t, n) {
            void 0 === n && (n = t);
            for (let r = 0; r < t.length; r++) {
              let s = t[r];
              Array.isArray(s)
                ? (n === t && (n = t.slice(0, r)), e(s, n))
                : n !== t && n.push(s);
            }
            return n;
          })(e)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class ko {
        constructor(e) {
          (this.queryList = e), (this.matches = null);
        }
        clone() {
          return new ko(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Co {
        constructor(e = []) {
          this.queries = e;
        }
        createEmbeddedView(e) {
          const t = e.queries;
          if (null !== t) {
            const n =
                null !== e.contentQueries ? e.contentQueries[0] : t.length,
              r = [];
            for (let e = 0; e < n; e++) {
              const n = t.getByIndex(e);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new Co(r);
          }
          return null;
        }
        insertView(e) {
          this.dirtyQueriesWithMatches(e);
        }
        detachView(e) {
          this.dirtyQueriesWithMatches(e);
        }
        dirtyQueriesWithMatches(e) {
          for (let t = 0; t < this.queries.length; t++)
            null !== Mo(e, t).matches && this.queries[t].setDirty();
        }
      }
      class xo {
        constructor(e, t, n, r = null) {
          (this.predicate = e),
            (this.descendants = t),
            (this.isStatic = n),
            (this.read = r);
        }
      }
      class So {
        constructor(e = []) {
          this.queries = e;
        }
        elementStart(e, t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(e, t);
        }
        elementEnd(e) {
          for (let t = 0; t < this.queries.length; t++)
            this.queries[t].elementEnd(e);
        }
        embeddedTView(e) {
          let t = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== t ? t.length : 0,
              s = this.getByIndex(n).embeddedTView(e, r);
            s &&
              ((s.indexInDeclarationView = n),
              null !== t ? t.push(s) : (t = [s]));
          }
          return null !== t ? new So(t) : null;
        }
        template(e, t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(e, t);
        }
        getByIndex(e) {
          return this.queries[e];
        }
        get length() {
          return this.queries.length;
        }
        track(e) {
          this.queries.push(e);
        }
      }
      class Io {
        constructor(e, t = -1) {
          (this.metadata = e),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = t);
        }
        elementStart(e, t) {
          this.isApplyingToNode(t) && this.matchTNode(e, t);
        }
        elementEnd(e) {
          this._declarationNodeIndex === e.index &&
            (this._appliesToNextNode = !1);
        }
        template(e, t) {
          this.elementStart(e, t);
        }
        embeddedTView(e, t) {
          return this.isApplyingToNode(e)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-e.index, t),
              new Io(this.metadata))
            : null;
        }
        isApplyingToNode(e) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            const t = this._declarationNodeIndex;
            let n = e.parent;
            for (; null !== n && 3 === n.type && n.index !== t; ) n = n.parent;
            return t === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(e, t) {
          const n = this.metadata.predicate;
          if (Array.isArray(n))
            for (let r = 0; r < n.length; r++) {
              const s = n[r];
              this.matchTNodeWithReadOption(e, t, Oo(t, s)),
                this.matchTNodeWithReadOption(e, t, Nn(t, e, s, !1, !1));
            }
          else
            n === eo
              ? 0 === t.type && this.matchTNodeWithReadOption(e, t, -1)
              : this.matchTNodeWithReadOption(e, t, Nn(t, e, n, !1, !1));
        }
        matchTNodeWithReadOption(e, t, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === Ms || r === no || (r === eo && 0 === t.type))
                this.addMatch(t.index, -2);
              else {
                const n = Nn(t, e, r, !1, !1);
                null !== n && this.addMatch(t.index, n);
              }
            else this.addMatch(t.index, n);
          }
        }
        addMatch(e, t) {
          null === this.matches
            ? (this.matches = [e, t])
            : this.matches.push(e, t);
        }
      }
      function Oo(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function Ao(e, t, n, r) {
        return -1 === n
          ? (function (e, t) {
              return 2 === e.type || 3 === e.type
                ? ts(Ms, e, t)
                : 0 === e.type
                ? ns(eo, Ms, e, t)
                : null;
            })(t, e)
          : -2 === n
          ? (function (e, t, n) {
              return n === Ms
                ? ts(Ms, t, e)
                : n === eo
                ? ns(eo, Ms, t, e)
                : n === no
                ? rs(no, Ms, t, e)
                : void 0;
            })(e, t, r)
          : Mn(e, e[1], n, t);
      }
      function No(e, t, n, r) {
        const s = t[19].queries[r];
        if (null === s.matches) {
          const r = e.data,
            o = n.matches,
            i = [];
          for (let e = 0; e < o.length; e += 2) {
            const s = o[e];
            i.push(s < 0 ? null : Ao(t, r[s], o[e + 1], n.metadata.read));
          }
          s.matches = i;
        }
        return s.matches;
      }
      function Mo(e, t) {
        return e.queries.getByIndex(t);
      }
      const Do = new De('Application Initializer');
      let Ro = (() => {
        class e {
          constructor(e) {
            (this.appInits = e),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((e, t) => {
                (this.resolve = e), (this.reject = t);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const e = [],
              t = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const t = this.appInits[n]();
                Is(t) && e.push(t);
              }
            Promise.all(e)
              .then(() => {
                t();
              })
              .catch((e) => {
                this.reject(e);
              }),
              0 === e.length && t(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Be(Do, 8));
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Po = new De('AppId'),
        Ho = {
          provide: Po,
          useFactory: function () {
            return `${Lo()}${Lo()}${Lo()}`;
          },
          deps: [],
        };
      function Lo() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const jo = new De('Platform Initializer'),
        Fo = new De('Platform ID'),
        zo = new De('appBootstrapListener');
      let Vo = (() => {
        class e {
          log(e) {
            console.log(e);
          }
          warn(e) {
            console.warn(e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Zo = new De('LocaleId'),
        Bo = new De('DefaultCurrencyCode');
      class Uo {
        constructor(e, t) {
          (this.ngModuleFactory = e), (this.componentFactories = t);
        }
      }
      const qo = function (e) {
          return new bo(e);
        },
        Wo = qo,
        $o = function (e) {
          return Promise.resolve(qo(e));
        },
        Go = function (e) {
          const t = qo(e),
            n = _n(ct(e).declarations).reduce((e, t) => {
              const n = at(t);
              return n && e.push(new lo(n)), e;
            }, []);
          return new Uo(t, n);
        },
        Jo = Go,
        Ko = function (e) {
          return Promise.resolve(Go(e));
        };
      let Xo = (() => {
        class e {
          constructor() {
            (this.compileModuleSync = Wo),
              (this.compileModuleAsync = $o),
              (this.compileModuleAndAllComponentsSync = Jo),
              (this.compileModuleAndAllComponentsAsync = Ko);
          }
          clearCache() {}
          clearCacheFor(e) {}
          getModuleId(e) {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Qo = (() => Promise.resolve(0))();
      function Yo(e) {
        'undefined' == typeof Zone
          ? Qo.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class ei {
        constructor({
          enableLongStackTrace: e = !1,
          shouldCoalesceEventChangeDetection: t = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new wo(!1)),
            (this.onMicrotaskEmpty = new wo(!1)),
            (this.onStable = new wo(!1)),
            (this.onError = new wo(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = t),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              let e = Ce.requestAnimationFrame,
                t = Ce.cancelAnimationFrame;
              if ('undefined' != typeof Zone && e && t) {
                const n = e[Zone.__symbol__('OriginalDelegate')];
                n && (e = n);
                const r = t[Zone.__symbol__('OriginalDelegate')];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function (e) {
              const t =
                !!e.shouldCoalesceEventChangeDetection &&
                e.nativeRequestAnimationFrame &&
                (() => {
                  !(function (e) {
                    -1 === e.lastRequestAnimationFrameId &&
                      ((e.lastRequestAnimationFrameId =
                        e.nativeRequestAnimationFrame.call(Ce, () => {
                          e.fakeTopEventTask ||
                            (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                              'fakeTopEventTask',
                              () => {
                                (e.lastRequestAnimationFrameId = -1),
                                  si(e),
                                  ri(e);
                              },
                              void 0,
                              () => {},
                              () => {}
                            )),
                            e.fakeTopEventTask.invoke();
                        })),
                      si(e));
                  })(e);
                });
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0, maybeDelayChangeDetection: t },
                onInvokeTask: (n, r, s, o, i, a) => {
                  try {
                    return oi(e), n.invokeTask(s, o, i, a);
                  } finally {
                    t && 'eventTask' === o.type && t(), ii(e);
                  }
                },
                onInvoke: (t, n, r, s, o, i, a) => {
                  try {
                    return oi(e), t.invoke(r, s, o, i, a);
                  } finally {
                    ii(e);
                  }
                },
                onHasTask: (t, n, r, s) => {
                  t.hasTask(r, s),
                    n === r &&
                      ('microTask' == s.change
                        ? ((e._hasPendingMicrotasks = s.microTask),
                          si(e),
                          ri(e))
                        : 'macroTask' == s.change &&
                          (e.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (t, n, r, s) => (
                  t.handleError(r, s),
                  e.runOutsideAngular(() => e.onError.emit(s)),
                  !1
                ),
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!ei.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (ei.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const s = this._inner,
            o = s.scheduleEventTask('NgZoneEvent: ' + r, e, ni, ti, ti);
          try {
            return s.runTask(o, t, n);
          } finally {
            s.cancelTask(o);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      function ti() {}
      const ni = {};
      function ri(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function si(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          (e.shouldCoalesceEventChangeDetection &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function oi(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function ii(e) {
        e._nesting--, ri(e);
      }
      class ai {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new wo()),
            (this.onMicrotaskEmpty = new wo()),
            (this.onStable = new wo()),
            (this.onError = new wo());
        }
        run(e, t, n) {
          return e.apply(t, n);
        }
        runGuarded(e, t, n) {
          return e.apply(t, n);
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e, t, n, r) {
          return e.apply(t, n);
        }
      }
      let li = (() => {
          class e {
            constructor(e) {
              (this._ngZone = e),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                e.run(() => {
                  this.taskTrackingZone =
                    'undefined' == typeof Zone
                      ? null
                      : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      ei.assertNotInAngularZone(),
                        Yo(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Yo(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let e = this._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let e = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (t) =>
                    !t.updateCb ||
                    !t.updateCb(e) ||
                    (clearTimeout(t.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((e) => ({
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data,
                  }))
                : [];
            }
            addCallback(e, t, n) {
              let r = -1;
              t &&
                t > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (e) => e.timeoutId !== r
                  )),
                    e(this._didWork, this.getPendingTasks());
                }, t)),
                this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
            }
            whenStable(e, t, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(e, t, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(e, t, n) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Be(ei));
            }),
            (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        ci = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), di.addToWindow(this);
            }
            registerApplication(e, t) {
              this._applications.set(e, t);
            }
            unregisterApplication(e) {
              this._applications.delete(e);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(e) {
              return this._applications.get(e) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(e, t = !0) {
              return di.findTestabilityInTree(this, e, t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class ui {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let hi,
        di = new ui();
      const pi = new De('AllowMultipleToken');
      function fi(e, t, n = []) {
        const r = 'Platform: ' + t,
          s = new De(r);
        return (t = []) => {
          let o = mi();
          if (!o || o.injector.get(pi, !1))
            if (e) e(n.concat(t).concat({ provide: s, useValue: !0 }));
            else {
              const e = n
                .concat(t)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: ss, useValue: 'platform' }
                );
              !(function (e) {
                if (hi && !hi.destroyed && !hi.injector.get(pi, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                hi = e.get(gi);
                const t = e.get(jo, null);
                t && t.forEach((e) => e());
              })(ys.create({ providers: e, name: r }));
            }
          return (function (e) {
            const t = mi();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return t;
          })(s);
        };
      }
      function mi() {
        return hi && !hi.destroyed ? hi : null;
      }
      let gi = (() => {
        class e {
          constructor(e) {
            (this._injector = e),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(e, t) {
            const n = (function (e, t) {
                let n;
                return (
                  (n =
                    'noop' === e
                      ? new ai()
                      : ('zone.js' === e ? void 0 : e) ||
                        new ei({
                          enableLongStackTrace: Vn(),
                          shouldCoalesceEventChangeDetection: t,
                        })),
                  n
                );
              })(t ? t.ngZone : void 0, (t && t.ngZoneEventCoalescing) || !1),
              r = [{ provide: ei, useValue: n }];
            return n.run(() => {
              const t = ys.create({
                  providers: r,
                  parent: this.injector,
                  name: e.moduleType.name,
                }),
                s = e.create(t),
                o = s.injector.get(Fn, null);
              if (!o)
                throw new Error(
                  'No ErrorHandler. Is platform module (BrowserModule) included?'
                );
              return (
                s.onDestroy(() => _i(this._modules, s)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: (e) => {
                      o.handleError(e);
                    },
                  })
                ),
                (function (e, t, n) {
                  try {
                    const r = n();
                    return Is(r)
                      ? r.catch((n) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(o, n, () => {
                  const e = s.injector.get(Ro);
                  return (
                    e.runInitializers(),
                    e.donePromise.then(
                      () => (
                        yo(s.injector.get(Zo, 'en-US') || 'en-US'),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(e, t = []) {
            const n = yi({}, t);
            return (function (e, t, n) {
              const r = new bo(n);
              return Promise.resolve(r);
            })(0, 0, e).then((e) => this.bootstrapModuleFactory(e, n));
          }
          _moduleDoBootstrap(e) {
            const t = e.injector.get(vi);
            if (e._bootstrapComponents.length > 0)
              e._bootstrapComponents.forEach((e) => t.bootstrap(e));
            else {
              if (!e.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${ge(
                    e.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              e.instance.ngDoBootstrap(t);
            }
            this._modules.push(e);
          }
          onDestroy(e) {
            this._destroyListeners.push(e);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach((e) => e.destroy()),
              this._destroyListeners.forEach((e) => e()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Be(ys));
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function yi(e, t) {
        return Array.isArray(t)
          ? t.reduce(yi, e)
          : Object.assign(Object.assign({}, e), t);
      }
      let vi = (() => {
        class e {
          constructor(e, t, n, r, s, o) {
            (this._zone = e),
              (this._console = t),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = s),
              (this._initStatus = o),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = Vn()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const i = new v((e) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              a = new v((e) => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    ei.assertNotInAngularZone(),
                      Yo(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  ei.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = U(
              i,
              a.pipe((e) => {
                return q()(
                  ((t = X),
                  function (e) {
                    let n;
                    n =
                      'function' == typeof t
                        ? t
                        : function () {
                            return t;
                          };
                    const r = Object.create(e, J);
                    return (r.source = e), (r.subjectFactory = n), r;
                  })(e)
                );
                var t;
              })
            );
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n =
              e instanceof Os
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get($e),
              s = n.create(ys.NULL, [], t || n.selector, r);
            s.onDestroy(() => {
              this._unloadComponent(s);
            });
            const o = s.injector.get(li, null);
            return (
              o &&
                s.injector
                  .get(ci)
                  .registerApplication(s.location.nativeElement, o),
              this._loadComponent(s),
              Vn() &&
                this._console.log(
                  'Angular is running in development mode. Call enableProdMode() to enable production mode.'
                ),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively');
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
              if (this._enforceNoNewChanges)
                for (let e of this._views) e.checkNoChanges();
            } catch (e) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(e)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            _i(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(zo, [])
                .concat(this._bootstrapListeners)
                .forEach((t) => t(e));
          }
          _unloadComponent(e) {
            this.detachView(e.hostView), _i(this.components, e);
          }
          ngOnDestroy() {
            this._views.slice().forEach((e) => e.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Be(ei), Be(Vo), Be(ys), Be(Fn), Be(Ns), Be(Ro));
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function _i(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      const bi = fi(null, 'core', [
          { provide: Fo, useValue: 'unknown' },
          { provide: gi, deps: [ys] },
          { provide: ci, deps: [] },
          { provide: Vo, deps: [] },
        ]),
        wi = [
          { provide: vi, useClass: vi, deps: [ei, Vo, ys, Fn, Ns, Ro] },
          {
            provide: ao,
            deps: [ei],
            useFactory: function (e) {
              let t = [];
              return (
                e.onStable.subscribe(() => {
                  for (; t.length; ) t.pop()();
                }),
                function (e) {
                  t.push(e);
                }
              );
            },
          },
          { provide: Ro, useClass: Ro, deps: [[new te(), Do]] },
          { provide: Xo, useClass: Xo, deps: [] },
          Ho,
          {
            provide: Js,
            useFactory: function () {
              return Qs;
            },
            deps: [],
          },
          {
            provide: Ks,
            useFactory: function () {
              return Ys;
            },
            deps: [],
          },
          {
            provide: Zo,
            useFactory: function (e) {
              return (
                yo(
                  (e =
                    e ||
                    ('undefined' != typeof $localize && $localize.locale) ||
                    'en-US')
                ),
                e
              );
            },
            deps: [[new ee(Zo), new te(), new re()]],
          },
          { provide: Bo, useValue: 'USD' },
        ];
      let Ei = (() => {
          class e {
            constructor(e) {}
          }
          return (
            (e.ɵmod = ot({ type: e })),
            (e.ɵinj = ae({
              factory: function (t) {
                return new (t || e)(Be(vi));
              },
              providers: wi,
            })),
            e
          );
        })(),
        Ti = null;
      function ki() {
        return Ti;
      }
      const Ci = new De('DocumentToken');
      var xi = (function (e) {
        return (
          (e[(e.Zero = 0)] = 'Zero'),
          (e[(e.One = 1)] = 'One'),
          (e[(e.Two = 2)] = 'Two'),
          (e[(e.Few = 3)] = 'Few'),
          (e[(e.Many = 4)] = 'Many'),
          (e[(e.Other = 5)] = 'Other'),
          e
        );
      })({});
      class Si {}
      let Ii = (() => {
        class e extends Si {
          constructor(e) {
            super(), (this.locale = e);
          }
          getPluralCategory(e, t) {
            switch (
              (function (e) {
                return (function (e) {
                  const t = (function (e) {
                    return e.toLowerCase().replace(/_/g, '-');
                  })(e);
                  let n = fo(t);
                  if (n) return n;
                  const r = t.split('-')[0];
                  if (((n = fo(r)), n)) return n;
                  if ('en' === r) return ho;
                  throw new Error(`Missing locale data for the locale "${e}".`);
                })(e)[mo.PluralCase];
              })(t || this.locale)(e)
            ) {
              case xi.Zero:
                return 'zero';
              case xi.One:
                return 'one';
              case xi.Two:
                return 'two';
              case xi.Few:
                return 'few';
              case xi.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Be(Zo));
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function Oi(e, t) {
        t = encodeURIComponent(t);
        for (const n of e.split(';')) {
          const e = n.indexOf('='),
            [r, s] = -1 == e ? [n, ''] : [n.slice(0, e), n.slice(e + 1)];
          if (r.trim() === t) return decodeURIComponent(s);
        }
        return null;
      }
      let Ai = (() => {
        class e {}
        return (
          (e.ɵmod = ot({ type: e })),
          (e.ɵinj = ae({
            factory: function (t) {
              return new (t || e)();
            },
            providers: [{ provide: Si, useClass: Ii }],
          })),
          e
        );
      })();
      class Ni extends class extends class {} {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      } {
        static makeCurrent() {
          var e;
          (e = new Ni()), Ti || (Ti = e);
        }
        getProperty(e, t) {
          return e[t];
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        getValue(e) {
          return e.value;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        getGlobalEventTarget(e, t) {
          return 'window' === t
            ? window
            : 'document' === t
            ? e
            : 'body' === t
            ? e.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            Di || ((Di = document.querySelector('base')), Di)
              ? Di.getAttribute('href')
              : null;
          return null == t
            ? null
            : ((n = t),
              Mi || (Mi = document.createElement('a')),
              Mi.setAttribute('href', n),
              '/' === Mi.pathname.charAt(0) ? Mi.pathname : '/' + Mi.pathname);
          var n;
        }
        resetBaseElement() {
          Di = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return Oi(document.cookie, e);
        }
      }
      let Mi,
        Di = null;
      const Ri = new De('TRANSITION_ID'),
        Pi = [
          {
            provide: Do,
            useFactory: function (e, t, n) {
              return () => {
                n.get(Ro).donePromise.then(() => {
                  const n = ki();
                  Array.prototype.slice
                    .apply(t.querySelectorAll('style[ng-transition]'))
                    .filter((t) => t.getAttribute('ng-transition') === e)
                    .forEach((e) => n.remove(e));
                });
              };
            },
            deps: [Ri, Ci, ys],
            multi: !0,
          },
        ];
      class Hi {
        static init() {
          var e;
          (e = new Hi()), (di = e);
        }
        addToWindow(e) {
          (Ce.getAngularTestability = (t, n = !0) => {
            const r = e.findTestabilityInTree(t, n);
            if (null == r)
              throw new Error('Could not find testability for element.');
            return r;
          }),
            (Ce.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (Ce.getAllAngularRootElements = () => e.getAllRootElements()),
            Ce.frameworkStabilizers || (Ce.frameworkStabilizers = []),
            Ce.frameworkStabilizers.push((e) => {
              const t = Ce.getAllAngularTestabilities();
              let n = t.length,
                r = !1;
              const s = function (t) {
                (r = r || t), n--, 0 == n && e(r);
              };
              t.forEach(function (e) {
                e.whenStable(s);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const r = e.getTestability(t);
          return null != r
            ? r
            : n
            ? ki().isShadowRoot(t)
              ? this.findTestabilityInTree(e, t.host, !0)
              : this.findTestabilityInTree(e, t.parentElement, !0)
            : null;
        }
      }
      const Li = new De('EventManagerPlugins');
      let ji = (() => {
        class e {
          constructor(e, t) {
            (this._zone = t),
              (this._eventNameToPlugin = new Map()),
              e.forEach((e) => (e.manager = this)),
              (this._plugins = e.slice().reverse());
          }
          addEventListener(e, t, n) {
            return this._findPluginFor(t).addEventListener(e, t, n);
          }
          addGlobalEventListener(e, t, n) {
            return this._findPluginFor(t).addGlobalEventListener(e, t, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(e) {
            const t = this._eventNameToPlugin.get(e);
            if (t) return t;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const t = n[r];
              if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
            }
            throw new Error('No event manager plugin found for event ' + e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Be(Li), Be(ei));
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Fi {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = ki().getGlobalEventTarget(this._doc, e);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, n);
        }
      }
      let zi = (() => {
          class e {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(e) {
              const t = new Set();
              e.forEach((e) => {
                this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
              }),
                this.onStylesAdded(t);
            }
            onStylesAdded(e) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Vi = (() => {
          class e extends zi {
            constructor(e) {
              super(),
                (this._doc = e),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(e.head);
            }
            _addStylesToHost(e, t) {
              e.forEach((e) => {
                const n = this._doc.createElement('style');
                (n.textContent = e), this._styleNodes.add(t.appendChild(n));
              });
            }
            addHost(e) {
              this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
            }
            removeHost(e) {
              this._hostNodes.delete(e);
            }
            onStylesAdded(e) {
              this._hostNodes.forEach((t) => this._addStylesToHost(e, t));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((e) => ki().remove(e));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Be(Ci));
            }),
            (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const Zi = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        Bi = /%COMP%/g;
      function Ui(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let s = t[r];
          Array.isArray(s) ? Ui(e, s, n) : ((s = s.replace(Bi, e)), n.push(s));
        }
        return n;
      }
      function qi(e) {
        return (t) => {
          if ('__ngUnwrap__' === t) return e;
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      let Wi = (() => {
        class e {
          constructor(e, t, n) {
            (this.eventManager = e),
              (this.sharedStylesHost = t),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new $i(e));
          }
          createRenderer(e, t) {
            if (!e || !t) return this.defaultRenderer;
            switch (t.encapsulation) {
              case Qe.Emulated: {
                let n = this.rendererByCompId.get(t.id);
                return (
                  n ||
                    ((n = new Gi(
                      this.eventManager,
                      this.sharedStylesHost,
                      t,
                      this.appId
                    )),
                    this.rendererByCompId.set(t.id, n)),
                  n.applyToHost(e),
                  n
                );
              }
              case Qe.Native:
              case Qe.ShadowDom:
                return new Ji(this.eventManager, this.sharedStylesHost, e, t);
              default:
                if (!this.rendererByCompId.has(t.id)) {
                  const e = Ui(t.id, t.styles, []);
                  this.sharedStylesHost.addStyles(e),
                    this.rendererByCompId.set(t.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Be(ji), Be(Vi), Be(Po));
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class $i {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t
            ? document.createElementNS(Zi[t] || t, e)
            : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = 'string' == typeof e ? document.querySelector(e) : e;
          if (!n)
            throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ''), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = r + ':' + t;
            const s = Zi[r];
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = Zi[n];
            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          r & Ps.DashCase
            ? e.style.setProperty(t, n, r & Ps.Important ? 'important' : '')
            : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & Ps.DashCase ? e.style.removeProperty(t) : (e.style[t] = '');
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return 'string' == typeof e
            ? this.eventManager.addGlobalEventListener(e, t, qi(n))
            : this.eventManager.addEventListener(e, t, qi(n));
        }
      }
      class Gi extends $i {
        constructor(e, t, n, r) {
          super(e), (this.component = n);
          const s = Ui(r + '-' + n.id, n.styles, []);
          t.addStyles(s),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(
              Bi,
              r + '-' + n.id
            )),
            (this.hostAttr = '_nghost-%COMP%'.replace(Bi, r + '-' + n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, '');
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class Ji extends $i {
        constructor(e, t, n, r) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === Qe.ShadowDom
                ? n.attachShadow({ mode: 'open' })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = Ui(r.id, r.styles, []);
          for (let o = 0; o < s.length; o++) {
            const e = document.createElement('style');
            (e.textContent = s[o]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(e))
          );
        }
      }
      let Ki = (() => {
        class e extends Fi {
          constructor(e) {
            super(e);
          }
          supports(e) {
            return !0;
          }
          addEventListener(e, t, n) {
            return (
              e.addEventListener(t, n, !1),
              () => this.removeEventListener(e, t, n)
            );
          }
          removeEventListener(e, t, n) {
            return e.removeEventListener(t, n);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Be(Ci));
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Xi = ['alt', 'control', 'meta', 'shift'],
        Qi = {
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
        Yi = {
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
        ea = {
          alt: (e) => e.altKey,
          control: (e) => e.ctrlKey,
          meta: (e) => e.metaKey,
          shift: (e) => e.shiftKey,
        };
      let ta = (() => {
        class e extends Fi {
          constructor(e) {
            super(e);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, n, r) {
            const s = e.parseEventName(n),
              o = e.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => ki().onAndCancel(t, s.domEventName, o));
          }
          static parseEventName(t) {
            const n = t.toLowerCase().split('.'),
              r = n.shift();
            if (0 === n.length || ('keydown' !== r && 'keyup' !== r))
              return null;
            const s = e._normalizeKey(n.pop());
            let o = '';
            if (
              (Xi.forEach((e) => {
                const t = n.indexOf(e);
                t > -1 && (n.splice(t, 1), (o += e + '.'));
              }),
              (o += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const i = {};
            return (i.domEventName = r), (i.fullKey = o), i;
          }
          static getEventFullKey(e) {
            let t = '',
              n = (function (e) {
                let t = e.key;
                if (null == t) {
                  if (((t = e.keyIdentifier), null == t)) return 'Unidentified';
                  t.startsWith('U+') &&
                    ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                    3 === e.location && Yi.hasOwnProperty(t) && (t = Yi[t]));
                }
                return Qi[t] || t;
              })(e);
            return (
              (n = n.toLowerCase()),
              ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
              Xi.forEach((r) => {
                r != n && (0, ea[r])(e) && (t += r + '.');
              }),
              (t += n),
              t
            );
          }
          static eventCallback(t, n, r) {
            return (s) => {
              e.getEventFullKey(s) === t && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(e) {
            switch (e) {
              case 'esc':
                return 'escape';
              default:
                return e;
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Be(Ci));
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const na = fi(bi, 'browser', [
          { provide: Fo, useValue: 'browser' },
          {
            provide: jo,
            useValue: function () {
              Ni.makeCurrent(), Hi.init();
            },
            multi: !0,
          },
          {
            provide: Ci,
            useFactory: function () {
              return (
                (function (e) {
                  Et = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        ra = [
          [],
          { provide: ss, useValue: 'root' },
          {
            provide: Fn,
            useFactory: function () {
              return new Fn();
            },
            deps: [],
          },
          { provide: Li, useClass: Ki, multi: !0, deps: [Ci, ei, Fo] },
          { provide: Li, useClass: ta, multi: !0, deps: [Ci] },
          [],
          { provide: Wi, useClass: Wi, deps: [ji, Vi, Po] },
          { provide: Rs, useExisting: Wi },
          { provide: zi, useExisting: Vi },
          { provide: Vi, useClass: Vi, deps: [Ci] },
          { provide: li, useClass: li, deps: [ei] },
          { provide: ji, useClass: ji, deps: [Li, ei] },
          [],
        ];
      let sa = (() => {
        class e {
          constructor(e) {
            if (e)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          static withServerTransition(t) {
            return {
              ngModule: e,
              providers: [
                { provide: Po, useValue: t.appId },
                { provide: Ri, useExisting: Po },
                Pi,
              ],
            };
          }
        }
        return (
          (e.ɵmod = ot({ type: e })),
          (e.ɵinj = ae({
            factory: function (t) {
              return new (t || e)(Be(e, 12));
            },
            providers: ra,
            imports: [Ai, Ei],
          })),
          e
        );
      })();
      function oa(...e) {
        let t = e[e.length - 1];
        return C(t) ? (e.pop(), P(e, t)) : B(e);
      }
      'undefined' != typeof window && window;
      class ia {
        constructor(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new aa(e, this.predicate, this.thisArg));
        }
      }
      class aa extends f {
        constructor(e, t, n) {
          super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          t && this.destination.next(e);
        }
      }
      class la {}
      class ca {}
      class ua {
        constructor(e) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            e
              ? (this.lazyInit =
                  'string' == typeof e
                    ? () => {
                        (this.headers = new Map()),
                          e.split('\n').forEach((e) => {
                            const t = e.indexOf(':');
                            if (t > 0) {
                              const n = e.slice(0, t),
                                r = n.toLowerCase(),
                                s = e.slice(t + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(s)
                                  : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(e).forEach((t) => {
                            let n = e[t];
                            const r = t.toLowerCase();
                            'string' == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(t, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(e) {
          return this.init(), this.headers.has(e.toLowerCase());
        }
        get(e) {
          this.init();
          const t = this.headers.get(e.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(e) {
          return this.init(), this.headers.get(e.toLowerCase()) || null;
        }
        append(e, t) {
          return this.clone({ name: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ name: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ name: e, value: t, op: 'd' });
        }
        maybeSetNormalizedName(e, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof ua
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
              (this.lazyUpdate = null)));
        }
        copyFrom(e) {
          e.init(),
            Array.from(e.headers.keys()).forEach((t) => {
              this.headers.set(t, e.headers.get(t)),
                this.normalizedNames.set(t, e.normalizedNames.get(t));
            });
        }
        clone(e) {
          const t = new ua();
          return (
            (t.lazyInit =
              this.lazyInit && this.lazyInit instanceof ua
                ? this.lazyInit
                : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([e])),
            t
          );
        }
        applyUpdate(e) {
          const t = e.name.toLowerCase();
          switch (e.op) {
            case 'a':
            case 's':
              let n = e.value;
              if (('string' == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(e.name, t);
              const r = ('a' === e.op ? this.headers.get(t) : void 0) || [];
              r.push(...n), this.headers.set(t, r);
              break;
            case 'd':
              const s = e.value;
              if (s) {
                let e = this.headers.get(t);
                if (!e) return;
                (e = e.filter((e) => -1 === s.indexOf(e))),
                  0 === e.length
                    ? (this.headers.delete(t), this.normalizedNames.delete(t))
                    : this.headers.set(t, e);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        forEach(e) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((t) =>
              e(this.normalizedNames.get(t), this.headers.get(t))
            );
        }
      }
      class ha {
        encodeKey(e) {
          return da(e);
        }
        encodeValue(e) {
          return da(e);
        }
        decodeKey(e) {
          return decodeURIComponent(e);
        }
        decodeValue(e) {
          return decodeURIComponent(e);
        }
      }
      function da(e) {
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
      class pa {
        constructor(e = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = e.encoder || new ha()),
            e.fromString)
          ) {
            if (e.fromObject)
              throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function (e, t) {
              const n = new Map();
              return (
                e.length > 0 &&
                  e.split('&').forEach((e) => {
                    const r = e.indexOf('='),
                      [s, o] =
                        -1 == r
                          ? [t.decodeKey(e), '']
                          : [
                              t.decodeKey(e.slice(0, r)),
                              t.decodeValue(e.slice(r + 1)),
                            ],
                      i = n.get(s) || [];
                    i.push(o), n.set(s, i);
                  }),
                n
              );
            })(e.fromString, this.encoder);
          } else
            e.fromObject
              ? ((this.map = new Map()),
                Object.keys(e.fromObject).forEach((t) => {
                  const n = e.fromObject[t];
                  this.map.set(t, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(e) {
          return this.init(), this.map.has(e);
        }
        get(e) {
          this.init();
          const t = this.map.get(e);
          return t ? t[0] : null;
        }
        getAll(e) {
          return this.init(), this.map.get(e) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(e, t) {
          return this.clone({ param: e, value: t, op: 'a' });
        }
        set(e, t) {
          return this.clone({ param: e, value: t, op: 's' });
        }
        delete(e, t) {
          return this.clone({ param: e, value: t, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((e) => {
                const t = this.encoder.encodeKey(e);
                return this.map
                  .get(e)
                  .map((e) => t + '=' + this.encoder.encodeValue(e))
                  .join('&');
              })
              .filter((e) => '' !== e)
              .join('&')
          );
        }
        clone(e) {
          const t = new pa({ encoder: this.encoder });
          return (
            (t.cloneFrom = this.cloneFrom || this),
            (t.updates = (this.updates || []).concat([e])),
            t
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
              this.updates.forEach((e) => {
                switch (e.op) {
                  case 'a':
                  case 's':
                    const t =
                      ('a' === e.op ? this.map.get(e.param) : void 0) || [];
                    t.push(e.value), this.map.set(e.param, t);
                    break;
                  case 'd':
                    if (void 0 === e.value) {
                      this.map.delete(e.param);
                      break;
                    }
                    {
                      let t = this.map.get(e.param) || [];
                      const n = t.indexOf(e.value);
                      -1 !== n && t.splice(n, 1),
                        t.length > 0
                          ? this.map.set(e.param, t)
                          : this.map.delete(e.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function fa(e) {
        return 'undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer;
      }
      function ma(e) {
        return 'undefined' != typeof Blob && e instanceof Blob;
      }
      function ga(e) {
        return 'undefined' != typeof FormData && e instanceof FormData;
      }
      class ya {
        constructor(e, t, n, r) {
          let s;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = e.toUpperCase()),
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
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new ua()),
            this.params)
          ) {
            const e = this.params.toString();
            if (0 === e.length) this.urlWithParams = t;
            else {
              const n = t.indexOf('?');
              this.urlWithParams =
                t + (-1 === n ? '?' : n < t.length - 1 ? '&' : '') + e;
            }
          } else (this.params = new pa()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : fa(this.body) ||
              ma(this.body) ||
              ga(this.body) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof pa
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || ga(this.body)
            ? null
            : ma(this.body)
            ? this.body.type || null
            : fa(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof pa
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              Array.isArray(this.body)
            ? 'application/json'
            : null;
        }
        clone(e = {}) {
          const t = e.method || this.method,
            n = e.url || this.url,
            r = e.responseType || this.responseType,
            s = void 0 !== e.body ? e.body : this.body,
            o =
              void 0 !== e.withCredentials
                ? e.withCredentials
                : this.withCredentials,
            i =
              void 0 !== e.reportProgress
                ? e.reportProgress
                : this.reportProgress;
          let a = e.headers || this.headers,
            l = e.params || this.params;
          return (
            void 0 !== e.setHeaders &&
              (a = Object.keys(e.setHeaders).reduce(
                (t, n) => t.set(n, e.setHeaders[n]),
                a
              )),
            e.setParams &&
              (l = Object.keys(e.setParams).reduce(
                (t, n) => t.set(n, e.setParams[n]),
                l
              )),
            new ya(t, n, s, {
              params: l,
              headers: a,
              reportProgress: i,
              responseType: r,
              withCredentials: o,
            })
          );
        }
      }
      var va = (function (e) {
        return (
          (e[(e.Sent = 0)] = 'Sent'),
          (e[(e.UploadProgress = 1)] = 'UploadProgress'),
          (e[(e.ResponseHeader = 2)] = 'ResponseHeader'),
          (e[(e.DownloadProgress = 3)] = 'DownloadProgress'),
          (e[(e.Response = 4)] = 'Response'),
          (e[(e.User = 5)] = 'User'),
          e
        );
      })({});
      class _a {
        constructor(e, t = 200, n = 'OK') {
          (this.headers = e.headers || new ua()),
            (this.status = void 0 !== e.status ? e.status : t),
            (this.statusText = e.statusText || n),
            (this.url = e.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class ba extends _a {
        constructor(e = {}) {
          super(e), (this.type = va.ResponseHeader);
        }
        clone(e = {}) {
          return new ba({
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class wa extends _a {
        constructor(e = {}) {
          super(e),
            (this.type = va.Response),
            (this.body = void 0 !== e.body ? e.body : null);
        }
        clone(e = {}) {
          return new wa({
            body: void 0 !== e.body ? e.body : this.body,
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class Ea extends _a {
        constructor(e) {
          super(e, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? 'Http failure during parsing for ' +
                  (e.url || '(unknown url)')
                : `Http failure response for ${e.url || '(unknown url)'}: ${
                    e.status
                  } ${e.statusText}`),
            (this.error = e.error || null);
        }
      }
      function Ta(e, t) {
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
      let ka = (() => {
        class e {
          constructor(e) {
            this.handler = e;
          }
          request(e, t, n = {}) {
            let r;
            if (e instanceof ya) r = e;
            else {
              let s = void 0;
              s = n.headers instanceof ua ? n.headers : new ua(n.headers);
              let o = void 0;
              n.params &&
                (o =
                  n.params instanceof pa
                    ? n.params
                    : new pa({ fromObject: n.params })),
                (r = new ya(e, t, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: o,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || 'json',
                  withCredentials: n.withCredentials,
                }));
            }
            const s = oa(r).pipe(z((e) => this.handler.handle(e), void 0, 1));
            if (e instanceof ya || 'events' === n.observe) return s;
            const o = s.pipe(
              ((i = (e) => e instanceof wa),
              function (e) {
                return e.lift(new ia(i, void 0));
              })
            );
            var i;
            switch (n.observe || 'body') {
              case 'body':
                switch (r.responseType) {
                  case 'arraybuffer':
                    return o.pipe(
                      x((e) => {
                        if (null !== e.body && !(e.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return e.body;
                      })
                    );
                  case 'blob':
                    return o.pipe(
                      x((e) => {
                        if (null !== e.body && !(e.body instanceof Blob))
                          throw new Error('Response is not a Blob.');
                        return e.body;
                      })
                    );
                  case 'text':
                    return o.pipe(
                      x((e) => {
                        if (null !== e.body && 'string' != typeof e.body)
                          throw new Error('Response is not a string.');
                        return e.body;
                      })
                    );
                  case 'json':
                  default:
                    return o.pipe(x((e) => e.body));
                }
              case 'response':
                return o;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`
                );
            }
          }
          delete(e, t = {}) {
            return this.request('DELETE', e, t);
          }
          get(e, t = {}) {
            return this.request('GET', e, t);
          }
          head(e, t = {}) {
            return this.request('HEAD', e, t);
          }
          jsonp(e, t) {
            return this.request('JSONP', e, {
              params: new pa().append(t, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options(e, t = {}) {
            return this.request('OPTIONS', e, t);
          }
          patch(e, t, n = {}) {
            return this.request('PATCH', e, Ta(n, t));
          }
          post(e, t, n = {}) {
            return this.request('POST', e, Ta(n, t));
          }
          put(e, t, n = {}) {
            return this.request('PUT', e, Ta(n, t));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Be(la));
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Ca {
        constructor(e, t) {
          (this.next = e), (this.interceptor = t);
        }
        handle(e) {
          return this.interceptor.intercept(e, this.next);
        }
      }
      const xa = new De('HTTP_INTERCEPTORS');
      let Sa = (() => {
        class e {
          intercept(e, t) {
            return t.handle(e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Ia = /^\)\]\}',?\n/;
      class Oa {}
      let Aa = (() => {
          class e {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Na = (() => {
          class e {
            constructor(e) {
              this.xhrFactory = e;
            }
            handle(e) {
              if ('JSONP' === e.method)
                throw new Error(
                  'Attempted to construct Jsonp request without HttpClientJsonpModule installed.'
                );
              return new v((t) => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(e.method, e.urlWithParams),
                  e.withCredentials && (n.withCredentials = !0),
                  e.headers.forEach((e, t) =>
                    n.setRequestHeader(e, t.join(','))
                  ),
                  e.headers.has('Accept') ||
                    n.setRequestHeader(
                      'Accept',
                      'application/json, text/plain, */*'
                    ),
                  !e.headers.has('Content-Type'))
                ) {
                  const t = e.detectContentTypeHeader();
                  null !== t && n.setRequestHeader('Content-Type', t);
                }
                if (e.responseType) {
                  const t = e.responseType.toLowerCase();
                  n.responseType = 'json' !== t ? t : 'text';
                }
                const r = e.serializeBody();
                let s = null;
                const o = () => {
                    if (null !== s) return s;
                    const t = 1223 === n.status ? 204 : n.status,
                      r = n.statusText || 'OK',
                      o = new ua(n.getAllResponseHeaders()),
                      i =
                        (function (e) {
                          return 'responseURL' in e && e.responseURL
                            ? e.responseURL
                            : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                            ? e.getResponseHeader('X-Request-URL')
                            : null;
                        })(n) || e.url;
                    return (
                      (s = new ba({
                        headers: o,
                        status: t,
                        statusText: r,
                        url: i,
                      })),
                      s
                    );
                  },
                  i = () => {
                    let { headers: r, status: s, statusText: i, url: a } = o(),
                      l = null;
                    204 !== s &&
                      (l = void 0 === n.response ? n.responseText : n.response),
                      0 === s && (s = l ? 200 : 0);
                    let c = s >= 200 && s < 300;
                    if ('json' === e.responseType && 'string' == typeof l) {
                      const e = l;
                      l = l.replace(Ia, '');
                      try {
                        l = '' !== l ? JSON.parse(l) : null;
                      } catch (u) {
                        (l = e), c && ((c = !1), (l = { error: u, text: l }));
                      }
                    }
                    c
                      ? (t.next(
                          new wa({
                            body: l,
                            headers: r,
                            status: s,
                            statusText: i,
                            url: a || void 0,
                          })
                        ),
                        t.complete())
                      : t.error(
                          new Ea({
                            error: l,
                            headers: r,
                            status: s,
                            statusText: i,
                            url: a || void 0,
                          })
                        );
                  },
                  a = (e) => {
                    const { url: r } = o(),
                      s = new Ea({
                        error: e,
                        status: n.status || 0,
                        statusText: n.statusText || 'Unknown Error',
                        url: r || void 0,
                      });
                    t.error(s);
                  };
                let l = !1;
                const c = (r) => {
                    l || (t.next(o()), (l = !0));
                    let s = { type: va.DownloadProgress, loaded: r.loaded };
                    r.lengthComputable && (s.total = r.total),
                      'text' === e.responseType &&
                        n.responseText &&
                        (s.partialText = n.responseText),
                      t.next(s);
                  },
                  u = (e) => {
                    let n = { type: va.UploadProgress, loaded: e.loaded };
                    e.lengthComputable && (n.total = e.total), t.next(n);
                  };
                return (
                  n.addEventListener('load', i),
                  n.addEventListener('error', a),
                  e.reportProgress &&
                    (n.addEventListener('progress', c),
                    null !== r &&
                      n.upload &&
                      n.upload.addEventListener('progress', u)),
                  n.send(r),
                  t.next({ type: va.Sent }),
                  () => {
                    n.removeEventListener('error', a),
                      n.removeEventListener('load', i),
                      e.reportProgress &&
                        (n.removeEventListener('progress', c),
                        null !== r &&
                          n.upload &&
                          n.upload.removeEventListener('progress', u)),
                      n.readyState !== n.DONE && n.abort();
                  }
                );
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Be(Oa));
            }),
            (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const Ma = new De('XSRF_COOKIE_NAME'),
        Da = new De('XSRF_HEADER_NAME');
      class Ra {}
      let Pa = (() => {
          class e {
            constructor(e, t, n) {
              (this.doc = e),
                (this.platform = t),
                (this.cookieName = n),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const e = this.doc.cookie || '';
              return (
                e !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = Oi(e, this.cookieName)),
                  (this.lastCookieString = e)),
                this.lastToken
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Be(Ci), Be(Fo), Be(Ma));
            }),
            (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Ha = (() => {
          class e {
            constructor(e, t) {
              (this.tokenService = e), (this.headerName = t);
            }
            intercept(e, t) {
              const n = e.url.toLowerCase();
              if (
                'GET' === e.method ||
                'HEAD' === e.method ||
                n.startsWith('http://') ||
                n.startsWith('https://')
              )
                return t.handle(e);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  e.headers.has(this.headerName) ||
                  (e = e.clone({ headers: e.headers.set(this.headerName, r) })),
                t.handle(e)
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Be(Ra), Be(Da));
            }),
            (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        La = (() => {
          class e {
            constructor(e, t) {
              (this.backend = e), (this.injector = t), (this.chain = null);
            }
            handle(e) {
              if (null === this.chain) {
                const e = this.injector.get(xa, []);
                this.chain = e.reduceRight(
                  (e, t) => new Ca(e, t),
                  this.backend
                );
              }
              return this.chain.handle(e);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Be(ca), Be(ys));
            }),
            (e.ɵprov = ie({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        ja = (() => {
          class e {
            static disable() {
              return {
                ngModule: e,
                providers: [{ provide: Ha, useClass: Sa }],
              };
            }
            static withOptions(t = {}) {
              return {
                ngModule: e,
                providers: [
                  t.cookieName ? { provide: Ma, useValue: t.cookieName } : [],
                  t.headerName ? { provide: Da, useValue: t.headerName } : [],
                ],
              };
            }
          }
          return (
            (e.ɵmod = ot({ type: e })),
            (e.ɵinj = ae({
              factory: function (t) {
                return new (t || e)();
              },
              providers: [
                Ha,
                { provide: xa, useExisting: Ha, multi: !0 },
                { provide: Ra, useClass: Pa },
                { provide: Ma, useValue: 'XSRF-TOKEN' },
                { provide: Da, useValue: 'X-XSRF-TOKEN' },
              ],
            })),
            e
          );
        })(),
        Fa = (() => {
          class e {}
          return (
            (e.ɵmod = ot({ type: e })),
            (e.ɵinj = ae({
              factory: function (t) {
                return new (t || e)();
              },
              providers: [
                ka,
                { provide: la, useClass: La },
                Na,
                { provide: ca, useExisting: Na },
                Aa,
                { provide: Oa, useExisting: Aa },
              ],
              imports: [
                [
                  ja.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                  }),
                ],
              ],
            })),
            e
          );
        })();
      class za extends h {
        constructor(e, t) {
          super();
        }
        schedule(e, t = 0) {
          return this;
        }
      }
      class Va extends za {
        constructor(e, t) {
          super(e, t),
            (this.scheduler = e),
            (this.work = t),
            (this.pending = !1);
        }
        schedule(e, t = 0) {
          if (this.closed) return this;
          this.state = e;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id = this.id || this.requestAsyncId(r, this.id, t)),
            this
          );
        }
        requestAsyncId(e, t, n = 0) {
          return setInterval(e.flush.bind(e, this), n);
        }
        recycleAsyncId(e, t, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return t;
          clearInterval(t);
        }
        execute(e, t) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(e, t);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(e, t) {
          let n = !1,
            r = void 0;
          try {
            this.work(e);
          } catch (s) {
            (n = !0), (r = (!!s && s) || new Error(s));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const e = this.id,
            t = this.scheduler,
            n = t.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != e && (this.id = this.recycleAsyncId(t, e, null)),
            (this.delay = null);
        }
      }
      class Za extends Va {
        constructor(e, t) {
          super(e, t), (this.scheduler = e), (this.work = t);
        }
        schedule(e, t = 0) {
          return t > 0
            ? super.schedule(e, t)
            : ((this.delay = t),
              (this.state = e),
              this.scheduler.flush(this),
              this);
        }
        execute(e, t) {
          return t > 0 || this.closed
            ? super.execute(e, t)
            : this._execute(e, t);
        }
        requestAsyncId(e, t, n = 0) {
          return (null !== n && n > 0) || (null === n && this.delay > 0)
            ? super.requestAsyncId(e, t, n)
            : e.flush(this);
        }
      }
      let Ba = (() => {
        class e {
          constructor(t, n = e.now) {
            (this.SchedulerAction = t), (this.now = n);
          }
          schedule(e, t = 0, n) {
            return new this.SchedulerAction(this, e).schedule(n, t);
          }
        }
        return (e.now = () => Date.now()), e;
      })();
      class Ua extends Ba {
        constructor(e, t = Ba.now) {
          super(e, () =>
            Ua.delegate && Ua.delegate !== this ? Ua.delegate.now() : t()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(e, t = 0, n) {
          return Ua.delegate && Ua.delegate !== this
            ? Ua.delegate.schedule(e, t, n)
            : super.schedule(e, t, n);
        }
        flush(e) {
          const { actions: t } = this;
          if (this.active) return void t.push(e);
          let n;
          this.active = !0;
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while ((e = t.shift()));
          if (((this.active = !1), n)) {
            for (; (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      class qa extends Ua {}
      const Wa = new qa(Za),
        $a = new v((e) => e.complete());
      let Ga = (() => {
        class e {
          constructor(e, t, n) {
            (this.kind = e),
              (this.value = t),
              (this.error = n),
              (this.hasValue = 'N' === e);
          }
          observe(e) {
            switch (this.kind) {
              case 'N':
                return e.next && e.next(this.value);
              case 'E':
                return e.error && e.error(this.error);
              case 'C':
                return e.complete && e.complete();
            }
          }
          do(e, t, n) {
            switch (this.kind) {
              case 'N':
                return e && e(this.value);
              case 'E':
                return t && t(this.error);
              case 'C':
                return n && n();
            }
          }
          accept(e, t, n) {
            return e && 'function' == typeof e.next
              ? this.observe(e)
              : this.do(e, t, n);
          }
          toObservable() {
            switch (this.kind) {
              case 'N':
                return oa(this.value);
              case 'E':
                return (e = this.error), new v((t) => t.error(e));
              case 'C':
                return $a;
            }
            var e;
            throw new Error('unexpected notification kind value');
          }
          static createNext(t) {
            return void 0 !== t ? new e('N', t) : e.undefinedValueNotification;
          }
          static createError(t) {
            return new e('E', void 0, t);
          }
          static createComplete() {
            return e.completeNotification;
          }
        }
        return (
          (e.completeNotification = new e('C')),
          (e.undefinedValueNotification = new e('N', void 0)),
          e
        );
      })();
      class Ja extends f {
        constructor(e, t, n = 0) {
          super(e), (this.scheduler = t), (this.delay = n);
        }
        static dispatch(e) {
          const { notification: t, destination: n } = e;
          t.observe(n), this.unsubscribe();
        }
        scheduleMessage(e) {
          this.destination.add(
            this.scheduler.schedule(
              Ja.dispatch,
              this.delay,
              new Ka(e, this.destination)
            )
          );
        }
        _next(e) {
          this.scheduleMessage(Ga.createNext(e));
        }
        _error(e) {
          this.scheduleMessage(Ga.createError(e)), this.unsubscribe();
        }
        _complete() {
          this.scheduleMessage(Ga.createComplete()), this.unsubscribe();
        }
      }
      class Ka {
        constructor(e, t) {
          (this.notification = e), (this.destination = t);
        }
      }
      class Xa extends T {
        constructor(
          e = Number.POSITIVE_INFINITY,
          t = Number.POSITIVE_INFINITY,
          n
        ) {
          super(),
            (this.scheduler = n),
            (this._events = []),
            (this._infiniteTimeWindow = !1),
            (this._bufferSize = e < 1 ? 1 : e),
            (this._windowTime = t < 1 ? 1 : t),
            t === Number.POSITIVE_INFINITY
              ? ((this._infiniteTimeWindow = !0),
                (this.next = this.nextInfiniteTimeWindow))
              : (this.next = this.nextTimeWindow);
        }
        nextInfiniteTimeWindow(e) {
          if (!this.isStopped) {
            const t = this._events;
            t.push(e), t.length > this._bufferSize && t.shift();
          }
          super.next(e);
        }
        nextTimeWindow(e) {
          this.isStopped ||
            (this._events.push(new Qa(this._getNow(), e)),
            this._trimBufferThenGetEvents()),
            super.next(e);
        }
        _subscribe(e) {
          const t = this._infiniteTimeWindow,
            n = t ? this._events : this._trimBufferThenGetEvents(),
            r = this.scheduler,
            s = n.length;
          let o;
          if (this.closed) throw new b();
          if (
            (this.isStopped || this.hasError
              ? (o = h.EMPTY)
              : (this.observers.push(e), (o = new w(this, e))),
            r && e.add((e = new Ja(e, r))),
            t)
          )
            for (let i = 0; i < s && !e.closed; i++) e.next(n[i]);
          else for (let i = 0; i < s && !e.closed; i++) e.next(n[i].value);
          return (
            this.hasError
              ? e.error(this.thrownError)
              : this.isStopped && e.complete(),
            o
          );
        }
        _getNow() {
          return (this.scheduler || Wa).now();
        }
        _trimBufferThenGetEvents() {
          const e = this._getNow(),
            t = this._bufferSize,
            n = this._windowTime,
            r = this._events,
            s = r.length;
          let o = 0;
          for (; o < s && !(e - r[o].time < n); ) o++;
          return s > t && (o = Math.max(o, s - t)), o > 0 && r.splice(0, o), r;
        }
      }
      class Qa {
        constructor(e, t) {
          (this.time = e), (this.value = t);
        }
      }
      class Ya {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new el(e, this.project));
        }
      }
      class el extends j {
        constructor(e, t) {
          super(e), (this.project = t), (this.index = 0);
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(t);
        }
        _innerSub(e) {
          const t = this.innerSubscription;
          t && t.unsubscribe();
          const n = new L(this),
            r = this.destination;
          r.add(n),
            (this.innerSubscription = F(e, n)),
            this.innerSubscription !== n && r.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: e } = this;
          (e && !e.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(e) {
          this.destination.next(e);
        }
      }
      const tl = (() => {
          const e = Element.prototype;
          return (
            e.matches ||
            e.matchesSelector ||
            e.mozMatchesSelector ||
            e.msMatchesSelector ||
            e.oMatchesSelector ||
            e.webkitMatchesSelector
          );
        })(),
        nl = {
          schedule(e, t) {
            const n = setTimeout(e, t);
            return () => clearTimeout(n);
          },
          scheduleBeforeRender(e) {
            if ('undefined' == typeof window) return nl.schedule(e, 0);
            if (void 0 === window.requestAnimationFrame)
              return nl.schedule(e, 16);
            const t = window.requestAnimationFrame(e);
            return () => window.cancelAnimationFrame(t);
          },
        };
      function rl(e, t, n) {
        let r = n;
        return (
          (function (e) {
            return !!e && e.nodeType === Node.ELEMENT_NODE;
          })(e) &&
            t.some(
              (t, n) =>
                !(
                  '*' === t ||
                  !(function (e, t) {
                    return tl.call(e, t);
                  })(e, t) ||
                  ((r = n), 0)
                )
            ),
          r
        );
      }
      class sl {
        constructor(e, t) {
          this.componentFactory = t.get(Ns).resolveComponentFactory(e);
        }
        create(e) {
          return new ol(this.componentFactory, e);
        }
      }
      class ol {
        constructor(e, t) {
          (this.componentFactory = e),
            (this.injector = t),
            (this.eventEmitters = new Xa(1)),
            (this.events = this.eventEmitters.pipe(
              (function e(t, n) {
                return 'function' == typeof n
                  ? (r) =>
                      r.pipe(
                        e((e, r) => H(t(e, r)).pipe(x((t, s) => n(e, t, r, s))))
                      )
                  : (e) => e.lift(new Ya(t));
              })((e) => U(...e))
            )),
            (this.componentRef = null),
            (this.inputChanges = null),
            (this.implementsOnChanges = !1),
            (this.scheduledChangeDetectionFn = null),
            (this.scheduledDestroyFn = null),
            (this.initialInputValues = new Map()),
            (this.unchangedInputs = new Set()),
            (this.ngZone = this.injector.get(ei)),
            (this.elementZone =
              'undefined' == typeof Zone
                ? null
                : this.ngZone.run(() => Zone.current));
        }
        connect(e) {
          this.runInZone(() => {
            if (null !== this.scheduledDestroyFn)
              return (
                this.scheduledDestroyFn(), void (this.scheduledDestroyFn = null)
              );
            null === this.componentRef && this.initializeComponent(e);
          });
        }
        disconnect() {
          this.runInZone(() => {
            null !== this.componentRef &&
              null === this.scheduledDestroyFn &&
              (this.scheduledDestroyFn = nl.schedule(() => {
                null !== this.componentRef &&
                  (this.componentRef.destroy(), (this.componentRef = null));
              }, 10));
          });
        }
        getInputValue(e) {
          return this.runInZone(() =>
            null === this.componentRef
              ? this.initialInputValues.get(e)
              : this.componentRef.instance[e]
          );
        }
        setInputValue(e, t) {
          this.runInZone(() => {
            var n, r;
            null !== this.componentRef
              ? (((n = t) !== (r = this.getInputValue(e)) &&
                  (n == n || r == r)) ||
                  (void 0 === t && this.unchangedInputs.has(e))) &&
                (this.recordInputChange(e, t),
                (this.componentRef.instance[e] = t),
                this.scheduleDetectChanges())
              : this.initialInputValues.set(e, t);
          });
        }
        initializeComponent(e) {
          const t = ys.create({ providers: [], parent: this.injector }),
            n = (function (e, t) {
              const n = e.childNodes,
                r = t.map(() => []);
              let s = -1;
              t.some((e, t) => '*' === e && ((s = t), !0));
              for (let o = 0, i = n.length; o < i; ++o) {
                const e = n[o],
                  i = rl(e, t, s);
                -1 !== i && r[i].push(e);
              }
              return r;
            })(e, this.componentFactory.ngContentSelectors);
          (this.componentRef = this.componentFactory.create(t, n, e)),
            (this.implementsOnChanges =
              'function' == typeof this.componentRef.instance.ngOnChanges),
            this.initializeInputs(),
            this.initializeOutputs(this.componentRef),
            this.detectChanges(),
            this.injector.get(vi).attachView(this.componentRef.hostView);
        }
        initializeInputs() {
          this.componentFactory.inputs.forEach(({ propName: e }) => {
            this.implementsOnChanges && this.unchangedInputs.add(e),
              this.initialInputValues.has(e) &&
                this.setInputValue(e, this.initialInputValues.get(e));
          }),
            this.initialInputValues.clear();
        }
        initializeOutputs(e) {
          const t = this.componentFactory.outputs.map(
            ({ propName: t, templateName: n }) =>
              e.instance[t].pipe(x((e) => ({ name: n, value: e })))
          );
          this.eventEmitters.next(t);
        }
        callNgOnChanges(e) {
          if (!this.implementsOnChanges || null === this.inputChanges) return;
          const t = this.inputChanges;
          (this.inputChanges = null), e.instance.ngOnChanges(t);
        }
        scheduleDetectChanges() {
          this.scheduledChangeDetectionFn ||
            (this.scheduledChangeDetectionFn = nl.scheduleBeforeRender(() => {
              (this.scheduledChangeDetectionFn = null), this.detectChanges();
            }));
        }
        recordInputChange(e, t) {
          if (null !== this.componentRef && !this.implementsOnChanges) return;
          null === this.inputChanges && (this.inputChanges = {});
          const n = this.inputChanges[e];
          if (n) return void (n.currentValue = t);
          const r = this.unchangedInputs.has(e);
          this.unchangedInputs.delete(e);
          const s = r ? void 0 : this.getInputValue(e);
          this.inputChanges[e] = new gt(s, t, r);
        }
        detectChanges() {
          null !== this.componentRef &&
            (this.callNgOnChanges(this.componentRef),
            this.componentRef.changeDetectorRef.detectChanges());
        }
        runInZone(e) {
          return this.elementZone && Zone.current !== this.elementZone
            ? this.ngZone.run(e)
            : e();
        }
      }
      class il extends HTMLElement {
        constructor() {
          super(...arguments), (this.ngElementEventsSubscription = null);
        }
      }
      function al(e, t) {
        e.forEach(({ propName: e }) => {
          Object.defineProperty(t, e, {
            get() {
              return this.ngElementStrategy.getInputValue(e);
            },
            set(t) {
              this.ngElementStrategy.setInputValue(e, t);
            },
            configurable: !0,
            enumerable: !0,
          });
        });
      }
      let ll = (() => {
        class e {}
        return (
          (e.ɵmod = ot({ type: e })),
          (e.ɵinj = ae({
            factory: function (t) {
              return new (t || e)();
            },
            imports: [[Ai]],
          })),
          e
        );
      })();
      function cl() {}
      class ul {
        constructor(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        call(e, t) {
          return t.subscribe(
            new hl(e, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class hl extends f {
        constructor(e, t, n, s) {
          super(e),
            (this._tapNext = cl),
            (this._tapError = cl),
            (this._tapComplete = cl),
            (this._tapError = n || cl),
            (this._tapComplete = s || cl),
            r(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || cl),
                (this._tapError = t.error || cl),
                (this._tapComplete = t.complete || cl));
        }
        _next(e) {
          try {
            this._tapNext.call(this._context, e);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
        _error(e) {
          try {
            this._tapError.call(this._context, e);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.error(e);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (e) {
            return void this.destination.error(e);
          }
          return this.destination.complete();
        }
      }
      var dl,
        pl = [];
      !(function (e) {
        (e.BORDER_BOX = 'border-box'),
          (e.CONTENT_BOX = 'content-box'),
          (e.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box');
      })(dl || (dl = {}));
      var fl,
        ml = function (e) {
          return Object.freeze(e);
        },
        gl = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), ml(this);
        },
        yl = (function () {
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
              ml(this)
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
        vl = function (e) {
          return e instanceof SVGElement && 'getBBox' in e;
        },
        _l = function (e) {
          if (vl(e)) {
            var t = e.getBBox();
            return !t.width && !t.height;
          }
          return !(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        },
        bl = function (e) {
          var t, n;
          if (e instanceof Element) return !0;
          var r =
            null ===
              (n =
                null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
            void 0 === n
              ? void 0
              : n.defaultView;
          return !!(r && e instanceof r.Element);
        },
        wl = 'undefined' != typeof window ? window : {},
        El = new WeakMap(),
        Tl = /auto|scroll/,
        kl = /^tb|vertical/,
        Cl = /msie|trident/i.test(wl.navigator && wl.navigator.userAgent),
        xl = function (e) {
          return parseFloat(e || '0');
        },
        Sl = function (e, t, n) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new gl((n ? t : e) || 0, (n ? e : t) || 0)
          );
        },
        Il = ml({
          devicePixelContentBoxSize: Sl(),
          borderBoxSize: Sl(),
          contentBoxSize: Sl(),
          contentRect: new yl(0, 0, 0, 0),
        }),
        Ol = function (e, t) {
          if ((void 0 === t && (t = !1), El.has(e) && !t)) return El.get(e);
          if (_l(e)) return El.set(e, Il), Il;
          var n = getComputedStyle(e),
            r = vl(e) && e.ownerSVGElement && e.getBBox(),
            s = !Cl && 'border-box' === n.boxSizing,
            o = kl.test(n.writingMode || ''),
            i = !r && Tl.test(n.overflowY || ''),
            a = !r && Tl.test(n.overflowX || ''),
            l = r ? 0 : xl(n.paddingTop),
            c = r ? 0 : xl(n.paddingRight),
            u = r ? 0 : xl(n.paddingBottom),
            h = r ? 0 : xl(n.paddingLeft),
            d = r ? 0 : xl(n.borderTopWidth),
            p = r ? 0 : xl(n.borderRightWidth),
            f = r ? 0 : xl(n.borderBottomWidth),
            m = h + c,
            g = l + u,
            y = (r ? 0 : xl(n.borderLeftWidth)) + p,
            v = d + f,
            _ = a ? e.offsetHeight - v - e.clientHeight : 0,
            b = i ? e.offsetWidth - y - e.clientWidth : 0,
            w = s ? m + y : 0,
            E = s ? g + v : 0,
            T = r ? r.width : xl(n.width) - w - b,
            k = r ? r.height : xl(n.height) - E - _,
            C = T + m + b + y,
            x = k + g + _ + v,
            S = ml({
              devicePixelContentBoxSize: Sl(
                Math.round(T * devicePixelRatio),
                Math.round(k * devicePixelRatio),
                o
              ),
              borderBoxSize: Sl(C, x, o),
              contentBoxSize: Sl(T, k, o),
              contentRect: new yl(h, l, T, k),
            });
          return El.set(e, S), S;
        },
        Al = function (e, t, n) {
          var r = Ol(e, n),
            s = r.borderBoxSize,
            o = r.contentBoxSize,
            i = r.devicePixelContentBoxSize;
          switch (t) {
            case dl.DEVICE_PIXEL_CONTENT_BOX:
              return i;
            case dl.BORDER_BOX:
              return s;
            default:
              return o;
          }
        },
        Nl = function (e) {
          var t = Ol(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = ml([t.borderBoxSize])),
            (this.contentBoxSize = ml([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = ml([
              t.devicePixelContentBoxSize,
            ]));
        },
        Ml = function (e) {
          if (_l(e)) return 1 / 0;
          for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
          return t;
        },
        Dl = function () {
          var e = 1 / 0,
            t = [];
          pl.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
              var r = [];
              n.activeTargets.forEach(function (t) {
                var n = new Nl(t.target),
                  s = Ml(t.target);
                r.push(n),
                  (t.lastReportedSize = Al(t.target, t.observedBox)),
                  s < e && (e = s);
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
        Rl = function (e) {
          pl.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (n) {
                n.isActive() &&
                  (Ml(n.target) > e
                    ? t.activeTargets.push(n)
                    : t.skippedTargets.push(n));
              });
          });
        },
        Pl = [],
        Hl = 0,
        Ll = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        jl = [
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
        Fl = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        zl = !1,
        Vl = new ((function () {
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
              if ((void 0 === e && (e = 250), !zl)) {
                zl = !0;
                var n,
                  r = Fl(e);
                (n = function () {
                  var n = !1;
                  try {
                    n = (function () {
                      var e,
                        t = 0;
                      for (
                        Rl(t);
                        pl.some(function (e) {
                          return e.activeTargets.length > 0;
                        });

                      )
                        (t = Dl()), Rl(t);
                      return (
                        pl.some(function (e) {
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
                    if (((zl = !1), (e = r - Fl()), !Hl)) return;
                    n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                }),
                  (function (e) {
                    if (!fl) {
                      var t = 0,
                        r = document.createTextNode('');
                      new MutationObserver(function () {
                        return Pl.splice(0).forEach(function (e) {
                          return e();
                        });
                      }).observe(r, { characterData: !0 }),
                        (fl = function () {
                          r.textContent = '' + (t ? t-- : t++);
                        });
                    }
                    Pl.push(function () {
                      requestAnimationFrame(n);
                    }),
                      fl();
                  })();
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, Ll);
                };
              document.body ? t() : wl.addEventListener('DOMContentLoaded', t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                jl.forEach(function (t) {
                  return wl.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                jl.forEach(function (t) {
                  return wl.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        Zl = function (e) {
          !Hl && e > 0 && Vl.start(), !(Hl += e) && Vl.stop();
        },
        Bl = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || dl.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = Al(this.target, this.observedBox, !0);
              return (
                vl((e = this.target)) ||
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
        Ul = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        ql = new WeakMap(),
        Wl = function (e, t) {
          for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
          return -1;
        },
        $l = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var n = new Ul(e, t);
              ql.set(e, n);
            }),
            (e.observe = function (e, t, n) {
              var r = ql.get(e),
                s = 0 === r.observationTargets.length;
              Wl(r.observationTargets, t) < 0 &&
                (s && pl.push(r),
                r.observationTargets.push(new Bl(t, n && n.box)),
                Zl(1),
                Vl.schedule());
            }),
            (e.unobserve = function (e, t) {
              var n = ql.get(e),
                r = Wl(n.observationTargets, t);
              r >= 0 &&
                (1 === n.observationTargets.length &&
                  pl.splice(pl.indexOf(n), 1),
                n.observationTargets.splice(r, 1),
                Zl(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                n = ql.get(e);
              n.observationTargets.slice().forEach(function (n) {
                return t.unobserve(e, n.target);
              }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
          );
        })(),
        Gl = (function () {
          function e(e) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
              );
            if ('function' != typeof e)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
              );
            $l.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!bl(e))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              $l.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (!bl(e))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                );
              $l.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              $l.disconnect(this);
            }),
            (e.toString = function () {
              return 'function ResizeObserver () { [polyfill code] }';
            }),
            e
          );
        })(),
        Jl = (function (e) {
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
        Kl = (function (e) {
          return (
            (e.ConversationResult = 'conversationResult'),
            (e.PersonaResponse = 'personaResponse'),
            (e.RecognizeResults = 'recognizeResults'),
            (e.State = 'state'),
            e
          );
        })({});
      class Xl {
        constructor(e) {
          (this.session = e),
            console.log('>> add message listener'),
            this.session.addEventListener('message', (e) =>
              this.onWebsocketMessage(e)
            );
        }
        sendVideoBounds(e, t) {
          this.sendWebsocketMessage({
            category: 'webrtc',
            kind: 'event',
            name: Jl.VideoBounds,
            body: { width: e, height: t },
          });
        }
        onWebsocketMessage(e) {
          const t = JSON.parse(e.data),
            n = t.body;
          switch (t.name) {
            case Jl.Established:
              this.onEstablished(n);
              break;
            case Jl.Offer:
              this.onSdpOffer(n);
              break;
            case Jl.Accepted:
              this.onAccepted(n);
              break;
            case Jl.Answer:
              this.onSdpAnswer(n);
              break;
            case Jl.Connected:
              this.onConnected(n);
              break;
            case Jl.Ice:
              this.onRemoteIceCandidate(n);
          }
        }
        onEstablished(e) {
          console.log('onEstablished', { event: e });
          const t = e.iceServers || [],
            n = t.includes((e) =>
              e.urls.includes((e) => 0 === e.indexOf('turn:'))
            );
          this.connect({
            iceServers: t,
            iceTransportPolicy: n ? 'relay' : 'all',
          });
        }
        onSdpOffer(e) {
          console.log('onSdpOffer', { event: e });
          const t = new RTCSessionDescription(e);
          this.rtcPeerConnection
            .setRemoteDescription(t)
            .then(() => this.rtcPeerConnection.createAnswer())
            .then((e) =>
              this.sendWebsocketMessage({
                category: 'webrtc',
                kind: 'event',
                name: Jl.Answer,
                body: e,
              })
            );
        }
        onAccepted(e) {
          console.log('accepted, session_id = ' + e.sessionId),
            this.sendVideoBounds(200, 100);
        }
        onSdpAnswer(e) {
          console.log('onSdpAnswer', { event: e });
          const t = new RTCSessionDescription(e);
          this.rtcPeerConnection.setRemoteDescription(t);
        }
        onConnected(e) {
          console.log('onConnected', { event: e });
        }
        onRemoteIceCandidate(e) {
          if (
            (console.log('onRemoteIceCandidate', { event: e }), e.candidate)
          ) {
            const t = new RTCIceCandidate(e);
            this.rtcPeerConnection.addIceCandidate(t);
          }
        }
        connect(e) {
          navigator.mediaDevices
            .getUserMedia({ audio: !0, video: !0 })
            .then((t) => {
              (this.localStream = t),
                (this.rtcPeerConnection = new RTCPeerConnection(e)),
                this.rtcPeerConnection.addEventListener('icecandidate', (e) =>
                  this.onLocalIceCandidate(e)
                ),
                this.rtcPeerConnection.addEventListener('track', (e) =>
                  this.onRemoteTrackAdded(e)
                ),
                this.localStream.getTracks().forEach((e) => {
                  this.rtcPeerConnection.addTrack(e, this.localStream);
                }),
                this.sendSdpOffer();
            });
        }
        onLocalIceCandidate(e) {
          console.log('onIceCandidate', { event: e }),
            e.candidate &&
              this.sendWebsocketMessage({
                category: 'webrtc',
                kind: 'event',
                name: Jl.Ice,
                body: e.candidate,
              });
        }
        onRemoteTrackAdded(e) {
          console.log('onRemoteTrackAdded', { event: e }),
            (this.remoteStream = e.streams[0]);
        }
        sendSdpOffer() {
          this.rtcPeerConnection
            .createOffer({
              voiceActivityDetection: !1,
              offerToReceiveAudio: !0,
              offerToReceiveVideo: !0,
            })
            .then((e) => this.rtcPeerConnection.setLocalDescription(e))
            .then(() =>
              this.sendWebsocketMessage({
                category: 'webrtc',
                kind: 'event',
                name: Jl.Offer,
                body: this.rtcPeerConnection.localDescription.toJSON(),
              })
            );
        }
        sendWebsocketMessage(e) {
          this.session.send(JSON.stringify(e));
        }
      }
      class Ql extends EventTarget {
        constructor(e) {
          super(),
            (this.isRuntimeHost = !!window.SmIsUnderRuntimeHost),
            this.isRuntimeHost
              ? this.configureRuntimeHost()
              : this.configureWebSocket(e);
        }
        configureRuntimeHost() {
          (window.SmRuntimeHostReceiveMessage = (e) => {
            const t = new MessageEvent('message', { data: e });
            this.dispatchEvent(t);
          }),
            (this.send = (e) => window.SmRuntimeHostSendMessage(e)),
            window.setTimeout(() => {
              console.log('>> send fake connected message');
              const e = JSON.stringify({
                  category: 'webrtc',
                  kind: 'event',
                  name: Jl.Connected,
                  body: {},
                }),
                t = new MessageEvent('message', { data: e });
              this.dispatchEvent(t);
            }, 3e3);
        }
        configureWebSocket(e) {
          (this.ws = new WebSocket(`${e.url}?access_token=${e.jwt}`)),
            (this.addEventListener = (e, t) => this.ws.addEventListener(e, t)),
            (this.removeEventListener = (e, t) =>
              this.ws.removeEventListener(e, t)),
            (this.send = (e) => this.ws.send(e)),
            (this.close = (e, t) => this.ws.close(e, t));
        }
      }
      class Yl {
        constructor(e) {
          this.session = e;
        }
      }
      class ec {
        constructor(e) {
          this.session = e;
        }
        startRecognize() {
          this.websocketSend('startRecognize', {});
        }
        stopRecognize() {
          this.websocketSend('stopRecognize', {});
        }
        websocketSend(e, t) {
          this.session.send(
            JSON.stringify({
              category: 'scene',
              kind: 'request',
              name: e,
              body: t,
            })
          );
        }
      }
      let tc = (() => {
        class e extends EventTarget {
          constructor() {
            super();
          }
          connect(e) {
            console.log('sm.connect', { config: e }),
              (this.session = new Ql(e)),
              this.session.addEventListener('message', (e) =>
                this.emitMessageAsEvent(e)
              ),
              (this.webrtc = new Xl(this.session)),
              (this.scene = new ec(this.session)),
              (this.persona = new Yl(this.session));
          }
          emitMessageAsEvent(e) {
            const t = JSON.parse(e.data),
              { name: n, body: r } = t,
              s = new CustomEvent(n, { detail: r });
            this.dispatchEvent(s);
          }
          on(e, t) {
            console.log('add event listener for', e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = ie({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      const nc = ['video'];
      let rc = (() => {
          class e {
            constructor(e, t, n) {
              (this.sm = e),
                (this.http = t),
                (this.hostRef = n),
                (this.autoconnect = !1),
                (this.debug = 'true'),
                (this.connectEvent = new wo()),
                (this.disconnectEvent = new wo()),
                (this.speechmarkerEvent = new wo()),
                (this.conversationResultEvent = new wo()),
                (this.personaResponseEvent = new wo()),
                this.log('widget: constructor', this.tokenserver),
                (this.hostRef.nativeElement.disconnect = () =>
                  this.disconnect()),
                (this.hostRef.nativeElement.setMicrophoneEnabled = (e) =>
                  this.setMicrophoneEnabled(e)),
                this.sm.addEventListener(Jl.Connected, (e) => {
                  this.onConnect(), this.connectEvent.emit(e.detail);
                }),
                this.sm.addEventListener(Jl.Close, (e) =>
                  this.disconnectEvent.emit(e.detail)
                ),
                this.sm.addEventListener(Kl.ConversationResult, (e) =>
                  this.conversationResultEvent.emit(e.detail)
                ),
                this.sm.addEventListener(Kl.PersonaResponse, (e) =>
                  this.personaResponseEvent.emit(e.detail)
                );
            }
            ngOnChanges(e) {
              this.log({ changes: e }),
                this.tokenserver && this.autoconnect && this.connect();
            }
            ngAfterViewInit() {
              this.initHostResizeWatcher();
            }
            ngOnDestroy() {
              this.resizeObserver.unobserve(this.hostRef.nativeElement);
            }
            connect() {
              var e;
              this.http
                .get(this.tokenserver)
                .pipe(
                  ((e = (e) => this.sm.connect(e)),
                  function (t) {
                    return t.lift(new ul(e, void 0, void 0));
                  })
                )
                .subscribe();
            }
            disconnect() {
              this.sm.session.close();
            }
            setMicrophoneEnabled(e) {
              e
                ? this.sm.scene.startRecognize()
                : this.sm.scene.stopRecognize();
            }
            initHostResizeWatcher() {
              (this.resizeObserver = new Gl(() => this.resizeVideoStream())),
                this.resizeObserver.observe(this.hostRef.nativeElement);
            }
            resizeVideoStream() {
              if (!this.sm.webrtc) return;
              const e = this.hostRef.nativeElement;
              this.sm.webrtc.sendVideoBounds(e.clientWidth, e.clientHeight);
            }
            onConnect() {
              this.resizeVideoStream();
            }
            log(...e) {
              'true' === this.debug && console.log(...e);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(ks(tc), ks(ka), ks(Ms));
            }),
            (e.ɵcmp =
              ((t = {
                type: e,
                selectors: [['app-widget']],
                viewQuery: function (e, t) {
                  var n, r, s, o, i, a;
                  1 & e &&
                    ((o = nc),
                    (i = !0),
                    (function (e, t, n, r, s, o) {
                      e.firstCreatePass &&
                        (function (e, t, n) {
                          null === e.queries && (e.queries = new So()),
                            e.queries.track(new Io(t, -1));
                        })(e, new xo(n, r, !1, s)),
                        (function (e, t) {
                          const n = new To();
                          fr(e, t, n, n.destroy),
                            null === t[19] && (t[19] = new Co()),
                            t[19].queries.push(new ko(n));
                        })(e, t);
                    })(jt(), Lt(), o, i, a)),
                    2 & e &&
                      (function (e) {
                        const t = Lt(),
                          n = jt(),
                          r = Wt();
                        $t(r + 1);
                        const s = Mo(n, r);
                        if (e.dirty && At(t) === s.metadata.isStatic) {
                          if (null === s.matches) e.reset([]);
                          else {
                            const o = s.crossesNgTemplate
                              ? (function e(t, n, r, s) {
                                  const o = t.queries.getByIndex(r),
                                    i = o.matches;
                                  if (null !== i) {
                                    const a = No(t, n, o, r);
                                    for (let t = 0; t < i.length; t += 2) {
                                      const r = i[t];
                                      if (r > 0) s.push(a[t / 2]);
                                      else {
                                        const o = i[t + 1],
                                          a = n[-r];
                                        for (let t = 10; t < a.length; t++) {
                                          const n = a[t];
                                          n[17] === n[3] && e(n[1], n, o, s);
                                        }
                                        if (null !== a[9]) {
                                          const t = a[9];
                                          for (let n = 0; n < t.length; n++) {
                                            const r = t[n];
                                            e(r[1], r, o, s);
                                          }
                                        }
                                      }
                                    }
                                  }
                                  return s;
                                })(n, t, r, [])
                              : No(n, t, s, r);
                            e.reset(o), e.notifyOnChanges();
                          }
                          return !0;
                        }
                        return !1;
                      })(
                        ((r = Lt()),
                        (s = Wt()),
                        (n = r[19].queries[s].queryList))
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
                features: [yt],
                decls: 2,
                vars: 1,
                consts: [
                  ['autoplay', '', 'playsinline', '', 3, 'srcObject'],
                  ['video', ''],
                ],
                template: function (e, t) {
                  1 & e &&
                    (Ss(0, 'video', 0, 1),
                    (function () {
                      let e = Ft();
                      Vt()
                        ? (Pt.lFrame.isParent = !1)
                        : ((e = e.parent), zt(e, !1));
                      const t = e;
                      Pt.lFrame.elementDepthCount--;
                      const n = jt();
                      n.firstCreatePass &&
                        (nn(n, e), dt(e) && n.queries.elementEnd(e)),
                        null != t.classesWithoutHost &&
                          (function (e) {
                            return 0 != (16 & e.flags);
                          })(t) &&
                          xs(n, t, Lt(), t.classesWithoutHost, !0),
                        null != t.stylesWithoutHost &&
                          (function (e) {
                            return 0 != (32 & e.flags);
                          })(t) &&
                          xs(n, t, Lt(), t.stylesWithoutHost, !1);
                    })()),
                    2 & e &&
                      Cs(
                        'srcObject',
                        null == t.sm.webrtc ? null : t.sm.webrtc.remoteStream
                      );
                },
                styles: [
                  '[_nghost-%COMP%]{display:block;border:2px solid grey;width:400px;height:350px}[_nghost-%COMP%]   video[_ngcontent-%COMP%]{width:100%;height:100%}',
                ],
              }),
              Q(() => {
                const e = {},
                  n = {
                    type: t.type,
                    providersResolver: null,
                    decls: t.decls,
                    vars: t.vars,
                    factory: null,
                    template: t.template || null,
                    consts: t.consts || null,
                    ngContentSelectors: t.ngContentSelectors,
                    hostBindings: t.hostBindings || null,
                    hostVars: t.hostVars || 0,
                    hostAttrs: t.hostAttrs || null,
                    contentQueries: t.contentQueries || null,
                    declaredInputs: e,
                    inputs: null,
                    outputs: null,
                    exportAs: t.exportAs || null,
                    onPush: t.changeDetection === Xe.OnPush,
                    directiveDefs: null,
                    pipeDefs: null,
                    selectors: t.selectors || et,
                    viewQuery: t.viewQuery || null,
                    features: t.features || null,
                    data: t.data || {},
                    encapsulation: t.encapsulation || Qe.Emulated,
                    id: 'c',
                    styles: t.styles || et,
                    _: null,
                    setInput: null,
                    schemas: t.schemas || null,
                    tView: null,
                  },
                  r = t.directives,
                  s = t.features,
                  o = t.pipes;
                return (
                  (n.id += tt++),
                  (n.inputs = it(t.inputs, e)),
                  (n.outputs = it(t.outputs)),
                  s && s.forEach((e) => e(n)),
                  (n.directiveDefs = r
                    ? () => ('function' == typeof r ? r() : r).map(nt)
                    : null),
                  (n.pipeDefs = o
                    ? () => ('function' == typeof o ? o() : o).map(rt)
                    : null),
                  n
                );
              }))),
            e
          );
          var t;
        })(),
        sc = (() => {
          class e {
            constructor(e) {
              const t = (function (e, t) {
                const n = (function (e, t) {
                    return t.get(Ns).resolveComponentFactory(e).inputs;
                  })(e, t.injector),
                  r = t.strategyFactory || new sl(e, t.injector),
                  s = (function (e) {
                    const t = {};
                    return (
                      e.forEach(({ propName: e, templateName: n }) => {
                        var r;
                        t[
                          ((r = n),
                          r.replace(/[A-Z]/g, (e) => '-' + e.toLowerCase()))
                        ] = e;
                      }),
                      t
                    );
                  })(n);
                class o extends il {
                  constructor(e) {
                    super(), (this.injector = e);
                  }
                  get ngElementStrategy() {
                    if (!this._ngElementStrategy) {
                      const e = (this._ngElementStrategy = r.create(
                          this.injector || t.injector
                        )),
                        s = n
                          .filter(({ propName: e }) => this.hasOwnProperty(e))
                          .map(({ propName: e }) => [e, this[e]]);
                      this instanceof o
                        ? s.forEach(([e]) => delete this[e])
                        : al(n, this),
                        s.forEach(([t, n]) => e.setInputValue(t, n));
                    }
                    return this._ngElementStrategy;
                  }
                  attributeChangedCallback(e, t, n, r) {
                    this.ngElementStrategy.setInputValue(s[e], n);
                  }
                  connectedCallback() {
                    let e = !1;
                    this.ngElementStrategy.events &&
                      (this.subscribeToEvents(), (e = !0)),
                      this.ngElementStrategy.connect(this),
                      e || this.subscribeToEvents();
                  }
                  disconnectedCallback() {
                    this._ngElementStrategy &&
                      this._ngElementStrategy.disconnect(),
                      this.ngElementEventsSubscription &&
                        (this.ngElementEventsSubscription.unsubscribe(),
                        (this.ngElementEventsSubscription = null));
                  }
                  subscribeToEvents() {
                    this.ngElementEventsSubscription =
                      this.ngElementStrategy.events.subscribe((e) => {
                        const t = (function (e, t, n) {
                          if ('function' != typeof CustomEvent) {
                            const r = e.createEvent('CustomEvent');
                            return r.initCustomEvent(t, !1, !1, n), r;
                          }
                          return new CustomEvent(t, {
                            bubbles: !1,
                            cancelable: !1,
                            detail: n,
                          });
                        })(this.ownerDocument, e.name, e.value);
                        this.dispatchEvent(t);
                      });
                  }
                }
                return (
                  (o.observedAttributes = Object.keys(s)),
                  Object.defineProperty(o.prototype, 'ngElementStrategy', {
                    enumerable: !0,
                  }),
                  al(n, o.prototype),
                  o
                );
              })(rc, { injector: e });
              customElements.define('sm-widget', t);
            }
            ngDoBootstrap() {}
          }
          return (
            (e.ɵmod = ot({ type: e })),
            (e.ɵinj = ae({
              factory: function (t) {
                return new (t || e)(Be(ys));
              },
              imports: [[sa, Fa, ll]],
            })),
            e
          );
        })();
      na()
        .bootstrapModule(sc)
        .then((e) => {
          window.ngRef && window.ngRef.destroy(), (window.ngRef = e);
        })
        .catch((e) => console.error(e));
    },
  },
  [[0, 0]],
]);
