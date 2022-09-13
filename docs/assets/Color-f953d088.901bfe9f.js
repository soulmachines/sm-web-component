import {
  P as _,
  N as F,
  a1 as gr,
  Z as j,
  a3 as g,
  V as A,
  W as rr,
  H as Dr,
} from './iframe.1f3a3e8b.js';
import {
  s as P,
  W as Tr,
  T as Ur,
  H as Jr,
  I as Qr,
  J as Yr,
  a as Zr,
  K as re,
  L as pr,
  M as ee,
} from './index.ef5de913.js';
var q, V;
function S(a, r, e) {
  return (
    r in a
      ? Object.defineProperty(a, r, { value: e, enumerable: !0, configurable: !0, writable: !0 })
      : (a[r] = e),
    a
  );
}
function cr(a) {
  return (
    (cr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    cr(a)
  );
}
function N(a, r) {
  return oe(a) || te(a, r) || ne(a, r) || ae();
}
function ae() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ne(a, r) {
  if (!!a) {
    if (typeof a == 'string') return wr(a, r);
    var e = Object.prototype.toString.call(a).slice(8, -1);
    if ((e === 'Object' && a.constructor && (e = a.constructor.name), e === 'Map' || e === 'Set'))
      return Array.from(a);
    if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return wr(a, r);
  }
}
function wr(a, r) {
  (r == null || r > a.length) && (r = a.length);
  for (var e = 0, n = new Array(r); e < r; e++) n[e] = a[e];
  return n;
}
function te(a, r) {
  var e = a == null ? null : (typeof Symbol < 'u' && a[Symbol.iterator]) || a['@@iterator'];
  if (e != null) {
    var n = [],
      t = !0,
      o = !1,
      i,
      l;
    try {
      for (
        e = e.call(a);
        !(t = (i = e.next()).done) && (n.push(i.value), !(r && n.length === r));
        t = !0
      );
    } catch (u) {
      (o = !0), (l = u);
    } finally {
      try {
        !t && e.return != null && e.return();
      } finally {
        if (o) throw l;
      }
    }
    return n;
  }
}
function oe(a) {
  if (Array.isArray(a)) return a;
}
function z() {
  return (z =
    Object.assign ||
    function (a) {
      for (var r = 1; r < arguments.length; r++) {
        var e = arguments[r];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (a[n] = e[n]);
      }
      return a;
    }).apply(this, arguments);
}
function br(a, r) {
  if (a == null) return {};
  var e,
    n,
    t = {},
    o = Object.keys(a);
  for (n = 0; n < o.length; n++) r.indexOf((e = o[n])) >= 0 || (t[e] = a[e]);
  return t;
}
function sr(a) {
  var r = F(a),
    e = F(function (n) {
      r.current && r.current(n);
    });
  return (r.current = a), e.current;
}
var B = function (r, e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = 1), r > n ? n : r < e ? e : r;
  },
  G = function (r) {
    return 'touches' in r;
  },
  vr = function (r) {
    return (r && r.ownerDocument.defaultView) || self;
  },
  xr = function (r, e, n) {
    var t = r.getBoundingClientRect(),
      o = G(e)
        ? (function (i, l) {
            for (var u = 0; u < i.length; u++) if (i[u].identifier === l) return i[u];
            return i[0];
          })(e.touches, n)
        : e;
    return {
      left: B((o.pageX - (t.left + vr(r).pageXOffset)) / t.width),
      top: B((o.pageY - (t.top + vr(r).pageYOffset)) / t.height),
    };
  },
  kr = function (r) {
    !G(r) && r.preventDefault();
  },
  mr = _.memo(function (a) {
    var r = a.onMove,
      e = a.onKey,
      n = br(a, ['onMove', 'onKey']),
      t = F(null),
      o = sr(r),
      i = sr(e),
      l = F(null),
      u = F(!1),
      c = gr(
        function () {
          var x = function (h) {
              kr(h),
                (G(h) ? h.touches.length > 0 : h.buttons > 0) && t.current
                  ? o(xr(t.current, h, l.current))
                  : O(!1);
            },
            M = function () {
              return O(!1);
            };
          function O(m) {
            var h = u.current,
              d = vr(t.current),
              p = m ? d.addEventListener : d.removeEventListener;
            p(h ? 'touchmove' : 'mousemove', x), p(h ? 'touchend' : 'mouseup', M);
          }
          return [
            function (m) {
              var h = m.nativeEvent,
                d = t.current;
              if (
                d &&
                (kr(h),
                !(function (k, C) {
                  return C && !G(k);
                })(h, u.current) && d)
              ) {
                if (G(h)) {
                  u.current = !0;
                  var p = h.changedTouches || [];
                  p.length && (l.current = p[0].identifier);
                }
                d.focus(), o(xr(d, h, l.current)), O(!0);
              }
            },
            function (m) {
              var h = m.which || m.keyCode;
              h < 37 ||
                h > 40 ||
                (m.preventDefault(),
                i({
                  left: h === 39 ? 0.05 : h === 37 ? -0.05 : 0,
                  top: h === 40 ? 0.05 : h === 38 ? -0.05 : 0,
                }));
            },
            O,
          ];
        },
        [i, o],
      ),
      v = c[0],
      f = c[1],
      y = c[2];
    return (
      j(
        function () {
          return y;
        },
        [y],
      ),
      g('div', {
        ...z({}, n, {
          onTouchStart: v,
          onMouseDown: v,
          className: 'react-colorful__interactive',
          ref: t,
          onKeyDown: f,
          tabIndex: 0,
          role: 'slider',
        }),
      })
    );
  }),
  D = function (r) {
    return r.filter(Boolean).join(' ');
  },
  yr = function (r) {
    var e = r.color,
      n = r.left,
      t = r.top,
      o = t === void 0 ? 0.5 : t,
      i = D(['react-colorful__pointer', r.className]);
    return g('div', {
      className: i,
      style: { top: 100 * o + '%', left: 100 * n + '%' },
      children: g('div', {
        className: 'react-colorful__pointer-fill',
        style: { backgroundColor: e },
      }),
    });
  },
  E = function (r, e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = Math.pow(10, e)), Math.round(n * r) / n;
  },
  ie = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
  tr = function (r) {
    return (
      r[0] === '#' && (r = r.substr(1)),
      r.length < 6
        ? {
            r: parseInt(r[0] + r[0], 16),
            g: parseInt(r[1] + r[1], 16),
            b: parseInt(r[2] + r[2], 16),
            a: 1,
          }
        : {
            r: parseInt(r.substr(0, 2), 16),
            g: parseInt(r.substr(2, 2), 16),
            b: parseInt(r.substr(4, 2), 16),
            a: 1,
          }
    );
  },
  le = function (r, e) {
    return e === void 0 && (e = 'deg'), Number(r) * (ie[e] || 1);
  },
  ue = function (r) {
    var e =
      /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
        r,
      );
    return e
      ? ce({
          h: le(e[1], e[2]),
          s: Number(e[3]),
          l: Number(e[4]),
          a: e[5] === void 0 ? 1 : Number(e[5]) / (e[6] ? 100 : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  ce = function (r) {
    var e = r.s,
      n = r.l;
    return {
      h: r.h,
      s: (e *= (n < 50 ? n : 100 - n) / 100) > 0 ? ((2 * e) / (n + e)) * 100 : 0,
      v: n + e,
      a: r.a,
    };
  },
  Fr = function (r) {
    var e = r.s,
      n = r.v,
      t = r.a,
      o = ((200 - e) * n) / 100;
    return {
      h: E(r.h),
      s: E(o > 0 && o < 200 ? ((e * n) / 100 / (o <= 100 ? o : 200 - o)) * 100 : 0),
      l: E(o / 2),
      a: E(t, 2),
    };
  },
  fr = function (r) {
    var e = Fr(r);
    return 'hsl(' + e.h + ', ' + e.s + '%, ' + e.l + '%)';
  },
  Z = function (r) {
    var e = Fr(r);
    return 'hsla(' + e.h + ', ' + e.s + '%, ' + e.l + '%, ' + e.a + ')';
  },
  Pr = function (r) {
    var e = r.h,
      n = r.s,
      t = r.v,
      o = r.a;
    (e = (e / 360) * 6), (n /= 100), (t /= 100);
    var i = Math.floor(e),
      l = t * (1 - n),
      u = t * (1 - (e - i) * n),
      c = t * (1 - (1 - e + i) * n),
      v = i % 6;
    return {
      r: E(255 * [t, u, l, l, c, t][v]),
      g: E(255 * [c, t, t, u, l, l][v]),
      b: E(255 * [l, l, c, t, t, u][v]),
      a: E(o, 2),
    };
  },
  se = function (r) {
    var e =
      /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
        r,
      );
    return e
      ? $r({
          r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
          g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
          b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
          a: e[7] === void 0 ? 1 : Number(e[7]) / (e[8] ? 100 : 1),
        })
      : { h: 0, s: 0, v: 0, a: 1 };
  },
  or = function (r) {
    var e = r.toString(16);
    return e.length < 2 ? '0' + e : e;
  },
  $r = function (r) {
    var e = r.r,
      n = r.g,
      t = r.b,
      o = r.a,
      i = Math.max(e, n, t),
      l = i - Math.min(e, n, t),
      u = l ? (i === e ? (n - t) / l : i === n ? 2 + (t - e) / l : 4 + (e - n) / l) : 0;
    return {
      h: E(60 * (u < 0 ? u + 6 : u)),
      s: E(i ? (l / i) * 100 : 0),
      v: E((i / 255) * 100),
      a: o,
    };
  },
  zr = _.memo(function (a) {
    var r = a.hue,
      e = a.onChange,
      n = D(['react-colorful__hue', a.className]);
    return _.createElement(
      'div',
      { className: n },
      _.createElement(
        mr,
        {
          onMove: function (o) {
            e({ h: 360 * o.left });
          },
          onKey: function (o) {
            e({ h: B(r + 360 * o.left, 0, 360) });
          },
          'aria-label': 'Hue',
          'aria-valuetext': E(r),
        },
        _.createElement(yr, {
          className: 'react-colorful__hue-pointer',
          left: r / 360,
          color: fr({ h: r, s: 100, v: 100, a: 1 }),
        }),
      ),
    );
  }),
  Lr = _.memo(function (a) {
    var r = a.hsva,
      e = a.onChange,
      n = { backgroundColor: fr({ h: r.h, s: 100, v: 100, a: 1 }) };
    return _.createElement(
      'div',
      { className: 'react-colorful__saturation', style: n },
      _.createElement(
        mr,
        {
          onMove: function (o) {
            e({ s: 100 * o.left, v: 100 - 100 * o.top });
          },
          onKey: function (o) {
            e({ s: B(r.s + 100 * o.left, 0, 100), v: B(r.v - 100 * o.top, 0, 100) });
          },
          'aria-label': 'Color',
          'aria-valuetext': 'Saturation ' + E(r.s) + '%, Brightness ' + E(r.v) + '%',
        },
        _.createElement(yr, {
          className: 'react-colorful__saturation-pointer',
          top: 1 - r.v / 100,
          left: r.s / 100,
          color: fr(r),
        }),
      ),
    );
  }),
  jr = function (r, e) {
    if (r === e) return !0;
    for (var n in r) if (r[n] !== e[n]) return !1;
    return !0;
  },
  Br = function (r, e) {
    return r.replace(/\s/g, '') === e.replace(/\s/g, '');
  };
function Xr(a, r, e) {
  var n = sr(e),
    t = A(function () {
      return a.toHsva(r);
    }),
    o = t[0],
    i = t[1],
    l = F({ color: r, hsva: o });
  j(
    function () {
      if (!a.equal(r, l.current.color)) {
        var c = a.toHsva(r);
        (l.current = { hsva: c, color: r }), i(c);
      }
    },
    [r, a],
  ),
    j(
      function () {
        var c;
        jr(o, l.current.hsva) ||
          a.equal((c = a.fromHsva(o)), l.current.color) ||
          ((l.current = { hsva: o, color: c }), n(c));
      },
      [o, a, n],
    );
  var u = rr(function (c) {
    i(function (v) {
      return Object.assign({}, v, c);
    });
  }, []);
  return [o, u];
}
var ve = typeof window < 'u' ? Dr : j,
  fe = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0;
  },
  Mr = new Map(),
  qr = function (r) {
    ve(function () {
      var e = r.current ? r.current.ownerDocument : document;
      if (e !== void 0 && !Mr.has(e)) {
        var n = e.createElement('style');
        (n.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
          Mr.set(e, n);
        var t = fe();
        t && n.setAttribute('nonce', t), e.head.appendChild(n);
      }
    }, []);
  },
  he = function (r) {
    var e = r.className,
      n = r.colorModel,
      t = r.color,
      o = t === void 0 ? n.defaultColor : t,
      i = r.onChange,
      l = br(r, ['className', 'colorModel', 'color', 'onChange']),
      u = F(null);
    qr(u);
    var c = Xr(n, o, i),
      v = c[0],
      f = c[1],
      y = D(['react-colorful', e]);
    return g('div', {
      ...z({}, l, { ref: u, className: y }),
      children: [
        g(Lr, { hsva: v, onChange: f }),
        g(zr, { hue: v.h, onChange: f, className: 'react-colorful__last-control' }),
      ],
    });
  },
  de = {
    defaultColor: '000',
    toHsva: function (r) {
      return $r(tr(r));
    },
    fromHsva: function (r) {
      return (n = (e = Pr(r)).g), (t = e.b), '#' + or(e.r) + or(n) + or(t);
      var e, n, t;
    },
    equal: function (r, e) {
      return r.toLowerCase() === e.toLowerCase() || jr(tr(r), tr(e));
    },
  },
  ge = function (r) {
    return _.createElement(he, z({}, r, { colorModel: de }));
  },
  pe = function (r) {
    var e = r.className,
      n = r.hsva,
      t = r.onChange,
      o = {
        backgroundImage:
          'linear-gradient(90deg, ' +
          Z(Object.assign({}, n, { a: 0 })) +
          ', ' +
          Z(Object.assign({}, n, { a: 1 })) +
          ')',
      },
      i = D(['react-colorful__alpha', e]);
    return _.createElement(
      'div',
      { className: i },
      g('div', { className: 'react-colorful__alpha-gradient', style: o }),
      _.createElement(
        mr,
        {
          onMove: function (u) {
            t({ a: u.left });
          },
          onKey: function (u) {
            t({ a: B(n.a + u.left) });
          },
          'aria-label': 'Alpha',
          'aria-valuetext': E(100 * n.a) + '%',
        },
        _.createElement(yr, { className: 'react-colorful__alpha-pointer', left: n.a, color: Z(n) }),
      ),
    );
  },
  Vr = function (r) {
    var e = r.className,
      n = r.colorModel,
      t = r.color,
      o = t === void 0 ? n.defaultColor : t,
      i = r.onChange,
      l = br(r, ['className', 'colorModel', 'color', 'onChange']),
      u = F(null);
    qr(u);
    var c = Xr(n, o, i),
      v = c[0],
      f = c[1],
      y = D(['react-colorful', e]);
    return g('div', {
      ...z({}, l, { ref: u, className: y }),
      children: [
        g(Lr, { hsva: v, onChange: f }),
        g(zr, { hue: v.h, onChange: f }),
        g(pe, { hsva: v, onChange: f, className: 'react-colorful__last-control' }),
      ],
    });
  },
  be = { defaultColor: 'hsla(0, 0%, 0%, 1)', toHsva: ue, fromHsva: Z, equal: Br },
  me = function (r) {
    return g(Vr, { ...z({}, r, { colorModel: be }) });
  },
  ye = {
    defaultColor: 'rgba(0, 0, 0, 1)',
    toHsva: se,
    fromHsva: function (r) {
      var e = Pr(r);
      return 'rgba(' + e.r + ', ' + e.g + ', ' + e.b + ', ' + e.a + ')';
    },
    equal: Br,
  },
  we = function (r) {
    return g(Vr, { ...z({}, r, { colorModel: ye }) });
  },
  xe = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  },
  K = xe,
  Ar = {};
for (var ir = 0, Cr = Object.keys(K); ir < Cr.length; ir++) {
  var Sr = Cr[ir];
  Ar[K[Sr]] = Sr;
}
var s = {
    rgb: { channels: 3, labels: 'rgb' },
    hsl: { channels: 3, labels: 'hsl' },
    hsv: { channels: 3, labels: 'hsv' },
    hwb: { channels: 3, labels: 'hwb' },
    cmyk: { channels: 4, labels: 'cmyk' },
    xyz: { channels: 3, labels: 'xyz' },
    lab: { channels: 3, labels: 'lab' },
    lch: { channels: 3, labels: 'lch' },
    hex: { channels: 1, labels: ['hex'] },
    keyword: { channels: 1, labels: ['keyword'] },
    ansi16: { channels: 1, labels: ['ansi16'] },
    ansi256: { channels: 1, labels: ['ansi256'] },
    hcg: { channels: 3, labels: ['h', 'c', 'g'] },
    apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
    gray: { channels: 1, labels: ['gray'] },
  },
  Gr = s;
for (var lr = 0, Er = Object.keys(s); lr < Er.length; lr++) {
  var I = Er[lr];
  if (!('channels' in s[I])) throw new Error('missing channels property: ' + I);
  if (!('labels' in s[I])) throw new Error('missing channel labels property: ' + I);
  if (s[I].labels.length !== s[I].channels)
    throw new Error('channel and label counts mismatch: ' + I);
  var _r = s[I],
    ke = _r.channels,
    Me = _r.labels;
  delete s[I].channels,
    delete s[I].labels,
    Object.defineProperty(s[I], 'channels', { value: ke }),
    Object.defineProperty(s[I], 'labels', { value: Me });
}
s.rgb.hsl = function (a) {
  var r = a[0] / 255,
    e = a[1] / 255,
    n = a[2] / 255,
    t = Math.min(r, e, n),
    o = Math.max(r, e, n),
    i = o - t,
    l,
    u;
  o === t
    ? (l = 0)
    : r === o
    ? (l = (e - n) / i)
    : e === o
    ? (l = 2 + (n - r) / i)
    : n === o && (l = 4 + (r - e) / i),
    (l = Math.min(l * 60, 360)),
    l < 0 && (l += 360);
  var c = (t + o) / 2;
  return (
    o === t ? (u = 0) : c <= 0.5 ? (u = i / (o + t)) : (u = i / (2 - o - t)), [l, u * 100, c * 100]
  );
};
s.rgb.hsv = function (a) {
  var r,
    e,
    n,
    t,
    o,
    i = a[0] / 255,
    l = a[1] / 255,
    u = a[2] / 255,
    c = Math.max(i, l, u),
    v = c - Math.min(i, l, u),
    f = function (x) {
      return (c - x) / 6 / v + 1 / 2;
    };
  return (
    v === 0
      ? ((t = 0), (o = 0))
      : ((o = v / c),
        (r = f(i)),
        (e = f(l)),
        (n = f(u)),
        i === c ? (t = n - e) : l === c ? (t = 1 / 3 + r - n) : u === c && (t = 2 / 3 + e - r),
        t < 0 ? (t += 1) : t > 1 && (t -= 1)),
    [t * 360, o * 100, c * 100]
  );
};
s.rgb.hwb = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2],
    t = s.rgb.hsl(a)[0],
    o = (1 / 255) * Math.min(r, Math.min(e, n));
  return (n = 1 - (1 / 255) * Math.max(r, Math.max(e, n))), [t, o * 100, n * 100];
};
s.rgb.cmyk = function (a) {
  var r = a[0] / 255,
    e = a[1] / 255,
    n = a[2] / 255,
    t = Math.min(1 - r, 1 - e, 1 - n),
    o = (1 - r - t) / (1 - t) || 0,
    i = (1 - e - t) / (1 - t) || 0,
    l = (1 - n - t) / (1 - t) || 0;
  return [o * 100, i * 100, l * 100, t * 100];
};
function Ce(a, r) {
  return Math.pow(a[0] - r[0], 2) + Math.pow(a[1] - r[1], 2) + Math.pow(a[2] - r[2], 2);
}
s.rgb.keyword = function (a) {
  var r = Ar[a];
  if (r) return r;
  for (var e = 1 / 0, n, t = 0, o = Object.keys(K); t < o.length; t++) {
    var i = o[t],
      l = K[i],
      u = Ce(a, l);
    u < e && ((e = u), (n = i));
  }
  return n;
};
s.keyword.rgb = function (a) {
  return K[a];
};
s.rgb.xyz = function (a) {
  var r = a[0] / 255,
    e = a[1] / 255,
    n = a[2] / 255;
  (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92),
    (e = e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92),
    (n = n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92);
  var t = r * 0.4124 + e * 0.3576 + n * 0.1805,
    o = r * 0.2126 + e * 0.7152 + n * 0.0722,
    i = r * 0.0193 + e * 0.1192 + n * 0.9505;
  return [t * 100, o * 100, i * 100];
};
s.rgb.lab = function (a) {
  var r = s.rgb.xyz(a),
    e = r[0],
    n = r[1],
    t = r[2];
  (e /= 95.047),
    (n /= 100),
    (t /= 108.883),
    (e = e > 0.008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116),
    (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
    (t = t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116);
  var o = 116 * n - 16,
    i = 500 * (e - n),
    l = 200 * (n - t);
  return [o, i, l];
};
s.hsl.rgb = function (a) {
  var r = a[0] / 360,
    e = a[1] / 100,
    n = a[2] / 100,
    t,
    o,
    i;
  if (e === 0) return (i = n * 255), [i, i, i];
  n < 0.5 ? (t = n * (1 + e)) : (t = n + e - n * e);
  for (var l = 2 * n - t, u = [0, 0, 0], c = 0; c < 3; c++)
    (o = r + (1 / 3) * -(c - 1)),
      o < 0 && o++,
      o > 1 && o--,
      6 * o < 1
        ? (i = l + (t - l) * 6 * o)
        : 2 * o < 1
        ? (i = t)
        : 3 * o < 2
        ? (i = l + (t - l) * (2 / 3 - o) * 6)
        : (i = l),
      (u[c] = i * 255);
  return u;
};
s.hsl.hsv = function (a) {
  var r = a[0],
    e = a[1] / 100,
    n = a[2] / 100,
    t = e,
    o = Math.max(n, 0.01);
  (n *= 2), (e *= n <= 1 ? n : 2 - n), (t *= o <= 1 ? o : 2 - o);
  var i = (n + e) / 2,
    l = n === 0 ? (2 * t) / (o + t) : (2 * e) / (n + e);
  return [r, l * 100, i * 100];
};
s.hsv.rgb = function (a) {
  var r = a[0] / 60,
    e = a[1] / 100,
    n = a[2] / 100,
    t = Math.floor(r) % 6,
    o = r - Math.floor(r),
    i = 255 * n * (1 - e),
    l = 255 * n * (1 - e * o),
    u = 255 * n * (1 - e * (1 - o));
  switch (((n *= 255), t)) {
    case 0:
      return [n, u, i];
    case 1:
      return [l, n, i];
    case 2:
      return [i, n, u];
    case 3:
      return [i, l, n];
    case 4:
      return [u, i, n];
    case 5:
      return [n, i, l];
  }
};
s.hsv.hsl = function (a) {
  var r = a[0],
    e = a[1] / 100,
    n = a[2] / 100,
    t = Math.max(n, 0.01),
    o,
    i;
  i = (2 - e) * n;
  var l = (2 - e) * t;
  return (o = e * t), (o /= l <= 1 ? l : 2 - l), (o = o || 0), (i /= 2), [r, o * 100, i * 100];
};
s.hwb.rgb = function (a) {
  var r = a[0] / 360,
    e = a[1] / 100,
    n = a[2] / 100,
    t = e + n,
    o;
  t > 1 && ((e /= t), (n /= t));
  var i = Math.floor(6 * r),
    l = 1 - n;
  (o = 6 * r - i), (i & 1) !== 0 && (o = 1 - o);
  var u = e + o * (l - e),
    c,
    v,
    f;
  switch (i) {
    default:
    case 6:
    case 0:
      (c = l), (v = u), (f = e);
      break;
    case 1:
      (c = u), (v = l), (f = e);
      break;
    case 2:
      (c = e), (v = l), (f = u);
      break;
    case 3:
      (c = e), (v = u), (f = l);
      break;
    case 4:
      (c = u), (v = e), (f = l);
      break;
    case 5:
      (c = l), (v = e), (f = u);
      break;
  }
  return [c * 255, v * 255, f * 255];
};
s.cmyk.rgb = function (a) {
  var r = a[0] / 100,
    e = a[1] / 100,
    n = a[2] / 100,
    t = a[3] / 100,
    o = 1 - Math.min(1, r * (1 - t) + t),
    i = 1 - Math.min(1, e * (1 - t) + t),
    l = 1 - Math.min(1, n * (1 - t) + t);
  return [o * 255, i * 255, l * 255];
};
s.xyz.rgb = function (a) {
  var r = a[0] / 100,
    e = a[1] / 100,
    n = a[2] / 100,
    t,
    o,
    i;
  return (
    (t = r * 3.2406 + e * -1.5372 + n * -0.4986),
    (o = r * -0.9689 + e * 1.8758 + n * 0.0415),
    (i = r * 0.0557 + e * -0.204 + n * 1.057),
    (t = t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : t * 12.92),
    (o = o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : o * 12.92),
    (i = i > 0.0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : i * 12.92),
    (t = Math.min(Math.max(0, t), 1)),
    (o = Math.min(Math.max(0, o), 1)),
    (i = Math.min(Math.max(0, i), 1)),
    [t * 255, o * 255, i * 255]
  );
};
s.xyz.lab = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2];
  (r /= 95.047),
    (e /= 100),
    (n /= 108.883),
    (r = r > 0.008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116),
    (e = e > 0.008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116),
    (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116);
  var t = 116 * e - 16,
    o = 500 * (r - e),
    i = 200 * (e - n);
  return [t, o, i];
};
s.lab.xyz = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2],
    t,
    o,
    i;
  (o = (r + 16) / 116), (t = e / 500 + o), (i = o - n / 200);
  var l = Math.pow(o, 3),
    u = Math.pow(t, 3),
    c = Math.pow(i, 3);
  return (
    (o = l > 0.008856 ? l : (o - 16 / 116) / 7.787),
    (t = u > 0.008856 ? u : (t - 16 / 116) / 7.787),
    (i = c > 0.008856 ? c : (i - 16 / 116) / 7.787),
    (t *= 95.047),
    (o *= 100),
    (i *= 108.883),
    [t, o, i]
  );
};
s.lab.lch = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2],
    t,
    o = Math.atan2(n, e);
  (t = (o * 360) / 2 / Math.PI), t < 0 && (t += 360);
  var i = Math.sqrt(e * e + n * n);
  return [r, i, t];
};
s.lch.lab = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2],
    t = (n / 360) * 2 * Math.PI,
    o = e * Math.cos(t),
    i = e * Math.sin(t);
  return [r, o, i];
};
s.rgb.ansi16 = function (a) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
    e = N(a, 3),
    n = e[0],
    t = e[1],
    o = e[2],
    i = r === null ? s.rgb.hsv(a)[2] : r;
  if (((i = Math.round(i / 50)), i === 0)) return 30;
  var l = 30 + ((Math.round(o / 255) << 2) | (Math.round(t / 255) << 1) | Math.round(n / 255));
  return i === 2 && (l += 60), l;
};
s.hsv.ansi16 = function (a) {
  return s.rgb.ansi16(s.hsv.rgb(a), a[2]);
};
s.rgb.ansi256 = function (a) {
  var r = a[0],
    e = a[1],
    n = a[2];
  if (r === e && e === n)
    return r < 8 ? 16 : r > 248 ? 231 : Math.round(((r - 8) / 247) * 24) + 232;
  var t =
    16 + 36 * Math.round((r / 255) * 5) + 6 * Math.round((e / 255) * 5) + Math.round((n / 255) * 5);
  return t;
};
s.ansi16.rgb = function (a) {
  var r = a % 10;
  if (r === 0 || r === 7) return a > 50 && (r += 3.5), (r = (r / 10.5) * 255), [r, r, r];
  var e = (~~(a > 50) + 1) * 0.5,
    n = (r & 1) * e * 255,
    t = ((r >> 1) & 1) * e * 255,
    o = ((r >> 2) & 1) * e * 255;
  return [n, t, o];
};
s.ansi256.rgb = function (a) {
  if (a >= 232) {
    var r = (a - 232) * 10 + 8;
    return [r, r, r];
  }
  a -= 16;
  var e,
    n = (Math.floor(a / 36) / 5) * 255,
    t = (Math.floor((e = a % 36) / 6) / 5) * 255,
    o = ((e % 6) / 5) * 255;
  return [n, t, o];
};
s.rgb.hex = function (a) {
  var r =
      ((Math.round(a[0]) & 255) << 16) + ((Math.round(a[1]) & 255) << 8) + (Math.round(a[2]) & 255),
    e = r.toString(16).toUpperCase();
  return '000000'.substring(e.length) + e;
};
s.hex.rgb = function (a) {
  var r = a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!r) return [0, 0, 0];
  var e = r[0];
  r[0].length === 3 &&
    (e = e
      .split('')
      .map(function (l) {
        return l + l;
      })
      .join(''));
  var n = parseInt(e, 16),
    t = (n >> 16) & 255,
    o = (n >> 8) & 255,
    i = n & 255;
  return [t, o, i];
};
s.rgb.hcg = function (a) {
  var r = a[0] / 255,
    e = a[1] / 255,
    n = a[2] / 255,
    t = Math.max(Math.max(r, e), n),
    o = Math.min(Math.min(r, e), n),
    i = t - o,
    l,
    u;
  return (
    i < 1 ? (l = o / (1 - i)) : (l = 0),
    i <= 0
      ? (u = 0)
      : t === r
      ? (u = ((e - n) / i) % 6)
      : t === e
      ? (u = 2 + (n - r) / i)
      : (u = 4 + (r - e) / i),
    (u /= 6),
    (u %= 1),
    [u * 360, i * 100, l * 100]
  );
};
s.hsl.hcg = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = e < 0.5 ? 2 * r * e : 2 * r * (1 - e),
    t = 0;
  return n < 1 && (t = (e - 0.5 * n) / (1 - n)), [a[0], n * 100, t * 100];
};
s.hsv.hcg = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = r * e,
    t = 0;
  return n < 1 && (t = (e - n) / (1 - n)), [a[0], n * 100, t * 100];
};
s.hcg.rgb = function (a) {
  var r = a[0] / 360,
    e = a[1] / 100,
    n = a[2] / 100;
  if (e === 0) return [n * 255, n * 255, n * 255];
  var t = [0, 0, 0],
    o = (r % 1) * 6,
    i = o % 1,
    l = 1 - i,
    u = 0;
  switch (Math.floor(o)) {
    case 0:
      (t[0] = 1), (t[1] = i), (t[2] = 0);
      break;
    case 1:
      (t[0] = l), (t[1] = 1), (t[2] = 0);
      break;
    case 2:
      (t[0] = 0), (t[1] = 1), (t[2] = i);
      break;
    case 3:
      (t[0] = 0), (t[1] = l), (t[2] = 1);
      break;
    case 4:
      (t[0] = i), (t[1] = 0), (t[2] = 1);
      break;
    default:
      (t[0] = 1), (t[1] = 0), (t[2] = l);
  }
  return (u = (1 - e) * n), [(e * t[0] + u) * 255, (e * t[1] + u) * 255, (e * t[2] + u) * 255];
};
s.hcg.hsv = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = r + e * (1 - r),
    t = 0;
  return n > 0 && (t = r / n), [a[0], t * 100, n * 100];
};
s.hcg.hsl = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = e * (1 - r) + 0.5 * r,
    t = 0;
  return (
    n > 0 && n < 0.5 ? (t = r / (2 * n)) : n >= 0.5 && n < 1 && (t = r / (2 * (1 - n))),
    [a[0], t * 100, n * 100]
  );
};
s.hcg.hwb = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = r + e * (1 - r);
  return [a[0], (n - r) * 100, (1 - n) * 100];
};
s.hwb.hcg = function (a) {
  var r = a[1] / 100,
    e = a[2] / 100,
    n = 1 - e,
    t = n - r,
    o = 0;
  return t < 1 && (o = (n - t) / (1 - t)), [a[0], t * 100, o * 100];
};
s.apple.rgb = function (a) {
  return [(a[0] / 65535) * 255, (a[1] / 65535) * 255, (a[2] / 65535) * 255];
};
s.rgb.apple = function (a) {
  return [(a[0] / 255) * 65535, (a[1] / 255) * 65535, (a[2] / 255) * 65535];
};
s.gray.rgb = function (a) {
  return [(a[0] / 100) * 255, (a[0] / 100) * 255, (a[0] / 100) * 255];
};
s.gray.hsl = function (a) {
  return [0, 0, a[0]];
};
s.gray.hsv = s.gray.hsl;
s.gray.hwb = function (a) {
  return [0, 100, a[0]];
};
s.gray.cmyk = function (a) {
  return [0, 0, 0, a[0]];
};
s.gray.lab = function (a) {
  return [a[0], 0, 0];
};
s.gray.hex = function (a) {
  var r = Math.round((a[0] / 100) * 255) & 255,
    e = (r << 16) + (r << 8) + r,
    n = e.toString(16).toUpperCase();
  return '000000'.substring(n.length) + n;
};
s.rgb.gray = function (a) {
  var r = (a[0] + a[1] + a[2]) / 3;
  return [(r / 255) * 100];
};
var er = Gr;
function Se() {
  for (var a = {}, r = Object.keys(er), e = r.length, n = 0; n < e; n++)
    a[r[n]] = { distance: -1, parent: null };
  return a;
}
function Ee(a) {
  var r = Se(),
    e = [a];
  for (r[a].distance = 0; e.length; )
    for (var n = e.pop(), t = Object.keys(er[n]), o = t.length, i = 0; i < o; i++) {
      var l = t[i],
        u = r[l];
      u.distance === -1 && ((u.distance = r[n].distance + 1), (u.parent = n), e.unshift(l));
    }
  return r;
}
function _e(a, r) {
  return function (e) {
    return r(a(e));
  };
}
function Oe(a, r) {
  for (var e = [r[a].parent, a], n = er[r[a].parent][a], t = r[a].parent; r[t].parent; )
    e.unshift(r[t].parent), (n = _e(er[r[t].parent][t], n)), (t = r[t].parent);
  return (n.conversion = e), n;
}
var Ie = function (r) {
    for (var e = Ee(r), n = {}, t = Object.keys(e), o = t.length, i = 0; i < o; i++) {
      var l = t[i],
        u = e[l];
      u.parent !== null && (n[l] = Oe(l, e));
    }
    return n;
  },
  hr = Gr,
  He = Ie,
  L = {},
  Ne = Object.keys(hr);
function Re(a) {
  var r = function () {
    for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o];
    var i = t[0];
    return i == null ? i : (i.length > 1 && (t = i), a(t));
  };
  return 'conversion' in a && (r.conversion = a.conversion), r;
}
function Te(a) {
  var r = function () {
    for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o];
    var i = t[0];
    if (i == null) return i;
    i.length > 1 && (t = i);
    var l = a(t);
    if (cr(l) === 'object') for (var u = l.length, c = 0; c < u; c++) l[c] = Math.round(l[c]);
    return l;
  };
  return 'conversion' in a && (r.conversion = a.conversion), r;
}
Ne.forEach(function (a) {
  (L[a] = {}),
    Object.defineProperty(L[a], 'channels', { value: hr[a].channels }),
    Object.defineProperty(L[a], 'labels', { value: hr[a].labels });
  var r = He(a),
    e = Object.keys(r);
  e.forEach(function (n) {
    var t = r[n];
    (L[a][n] = Te(t)), (L[a][n].raw = Re(t));
  });
});
var H = L,
  Fe = re,
  Pe = function () {
    return Fe.Date.now();
  },
  $e = Pe,
  ze = /\s/;
function Le(a) {
  for (var r = a.length; r-- && ze.test(a.charAt(r)); );
  return r;
}
var je = Le,
  Be = je,
  Xe = /^\s+/;
function qe(a) {
  return a && a.slice(0, Be(a) + 1).replace(Xe, '');
}
var Ve = qe,
  Ae = Ve,
  Or = pr,
  Ge = ee,
  Ir = 0 / 0,
  We = /^[-+]0x[0-9a-f]+$/i,
  Ke = /^0b[01]+$/i,
  De = /^0o[0-7]+$/i,
  Ue = parseInt;
function Je(a) {
  if (typeof a == 'number') return a;
  if (Ge(a)) return Ir;
  if (Or(a)) {
    var r = typeof a.valueOf == 'function' ? a.valueOf() : a;
    a = Or(r) ? r + '' : r;
  }
  if (typeof a != 'string') return a === 0 ? a : +a;
  a = Ae(a);
  var e = Ke.test(a);
  return e || De.test(a) ? Ue(a.slice(2), e ? 2 : 8) : We.test(a) ? Ir : +a;
}
var Qe = Je,
  Ye = pr,
  ur = $e,
  Hr = Qe,
  Ze = 'Expected a function',
  ra = Math.max,
  ea = Math.min;
function aa(a, r, e) {
  var n,
    t,
    o,
    i,
    l,
    u,
    c = 0,
    v = !1,
    f = !1,
    y = !0;
  if (typeof a != 'function') throw new TypeError(Ze);
  (r = Hr(r) || 0),
    Ye(e) &&
      ((v = !!e.leading),
      (f = 'maxWait' in e),
      (o = f ? ra(Hr(e.maxWait) || 0, r) : o),
      (y = 'trailing' in e ? !!e.trailing : y));
  function x(w) {
    var R = n,
      T = t;
    return (n = t = void 0), (c = w), (i = a.apply(T, R)), i;
  }
  function M(w) {
    return (c = w), (l = setTimeout(h, r)), v ? x(w) : i;
  }
  function O(w) {
    var R = w - u,
      T = w - c,
      U = r - R;
    return f ? ea(U, o - T) : U;
  }
  function m(w) {
    var R = w - u,
      T = w - c;
    return u === void 0 || R >= r || R < 0 || (f && T >= o);
  }
  function h() {
    var w = ur();
    if (m(w)) return d(w);
    l = setTimeout(h, O(w));
  }
  function d(w) {
    return (l = void 0), y && n ? x(w) : ((n = t = void 0), i);
  }
  function p() {
    l !== void 0 && clearTimeout(l), (c = 0), (n = u = t = l = void 0);
  }
  function k() {
    return l === void 0 ? i : d(ur());
  }
  function C() {
    var w = ur(),
      R = m(w);
    if (((n = arguments), (t = this), (u = w), R)) {
      if (l === void 0) return M(u);
      if (f) return clearTimeout(l), (l = setTimeout(h, r)), x(u);
    }
    return l === void 0 && (l = setTimeout(h, r)), i;
  }
  return (C.cancel = p), (C.flush = k), C;
}
var na = aa,
  ta = na,
  oa = pr,
  ia = 'Expected a function';
function la(a, r, e) {
  var n = !0,
    t = !0;
  if (typeof a != 'function') throw new TypeError(ia);
  return (
    oa(e) && ((n = 'leading' in e ? !!e.leading : n), (t = 'trailing' in e ? !!e.trailing : t)),
    ta(a, r, { leading: n, maxWait: r, trailing: t })
  );
}
var ua = la,
  ca = P.div({ position: 'relative', maxWidth: 250 }),
  sa = P(Tr)({ position: 'absolute', zIndex: 1, top: 4, left: 4 }),
  va = P.div({
    width: 200,
    margin: 5,
    '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
    '.react-colorful__hue': { boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)' },
    '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
  }),
  fa = P(Ur)(function (a) {
    var r = a.theme;
    return { fontFamily: r.typography.fonts.base };
  }),
  ha = P.div({
    display: 'grid',
    gridTemplateColumns: 'repeat(9, 16px)',
    gap: 6,
    padding: 3,
    marginTop: 5,
    width: 200,
  }),
  da = P.div(function (a) {
    var r = a.theme,
      e = a.active;
    return {
      width: 16,
      height: 16,
      boxShadow: e
        ? ''
            .concat(r.appBorderColor, ' 0 0 0 1px inset, ')
            .concat(r.color.mediumdark, '50 0 0 0 4px')
        : ''.concat(r.appBorderColor, ' 0 0 0 1px inset'),
      borderRadius: r.appBorderRadius,
    };
  }),
  ga = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
  Nr = function (r) {
    var e = r.value,
      n = r.active,
      t = r.onClick,
      o = r.style,
      i = Zr(r, ['value', 'active', 'onClick', 'style']),
      l = 'linear-gradient('
        .concat(e, ', ')
        .concat(e, '), ')
        .concat(ga, ', linear-gradient(#fff, #fff)');
    return g(da, {
      ...Object.assign(
        {},
        i,
        { active: n, onClick: t },
        { style: Object.assign(Object.assign({}, o), { backgroundImage: l }) },
      ),
    });
  },
  pa = P(Jr.Input)(function (a) {
    var r = a.theme;
    return {
      width: '100%',
      paddingLeft: 30,
      paddingRight: 30,
      boxSizing: 'border-box',
      fontFamily: r.typography.fonts.base,
    };
  }),
  ba = P(Qr)(function (a) {
    var r = a.theme;
    return {
      position: 'absolute',
      zIndex: 1,
      top: 6,
      right: 7,
      width: 20,
      height: 20,
      padding: 4,
      boxSizing: 'border-box',
      cursor: 'pointer',
      color: r.input.color,
    };
  }),
  b;
(function (a) {
  (a.RGB = 'rgb'), (a.HSL = 'hsl'), (a.HEX = 'hex');
})(b || (b = {}));
var Q = Object.values(b),
  ma = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,
  ya = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,
  wa = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,
  dr = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,
  xa = /^\s*#?([0-9a-f]{3})\s*$/i,
  ka = ((q = {}), S(q, b.HEX, ge), S(q, b.RGB, we), S(q, b.HSL, me), q),
  Y =
    ((V = {}),
    S(V, b.HEX, 'transparent'),
    S(V, b.RGB, 'rgba(0, 0, 0, 0)'),
    S(V, b.HSL, 'hsla(0, 0%, 0%, 0)'),
    V),
  Rr = function (r) {
    var e = r == null ? void 0 : r.match(ma);
    if (!e) return [0, 0, 0, 1];
    var n = N(e, 5),
      t = n[1],
      o = n[2],
      i = n[3],
      l = n[4],
      u = l === void 0 ? 1 : l;
    return [t, o, i, u].map(Number);
  },
  W = function (r) {
    var e;
    if (!!r) {
      var n = !0;
      if (ya.test(r)) {
        var t,
          o = Rr(r),
          i = N(o, 4),
          l = i[0],
          u = i[1],
          c = i[2],
          v = i[3],
          f = H.rgb.hsl([l, u, c]) || [0, 0, 0],
          y = N(f, 3),
          x = y[0],
          M = y[1],
          O = y[2];
        return (
          (t = { valid: n, value: r, keyword: H.rgb.keyword([l, u, c]), colorSpace: b.RGB }),
          S(t, b.RGB, r),
          S(t, b.HSL, 'hsla('.concat(x, ', ').concat(M, '%, ').concat(O, '%, ').concat(v, ')')),
          S(t, b.HEX, '#'.concat(H.rgb.hex([l, u, c]).toLowerCase())),
          t
        );
      }
      if (wa.test(r)) {
        var m,
          h = Rr(r),
          d = N(h, 4),
          p = d[0],
          k = d[1],
          C = d[2],
          w = d[3],
          R = H.hsl.rgb([p, k, C]) || [0, 0, 0],
          T = N(R, 3),
          U = T[0],
          Wr = T[1],
          Kr = T[2];
        return (
          (m = { valid: n, value: r, keyword: H.hsl.keyword([p, k, C]), colorSpace: b.HSL }),
          S(m, b.RGB, 'rgba('.concat(U, ', ').concat(Wr, ', ').concat(Kr, ', ').concat(w, ')')),
          S(m, b.HSL, r),
          S(m, b.HEX, '#'.concat(H.hsl.hex([p, k, C]).toLowerCase())),
          m
        );
      }
      var J = r.replace('#', ''),
        X = H.keyword.rgb(J) || H.hex.rgb(J),
        nr = H.rgb.hsl(X),
        $ = r;
      if ((/[^#a-f0-9]/i.test(r) ? ($ = J) : dr.test(r) && ($ = '#'.concat(J)), $.startsWith('#')))
        n = dr.test($);
      else
        try {
          H.keyword.hex($);
        } catch {
          n = !1;
        }
      return (
        (e = { valid: n, value: $, keyword: H.rgb.keyword(X), colorSpace: b.HEX }),
        S(e, b.RGB, 'rgba('.concat(X[0], ', ').concat(X[1], ', ').concat(X[2], ', 1)')),
        S(e, b.HSL, 'hsla('.concat(nr[0], ', ').concat(nr[1], '%, ').concat(nr[2], '%, 1)')),
        S(e, b.HEX, $),
        e
      );
    }
  },
  Ma = function (r, e, n) {
    if (!r || !(e != null && e.valid)) return Y[n];
    if (n !== b.HEX) return (e == null ? void 0 : e[n]) || Y[n];
    if (!e.hex.startsWith('#'))
      try {
        return '#'.concat(H.keyword.hex(e.hex));
      } catch {
        return Y.hex;
      }
    var t = e.hex.match(xa);
    if (!t) return dr.test(e.hex) ? e.hex : Y.hex;
    var o = t[1].split(''),
      i = N(o, 3),
      l = i[0],
      u = i[1],
      c = i[2];
    return '#'.concat(l).concat(l).concat(u).concat(u).concat(c).concat(c);
  },
  Ca = function (r, e) {
    var n = A(r || ''),
      t = N(n, 2),
      o = t[0],
      i = t[1],
      l = A(function () {
        return W(o);
      }),
      u = N(l, 2),
      c = u[0],
      v = u[1],
      f = A((c == null ? void 0 : c.colorSpace) || b.HEX),
      y = N(f, 2),
      x = y[0],
      M = y[1];
    j(
      function () {
        r === void 0 && (i(''), v(void 0), M(b.HEX));
      },
      [r],
    );
    var O = gr(
        function () {
          return Ma(o, c, x).toLowerCase();
        },
        [o, c, x],
      ),
      m = rr(
        function (d) {
          var p = W(d);
          i((p == null ? void 0 : p.value) || d || ''), p && (v(p), M(p.colorSpace), e(p.value));
        },
        [e],
      ),
      h = rr(
        function () {
          var d = Q.indexOf(x) + 1;
          d >= Q.length && (d = 0), M(Q[d]);
          var p = (c == null ? void 0 : c[Q[d]]) || '';
          i(p), e(p);
        },
        [c, x, e],
      );
    return { value: o, realValue: O, updateValue: m, color: c, colorSpace: x, cycleColorSpace: h };
  },
  ar = function (r) {
    return r.replace(/\s*/, '').toLowerCase();
  },
  Sa = function (r, e, n) {
    var t = A(e != null && e.valid ? [e] : []),
      o = N(t, 2),
      i = o[0],
      l = o[1];
    j(
      function () {
        e === void 0 && l([]);
      },
      [e],
    );
    var u = gr(
        function () {
          var v = (r || []).map(function (f) {
            return typeof f == 'string'
              ? W(f)
              : f.title
              ? Object.assign(Object.assign({}, W(f.color)), { keyword: f.title })
              : W(f.color);
          });
          return v.concat(i).filter(Boolean).slice(-27);
        },
        [r, i],
      ),
      c = rr(
        function (v) {
          !(v != null && v.valid) ||
            u.some(function (f) {
              return ar(f[n]) === ar(v[n]);
            }) ||
            l(function (f) {
              return f.concat(v);
            });
        },
        [n, u],
      );
    return { presets: u, addPreset: c };
  },
  Ia = function (r) {
    var e = r.name,
      n = r.value,
      t = r.onChange,
      o = r.onFocus,
      i = r.onBlur,
      l = r.presetColors,
      u = r.startOpen,
      c = Ca(n, ua(t, 200)),
      v = c.value,
      f = c.realValue,
      y = c.updateValue,
      x = c.color,
      M = c.colorSpace,
      O = c.cycleColorSpace,
      m = Sa(l, x, M),
      h = m.presets,
      d = m.addPreset,
      p = ka[M];
    return g(ca, {
      children: [
        g(sa, {
          trigger: 'click',
          startOpen: u,
          closeOnClick: !0,
          onVisibilityChange: function () {
            return d(x);
          },
          tooltip: g(va, {
            children: [
              g(p, {
                ...Object.assign(
                  { color: f === 'transparent' ? '#000000' : f },
                  { onChange: y, onFocus: o, onBlur: i },
                ),
              }),
              h.length > 0 &&
                g(ha, {
                  children: h.map(function (k, C) {
                    return g(
                      Tr,
                      {
                        hasChrome: !1,
                        tooltip: g(fa, { note: k.keyword || k.value }),
                        children: g(Nr, {
                          value: k[M],
                          active: x && ar(k[M]) === ar(x[M]),
                          onClick: function () {
                            return y(k.value);
                          },
                        }),
                      },
                      ''.concat(k.value, '-').concat(C),
                    );
                  }),
                }),
            ],
          }),
          children: g(Nr, { value: f, style: { margin: 4 } }),
        }),
        g(pa, {
          id: Yr(e),
          value: v,
          onChange: function (C) {
            return y(C.target.value);
          },
          onFocus: function (C) {
            return C.target.select();
          },
          placeholder: 'Choose color...',
        }),
        v ? g(ba, { icon: 'markup', onClick: O }) : null,
      ],
    });
  };
export { Ia as ColorControl, Ia as default };
//# sourceMappingURL=Color-f953d088.901bfe9f.js.map
