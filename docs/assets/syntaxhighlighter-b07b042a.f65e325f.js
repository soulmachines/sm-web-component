import { I as ae, a3 as z, V as ee, W as te, J as ne } from './iframe.1f3a3e8b.js';
import {
  c as yr,
  w as Nr,
  _ as oe,
  s as wr,
  S as le,
  a as ie,
  A as se,
  b as ce,
} from './index.ef5de913.js';
import './es.string.from-code-point.ab218ea7.js';
import './es.regexp.flags.50a65004.js';
function ve(r, a, e) {
  return (
    a in r
      ? Object.defineProperty(r, a, { value: e, enumerable: !0, configurable: !0, writable: !0 })
      : (r[a] = e),
    r
  );
}
function wa(r, a) {
  return ge(r) || de(r, a) || pe(r, a) || ue();
}
function ue() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pe(r, a) {
  if (!!r) {
    if (typeof r == 'string') return ra(r, a);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if ((e === 'Object' && r.constructor && (e = r.constructor.name), e === 'Map' || e === 'Set'))
      return Array.from(r);
    if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return ra(r, a);
  }
}
function ra(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, t = new Array(a); e < a; e++) t[e] = r[e];
  return t;
}
function de(r, a) {
  var e = r == null ? null : (typeof Symbol < 'u' && r[Symbol.iterator]) || r['@@iterator'];
  if (e != null) {
    var t = [],
      o = !0,
      s = !1,
      p,
      l;
    try {
      for (
        e = e.call(r);
        !(o = (p = e.next()).done) && (t.push(p.value), !(a && t.length === a));
        o = !0
      );
    } catch (f) {
      (s = !0), (l = f);
    } finally {
      try {
        !o && e.return != null && e.return();
      } finally {
        if (s) throw l;
      }
    }
    return t;
  }
}
function ge(r) {
  if (Array.isArray(r)) return r;
}
function J(r) {
  return (
    (J =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              typeof Symbol == 'function' &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? 'symbol'
              : typeof a;
          }),
    J(r)
  );
}
var xa = Tr;
Tr.displayName = 'jsx';
Tr.aliases = [];
function Tr(r) {
  (function (a) {
    var e = a.util.clone(a.languages.javascript),
      t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
      o = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
      s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function p(x, m) {
      return (
        (x = x
          .replace(/<S>/g, function () {
            return t;
          })
          .replace(/<BRACES>/g, function () {
            return o;
          })
          .replace(/<SPREAD>/g, function () {
            return s;
          })),
        RegExp(x, m)
      );
    }
    (s = p(s).source),
      (a.languages.jsx = a.languages.extend('markup', e)),
      (a.languages.jsx.tag.pattern = p(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
          .source,
      )),
      (a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (a.languages.jsx.tag.inside['attr-value'].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (a.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
      (a.languages.jsx.tag.inside.comment = e.comment),
      a.languages.insertBefore(
        'inside',
        'attr-name',
        { spread: { pattern: p(/<SPREAD>/.source), inside: a.languages.jsx } },
        a.languages.jsx.tag,
      ),
      a.languages.insertBefore(
        'inside',
        'special-attr',
        {
          script: {
            pattern: p(/=<BRACES>/.source),
            alias: 'language-javascript',
            inside: {
              'script-punctuation': { pattern: /^=(?=\{)/, alias: 'punctuation' },
              rest: a.languages.jsx,
            },
          },
        },
        a.languages.jsx.tag,
      );
    var l = function x(m) {
        return m
          ? typeof m == 'string'
            ? m
            : typeof m.content == 'string'
            ? m.content
            : m.content.map(x).join('')
          : '';
      },
      f = function x(m) {
        for (var d = [], h = 0; h < m.length; h++) {
          var b = m[h],
            L = !1;
          if (
            (typeof b != 'string' &&
              (b.type === 'tag' && b.content[0] && b.content[0].type === 'tag'
                ? b.content[0].content[0].content === '</'
                  ? d.length > 0 &&
                    d[d.length - 1].tagName === l(b.content[0].content[1]) &&
                    d.pop()
                  : b.content[b.content.length - 1].content === '/>' ||
                    d.push({ tagName: l(b.content[0].content[1]), openedBraces: 0 })
                : d.length > 0 && b.type === 'punctuation' && b.content === '{'
                ? d[d.length - 1].openedBraces++
                : d.length > 0 &&
                  d[d.length - 1].openedBraces > 0 &&
                  b.type === 'punctuation' &&
                  b.content === '}'
                ? d[d.length - 1].openedBraces--
                : (L = !0)),
            (L || typeof b == 'string') && d.length > 0 && d[d.length - 1].openedBraces === 0)
          ) {
            var A = l(b);
            h < m.length - 1 &&
              (typeof m[h + 1] == 'string' || m[h + 1].type === 'plain-text') &&
              ((A += l(m[h + 1])), m.splice(h + 1, 1)),
              h > 0 &&
                (typeof m[h - 1] == 'string' || m[h - 1].type === 'plain-text') &&
                ((A = l(m[h - 1]) + A), m.splice(h - 1, 1), h--),
              (m[h] = new a.Token('plain-text', A, null, A));
          }
          b.content && typeof b.content != 'string' && x(b.content);
        }
      };
    a.hooks.add('after-tokenize', function (x) {
      (x.language !== 'jsx' && x.language !== 'tsx') || f(x.tokens);
    });
  })(r);
}
var fe = xa,
  me = $r;
$r.displayName = 'bash';
$r.aliases = ['shell'];
function $r(r) {
  (function (a) {
    var e =
        '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
      t = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: !0,
        alias: 'punctuation',
        inside: null,
      },
      o = {
        bash: t,
        environment: { pattern: RegExp('\\$' + e), alias: 'constant' },
        variable: [
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: !0,
            inside: {
              variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
              number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              punctuation: /\(\(?|\)\)?|,|;/,
            },
          },
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: !0,
            inside: { variable: /^\$\(|^`|\)$|`$/ },
          },
          {
            pattern: /\$\{[^}]+\}/,
            greedy: !0,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: { pattern: RegExp('(\\{)' + e), lookbehind: !0, alias: 'constant' },
            },
          },
          /\$(?:\w+|[#?*!@$])/,
        ],
        entity:
          /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
      };
    (a.languages.bash = {
      shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
      comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
      'function-name': [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: !0,
          alias: 'function',
        },
        { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
      ],
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: !0,
      },
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + e),
            lookbehind: !0,
            alias: 'constant',
          },
        },
        alias: 'variable',
        lookbehind: !0,
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: !0,
          greedy: !0,
          inside: o,
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: !0,
          greedy: !0,
          inside: { bash: t },
        },
        {
          pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: !0,
          greedy: !0,
          inside: o,
        },
        { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
        { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: o.entity } },
      ],
      environment: { pattern: RegExp('\\$?' + e), alias: 'constant' },
      variable: o.variable,
      function: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      keyword: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      builtin: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: 'class-name',
      },
      boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 },
      'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
      operator: {
        pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
    }),
      (t.inside = a.languages.bash);
    for (
      var s = [
          'comment',
          'function-name',
          'for-or-select',
          'assign-left',
          'string',
          'environment',
          'function',
          'keyword',
          'builtin',
          'boolean',
          'file-descriptor',
          'operator',
          'punctuation',
          'number',
        ],
        p = o.variable[1].inside,
        l = 0;
      l < s.length;
      l++
    )
      p[s[l]] = a.languages.bash[s[l]];
    a.languages.shell = a.languages.bash;
  })(r);
}
var he = me,
  Sa = Dr;
Dr.displayName = 'css';
Dr.aliases = [];
function Dr(r) {
  (function (a) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (a.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: 'selector',
          },
          keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
        },
      },
      url: {
        pattern: RegExp(
          '\\burl\\((?:' + e.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
          'i',
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp('^' + e.source + '$'), alias: 'url' },
        },
      },
      selector: {
        pattern: RegExp(
          `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + e.source + ')*(?=\\s*\\{)',
        ),
        lookbehind: !0,
      },
      string: { pattern: e, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/,
    }),
      (a.languages.css.atrule.inside.rest = a.languages.css);
    var t = a.languages.markup;
    t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'));
  })(r);
}
var be = Sa,
  ye = Cr;
Cr.displayName = 'jsExtras';
Cr.aliases = [];
function Cr(r) {
  (function (a) {
    a.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp('(\\.\\s*)' + a.languages.javascript['function-variable'].pattern.source),
        lookbehind: !0,
        alias: ['function-variable', 'method', 'function', 'property-access'],
      },
    }),
      a.languages.insertBefore('javascript', 'function', {
        method: {
          pattern: RegExp('(\\.\\s*)' + a.languages.javascript.function.source),
          lookbehind: !0,
          alias: ['function', 'property-access'],
        },
      }),
      a.languages.insertBefore('javascript', 'constant', {
        'known-class-name': [
          {
            pattern:
              /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: 'class-name',
          },
          { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
        ],
      });
    function e(f, x) {
      return RegExp(
        f.replace(/<ID>/g, function () {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
        }),
        x,
      );
    }
    a.languages.insertBefore('javascript', 'keyword', {
      imports: {
        pattern: e(
          /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
            .source,
        ),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
      exports: {
        pattern: e(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
        lookbehind: !0,
        inside: a.languages.javascript,
      },
    }),
      a.languages.javascript.keyword.unshift(
        { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
        {
          pattern:
            /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: 'control-flow',
        },
        { pattern: /\bnull\b/, alias: ['null', 'nil'] },
        { pattern: /\bundefined\b/, alias: 'nil' },
      ),
      a.languages.insertBefore('javascript', 'operator', {
        spread: { pattern: /\.{3}/, alias: 'operator' },
        arrow: { pattern: /=>/, alias: 'operator' },
      }),
      a.languages.insertBefore('javascript', 'punctuation', {
        'property-access': { pattern: e(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
        'maybe-class-name': {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: !0,
        },
        dom: {
          pattern:
            /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: 'variable',
        },
        console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
      });
    for (
      var t = ['function', 'function-variable', 'method', 'method-variable', 'property-access'],
        o = 0;
      o < t.length;
      o++
    ) {
      var s = t[o],
        p = a.languages.javascript[s];
      a.util.type(p) === 'RegExp' && (p = a.languages.javascript[s] = { pattern: p });
      var l = p.inside || {};
      (p.inside = l), (l['maybe-class-name'] = /^[A-Z][\s\S]*/);
    }
  })(r);
}
var we = ye,
  xe = Rr;
Rr.displayName = 'json';
Rr.aliases = ['webmanifest'];
function Rr(r) {
  (r.languages.json = {
    property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
    string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' },
  }),
    (r.languages.webmanifest = r.languages.json);
}
var Se = xe,
  qe = Ir;
Ir.displayName = 'graphql';
Ir.aliases = [];
function Ir(r) {
  (r.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: 'string',
      inside: {
        'language-markdown': {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: r.languages.markdown,
        },
      },
    },
    string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
    'attr-name': {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0,
    },
    'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    'class-name': {
      pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0,
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-mutation': {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function',
    },
    'definition-query': { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
    keyword:
      /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    'property-query': /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/,
  }),
    r.hooks.add('after-tokenize', function (e) {
      if (e.language !== 'graphql') return;
      var t = e.tokens.filter(function (q) {
          return typeof q != 'string' && q.type !== 'comment' && q.type !== 'scalar';
        }),
        o = 0;
      function s(q) {
        return t[o + q];
      }
      function p(q, E) {
        E = E || 0;
        for (var c = 0; c < q.length; c++) {
          var n = s(c + E);
          if (!n || n.type !== q[c]) return !1;
        }
        return !0;
      }
      function l(q, E) {
        for (var c = 1, n = o; n < t.length; n++) {
          var v = t[n],
            u = v.content;
          if (v.type === 'punctuation' && typeof u == 'string') {
            if (q.test(u)) c++;
            else if (E.test(u) && (c--, c === 0)) return n;
          }
        }
        return -1;
      }
      function f(q, E) {
        var c = q.alias;
        c ? Array.isArray(c) || (q.alias = c = [c]) : (q.alias = c = []), c.push(E);
      }
      for (; o < t.length; ) {
        var x = t[o++];
        if (x.type === 'keyword' && x.content === 'mutation') {
          var m = [];
          if (p(['definition-mutation', 'punctuation']) && s(1).content === '(') {
            o += 2;
            var d = l(/^\($/, /^\)$/);
            if (d === -1) continue;
            for (; o < d; o++) {
              var h = s(0);
              h.type === 'variable' && (f(h, 'variable-input'), m.push(h.content));
            }
            o = d + 1;
          }
          if (
            p(['punctuation', 'property-query']) &&
            s(0).content === '{' &&
            (o++, f(s(0), 'property-mutation'), m.length > 0)
          ) {
            var b = l(/^\{$/, /^\}$/);
            if (b === -1) continue;
            for (var L = o; L < b; L++) {
              var A = t[L];
              A.type === 'variable' && m.indexOf(A.content) >= 0 && f(A, 'variable-input');
            }
          }
        }
      }
    });
}
var Ae = qe,
  qa = Or;
Or.displayName = 'markup';
Or.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss'];
function Or(r) {
  (r.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] },
        },
        punctuation: /\/?>/,
        'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
      },
    },
    entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
  }),
    (r.languages.markup.tag.inside['attr-value'].inside.entity = r.languages.markup.entity),
    (r.languages.markup.doctype.inside['internal-subset'].inside = r.languages.markup),
    r.hooks.add('wrap', function (a) {
      a.type === 'entity' && (a.attributes.title = a.content.value.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(r.languages.markup.tag, 'addInlined', {
      value: function (e, t) {
        var o = {};
        (o['language-' + t] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: r.languages[t],
        }),
          (o.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var s = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: o } };
        s['language-' + t] = { pattern: /[\s\S]+/, inside: r.languages[t] };
        var p = {};
        (p[e] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return e;
              },
            ),
            'i',
          ),
          lookbehind: !0,
          greedy: !0,
          inside: s,
        }),
          r.languages.insertBefore('markup', 'cdata', p);
      },
    }),
    Object.defineProperty(r.languages.markup.tag, 'addAttribute', {
      value: function (e, t) {
        r.languages.markup.tag.inside['special-attr'].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              '(?:' +
              e +
              ')' +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            'i',
          ),
          lookbehind: !0,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [t, 'language-' + t],
                  inside: r.languages[t],
                },
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (r.languages.html = r.languages.markup),
    (r.languages.mathml = r.languages.markup),
    (r.languages.svg = r.languages.markup),
    (r.languages.xml = r.languages.extend('markup', {})),
    (r.languages.ssml = r.languages.xml),
    (r.languages.atom = r.languages.xml),
    (r.languages.rss = r.languages.xml);
}
var Ee = qa,
  ke = Fr;
Fr.displayName = 'markdown';
Fr.aliases = ['md'];
function Fr(r) {
  (function (a) {
    var e = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function t(d) {
      return (
        (d = d.replace(/<inner>/g, function () {
          return e;
        })),
        RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + d + ')')
      );
    }
    var o = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
      s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
        return o;
      }),
      p = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
    (a.languages.markdown = a.languages.extend('markup', {})),
      a.languages.insertBefore('markdown', 'prolog', {
        'front-matter-block': {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            punctuation: /^---|---$/,
            'front-matter': {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ['yaml', 'language-yaml'],
              inside: a.languages.yaml,
            },
          },
        },
        blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
        table: {
          pattern: RegExp('^' + s + p + '(?:' + s + ')*', 'm'),
          inside: {
            'table-data-rows': {
              pattern: RegExp('^(' + s + p + ')(?:' + s + ')*$'),
              lookbehind: !0,
              inside: {
                'table-data': { pattern: RegExp(o), inside: a.languages.markdown },
                punctuation: /\|/,
              },
            },
            'table-line': {
              pattern: RegExp('^(' + s + ')' + p + '$'),
              lookbehind: !0,
              inside: { punctuation: /\||:?-{3,}:?/ },
            },
            'table-header-row': {
              pattern: RegExp('^' + s + '$'),
              inside: {
                'table-header': {
                  pattern: RegExp(o),
                  alias: 'important',
                  inside: a.languages.markdown,
                },
                punctuation: /\|/,
              },
            },
          },
        },
        code: [
          {
            pattern:
              /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: 'keyword',
          },
          {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
              'code-block': {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: !0,
              },
              'code-language': { pattern: /^(```).+/, lookbehind: !0 },
              punctuation: /```/,
            },
          },
        ],
        title: [
          {
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: 'important',
            inside: { punctuation: /==+$|--+$/ },
          },
          {
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: 'important',
            inside: { punctuation: /^#+|#+$/ },
          },
        ],
        hr: {
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: !0,
          alias: 'punctuation',
        },
        list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: 'punctuation' },
        'url-reference': {
          pattern:
            /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/,
          },
          alias: 'url',
        },
        bold: {
          pattern: t(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
              .source,
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} },
            punctuation: /\*\*|__/,
          },
        },
        italic: {
          pattern: t(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
              .source,
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
            punctuation: /[*_]/,
          },
        },
        strike: {
          pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} },
            punctuation: /~~?/,
          },
        },
        'code-snippet': {
          pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: !0,
          greedy: !0,
          alias: ['code', 'keyword'],
        },
        url: {
          pattern: t(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
              .source,
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            operator: /^!/,
            content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
            variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
            url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
            string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 },
          },
        },
      }),
      ['url', 'bold', 'italic', 'strike'].forEach(function (d) {
        ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (h) {
          d !== h && (a.languages.markdown[d].inside.content.inside[h] = a.languages.markdown[h]);
        });
      }),
      a.hooks.add('after-tokenize', function (d) {
        if (d.language !== 'markdown' && d.language !== 'md') return;
        function h(b) {
          if (!(!b || typeof b == 'string'))
            for (var L = 0, A = b.length; L < A; L++) {
              var q = b[L];
              if (q.type !== 'code') {
                h(q.content);
                continue;
              }
              var E = q.content[1],
                c = q.content[3];
              if (
                E &&
                c &&
                E.type === 'code-language' &&
                c.type === 'code-block' &&
                typeof E.content == 'string'
              ) {
                var n = E.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp');
                n = (/[a-z][\w-]*/i.exec(n) || [''])[0].toLowerCase();
                var v = 'language-' + n;
                c.alias
                  ? typeof c.alias == 'string'
                    ? (c.alias = [c.alias, v])
                    : c.alias.push(v)
                  : (c.alias = [v]);
              }
            }
        }
        h(d.tokens);
      }),
      a.hooks.add('wrap', function (d) {
        if (d.type === 'code-block') {
          for (var h = '', b = 0, L = d.classes.length; b < L; b++) {
            var A = d.classes[b],
              q = /language-(.+)/.exec(A);
            if (q) {
              h = q[1];
              break;
            }
          }
          var E = a.languages[h];
          if (E) d.content = a.highlight(m(d.content.value), E, h);
          else if (h && h !== 'none' && a.plugins.autoloader) {
            var c = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
            (d.attributes.id = c),
              a.plugins.autoloader.loadLanguages(h, function () {
                var n = document.getElementById(c);
                n && (n.innerHTML = a.highlight(n.textContent, a.languages[h], h));
              });
          }
        }
      });
    var l = RegExp(a.languages.markup.tag.pattern.source, 'gi'),
      f = { amp: '&', lt: '<', gt: '>', quot: '"' },
      x = String.fromCodePoint || String.fromCharCode;
    function m(d) {
      var h = d.replace(l, '');
      return (
        (h = h.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (b, L) {
          if (((L = L.toLowerCase()), L[0] === '#')) {
            var A;
            return L[1] === 'x' ? (A = parseInt(L.slice(2), 16)) : (A = Number(L.slice(1))), x(A);
          } else {
            var q = f[L];
            return q || b;
          }
        })),
        h
      );
    }
    a.languages.md = a.languages.markdown;
  })(r);
}
var Le = ke,
  Ne = Ur;
Ur.displayName = 'yaml';
Ur.aliases = ['yml'];
function Ur(r) {
  (function (a) {
    var e = /[*&][^\s[\]{},]+/,
      t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
      o = '(?:' + t.source + '(?:[ 	]+' + e.source + ')?|' + e.source + '(?:[ 	]+' + t.source + ')?)',
      s =
        /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
          /<PLAIN>/g,
          function () {
            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
              .source;
          },
        ),
      p = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function l(f, x) {
      x = (x || '').replace(/m/g, '') + 'm';
      var m =
        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
          .replace(/<<prop>>/g, function () {
            return o;
          })
          .replace(/<<value>>/g, function () {
            return f;
          });
      return RegExp(m, x);
    }
    (a.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return o;
            },
          ),
        ),
        lookbehind: !0,
        alias: 'string',
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return o;
            })
            .replace(/<<key>>/g, function () {
              return '(?:' + s + '|' + p + ')';
            }),
        ),
        lookbehind: !0,
        greedy: !0,
        alias: 'atrule',
      },
      directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
      datetime: {
        pattern: l(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source,
        ),
        lookbehind: !0,
        alias: 'number',
      },
      boolean: { pattern: l(/false|true/.source, 'i'), lookbehind: !0, alias: 'important' },
      null: { pattern: l(/null|~/.source, 'i'), lookbehind: !0, alias: 'important' },
      string: { pattern: l(p), lookbehind: !0, greedy: !0 },
      number: {
        pattern: l(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,
          'i',
        ),
        lookbehind: !0,
      },
      tag: t,
      important: e,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
    }),
      (a.languages.yml = a.languages.yaml);
  })(r);
}
var Te = Ne,
  Aa = _r;
_r.displayName = 'typescript';
_r.aliases = ['ts'];
function _r(r) {
  (function (a) {
    (a.languages.typescript = a.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    })),
      a.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/,
      ),
      delete a.languages.typescript.parameter,
      delete a.languages.typescript['literal-property'];
    var e = a.languages.extend('typescript', {});
    delete e['class-name'],
      (a.languages.typescript['class-name'].inside = e),
      a.languages.insertBefore('typescript', 'function', {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ },
        },
        'generic-function': {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: e },
          },
        },
      }),
      (a.languages.ts = a.languages.typescript);
  })(r);
}
var $e = Aa,
  De = xa,
  Ce = Aa,
  Re = Br;
Br.displayName = 'tsx';
Br.aliases = [];
function Br(r) {
  r.register(De),
    r.register(Ce),
    (function (a) {
      var e = a.util.clone(a.languages.typescript);
      (a.languages.tsx = a.languages.extend('jsx', e)),
        delete a.languages.tsx.parameter,
        delete a.languages.tsx['literal-property'];
      var t = a.languages.tsx.tag;
      (t.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + '(?:' + t.pattern.source + ')',
        t.pattern.flags,
      )),
        (t.lookbehind = !0);
    })(r);
}
var Ie = Re;
function Oe(r, a) {
  if (r == null) return {};
  var e = ce(r, a),
    t,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    for (o = 0; o < s.length; o++)
      (t = s[o]),
        !(a.indexOf(t) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(r, t) || (e[t] = r[t]));
  }
  return e;
}
function Er(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var e = 0, t = new Array(a); e < a; e++) t[e] = r[e];
  return t;
}
function Fe(r) {
  if (Array.isArray(r)) return Er(r);
}
function Ue(r) {
  if ((typeof Symbol < 'u' && r[Symbol.iterator] != null) || r['@@iterator'] != null)
    return Array.from(r);
}
function _e(r, a) {
  if (!!r) {
    if (typeof r == 'string') return Er(r, a);
    var e = Object.prototype.toString.call(r).slice(8, -1);
    if ((e === 'Object' && r.constructor && (e = r.constructor.name), e === 'Map' || e === 'Set'))
      return Array.from(r);
    if (e === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return Er(r, a);
  }
}
function Be() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function je(r) {
  return Fe(r) || Ue(r) || _e(r) || Be();
}
function He(r, a, e) {
  return (
    a in r
      ? Object.defineProperty(r, a, { value: e, enumerable: !0, configurable: !0, writable: !0 })
      : (r[a] = e),
    r
  );
}
function rr(r) {
  for (var a = 1; a < arguments.length; a++) {
    var e = arguments[a] != null ? Object(arguments[a]) : {},
      t = Object.keys(e);
    typeof Object.getOwnPropertySymbols == 'function' &&
      t.push.apply(
        t,
        Object.getOwnPropertySymbols(e).filter(function (o) {
          return Object.getOwnPropertyDescriptor(e, o).enumerable;
        }),
      ),
      t.forEach(function (o) {
        He(r, o, e[o]);
      });
  }
  return r;
}
function Ve(r) {
  var a = r.length;
  if (a === 0 || a === 1) return r;
  if (a === 2)
    return [r[0], r[1], ''.concat(r[0], '.').concat(r[1]), ''.concat(r[1], '.').concat(r[0])];
  if (a === 3)
    return [
      r[0],
      r[1],
      r[2],
      ''.concat(r[0], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[2]),
      ''.concat(r[2], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[0]),
    ];
  if (a >= 4)
    return [
      r[0],
      r[1],
      r[2],
      r[3],
      ''.concat(r[0], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[3]),
      ''.concat(r[3], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[3]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[3]),
      ''.concat(r[0], '.').concat(r[3], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[3], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[3], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[3], '.').concat(r[2]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[3], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[3], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[3], '.').concat(r[1], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[3], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[2], '.').concat(r[3]),
      ''.concat(r[0], '.').concat(r[1], '.').concat(r[3], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[1], '.').concat(r[3]),
      ''.concat(r[0], '.').concat(r[2], '.').concat(r[3], '.').concat(r[1]),
      ''.concat(r[0], '.').concat(r[3], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[0], '.').concat(r[3], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[2], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[0], '.').concat(r[3], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[0], '.').concat(r[3]),
      ''.concat(r[1], '.').concat(r[2], '.').concat(r[3], '.').concat(r[0]),
      ''.concat(r[1], '.').concat(r[3], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[1], '.').concat(r[3], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[1], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[0], '.').concat(r[3], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[0], '.').concat(r[3]),
      ''.concat(r[2], '.').concat(r[1], '.').concat(r[3], '.').concat(r[0]),
      ''.concat(r[2], '.').concat(r[3], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[2], '.').concat(r[3], '.').concat(r[1], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[0], '.').concat(r[1], '.').concat(r[2]),
      ''.concat(r[3], '.').concat(r[0], '.').concat(r[2], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[1], '.').concat(r[0], '.').concat(r[2]),
      ''.concat(r[3], '.').concat(r[1], '.').concat(r[2], '.').concat(r[0]),
      ''.concat(r[3], '.').concat(r[2], '.').concat(r[0], '.').concat(r[1]),
      ''.concat(r[3], '.').concat(r[2], '.').concat(r[1], '.').concat(r[0]),
    ];
}
var Ar = {};
function Ge(r) {
  if (r.length === 0 || r.length === 1) return r;
  var a = r.join('.');
  return Ar[a] || (Ar[a] = Ve(r)), Ar[a];
}
function ze(r) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    e = arguments.length > 2 ? arguments[2] : void 0,
    t = r.filter(function (s) {
      return s !== 'token';
    }),
    o = Ge(t);
  return o.reduce(function (s, p) {
    return rr({}, s, e[p]);
  }, a);
}
function aa(r) {
  return r.join(' ');
}
function Me(r, a) {
  var e = 0;
  return function (t) {
    return (
      (e += 1),
      t.map(function (o, s) {
        return Ea({
          node: o,
          stylesheet: r,
          useInlineStyles: a,
          key: 'code-segment-'.concat(e, '-').concat(s),
        });
      })
    );
  };
}
function Ea(r) {
  var a = r.node,
    e = r.stylesheet,
    t = r.style,
    o = t === void 0 ? {} : t,
    s = r.useInlineStyles,
    p = r.key,
    l = a.properties,
    f = a.type,
    x = a.tagName,
    m = a.value;
  if (f === 'text') return m;
  if (x) {
    var d = Me(e, s),
      h;
    if (!s) h = rr({}, l, { className: aa(l.className) });
    else {
      var b = Object.keys(e).reduce(function (E, c) {
          return (
            c.split('.').forEach(function (n) {
              E.includes(n) || E.push(n);
            }),
            E
          );
        }, []),
        L = l.className && l.className.includes('token') ? ['token'] : [],
        A =
          l.className &&
          L.concat(
            l.className.filter(function (E) {
              return !b.includes(E);
            }),
          );
      h = rr({}, l, {
        className: aa(A) || void 0,
        style: ze(l.className, Object.assign({}, l.style, o), e),
      });
    }
    var q = d(a.children);
    return z(x, { ...h, children: q }, p);
  }
}
var Pe = function (a, e) {
    var t = a.listLanguages();
    return t.indexOf(e) !== -1;
  },
  Ze = /\n/g;
function We(r) {
  return r.match(Ze);
}
function Ye(r) {
  var a = r.lines,
    e = r.startingLineNumber,
    t = r.style;
  return a.map(function (o, s) {
    var p = s + e;
    return z(
      'span',
      {
        className: 'react-syntax-highlighter-line-number',
        style: typeof t == 'function' ? t(p) : t,
        children: ''.concat(
          p,
          `
`,
        ),
      },
      'line-'.concat(s),
    );
  });
}
function Je(r) {
  var a = r.codeString,
    e = r.codeStyle,
    t = r.containerStyle,
    o = t === void 0 ? { float: 'left', paddingRight: '10px' } : t,
    s = r.numberStyle,
    p = s === void 0 ? {} : s,
    l = r.startingLineNumber;
  return z('code', {
    style: Object.assign({}, e, o),
    children: Ye({
      lines: a.replace(/\n$/, '').split(`
`),
      style: p,
      startingLineNumber: l,
    }),
  });
}
function Ke(r) {
  return ''.concat(r.toString().length, '.25em');
}
function ka(r, a) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(r),
      className: ['comment', 'linenumber', 'react-syntax-highlighter-line-number'],
      style: a,
    },
    children: [{ type: 'text', value: r }],
  };
}
function La(r, a, e) {
  var t = {
      display: 'inline-block',
      minWidth: Ke(e),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none',
    },
    o = typeof r == 'function' ? r(a) : r,
    s = rr({}, t, o);
  return s;
}
function br(r) {
  var a = r.children,
    e = r.lineNumber,
    t = r.lineNumberStyle,
    o = r.largestLineNumber,
    s = r.showInlineLineNumbers,
    p = r.lineProps,
    l = p === void 0 ? {} : p,
    f = r.className,
    x = f === void 0 ? [] : f,
    m = r.showLineNumbers,
    d = r.wrapLongLines,
    h = typeof l == 'function' ? l(e) : l;
  if (((h.className = x), e && s)) {
    var b = La(t, e, o);
    a.unshift(ka(e, b));
  }
  return (
    d & m && (h.style = rr({}, h.style, { display: 'flex' })),
    { type: 'element', tagName: 'span', properties: h, children: a }
  );
}
function Na(r) {
  for (
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      t = 0;
    t < r.length;
    t++
  ) {
    var o = r[t];
    if (o.type === 'text') e.push(br({ children: [o], className: je(new Set(a)) }));
    else if (o.children) {
      var s = a.concat(o.properties.className);
      e = e.concat(Na(o.children, s));
    }
  }
  return e;
}
function Xe(r, a, e, t, o, s, p, l, f) {
  var x,
    m = Na(r.value),
    d = [],
    h = -1,
    b = 0;
  function L(u, i) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return br({
      children: u,
      lineNumber: i,
      lineNumberStyle: l,
      largestLineNumber: p,
      showInlineLineNumbers: o,
      lineProps: e,
      className: g,
      showLineNumbers: t,
      wrapLongLines: f,
    });
  }
  function A(u, i) {
    if (t && i && o) {
      var g = La(l, i, p);
      u.unshift(ka(i, g));
    }
    return u;
  }
  function q(u, i) {
    var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return a || g.length > 0 ? L(u, i, g) : A(u, i);
  }
  for (
    var E = function () {
      var i = m[b],
        g = i.children[0].value,
        y = We(g);
      if (y) {
        var w = g.split(`
`);
        w.forEach(function (S, N) {
          var R = t && d.length + s,
            I = {
              type: 'text',
              value: ''.concat(
                S,
                `
`,
              ),
            };
          if (N === 0) {
            var G = m
                .slice(h + 1, b)
                .concat(br({ children: [I], className: i.properties.className })),
              j = q(G, R);
            d.push(j);
          } else if (N === w.length - 1) {
            var _ = m[b + 1] && m[b + 1].children && m[b + 1].children[0];
            if (_) {
              var K = { type: 'text', value: ''.concat(S) },
                T = br({ children: [K], className: i.properties.className });
              m.splice(b + 1, 0, T);
            } else {
              var O = [I],
                C = q(O, R, i.properties.className);
              d.push(C);
            }
          } else {
            var $ = [I],
              F = q($, R, i.properties.className);
            d.push(F);
          }
        }),
          (h = b);
      }
      b++;
    };
    b < m.length;

  )
    E();
  if (h !== m.length - 1) {
    var c = m.slice(h + 1, m.length);
    if (c && c.length) {
      var n = t && d.length + s,
        v = q(c, n);
      d.push(v);
    }
  }
  return a ? d : (x = []).concat.apply(x, d);
}
function Qe(r) {
  var a = r.rows,
    e = r.stylesheet,
    t = r.useInlineStyles;
  return a.map(function (o, s) {
    return Ea({ node: o, stylesheet: e, useInlineStyles: t, key: 'code-segement'.concat(s) });
  });
}
function Ta(r) {
  return r && typeof r.highlightAuto < 'u';
}
function rt(r) {
  var a = r.astGenerator,
    e = r.language,
    t = r.code,
    o = r.defaultCodeValue;
  if (Ta(a)) {
    var s = Pe(a, e);
    return e === 'text'
      ? { value: o, language: 'text' }
      : s
      ? a.highlight(e, t)
      : a.highlightAuto(t);
  }
  try {
    return e && e !== 'text' ? { value: a.highlight(t, e) } : { value: o };
  } catch {
    return { value: o };
  }
}
function at(r, a) {
  return function (t) {
    var o = t.language,
      s = t.children,
      p = t.style,
      l = p === void 0 ? a : p,
      f = t.customStyle,
      x = f === void 0 ? {} : f,
      m = t.codeTagProps,
      d =
        m === void 0
          ? {
              className: o ? 'language-'.concat(o) : void 0,
              style: rr(
                {},
                l['code[class*="language-"]'],
                l['code[class*="language-'.concat(o, '"]')],
              ),
            }
          : m,
      h = t.useInlineStyles,
      b = h === void 0 ? !0 : h,
      L = t.showLineNumbers,
      A = L === void 0 ? !1 : L,
      q = t.showInlineLineNumbers,
      E = q === void 0 ? !0 : q,
      c = t.startingLineNumber,
      n = c === void 0 ? 1 : c,
      v = t.lineNumberContainerStyle,
      u = t.lineNumberStyle,
      i = u === void 0 ? {} : u,
      g = t.wrapLines,
      y = t.wrapLongLines,
      w = y === void 0 ? !1 : y,
      S = t.lineProps,
      N = S === void 0 ? {} : S,
      R = t.renderer,
      I = t.PreTag,
      G = I === void 0 ? 'pre' : I,
      j = t.CodeTag,
      _ = j === void 0 ? 'code' : j,
      K = t.code,
      T = K === void 0 ? (Array.isArray(s) ? s[0] : s) : K,
      O = t.astGenerator,
      C = Oe(t, [
        'language',
        'children',
        'style',
        'customStyle',
        'codeTagProps',
        'useInlineStyles',
        'showLineNumbers',
        'showInlineLineNumbers',
        'startingLineNumber',
        'lineNumberContainerStyle',
        'lineNumberStyle',
        'wrapLines',
        'wrapLongLines',
        'lineProps',
        'renderer',
        'PreTag',
        'CodeTag',
        'code',
        'astGenerator',
      ]);
    O = O || r;
    var $ = A
        ? z(Je, {
            containerStyle: v,
            codeStyle: d.style || {},
            numberStyle: i,
            startingLineNumber: n,
            codeString: T,
          })
        : null,
      F = l.hljs || l['pre[class*="language-"]'] || { backgroundColor: '#fff' },
      nr = Ta(O) ? 'hljs' : 'prismjs',
      H = b
        ? Object.assign({}, C, { style: Object.assign({}, F, x) })
        : Object.assign({}, C, {
            className: C.className ? ''.concat(nr, ' ').concat(C.className) : nr,
            style: Object.assign({}, x),
          });
    if (!O) return z(G, { ...H, children: [$, z(_, { ...d, children: T })] });
    ((g === void 0 && R) || w) && (g = !0), (R = R || Qe);
    var Y = [{ type: 'text', value: T }],
      M = rt({ astGenerator: O, language: o, code: T, defaultCodeValue: Y });
    M.language === null && (M.value = Y);
    var X = M.value.length + n,
      sr = Xe(M, g, N, A, E, n, X, i, w);
    return (
      w
        ? (d.style = rr({}, d.style, { whiteSpace: 'pre-wrap' }))
        : (d.style = rr({}, d.style, { whiteSpace: 'pre' })),
      z(G, {
        ...H,
        children: z(_, {
          ...d,
          children: [!E && $, R({ rows: sr, stylesheet: l, useInlineStyles: b })],
        }),
      })
    );
  };
}
var et = nt,
  tt = Object.prototype.hasOwnProperty;
function nt() {
  for (var r = {}, a = 0; a < arguments.length; a++) {
    var e = arguments[a];
    for (var t in e) tt.call(e, t) && (r[t] = e[t]);
  }
  return r;
}
var $a = Da,
  jr = Da.prototype;
jr.space = null;
jr.normal = {};
jr.property = {};
function Da(r, a, e) {
  (this.property = r), (this.normal = a), e && (this.space = e);
}
var ea = et,
  ot = $a,
  lt = it;
function it(r) {
  for (var a = r.length, e = [], t = [], o = -1, s, p; ++o < a; )
    (s = r[o]), e.push(s.property), t.push(s.normal), (p = s.space);
  return new ot(ea.apply(null, e), ea.apply(null, t), p);
}
var Hr = st;
function st(r) {
  return r.toLowerCase();
}
var Ca = Ra,
  Z = Ra.prototype;
Z.space = null;
Z.attribute = null;
Z.property = null;
Z.boolean = !1;
Z.booleanish = !1;
Z.overloadedBoolean = !1;
Z.number = !1;
Z.commaSeparated = !1;
Z.spaceSeparated = !1;
Z.commaOrSpaceSeparated = !1;
Z.mustUseProperty = !1;
Z.defined = !1;
function Ra(r, a) {
  (this.property = r), (this.attribute = a);
}
var Q = {},
  ct = 0;
Q.boolean = tr();
Q.booleanish = tr();
Q.overloadedBoolean = tr();
Q.number = tr();
Q.spaceSeparated = tr();
Q.commaSeparated = tr();
Q.commaOrSpaceSeparated = tr();
function tr() {
  return Math.pow(2, ++ct);
}
var Ia = Ca,
  ta = Q,
  Oa = Vr;
Vr.prototype = new Ia();
Vr.prototype.defined = !0;
var Fa = [
    'boolean',
    'booleanish',
    'overloadedBoolean',
    'number',
    'commaSeparated',
    'spaceSeparated',
    'commaOrSpaceSeparated',
  ],
  vt = Fa.length;
function Vr(r, a, e, t) {
  var o = -1,
    s;
  for (na(this, 'space', t), Ia.call(this, r, a); ++o < vt; )
    (s = Fa[o]), na(this, s, (e & ta[s]) === ta[s]);
}
function na(r, a, e) {
  e && (r[a] = e);
}
var oa = Hr,
  ut = $a,
  pt = Oa,
  dr = dt;
function dt(r) {
  var a = r.space,
    e = r.mustUseProperty || [],
    t = r.attributes || {},
    o = r.properties,
    s = r.transform,
    p = {},
    l = {},
    f,
    x;
  for (f in o)
    (x = new pt(f, s(t, f), o[f], a)),
      e.indexOf(f) !== -1 && (x.mustUseProperty = !0),
      (p[f] = x),
      (l[oa(f)] = f),
      (l[oa(x.attribute)] = f);
  return new ut(p, l, a);
}
var gt = dr,
  ft = gt({
    space: 'xlink',
    transform: mt,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  });
function mt(r, a) {
  return 'xlink:' + a.slice(5).toLowerCase();
}
var ht = dr,
  bt = ht({
    space: 'xml',
    transform: yt,
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
function yt(r, a) {
  return 'xml:' + a.slice(3).toLowerCase();
}
var wt = xt;
function xt(r, a) {
  return a in r ? r[a] : a;
}
var St = wt,
  Ua = qt;
function qt(r, a) {
  return St(r, a.toLowerCase());
}
var At = dr,
  Et = Ua,
  kt = At({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: Et,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  Gr = Q,
  Lt = dr,
  V = Gr.booleanish,
  P = Gr.number,
  er = Gr.spaceSeparated,
  Nt = Lt({
    transform: Tt,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: V,
      ariaAutoComplete: null,
      ariaBusy: V,
      ariaChecked: V,
      ariaColCount: P,
      ariaColIndex: P,
      ariaColSpan: P,
      ariaControls: er,
      ariaCurrent: null,
      ariaDescribedBy: er,
      ariaDetails: null,
      ariaDisabled: V,
      ariaDropEffect: er,
      ariaErrorMessage: null,
      ariaExpanded: V,
      ariaFlowTo: er,
      ariaGrabbed: V,
      ariaHasPopup: null,
      ariaHidden: V,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: er,
      ariaLevel: P,
      ariaLive: null,
      ariaModal: V,
      ariaMultiLine: V,
      ariaMultiSelectable: V,
      ariaOrientation: null,
      ariaOwns: er,
      ariaPlaceholder: null,
      ariaPosInSet: P,
      ariaPressed: V,
      ariaReadOnly: V,
      ariaRelevant: null,
      ariaRequired: V,
      ariaRoleDescription: er,
      ariaRowCount: P,
      ariaRowIndex: P,
      ariaRowSpan: P,
      ariaSelected: V,
      ariaSetSize: P,
      ariaSort: null,
      ariaValueMax: P,
      ariaValueMin: P,
      ariaValueNow: P,
      ariaValueText: null,
      role: null,
    },
  });
function Tt(r, a) {
  return a === 'role' ? a : 'aria-' + a.slice(4).toLowerCase();
}
var ir = Q,
  $t = dr,
  Dt = Ua,
  k = ir.boolean,
  Ct = ir.overloadedBoolean,
  cr = ir.booleanish,
  D = ir.number,
  B = ir.spaceSeparated,
  mr = ir.commaSeparated,
  Rt = $t({
    space: 'html',
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    transform: Dt,
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: mr,
      acceptCharset: B,
      accessKey: B,
      action: null,
      allow: null,
      allowFullScreen: k,
      allowPaymentRequest: k,
      allowUserMedia: k,
      alt: null,
      as: null,
      async: k,
      autoCapitalize: null,
      autoComplete: B,
      autoFocus: k,
      autoPlay: k,
      capture: k,
      charSet: null,
      checked: k,
      cite: null,
      className: B,
      cols: D,
      colSpan: null,
      content: null,
      contentEditable: cr,
      controls: k,
      controlsList: B,
      coords: D | mr,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: k,
      defer: k,
      dir: null,
      dirName: null,
      disabled: k,
      download: Ct,
      draggable: cr,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: k,
      formTarget: null,
      headers: B,
      height: D,
      hidden: k,
      high: D,
      href: null,
      hrefLang: null,
      htmlFor: B,
      httpEquiv: B,
      id: null,
      imageSizes: null,
      imageSrcSet: mr,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: k,
      itemId: null,
      itemProp: B,
      itemRef: B,
      itemScope: k,
      itemType: B,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: k,
      low: D,
      manifest: null,
      max: null,
      maxLength: D,
      media: null,
      method: null,
      min: null,
      minLength: D,
      multiple: k,
      muted: k,
      name: null,
      nonce: null,
      noModule: k,
      noValidate: k,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: k,
      optimum: D,
      pattern: null,
      ping: B,
      placeholder: null,
      playsInline: k,
      poster: null,
      preload: null,
      readOnly: k,
      referrerPolicy: null,
      rel: B,
      required: k,
      reversed: k,
      rows: D,
      rowSpan: D,
      sandbox: B,
      scope: null,
      scoped: k,
      seamless: k,
      selected: k,
      shape: null,
      size: D,
      sizes: null,
      slot: null,
      span: D,
      spellCheck: cr,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: mr,
      start: D,
      step: null,
      style: null,
      tabIndex: D,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: k,
      useMap: null,
      value: cr,
      width: D,
      wrap: null,
      align: null,
      aLink: null,
      archive: B,
      axis: null,
      background: null,
      bgColor: null,
      border: D,
      borderColor: null,
      bottomMargin: D,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: k,
      declare: k,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: D,
      leftMargin: D,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: D,
      marginWidth: D,
      noResize: k,
      noHref: k,
      noShade: k,
      noWrap: k,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: D,
      rules: null,
      scheme: null,
      scrolling: cr,
      standby: null,
      summary: null,
      text: null,
      topMargin: D,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: D,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: k,
      disableRemotePlayback: k,
      prefix: null,
      property: null,
      results: D,
      security: null,
      unselectable: null,
    },
  }),
  It = lt,
  Ot = ft,
  Ft = bt,
  Ut = kt,
  _t = Nt,
  Bt = Rt,
  jt = It([Ft, Ot, Ut, _t, Bt]),
  Ht = Hr,
  Vt = Oa,
  Gt = Ca,
  zr = 'data',
  zt = Zt,
  Mt = /^data[-\w.:]+$/i,
  _a = /-[a-z]/g,
  Pt = /[A-Z]/g;
function Zt(r, a) {
  var e = Ht(a),
    t = a,
    o = Gt;
  return e in r.normal
    ? r.property[r.normal[e]]
    : (e.length > 4 &&
        e.slice(0, 4) === zr &&
        Mt.test(a) &&
        (a.charAt(4) === '-' ? (t = Wt(a)) : (a = Yt(a)), (o = Vt)),
      new o(t, a));
}
function Wt(r) {
  var a = r.slice(5).replace(_a, Kt);
  return zr + a.charAt(0).toUpperCase() + a.slice(1);
}
function Yt(r) {
  var a = r.slice(4);
  return _a.test(a) ? r : ((a = a.replace(Pt, Jt)), a.charAt(0) !== '-' && (a = '-' + a), zr + a);
}
function Jt(r) {
  return '-' + r.toLowerCase();
}
function Kt(r) {
  return r.charAt(1).toUpperCase();
}
var Xt = Qt,
  la = /[#.]/g;
function Qt(r, a) {
  for (var e = r || '', t = a || 'div', o = {}, s = 0, p, l, f; s < e.length; )
    (la.lastIndex = s),
      (f = la.exec(e)),
      (p = e.slice(s, f ? f.index : e.length)),
      p &&
        (l
          ? l === '#'
            ? (o.id = p)
            : o.className
            ? o.className.push(p)
            : (o.className = [p])
          : (t = p),
        (s += p.length)),
      f && ((l = f[0]), s++);
  return { type: 'element', tagName: t, properties: o, children: [] };
}
var Mr = {};
Mr.parse = en;
Mr.stringify = tn;
var ia = '',
  rn = ' ',
  an = /[ \t\n\r\f]+/g;
function en(r) {
  var a = String(r || ia).trim();
  return a === ia ? [] : a.split(an);
}
function tn(r) {
  return r.join(rn).trim();
}
var Pr = {};
Pr.parse = nn;
Pr.stringify = on;
var kr = ',',
  sa = ' ',
  ur = '';
function nn(r) {
  for (var a = [], e = String(r || ur), t = e.indexOf(kr), o = 0, s = !1, p; !s; )
    t === -1 && ((t = e.length), (s = !0)),
      (p = e.slice(o, t).trim()),
      (p || !s) && a.push(p),
      (o = t + 1),
      (t = e.indexOf(kr, o));
  return a;
}
function on(r, a) {
  var e = a || {},
    t = e.padLeft === !1 ? ur : sa,
    o = e.padRight ? sa : ur;
  return r[r.length - 1] === ur && (r = r.concat(ur)), r.join(o + kr + t).trim();
}
var ln = zt,
  ca = Hr,
  sn = Xt,
  va = Mr.parse,
  ua = Pr.parse,
  cn = un,
  vn = {}.hasOwnProperty;
function un(r, a, e) {
  var t = e ? mn(e) : null;
  return o;
  function o(p, l) {
    var f = sn(p, a),
      x = Array.prototype.slice.call(arguments, 2),
      m = f.tagName.toLowerCase(),
      d;
    if (
      ((f.tagName = t && vn.call(t, m) ? t[m] : m), l && pn(l, f) && (x.unshift(l), (l = null)), l)
    )
      for (d in l) s(f.properties, d, l[d]);
    return (
      Ba(f.children, x),
      f.tagName === 'template' &&
        ((f.content = { type: 'root', children: f.children }), (f.children = [])),
      f
    );
  }
  function s(p, l, f) {
    var x, m, d;
    f == null ||
      f !== f ||
      ((x = ln(r, l)),
      (m = x.property),
      (d = f),
      typeof d == 'string' &&
        (x.spaceSeparated
          ? (d = va(d))
          : x.commaSeparated
          ? (d = ua(d))
          : x.commaOrSpaceSeparated && (d = va(ua(d).join(' ')))),
      m === 'style' && typeof f != 'string' && (d = fn(d)),
      m === 'className' && p.className && (d = p.className.concat(d)),
      (p[m] = gn(x, m, d)));
  }
}
function pn(r, a) {
  return typeof r == 'string' || 'length' in r || dn(a.tagName, r);
}
function dn(r, a) {
  var e = a.type;
  return r === 'input' || !e || typeof e != 'string'
    ? !1
    : J(a.children) === 'object' && 'length' in a.children
    ? !0
    : ((e = e.toLowerCase()),
      r === 'button'
        ? e !== 'menu' && e !== 'submit' && e !== 'reset' && e !== 'button'
        : 'value' in a);
}
function Ba(r, a) {
  var e, t;
  if (typeof a == 'string' || typeof a == 'number') {
    r.push({ type: 'text', value: String(a) });
    return;
  }
  if (J(a) === 'object' && 'length' in a) {
    for (e = -1, t = a.length; ++e < t; ) Ba(r, a[e]);
    return;
  }
  if (J(a) !== 'object' || !('type' in a))
    throw new Error('Expected node, nodes, or string, got `' + a + '`');
  r.push(a);
}
function gn(r, a, e) {
  var t, o, s;
  if (J(e) !== 'object' || !('length' in e)) return pa(r, a, e);
  for (o = e.length, t = -1, s = []; ++t < o; ) s[t] = pa(r, a, e[t]);
  return s;
}
function pa(r, a, e) {
  var t = e;
  return (
    r.number || r.positiveNumber
      ? !isNaN(t) && t !== '' && (t = Number(t))
      : (r.boolean || r.overloadedBoolean) &&
        typeof t == 'string' &&
        (t === '' || ca(e) === ca(a)) &&
        (t = !0),
    t
  );
}
function fn(r) {
  var a = [],
    e;
  for (e in r) a.push([e, r[e]].join(': '));
  return a.join('; ');
}
function mn(r) {
  for (var a = r.length, e = -1, t = {}, o; ++e < a; ) (o = r[e]), (t[o.toLowerCase()] = o);
  return t;
}
var hn = jt,
  bn = cn,
  ja = bn(hn, 'div');
ja.displayName = 'html';
var yn = ja,
  wn = yn,
  xn = '\xC6',
  Sn = '&',
  qn = '\xC1',
  An = '\xC2',
  En = '\xC0',
  kn = '\xC5',
  Ln = '\xC3',
  Nn = '\xC4',
  Tn = '\xA9',
  $n = '\xC7',
  Dn = '\xD0',
  Cn = '\xC9',
  Rn = '\xCA',
  In = '\xC8',
  On = '\xCB',
  Fn = '>',
  Un = '\xCD',
  _n = '\xCE',
  Bn = '\xCC',
  jn = '\xCF',
  Hn = '<',
  Vn = '\xD1',
  Gn = '\xD3',
  zn = '\xD4',
  Mn = '\xD2',
  Pn = '\xD8',
  Zn = '\xD5',
  Wn = '\xD6',
  Yn = '"',
  Jn = '\xAE',
  Kn = '\xDE',
  Xn = '\xDA',
  Qn = '\xDB',
  ro = '\xD9',
  ao = '\xDC',
  eo = '\xDD',
  to = '\xE1',
  no = '\xE2',
  oo = '\xB4',
  lo = '\xE6',
  io = '\xE0',
  so = '&',
  co = '\xE5',
  vo = '\xE3',
  uo = '\xE4',
  po = '\xA6',
  go = '\xE7',
  fo = '\xB8',
  mo = '\xA2',
  ho = '\xA9',
  bo = '\xA4',
  yo = '\xB0',
  wo = '\xF7',
  xo = '\xE9',
  So = '\xEA',
  qo = '\xE8',
  Ao = '\xF0',
  Eo = '\xEB',
  ko = '\xBD',
  Lo = '\xBC',
  No = '\xBE',
  To = '>',
  $o = '\xED',
  Do = '\xEE',
  Co = '\xA1',
  Ro = '\xEC',
  Io = '\xBF',
  Oo = '\xEF',
  Fo = '\xAB',
  Uo = '<',
  _o = '\xAF',
  Bo = '\xB5',
  jo = '\xB7',
  Ho = '\xA0',
  Vo = '\xAC',
  Go = '\xF1',
  zo = '\xF3',
  Mo = '\xF4',
  Po = '\xF2',
  Zo = '\xAA',
  Wo = '\xBA',
  Yo = '\xF8',
  Jo = '\xF5',
  Ko = '\xF6',
  Xo = '\xB6',
  Qo = '\xB1',
  rl = '\xA3',
  al = '"',
  el = '\xBB',
  tl = '\xAE',
  nl = '\xA7',
  ol = '\xAD',
  ll = '\xB9',
  il = '\xB2',
  sl = '\xB3',
  cl = '\xDF',
  vl = '\xFE',
  ul = '\xD7',
  pl = '\xFA',
  dl = '\xFB',
  gl = '\xF9',
  fl = '\xA8',
  ml = '\xFC',
  hl = '\xFD',
  bl = '\xA5',
  yl = '\xFF',
  wl = {
    AElig: xn,
    AMP: Sn,
    Aacute: qn,
    Acirc: An,
    Agrave: En,
    Aring: kn,
    Atilde: Ln,
    Auml: Nn,
    COPY: Tn,
    Ccedil: $n,
    ETH: Dn,
    Eacute: Cn,
    Ecirc: Rn,
    Egrave: In,
    Euml: On,
    GT: Fn,
    Iacute: Un,
    Icirc: _n,
    Igrave: Bn,
    Iuml: jn,
    LT: Hn,
    Ntilde: Vn,
    Oacute: Gn,
    Ocirc: zn,
    Ograve: Mn,
    Oslash: Pn,
    Otilde: Zn,
    Ouml: Wn,
    QUOT: Yn,
    REG: Jn,
    THORN: Kn,
    Uacute: Xn,
    Ucirc: Qn,
    Ugrave: ro,
    Uuml: ao,
    Yacute: eo,
    aacute: to,
    acirc: no,
    acute: oo,
    aelig: lo,
    agrave: io,
    amp: so,
    aring: co,
    atilde: vo,
    auml: uo,
    brvbar: po,
    ccedil: go,
    cedil: fo,
    cent: mo,
    copy: ho,
    curren: bo,
    deg: yo,
    divide: wo,
    eacute: xo,
    ecirc: So,
    egrave: qo,
    eth: Ao,
    euml: Eo,
    frac12: ko,
    frac14: Lo,
    frac34: No,
    gt: To,
    iacute: $o,
    icirc: Do,
    iexcl: Co,
    igrave: Ro,
    iquest: Io,
    iuml: Oo,
    laquo: Fo,
    lt: Uo,
    macr: _o,
    micro: Bo,
    middot: jo,
    nbsp: Ho,
    not: Vo,
    ntilde: Go,
    oacute: zo,
    ocirc: Mo,
    ograve: Po,
    ordf: Zo,
    ordm: Wo,
    oslash: Yo,
    otilde: Jo,
    ouml: Ko,
    para: Xo,
    plusmn: Qo,
    pound: rl,
    quot: al,
    raquo: el,
    reg: tl,
    sect: nl,
    shy: ol,
    sup1: ll,
    sup2: il,
    sup3: sl,
    szlig: cl,
    thorn: vl,
    times: ul,
    uacute: pl,
    ucirc: dl,
    ugrave: gl,
    uml: fl,
    uuml: ml,
    yacute: hl,
    yen: bl,
    yuml: yl,
  },
  xl = {
    0: '\uFFFD',
    128: '\u20AC',
    130: '\u201A',
    131: '\u0192',
    132: '\u201E',
    133: '\u2026',
    134: '\u2020',
    135: '\u2021',
    136: '\u02C6',
    137: '\u2030',
    138: '\u0160',
    139: '\u2039',
    140: '\u0152',
    142: '\u017D',
    145: '\u2018',
    146: '\u2019',
    147: '\u201C',
    148: '\u201D',
    149: '\u2022',
    150: '\u2013',
    151: '\u2014',
    152: '\u02DC',
    153: '\u2122',
    154: '\u0161',
    155: '\u203A',
    156: '\u0153',
    158: '\u017E',
    159: '\u0178',
  },
  Ha = Sl;
function Sl(r) {
  var a = typeof r == 'string' ? r.charCodeAt(0) : r;
  return a >= 48 && a <= 57;
}
var ql = Al;
function Al(r) {
  var a = typeof r == 'string' ? r.charCodeAt(0) : r;
  return (a >= 97 && a <= 102) || (a >= 65 && a <= 70) || (a >= 48 && a <= 57);
}
var El = kl;
function kl(r) {
  var a = typeof r == 'string' ? r.charCodeAt(0) : r;
  return (a >= 97 && a <= 122) || (a >= 65 && a <= 90);
}
var Ll = El,
  Nl = Ha,
  Tl = $l;
function $l(r) {
  return Ll(r) || Nl(r);
}
var Dl = '\xC6',
  Cl = '\xC6',
  Rl = '&',
  Il = '&',
  Ol = '\xC1',
  Fl = '\xC1',
  Ul = '\u0102',
  _l = '\xC2',
  Bl = '\xC2',
  jl = '\u0410',
  Hl = '\u{1D504}',
  Vl = '\xC0',
  Gl = '\xC0',
  zl = '\u0391',
  Ml = '\u0100',
  Pl = '\u2A53',
  Zl = '\u0104',
  Wl = '\u{1D538}',
  Yl = '\u2061',
  Jl = '\xC5',
  Kl = '\xC5',
  Xl = '\u{1D49C}',
  Ql = '\u2254',
  ri = '\xC3',
  ai = '\xC3',
  ei = '\xC4',
  ti = '\xC4',
  ni = '\u2216',
  oi = '\u2AE7',
  li = '\u2306',
  ii = '\u0411',
  si = '\u2235',
  ci = '\u212C',
  vi = '\u0392',
  ui = '\u{1D505}',
  pi = '\u{1D539}',
  di = '\u02D8',
  gi = '\u212C',
  fi = '\u224E',
  mi = '\u0427',
  hi = '\xA9',
  bi = '\xA9',
  yi = '\u0106',
  wi = '\u22D2',
  xi = '\u2145',
  Si = '\u212D',
  qi = '\u010C',
  Ai = '\xC7',
  Ei = '\xC7',
  ki = '\u0108',
  Li = '\u2230',
  Ni = '\u010A',
  Ti = '\xB8',
  $i = '\xB7',
  Di = '\u212D',
  Ci = '\u03A7',
  Ri = '\u2299',
  Ii = '\u2296',
  Oi = '\u2295',
  Fi = '\u2297',
  Ui = '\u2232',
  _i = '\u201D',
  Bi = '\u2019',
  ji = '\u2237',
  Hi = '\u2A74',
  Vi = '\u2261',
  Gi = '\u222F',
  zi = '\u222E',
  Mi = '\u2102',
  Pi = '\u2210',
  Zi = '\u2233',
  Wi = '\u2A2F',
  Yi = '\u{1D49E}',
  Ji = '\u22D3',
  Ki = '\u224D',
  Xi = '\u2145',
  Qi = '\u2911',
  rs = '\u0402',
  as = '\u0405',
  es = '\u040F',
  ts = '\u2021',
  ns = '\u21A1',
  os = '\u2AE4',
  ls = '\u010E',
  is = '\u0414',
  ss = '\u2207',
  cs = '\u0394',
  vs = '\u{1D507}',
  us = '\xB4',
  ps = '\u02D9',
  ds = '\u02DD',
  gs = '`',
  fs = '\u02DC',
  ms = '\u22C4',
  hs = '\u2146',
  bs = '\u{1D53B}',
  ys = '\xA8',
  ws = '\u20DC',
  xs = '\u2250',
  Ss = '\u222F',
  qs = '\xA8',
  As = '\u21D3',
  Es = '\u21D0',
  ks = '\u21D4',
  Ls = '\u2AE4',
  Ns = '\u27F8',
  Ts = '\u27FA',
  $s = '\u27F9',
  Ds = '\u21D2',
  Cs = '\u22A8',
  Rs = '\u21D1',
  Is = '\u21D5',
  Os = '\u2225',
  Fs = '\u2193',
  Us = '\u2913',
  _s = '\u21F5',
  Bs = '\u0311',
  js = '\u2950',
  Hs = '\u295E',
  Vs = '\u21BD',
  Gs = '\u2956',
  zs = '\u295F',
  Ms = '\u21C1',
  Ps = '\u2957',
  Zs = '\u22A4',
  Ws = '\u21A7',
  Ys = '\u21D3',
  Js = '\u{1D49F}',
  Ks = '\u0110',
  Xs = '\u014A',
  Qs = '\xD0',
  rc = '\xD0',
  ac = '\xC9',
  ec = '\xC9',
  tc = '\u011A',
  nc = '\xCA',
  oc = '\xCA',
  lc = '\u042D',
  ic = '\u0116',
  sc = '\u{1D508}',
  cc = '\xC8',
  vc = '\xC8',
  uc = '\u2208',
  pc = '\u0112',
  dc = '\u25FB',
  gc = '\u25AB',
  fc = '\u0118',
  mc = '\u{1D53C}',
  hc = '\u0395',
  bc = '\u2A75',
  yc = '\u2242',
  wc = '\u21CC',
  xc = '\u2130',
  Sc = '\u2A73',
  qc = '\u0397',
  Ac = '\xCB',
  Ec = '\xCB',
  kc = '\u2203',
  Lc = '\u2147',
  Nc = '\u0424',
  Tc = '\u{1D509}',
  $c = '\u25FC',
  Dc = '\u25AA',
  Cc = '\u{1D53D}',
  Rc = '\u2200',
  Ic = '\u2131',
  Oc = '\u2131',
  Fc = '\u0403',
  Uc = '>',
  _c = '>',
  Bc = '\u0393',
  jc = '\u03DC',
  Hc = '\u011E',
  Vc = '\u0122',
  Gc = '\u011C',
  zc = '\u0413',
  Mc = '\u0120',
  Pc = '\u{1D50A}',
  Zc = '\u22D9',
  Wc = '\u{1D53E}',
  Yc = '\u2265',
  Jc = '\u22DB',
  Kc = '\u2267',
  Xc = '\u2AA2',
  Qc = '\u2277',
  rv = '\u2A7E',
  av = '\u2273',
  ev = '\u{1D4A2}',
  tv = '\u226B',
  nv = '\u042A',
  ov = '\u02C7',
  lv = '^',
  iv = '\u0124',
  sv = '\u210C',
  cv = '\u210B',
  vv = '\u210D',
  uv = '\u2500',
  pv = '\u210B',
  dv = '\u0126',
  gv = '\u224E',
  fv = '\u224F',
  mv = '\u0415',
  hv = '\u0132',
  bv = '\u0401',
  yv = '\xCD',
  wv = '\xCD',
  xv = '\xCE',
  Sv = '\xCE',
  qv = '\u0418',
  Av = '\u0130',
  Ev = '\u2111',
  kv = '\xCC',
  Lv = '\xCC',
  Nv = '\u2111',
  Tv = '\u012A',
  $v = '\u2148',
  Dv = '\u21D2',
  Cv = '\u222C',
  Rv = '\u222B',
  Iv = '\u22C2',
  Ov = '\u2063',
  Fv = '\u2062',
  Uv = '\u012E',
  _v = '\u{1D540}',
  Bv = '\u0399',
  jv = '\u2110',
  Hv = '\u0128',
  Vv = '\u0406',
  Gv = '\xCF',
  zv = '\xCF',
  Mv = '\u0134',
  Pv = '\u0419',
  Zv = '\u{1D50D}',
  Wv = '\u{1D541}',
  Yv = '\u{1D4A5}',
  Jv = '\u0408',
  Kv = '\u0404',
  Xv = '\u0425',
  Qv = '\u040C',
  ru = '\u039A',
  au = '\u0136',
  eu = '\u041A',
  tu = '\u{1D50E}',
  nu = '\u{1D542}',
  ou = '\u{1D4A6}',
  lu = '\u0409',
  iu = '<',
  su = '<',
  cu = '\u0139',
  vu = '\u039B',
  uu = '\u27EA',
  pu = '\u2112',
  du = '\u219E',
  gu = '\u013D',
  fu = '\u013B',
  mu = '\u041B',
  hu = '\u27E8',
  bu = '\u2190',
  yu = '\u21E4',
  wu = '\u21C6',
  xu = '\u2308',
  Su = '\u27E6',
  qu = '\u2961',
  Au = '\u21C3',
  Eu = '\u2959',
  ku = '\u230A',
  Lu = '\u2194',
  Nu = '\u294E',
  Tu = '\u22A3',
  $u = '\u21A4',
  Du = '\u295A',
  Cu = '\u22B2',
  Ru = '\u29CF',
  Iu = '\u22B4',
  Ou = '\u2951',
  Fu = '\u2960',
  Uu = '\u21BF',
  _u = '\u2958',
  Bu = '\u21BC',
  ju = '\u2952',
  Hu = '\u21D0',
  Vu = '\u21D4',
  Gu = '\u22DA',
  zu = '\u2266',
  Mu = '\u2276',
  Pu = '\u2AA1',
  Zu = '\u2A7D',
  Wu = '\u2272',
  Yu = '\u{1D50F}',
  Ju = '\u22D8',
  Ku = '\u21DA',
  Xu = '\u013F',
  Qu = '\u27F5',
  rp = '\u27F7',
  ap = '\u27F6',
  ep = '\u27F8',
  tp = '\u27FA',
  np = '\u27F9',
  op = '\u{1D543}',
  lp = '\u2199',
  ip = '\u2198',
  sp = '\u2112',
  cp = '\u21B0',
  vp = '\u0141',
  up = '\u226A',
  pp = '\u041C',
  dp = '\u205F',
  gp = '\u2133',
  fp = '\u{1D510}',
  mp = '\u2213',
  hp = '\u{1D544}',
  bp = '\u2133',
  yp = '\u039C',
  wp = '\u040A',
  xp = '\u0143',
  Sp = '\u0147',
  qp = '\u0145',
  Ap = '\u041D',
  Ep = '\u200B',
  kp = '\u200B',
  Lp = '\u200B',
  Np = '\u200B',
  Tp = '\u226B',
  $p = '\u226A',
  Dp = `
`,
  Cp = '\u{1D511}',
  Rp = '\u2060',
  Ip = '\xA0',
  Op = '\u2115',
  Fp = '\u2AEC',
  Up = '\u2262',
  _p = '\u226D',
  Bp = '\u2226',
  jp = '\u2209',
  Hp = '\u2260',
  Vp = '\u2242\u0338',
  Gp = '\u2204',
  zp = '\u226F',
  Mp = '\u2271',
  Pp = '\u2267\u0338',
  Zp = '\u226B\u0338',
  Wp = '\u2279',
  Yp = '\u2A7E\u0338',
  Jp = '\u2275',
  Kp = '\u224E\u0338',
  Xp = '\u224F\u0338',
  Qp = '\u22EA',
  rd = '\u29CF\u0338',
  ad = '\u22EC',
  ed = '\u226E',
  td = '\u2270',
  nd = '\u2278',
  od = '\u226A\u0338',
  ld = '\u2A7D\u0338',
  id = '\u2274',
  sd = '\u2AA2\u0338',
  cd = '\u2AA1\u0338',
  vd = '\u2280',
  ud = '\u2AAF\u0338',
  pd = '\u22E0',
  dd = '\u220C',
  gd = '\u22EB',
  fd = '\u29D0\u0338',
  md = '\u22ED',
  hd = '\u228F\u0338',
  bd = '\u22E2',
  yd = '\u2290\u0338',
  wd = '\u22E3',
  xd = '\u2282\u20D2',
  Sd = '\u2288',
  qd = '\u2281',
  Ad = '\u2AB0\u0338',
  Ed = '\u22E1',
  kd = '\u227F\u0338',
  Ld = '\u2283\u20D2',
  Nd = '\u2289',
  Td = '\u2241',
  $d = '\u2244',
  Dd = '\u2247',
  Cd = '\u2249',
  Rd = '\u2224',
  Id = '\u{1D4A9}',
  Od = '\xD1',
  Fd = '\xD1',
  Ud = '\u039D',
  _d = '\u0152',
  Bd = '\xD3',
  jd = '\xD3',
  Hd = '\xD4',
  Vd = '\xD4',
  Gd = '\u041E',
  zd = '\u0150',
  Md = '\u{1D512}',
  Pd = '\xD2',
  Zd = '\xD2',
  Wd = '\u014C',
  Yd = '\u03A9',
  Jd = '\u039F',
  Kd = '\u{1D546}',
  Xd = '\u201C',
  Qd = '\u2018',
  rg = '\u2A54',
  ag = '\u{1D4AA}',
  eg = '\xD8',
  tg = '\xD8',
  ng = '\xD5',
  og = '\xD5',
  lg = '\u2A37',
  ig = '\xD6',
  sg = '\xD6',
  cg = '\u203E',
  vg = '\u23DE',
  ug = '\u23B4',
  pg = '\u23DC',
  dg = '\u2202',
  gg = '\u041F',
  fg = '\u{1D513}',
  mg = '\u03A6',
  hg = '\u03A0',
  bg = '\xB1',
  yg = '\u210C',
  wg = '\u2119',
  xg = '\u2ABB',
  Sg = '\u227A',
  qg = '\u2AAF',
  Ag = '\u227C',
  Eg = '\u227E',
  kg = '\u2033',
  Lg = '\u220F',
  Ng = '\u2237',
  Tg = '\u221D',
  $g = '\u{1D4AB}',
  Dg = '\u03A8',
  Cg = '"',
  Rg = '"',
  Ig = '\u{1D514}',
  Og = '\u211A',
  Fg = '\u{1D4AC}',
  Ug = '\u2910',
  _g = '\xAE',
  Bg = '\xAE',
  jg = '\u0154',
  Hg = '\u27EB',
  Vg = '\u21A0',
  Gg = '\u2916',
  zg = '\u0158',
  Mg = '\u0156',
  Pg = '\u0420',
  Zg = '\u211C',
  Wg = '\u220B',
  Yg = '\u21CB',
  Jg = '\u296F',
  Kg = '\u211C',
  Xg = '\u03A1',
  Qg = '\u27E9',
  rf = '\u2192',
  af = '\u21E5',
  ef = '\u21C4',
  tf = '\u2309',
  nf = '\u27E7',
  of = '\u295D',
  lf = '\u21C2',
  sf = '\u2955',
  cf = '\u230B',
  vf = '\u22A2',
  uf = '\u21A6',
  pf = '\u295B',
  df = '\u22B3',
  gf = '\u29D0',
  ff = '\u22B5',
  mf = '\u294F',
  hf = '\u295C',
  bf = '\u21BE',
  yf = '\u2954',
  wf = '\u21C0',
  xf = '\u2953',
  Sf = '\u21D2',
  qf = '\u211D',
  Af = '\u2970',
  Ef = '\u21DB',
  kf = '\u211B',
  Lf = '\u21B1',
  Nf = '\u29F4',
  Tf = '\u0429',
  $f = '\u0428',
  Df = '\u042C',
  Cf = '\u015A',
  Rf = '\u2ABC',
  If = '\u0160',
  Of = '\u015E',
  Ff = '\u015C',
  Uf = '\u0421',
  _f = '\u{1D516}',
  Bf = '\u2193',
  jf = '\u2190',
  Hf = '\u2192',
  Vf = '\u2191',
  Gf = '\u03A3',
  zf = '\u2218',
  Mf = '\u{1D54A}',
  Pf = '\u221A',
  Zf = '\u25A1',
  Wf = '\u2293',
  Yf = '\u228F',
  Jf = '\u2291',
  Kf = '\u2290',
  Xf = '\u2292',
  Qf = '\u2294',
  rm = '\u{1D4AE}',
  am = '\u22C6',
  em = '\u22D0',
  tm = '\u22D0',
  nm = '\u2286',
  om = '\u227B',
  lm = '\u2AB0',
  im = '\u227D',
  sm = '\u227F',
  cm = '\u220B',
  vm = '\u2211',
  um = '\u22D1',
  pm = '\u2283',
  dm = '\u2287',
  gm = '\u22D1',
  fm = '\xDE',
  mm = '\xDE',
  hm = '\u2122',
  bm = '\u040B',
  ym = '\u0426',
  wm = '	',
  xm = '\u03A4',
  Sm = '\u0164',
  qm = '\u0162',
  Am = '\u0422',
  Em = '\u{1D517}',
  km = '\u2234',
  Lm = '\u0398',
  Nm = '\u205F\u200A',
  Tm = '\u2009',
  $m = '\u223C',
  Dm = '\u2243',
  Cm = '\u2245',
  Rm = '\u2248',
  Im = '\u{1D54B}',
  Om = '\u20DB',
  Fm = '\u{1D4AF}',
  Um = '\u0166',
  _m = '\xDA',
  Bm = '\xDA',
  jm = '\u219F',
  Hm = '\u2949',
  Vm = '\u040E',
  Gm = '\u016C',
  zm = '\xDB',
  Mm = '\xDB',
  Pm = '\u0423',
  Zm = '\u0170',
  Wm = '\u{1D518}',
  Ym = '\xD9',
  Jm = '\xD9',
  Km = '\u016A',
  Xm = '_',
  Qm = '\u23DF',
  rh = '\u23B5',
  ah = '\u23DD',
  eh = '\u22C3',
  th = '\u228E',
  nh = '\u0172',
  oh = '\u{1D54C}',
  lh = '\u2191',
  ih = '\u2912',
  sh = '\u21C5',
  ch = '\u2195',
  vh = '\u296E',
  uh = '\u22A5',
  ph = '\u21A5',
  dh = '\u21D1',
  gh = '\u21D5',
  fh = '\u2196',
  mh = '\u2197',
  hh = '\u03D2',
  bh = '\u03A5',
  yh = '\u016E',
  wh = '\u{1D4B0}',
  xh = '\u0168',
  Sh = '\xDC',
  qh = '\xDC',
  Ah = '\u22AB',
  Eh = '\u2AEB',
  kh = '\u0412',
  Lh = '\u22A9',
  Nh = '\u2AE6',
  Th = '\u22C1',
  $h = '\u2016',
  Dh = '\u2016',
  Ch = '\u2223',
  Rh = '|',
  Ih = '\u2758',
  Oh = '\u2240',
  Fh = '\u200A',
  Uh = '\u{1D519}',
  _h = '\u{1D54D}',
  Bh = '\u{1D4B1}',
  jh = '\u22AA',
  Hh = '\u0174',
  Vh = '\u22C0',
  Gh = '\u{1D51A}',
  zh = '\u{1D54E}',
  Mh = '\u{1D4B2}',
  Ph = '\u{1D51B}',
  Zh = '\u039E',
  Wh = '\u{1D54F}',
  Yh = '\u{1D4B3}',
  Jh = '\u042F',
  Kh = '\u0407',
  Xh = '\u042E',
  Qh = '\xDD',
  rb = '\xDD',
  ab = '\u0176',
  eb = '\u042B',
  tb = '\u{1D51C}',
  nb = '\u{1D550}',
  ob = '\u{1D4B4}',
  lb = '\u0178',
  ib = '\u0416',
  sb = '\u0179',
  cb = '\u017D',
  vb = '\u0417',
  ub = '\u017B',
  pb = '\u200B',
  db = '\u0396',
  gb = '\u2128',
  fb = '\u2124',
  mb = '\u{1D4B5}',
  hb = '\xE1',
  bb = '\xE1',
  yb = '\u0103',
  wb = '\u223E',
  xb = '\u223E\u0333',
  Sb = '\u223F',
  qb = '\xE2',
  Ab = '\xE2',
  Eb = '\xB4',
  kb = '\xB4',
  Lb = '\u0430',
  Nb = '\xE6',
  Tb = '\xE6',
  $b = '\u2061',
  Db = '\u{1D51E}',
  Cb = '\xE0',
  Rb = '\xE0',
  Ib = '\u2135',
  Ob = '\u2135',
  Fb = '\u03B1',
  Ub = '\u0101',
  _b = '\u2A3F',
  Bb = '&',
  jb = '&',
  Hb = '\u2227',
  Vb = '\u2A55',
  Gb = '\u2A5C',
  zb = '\u2A58',
  Mb = '\u2A5A',
  Pb = '\u2220',
  Zb = '\u29A4',
  Wb = '\u2220',
  Yb = '\u2221',
  Jb = '\u29A8',
  Kb = '\u29A9',
  Xb = '\u29AA',
  Qb = '\u29AB',
  ry = '\u29AC',
  ay = '\u29AD',
  ey = '\u29AE',
  ty = '\u29AF',
  ny = '\u221F',
  oy = '\u22BE',
  ly = '\u299D',
  iy = '\u2222',
  sy = '\xC5',
  cy = '\u237C',
  vy = '\u0105',
  uy = '\u{1D552}',
  py = '\u2248',
  dy = '\u2A70',
  gy = '\u2A6F',
  fy = '\u224A',
  my = '\u224B',
  hy = "'",
  by = '\u2248',
  yy = '\u224A',
  wy = '\xE5',
  xy = '\xE5',
  Sy = '\u{1D4B6}',
  qy = '*',
  Ay = '\u2248',
  Ey = '\u224D',
  ky = '\xE3',
  Ly = '\xE3',
  Ny = '\xE4',
  Ty = '\xE4',
  $y = '\u2233',
  Dy = '\u2A11',
  Cy = '\u2AED',
  Ry = '\u224C',
  Iy = '\u03F6',
  Oy = '\u2035',
  Fy = '\u223D',
  Uy = '\u22CD',
  _y = '\u22BD',
  By = '\u2305',
  jy = '\u2305',
  Hy = '\u23B5',
  Vy = '\u23B6',
  Gy = '\u224C',
  zy = '\u0431',
  My = '\u201E',
  Py = '\u2235',
  Zy = '\u2235',
  Wy = '\u29B0',
  Yy = '\u03F6',
  Jy = '\u212C',
  Ky = '\u03B2',
  Xy = '\u2136',
  Qy = '\u226C',
  rw = '\u{1D51F}',
  aw = '\u22C2',
  ew = '\u25EF',
  tw = '\u22C3',
  nw = '\u2A00',
  ow = '\u2A01',
  lw = '\u2A02',
  iw = '\u2A06',
  sw = '\u2605',
  cw = '\u25BD',
  vw = '\u25B3',
  uw = '\u2A04',
  pw = '\u22C1',
  dw = '\u22C0',
  gw = '\u290D',
  fw = '\u29EB',
  mw = '\u25AA',
  hw = '\u25B4',
  bw = '\u25BE',
  yw = '\u25C2',
  ww = '\u25B8',
  xw = '\u2423',
  Sw = '\u2592',
  qw = '\u2591',
  Aw = '\u2593',
  Ew = '\u2588',
  kw = '=\u20E5',
  Lw = '\u2261\u20E5',
  Nw = '\u2310',
  Tw = '\u{1D553}',
  $w = '\u22A5',
  Dw = '\u22A5',
  Cw = '\u22C8',
  Rw = '\u2557',
  Iw = '\u2554',
  Ow = '\u2556',
  Fw = '\u2553',
  Uw = '\u2550',
  _w = '\u2566',
  Bw = '\u2569',
  jw = '\u2564',
  Hw = '\u2567',
  Vw = '\u255D',
  Gw = '\u255A',
  zw = '\u255C',
  Mw = '\u2559',
  Pw = '\u2551',
  Zw = '\u256C',
  Ww = '\u2563',
  Yw = '\u2560',
  Jw = '\u256B',
  Kw = '\u2562',
  Xw = '\u255F',
  Qw = '\u29C9',
  rx = '\u2555',
  ax = '\u2552',
  ex = '\u2510',
  tx = '\u250C',
  nx = '\u2500',
  ox = '\u2565',
  lx = '\u2568',
  ix = '\u252C',
  sx = '\u2534',
  cx = '\u229F',
  vx = '\u229E',
  ux = '\u22A0',
  px = '\u255B',
  dx = '\u2558',
  gx = '\u2518',
  fx = '\u2514',
  mx = '\u2502',
  hx = '\u256A',
  bx = '\u2561',
  yx = '\u255E',
  wx = '\u253C',
  xx = '\u2524',
  Sx = '\u251C',
  qx = '\u2035',
  Ax = '\u02D8',
  Ex = '\xA6',
  kx = '\xA6',
  Lx = '\u{1D4B7}',
  Nx = '\u204F',
  Tx = '\u223D',
  $x = '\u22CD',
  Dx = '\\',
  Cx = '\u29C5',
  Rx = '\u27C8',
  Ix = '\u2022',
  Ox = '\u2022',
  Fx = '\u224E',
  Ux = '\u2AAE',
  _x = '\u224F',
  Bx = '\u224F',
  jx = '\u0107',
  Hx = '\u2229',
  Vx = '\u2A44',
  Gx = '\u2A49',
  zx = '\u2A4B',
  Mx = '\u2A47',
  Px = '\u2A40',
  Zx = '\u2229\uFE00',
  Wx = '\u2041',
  Yx = '\u02C7',
  Jx = '\u2A4D',
  Kx = '\u010D',
  Xx = '\xE7',
  Qx = '\xE7',
  rS = '\u0109',
  aS = '\u2A4C',
  eS = '\u2A50',
  tS = '\u010B',
  nS = '\xB8',
  oS = '\xB8',
  lS = '\u29B2',
  iS = '\xA2',
  sS = '\xA2',
  cS = '\xB7',
  vS = '\u{1D520}',
  uS = '\u0447',
  pS = '\u2713',
  dS = '\u2713',
  gS = '\u03C7',
  fS = '\u25CB',
  mS = '\u29C3',
  hS = '\u02C6',
  bS = '\u2257',
  yS = '\u21BA',
  wS = '\u21BB',
  xS = '\xAE',
  SS = '\u24C8',
  qS = '\u229B',
  AS = '\u229A',
  ES = '\u229D',
  kS = '\u2257',
  LS = '\u2A10',
  NS = '\u2AEF',
  TS = '\u29C2',
  $S = '\u2663',
  DS = '\u2663',
  CS = ':',
  RS = '\u2254',
  IS = '\u2254',
  OS = ',',
  FS = '@',
  US = '\u2201',
  _S = '\u2218',
  BS = '\u2201',
  jS = '\u2102',
  HS = '\u2245',
  VS = '\u2A6D',
  GS = '\u222E',
  zS = '\u{1D554}',
  MS = '\u2210',
  PS = '\xA9',
  ZS = '\xA9',
  WS = '\u2117',
  YS = '\u21B5',
  JS = '\u2717',
  KS = '\u{1D4B8}',
  XS = '\u2ACF',
  QS = '\u2AD1',
  rq = '\u2AD0',
  aq = '\u2AD2',
  eq = '\u22EF',
  tq = '\u2938',
  nq = '\u2935',
  oq = '\u22DE',
  lq = '\u22DF',
  iq = '\u21B6',
  sq = '\u293D',
  cq = '\u222A',
  vq = '\u2A48',
  uq = '\u2A46',
  pq = '\u2A4A',
  dq = '\u228D',
  gq = '\u2A45',
  fq = '\u222A\uFE00',
  mq = '\u21B7',
  hq = '\u293C',
  bq = '\u22DE',
  yq = '\u22DF',
  wq = '\u22CE',
  xq = '\u22CF',
  Sq = '\xA4',
  qq = '\xA4',
  Aq = '\u21B6',
  Eq = '\u21B7',
  kq = '\u22CE',
  Lq = '\u22CF',
  Nq = '\u2232',
  Tq = '\u2231',
  $q = '\u232D',
  Dq = '\u21D3',
  Cq = '\u2965',
  Rq = '\u2020',
  Iq = '\u2138',
  Oq = '\u2193',
  Fq = '\u2010',
  Uq = '\u22A3',
  _q = '\u290F',
  Bq = '\u02DD',
  jq = '\u010F',
  Hq = '\u0434',
  Vq = '\u2146',
  Gq = '\u2021',
  zq = '\u21CA',
  Mq = '\u2A77',
  Pq = '\xB0',
  Zq = '\xB0',
  Wq = '\u03B4',
  Yq = '\u29B1',
  Jq = '\u297F',
  Kq = '\u{1D521}',
  Xq = '\u21C3',
  Qq = '\u21C2',
  rA = '\u22C4',
  aA = '\u22C4',
  eA = '\u2666',
  tA = '\u2666',
  nA = '\xA8',
  oA = '\u03DD',
  lA = '\u22F2',
  iA = '\xF7',
  sA = '\xF7',
  cA = '\xF7',
  vA = '\u22C7',
  uA = '\u22C7',
  pA = '\u0452',
  dA = '\u231E',
  gA = '\u230D',
  fA = '$',
  mA = '\u{1D555}',
  hA = '\u02D9',
  bA = '\u2250',
  yA = '\u2251',
  wA = '\u2238',
  xA = '\u2214',
  SA = '\u22A1',
  qA = '\u2306',
  AA = '\u2193',
  EA = '\u21CA',
  kA = '\u21C3',
  LA = '\u21C2',
  NA = '\u2910',
  TA = '\u231F',
  $A = '\u230C',
  DA = '\u{1D4B9}',
  CA = '\u0455',
  RA = '\u29F6',
  IA = '\u0111',
  OA = '\u22F1',
  FA = '\u25BF',
  UA = '\u25BE',
  _A = '\u21F5',
  BA = '\u296F',
  jA = '\u29A6',
  HA = '\u045F',
  VA = '\u27FF',
  GA = '\u2A77',
  zA = '\u2251',
  MA = '\xE9',
  PA = '\xE9',
  ZA = '\u2A6E',
  WA = '\u011B',
  YA = '\xEA',
  JA = '\xEA',
  KA = '\u2255',
  XA = '\u044D',
  QA = '\u0117',
  rE = '\u2147',
  aE = '\u2252',
  eE = '\u{1D522}',
  tE = '\u2A9A',
  nE = '\xE8',
  oE = '\xE8',
  lE = '\u2A96',
  iE = '\u2A98',
  sE = '\u2A99',
  cE = '\u23E7',
  vE = '\u2113',
  uE = '\u2A95',
  pE = '\u2A97',
  dE = '\u0113',
  gE = '\u2205',
  fE = '\u2205',
  mE = '\u2205',
  hE = '\u2004',
  bE = '\u2005',
  yE = '\u2003',
  wE = '\u014B',
  xE = '\u2002',
  SE = '\u0119',
  qE = '\u{1D556}',
  AE = '\u22D5',
  EE = '\u29E3',
  kE = '\u2A71',
  LE = '\u03B5',
  NE = '\u03B5',
  TE = '\u03F5',
  $E = '\u2256',
  DE = '\u2255',
  CE = '\u2242',
  RE = '\u2A96',
  IE = '\u2A95',
  OE = '=',
  FE = '\u225F',
  UE = '\u2261',
  _E = '\u2A78',
  BE = '\u29E5',
  jE = '\u2253',
  HE = '\u2971',
  VE = '\u212F',
  GE = '\u2250',
  zE = '\u2242',
  ME = '\u03B7',
  PE = '\xF0',
  ZE = '\xF0',
  WE = '\xEB',
  YE = '\xEB',
  JE = '\u20AC',
  KE = '!',
  XE = '\u2203',
  QE = '\u2130',
  rk = '\u2147',
  ak = '\u2252',
  ek = '\u0444',
  tk = '\u2640',
  nk = '\uFB03',
  ok = '\uFB00',
  lk = '\uFB04',
  ik = '\u{1D523}',
  sk = '\uFB01',
  ck = 'fj',
  vk = '\u266D',
  uk = '\uFB02',
  pk = '\u25B1',
  dk = '\u0192',
  gk = '\u{1D557}',
  fk = '\u2200',
  mk = '\u22D4',
  hk = '\u2AD9',
  bk = '\u2A0D',
  yk = '\xBC',
  wk = '\xBD',
  xk = '\u2153',
  Sk = '\xBC',
  qk = '\u2155',
  Ak = '\u2159',
  Ek = '\u215B',
  kk = '\u2154',
  Lk = '\u2156',
  Nk = '\xBE',
  Tk = '\xBE',
  $k = '\u2157',
  Dk = '\u215C',
  Ck = '\u2158',
  Rk = '\u215A',
  Ik = '\u215D',
  Ok = '\u215E',
  Fk = '\u2044',
  Uk = '\u2322',
  _k = '\u{1D4BB}',
  Bk = '\u2267',
  jk = '\u2A8C',
  Hk = '\u01F5',
  Vk = '\u03B3',
  Gk = '\u03DD',
  zk = '\u2A86',
  Mk = '\u011F',
  Pk = '\u011D',
  Zk = '\u0433',
  Wk = '\u0121',
  Yk = '\u2265',
  Jk = '\u22DB',
  Kk = '\u2265',
  Xk = '\u2267',
  Qk = '\u2A7E',
  r1 = '\u2A7E',
  a1 = '\u2AA9',
  e1 = '\u2A80',
  t1 = '\u2A82',
  n1 = '\u2A84',
  o1 = '\u22DB\uFE00',
  l1 = '\u2A94',
  i1 = '\u{1D524}',
  s1 = '\u226B',
  c1 = '\u22D9',
  v1 = '\u2137',
  u1 = '\u0453',
  p1 = '\u2277',
  d1 = '\u2A92',
  g1 = '\u2AA5',
  f1 = '\u2AA4',
  m1 = '\u2269',
  h1 = '\u2A8A',
  b1 = '\u2A8A',
  y1 = '\u2A88',
  w1 = '\u2A88',
  x1 = '\u2269',
  S1 = '\u22E7',
  q1 = '\u{1D558}',
  A1 = '`',
  E1 = '\u210A',
  k1 = '\u2273',
  L1 = '\u2A8E',
  N1 = '\u2A90',
  T1 = '>',
  $1 = '>',
  D1 = '\u2AA7',
  C1 = '\u2A7A',
  R1 = '\u22D7',
  I1 = '\u2995',
  O1 = '\u2A7C',
  F1 = '\u2A86',
  U1 = '\u2978',
  _1 = '\u22D7',
  B1 = '\u22DB',
  j1 = '\u2A8C',
  H1 = '\u2277',
  V1 = '\u2273',
  G1 = '\u2269\uFE00',
  z1 = '\u2269\uFE00',
  M1 = '\u21D4',
  P1 = '\u200A',
  Z1 = '\xBD',
  W1 = '\u210B',
  Y1 = '\u044A',
  J1 = '\u2194',
  K1 = '\u2948',
  X1 = '\u21AD',
  Q1 = '\u210F',
  rL = '\u0125',
  aL = '\u2665',
  eL = '\u2665',
  tL = '\u2026',
  nL = '\u22B9',
  oL = '\u{1D525}',
  lL = '\u2925',
  iL = '\u2926',
  sL = '\u21FF',
  cL = '\u223B',
  vL = '\u21A9',
  uL = '\u21AA',
  pL = '\u{1D559}',
  dL = '\u2015',
  gL = '\u{1D4BD}',
  fL = '\u210F',
  mL = '\u0127',
  hL = '\u2043',
  bL = '\u2010',
  yL = '\xED',
  wL = '\xED',
  xL = '\u2063',
  SL = '\xEE',
  qL = '\xEE',
  AL = '\u0438',
  EL = '\u0435',
  kL = '\xA1',
  LL = '\xA1',
  NL = '\u21D4',
  TL = '\u{1D526}',
  $L = '\xEC',
  DL = '\xEC',
  CL = '\u2148',
  RL = '\u2A0C',
  IL = '\u222D',
  OL = '\u29DC',
  FL = '\u2129',
  UL = '\u0133',
  _L = '\u012B',
  BL = '\u2111',
  jL = '\u2110',
  HL = '\u2111',
  VL = '\u0131',
  GL = '\u22B7',
  zL = '\u01B5',
  ML = '\u2105',
  PL = '\u221E',
  ZL = '\u29DD',
  WL = '\u0131',
  YL = '\u222B',
  JL = '\u22BA',
  KL = '\u2124',
  XL = '\u22BA',
  QL = '\u2A17',
  rN = '\u2A3C',
  aN = '\u0451',
  eN = '\u012F',
  tN = '\u{1D55A}',
  nN = '\u03B9',
  oN = '\u2A3C',
  lN = '\xBF',
  iN = '\xBF',
  sN = '\u{1D4BE}',
  cN = '\u2208',
  vN = '\u22F9',
  uN = '\u22F5',
  pN = '\u22F4',
  dN = '\u22F3',
  gN = '\u2208',
  fN = '\u2062',
  mN = '\u0129',
  hN = '\u0456',
  bN = '\xEF',
  yN = '\xEF',
  wN = '\u0135',
  xN = '\u0439',
  SN = '\u{1D527}',
  qN = '\u0237',
  AN = '\u{1D55B}',
  EN = '\u{1D4BF}',
  kN = '\u0458',
  LN = '\u0454',
  NN = '\u03BA',
  TN = '\u03F0',
  $N = '\u0137',
  DN = '\u043A',
  CN = '\u{1D528}',
  RN = '\u0138',
  IN = '\u0445',
  ON = '\u045C',
  FN = '\u{1D55C}',
  UN = '\u{1D4C0}',
  _N = '\u21DA',
  BN = '\u21D0',
  jN = '\u291B',
  HN = '\u290E',
  VN = '\u2266',
  GN = '\u2A8B',
  zN = '\u2962',
  MN = '\u013A',
  PN = '\u29B4',
  ZN = '\u2112',
  WN = '\u03BB',
  YN = '\u27E8',
  JN = '\u2991',
  KN = '\u27E8',
  XN = '\u2A85',
  QN = '\xAB',
  rT = '\xAB',
  aT = '\u2190',
  eT = '\u21E4',
  tT = '\u291F',
  nT = '\u291D',
  oT = '\u21A9',
  lT = '\u21AB',
  iT = '\u2939',
  sT = '\u2973',
  cT = '\u21A2',
  vT = '\u2AAB',
  uT = '\u2919',
  pT = '\u2AAD',
  dT = '\u2AAD\uFE00',
  gT = '\u290C',
  fT = '\u2772',
  mT = '{',
  hT = '[',
  bT = '\u298B',
  yT = '\u298F',
  wT = '\u298D',
  xT = '\u013E',
  ST = '\u013C',
  qT = '\u2308',
  AT = '{',
  ET = '\u043B',
  kT = '\u2936',
  LT = '\u201C',
  NT = '\u201E',
  TT = '\u2967',
  $T = '\u294B',
  DT = '\u21B2',
  CT = '\u2264',
  RT = '\u2190',
  IT = '\u21A2',
  OT = '\u21BD',
  FT = '\u21BC',
  UT = '\u21C7',
  _T = '\u2194',
  BT = '\u21C6',
  jT = '\u21CB',
  HT = '\u21AD',
  VT = '\u22CB',
  GT = '\u22DA',
  zT = '\u2264',
  MT = '\u2266',
  PT = '\u2A7D',
  ZT = '\u2A7D',
  WT = '\u2AA8',
  YT = '\u2A7F',
  JT = '\u2A81',
  KT = '\u2A83',
  XT = '\u22DA\uFE00',
  QT = '\u2A93',
  r$ = '\u2A85',
  a$ = '\u22D6',
  e$ = '\u22DA',
  t$ = '\u2A8B',
  n$ = '\u2276',
  o$ = '\u2272',
  l$ = '\u297C',
  i$ = '\u230A',
  s$ = '\u{1D529}',
  c$ = '\u2276',
  v$ = '\u2A91',
  u$ = '\u21BD',
  p$ = '\u21BC',
  d$ = '\u296A',
  g$ = '\u2584',
  f$ = '\u0459',
  m$ = '\u226A',
  h$ = '\u21C7',
  b$ = '\u231E',
  y$ = '\u296B',
  w$ = '\u25FA',
  x$ = '\u0140',
  S$ = '\u23B0',
  q$ = '\u23B0',
  A$ = '\u2268',
  E$ = '\u2A89',
  k$ = '\u2A89',
  L$ = '\u2A87',
  N$ = '\u2A87',
  T$ = '\u2268',
  $$ = '\u22E6',
  D$ = '\u27EC',
  C$ = '\u21FD',
  R$ = '\u27E6',
  I$ = '\u27F5',
  O$ = '\u27F7',
  F$ = '\u27FC',
  U$ = '\u27F6',
  _$ = '\u21AB',
  B$ = '\u21AC',
  j$ = '\u2985',
  H$ = '\u{1D55D}',
  V$ = '\u2A2D',
  G$ = '\u2A34',
  z$ = '\u2217',
  M$ = '_',
  P$ = '\u25CA',
  Z$ = '\u25CA',
  W$ = '\u29EB',
  Y$ = '(',
  J$ = '\u2993',
  K$ = '\u21C6',
  X$ = '\u231F',
  Q$ = '\u21CB',
  rD = '\u296D',
  aD = '\u200E',
  eD = '\u22BF',
  tD = '\u2039',
  nD = '\u{1D4C1}',
  oD = '\u21B0',
  lD = '\u2272',
  iD = '\u2A8D',
  sD = '\u2A8F',
  cD = '[',
  vD = '\u2018',
  uD = '\u201A',
  pD = '\u0142',
  dD = '<',
  gD = '<',
  fD = '\u2AA6',
  mD = '\u2A79',
  hD = '\u22D6',
  bD = '\u22CB',
  yD = '\u22C9',
  wD = '\u2976',
  xD = '\u2A7B',
  SD = '\u2996',
  qD = '\u25C3',
  AD = '\u22B4',
  ED = '\u25C2',
  kD = '\u294A',
  LD = '\u2966',
  ND = '\u2268\uFE00',
  TD = '\u2268\uFE00',
  $D = '\u223A',
  DD = '\xAF',
  CD = '\xAF',
  RD = '\u2642',
  ID = '\u2720',
  OD = '\u2720',
  FD = '\u21A6',
  UD = '\u21A6',
  _D = '\u21A7',
  BD = '\u21A4',
  jD = '\u21A5',
  HD = '\u25AE',
  VD = '\u2A29',
  GD = '\u043C',
  zD = '\u2014',
  MD = '\u2221',
  PD = '\u{1D52A}',
  ZD = '\u2127',
  WD = '\xB5',
  YD = '\xB5',
  JD = '\u2223',
  KD = '*',
  XD = '\u2AF0',
  QD = '\xB7',
  r0 = '\xB7',
  a0 = '\u2212',
  e0 = '\u229F',
  t0 = '\u2238',
  n0 = '\u2A2A',
  o0 = '\u2ADB',
  l0 = '\u2026',
  i0 = '\u2213',
  s0 = '\u22A7',
  c0 = '\u{1D55E}',
  v0 = '\u2213',
  u0 = '\u{1D4C2}',
  p0 = '\u223E',
  d0 = '\u03BC',
  g0 = '\u22B8',
  f0 = '\u22B8',
  m0 = '\u22D9\u0338',
  h0 = '\u226B\u20D2',
  b0 = '\u226B\u0338',
  y0 = '\u21CD',
  w0 = '\u21CE',
  x0 = '\u22D8\u0338',
  S0 = '\u226A\u20D2',
  q0 = '\u226A\u0338',
  A0 = '\u21CF',
  E0 = '\u22AF',
  k0 = '\u22AE',
  L0 = '\u2207',
  N0 = '\u0144',
  T0 = '\u2220\u20D2',
  $0 = '\u2249',
  D0 = '\u2A70\u0338',
  C0 = '\u224B\u0338',
  R0 = '\u0149',
  I0 = '\u2249',
  O0 = '\u266E',
  F0 = '\u266E',
  U0 = '\u2115',
  _0 = '\xA0',
  B0 = '\xA0',
  j0 = '\u224E\u0338',
  H0 = '\u224F\u0338',
  V0 = '\u2A43',
  G0 = '\u0148',
  z0 = '\u0146',
  M0 = '\u2247',
  P0 = '\u2A6D\u0338',
  Z0 = '\u2A42',
  W0 = '\u043D',
  Y0 = '\u2013',
  J0 = '\u2260',
  K0 = '\u21D7',
  X0 = '\u2924',
  Q0 = '\u2197',
  rC = '\u2197',
  aC = '\u2250\u0338',
  eC = '\u2262',
  tC = '\u2928',
  nC = '\u2242\u0338',
  oC = '\u2204',
  lC = '\u2204',
  iC = '\u{1D52B}',
  sC = '\u2267\u0338',
  cC = '\u2271',
  vC = '\u2271',
  uC = '\u2267\u0338',
  pC = '\u2A7E\u0338',
  dC = '\u2A7E\u0338',
  gC = '\u2275',
  fC = '\u226F',
  mC = '\u226F',
  hC = '\u21CE',
  bC = '\u21AE',
  yC = '\u2AF2',
  wC = '\u220B',
  xC = '\u22FC',
  SC = '\u22FA',
  qC = '\u220B',
  AC = '\u045A',
  EC = '\u21CD',
  kC = '\u2266\u0338',
  LC = '\u219A',
  NC = '\u2025',
  TC = '\u2270',
  $C = '\u219A',
  DC = '\u21AE',
  CC = '\u2270',
  RC = '\u2266\u0338',
  IC = '\u2A7D\u0338',
  OC = '\u2A7D\u0338',
  FC = '\u226E',
  UC = '\u2274',
  _C = '\u226E',
  BC = '\u22EA',
  jC = '\u22EC',
  HC = '\u2224',
  VC = '\u{1D55F}',
  GC = '\xAC',
  zC = '\xAC',
  MC = '\u2209',
  PC = '\u22F9\u0338',
  ZC = '\u22F5\u0338',
  WC = '\u2209',
  YC = '\u22F7',
  JC = '\u22F6',
  KC = '\u220C',
  XC = '\u220C',
  QC = '\u22FE',
  rR = '\u22FD',
  aR = '\u2226',
  eR = '\u2226',
  tR = '\u2AFD\u20E5',
  nR = '\u2202\u0338',
  oR = '\u2A14',
  lR = '\u2280',
  iR = '\u22E0',
  sR = '\u2AAF\u0338',
  cR = '\u2280',
  vR = '\u2AAF\u0338',
  uR = '\u21CF',
  pR = '\u219B',
  dR = '\u2933\u0338',
  gR = '\u219D\u0338',
  fR = '\u219B',
  mR = '\u22EB',
  hR = '\u22ED',
  bR = '\u2281',
  yR = '\u22E1',
  wR = '\u2AB0\u0338',
  xR = '\u{1D4C3}',
  SR = '\u2224',
  qR = '\u2226',
  AR = '\u2241',
  ER = '\u2244',
  kR = '\u2244',
  LR = '\u2224',
  NR = '\u2226',
  TR = '\u22E2',
  $R = '\u22E3',
  DR = '\u2284',
  CR = '\u2AC5\u0338',
  RR = '\u2288',
  IR = '\u2282\u20D2',
  OR = '\u2288',
  FR = '\u2AC5\u0338',
  UR = '\u2281',
  _R = '\u2AB0\u0338',
  BR = '\u2285',
  jR = '\u2AC6\u0338',
  HR = '\u2289',
  VR = '\u2283\u20D2',
  GR = '\u2289',
  zR = '\u2AC6\u0338',
  MR = '\u2279',
  PR = '\xF1',
  ZR = '\xF1',
  WR = '\u2278',
  YR = '\u22EA',
  JR = '\u22EC',
  KR = '\u22EB',
  XR = '\u22ED',
  QR = '\u03BD',
  rI = '#',
  aI = '\u2116',
  eI = '\u2007',
  tI = '\u22AD',
  nI = '\u2904',
  oI = '\u224D\u20D2',
  lI = '\u22AC',
  iI = '\u2265\u20D2',
  sI = '>\u20D2',
  cI = '\u29DE',
  vI = '\u2902',
  uI = '\u2264\u20D2',
  pI = '<\u20D2',
  dI = '\u22B4\u20D2',
  gI = '\u2903',
  fI = '\u22B5\u20D2',
  mI = '\u223C\u20D2',
  hI = '\u21D6',
  bI = '\u2923',
  yI = '\u2196',
  wI = '\u2196',
  xI = '\u2927',
  SI = '\u24C8',
  qI = '\xF3',
  AI = '\xF3',
  EI = '\u229B',
  kI = '\xF4',
  LI = '\xF4',
  NI = '\u043E',
  TI = '\u229D',
  $I = '\u0151',
  DI = '\u2A38',
  CI = '\u2299',
  RI = '\u29BC',
  II = '\u0153',
  OI = '\u29BF',
  FI = '\u{1D52C}',
  UI = '\u02DB',
  _I = '\xF2',
  BI = '\xF2',
  jI = '\u29C1',
  HI = '\u29B5',
  VI = '\u03A9',
  GI = '\u222E',
  zI = '\u21BA',
  MI = '\u29BE',
  PI = '\u29BB',
  ZI = '\u203E',
  WI = '\u29C0',
  YI = '\u014D',
  JI = '\u03C9',
  KI = '\u03BF',
  XI = '\u29B6',
  QI = '\u2296',
  rO = '\u{1D560}',
  aO = '\u29B7',
  eO = '\u29B9',
  tO = '\u2295',
  nO = '\u2228',
  oO = '\u21BB',
  lO = '\xBA',
  iO = '\u2134',
  sO = '\u2134',
  cO = '\xAA',
  vO = '\xBA',
  uO = '\u22B6',
  pO = '\u2A56',
  dO = '\u2A57',
  gO = '\u2A5B',
  fO = '\u2134',
  mO = '\xF8',
  hO = '\xF8',
  bO = '\u2298',
  yO = '\xF5',
  wO = '\xF5',
  xO = '\u2297',
  SO = '\u2A36',
  qO = '\xF6',
  AO = '\xF6',
  EO = '\u233D',
  kO = '\xB6',
  LO = '\xB6',
  NO = '\u2225',
  TO = '\u2AF3',
  $O = '\u2AFD',
  DO = '\u2202',
  CO = '\u043F',
  RO = '%',
  IO = '.',
  OO = '\u2030',
  FO = '\u22A5',
  UO = '\u2031',
  _O = '\u{1D52D}',
  BO = '\u03C6',
  jO = '\u03D5',
  HO = '\u2133',
  VO = '\u260E',
  GO = '\u03C0',
  zO = '\u22D4',
  MO = '\u03D6',
  PO = '\u210F',
  ZO = '\u210E',
  WO = '\u210F',
  YO = '+',
  JO = '\u2A23',
  KO = '\u229E',
  XO = '\u2A22',
  QO = '\u2214',
  rF = '\u2A25',
  aF = '\u2A72',
  eF = '\xB1',
  tF = '\xB1',
  nF = '\u2A26',
  oF = '\u2A27',
  lF = '\xB1',
  iF = '\u2A15',
  sF = '\u{1D561}',
  cF = '\xA3',
  vF = '\xA3',
  uF = '\u227A',
  pF = '\u2AB3',
  dF = '\u2AB7',
  gF = '\u227C',
  fF = '\u2AAF',
  mF = '\u227A',
  hF = '\u2AB7',
  bF = '\u227C',
  yF = '\u2AAF',
  wF = '\u2AB9',
  xF = '\u2AB5',
  SF = '\u22E8',
  qF = '\u227E',
  AF = '\u2032',
  EF = '\u2119',
  kF = '\u2AB5',
  LF = '\u2AB9',
  NF = '\u22E8',
  TF = '\u220F',
  $F = '\u232E',
  DF = '\u2312',
  CF = '\u2313',
  RF = '\u221D',
  IF = '\u221D',
  OF = '\u227E',
  FF = '\u22B0',
  UF = '\u{1D4C5}',
  _F = '\u03C8',
  BF = '\u2008',
  jF = '\u{1D52E}',
  HF = '\u2A0C',
  VF = '\u{1D562}',
  GF = '\u2057',
  zF = '\u{1D4C6}',
  MF = '\u210D',
  PF = '\u2A16',
  ZF = '?',
  WF = '\u225F',
  YF = '"',
  JF = '"',
  KF = '\u21DB',
  XF = '\u21D2',
  QF = '\u291C',
  rU = '\u290F',
  aU = '\u2964',
  eU = '\u223D\u0331',
  tU = '\u0155',
  nU = '\u221A',
  oU = '\u29B3',
  lU = '\u27E9',
  iU = '\u2992',
  sU = '\u29A5',
  cU = '\u27E9',
  vU = '\xBB',
  uU = '\xBB',
  pU = '\u2192',
  dU = '\u2975',
  gU = '\u21E5',
  fU = '\u2920',
  mU = '\u2933',
  hU = '\u291E',
  bU = '\u21AA',
  yU = '\u21AC',
  wU = '\u2945',
  xU = '\u2974',
  SU = '\u21A3',
  qU = '\u219D',
  AU = '\u291A',
  EU = '\u2236',
  kU = '\u211A',
  LU = '\u290D',
  NU = '\u2773',
  TU = '}',
  $U = ']',
  DU = '\u298C',
  CU = '\u298E',
  RU = '\u2990',
  IU = '\u0159',
  OU = '\u0157',
  FU = '\u2309',
  UU = '}',
  _U = '\u0440',
  BU = '\u2937',
  jU = '\u2969',
  HU = '\u201D',
  VU = '\u201D',
  GU = '\u21B3',
  zU = '\u211C',
  MU = '\u211B',
  PU = '\u211C',
  ZU = '\u211D',
  WU = '\u25AD',
  YU = '\xAE',
  JU = '\xAE',
  KU = '\u297D',
  XU = '\u230B',
  QU = '\u{1D52F}',
  r_ = '\u21C1',
  a_ = '\u21C0',
  e_ = '\u296C',
  t_ = '\u03C1',
  n_ = '\u03F1',
  o_ = '\u2192',
  l_ = '\u21A3',
  i_ = '\u21C1',
  s_ = '\u21C0',
  c_ = '\u21C4',
  v_ = '\u21CC',
  u_ = '\u21C9',
  p_ = '\u219D',
  d_ = '\u22CC',
  g_ = '\u02DA',
  f_ = '\u2253',
  m_ = '\u21C4',
  h_ = '\u21CC',
  b_ = '\u200F',
  y_ = '\u23B1',
  w_ = '\u23B1',
  x_ = '\u2AEE',
  S_ = '\u27ED',
  q_ = '\u21FE',
  A_ = '\u27E7',
  E_ = '\u2986',
  k_ = '\u{1D563}',
  L_ = '\u2A2E',
  N_ = '\u2A35',
  T_ = ')',
  $_ = '\u2994',
  D_ = '\u2A12',
  C_ = '\u21C9',
  R_ = '\u203A',
  I_ = '\u{1D4C7}',
  O_ = '\u21B1',
  F_ = ']',
  U_ = '\u2019',
  __ = '\u2019',
  B_ = '\u22CC',
  j_ = '\u22CA',
  H_ = '\u25B9',
  V_ = '\u22B5',
  G_ = '\u25B8',
  z_ = '\u29CE',
  M_ = '\u2968',
  P_ = '\u211E',
  Z_ = '\u015B',
  W_ = '\u201A',
  Y_ = '\u227B',
  J_ = '\u2AB4',
  K_ = '\u2AB8',
  X_ = '\u0161',
  Q_ = '\u227D',
  rB = '\u2AB0',
  aB = '\u015F',
  eB = '\u015D',
  tB = '\u2AB6',
  nB = '\u2ABA',
  oB = '\u22E9',
  lB = '\u2A13',
  iB = '\u227F',
  sB = '\u0441',
  cB = '\u22C5',
  vB = '\u22A1',
  uB = '\u2A66',
  pB = '\u21D8',
  dB = '\u2925',
  gB = '\u2198',
  fB = '\u2198',
  mB = '\xA7',
  hB = '\xA7',
  bB = ';',
  yB = '\u2929',
  wB = '\u2216',
  xB = '\u2216',
  SB = '\u2736',
  qB = '\u{1D530}',
  AB = '\u2322',
  EB = '\u266F',
  kB = '\u0449',
  LB = '\u0448',
  NB = '\u2223',
  TB = '\u2225',
  $B = '\xAD',
  DB = '\xAD',
  CB = '\u03C3',
  RB = '\u03C2',
  IB = '\u03C2',
  OB = '\u223C',
  FB = '\u2A6A',
  UB = '\u2243',
  _B = '\u2243',
  BB = '\u2A9E',
  jB = '\u2AA0',
  HB = '\u2A9D',
  VB = '\u2A9F',
  GB = '\u2246',
  zB = '\u2A24',
  MB = '\u2972',
  PB = '\u2190',
  ZB = '\u2216',
  WB = '\u2A33',
  YB = '\u29E4',
  JB = '\u2223',
  KB = '\u2323',
  XB = '\u2AAA',
  QB = '\u2AAC',
  rj = '\u2AAC\uFE00',
  aj = '\u044C',
  ej = '/',
  tj = '\u29C4',
  nj = '\u233F',
  oj = '\u{1D564}',
  lj = '\u2660',
  ij = '\u2660',
  sj = '\u2225',
  cj = '\u2293',
  vj = '\u2293\uFE00',
  uj = '\u2294',
  pj = '\u2294\uFE00',
  dj = '\u228F',
  gj = '\u2291',
  fj = '\u228F',
  mj = '\u2291',
  hj = '\u2290',
  bj = '\u2292',
  yj = '\u2290',
  wj = '\u2292',
  xj = '\u25A1',
  Sj = '\u25A1',
  qj = '\u25AA',
  Aj = '\u25AA',
  Ej = '\u2192',
  kj = '\u{1D4C8}',
  Lj = '\u2216',
  Nj = '\u2323',
  Tj = '\u22C6',
  $j = '\u2606',
  Dj = '\u2605',
  Cj = '\u03F5',
  Rj = '\u03D5',
  Ij = '\xAF',
  Oj = '\u2282',
  Fj = '\u2AC5',
  Uj = '\u2ABD',
  _j = '\u2286',
  Bj = '\u2AC3',
  jj = '\u2AC1',
  Hj = '\u2ACB',
  Vj = '\u228A',
  Gj = '\u2ABF',
  zj = '\u2979',
  Mj = '\u2282',
  Pj = '\u2286',
  Zj = '\u2AC5',
  Wj = '\u228A',
  Yj = '\u2ACB',
  Jj = '\u2AC7',
  Kj = '\u2AD5',
  Xj = '\u2AD3',
  Qj = '\u227B',
  r2 = '\u2AB8',
  a2 = '\u227D',
  e2 = '\u2AB0',
  t2 = '\u2ABA',
  n2 = '\u2AB6',
  o2 = '\u22E9',
  l2 = '\u227F',
  i2 = '\u2211',
  s2 = '\u266A',
  c2 = '\u2283',
  v2 = '\xB9',
  u2 = '\xB2',
  p2 = '\xB3',
  d2 = '\u2AC6',
  g2 = '\u2ABE',
  f2 = '\u2AD8',
  m2 = '\u2287',
  h2 = '\u2AC4',
  b2 = '\u27C9',
  y2 = '\u2AD7',
  w2 = '\u297B',
  x2 = '\u2AC2',
  S2 = '\u2ACC',
  q2 = '\u228B',
  A2 = '\u2AC0',
  E2 = '\u2283',
  k2 = '\u2287',
  L2 = '\u2AC6',
  N2 = '\u228B',
  T2 = '\u2ACC',
  $2 = '\u2AC8',
  D2 = '\u2AD4',
  C2 = '\u2AD6',
  R2 = '\u21D9',
  I2 = '\u2926',
  O2 = '\u2199',
  F2 = '\u2199',
  U2 = '\u292A',
  _2 = '\xDF',
  B2 = '\xDF',
  j2 = '\u2316',
  H2 = '\u03C4',
  V2 = '\u23B4',
  G2 = '\u0165',
  z2 = '\u0163',
  M2 = '\u0442',
  P2 = '\u20DB',
  Z2 = '\u2315',
  W2 = '\u{1D531}',
  Y2 = '\u2234',
  J2 = '\u2234',
  K2 = '\u03B8',
  X2 = '\u03D1',
  Q2 = '\u03D1',
  rH = '\u2248',
  aH = '\u223C',
  eH = '\u2009',
  tH = '\u2248',
  nH = '\u223C',
  oH = '\xFE',
  lH = '\xFE',
  iH = '\u02DC',
  sH = '\xD7',
  cH = '\xD7',
  vH = '\u22A0',
  uH = '\u2A31',
  pH = '\u2A30',
  dH = '\u222D',
  gH = '\u2928',
  fH = '\u22A4',
  mH = '\u2336',
  hH = '\u2AF1',
  bH = '\u{1D565}',
  yH = '\u2ADA',
  wH = '\u2929',
  xH = '\u2034',
  SH = '\u2122',
  qH = '\u25B5',
  AH = '\u25BF',
  EH = '\u25C3',
  kH = '\u22B4',
  LH = '\u225C',
  NH = '\u25B9',
  TH = '\u22B5',
  $H = '\u25EC',
  DH = '\u225C',
  CH = '\u2A3A',
  RH = '\u2A39',
  IH = '\u29CD',
  OH = '\u2A3B',
  FH = '\u23E2',
  UH = '\u{1D4C9}',
  _H = '\u0446',
  BH = '\u045B',
  jH = '\u0167',
  HH = '\u226C',
  VH = '\u219E',
  GH = '\u21A0',
  zH = '\u21D1',
  MH = '\u2963',
  PH = '\xFA',
  ZH = '\xFA',
  WH = '\u2191',
  YH = '\u045E',
  JH = '\u016D',
  KH = '\xFB',
  XH = '\xFB',
  QH = '\u0443',
  rV = '\u21C5',
  aV = '\u0171',
  eV = '\u296E',
  tV = '\u297E',
  nV = '\u{1D532}',
  oV = '\xF9',
  lV = '\xF9',
  iV = '\u21BF',
  sV = '\u21BE',
  cV = '\u2580',
  vV = '\u231C',
  uV = '\u231C',
  pV = '\u230F',
  dV = '\u25F8',
  gV = '\u016B',
  fV = '\xA8',
  mV = '\xA8',
  hV = '\u0173',
  bV = '\u{1D566}',
  yV = '\u2191',
  wV = '\u2195',
  xV = '\u21BF',
  SV = '\u21BE',
  qV = '\u228E',
  AV = '\u03C5',
  EV = '\u03D2',
  kV = '\u03C5',
  LV = '\u21C8',
  NV = '\u231D',
  TV = '\u231D',
  $V = '\u230E',
  DV = '\u016F',
  CV = '\u25F9',
  RV = '\u{1D4CA}',
  IV = '\u22F0',
  OV = '\u0169',
  FV = '\u25B5',
  UV = '\u25B4',
  _V = '\u21C8',
  BV = '\xFC',
  jV = '\xFC',
  HV = '\u29A7',
  VV = '\u21D5',
  GV = '\u2AE8',
  zV = '\u2AE9',
  MV = '\u22A8',
  PV = '\u299C',
  ZV = '\u03F5',
  WV = '\u03F0',
  YV = '\u2205',
  JV = '\u03D5',
  KV = '\u03D6',
  XV = '\u221D',
  QV = '\u2195',
  rG = '\u03F1',
  aG = '\u03C2',
  eG = '\u228A\uFE00',
  tG = '\u2ACB\uFE00',
  nG = '\u228B\uFE00',
  oG = '\u2ACC\uFE00',
  lG = '\u03D1',
  iG = '\u22B2',
  sG = '\u22B3',
  cG = '\u0432',
  vG = '\u22A2',
  uG = '\u2228',
  pG = '\u22BB',
  dG = '\u225A',
  gG = '\u22EE',
  fG = '|',
  mG = '|',
  hG = '\u{1D533}',
  bG = '\u22B2',
  yG = '\u2282\u20D2',
  wG = '\u2283\u20D2',
  xG = '\u{1D567}',
  SG = '\u221D',
  qG = '\u22B3',
  AG = '\u{1D4CB}',
  EG = '\u2ACB\uFE00',
  kG = '\u228A\uFE00',
  LG = '\u2ACC\uFE00',
  NG = '\u228B\uFE00',
  TG = '\u299A',
  $G = '\u0175',
  DG = '\u2A5F',
  CG = '\u2227',
  RG = '\u2259',
  IG = '\u2118',
  OG = '\u{1D534}',
  FG = '\u{1D568}',
  UG = '\u2118',
  _G = '\u2240',
  BG = '\u2240',
  jG = '\u{1D4CC}',
  HG = '\u22C2',
  VG = '\u25EF',
  GG = '\u22C3',
  zG = '\u25BD',
  MG = '\u{1D535}',
  PG = '\u27FA',
  ZG = '\u27F7',
  WG = '\u03BE',
  YG = '\u27F8',
  JG = '\u27F5',
  KG = '\u27FC',
  XG = '\u22FB',
  QG = '\u2A00',
  rz = '\u{1D569}',
  az = '\u2A01',
  ez = '\u2A02',
  tz = '\u27F9',
  nz = '\u27F6',
  oz = '\u{1D4CD}',
  lz = '\u2A06',
  iz = '\u2A04',
  sz = '\u25B3',
  cz = '\u22C1',
  vz = '\u22C0',
  uz = '\xFD',
  pz = '\xFD',
  dz = '\u044F',
  gz = '\u0177',
  fz = '\u044B',
  mz = '\xA5',
  hz = '\xA5',
  bz = '\u{1D536}',
  yz = '\u0457',
  wz = '\u{1D56A}',
  xz = '\u{1D4CE}',
  Sz = '\u044E',
  qz = '\xFF',
  Az = '\xFF',
  Ez = '\u017A',
  kz = '\u017E',
  Lz = '\u0437',
  Nz = '\u017C',
  Tz = '\u2128',
  $z = '\u03B6',
  Dz = '\u{1D537}',
  Cz = '\u0436',
  Rz = '\u21DD',
  Iz = '\u{1D56B}',
  Oz = '\u{1D4CF}',
  Fz = '\u200D',
  Uz = '\u200C',
  _z = {
    AEli: Dl,
    AElig: Cl,
    AM: Rl,
    AMP: Il,
    Aacut: Ol,
    Aacute: Fl,
    Abreve: Ul,
    Acir: _l,
    Acirc: Bl,
    Acy: jl,
    Afr: Hl,
    Agrav: Vl,
    Agrave: Gl,
    Alpha: zl,
    Amacr: Ml,
    And: Pl,
    Aogon: Zl,
    Aopf: Wl,
    ApplyFunction: Yl,
    Arin: Jl,
    Aring: Kl,
    Ascr: Xl,
    Assign: Ql,
    Atild: ri,
    Atilde: ai,
    Aum: ei,
    Auml: ti,
    Backslash: ni,
    Barv: oi,
    Barwed: li,
    Bcy: ii,
    Because: si,
    Bernoullis: ci,
    Beta: vi,
    Bfr: ui,
    Bopf: pi,
    Breve: di,
    Bscr: gi,
    Bumpeq: fi,
    CHcy: mi,
    COP: hi,
    COPY: bi,
    Cacute: yi,
    Cap: wi,
    CapitalDifferentialD: xi,
    Cayleys: Si,
    Ccaron: qi,
    Ccedi: Ai,
    Ccedil: Ei,
    Ccirc: ki,
    Cconint: Li,
    Cdot: Ni,
    Cedilla: Ti,
    CenterDot: $i,
    Cfr: Di,
    Chi: Ci,
    CircleDot: Ri,
    CircleMinus: Ii,
    CirclePlus: Oi,
    CircleTimes: Fi,
    ClockwiseContourIntegral: Ui,
    CloseCurlyDoubleQuote: _i,
    CloseCurlyQuote: Bi,
    Colon: ji,
    Colone: Hi,
    Congruent: Vi,
    Conint: Gi,
    ContourIntegral: zi,
    Copf: Mi,
    Coproduct: Pi,
    CounterClockwiseContourIntegral: Zi,
    Cross: Wi,
    Cscr: Yi,
    Cup: Ji,
    CupCap: Ki,
    DD: Xi,
    DDotrahd: Qi,
    DJcy: rs,
    DScy: as,
    DZcy: es,
    Dagger: ts,
    Darr: ns,
    Dashv: os,
    Dcaron: ls,
    Dcy: is,
    Del: ss,
    Delta: cs,
    Dfr: vs,
    DiacriticalAcute: us,
    DiacriticalDot: ps,
    DiacriticalDoubleAcute: ds,
    DiacriticalGrave: gs,
    DiacriticalTilde: fs,
    Diamond: ms,
    DifferentialD: hs,
    Dopf: bs,
    Dot: ys,
    DotDot: ws,
    DotEqual: xs,
    DoubleContourIntegral: Ss,
    DoubleDot: qs,
    DoubleDownArrow: As,
    DoubleLeftArrow: Es,
    DoubleLeftRightArrow: ks,
    DoubleLeftTee: Ls,
    DoubleLongLeftArrow: Ns,
    DoubleLongLeftRightArrow: Ts,
    DoubleLongRightArrow: $s,
    DoubleRightArrow: Ds,
    DoubleRightTee: Cs,
    DoubleUpArrow: Rs,
    DoubleUpDownArrow: Is,
    DoubleVerticalBar: Os,
    DownArrow: Fs,
    DownArrowBar: Us,
    DownArrowUpArrow: _s,
    DownBreve: Bs,
    DownLeftRightVector: js,
    DownLeftTeeVector: Hs,
    DownLeftVector: Vs,
    DownLeftVectorBar: Gs,
    DownRightTeeVector: zs,
    DownRightVector: Ms,
    DownRightVectorBar: Ps,
    DownTee: Zs,
    DownTeeArrow: Ws,
    Downarrow: Ys,
    Dscr: Js,
    Dstrok: Ks,
    ENG: Xs,
    ET: Qs,
    ETH: rc,
    Eacut: ac,
    Eacute: ec,
    Ecaron: tc,
    Ecir: nc,
    Ecirc: oc,
    Ecy: lc,
    Edot: ic,
    Efr: sc,
    Egrav: cc,
    Egrave: vc,
    Element: uc,
    Emacr: pc,
    EmptySmallSquare: dc,
    EmptyVerySmallSquare: gc,
    Eogon: fc,
    Eopf: mc,
    Epsilon: hc,
    Equal: bc,
    EqualTilde: yc,
    Equilibrium: wc,
    Escr: xc,
    Esim: Sc,
    Eta: qc,
    Eum: Ac,
    Euml: Ec,
    Exists: kc,
    ExponentialE: Lc,
    Fcy: Nc,
    Ffr: Tc,
    FilledSmallSquare: $c,
    FilledVerySmallSquare: Dc,
    Fopf: Cc,
    ForAll: Rc,
    Fouriertrf: Ic,
    Fscr: Oc,
    GJcy: Fc,
    G: Uc,
    GT: _c,
    Gamma: Bc,
    Gammad: jc,
    Gbreve: Hc,
    Gcedil: Vc,
    Gcirc: Gc,
    Gcy: zc,
    Gdot: Mc,
    Gfr: Pc,
    Gg: Zc,
    Gopf: Wc,
    GreaterEqual: Yc,
    GreaterEqualLess: Jc,
    GreaterFullEqual: Kc,
    GreaterGreater: Xc,
    GreaterLess: Qc,
    GreaterSlantEqual: rv,
    GreaterTilde: av,
    Gscr: ev,
    Gt: tv,
    HARDcy: nv,
    Hacek: ov,
    Hat: lv,
    Hcirc: iv,
    Hfr: sv,
    HilbertSpace: cv,
    Hopf: vv,
    HorizontalLine: uv,
    Hscr: pv,
    Hstrok: dv,
    HumpDownHump: gv,
    HumpEqual: fv,
    IEcy: mv,
    IJlig: hv,
    IOcy: bv,
    Iacut: yv,
    Iacute: wv,
    Icir: xv,
    Icirc: Sv,
    Icy: qv,
    Idot: Av,
    Ifr: Ev,
    Igrav: kv,
    Igrave: Lv,
    Im: Nv,
    Imacr: Tv,
    ImaginaryI: $v,
    Implies: Dv,
    Int: Cv,
    Integral: Rv,
    Intersection: Iv,
    InvisibleComma: Ov,
    InvisibleTimes: Fv,
    Iogon: Uv,
    Iopf: _v,
    Iota: Bv,
    Iscr: jv,
    Itilde: Hv,
    Iukcy: Vv,
    Ium: Gv,
    Iuml: zv,
    Jcirc: Mv,
    Jcy: Pv,
    Jfr: Zv,
    Jopf: Wv,
    Jscr: Yv,
    Jsercy: Jv,
    Jukcy: Kv,
    KHcy: Xv,
    KJcy: Qv,
    Kappa: ru,
    Kcedil: au,
    Kcy: eu,
    Kfr: tu,
    Kopf: nu,
    Kscr: ou,
    LJcy: lu,
    L: iu,
    LT: su,
    Lacute: cu,
    Lambda: vu,
    Lang: uu,
    Laplacetrf: pu,
    Larr: du,
    Lcaron: gu,
    Lcedil: fu,
    Lcy: mu,
    LeftAngleBracket: hu,
    LeftArrow: bu,
    LeftArrowBar: yu,
    LeftArrowRightArrow: wu,
    LeftCeiling: xu,
    LeftDoubleBracket: Su,
    LeftDownTeeVector: qu,
    LeftDownVector: Au,
    LeftDownVectorBar: Eu,
    LeftFloor: ku,
    LeftRightArrow: Lu,
    LeftRightVector: Nu,
    LeftTee: Tu,
    LeftTeeArrow: $u,
    LeftTeeVector: Du,
    LeftTriangle: Cu,
    LeftTriangleBar: Ru,
    LeftTriangleEqual: Iu,
    LeftUpDownVector: Ou,
    LeftUpTeeVector: Fu,
    LeftUpVector: Uu,
    LeftUpVectorBar: _u,
    LeftVector: Bu,
    LeftVectorBar: ju,
    Leftarrow: Hu,
    Leftrightarrow: Vu,
    LessEqualGreater: Gu,
    LessFullEqual: zu,
    LessGreater: Mu,
    LessLess: Pu,
    LessSlantEqual: Zu,
    LessTilde: Wu,
    Lfr: Yu,
    Ll: Ju,
    Lleftarrow: Ku,
    Lmidot: Xu,
    LongLeftArrow: Qu,
    LongLeftRightArrow: rp,
    LongRightArrow: ap,
    Longleftarrow: ep,
    Longleftrightarrow: tp,
    Longrightarrow: np,
    Lopf: op,
    LowerLeftArrow: lp,
    LowerRightArrow: ip,
    Lscr: sp,
    Lsh: cp,
    Lstrok: vp,
    Lt: up,
    Map: '\u2905',
    Mcy: pp,
    MediumSpace: dp,
    Mellintrf: gp,
    Mfr: fp,
    MinusPlus: mp,
    Mopf: hp,
    Mscr: bp,
    Mu: yp,
    NJcy: wp,
    Nacute: xp,
    Ncaron: Sp,
    Ncedil: qp,
    Ncy: Ap,
    NegativeMediumSpace: Ep,
    NegativeThickSpace: kp,
    NegativeThinSpace: Lp,
    NegativeVeryThinSpace: Np,
    NestedGreaterGreater: Tp,
    NestedLessLess: $p,
    NewLine: Dp,
    Nfr: Cp,
    NoBreak: Rp,
    NonBreakingSpace: Ip,
    Nopf: Op,
    Not: Fp,
    NotCongruent: Up,
    NotCupCap: _p,
    NotDoubleVerticalBar: Bp,
    NotElement: jp,
    NotEqual: Hp,
    NotEqualTilde: Vp,
    NotExists: Gp,
    NotGreater: zp,
    NotGreaterEqual: Mp,
    NotGreaterFullEqual: Pp,
    NotGreaterGreater: Zp,
    NotGreaterLess: Wp,
    NotGreaterSlantEqual: Yp,
    NotGreaterTilde: Jp,
    NotHumpDownHump: Kp,
    NotHumpEqual: Xp,
    NotLeftTriangle: Qp,
    NotLeftTriangleBar: rd,
    NotLeftTriangleEqual: ad,
    NotLess: ed,
    NotLessEqual: td,
    NotLessGreater: nd,
    NotLessLess: od,
    NotLessSlantEqual: ld,
    NotLessTilde: id,
    NotNestedGreaterGreater: sd,
    NotNestedLessLess: cd,
    NotPrecedes: vd,
    NotPrecedesEqual: ud,
    NotPrecedesSlantEqual: pd,
    NotReverseElement: dd,
    NotRightTriangle: gd,
    NotRightTriangleBar: fd,
    NotRightTriangleEqual: md,
    NotSquareSubset: hd,
    NotSquareSubsetEqual: bd,
    NotSquareSuperset: yd,
    NotSquareSupersetEqual: wd,
    NotSubset: xd,
    NotSubsetEqual: Sd,
    NotSucceeds: qd,
    NotSucceedsEqual: Ad,
    NotSucceedsSlantEqual: Ed,
    NotSucceedsTilde: kd,
    NotSuperset: Ld,
    NotSupersetEqual: Nd,
    NotTilde: Td,
    NotTildeEqual: $d,
    NotTildeFullEqual: Dd,
    NotTildeTilde: Cd,
    NotVerticalBar: Rd,
    Nscr: Id,
    Ntild: Od,
    Ntilde: Fd,
    Nu: Ud,
    OElig: _d,
    Oacut: Bd,
    Oacute: jd,
    Ocir: Hd,
    Ocirc: Vd,
    Ocy: Gd,
    Odblac: zd,
    Ofr: Md,
    Ograv: Pd,
    Ograve: Zd,
    Omacr: Wd,
    Omega: Yd,
    Omicron: Jd,
    Oopf: Kd,
    OpenCurlyDoubleQuote: Xd,
    OpenCurlyQuote: Qd,
    Or: rg,
    Oscr: ag,
    Oslas: eg,
    Oslash: tg,
    Otild: ng,
    Otilde: og,
    Otimes: lg,
    Oum: ig,
    Ouml: sg,
    OverBar: cg,
    OverBrace: vg,
    OverBracket: ug,
    OverParenthesis: pg,
    PartialD: dg,
    Pcy: gg,
    Pfr: fg,
    Phi: mg,
    Pi: hg,
    PlusMinus: bg,
    Poincareplane: yg,
    Popf: wg,
    Pr: xg,
    Precedes: Sg,
    PrecedesEqual: qg,
    PrecedesSlantEqual: Ag,
    PrecedesTilde: Eg,
    Prime: kg,
    Product: Lg,
    Proportion: Ng,
    Proportional: Tg,
    Pscr: $g,
    Psi: Dg,
    QUO: Cg,
    QUOT: Rg,
    Qfr: Ig,
    Qopf: Og,
    Qscr: Fg,
    RBarr: Ug,
    RE: _g,
    REG: Bg,
    Racute: jg,
    Rang: Hg,
    Rarr: Vg,
    Rarrtl: Gg,
    Rcaron: zg,
    Rcedil: Mg,
    Rcy: Pg,
    Re: Zg,
    ReverseElement: Wg,
    ReverseEquilibrium: Yg,
    ReverseUpEquilibrium: Jg,
    Rfr: Kg,
    Rho: Xg,
    RightAngleBracket: Qg,
    RightArrow: rf,
    RightArrowBar: af,
    RightArrowLeftArrow: ef,
    RightCeiling: tf,
    RightDoubleBracket: nf,
    RightDownTeeVector: of,
    RightDownVector: lf,
    RightDownVectorBar: sf,
    RightFloor: cf,
    RightTee: vf,
    RightTeeArrow: uf,
    RightTeeVector: pf,
    RightTriangle: df,
    RightTriangleBar: gf,
    RightTriangleEqual: ff,
    RightUpDownVector: mf,
    RightUpTeeVector: hf,
    RightUpVector: bf,
    RightUpVectorBar: yf,
    RightVector: wf,
    RightVectorBar: xf,
    Rightarrow: Sf,
    Ropf: qf,
    RoundImplies: Af,
    Rrightarrow: Ef,
    Rscr: kf,
    Rsh: Lf,
    RuleDelayed: Nf,
    SHCHcy: Tf,
    SHcy: $f,
    SOFTcy: Df,
    Sacute: Cf,
    Sc: Rf,
    Scaron: If,
    Scedil: Of,
    Scirc: Ff,
    Scy: Uf,
    Sfr: _f,
    ShortDownArrow: Bf,
    ShortLeftArrow: jf,
    ShortRightArrow: Hf,
    ShortUpArrow: Vf,
    Sigma: Gf,
    SmallCircle: zf,
    Sopf: Mf,
    Sqrt: Pf,
    Square: Zf,
    SquareIntersection: Wf,
    SquareSubset: Yf,
    SquareSubsetEqual: Jf,
    SquareSuperset: Kf,
    SquareSupersetEqual: Xf,
    SquareUnion: Qf,
    Sscr: rm,
    Star: am,
    Sub: em,
    Subset: tm,
    SubsetEqual: nm,
    Succeeds: om,
    SucceedsEqual: lm,
    SucceedsSlantEqual: im,
    SucceedsTilde: sm,
    SuchThat: cm,
    Sum: vm,
    Sup: um,
    Superset: pm,
    SupersetEqual: dm,
    Supset: gm,
    THOR: fm,
    THORN: mm,
    TRADE: hm,
    TSHcy: bm,
    TScy: ym,
    Tab: wm,
    Tau: xm,
    Tcaron: Sm,
    Tcedil: qm,
    Tcy: Am,
    Tfr: Em,
    Therefore: km,
    Theta: Lm,
    ThickSpace: Nm,
    ThinSpace: Tm,
    Tilde: $m,
    TildeEqual: Dm,
    TildeFullEqual: Cm,
    TildeTilde: Rm,
    Topf: Im,
    TripleDot: Om,
    Tscr: Fm,
    Tstrok: Um,
    Uacut: _m,
    Uacute: Bm,
    Uarr: jm,
    Uarrocir: Hm,
    Ubrcy: Vm,
    Ubreve: Gm,
    Ucir: zm,
    Ucirc: Mm,
    Ucy: Pm,
    Udblac: Zm,
    Ufr: Wm,
    Ugrav: Ym,
    Ugrave: Jm,
    Umacr: Km,
    UnderBar: Xm,
    UnderBrace: Qm,
    UnderBracket: rh,
    UnderParenthesis: ah,
    Union: eh,
    UnionPlus: th,
    Uogon: nh,
    Uopf: oh,
    UpArrow: lh,
    UpArrowBar: ih,
    UpArrowDownArrow: sh,
    UpDownArrow: ch,
    UpEquilibrium: vh,
    UpTee: uh,
    UpTeeArrow: ph,
    Uparrow: dh,
    Updownarrow: gh,
    UpperLeftArrow: fh,
    UpperRightArrow: mh,
    Upsi: hh,
    Upsilon: bh,
    Uring: yh,
    Uscr: wh,
    Utilde: xh,
    Uum: Sh,
    Uuml: qh,
    VDash: Ah,
    Vbar: Eh,
    Vcy: kh,
    Vdash: Lh,
    Vdashl: Nh,
    Vee: Th,
    Verbar: $h,
    Vert: Dh,
    VerticalBar: Ch,
    VerticalLine: Rh,
    VerticalSeparator: Ih,
    VerticalTilde: Oh,
    VeryThinSpace: Fh,
    Vfr: Uh,
    Vopf: _h,
    Vscr: Bh,
    Vvdash: jh,
    Wcirc: Hh,
    Wedge: Vh,
    Wfr: Gh,
    Wopf: zh,
    Wscr: Mh,
    Xfr: Ph,
    Xi: Zh,
    Xopf: Wh,
    Xscr: Yh,
    YAcy: Jh,
    YIcy: Kh,
    YUcy: Xh,
    Yacut: Qh,
    Yacute: rb,
    Ycirc: ab,
    Ycy: eb,
    Yfr: tb,
    Yopf: nb,
    Yscr: ob,
    Yuml: lb,
    ZHcy: ib,
    Zacute: sb,
    Zcaron: cb,
    Zcy: vb,
    Zdot: ub,
    ZeroWidthSpace: pb,
    Zeta: db,
    Zfr: gb,
    Zopf: fb,
    Zscr: mb,
    aacut: hb,
    aacute: bb,
    abreve: yb,
    ac: wb,
    acE: xb,
    acd: Sb,
    acir: qb,
    acirc: Ab,
    acut: Eb,
    acute: kb,
    acy: Lb,
    aeli: Nb,
    aelig: Tb,
    af: $b,
    afr: Db,
    agrav: Cb,
    agrave: Rb,
    alefsym: Ib,
    aleph: Ob,
    alpha: Fb,
    amacr: Ub,
    amalg: _b,
    am: Bb,
    amp: jb,
    and: Hb,
    andand: Vb,
    andd: Gb,
    andslope: zb,
    andv: Mb,
    ang: Pb,
    ange: Zb,
    angle: Wb,
    angmsd: Yb,
    angmsdaa: Jb,
    angmsdab: Kb,
    angmsdac: Xb,
    angmsdad: Qb,
    angmsdae: ry,
    angmsdaf: ay,
    angmsdag: ey,
    angmsdah: ty,
    angrt: ny,
    angrtvb: oy,
    angrtvbd: ly,
    angsph: iy,
    angst: sy,
    angzarr: cy,
    aogon: vy,
    aopf: uy,
    ap: py,
    apE: dy,
    apacir: gy,
    ape: fy,
    apid: my,
    apos: hy,
    approx: by,
    approxeq: yy,
    arin: wy,
    aring: xy,
    ascr: Sy,
    ast: qy,
    asymp: Ay,
    asympeq: Ey,
    atild: ky,
    atilde: Ly,
    aum: Ny,
    auml: Ty,
    awconint: $y,
    awint: Dy,
    bNot: Cy,
    backcong: Ry,
    backepsilon: Iy,
    backprime: Oy,
    backsim: Fy,
    backsimeq: Uy,
    barvee: _y,
    barwed: By,
    barwedge: jy,
    bbrk: Hy,
    bbrktbrk: Vy,
    bcong: Gy,
    bcy: zy,
    bdquo: My,
    becaus: Py,
    because: Zy,
    bemptyv: Wy,
    bepsi: Yy,
    bernou: Jy,
    beta: Ky,
    beth: Xy,
    between: Qy,
    bfr: rw,
    bigcap: aw,
    bigcirc: ew,
    bigcup: tw,
    bigodot: nw,
    bigoplus: ow,
    bigotimes: lw,
    bigsqcup: iw,
    bigstar: sw,
    bigtriangledown: cw,
    bigtriangleup: vw,
    biguplus: uw,
    bigvee: pw,
    bigwedge: dw,
    bkarow: gw,
    blacklozenge: fw,
    blacksquare: mw,
    blacktriangle: hw,
    blacktriangledown: bw,
    blacktriangleleft: yw,
    blacktriangleright: ww,
    blank: xw,
    blk12: Sw,
    blk14: qw,
    blk34: Aw,
    block: Ew,
    bne: kw,
    bnequiv: Lw,
    bnot: Nw,
    bopf: Tw,
    bot: $w,
    bottom: Dw,
    bowtie: Cw,
    boxDL: Rw,
    boxDR: Iw,
    boxDl: Ow,
    boxDr: Fw,
    boxH: Uw,
    boxHD: _w,
    boxHU: Bw,
    boxHd: jw,
    boxHu: Hw,
    boxUL: Vw,
    boxUR: Gw,
    boxUl: zw,
    boxUr: Mw,
    boxV: Pw,
    boxVH: Zw,
    boxVL: Ww,
    boxVR: Yw,
    boxVh: Jw,
    boxVl: Kw,
    boxVr: Xw,
    boxbox: Qw,
    boxdL: rx,
    boxdR: ax,
    boxdl: ex,
    boxdr: tx,
    boxh: nx,
    boxhD: ox,
    boxhU: lx,
    boxhd: ix,
    boxhu: sx,
    boxminus: cx,
    boxplus: vx,
    boxtimes: ux,
    boxuL: px,
    boxuR: dx,
    boxul: gx,
    boxur: fx,
    boxv: mx,
    boxvH: hx,
    boxvL: bx,
    boxvR: yx,
    boxvh: wx,
    boxvl: xx,
    boxvr: Sx,
    bprime: qx,
    breve: Ax,
    brvba: Ex,
    brvbar: kx,
    bscr: Lx,
    bsemi: Nx,
    bsim: Tx,
    bsime: $x,
    bsol: Dx,
    bsolb: Cx,
    bsolhsub: Rx,
    bull: Ix,
    bullet: Ox,
    bump: Fx,
    bumpE: Ux,
    bumpe: _x,
    bumpeq: Bx,
    cacute: jx,
    cap: Hx,
    capand: Vx,
    capbrcup: Gx,
    capcap: zx,
    capcup: Mx,
    capdot: Px,
    caps: Zx,
    caret: Wx,
    caron: Yx,
    ccaps: Jx,
    ccaron: Kx,
    ccedi: Xx,
    ccedil: Qx,
    ccirc: rS,
    ccups: aS,
    ccupssm: eS,
    cdot: tS,
    cedi: nS,
    cedil: oS,
    cemptyv: lS,
    cen: iS,
    cent: sS,
    centerdot: cS,
    cfr: vS,
    chcy: uS,
    check: pS,
    checkmark: dS,
    chi: gS,
    cir: fS,
    cirE: mS,
    circ: hS,
    circeq: bS,
    circlearrowleft: yS,
    circlearrowright: wS,
    circledR: xS,
    circledS: SS,
    circledast: qS,
    circledcirc: AS,
    circleddash: ES,
    cire: kS,
    cirfnint: LS,
    cirmid: NS,
    cirscir: TS,
    clubs: $S,
    clubsuit: DS,
    colon: CS,
    colone: RS,
    coloneq: IS,
    comma: OS,
    commat: FS,
    comp: US,
    compfn: _S,
    complement: BS,
    complexes: jS,
    cong: HS,
    congdot: VS,
    conint: GS,
    copf: zS,
    coprod: MS,
    cop: PS,
    copy: ZS,
    copysr: WS,
    crarr: YS,
    cross: JS,
    cscr: KS,
    csub: XS,
    csube: QS,
    csup: rq,
    csupe: aq,
    ctdot: eq,
    cudarrl: tq,
    cudarrr: nq,
    cuepr: oq,
    cuesc: lq,
    cularr: iq,
    cularrp: sq,
    cup: cq,
    cupbrcap: vq,
    cupcap: uq,
    cupcup: pq,
    cupdot: dq,
    cupor: gq,
    cups: fq,
    curarr: mq,
    curarrm: hq,
    curlyeqprec: bq,
    curlyeqsucc: yq,
    curlyvee: wq,
    curlywedge: xq,
    curre: Sq,
    curren: qq,
    curvearrowleft: Aq,
    curvearrowright: Eq,
    cuvee: kq,
    cuwed: Lq,
    cwconint: Nq,
    cwint: Tq,
    cylcty: $q,
    dArr: Dq,
    dHar: Cq,
    dagger: Rq,
    daleth: Iq,
    darr: Oq,
    dash: Fq,
    dashv: Uq,
    dbkarow: _q,
    dblac: Bq,
    dcaron: jq,
    dcy: Hq,
    dd: Vq,
    ddagger: Gq,
    ddarr: zq,
    ddotseq: Mq,
    de: Pq,
    deg: Zq,
    delta: Wq,
    demptyv: Yq,
    dfisht: Jq,
    dfr: Kq,
    dharl: Xq,
    dharr: Qq,
    diam: rA,
    diamond: aA,
    diamondsuit: eA,
    diams: tA,
    die: nA,
    digamma: oA,
    disin: lA,
    div: iA,
    divid: sA,
    divide: cA,
    divideontimes: vA,
    divonx: uA,
    djcy: pA,
    dlcorn: dA,
    dlcrop: gA,
    dollar: fA,
    dopf: mA,
    dot: hA,
    doteq: bA,
    doteqdot: yA,
    dotminus: wA,
    dotplus: xA,
    dotsquare: SA,
    doublebarwedge: qA,
    downarrow: AA,
    downdownarrows: EA,
    downharpoonleft: kA,
    downharpoonright: LA,
    drbkarow: NA,
    drcorn: TA,
    drcrop: $A,
    dscr: DA,
    dscy: CA,
    dsol: RA,
    dstrok: IA,
    dtdot: OA,
    dtri: FA,
    dtrif: UA,
    duarr: _A,
    duhar: BA,
    dwangle: jA,
    dzcy: HA,
    dzigrarr: VA,
    eDDot: GA,
    eDot: zA,
    eacut: MA,
    eacute: PA,
    easter: ZA,
    ecaron: WA,
    ecir: YA,
    ecirc: JA,
    ecolon: KA,
    ecy: XA,
    edot: QA,
    ee: rE,
    efDot: aE,
    efr: eE,
    eg: tE,
    egrav: nE,
    egrave: oE,
    egs: lE,
    egsdot: iE,
    el: sE,
    elinters: cE,
    ell: vE,
    els: uE,
    elsdot: pE,
    emacr: dE,
    empty: gE,
    emptyset: fE,
    emptyv: mE,
    emsp13: hE,
    emsp14: bE,
    emsp: yE,
    eng: wE,
    ensp: xE,
    eogon: SE,
    eopf: qE,
    epar: AE,
    eparsl: EE,
    eplus: kE,
    epsi: LE,
    epsilon: NE,
    epsiv: TE,
    eqcirc: $E,
    eqcolon: DE,
    eqsim: CE,
    eqslantgtr: RE,
    eqslantless: IE,
    equals: OE,
    equest: FE,
    equiv: UE,
    equivDD: _E,
    eqvparsl: BE,
    erDot: jE,
    erarr: HE,
    escr: VE,
    esdot: GE,
    esim: zE,
    eta: ME,
    et: PE,
    eth: ZE,
    eum: WE,
    euml: YE,
    euro: JE,
    excl: KE,
    exist: XE,
    expectation: QE,
    exponentiale: rk,
    fallingdotseq: ak,
    fcy: ek,
    female: tk,
    ffilig: nk,
    fflig: ok,
    ffllig: lk,
    ffr: ik,
    filig: sk,
    fjlig: ck,
    flat: vk,
    fllig: uk,
    fltns: pk,
    fnof: dk,
    fopf: gk,
    forall: fk,
    fork: mk,
    forkv: hk,
    fpartint: bk,
    frac1: yk,
    frac12: wk,
    frac13: xk,
    frac14: Sk,
    frac15: qk,
    frac16: Ak,
    frac18: Ek,
    frac23: kk,
    frac25: Lk,
    frac3: Nk,
    frac34: Tk,
    frac35: $k,
    frac38: Dk,
    frac45: Ck,
    frac56: Rk,
    frac58: Ik,
    frac78: Ok,
    frasl: Fk,
    frown: Uk,
    fscr: _k,
    gE: Bk,
    gEl: jk,
    gacute: Hk,
    gamma: Vk,
    gammad: Gk,
    gap: zk,
    gbreve: Mk,
    gcirc: Pk,
    gcy: Zk,
    gdot: Wk,
    ge: Yk,
    gel: Jk,
    geq: Kk,
    geqq: Xk,
    geqslant: Qk,
    ges: r1,
    gescc: a1,
    gesdot: e1,
    gesdoto: t1,
    gesdotol: n1,
    gesl: o1,
    gesles: l1,
    gfr: i1,
    gg: s1,
    ggg: c1,
    gimel: v1,
    gjcy: u1,
    gl: p1,
    glE: d1,
    gla: g1,
    glj: f1,
    gnE: m1,
    gnap: h1,
    gnapprox: b1,
    gne: y1,
    gneq: w1,
    gneqq: x1,
    gnsim: S1,
    gopf: q1,
    grave: A1,
    gscr: E1,
    gsim: k1,
    gsime: L1,
    gsiml: N1,
    g: T1,
    gt: $1,
    gtcc: D1,
    gtcir: C1,
    gtdot: R1,
    gtlPar: I1,
    gtquest: O1,
    gtrapprox: F1,
    gtrarr: U1,
    gtrdot: _1,
    gtreqless: B1,
    gtreqqless: j1,
    gtrless: H1,
    gtrsim: V1,
    gvertneqq: G1,
    gvnE: z1,
    hArr: M1,
    hairsp: P1,
    half: Z1,
    hamilt: W1,
    hardcy: Y1,
    harr: J1,
    harrcir: K1,
    harrw: X1,
    hbar: Q1,
    hcirc: rL,
    hearts: aL,
    heartsuit: eL,
    hellip: tL,
    hercon: nL,
    hfr: oL,
    hksearow: lL,
    hkswarow: iL,
    hoarr: sL,
    homtht: cL,
    hookleftarrow: vL,
    hookrightarrow: uL,
    hopf: pL,
    horbar: dL,
    hscr: gL,
    hslash: fL,
    hstrok: mL,
    hybull: hL,
    hyphen: bL,
    iacut: yL,
    iacute: wL,
    ic: xL,
    icir: SL,
    icirc: qL,
    icy: AL,
    iecy: EL,
    iexc: kL,
    iexcl: LL,
    iff: NL,
    ifr: TL,
    igrav: $L,
    igrave: DL,
    ii: CL,
    iiiint: RL,
    iiint: IL,
    iinfin: OL,
    iiota: FL,
    ijlig: UL,
    imacr: _L,
    image: BL,
    imagline: jL,
    imagpart: HL,
    imath: VL,
    imof: GL,
    imped: zL,
    in: '\u2208',
    incare: ML,
    infin: PL,
    infintie: ZL,
    inodot: WL,
    int: YL,
    intcal: JL,
    integers: KL,
    intercal: XL,
    intlarhk: QL,
    intprod: rN,
    iocy: aN,
    iogon: eN,
    iopf: tN,
    iota: nN,
    iprod: oN,
    iques: lN,
    iquest: iN,
    iscr: sN,
    isin: cN,
    isinE: vN,
    isindot: uN,
    isins: pN,
    isinsv: dN,
    isinv: gN,
    it: fN,
    itilde: mN,
    iukcy: hN,
    ium: bN,
    iuml: yN,
    jcirc: wN,
    jcy: xN,
    jfr: SN,
    jmath: qN,
    jopf: AN,
    jscr: EN,
    jsercy: kN,
    jukcy: LN,
    kappa: NN,
    kappav: TN,
    kcedil: $N,
    kcy: DN,
    kfr: CN,
    kgreen: RN,
    khcy: IN,
    kjcy: ON,
    kopf: FN,
    kscr: UN,
    lAarr: _N,
    lArr: BN,
    lAtail: jN,
    lBarr: HN,
    lE: VN,
    lEg: GN,
    lHar: zN,
    lacute: MN,
    laemptyv: PN,
    lagran: ZN,
    lambda: WN,
    lang: YN,
    langd: JN,
    langle: KN,
    lap: XN,
    laqu: QN,
    laquo: rT,
    larr: aT,
    larrb: eT,
    larrbfs: tT,
    larrfs: nT,
    larrhk: oT,
    larrlp: lT,
    larrpl: iT,
    larrsim: sT,
    larrtl: cT,
    lat: vT,
    latail: uT,
    late: pT,
    lates: dT,
    lbarr: gT,
    lbbrk: fT,
    lbrace: mT,
    lbrack: hT,
    lbrke: bT,
    lbrksld: yT,
    lbrkslu: wT,
    lcaron: xT,
    lcedil: ST,
    lceil: qT,
    lcub: AT,
    lcy: ET,
    ldca: kT,
    ldquo: LT,
    ldquor: NT,
    ldrdhar: TT,
    ldrushar: $T,
    ldsh: DT,
    le: CT,
    leftarrow: RT,
    leftarrowtail: IT,
    leftharpoondown: OT,
    leftharpoonup: FT,
    leftleftarrows: UT,
    leftrightarrow: _T,
    leftrightarrows: BT,
    leftrightharpoons: jT,
    leftrightsquigarrow: HT,
    leftthreetimes: VT,
    leg: GT,
    leq: zT,
    leqq: MT,
    leqslant: PT,
    les: ZT,
    lescc: WT,
    lesdot: YT,
    lesdoto: JT,
    lesdotor: KT,
    lesg: XT,
    lesges: QT,
    lessapprox: r$,
    lessdot: a$,
    lesseqgtr: e$,
    lesseqqgtr: t$,
    lessgtr: n$,
    lesssim: o$,
    lfisht: l$,
    lfloor: i$,
    lfr: s$,
    lg: c$,
    lgE: v$,
    lhard: u$,
    lharu: p$,
    lharul: d$,
    lhblk: g$,
    ljcy: f$,
    ll: m$,
    llarr: h$,
    llcorner: b$,
    llhard: y$,
    lltri: w$,
    lmidot: x$,
    lmoust: S$,
    lmoustache: q$,
    lnE: A$,
    lnap: E$,
    lnapprox: k$,
    lne: L$,
    lneq: N$,
    lneqq: T$,
    lnsim: $$,
    loang: D$,
    loarr: C$,
    lobrk: R$,
    longleftarrow: I$,
    longleftrightarrow: O$,
    longmapsto: F$,
    longrightarrow: U$,
    looparrowleft: _$,
    looparrowright: B$,
    lopar: j$,
    lopf: H$,
    loplus: V$,
    lotimes: G$,
    lowast: z$,
    lowbar: M$,
    loz: P$,
    lozenge: Z$,
    lozf: W$,
    lpar: Y$,
    lparlt: J$,
    lrarr: K$,
    lrcorner: X$,
    lrhar: Q$,
    lrhard: rD,
    lrm: aD,
    lrtri: eD,
    lsaquo: tD,
    lscr: nD,
    lsh: oD,
    lsim: lD,
    lsime: iD,
    lsimg: sD,
    lsqb: cD,
    lsquo: vD,
    lsquor: uD,
    lstrok: pD,
    l: dD,
    lt: gD,
    ltcc: fD,
    ltcir: mD,
    ltdot: hD,
    lthree: bD,
    ltimes: yD,
    ltlarr: wD,
    ltquest: xD,
    ltrPar: SD,
    ltri: qD,
    ltrie: AD,
    ltrif: ED,
    lurdshar: kD,
    luruhar: LD,
    lvertneqq: ND,
    lvnE: TD,
    mDDot: $D,
    mac: DD,
    macr: CD,
    male: RD,
    malt: ID,
    maltese: OD,
    map: FD,
    mapsto: UD,
    mapstodown: _D,
    mapstoleft: BD,
    mapstoup: jD,
    marker: HD,
    mcomma: VD,
    mcy: GD,
    mdash: zD,
    measuredangle: MD,
    mfr: PD,
    mho: ZD,
    micr: WD,
    micro: YD,
    mid: JD,
    midast: KD,
    midcir: XD,
    middo: QD,
    middot: r0,
    minus: a0,
    minusb: e0,
    minusd: t0,
    minusdu: n0,
    mlcp: o0,
    mldr: l0,
    mnplus: i0,
    models: s0,
    mopf: c0,
    mp: v0,
    mscr: u0,
    mstpos: p0,
    mu: d0,
    multimap: g0,
    mumap: f0,
    nGg: m0,
    nGt: h0,
    nGtv: b0,
    nLeftarrow: y0,
    nLeftrightarrow: w0,
    nLl: x0,
    nLt: S0,
    nLtv: q0,
    nRightarrow: A0,
    nVDash: E0,
    nVdash: k0,
    nabla: L0,
    nacute: N0,
    nang: T0,
    nap: $0,
    napE: D0,
    napid: C0,
    napos: R0,
    napprox: I0,
    natur: O0,
    natural: F0,
    naturals: U0,
    nbs: _0,
    nbsp: B0,
    nbump: j0,
    nbumpe: H0,
    ncap: V0,
    ncaron: G0,
    ncedil: z0,
    ncong: M0,
    ncongdot: P0,
    ncup: Z0,
    ncy: W0,
    ndash: Y0,
    ne: J0,
    neArr: K0,
    nearhk: X0,
    nearr: Q0,
    nearrow: rC,
    nedot: aC,
    nequiv: eC,
    nesear: tC,
    nesim: nC,
    nexist: oC,
    nexists: lC,
    nfr: iC,
    ngE: sC,
    nge: cC,
    ngeq: vC,
    ngeqq: uC,
    ngeqslant: pC,
    nges: dC,
    ngsim: gC,
    ngt: fC,
    ngtr: mC,
    nhArr: hC,
    nharr: bC,
    nhpar: yC,
    ni: wC,
    nis: xC,
    nisd: SC,
    niv: qC,
    njcy: AC,
    nlArr: EC,
    nlE: kC,
    nlarr: LC,
    nldr: NC,
    nle: TC,
    nleftarrow: $C,
    nleftrightarrow: DC,
    nleq: CC,
    nleqq: RC,
    nleqslant: IC,
    nles: OC,
    nless: FC,
    nlsim: UC,
    nlt: _C,
    nltri: BC,
    nltrie: jC,
    nmid: HC,
    nopf: VC,
    no: GC,
    not: zC,
    notin: MC,
    notinE: PC,
    notindot: ZC,
    notinva: WC,
    notinvb: YC,
    notinvc: JC,
    notni: KC,
    notniva: XC,
    notnivb: QC,
    notnivc: rR,
    npar: aR,
    nparallel: eR,
    nparsl: tR,
    npart: nR,
    npolint: oR,
    npr: lR,
    nprcue: iR,
    npre: sR,
    nprec: cR,
    npreceq: vR,
    nrArr: uR,
    nrarr: pR,
    nrarrc: dR,
    nrarrw: gR,
    nrightarrow: fR,
    nrtri: mR,
    nrtrie: hR,
    nsc: bR,
    nsccue: yR,
    nsce: wR,
    nscr: xR,
    nshortmid: SR,
    nshortparallel: qR,
    nsim: AR,
    nsime: ER,
    nsimeq: kR,
    nsmid: LR,
    nspar: NR,
    nsqsube: TR,
    nsqsupe: $R,
    nsub: DR,
    nsubE: CR,
    nsube: RR,
    nsubset: IR,
    nsubseteq: OR,
    nsubseteqq: FR,
    nsucc: UR,
    nsucceq: _R,
    nsup: BR,
    nsupE: jR,
    nsupe: HR,
    nsupset: VR,
    nsupseteq: GR,
    nsupseteqq: zR,
    ntgl: MR,
    ntild: PR,
    ntilde: ZR,
    ntlg: WR,
    ntriangleleft: YR,
    ntrianglelefteq: JR,
    ntriangleright: KR,
    ntrianglerighteq: XR,
    nu: QR,
    num: rI,
    numero: aI,
    numsp: eI,
    nvDash: tI,
    nvHarr: nI,
    nvap: oI,
    nvdash: lI,
    nvge: iI,
    nvgt: sI,
    nvinfin: cI,
    nvlArr: vI,
    nvle: uI,
    nvlt: pI,
    nvltrie: dI,
    nvrArr: gI,
    nvrtrie: fI,
    nvsim: mI,
    nwArr: hI,
    nwarhk: bI,
    nwarr: yI,
    nwarrow: wI,
    nwnear: xI,
    oS: SI,
    oacut: qI,
    oacute: AI,
    oast: EI,
    ocir: kI,
    ocirc: LI,
    ocy: NI,
    odash: TI,
    odblac: $I,
    odiv: DI,
    odot: CI,
    odsold: RI,
    oelig: II,
    ofcir: OI,
    ofr: FI,
    ogon: UI,
    ograv: _I,
    ograve: BI,
    ogt: jI,
    ohbar: HI,
    ohm: VI,
    oint: GI,
    olarr: zI,
    olcir: MI,
    olcross: PI,
    oline: ZI,
    olt: WI,
    omacr: YI,
    omega: JI,
    omicron: KI,
    omid: XI,
    ominus: QI,
    oopf: rO,
    opar: aO,
    operp: eO,
    oplus: tO,
    or: nO,
    orarr: oO,
    ord: lO,
    order: iO,
    orderof: sO,
    ordf: cO,
    ordm: vO,
    origof: uO,
    oror: pO,
    orslope: dO,
    orv: gO,
    oscr: fO,
    oslas: mO,
    oslash: hO,
    osol: bO,
    otild: yO,
    otilde: wO,
    otimes: xO,
    otimesas: SO,
    oum: qO,
    ouml: AO,
    ovbar: EO,
    par: kO,
    para: LO,
    parallel: NO,
    parsim: TO,
    parsl: $O,
    part: DO,
    pcy: CO,
    percnt: RO,
    period: IO,
    permil: OO,
    perp: FO,
    pertenk: UO,
    pfr: _O,
    phi: BO,
    phiv: jO,
    phmmat: HO,
    phone: VO,
    pi: GO,
    pitchfork: zO,
    piv: MO,
    planck: PO,
    planckh: ZO,
    plankv: WO,
    plus: YO,
    plusacir: JO,
    plusb: KO,
    pluscir: XO,
    plusdo: QO,
    plusdu: rF,
    pluse: aF,
    plusm: eF,
    plusmn: tF,
    plussim: nF,
    plustwo: oF,
    pm: lF,
    pointint: iF,
    popf: sF,
    poun: cF,
    pound: vF,
    pr: uF,
    prE: pF,
    prap: dF,
    prcue: gF,
    pre: fF,
    prec: mF,
    precapprox: hF,
    preccurlyeq: bF,
    preceq: yF,
    precnapprox: wF,
    precneqq: xF,
    precnsim: SF,
    precsim: qF,
    prime: AF,
    primes: EF,
    prnE: kF,
    prnap: LF,
    prnsim: NF,
    prod: TF,
    profalar: $F,
    profline: DF,
    profsurf: CF,
    prop: RF,
    propto: IF,
    prsim: OF,
    prurel: FF,
    pscr: UF,
    psi: _F,
    puncsp: BF,
    qfr: jF,
    qint: HF,
    qopf: VF,
    qprime: GF,
    qscr: zF,
    quaternions: MF,
    quatint: PF,
    quest: ZF,
    questeq: WF,
    quo: YF,
    quot: JF,
    rAarr: KF,
    rArr: XF,
    rAtail: QF,
    rBarr: rU,
    rHar: aU,
    race: eU,
    racute: tU,
    radic: nU,
    raemptyv: oU,
    rang: lU,
    rangd: iU,
    range: sU,
    rangle: cU,
    raqu: vU,
    raquo: uU,
    rarr: pU,
    rarrap: dU,
    rarrb: gU,
    rarrbfs: fU,
    rarrc: mU,
    rarrfs: hU,
    rarrhk: bU,
    rarrlp: yU,
    rarrpl: wU,
    rarrsim: xU,
    rarrtl: SU,
    rarrw: qU,
    ratail: AU,
    ratio: EU,
    rationals: kU,
    rbarr: LU,
    rbbrk: NU,
    rbrace: TU,
    rbrack: $U,
    rbrke: DU,
    rbrksld: CU,
    rbrkslu: RU,
    rcaron: IU,
    rcedil: OU,
    rceil: FU,
    rcub: UU,
    rcy: _U,
    rdca: BU,
    rdldhar: jU,
    rdquo: HU,
    rdquor: VU,
    rdsh: GU,
    real: zU,
    realine: MU,
    realpart: PU,
    reals: ZU,
    rect: WU,
    re: YU,
    reg: JU,
    rfisht: KU,
    rfloor: XU,
    rfr: QU,
    rhard: r_,
    rharu: a_,
    rharul: e_,
    rho: t_,
    rhov: n_,
    rightarrow: o_,
    rightarrowtail: l_,
    rightharpoondown: i_,
    rightharpoonup: s_,
    rightleftarrows: c_,
    rightleftharpoons: v_,
    rightrightarrows: u_,
    rightsquigarrow: p_,
    rightthreetimes: d_,
    ring: g_,
    risingdotseq: f_,
    rlarr: m_,
    rlhar: h_,
    rlm: b_,
    rmoust: y_,
    rmoustache: w_,
    rnmid: x_,
    roang: S_,
    roarr: q_,
    robrk: A_,
    ropar: E_,
    ropf: k_,
    roplus: L_,
    rotimes: N_,
    rpar: T_,
    rpargt: $_,
    rppolint: D_,
    rrarr: C_,
    rsaquo: R_,
    rscr: I_,
    rsh: O_,
    rsqb: F_,
    rsquo: U_,
    rsquor: __,
    rthree: B_,
    rtimes: j_,
    rtri: H_,
    rtrie: V_,
    rtrif: G_,
    rtriltri: z_,
    ruluhar: M_,
    rx: P_,
    sacute: Z_,
    sbquo: W_,
    sc: Y_,
    scE: J_,
    scap: K_,
    scaron: X_,
    sccue: Q_,
    sce: rB,
    scedil: aB,
    scirc: eB,
    scnE: tB,
    scnap: nB,
    scnsim: oB,
    scpolint: lB,
    scsim: iB,
    scy: sB,
    sdot: cB,
    sdotb: vB,
    sdote: uB,
    seArr: pB,
    searhk: dB,
    searr: gB,
    searrow: fB,
    sec: mB,
    sect: hB,
    semi: bB,
    seswar: yB,
    setminus: wB,
    setmn: xB,
    sext: SB,
    sfr: qB,
    sfrown: AB,
    sharp: EB,
    shchcy: kB,
    shcy: LB,
    shortmid: NB,
    shortparallel: TB,
    sh: $B,
    shy: DB,
    sigma: CB,
    sigmaf: RB,
    sigmav: IB,
    sim: OB,
    simdot: FB,
    sime: UB,
    simeq: _B,
    simg: BB,
    simgE: jB,
    siml: HB,
    simlE: VB,
    simne: GB,
    simplus: zB,
    simrarr: MB,
    slarr: PB,
    smallsetminus: ZB,
    smashp: WB,
    smeparsl: YB,
    smid: JB,
    smile: KB,
    smt: XB,
    smte: QB,
    smtes: rj,
    softcy: aj,
    sol: ej,
    solb: tj,
    solbar: nj,
    sopf: oj,
    spades: lj,
    spadesuit: ij,
    spar: sj,
    sqcap: cj,
    sqcaps: vj,
    sqcup: uj,
    sqcups: pj,
    sqsub: dj,
    sqsube: gj,
    sqsubset: fj,
    sqsubseteq: mj,
    sqsup: hj,
    sqsupe: bj,
    sqsupset: yj,
    sqsupseteq: wj,
    squ: xj,
    square: Sj,
    squarf: qj,
    squf: Aj,
    srarr: Ej,
    sscr: kj,
    ssetmn: Lj,
    ssmile: Nj,
    sstarf: Tj,
    star: $j,
    starf: Dj,
    straightepsilon: Cj,
    straightphi: Rj,
    strns: Ij,
    sub: Oj,
    subE: Fj,
    subdot: Uj,
    sube: _j,
    subedot: Bj,
    submult: jj,
    subnE: Hj,
    subne: Vj,
    subplus: Gj,
    subrarr: zj,
    subset: Mj,
    subseteq: Pj,
    subseteqq: Zj,
    subsetneq: Wj,
    subsetneqq: Yj,
    subsim: Jj,
    subsub: Kj,
    subsup: Xj,
    succ: Qj,
    succapprox: r2,
    succcurlyeq: a2,
    succeq: e2,
    succnapprox: t2,
    succneqq: n2,
    succnsim: o2,
    succsim: l2,
    sum: i2,
    sung: s2,
    sup: c2,
    sup1: v2,
    sup2: u2,
    sup3: p2,
    supE: d2,
    supdot: g2,
    supdsub: f2,
    supe: m2,
    supedot: h2,
    suphsol: b2,
    suphsub: y2,
    suplarr: w2,
    supmult: x2,
    supnE: S2,
    supne: q2,
    supplus: A2,
    supset: E2,
    supseteq: k2,
    supseteqq: L2,
    supsetneq: N2,
    supsetneqq: T2,
    supsim: $2,
    supsub: D2,
    supsup: C2,
    swArr: R2,
    swarhk: I2,
    swarr: O2,
    swarrow: F2,
    swnwar: U2,
    szli: _2,
    szlig: B2,
    target: j2,
    tau: H2,
    tbrk: V2,
    tcaron: G2,
    tcedil: z2,
    tcy: M2,
    tdot: P2,
    telrec: Z2,
    tfr: W2,
    there4: Y2,
    therefore: J2,
    theta: K2,
    thetasym: X2,
    thetav: Q2,
    thickapprox: rH,
    thicksim: aH,
    thinsp: eH,
    thkap: tH,
    thksim: nH,
    thor: oH,
    thorn: lH,
    tilde: iH,
    time: sH,
    times: cH,
    timesb: vH,
    timesbar: uH,
    timesd: pH,
    tint: dH,
    toea: gH,
    top: fH,
    topbot: mH,
    topcir: hH,
    topf: bH,
    topfork: yH,
    tosa: wH,
    tprime: xH,
    trade: SH,
    triangle: qH,
    triangledown: AH,
    triangleleft: EH,
    trianglelefteq: kH,
    triangleq: LH,
    triangleright: NH,
    trianglerighteq: TH,
    tridot: $H,
    trie: DH,
    triminus: CH,
    triplus: RH,
    trisb: IH,
    tritime: OH,
    trpezium: FH,
    tscr: UH,
    tscy: _H,
    tshcy: BH,
    tstrok: jH,
    twixt: HH,
    twoheadleftarrow: VH,
    twoheadrightarrow: GH,
    uArr: zH,
    uHar: MH,
    uacut: PH,
    uacute: ZH,
    uarr: WH,
    ubrcy: YH,
    ubreve: JH,
    ucir: KH,
    ucirc: XH,
    ucy: QH,
    udarr: rV,
    udblac: aV,
    udhar: eV,
    ufisht: tV,
    ufr: nV,
    ugrav: oV,
    ugrave: lV,
    uharl: iV,
    uharr: sV,
    uhblk: cV,
    ulcorn: vV,
    ulcorner: uV,
    ulcrop: pV,
    ultri: dV,
    umacr: gV,
    um: fV,
    uml: mV,
    uogon: hV,
    uopf: bV,
    uparrow: yV,
    updownarrow: wV,
    upharpoonleft: xV,
    upharpoonright: SV,
    uplus: qV,
    upsi: AV,
    upsih: EV,
    upsilon: kV,
    upuparrows: LV,
    urcorn: NV,
    urcorner: TV,
    urcrop: $V,
    uring: DV,
    urtri: CV,
    uscr: RV,
    utdot: IV,
    utilde: OV,
    utri: FV,
    utrif: UV,
    uuarr: _V,
    uum: BV,
    uuml: jV,
    uwangle: HV,
    vArr: VV,
    vBar: GV,
    vBarv: zV,
    vDash: MV,
    vangrt: PV,
    varepsilon: ZV,
    varkappa: WV,
    varnothing: YV,
    varphi: JV,
    varpi: KV,
    varpropto: XV,
    varr: QV,
    varrho: rG,
    varsigma: aG,
    varsubsetneq: eG,
    varsubsetneqq: tG,
    varsupsetneq: nG,
    varsupsetneqq: oG,
    vartheta: lG,
    vartriangleleft: iG,
    vartriangleright: sG,
    vcy: cG,
    vdash: vG,
    vee: uG,
    veebar: pG,
    veeeq: dG,
    vellip: gG,
    verbar: fG,
    vert: mG,
    vfr: hG,
    vltri: bG,
    vnsub: yG,
    vnsup: wG,
    vopf: xG,
    vprop: SG,
    vrtri: qG,
    vscr: AG,
    vsubnE: EG,
    vsubne: kG,
    vsupnE: LG,
    vsupne: NG,
    vzigzag: TG,
    wcirc: $G,
    wedbar: DG,
    wedge: CG,
    wedgeq: RG,
    weierp: IG,
    wfr: OG,
    wopf: FG,
    wp: UG,
    wr: _G,
    wreath: BG,
    wscr: jG,
    xcap: HG,
    xcirc: VG,
    xcup: GG,
    xdtri: zG,
    xfr: MG,
    xhArr: PG,
    xharr: ZG,
    xi: WG,
    xlArr: YG,
    xlarr: JG,
    xmap: KG,
    xnis: XG,
    xodot: QG,
    xopf: rz,
    xoplus: az,
    xotime: ez,
    xrArr: tz,
    xrarr: nz,
    xscr: oz,
    xsqcup: lz,
    xuplus: iz,
    xutri: sz,
    xvee: cz,
    xwedge: vz,
    yacut: uz,
    yacute: pz,
    yacy: dz,
    ycirc: gz,
    ycy: fz,
    ye: mz,
    yen: hz,
    yfr: bz,
    yicy: yz,
    yopf: wz,
    yscr: xz,
    yucy: Sz,
    yum: qz,
    yuml: Az,
    zacute: Ez,
    zcaron: kz,
    zcy: Lz,
    zdot: Nz,
    zeetrf: Tz,
    zeta: $z,
    zfr: Dz,
    zhcy: Cz,
    zigrarr: Rz,
    zopf: Iz,
    zscr: Oz,
    zwj: Fz,
    zwnj: Uz,
  },
  da = _z,
  Bz = Hz,
  jz = {}.hasOwnProperty;
function Hz(r) {
  return jz.call(da, r) ? da[r] : !1;
}
var ga = wl,
  fa = xl,
  Vz = Ha,
  Gz = ql,
  Va = Tl,
  zz = Bz,
  Mz = n3,
  Pz = {}.hasOwnProperty,
  or = String.fromCharCode,
  Zz = Function.prototype,
  ma = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0,
  },
  Wz = 9,
  ha = 10,
  Yz = 12,
  Jz = 32,
  ba = 38,
  Kz = 59,
  Xz = 60,
  Qz = 61,
  r3 = 35,
  a3 = 88,
  e3 = 120,
  t3 = 65533,
  lr = 'named',
  Zr = 'hexadecimal',
  Wr = 'decimal',
  Yr = {};
Yr[Zr] = 16;
Yr[Wr] = 10;
var xr = {};
xr[lr] = Va;
xr[Wr] = Vz;
xr[Zr] = Gz;
var Ga = 1,
  za = 2,
  Ma = 3,
  Pa = 4,
  Za = 5,
  Lr = 6,
  Wa = 7,
  ar = {};
ar[Ga] = 'Named character references must be terminated by a semicolon';
ar[za] = 'Numeric character references must be terminated by a semicolon';
ar[Ma] = 'Named character references cannot be empty';
ar[Pa] = 'Numeric character references cannot be empty';
ar[Za] = 'Named character references must be known';
ar[Lr] = 'Numeric character references cannot be disallowed';
ar[Wa] = 'Numeric character references cannot be outside the permissible Unicode range';
function n3(r, a) {
  var e = {},
    t,
    o;
  a || (a = {});
  for (o in ma) (t = a[o]), (e[o] = t == null ? ma[o] : t);
  return (
    (e.position.indent || e.position.start) &&
      ((e.indent = e.position.indent || []), (e.position = e.position.start)),
    o3(r, e)
  );
}
function o3(r, a) {
  var e = a.additional,
    t = a.nonTerminated,
    o = a.text,
    s = a.reference,
    p = a.warning,
    l = a.textContext,
    f = a.referenceContext,
    x = a.warningContext,
    m = a.position,
    d = a.indent || [],
    h = r.length,
    b = 0,
    L = -1,
    A = m.column || 1,
    q = m.line || 1,
    E = '',
    c = [],
    n,
    v,
    u,
    i,
    g,
    y,
    w,
    S,
    N,
    R,
    I,
    G,
    j,
    _,
    K,
    T,
    O,
    C,
    $;
  for (typeof e == 'string' && (e = e.charCodeAt(0)), T = F(), S = p ? nr : Zz, b--, h++; ++b < h; )
    if ((g === ha && (A = d[L] || 1), (g = r.charCodeAt(b)), g === ba)) {
      if (
        ((w = r.charCodeAt(b + 1)),
        w === Wz ||
          w === ha ||
          w === Yz ||
          w === Jz ||
          w === ba ||
          w === Xz ||
          w !== w ||
          (e && w === e))
      ) {
        (E += or(g)), A++;
        continue;
      }
      for (
        j = b + 1,
          G = j,
          $ = j,
          w === r3
            ? (($ = ++G),
              (w = r.charCodeAt($)),
              w === a3 || w === e3 ? ((_ = Zr), ($ = ++G)) : (_ = Wr))
            : (_ = lr),
          n = '',
          I = '',
          i = '',
          K = xr[_],
          $--;
        ++$ < h && ((w = r.charCodeAt($)), !!K(w));

      )
        (i += or(w)), _ === lr && Pz.call(ga, i) && ((n = i), (I = ga[i]));
      (u = r.charCodeAt($) === Kz),
        u && ($++, (v = _ === lr ? zz(i) : !1), v && ((n = i), (I = v))),
        (C = 1 + $ - j),
        (!u && !t) ||
          (i
            ? _ === lr
              ? (u && !I
                  ? S(Za, 1)
                  : (n !== i && (($ = G + n.length), (C = 1 + $ - G), (u = !1)),
                    u ||
                      ((N = n ? Ga : Ma),
                      a.attribute
                        ? ((w = r.charCodeAt($)),
                          w === Qz ? (S(N, C), (I = null)) : Va(w) ? (I = null) : S(N, C))
                        : S(N, C))),
                (y = I))
              : (u || S(za, C),
                (y = parseInt(i, Yr[_])),
                l3(y)
                  ? (S(Wa, C), (y = or(t3)))
                  : y in fa
                  ? (S(Lr, C), (y = fa[y]))
                  : ((R = ''),
                    i3(y) && S(Lr, C),
                    y > 65535 &&
                      ((y -= 65536), (R += or((y >>> 10) | 55296)), (y = 56320 | (y & 1023))),
                    (y = R + or(y))))
            : _ !== lr && S(Pa, C)),
        y
          ? (H(),
            (T = F()),
            (b = $ - 1),
            (A += $ - j + 1),
            c.push(y),
            (O = F()),
            O.offset++,
            s && s.call(f, y, { start: T, end: O }, r.slice(j - 1, $)),
            (T = O))
          : ((i = r.slice(j - 1, $)), (E += i), (A += i.length), (b = $ - 1));
    } else g === 10 && (q++, L++, (A = 0)), g === g ? ((E += or(g)), A++) : H();
  return c.join('');
  function F() {
    return { line: q, column: A, offset: b + (m.offset || 0) };
  }
  function nr(Y, M) {
    var X = F();
    (X.column += M), (X.offset += M), p.call(x, ar[Y], X, Y);
  }
  function H() {
    E && (c.push(E), o && o.call(l, E, { start: T, end: F() }), (E = ''));
  }
}
function l3(r) {
  return (r >= 55296 && r <= 57343) || r > 1114111;
}
function i3(r) {
  return (
    (r >= 1 && r <= 8) ||
    r === 11 ||
    (r >= 13 && r <= 31) ||
    (r >= 127 && r <= 159) ||
    (r >= 64976 && r <= 65007) ||
    (r & 65535) === 65535 ||
    (r & 65535) === 65534
  );
}
var Ya = { exports: {} };
(function (r) {
  var a =
    typeof window < 'u'
      ? window
      : typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope
      ? self
      : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */ var e = (function (t) {
    var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      s = 0,
      p = {},
      l = {
        manual: t.Prism && t.Prism.manual,
        disableWorkerMessageHandler: t.Prism && t.Prism.disableWorkerMessageHandler,
        util: {
          encode: function c(n) {
            return n instanceof f
              ? new f(n.type, c(n.content), n.alias)
              : Array.isArray(n)
              ? n.map(c)
              : n
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (n) {
            return Object.prototype.toString.call(n).slice(8, -1);
          },
          objId: function (n) {
            return n.__id || Object.defineProperty(n, '__id', { value: ++s }), n.__id;
          },
          clone: function c(n, v) {
            v = v || {};
            var u, i;
            switch (l.util.type(n)) {
              case 'Object':
                if (((i = l.util.objId(n)), v[i])) return v[i];
                (u = {}), (v[i] = u);
                for (var g in n) n.hasOwnProperty(g) && (u[g] = c(n[g], v));
                return u;
              case 'Array':
                return (
                  (i = l.util.objId(n)),
                  v[i]
                    ? v[i]
                    : ((u = []),
                      (v[i] = u),
                      n.forEach(function (y, w) {
                        u[w] = c(y, v);
                      }),
                      u)
                );
              default:
                return n;
            }
          },
          getLanguage: function (n) {
            for (; n; ) {
              var v = o.exec(n.className);
              if (v) return v[1].toLowerCase();
              n = n.parentElement;
            }
            return 'none';
          },
          setLanguage: function (n, v) {
            (n.className = n.className.replace(RegExp(o, 'gi'), '')),
              n.classList.add('language-' + v);
          },
          currentScript: function () {
            if (typeof document > 'u') return null;
            if ('currentScript' in document && 1 < 2) return document.currentScript;
            try {
              throw new Error();
            } catch (i) {
              var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack) || [])[1];
              if (n) {
                var v = document.getElementsByTagName('script');
                for (var u in v) if (v[u].src == n) return v[u];
              }
              return null;
            }
          },
          isActive: function (n, v, u) {
            for (var i = 'no-' + v; n; ) {
              var g = n.classList;
              if (g.contains(v)) return !0;
              if (g.contains(i)) return !1;
              n = n.parentElement;
            }
            return !!u;
          },
        },
        languages: {
          plain: p,
          plaintext: p,
          text: p,
          txt: p,
          extend: function (n, v) {
            var u = l.util.clone(l.languages[n]);
            for (var i in v) u[i] = v[i];
            return u;
          },
          insertBefore: function (n, v, u, i) {
            i = i || l.languages;
            var g = i[n],
              y = {};
            for (var w in g)
              if (g.hasOwnProperty(w)) {
                if (w == v) for (var S in u) u.hasOwnProperty(S) && (y[S] = u[S]);
                u.hasOwnProperty(w) || (y[w] = g[w]);
              }
            var N = i[n];
            return (
              (i[n] = y),
              l.languages.DFS(l.languages, function (R, I) {
                I === N && R != n && (this[R] = y);
              }),
              y
            );
          },
          DFS: function c(n, v, u, i) {
            i = i || {};
            var g = l.util.objId;
            for (var y in n)
              if (n.hasOwnProperty(y)) {
                v.call(n, y, n[y], u || y);
                var w = n[y],
                  S = l.util.type(w);
                S === 'Object' && !i[g(w)]
                  ? ((i[g(w)] = !0), c(w, v, null, i))
                  : S === 'Array' && !i[g(w)] && ((i[g(w)] = !0), c(w, v, y, i));
              }
          },
        },
        plugins: {},
        highlightAll: function (n, v) {
          l.highlightAllUnder(document, n, v);
        },
        highlightAllUnder: function (n, v, u) {
          var i = {
            callback: u,
            container: n,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          l.hooks.run('before-highlightall', i),
            (i.elements = Array.prototype.slice.apply(i.container.querySelectorAll(i.selector))),
            l.hooks.run('before-all-elements-highlight', i);
          for (var g = 0, y; (y = i.elements[g++]); ) l.highlightElement(y, v === !0, i.callback);
        },
        highlightElement: function (n, v, u) {
          var i = l.util.getLanguage(n),
            g = l.languages[i];
          l.util.setLanguage(n, i);
          var y = n.parentElement;
          y && y.nodeName.toLowerCase() === 'pre' && l.util.setLanguage(y, i);
          var w = n.textContent,
            S = { element: n, language: i, grammar: g, code: w };
          function N(I) {
            (S.highlightedCode = I),
              l.hooks.run('before-insert', S),
              (S.element.innerHTML = S.highlightedCode),
              l.hooks.run('after-highlight', S),
              l.hooks.run('complete', S),
              u && u.call(S.element);
          }
          if (
            (l.hooks.run('before-sanity-check', S),
            (y = S.element.parentElement),
            y &&
              y.nodeName.toLowerCase() === 'pre' &&
              !y.hasAttribute('tabindex') &&
              y.setAttribute('tabindex', '0'),
            !S.code)
          ) {
            l.hooks.run('complete', S), u && u.call(S.element);
            return;
          }
          if ((l.hooks.run('before-highlight', S), !S.grammar)) {
            N(l.util.encode(S.code));
            return;
          }
          if (v && t.Worker) {
            var R = new Worker(l.filename);
            (R.onmessage = function (I) {
              N(I.data);
            }),
              R.postMessage(
                JSON.stringify({ language: S.language, code: S.code, immediateClose: !0 }),
              );
          } else N(l.highlight(S.code, S.grammar, S.language));
        },
        highlight: function (n, v, u) {
          var i = { code: n, grammar: v, language: u };
          if ((l.hooks.run('before-tokenize', i), !i.grammar))
            throw new Error('The language "' + i.language + '" has no grammar.');
          return (
            (i.tokens = l.tokenize(i.code, i.grammar)),
            l.hooks.run('after-tokenize', i),
            f.stringify(l.util.encode(i.tokens), i.language)
          );
        },
        tokenize: function (n, v) {
          var u = v.rest;
          if (u) {
            for (var i in u) v[i] = u[i];
            delete v.rest;
          }
          var g = new d();
          return h(g, g.head, n), m(n, g, v, g.head, 0), L(g);
        },
        hooks: {
          all: {},
          add: function (n, v) {
            var u = l.hooks.all;
            (u[n] = u[n] || []), u[n].push(v);
          },
          run: function (n, v) {
            var u = l.hooks.all[n];
            if (!(!u || !u.length)) for (var i = 0, g; (g = u[i++]); ) g(v);
          },
        },
        Token: f,
      };
    t.Prism = l;
    function f(c, n, v, u) {
      (this.type = c), (this.content = n), (this.alias = v), (this.length = (u || '').length | 0);
    }
    f.stringify = function c(n, v) {
      if (typeof n == 'string') return n;
      if (Array.isArray(n)) {
        var u = '';
        return (
          n.forEach(function (S) {
            u += c(S, v);
          }),
          u
        );
      }
      var i = {
          type: n.type,
          content: c(n.content, v),
          tag: 'span',
          classes: ['token', n.type],
          attributes: {},
          language: v,
        },
        g = n.alias;
      g && (Array.isArray(g) ? Array.prototype.push.apply(i.classes, g) : i.classes.push(g)),
        l.hooks.run('wrap', i);
      var y = '';
      for (var w in i.attributes)
        y += ' ' + w + '="' + (i.attributes[w] || '').replace(/"/g, '&quot;') + '"';
      return (
        '<' +
        i.tag +
        ' class="' +
        i.classes.join(' ') +
        '"' +
        y +
        '>' +
        i.content +
        '</' +
        i.tag +
        '>'
      );
    };
    function x(c, n, v, u) {
      c.lastIndex = n;
      var i = c.exec(v);
      if (i && u && i[1]) {
        var g = i[1].length;
        (i.index += g), (i[0] = i[0].slice(g));
      }
      return i;
    }
    function m(c, n, v, u, i, g) {
      for (var y in v)
        if (!(!v.hasOwnProperty(y) || !v[y])) {
          var w = v[y];
          w = Array.isArray(w) ? w : [w];
          for (var S = 0; S < w.length; ++S) {
            if (g && g.cause == y + ',' + S) return;
            var N = w[S],
              R = N.inside,
              I = !!N.lookbehind,
              G = !!N.greedy,
              j = N.alias;
            if (G && !N.pattern.global) {
              var _ = N.pattern.toString().match(/[imsuy]*$/)[0];
              N.pattern = RegExp(N.pattern.source, _ + 'g');
            }
            for (
              var K = N.pattern || N, T = u.next, O = i;
              T !== n.tail && !(g && O >= g.reach);
              O += T.value.length, T = T.next
            ) {
              var C = T.value;
              if (n.length > c.length) return;
              if (!(C instanceof f)) {
                var $ = 1,
                  F;
                if (G) {
                  if (((F = x(K, O, c, I)), !F || F.index >= c.length)) break;
                  var M = F.index,
                    nr = F.index + F[0].length,
                    H = O;
                  for (H += T.value.length; M >= H; ) (T = T.next), (H += T.value.length);
                  if (((H -= T.value.length), (O = H), T.value instanceof f)) continue;
                  for (
                    var Y = T;
                    Y !== n.tail && (H < nr || typeof Y.value == 'string');
                    Y = Y.next
                  )
                    $++, (H += Y.value.length);
                  $--, (C = c.slice(O, H)), (F.index -= O);
                } else if (((F = x(K, 0, C, I)), !F)) continue;
                var M = F.index,
                  X = F[0],
                  sr = C.slice(0, M),
                  Qr = C.slice(M + X.length),
                  Sr = O + C.length;
                g && Sr > g.reach && (g.reach = Sr);
                var fr = T.prev;
                sr && ((fr = h(n, fr, sr)), (O += sr.length)), b(n, fr, $);
                var re = new f(y, R ? l.tokenize(X, R) : X, j, X);
                if (((T = h(n, fr, re)), Qr && h(n, T, Qr), $ > 1)) {
                  var qr = { cause: y + ',' + S, reach: Sr };
                  m(c, n, v, T.prev, O, qr), g && qr.reach > g.reach && (g.reach = qr.reach);
                }
              }
            }
          }
        }
    }
    function d() {
      var c = { value: null, prev: null, next: null },
        n = { value: null, prev: c, next: null };
      (c.next = n), (this.head = c), (this.tail = n), (this.length = 0);
    }
    function h(c, n, v) {
      var u = n.next,
        i = { value: v, prev: n, next: u };
      return (n.next = i), (u.prev = i), c.length++, i;
    }
    function b(c, n, v) {
      for (var u = n.next, i = 0; i < v && u !== c.tail; i++) u = u.next;
      (n.next = u), (u.prev = n), (c.length -= i);
    }
    function L(c) {
      for (var n = [], v = c.head.next; v !== c.tail; ) n.push(v.value), (v = v.next);
      return n;
    }
    if (!t.document)
      return (
        t.addEventListener &&
          (l.disableWorkerMessageHandler ||
            t.addEventListener(
              'message',
              function (c) {
                var n = JSON.parse(c.data),
                  v = n.language,
                  u = n.code,
                  i = n.immediateClose;
                t.postMessage(l.highlight(u, l.languages[v], v)), i && t.close();
              },
              !1,
            )),
        l
      );
    var A = l.util.currentScript();
    A && ((l.filename = A.src), A.hasAttribute('data-manual') && (l.manual = !0));
    function q() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var E = document.readyState;
      E === 'loading' || (E === 'interactive' && A && A.defer)
        ? document.addEventListener('DOMContentLoaded', q)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(q)
        : window.setTimeout(q, 16);
    }
    return l;
  })(a);
  r.exports && (r.exports = e), typeof yr < 'u' && (yr.Prism = e);
})(Ya);
var s3 = Jr;
Jr.displayName = 'clike';
Jr.aliases = [];
function Jr(r) {
  r.languages.clike = {
    comment: [
      { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  };
}
var c3 = Kr;
Kr.displayName = 'javascript';
Kr.aliases = ['js'];
function Kr(r) {
  (r.languages.javascript = r.languages.extend('clike', {
    'class-name': [
      r.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          (/NaN|Infinity/.source +
            '|' +
            /0[bB][01]+(?:_[01]+)*n?/.source +
            '|' +
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
            '|' +
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
            '|' +
            /\d+(?:_\d+)*n/.source +
            '|' +
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
              .source) +
          ')' +
          /(?![\w$])/.source,
      ),
      lookbehind: !0,
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
    (r.languages.javascript['class-name'][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    r.languages.insertBefore('javascript', 'keyword', {
      regex: {
        pattern:
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          'regex-source': {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: 'language-regex',
            inside: r.languages.regex,
          },
          'regex-delimiter': /^\/|\/$/,
          'regex-flags': /^[a-z]+$/,
        },
      },
      'function-variable': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function',
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: r.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: r.languages.javascript,
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: r.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: r.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    r.languages.insertBefore('javascript', 'string', {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
      'template-string': {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
              rest: r.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      'string-property': {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: 'property',
      },
    }),
    r.languages.insertBefore('javascript', 'operator', {
      'literal-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: 'property',
      },
    }),
    r.languages.markup &&
      (r.languages.markup.tag.addInlined('script', 'javascript'),
      r.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        'javascript',
      )),
    (r.languages.js = r.languages.javascript);
}
var pr =
    (typeof globalThis > 'u' ? 'undefined' : J(globalThis)) === 'object'
      ? globalThis
      : (typeof self > 'u' ? 'undefined' : J(self)) === 'object'
      ? self
      : (typeof window > 'u' ? 'undefined' : J(window)) === 'object'
      ? window
      : J(yr) === 'object'
      ? yr
      : {},
  v3 = E3();
pr.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
var u3 = wn,
  p3 = Mz,
  Ja = Ya.exports,
  d3 = qa,
  g3 = Sa,
  f3 = s3,
  m3 = c3;
v3();
var Xr = {}.hasOwnProperty;
function Ka() {}
Ka.prototype = Ja;
var U = new Ka(),
  Xa = U;
U.highlight = b3;
U.register = gr;
U.alias = h3;
U.registered = y3;
U.listLanguages = w3;
gr(d3);
gr(g3);
gr(f3);
gr(m3);
U.util.encode = q3;
U.Token.stringify = x3;
function gr(r) {
  if (typeof r != 'function' || !r.displayName)
    throw new Error('Expected `function` for `grammar`, got `' + r + '`');
  U.languages[r.displayName] === void 0 && r(U);
}
function h3(r, a) {
  var e = U.languages,
    t = r,
    o,
    s,
    p,
    l;
  a && ((t = {}), (t[r] = a));
  for (o in t)
    for (s = t[o], s = typeof s == 'string' ? [s] : s, p = s.length, l = -1; ++l < p; )
      e[s[l]] = e[o];
}
function b3(r, a) {
  var e = Ja.highlight,
    t;
  if (typeof r != 'string') throw new Error('Expected `string` for `value`, got `' + r + '`');
  if (U.util.type(a) === 'Object') (t = a), (a = null);
  else {
    if (typeof a != 'string') throw new Error('Expected `string` for `name`, got `' + a + '`');
    if (Xr.call(U.languages, a)) t = U.languages[a];
    else throw new Error('Unknown language: `' + a + '` is not registered');
  }
  return e.call(this, r, t, a);
}
function y3(r) {
  if (typeof r != 'string') throw new Error('Expected `string` for `language`, got `' + r + '`');
  return Xr.call(U.languages, r);
}
function w3() {
  var r = U.languages,
    a = [],
    e;
  for (e in r) Xr.call(r, e) && J(r[e]) === 'object' && a.push(e);
  return a;
}
function x3(r, a, e) {
  var t;
  return typeof r == 'string'
    ? { type: 'text', value: r }
    : U.util.type(r) === 'Array'
    ? S3(r, a)
    : ((t = {
        type: r.type,
        content: U.Token.stringify(r.content, a, e),
        tag: 'span',
        classes: ['token', r.type],
        attributes: {},
        language: a,
        parent: e,
      }),
      r.alias && (t.classes = t.classes.concat(r.alias)),
      U.hooks.run('wrap', t),
      u3(t.tag + '.' + t.classes.join('.'), A3(t.attributes), t.content));
}
function S3(r, a) {
  for (var e = [], t = r.length, o = -1, s; ++o < t; )
    (s = r[o]), s !== '' && s !== null && s !== void 0 && e.push(s);
  for (o = -1, t = e.length; ++o < t; ) (s = e[o]), (e[o] = U.Token.stringify(s, a, e));
  return e;
}
function q3(r) {
  return r;
}
function A3(r) {
  var a;
  for (a in r) r[a] = p3(r[a]);
  return r;
}
function E3() {
  var r = 'Prism' in pr,
    a = r ? pr.Prism : void 0;
  return e;
  function e() {
    r ? (pr.Prism = a) : delete pr.Prism, (r = void 0), (a = void 0);
  }
}
var Qa = at(Xa, {});
Qa.registerLanguage = function (r, a) {
  return Xa.register(a);
};
var W = Qa,
  hr = Nr.navigator,
  vr = Nr.document,
  ya = Nr.window;
W.registerLanguage('jsextra', we);
W.registerLanguage('jsx', fe);
W.registerLanguage('json', Se);
W.registerLanguage('yml', Te);
W.registerLanguage('md', Le);
W.registerLanguage('bash', he);
W.registerLanguage('css', be);
W.registerLanguage('html', Ee);
W.registerLanguage('tsx', Ie);
W.registerLanguage('typescript', $e);
W.registerLanguage('graphql', Ae);
var k3 = ae(2)(function (r) {
    return Object.entries(r.code || {}).reduce(function (a, e) {
      var t = wa(e, 2),
        o = t[0],
        s = t[1];
      return Object.assign(Object.assign({}, a), ve({}, '* .'.concat(o), s));
    }, {});
  }),
  L3 = N3();
function N3() {
  var r = this;
  return hr != null && hr.clipboard
    ? function (a) {
        return hr.clipboard.writeText(a);
      }
    : function (a) {
        return oe(
          r,
          void 0,
          void 0,
          regeneratorRuntime.mark(function e() {
            var t, o;
            return regeneratorRuntime.wrap(function (p) {
              for (;;)
                switch ((p.prev = p.next)) {
                  case 0:
                    (t = vr.createElement('TEXTAREA')),
                      (o = vr.activeElement),
                      (t.value = a),
                      vr.body.appendChild(t),
                      t.select(),
                      vr.execCommand('copy'),
                      vr.body.removeChild(t),
                      o.focus();
                  case 8:
                  case 'end':
                    return p.stop();
                }
            }, e);
          }),
        );
      };
}
var T3 = wr.div(
    function (r) {
      var a = r.theme;
      return { position: 'relative', overflow: 'hidden', color: a.color.defaultText };
    },
    function (r) {
      var a = r.theme,
        e = r.bordered;
      return e
        ? {
            border: '1px solid '.concat(a.appBorderColor),
            borderRadius: a.borderRadius,
            background: a.background.content,
          }
        : {};
    },
  ),
  $3 = wr(function (r) {
    var a = r.children,
      e = r.className;
    return z(le, { horizontal: !0, vertical: !0, className: e, children: a });
  })({ position: 'relative' }, function (r) {
    var a = r.theme;
    return k3(a);
  }),
  D3 = wr.pre(function (r) {
    var a = r.theme,
      e = r.padded;
    return {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: 0,
      padding: e ? a.layoutMargin : 0,
    };
  }),
  C3 = wr.div(function (r) {
    var a = r.theme;
    return { flex: 1, paddingLeft: 2, paddingRight: a.layoutMargin, opacity: 1 };
  }),
  U3 = function (a) {
    var e = a.children,
      t = a.language,
      o = t === void 0 ? 'jsx' : t,
      s = a.copyable,
      p = s === void 0 ? !1 : s,
      l = a.bordered,
      f = l === void 0 ? !1 : l,
      x = a.padded,
      m = x === void 0 ? !1 : x,
      d = a.format,
      h = d === void 0 ? !0 : d,
      b = a.formatter,
      L = b === void 0 ? null : b,
      A = a.className,
      q = A === void 0 ? null : A,
      E = a.showLineNumbers,
      c = E === void 0 ? !1 : E,
      n = ie(a, [
        'children',
        'language',
        'copyable',
        'bordered',
        'padded',
        'format',
        'formatter',
        'className',
        'showLineNumbers',
      ]);
    if (typeof e != 'string' || !e.trim()) return null;
    var v = L ? L(h, e) : e.trim(),
      u = ee(!1),
      i = wa(u, 2),
      g = i[0],
      y = i[1],
      w = te(function (S) {
        S.preventDefault();
        var N = ya.getSelection().toString(),
          R = S.type !== 'click' && N ? N : v;
        L3(R)
          .then(function () {
            y(!0),
              ya.setTimeout(function () {
                return y(!1);
              }, 1500);
          })
          .catch(ne.error);
      }, []);
    return z(T3, {
      bordered: f,
      padded: m,
      className: q,
      onCopyCapture: w,
      children: [
        z($3, {
          children: z(W, {
            ...Object.assign(
              {
                padded: m || f,
                language: o,
                showLineNumbers: c,
                showInlineLineNumbers: c,
                useInlineStyles: !1,
                PreTag: D3,
                CodeTag: C3,
                lineNumberContainerStyle: {},
              },
              n,
            ),
            children: v,
          }),
        }),
        p ? z(se, { actionItems: [{ title: g ? 'Copied' : 'Copy', onClick: w }] }) : null,
      ],
    });
  };
export { U3 as SyntaxHighlighter, N3 as createCopyToClipboardFunction, U3 as default };
//# sourceMappingURL=syntaxhighlighter-b07b042a.f65e325f.js.map
