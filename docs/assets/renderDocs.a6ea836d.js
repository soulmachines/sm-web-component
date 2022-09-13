import { a3 as n, P as g, L as y } from './iframe.1f3a3e8b.js';
var b = { fontSize: '14px', letterSpacing: '0.2px', margin: '10px 0' },
  k = { margin: 'auto', padding: 30, borderRadius: 10, background: 'rgba(0,0,0,0.03)' },
  w = { textAlign: 'center' },
  m = function () {
    return n('div', {
      style: b,
      className: 'sb-nodocs sb-wrapper',
      children: n('div', {
        style: k,
        children: [
          n('h1', { style: w, children: 'No Docs' }),
          n('p', {
            children: [
              "Sorry, but there are no docs for the selected story. To add them, set the story's\xA0",
              n('code', { children: 'docs' }),
              ' parameter. If you think this is an error:',
            ],
          }),
          n('ul', {
            children: [
              n('li', { children: 'Please check the story definition.' }),
              n('li', { children: 'Please check the Storybook config.' }),
              n('li', { children: 'Try reloading the page.' }),
            ],
          }),
          n('p', {
            children:
              "If the problem persists, check the browser console, or the terminal you've run Storybook from.",
          }),
        ],
      }),
    });
  };
m.displayName = 'NoDocs';
function f(a, i, t, s, d, c, r) {
  try {
    var l = a[c](r),
      o = l.value;
  } catch (u) {
    t(u);
    return;
  }
  l.done ? i(o) : Promise.resolve(o).then(s, d);
}
function P(a) {
  return function () {
    var i = this,
      t = arguments;
    return new Promise(function (s, d) {
      var c = a.apply(i, t);
      function r(o) {
        f(c, s, d, r, l, 'next', o);
      }
      function l(o) {
        f(c, s, d, r, l, 'throw', o);
      }
      r(void 0);
    });
  };
}
function A(a, i, t, s) {
  return D(a, i, t).then(s);
}
function D(a, i, t) {
  return p.apply(this, arguments);
}
function p() {
  return (
    (p = P(
      regeneratorRuntime.mark(function a(i, t, s) {
        var d, c, r, l, o, u;
        return regeneratorRuntime.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((r = i.parameters.docs),
                  !(
                    ((r != null && r.getPage) || (r != null && r.page)) &&
                    !((r != null && r.getContainer) || (r != null && r.container))
                  ))
                ) {
                  e.next = 3;
                  break;
                }
                throw new Error('No `docs.container` set, did you run `addon-docs/preset`?');
              case 3:
                if (((e.t1 = r.container), e.t1)) {
                  e.next = 8;
                  break;
                }
                return (
                  (e.next = 7), (d = r.getContainer) === null || d === void 0 ? void 0 : d.call(r)
                );
              case 7:
                e.t1 = e.sent;
              case 8:
                if (((e.t0 = e.t1), e.t0)) {
                  e.next = 11;
                  break;
                }
                e.t0 = function (h) {
                  var v = h.children;
                  return n(y, { children: v });
                };
              case 11:
                if (((l = e.t0), (e.t3 = r.page), e.t3)) {
                  e.next = 17;
                  break;
                }
                return (e.next = 16), (c = r.getPage) === null || c === void 0 ? void 0 : c.call(r);
              case 16:
                e.t3 = e.sent;
              case 17:
                if (((e.t2 = e.t3), e.t2)) {
                  e.next = 20;
                  break;
                }
                e.t2 = m;
              case 20:
                return (
                  (o = e.t2),
                  (u = n(l, { context: t, children: n(o, {}) }, i.componentId)),
                  (e.next = 24),
                  new Promise(function (h) {
                    g.render(u, s, h);
                  })
                );
              case 24:
              case 'end':
                return e.stop();
            }
        }, a);
      }),
    )),
    p.apply(this, arguments)
  );
}
function C(a) {
  g.unmountComponentAtNode(a);
}
export { A as renderDocs, C as unmountDocs };
//# sourceMappingURL=renderDocs.a6ea836d.js.map
