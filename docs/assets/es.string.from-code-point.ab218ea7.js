import { _ as i, g, f as v, i as s } from './iframe.1f3a3e8b.js';
var d = i,
  f = g,
  l = v,
  m = s,
  u = f.RangeError,
  a = String.fromCharCode,
  e = String.fromCodePoint,
  C = l([].join),
  x = !!e && e.length != 1;
d(
  { target: 'String', stat: !0, forced: x },
  {
    fromCodePoint: function (c) {
      for (var t = [], n = arguments.length, o = 0, r; n > o; ) {
        if (((r = +arguments[o++]), m(r, 1114111) !== r)) throw u(r + ' is not a valid code point');
        t[o] = r < 65536 ? a(r) : a(((r -= 65536) >> 10) + 55296, (r % 1024) + 56320);
      }
      return C(t, '');
    },
  },
);
//# sourceMappingURL=es.string.from-code-point.ab218ea7.js.map
