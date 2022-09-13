import {
  f as functionUncurryThis,
  r as requireObjectCoercible$1,
  t as toString$3,
  a as fails$3,
  _ as _export,
  g as global$7,
  s as stringTrimForced,
  b as stringTrim,
  l as lengthOfArrayLike$1,
  c as toObject$1,
  d as arraySpeciesCreate$1,
  e as createProperty$1,
  h as arrayMethodHasSpeciesSupport$1,
  i as toAbsoluteIndex$1,
  j as toIntegerOrInfinity$3,
  k as toLength$2,
  o as objectGetOwnPropertyNames,
  m as objectDefineProperty,
  n as descriptors,
  p as createNonEnumerableProperty$1,
  q as redefineAll$1,
  u as anInstance$1,
  v as objectGetPrototypeOf,
  w as objectSetPrototypeOf,
  x as arrayFill$1,
  y as setToStringTag$1,
  z as functionName,
  A as arraySliceSimple,
  B as internalState,
  C as setSpecies$1,
  D as stringRepeat,
  E as objectGetOwnPropertyNamesExternal,
  F as q$2,
  G as h$2,
  R as React,
  H as s$1,
  I as memoize$3,
  J as logger,
  K as B$1,
  L as p$2,
  M as R$1,
  N as _,
  O as E$1,
  P as React__default,
  Q as k$2,
  S as dist,
  U as U$1,
  T as T$1,
  V as p$3,
  W as T$2,
  X as __vitePreload,
  Y as lib,
  Z as h$3,
  $ as d$2,
  a0 as once,
  a1 as F$1,
  a2 as rn,
  a3 as e$2,
  a4 as window_1$2,
  a5 as addons,
  a6 as Events,
  a7 as filterArgTypes,
  a8 as mapValues,
  a9 as fastDeepEqual,
  aa as combineParameters,
  ab as NAVIGATE_URL,
  ac as browser,
  ad as dedent$2,
} from './iframe.1f3a3e8b.js';
var uncurryThis$1 = functionUncurryThis,
  requireObjectCoercible = requireObjectCoercible$1,
  toString$2 = toString$3,
  quot = /"/g,
  replace$1 = uncurryThis$1(''.replace),
  createHtml = function (te, ee, re, ae) {
    var ne = toString$2(requireObjectCoercible(te)),
      oe = '<' + ee;
    return (
      re !== '' && (oe += ' ' + re + '="' + replace$1(toString$2(ae), quot, '&quot;') + '"'),
      oe + '>' + ne + '</' + ee + '>'
    );
  },
  fails$2 = fails$3,
  stringHtmlForced = function (te) {
    return fails$2(function () {
      var ee = ''[te]('"');
      return ee !== ee.toLowerCase() || ee.split('"').length > 3;
    });
  },
  $$9 = _export,
  createHTML$1 = createHtml,
  forcedStringHTMLMethod$1 = stringHtmlForced;
$$9(
  { target: 'String', proto: !0, forced: forcedStringHTMLMethod$1('bold') },
  {
    bold: function () {
      return createHTML$1(this, 'b', '', '');
    },
  },
);
var $$8 = _export,
  global$6 = global$7;
$$8({ global: !0 }, { globalThis: global$6 });
var $$7 = _export,
  createHTML = createHtml,
  forcedStringHTMLMethod = stringHtmlForced;
$$7(
  { target: 'String', proto: !0, forced: forcedStringHTMLMethod('small') },
  {
    small: function () {
      return createHTML(this, 'small', '', '');
    },
  },
);
var $$6 = _export,
  $trimEnd = stringTrim.end,
  forcedStringTrimMethod = stringTrimForced,
  FORCED = forcedStringTrimMethod('trimEnd'),
  trimEnd = FORCED
    ? function () {
        return $trimEnd(this);
      }
    : ''.trimEnd;
$$6(
  { target: 'String', proto: !0, name: 'trimEnd', forced: FORCED },
  { trimEnd, trimRight: trimEnd },
);
var $$5 = _export,
  global$5 = global$7,
  toAbsoluteIndex = toAbsoluteIndex$1,
  toIntegerOrInfinity$2 = toIntegerOrInfinity$3,
  lengthOfArrayLike = lengthOfArrayLike$1,
  toObject = toObject$1,
  arraySpeciesCreate = arraySpeciesCreate$1,
  createProperty = createProperty$1,
  arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1,
  HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice'),
  TypeError$1 = global$5.TypeError,
  max = Math.max,
  min = Math.min,
  MAX_SAFE_INTEGER$2 = 9007199254740991,
  MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';
$$5(
  { target: 'Array', proto: !0, forced: !HAS_SPECIES_SUPPORT },
  {
    splice: function (ee, re) {
      var ae = toObject(this),
        ne = lengthOfArrayLike(ae),
        oe = toAbsoluteIndex(ee, ne),
        ie = arguments.length,
        le,
        ce,
        se,
        ue,
        pe,
        fe;
      if (
        (ie === 0
          ? (le = ce = 0)
          : ie === 1
          ? ((le = 0), (ce = ne - oe))
          : ((le = ie - 2), (ce = min(max(toIntegerOrInfinity$2(re), 0), ne - oe))),
        ne + le - ce > MAX_SAFE_INTEGER$2)
      )
        throw TypeError$1(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      for (se = arraySpeciesCreate(ae, ce), ue = 0; ue < ce; ue++)
        (pe = oe + ue), pe in ae && createProperty(se, ue, ae[pe]);
      if (((se.length = ce), le < ce)) {
        for (ue = oe; ue < ne - ce; ue++)
          (pe = ue + ce), (fe = ue + le), pe in ae ? (ae[fe] = ae[pe]) : delete ae[fe];
        for (ue = ne; ue > ne - ce + le; ue--) delete ae[ue - 1];
      } else if (le > ce)
        for (ue = ne - ce; ue > oe; ue--)
          (pe = ue + ce - 1), (fe = ue + le - 1), pe in ae ? (ae[fe] = ae[pe]) : delete ae[fe];
      for (ue = 0; ue < le; ue++) ae[ue + oe] = arguments[ue + 2];
      return (ae.length = ne - ce + le), se;
    },
  },
);
var arrayBufferNative = typeof ArrayBuffer < 'u' && typeof DataView < 'u',
  global$4 = global$7,
  toIntegerOrInfinity$1 = toIntegerOrInfinity$3,
  toLength$1 = toLength$2,
  RangeError$1 = global$4.RangeError,
  toIndex$1 = function (te) {
    if (te === void 0) return 0;
    var ee = toIntegerOrInfinity$1(te),
      re = toLength$1(ee);
    if (ee !== re) throw RangeError$1('Wrong length or index');
    return re;
  },
  global$3 = global$7,
  Array$2 = global$3.Array,
  abs$1 = Math.abs,
  pow = Math.pow,
  floor = Math.floor,
  log = Math.log,
  LN2 = Math.LN2,
  pack = function (te, ee, re) {
    var ae = Array$2(re),
      ne = re * 8 - ee - 1,
      oe = (1 << ne) - 1,
      ie = oe >> 1,
      le = ee === 23 ? pow(2, -24) - pow(2, -77) : 0,
      ce = te < 0 || (te === 0 && 1 / te < 0) ? 1 : 0,
      se = 0,
      ue,
      pe,
      fe;
    for (
      te = abs$1(te),
        te != te || te === 1 / 0
          ? ((pe = te != te ? 1 : 0), (ue = oe))
          : ((ue = floor(log(te) / LN2)),
            (fe = pow(2, -ue)),
            te * fe < 1 && (ue--, (fe *= 2)),
            ue + ie >= 1 ? (te += le / fe) : (te += le * pow(2, 1 - ie)),
            te * fe >= 2 && (ue++, (fe /= 2)),
            ue + ie >= oe
              ? ((pe = 0), (ue = oe))
              : ue + ie >= 1
              ? ((pe = (te * fe - 1) * pow(2, ee)), (ue = ue + ie))
              : ((pe = te * pow(2, ie - 1) * pow(2, ee)), (ue = 0)));
      ee >= 8;

    )
      (ae[se++] = pe & 255), (pe /= 256), (ee -= 8);
    for (ue = (ue << ee) | pe, ne += ee; ne > 0; ) (ae[se++] = ue & 255), (ue /= 256), (ne -= 8);
    return (ae[--se] |= ce * 128), ae;
  },
  unpack = function (te, ee) {
    var re = te.length,
      ae = re * 8 - ee - 1,
      ne = (1 << ae) - 1,
      oe = ne >> 1,
      ie = ae - 7,
      le = re - 1,
      ce = te[le--],
      se = ce & 127,
      ue;
    for (ce >>= 7; ie > 0; ) (se = se * 256 + te[le--]), (ie -= 8);
    for (ue = se & ((1 << -ie) - 1), se >>= -ie, ie += ee; ie > 0; )
      (ue = ue * 256 + te[le--]), (ie -= 8);
    if (se === 0) se = 1 - oe;
    else {
      if (se === ne) return ue ? NaN : ce ? -1 / 0 : 1 / 0;
      (ue = ue + pow(2, ee)), (se = se - oe);
    }
    return (ce ? -1 : 1) * ue * pow(2, se - ee);
  },
  ieee754 = { pack, unpack },
  global$2 = global$7,
  uncurryThis = functionUncurryThis,
  DESCRIPTORS = descriptors,
  NATIVE_ARRAY_BUFFER = arrayBufferNative,
  FunctionName = functionName,
  createNonEnumerableProperty = createNonEnumerableProperty$1,
  redefineAll = redefineAll$1,
  fails$1 = fails$3,
  anInstance = anInstance$1,
  toIntegerOrInfinity = toIntegerOrInfinity$3,
  toLength = toLength$2,
  toIndex = toIndex$1,
  IEEE754 = ieee754,
  getPrototypeOf = objectGetPrototypeOf,
  setPrototypeOf = objectSetPrototypeOf,
  getOwnPropertyNames$1 = objectGetOwnPropertyNames.f,
  defineProperty$2 = objectDefineProperty.f,
  arrayFill = arrayFill$1,
  arraySlice = arraySliceSimple,
  setToStringTag = setToStringTag$1,
  InternalStateModule = internalState,
  PROPER_FUNCTION_NAME = FunctionName.PROPER,
  CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE,
  getInternalState = InternalStateModule.get,
  setInternalState = InternalStateModule.set,
  ARRAY_BUFFER$1 = 'ArrayBuffer',
  DATA_VIEW = 'DataView',
  PROTOTYPE = 'prototype',
  WRONG_LENGTH = 'Wrong length',
  WRONG_INDEX = 'Wrong index',
  NativeArrayBuffer$1 = global$2[ARRAY_BUFFER$1],
  $ArrayBuffer = NativeArrayBuffer$1,
  ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE],
  $DataView = global$2[DATA_VIEW],
  DataViewPrototype = $DataView && $DataView[PROTOTYPE],
  ObjectPrototype = Object.prototype,
  Array$1 = global$2.Array,
  RangeError = global$2.RangeError,
  fill = uncurryThis(arrayFill),
  reverse = uncurryThis([].reverse),
  packIEEE754 = IEEE754.pack,
  unpackIEEE754 = IEEE754.unpack,
  packInt8 = function (te) {
    return [te & 255];
  },
  packInt16 = function (te) {
    return [te & 255, (te >> 8) & 255];
  },
  packInt32 = function (te) {
    return [te & 255, (te >> 8) & 255, (te >> 16) & 255, (te >> 24) & 255];
  },
  unpackInt32 = function (te) {
    return (te[3] << 24) | (te[2] << 16) | (te[1] << 8) | te[0];
  },
  packFloat32 = function (te) {
    return packIEEE754(te, 23, 4);
  },
  packFloat64 = function (te) {
    return packIEEE754(te, 52, 8);
  },
  addGetter = function (te, ee) {
    defineProperty$2(te[PROTOTYPE], ee, {
      get: function () {
        return getInternalState(this)[ee];
      },
    });
  },
  get$2 = function (te, ee, re, ae) {
    var ne = toIndex(re),
      oe = getInternalState(te);
    if (ne + ee > oe.byteLength) throw RangeError(WRONG_INDEX);
    var ie = getInternalState(oe.buffer).bytes,
      le = ne + oe.byteOffset,
      ce = arraySlice(ie, le, le + ee);
    return ae ? ce : reverse(ce);
  },
  set = function (te, ee, re, ae, ne, oe) {
    var ie = toIndex(re),
      le = getInternalState(te);
    if (ie + ee > le.byteLength) throw RangeError(WRONG_INDEX);
    for (
      var ce = getInternalState(le.buffer).bytes, se = ie + le.byteOffset, ue = ae(+ne), pe = 0;
      pe < ee;
      pe++
    )
      ce[se + pe] = ue[oe ? pe : ee - pe - 1];
  };
if (!NATIVE_ARRAY_BUFFER)
  ($ArrayBuffer = function (ee) {
    anInstance(this, ArrayBufferPrototype);
    var re = toIndex(ee);
    setInternalState(this, { bytes: fill(Array$1(re), 0), byteLength: re }),
      DESCRIPTORS || (this.byteLength = re);
  }),
    (ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE]),
    ($DataView = function (ee, re, ae) {
      anInstance(this, DataViewPrototype), anInstance(ee, ArrayBufferPrototype);
      var ne = getInternalState(ee).byteLength,
        oe = toIntegerOrInfinity(re);
      if (oe < 0 || oe > ne) throw RangeError('Wrong offset');
      if (((ae = ae === void 0 ? ne - oe : toLength(ae)), oe + ae > ne))
        throw RangeError(WRONG_LENGTH);
      setInternalState(this, { buffer: ee, byteLength: ae, byteOffset: oe }),
        DESCRIPTORS || ((this.buffer = ee), (this.byteLength = ae), (this.byteOffset = oe));
    }),
    (DataViewPrototype = $DataView[PROTOTYPE]),
    DESCRIPTORS &&
      (addGetter($ArrayBuffer, 'byteLength'),
      addGetter($DataView, 'buffer'),
      addGetter($DataView, 'byteLength'),
      addGetter($DataView, 'byteOffset')),
    redefineAll(DataViewPrototype, {
      getInt8: function (ee) {
        return (get$2(this, 1, ee)[0] << 24) >> 24;
      },
      getUint8: function (ee) {
        return get$2(this, 1, ee)[0];
      },
      getInt16: function (ee) {
        var re = get$2(this, 2, ee, arguments.length > 1 ? arguments[1] : void 0);
        return (((re[1] << 8) | re[0]) << 16) >> 16;
      },
      getUint16: function (ee) {
        var re = get$2(this, 2, ee, arguments.length > 1 ? arguments[1] : void 0);
        return (re[1] << 8) | re[0];
      },
      getInt32: function (ee) {
        return unpackInt32(get$2(this, 4, ee, arguments.length > 1 ? arguments[1] : void 0));
      },
      getUint32: function (ee) {
        return unpackInt32(get$2(this, 4, ee, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
      },
      getFloat32: function (ee) {
        return unpackIEEE754(get$2(this, 4, ee, arguments.length > 1 ? arguments[1] : void 0), 23);
      },
      getFloat64: function (ee) {
        return unpackIEEE754(get$2(this, 8, ee, arguments.length > 1 ? arguments[1] : void 0), 52);
      },
      setInt8: function (ee, re) {
        set(this, 1, ee, packInt8, re);
      },
      setUint8: function (ee, re) {
        set(this, 1, ee, packInt8, re);
      },
      setInt16: function (ee, re) {
        set(this, 2, ee, packInt16, re, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint16: function (ee, re) {
        set(this, 2, ee, packInt16, re, arguments.length > 2 ? arguments[2] : void 0);
      },
      setInt32: function (ee, re) {
        set(this, 4, ee, packInt32, re, arguments.length > 2 ? arguments[2] : void 0);
      },
      setUint32: function (ee, re) {
        set(this, 4, ee, packInt32, re, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat32: function (ee, re) {
        set(this, 4, ee, packFloat32, re, arguments.length > 2 ? arguments[2] : void 0);
      },
      setFloat64: function (ee, re) {
        set(this, 8, ee, packFloat64, re, arguments.length > 2 ? arguments[2] : void 0);
      },
    });
else {
  var INCORRECT_ARRAY_BUFFER_NAME =
    PROPER_FUNCTION_NAME && NativeArrayBuffer$1.name !== ARRAY_BUFFER$1;
  if (
    !fails$1(function () {
      NativeArrayBuffer$1(1);
    }) ||
    !fails$1(function () {
      new NativeArrayBuffer$1(-1);
    }) ||
    fails$1(function () {
      return (
        new NativeArrayBuffer$1(),
        new NativeArrayBuffer$1(1.5),
        new NativeArrayBuffer$1(NaN),
        INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME
      );
    })
  ) {
    ($ArrayBuffer = function (ee) {
      return anInstance(this, ArrayBufferPrototype), new NativeArrayBuffer$1(toIndex(ee));
    }),
      ($ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype);
    for (
      var keys$5 = getOwnPropertyNames$1(NativeArrayBuffer$1), j$1 = 0, key;
      keys$5.length > j$1;

    )
      (key = keys$5[j$1++]) in $ArrayBuffer ||
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer$1[key]);
    ArrayBufferPrototype.constructor = $ArrayBuffer;
  } else
    INCORRECT_ARRAY_BUFFER_NAME &&
      CONFIGURABLE_FUNCTION_NAME &&
      createNonEnumerableProperty(NativeArrayBuffer$1, 'name', ARRAY_BUFFER$1);
  setPrototypeOf &&
    getPrototypeOf(DataViewPrototype) !== ObjectPrototype &&
    setPrototypeOf(DataViewPrototype, ObjectPrototype);
  var testView = new $DataView(new $ArrayBuffer(2)),
    $setInt8 = uncurryThis(DataViewPrototype.setInt8);
  testView.setInt8(0, 2147483648),
    testView.setInt8(1, 2147483649),
    (testView.getInt8(0) || !testView.getInt8(1)) &&
      redefineAll(
        DataViewPrototype,
        {
          setInt8: function (ee, re) {
            $setInt8(this, ee, (re << 24) >> 24);
          },
          setUint8: function (ee, re) {
            $setInt8(this, ee, (re << 24) >> 24);
          },
        },
        { unsafe: !0 },
      );
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER$1);
setToStringTag($DataView, DATA_VIEW);
var arrayBuffer = { ArrayBuffer: $ArrayBuffer, DataView: $DataView },
  $$4 = _export,
  global$1 = global$7,
  arrayBufferModule = arrayBuffer,
  setSpecies = setSpecies$1,
  ARRAY_BUFFER = 'ArrayBuffer',
  ArrayBuffer$1 = arrayBufferModule[ARRAY_BUFFER],
  NativeArrayBuffer = global$1[ARRAY_BUFFER];
$$4({ global: !0, forced: NativeArrayBuffer !== ArrayBuffer$1 }, { ArrayBuffer: ArrayBuffer$1 });
setSpecies(ARRAY_BUFFER);
var $$3 = _export;
$$3(
  { target: 'Number', stat: !0 },
  {
    isNaN: function (ee) {
      return ee != ee;
    },
  },
);
var $$2 = _export,
  repeat = stringRepeat;
$$2({ target: 'String', proto: !0 }, { repeat });
var $$1 = _export,
  fails = fails$3,
  getOwnPropertyNames = objectGetOwnPropertyNamesExternal.f,
  FAILS_ON_PRIMITIVES = fails(function () {
    return !Object.getOwnPropertyNames(1);
  });
$$1({ target: 'Object', stat: !0, forced: FAILS_ON_PRIMITIVES }, { getOwnPropertyNames });
var _templateObject$5,
  _templateObject2$1,
  _templateObject3$1,
  _templateObject4$1,
  _templateObject5,
  _templateObject6,
  _templateObject7;
function _defineProperty$6(te, ee, re) {
  return (
    ee in te
      ? Object.defineProperty(te, ee, { value: re, enumerable: !0, configurable: !0, writable: !0 })
      : (te[ee] = re),
    te
  );
}
function _slicedToArray$5(te, ee) {
  return (
    _arrayWithHoles$5(te) ||
    _iterableToArrayLimit$5(te, ee) ||
    _unsupportedIterableToArray$6(te, ee) ||
    _nonIterableRest$5()
  );
}
function _nonIterableRest$5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$6(te, ee) {
  if (!!te) {
    if (typeof te == 'string') return _arrayLikeToArray$6(te, ee);
    var re = Object.prototype.toString.call(te).slice(8, -1);
    if (
      (re === 'Object' && te.constructor && (re = te.constructor.name),
      re === 'Map' || re === 'Set')
    )
      return Array.from(te);
    if (re === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))
      return _arrayLikeToArray$6(te, ee);
  }
}
function _arrayLikeToArray$6(te, ee) {
  (ee == null || ee > te.length) && (ee = te.length);
  for (var re = 0, ae = new Array(ee); re < ee; re++) ae[re] = te[re];
  return ae;
}
function _iterableToArrayLimit$5(te, ee) {
  var re = te == null ? null : (typeof Symbol < 'u' && te[Symbol.iterator]) || te['@@iterator'];
  if (re != null) {
    var ae = [],
      ne = !0,
      oe = !1,
      ie,
      le;
    try {
      for (
        re = re.call(te);
        !(ne = (ie = re.next()).done) && (ae.push(ie.value), !(ee && ae.length === ee));
        ne = !0
      );
    } catch (ce) {
      (oe = !0), (le = ce);
    } finally {
      try {
        !ne && re.return != null && re.return();
      } finally {
        if (oe) throw le;
      }
    }
    return ae;
  }
}
function _arrayWithHoles$5(te) {
  if (Array.isArray(te)) return te;
}
function _taggedTemplateLiteral$5(te, ee) {
  return (
    ee || (ee = te.slice(0)),
    Object.freeze(Object.defineProperties(te, { raw: { value: Object.freeze(ee) } }))
  );
}
function _typeof$1(te) {
  return (
    (_typeof$1 =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (ee) {
            return typeof ee;
          }
        : function (ee) {
            return ee &&
              typeof Symbol == 'function' &&
              ee.constructor === Symbol &&
              ee !== Symbol.prototype
              ? 'symbol'
              : typeof ee;
          }),
    _typeof$1(te)
  );
}
function _extends$1$1() {
  return (
    (_extends$1$1 =
      Object.assign ||
      function (te) {
        for (var ee = 1; ee < arguments.length; ee++) {
          var re = arguments[ee];
          for (var ae in re) Object.prototype.hasOwnProperty.call(re, ae) && (te[ae] = re[ae]);
        }
        return te;
      }),
    _extends$1$1.apply(this, arguments)
  );
}
function memoize$2(te) {
  var ee = Object.create(null);
  return function (re) {
    return ee[re] === void 0 && (ee[re] = te(re)), ee[re];
  };
}
var reactPropsRegex =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  isPropValid = memoize$2(function (te) {
    return (
      reactPropsRegex.test(te) ||
      (te.charCodeAt(0) === 111 && te.charCodeAt(1) === 110 && te.charCodeAt(2) < 91)
    );
  });
function sheetForTag$1(te) {
  if (te.sheet) return te.sheet;
  for (var ee = 0; ee < document.styleSheets.length; ee++)
    if (document.styleSheets[ee].ownerNode === te) return document.styleSheets[ee];
}
function createStyleElement$1(te) {
  var ee = document.createElement('style');
  return (
    ee.setAttribute('data-emotion', te.key),
    te.nonce !== void 0 && ee.setAttribute('nonce', te.nonce),
    ee.appendChild(document.createTextNode('')),
    ee.setAttribute('data-s', ''),
    ee
  );
}
var StyleSheet$1 = (function () {
    function te(re) {
      var ae = this;
      (this._insertTag = function (ne) {
        var oe;
        ae.tags.length === 0
          ? ae.insertionPoint
            ? (oe = ae.insertionPoint.nextSibling)
            : ae.prepend
            ? (oe = ae.container.firstChild)
            : (oe = ae.before)
          : (oe = ae.tags[ae.tags.length - 1].nextSibling),
          ae.container.insertBefore(ne, oe),
          ae.tags.push(ne);
      }),
        (this.isSpeedy = re.speedy === void 0 ? !0 : re.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = re.nonce),
        (this.key = re.key),
        (this.container = re.container),
        (this.prepend = re.prepend),
        (this.insertionPoint = re.insertionPoint),
        (this.before = null);
    }
    var ee = te.prototype;
    return (
      (ee.hydrate = function (ae) {
        ae.forEach(this._insertTag);
      }),
      (ee.insert = function (ae) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement$1(this));
        var ne = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var oe = sheetForTag$1(ne);
          try {
            oe.insertRule(ae, oe.cssRules.length);
          } catch {}
        } else ne.appendChild(document.createTextNode(ae));
        this.ctr++;
      }),
      (ee.flush = function () {
        this.tags.forEach(function (ae) {
          return ae.parentNode && ae.parentNode.removeChild(ae);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      te
    );
  })(),
  MS = '-ms-',
  MOZ = '-moz-',
  WEBKIT = '-webkit-',
  COMMENT = 'comm',
  RULESET = 'rule',
  DECLARATION = 'decl',
  IMPORT = '@import',
  KEYFRAMES = '@keyframes',
  abs = Math.abs,
  from = String.fromCharCode,
  assign = Object.assign;
function hash(te, ee) {
  return (
    (((((((ee << 2) ^ charat(te, 0)) << 2) ^ charat(te, 1)) << 2) ^ charat(te, 2)) << 2) ^
    charat(te, 3)
  );
}
function trim(te) {
  return te.trim();
}
function match(te, ee) {
  return (te = ee.exec(te)) ? te[0] : te;
}
function replace(te, ee, re) {
  return te.replace(ee, re);
}
function indexof(te, ee) {
  return te.indexOf(ee);
}
function charat(te, ee) {
  return te.charCodeAt(ee) | 0;
}
function substr(te, ee, re) {
  return te.slice(ee, re);
}
function strlen(te) {
  return te.length;
}
function sizeof(te) {
  return te.length;
}
function append(te, ee) {
  return ee.push(te), te;
}
function combine(te, ee) {
  return te.map(ee).join('');
}
var line = 1,
  column = 1,
  length = 0,
  position = 0,
  character = 0,
  characters = '';
function node(te, ee, re, ae, ne, oe, ie) {
  return {
    value: te,
    root: ee,
    parent: re,
    type: ae,
    props: ne,
    children: oe,
    line,
    column,
    length: ie,
    return: '',
  };
}
function copy(te, ee) {
  return assign(node('', null, null, '', null, null, 0), te, { length: -te.length }, ee);
}
function char() {
  return character;
}
function prev() {
  return (
    (character = position > 0 ? charat(characters, --position) : 0),
    column--,
    character === 10 && ((column = 1), line--),
    character
  );
}
function next() {
  return (
    (character = position < length ? charat(characters, position++) : 0),
    column++,
    character === 10 && ((column = 1), line++),
    character
  );
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(te, ee) {
  return substr(characters, te, ee);
}
function token(te) {
  switch (te) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(te) {
  return (line = column = 1), (length = strlen((characters = te))), (position = 0), [];
}
function dealloc(te) {
  return (characters = ''), te;
}
function delimit(te) {
  return trim(slice(position - 1, delimiter(te === 91 ? te + 2 : te === 40 ? te + 1 : te)));
}
function whitespace(te) {
  for (; (character = peek()) && character < 33; ) next();
  return token(te) > 2 || token(character) > 3 ? '' : ' ';
}
function escaping(te, ee) {
  for (
    ;
    --ee &&
    next() &&
    !(
      character < 48 ||
      character > 102 ||
      (character > 57 && character < 65) ||
      (character > 70 && character < 97)
    );

  );
  return slice(te, caret() + (ee < 6 && peek() == 32 && next() == 32));
}
function delimiter(te) {
  for (; next(); )
    switch (character) {
      case te:
        return position;
      case 34:
      case 39:
        te !== 34 && te !== 39 && delimiter(character);
        break;
      case 40:
        te === 41 && delimiter(te);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(te, ee) {
  for (; next() && te + character !== 47 + 10; )
    if (te + character === 42 + 42 && peek() === 47) break;
  return '/*' + slice(ee, position - 1) + '*' + from(te === 47 ? te : next());
}
function identifier(te) {
  for (; !token(peek()); ) next();
  return slice(te, position);
}
function compile(te) {
  return dealloc(parse$3('', null, null, null, [''], (te = alloc(te)), 0, [0], te));
}
function parse$3(te, ee, re, ae, ne, oe, ie, le, ce) {
  for (
    var se = 0,
      ue = 0,
      pe = ie,
      fe = 0,
      ge = 0,
      de = 0,
      me = 1,
      he = 1,
      ve = 1,
      ye = 0,
      be = '',
      _e = ne,
      Te = oe,
      Se = ae,
      $e = be;
    he;

  )
    switch (((de = ye), (ye = next()))) {
      case 40:
        if (de != 108 && $e.charCodeAt(pe - 1) == 58) {
          indexof(($e += replace(delimit(ye), '&', '&\f')), '&\f') != -1 && (ve = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $e += delimit(ye);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $e += whitespace(de);
        break;
      case 92:
        $e += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), ee, re), ce);
            break;
          default:
            $e += '/';
        }
        break;
      case 123 * me:
        le[se++] = strlen($e) * ve;
      case 125 * me:
      case 59:
      case 0:
        switch (ye) {
          case 0:
          case 125:
            he = 0;
          case 59 + ue:
            ge > 0 &&
              strlen($e) - pe &&
              append(
                ge > 32
                  ? declaration($e + ';', ae, re, pe - 1)
                  : declaration(replace($e, ' ', '') + ';', ae, re, pe - 2),
                ce,
              );
            break;
          case 59:
            $e += ';';
          default:
            if (
              (append((Se = ruleset($e, ee, re, se, ue, ne, le, be, (_e = []), (Te = []), pe)), oe),
              ye === 123)
            )
              if (ue === 0) parse$3($e, ee, Se, Se, _e, oe, pe, le, Te);
              else
                switch (fe) {
                  case 100:
                  case 109:
                  case 115:
                    parse$3(
                      te,
                      Se,
                      Se,
                      ae && append(ruleset(te, Se, Se, 0, 0, ne, le, be, ne, (_e = []), pe), Te),
                      ne,
                      Te,
                      pe,
                      le,
                      ae ? _e : Te,
                    );
                    break;
                  default:
                    parse$3($e, Se, Se, Se, [''], Te, 0, le, Te);
                }
        }
        (se = ue = ge = 0), (me = ve = 1), (be = $e = ''), (pe = ie);
        break;
      case 58:
        (pe = 1 + strlen($e)), (ge = de);
      default:
        if (me < 1) {
          if (ye == 123) --me;
          else if (ye == 125 && me++ == 0 && prev() == 125) continue;
        }
        switch ((($e += from(ye)), ye * me)) {
          case 38:
            ve = ue > 0 ? 1 : (($e += '\f'), -1);
            break;
          case 44:
            (le[se++] = (strlen($e) - 1) * ve), (ve = 1);
            break;
          case 64:
            peek() === 45 && ($e += delimit(next())),
              (fe = peek()),
              (ue = pe = strlen((be = $e += identifier(caret())))),
              ye++;
            break;
          case 45:
            de === 45 && strlen($e) == 2 && (me = 0);
        }
    }
  return oe;
}
function ruleset(te, ee, re, ae, ne, oe, ie, le, ce, se, ue) {
  for (
    var pe = ne - 1, fe = ne === 0 ? oe : [''], ge = sizeof(fe), de = 0, me = 0, he = 0;
    de < ae;
    ++de
  )
    for (var ve = 0, ye = substr(te, pe + 1, (pe = abs((me = ie[de])))), be = te; ve < ge; ++ve)
      (be = trim(me > 0 ? fe[ve] + ' ' + ye : replace(ye, /&\f/g, fe[ve]))) && (ce[he++] = be);
  return node(te, ee, re, ne === 0 ? RULESET : le, ce, se, ue);
}
function comment(te, ee, re) {
  return node(te, ee, re, COMMENT, from(char()), substr(te, 2, -2), 0);
}
function declaration(te, ee, re, ae) {
  return node(te, ee, re, DECLARATION, substr(te, 0, ae), substr(te, ae + 1, -1), ae);
}
function prefix(te, ee) {
  switch (hash(te, ee)) {
    case 5103:
      return WEBKIT + 'print-' + te + te;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + te + te;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + te + MOZ + te + MS + te + te;
    case 6828:
    case 4268:
      return WEBKIT + te + MS + te + te;
    case 6165:
      return WEBKIT + te + MS + 'flex-' + te + te;
    case 5187:
      return (
        WEBKIT + te + replace(te, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + te
      );
    case 5443:
      return WEBKIT + te + MS + 'flex-item-' + replace(te, /flex-|-self/, '') + te;
    case 4675:
      return (
        WEBKIT + te + MS + 'flex-line-pack' + replace(te, /align-content|flex-|-self/, '') + te
      );
    case 5548:
      return WEBKIT + te + MS + replace(te, 'shrink', 'negative') + te;
    case 5292:
      return WEBKIT + te + MS + replace(te, 'basis', 'preferred-size') + te;
    case 6060:
      return (
        WEBKIT +
        'box-' +
        replace(te, '-grow', '') +
        WEBKIT +
        te +
        MS +
        replace(te, 'grow', 'positive') +
        te
      );
    case 4554:
      return WEBKIT + replace(te, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + te;
    case 6187:
      return (
        replace(
          replace(replace(te, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'),
          te,
          '',
        ) + te
      );
    case 5495:
    case 3959:
      return replace(te, /(image-set\([^]*)/, WEBKIT + '$1$`$1');
    case 4968:
      return (
        replace(
          replace(te, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        WEBKIT +
        te +
        te
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(te, /(.+)-inline(.+)/, WEBKIT + '$1$2') + te;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(te) - 1 - ee > 6)
        switch (charat(te, ee + 1)) {
          case 109:
            if (charat(te, ee + 4) !== 45) break;
          case 102:
            return (
              replace(
                te,
                /(.+:)(.+)-([^]+)/,
                '$1' + WEBKIT + '$2-$3$1' + MOZ + (charat(te, ee + 3) == 108 ? '$3' : '$2-$3'),
              ) + te
            );
          case 115:
            return ~indexof(te, 'stretch')
              ? prefix(replace(te, 'stretch', 'fill-available'), ee) + te
              : te;
        }
      break;
    case 4949:
      if (charat(te, ee + 1) !== 115) break;
    case 6444:
      switch (charat(te, strlen(te) - 3 - (~indexof(te, '!important') && 10))) {
        case 107:
          return replace(te, ':', ':' + WEBKIT) + te;
        case 101:
          return (
            replace(
              te,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                WEBKIT +
                (charat(te, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                WEBKIT +
                '$2$3$1' +
                MS +
                '$2box$3',
            ) + te
          );
      }
      break;
    case 5936:
      switch (charat(te, ee + 11)) {
        case 114:
          return WEBKIT + te + MS + replace(te, /[svh]\w+-[tblr]{2}/, 'tb') + te;
        case 108:
          return WEBKIT + te + MS + replace(te, /[svh]\w+-[tblr]{2}/, 'tb-rl') + te;
        case 45:
          return WEBKIT + te + MS + replace(te, /[svh]\w+-[tblr]{2}/, 'lr') + te;
      }
      return WEBKIT + te + MS + te + te;
  }
  return te;
}
function serialize(te, ee) {
  for (var re = '', ae = sizeof(te), ne = 0; ne < ae; ne++) re += ee(te[ne], ne, te, ee) || '';
  return re;
}
function stringify(te, ee, re, ae) {
  switch (te.type) {
    case IMPORT:
    case DECLARATION:
      return (te.return = te.return || te.value);
    case COMMENT:
      return '';
    case KEYFRAMES:
      return (te.return = te.value + '{' + serialize(te.children, ae) + '}');
    case RULESET:
      te.value = te.props.join(',');
  }
  return strlen((re = serialize(te.children, ae))) ? (te.return = te.value + '{' + re + '}') : '';
}
function middleware(te) {
  var ee = sizeof(te);
  return function (re, ae, ne, oe) {
    for (var ie = '', le = 0; le < ee; le++) ie += te[le](re, ae, ne, oe) || '';
    return ie;
  };
}
function rulesheet(te) {
  return function (ee) {
    ee.root || ((ee = ee.return) && te(ee));
  };
}
function prefixer(te, ee, re, ae) {
  if (te.length > -1 && !te.return)
    switch (te.type) {
      case DECLARATION:
        te.return = prefix(te.value, te.length);
        break;
      case KEYFRAMES:
        return serialize([copy(te, { value: replace(te.value, '@', '@' + WEBKIT) })], ae);
      case RULESET:
        if (te.length)
          return combine(te.props, function (ne) {
            switch (match(ne, /(::plac\w+|:read-\w+)/)) {
              case ':read-only':
              case ':read-write':
                return serialize(
                  [copy(te, { props: [replace(ne, /:(read-\w+)/, ':' + MOZ + '$1')] })],
                  ae,
                );
              case '::placeholder':
                return serialize(
                  [
                    copy(te, { props: [replace(ne, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')] }),
                    copy(te, { props: [replace(ne, /:(plac\w+)/, ':' + MOZ + '$1')] }),
                    copy(te, { props: [replace(ne, /:(plac\w+)/, MS + 'input-$1')] }),
                  ],
                  ae,
                );
            }
            return '';
          });
    }
}
var weakMemoize = function (ee) {
    var re = new WeakMap();
    return function (ae) {
      if (re.has(ae)) return re.get(ae);
      var ne = ee(ae);
      return re.set(ae, ne), ne;
    };
  },
  identifierWithPointTracking = function (ee, re, ae) {
    for (
      var ne = 0, oe = 0;
      (ne = oe), (oe = peek()), ne === 38 && oe === 12 && (re[ae] = 1), !token(oe);

    )
      next();
    return slice(ee, position);
  },
  toRules = function (ee, re) {
    var ae = -1,
      ne = 44;
    do
      switch (token(ne)) {
        case 0:
          ne === 38 && peek() === 12 && (re[ae] = 1),
            (ee[ae] += identifierWithPointTracking(position - 1, re, ae));
          break;
        case 2:
          ee[ae] += delimit(ne);
          break;
        case 4:
          if (ne === 44) {
            (ee[++ae] = peek() === 58 ? '&\f' : ''), (re[ae] = ee[ae].length);
            break;
          }
        default:
          ee[ae] += from(ne);
      }
    while ((ne = next()));
    return ee;
  },
  getRules = function (ee, re) {
    return dealloc(toRules(alloc(ee), re));
  },
  fixedElements = new WeakMap(),
  compat = function (ee) {
    if (!(ee.type !== 'rule' || !ee.parent || ee.length < 1)) {
      for (
        var re = ee.value, ae = ee.parent, ne = ee.column === ae.column && ee.line === ae.line;
        ae.type !== 'rule';

      )
        if (((ae = ae.parent), !ae)) return;
      if (!(ee.props.length === 1 && re.charCodeAt(0) !== 58 && !fixedElements.get(ae)) && !ne) {
        fixedElements.set(ee, !0);
        for (
          var oe = [], ie = getRules(re, oe), le = ae.props, ce = 0, se = 0;
          ce < ie.length;
          ce++
        )
          for (var ue = 0; ue < le.length; ue++, se++)
            ee.props[se] = oe[ce] ? ie[ce].replace(/&\f/g, le[ue]) : le[ue] + ' ' + ie[ce];
      }
    }
  },
  removeLabel = function (ee) {
    if (ee.type === 'decl') {
      var re = ee.value;
      re.charCodeAt(0) === 108 && re.charCodeAt(2) === 98 && ((ee.return = ''), (ee.value = ''));
    }
  },
  isBrowser$6 = typeof document < 'u',
  getServerStylisCache = isBrowser$6
    ? void 0
    : weakMemoize(function () {
        return memoize$2(function () {
          var te = {};
          return function (ee) {
            return te[ee];
          };
        });
      }),
  defaultStylisPlugins = [prefixer],
  createCache = function (ee) {
    var re = ee.key;
    if (isBrowser$6 && re === 'css') {
      var ae = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(ae, function (_e) {
        var Te = _e.getAttribute('data-emotion');
        Te.indexOf(' ') !== -1 && (document.head.appendChild(_e), _e.setAttribute('data-s', ''));
      });
    }
    var ne = ee.stylisPlugins || defaultStylisPlugins,
      oe = {},
      ie,
      le = [];
    isBrowser$6 &&
      ((ie = ee.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + re + ' "]'),
        function (_e) {
          for (var Te = _e.getAttribute('data-emotion').split(' '), Se = 1; Se < Te.length; Se++)
            oe[Te[Se]] = !0;
          le.push(_e);
        },
      ));
    var ce,
      se = [compat, removeLabel];
    if (isBrowser$6) {
      var ue,
        pe = [
          stringify,
          rulesheet(function (_e) {
            ue.insert(_e);
          }),
        ],
        fe = middleware(se.concat(ne, pe)),
        ge = function (Te) {
          return serialize(compile(Te), fe);
        };
      ce = function (Te, Se, $e, Ee) {
        (ue = $e),
          ge(Te ? Te + '{' + Se.styles + '}' : Se.styles),
          Ee && (be.inserted[Se.name] = !0);
      };
    } else {
      var de = [stringify],
        me = middleware(se.concat(ne, de)),
        he = function (Te) {
          return serialize(compile(Te), me);
        },
        ve = getServerStylisCache(ne)(re),
        ye = function (Te, Se) {
          var $e = Se.name;
          return (
            ve[$e] === void 0 && (ve[$e] = he(Te ? Te + '{' + Se.styles + '}' : Se.styles)), ve[$e]
          );
        };
      ce = function (Te, Se, $e, Ee) {
        var xe = Se.name,
          Ae = ye(Te, Se);
        if (be.compat === void 0) return Ee && (be.inserted[xe] = !0), Ae;
        if (Ee) be.inserted[xe] = Ae;
        else return Ae;
      };
    }
    var be = {
      key: re,
      sheet: new StyleSheet$1({
        key: re,
        container: ie,
        nonce: ee.nonce,
        speedy: ee.speedy,
        prepend: ee.prepend,
        insertionPoint: ee.insertionPoint,
      }),
      nonce: ee.nonce,
      inserted: oe,
      registered: {},
      insert: ce,
    };
    return be.sheet.hydrate(le), be;
  },
  commonjsGlobal$1 =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  reactIs$1 = { exports: {} },
  reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b$1 = typeof Symbol == 'function' && Symbol.for,
  c$1 = b$1 ? Symbol.for('react.element') : 60103,
  d$1 = b$1 ? Symbol.for('react.portal') : 60106,
  e$1 = b$1 ? Symbol.for('react.fragment') : 60107,
  f$1 = b$1 ? Symbol.for('react.strict_mode') : 60108,
  g$1 = b$1 ? Symbol.for('react.profiler') : 60114,
  h$1 = b$1 ? Symbol.for('react.provider') : 60109,
  k$1 = b$1 ? Symbol.for('react.context') : 60110,
  l$1 = b$1 ? Symbol.for('react.async_mode') : 60111,
  m$1 = b$1 ? Symbol.for('react.concurrent_mode') : 60111,
  n$1 = b$1 ? Symbol.for('react.forward_ref') : 60112,
  p$1 = b$1 ? Symbol.for('react.suspense') : 60113,
  q$1 = b$1 ? Symbol.for('react.suspense_list') : 60120,
  r$1 = b$1 ? Symbol.for('react.memo') : 60115,
  t = b$1 ? Symbol.for('react.lazy') : 60116,
  v$1 = b$1 ? Symbol.for('react.block') : 60121,
  w$1 = b$1 ? Symbol.for('react.fundamental') : 60117,
  x$1 = b$1 ? Symbol.for('react.responder') : 60118,
  y$1 = b$1 ? Symbol.for('react.scope') : 60119;
function z$1(te) {
  if (_typeof$1(te) === 'object' && te !== null) {
    var ee = te.$$typeof;
    switch (ee) {
      case c$1:
        switch (((te = te.type), te)) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return te;
          default:
            switch (((te = te && te.$$typeof), te)) {
              case k$1:
              case n$1:
              case t:
              case r$1:
              case h$1:
                return te;
              default:
                return ee;
            }
        }
      case d$1:
        return ee;
    }
  }
}
function A$4(te) {
  return z$1(te) === m$1;
}
reactIs_production_min.AsyncMode = l$1;
reactIs_production_min.ConcurrentMode = m$1;
reactIs_production_min.ContextConsumer = k$1;
reactIs_production_min.ContextProvider = h$1;
reactIs_production_min.Element = c$1;
reactIs_production_min.ForwardRef = n$1;
reactIs_production_min.Fragment = e$1;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r$1;
reactIs_production_min.Portal = d$1;
reactIs_production_min.Profiler = g$1;
reactIs_production_min.StrictMode = f$1;
reactIs_production_min.Suspense = p$1;
reactIs_production_min.isAsyncMode = function (te) {
  return A$4(te) || z$1(te) === l$1;
};
reactIs_production_min.isConcurrentMode = A$4;
reactIs_production_min.isContextConsumer = function (te) {
  return z$1(te) === k$1;
};
reactIs_production_min.isContextProvider = function (te) {
  return z$1(te) === h$1;
};
reactIs_production_min.isElement = function (te) {
  return _typeof$1(te) === 'object' && te !== null && te.$$typeof === c$1;
};
reactIs_production_min.isForwardRef = function (te) {
  return z$1(te) === n$1;
};
reactIs_production_min.isFragment = function (te) {
  return z$1(te) === e$1;
};
reactIs_production_min.isLazy = function (te) {
  return z$1(te) === t;
};
reactIs_production_min.isMemo = function (te) {
  return z$1(te) === r$1;
};
reactIs_production_min.isPortal = function (te) {
  return z$1(te) === d$1;
};
reactIs_production_min.isProfiler = function (te) {
  return z$1(te) === g$1;
};
reactIs_production_min.isStrictMode = function (te) {
  return z$1(te) === f$1;
};
reactIs_production_min.isSuspense = function (te) {
  return z$1(te) === p$1;
};
reactIs_production_min.isValidElementType = function (te) {
  return (
    typeof te == 'string' ||
    typeof te == 'function' ||
    te === e$1 ||
    te === m$1 ||
    te === g$1 ||
    te === f$1 ||
    te === p$1 ||
    te === q$1 ||
    (_typeof$1(te) === 'object' &&
      te !== null &&
      (te.$$typeof === t ||
        te.$$typeof === r$1 ||
        te.$$typeof === h$1 ||
        te.$$typeof === k$1 ||
        te.$$typeof === n$1 ||
        te.$$typeof === w$1 ||
        te.$$typeof === x$1 ||
        te.$$typeof === y$1 ||
        te.$$typeof === v$1))
  );
};
reactIs_production_min.typeOf = z$1;
reactIs$1.exports = reactIs_production_min;
var reactIs = reactIs$1.exports,
  FORWARD_REF_STATICS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  MEMO_STATICS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser$5 = typeof document < 'u',
  registerStyles$1 = function (ee, re, ae) {
    var ne = ee.key + '-' + re.name;
    (ae === !1 || (isBrowser$5 === !1 && ee.compat !== void 0)) &&
      ee.registered[ne] === void 0 &&
      (ee.registered[ne] = re.styles);
  },
  insertStyles$1 = function (ee, re, ae) {
    registerStyles$1(ee, re, ae);
    var ne = ee.key + '-' + re.name;
    if (ee.inserted[re.name] === void 0) {
      var oe = '',
        ie = re;
      do {
        var le = ee.insert(re === ie ? '.' + ne : '', ie, ee.sheet, !0);
        !isBrowser$5 && le !== void 0 && (oe += le), (ie = ie.next);
      } while (ie !== void 0);
      if (!isBrowser$5 && oe.length !== 0) return oe;
    }
  };
function murmur2(te) {
  for (var ee = 0, re, ae = 0, ne = te.length; ne >= 4; ++ae, ne -= 4)
    (re =
      (te.charCodeAt(ae) & 255) |
      ((te.charCodeAt(++ae) & 255) << 8) |
      ((te.charCodeAt(++ae) & 255) << 16) |
      ((te.charCodeAt(++ae) & 255) << 24)),
      (re = (re & 65535) * 1540483477 + (((re >>> 16) * 59797) << 16)),
      (re ^= re >>> 24),
      (ee =
        ((re & 65535) * 1540483477 + (((re >>> 16) * 59797) << 16)) ^
        ((ee & 65535) * 1540483477 + (((ee >>> 16) * 59797) << 16)));
  switch (ne) {
    case 3:
      ee ^= (te.charCodeAt(ae + 2) & 255) << 16;
    case 2:
      ee ^= (te.charCodeAt(ae + 1) & 255) << 8;
    case 1:
      (ee ^= te.charCodeAt(ae) & 255),
        (ee = (ee & 65535) * 1540483477 + (((ee >>> 16) * 59797) << 16));
  }
  return (
    (ee ^= ee >>> 13),
    (ee = (ee & 65535) * 1540483477 + (((ee >>> 16) * 59797) << 16)),
    ((ee ^ (ee >>> 15)) >>> 0).toString(36)
  );
}
var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  hyphenateRegex$1 = /[A-Z]|^ms/g,
  animationRegex$1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  isCustomProperty$1 = function (ee) {
    return ee.charCodeAt(1) === 45;
  },
  isProcessableValue$1 = function (ee) {
    return ee != null && typeof ee != 'boolean';
  },
  processStyleName$1 = memoize$2(function (te) {
    return isCustomProperty$1(te) ? te : te.replace(hyphenateRegex$1, '-$&').toLowerCase();
  }),
  processStyleValue$1 = function (ee, re) {
    switch (ee) {
      case 'animation':
      case 'animationName':
        if (typeof re == 'string')
          return re.replace(animationRegex$1, function (ae, ne, oe) {
            return (cursor$1 = { name: ne, styles: oe, next: cursor$1 }), ne;
          });
    }
    return unitlessKeys[ee] !== 1 && !isCustomProperty$1(ee) && typeof re == 'number' && re !== 0
      ? re + 'px'
      : re;
  };
function handleInterpolation$1(te, ee, re) {
  if (re == null) return '';
  if (re.__emotion_styles !== void 0) return re;
  switch (_typeof$1(re)) {
    case 'boolean':
      return '';
    case 'object': {
      if (re.anim === 1)
        return (cursor$1 = { name: re.name, styles: re.styles, next: cursor$1 }), re.name;
      if (re.styles !== void 0) {
        var ae = re.next;
        if (ae !== void 0)
          for (; ae !== void 0; )
            (cursor$1 = { name: ae.name, styles: ae.styles, next: cursor$1 }), (ae = ae.next);
        var ne = re.styles + ';';
        return ne;
      }
      return createStringFromObject$1(te, ee, re);
    }
    case 'function': {
      if (te !== void 0) {
        var oe = cursor$1,
          ie = re(te);
        return (cursor$1 = oe), handleInterpolation$1(te, ee, ie);
      }
      break;
    }
  }
  if (ee == null) return re;
  var le = ee[re];
  return le !== void 0 ? le : re;
}
function createStringFromObject$1(te, ee, re) {
  var ae = '';
  if (Array.isArray(re))
    for (var ne = 0; ne < re.length; ne++) ae += handleInterpolation$1(te, ee, re[ne]) + ';';
  else
    for (var oe in re) {
      var ie = re[oe];
      if (_typeof$1(ie) !== 'object')
        ee != null && ee[ie] !== void 0
          ? (ae += oe + '{' + ee[ie] + '}')
          : isProcessableValue$1(ie) &&
            (ae += processStyleName$1(oe) + ':' + processStyleValue$1(oe, ie) + ';');
      else if (
        Array.isArray(ie) &&
        typeof ie[0] == 'string' &&
        (ee == null || ee[ie[0]] === void 0)
      )
        for (var le = 0; le < ie.length; le++)
          isProcessableValue$1(ie[le]) &&
            (ae += processStyleName$1(oe) + ':' + processStyleValue$1(oe, ie[le]) + ';');
      else {
        var ce = handleInterpolation$1(te, ee, ie);
        switch (oe) {
          case 'animation':
          case 'animationName': {
            ae += processStyleName$1(oe) + ':' + ce + ';';
            break;
          }
          default:
            ae += oe + '{' + ce + '}';
        }
      }
    }
  return ae;
}
var labelPattern$1 = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  cursor$1,
  serializeStyles$1 = function (ee, re, ae) {
    if (
      ee.length === 1 &&
      _typeof$1(ee[0]) === 'object' &&
      ee[0] !== null &&
      ee[0].styles !== void 0
    )
      return ee[0];
    var ne = !0,
      oe = '';
    cursor$1 = void 0;
    var ie = ee[0];
    ie == null || ie.raw === void 0
      ? ((ne = !1), (oe += handleInterpolation$1(ae, re, ie)))
      : (oe += ie[0]);
    for (var le = 1; le < ee.length; le++)
      (oe += handleInterpolation$1(ae, re, ee[le])), ne && (oe += ie[le]);
    labelPattern$1.lastIndex = 0;
    for (var ce = '', se; (se = labelPattern$1.exec(oe)) !== null; ) ce += '-' + se[1];
    var ue = murmur2(oe) + ce;
    return { name: ue, styles: oe, next: cursor$1 };
  },
  isBrowser$4 = typeof document < 'u',
  EmotionCacheContext = B$1(typeof HTMLElement < 'u' ? createCache({ key: 'css' }) : null);
EmotionCacheContext.Provider;
var withEmotionCache = function (ee) {
  return R$1(function (re, ae) {
    var ne = q$2(EmotionCacheContext);
    return ee(re, ne, ae);
  });
};
isBrowser$4 ||
  (withEmotionCache = function (ee) {
    return function (re) {
      var ae = q$2(EmotionCacheContext);
      return ae === null
        ? ((ae = createCache({ key: 'css' })),
          h$2(EmotionCacheContext.Provider, { value: ae }, ee(re, ae)))
        : ee(re, ae);
    };
  });
var ThemeContext = B$1({}),
  useTheme$1 = function () {
    return q$2(ThemeContext);
  },
  getTheme = function (ee, re) {
    if (typeof re == 'function') {
      var ae = re(ee);
      return ae;
    }
    return _extends$1$1({}, ee, re);
  },
  createCacheWithTheme = weakMemoize(function (te) {
    return weakMemoize(function (ee) {
      return getTheme(te, ee);
    });
  }),
  ThemeProvider = function (ee) {
    var re = q$2(ThemeContext);
    return (
      ee.theme !== re && (re = createCacheWithTheme(re)(ee.theme)),
      h$2(ThemeContext.Provider, { value: re }, ee.children)
    );
  };
React['useInsertionEffect'] && React['useInsertionEffect'];
function sheetForTag(te) {
  if (te.sheet) return te.sheet;
  for (var ee = 0; ee < document.styleSheets.length; ee++)
    if (document.styleSheets[ee].ownerNode === te) return document.styleSheets[ee];
}
function createStyleElement(te) {
  var ee = document.createElement('style');
  return (
    ee.setAttribute('data-emotion', te.key),
    te.nonce !== void 0 && ee.setAttribute('nonce', te.nonce),
    ee.appendChild(document.createTextNode('')),
    ee.setAttribute('data-s', ''),
    ee
  );
}
var StyleSheet = (function () {
    function te(re) {
      var ae = this;
      (this._insertTag = function (ne) {
        var oe;
        ae.tags.length === 0
          ? ae.insertionPoint
            ? (oe = ae.insertionPoint.nextSibling)
            : ae.prepend
            ? (oe = ae.container.firstChild)
            : (oe = ae.before)
          : (oe = ae.tags[ae.tags.length - 1].nextSibling),
          ae.container.insertBefore(ne, oe),
          ae.tags.push(ne);
      }),
        (this.isSpeedy = re.speedy === void 0 ? !0 : re.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = re.nonce),
        (this.key = re.key),
        (this.container = re.container),
        (this.prepend = re.prepend),
        (this.insertionPoint = re.insertionPoint),
        (this.before = null);
    }
    var ee = te.prototype;
    return (
      (ee.hydrate = function (ae) {
        ae.forEach(this._insertTag);
      }),
      (ee.insert = function (ae) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(createStyleElement(this));
        var ne = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var oe = sheetForTag(ne);
          try {
            oe.insertRule(ae, oe.cssRules.length);
          } catch {}
        } else ne.appendChild(document.createTextNode(ae));
        this.ctr++;
      }),
      (ee.flush = function () {
        this.tags.forEach(function (ae) {
          return ae.parentNode && ae.parentNode.removeChild(ae);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      te
    );
  })(),
  useInsertionEffect$1 = React['useInsertionEffect'] ? React['useInsertionEffect'] : s$1,
  Global$1 = withEmotionCache(function (te, ee) {
    var re = te.styles,
      ae = serializeStyles$1([re], void 0, q$2(ThemeContext));
    if (!isBrowser$4) {
      for (var ne, oe = ae.name, ie = ae.styles, le = ae.next; le !== void 0; )
        (oe += ' ' + le.name), (ie += le.styles), (le = le.next);
      var ce = ee.compat === !0,
        se = ee.insert('', { name: oe, styles: ie }, ee.sheet, ce);
      return ce
        ? null
        : h$2(
            'style',
            ((ne = {}),
            (ne['data-emotion'] = ee.key + '-global ' + oe),
            (ne.dangerouslySetInnerHTML = { __html: se }),
            (ne.nonce = ee.sheet.nonce),
            ne),
          );
    }
    var ue = _();
    return (
      useInsertionEffect$1(
        function () {
          var pe = ee.key + '-global',
            fe = new StyleSheet({
              key: pe,
              nonce: ee.sheet.nonce,
              container: ee.sheet.container,
              speedy: ee.sheet.isSpeedy,
            }),
            ge = !1,
            de = document.querySelector('style[data-emotion="' + pe + ' ' + ae.name + '"]');
          return (
            ee.sheet.tags.length && (fe.before = ee.sheet.tags[0]),
            de !== null && ((ge = !0), de.setAttribute('data-emotion', pe), fe.hydrate([de])),
            (ue.current = [fe, ge]),
            function () {
              fe.flush();
            }
          );
        },
        [ee],
      ),
      useInsertionEffect$1(
        function () {
          var pe = ue.current,
            fe = pe[0],
            ge = pe[1];
          if (ge) {
            pe[1] = !1;
            return;
          }
          if ((ae.next !== void 0 && insertStyles$1(ee, ae.next, !0), fe.tags.length)) {
            var de = fe.tags[fe.tags.length - 1].nextElementSibling;
            (fe.before = de), fe.flush();
          }
          ee.insert('', ae, fe, !1);
        },
        [ee, ae.name],
      ),
      null
    );
  });
function css() {
  for (var te = arguments.length, ee = new Array(te), re = 0; re < te; re++) ee[re] = arguments[re];
  return serializeStyles$1(ee);
}
var keyframes = function () {
    var ee = css.apply(void 0, arguments),
      re = 'animation-' + ee.name;
    return {
      name: re,
      styles: '@keyframes ' + re + '{' + ee.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  isBrowser$2 = typeof document < 'u';
function getRegisteredStyles(te, ee, re) {
  var ae = '';
  return (
    re.split(' ').forEach(function (ne) {
      te[ne] !== void 0 ? ee.push(te[ne] + ';') : (ae += ne + ' ');
    }),
    ae
  );
}
var registerStyles = function (ee, re, ae) {
    var ne = ee.key + '-' + re.name;
    (ae === !1 || (isBrowser$2 === !1 && ee.compat !== void 0)) &&
      ee.registered[ne] === void 0 &&
      (ee.registered[ne] = re.styles);
  },
  insertStyles = function (ee, re, ae) {
    registerStyles(ee, re, ae);
    var ne = ee.key + '-' + re.name;
    if (ee.inserted[re.name] === void 0) {
      var oe = '',
        ie = re;
      do {
        var le = ee.insert(re === ie ? '.' + ne : '', ie, ee.sheet, !0);
        !isBrowser$2 && le !== void 0 && (oe += le), (ie = ie.next);
      } while (ie !== void 0);
      if (!isBrowser$2 && oe.length !== 0) return oe;
    }
  },
  hyphenateRegex = /[A-Z]|^ms/g,
  animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  isCustomProperty = function (ee) {
    return ee.charCodeAt(1) === 45;
  },
  isProcessableValue = function (ee) {
    return ee != null && typeof ee != 'boolean';
  },
  processStyleName = memoize$2(function (te) {
    return isCustomProperty(te) ? te : te.replace(hyphenateRegex, '-$&').toLowerCase();
  }),
  processStyleValue = function (ee, re) {
    switch (ee) {
      case 'animation':
      case 'animationName':
        if (typeof re == 'string')
          return re.replace(animationRegex, function (ae, ne, oe) {
            return (cursor = { name: ne, styles: oe, next: cursor }), ne;
          });
    }
    return unitlessKeys[ee] !== 1 && !isCustomProperty(ee) && typeof re == 'number' && re !== 0
      ? re + 'px'
      : re;
  };
function handleInterpolation(te, ee, re) {
  if (re == null) return '';
  if (re.__emotion_styles !== void 0) return re;
  switch (_typeof$1(re)) {
    case 'boolean':
      return '';
    case 'object': {
      if (re.anim === 1)
        return (cursor = { name: re.name, styles: re.styles, next: cursor }), re.name;
      if (re.styles !== void 0) {
        var ae = re.next;
        if (ae !== void 0)
          for (; ae !== void 0; )
            (cursor = { name: ae.name, styles: ae.styles, next: cursor }), (ae = ae.next);
        var ne = re.styles + ';';
        return ne;
      }
      return createStringFromObject(te, ee, re);
    }
    case 'function': {
      if (te !== void 0) {
        var oe = cursor,
          ie = re(te);
        return (cursor = oe), handleInterpolation(te, ee, ie);
      }
      break;
    }
  }
  if (ee == null) return re;
  var le = ee[re];
  return le !== void 0 ? le : re;
}
function createStringFromObject(te, ee, re) {
  var ae = '';
  if (Array.isArray(re))
    for (var ne = 0; ne < re.length; ne++) ae += handleInterpolation(te, ee, re[ne]) + ';';
  else
    for (var oe in re) {
      var ie = re[oe];
      if (_typeof$1(ie) !== 'object')
        ee != null && ee[ie] !== void 0
          ? (ae += oe + '{' + ee[ie] + '}')
          : isProcessableValue(ie) &&
            (ae += processStyleName(oe) + ':' + processStyleValue(oe, ie) + ';');
      else if (
        Array.isArray(ie) &&
        typeof ie[0] == 'string' &&
        (ee == null || ee[ie[0]] === void 0)
      )
        for (var le = 0; le < ie.length; le++)
          isProcessableValue(ie[le]) &&
            (ae += processStyleName(oe) + ':' + processStyleValue(oe, ie[le]) + ';');
      else {
        var ce = handleInterpolation(te, ee, ie);
        switch (oe) {
          case 'animation':
          case 'animationName': {
            ae += processStyleName(oe) + ':' + ce + ';';
            break;
          }
          default:
            ae += oe + '{' + ce + '}';
        }
      }
    }
  return ae;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  cursor,
  serializeStyles = function (ee, re, ae) {
    if (
      ee.length === 1 &&
      _typeof$1(ee[0]) === 'object' &&
      ee[0] !== null &&
      ee[0].styles !== void 0
    )
      return ee[0];
    var ne = !0,
      oe = '';
    cursor = void 0;
    var ie = ee[0];
    ie == null || ie.raw === void 0
      ? ((ne = !1), (oe += handleInterpolation(ae, re, ie)))
      : (oe += ie[0]);
    for (var le = 1; le < ee.length; le++)
      (oe += handleInterpolation(ae, re, ee[le])), ne && (oe += ie[le]);
    labelPattern.lastIndex = 0;
    for (var ce = '', se; (se = labelPattern.exec(oe)) !== null; ) ce += '-' + se[1];
    var ue = murmur2(oe) + ce;
    return { name: ue, styles: oe, next: cursor };
  },
  testOmitPropsOnStringTag = isPropValid,
  testOmitPropsOnComponent = function (ee) {
    return ee !== 'theme';
  },
  getDefaultShouldForwardProp = function (ee) {
    return typeof ee == 'string' && ee.charCodeAt(0) > 96
      ? testOmitPropsOnStringTag
      : testOmitPropsOnComponent;
  },
  composeShouldForwardProps = function (ee, re, ae) {
    var ne;
    if (re) {
      var oe = re.shouldForwardProp;
      ne =
        ee.__emotion_forwardProp && oe
          ? function (ie) {
              return ee.__emotion_forwardProp(ie) && oe(ie);
            }
          : oe;
    }
    return typeof ne != 'function' && ae && (ne = ee.__emotion_forwardProp), ne;
  },
  isBrowser = typeof document < 'u',
  useInsertionEffect = React['useInsertionEffect']
    ? React['useInsertionEffect']
    : function (ee) {
        ee();
      };
function useInsertionEffectMaybe(te) {
  if (!isBrowser) return te();
  useInsertionEffect(te);
}
var isBrowser$1 = typeof document < 'u',
  Insertion = function (ee) {
    var re = ee.cache,
      ae = ee.serialized,
      ne = ee.isStringTag;
    registerStyles(re, ae, ne);
    var oe = useInsertionEffectMaybe(function () {
      return insertStyles(re, ae, ne);
    });
    if (!isBrowser$1 && oe !== void 0) {
      for (var ie, le = ae.name, ce = ae.next; ce !== void 0; )
        (le += ' ' + ce.name), (ce = ce.next);
      return h$2(
        'style',
        ((ie = {}),
        (ie['data-emotion'] = re.key + ' ' + le),
        (ie.dangerouslySetInnerHTML = { __html: oe }),
        (ie.nonce = re.sheet.nonce),
        ie),
      );
    }
    return null;
  },
  createStyled = function te(ee, re) {
    var ae = ee.__emotion_real === ee,
      ne = (ae && ee.__emotion_base) || ee,
      oe,
      ie;
    re !== void 0 && ((oe = re.label), (ie = re.target));
    var le = composeShouldForwardProps(ee, re, ae),
      ce = le || getDefaultShouldForwardProp(ne),
      se = !ce('as');
    return function () {
      var ue = arguments,
        pe = ae && ee.__emotion_styles !== void 0 ? ee.__emotion_styles.slice(0) : [];
      if ((oe !== void 0 && pe.push('label:' + oe + ';'), ue[0] == null || ue[0].raw === void 0))
        pe.push.apply(pe, ue);
      else {
        pe.push(ue[0][0]);
        for (var fe = ue.length, ge = 1; ge < fe; ge++) pe.push(ue[ge], ue[0][ge]);
      }
      var de = withEmotionCache(function (me, he, ve) {
        var ye = (se && me.as) || ne,
          be = '',
          _e = [],
          Te = me;
        if (me.theme == null) {
          Te = {};
          for (var Se in me) Te[Se] = me[Se];
          Te.theme = q$2(ThemeContext);
        }
        typeof me.className == 'string'
          ? (be = getRegisteredStyles(he.registered, _e, me.className))
          : me.className != null && (be = me.className + ' ');
        var $e = serializeStyles(pe.concat(_e), he.registered, Te);
        (be += he.key + '-' + $e.name), ie !== void 0 && (be += ' ' + ie);
        var Ee = se && le === void 0 ? getDefaultShouldForwardProp(ye) : ce,
          xe = {};
        for (var Ae in me) (se && Ae === 'as') || (Ee(Ae) && (xe[Ae] = me[Ae]));
        return (
          (xe.className = be),
          (xe.ref = ve),
          h$2(
            p$2,
            null,
            h$2(Insertion, { cache: he, serialized: $e, isStringTag: typeof ye == 'string' }),
            h$2(ye, xe),
          )
        );
      });
      return (
        (de.displayName =
          oe !== void 0
            ? oe
            : 'Styled(' +
              (typeof ne == 'string' ? ne : ne.displayName || ne.name || 'Component') +
              ')'),
        (de.defaultProps = ee.defaultProps),
        (de.__emotion_real = de),
        (de.__emotion_base = ne),
        (de.__emotion_styles = pe),
        (de.__emotion_forwardProp = le),
        Object.defineProperty(de, 'toString', {
          value: function () {
            return '.' + ie;
          },
        }),
        (de.withComponent = function (me, he) {
          return te(
            me,
            _extends$1$1({}, re, he, { shouldForwardProp: composeShouldForwardProps(de, he, !0) }),
          ).apply(void 0, pe);
        }),
        de
      );
    };
  },
  tags = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  newStyled = createStyled.bind();
tags.forEach(function (te) {
  newStyled[te] = newStyled(te);
});
function _extends$2() {
  return (
    (_extends$2 =
      Object.assign ||
      function (te) {
        for (var ee = 1; ee < arguments.length; ee++) {
          var re = arguments[ee];
          for (var ae in re) Object.prototype.hasOwnProperty.call(re, ae) && (te[ae] = re[ae]);
        }
        return te;
      }),
    _extends$2.apply(this, arguments)
  );
}
function _assertThisInitialized$1(te) {
  if (te === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return te;
}
function _setPrototypeOf$1(te, ee) {
  return (
    (_setPrototypeOf$1 =
      Object.setPrototypeOf ||
      function (ae, ne) {
        return (ae.__proto__ = ne), ae;
      }),
    _setPrototypeOf$1(te, ee)
  );
}
function _inheritsLoose$1(te, ee) {
  (te.prototype = Object.create(ee.prototype)),
    (te.prototype.constructor = te),
    _setPrototypeOf$1(te, ee);
}
function _getPrototypeOf$1(te) {
  return (
    (_getPrototypeOf$1 = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (re) {
          return re.__proto__ || Object.getPrototypeOf(re);
        }),
    _getPrototypeOf$1(te)
  );
}
function _isNativeFunction$1(te) {
  return Function.toString.call(te).indexOf('[native code]') !== -1;
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function _construct$1(te, ee, re) {
  return (
    _isNativeReflectConstruct$1()
      ? (_construct$1 = Reflect.construct)
      : (_construct$1 = function (ne, oe, ie) {
          var le = [null];
          le.push.apply(le, oe);
          var ce = Function.bind.apply(ne, le),
            se = new ce();
          return ie && _setPrototypeOf$1(se, ie.prototype), se;
        }),
    _construct$1.apply(null, arguments)
  );
}
function _wrapNativeSuper$1(te) {
  var ee = typeof Map == 'function' ? new Map() : void 0;
  return (
    (_wrapNativeSuper$1 = function (ae) {
      if (ae === null || !_isNativeFunction$1(ae)) return ae;
      if (typeof ae != 'function')
        throw new TypeError('Super expression must either be null or a function');
      if (typeof ee < 'u') {
        if (ee.has(ae)) return ee.get(ae);
        ee.set(ae, ne);
      }
      function ne() {
        return _construct$1(ae, arguments, _getPrototypeOf$1(this).constructor);
      }
      return (
        (ne.prototype = Object.create(ae.prototype, {
          constructor: { value: ne, enumerable: !1, writable: !0, configurable: !0 },
        })),
        _setPrototypeOf$1(ne, ae)
      );
    }),
    _wrapNativeSuper$1(te)
  );
}
var PolishedError$1 = (function (te) {
  _inheritsLoose$1(ee, te);
  function ee(re) {
    var ae;
    return (
      (ae =
        te.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            re +
            ' for more information.',
        ) || this),
      _assertThisInitialized$1(ae)
    );
  }
  return ee;
})(_wrapNativeSuper$1(Error));
function colorToInt$1(te) {
  return Math.round(te * 255);
}
function convertToInt$1(te, ee, re) {
  return colorToInt$1(te) + ',' + colorToInt$1(ee) + ',' + colorToInt$1(re);
}
function hslToRgb$1(te, ee, re, ae) {
  if ((ae === void 0 && (ae = convertToInt$1), ee === 0)) return ae(re, re, re);
  var ne = (((te % 360) + 360) % 360) / 60,
    oe = (1 - Math.abs(2 * re - 1)) * ee,
    ie = oe * (1 - Math.abs((ne % 2) - 1)),
    le = 0,
    ce = 0,
    se = 0;
  ne >= 0 && ne < 1
    ? ((le = oe), (ce = ie))
    : ne >= 1 && ne < 2
    ? ((le = ie), (ce = oe))
    : ne >= 2 && ne < 3
    ? ((ce = oe), (se = ie))
    : ne >= 3 && ne < 4
    ? ((ce = ie), (se = oe))
    : ne >= 4 && ne < 5
    ? ((le = ie), (se = oe))
    : ne >= 5 && ne < 6 && ((le = oe), (se = ie));
  var ue = re - oe / 2,
    pe = le + ue,
    fe = ce + ue,
    ge = se + ue;
  return ae(pe, fe, ge);
}
var namedColorMap$1 = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
};
function nameToHex$1(te) {
  if (typeof te != 'string') return te;
  var ee = te.toLowerCase();
  return namedColorMap$1[ee] ? '#' + namedColorMap$1[ee] : te;
}
var hexRegex$1 = /^#[a-fA-F0-9]{6}$/,
  hexRgbaRegex$1 = /^#[a-fA-F0-9]{8}$/,
  reducedHexRegex$1 = /^#[a-fA-F0-9]{3}$/,
  reducedRgbaHexRegex$1 = /^#[a-fA-F0-9]{4}$/,
  rgbRegex$1 = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  rgbaRegex$1 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  hslRegex$1 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  hslaRegex$1 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb$1(te) {
  if (typeof te != 'string') throw new PolishedError$1(3);
  var ee = nameToHex$1(te);
  if (ee.match(hexRegex$1))
    return {
      red: parseInt('' + ee[1] + ee[2], 16),
      green: parseInt('' + ee[3] + ee[4], 16),
      blue: parseInt('' + ee[5] + ee[6], 16),
    };
  if (ee.match(hexRgbaRegex$1)) {
    var re = parseFloat((parseInt('' + ee[7] + ee[8], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + ee[1] + ee[2], 16),
      green: parseInt('' + ee[3] + ee[4], 16),
      blue: parseInt('' + ee[5] + ee[6], 16),
      alpha: re,
    };
  }
  if (ee.match(reducedHexRegex$1))
    return {
      red: parseInt('' + ee[1] + ee[1], 16),
      green: parseInt('' + ee[2] + ee[2], 16),
      blue: parseInt('' + ee[3] + ee[3], 16),
    };
  if (ee.match(reducedRgbaHexRegex$1)) {
    var ae = parseFloat((parseInt('' + ee[4] + ee[4], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + ee[1] + ee[1], 16),
      green: parseInt('' + ee[2] + ee[2], 16),
      blue: parseInt('' + ee[3] + ee[3], 16),
      alpha: ae,
    };
  }
  var ne = rgbRegex$1.exec(ee);
  if (ne)
    return {
      red: parseInt('' + ne[1], 10),
      green: parseInt('' + ne[2], 10),
      blue: parseInt('' + ne[3], 10),
    };
  var oe = rgbaRegex$1.exec(ee.substring(0, 50));
  if (oe)
    return {
      red: parseInt('' + oe[1], 10),
      green: parseInt('' + oe[2], 10),
      blue: parseInt('' + oe[3], 10),
      alpha: parseFloat('' + oe[4]) > 1 ? parseFloat('' + oe[4]) / 100 : parseFloat('' + oe[4]),
    };
  var ie = hslRegex$1.exec(ee);
  if (ie) {
    var le = parseInt('' + ie[1], 10),
      ce = parseInt('' + ie[2], 10) / 100,
      se = parseInt('' + ie[3], 10) / 100,
      ue = 'rgb(' + hslToRgb$1(le, ce, se) + ')',
      pe = rgbRegex$1.exec(ue);
    if (!pe) throw new PolishedError$1(4, ee, ue);
    return {
      red: parseInt('' + pe[1], 10),
      green: parseInt('' + pe[2], 10),
      blue: parseInt('' + pe[3], 10),
    };
  }
  var fe = hslaRegex$1.exec(ee.substring(0, 50));
  if (fe) {
    var ge = parseInt('' + fe[1], 10),
      de = parseInt('' + fe[2], 10) / 100,
      me = parseInt('' + fe[3], 10) / 100,
      he = 'rgb(' + hslToRgb$1(ge, de, me) + ')',
      ve = rgbRegex$1.exec(he);
    if (!ve) throw new PolishedError$1(4, ee, he);
    return {
      red: parseInt('' + ve[1], 10),
      green: parseInt('' + ve[2], 10),
      blue: parseInt('' + ve[3], 10),
      alpha: parseFloat('' + fe[4]) > 1 ? parseFloat('' + fe[4]) / 100 : parseFloat('' + fe[4]),
    };
  }
  throw new PolishedError$1(5);
}
function rgbToHsl$1(te) {
  var ee = te.red / 255,
    re = te.green / 255,
    ae = te.blue / 255,
    ne = Math.max(ee, re, ae),
    oe = Math.min(ee, re, ae),
    ie = (ne + oe) / 2;
  if (ne === oe)
    return te.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: ie, alpha: te.alpha }
      : { hue: 0, saturation: 0, lightness: ie };
  var le,
    ce = ne - oe,
    se = ie > 0.5 ? ce / (2 - ne - oe) : ce / (ne + oe);
  switch (ne) {
    case ee:
      le = (re - ae) / ce + (re < ae ? 6 : 0);
      break;
    case re:
      le = (ae - ee) / ce + 2;
      break;
    default:
      le = (ee - re) / ce + 4;
      break;
  }
  return (
    (le *= 60),
    te.alpha !== void 0
      ? { hue: le, saturation: se, lightness: ie, alpha: te.alpha }
      : { hue: le, saturation: se, lightness: ie }
  );
}
function parseToHsl$1(te) {
  return rgbToHsl$1(parseToRgb$1(te));
}
var reduceHexValue$2 = function (ee) {
    return ee.length === 7 && ee[1] === ee[2] && ee[3] === ee[4] && ee[5] === ee[6]
      ? '#' + ee[1] + ee[3] + ee[5]
      : ee;
  },
  reduceHexValue$1$1 = reduceHexValue$2;
function numberToHex$1(te) {
  var ee = te.toString(16);
  return ee.length === 1 ? '0' + ee : ee;
}
function colorToHex$1(te) {
  return numberToHex$1(Math.round(te * 255));
}
function convertToHex$1(te, ee, re) {
  return reduceHexValue$1$1('#' + colorToHex$1(te) + colorToHex$1(ee) + colorToHex$1(re));
}
function hslToHex$1(te, ee, re) {
  return hslToRgb$1(te, ee, re, convertToHex$1);
}
function hsl$1(te, ee, re) {
  if (typeof te == 'number' && typeof ee == 'number' && typeof re == 'number')
    return hslToHex$1(te, ee, re);
  if (_typeof$1(te) === 'object' && ee === void 0 && re === void 0)
    return hslToHex$1(te.hue, te.saturation, te.lightness);
  throw new PolishedError$1(1);
}
function hsla$1(te, ee, re, ae) {
  if (
    typeof te == 'number' &&
    typeof ee == 'number' &&
    typeof re == 'number' &&
    typeof ae == 'number'
  )
    return ae >= 1 ? hslToHex$1(te, ee, re) : 'rgba(' + hslToRgb$1(te, ee, re) + ',' + ae + ')';
  if (_typeof$1(te) === 'object' && ee === void 0 && re === void 0 && ae === void 0)
    return te.alpha >= 1
      ? hslToHex$1(te.hue, te.saturation, te.lightness)
      : 'rgba(' + hslToRgb$1(te.hue, te.saturation, te.lightness) + ',' + te.alpha + ')';
  throw new PolishedError$1(2);
}
function rgb$1(te, ee, re) {
  if (typeof te == 'number' && typeof ee == 'number' && typeof re == 'number')
    return reduceHexValue$1$1('#' + numberToHex$1(te) + numberToHex$1(ee) + numberToHex$1(re));
  if (_typeof$1(te) === 'object' && ee === void 0 && re === void 0)
    return reduceHexValue$1$1(
      '#' + numberToHex$1(te.red) + numberToHex$1(te.green) + numberToHex$1(te.blue),
    );
  throw new PolishedError$1(6);
}
function rgba$1(te, ee, re, ae) {
  if (typeof te == 'string' && typeof ee == 'number') {
    var ne = parseToRgb$1(te);
    return 'rgba(' + ne.red + ',' + ne.green + ',' + ne.blue + ',' + ee + ')';
  } else {
    if (
      typeof te == 'number' &&
      typeof ee == 'number' &&
      typeof re == 'number' &&
      typeof ae == 'number'
    )
      return ae >= 1 ? rgb$1(te, ee, re) : 'rgba(' + te + ',' + ee + ',' + re + ',' + ae + ')';
    if (_typeof$1(te) === 'object' && ee === void 0 && re === void 0 && ae === void 0)
      return te.alpha >= 1
        ? rgb$1(te.red, te.green, te.blue)
        : 'rgba(' + te.red + ',' + te.green + ',' + te.blue + ',' + te.alpha + ')';
  }
  throw new PolishedError$1(7);
}
var isRgb$1 = function (ee) {
    return (
      typeof ee.red == 'number' &&
      typeof ee.green == 'number' &&
      typeof ee.blue == 'number' &&
      (typeof ee.alpha != 'number' || typeof ee.alpha > 'u')
    );
  },
  isRgba$1 = function (ee) {
    return (
      typeof ee.red == 'number' &&
      typeof ee.green == 'number' &&
      typeof ee.blue == 'number' &&
      typeof ee.alpha == 'number'
    );
  },
  isHsl$1 = function (ee) {
    return (
      typeof ee.hue == 'number' &&
      typeof ee.saturation == 'number' &&
      typeof ee.lightness == 'number' &&
      (typeof ee.alpha != 'number' || typeof ee.alpha > 'u')
    );
  },
  isHsla$1 = function (ee) {
    return (
      typeof ee.hue == 'number' &&
      typeof ee.saturation == 'number' &&
      typeof ee.lightness == 'number' &&
      typeof ee.alpha == 'number'
    );
  };
function toColorString$1(te) {
  if (_typeof$1(te) !== 'object') throw new PolishedError$1(8);
  if (isRgba$1(te)) return rgba$1(te);
  if (isRgb$1(te)) return rgb$1(te);
  if (isHsla$1(te)) return hsla$1(te);
  if (isHsl$1(te)) return hsl$1(te);
  throw new PolishedError$1(8);
}
function curried$1(te, ee, re) {
  return function () {
    var ne = re.concat(Array.prototype.slice.call(arguments));
    return ne.length >= ee ? te.apply(this, ne) : curried$1(te, ee, ne);
  };
}
function curry$1(te) {
  return curried$1(te, te.length, []);
}
function guard$1(te, ee, re) {
  return Math.max(te, Math.min(ee, re));
}
function darken$1(te, ee) {
  if (ee === 'transparent') return ee;
  var re = parseToHsl$1(ee);
  return toColorString$1(
    _extends$2({}, re, { lightness: guard$1(0, 1, re.lightness - parseFloat(te)) }),
  );
}
var curriedDarken$2 = curry$1(darken$1),
  curriedDarken$1$1 = curriedDarken$2;
function lighten$1(te, ee) {
  if (ee === 'transparent') return ee;
  var re = parseToHsl$1(ee);
  return toColorString$1(
    _extends$2({}, re, { lightness: guard$1(0, 1, re.lightness + parseFloat(te)) }),
  );
}
var curriedLighten$2 = curry$1(lighten$1),
  curriedLighten$1$1 = curriedLighten$2;
function opacify$1(te, ee) {
  if (ee === 'transparent') return ee;
  var re = parseToRgb$1(ee),
    ae = typeof re.alpha == 'number' ? re.alpha : 1,
    ne = _extends$2({}, re, { alpha: guard$1(0, 1, (ae * 100 + parseFloat(te) * 100) / 100) });
  return rgba$1(ne);
}
var curriedOpacify$2 = curry$1(opacify$1),
  curriedOpacify$1$1 = curriedOpacify$2;
function transparentize$1(te, ee) {
  if (ee === 'transparent') return ee;
  var re = parseToRgb$1(ee),
    ae = typeof re.alpha == 'number' ? re.alpha : 1,
    ne = _extends$2({}, re, {
      alpha: guard$1(0, 1, +(ae * 100 - parseFloat(te) * 100).toFixed(2) / 100),
    });
  return rgba$1(ne);
}
var curriedTransparentize$2 = curry$1(transparentize$1),
  curriedTransparentize$1$1 = curriedTransparentize$2,
  color = {
    primary: '#FF4785',
    secondary: '#1EA7FD',
    tertiary: '#FAFBFC',
    ancillary: '#22a699',
    orange: '#FC521F',
    gold: '#FFAE00',
    green: '#66BF3C',
    seafoam: '#37D5D3',
    purple: '#6F2CAC',
    ultraviolet: '#2A0481',
    lightest: '#FFFFFF',
    lighter: '#F8F8F8',
    light: '#F3F3F3',
    mediumlight: '#EEEEEE',
    medium: '#DDDDDD',
    mediumdark: '#999999',
    dark: '#666666',
    darker: '#444444',
    darkest: '#333333',
    border: 'rgba(0,0,0,.1)',
    positive: '#66BF3C',
    negative: '#FF4400',
    warning: '#E69D00',
    critical: '#FFFFFF',
    defaultText: '#333333',
    inverseText: '#FFFFFF',
  },
  background = {
    app: '#F6F9FC',
    bar: '#FFFFFF',
    content: color.lightest,
    gridCellSize: 10,
    hoverable: curriedTransparentize$1$1(0.93, color.secondary),
    positive: '#E1FFD4',
    negative: '#FEDED2',
    warning: '#FFF5CF',
    critical: '#FF4400',
  },
  typography = {
    fonts: {
      base: [
        '"Nunito Sans"',
        '-apple-system',
        '".SFNSText-Regular"',
        '"San Francisco"',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(', '),
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        '"Roboto Mono"',
        '"Oxygen Mono"',
        '"Ubuntu Monospace"',
        '"Source Code Pro"',
        '"Droid Sans Mono"',
        '"Courier New"',
        'monospace',
      ].join(', '),
    },
    weight: { regular: 400, bold: 700, black: 900 },
    size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 },
  },
  createReset = memoize$3(1)(function (te) {
    var ee = te.typography;
    return {
      body: {
        fontFamily: ee.fonts.base,
        fontSize: ee.size.s3,
        margin: 0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        WebkitOverflowScrolling: 'touch',
      },
      '*': { boxSizing: 'border-box' },
      'h1, h2, h3, h4, h5, h6': { fontWeight: ee.weight.regular, margin: 0, padding: 0 },
      'button, input, textarea, select': {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        boxSizing: 'border-box',
      },
      sub: { fontSize: '0.8em', bottom: '-0.2em' },
      sup: { fontSize: '0.8em', top: '-0.2em' },
      'b, strong': { fontWeight: ee.weight.bold },
      hr: { border: 'none', borderTop: '1px solid silver', clear: 'both', marginBottom: '1.25rem' },
      code: {
        fontFamily: ee.fonts.mono,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        display: 'inline-block',
        paddingLeft: 2,
        paddingRight: 2,
        verticalAlign: 'baseline',
        color: 'inherit',
      },
      pre: {
        fontFamily: ee.fonts.mono,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: '18px',
        padding: '11px 1rem',
        whiteSpace: 'pre-wrap',
        color: 'inherit',
        borderRadius: 3,
        margin: '1rem 0',
      },
    };
  });
memoize$3(1)(function (te) {
  var ee = te.color,
    re = te.background,
    ae = te.typography,
    ne = createReset({ typography: ae });
  return Object.assign(Object.assign({}, ne), {
    body: Object.assign(Object.assign({}, ne.body), {
      color: ee.defaultText,
      background: re.app,
      overflow: 'hidden',
    }),
    hr: Object.assign(Object.assign({}, ne.hr), { borderTop: '1px solid '.concat(ee.border) }),
  });
});
var theme$1 = {
    base: 'light',
    colorPrimary: '#FF4785',
    colorSecondary: '#1EA7FD',
    appBg: background.app,
    appContentBg: color.lightest,
    appBorderColor: color.border,
    appBorderRadius: 4,
    fontBase: typography.fonts.base,
    fontCode: typography.fonts.mono,
    textColor: color.darkest,
    textInverseColor: color.lightest,
    textMutedColor: color.dark,
    barTextColor: color.mediumdark,
    barSelectedColor: color.secondary,
    barBg: color.lightest,
    inputBg: color.lightest,
    inputBorder: color.border,
    inputTextColor: color.darkest,
    inputBorderRadius: 4,
  },
  theme = {
    base: 'dark',
    colorPrimary: '#FF4785',
    colorSecondary: '#1EA7FD',
    appBg: '#2f2f2f',
    appContentBg: color.darkest,
    appBorderColor: 'rgba(255,255,255,.1)',
    appBorderRadius: 4,
    fontBase: typography.fonts.base,
    fontCode: typography.fonts.mono,
    textColor: color.lightest,
    textInverseColor: color.darkest,
    textMutedColor: color.mediumdark,
    barTextColor: '#999999',
    barSelectedColor: color.secondary,
    barBg: color.darkest,
    inputBg: '#3f3f3f',
    inputBorder: 'rgba(0,0,0,.3)',
    inputTextColor: color.lightest,
    inputBorderRadius: 4,
  },
  win$1;
typeof window < 'u'
  ? (win$1 = window)
  : typeof commonjsGlobal$1 < 'u'
  ? (win$1 = commonjsGlobal$1)
  : typeof self < 'u'
  ? (win$1 = self)
  : (win$1 = {});
var window_1$1 = win$1,
  globalWindow$4 = window_1$1.window,
  mkColor = function (ee) {
    return { color: ee };
  },
  isColorString = function (ee) {
    return typeof ee != 'string'
      ? (logger.warn(
          'Color passed to theme object should be a string. Instead ' +
            ''.concat(ee, '(').concat(_typeof$1(ee), ') was passed.'),
        ),
        !1)
      : !0;
  },
  isValidColorForPolished = function (ee) {
    return !/(gradient|var|calc)/.test(ee);
  },
  applyPolished = function (ee, re) {
    return ee === 'darken'
      ? rgba$1(''.concat(curriedDarken$1$1(1, re)), 0.95)
      : ee === 'lighten'
      ? rgba$1(''.concat(curriedLighten$1$1(1, re)), 0.95)
      : re;
  },
  colorFactory = function (ee) {
    return function (re) {
      if (!isColorString(re) || !isValidColorForPolished(re)) return re;
      try {
        return applyPolished(ee, re);
      } catch {
        return re;
      }
    };
  },
  lightenColor = colorFactory('lighten'),
  darkenColor = colorFactory('darken'),
  getPreferredColorScheme = function () {
    if (!globalWindow$4 || !globalWindow$4.matchMedia) return 'light';
    var ee = globalWindow$4.matchMedia('(prefers-color-scheme: dark)').matches;
    return ee ? 'dark' : 'light';
  },
  themes = { light: theme$1, dark: theme, normal: theme$1 };
getPreferredColorScheme();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __rest$1(
  te,
  ee,
) {
  var re = {};
  for (var ae in te)
    Object.prototype.hasOwnProperty.call(te, ae) && ee.indexOf(ae) < 0 && (re[ae] = te[ae]);
  if (te != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var ne = 0, ae = Object.getOwnPropertySymbols(te); ne < ae.length; ne++)
      ee.indexOf(ae[ne]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(te, ae[ne]) &&
        (re[ae[ne]] = te[ae[ne]]);
  return re;
}
var easing = { rubber: 'cubic-bezier(0.175, 0.885, 0.335, 1.05)' },
  rotate360$1 = keyframes(
    _templateObject$5 ||
      (_templateObject$5 = _taggedTemplateLiteral$5([
        `
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
      ])),
  ),
  glow = keyframes(
    _templateObject2$1 ||
      (_templateObject2$1 = _taggedTemplateLiteral$5([
        `
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`,
      ])),
  ),
  float = keyframes(
    _templateObject3$1 ||
      (_templateObject3$1 = _taggedTemplateLiteral$5([
        `
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`,
      ])),
  ),
  jiggle = keyframes(
    _templateObject4$1 ||
      (_templateObject4$1 = _taggedTemplateLiteral$5([
        `
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`,
      ])),
  ),
  inlineGlow = css(
    _templateObject5 ||
      (_templateObject5 = _taggedTemplateLiteral$5([
        `
  animation: `,
        ` 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`,
      ])),
    glow,
  ),
  hoverable = css(
    _templateObject6 ||
      (_templateObject6 = _taggedTemplateLiteral$5([
        `
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`,
      ])),
  ),
  animation = { rotate360: rotate360$1, glow, float, jiggle, inlineGlow, hoverable },
  chromeDark = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'rgb(36, 36, 36)',
    BASE_COLOR: 'rgb(213, 213, 213)',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(227, 110, 236)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(233, 63, 59)',
    OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(85, 106, 242)',
    HTML_TAG_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
    HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: 'rgb(145, 145, 145)',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
    TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
    TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
    TABLE_SORT_ICON_COLOR: 'black',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
  },
  chromeLight = {
    BASE_FONT_FAMILY: 'Menlo, monospace',
    BASE_FONT_SIZE: '11px',
    BASE_LINE_HEIGHT: 1.2,
    BASE_BACKGROUND_COLOR: 'white',
    BASE_COLOR: 'black',
    OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
    OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
    OBJECT_NAME_COLOR: 'rgb(136, 19, 145)',
    OBJECT_VALUE_NULL_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(128, 128, 128)',
    OBJECT_VALUE_REGEXP_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_STRING_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_SYMBOL_COLOR: 'rgb(196, 26, 22)',
    OBJECT_VALUE_NUMBER_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_BOOLEAN_COLOR: 'rgb(28, 0, 207)',
    OBJECT_VALUE_FUNCTION_PREFIX_COLOR: 'rgb(13, 34, 170)',
    HTML_TAG_COLOR: 'rgb(168, 148, 166)',
    HTML_TAGNAME_COLOR: 'rgb(136, 18, 128)',
    HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
    HTML_ATTRIBUTE_NAME_COLOR: 'rgb(153, 69, 0)',
    HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(26, 26, 166)',
    HTML_COMMENT_COLOR: 'rgb(35, 110, 37)',
    HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',
    ARROW_COLOR: '#6e6e6e',
    ARROW_MARGIN_RIGHT: 3,
    ARROW_FONT_SIZE: 12,
    ARROW_ANIMATION_DURATION: '0',
    TREENODE_FONT_FAMILY: 'Menlo, monospace',
    TREENODE_FONT_SIZE: '11px',
    TREENODE_LINE_HEIGHT: 1.2,
    TREENODE_PADDING_LEFT: 12,
    TABLE_BORDER_COLOR: '#aaa',
    TABLE_TH_BACKGROUND_COLOR: '#eee',
    TABLE_TH_HOVER_COLOR: 'hsla(0, 0%, 90%, 1)',
    TABLE_SORT_ICON_COLOR: '#6e6e6e',
    TABLE_DATA_BACKGROUND_IMAGE:
      'linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))',
    TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
  },
  convertColors = function (ee) {
    return Object.entries(ee).reduce(function (re, ae) {
      var ne = _slicedToArray$5(ae, 2),
        oe = ne[0],
        ie = ne[1];
      return Object.assign(Object.assign({}, re), _defineProperty$6({}, oe, mkColor(ie)));
    }, {});
  },
  create = function (ee) {
    var re = ee.colors,
      ae = ee.mono,
      ne = convertColors(re);
    return {
      token: {
        fontFamily: ae,
        WebkitFontSmoothing: 'antialiased',
        '&.tag': ne.red3,
        '&.comment': Object.assign(Object.assign({}, ne.green1), { fontStyle: 'italic' }),
        '&.prolog': Object.assign(Object.assign({}, ne.green1), { fontStyle: 'italic' }),
        '&.doctype': Object.assign(Object.assign({}, ne.green1), { fontStyle: 'italic' }),
        '&.cdata': Object.assign(Object.assign({}, ne.green1), { fontStyle: 'italic' }),
        '&.string': ne.red1,
        '&.url': ne.cyan1,
        '&.symbol': ne.cyan1,
        '&.number': ne.cyan1,
        '&.boolean': ne.cyan1,
        '&.variable': ne.cyan1,
        '&.constant': ne.cyan1,
        '&.inserted': ne.cyan1,
        '&.atrule': ne.blue1,
        '&.keyword': ne.blue1,
        '&.attr-value': ne.blue1,
        '&.punctuation': ne.gray1,
        '&.operator': ne.gray1,
        '&.function': ne.gray1,
        '&.deleted': ne.red2,
        '&.important': { fontWeight: 'bold' },
        '&.bold': { fontWeight: 'bold' },
        '&.italic': { fontStyle: 'italic' },
        '&.class-name': ne.cyan2,
        '&.selector': ne.red3,
        '&.attr-name': ne.red4,
        '&.property': ne.red4,
        '&.regex': ne.red4,
        '&.entity': ne.red4,
        '&.directive.tag .tag': Object.assign({ background: '#ffff00' }, ne.gray1),
      },
      'language-json .token.boolean': ne.blue1,
      'language-json .token.number': ne.blue1,
      'language-json .token.property': ne.cyan2,
      namespace: { opacity: 0.7 },
    };
  },
  lightSyntaxColors = {
    green1: '#008000',
    red1: '#A31515',
    red2: '#9a050f',
    red3: '#800000',
    red4: '#ff0000',
    gray1: '#393A34',
    cyan1: '#36acaa',
    cyan2: '#2B91AF',
    blue1: '#0000ff',
    blue2: '#00009f',
  },
  darkSyntaxColors = {
    green1: '#7C7C7C',
    red1: '#92C379',
    red2: '#9a050f',
    red3: '#A8FF60',
    red4: '#96CBFE',
    gray1: '#EDEDED',
    cyan1: '#C6C5FE',
    cyan2: '#FFFFB6',
    blue1: '#B474DD',
    blue2: '#00009f',
  },
  createColors = function (ee) {
    return {
      primary: ee.colorPrimary,
      secondary: ee.colorSecondary,
      tertiary: color.tertiary,
      ancillary: color.ancillary,
      orange: color.orange,
      gold: color.gold,
      green: color.green,
      seafoam: color.seafoam,
      purple: color.purple,
      ultraviolet: color.ultraviolet,
      lightest: color.lightest,
      lighter: color.lighter,
      light: color.light,
      mediumlight: color.mediumlight,
      medium: color.medium,
      mediumdark: color.mediumdark,
      dark: color.dark,
      darker: color.darker,
      darkest: color.darkest,
      border: color.border,
      positive: color.positive,
      negative: color.negative,
      warning: color.warning,
      critical: color.critical,
      defaultText: ee.textColor || color.darkest,
      inverseText: ee.textInverseColor || color.lightest,
    };
  },
  convert = function () {
    var ee =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : themes[getPreferredColorScheme()],
      re = ee.base;
    ee.colorPrimary;
    var ae = ee.colorSecondary,
      ne = ee.appBg,
      oe = ee.appContentBg,
      ie = ee.appBorderColor,
      le = ee.appBorderRadius,
      ce = ee.fontBase,
      se = ee.fontCode,
      ue = ee.textColor;
    ee.textInverseColor;
    var pe = ee.barTextColor,
      fe = ee.barSelectedColor,
      ge = ee.barBg,
      de = ee.inputBg,
      me = ee.inputBorder,
      he = ee.inputTextColor,
      ve = ee.inputBorderRadius,
      ye = ee.brandTitle,
      be = ee.brandUrl,
      _e = ee.brandImage,
      Te = ee.brandTarget,
      Se = ee.gridCellSize,
      $e = __rest$1(ee, [
        'base',
        'colorPrimary',
        'colorSecondary',
        'appBg',
        'appContentBg',
        'appBorderColor',
        'appBorderRadius',
        'fontBase',
        'fontCode',
        'textColor',
        'textInverseColor',
        'barTextColor',
        'barSelectedColor',
        'barBg',
        'inputBg',
        'inputBorder',
        'inputTextColor',
        'inputBorderRadius',
        'brandTitle',
        'brandUrl',
        'brandImage',
        'brandTarget',
        'gridCellSize',
      ]);
    return Object.assign(Object.assign({}, $e || {}), {
      base: re,
      color: createColors(ee),
      background: {
        app: ne,
        bar: ge,
        content: oe,
        gridCellSize: Se || background.gridCellSize,
        hoverable: background.hoverable,
        positive: background.positive,
        negative: background.negative,
        warning: background.warning,
        critical: background.critical,
      },
      typography: {
        fonts: { base: ce, mono: se },
        weight: typography.weight,
        size: typography.size,
      },
      animation,
      easing,
      input: { border: me, background: de, color: he, borderRadius: ve },
      layoutMargin: 10,
      appBorderColor: ie,
      appBorderRadius: le,
      barTextColor: pe,
      barSelectedColor: fe || ae,
      barBg: ge,
      brand: { title: ye, url: be, image: _e || (ye ? null : void 0), target: Te },
      code: create({ colors: re === 'light' ? lightSyntaxColors : darkSyntaxColors, mono: se }),
      addonActionsTheme: Object.assign(
        Object.assign({}, re === 'light' ? chromeLight : chromeDark),
        {
          BASE_FONT_FAMILY: se,
          BASE_FONT_SIZE: typography.size.s2 - 1,
          BASE_LINE_HEIGHT: '18px',
          BASE_BACKGROUND_COLOR: 'transparent',
          BASE_COLOR: ue,
          ARROW_COLOR: curriedOpacify$1$1(0.2, ie),
          ARROW_MARGIN_RIGHT: 4,
          ARROW_FONT_SIZE: 8,
          TREENODE_FONT_FAMILY: se,
          TREENODE_FONT_SIZE: typography.size.s2 - 1,
          TREENODE_LINE_HEIGHT: '18px',
          TREENODE_PADDING_LEFT: 12,
        },
      ),
    });
  },
  isEmpty = function (ee) {
    return Object.keys(ee).length === 0;
  },
  isObject$8 = function (ee) {
    return ee != null && _typeof$1(ee) === 'object';
  },
  hasOwnProperty$c = function (ee) {
    for (var re, ae = arguments.length, ne = new Array(ae > 1 ? ae - 1 : 0), oe = 1; oe < ae; oe++)
      ne[oe - 1] = arguments[oe];
    return (re = Object.prototype.hasOwnProperty).call.apply(re, [ee].concat(ne));
  },
  deletedDiff = function te(ee, re) {
    if (ee === re || !isObject$8(ee) || !isObject$8(re)) return {};
    var ae = ee,
      ne = re;
    return Object.keys(ae).reduce(function (oe, ie) {
      if (hasOwnProperty$c(ne, ie)) {
        var le = te(ae[ie], ne[ie]);
        return (isObject$8(le) && isEmpty(le)) || (oe[ie] = le), oe;
      }
      return (oe[ie] = void 0), oe;
    }, {});
  };
function dedent$1(te) {
  for (var ee = [], re = 1; re < arguments.length; re++) ee[re - 1] = arguments[re];
  var ae = Array.from(typeof te == 'string' ? [te] : te);
  ae[ae.length - 1] = ae[ae.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var ne = ae.reduce(function (le, ce) {
    var se = ce.match(/\n([\t ]+|(?!\s).)/g);
    return se
      ? le.concat(
          se.map(function (ue) {
            var pe, fe;
            return (fe =
              (pe = ue.match(/[\t ]/g)) === null || pe === void 0 ? void 0 : pe.length) !== null &&
              fe !== void 0
              ? fe
              : 0;
          }),
        )
      : le;
  }, []);
  if (ne.length) {
    var oe = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, ne) +
        '}',
      'g',
    );
    ae = ae.map(function (le) {
      return le.replace(
        oe,
        `
`,
      );
    });
  }
  ae[0] = ae[0].replace(/^\r?\n/, '');
  var ie = ae[0];
  return (
    ee.forEach(function (le, ce) {
      var se = ie.match(/(?:^|\n)( *)$/),
        ue = se ? se[1] : '',
        pe = le;
      typeof le == 'string' &&
        le.includes(`
`) &&
        (pe = String(le)
          .split(
            `
`,
          )
          .map(function (fe, ge) {
            return ge === 0 ? fe : '' + ue + fe;
          }).join(`
`)),
        (ie += pe + ae[ce + 1]);
    }),
    ie
  );
}
var ensure = function (ee) {
    if (!ee) return convert(theme$1);
    var re = deletedDiff(theme$1, ee);
    return (
      Object.keys(re).length &&
        logger.warn(
          dedent$1(
            _templateObject7 ||
              (_templateObject7 = _taggedTemplateLiteral$5([
                `
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
              ])),
          ),
          re,
        ),
      convert(ee)
    );
  },
  useTheme = useTheme$1,
  Global = Global$1,
  styled = newStyled,
  _templateObject$4,
  _templateObject2,
  _templateObject3,
  _templateObject4;
function _toConsumableArray$1(te) {
  return (
    _arrayWithoutHoles$1(te) ||
    _iterableToArray$1(te) ||
    _unsupportedIterableToArray$5(te) ||
    _nonIterableSpread$1()
  );
}
function _nonIterableSpread$1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArray$1(te) {
  if ((typeof Symbol < 'u' && te[Symbol.iterator] != null) || te['@@iterator'] != null)
    return Array.from(te);
}
function _arrayWithoutHoles$1(te) {
  if (Array.isArray(te)) return _arrayLikeToArray$5(te);
}
function _taggedTemplateLiteral$4(te, ee) {
  return (
    ee || (ee = te.slice(0)),
    Object.freeze(Object.defineProperties(te, { raw: { value: Object.freeze(ee) } }))
  );
}
function _classCallCheck(te, ee) {
  if (!(te instanceof ee)) throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(te, ee) {
  for (var re = 0; re < ee.length; re++) {
    var ae = ee[re];
    (ae.enumerable = ae.enumerable || !1),
      (ae.configurable = !0),
      'value' in ae && (ae.writable = !0),
      Object.defineProperty(te, ae.key, ae);
  }
}
function _createClass(te, ee, re) {
  return (
    ee && _defineProperties(te.prototype, ee),
    re && _defineProperties(te, re),
    Object.defineProperty(te, 'prototype', { writable: !1 }),
    te
  );
}
function _inherits(te, ee) {
  if (typeof ee != 'function' && ee !== null)
    throw new TypeError('Super expression must either be null or a function');
  (te.prototype = Object.create(ee && ee.prototype, {
    constructor: { value: te, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(te, 'prototype', { writable: !1 }),
    ee && _setPrototypeOf2(te, ee);
}
function _setPrototypeOf2(te, ee) {
  return (
    (_setPrototypeOf2 =
      Object.setPrototypeOf ||
      function (ae, ne) {
        return (ae.__proto__ = ne), ae;
      }),
    _setPrototypeOf2(te, ee)
  );
}
function _createSuper(te) {
  var ee = _isNativeReflectConstruct2();
  return function () {
    var ae = _getPrototypeOf2(te),
      ne;
    if (ee) {
      var oe = _getPrototypeOf2(this).constructor;
      ne = Reflect.construct(ae, arguments, oe);
    } else ne = ae.apply(this, arguments);
    return _possibleConstructorReturn(this, ne);
  };
}
function _possibleConstructorReturn(te, ee) {
  if (ee && (_typeof(ee) === 'object' || typeof ee == 'function')) return ee;
  if (ee !== void 0)
    throw new TypeError('Derived constructors may only return object or undefined');
  return _assertThisInitialized2(te);
}
function _assertThisInitialized2(te) {
  if (te === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return te;
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function _getPrototypeOf2(te) {
  return (
    (_getPrototypeOf2 = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (re) {
          return re.__proto__ || Object.getPrototypeOf(re);
        }),
    _getPrototypeOf2(te)
  );
}
function _defineProperty2(te, ee, re) {
  return (
    ee in te
      ? Object.defineProperty(te, ee, { value: re, enumerable: !0, configurable: !0, writable: !0 })
      : (te[ee] = re),
    te
  );
}
function _slicedToArray$4(te, ee) {
  return (
    _arrayWithHoles$4(te) ||
    _iterableToArrayLimit$4(te, ee) ||
    _unsupportedIterableToArray$5(te, ee) ||
    _nonIterableRest$4()
  );
}
function _nonIterableRest$4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$5(te, ee) {
  if (!!te) {
    if (typeof te == 'string') return _arrayLikeToArray$5(te, ee);
    var re = Object.prototype.toString.call(te).slice(8, -1);
    if (
      (re === 'Object' && te.constructor && (re = te.constructor.name),
      re === 'Map' || re === 'Set')
    )
      return Array.from(te);
    if (re === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))
      return _arrayLikeToArray$5(te, ee);
  }
}
function _arrayLikeToArray$5(te, ee) {
  (ee == null || ee > te.length) && (ee = te.length);
  for (var re = 0, ae = new Array(ee); re < ee; re++) ae[re] = te[re];
  return ae;
}
function _iterableToArrayLimit$4(te, ee) {
  var re = te == null ? null : (typeof Symbol < 'u' && te[Symbol.iterator]) || te['@@iterator'];
  if (re != null) {
    var ae = [],
      ne = !0,
      oe = !1,
      ie,
      le;
    try {
      for (
        re = re.call(te);
        !(ne = (ie = re.next()).done) && (ae.push(ie.value), !(ee && ae.length === ee));
        ne = !0
      );
    } catch (ce) {
      (oe = !0), (le = ce);
    } finally {
      try {
        !ne && re.return != null && re.return();
      } finally {
        if (oe) throw le;
      }
    }
    return ae;
  }
}
function _arrayWithHoles$4(te) {
  if (Array.isArray(te)) return te;
}
function _typeof(te) {
  return (
    (_typeof =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (ee) {
            return typeof ee;
          }
        : function (ee) {
            return ee &&
              typeof Symbol == 'function' &&
              ee.constructor === Symbol &&
              ee !== Symbol.prototype
              ? 'symbol'
              : typeof ee;
          }),
    _typeof(te)
  );
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __rest(
  te,
  ee,
) {
  var re = {};
  for (var ae in te)
    Object.prototype.hasOwnProperty.call(te, ae) && ee.indexOf(ae) < 0 && (re[ae] = te[ae]);
  if (te != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var ne = 0, ae = Object.getOwnPropertySymbols(te); ne < ae.length; ne++)
      ee.indexOf(ae[ne]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(te, ae[ne]) &&
        (re[ae[ne]] = te[ae[ne]]);
  return re;
}
function __awaiter(te, ee, re, ae) {
  function ne(oe) {
    return oe instanceof re
      ? oe
      : new re(function (ie) {
          ie(oe);
        });
  }
  return new (re || (re = Promise))(function (oe, ie) {
    function le(ue) {
      try {
        se(ae.next(ue));
      } catch (pe) {
        ie(pe);
      }
    }
    function ce(ue) {
      try {
        se(ae.throw(ue));
      } catch (pe) {
        ie(pe);
      }
    }
    function se(ue) {
      ue.done ? oe(ue.value) : ne(ue.value).then(le, ce);
    }
    se((ae = ae.apply(te, ee || [])).next());
  });
}
var nameSpaceClassNames = function (ee, re) {
  var ae = __rest(ee, []),
    ne = [ae.class, ae.className];
  return (
    delete ae.class,
    (ae.className = ['sbdocs', 'sbdocs-'.concat(re)].concat(ne).filter(Boolean).join(' ')),
    ae
  );
};
function _extends$1() {
  return (
    (_extends$1 =
      Object.assign ||
      function (te) {
        for (var ee = 1; ee < arguments.length; ee++) {
          var re = arguments[ee];
          for (var ae in re) Object.prototype.hasOwnProperty.call(re, ae) && (te[ae] = re[ae]);
        }
        return te;
      }),
    _extends$1.apply(this, arguments)
  );
}
function _assertThisInitialized(te) {
  if (te === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return te;
}
function _setPrototypeOf(te, ee) {
  return (
    (_setPrototypeOf =
      Object.setPrototypeOf ||
      function (ae, ne) {
        return (ae.__proto__ = ne), ae;
      }),
    _setPrototypeOf(te, ee)
  );
}
function _inheritsLoose(te, ee) {
  (te.prototype = Object.create(ee.prototype)),
    (te.prototype.constructor = te),
    _setPrototypeOf(te, ee);
}
function _getPrototypeOf(te) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (re) {
          return re.__proto__ || Object.getPrototypeOf(re);
        }),
    _getPrototypeOf(te)
  );
}
function _isNativeFunction(te) {
  return Function.toString.call(te).indexOf('[native code]') !== -1;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function _construct(te, ee, re) {
  return (
    _isNativeReflectConstruct()
      ? (_construct = Reflect.construct)
      : (_construct = function (ne, oe, ie) {
          var le = [null];
          le.push.apply(le, oe);
          var ce = Function.bind.apply(ne, le),
            se = new ce();
          return ie && _setPrototypeOf(se, ie.prototype), se;
        }),
    _construct.apply(null, arguments)
  );
}
function _wrapNativeSuper(te) {
  var ee = typeof Map == 'function' ? new Map() : void 0;
  return (
    (_wrapNativeSuper = function (ae) {
      if (ae === null || !_isNativeFunction(ae)) return ae;
      if (typeof ae != 'function')
        throw new TypeError('Super expression must either be null or a function');
      if (typeof ee < 'u') {
        if (ee.has(ae)) return ee.get(ae);
        ee.set(ae, ne);
      }
      function ne() {
        return _construct(ae, arguments, _getPrototypeOf(this).constructor);
      }
      return (
        (ne.prototype = Object.create(ae.prototype, {
          constructor: { value: ne, enumerable: !1, writable: !0, configurable: !0 },
        })),
        _setPrototypeOf(ne, ae)
      );
    }),
    _wrapNativeSuper(te)
  );
}
var PolishedError = (function (te) {
  _inheritsLoose(ee, te);
  function ee(re) {
    var ae;
    return (
      (ae =
        te.call(
          this,
          'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
            re +
            ' for more information.',
        ) || this),
      _assertThisInitialized(ae)
    );
  }
  return ee;
})(_wrapNativeSuper(Error));
function colorToInt(te) {
  return Math.round(te * 255);
}
function convertToInt(te, ee, re) {
  return colorToInt(te) + ',' + colorToInt(ee) + ',' + colorToInt(re);
}
function hslToRgb(te, ee, re, ae) {
  if ((ae === void 0 && (ae = convertToInt), ee === 0)) return ae(re, re, re);
  var ne = (((te % 360) + 360) % 360) / 60,
    oe = (1 - Math.abs(2 * re - 1)) * ee,
    ie = oe * (1 - Math.abs((ne % 2) - 1)),
    le = 0,
    ce = 0,
    se = 0;
  ne >= 0 && ne < 1
    ? ((le = oe), (ce = ie))
    : ne >= 1 && ne < 2
    ? ((le = ie), (ce = oe))
    : ne >= 2 && ne < 3
    ? ((ce = oe), (se = ie))
    : ne >= 3 && ne < 4
    ? ((ce = ie), (se = oe))
    : ne >= 4 && ne < 5
    ? ((le = ie), (se = oe))
    : ne >= 5 && ne < 6 && ((le = oe), (se = ie));
  var ue = re - oe / 2,
    pe = le + ue,
    fe = ce + ue,
    ge = se + ue;
  return ae(pe, fe, ge);
}
var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',
};
function nameToHex(te) {
  if (typeof te != 'string') return te;
  var ee = te.toLowerCase();
  return namedColorMap[ee] ? '#' + namedColorMap[ee] : te;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/,
  hexRgbaRegex = /^#[a-fA-F0-9]{8}$/,
  reducedHexRegex = /^#[a-fA-F0-9]{3}$/,
  reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/,
  rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
  rgbaRegex =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
  hslRegex =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
  hslaRegex =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(te) {
  if (typeof te != 'string') throw new PolishedError(3);
  var ee = nameToHex(te);
  if (ee.match(hexRegex))
    return {
      red: parseInt('' + ee[1] + ee[2], 16),
      green: parseInt('' + ee[3] + ee[4], 16),
      blue: parseInt('' + ee[5] + ee[6], 16),
    };
  if (ee.match(hexRgbaRegex)) {
    var re = parseFloat((parseInt('' + ee[7] + ee[8], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + ee[1] + ee[2], 16),
      green: parseInt('' + ee[3] + ee[4], 16),
      blue: parseInt('' + ee[5] + ee[6], 16),
      alpha: re,
    };
  }
  if (ee.match(reducedHexRegex))
    return {
      red: parseInt('' + ee[1] + ee[1], 16),
      green: parseInt('' + ee[2] + ee[2], 16),
      blue: parseInt('' + ee[3] + ee[3], 16),
    };
  if (ee.match(reducedRgbaHexRegex)) {
    var ae = parseFloat((parseInt('' + ee[4] + ee[4], 16) / 255).toFixed(2));
    return {
      red: parseInt('' + ee[1] + ee[1], 16),
      green: parseInt('' + ee[2] + ee[2], 16),
      blue: parseInt('' + ee[3] + ee[3], 16),
      alpha: ae,
    };
  }
  var ne = rgbRegex.exec(ee);
  if (ne)
    return {
      red: parseInt('' + ne[1], 10),
      green: parseInt('' + ne[2], 10),
      blue: parseInt('' + ne[3], 10),
    };
  var oe = rgbaRegex.exec(ee.substring(0, 50));
  if (oe)
    return {
      red: parseInt('' + oe[1], 10),
      green: parseInt('' + oe[2], 10),
      blue: parseInt('' + oe[3], 10),
      alpha: parseFloat('' + oe[4]) > 1 ? parseFloat('' + oe[4]) / 100 : parseFloat('' + oe[4]),
    };
  var ie = hslRegex.exec(ee);
  if (ie) {
    var le = parseInt('' + ie[1], 10),
      ce = parseInt('' + ie[2], 10) / 100,
      se = parseInt('' + ie[3], 10) / 100,
      ue = 'rgb(' + hslToRgb(le, ce, se) + ')',
      pe = rgbRegex.exec(ue);
    if (!pe) throw new PolishedError(4, ee, ue);
    return {
      red: parseInt('' + pe[1], 10),
      green: parseInt('' + pe[2], 10),
      blue: parseInt('' + pe[3], 10),
    };
  }
  var fe = hslaRegex.exec(ee.substring(0, 50));
  if (fe) {
    var ge = parseInt('' + fe[1], 10),
      de = parseInt('' + fe[2], 10) / 100,
      me = parseInt('' + fe[3], 10) / 100,
      he = 'rgb(' + hslToRgb(ge, de, me) + ')',
      ve = rgbRegex.exec(he);
    if (!ve) throw new PolishedError(4, ee, he);
    return {
      red: parseInt('' + ve[1], 10),
      green: parseInt('' + ve[2], 10),
      blue: parseInt('' + ve[3], 10),
      alpha: parseFloat('' + fe[4]) > 1 ? parseFloat('' + fe[4]) / 100 : parseFloat('' + fe[4]),
    };
  }
  throw new PolishedError(5);
}
function rgbToHsl(te) {
  var ee = te.red / 255,
    re = te.green / 255,
    ae = te.blue / 255,
    ne = Math.max(ee, re, ae),
    oe = Math.min(ee, re, ae),
    ie = (ne + oe) / 2;
  if (ne === oe)
    return te.alpha !== void 0
      ? { hue: 0, saturation: 0, lightness: ie, alpha: te.alpha }
      : { hue: 0, saturation: 0, lightness: ie };
  var le,
    ce = ne - oe,
    se = ie > 0.5 ? ce / (2 - ne - oe) : ce / (ne + oe);
  switch (ne) {
    case ee:
      le = (re - ae) / ce + (re < ae ? 6 : 0);
      break;
    case re:
      le = (ae - ee) / ce + 2;
      break;
    default:
      le = (ee - re) / ce + 4;
      break;
  }
  return (
    (le *= 60),
    te.alpha !== void 0
      ? { hue: le, saturation: se, lightness: ie, alpha: te.alpha }
      : { hue: le, saturation: se, lightness: ie }
  );
}
function parseToHsl(te) {
  return rgbToHsl(parseToRgb(te));
}
var reduceHexValue = function (ee) {
    return ee.length === 7 && ee[1] === ee[2] && ee[3] === ee[4] && ee[5] === ee[6]
      ? '#' + ee[1] + ee[3] + ee[5]
      : ee;
  },
  reduceHexValue$1 = reduceHexValue;
function numberToHex(te) {
  var ee = te.toString(16);
  return ee.length === 1 ? '0' + ee : ee;
}
function colorToHex(te) {
  return numberToHex(Math.round(te * 255));
}
function convertToHex(te, ee, re) {
  return reduceHexValue$1('#' + colorToHex(te) + colorToHex(ee) + colorToHex(re));
}
function hslToHex(te, ee, re) {
  return hslToRgb(te, ee, re, convertToHex);
}
function hsl(te, ee, re) {
  if (typeof te == 'number' && typeof ee == 'number' && typeof re == 'number')
    return hslToHex(te, ee, re);
  if (_typeof(te) === 'object' && ee === void 0 && re === void 0)
    return hslToHex(te.hue, te.saturation, te.lightness);
  throw new PolishedError(1);
}
function hsla(te, ee, re, ae) {
  if (
    typeof te == 'number' &&
    typeof ee == 'number' &&
    typeof re == 'number' &&
    typeof ae == 'number'
  )
    return ae >= 1 ? hslToHex(te, ee, re) : 'rgba(' + hslToRgb(te, ee, re) + ',' + ae + ')';
  if (_typeof(te) === 'object' && ee === void 0 && re === void 0 && ae === void 0)
    return te.alpha >= 1
      ? hslToHex(te.hue, te.saturation, te.lightness)
      : 'rgba(' + hslToRgb(te.hue, te.saturation, te.lightness) + ',' + te.alpha + ')';
  throw new PolishedError(2);
}
function rgb(te, ee, re) {
  if (typeof te == 'number' && typeof ee == 'number' && typeof re == 'number')
    return reduceHexValue$1('#' + numberToHex(te) + numberToHex(ee) + numberToHex(re));
  if (_typeof(te) === 'object' && ee === void 0 && re === void 0)
    return reduceHexValue$1(
      '#' + numberToHex(te.red) + numberToHex(te.green) + numberToHex(te.blue),
    );
  throw new PolishedError(6);
}
function rgba(te, ee, re, ae) {
  if (typeof te == 'string' && typeof ee == 'number') {
    var ne = parseToRgb(te);
    return 'rgba(' + ne.red + ',' + ne.green + ',' + ne.blue + ',' + ee + ')';
  } else {
    if (
      typeof te == 'number' &&
      typeof ee == 'number' &&
      typeof re == 'number' &&
      typeof ae == 'number'
    )
      return ae >= 1 ? rgb(te, ee, re) : 'rgba(' + te + ',' + ee + ',' + re + ',' + ae + ')';
    if (_typeof(te) === 'object' && ee === void 0 && re === void 0 && ae === void 0)
      return te.alpha >= 1
        ? rgb(te.red, te.green, te.blue)
        : 'rgba(' + te.red + ',' + te.green + ',' + te.blue + ',' + te.alpha + ')';
  }
  throw new PolishedError(7);
}
var isRgb = function (ee) {
    return (
      typeof ee.red == 'number' &&
      typeof ee.green == 'number' &&
      typeof ee.blue == 'number' &&
      (typeof ee.alpha != 'number' || typeof ee.alpha > 'u')
    );
  },
  isRgba = function (ee) {
    return (
      typeof ee.red == 'number' &&
      typeof ee.green == 'number' &&
      typeof ee.blue == 'number' &&
      typeof ee.alpha == 'number'
    );
  },
  isHsl = function (ee) {
    return (
      typeof ee.hue == 'number' &&
      typeof ee.saturation == 'number' &&
      typeof ee.lightness == 'number' &&
      (typeof ee.alpha != 'number' || typeof ee.alpha > 'u')
    );
  },
  isHsla = function (ee) {
    return (
      typeof ee.hue == 'number' &&
      typeof ee.saturation == 'number' &&
      typeof ee.lightness == 'number' &&
      typeof ee.alpha == 'number'
    );
  };
function toColorString(te) {
  if (_typeof(te) !== 'object') throw new PolishedError(8);
  if (isRgba(te)) return rgba(te);
  if (isRgb(te)) return rgb(te);
  if (isHsla(te)) return hsla(te);
  if (isHsl(te)) return hsl(te);
  throw new PolishedError(8);
}
function curried(te, ee, re) {
  return function () {
    var ne = re.concat(Array.prototype.slice.call(arguments));
    return ne.length >= ee ? te.apply(this, ne) : curried(te, ee, ne);
  };
}
function curry(te) {
  return curried(te, te.length, []);
}
function guard(te, ee, re) {
  return Math.max(te, Math.min(ee, re));
}
function darken(te, ee) {
  if (ee === 'transparent') return ee;
  var re = parseToHsl(ee);
  return toColorString(
    _extends$1({}, re, { lightness: guard(0, 1, re.lightness - parseFloat(te)) }),
  );
}
var curriedDarken = curry(darken),
  curriedDarken$1 = curriedDarken;
function lighten(te, ee) {
  if (ee === 'transparent') return ee;
  var re = parseToHsl(ee);
  return toColorString(
    _extends$1({}, re, { lightness: guard(0, 1, re.lightness + parseFloat(te)) }),
  );
}
var curriedLighten = curry(lighten),
  curriedLighten$1 = curriedLighten;
function opacify(te, ee) {
  if (ee === 'transparent') return ee;
  var re = parseToRgb(ee),
    ae = typeof re.alpha == 'number' ? re.alpha : 1,
    ne = _extends$1({}, re, { alpha: guard(0, 1, (ae * 100 + parseFloat(te) * 100) / 100) });
  return rgba(ne);
}
var curriedOpacify = curry(opacify),
  curriedOpacify$1 = curriedOpacify;
function transparentize(te, ee) {
  if (ee === 'transparent') return ee;
  var re = parseToRgb(ee),
    ae = typeof re.alpha == 'number' ? re.alpha : 1,
    ne = _extends$1({}, re, {
      alpha: guard(0, 1, +(ae * 100 - parseFloat(te) * 100).toFixed(2) / 100),
    });
  return rgba(ne);
}
var curriedTransparentize = curry(transparentize),
  curriedTransparentize$1 = curriedTransparentize,
  headerCommon = function (ee) {
    var re = ee.theme;
    return {
      margin: '20px 0 8px',
      padding: 0,
      cursor: 'text',
      position: 'relative',
      color: re.color.defaultText,
      '&:first-of-type': { marginTop: 0, paddingTop: 0 },
      '&:hover a.anchor': { textDecoration: 'none' },
      '& tt, & code': { fontSize: 'inherit' },
    };
  },
  codeCommon = function (ee) {
    var re = ee.theme;
    return {
      lineHeight: 1,
      margin: '0 2px',
      padding: '3px 5px',
      whiteSpace: 'nowrap',
      borderRadius: 3,
      fontSize: re.typography.size.s2 - 1,
      border:
        re.base === 'light'
          ? '1px solid '.concat(re.color.mediumlight)
          : '1px solid '.concat(re.color.darker),
      color:
        re.base === 'light'
          ? curriedTransparentize$1(0.1, re.color.defaultText)
          : curriedTransparentize$1(0.3, re.color.defaultText),
      backgroundColor: re.base === 'light' ? re.color.lighter : re.color.border,
    };
  },
  withReset = function (ee) {
    var re = ee.theme;
    return {
      fontFamily: re.typography.fonts.base,
      fontSize: re.typography.size.s3,
      margin: 0,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      WebkitOverflowScrolling: 'touch',
    };
  },
  withMargin = { margin: '16px 0' },
  Link$1 = function (ee) {
    var re = ee.href,
      ae = ee.children,
      ne = __rest(ee, ['href', 'children']),
      oe = /^\//.test(re),
      ie = /^#.*/.test(re),
      le = oe ? '?path='.concat(re) : re,
      ce = ie ? '_self' : '_top';
    return React__default.createElement('a', Object.assign({ href: le, target: ce }, ne), ae);
  },
  A$2 = styled(Link$1)(withReset, function (te) {
    var ee = te.theme;
    return {
      fontSize: 'inherit',
      lineHeight: '24px',
      color: ee.color.secondary,
      textDecoration: 'none',
      '&.absent': { color: '#cc0000' },
      '&.anchor': {
        display: 'block',
        paddingLeft: 30,
        marginLeft: -30,
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
      },
    };
  }),
  Blockquote = styled.blockquote(withReset, withMargin, function (te) {
    var ee = te.theme;
    return {
      borderLeft: '4px solid '.concat(ee.color.medium),
      padding: '0 15px',
      color: ee.color.dark,
      '& > :first-of-type': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 },
    };
  }),
  Wrapper$8 = styled.div(withReset, function (te) {
    var ee = te.theme;
    return {
      backgroundColor: ee.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
      borderRadius: ee.appBorderRadius,
      border: '1px dashed '.concat(ee.appBorderColor),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: '25px 0 40px',
      color: curriedTransparentize$1(0.3, ee.color.defaultText),
      fontSize: ee.typography.size.s2,
    };
  }),
  EmptyBlock = function (ee) {
    return React__default.createElement(
      Wrapper$8,
      Object.assign({}, ee, { className: 'docblock-emptyblock' }),
    );
  },
  LazySyntaxHighlighter = U$1(function () {
    return __vitePreload(
      () => import('./syntaxhighlighter-b07b042a.f65e325f.js'),
      [
        'assets/syntaxhighlighter-b07b042a.f65e325f.js',
        'assets/iframe.1f3a3e8b.js',
        'assets/iframe.1f0201a9.css',
        'assets/es.string.from-code-point.ab218ea7.js',
        'assets/es.regexp.flags.50a65004.js',
      ],
    );
  }),
  LazySyntaxHighlighterWithFormatter = U$1(function () {
    return __awaiter(
      void 0,
      void 0,
      void 0,
      regeneratorRuntime.mark(function te() {
        var ee, re, ae, ne;
        return regeneratorRuntime.wrap(function (ie) {
          for (;;)
            switch ((ie.prev = ie.next)) {
              case 0:
                return (
                  (ie.next = 2),
                  Promise.all([
                    __vitePreload(
                      () => import('./syntaxhighlighter-b07b042a.f65e325f.js'),
                      [
                        'assets/syntaxhighlighter-b07b042a.f65e325f.js',
                        'assets/iframe.1f3a3e8b.js',
                        'assets/iframe.1f0201a9.css',
                        'assets/es.string.from-code-point.ab218ea7.js',
                        'assets/es.regexp.flags.50a65004.js',
                      ],
                    ),
                    __vitePreload(
                      () => import('./formatter-0d5cb0eb.2acc58ee.js'),
                      [
                        'assets/formatter-0d5cb0eb.2acc58ee.js',
                        'assets/iframe.1f3a3e8b.js',
                        'assets/iframe.1f0201a9.css',
                        'assets/es.string.from-code-point.ab218ea7.js',
                        'assets/es.regexp.flags.50a65004.js',
                      ],
                    ),
                  ])
                );
              case 2:
                return (
                  (ee = ie.sent),
                  (re = _slicedToArray$4(ee, 2)),
                  (ae = re[0].SyntaxHighlighter),
                  (ne = re[1].formatter),
                  ie.abrupt('return', {
                    default: function (ce) {
                      return React__default.createElement(
                        ae,
                        Object.assign({}, ce, { formatter: ne }),
                      );
                    },
                  })
                );
              case 7:
              case 'end':
                return ie.stop();
            }
        }, te);
      }),
    );
  }),
  SyntaxHighlighter = function (ee) {
    return React__default.createElement(
      T$1,
      { fallback: React__default.createElement('div', null) },
      ee.format !== !1
        ? React__default.createElement(LazySyntaxHighlighterWithFormatter, Object.assign({}, ee))
        : React__default.createElement(LazySyntaxHighlighter, Object.assign({}, ee)),
    );
  },
  StyledSyntaxHighlighter = styled(SyntaxHighlighter)(function (te) {
    var ee = te.theme;
    return {
      fontSize: ''.concat(ee.typography.size.s2 - 1, 'px'),
      lineHeight: '19px',
      margin: '25px 0 40px',
      borderRadius: ee.appBorderRadius,
      boxShadow:
        ee.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      'pre.prismjs': { padding: 20, background: 'inherit' },
    };
  }),
  SourceError;
(function (te) {
  (te.NO_STORY = 'There\u2019s no story here.'),
    (te.SOURCE_UNAVAILABLE = 'Oh no! The source is not available.');
})(SourceError || (SourceError = {}));
var SourceSkeletonWrapper = styled.div(function (te) {
    var ee = te.theme;
    return {
      background: ee.background.content,
      borderRadius: ee.appBorderRadius,
      border: '1px solid '.concat(ee.appBorderColor),
      boxShadow:
        ee.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      margin: '25px 0 40px',
      padding: '20px 20px 20px 22px',
    };
  }),
  SourceSkeletonPlaceholder = styled.div(function (te) {
    var ee = te.theme;
    return _defineProperty2(
      {
        animation: ''.concat(ee.animation.glow, ' 1.5s ease-in-out infinite'),
        background: ee.appBorderColor,
        height: 17,
        marginTop: 1,
        width: '60%',
      },
      '&:first-child',
      { margin: 0 },
    );
  }),
  SourceSkeleton = function () {
    return React__default.createElement(
      SourceSkeletonWrapper,
      null,
      React__default.createElement(SourceSkeletonPlaceholder, null),
      React__default.createElement(SourceSkeletonPlaceholder, { style: { width: '80%' } }),
      React__default.createElement(SourceSkeletonPlaceholder, { style: { width: '30%' } }),
      React__default.createElement(SourceSkeletonPlaceholder, { style: { width: '80%' } }),
    );
  },
  Source$1 = function (ee) {
    var re = ee.isLoading,
      ae = ee.error;
    if (re) return React__default.createElement(SourceSkeleton, null);
    if (ae) return React__default.createElement(EmptyBlock, null, ae);
    var ne = ee,
      oe = ne.language,
      ie = ne.code,
      le = ne.dark,
      ce = ne.format,
      se = __rest(ne, ['language', 'code', 'dark', 'format']),
      ue = React__default.createElement(
        StyledSyntaxHighlighter,
        Object.assign(
          { bordered: !0, copyable: !0, format: ce, language: oe, className: 'docblock-source' },
          se,
        ),
        ie,
      );
    if (typeof le > 'u') return ue;
    var pe = le ? themes.dark : themes.light;
    return React__default.createElement(ThemeProvider, { theme: convert(pe) }, ue);
  };
Source$1.defaultProps = { format: !1 };
var isReactChildString = function (ee) {
    return typeof ee == 'string';
  },
  isInlineCodeRegex = /[\n\r]/g,
  DefaultCodeBlock = styled.code(function (te) {
    var ee = te.theme;
    return {
      fontFamily: ee.typography.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      display: 'inline-block',
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: 'baseline',
      color: 'inherit',
    };
  }, codeCommon),
  Code = function (ee) {
    var re,
      ae = ee.className,
      ne = ee.children,
      oe = __rest(ee, ['className', 'children']),
      ie = (ae || '').match(/lang-(\S+)/),
      le = k$2.toArray(ne),
      ce = !le.filter(isReactChildString).some(function (se) {
        return se.match(isInlineCodeRegex);
      });
    return ce
      ? React__default.createElement(DefaultCodeBlock, Object.assign({}, oe, { className: ae }), le)
      : React__default.createElement(
          StyledSyntaxHighlighter,
          Object.assign(
            {
              bordered: !0,
              copyable: !0,
              language:
                (re = ie == null ? void 0 : ie[1]) !== null && re !== void 0 ? re : 'plaintext',
              format: !1,
            },
            oe,
          ),
          ne,
        );
  },
  Div = styled.div(withReset),
  DL = styled.dl(
    withReset,
    Object.assign(Object.assign({}, withMargin), {
      padding: 0,
      '& dt': {
        fontSize: '14px',
        fontWeight: 'bold',
        fontStyle: 'italic',
        padding: 0,
        margin: '16px 0 4px',
      },
      '& dt:first-of-type': { padding: 0 },
      '& dt > :first-of-type': { marginTop: 0 },
      '& dt > :last-child': { marginBottom: 0 },
      '& dd': { margin: '0 0 16px', padding: '0 15px' },
      '& dd > :first-of-type': { marginTop: 0 },
      '& dd > :last-child': { marginBottom: 0 },
    }),
  ),
  H1 = styled.h1(withReset, headerCommon, function (te) {
    var ee = te.theme;
    return {
      fontSize: ''.concat(ee.typography.size.l1, 'px'),
      fontWeight: ee.typography.weight.black,
    };
  }),
  H2 = styled.h2(withReset, headerCommon, function (te) {
    var ee = te.theme;
    return {
      fontSize: ''.concat(ee.typography.size.m2, 'px'),
      paddingBottom: 4,
      borderBottom: '1px solid '.concat(ee.appBorderColor),
    };
  }),
  H3 = styled.h3(withReset, headerCommon, function (te) {
    var ee = te.theme;
    return { fontSize: ''.concat(ee.typography.size.m1, 'px') };
  }),
  H4 = styled.h4(withReset, headerCommon, function (te) {
    var ee = te.theme;
    return { fontSize: ''.concat(ee.typography.size.s3, 'px') };
  }),
  H5 = styled.h5(withReset, headerCommon, function (te) {
    var ee = te.theme;
    return { fontSize: ''.concat(ee.typography.size.s2, 'px') };
  }),
  H6 = styled.h6(withReset, headerCommon, function (te) {
    var ee = te.theme;
    return { fontSize: ''.concat(ee.typography.size.s2, 'px'), color: ee.color.dark };
  }),
  HR = styled.hr(function (te) {
    var ee = te.theme;
    return {
      border: '0 none',
      borderTop: '1px solid '.concat(ee.appBorderColor),
      height: 4,
      padding: 0,
    };
  }),
  Img = styled.img({ maxWidth: '100%' }),
  LI = styled.li(withReset, function (te) {
    var ee = te.theme;
    return {
      fontSize: ee.typography.size.s2,
      color: ee.color.defaultText,
      lineHeight: '24px',
      '& + li': { marginTop: '.25em' },
      '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
      '& code': codeCommon({ theme: ee }),
    };
  }),
  listCommon$1 = {
    paddingLeft: 30,
    '& :first-of-type': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 },
  },
  OL = styled.ol(
    withReset,
    withMargin,
    Object.assign(Object.assign({}, listCommon$1), { listStyle: 'decimal' }),
  ),
  P$1 = styled.p(withReset, withMargin, function (te) {
    var ee = te.theme;
    return {
      fontSize: ee.typography.size.s2,
      lineHeight: '24px',
      color: ee.color.defaultText,
      '& code': codeCommon({ theme: ee }),
    };
  }),
  Pre = styled.pre(withReset, withMargin, function (te) {
    var ee = te.theme;
    return {
      fontFamily: ee.typography.fonts.mono,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      lineHeight: '18px',
      padding: '11px 1rem',
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      borderRadius: 3,
      margin: '1rem 0',
      '&:not(.prismjs)': {
        background: 'transparent',
        border: 'none',
        borderRadius: 0,
        padding: 0,
        margin: 0,
      },
      '& pre, &.prismjs': {
        padding: 15,
        margin: 0,
        whiteSpace: 'pre-wrap',
        color: 'inherit',
        fontSize: '13px',
        lineHeight: '19px',
        code: { color: 'inherit', fontSize: 'inherit' },
      },
      '& code': { whiteSpace: 'pre' },
      '& code, & tt': { border: 'none' },
    };
  }),
  Span = styled.span(withReset, function (te) {
    var ee = te.theme;
    return {
      '&.frame': {
        display: 'block',
        overflow: 'hidden',
        '& > span': {
          border: '1px solid '.concat(ee.color.medium),
          display: 'block',
          float: 'left',
          overflow: 'hidden',
          margin: '13px 0 0',
          padding: 7,
          width: 'auto',
        },
        '& span img': { display: 'block', float: 'left' },
        '& span span': {
          clear: 'both',
          color: ee.color.darkest,
          display: 'block',
          padding: '5px 0 0',
        },
      },
      '&.align-center': {
        display: 'block',
        overflow: 'hidden',
        clear: 'both',
        '& > span': {
          display: 'block',
          overflow: 'hidden',
          margin: '13px auto 0',
          textAlign: 'center',
        },
        '& span img': { margin: '0 auto', textAlign: 'center' },
      },
      '&.align-right': {
        display: 'block',
        overflow: 'hidden',
        clear: 'both',
        '& > span': {
          display: 'block',
          overflow: 'hidden',
          margin: '13px 0 0',
          textAlign: 'right',
        },
        '& span img': { margin: 0, textAlign: 'right' },
      },
      '&.float-left': {
        display: 'block',
        marginRight: 13,
        overflow: 'hidden',
        float: 'left',
        '& span': { margin: '13px 0 0' },
      },
      '&.float-right': {
        display: 'block',
        marginLeft: 13,
        overflow: 'hidden',
        float: 'right',
        '& > span': {
          display: 'block',
          overflow: 'hidden',
          margin: '13px auto 0',
          textAlign: 'right',
        },
      },
    };
  }),
  Table$1 = styled.table(withReset, withMargin, function (te) {
    var ee = te.theme;
    return {
      fontSize: ee.typography.size.s2,
      lineHeight: '24px',
      padding: 0,
      borderCollapse: 'collapse',
      '& tr': {
        borderTop: '1px solid '.concat(ee.appBorderColor),
        backgroundColor: ee.appContentBg,
        margin: 0,
        padding: 0,
      },
      '& tr:nth-of-type(2n)': {
        backgroundColor: ee.base === 'dark' ? ee.color.darker : ee.color.lighter,
      },
      '& tr th': {
        fontWeight: 'bold',
        color: ee.color.defaultText,
        border: '1px solid '.concat(ee.appBorderColor),
        margin: 0,
        padding: '6px 13px',
      },
      '& tr td': {
        border: '1px solid '.concat(ee.appBorderColor),
        color: ee.color.defaultText,
        margin: 0,
        padding: '6px 13px',
      },
      '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
      '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
    };
  }),
  TT = styled.title(codeCommon),
  listCommon = {
    paddingLeft: 30,
    '& :first-of-type': { marginTop: 0 },
    '& :last-child': { marginBottom: 0 },
  },
  UL = styled.ul(
    withReset,
    withMargin,
    Object.assign(Object.assign({}, listCommon), { listStyle: 'disc' }),
  ),
  ResetWrapper = styled.div(withReset),
  components$1 = {
    h1: function (ee) {
      return React__default.createElement(H1, Object.assign({}, nameSpaceClassNames(ee, 'h1')));
    },
    h2: function (ee) {
      return React__default.createElement(H2, Object.assign({}, nameSpaceClassNames(ee, 'h2')));
    },
    h3: function (ee) {
      return React__default.createElement(H3, Object.assign({}, nameSpaceClassNames(ee, 'h3')));
    },
    h4: function (ee) {
      return React__default.createElement(H4, Object.assign({}, nameSpaceClassNames(ee, 'h4')));
    },
    h5: function (ee) {
      return React__default.createElement(H5, Object.assign({}, nameSpaceClassNames(ee, 'h5')));
    },
    h6: function (ee) {
      return React__default.createElement(H6, Object.assign({}, nameSpaceClassNames(ee, 'h6')));
    },
    pre: function (ee) {
      return React__default.createElement(Pre, Object.assign({}, nameSpaceClassNames(ee, 'pre')));
    },
    a: function (ee) {
      return React__default.createElement(A$2, Object.assign({}, nameSpaceClassNames(ee, 'a')));
    },
    hr: function (ee) {
      return React__default.createElement(HR, Object.assign({}, nameSpaceClassNames(ee, 'hr')));
    },
    dl: function (ee) {
      return React__default.createElement(DL, Object.assign({}, nameSpaceClassNames(ee, 'dl')));
    },
    blockquote: function (ee) {
      return React__default.createElement(
        Blockquote,
        Object.assign({}, nameSpaceClassNames(ee, 'blockquote')),
      );
    },
    table: function (ee) {
      return React__default.createElement(
        Table$1,
        Object.assign({}, nameSpaceClassNames(ee, 'table')),
      );
    },
    img: function (ee) {
      return React__default.createElement(Img, Object.assign({}, nameSpaceClassNames(ee, 'img')));
    },
    div: function (ee) {
      return React__default.createElement(Div, Object.assign({}, nameSpaceClassNames(ee, 'div')));
    },
    span: function (ee) {
      return React__default.createElement(Span, Object.assign({}, nameSpaceClassNames(ee, 'span')));
    },
    li: function (ee) {
      return React__default.createElement(LI, Object.assign({}, nameSpaceClassNames(ee, 'li')));
    },
    ul: function (ee) {
      return React__default.createElement(UL, Object.assign({}, nameSpaceClassNames(ee, 'ul')));
    },
    ol: function (ee) {
      return React__default.createElement(OL, Object.assign({}, nameSpaceClassNames(ee, 'ol')));
    },
    p: function (ee) {
      return React__default.createElement(P$1, Object.assign({}, nameSpaceClassNames(ee, 'p')));
    },
    code: function (ee) {
      return React__default.createElement(Code, Object.assign({}, nameSpaceClassNames(ee, 'code')));
    },
    tt: function (ee) {
      return React__default.createElement(TT, Object.assign({}, nameSpaceClassNames(ee, 'tt')));
    },
    resetwrapper: function (ee) {
      return React__default.createElement(
        ResetWrapper,
        Object.assign({}, nameSpaceClassNames(ee, 'resetwrapper')),
      );
    },
  };
styled.div(
  function (te) {
    var ee = te.theme;
    return {
      display: 'inline-block',
      fontSize: 11,
      lineHeight: '12px',
      alignSelf: 'center',
      padding: '4px 12px',
      borderRadius: '3em',
      fontWeight: ee.typography.weight.bold,
    };
  },
  { svg: { height: 12, width: 12, marginRight: 4, marginTop: -2, path: { fill: 'currentColor' } } },
  function (te) {
    var ee = te.theme,
      re = te.status;
    switch (re) {
      case 'critical':
        return { color: ee.color.critical, background: ee.background.critical };
      case 'negative':
        return { color: ee.color.negative, background: ee.background.negative };
      case 'warning':
        return { color: ee.color.warning, background: ee.background.warning };
      case 'neutral':
        return { color: ee.color.dark, background: ee.color.mediumlight };
      case 'positive':
        return { color: ee.color.positive, background: ee.background.positive };
      default:
        return {};
    }
  },
);
var icons = {
    mobile:
      'M648 64h-272c-66.274 0-120 53.726-120 120v656c0 66.274 53.726 120 120 120h272c66.274 0 120-53.726 120-120v-656c0-66.274-53.726-120-120-120zM376 144h272c22.056 0 40 17.944 40 40v495.968h-352v-495.968c0-22.056 17.946-40 40-40zM648 880h-272c-22.054 0-40-17.944-40-40v-80.032h352v80.032c0 22.056-17.944 40-40 40zM544.034 819.962c0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.672 14.33-31.998 32-31.998 17.674-0 32.004 14.326 32.004 31.998z',
    watch:
      'M736.172 108.030c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20 0 11.046 8.956 20 20 20h408.282c11.044 0 20-8.954 20-20zM736.172 50.37c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.172 973.692c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20s8.956 20 20 20h408.282c11.044 0 20-8.956 20-20zM736.172 916.030c0-11.044-8.956-20-20-20h-408.282c-11.044 0-20 8.956-20 20 0 11.046 8.956 20 20 20h408.282c11.044 0 20-8.954 20-20zM717.53 228c18.904 0 34.286 15.14 34.286 33.75v500.502c0 18.61-15.38 33.75-34.286 33.75h-411.43c-18.904 0-34.286-15.14-34.286-33.75v-500.502c0-18.61 15.38-33.75 34.286-33.75h411.43zM717.53 148h-411.43c-63.118 0-114.286 50.928-114.286 113.75v500.502c0 62.822 51.166 113.75 114.286 113.75h411.43c63.118 0 114.286-50.926 114.286-113.75v-500.502c-0.002-62.822-51.168-113.75-114.286-113.75v0zM680.036 511.53c0 22.090-17.91 40-40 40h-128.004c-5.384 0-10.508-1.078-15.196-3.006-0.124-0.048-0.254-0.086-0.376-0.132-0.61-0.262-1.188-0.57-1.782-0.86-0.572-0.276-1.16-0.528-1.718-0.828-0.204-0.112-0.39-0.246-0.594-0.364-0.918-0.514-1.832-1.050-2.704-1.64-0.086-0.058-0.164-0.128-0.254-0.188-10.492-7.21-17.382-19.284-17.382-32.98v-151.5c0-22.094 17.91-40 40.004-40 22.088 0 40 17.906 40 40v111.498h88c22.094-0.002 40.002 17.91 40.006 40z',
    tablet:
      'M200.022 927.988h624.018c1.38 0 2.746-0.072 4.090-0.208 20.168-2.050 35.91-19.080 35.91-39.792v-751.916c0-22.092-17.91-40-40-40h-624.018c-22.098 0-40 17.908-40 40v751.916c0 22.094 17.906 40 40 40zM512.002 878.206c-17.674 0-32.004-14.328-32.004-31.998 0-17.678 14.33-32.002 32.004-32.002 17.67 0 32 14.324 32 32.002 0 17.67-14.33 31.998-32 31.998zM240.022 176.078h544.018v591.902h-544.018v-591.902z',
    browser:
      'M920.004 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.048-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c-0-22.094-17.906-40-40-40zM368 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM272 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM176 177.78c17.674 0 32.004 14.328 32.004 31.998 0 17.676-14.33 32.002-32.004 32.002-17.67 0-32-14.326-32-32.002 0-17.67 14.33-31.998 32-31.998zM880.004 815.996h-736.008v-527.988h736.008v527.988z',
    sidebar:
      'M920.032 127.858h-816c-22.092 0-40 17.908-40 40v688c0 22.092 17.908 40 40 40h316.578c1.13 0.096 2.266 0.172 3.422 0.172s2.292-0.078 3.424-0.172h492.576c22.092 0 40-17.908 40-40v-688c0-22.092-17.908-40-40-40zM144.032 207.858h240v608h-240v-608zM880.032 815.858h-416v-608h416v608zM198.734 288.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32zM198.734 416.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32zM198.734 544.030c0-17.674 14.328-32 32.002-32h66.396c17.672 0 32 14.326 32 32 0 17.676-14.324 32-32 32h-66.398c-17.674 0-32-14.326-32-32z',
    sidebaralt:
      'M64 167.944v688c0 22.092 17.908 40 40 40h816c22.092 0 40-17.908 40-40v-688c0-22.092-17.908-40-40-40h-816c-22.092 0-40 17.908-40 40zM880 815.944h-240v-608h240v608zM144 207.944h416v608h-416v-608zM793.296 320.118h-66.398c-17.676 0-32-14.324-32-32 0-17.674 14.328-32 32-32h66.396c17.674 0 32.002 14.326 32.002 32 0 17.672-14.324 32-32 32zM793.296 448.118h-66.398c-17.676 0-32-14.324-32-32 0-17.674 14.328-32 32-32h66.396c17.674 0 32.002 14.326 32.002 32 0 17.672-14.324 32-32 32zM793.296 576.118h-66.398c-17.676 0-32-14.324-32-32 0-17.674 14.328-32 32-32h66.396c17.674 0 32.002 14.326 32.002 32 0 17.672-14.324 32-32 32z',
    bottombar:
      'M85 121h854c24 0 42 18 42 41v700c0 23-18 41-42 41H608a44 44 0 0 1-7 0H85c-24 0-42-18-42-41V162c0-23 18-41 42-41zm41 535v165h772V656H126zm0-82h772V202H126v372zm185 197h-69c-19 0-34-14-34-32s15-33 34-33h69c19 0 34 15 34 33s-15 32-34 32zm236 0h-70c-18 0-33-14-33-32s15-33 33-33h70c18 0 33 15 33 33s-15 32-33 32zm235 0h-70c-18 0-33-14-33-32s15-33 33-33h70c18 0 33 15 33 33s-15 32-33 32z',
    useralt:
      'M533 960a850 850 0 0 0 386-92v-19c0-117-242-223-306-234-20-3-21-58-21-58s59-58 72-137c35 0 56-84 21-113 2-31 45-243-173-243S337 276 338 307c-34 29-13 113 22 113 13 79 72 137 72 137s-1 55-21 58c-64 11-301 115-306 231a855 855 0 0 0 428 114z',
    user: 'M814 805a525 525 0 00-217-116c-17-3-17-50-17-50s50-49 61-116c29 0 48-71 18-96 1-26 38-206-147-206S364 401 365 427c-30 25-11 96 18 96 11 67 61 116 61 116s0 47-17 50c-39 6-154 53-217 116a418 418 0 015-590 418 418 0 01594 0 418 418 0 015 590M512 0a512 512 0 100 1024A512 512 0 00512 0',
    useradd:
      'M87 859c-30-12-59-27-87-43 5-105 221-200 279-210 19-3 19-53 19-53s-54-53-65-125c-32 0-51-76-20-103-1-28-40-221 158-221 199 0 160 193 158 221 32 27 12 103-19 103-12 72-66 125-66 125s1 50 19 53c59 10 279 107 279 213v18a781 781 0 0 1-655 22zm892-565h-91v-90a45 45 0 1 0-91 0v90h-91a45 45 0 1 0 0 91h91v91a45 45 0 1 0 91 0v-91h91a45 45 0 1 0 0-91z',
    users:
      'M360 128c193 0 155 182 154 208 31 25 12 97-19 97-11 67-64 118-64 118s1 47 19 50c57 9 271 100 271 200v16a771 771 0 0 1-637 21c-29-11-57-25-84-40 4-99 215-189 271-197 18-3 18-50 18-50s-52-51-63-118c-31 0-50-72-19-97-1-26-40-208 153-208zm416 66c133 0 107 125 106 144 21 17 8 66-13 66-8 47-44 81-44 81s0 33 12 34c40 6 187 69 187 138v46c-80 27-163 41-249 41l-9-1c-16-31-44-61-83-90a546 546 0 0 0-111-64c47-38 117-66 143-70 12-1 12-34 12-34s-36-34-43-81c-21 0-34-49-13-66-1-19-27-144 105-144z',
    profile:
      'M761 631c0-13-10-23-22-23H285c-12 0-22 10-22 23 0 12 10 23 22 23h454c12 0 22-11 22-23zm0 100c0-12-10-22-22-22H285c-12 0-22 10-22 22 0 13 10 23 22 23h454c12 0 22-10 22-23zm0 101c0-13-10-23-22-23H285c-12 0-22 10-22 23s10 23 22 23h454c12 0 22-10 22-23zM832 0c59 0 107 49 107 109v807c-1 60-49 108-107 108H130c-25 0-45-20-45-46V46a45 45 0 0 1 45-46h702zm0 91H174v842h658c10 0 18-9 18-18V110c0-10-8-19-18-19zM384 532l-39-20c2-49 100-93 126-97 8-1 8-25 8-25s-24-24-29-57c-14 0-23-35-9-48-1-13-18-102 71-102s72 89 71 102c14 13 5 48-9 48-5 33-29 57-29 57s0 24 8 25c27 4 126 49 126 98v8a346 346 0 0 1-295 11z',
    bookmark:
      'M772 1012L511 761l-260 251a49 49 0 0 1-52 10c-18-7-29-24-29-43V132c0-25 21-46 47-46h588c26 0 47 21 47 46v847c0 19-11 36-29 43a49 49 0 0 1-51-10z',
    bookmarkhollow:
      'M772 1012L511 761l-260 251a49 49 0 0 1-52 10c-18-7-29-24-29-43V132c0-25 21-46 47-46h588c26 0 47 21 47 46v847c0 19-11 36-29 43a49 49 0 0 1-51-10zM545 664l213 205V181H265v688l213-205c9-9 21-14 33-14s24 5 34 14z',
    book: 'M896.054 159.774c-0.122-52.914-43.048-95.774-95.992-95.774h-632.004c-1.754 0-3.468 0.154-5.164 0.372-19.644 2.54-34.836 19.292-34.836 39.628v816c0 22.094 17.91 40 40 40h632.004c52.642 0 95.368-42.378 95.968-94.88h0.036v-705.332l-0.012-0.014zM368.062 144h80v271.922l-11.728-11.718c-15.62-15.606-40.924-15.606-56.542 0l-11.728 11.718v-271.922zM816.036 864.204c-0.1 8.712-7.268 15.796-15.972 15.796h-592.004v-736h80.004v368.426c0 16.176 9.742 30.758 24.684 36.954 14.944 6.192 32.146 2.778 43.586-8.656l51.728-51.68 51.728 51.68c7.652 7.644 17.876 11.708 28.28 11.708 5.156 0 10.356-1 15.306-3.050 14.944-6.196 24.684-20.778 24.684-36.954v-368.428h272c8.796 0 15.972 7.16 15.992 15.958l-0.016 704.246z',
    repository:
      'M856.020 159.804c-0.122-52.916-43.048-95.774-95.992-95.774h-591.968c-1.754 0-3.468 0.154-5.164 0.37-19.644 2.54-34.836 19.292-34.836 39.63v784.584c0 22.094 17.91 40 40 40h151.972v63.594c0 10.876 6.548 20.682 16.598 24.844 10.046 4.164 21.612 1.87 29.304-5.818l34.78-34.748 34.78 34.748c5.144 5.14 12.020 7.87 19.014 7.87 3.466 0 6.962-0.672 10.292-2.052 10.048-4.164 16.598-13.968 16.598-24.844v-63.594h278.63c52.642 0 95.368-42.38 95.968-94.882h0.036v-673.916l-0.012-0.012zM776.020 159.988l-0.014 504.628h-519.974v-520.584h503.996c8.796-0 15.972 7.158 15.992 15.956zM760.028 848.616h-278.63v-56h-161.366v56h-111.972v-104h567.944l-0.002 88.204c-0.102 8.71-7.27 15.796-15.974 15.796zM320.032 240.396c0-17.67 14.328-31.998 31.998-31.998s32.002 14.326 32.002 31.998c0 17.674-14.332 32-32.002 32-17.672-0.002-31.998-14.326-31.998-32zM320.032 349.79c0-17.67 14.328-31.998 31.998-31.998s32.002 14.328 32.002 31.998c0 17.676-14.332 32-32.002 32-17.672 0-31.998-14.324-31.998-32zM320.032 459.188c0-17.67 14.328-32 31.998-32s32.002 14.328 32.002 32c0 17.674-14.332 31.998-32.002 31.998-17.672 0-31.998-14.324-31.998-31.998zM384.032 568.582c0 17.674-14.332 31.998-32.002 31.998s-31.998-14.324-31.998-31.998c0-17.67 14.328-32 31.998-32 17.67 0.002 32.002 14.33 32.002 32z',
    star: 'M763.972 919.5c-6.368 0-12.758-1.518-18.61-4.596l-233.358-122.688-233.37 122.688c-13.476 7.090-29.808 5.904-42.124-3.042-12.318-8.95-18.486-24.118-15.912-39.124l44.57-259.856-188.792-184.028c-10.904-10.626-14.828-26.524-10.124-41.004s17.222-25.034 32.292-27.222l260.906-37.912 116.686-236.42c6.738-13.652 20.644-22.296 35.87-22.296v0c15.226 0 29.13 8.644 35.87 22.298l116.674 236.418 260.906 37.912c15.068 2.19 27.586 12.742 32.292 27.222s0.782 30.376-10.124 41.004l-188.792 184.028 44.24 257.93c0.62 2.796 0.946 5.704 0.946 8.688 0 22.054-17.848 39.942-39.888 40-0.054 0-0.106 0-0.158 0z',
    starhollow:
      'M763.972 919.5c-6.368 0-12.758-1.518-18.61-4.596l-233.358-122.688-233.37 122.688c-13.476 7.090-29.808 5.904-42.124-3.042-12.318-8.95-18.486-24.118-15.912-39.124l44.57-259.856-188.792-184.028c-10.904-10.626-14.828-26.524-10.124-41.004s17.222-25.034 32.292-27.222l260.906-37.912 116.686-236.42c6.738-13.652 20.644-22.296 35.87-22.296v0c15.226 0 29.13 8.644 35.87 22.298l116.674 236.418 260.906 37.912c15.068 2.19 27.586 12.742 32.292 27.222s0.782 30.376-10.124 41.004l-188.792 184.028 44.24 257.93c0.62 2.796 0.946 5.704 0.946 8.688 0 22.054-17.848 39.942-39.888 40-0.054 0-0.106 0-0.158 0zM190.256 428.144l145.812 142.13c9.428 9.192 13.73 22.432 11.504 35.406l-34.424 200.7 180.244-94.758c11.654-6.13 25.576-6.126 37.226 0l180.232 94.756-34.422-200.698c-2.226-12.974 2.076-26.214 11.504-35.406l145.812-142.13-201.51-29.282c-13.030-1.892-24.292-10.076-30.118-21.882l-90.114-182.596-90.122 182.598c-5.826 11.804-17.090 19.988-30.118 21.88l-201.506 29.282z',
    circle: 'M1024 512A512 512 0 110 512a512 512 0 011024 0z',
    circlehollow:
      'M1024 512A512 512 0 100 512a512 512 0 001024 0zM215 809a418 418 0 010-594 418 418 0 01594 0 418 418 0 010 594 418 418 0 01-594 0z',
    heart:
      'M895.032 194.328c-20.906-21.070-46.492-37.316-76.682-48.938-30.104-11.71-63.986-17.39-101.474-17.39-19.55 0-38.744 2.882-57.584 9.094-18.472 6.062-36.584 14.242-54.072 24.246-17.476 9.828-34.056 21.276-49.916 33.898-16.038 12.8-30.456 25.572-43.346 38.664-13.52-13.092-28.026-25.864-43.616-38.664-15.684-12.624-32.080-24.070-49.382-33.898-17.214-10.004-35.414-18.184-54.704-24.246-19.104-6.21-38.568-9.094-58.034-9.094-37.126 0-70.56 5.68-100.48 17.39-29.732 11.622-55.328 27.868-76.328 48.938-20.994 21.094-37.214 46.962-48.478 77.328-11.174 30.544-16.942 64.5-16.942 101.812 0 21.628 3.068 43.078 9.19 64.53 6.308 21.096 14.416 41.986 24.876 61.642 10.446 19.656 22.702 38.488 36.584 56.59 13.88 18.124 28.388 34.516 43.344 49.58l305.766 305.112c8.466 7.558 18.11 11.444 28.204 11.444 10.726 0 19.914-3.884 27.308-11.444l305.934-304.226c14.78-14.772 29.382-31.368 43.166-49.378 14.058-18.212 26.314-37.222 37.042-57.23 10.9-19.924 19.192-40.638 25.406-62 6.218-21.188 9.198-42.61 9.198-64.618 0-37.312-5.592-71.268-16.582-101.812-11.264-30.366-27.22-56.236-48.398-77.33z',
    hearthollow:
      'M716.876 208c27.708 0 52.092 4.020 72.47 11.948l0.132 0.052 0.13 0.050c19.866 7.644 35.774 17.664 48.632 30.624l0.166 0.168 0.17 0.168c12.586 12.536 22.304 28.27 29.706 48.094 7.782 21.786 11.726 46.798 11.726 74.364 0 14.658-1.95 28.426-5.958 42.086l-0.028 0.092-0.026 0.092c-4.866 16.72-11.006 31.752-18.776 45.952l-0.162 0.298-0.16 0.296c-8.81 16.434-18.58 31.532-29.864 46.148l-0.204 0.264c-11.316 14.786-23.48 28.708-36.154 41.378l-277.122 275.574-276.94-276.35c-13.32-13.43-25.248-27.074-36.488-41.75-11.386-14.848-21.284-30.136-29.444-45.49-7.206-13.54-13.494-29.17-18.7-46.472-4.030-14.264-5.988-28.044-5.988-42.116 0-27.36 4.042-52.314 12.016-74.176 7.214-19.378 17.344-35.708 30.066-48.492 12.998-13.042 28.958-23.148 48.826-30.914 20.436-8 43.764-11.886 71.32-11.886 11.536 0 22.738 1.742 33.298 5.174l0.374 0.122 0.376 0.12c13.116 4.122 26.066 9.874 38.494 17.094l0.34 0.2 0.344 0.196c12.736 7.234 25.308 15.876 38.43 26.412 14.486 11.906 27.060 23.048 38.428 34.056l56.994 55.192 55.662-56.532c10.324-10.484 22.18-21.040 36.242-32.264 13.382-10.646 26.216-19.38 39.228-26.698l0.256-0.144 0.254-0.144c13.008-7.442 26.228-13.386 39.294-17.676l0.050-0.016 0.050-0.018c10.354-3.414 20.998-5.076 32.54-5.076zM716.876 128c-19.55 0-38.744 2.882-57.584 9.094-18.472 6.062-36.584 14.242-54.072 24.246-17.476 9.828-34.056 21.276-49.916 33.898-16.038 12.8-30.456 25.572-43.346 38.664-13.52-13.092-28.026-25.864-43.616-38.664-15.684-12.624-32.080-24.070-49.382-33.898-17.214-10.004-35.414-18.184-54.704-24.246-19.104-6.21-38.568-9.094-58.034-9.094-37.126 0-70.56 5.68-100.48 17.39-29.732 11.622-55.328 27.868-76.328 48.938-20.994 21.094-37.214 46.962-48.478 77.328-11.174 30.544-16.942 64.5-16.942 101.812 0 21.628 3.068 43.078 9.19 64.53 6.308 21.096 14.416 41.986 24.876 61.642 10.446 19.656 22.702 38.488 36.584 56.59 13.88 18.124 28.388 34.516 43.344 49.58l305.766 305.112c8.466 7.558 18.11 11.444 28.204 11.444 10.726 0 19.914-3.884 27.308-11.444l305.934-304.226c14.78-14.772 29.382-31.368 43.166-49.378 14.058-18.212 26.314-37.222 37.042-57.23 10.9-19.924 19.192-40.638 25.406-62 6.218-21.188 9.198-42.61 9.198-64.618 0-37.312-5.592-71.268-16.582-101.812-11.262-30.366-27.216-56.234-48.396-77.328-20.906-21.070-46.492-37.316-76.682-48.938-30.106-11.712-63.988-17.392-101.476-17.392v0z',
    facehappy:
      'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm248 493.7c15.2 0 28.7 7.5 37 19l2.6 3.9a46 46 0 015.8 18l.3 4.9c0 6.6-1.4 13-4 18.7l-2.1 4.1A329 329 0 01232 663l-5.5-9.3a46 46 0 01-2-41.2l2-4.2v-.2a45.6 45.6 0 0176.7-4l2.5 4a237.9 237.9 0 00410 7.7l4.5-7.7a46 46 0 0139.7-22.9zM329.7 292.6a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2zm365.2 0a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2z',
    facesad:
      'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm1.1 449.2a329 329 0 01281.1 157.7l5.5 9.2a46 46 0 012 41.3l-2 4.1v.3a45.6 45.6 0 01-76.7 4l-2.6-4a238 238 0 00-410-7.7l-4.5 7.7a46 46 0 01-76.6 4l-2.6-4a46 46 0 01-5.9-18l-.2-5c0-6.6 1.4-12.9 4-18.6l2.1-4.2a329 329 0 01286.4-166.8zm-183.4-248a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2zm365.2 0a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2z',
    faceneutral:
      'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm248 521.2a45.7 45.7 0 014.7 91.2l-4.7.2H266.3a45.7 45.7 0 01-4.7-91.2l4.7-.2H760zm-430.3-320a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2zm365.2 0a73.1 73.1 0 110 146.2 73.1 73.1 0 010-146.2z',
    lock: 'M896.032 915.53v-467.498c0-19.102-13.402-35.052-31.31-39.026-0.21-0.046-0.414-0.12-0.628-0.162-0.444-0.090-0.904-0.13-1.354-0.208-2.186-0.37-4.416-0.606-6.708-0.606h-55.902l0.002-55.85h0.020c0-159.14-129.010-288.15-288.15-288.15-159.128 0-288.13 128.992-288.15 288.118v55.884h-54.852c-20.71 0-37.746 15.742-39.792 35.91-0.136 1.344-0.208 2.708-0.208 4.090v463.332c-0.618 2.792-0.968 5.688-0.968 8.668 0 22.094 17.91 40 40 40h688.27c22.092 0 40-17.91 40-40-0.002-1.524-0.104-3.024-0.27-4.502zM209 488.032h607.032v392h-607.032v-392zM303.85 352.182c0-114.776 93.376-208.15 208.15-208.15 114.59 0 207.842 93.074 208.142 207.596 0 0.084-0.012 0.164-0.012 0.248v56.156h-416.284l0.004-55.85zM552.164 691.858l-0.002 58.188c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40v-57.974c-14.704-11.726-24.134-29.782-24.134-50.048 0-35.346 28.654-64 64-64s64 28.654 64 64c0 20.142-9.318 38.104-23.868 49.836z',
    unlock:
      'M896.032 915.53v-467.498c0-1.988-0.194-3.926-0.472-5.834-0.11-0.744-0.192-1.498-0.34-2.226-1.524-7.44-5.136-14.1-10.164-19.408-0.252-0.266-0.48-0.554-0.738-0.814-0.496-0.494-1.036-0.944-1.554-1.412-0.43-0.386-0.84-0.8-1.288-1.17-0.292-0.24-0.608-0.446-0.904-0.676-2.506-1.954-5.244-3.616-8.176-4.934-0.744-0.334-1.504-0.632-2.27-0.922-4.39-1.656-9.124-2.604-14.094-2.604h-552.184l0.002-55.85c0-114.776 93.376-208.15 208.15-208.15 86.038 0 160.034 52.474 191.7 127.096 0.012 0.028 0.030 0.044 0.042 0.072 5.978 14.566 20.284 24.832 37.006 24.832 22.090 0 40-17.906 40-40 0-4.71-0.86-9.21-2.354-13.41-0.182-0.694-0.42-1.438-0.782-2.292-43.666-103.582-146.14-176.296-265.612-176.296-159.128 0-288.13 128.994-288.15 288.12v55.882h-54.85c-20.71 0-37.746 15.742-39.792 35.91-0.136 1.344-0.208 2.708-0.208 4.090v463.332c-0.618 2.794-0.968 5.688-0.968 8.668 0 22.094 17.91 40 40 40h688.27c22.092 0 40-17.91 40-40-0.002-1.528-0.104-3.028-0.27-4.506zM209 488.032h607.032v392h-607.032v-392zM552.164 691.86l-0.002 58.186c0.004 22.088-17.906 39.996-39.996 40-22.094 0-40.004-17.908-40-40v-57.976c-14.702-11.726-24.134-29.782-24.134-50.048 0-35.346 28.654-64 64-64s64 28.654 64 64c0 20.142-9.318 38.102-23.868 49.838z',
    key: 'M768.032 320.032c0 35.346-28.654 64-64 64s-64-28.654-64-64 28.654-64 64-64 64 28.654 64 64zM960.032 353.092c0 159.062-128.946 288.010-288.008 288.010-35.306 0-69.124-6.368-100.38-17.996l-27.736 27.738-0.002 54.464c0 0.016 0.002 0.028 0.002 0.040 0 11.046-4.478 21.046-11.716 28.29-6.334 6.332-14.784 10.55-24.196 11.508-1.346 0.136-2.708 0.208-4.090 0.208h-71.748l-0.002 71.96c0 0.012 0.002 0.040 0.002 0.040 0 11.046-4.478 21.046-11.716 28.286-6.334 6.336-14.784 10.554-24.196 11.508-1.346 0.136-2.708 0.208-4.090 0.208h-71.996l-0.002 62.684c0 22.094-17.908 40-40 40-0.022 0-0.042 0-0.062 0-0.022 0-0.042 0-0.064 0h-175.996c-13.76 0-25.888-6.95-33.086-17.524-4.362-6.406-6.916-14.14-6.916-22.476v-112c0-0.664 0.066-1.308 0.1-1.964 0.032-0.618 0.034-1.234 0.092-1.852 0.11-1.148 0.288-2.278 0.492-3.398 0.024-0.128 0.034-0.258 0.058-0.386 1.614-8.378 5.848-15.808 11.808-21.446l325.456-325.458c-11.642-31.274-18.020-65.11-18.020-100.44 0-159.060 128.946-288.006 288.006-288.006 159.060-0.004 288.006 128.942 288.006 288.002zM880.032 353.092c0-114.696-93.312-208.006-208.008-208.006s-208.006 93.31-208.006 208.006c0 43.208 13.246 83.376 35.884 116.668l-57.36 57.362c-0.136-0.184-0.27-0.368-0.408-0.546l-298.102 298.106-0.002 55.356h96.124v-62.684c0-0.708 0.070-1.394 0.106-2.094 0.036-0.664 0.036-1.336 0.102-1.992 0.132-1.316 0.334-2.61 0.592-3.882 0.006-0.028 0.008-0.058 0.014-0.090 0.258-1.262 0.58-2.5 0.956-3.714 0.012-0.040 0.018-0.078 0.030-0.118 4.676-15.032 17.976-26.262 34.114-27.902 1.344-0.136 2.708-0.208 4.090-0.208h71.998v-67.64c-0.156-1.434-0.248-2.882-0.248-4.36 0-22.094 17.908-40 40-40h71.998v-30.692c0-0.148 0.020-0.29 0.022-0.438 0.008-10.226 3.912-20.45 11.714-28.254l55.99-55.988c1.982-1.984 4.124-3.71 6.38-5.188l18.68-18.684c33.030 22.090 72.702 34.992 115.332 34.992 114.694-0 208.008-93.314 208.008-208.010z',
    arrowleftalt:
      'M107.854 539.924l282.834 283.272c15.594 15.65 40.92 15.692 56.568 0.1 15.648-15.594 15.694-40.92 0.1-56.568l-214.838-215.040h655.412c22.092 0 40-17.908 40-40s-17.908-40-40-40h-655l214.75-214.61c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.834-18.066-11.752-28.32-11.75-10.22 0-20.442 3.892-28.25 11.68l-283.242 282.93c-15.634 15.594-15.672 40.91-0.084 56.554z',
    arrowrightalt:
      'M916.266 483.792l-282.834-283.272c-15.594-15.65-40.92-15.692-56.568-0.1-15.648 15.594-15.694 40.92-0.1 56.568l214.838 215.040h-655.412c-22.092 0-40 17.908-40 40s17.908 40 40 40h655l-214.748 214.61c-15.64 15.602-15.672 40.928-0.070 56.568 7.814 7.834 18.066 11.752 28.32 11.75 10.22 0 20.442-3.892 28.25-11.68l283.242-282.93c15.632-15.596 15.67-40.91 0.082-56.554z',
    sync: 'M135.6 442.5a41 41 0 0130 12l94.9 94.6c16 16 16 42 0 58s-42.1 16-58.2 0l-30.1-30a341.9 341.9 0 0095 178.6c65.3 65 152 101 244.3 101 92.3 0 179-36 244.3-101a345 345 0 0066.8-93.6 41.1 41.1 0 0174.3 35v.2l-.1.2-5.2 10.3a427.8 427.8 0 01-380 230.9A427.5 427.5 0 0190.1 585.8l-20 20c-16 16-42 16-58.2 0a41 41 0 010-58l93.6-93.3a41 41 0 0130-12zm376-357.2c208.9 0 382.8 149.5 420.1 347.1l22-22c16.1-16 42.2-16 58.2 0s16 42 0 58l-93.5 93.4a41 41 0 01-30 12 41 41 0 01-30-12L763.5 467a41 41 0 010-58c16-16 42.1-16 58.2 0l26.8 26.8a342 342 0 00-92.7-167.6c-65.3-65-152-101-244.3-101-92.3 0-179 36-244.2 101a345.2 345.2 0 00-66.9 93.6 41.1 41.1 0 01-74.3-35v-.2l.2-.2c.7-1.7.2-.8 5.1-10.3A427.8 427.8 0 01511.5 85.3z',
    reply:
      'M679.496 431.738c-0.414-0.062-0.834-0.102-1.266-0.102h-477.482l171.506-171.504c15.622-15.622 15.622-40.95-0.002-56.57-15.62-15.624-40.948-15.624-56.568 0l-239.734 239.732c-0.958 0.956-1.868 1.958-2.724 3.006-0.328 0.402-1.884 2.482-2.324 3.138-0.36 0.54-1.696 2.77-2.008 3.352-0.308 0.58-1.424 2.936-1.676 3.544-0.036 0.086-0.468 1.268-0.648 1.774-0.23 0.636-0.474 1.266-0.672 1.918-0.186 0.612-0.818 3.13-0.95 3.788-0.148 0.748-0.522 3.318-0.574 3.862-0.262 2.642-0.262 5.3 0 7.942 0.044 0.448 0.412 3.032 0.58 3.874 0.112 0.556 0.74 3.088 0.958 3.808 0.158 0.524 1.036 2.992 1.328 3.7 0.192 0.458 1.298 2.828 1.688 3.552 0.208 0.386 0.446 0.75 0.666 1.126 0.436 0.752 1.844 2.888 2.084 3.224 0.52 0.724 4.262 5.074 4.29 5.098l239.718 239.72c15.62 15.618 40.948 15.618 56.57 0 15.62-15.624 15.622-40.948 0-56.57l-171.516-171.514h471.296c114.52 0.084 207.688 93.124 207.988 207.594 0 0.084-0.012 0.164-0.012 0.248v95.876c-0.004 22.094 17.906 40.002 40 40 22.090-0.002 40-17.91 39.996-39.998l0.004-95.57h0.020c0-156.594-124.914-284.012-280.536-288.048z',
    undo: 'M230 301h480a240 240 0 1 1 0 481H235c-23 0-42-20-42-43 0-24 19-43 42-43h475a155 155 0 0 0 0-310H228l3 3 65 65a45 45 0 0 1-65 64L90 376a45 45 0 0 1 0-64l142-142a45 45 0 1 1 64 65l-63 62-3 4z',
    transfer:
      'M916.25 348.726l-125 124.688c-7.808 7.79-18.032 11.68-28.25 11.68-10.254 0.002-20.506-3.918-28.32-11.75-15.602-15.64-15.57-40.966 0.070-56.568l56.508-56.368h-655.258c-22.092 0-40-17.908-40-40s17.908-40 40-40h655.672l-57.006-57.206c-15.594-15.646-15.548-40.972 0.1-56.566s40.972-15.55 56.568 0.098l125 125.438c15.588 15.644 15.548 40.958-0.084 56.554zM107.666 731.892l125 125.438c15.596 15.648 40.92 15.692 56.568 0.098s15.694-40.92 0.1-56.566l-57.006-57.206h655.672c22.092 0 40-17.908 40-40s-17.908-40-40-40h-655.258l56.508-56.368c15.64-15.602 15.672-40.928 0.070-56.568-7.814-7.832-18.066-11.752-28.32-11.75-10.218 0-20.442 3.89-28.25 11.68l-125 124.688c-15.632 15.596-15.672 40.91-0.084 56.554z',
    redirect:
      'M913.852 702.796c-15.594-15.648-40.922-15.694-56.57-0.1l-57.204 57.006v-451.424c0-0.372-0.028-0.736-0.074-1.098-0.458-99.016-80.86-179.15-179.988-179.15-99.412 0-180 80.592-180 180 0 0.084 0.004 0.166 0.004 0.248h-0.004v343.504h-0.006c0 0.082 0.006 0.164 0.006 0.248 0 55.14-44.86 100-100 100s-100-44.86-100-100c0-0.084 0.006-0.166 0.006-0.248h-0.002v-483.752c0-22.092-17.91-40-40-40s-40.004 17.908-40.004 40v483.752c0 0.018 0.002 0.036 0.002 0.054 0 0.064-0.002 0.128-0.002 0.194 0 99.408 80.59 180 180 180 99.412 0 180-80.592 180-180 0-0.084-0.004-0.166-0.004-0.248h0.004v-343.504h0.008c0-0.082-0.008-0.164-0.008-0.248 0-55.138 44.86-100 100-100s100 44.862 100 100c0 0.084-0.008 0.166-0.008 0.248h0.070v451.008l-56.368-56.506c-15.602-15.642-40.93-15.67-56.566-0.070-7.836 7.814-11.754 18.066-11.754 28.32 0 10.218 3.894 20.442 11.68 28.252l124.692 125c15.594 15.632 40.91 15.67 56.554 0.084l125.434-125c15.652-15.598 15.692-40.92 0.102-56.57z',
    expand:
      'M433.4 578.8l6.2 5.2a44.8 44.8 0 010 63.3L238.4 849.1h100.3a44.8 44.8 0 018 88.8l-8 .8H130l-6.2-.5 2.7.3h-.3a44.7 44.7 0 01-24.8-10.2l-.3-.3-.3-.2-.3-.4-.3-.2-.3-.2v-.2h-.1l-.2-.1a45.7 45.7 0 01-13.5-24.8l-.3-1.7a45 45 0 01-.5-5.3V685.7a44.8 44.8 0 0189-8.1l.6 8 .1 100L376.3 584a44.8 44.8 0 0157.1-5.2zm157.2 0a44.8 44.8 0 0157.1 5.2L849 785.7v-100l.8-8.1a44.8 44.8 0 0188.9 8V895a45 45 0 01-.5 5.3l-.3 1.7a38.6 38.6 0 01-2.8 9.4 43.4 43.4 0 01-9.6 14.2l-4.7 4.2 2-1.7.7-.6-.3.4a44.1 44.1 0 01-4.4 3.3l-.6.4a45.8 45.8 0 01-20.4 7h-.3.9l1.8-.3-6.2.5H685.3l-8-.8a44.8 44.8 0 018-88.8h100.3L584.4 647.3a44.8 44.8 0 010-63.3zM98.5 925.5l1.3 1.3.1.2.6.4a45 45 0 002 1.7l.7.6-4.7-4.2zM893.9 85.3h.9-.8l6.2.5a45 45 0 00-1.8-.2l-.9-.1h-1l-.5-.1h-1.2 2.7l.3.1a44.7 44.7 0 0125.4 10.7l.3.3v.1l.3.2.3.2v.2h.1l.2.1.6.6.5.6A45.6 45.6 0 01938 122l.3 1.7c.3 1.8.4 3.6.5 5.3v209.2a44.8 44.8 0 01-89 8.1l-.6-8-.1-100L647.7 440a44.8 44.8 0 01-57.1 5.2l-6.2-5.2a44.8 44.8 0 010-63.3l201.2-201.8H685.3a44.8 44.8 0 01-8-88.8l8-.8H894h-.1zm-555.2 0l8 .8a44.8 44.8 0 01-8 88.8H238.4l201.2 201.8a44.8 44.8 0 010 63.3l-6.2 5.2a44.8 44.8 0 01-57.1-5.2L175 238.3v100l-.8 8.1a44.8 44.8 0 01-88.9-8V129c0-1.7.2-3.5.5-5.3l.3-1.7a38.6 38.6 0 012.8-9.4 43.4 43.4 0 019.6-14.2l4.7-4.2-2 1.7.2-.3a43.7 43.7 0 0124.8-10.2h1.3l.3-.1h2.3-.1 208.7zm582 9l4.8 4.2-1.3-1.3-.1-.2-.5-.4h-.1l-.6-.6-1.4-1.1-.7-.6zm-790.7-9h-2l-.5.1h-1l-.9.2c-.6 0-1.2 0-1.8.2l6.2-.5z',
    expandalt:
      'M479.7 13.4L205.4 287.6a45.7 45.7 0 1064.7 64.7l242-242 241.8 241.9a45.7 45.7 0 1064.7-64.7L544.4 13.4a45.6 45.6 0 00-64.7 0M512 1024a45.6 45.6 0 01-32.3-13.4L205.4 736.5a45.7 45.7 0 1164.7-64.7l241.8 241.8 242-241.9a45.7 45.7 0 1164.7 64.7l-274.3 274.2c-9 9-20.7 13.4-32.4 13.4',
    collapse:
      'M479.7 411L205.4 136.6a45.7 45.7 0 1164.7-64.6L512 314 753.9 72.2a45.7 45.7 0 1164.7 64.6L544.4 411a45.6 45.6 0 01-64.7 0M512 598.3a45.6 45.6 0 00-32.3 13.4L205.4 885.8a45.7 45.7 0 1064.7 64.7l241.8-241.8 242 242a45.7 45.7 0 1064.7-64.7L544.3 611.7c-9-8.9-20.7-13.4-32.4-13.4',
    grow: 'M541.146 448.384c-1.694-0.216-3.408-0.37-5.162-0.37h-367.968c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v368.032c0 22.094 17.91 40 40 40h367.968c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-368.036c0-20.34-15.192-37.094-34.838-39.632zM208.016 816.046v-288.032h287.968v288.032h-287.968zM736.032 856.046c0 22.090-17.908 40-40 40-22.090 0-40-17.908-40-40v-487.902l-488.016 0.002c-22.090 0-40-17.91-40-40s17.908-40.002 40-40.002h528.016c1.754 0 3.468 0.152 5.162 0.37 19.646 2.538 34.838 19.292 34.838 39.63v527.902zM896.032 168.030v688.004c-0.002 22.088-17.91 39.996-40 39.996s-40.002-17.908-40.002-40c0 0 0.002-304.026 0.002-304.040v-343.96h-343.96c-0.014 0-304.040 0.002-304.040 0.002-22.090 0-40-17.91-40-40s17.908-40.002 40-40.002h688c1.754 0 3.468 0.152 5.162 0.37 19.646 2.536 34.838 19.29 34.838 39.63z',
    arrowleft:
      'M257.93 511.976c0-10.236 3.902-20.47 11.71-28.282l344.098-344.158c15.622-15.624 40.946-15.624 56.57-0.006 15.622 15.622 15.624 40.948 0.004 56.568l-315.82 315.876 315.868 315.922c15.618 15.624 15.618 40.952-0.004 56.568-15.622 15.62-40.95 15.618-56.57-0.006l-344.146-344.202c-7.808-7.81-11.71-18.044-11.71-28.28z',
    arrowup:
      'M512.024 256c10.236 0 20.47 3.904 28.282 11.712l344.154 344.098c15.624 15.62 15.624 40.946 0.006 56.57-15.622 15.622-40.948 15.624-56.568 0.004l-315.876-315.82-315.922 315.868c-15.624 15.618-40.952 15.618-56.568-0.004-15.62-15.624-15.618-40.95 0.006-56.57l344.204-344.144c7.81-7.81 18.046-11.714 28.282-11.714z',
    arrowdown:
      'M511.976 768.002c-10.236 0-20.47-3.904-28.282-11.712l-344.154-344.098c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l315.876 315.82 315.922-315.868c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-344.204 344.144c-7.81 7.81-18.046 11.714-28.282 11.714z',
    arrowright:
      'M768.072 514.022c0 10.236-3.904 20.47-11.712 28.282l-344.098 344.156c-15.62 15.624-40.946 15.624-56.568 0.006-15.622-15.622-15.624-40.948-0.006-56.568l315.82-315.876-315.868-315.922c-15.618-15.624-15.618-40.952 0.004-56.568 15.624-15.62 40.95-15.618 56.57 0.006l344.144 344.204c7.81 7.81 11.714 18.044 11.714 28.28z',
    chevrondown:
      'M511.976 833c-10.236 0-20.47-3.904-28.282-11.712l-471.934-471.874c-15.624-15.62-15.624-40.946-0.006-56.57 15.622-15.622 40.948-15.624 56.568-0.004l443.652 443.598 443.61-443.556c15.624-15.618 40.952-15.616 56.568 0.004 15.62 15.624 15.618 40.95-0.006 56.57l-471.89 471.832c-7.808 7.808-18.044 11.712-28.28 11.712z',
    back: 'M512 932.6c-112.3 0-218-43.8-297.4-123.2A417.8 417.8 0 0191.4 512c0-112.3 43.8-218 123.2-297.4A417.8 417.8 0 01512 91.4c112.3 0 218 43.8 297.4 123.2A417.8 417.8 0 01932.6 512c0 112.3-43.8 218-123.2 297.4A417.8 417.8 0 01512 932.6zm0 91.4A512 512 0 10512 0a512 512 0 000 1024zM232.7 542.5l142.8 143.3a45.7 45.7 0 0064.8-64.5L375 555.9h383.7a45.7 45.7 0 000-91.4H375.6l64.6-64.4a45.7 45.7 0 10-64.6-64.8L232.8 477.8a45.7 45.7 0 00-.1 64.6z',
    download:
      'M543.8 791.3a45.7 45.7 0 01-64.6 0l-142.5-143a45.6 45.6 0 010-64.6 45.7 45.7 0 0164.7 0l64.5 64.7V265.2a45.7 45.7 0 1191.4 0v383.6l65.4-65.1a45.7 45.7 0 1164.5 64.8L543.8 791.3zM1024 512A512 512 0 110 512a512 512 0 011024 0zm-91.4 0c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512z',
    upload:
      'M480.2 232.7a45.7 45.7 0 0164.6 0l142.5 143a45.6 45.6 0 010 64.6 45.7 45.7 0 01-64.7 0L558 375.5v383.2a45.7 45.7 0 11-91.4 0V375.2l-65.4 65.1a45.7 45.7 0 11-64.5-64.8l143.4-142.8zM0 512a512 512 0 111024 0A512 512 0 010 512zm91.4 0c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512z',
    proceed:
      'M791.3 480.2L648.5 336.8a45.7 45.7 0 10-64.8 64.5l65.1 65.4H265.2a45.7 45.7 0 100 91.4h383.2l-64.6 64.5a45.7 45.7 0 0064.6 64.7l142.8-142.5a45.7 45.7 0 00.1-64.6M512 0a512 512 0 100 1024A512 512 0 00512 0m0 91.4c112.3 0 218 43.8 297.4 123.2A417.8 417.8 0 01932.6 512c0 112.3-43.8 218-123.2 297.4A417.8 417.8 0 01512 932.6c-112.3 0-218-43.8-297.4-123.2A417.8 417.8 0 0191.4 512c0-112.3 43.8-218 123.2-297.4A417.8 417.8 0 01512 91.4',
    info: 'M874.04 149.96c199.95 199.95 199.95 524.14 0 724.08-199.95 199.95-524.13 199.95-724.08 0-199.95-199.95-199.95-524.13 0-724.08 199.95-199.95 524.13-199.95 724.08 0zM512 91.43c-112.34 0-217.95 43.75-297.39 123.18-79.43 79.44-123.18 185.05-123.18 297.4 0 112.33 43.75 217.94 123.18 297.38 79.44 79.43 185.05 123.18 297.4 123.18 112.33 0 217.94-43.75 297.38-123.18C888.82 729.95 932.57 624.34 932.57 512c0-112.34-43.75-217.95-123.18-297.39C729.95 135.18 624.34 91.43 512 91.43zm1.14 318.96a45.73 45.73 0 00-45.11 38.3l-.6 7.42v274.28a45.71 45.71 0 0090.83 7.42l.6-7.42V456.11a45.72 45.72 0 00-45.72-45.72zm0-162.25a45.72 45.72 0 100 91.44 45.72 45.72 0 000-91.44z',
    question:
      'M874.04 149.96c199.95 199.95 199.95 524.13 0 724.08-199.95 199.95-524.13 199.95-724.08 0-199.95-199.95-199.95-524.13 0-724.08 199.95-199.95 524.13-199.95 724.08 0zM512 91.43c-112.34 0-217.95 43.75-297.39 123.18-79.43 79.44-123.18 185.05-123.18 297.4 0 112.33 43.75 217.95 123.18 297.38 79.44 79.43 185.05 123.18 297.4 123.18 112.33 0 217.94-43.75 297.38-123.18C888.82 729.96 932.57 624.34 932.57 512c0-112.34-43.75-217.95-123.18-297.39C729.95 135.18 624.34 91.43 512 91.43zm1.14 640.9a45.72 45.72 0 100 91.43 45.72 45.72 0 000-91.44zm-1.14-549c-111.3 0-201.52 90.22-201.52 201.52a45.71 45.71 0 0090.84 7.41l.6-7.47c.03-60.68 49.4-110.03 110.08-110.03 60.7 0 110.1 49.38 110.1 110.09 0 60.7-49.4 110.09-110.1 110.09v.17a45.68 45.68 0 00-44.57 45.65v100.58a45.7 45.7 0 1091.42 0v-60.46c88.7-21.12 154.67-100.87 154.67-196.03 0-111.3-90.22-201.52-201.52-201.52z',
    support:
      'M512 932.57c-87.57 0-171.05-26.59-241.23-75.93l106-106a273.98 273.98 0 00135.26 35.62c46.7 0 93.41-11.88 135.22-35.6l105.98 105.98c-70.19 49.34-153.66 75.93-241.23 75.93m-344.64-661.8l105.97 105.98c-47.44 83.63-47.43 186.86.02 270.49L167.36 753.22C118.02 683.04 91.43 599.56 91.43 512c0-87.57 26.59-171.05 75.93-241.23m585.87-103.41L647.29 273.3a273.95 273.95 0 00-135.26-35.61c-46.74 0-93.47 11.9-135.3 35.63L270.77 167.36C340.96 118.02 424.43 91.43 512 91.43s171.05 26.59 241.23 75.93m-370.5 473.91c-71.3-71.3-71.3-187.3 0-258.6a181.7 181.7 0 01129.3-53.55h.02c48.83 0 94.74 19.02 129.28 53.56 71.29 71.29 71.29 187.3 0 258.6a181.66 181.66 0 01-129.3 53.55 181.67 181.67 0 01-129.3-53.56m473.91 111.95L750.68 647.27c47.48-83.65 47.48-186.91.02-270.56l105.94-105.94c49.34 70.18 75.93 153.66 75.93 241.23s-26.59 171.04-75.93 241.22m17.4-603.26c-199.95-199.95-524.13-199.95-724.08 0-199.95 199.95-199.95 524.13 0 724.08 199.95 199.95 524.13 199.95 724.08 0 199.95-199.95 199.95-524.13 0-724.08',
    alert:
      'M511.998 623.846c-22.090 0-40-17.906-40-40v-208c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v208c0 22.094-17.914 40-40.004 40v0zM511.998 743.846c22.090 0 40.004-17.906 40.004-40v0c0-22.090-17.914-40-40.004-40v0c-22.090 0-40 17.91-40 40v0c0 22.094 17.91 40 40 40v0zM512.142 211.808l-340.074 589.028h680.148l-340.074-589.028zM512.142 92.51c14.5 0 29 9.526 40 28.58l398.638 690.462c22 38.106 4 69.282-40 69.282h-797.278c-44 0-62-31.176-40-69.282l398.638-690.462c11.002-19.052 25.502-28.58 40.002-28.58v0z',
    bell: 'M901.344 760.018l-57.644-77.648c-7.906-7.906-11.77-38.284-11.71-48.646h0.042v-200.588h-0.364c-6.878-148.106-114.428-269.902-255.792-298.528 0.208-2.1 0.318-4.228 0.318-6.384 0-35.452-28.738-64.194-64.194-64.194-35.458 0-64.194 28.742-64.194 64.194 0 2.19 0.112 4.352 0.326 6.486-141.128 28.802-248.446 150.488-255.316 298.426h-0.364v200.588h0.042c0.058 10.362-3.804 40.74-11.71 48.646l-57.644 77.648c-8.802 8.802-16.35 18.978-16.35 32.208 0 22.092 17.908 40 40 40h255.876c-0.814 5.412-1.28 10.936-1.28 16.576 0 61.43 49.794 111.23 111.23 111.23 61.432 0 111.228-49.8 111.228-111.23 0-5.638-0.464-11.164-1.282-16.576h255.128c22.092 0 40-17.908 40-40 0.004-13.23-7.542-23.404-16.346-32.208zM272.732 436.848c2.862-61.602 29.032-119.104 73.69-161.91 44.786-42.93 103.628-66.62 165.692-66.706h0.26c62.062 0.086 120.906 23.776 165.692 66.706 44.658 42.806 70.828 100.308 73.69 161.91l0.278 5.962v149.384h-479.58v-149.384l0.278-5.962zM543.846 848.8c0 17.22-14.010 31.23-31.228 31.23-17.22 0-31.23-14.010-31.23-31.23 0-6.096 1.784-11.768 4.82-16.576h52.818c3.038 4.81 4.82 10.482 4.82 16.576zM512.484 752.226h-283.922l14.572-19.63c12.064-14.542 20.078-33.27 24.982-58.158 0.146-0.742 0.276-1.496 0.416-2.244h487.42c0.138 0.748 0.268 1.5 0.414 2.244 4.904 24.888 12.918 43.616 24.982 58.158l14.572 19.63h-283.436z',
    rss: 'M256.094 865.048c0 53.020-42.972 96-96 96-53.020 0-96-42.98-96-96 0-53.016 42.98-96 96-96s96 42.984 96 96zM510.020 918.352c-0.018-0.172-0.042-0.344-0.050-0.52-0.054-0.676-0.124-1.34-0.214-2.004-10.582-105.644-57.866-200.46-128.894-271.536v0c-71.074-71.054-165.906-118.352-271.564-128.934-0.664-0.090-1.33-0.16-2.006-0.214-0.174-0.016-0.348-0.040-0.52-0.054-0.254-0.024-0.5-0.024-0.742-0.008-0.64-0.032-1.278-0.098-1.922-0.098-22.098 0-40 17.908-40 40 0 20.582 15.542 37.516 35.536 39.738 0.042 0.004 0.066 0.036 0.106 0.040 84.82 8.098 163.514 45.024 224.542 106.042v0c61.036 61.036 97.964 139.738 106.070 224.574 0.004 0.040 0.036 0.070 0.042 0.106 2.222 19.988 19.156 35.536 39.736 35.536 22.092 0 40-17.902 40-40 0-0.644-0.066-1.282-0.098-1.922 0-0.246 0-0.492-0.022-0.746zM734.688 918.45c-0.004-0.090-0.018-0.186-0.024-0.276-0.040-0.544-0.058-1.102-0.124-1.638-10.972-167.816-83.558-318.804-195.33-430.616h0.002c-111.812-111.788-262.81-184.384-430.644-195.36-0.542-0.060-1.094-0.084-1.642-0.122-0.092-0.008-0.182-0.016-0.272-0.022-0.020-0.002-0.042 0.004-0.054 0.004-0.836-0.052-1.664-0.124-2.512-0.124-22.092 0-40 17.908-40 40 0 21.036 16.246 38.24 36.874 39.842 0.046 0.008 0.078 0.038 0.128 0.042 66.876 4.086 131.786 19.292 193.406 45.358 70.472 29.81 133.78 72.494 188.166 126.874v0c54.394 54.396 97.090 117.71 126.902 188.204 26.064 61.624 41.274 126.532 45.362 193.408 0.004 0.052 0.036 0.080 0.042 0.13 1.604 20.624 18.802 36.87 39.844 36.87 22.090 0 40-17.904 40-40 0-0.85-0.074-1.678-0.126-2.514-0.002-0.024 0.006-0.040 0.002-0.060zM959.126 920.556c-0.002-0.094 0.008-0.164 0.004-0.262-10.342-231.204-108.314-439.604-261.486-592.796v-0.002c-153.2-153.19-361.61-251.174-592.828-261.518-0.096-0.004-0.168 0.006-0.262 0.004-0.176-0.004-0.348-0.030-0.524-0.030-22.098 0-40 17.91-40 40 0 20.988 16.168 38.164 36.716 39.834 0.184 0.042 0.356 0.086 0.566 0.098 97.040 4.314 191.186 25.538 280.376 63.258 97.14 41.090 184.406 99.928 259.368 174.876v0c74.96 74.964 133.81 162.24 174.908 259.398 37.718 89.19 58.946 183.336 63.26 280.376 0.010 0.208 0.052 0.38 0.096 0.562 1.67 20.552 18.848 36.72 39.834 36.72 22.092 0 40-17.906 40-40-0-0.17-0.024-0.342-0.028-0.518z',
    edit: 'M948.56 263.376c12.704-12.708 15.072-31.836 7.11-46.936-1.84-3.524-4.232-6.832-7.192-9.792-0.286-0.286-0.594-0.528-0.886-0.8l-129.318-128.634c-0.048-0.048-0.088-0.106-0.138-0.154-7.812-7.812-18.050-11.716-28.292-11.714-10.242-0.004-20.484 3.902-28.296 11.714-0.064 0.066-0.12 0.136-0.184 0.204l-636.168 636.168c-5.868 5.134-10.21 11.958-12.298 19.748l-47.606 177.664c-3.7 13.804 0.248 28.534 10.352 38.638 7.602 7.6 17.816 11.714 28.288 11.714 3.452 0 6.93-0.446 10.352-1.364l177.664-47.606c7.296-1.956 13.732-5.904 18.74-11.216l521.486-521.484c1.126-0.904 2.222-1.87 3.268-2.914 1.042-1.044 2.006-2.138 2.91-3.264l107.75-107.748c0.836-0.71 1.668-1.432 2.458-2.224zM806.9 291.66l-73.592-73.202 56.61-56.61 73.594 73.2-56.612 56.612zM281.566 816.996l-73.4-73.4 468.572-468.568 73.594 73.202-468.766 468.766zM160.496 864.628l11.742-43.822 32.080 32.080-43.822 11.742z',
    paintbrush:
      'M946.58 293.66c12.704-12.708 15.072-31.836 7.108-46.938-1.838-3.524-4.23-6.83-7.19-9.79-0.282-0.282-0.588-0.52-0.876-0.792l-129.338-128.654c-0.046-0.046-0.084-0.098-0.13-0.144-7.814-7.812-18.056-11.718-28.296-11.714-10.24 0-20.48 3.906-28.292 11.714-0.064 0.066-0.12 0.138-0.184 0.206l-557.048 557.048c-2.194 2.192-4.042 4.59-5.622 7.11-70.624 87.486-17.922 195.43-174.738 239.554 0 0 64.758 18.11 144.33 18.11 74.374 0 161.678-15.824 221.23-77.020 0.394-0.364 0.808-0.696 1.192-1.078l1.734-1.734c0.852-0.798 1.678-1.578 2.504-2.426 0.348-0.356 0.668-0.728 1.010-1.086l168.756-168.756c1.126-0.906 2.224-1.872 3.272-2.918 1.044-1.044 2.008-2.14 2.914-3.266l375.212-375.212c0.834-0.706 1.664-1.424 2.452-2.214zM537.462 589.402l-73.594-73.206 324.068-324.064 73.594 73.2-324.068 324.070zM388.178 667.684c-13.288-13.632-28.584-23.974-44.78-31.016l63.902-63.902 73.596 73.204-64.246 64.248c-6.498-15.23-15.964-29.698-28.472-42.534zM229.848 791.928c8.294-30.346 14.852-54.332 32.416-73.862 0.83-0.864 2.664-2.702 4.26-4.286 8.030-6.792 17.534-8.246 24.198-8.246 14.386 0 29.026 6.554 40.162 17.98 19.592 20.106 21.934 49.238 5.596 66.874l-1.712 1.712c-0.798 0.752-1.612 1.524-2.462 2.354l-0.86 0.84-0.834 0.864c-30.666 31.79-75.914 45.424-118.104 50.542 7.53-18.888 12.598-37.426 17.34-54.772z',
    close:
      'M150 150a512 512 0 11724 724 512 512 0 01-724-724zm69.3 64.2A418.5 418.5 0 0095.9 512a418.5 418.5 0 00123.4 297.8A418.5 418.5 0 00517 933.2 418.5 418.5 0 00815 809.8 418.5 418.5 0 00938.4 512 418.5 418.5 0 00815 214.2 418.5 418.5 0 00517 90.8a418.5 418.5 0 00-297.8 123.4zM655 304a46 46 0 0165 65L577 512l143 143a46 46 0 11-65 65L512 577 369 720a46 46 0 11-65-65l143-143-143-143a46 46 0 0165-65l143 143 143-143z',
    closeAlt:
      'M586.7 512L936 861.4a52.8 52.8 0 0 1-74.6 74.7L512 586.7 162.6 936A52.8 52.8 0 0 1 88 861.4L437.3 512 88 162.6A52.8 52.8 0 1 1 162.6 88L512 437.3 861.4 88a52.8 52.8 0 1 1 74.7 74.7L586.7 512z',
    trash:
      'M919.5 225.208h-215.5v-120.080c0-20.344-15.192-37.096-34.836-39.632-1.696-0.216-3.41-0.372-5.164-0.372h-304.004c-1.754 0-3.468 0.152-5.164 0.372-19.644 2.54-34.836 19.292-34.836 39.628v120.084h-215.996c-22.090 0-40 17.912-40 40.002 0 22.092 17.91 40 40 40h27.216l53.916 615.914h0.214c0 22.092 17.91 40 40 40h573.372c22.094 0 40-17.91 40-40h0.148l53.916-615.914h26.716c22.090 0 40-17.91 40-40s-17.908-40.002-39.998-40.002zM399.996 145.126h224.004v80.082h-224.004v-80.082zM762.062 881.124h-500.124l-50.414-575.912h600.954l-50.416 575.912zM632.004 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40zM311.996 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40zM472 697.124v-240c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 240.002c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.906-40-40z',
    cross:
      'M1013.286 955.716l-443.72-443.716 443.718-443.718c15.622-15.622 15.62-40.948-0.004-56.566-15.618-15.622-40.942-15.622-56.562 0l-443.716 443.718-443.72-443.718c-15.62-15.624-40.946-15.622-56.566 0-15.622 15.62-15.622 40.944 0 56.566l443.722 443.718-443.722 443.722c-15.622 15.618-15.62 40.942 0 56.56s40.948 15.622 56.566 0l443.72-443.718 443.722 443.718c15.618 15.624 40.942 15.622 56.56 0 15.62-15.618 15.622-40.944 0.002-56.566z',
    delete:
      'M874 150A512 512 0 10150 874 512 512 0 00874 150zm-659.4 64.6A417.8 417.8 0 01512 91.4c97 0 188.9 32.6 263.3 92.6L184 775.3A417.4 417.4 0 0191.4 512c0-112.4 43.7-218 123.2-297.4zm594.8 594.8A417.8 417.8 0 01512 932.6c-97 0-189-32.7-263.3-92.6L840 248.7A417.4 417.4 0 01932.6 512c0 112.3-43.8 218-123.2 297.4z',
    add: 'M512-.2a512 512 0 110 1024 512 512 0 010-1024zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 511.8c0 112.4 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.4c112.3 0 218-43.8 297.4-123.2a417.8 417.8 0 00123.2-297.4c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.2zm1.1 129.2a45.7 45.7 0 0145.7 45.7v201.1H760a45.7 45.7 0 010 91.5H558.8v201.1a45.7 45.7 0 11-91.4 0V558.7H266.3a45.7 45.7 0 110-91.5h201.1V266.1a45.7 45.7 0 0145.7-45.7z',
    subtract:
      'M512 0a512 512 0 110 1024A512 512 0 01512 0zm4 94A418 418 0 0094 515a418 418 0 00422 422 418 418 0 00421-422A418 418 0 00516 94zm244 372a46 46 0 010 92H264a46 46 0 110-92z',
    plus: 'M921.002 473h-368.008v-368.004c0.002-22.090-17.906-39.996-39.996-39.996-22.088 0-39.998 17.91-39.998 40v368h-368.002c-22.094 0-40 17.908-39.998 40-0.002 22.090 17.904 39.996 39.996 39.996l368.004-0.002v368.010c0 22.094 17.908 40 40 39.996 22.090 0.004 39.996-17.902 39.996-39.996v-368.010h368.010c22.090 0.002 39.994-17.906 39.994-39.996-0-22.088-17.908-39.998-39.998-39.998z',
    document:
      'M764 1c12 0 24 4 32 13l129 132c9 8 13 20 13 31v802c0 24-20 44-45 44H131c-25 0-45-20-45-44V45c0-24 20-44 45-44h633zm-48 89H175v844h674l-1-707h-87c-22 0-40-15-44-36v-8l-1-93zm-16 584a45 45 0 0 1 8 89H324a45 45 0 0 1-8-88l8-1h376zm0-187a45 45 0 0 1 8 89l-8 1H324a45 45 0 0 1-8-89l8-1h376zm0-186a45 45 0 0 1 8 88l-8 1H324a45 45 0 0 1-8-89h384z',
    folder:
      'M571 274h327c23 0 41 18 41 41v488c0 22-18 40-41 40H126c-23 0-41-18-41-40V242c0-34 27-61 61-61h317c18 0 35 7 47 21l61 72zm-119-8H170v492h684V359H531l-79-93z',
    component:
      'M171 469h298V171H246c-42 0-75 33-75 75v223zm0 86v223c0 42 33 75 75 75h223V555H171zm682-86V246c0-42-33-75-75-75H555v298h298zm0 86H555v298h223c42 0 75-33 75-75V555zM256 85h512c94 0 171 77 171 171v512c0 94-77 171-171 171H256c-94 0-171-77-171-171V256c0-94 77-171 171-171z',
    calendar:
      'M920.036 160.030h-112.004v-72c0-22.092-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.004h-432v-72c0-22.092-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.004h-112.004c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c0-22.094-17.908-40-40-40zM356.032 848.026h-212.004v-142.662h212.004v142.662zM356.032 665.364h-212.004v-162.664h212.004v162.664zM356.032 462.7h-212.004v-142.662h212.004v142.662zM628.032 848.026h-232v-142.662h232v142.662zM628.032 665.364h-232v-162.664h232v162.664zM628.032 462.7h-232v-142.662h232v142.662zM880.036 848.026h-212.004v-142.662h212.004v142.662zM880.036 665.364h-212.004v-162.664h212.004v162.664zM880.036 462.7h-212.004v-142.662h212.004v142.662z',
    graphline:
      'M820.536 489.23c-15.624 15.618-40.954 15.618-56.57 0l-42.006-42.002-169.898 169.9c-7.822 7.82-18.076 11.722-28.326 11.712-10.248 0.008-20.496-3.894-28.314-11.712l-96.178-96.182-140.67 140.674c-15.624 15.622-40.954 15.618-56.57-0.004-15.624-15.618-15.624-40.946 0-56.566l168.946-168.946c7.812-7.816 18.058-11.72 28.3-11.716 10.238-0.002 20.476 3.904 28.29 11.716l96.204 96.204 168.91-168.91c0.33-0.356 0.626-0.73 0.972-1.076 7.824-7.824 18.084-11.726 28.34-11.712 10.252-0.012 20.508 3.892 28.332 11.714 0.346 0.346 0.64 0.72 0.972 1.074l69.266 69.266c15.62 15.618 15.616 40.942 0 56.566zM880 144h-736v736h736v-736zM920 64c22.092 0 40 17.908 40 40v816c0 22.092-17.908 40-40 40h-816c-22.092 0-40-17.908-40-40v-816c0-22.092 17.908-40 40-40h816z',
    docchart:
      'M919.938 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c0-22.094-17.906-40-40-40zM395.934 470.67h232v162.664h-232v-162.664zM355.934 633.334h-212.004v-162.664h212.004v162.664zM395.934 430.67v-142.662h232v142.662h-232zM667.934 470.67h212.004v162.664h-212.004v-162.664zM667.934 430.67v-142.662h212.004v142.662h-212.004zM355.934 288.008v142.662h-212.004v-142.662h212.004zM143.93 673.334h212.004v142.662h-212.004v-142.662zM395.934 673.334h232v142.662h-232v-142.662zM667.934 673.334h212.004v142.662h-212.004v-142.662z',
    doclist:
      'M919.938 128h-816.008c-1.38 0-2.746 0.070-4.090 0.208-20.168 2.046-35.91 19.080-35.91 39.792v688c0 22.090 17.91 40 40 40h816.008c22.098 0 40-17.91 40-40v-688c-0-22.094-17.906-40-40-40zM143.93 288.008h736.008v527.988h-736.008v-527.988zM248 400.004c0-22.090 17.91-40 40-40h448c22.094 0 40 17.906 40 40 0 22.090-17.906 40-40 40h-448c-22.090 0-40-17.91-40-40zM776 552.002c0 22.094-17.906 40-40 40h-448c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40h448c22.094 0 40 17.91 40 40zM776 704c0 22.094-17.906 40-40 40h-448c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40h448c22.094 0 40 17.91 40 40z',
    category:
      'M925.224 256.37c-1.694-0.216-3.408-0.37-5.162-0.37h-816c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v624c0 22.094 17.91 40 40 40h816c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-624.004c0-20.342-15.19-37.096-34.838-39.632zM144.062 880v-544h736v544h-736zM896.11 180c0 11.044-8.954 20-20 20h-728.032c-11.046 0-20-8.956-20-20v0c0-11.046 8.954-20 20-20h728.032c11.046 0 20 8.954 20 20v0zM832.094 84c0 11.044-8.954 20-20 20h-600c-11.046 0-20-8.956-20-20v0c0-11.046 8.954-20 20-20h600c11.046 0 20 8.954 20 20v0z',
    grid: 'M437.162 552.368c-1.694-0.216-3.408-0.37-5.162-0.37h-263.978c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v264.040c0 22.094 17.91 40 40 40h263.978c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-264.044c0-20.34-15.19-37.094-34.838-39.632zM208.022 816.038v-184.040h183.978v184.040h-183.978zM437.162 128.4c-1.694-0.216-3.408-0.37-5.162-0.37h-263.978c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v263.968c0 22.094 17.91 40 40 40h263.978c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-263.972c0-20.342-15.19-37.096-34.838-39.632zM208.022 392v-183.968h183.978v183.968h-183.978zM861.212 552.368c-1.694-0.216-3.408-0.37-5.162-0.37h-264.050c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v264.040c0 22.094 17.91 40 40 40h264.048c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-264.044c0.002-20.34-15.19-37.094-34.836-39.632zM632 816.038v-184.040h184.048v184.040h-184.048zM861.212 128.4c-1.694-0.216-3.408-0.37-5.162-0.37h-264.050c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.292-34.838 39.63v263.968c0 22.094 17.91 40 40 40h264.048c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.924 1.2-1.862 1.722-2.838 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-263.972c0.002-20.342-15.19-37.096-34.836-39.632zM632 392v-183.968h184.048v183.968h-184.048z',
    copy: 'M960.132 210.186c0-0.444-0.050-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.060-0.74-0.158-1.468-0.26-2.198-0.080-0.564-0.156-1.128-0.258-1.692-0.146-0.792-0.328-1.566-0.518-2.34-0.124-0.508-0.244-1.014-0.39-1.518-0.224-0.784-0.488-1.548-0.76-2.312-0.176-0.49-0.344-0.98-0.538-1.466-0.302-0.754-0.642-1.486-0.988-2.216-0.224-0.472-0.436-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.722-1.19-0.608-0.924-1.262-1.81-1.942-2.678-0.132-0.168-0.248-0.346-0.382-0.512-0.98-1.212-2.028-2.364-3.14-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.174-0.084-0.262-0.122-0.994-0.418-2.006-0.774-3.024-1.108-0.242-0.080-0.474-0.176-0.72-0.252-0.942-0.288-1.894-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.010-0.458-0.306-0.038-0.606-0.1-0.912-0.13-1.322-0.13-2.65-0.204-3.976-0.204h-391.784c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v145.516h-279.874c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v628.28c0 22.094 17.91 40 40 40h496.118c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-145.518h279.874c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 2.084-3.466 2.128-3.548 2.992-5.612 4.704-12.010 4.704-18.808 0 0 0 0 0-0.004v-521.828c0.008-0.23-0.016-0.458-0.014-0.688 0.002-0.202 0.028-0.39 0.028-0.584zM144.124 878.792v-548.278h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-416.118zM640.244 693.278v-296.31c0.006-0.23-0.018-0.458-0.014-0.688 0.004-0.196 0.030-0.382 0.030-0.578 0-0.444-0.052-0.874-0.066-1.312-0.024-0.684-0.044-1.366-0.104-2.046-0.062-0.74-0.16-1.468-0.262-2.198-0.078-0.564-0.152-1.128-0.258-1.692-0.144-0.792-0.324-1.566-0.516-2.34-0.124-0.508-0.246-1.014-0.39-1.518-0.226-0.784-0.488-1.548-0.76-2.312-0.174-0.49-0.342-0.98-0.538-1.466-0.302-0.754-0.64-1.486-0.988-2.216-0.222-0.472-0.438-0.946-0.68-1.41-0.398-0.762-0.838-1.496-1.284-2.228-0.242-0.396-0.466-0.798-0.724-1.19-0.606-0.924-1.262-1.81-1.942-2.678-0.13-0.168-0.246-0.346-0.382-0.512-0.978-1.212-2.028-2.364-3.138-3.454l-104.020-104.9c-3.714-3.714-7.988-6.518-12.542-8.464-0.088-0.040-0.172-0.084-0.262-0.122-0.994-0.418-2.004-0.774-3.024-1.108-0.242-0.080-0.476-0.176-0.72-0.252-0.942-0.288-1.896-0.516-2.854-0.732-0.334-0.076-0.658-0.176-0.996-0.244-0.998-0.2-2.004-0.336-3.012-0.458-0.304-0.038-0.602-0.1-0.91-0.13-1.322-0.13-2.648-0.204-3.976-0.204h-31.916v-105.516h311.752v65.186c0 22.090 17.91 40 40 40h64.366v443.092h-239.87z',
    certificate:
      'M832.032 384.032c0-176.728-143.266-320-320-320s-320 143.272-320 320c0 104.662 50.25 197.584 127.938 255.966v311.5c0 16.174 9.74 30.756 24.682 36.952 4.954 2.052 10.152 3.050 15.31 3.050 10.402 0 20.626-4.060 28.276-11.702l123.726-123.58 123.772 123.332c11.452 11.412 28.644 14.804 43.574 8.608 14.93-6.2 24.66-20.776 24.66-36.942v-311.124c77.756-58.376 128.062-151.342 128.062-256.060zM272.032 384.032c0-64.106 24.964-124.374 70.292-169.706 45.33-45.33 105.6-70.294 169.708-70.294s124.376 24.964 169.708 70.294c45.33 45.332 70.292 105.6 70.292 169.706s-24.964 124.376-70.292 169.704c-45.33 45.33-105.6 70.294-169.708 70.294s-124.376-24.964-169.708-70.294c-45.328-45.328-70.292-105.598-70.292-169.704zM623.968 854.89l-83.804-83.508c-15.622-15.564-40.898-15.552-56.502 0.034l-83.694 83.594v-171.17c34.878 13.042 72.632 20.192 112.062 20.192 39.382 0 77.094-7.13 111.938-20.142v171z',
    print:
      'M925.922 304.496c-1.698-0.218-3.41-0.37-5.166-0.37h-88.64v-93.548c0.006-0.21-0.016-0.422-0.014-0.634 0.004-0.212 0.036-0.416 0.036-0.63 0-0.478-0.054-0.942-0.074-1.416-0.024-0.636-0.042-1.27-0.094-1.906-0.066-0.776-0.168-1.54-0.276-2.302-0.074-0.534-0.146-1.066-0.242-1.596-0.15-0.82-0.338-1.624-0.538-2.424-0.12-0.48-0.23-0.958-0.37-1.436-0.234-0.812-0.506-1.608-0.792-2.398-0.164-0.462-0.322-0.924-0.504-1.38-0.318-0.788-0.668-1.552-1.036-2.316-0.208-0.436-0.406-0.88-0.628-1.312-0.424-0.802-0.88-1.574-1.352-2.344-0.218-0.358-0.422-0.724-0.656-1.078-0.636-0.972-1.324-1.91-2.042-2.82-0.098-0.124-0.182-0.252-0.282-0.376-0.988-1.224-2.048-2.388-3.172-3.488l-104.004-104.882c-3.696-3.696-7.948-6.486-12.466-8.432-0.122-0.050-0.224-0.11-0.344-0.16-0.974-0.41-1.966-0.756-2.962-1.084-0.262-0.086-0.512-0.19-0.78-0.272-0.926-0.284-1.87-0.506-2.812-0.722-0.346-0.080-0.684-0.182-1.034-0.252-0.988-0.198-1.988-0.334-2.988-0.456-0.31-0.040-0.618-0.102-0.93-0.134-1.324-0.132-2.652-0.204-3.978-0.204h-455.67c-1.754 0-3.468 0.152-5.162 0.37-19.646 2.538-34.838 19.29-34.838 39.63v200h-87.356c-1.754 0-3.468 0.152-5.164 0.37-19.644 2.538-34.836 19.29-34.836 39.63v320c0 22.094 17.91 40 40 40h87.368v216c0 22.094 17.91 40 40 40h560.006c13.81 0 25.982-6.996 33.17-17.636 0.102-0.146 0.184-0.306 0.282-0.458 0.612-0.922 1.2-1.86 1.722-2.836 0.046-0.082 0.080-0.17 0.124-0.254 2.994-5.612 4.704-12.008 4.704-18.808 0 0 0 0 0-0.004v-216h88.624c13.808 0 25.982-6.996 33.168-17.636 0.104-0.148 0.186-0.308 0.286-0.458 0.612-0.922 1.198-1.862 1.72-2.836 0.046-0.082 0.082-0.172 0.124-0.256 2.994-5.61 4.702-12.008 4.702-18.806 0 0 0 0 0-0.004v-320c0-20.344-15.186-37.096-34.834-39.636zM272.116 144.128h375.634v65.186c0 1.38 0.070 2.746 0.208 4.090 2.048 20.168 19.080 35.91 39.792 35.91h64.366v54.812h-480v-159.998zM272.124 880.126v-327.998h480.006v327.998zM880.756 384.128v239.998h-48.624v-111.998c0-20.34-15.19-37.092-34.836-39.63-1.694-0.218-565.17-0.372-565.17-0.372-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v112h-47.368v-239.998zM664.124 608.126c22.092 0 40 17.908 40 40s-17.908 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304zM704.124 784.126c0 22.092-17.908 40-40 40h-304c-22.092 0-40-17.908-40-40s17.908-40 40-40h304c22.092 0 40 17.908 40 40z',
    listunordered:
      'M961 233c0 22.090-17.908 40-40 40h-607.996c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h607.996c22.092 0 40 17.912 40 40.002v0zM961 793c0-22.090-17.908-40.002-40-40.002h-607.996c-22.092 0-40 17.912-40 40.002v0c0 22.092 17.91 40 40 40h607.996c22.092 0 40-17.91 40-40v0zM961 606.332c0-22.090-17.908-40-40-40h-607.996c-22.092 0-40 17.91-40 40v0c0 22.094 17.91 40 40 40h607.996c22.092 0 40-17.91 40-40v0zM961 419.668c0-22.090-17.908-40.004-40-40.004h-607.996c-22.092 0-40 17.914-40 40.004v0c0 22.090 17.91 40 40 40h607.996c22.092-0 40-17.91 40-40v0zM129 168.998c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zM129 728.998c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zM129 542.332c-35.346 0-64 28.652-64 64 0 35.344 28.654 64 64 64s64-28.656 64-64c0-35.348-28.654-64-64-64zM129 355.664c-35.346 0-64 28.656-64 64 0 35.348 28.654 64 64 64s64-28.652 64-64c0-35.344-28.654-64-64-64z',
    graphbar:
      'M324.832 513c22.090 0 40 17.91 40 40v304c0 22.090-17.906 40-40 40v0c-22.090 0-40-17.906-40-40v-304c0-22.090 17.91-40 40-40v0zM884.832 128.998c-22.090 0-40 17.906-40 40v688.002c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-688.002c0-22.094-17.91-40-40-40v0zM698.164 256.998c-22.090 0-40 17.91-40 40v560.002c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-560.002c0-22.090-17.91-40-40-40v0zM511.5 384.998c-22.090 0-40.004 17.91-40.004 40v432.002c0 22.094 17.914 40 40.004 40v0c22.090 0 40-17.91 40-40v-432.002c0-22.090-17.91-40-40-40v0zM139.168 641c-22.090 0-40 17.91-40 40v176c0 22.094 17.91 40 40 40v0c22.094 0 40-17.91 40-40v-176c0-22.090-17.91-40-40-40v0z',
    menu: 'M960 232c0 22.092-17.908 40-40.002 40h-815.996c-22.092 0-40-17.908-40-40v0c0-22.090 17.908-40 40-40h815.998c22.092 0 40 17.91 40 40v0zM768 416c0 22.090-17.908 40-40 40h-624c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h624c22.092 0.002 40 17.914 40 40.002v0zM832 608c0 22.092-17.906 40.002-40 40.002h-688c-22.090 0-40-17.91-40-40.002v0c0-22.090 17.908-40 40-40h688c22.094 0 40 17.912 40 40v0zM576 792c0 22.094-17.91 40-40.002 40h-431.998c-22.090 0-40-17.906-40-40v0c0-22.094 17.908-40.002 40-40.002h432c22.094 0.002 40 17.912 40 40.002v0z',
    filter:
      'M962.030 168.032c0 22.092-17.908 40-40.002 40h-815.996c-22.092 0-40-17.908-40-40v0c0-22.090 17.908-40 40-40h815.998c22.092 0 40 17.908 40 40v0zM770 544.034c0 22.090-17.908 40-40 40h-432c-22.090 0-40-17.908-40-40v0c0-22.090 17.908-40.002 40-40.002h432c22.090 0 40 17.912 40 40.002v0zM642.030 728.032c0 22.094-17.91 40-40.002 40h-175.998c-22.090 0-40-17.906-40-40v0c0-22.094 17.908-40.002 40-40.002h176c22.094 0.002 40 17.91 40 40.002v0zM866 352.030c0 22.092-17.906 40.002-40 40.002h-624c-22.090 0-40-17.91-40-40.002v0c0-22.090 17.908-40 40-40h624c22.092 0 40 17.91 40 40v0zM512.030 928.034c22.090 0 40.004-17.906 40.004-40v0c0-22.090-17.914-40-40.004-40v0c-22.090 0-40 17.91-40 40v0c0 22.092 17.91 40 40 40v0z',
    ellipsis:
      'M184 393c66.274 0 120 53.73 120 120s-53.726 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120zM512 393c66.272 0 120 53.73 120 120s-53.728 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120zM840 393c66.272 0 120 53.73 120 120s-53.728 120-120 120c-66.286 0-120-53.73-120-120s53.714-120 120-120z',
    cog: 'M512 288a224 224 0 0 0 0 448h2a225 225 0 0 0 52-7 47 47 0 0 0-23-90 130 130 0 0 1-31 3 131 131 0 1 1 127-101v1a47 47 0 1 0 91 19 224 224 0 0 0-218-273zM409 0c-67 14-131 40-186 77v98c0 13-6 25-15 33-8 9-20 15-33 15H77C40 278 14 341 0 409l69 68c9 10 14 22 13 34 1 13-4 25-13 34L0 614c14 68 41 132 78 188h97c13 0 25 6 33 15 9 8 15 20 15 33v97c55 37 119 63 187 77l68-69a46 46 0 0 1 36-13c11 0 23 4 32 13l69 69c68-14 131-40 186-77v-98c0-13 6-25 15-34 8-8 20-14 33-14h98c37-56 63-119 77-186l-69-70c-10-9-14-21-14-34 0-12 4-24 14-34l69-69c-14-67-40-129-77-184h-98c-13 0-25-6-33-15-9-8-15-20-15-33V77C746 40 683 14 615 0l-69 69a46 46 0 0 1-35 14c-11 0-23-5-33-14L409 0zm-28 103l32 32c26 26 61 41 98 41h3c37 0 72-15 98-41l32-31c22 7 43 16 64 26v46c0 37 15 73 42 99 26 27 62 42 99 42h45c11 20 19 41 26 63l-31 31c-26 27-41 63-41 100 0 38 15 74 41 100l32 32c-8 22-17 44-27 65h-45c-37 0-73 15-99 42-27 26-42 62-42 99v44c-21 11-42 20-65 27l-31-31c-26-26-61-41-98-41h-3c-37 0-72 15-98 41l-32 32c-22-8-44-17-65-28v-43c0-37-15-73-42-99-26-27-62-42-99-42h-44c-11-21-20-44-28-67l32-31c26-26 41-62 40-100 1-37-14-73-40-100l-31-30c7-23 16-44 26-65h45c37 0 73-15 99-42 27-26 42-62 42-99v-45c21-10 43-19 65-27z',
    wrench:
      'M959.438 274.25c0-22.090-17.914-40-40.004-40-11.16 0-21.242 4.582-28.496 11.954l-60.152 60.148c-15.622 15.622-40.946 15.618-56.566-0.004l-56.57-56.566c-15.622-15.622-15.622-40.95 0-56.57l59.55-59.546c7.75-7.292 12.614-17.618 12.614-29.102 0-22.090-17.914-40-40.004-40-1.598 0-3.164 0.122-4.71 0.304-0.012 0-0.020-0.008-0.032-0.004-94.958 11.586-168.504 92.492-168.504 190.574 0 23.528 4.238 46.058 11.98 66.886l-503.078 503.074c-1.496 1.496-2.8 3.102-4.012 4.758-10.914 13.676-17.454 30.992-17.454 49.848 0 44.188 35.818 79.996 79.996 79.996 18.906 0 36.27-6.574 49.964-17.54 1.614-1.188 3.18-2.464 4.64-3.926l503.078-503.078c20.828 7.742 43.36 11.98 66.882 11.98 97.988 0 178.828-73.402 190.54-168.222v-0.012c0.2-1.628 0.338-3.272 0.338-4.952zM151.996 912c-22.090 0-40-17.906-40-40 0-22.090 17.91-40 40-40s40.004 17.91 40.004 40c0 22.094-17.914 40-40.004 40z',
    nut: 'M512 286a229 229 0 0 0-233 226c0 124 104 225 233 225h2a240 240 0 0 0 54-7c21-5 35-24 35-45a48 48 0 0 0-59-45 139 139 0 0 1-32 3c-75 0-136-59-136-131 0-73 61-132 136-132a134 134 0 0 1 132 161v1l-2 9c0 26 22 47 49 47a48 48 0 0 0 47-37c4-16 6-33 6-49 0-125-104-226-232-226m0-286c-16 0-33 4-47 12L90 223a91 91 0 0 0-47 79v420c0 33 18 63 47 79l375 211a96 96 0 0 0 94 0l375-211c29-16 47-46 47-79V302c0-33-18-63-47-79L559 12c-14-8-31-12-47-12m0 91l375 211v420L512 933 137 722V302L512 91',
    camera:
      'M925.164 208.372c-1.694-0.218-3.408-0.372-5.162-0.372h-471.968v-39.962c0-20.344-15.192-37.096-34.836-39.63-1.696-0.218-3.41-0.374-5.164-0.374h-176.004c-1.754 0-3.468 0.152-5.164 0.374-19.644 2.538-34.836 19.29-34.836 39.626v39.966h-88.032c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.536-34.838 19.29-34.838 39.628v528c0 22.094 17.91 40 40 40h816.004c13.808 0 25.98-6.996 33.168-17.636 0.102-0.148 0.184-0.308 0.282-0.46 0.612-0.922 1.2-1.86 1.722-2.836 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.61 4.704-12.008 4.704-18.808v-528.004c-0-20.342-15.192-37.096-34.838-39.63zM880.002 736h-736.004v-448h736.004v448zM512 402.522c60.368 0 109.478 49.112 109.478 109.478s-49.112 109.478-109.478 109.478-109.478-49.112-109.478-109.478 49.11-109.478 109.478-109.478zM512 322.522c-104.644 0-189.478 84.832-189.478 189.478 0 104.644 84.834 189.478 189.478 189.478 104.646 0 189.478-84.834 189.478-189.478 0-104.646-84.832-189.478-189.478-189.478v0z',
    eye: 'M1008.714 490.522c-9.002-12.594-223.276-308.808-496.684-308.808-273.444 0-487.682 296.214-496.684 308.808l-15.316 21.49 15.316 21.466c9.002 12.618 223.24 308.808 496.684 308.808 273.408 0 487.682-296.19 496.684-308.808l15.316-21.466-15.316-21.49zM807.68 631.688c-46 39.142-92.558 70.064-138.382 91.904-53.874 25.676-106.786 38.694-157.266 38.694-50.49 0-103.406-13.018-157.282-38.696-45.826-21.838-92.382-52.758-138.378-91.902-53.708-45.706-94.302-92.122-116.61-119.672 22.36-27.602 63.028-74.094 116.612-119.696 45.996-39.146 92.554-70.068 138.378-91.908 53.876-25.678 106.792-38.698 157.28-38.698 50.48 0 103.39 13.020 157.264 38.696 45.824 21.842 92.382 52.764 138.382 91.91 53.602 45.614 94.264 92.098 116.624 119.696-22.306 27.544-62.898 73.954-116.622 119.672zM692.032 512.036c0 99.41-80.588 180-180 180s-180-80.59-180-180c0-99.406 80.588-179.998 180-179.998s180 80.59 180 179.998z',
    eyeclose:
      'M75.744 948.314c-15.62-15.62-15.62-40.948 0-56.564l816-816c15.626-15.624 40.95-15.624 56.57 0 15.624 15.62 15.626 40.946 0.004 56.57l-816 815.994c-15.62 15.62-40.95 15.62-56.572 0zM332.032 512.034c0 20.104 3.296 39.434 9.376 57.484l228.104-228.106c-18.050-6.080-37.38-9.376-57.48-9.376-99.412-0.004-180 80.588-180 179.996zM692.032 512.034c0-20.1-3.3-39.432-9.38-57.484l-228.106 228.11c18.052 6.080 37.384 9.376 57.488 9.376 99.412 0 180-80.59 180-180zM1008.716 490.522c-4.98-6.968-72.86-100.8-178.81-183.22l-57.040 57.040c11.624 8.8 23.24 18.128 34.814 27.98 53.6 45.614 94.264 92.1 116.624 119.696-22.304 27.544-62.896 73.954-116.62 119.672-46 39.14-92.56 70.064-138.384 91.904-53.872 25.676-106.786 38.694-157.266 38.694-37.448 0-76.234-7.18-115.76-21.36l-61.486 61.49c54.786 24.22 114.45 39.87 177.248 39.87 273.41 0 487.684-296.19 496.686-308.808l15.316-21.468-15.316-21.49zM216.372 631.69c-53.708-45.706-94.3-92.12-116.61-119.672 22.36-27.6 63.028-74.094 116.612-119.696 46-39.146 92.554-70.068 138.38-91.908 53.874-25.68 106.79-38.7 157.28-38.7 37.46 0 76.264 7.188 115.8 21.38l61.484-61.484c-54.796-24.236-114.474-39.896-177.286-39.896-273.446 0-487.684 296.214-496.686 308.808l-15.316 21.49 15.314 21.466c4.98 6.984 72.866 100.84 178.84 183.26l57.040-57.040c-11.64-8.806-23.264-18.144-34.854-28.008z',
    photo:
      'M920 64h-816c-22.092 0-40 17.91-40 40v816c0 22.094 17.908 40 40 40h816c22.092 0 40-17.906 40-40v-816c0-22.090-17.908-40-40-40zM880 144v449.782l-235.39-235.392c-7.502-7.5-17.676-11.714-28.286-11.714s-20.784 4.214-28.286 11.716l-169.804 169.804-40.958-40.958c-15.622-15.622-40.95-15.622-56.57 0l-176.708 176.708v-519.946h736.002zM144 880v-102.914l204.992-204.994 215.972 215.974c7.81 7.81 18.048 11.714 28.286 11.714s20.474-3.904 28.286-11.714c15.62-15.622 15.62-40.95 0-56.57l-146.732-146.73 141.522-141.524 263.676 263.68v173.078h-736.002zM356.174 400.542c52.466 0 95-42.536 95-95s-42.534-95-95-95-95 42.536-95 95 42.534 95 95 95zM356.174 250.542c30.326 0 55 24.672 55 55s-24.674 55-55 55-55-24.672-55-55 24.674-55 55-55z',
    video:
      'M926.050 273.364c-9.556 0-20.574 3.8-32.278 11.812l-189.738 129.894v-151.068c0-20.342-15.192-37.094-34.838-39.63-1.694-0.218-3.408-0.372-5.162-0.372h-560.002c-1.754 0-3.468 0.152-5.162 0.372-19.646 2.538-34.838 19.29-34.838 39.628v496.002c0 22.092 17.91 40 40 40h560.004c13.808 0 25.98-6.998 33.168-17.638 0.102-0.148 0.184-0.308 0.282-0.458 0.612-0.922 1.2-1.862 1.722-2.836 0.046-0.082 0.080-0.172 0.124-0.254 2.994-5.612 4.704-12.010 4.704-18.81v-151.066l189.738 129.886c11.706 8.012 22.718 11.812 32.278 11.812 20.092 0 33.736-16.806 33.736-46.622v-384.032c0-29.816-13.644-46.62-33.738-46.62zM624.036 720h-480.004v-415.998h480.004v415.998zM879.788 632.3l-175.728-120.296 175.728-120.302v240.598zM240.688 663.534c-22.090 0-40-17.906-40-40v0c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v0c0 22.092-17.914 40-40.004 40v0z',
    speaker:
      'M692.070 580.856c18.156-18.156 28.152-42.266 28.152-67.89-0.008-25.622-10.002-49.726-28.148-67.872-8.476-8.478-18.308-15.188-29-19.922-0.222-0.098-0.408-0.22-0.566-0.364-13.294-6.5-22.476-20.116-22.476-35.914 0-22.090 17.91-40 40-40 5.774 0 11.246 1.248 16.204 3.45 0.016 0.006 0.026 0.008 0.040 0.016 19.292 8.656 37.036 20.832 52.368 36.164 33.254 33.254 51.574 77.446 51.58 124.43 0.006 46.996-18.31 91.204-51.58 124.472-15.064 15.062-32.45 27.074-51.344 35.7-0.154 0.070-0.286 0.112-0.434 0.176-5.124 2.382-10.812 3.75-16.832 3.75-22.090 0-40-17.906-40-40 0-16.196 9.644-30.112 23.488-36.402 0.156-0.11 0.32-0.216 0.516-0.304 10.314-4.712 19.81-11.268 28.032-19.49zM861.778 275.386c-47.824-47.824-107.946-79.588-173.204-92.242-0.356-0.078-0.712-0.146-1.072-0.214-0.060-0.012-0.124-0.026-0.186-0.038-0.506-0.096-0.976-0.162-1.422-0.208-1.918-0.282-3.868-0.476-5.864-0.476-22.090 0-40 17.91-40 40 0 19.024 13.292 34.91 31.084 38.968 0.352 0.128 0.728 0.244 1.162 0.326 48.7 9.268 95.226 32.748 132.934 70.452 99.972 99.972 100.054 261.984-0.002 362.040-37.684 37.684-84.152 61.14-132.788 70.426-0.084 0.016-0.144 0.046-0.224 0.066-18.338 3.644-32.166 19.816-32.166 39.222 0 22.094 17.91 40 40 40 2.776 0 5.484-0.286 8.102-0.822 0.094-0.018 0.172-0.018 0.27-0.038 65.32-12.626 125.496-44.406 173.376-92.286 131.008-131.008 131.008-344.172 0-475.176zM525.988 159.516v704.968c0 22.090-17.906 40-40 40-12.73 0-24.046-5.966-31.374-15.234l-51.056-61.722v0.216l-122.14-147.666h-177.386c-22.090 0-40-17.906-40-40v0 0-256c0-5.22 1.030-10.194 2.85-14.766 0.104-0.266 0.184-0.542 0.294-0.804 0.39-0.924 0.844-1.812 1.3-2.702 0.134-0.26 0.242-0.538 0.382-0.794 0.246-0.456 0.54-0.878 0.804-1.324 6.972-11.726 19.734-19.61 34.368-19.61h177.386l173.13-209.238c7.324-9.316 18.67-15.324 31.44-15.324 22.092-0 40.002 17.91 40.002 40zM445.988 270.826l-126.708 153.252h-175.248v176h175.248l19.832 23.998h0.17l106.708 129.112v-482.362z',
    phone:
      'M742.52 960c-76.266 0-163.184-32.364-258.338-96.194-73.798-49.504-136.41-106.904-175.938-146.34-43.282-43.222-105.612-111.376-156.842-190.682-66.576-103.062-95.348-196.038-85.518-276.344 8.952-73.326 50.674-134.292 120.664-176.304 10.95-6.63 23.76-10.134 37.054-10.134 32.752 0 71.124 23.354 120.764 73.494 36.434 36.802 70.108 79.22 89.472 106.644 46.698 66.176 60.686 107.352 48.286 142.136-12.638 35.538-35.534 55.704-52.25 70.428-5.662 5.006-9.95 8.854-13.070 12.262 4.040 7.542 11.744 19.868 26.054 37.476 42.388 52.076 90.548 89.024 111.972 100.874 3.308-2.96 7.11-7.168 12.352-13.152 14.87-16.81 35.062-39.636 70.482-52.28 7.978-2.842 16.498-4.276 25.35-4.276 44.172 0 108.804 44.078 155.246 81.056 45.834 36.494 103.292 90.498 127.104 132.612 22.602 39.596 14.982 68.64 4.596 86.006-48.138 80.296-119.862 122.718-207.44 122.718zM224.758 144.53c-47.558 29.426-73.566 67.28-79.468 115.618-7.494 61.224 17.17 136.326 73.308 223.226 49.902 77.252 112.994 144.35 146.16 177.472 30.296 30.222 91.906 88.17 163.988 136.524 81.738 54.83 153.662 82.63 213.772 82.63 58.618 0 103.506-26.526 137.138-81.076-0.47-1.536-1.532-4.062-3.854-8.132-14.584-25.794-57.006-69.202-105.642-108.156-58.776-47.074-96.708-63.894-106.756-64.982-15.348 5.826-25.020 16.758-36.178 29.372-12.542 14.318-28.31 32.316-55.476 41.528l-6.25 2.12h-6.598c-8.704 0-31.826 0-86.73-43.378-32.196-25.438-64.65-57.534-91.38-90.374-35.712-43.942-51.41-77.764-46.674-100.548l0.55-2.642 0.9-2.546c9.19-26 26.284-41.118 41.364-54.458 12.726-11.208 23.698-20.874 29.494-36.378-0.606-4.398-5.076-23.488-37.948-70.072-15.882-22.494-45.746-60.376-77.614-93.084-39.93-40.986-60.106-50.546-66.106-52.664z',
    flag: 'M168 960.060c-22.092 0-40-17.908-40-40v-816.36c0-22.092 17.908-40 40-40h687.698c16.178 0 30.764 9.746 36.956 24.694 6.192 14.946 2.77 32.15-8.67 43.59l-188.918 188.922 189.218 189.216c11.44 11.442 14.862 28.646 8.67 43.592-6.192 14.948-20.776 24.694-36.956 24.694h-647.998v341.654c0 22.090-17.908 39.998-40 39.998zM208 498.406h551.428l-149.218-149.216c-15.622-15.622-15.622-40.95 0-56.568l148.918-148.922h-551.128v354.706z',
    pin: 'M512 959.916c-13.36 0-25.84-6.672-33.262-17.782l-242.080-362.324c-0.12-0.176-0.236-0.356-0.354-0.536-36.394-54.5-55.63-118.042-55.63-183.804 0-182.696 148.632-331.324 331.326-331.324 182.696 0 331.328 148.628 331.328 331.324 0 60.71-16.554 119.98-47.906 171.652-0.758 1.528-1.618 3.016-2.578 4.45l-5.786 8.664c-0.054 0.082-0.112 0.164-0.168 0.246-0.042 0.070-0.104 0.16-0.148 0.23l-241.484 361.426c-7.422 11.106-19.898 17.778-33.258 17.778zM303.458 535.784l0.026 0.040c0.038 0.054 0.158 0.238 0.194 0.292l208.324 311.796 212.374-317.86c0.376-0.696 0.778-1.382 1.198-2.062 24.7-39.708 37.758-85.532 37.758-132.52 0-138.582-112.746-251.324-251.328-251.324s-251.326 112.742-251.326 251.324c0 50.054 14.674 98.39 42.432 139.782 0.114 0.176 0.232 0.356 0.348 0.532zM512 304.4c49.98 0 90.64 40.66 90.64 90.64 0 49.976-40.66 90.636-90.64 90.636s-90.64-40.66-90.64-90.636c0-49.98 40.66-90.64 90.64-90.64zM512 224.4c-94.242 0-170.64 76.398-170.64 170.64s76.398 170.636 170.64 170.636 170.64-76.394 170.64-170.636-76.398-170.64-170.64-170.64v0z',
    compass:
      'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm242.4 178.1a22.9 22.9 0 012.9 28.9L574.9 571.7l-3.2 3.2-273.3 182.4a22.9 22.9 0 01-31.7-31.7l181-271.6c1.7-2.5 3.8-4.6 6.3-6.3l271.6-181c9-6 21.1-4.9 28.8 2.8zM483.2 483.3l-115 172.4 172.5-115-57.5-57.4z',
    globe:
      'M533.6 1.6a144.2 144.2 0 00-43.2 0A511.7 511.7 0 000 512.6 511.7 511.7 0 00512 1024c282.8 0 512-229 512-511.4a511.7 511.7 0 00-490.4-511zM930 467H749c-3.6-105.7-20-204.7-47.2-282.5a494.4 494.4 0 00-24.2-58.2 419.3 419.3 0 01131.8 89.3A416.7 416.7 0 01930.2 467zM512 931.5c-75.3 0-137.3-163.3-145.4-373.3h290.8c-8.1 210-70.1 373.3-145.4 373.3zM366.5 467c7.4-200.2 63.7-358.5 134-374.3a406.8 406.8 0 0123 0c70.3 15.9 126.6 174.1 134 374.3h-291zM214.6 215.5A420.7 420.7 0 01346.4 126c-8.7 17.7-16.9 37.1-24.2 58.2-27.1 78-43.6 177-47.2 282.5H94a416.7 416.7 0 01120.7-251.3zM93.9 558.2H275c3.8 104.8 20.2 203 47 280.3a488.6 488.6 0 0025.8 61 420.4 420.4 0 01-133.3-89.9A416.7 416.7 0 0193.9 558.2zm715.5 251.4a420.4 420.4 0 01-133.3 90c9.3-18.4 18-38.8 25.7-61.1 27-77.4 43.3-175.5 47-280.3h181.3a416.7 416.7 0 01-120.7 251.4z',
    location:
      'M1024 512a512 512 0 10-512.1 512C643 1024 774 974 874 874s150-231 150-362zM809.4 809.4a417.4 417.4 0 01-251.7 120.7v-153a45.7 45.7 0 00-91.5 0v153a417 417 0 01-251.6-120.7A417.7 417.7 0 0194 557.7h153a45.7 45.7 0 000-91.5h-153a417.3 417.3 0 01120.7-251.6A417.5 417.5 0 01466.2 93.8v153a45.7 45.7 0 0091.4 0v-153a417.4 417.4 0 01251.8 120.7A417.5 417.5 0 01930 466.2H777a45.7 45.7 0 000 91.4h153a417.3 417.3 0 01-120.7 251.7v.1z',
    search:
      'M218 670a318 318 0 0 1 0-451 316 316 0 0 1 451 0 318 318 0 0 1 0 451 316 316 0 0 1-451 0m750 240L756 698a402 402 0 1 0-59 60l212 212c16 16 42 16 59 0 16-17 16-43 0-60',
    zoom: 'M220 670a316 316 0 0 1 0-450 316 316 0 0 1 450 0 316 316 0 0 1 0 450 316 316 0 0 1-450 0zm749 240L757 698a402 402 0 1 0-59 59l212 212a42 42 0 0 0 59-59zM487 604a42 42 0 0 1-84 0V487H286a42 42 0 1 1 0-84h117V286a42 42 0 1 1 84 0v117h117a42 42 0 0 1 0 84H487v117z',
    zoomout:
      'M757 698a402 402 0 1 0-59 59l212 212a42 42 0 0 0 59-59L757 698zM126 445a316 316 0 0 1 319-319 316 316 0 0 1 318 319 316 316 0 0 1-318 318 316 316 0 0 1-319-318zm160 42a42 42 0 1 1 0-84h318a42 42 0 0 1 0 84H286z',
    zoomreset:
      'M148 560a318 318 0 0 0 522 110 316 316 0 0 0 0-450 316 316 0 0 0-450 0c-11 11-21 22-30 34v4h47c25 0 46 21 46 46s-21 45-46 45H90c-13 0-25-6-33-14-9-9-14-20-14-33V156c0-25 20-45 45-45s45 20 45 45v32l1 1a401 401 0 0 1 623 509l212 212a42 42 0 0 1-59 59L698 757A401 401 0 0 1 65 570a42 42 0 0 1 83-10z',
    timer:
      'M571.5 0a42.7 42.7 0 010 85.3h-16.7l-.2 53.1a441.6 441.6 0 01221.2 84.9l44.7-44.6a42.7 42.7 0 0160.3 60.3l-41.5 41.5a443.8 443.8 0 11-370-142l.1-53.2H452A42.7 42.7 0 01452 0h119.5zM512 221.7a356 356 0 00-253.5 105 356 356 0 00-105 253.5 356 356 0 00105 253.5 356 356 0 00253.5 105 356 356 0 00253.5-105 356.2 356.2 0 00105-253.5 356 356 0 00-105-253.5 356 356 0 00-253.5-105zm-.1 52.7a42.7 42.7 0 0142.6 42.6v206.6a68.2 68.2 0 0125.3 47.3l.2 5.8a68.2 68.2 0 11-110.8-53.4V317a42.7 42.7 0 0142.7-42.6z',
    time: 'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 91.4c-112.3 0-218 43.8-297.4 123.2A417.8 417.8 0 0091.4 512c0 112.3 43.8 218 123.2 297.4A417.8 417.8 0 00512 932.6c112.3 0 218-43.8 297.4-123.2A417.8 417.8 0 00932.6 512c0-112.3-43.8-218-123.2-297.4A417.8 417.8 0 00512 91.4zm0 54.9a45.7 45.7 0 0145.7 45.7v280H759a45.7 45.7 0 010 91.4H512c-6.1 0-12-1.2-17.4-3.4l-.4-.2-2-1c-.7-.3-1.4-.5-2-.9l-.7-.4-3-1.9-.4-.2c-12-8.2-19.8-22-19.8-37.7V192a45.7 45.7 0 0145.7-45.7z',
    lightning:
      'M320.022 1022.644c-7.408 0-14.852-2.052-21.44-6.238-15.292-9.714-22.144-28.494-16.706-45.774l115.186-365.908-214.552-52.57c-14.714-3.606-26.128-15.214-29.486-29.988-3.356-14.772 1.92-30.174 13.632-39.786l576-472.662c14.458-11.864 35.208-12.126 49.962-0.626 14.752 11.496 19.568 31.682 11.594 48.602l-171.202 363.256 208.648 51.756c14.29 3.544 25.476 14.652 29.124 28.914s-0.834 29.376-11.668 39.344l-512 471.112c-7.586 6.984-17.308 10.568-27.092 10.568zM279.236 493.49l178.314 43.69c10.74 2.632 19.912 9.59 25.336 19.226s6.62 21.086 3.298 31.636l-83.030 263.76 347.066-319.352-183.82-45.596c-11.63-2.884-21.356-10.832-26.498-21.656-5.144-10.822-5.164-23.382-0.054-34.22l116.31-246.788-376.922 309.3z',
    lightningoff:
      'M310 374L76 150a37 37 0 0 1 0-54c15-14 41-14 56 0l816 778c16 15 16 39 0 54a41 41 0 0 1-56 0L666 712l-57-54-242-230-57-54zm-32 28l57 54-44 38 115 29 78 76-75 254 169-165 57 54-279 271c-8 7-17 11-26 11-7 0-14-2-20-6a41 41 0 0 1-16-46l109-367-203-52c-14-4-25-16-28-30-4-15 1-31 13-40l93-81zm124-108L731 9c13-12 33-12 47-1 14 12 19 32 11 49L627 421l198 52c13 4 24 15 27 29 4 14-1 29-11 39l-89 87-56-54 42-41-118-31-80-76 109-242-190 165-57-55z',
    dashboard:
      'M512 85.3a512 512 0 01361 875c-99.5-44-225-70.4-361.6-70.4-136.1 0-261.4 26.2-360.8 70A512 512 0 01512 85.4zm0 91.5c-112.4 0-218 43.7-297.4 123.1A417.8 417.8 0 0091.4 597.3c0 93 30 181.5 85.5 254.2 101-34.8 215.3-53 334.5-53 119.6 0 234.2 18.3 335.5 53.4a417.3 417.3 0 0085.7-254.6c0-112.3-43.8-218-123.2-297.4a417.5 417.5 0 00-275-122.6l-22.4-.5zm219.7 115.7a45.7 45.7 0 0116.7 62.4L580.4 646c6.5 17.1 6.7 36.6-.6 54.3l-4.3 8.7A73.1 73.1 0 11501.3 600l168-291a45.7 45.7 0 0162.4-16.6z',
    hourglass:
      'M511.926 801.946c-22.090 0-40-17.906-40-40v0c0-22.090 17.91-40 40-40v0c22.090 0 40.004 17.91 40.004 40v0c0 22.094-17.914 40-40.004 40v0zM831.682 915.242c0.192 1.582 0.318 3.186 0.318 4.82 0 22.090-17.908 40-40 40h-560c-22.092 0-40-17.914-40-40 0-2.438 0.252-4.812 0.67-7.128 2.36-53.636 18.034-105.7 45.852-151.554 0.734-1.476 1.562-2.912 2.492-4.296l5.582-8.364c0.054-0.080 0.11-0.158 0.164-0.238 0.042-0.068 0.098-0.156 0.144-0.222l157.704-236.036-158.5-237.228c-0.116-0.17-0.23-0.342-0.34-0.516-32.842-49.178-51.11-105.994-53.368-165.044-0.238-1.762-0.402-3.546-0.402-5.374 0-22.090 17.908-40 40-40h560c22.092 0 40 17.914 40 40 0 2.056-0.204 4.064-0.504 6.038-2.194 54.020-17.886 106.48-45.894 152.648-0.734 1.472-1.562 2.91-2.492 4.294l-5.582 8.366c-0.054 0.078-0.11 0.156-0.164 0.236-0.042 0.068-0.098 0.154-0.144 0.222l-157.734 236.082 158.468 237.182c0.116 0.168 0.23 0.344 0.34 0.516 32.946 49.33 51.226 106.346 53.39 165.596zM749.958 144.060h-475.99c6.138 31.304 18.384 61.124 36.354 87.916 0.118 0.17 0.23 0.344 0.342 0.514l0.024 0.038c0.036 0.054 0.15 0.23 0.186 0.284l54.286 81.25h293.596l58.196-87.1c0.366-0.67 0.75-1.334 1.154-1.99 15.492-24.916 26.228-52.324 31.852-80.912zM497.528 512.178l-0.032 0.046 14.426 21.592 93.378-139.756h-186.692l78.92 118.118zM305.96 799.156c-15.498 24.91-26.234 52.318-31.856 80.906h476.052c-6.138-31.304-18.384-61.122-36.354-87.918-0.118-0.168-0.23-0.344-0.342-0.512l-0.024-0.040c-0.036-0.050-0.15-0.23-0.186-0.282l-140.242-209.902-28.98 43.374c-7.166 10.72-19.21 17.162-32.11 17.162-12.896 0-24.942-6.442-32.11-17.166l-28.76-43.044-143.938 215.428c-0.36 0.674-0.744 1.338-1.15 1.994z',
    play: 'M878.78 477.856l-591.884-341.722c-9.464-5.464-18.426-8.050-26.386-8.048-19.516 0.002-33.002 15.546-33.002 42.338v683.446c0 26.792 13.482 42.338 33.002 42.338 7.96 0 16.924-2.586 26.386-8.048l591.884-341.722c32.664-18.864 32.664-49.724 0-68.582z',
    playnext:
      'M222 136l513 342 12 10V192a64 64 0 01128 0v640a64 64 0 01-128 0V536l-12 10-513 342c-8 5-16 8-23 8-17 0-28-16-28-42V170c0-26 11-42 28-42 7 0 15 3 23 8z',
    playback:
      'M823 136L311 478l-12 10V192a64 64 0 00-128 0v640a64 64 0 10128 0V536l12 10 512 342c8 5 16 8 23 8 17 0 29-16 29-42V170c0-26-12-42-29-42-7 0-15 3-23 8z',
    stop: 'M1024 512A512 512 0 100 512a512 512 0 001024 0zM215 809a418 418 0 010-594 418 418 0 01594 0 418 418 0 010 594 418 418 0 01-594 0zm471-78H338c-25 0-45-20-45-45V338c0-25 20-45 45-45h348c25 0 45 20 45 45v348c0 25-20 45-45 45z',
    stopalt:
      'M894 85H130c-25 0-45 20-45 45v764c0 25 20 45 45 45h764c25 0 45-20 45-45V130c0-25-20-45-45-45z',
    rewind:
      'm631.8 642.6 345 245.4c7.7 5.4 15 8 21.4 8 15.9 0 26.8-15.5 26.8-42.3V170.3c0-26.8-11-42.3-26.8-42.3-6.4 0-13.7 2.6-21.4 8l-345 245.4v-211c0-26.9-10.9-42.4-26.8-42.4-6.4 0-13.7 2.6-21.4 8L129 459.4V192a64 64 0 0 0-128 0v640a64 64 0 0 0 128 0V564.6L583.6 888c7.7 5.4 15 8 21.4 8 15.9 0 26.8-15.5 26.8-42.3v-211Z',
    fastforward:
      'M398.2 386.4 53.2 141c-7.7-5.4-15-8-21.4-8C15.9 133 5 148.5 5 175.3v683.4C5 885.5 16 901 31.8 901c6.4 0 13.7-2.6 21.4-8l345-245.4v211c0 26.9 11 42.4 26.8 42.4 6.4 0 13.7-2.6 21.4-8L901 569.6V837a64 64 0 0 0 128 0V197a64 64 0 0 0-128 0v267.4L446.4 141c-7.7-5.4-15-8-21.4-8-15.9 0-26.8 15.5-26.8 42.3v211Z',
    email:
      'M960.032 268.004c0.748-10.040-2.246-20.364-9.226-28.684-5.984-7.132-13.938-11.62-22.394-13.394-0.13-0.026-0.268-0.066-0.396-0.092-1.082-0.22-2.172-0.376-3.272-0.5-0.25-0.032-0.492-0.080-0.742-0.102-1.028-0.096-2.052-0.136-3.090-0.156-0.292-0.002-0.582-0.042-0.876-0.042h-816.008c-21.416 0-38.848 16.844-39.898 38-0.034 0.628-0.092 1.256-0.096 1.89 0 0.034-0.006 0.074-0.006 0.114 0 0.050 0.008 0.102 0.008 0.152v495.692c0 0.054-0.008 0.106-0.008 0.156 0 22.090 17.91 40 40 40h816.004c13.808 0 25.98-6.996 33.17-17.636 0.1-0.148 0.182-0.312 0.28-0.458 0.606-0.93 1.196-1.868 1.722-2.84 0.046-0.082 0.080-0.172 0.124-0.258 2.992-5.604 4.704-12.008 4.704-18.804v0 0-493.038zM144.032 350.156l339.946 281.188c6.568 6.434 14.918 10.168 23.564 11.122 0.16 0.024 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058s0.996-0.042 1.492-0.058c0.842-0.028 1.68-0.058 2.518-0.14 0.16-0.016 0.32-0.042 0.48-0.066 8.646-0.958 16.996-4.688 23.564-11.122l339.946-281.206v370.894h-736v-370.876zM215.066 305.030h593.91l-296.946 245.422-296.964-245.422z',
    link: 'M743.52 529.234c5.616-5.616 83.048-83.046 88.462-88.46 30.944-32.778 47.97-75.636 47.97-120.792 0-47.048-18.304-91.26-51.542-124.484-33.228-33.22-77.43-51.516-124.458-51.516-45.024 0-87.792 16.94-120.536 47.72l-104.458 104.456c-30.792 32.738-47.734 75.512-47.734 120.548 0 41.916 14.576 81.544 41.248 113.196 3.264 3.876 6.666 7.664 10.292 11.29 4.258 4.258 8.704 8.262 13.304 12.022 0.054 0.080 0.096 0.152 0.148 0.232 9.572 7.308 15.778 18.804 15.778 31.776 0 22.094-17.914 40-40.004 40-8.542 0-16.442-2.696-22.938-7.26-2.746-1.93-20.622-17.43-30.35-28.050-0.008-0.010-0.018-0.018-0.026-0.028-4.992-5.432-13.234-15.23-18.552-22.65s-16.556-25.872-17.036-26.736c-0.7-1.262-2.974-5.526-3.422-6.39-0.69-1.334-6.118-12.67-6.114-12.67-14.342-31.96-22.332-67.4-22.332-104.728 0-60.826 21.198-116.648 56.58-160.544 0.252-0.314 4.61-5.594 6.594-7.866 0.304-0.35 5.038-5.636 7.16-7.874 0.252-0.268 105.86-105.874 106.128-106.126 45.902-43.584 107.958-70.314 176.264-70.314 141.382 0 255.998 114.5 255.998 256 0 68.516-26.882 130.688-70.652 176.61-0.144 0.148-109.854 109.546-112.090 111.528-0.958 0.848-5.072 4.352-5.072 4.352-6.448 5.434-13.132 10.592-20.1 15.378 0.412-6.836 0.644-13.702 0.644-20.6 0-26.46-3.108-52.206-8.918-76.918l-0.236-1.102zM616.144 767.82c35.382-43.896 56.58-99.718 56.58-160.544 0-37.328-7.99-72.768-22.332-104.728 0.004 0 0.006-0.002 0.010-0.004-0.258-0.576-0.538-1.14-0.8-1.714-0.686-1.498-2.894-6.112-3.296-6.93-0.668-1.344-2.952-5.732-3.386-6.604-3.48-6.982-8.708-15.126-9.49-16.366-0.498-0.792-0.996-1.58-1.502-2.364-0.834-1.29-15.364-22.066-26.656-34.466-0.008-0.010-0.018-0.018-0.026-0.028-7.056-8.448-24.932-24.198-30.35-28.050-6.47-4.602-14.396-7.26-22.938-7.26-22.090 0-40.004 17.906-40.004 40 0 12.97 6.206 24.466 15.778 31.776 0.052 0.080 0.094 0.152 0.148 0.232 4.602 3.76 20.334 19.434 23.598 23.31 26.672 31.65 41.248 71.28 41.248 113.196 0 45.038-16.944 87.81-47.734 120.548l-104.458 104.456c-32.742 30.782-75.512 47.72-120.536 47.72-47.028 0-91.228-18.294-124.458-51.516-33.236-33.224-51.542-77.436-51.542-124.484 0-45.154 17.028-88.014 47.97-120.792 5.414-5.414 40.812-40.812 68.958-68.958 7.176-7.176 13.888-13.886 19.504-19.502v-0.002c-0.356-1.562-0.246-1.096-0.246-1.096-5.81-24.712-8.918-50.458-8.918-76.918 0-6.898 0.232-13.764 0.644-20.6-6.966 4.788-20.1 15.33-20.1 15.33-0.734 0.62-9.518 8.388-11.68 10.45-0.16 0.154-105.338 105.33-105.482 105.478-43.77 45.922-70.652 108.094-70.652 176.61 0 141.5 114.616 256 255.998 256 68.306 0 130.362-26.73 176.264-70.314 0.27-0.254 105.876-105.86 106.128-106.126 0.004-0.002 13.506-15.426 13.758-15.74z',
    paperclip:
      'M824.25 369.354c68.146-70.452 67.478-182.784-2.094-252.354-70.296-70.296-184.266-70.296-254.558 0-0.014 0.012-0.028 0.026-0.042 0.042-0.004 0.002-0.006 0.004-0.010 0.008l-433.144 433.142c-0.036 0.036-0.074 0.068-0.11 0.106-0.054 0.052-0.106 0.11-0.16 0.162l-2.668 2.67c-0.286 0.286-0.528 0.596-0.8 0.888-43.028 44.88-66.664 103.616-66.664 165.986 0 64.106 24.962 124.376 70.292 169.704 45.328 45.33 105.598 70.292 169.706 70.292 50.612 0 98.822-15.57 139.186-44.428 4.932-1.952 9.556-4.906 13.544-8.894l16.802-16.802c0.056-0.056 0.116-0.112 0.172-0.168 0.038-0.038 0.074-0.076 0.112-0.116l289.010-289.014c15.622-15.618 15.62-40.942 0-56.56s-40.948-15.62-56.566 0l-289.124 289.122c-62.482 62.484-163.792 62.484-226.274 0-62.484-62.482-62.484-163.79 0-226.272h-0.002l433.134-433.12c0.058-0.060 0.112-0.122 0.172-0.18 38.99-38.99 102.43-38.99 141.42 0 38.992 38.99 38.99 102.432 0 141.422-0.058 0.060-0.122 0.114-0.18 0.17l0.006 0.006-280.536 280.534c-0.002-0.002-0.002-0.004-0.004-0.006l-79.978 79.98c-0.010 0.010-0.016 0.020-0.028 0.028-0.008 0.012-0.018 0.018-0.028 0.028l-0.064 0.062c-15.622 15.624-40.944 15.624-56.562 0-15.624-15.62-15.624-40.944-0.002-56.566l0.062-0.062c0.010-0.010 0.018-0.020 0.028-0.028 0.008-0.012 0.020-0.018 0.028-0.028l79.98-79.978c-0.002-0.002-0.004-0.002-0.006-0.004l136.508-136.512c15.622-15.62 15.62-40.944-0.002-56.562-15.618-15.62-40.946-15.62-56.564 0l-219.342 219.344c-1.284 1.284-2.42 2.652-3.494 4.052-40.4 47.148-38.316 118.184 6.322 162.824 44.64 44.638 115.674 46.722 162.82 6.324 1.402-1.072 2.772-2.21 4.054-3.494l2.83-2.832c0.002 0 0.002 0 0.002 0s0 0 0 0l360.54-360.54c0.058-0.056 0.12-0.114 0.18-0.172 0.050-0.050 0.098-0.106 0.15-0.158l0.994-0.994c0.34-0.338 0.63-0.702 0.952-1.052z',
    box: 'M960.016 408.080c0-0.672-0.046-1.342-0.078-2.014-0.032-0.594-0.044-1.19-0.102-1.782-0.068-0.726-0.186-1.448-0.294-2.17-0.080-0.54-0.144-1.080-0.248-1.616-0.138-0.724-0.326-1.442-0.506-2.16-0.134-0.534-0.252-1.070-0.408-1.6-0.196-0.662-0.436-1.314-0.668-1.968-0.204-0.582-0.396-1.166-0.628-1.74-0.226-0.56-0.494-1.11-0.75-1.662-0.3-0.656-0.598-1.312-0.934-1.954-0.242-0.454-0.514-0.894-0.774-1.342-0.414-0.716-0.83-1.43-1.292-2.124-0.256-0.382-0.538-0.752-0.806-1.128-0.514-0.716-1.036-1.428-1.602-2.116-0.090-0.11-0.162-0.226-0.254-0.336-0.244-0.292-0.516-0.542-0.768-0.826-0.534-0.6-1.068-1.198-1.644-1.772-0.48-0.478-0.982-0.924-1.48-1.376-0.354-0.316-0.674-0.658-1.040-0.964l-405.788-335.666c-6.568-6.436-14.918-10.166-23.564-11.124-0.16-0.022-0.32-0.050-0.48-0.066-0.838-0.082-1.676-0.11-2.518-0.14-0.496-0.020-0.994-0.058-1.492-0.058s-0.996 0.040-1.492 0.058c-0.842 0.028-1.68 0.058-2.518 0.14-0.16 0.016-0.32 0.044-0.48 0.066-8.646 0.956-16.996 4.688-23.564 11.124l-405.662 335.542c-7.13 5.982-11.616 13.93-13.392 22.382-0.032 0.14-0.070 0.278-0.1 0.42-0.212 1.072-0.37 2.152-0.494 3.238-0.032 0.258-0.078 0.51-0.106 0.77-0.086 0.89-0.114 1.786-0.138 2.68-0.014 0.39-0.052 0.78-0.054 1.17 0 0.040-0.006 0.074-0.006 0.114v204.856c-0.958 12.434 3.854 25.128 14.134 33.754l405.662 335.54c6.568 6.438 14.918 10.168 23.564 11.124 0.16 0.020 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058 0.054 0 0.11-0.008 0.162-0.008 0.042 0 0.084 0.008 0.126 0.008 0.342 0 0.672-0.042 1.012-0.050 0.062-0.004 0.126-0.008 0.192-0.008 0.134-0.004 0.27-0.020 0.402-0.024 10.602-0.422 20.136-4.938 27.054-12.046l404.526-334.624c0.084-0.066 0.166-0.136 0.248-0.204l0.12-0.098c0.17-0.144 0.314-0.304 0.48-0.45 0.814-0.704 1.614-1.43 2.37-2.2 0.296-0.3 0.562-0.624 0.85-0.934 0.602-0.652 1.2-1.308 1.756-2 0.3-0.372 0.566-0.758 0.852-1.136 0.504-0.672 1.002-1.344 1.462-2.046 0.242-0.368 0.458-0.75 0.686-1.124 0.458-0.754 0.908-1.508 1.316-2.292 0.164-0.312 0.304-0.636 0.46-0.954 0.426-0.872 0.832-1.746 1.196-2.652 0.092-0.23 0.168-0.464 0.256-0.696 0.376-0.996 0.728-2 1.026-3.032 0.042-0.148 0.074-0.296 0.114-0.442 0.306-1.102 0.578-2.218 0.79-3.356 0.016-0.082 0.024-0.164 0.038-0.246 0.212-1.184 0.382-2.378 0.49-3.598v0c0.1-1.156 0.176-2.32 0.176-3.5v-204.86c0.024-0.318 0.022-0.638 0.040-0.958 0.026-0.668 0.074-1.338 0.074-2.008zM143.89 493.202l328.14 271.42v103.902l-328.14-271.18v-104.142zM552.032 764.402l327.868-271.212v103.88l-327.868 270.972v-103.64zM511.898 122.66l345.348 285.42-345.348 285.42-345.374-285.42 345.374-285.42z',
    structure:
      'M954.324 833.3c0.208-0.558 0.388-1.128 0.586-1.692 0.3-0.868 0.608-1.734 0.882-2.61 0.234-0.746 0.444-1.5 0.66-2.25 0.212-0.734 0.432-1.464 0.624-2.204 0.204-0.766 0.378-1.54 0.562-2.308 0.18-0.766 0.366-1.528 0.528-2.292 0.146-0.692 0.272-1.386 0.402-2.082 0.168-0.89 0.332-1.778 0.476-2.668 0.090-0.566 0.164-1.136 0.244-1.704 0.148-1.058 0.29-2.118 0.404-3.18 0.042-0.422 0.080-0.852 0.12-1.274 0.118-1.23 0.212-2.46 0.282-3.696 0.018-0.304 0.030-0.606 0.042-0.906 0.062-1.36 0.098-2.718 0.104-4.082 0-0.114 0.008-0.226 0.008-0.34 0-0.128-0.010-0.258-0.010-0.39-0.006-1.368-0.042-2.734-0.104-4.102-0.014-0.296-0.030-0.594-0.044-0.89-0.070-1.246-0.166-2.492-0.284-3.738-0.042-0.434-0.084-0.864-0.128-1.292-0.116-1.050-0.25-2.098-0.4-3.144-0.088-0.628-0.18-1.258-0.282-1.882-0.13-0.8-0.276-1.598-0.428-2.394-0.162-0.868-0.332-1.73-0.518-2.594-0.116-0.524-0.24-1.046-0.364-1.57-0.264-1.128-0.542-2.25-0.846-3.36-0.070-0.254-0.144-0.504-0.214-0.754-11.38-40.382-48.464-69.996-92.488-69.996-3.066 0-6.096 0.16-9.088 0.442l-264.576-458.262c21.080-29.698 24.3-70.13 4.9-103.732-12.596-21.816-32.458-36.812-54.764-43.724-0.062-0.020-0.124-0.036-0.186-0.054-1.394-0.43-2.798-0.83-4.21-1.196-0.296-0.076-0.596-0.142-0.894-0.216-1.208-0.3-2.422-0.586-3.642-0.84-0.384-0.082-0.774-0.148-1.16-0.224-1.168-0.228-2.338-0.444-3.514-0.626-0.384-0.060-0.776-0.112-1.162-0.168-1.208-0.174-2.416-0.332-3.63-0.46-0.35-0.038-0.7-0.066-1.048-0.1-1.27-0.12-2.54-0.218-3.814-0.29-0.32-0.018-0.642-0.032-0.964-0.044-1.294-0.058-2.594-0.094-3.892-0.1-0.166 0-0.328-0.012-0.492-0.012-0.19 0-0.376 0.014-0.564 0.014-1.21 0.008-2.42 0.040-3.63 0.092-0.494 0.022-0.986 0.046-1.478 0.074-0.992 0.060-1.986 0.136-2.978 0.226-0.722 0.064-1.442 0.134-2.16 0.214-0.696 0.080-1.392 0.17-2.090 0.266-1.014 0.136-2.026 0.286-3.032 0.452-0.352 0.060-0.704 0.124-1.054 0.19-44.97 8.028-79.122 47.302-79.122 94.582 0 20.756 6.602 39.958 17.79 55.67l-264.58 458.26c-2.954-0.274-5.94-0.434-8.962-0.434-53.078 0-96.11 43.032-96.11 96.11 0 53.082 43.032 96.11 96.11 96.11 38.8 0 72.208-23.004 87.386-56.11l529.202-0.004c0.138 0.304 0.292 0.606 0.436 0.91 0.226 0.48 0.456 0.958 0.69 1.434 0.474 0.968 0.966 1.93 1.476 2.882 0.214 0.402 0.432 0.8 0.65 1.2 0.314 0.566 0.604 1.14 0.93 1.708 0.284 0.488 0.59 0.958 0.88 1.442 0.122 0.2 0.244 0.398 0.37 0.602 27.086 44.372 84.766 59.278 130.040 33.136 18.864-10.89 32.624-27.214 40.478-45.852 0.054-0.132 0.104-0.266 0.158-0.398 0.518-1.248 1.020-2.506 1.486-3.776zM238.414 744.282l264.542-458.204c0.424 0.042 0.85 0.064 1.276 0.098 0.668 0.056 1.334 0.112 2.004 0.152 0.652 0.040 1.306 0.066 1.96 0.092 1.122 0.046 2.244 0.076 3.368 0.084 0.146 0.002 0.292 0.012 0.438 0.012 0.168 0 0.334-0.012 0.502-0.014 1.436-0.004 2.874-0.040 4.31-0.108 0.088-0.006 0.176-0.010 0.262-0.014 1.376-0.070 2.75-0.168 4.124-0.296l264.596 458.298c-3.48 4.894-6.514 10.122-9.042 15.636h-529.226c-2.546-5.55-5.602-10.814-9.114-15.736z',
    cpu: 'M392.016 672.016h240.032c22.092 0 40-17.908 40-40v-240.032c0-22.092-17.908-40-40-40h-240.032c-22.092 0-40 17.908-40 40v240.032c0 22.092 17.908 40 40 40zM432.016 431.984h160.032v160.032h-160.032v-160.032zM864.032 424h71.98c22.094 0 40.004-17.906 40.004-40 0-22.092-17.906-40-40-40h-71.984v-143.968c0-22.092-17.908-40-40-40h-144v-72.012c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.016h-176v-72.012c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v72.016h-144c-22.092 0-40 17.908-40 40v143.968h-71.984c-22.094 0-40 17.908-40 40s17.91 40 40 40h71.984v176h-71.984c-22.094 0-40 17.908-40 40s17.91 40 40 40h71.984v144.030c0 22.092 17.908 40 40 40h144v71.954c0 22.094 17.906 40 40 40s40-17.91 40-40v-71.954h176v71.954c0 22.094 17.906 40 40 40s40-17.91 40-40v-71.954h144c22.092 0 40-17.908 40-40v-144.030h71.98c22.094 0 40.004-17.906 40.004-40 0-22.092-17.906-40-40-40h-71.984v-176zM784.032 784.032h-143.692c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-127.382c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-127.382c-0.104 0-0.204-0.016-0.308-0.016s-0.206 0.016-0.308 0.016h-143.696v-544h544v544z',
    memory:
      'M320.032 416.032v-152.968c0-22.094 17.91-40 40-40 22.094 0 40 17.91 40 40.004v152.964c0 22.090-17.906 40-40 40s-40-17.908-40-40zM512 456.032c22.094 0 40-17.91 40-40v-152.964c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v152.968c0 22.092 17.908 40 40 40zM664.032 456.032c22.094 0 40-17.91 40-40v-82.996c0-22.094-17.906-40.004-40-40.004-22.090 0-40 17.906-40 40v83c0 22.092 17.906 40 40 40zM864.018 316.616v603.418c0 0.004 0 0.004 0 0.004 0 6.798-1.71 13.198-4.704 18.808-0.044 0.084-0.078 0.172-0.124 0.254-0.524 0.976-1.112 1.914-1.722 2.836-0.098 0.15-0.18 0.312-0.282 0.46-7.188 10.638-19.36 17.634-33.168 17.634h-623.99c-22.090 0-40-17.908-40-40v-343.574c-0.002-0.142-0.022-0.282-0.022-0.426 0-0.142 0.020-0.282 0.022-0.426v-471.574c0-20.34 15.192-37.092 34.838-39.63 1.694-0.216 3.408-0.37 5.162-0.37l411.254 0.052c10.594-0.286 21.282 3.58 29.368 11.668l211.672 212.206c7.906 7.908 11.792 18.298 11.696 28.66zM240.026 144.034v391.998h543.99v-203.27l-188.252-188.728h-355.738zM784.016 880.032v-264h-543.99v264h543.99z',
    database:
      'M895.95 221.364c-3.414-87.32-173.972-157.672-383.918-157.672s-380.504 70.352-383.918 157.672h-0.082v578.328c0 88.552 171.918 160.338 384 160.338s384-71.786 384-160.338v-578.328h-0.082zM798.412 430.578c-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-92.9c70.29 37.478 179.654 61.566 302.5 61.566s232.21-24.088 302.5-61.566v92.9c-2.476 3.266-7.416 8.522-16.12 14.874zM814.532 514.464v93.24c-2.474 3.266-7.416 8.522-16.12 14.874-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-93.24c70.29 37.48 179.654 61.566 302.5 61.566s232.21-24.086 302.5-61.566zM225.652 209.146c15.6-11.386 37.69-22.346 63.88-31.696 60.984-21.77 140.002-33.758 222.498-33.758s161.514 11.988 222.498 33.758c26.192 9.348 48.282 20.308 63.882 31.696 8.704 6.352 13.646 11.608 16.12 14.874v0.026c-2.474 3.266-7.416 8.522-16.12 14.874-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.706-6.352-13.646-11.608-16.122-14.874v-0.026c2.476-3.268 7.418-8.524 16.122-14.874zM798.412 814.578c-15.6 11.386-37.69 22.346-63.882 31.696-60.984 21.77-140.002 33.758-222.498 33.758s-161.514-11.988-222.498-33.758c-26.192-9.348-48.282-20.308-63.88-31.696-8.714-6.36-13.66-11.62-16.13-14.886h0.010v-93.228c70.29 37.48 179.654 61.566 302.5 61.566s232.21-24.086 302.5-61.566v93.228h0.010c-2.474 3.266-7.42 8.526-16.132 14.886z',
    power:
      'M320 118.3a45.7 45.7 0 0122.5 85.6 384.6 384.6 0 00-120.8 93.4A380.9 380.9 0 00128 548.6c0 102.5 39.9 199 112.4 271.5A381.5 381.5 0 00512 932.5c102.5 0 199-39.9 271.5-112.4a381.5 381.5 0 00112.4-271.5c0-98.1-36.5-190.6-103.1-262l-2-2-9.4-9.5a384.2 384.2 0 00-100-71.2 45.6 45.6 0 0139.6-82.2l.6.3h.2l.1.1h.1l2 1 4 2 1.9 1 3.5 1.9a480.6 480.6 0 0144.9 27l2 1.3v-.3.1a475.4 475.4 0 11-545.3 6.2l3.6-2.6v.1a471.4 471.4 0 0151.7-31.7l3.7-2 1.4-.7.3-.2 6.4-3.1.1-.1h.1l.7-.3c5.2-2.1 11-3.4 17-3.4zM511.8 0c25 0 45.3 20 45.7 45v421.3a45.7 45.7 0 01-91.4.7V45.7A45.7 45.7 0 01511.9 0z',
    outbox:
      'M960.062 616v304c0 1.382-0.070 2.746-0.208 4.090-2.046 20.172-19.080 35.91-39.792 35.91h-816c-22.090 0-40-17.906-40-40v-304c0-22.090 17.91-40 40-40s40 17.91 40 40v264h736v-264c0-22.090 17.91-40 40-40s40 17.912 40 40zM664.732 200.168l-124.41-124.41c-0.014-0.014-0.024-0.028-0.038-0.042-3.57-3.57-7.664-6.284-12.018-8.222-5.316-2.368-11.028-3.54-16.742-3.47-0.14-0.002-0.276-0.020-0.414-0.020-13.552 0-25.512 6.756-32.748 17.072l-119.1 119.092c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l55.276-55.276v462.54c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-464.314l57.052 57.052c15.622 15.624 40.948 15.62 56.568 0 15.628-15.624 15.628-40.952 0.002-56.572z',
    share:
      'M896.006 920c0 22.090-17.91 40-40 40h-688.006c-22.090 0-40-17.906-40-40v-549.922c-0.838-3.224-1.33-6.588-1.33-10.072 0-22.090 17.908-40.004 40-40.004h178.66c22.092 0.004 40 17.914 40 40.004 0 22.088-17.908 40-40 40h-137.33v479.996h607.998v-479.996h-138.658c-22.090 0-40-17.912-40-40 0-22.090 17.906-40.004 40-40.004h178.658c22.090 0 40 17.91 40 40v559.844c0 0.050 0.008 0.102 0.008 0.154zM665.622 200.168l-124.452-124.45c-8.042-8.042-18.65-11.912-29.186-11.674-1.612-0.034-3.222 0-4.828 0.16-0.558 0.054-1.098 0.16-1.648 0.238-0.742 0.104-1.484 0.192-2.218 0.338-0.656 0.13-1.29 0.31-1.934 0.472-0.622 0.154-1.244 0.292-1.86 0.476-0.64 0.196-1.258 0.436-1.886 0.66-0.602 0.216-1.208 0.414-1.802 0.66-0.598 0.248-1.17 0.54-1.754 0.814-0.598 0.282-1.202 0.546-1.788 0.86-0.578 0.312-1.13 0.664-1.694 1-0.552 0.332-1.116 0.644-1.654 1.006-0.67 0.448-1.3 0.942-1.942 1.426-0.394 0.302-0.806 0.576-1.196 0.894-1.046 0.858-2.052 1.768-3.008 2.726l-124.398 124.39c-15.622 15.62-15.618 40.948 0.002 56.57 15.622 15.62 40.95 15.62 56.568 0l56.164-56.166v439.426c0 22.094 17.912 40 40.002 40 22.092 0 40-17.91 40-40v-441.202l57.942 57.942c15.622 15.624 40.948 15.62 56.568 0 15.626-15.618 15.626-40.946 0.002-56.566z',
    button:
      'M644.634 802.32c-4.558 5.434-10.254 9.328-16.446 11.672l0.008 0.024-45.628 16.606 27.54 75.66c7.554 20.756-3.148 43.71-23.906 51.266s-43.714-3.146-51.27-23.906l-27.54-75.656-47.63 17.29c-6.020 1.956-12.586 2.518-19.254 1.342-21.75-3.836-36.282-24.582-32.45-46.34l30.57-173.328c2.55-14.476 12.61-25.714 25.458-30.508 0.292-0.118 0.586-0.23 0.878-0.34 0.238-0.084 0.476-0.168 0.718-0.246 12.942-4.624 27.91-2.492 39.196 6.98l134.824 113.13c16.932 14.2 19.144 39.432 4.932 56.354zM960.002 664v-368.082c0-22.092-17.908-40-40-40h-816c-22.092 0-40 17.908-40 40l-0.292 368.238c0 22.092 17.908 40 40 40h240.292c22.092 0 40-17.908 40-40s-17.908-40-40-40h-200.292l0.292-288.238h736v288.082h-200c-22.092 0-40 17.908-40 40s17.908 40 40 40h240c22.092 0 40-17.908 40-40z',
    form: 'M948.362 178.828l-471.082 470.086c-0.24 0.25-0.45 0.52-0.698 0.77-7.82 7.82-18.070 11.722-28.32 11.712-10.25 0.010-20.504-3.892-28.324-11.712-0.262-0.262-0.48-0.546-0.734-0.812l-221.736-221.738c-15.624-15.622-15.624-40.95 0-56.566 15.618-15.622 40.946-15.624 56.57 0l194.224 194.222 443.53-442.528c15.622-15.618 40.95-15.618 56.57 0 15.62 15.62 15.62 40.946 0 56.566zM98.372 128.448c-18.926 0-34.266 15.342-34.266 34.268v699.032c0 18.926 15.34 34.266 34.266 34.266h699.032c18.926 0 34.266-15.34 34.266-34.266v-430.588c0 0 0.002-1.184 0.002-1.788 0-22.090-17.914-40-40.004-40s-40 17.91-40 40c0 0.288 0.002 386.64 0.002 386.64h-607.562v-607.564h600.002c22.090-0.002 40.002-17.906 40.002-40 0-22.090-17.914-40-40.004-40z',
    check:
      'M948.598 199.75c-15.622-15.618-40.95-15.618-56.57 0l-535.644 535.644-224.060-224.062c-15.624-15.624-40.954-15.62-56.57 0-15.624 15.62-15.624 40.948 0 56.568l251.574 251.574c0.252 0.266 0.472 0.55 0.734 0.812 7.82 7.82 18.072 11.724 28.322 11.714 10.25 0.010 20.502-3.894 28.322-11.714 0.248-0.248 0.456-0.518 0.698-0.77l563.196-563.202c15.618-15.618 15.618-40.94-0.002-56.564z',
    batchaccept:
      'M684 277L271 772l-1 1a40 40 0 0 1-56 5l-1-1L14 610a40 40 0 1 1 52-61l169 142 387-465a40 40 0 0 1 62 51zm340 234c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0-216c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0 432c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40z',
    batchdeny:
      'M1024 512c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0-216c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zm0 432c0-22-18-40-40-40H808a40 40 0 0 0 0 80h176c22 0 40-18 40-40zM625 236c16 15 16 41 0 56L406 512l220 220a40 40 0 1 1-57 57L349 568 129 788a40 40 0 1 1-57-56l220-220L73 292a40 40 0 0 1 56-57l220 220 219-219c16-16 41-16 57 0z',
    home: 'M948.12 483.624l-407.814-407.754c-7.812-7.808-18.046-11.712-28.282-11.712-10.238 0-20.472 3.904-28.282 11.712l-407.92 407.86c-15.624 15.622-15.624 40.948-0.006 56.57s40.944 15.622 56.568 0.004l19.616-19.612v366.708c0 22.090 17.91 40 40 40h190.696c0.416 0.014 0.82 0.062 1.238 0.062 11.054 0 21.060-4.484 28.3-11.734 7.266-7.244 11.766-17.262 11.766-28.332 0-0.418-0.050-0.822-0.062-1.238v-263.204h176.060v263.934c0 22.090 17.91 40 40 40l191.876 0.124c2.292 0 4.524-0.236 6.708-0.608 0.45-0.074 0.91-0.116 1.356-0.206 0.21-0.044 0.414-0.116 0.628-0.162 17.906-3.972 31.308-19.924 31.308-39.026v-366.492l19.682 19.68c15.622 15.62 40.948 15.616 56.568-0.006s15.618-40.948-0.004-56.568zM791.876 448.272v398.71l-111.874-0.074v-263.876c0-0.020-0.002-0.042-0.002-0.062 0-0.006 0-0.014 0-0.022 0-22.090-17.91-40-40-40h-254.002c-0.556 0-1.1 0.060-1.65 0.084-0.14-0.002-0.274-0.022-0.414-0.022-22.090 0-40 17.91-40 40v264.382h-111.934v-399.392c0-2.286-0.234-4.512-0.604-6.694l280.626-280.584 280.514 280.472c-0.412 2.302-0.66 4.658-0.66 7.078z',
    admin:
      'M919.596 847.534h-88.414v-467.716l88.75-0.044c13.688-0.132 26.958-7.25 34.294-19.96 11.044-19.13 4.49-43.596-14.642-54.64l-407.904-235.676c-0.44-0.254-0.894-0.45-1.34-0.684-0.542-0.29-1.084-0.578-1.638-0.84-0.696-0.328-1.4-0.62-2.108-0.904-0.478-0.194-0.954-0.388-1.44-0.56-0.78-0.282-1.564-0.524-2.352-0.754-0.442-0.126-0.878-0.256-1.324-0.37-0.808-0.206-1.618-0.376-2.43-0.528-0.468-0.088-0.934-0.174-1.404-0.246-0.768-0.116-1.534-0.204-2.302-0.274-0.554-0.052-1.108-0.096-1.664-0.124-0.672-0.034-1.34-0.044-2.012-0.044-0.67 0-1.338 0.012-2.010 0.044-0.556 0.030-1.11 0.072-1.664 0.124-0.77 0.070-1.536 0.158-2.302 0.274-0.468 0.072-0.938 0.158-1.402 0.246-0.814 0.152-1.624 0.322-2.432 0.528-0.444 0.114-0.882 0.242-1.322 0.37-0.79 0.23-1.574 0.472-2.356 0.754-0.484 0.172-0.958 0.368-1.438 0.56-0.708 0.286-1.41 0.576-2.11 0.904-0.554 0.262-1.094 0.55-1.636 0.84-0.446 0.234-0.9 0.43-1.34 0.684l-407.906 235.672c-19.128 11.044-25.686 35.51-14.64 54.64 7.34 12.71 20.606 19.828 34.292 19.96v0.044h89.842v467.716h-89.474c-22.090 0-40 17.91-40 40s17.91 40 40 40h128.276c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h183.602c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h183.602c0.402 0.012 0.794 0.060 1.2 0.060s0.796-0.048 1.2-0.060h313.154c22.098 0 40-17.91 40-40-0.006-22.090-17.914-39.996-40.006-39.996zM751.182 847.534h-105.94v-467.716h105.94v467.716zM252.93 299.816l258.736-149.486 258.738 149.486h-517.474zM565.242 379.816v467.716h-106v-467.716h106zM273.242 379.816h106v467.716h-106v-467.716z',
    paragraph:
      'M728.032 96.032h-116.98c-0.026 0-0.050-0.004-0.076-0.004s-0.050 0.004-0.076 0.004h-199.848c-0.026 0-0.050-0.004-0.076-0.004s-0.050 0.004-0.076 0.004h-31.924c-123.712 0-224 100.292-224 224 0 121.032 95.994 219.628 216 223.842v344.158c0 22.092 17.91 40 40 40 22.086 0 40-17.908 40-40v-712h120v712c0 22.092 17.91 40 40 40 22.086 0 40-17.908 40-40v-712h77.056c22.094 0 40-17.91 40-40 0-22.092-17.91-40-40-40z',
    basket:
      'M632.254 695.604v-112.016c-0.004-22.092 17.906-40.002 40-40.002 22.090 0.002 40 17.908 40 40.002l-0.004 112.018c0.004 22.088-17.906 39.996-39.996 39.998-22.094 0.002-40.004-17.904-40-40zM352.246 735.604c22.090-0.002 40-17.91 39.996-39.998l0.004-112.018c0-22.094-17.91-40-40-40.002-22.094 0-40.004 17.91-40 40.002v112.016c-0.004 22.096 17.906 40.002 40 40zM512.25 735.604c22.090-0.002 40-17.91 39.996-39.998l0.004-112.018c0-22.094-17.91-40-40-40.002-22.094 0-40.004 17.91-40 40.002v112.016c-0.004 22.096 17.906 40.002 40 40zM950.3 397.424c-7.596-8.686-18.574-13.67-30.114-13.67h-313.284c0.87 5.196 1.346 10.524 1.346 15.966 0 24.608-9.27 47.044-24.494 64.034h290.684l-47.318 351.376-629.908-0.030-47.502-351.346h291.034c-15.224-16.988-24.494-39.426-24.494-64.034 0-5.444 0.476-10.772 1.346-15.966h-313.66c-11.542 0-22.524 4.986-30.12 13.678-7.596 8.694-11.066 20.242-9.52 31.682l51.614 381.742 0.050 0.042c5.832 47.424 46.222 84.158 95.222 84.172l0.054 0.034 601.816-0.034c0.042 0 0.082 0.002 0.124 0.002 49.414 0 90.090-37.34 95.396-85.336l51.258-380.64c1.54-11.44-1.934-22.984-9.53-31.672zM805.492 105.34c-15.622-15.622-40.95-15.624-56.572 0.004l-230.684 230.684c-2.052-0.2-4.132-0.306-6.236-0.306-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64c0-2.652-0.18-5.262-0.494-7.83l229.986-229.98c15.622-15.624 15.616-40.95-0-56.572z',
    credit:
      'M376.188 672.062h-112.124c-22.092 0-40-17.908-40-40s17.908-40 40-40h112.124c22.092 0 40 17.908 40 40s-17.908 40-40 40zM960 232.002v560c0 6.8-1.708 13.2-4.704 18.81-0.044 0.082-0.078 0.172-0.124 0.254-0.524 0.974-1.112 1.914-1.722 2.836-0.098 0.15-0.18 0.31-0.282 0.458-7.188 10.64-19.36 17.638-33.168 17.638h-816c-22.090 0-40-17.908-40-40v-559.998c0-20.34 15.192-37.092 34.838-39.628 1.694-0.218 3.408-0.372 5.162-0.372h816c1.754 0 3.468 0.152 5.162 0.372 19.646 2.536 34.838 19.288 34.838 39.63zM144 272.002v80.030h736v-80.030h-736zM880 751.998v-239.966h-736v239.966h736z',
    shield:
      'M875.146 148.994c-0.064-0.040-0.116-0.094-0.184-0.132-92.714-52.39-221.036-84.83-362.846-84.83-138.512 0-270.346 34.356-362.51 84.618-0.606 0.33-1.138 0.658-1.608 0.986-11.954 6.918-20.016 19.81-20.016 34.614v451.4c0 12.7 5.938 23.996 15.166 31.32l340.538 281.676c6.568 6.434 14.918 10.168 23.564 11.122 0.16 0.024 0.32 0.050 0.48 0.066 0.838 0.082 1.676 0.114 2.518 0.14 0.496 0.020 0.994 0.058 1.492 0.058s0.996-0.040 1.492-0.058c0.842-0.032 1.68-0.058 2.518-0.14 0.16-0.016 0.32-0.042 0.48-0.066 8.646-0.958 16.996-4.688 23.564-11.122l339.36-280.718c10.326-7.23 17.094-19.2 17.094-32.762v-450.918c0.002-15.254-8.54-28.506-21.102-35.254zM207.984 208.212c36.292-18.168 77.668-32.854 123.356-43.722 57.062-13.576 117.884-20.458 180.778-20.458s123.714 6.882 180.778 20.458c30.186 7.182 58.474 16.040 84.674 26.456l-490.846 490.848-78.738-65.070v-408.512zM511.742 867.75l-163.078-134.77 467.586-467.584v350.69l-304.508 251.664z',
    beaker:
      'M848.64 790.56l-208.638-361.374v-252.062h24c22.092 0 40-17.908 40-40s-17.908-40-40-40h-304.002c-22.092 0-40 17.908-40 40s17.908 40 40 40h24v252.066l-208.636 361.37c-44 76.208-8 138.564 80 138.564h513.278c87.998 0 123.998-62.354 79.998-138.564zM464 177.124h96.002l-0.070 273.376 63.872 110.628h-223.678c35.932-62.268 63.872-110.684 63.876-110.692v-273.312zM768.64 849.124h-513.278c-8.28 0-14.186-0.976-17.968-2 1.004-3.792 3.112-9.394 7.25-16.564 0 0 54.598-94.614 109.316-189.436l316.026-0.002 109.374 189.44c4.138 7.168 6.246 12.77 7.25 16.562-3.784 1.024-9.69 2-17.97 2z',
    thumbsup:
      'M256.972 768.004c0-8.67-3.156-16.158-9.484-22.534-6.332-6.34-13.836-9.484-22.504-9.458-8.682 0-16.188 3.172-22.516 9.458-6.33 6.344-9.488 13.84-9.488 22.534 0 8.692 3.158 16.186 9.488 22.532 6.328 6.286 13.834 9.458 22.516 9.458 8.668 0.028 16.172-3.118 22.504-9.458 6.328-6.376 9.484-13.868 9.484-22.532zM832.948 480.010c0-17.004-6.478-31.908-19.468-44.734-13.014-12.82-27.834-19.25-44.512-19.276h-175.97c0-19.328 7.98-45.904 24.004-79.724 15.968-33.826 23.978-60.568 23.978-80.256 0-32.646-5.332-56.808-15.994-72.48-10.664-15.664-31.988-23.484-63.98-23.484-8.696 8.64-15.012 22.828-19.032 42.486-4.020 19.69-9.102 40.606-15.254 62.752-6.168 22.172-16.080 40.382-29.762 54.738-7.344 7.68-20.168 22.832-38.5 45.496-1.326 1.67-5.164 6.65-11.512 15.010-6.342 8.342-11.594 15.178-15.762 20.508-4.156 5.308-9.91 12.386-17.252 21.218-7.328 8.862-14 16.186-19.988 22.038-5.986 5.794-12.412 11.73-19.26 17.744-6.852 5.984-13.508 10.5-19.99 13.48-6.478 3.010-12.4 4.484-17.756 4.512h-15.982v320.010h15.982c4.332 0 9.596 0.492 15.774 1.504 6.168 1.012 11.676 2.080 16.488 3.258 4.812 1.144 11.154 2.98 19.002 5.466 7.862 2.512 13.702 4.424 17.502 5.74 3.812 1.31 9.732 3.422 17.756 6.238 8.026 2.842 12.866 4.586 14.506 5.272 70.324 24.334 127.304 36.504 170.996 36.504h60.482c64.006 0 96.024-27.836 96.024-83.478 0-8.664-0.848-18.016-2.514-27.996 10.004-5.334 17.936-14.084 23.758-26.276 5.824-12.172 8.724-24.416 8.778-36.746 0-12.366-3.008-23.844-9.024-34.51 17.664-16.682 26.524-36.496 26.524-59.496 0-8.308-1.696-17.554-5.032-27.72-3.336-10.202-7.492-18.104-12.468-23.762 10.636-0.328 19.55-8.15 26.714-23.486 7.192-15.34 10.744-28.82 10.744-40.496v-0.054zM896.984 479.516c0 29.638-8.204 56.816-24.5 81.506 2.98 10.994 4.484 22.476 4.484 34.482 0 25.674-6.344 49.68-19.004 71.99 1.012 7 1.506 14.164 1.506 21.488 0 33.688-10.008 63.354-29.968 89.026 0.326 46.32-13.834 82.904-42.518 109.756-28.682 26.848-66.522 40.246-113.496 40.246h-64.528c-31.99 0-63.542-3.746-94.742-11.268-31.168-7.492-67.246-18.402-108.23-32.758-38.662-13.312-61.656-19.956-68.984-19.956h-143.996c-17.664 0-32.742-6.292-45.252-18.784-12.508-12.5-18.756-27.588-18.756-45.254v-319.982c0-17.666 6.248-32.728 18.756-45.226 12.51-12.52 27.588-18.784 45.252-18.784h136.998c12.002-8.010 34.818-33.822 68.478-77.484 19.33-24.99 37.168-46.344 53.508-64.008 7.996-8.314 13.918-22.586 17.744-42.766 3.828-20.178 8.912-41.232 15.256-63.24 6.36-21.984 16.68-40.002 30.994-53.998 13.002-12.362 28.012-18.514 45.018-18.514 27.998 0 53.152 5.414 75.464 16.242 22.31 10.828 39.316 27.748 50.964 50.77 11.704 23.002 17.5 53.978 17.5 92.962 0 31.008-7.984 63-23.98 96.028h88.014c34.67 0 64.634 12.628 89.956 37.98 25.346 25.346 38.008 55.144 38.008 89.49l0.054 0.056z',
    mirror:
      'M857 127.778h-688c-22.092 0-40 17.91-40 40v688c0 22.090 17.908 40 40 40h688c22.094 0 40-17.91 40-40v-688c0-22.092-17.906-40-40-40zM817 815.778h-608v-1.086l606.914-606.914h1.086v608z',
    switchalt:
      'M923.946 63.418h-631.232c-20.268 0-36.7 16.432-36.7 36.7v155.286h-155.284c-20.268 0-36.7 16.432-36.7 36.7v631.23c0 20.268 16.43 36.7 36.7 36.7h631.23c20.272 0 36.7-16.432 36.7-36.7v-155.286h155.286c20.272 0 36.7-16.432 36.7-36.7v-631.23c-0.002-20.268-16.43-36.7-36.7-36.7zM688.66 880.032h-544.628v-544.628h111.984v395.946c0 20.268 16.43 36.7 36.7 36.7h395.944v111.982zM688.66 688.046h-352.644v-352.644h352.644v352.644zM880.644 688.046h-111.984v-395.946c0-20.268-16.428-36.7-36.7-36.7h-395.944v-111.984h544.628v544.63z',
    commit:
      'M984.032 472h-186.808c-19.474-140.12-139.74-248-285.222-248s-265.748 107.88-285.222 248h-186.746c-22.092 0-40 17.912-40 40.002 0 22.092 17.91 40 40 40h186.746c19.476 140.122 139.74 247.998 285.222 247.998s265.746-107.876 285.222-247.998h186.808c22.092 0 40-17.91 40-40s-17.908-40.002-40-40.002zM512 720c-114.692 0-208-93.308-208-208s93.308-208 208-208 208 93.308 208 208-93.308 208-208 208z',
    branch:
      'M861.968 312.032c0-66.168-53.832-120-120-120s-120 53.832-120 120c0 50.55 31.436 93.87 75.77 111.516-5.384 20.352-15.71 39.68-29.844 54.92-28.828 31.092-72.202 46.858-128.91 46.858-77.162 0-129.12 26.162-162.984 55.12V297.15c46.556-16.512 80-60.974 80-113.12 0-66.168-53.832-120-120-120s-120 53.832-120 120c0 52.146 33.444 96.608 80 113.12v429.762c-46.556 16.512-80 60.974-80 113.12 0 66.168 53.832 120 120 120s120-53.832 120-120c0-50.926-31.902-94.514-76.758-111.908 5.222-26.17 16.578-51.154 32.558-70.432 28.8-34.746 71.592-52.364 127.184-52.364 99.498 0 156.922-39.408 187.574-72.466 27.402-29.554 45.708-67.194 52.48-106.716 48.078-15.66 82.93-60.882 82.93-114.114zM336 144.032c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40 17.944-40 40-40zm0 736c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zm405.968-528c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.942 40-40 40z',
    merge:
      'M776.306 456.032c-51.602 0-95.696 32.744-112.612 78.542-69.674-6.072-141.482-31.012-197.386-69.306-46.266-31.69-100.392-85.728-111.792-168.92 45.4-17.12 77.79-60.998 77.79-112.314 0-66.168-53.832-120-120-120s-120 53.832-120 120c0 52.146 33.444 96.608 80 113.12v429.762c-46.556 16.512-80 60.974-80 113.12 0 66.168 53.832 120 120 120s120-53.832 120-120c0-52.146-33.444-96.608-80-113.12V471.444c19.622 21.888 42.618 41.898 68.792 59.828 68.422 46.868 156.64 77.042 241.646 83.462 16.14 47.23 60.932 81.3 113.56 81.3 66.168 0 120-53.832 120-120s-53.83-120.002-119.998-120.002zm-464-312c22.056 0 40 17.944 40 40s-17.944 40-40 40-40-17.944-40-40 17.942-40 40-40zm0 736c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40zm464-264c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z',
    pullrequest:
      'M631 157c104 1 171 52 171 166v397a123 123 0 1 1-82 0V323c0-63-27-83-90-84h-24l22 23a41 41 0 1 1-58 58l-93-93a41 41 0 0 1 1-58l93-93a41 41 0 1 1 58 58l-23 23h25zM222 314a123 123 0 1 1 82 0v406a123 123 0 1 1-82 0V314zm41 564a41 41 0 1 0 0-82 41 41 0 0 0 0 82zm0-639a41 41 0 1 0 0-83 41 41 0 0 0 0 83zm498 639a41 41 0 1 0 0-82 41 41 0 0 0 0 82z',
    chromatic:
      'M512 0a512 512 0 110 1024A512 512 0 01512 0zM368 452v284a144 144 0 00274 59c-10-4-20-8-29-14l-111-64c-6-3-10-10-10-16V523l-124-71zm454 89c-8 7-17 13-26 18L551 701l81 46 1 1a144 144 0 00189-207zm-493-89l-81 47h-1a143 143 0 00-52 196 144 144 0 00137 71c-2-10-3-21-3-32V452zm375-195l-12 1c2 10 3 21 3 32v128c0 7-4 13-10 17l-154 88v144l245-142 2-1a144 144 0 00-74-267zm-384 0c-51 0-99 28-125 72-28 49-25 109 7 154 8-7 17-13 26-18l111-64a20 20 0 0120 0l153 88 124-71-244-141-1-1c-22-12-46-19-71-19zm192-111c-57 0-107 33-130 83 10 4 19 8 29 14l245 141v-96c-2-79-66-142-144-142z',
    twitter:
      'M960 233.114c-32.946 14.616-68.41 24.5-105.598 28.942 37.954-22.762 67.098-58.774 80.856-101.688-35.52 21.054-74.894 36.368-116.726 44.598-33.542-35.724-81.316-58.038-134.204-58.038-101.496 0-183.796 82.292-183.796 183.814 0 14.424 1.628 28.45 4.758 41.89-152.75-7.668-288.22-80.872-378.876-192.072-15.822 27.15-24.898 58.706-24.898 92.42 0 63.776 32.458 120.034 81.782 153.010-30.116-0.944-58.458-9.212-83.262-22.982-0.028 0.75-0.028 1.546-0.028 2.324 0 89.070 63.356 163.334 147.438 180.256-15.426 4.186-31.664 6.426-48.442 6.426-11.836 0-23.35-1.146-34.574-3.28 23.406 73.006 91.286 126.16 171.726 127.632-62.914 49.324-142.18 78.696-228.314 78.696-14.828 0-29.448-0.876-43.842-2.568 81.33 52.138 177.96 82.574 281.786 82.574 338.11 0 523-280.104 523-523.014 0-7.986-0.164-15.914-0.542-23.778 35.952-25.96 67.124-58.318 91.756-95.162z',
    google:
      'M799.094 79.996c0 0-200.938 0-267.936 0-120.126 0-233.188 91.004-233.188 196.434 0 107.692 81.904 194.624 204.124 194.624 8.496 0 16.75-0.148 24.812-0.74-7.942 15.186-13.594 32.286-13.594 50.022 0 29.974 16.094 54.226 36.466 74.042-15.376 0-30.248 0.438-46.438 0.438-148.782 0.036-263.312 94.784-263.312 193.056 0 96.758 125.534 157.312 274.312 157.312 169.656 0 263.312-96.25 263.312-193.024 0-77.6-22.908-124.062-93.686-174.156-24.216-17.128-70.534-58.812-70.534-83.32 0-28.69 8.19-42.868 51.406-76.624 44.346-34.63 75.688-83.302 75.688-139.944 0-67.372-30-133.058-86.374-154.746h85l59.942-43.374zM701.504 735.438c2.092 8.992 3.276 18.226 3.276 27.624 0 78.226-50.374 139.304-194.934 139.304-102.874 0-177.124-65.078-177.124-143.304 0-76.622 92.122-140.434 194.934-139.32 24.004 0.254 46.376 4.136 66.69 10.702 55.812 38.834 95.874 60.808 107.158 104.994zM536.844 443.782c-69-2.094-134.624-77.212-146.564-167.876-11.874-90.664 34.378-160.030 103.442-157.97 68.996 2.060 134.594 74.818 146.53 165.432 11.906 90.696-34.408 162.508-103.408 160.414z',
    gdrive:
      'M465.926 641.356l-149.328 258.708h494.074l149.328-258.708h-494.074zM917.704 567.988l-256.33-444.048h-298.686l256.356 444.048h298.66zM320.236 197.442l-256.236 443.914 149.36 258.708 256.23-443.914-149.354-258.708z',
    youtube:
      'M704.010 511.988c0-12.332-5.038-21.358-15.042-26.992l-255.982-159.99c-10.344-6.666-21.178-6.998-32.51-1.008-10.988 5.984-16.492 15.312-16.492 28.002v320c0 12.69 5.504 22.018 16.492 28.002 5.332 2.678 10.516 3.996 15.506 3.996 6.668 0 12.334-1.644 17.004-4.98l255.982-160.014c10.004-5.69 15.042-14.684 15.042-26.992v-0.024zM960 511.988c0 31.99-0.164 56.98-0.488 75.032-0.334 17.99-1.754 40.738-4.27 68.25-2.516 27.504-6.262 52.058-11.27 73.742-5.332 24.338-16.84 44.85-34.504 61.496-17.64 16.63-38.306 26.308-61.96 28.988-73.992 8.342-185.824 12.526-335.508 12.526-149.668 0-261.5-4.184-335.5-12.526-23.662-2.656-44.414-12.302-62.242-28.988-17.834-16.678-29.412-37.182-34.744-61.496-4.672-21.684-8.258-46.238-10.756-73.742-2.508-27.512-3.928-50.26-4.254-68.25-0.342-18.050-0.504-43.042-0.504-75.032 0-31.998 0.162-57.010 0.504-75.008 0.326-18.022 1.746-40.768 4.254-68.28 2.498-27.474 6.262-52.082 11.252-73.744 5.34-24.336 16.842-44.842 34.504-61.496 17.648-16.654 38.324-26.332 61.986-29.010 74-8.312 185.832-12.472 335.5-12.472 149.684 0 261.516 4.16 335.508 12.472 23.654 2.678 44.406 12.356 62.232 29.010 17.826 16.678 29.422 37.16 34.73 61.496 4.702 21.662 8.256 46.27 10.772 73.744 2.516 27.512 3.936 50.258 4.27 68.28 0.324 17.998 0.488 43.010 0.488 75.008z',
    facebook:
      'M582.52 960h-167.88v-448h-112v-154.396l112-0.052-0.166-90.948c-0.036-125.974 34.12-202.604 182.484-202.604h123.542v154.424h-77.19c-57.782 0-60.566 21.56-60.566 61.85l-0.218 77.278h138.854l-16.376 154.394-122.36 0.052-0.124 448.002z',
    medium:
      'M0 0v1024h1024v-1024h-1024zM850.708 242.614l-54.918 52.655c-3.858 2.965-6.321 7.581-6.321 12.772 0 0.933 0.080 1.847 0.232 2.736l-0.014-0.095v386.883c-0.139 0.794-0.219 1.708-0.219 2.641 0 5.191 2.462 9.807 6.283 12.744l0.038 0.028 53.637 52.655v11.558h-269.774v-11.558l55.559-53.936c5.461-5.456 5.461-7.068 5.461-15.413v-312.719l-154.477 392.344h-20.874l-179.851-392.344v262.947c-0.209 1.465-0.329 3.156-0.329 4.875 0 9.848 3.924 18.78 10.293 25.317l-0.008-0.008 72.258 87.649v11.558h-204.895v-11.558l72.263-87.649c6.070-6.284 9.81-14.852 9.81-24.293 0-2.081-0.182-4.12-0.53-6.101l0.031 0.21v-304.044c0.086-0.804 0.135-1.737 0.135-2.682 0-7.844-3.389-14.896-8.782-19.773l-0.023-0.021-64.234-77.378v-11.558h199.438l154.157 338.083 135.53-338.083h190.123v11.558z',
    graphql:
      'M576 849a85 85 0 0 0-125-2L253 733l1-3h517l2 5-197 114zM451 177l2 2-258 448-3-1V398a85 85 0 0 0 61-107l198-114zm321 114a85 85 0 0 0 61 107v228l-3 1-258-448 2-2 198 114zM254 689a85 85 0 0 0-24-42l259-447a86 86 0 0 0 47 0l259 448a85 85 0 0 0-24 41H254zm643-54c-7-4-15-7-23-9V398a86 86 0 1 0-82-142L595 142a85 85 0 1 0-165 0L233 256a85 85 0 1 0-82 142v228a85 85 0 1 0 82 142l197 114a85 85 0 1 0 164-2l196-114a86 86 0 1 0 107-131z',
    redux:
      'M359.016 943.608c-23.82 5.948-47.642 8.322-71.512 8.322-88.208 0-168.084-36.982-207.444-96.534-52.432-79.882-70.296-249.182 102.538-374.356 3.586 19.078 10.746 45.292 15.492 60.834-22.656 16.652-58.39 50.064-81.046 95.324-32.19 63.184-28.61 126.404 9.54 184.798 26.194 39.304 67.926 63.176 121.564 70.34 65.598 8.332 131.154-3.582 194.332-36.94 92.998-48.898 155.014-107.282 195.49-187.162-10.702-10.75-17.818-26.248-19.074-44.15-1.168-36.942 27.45-67.922 64.388-69.132h2.418c35.73 0 65.55 28.61 66.714 64.384 1.206 35.73-24.986 65.546-59.548 69.132-65.6 134.686-181.254 225.312-333.852 255.14zM902.646 540.622c-90.59-106.072-224.11-164.488-376.708-164.488h-19.072c-10.744-21.444-33.402-35.752-58.388-35.752h-2.418c-36.944 1.186-65.548 32.192-64.392 69.13 1.216 35.774 30.99 64.394 66.81 64.394h2.328c26.242-1.208 48.894-17.892 58.434-40.542h21.45c90.624 0 176.46 26.234 253.968 77.482 59.55 39.36 102.49 90.576 126.356 152.596 20.24 50.052 19.074 98.952-2.42 140.64-33.356 63.228-89.37 97.794-163.292 97.794-47.69 0-92.998-14.33-116.822-25.082-13.118 11.958-36.984 31.028-53.64 42.944 51.226 23.87 103.7 36.94 153.762 36.94 114.446 0 199.070-63.132 231.268-126.362 34.562-69.13 32.188-188.326-57.224-289.694zM297.046 708.706c1.21 35.828 30.984 64.394 66.764 64.394h2.368c36.992-1.168 65.556-32.15 64.39-69.132-1.162-35.732-30.984-64.394-66.758-64.394h-2.376c-2.418 0-5.958 0-8.332 1.208-48.89-81.090-69.132-169.27-62.014-264.648 4.792-71.528 28.616-133.516 70.346-184.766 34.568-44.106 101.326-65.57 146.598-66.758 126.402-2.396 180.044 154.968 183.576 218.144 15.542 3.584 41.734 11.936 59.644 17.892-14.328-193.118-133.526-293.266-247.97-293.266-107.28 0-206.236 77.484-245.552 191.932-54.848 152.596-19.070 299.212 47.644 414.826-5.912 8.374-9.494 21.498-8.328 34.568z',
    github:
      'M214.6 809.4A417.8 417.8 0 0191.4 512c0-112.3 43.8-218 123.2-297.4A417.8 417.8 0 01512 91.4c112.3 0 218 43.8 297.4 123.2A417.8 417.8 0 01932.6 512c0 112.3-43.8 218-123.2 297.4-49 49-108 84.3-172.2 104.3v-74.4c0-39.5-13.6-68.6-40.7-87.2a354 354 0 0091.9-19.6c15.8-5.6 30-12.2 42.6-19.9a177.8 177.8 0 0036.3-29.8 175 175 0 0029.1-41.7 228 228 0 0018.6-55.9c4.6-21.7 6.9-45.6 6.9-71.7 0-50.7-16.5-93.8-49.5-129.4 15-39.2 13.4-81.8-4.9-127.9l-12.2-1.4c-8.5-1-23.8 2.6-45.8 10.8-22 8.1-46.8 21.5-74.3 40.1a450.9 450.9 0 00-121-16.1 442 442 0 00-120.5 16.1 419.6 419.6 0 00-49.3-29.1c-15.5-7.7-27.9-13-37.2-15.7a127.6 127.6 0 00-41.4-5.6c-2.3.3-4 .6-4.9 1-18.3 46.3-20 89-4.9 127.8a183.5 183.5 0 00-49.5 129.4c0 26.1 2.3 50 6.9 71.7a228.3 228.3 0 0018.6 56 175 175 0 0029.1 41.6 177.9 177.9 0 0036.3 29.8 223.4 223.4 0 0042.6 19.9A353.2 353.2 0 00432 752c-26.8 18.3-40.2 47.3-40.2 87.2v75.9a418.4 418.4 0 01-177-105.8M512 0a512 512 0 100 1024A512 512 0 00512 0',
    bitbucket:
      'M362.3 395l53 276.5h195.4l34-198.4h283l-74.4 457a30 30 0 01-29.7 25.3H210.7a41 41 0 01-40-34.2l-127.6-775a30 30 0 0130-34.9l877.8.2a30 30 0 0130 34.8L940.5 395H362.3z',
    gitlab:
      'M186.9 75a18.7 18.7 0 0135.6 0l108.8 333.4h361.4L512 961.8 331.3 408.4H78.1zM78.1 408.5L512 961.8 36.8 618.2a37.1 37.1 0 01-13.6-41.6L78 408.4zm867.8 0l55 168.2c5 15.3-.5 32.1-13.7 41.6L512 961.8l434-553.4zM837.1 75l108.8 333.3H692.7L801.5 75a18.7 18.7 0 0135.6 0z',
    azuredevops:
      'M0,378.6 L95.8,252 L454.4,106.2 L454.4,1 L768.8,231 L126.6,355.8 L126.6,706.8 L0,670.2 L0,378.6 Z M1024,188.8 L1024,814 L778.6,1023 L381.8,892.6 L381.8,1023 L126.6,706.6 L769,783.2 L769,231 L1024,188.8 Z',
    discord:
      'M371 147c-14 0-126 3-245 91 0 0-126 227-126 507 0 0 74 126 268 132l58-71c-111-34-153-103-153-103l24 15 4 2 8 4a668 668 0 0 0 420 68 629 629 0 0 0 228-89s-44 71-159 103l58 71c194-7 268-133 268-132 0-280-126-507-126-507-126-94-246-91-246-91l-12 14a576 576 0 0 1 218 110 729 729 0 0 0-441-81l-15 1c-31 4-105 14-199 56-33 14-52 24-52 24s72-69 230-114l-9-10h-1zm-23 323c50 0 91 43 90 97 0 53-40 96-90 96-49 0-89-43-89-96 0-54 39-97 89-97zm321 0c49 0 89 43 89 97 0 53-39 96-89 96s-90-43-90-96c0-54 40-97 90-97z',
    contrast:
      'M368 713h79l266-266v-79L368 713zm192 0h153V560L560 713zm98-402h-79L311 579v79l347-347zm-192 0H311v155l155-155zm467 402V91H311v128h452c23 0 42 19 42 42v452h128zM713 933V805H261c-23 0-42-19-42-42V311H91v622h622zM982 0c23 0 42 19 42 42v721c0 23-19 42-42 42H805v177c0 23-19 42-42 42H42c-23 0-42-19-42-42V261c0-23 19-42 42-42h177V42c0-23 19-42 42-42h721z',
    unfold:
      'M512 645l8 1c21 4 37 22 37 44v181l52-52 6-6a45 45 0 0 1 58 69l-129 129-7 5a45 45 0 0 1-57-5L351 882l-5-6a45 45 0 0 1 5-57l7-6c17-12 41-10 57 6l52 52V690l1-8c4-21 22-37 44-37zM337 275a45 45 0 1 1 0 90H229l91 102h382l91-102H685a45 45 0 1 1 0-90h208c39 0 59 46 34 75L782 512l145 162c25 29 5 75-34 75H685a45 45 0 1 1 0-90h108l-91-102H320l-91 102h108a45 45 0 1 1 0 90H129c-38 0-59-46-33-75l144-162L96 350c-24-27-8-69 26-74l7-1h208zM537 8l7 6 129 129a45 45 0 0 1-58 68l-6-5-52-52v181c0 22-16 40-37 44h-8c-22 0-40-15-44-36l-1-8V153l-52 53a45 45 0 0 1-57 5l-7-5a45 45 0 0 1-5-57l5-6L480 14c16-16 40-18 57-6z',
    sharealt:
      'M130 85h332a45 45 0 0 1 8 89l-8 1H175v674h674V557a45 45 0 0 1 89-8l1 8v337c0 22-16 40-37 44l-8 1H130c-22 0-40-16-44-37l-1-8V130c0-22 16-40 37-44l8-1h332-332zm555 0h210l5 1-6-1a45 45 0 0 1 32 13l-5-4 3 3 2 1a46 46 0 0 1 12 24v2l1 5v209a45 45 0 0 1-89 8l-1-8V238L544 544a45 45 0 0 1-57 5l-7-5a45 45 0 0 1 0-64l306-305H685a45 45 0 0 1-8-89l8-1h209-209z',
    accessibility:
      'M512 0a512 512 0 110 1024A512 512 0 01512 0zm0 89.6a422.4 422.4 0 100 844.8 422.4 422.4 0 000-844.8zm262.2 250a40.9 40.9 0 01-27.5 49.3l-169.1 50.7c-8.2 2.7-15.1 11-13.7 20.5 1.3 27.4 1.5 76.5 7 98.4 12.9 59 82.4 214.4 91 233.6a56 56 0 014.9 19 40 40 0 01-40 40c-18 0-30.3-12.7-38.2-28.4A34096 34096 0 01510.9 664l-77.7 165.7-1.3 2.1a40 40 0 01-69.3-39.7c8.6-19 78-174.5 90.8-233.6 5.5-21.9 6-71 7.3-98.4a21 21 0 00-13.7-20.5l-169.1-50.7a40.7 40.7 0 01-27.5-50.7c6.9-20.5 30.2-30.1 50.9-24.6 0 0 154.6 49.3 209.6 49.3s213.8-50.7 213.8-50.7c20.6-5.5 44 6.8 49.5 27.4zm-264-171.2a76.7 76.7 0 110 153.4c-42.6 0-77-34.2-77-76.7 0-41 34.4-76.7 77-76.7z',
    accessibilityalt:
      'M512 0a512 512 0 110 1024A512 512 0 01512 0zm262.2 339.6c-5.5-20.6-28.9-32.9-49.5-27.4 0 0-158.8 50.7-213.8 50.7s-209.6-49.3-209.6-49.3c-20.7-5.5-44 4-51 24.6A40.7 40.7 0 00278 389l169 50.7a21 21 0 0113.8 20.5c-1.3 27.4-1.8 76.5-7.3 98.4-12.9 59.1-82.2 214.5-90.8 233.6a40 40 0 1070.6 37.5L511 664a34096 34096 0 0077.7 158.7c7.9 15.7 20.2 28.4 38.2 28.4a40 40 0 0040-40 56 56 0 00-4.8-19c-8.7-19.2-78.2-174.5-91.1-233.6-5.5-21.9-5.7-71-7-98.4-1.4-9.6 5.5-17.8 13.7-20.5l169.1-50.7a40.9 40.9 0 0027.5-49.3zm-264-171.2c-42.6 0-77 35.6-77 76.7a76.7 76.7 0 0077 76.7 76.7 76.7 0 100-153.4z',
    markup:
      'M1010.6 479.7L736.4 205.4a45.7 45.7 0 10-64.7 64.6l242 242L671.7 754a45.7 45.7 0 1064.7 64.6l274.1-274.2a45.6 45.6 0 000-64.6M0 511.9c0-11.7 4.5-23.4 13.4-32.3l274.1-274.2a45.7 45.7 0 1164.7 64.6L110.4 512l241.9 241.9a45.7 45.7 0 01-64.7 64.6L13.4 544.2C4.4 535.3 0 523.6 0 512',
    outline:
      'M180.1 714.3V844h129.6v94.8h-180c-24.2 0-44-19.5-44.4-43.7V714.3h94.8zM619.3 844v94.8H404.7v-94.8h214.6zm319.4-129.6v180c0 24.2-19.5 44-43.7 44.4H714.3v-94.8H844V714.3h94.8zm0-309.6v214.6h-94.8V404.7h94.8zm-758.6 0v214.6H85.3V404.7h94.8zm331.9 34a73.2 73.2 0 110 146.4 73.2 73.2 0 010-146.3zM894.2 85.4c24.3 0 44 19.5 44.5 43.7V309.7h-94.8V180H714.3V85.3h180zm-584.5 0v94.8H180v129.6H85.3v-180c0-24.2 19.5-44 43.7-44.4H309.7zm309.6 0v94.8H404.7V85.3h214.6z',
    verified:
      'M719 66l30 56c12 23 35 40 61 44l62 11c45 8 76 51 70 96l-9 63c-4 26 5 52 23 71l44 46c32 33 32 85 0 118l-44 46a85 85 0 00-23 71l9 63c6 45-25 88-70 96l-62 11c-26 4-49 21-61 44l-30 56a85 85 0 01-113 36l-57-27a85 85 0 00-74 0l-57 27c-42 21-92 4-113-36l-30-56a85 85 0 00-61-44l-62-11c-45-8-76-51-70-96l9-63c4-26-5-52-23-71l-44-46a85 85 0 010-118l44-46c18-19 27-45 23-71l-9-63c-6-45 25-88 70-96l62-11c26-4 49-21 61-44l30-56c21-40 71-57 113-36l57 27c23 12 51 12 74 0l57-27c42-21 92-4 113 36zm70 258a46 46 0 00-59 5L437 622 294 480l-6-5a46 46 0 00-59 69l175 175 6 5c18 13 43 11 59-5l326-325 4-6c13-18 12-43-4-59z',
    comment:
      'M936 85l6 1c22 3 39 21 39 44v709c0 8-2 15-5 21l-2 4c-9 12-23 20-38 20H427l-131 127c-9 9-21 13-34 13-25 0-46-20-46-45v-95H88c-25 0-45-20-45-45V130a45 45 0 0145-45zm-46 89H134v620h756V174zM768 544c25 0 46 20 46 44 0 25-21 45-46 45H256c-25 0-46-20-46-45 0-24 21-44 46-44zm0-208c25 0 46 20 46 44 0 25-21 45-46 45H256c-25 0-46-20-46-45 0-24 21-44 46-44z',
    commentadd:
      'M937 85l6 1c23 3 40 21 40 44v711c0 7-2 14-5 21l-3 4c-8 12-22 19-38 19H428l-131 128c-9 9-22 13-35 13-25 0-45-20-45-45v-96H89c-26 0-46-20-46-44V130a45 45 0 0146-45zm-45 90H134v621h758V175zm-379 97c22 0 40 18 40 40v134h132a40 40 0 010 81H553v132a40 40 0 11-80 0V527H341a40 40 0 110-81h132V312c0-22 18-40 40-40z',
    requestchange:
      'M937 85l6 1c23 3 40 21 40 44v711c0 7-2 14-5 21l-3 4c-8 12-22 19-38 19H428l-131 128c-9 9-22 13-35 13-25 0-45-20-45-45v-96H89c-26 0-46-20-46-44V130a45 45 0 0146-45zm-45 90H134v621h758V175zM585 310c18-18 47-18 65 0l143 144c18 17 18 46 0 64L650 661a46 46 0 01-65 0 46 46 0 010-65l65-64H266a46 46 0 110-92h384l-65-65a46 46 0 010-65z',
    comments:
      'M978.3 92.2a45 45 0 0145.7 44.6v535.6a45.2 45.2 0 01-45.7 44.6h-125v122c0 7.7-2 14.8-5.5 21.3l-2.3 3.7a46.1 46.1 0 01-38 19.6H298.8L168 1011a47 47 0 01-34.3 13.1c-25.2 0-45.7-20-45.7-44.6v-95.8H45.7c-25.2 0-45.7-20-45.7-44.5V303.4A45 45 0 0145.7 259h125v-122a45 45 0 0139.8-44.3c1.3-.1 257.2-.3 767.8-.4zM761.9 348H91.4v446.5H762V348zm-125 264c25.3 0 45.8 20 45.8 44.6A45.2 45.2 0 01637 701H216.4c-25.3 0-45.7-20-45.7-44.5a45.2 45.2 0 0145.7-44.6H637zm295.7-430.7H262V259h505.1l46.3.4a45 45 0 0139.8 44.2v324.3h79.3V181.3zM637 441.3c25.2 0 45.7 20 45.7 44.6a45.2 45.2 0 01-45.7 44.6H216.4c-25.3 0-45.7-20-45.7-44.6a45.2 45.2 0 0145.7-44.5H637z',
    ruler:
      'M83 110c-22 0-40 18-40 40v176a40 40 0 0080 0v-49h778v49a40 40 0 0080 0V150a40 40 0 10-80 0v49H123v-49c0-22-18-40-40-40zm40 458v266h778V568h-63v115a40 40 0 11-80 0V568h-63v46a40 40 0 11-80 0v-46h-63v115a40 40 0 11-80 0V568h-63v46a40 40 0 11-80 0v-46h-63v115a40 40 0 11-80 0V568h-63zm103-80h691c36 0 64 28 64 64v298c0 36-28 64-64 64H107c-36 0-64-28-64-64V552c0-36 28-64 64-64h119z',
  },
  Svg = styled.svg({ shapeRendering: 'inherit', transform: 'translate3d(0,0,0)' }, function (te) {
    var ee = te.inline;
    return ee ? { display: 'inline-block' } : { display: 'block' };
  });
Svg.displayName = 'Svg';
var Path = styled.path({ fill: 'currentColor' }),
  Icons = E$1(function (te) {
    var ee = te.icon,
      re = te.symbol,
      ae = __rest(te, ['icon', 'symbol']);
    return React__default.createElement(
      Svg,
      Object.assign({ viewBox: '0 0 1024 1024' }, ae),
      re
        ? React__default.createElement('use', { xlinkHref: '#icon--'.concat(re) })
        : React__default.createElement(Path, { d: icons[ee] }),
    );
  });
E$1(function (te) {
  var ee = te.icons,
    re = ee === void 0 ? Object.keys(icons) : ee;
  return React__default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      style: { position: 'absolute', width: 0, height: 0 },
      'data-chromatic': 'ignore',
    },
    re.map(function (ae) {
      return React__default.createElement(
        'symbol',
        { id: 'icon--'.concat(ae), key: ae },
        React__default.createElement(Path, { d: icons[ae] }),
      );
    }),
  );
});
var LEFT_BUTTON = 0,
  isPlainLeftClick = function (ee) {
    return ee.button === LEFT_BUTTON && !ee.altKey && !ee.ctrlKey && !ee.metaKey && !ee.shiftKey;
  },
  cancelled = function (ee, re) {
    isPlainLeftClick(ee) && (ee.preventDefault(), re(ee));
  },
  LinkInner = styled.span(
    function (te) {
      var ee = te.withArrow;
      return ee
        ? {
            '> svg:last-of-type': {
              height: '0.7em',
              width: '0.7em',
              marginRight: 0,
              marginLeft: '0.25em',
              bottom: 'auto',
              verticalAlign: 'inherit',
            },
          }
        : {};
    },
    function (te) {
      var ee = te.containsIcon;
      return ee
        ? {
            svg: {
              height: '1em',
              width: '1em',
              verticalAlign: 'middle',
              position: 'relative',
              bottom: 0,
              marginRight: 0,
            },
          }
        : {};
    },
  ),
  A$1 = styled.a(
    function (te) {
      var ee = te.theme;
      return {
        display: 'inline-block',
        transition: 'all 150ms ease-out',
        textDecoration: 'none',
        color: ee.color.secondary,
        '&:hover, &:focus': {
          cursor: 'pointer',
          color: curriedDarken$1(0.07, ee.color.secondary),
          'svg path': { fill: curriedDarken$1(0.07, ee.color.secondary) },
        },
        '&:active': {
          color: curriedDarken$1(0.1, ee.color.secondary),
          'svg path': { fill: curriedDarken$1(0.1, ee.color.secondary) },
        },
        svg: {
          display: 'inline-block',
          height: '1em',
          width: '1em',
          verticalAlign: 'text-top',
          position: 'relative',
          bottom: '-0.125em',
          marginRight: '0.4em',
          '& path': { fill: ee.color.secondary },
        },
      };
    },
    function (te) {
      var ee = te.theme,
        re = te.secondary,
        ae = te.tertiary,
        ne;
      return (
        re && (ne = [ee.color.mediumdark, ee.color.dark, ee.color.darker]),
        ae && (ne = [ee.color.dark, ee.color.darkest, ee.color.mediumdark]),
        ne
          ? {
              color: ne[0],
              'svg path': { fill: ne[0] },
              '&:hover': { color: ne[1], 'svg path': { fill: ne[1] } },
              '&:active': { color: ne[2], 'svg path': { fill: ne[2] } },
            }
          : {}
      );
    },
    function (te) {
      var ee = te.nochrome;
      return ee
        ? {
            color: 'inherit',
            '&:hover, &:active': { color: 'inherit', textDecoration: 'underline' },
          }
        : {};
    },
    function (te) {
      var ee = te.theme,
        re = te.inverse;
      return re
        ? {
            color: ee.color.lightest,
            'svg path': { fill: ee.color.lightest },
            '&:hover': { color: ee.color.lighter, 'svg path': { fill: ee.color.lighter } },
            '&:active': { color: ee.color.light, 'svg path': { fill: ee.color.light } },
          }
        : {};
    },
    function (te) {
      var ee = te.isButton;
      return ee
        ? { border: 0, borderRadius: 0, background: 'none', padding: 0, fontSize: 'inherit' }
        : {};
    },
  ),
  Link = function (ee) {
    var re = ee.cancel,
      ae = ee.children,
      ne = ee.onClick,
      oe = ee.withArrow,
      ie = ee.containsIcon,
      le = ee.className,
      ce = __rest(ee, ['cancel', 'children', 'onClick', 'withArrow', 'containsIcon', 'className']);
    return React__default.createElement(
      A$1,
      Object.assign({}, ce, {
        onClick:
          ne && re
            ? function (se) {
                return cancelled(se, ne);
              }
            : ne,
        className: le,
      }),
      React__default.createElement(
        LinkInner,
        { withArrow: oe, containsIcon: ie },
        ae,
        oe && React__default.createElement(Icons, { icon: 'arrowright' }),
      ),
    );
  };
Link.defaultProps = {
  cancel: !0,
  className: void 0,
  style: void 0,
  onClick: void 0,
  withArrow: !1,
  containsIcon: !1,
};
styled.div(function (te) {
  var ee = te.theme;
  return {
    fontSize: ''.concat(ee.typography.size.s2, 'px'),
    lineHeight: '1.6',
    h1: {
      fontSize: ''.concat(ee.typography.size.l1, 'px'),
      fontWeight: ee.typography.weight.black,
    },
    h2: {
      fontSize: ''.concat(ee.typography.size.m2, 'px'),
      borderBottom: '1px solid '.concat(ee.appBorderColor),
    },
    h3: { fontSize: ''.concat(ee.typography.size.m1, 'px') },
    h4: { fontSize: ''.concat(ee.typography.size.s3, 'px') },
    h5: { fontSize: ''.concat(ee.typography.size.s2, 'px') },
    h6: { fontSize: ''.concat(ee.typography.size.s2, 'px'), color: ee.color.dark },
    'pre:not(.prismjs)': {
      background: 'transparent',
      border: 'none',
      borderRadius: 0,
      padding: 0,
      margin: 0,
    },
    'pre pre, pre.prismjs': {
      padding: 15,
      margin: 0,
      whiteSpace: 'pre-wrap',
      color: 'inherit',
      fontSize: '13px',
      lineHeight: '19px',
    },
    'pre pre code, pre.prismjs code': { color: 'inherit', fontSize: 'inherit' },
    'pre code': {
      margin: 0,
      padding: 0,
      whiteSpace: 'pre',
      border: 'none',
      background: 'transparent',
    },
    'pre code, pre tt': { backgroundColor: 'transparent', border: 'none' },
    'body > *:first-of-type': { marginTop: '0 !important' },
    'body > *:last-child': { marginBottom: '0 !important' },
    a: { color: ee.color.secondary, textDecoration: 'none' },
    'a.absent': { color: '#cc0000' },
    'a.anchor': {
      display: 'block',
      paddingLeft: 30,
      marginLeft: -30,
      cursor: 'pointer',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: '20px 0 10px',
      padding: 0,
      cursor: 'text',
      position: 'relative',
      '&:first-of-type': { marginTop: 0, paddingTop: 0 },
      '&:hover a.anchor': { textDecoration: 'none' },
      '& tt, & code': { fontSize: 'inherit' },
    },
    'h1:first-of-type + h2': { marginTop: 0, paddingTop: 0 },
    'p, blockquote, ul, ol, dl, li, table, pre': { margin: '15px 0' },
    hr: {
      border: '0 none',
      borderTop: '1px solid '.concat(ee.appBorderColor),
      height: 4,
      padding: 0,
    },
    'body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type':
      { marginTop: 0, paddingTop: 0 },
    'body > h1:first-of-type + h2': { marginTop: 0, paddingTop: 0 },
    'a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6':
      { marginTop: 0, paddingTop: 0 },
    'h1 p, h2 p, h3 p, h4 p, h5 p, h6 p': { marginTop: 0 },
    'li p.first': { display: 'inline-block' },
    'ul, ol': {
      paddingLeft: 30,
      '& :first-of-type': { marginTop: 0 },
      '& :last-child': { marginBottom: 0 },
    },
    dl: { padding: 0 },
    'dl dt': {
      fontSize: '14px',
      fontWeight: 'bold',
      fontStyle: 'italic',
      margin: '0 0 15px',
      padding: '0 15px',
      '&:first-of-type': { padding: 0 },
      '& > :first-of-type': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 },
    },
    blockquote: {
      borderLeft: '4px solid '.concat(ee.color.medium),
      padding: '0 15px',
      color: ee.color.dark,
      '& > :first-of-type': { marginTop: 0 },
      '& > :last-child': { marginBottom: 0 },
    },
    table: {
      padding: 0,
      borderCollapse: 'collapse',
      '& tr': {
        borderTop: '1px solid '.concat(ee.appBorderColor),
        backgroundColor: 'white',
        margin: 0,
        padding: 0,
        '& th': {
          fontWeight: 'bold',
          border: '1px solid '.concat(ee.appBorderColor),
          textAlign: 'left',
          margin: 0,
          padding: '6px 13px',
        },
        '& td': {
          border: '1px solid '.concat(ee.appBorderColor),
          textAlign: 'left',
          margin: 0,
          padding: '6px 13px',
        },
        '&:nth-of-type(2n)': { backgroundColor: ee.color.lighter },
        '& th :first-of-type, & td :first-of-type': { marginTop: 0 },
        '& th :last-child, & td :last-child': { marginBottom: 0 },
      },
    },
    img: { maxWidth: '100%' },
    'span.frame': {
      display: 'block',
      overflow: 'hidden',
      '& > span': {
        border: '1px solid '.concat(ee.color.medium),
        display: 'block',
        float: 'left',
        overflow: 'hidden',
        margin: '13px 0 0',
        padding: 7,
        width: 'auto',
      },
      '& span img': { display: 'block', float: 'left' },
      '& span span': {
        clear: 'both',
        color: ee.color.darkest,
        display: 'block',
        padding: '5px 0 0',
      },
    },
    'span.align-center': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'center',
      },
      '& span img': { margin: '0 auto', textAlign: 'center' },
    },
    'span.align-right': {
      display: 'block',
      overflow: 'hidden',
      clear: 'both',
      '& > span': { display: 'block', overflow: 'hidden', margin: '13px 0 0', textAlign: 'right' },
      '& span img': { margin: 0, textAlign: 'right' },
    },
    'span.float-left': {
      display: 'block',
      marginRight: 13,
      overflow: 'hidden',
      float: 'left',
      '& span': { margin: '13px 0 0' },
    },
    'span.float-right': {
      display: 'block',
      marginLeft: 13,
      overflow: 'hidden',
      float: 'right',
      '& > span': {
        display: 'block',
        overflow: 'hidden',
        margin: '13px auto 0',
        textAlign: 'right',
      },
    },
    'code, tt': {
      margin: '0 2px',
      padding: '0 5px',
      whiteSpace: 'nowrap',
      border: '1px solid '.concat(ee.color.mediumlight),
      backgroundColor: ee.color.lighter,
      borderRadius: 3,
      color: ee.base === 'dark' && ee.color.darkest,
    },
  };
});
var Container$1 = styled.div(function (te) {
    var ee = te.theme;
    return {
      position: 'absolute',
      bottom: 0,
      right: 0,
      maxWidth: '100%',
      display: 'flex',
      background: ee.background.content,
      zIndex: 1,
    };
  }),
  ActionButton = styled.button(
    function (te) {
      var ee = te.theme;
      return {
        margin: 0,
        border: '0 none',
        padding: '4px 10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        color: ee.color.defaultText,
        background: ee.background.content,
        fontSize: 12,
        lineHeight: '16px',
        fontFamily: ee.typography.fonts.base,
        fontWeight: ee.typography.weight.bold,
        borderTop: '1px solid '.concat(ee.appBorderColor),
        borderLeft: '1px solid '.concat(ee.appBorderColor),
        marginLeft: -1,
        borderRadius: '4px 0 0 0',
        '&:not(:last-child)': { borderRight: '1px solid '.concat(ee.appBorderColor) },
        '& + *': { borderLeft: '1px solid '.concat(ee.appBorderColor), borderRadius: 0 },
        '&:focus': {
          boxShadow: ''.concat(ee.color.secondary, ' 0 -3px 0 0 inset'),
          outline: '0 none',
        },
      };
    },
    function (te) {
      var ee = te.disabled;
      return ee && { cursor: 'not-allowed', opacity: 0.5 };
    },
  );
ActionButton.displayName = 'ActionButton';
var ActionBar = function (ee) {
  var re = ee.actionItems,
    ae = __rest(ee, ['actionItems']);
  return React__default.createElement(
    Container$1,
    Object.assign({}, ae),
    re.map(function (ne, oe) {
      var ie = ne.title,
        le = ne.className,
        ce = ne.onClick,
        se = ne.disabled;
      return React__default.createElement(
        ActionButton,
        { key: oe, className: le, onClick: ce, disabled: se },
        ie,
      );
    }),
  );
};
styled.div(
  function (te) {
    var ee = te.theme,
      re = te.col,
      ae = te.row,
      ne = ae === void 0 ? 1 : ae;
    return re
      ? _defineProperty2(
          {
            display: 'inline-block',
            verticalAlign: 'inherit',
            '& > *': { marginLeft: re * ee.layoutMargin, verticalAlign: 'inherit' },
          },
          '& > *:first-child',
          { marginLeft: 0 },
        )
      : _defineProperty2({ '& > *': { marginTop: ne * ee.layoutMargin } }, '& > *:first-child', {
          marginTop: 0,
        });
  },
  function (te) {
    var ee = te.theme,
      re = te.outer,
      ae = te.col,
      ne = te.row;
    switch (!0) {
      case !!(re && ae):
        return { marginLeft: re * ee.layoutMargin, marginRight: re * ee.layoutMargin };
      case !!(re && ne):
        return { marginTop: re * ee.layoutMargin, marginBottom: re * ee.layoutMargin };
      default:
        return {};
    }
  },
);
var Title$3 = styled.div(function (te) {
    var ee = te.theme;
    return { fontWeight: ee.typography.weight.bold };
  }),
  Desc$1 = styled.div(),
  Message$1 = styled.div(function (te) {
    var ee = te.theme;
    return {
      padding: 30,
      textAlign: 'center',
      color: ee.color.defaultText,
      fontSize: ee.typography.size.s2 - 1,
    };
  }),
  Placeholder = function (ee) {
    var re = ee.children,
      ae = __rest(ee, ['children']),
      ne = k$2.toArray(re),
      oe = _slicedToArray$4(ne, 2),
      ie = oe[0],
      le = oe[1];
    return React__default.createElement(
      Message$1,
      Object.assign({}, ae),
      React__default.createElement(Title$3, null, ie),
      le && React__default.createElement(Desc$1, null, le),
    );
  },
  GlobalScrollAreaStyles = U$1(function () {
    return __vitePreload(
      () => import('./GlobalScrollAreaStyles-8793ce4a.43bf8515.js'),
      [
        'assets/GlobalScrollAreaStyles-8793ce4a.43bf8515.js',
        'assets/iframe.1f3a3e8b.js',
        'assets/iframe.1f0201a9.css',
      ],
    );
  }),
  OverlayScrollbars = U$1(function () {
    return __vitePreload(
      () => import('./OverlayScrollbars-1355f44c.4f4c1cec.js'),
      [
        'assets/OverlayScrollbars-1355f44c.4f4c1cec.js',
        'assets/iframe.1f3a3e8b.js',
        'assets/iframe.1f0201a9.css',
      ],
    );
  }),
  Scroller = function (ee) {
    var re = __rest(ee, ['horizontal', 'vertical']);
    return React__default.createElement(
      T$1,
      { fallback: React__default.createElement('div', Object.assign({}, re)) },
      React__default.createElement(GlobalScrollAreaStyles, null),
      React__default.createElement(
        OverlayScrollbars,
        Object.assign({ options: { scrollbars: { autoHide: 'leave' } } }, re),
      ),
    );
  },
  ScrollArea = styled(Scroller)(
    function (te) {
      var ee = te.vertical;
      return ee ? { overflowY: 'auto', height: '100%' } : { overflowY: 'hidden' };
    },
    function (te) {
      var ee = te.horizontal;
      return ee ? { overflowX: 'auto', width: '100%' } : { overflowX: 'hidden' };
    },
  );
ScrollArea.defaultProps = { horizontal: !1, vertical: !1 };
var commonjsGlobal =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function getDefaultExportFromCjs(te) {
  return te && te.__esModule && Object.prototype.hasOwnProperty.call(te, 'default')
    ? te.default
    : te;
}
var win;
typeof window < 'u'
  ? (win = window)
  : typeof commonjsGlobal < 'u'
  ? (win = commonjsGlobal)
  : typeof self < 'u'
  ? (win = self)
  : (win = {});
var window_1 = win,
  globalWindow$2 = window_1.window;
function browserSupportsCssZoom() {
  try {
    return globalWindow$2.document.implementation.createHTMLDocument('').body.style.zoom !== void 0;
  } catch {
    return !1;
  }
}
var ZoomElementWrapper = styled.div(function (te) {
  var ee = te.scale,
    re = ee === void 0 ? 1 : ee,
    ae = te.height;
  return browserSupportsCssZoom()
    ? { '> *': { zoom: 1 / re } }
    : { height: ae + 50, transformOrigin: 'top left', transform: 'scale('.concat(1 / re, ')') };
});
function ZoomElement(te) {
  var ee = te.scale,
    re = te.children,
    ae = _(null),
    ne = p$3(0),
    oe = _slicedToArray$4(ne, 2),
    ie = oe[0],
    le = oe[1];
  return (
    h$3(
      function () {
        ae.current && le(ae.current.getBoundingClientRect().height);
      },
      [ee, ae.current],
    ),
    React__default.createElement(
      ZoomElementWrapper,
      { scale: ee, height: ie },
      React__default.createElement('div', { ref: ae, className: 'innerZoomElementWrapper' }, re),
    )
  );
}
var ZoomIFrame = (function (te) {
    _inherits(re, te);
    var ee = _createSuper(re);
    function re() {
      var ae;
      return _classCallCheck(this, re), (ae = ee.apply(this, arguments)), (ae.iframe = null), ae;
    }
    return (
      _createClass(re, [
        {
          key: 'componentDidMount',
          value: function () {
            var ne = this.props.iFrameRef;
            this.iframe = ne.current;
          },
        },
        {
          key: 'shouldComponentUpdate',
          value: function (ne) {
            var oe = this.props,
              ie = oe.scale,
              le = oe.active;
            return (
              ie !== ne.scale && this.setIframeInnerZoom(ne.scale),
              le !== ne.active &&
                this.iframe.setAttribute('data-is-storybook', ne.active ? 'true' : 'false'),
              ne.children.props.src !== this.props.children.props.src
            );
          },
        },
        {
          key: 'setIframeInnerZoom',
          value: function (ne) {
            try {
              browserSupportsCssZoom()
                ? Object.assign(this.iframe.contentDocument.body.style, { zoom: 1 / ne })
                : Object.assign(this.iframe.contentDocument.body.style, {
                    width: ''.concat(ne * 100, '%'),
                    height: ''.concat(ne * 100, '%'),
                    transform: 'scale('.concat(1 / ne, ')'),
                    transformOrigin: 'top left',
                  });
            } catch {
              this.setIframeZoom(ne);
            }
          },
        },
        {
          key: 'setIframeZoom',
          value: function (ne) {
            Object.assign(this.iframe.style, {
              width: ''.concat(ne * 100, '%'),
              height: ''.concat(ne * 100, '%'),
              transform: 'scale('.concat(1 / ne, ')'),
              transformOrigin: 'top left',
            });
          },
        },
        {
          key: 'render',
          value: function () {
            var ne = this.props.children;
            return ne;
          },
        },
      ]),
      re
    );
  })(d$2),
  Zoom$1 = { Element: ZoomElement, IFrame: ZoomIFrame },
  ButtonWrapper = styled.button(
    function (te) {
      var ee = te.small,
        re = te.theme;
      return {
        border: 0,
        borderRadius: '3em',
        cursor: 'pointer',
        display: 'inline-block',
        overflow: 'hidden',
        padding: ee ? '8px 16px' : '13px 20px',
        position: 'relative',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'all 150ms ease-out',
        transform: 'translate3d(0,0,0)',
        verticalAlign: 'top',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        opacity: 1,
        margin: 0,
        background: 'transparent',
        fontSize: ''.concat(ee ? re.typography.size.s1 : re.typography.size.s2 - 1, 'px'),
        fontWeight: re.typography.weight.bold,
        lineHeight: '1',
        svg: {
          display: 'inline-block',
          height: ee ? 14 : 16,
          width: ee ? 14 : 16,
          verticalAlign: 'top',
          marginRight: ee ? 4 : 6,
          marginTop: ee ? -1 : -2,
          marginBottom: ee ? -1 : -2,
          pointerEvents: 'none',
          path: { fill: 'currentColor' },
        },
      };
    },
    function (te) {
      var ee = te.disabled;
      return ee
        ? { cursor: 'not-allowed !important', opacity: 0.5, '&:hover': { transform: 'none' } }
        : {};
    },
    function (te) {
      var ee = te.containsIcon,
        re = te.small;
      return ee
        ? Object.assign(
            { svg: { display: 'block', margin: 0 } },
            re ? { padding: 9 } : { padding: 12 },
          )
        : {};
    },
    function (te) {
      var ee = te.theme,
        re = te.primary,
        ae = te.secondary,
        ne = te.gray,
        oe;
      return (
        ne
          ? (oe = ee.color.medium)
          : ae
          ? (oe = ee.color.secondary)
          : re && (oe = ee.color.primary),
        oe
          ? {
              background: oe,
              color: ne ? ee.color.darkest : ee.color.lightest,
              '&:hover': { background: curriedDarken$1(0.05, oe) },
              '&:active': { boxShadow: 'rgba(0, 0, 0, 0.1) 0 0 0 3em inset' },
              '&:focus': { boxShadow: ''.concat(rgba(oe, 1), ' 0 1px 9px 2px'), outline: 'none' },
              '&:focus:hover': { boxShadow: ''.concat(rgba(oe, 0.2), ' 0 8px 18px 0px') },
            }
          : {}
      );
    },
    function (te) {
      var ee = te.theme,
        re = te.tertiary,
        ae = te.inForm,
        ne = te.small;
      return re
        ? Object.assign(
            Object.assign(
              {
                background:
                  ee.base === 'light'
                    ? curriedDarken$1(0.02, ee.input.background)
                    : curriedLighten$1(0.02, ee.input.background),
                color: ee.input.color,
                boxShadow: ''.concat(ee.input.border, ' 0 0 0 1px inset'),
                borderRadius: ee.input.borderRadius,
              },
              ae && ne ? { padding: '10px 16px' } : {},
            ),
            {
              '&:hover': Object.assign(
                {
                  background:
                    ee.base === 'light'
                      ? curriedDarken$1(0.05, ee.input.background)
                      : curriedLighten$1(0.05, ee.input.background),
                },
                ae
                  ? {}
                  : { boxShadow: 'rgba(0,0,0,.2) 0 2px 6px 0, rgba(0,0,0,.1) 0 0 0 1px inset' },
              ),
              '&:active': { background: ee.input.background },
              '&:focus': {
                boxShadow: ''.concat(rgba(ee.color.secondary, 1), ' 0 0 0 1px inset'),
                outline: 'none',
              },
            },
          )
        : {};
    },
    function (te) {
      var ee = te.theme,
        re = te.outline;
      return re
        ? {
            boxShadow: ''.concat(
              curriedTransparentize$1(0.8, ee.color.defaultText),
              ' 0 0 0 1px inset',
            ),
            color: curriedTransparentize$1(0.3, ee.color.defaultText),
            background: 'transparent',
            '&:hover, &:focus': {
              boxShadow: ''.concat(
                curriedTransparentize$1(0.5, ee.color.defaultText),
                ' 0 0 0 1px inset',
              ),
              outline: 'none',
            },
            '&:active': {
              boxShadow: ''.concat(
                curriedTransparentize$1(0.5, ee.color.defaultText),
                ' 0 0 0 2px inset',
              ),
              color: curriedTransparentize$1(0, ee.color.defaultText),
            },
          }
        : {};
    },
    function (te) {
      var ee = te.theme,
        re = te.outline,
        ae = te.primary,
        ne = ee.color.primary;
      return re && ae
        ? {
            boxShadow: ''.concat(ne, ' 0 0 0 1px inset'),
            color: ne,
            'svg path': { fill: ne },
            '&:hover': { boxShadow: ''.concat(ne, ' 0 0 0 1px inset'), background: 'transparent' },
            '&:active': {
              background: ne,
              boxShadow: ''.concat(ne, ' 0 0 0 1px inset'),
              color: ee.color.tertiary,
            },
            '&:focus': {
              boxShadow: ''
                .concat(ne, ' 0 0 0 1px inset, ')
                .concat(rgba(ne, 0.4), ' 0 1px 9px 2px'),
              outline: 'none',
            },
            '&:focus:hover': {
              boxShadow: ''
                .concat(ne, ' 0 0 0 1px inset, ')
                .concat(rgba(ne, 0.2), ' 0 8px 18px 0px'),
            },
          }
        : {};
    },
    function (te) {
      var ee = te.theme,
        re = te.outline,
        ae = te.primary,
        ne = te.secondary,
        oe;
      return (
        ne ? (oe = ee.color.secondary) : ae && (oe = ee.color.primary),
        re && oe
          ? {
              boxShadow: ''.concat(oe, ' 0 0 0 1px inset'),
              color: oe,
              'svg path': { fill: oe },
              '&:hover': {
                boxShadow: ''.concat(oe, ' 0 0 0 1px inset'),
                background: 'transparent',
              },
              '&:active': {
                background: oe,
                boxShadow: ''.concat(oe, ' 0 0 0 1px inset'),
                color: ee.color.tertiary,
              },
              '&:focus': {
                boxShadow: ''
                  .concat(oe, ' 0 0 0 1px inset, ')
                  .concat(rgba(oe, 0.4), ' 0 1px 9px 2px'),
                outline: 'none',
              },
              '&:focus:hover': {
                boxShadow: ''
                  .concat(oe, ' 0 0 0 1px inset, ')
                  .concat(rgba(oe, 0.2), ' 0 8px 18px 0px'),
              },
            }
          : {}
      );
    },
  ),
  ButtonLink = ButtonWrapper.withComponent('a'),
  Button$2 = Object.assign(
    R$1(function (te, ee) {
      var re = te.isLink,
        ae = te.children,
        ne = __rest(te, ['isLink', 'children']);
      return re
        ? React__default.createElement(ButtonLink, Object.assign({}, ne, { ref: ee }), ae)
        : React__default.createElement(ButtonWrapper, Object.assign({}, ne, { ref: ee }), ae);
    }),
    { defaultProps: { isLink: !1 } },
  ),
  Wrapper$7 = styled.label(function (te) {
    var ee = te.theme;
    return {
      display: 'flex',
      borderBottom: '1px solid '.concat(ee.appBorderColor),
      margin: '0 15px',
      padding: '8px 0',
      '&:last-child': { marginBottom: '3rem' },
    };
  }),
  Label$4 = styled.span(function (te) {
    var ee = te.theme;
    return {
      minWidth: 100,
      fontWeight: ee.typography.weight.bold,
      marginRight: 15,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      lineHeight: '16px',
    };
  }),
  Field = function (ee) {
    var re = ee.label,
      ae = ee.children,
      ne = __rest(ee, ['label', 'children']);
    return React__default.createElement(
      Wrapper$7,
      Object.assign({}, ne),
      re
        ? React__default.createElement(
            Label$4,
            null,
            React__default.createElement('span', null, re),
          )
        : null,
      ae,
    );
  };
Field.defaultProps = { label: void 0 };
function _extends() {
  return (
    (_extends =
      Object.assign ||
      function (te) {
        for (var ee = 1; ee < arguments.length; ee++) {
          var re = arguments[ee];
          for (var ae in re) Object.prototype.hasOwnProperty.call(re, ae) && (te[ae] = re[ae]);
        }
        return te;
      }),
    _extends.apply(this, arguments)
  );
}
function _objectWithoutPropertiesLoose$3(te, ee) {
  if (te == null) return {};
  var re = {},
    ae = Object.keys(te),
    ne,
    oe;
  for (oe = 0; oe < ae.length; oe++) (ne = ae[oe]), !(ee.indexOf(ne) >= 0) && (re[ne] = te[ne]);
  return re;
}
var index$1 = typeof document < 'u' ? s$1 : h$3,
  useLatest = function (ee) {
    var re = _(ee);
    return (
      index$1(function () {
        re.current = ee;
      }),
      re
    );
  },
  updateRef = function (ee, re) {
    if (typeof ee == 'function') {
      ee(re);
      return;
    }
    ee.current = re;
  },
  useComposedRef = function (ee, re) {
    var ae = _();
    return T$2(
      function (ne) {
        (ee.current = ne),
          ae.current && updateRef(ae.current, null),
          (ae.current = re),
          re && updateRef(re, ne);
      },
      [re],
    );
  },
  HIDDEN_TEXTAREA_STYLE = {
    'min-height': '0',
    'max-height': 'none',
    height: '0',
    visibility: 'hidden',
    overflow: 'hidden',
    position: 'absolute',
    'z-index': '-1000',
    top: '0',
    right: '0',
  },
  forceHiddenStyles = function (ee) {
    Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (re) {
      ee.style.setProperty(re, HIDDEN_TEXTAREA_STYLE[re], 'important');
    });
  },
  hiddenTextarea = null,
  getHeight = function (ee, re) {
    var ae = ee.scrollHeight;
    return re.sizingStyle.boxSizing === 'border-box' ? ae + re.borderSize : ae - re.paddingSize;
  };
function calculateNodeHeight(te, ee, re, ae) {
  re === void 0 && (re = 1),
    ae === void 0 && (ae = 1 / 0),
    hiddenTextarea ||
      ((hiddenTextarea = document.createElement('textarea')),
      hiddenTextarea.setAttribute('tabindex', '-1'),
      hiddenTextarea.setAttribute('aria-hidden', 'true'),
      forceHiddenStyles(hiddenTextarea)),
    hiddenTextarea.parentNode === null && document.body.appendChild(hiddenTextarea);
  var ne = te.paddingSize,
    oe = te.borderSize,
    ie = te.sizingStyle,
    le = ie.boxSizing;
  Object.keys(ie).forEach(function (fe) {
    var ge = fe;
    hiddenTextarea.style[ge] = ie[ge];
  }),
    forceHiddenStyles(hiddenTextarea),
    (hiddenTextarea.value = ee);
  var ce = getHeight(hiddenTextarea, te);
  hiddenTextarea.value = 'x';
  var se = hiddenTextarea.scrollHeight - ne,
    ue = se * re;
  le === 'border-box' && (ue = ue + ne + oe), (ce = Math.max(ue, ce));
  var pe = se * ae;
  return le === 'border-box' && (pe = pe + ne + oe), (ce = Math.min(pe, ce)), [ce, se];
}
var noop$2 = function () {},
  pick = function (ee, re) {
    return ee.reduce(function (ae, ne) {
      return (ae[ne] = re[ne]), ae;
    }, {});
  },
  SIZING_STYLE = [
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'boxSizing',
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontWeight',
    'letterSpacing',
    'lineHeight',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'tabSize',
    'textIndent',
    'textRendering',
    'textTransform',
    'width',
    'wordBreak',
  ],
  isIE = typeof document < 'u' ? !!document.documentElement.currentStyle : !1,
  getSizingData = function (ee) {
    var re = window.getComputedStyle(ee);
    if (re === null) return null;
    var ae = pick(SIZING_STYLE, re),
      ne = ae.boxSizing;
    if (ne === '') return null;
    isIE &&
      ne === 'border-box' &&
      (ae.width =
        parseFloat(ae.width) +
        parseFloat(ae.borderRightWidth) +
        parseFloat(ae.borderLeftWidth) +
        parseFloat(ae.paddingRight) +
        parseFloat(ae.paddingLeft) +
        'px');
    var oe = parseFloat(ae.paddingBottom) + parseFloat(ae.paddingTop),
      ie = parseFloat(ae.borderBottomWidth) + parseFloat(ae.borderTopWidth);
    return { sizingStyle: ae, paddingSize: oe, borderSize: ie };
  },
  useWindowResizeListener = function (ee) {
    var re = useLatest(ee);
    s$1(function () {
      var ae = function (oe) {
        re.current(oe);
      };
      return (
        window.addEventListener('resize', ae),
        function () {
          window.removeEventListener('resize', ae);
        }
      );
    }, []);
  },
  TextareaAutosize = function (ee, re) {
    var ae = ee.cacheMeasurements,
      ne = ee.maxRows,
      oe = ee.minRows,
      ie = ee.onChange,
      le = ie === void 0 ? noop$2 : ie,
      ce = ee.onHeightChange,
      se = ce === void 0 ? noop$2 : ce,
      ue = _objectWithoutPropertiesLoose$3(ee, [
        'cacheMeasurements',
        'maxRows',
        'minRows',
        'onChange',
        'onHeightChange',
      ]),
      pe = ue.value !== void 0,
      fe = _(null),
      ge = useComposedRef(fe, re),
      de = _(0),
      me = _(),
      he = function () {
        var be = fe.current,
          _e = ae && me.current ? me.current : getSizingData(be);
        if (!!_e) {
          me.current = _e;
          var Te = calculateNodeHeight(_e, be.value || be.placeholder || 'x', oe, ne),
            Se = Te[0],
            $e = Te[1];
          de.current !== Se &&
            ((de.current = Se),
            be.style.setProperty('height', Se + 'px', 'important'),
            se(Se, { rowHeight: $e }));
        }
      },
      ve = function (be) {
        pe || he(), le(be);
      };
    return (
      typeof document < 'u' && (s$1(he), useWindowResizeListener(he)),
      h$2('textarea', _extends({}, ue, { onChange: ve, ref: ge }))
    );
  },
  index$2 = R$1(TextareaAutosize),
  TextareaAutoResize = index$2,
  styleResets$1 = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative',
  },
  styles = function (ee) {
    var re = ee.theme;
    return Object.assign(Object.assign({}, styleResets$1), {
      transition: 'box-shadow 200ms ease-out, opacity 200ms ease-out',
      color: re.input.color || 'inherit',
      background: re.input.background,
      boxShadow: ''.concat(re.input.border, ' 0 0 0 1px inset'),
      borderRadius: re.input.borderRadius,
      fontSize: re.typography.size.s2 - 1,
      lineHeight: '20px',
      padding: '6px 10px',
      '&:focus': { boxShadow: ''.concat(re.color.secondary, ' 0 0 0 1px inset'), outline: 'none' },
      '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
      '&:-webkit-autofill': { WebkitBoxShadow: '0 0 0 3em '.concat(re.color.lightest, ' inset') },
      '::placeholder': { color: re.color.mediumdark },
    });
  },
  sizes = function (ee) {
    var re = ee.size;
    switch (re) {
      case '100%':
        return { width: '100%' };
      case 'flex':
        return { flex: 1 };
      case 'auto':
      default:
        return { display: 'inline' };
    }
  },
  alignment = function (ee) {
    var re = ee.align;
    switch (re) {
      case 'end':
        return { textAlign: 'right' };
      case 'center':
        return { textAlign: 'center' };
      case 'start':
      default:
        return { textAlign: 'left' };
    }
  },
  validation = function (ee) {
    var re = ee.valid,
      ae = ee.theme;
    switch (re) {
      case 'valid':
        return { boxShadow: ''.concat(ae.color.positive, ' 0 0 0 1px inset !important') };
      case 'error':
        return { boxShadow: ''.concat(ae.color.negative, ' 0 0 0 1px inset !important') };
      case 'warn':
        return { boxShadow: ''.concat(ae.color.warning, ' 0 0 0 1px inset') };
      case void 0:
      case null:
      default:
        return {};
    }
  },
  Input$1 = Object.assign(
    styled(
      R$1(function (te, ee) {
        var re = __rest(te, ['size', 'valid', 'align']);
        return React__default.createElement('input', Object.assign({}, re, { ref: ee }));
      }),
    )(styles, sizes, alignment, validation, { minHeight: 32 }),
    { displayName: 'Input' },
  ),
  Select = Object.assign(
    styled(
      R$1(function (te, ee) {
        var re = __rest(te, ['size', 'valid', 'align']);
        return React__default.createElement('select', Object.assign({}, re, { ref: ee }));
      }),
    )(styles, sizes, validation, {
      height: 32,
      userSelect: 'none',
      paddingRight: 20,
      appearance: 'menulist',
    }),
    { displayName: 'Select' },
  ),
  Textarea = Object.assign(
    styled(
      R$1(function (te, ee) {
        var re = __rest(te, ['size', 'valid', 'align']);
        return React__default.createElement(TextareaAutoResize, Object.assign({}, re, { ref: ee }));
      }),
    )(styles, sizes, alignment, validation, function (te) {
      var ee = te.height,
        re = ee === void 0 ? 400 : ee;
      return { overflow: 'visible', maxHeight: re };
    }),
    { displayName: 'Textarea' },
  ),
  ButtonStyled = styled(
    R$1(function (te, ee) {
      var re = __rest(te, ['size', 'valid', 'align']);
      return React__default.createElement(Button$2, Object.assign({}, re, { ref: ee }));
    }),
  )(sizes, validation, {
    userSelect: 'none',
    overflow: 'visible',
    zIndex: 2,
    '&:hover': { transform: 'none' },
  }),
  Button$1 = Object.assign(
    R$1(function (te, ee) {
      return React__default.createElement(
        ButtonStyled,
        Object.assign({}, te, { tertiary: !0, small: !0, inForm: !0 }, { ref: ee }),
      );
    }),
    { displayName: 'Button' },
  ),
  Form = Object.assign(styled.form({ boxSizing: 'border-box', width: '100%' }), {
    Field,
    Input: Input$1,
    Select,
    Textarea,
    Button: Button$1,
  }),
  LazyWithTooltip = U$1(function () {
    return __vitePreload(
      () => import('./WithTooltip-167e9982.8b92f7f4.js'),
      [
        'assets/WithTooltip-167e9982.8b92f7f4.js',
        'assets/iframe.1f3a3e8b.js',
        'assets/iframe.1f0201a9.css',
        'assets/es.regexp.flags.50a65004.js',
      ],
    ).then(function (te) {
      return { default: te.WithTooltip };
    });
  }),
  WithTooltip = function (ee) {
    return React__default.createElement(
      T$1,
      { fallback: React__default.createElement('div', null) },
      React__default.createElement(LazyWithTooltip, Object.assign({}, ee)),
    );
  },
  LazyWithTooltipPure = U$1(function () {
    return __vitePreload(
      () => import('./WithTooltip-167e9982.8b92f7f4.js'),
      [
        'assets/WithTooltip-167e9982.8b92f7f4.js',
        'assets/iframe.1f3a3e8b.js',
        'assets/iframe.1f0201a9.css',
        'assets/es.regexp.flags.50a65004.js',
      ],
    ).then(function (te) {
      return { default: te.WithTooltipPure };
    });
  }),
  WithTooltipPure = function (ee) {
    return React__default.createElement(
      T$1,
      { fallback: React__default.createElement('div', null) },
      React__default.createElement(LazyWithTooltipPure, Object.assign({}, ee)),
    );
  };
styled.div(function (te) {
  var ee = te.theme;
  return { fontWeight: ee.typography.weight.black };
});
styled.span();
styled.div(function (te) {
  var ee = te.theme;
  return {
    marginTop: 8,
    textAlign: 'center',
    '> *': { margin: '0 8px', fontWeight: ee.typography.weight.black },
  };
});
styled.div(function (te) {
  var ee = te.theme;
  return { color: ee.textColor, lineHeight: '18px' };
});
styled.div({ padding: 15, width: 280, boxSizing: 'border-box' });
var Note = styled.div(function (te) {
    var ee = te.theme;
    return {
      padding: '2px 6px',
      lineHeight: '16px',
      fontSize: 10,
      fontWeight: ee.typography.weight.bold,
      color: ee.color.lightest,
      boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.3)',
      borderRadius: 4,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      zIndex: -1,
      background: ee.base === 'light' ? 'rgba(60, 60, 60, 0.9)' : 'rgba(20, 20, 20, 0.85)',
      margin: 6,
    };
  }),
  TooltipNote = function (ee) {
    var re = ee.note,
      ae = __rest(ee, ['note']);
    return React__default.createElement(Note, Object.assign({}, ae), re);
  },
  Title$1 = styled(function (te) {
    var ee = __rest(te, ['active', 'loading', 'disabled']);
    return React__default.createElement('span', Object.assign({}, ee));
  })(
    function (te) {
      var ee = te.theme;
      return { color: ee.color.defaultText, fontWeight: ee.typography.weight.regular };
    },
    function (te) {
      var ee = te.active,
        re = te.theme;
      return ee ? { color: re.color.primary, fontWeight: re.typography.weight.bold } : {};
    },
    function (te) {
      var ee = te.loading,
        re = te.theme;
      return ee
        ? Object.assign({ display: 'inline-block', flex: 'none' }, re.animation.inlineGlow)
        : {};
    },
    function (te) {
      var ee = te.disabled,
        re = te.theme;
      return ee ? { color: curriedTransparentize$1(0.7, re.color.defaultText) } : {};
    },
  ),
  Right = styled.span(
    {
      '& svg': {
        transition: 'all 200ms ease-out',
        opacity: 0,
        height: 12,
        width: 12,
        margin: '3px 0',
        verticalAlign: 'top',
      },
      '& path': { fill: 'inherit' },
    },
    function (te) {
      var ee = te.active,
        re = te.theme;
      return ee ? { '& svg': { opacity: 1 }, '& path': { fill: re.color.primary } } : {};
    },
  ),
  Center = styled.span({
    flex: 1,
    textAlign: 'left',
    display: 'inline-flex',
    '& > * + *': { paddingLeft: 10 },
  }),
  CenterText = styled.span(
    { flex: 1, textAlign: 'center' },
    function (te) {
      var ee = te.active,
        re = te.theme;
      return ee ? { color: re.color.primary } : {};
    },
    function (te) {
      var ee = te.theme,
        re = te.disabled;
      return re ? { color: ee.color.mediumdark } : {};
    },
  ),
  Left = styled.span(function (te) {
    var ee = te.active,
      re = te.theme;
    return ee ? { '& svg': { opacity: 1 }, '& path': { fill: re.color.primary } } : {};
  }),
  Item$3 = styled.a(
    function (te) {
      var ee = te.theme;
      return {
        fontSize: ee.typography.size.s1,
        transition: 'all 150ms ease-out',
        color: curriedTransparentize$1(0.5, ee.color.defaultText),
        textDecoration: 'none',
        cursor: 'pointer',
        justifyContent: 'space-between',
        lineHeight: '18px',
        padding: '7px 15px',
        display: 'flex',
        alignItems: 'center',
        '& > * + *': { paddingLeft: 10 },
        '&:hover': { background: ee.background.hoverable },
        '&:hover svg': { opacity: 1 },
      };
    },
    function (te) {
      var ee = te.disabled;
      return ee ? { cursor: 'not-allowed' } : {};
    },
  ),
  getItemProps = memoize$3(100)(function (te, ee, re) {
    var ae = {};
    return (
      te && Object.assign(ae, { onClick: te }),
      ee && Object.assign(ae, { href: ee }),
      re && ee && Object.assign(ae, { to: ee, as: re }),
      ae
    );
  }),
  ListItem = function (ee) {
    var re = ee.loading,
      ae = ee.left,
      ne = ee.title,
      oe = ee.center,
      ie = ee.right,
      le = ee.active,
      ce = ee.disabled,
      se = ee.href,
      ue = ee.onClick,
      pe = ee.LinkWrapper,
      fe = __rest(ee, [
        'loading',
        'left',
        'title',
        'center',
        'right',
        'active',
        'disabled',
        'href',
        'onClick',
        'LinkWrapper',
      ]),
      ge = getItemProps(ue, se, pe),
      de = { active: le, disabled: ce };
    return React__default.createElement(
      Item$3,
      Object.assign({}, de, fe, ge),
      ae && React__default.createElement(Left, Object.assign({}, de), ae),
      ne || oe
        ? React__default.createElement(
            Center,
            null,
            ne && React__default.createElement(Title$1, Object.assign({}, de, { loading: re }), ne),
            oe && React__default.createElement(CenterText, Object.assign({}, de), oe),
          )
        : null,
      ie && React__default.createElement(Right, Object.assign({}, de), ie),
    );
  };
ListItem.defaultProps = {
  loading: !1,
  left: null,
  title: React__default.createElement('span', null, 'Loading state'),
  center: null,
  right: null,
  active: !1,
  disabled: !1,
  href: null,
  LinkWrapper: null,
  onClick: null,
};
styled.div(
  { minWidth: 180, overflow: 'hidden', overflowY: 'auto', maxHeight: 13.5 * 32 },
  function (te) {
    var ee = te.theme;
    return { borderRadius: ee.appBorderRadius * 2 };
  },
);
ListItem.defaultProps.LinkWrapper;
var Side = styled.div(
  {
    display: 'flex',
    whiteSpace: 'nowrap',
    flexBasis: 'auto',
    flexShrink: 0,
    marginLeft: 3,
    marginRight: 3,
  },
  function (te) {
    var ee = te.left;
    return ee ? { '& > *': { marginLeft: 4 } } : {};
  },
  function (te) {
    var ee = te.right;
    return ee ? { marginLeft: 30, '& > *': { marginRight: 4 } } : {};
  },
);
Side.displayName = 'Side';
var Bar$1 = styled(function (te) {
  var ee = te.children,
    re = te.className;
  return React__default.createElement(
    ScrollArea,
    { horizontal: !0, vertical: !1, className: re },
    ee,
  );
})(
  function (te) {
    var ee = te.theme;
    return {
      color: ee.barTextColor,
      width: '100%',
      height: 40,
      flexShrink: 0,
      overflow: 'auto',
      overflowY: 'hidden',
    };
  },
  function (te) {
    var ee = te.theme,
      re = te.border;
    return re
      ? { boxShadow: ''.concat(ee.appBorderColor, '  0 -1px 0 0 inset'), background: ee.barBg }
      : {};
  },
);
Bar$1.displayName = 'Bar';
var BarInner = styled.div(function (te) {
    var ee = te.bgColor;
    return {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
      flexWrap: 'nowrap',
      flexShrink: 0,
      height: 40,
      backgroundColor: ee || '',
    };
  }),
  FlexBar = function (ee) {
    var re = ee.children,
      ae = ee.backgroundColor,
      ne = __rest(ee, ['children', 'backgroundColor']),
      oe = k$2.toArray(re),
      ie = _slicedToArray$4(oe, 2),
      le = ie[0],
      ce = ie[1];
    return React__default.createElement(
      Bar$1,
      Object.assign({}, ne),
      React__default.createElement(
        BarInner,
        { bgColor: ae },
        React__default.createElement(Side, { left: !0 }, le),
        ce ? React__default.createElement(Side, { right: !0 }, ce) : null,
      ),
    );
  };
FlexBar.displayName = 'FlexBar';
var top = 'top',
  bottom = 'bottom',
  right = 'right',
  left = 'left',
  auto = 'auto',
  basePlacements = [top, bottom, right, left],
  start = 'start',
  end = 'end',
  clippingParents = 'clippingParents',
  viewport = 'viewport',
  popper = 'popper',
  reference = 'reference',
  variationPlacements = basePlacements.reduce(function (te, ee) {
    return te.concat([ee + '-' + start, ee + '-' + end]);
  }, []),
  placements = [].concat(basePlacements, [auto]).reduce(function (te, ee) {
    return te.concat([ee, ee + '-' + start, ee + '-' + end]);
  }, []),
  beforeRead = 'beforeRead',
  read = 'read',
  afterRead = 'afterRead',
  beforeMain = 'beforeMain',
  main = 'main',
  afterMain = 'afterMain',
  beforeWrite = 'beforeWrite',
  write = 'write',
  afterWrite = 'afterWrite',
  modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite,
  ],
  ButtonOrLink = function (ee) {
    var re = ee.children,
      ae = __rest(ee, ['children']);
    return ae.href != null
      ? React__default.createElement('a', Object.assign({}, ae), re)
      : React__default.createElement('button', Object.assign({ type: 'button' }, ae), re);
  },
  TabButton = styled(ButtonOrLink, { shouldForwardProp: isPropValid })(
    {
      whiteSpace: 'normal',
      display: 'inline-flex',
      overflow: 'hidden',
      verticalAlign: 'top',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      textDecoration: 'none',
      '&:empty': { display: 'none' },
    },
    function (te) {
      var ee = te.theme;
      return {
        padding: '0 15px',
        transition: 'color 0.2s linear, border-bottom-color 0.2s linear',
        height: 40,
        lineHeight: '12px',
        cursor: 'pointer',
        background: 'transparent',
        border: '0 solid transparent',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        fontWeight: 'bold',
        fontSize: 13,
        '&:focus': { outline: '0 none', borderBottomColor: ee.color.secondary },
      };
    },
    function (te) {
      var ee = te.active,
        re = te.textColor,
        ae = te.theme;
      return ee
        ? { color: re || ae.barSelectedColor, borderBottomColor: ae.barSelectedColor }
        : { color: re || ae.barTextColor, borderBottomColor: 'transparent' };
    },
  );
TabButton.displayName = 'TabButton';
var IconButton = styled(ButtonOrLink, { shouldForwardProp: isPropValid })(
  function () {
    return {
      alignItems: 'center',
      background: 'transparent',
      border: 'none',
      borderRadius: 4,
      color: 'inherit',
      cursor: 'pointer',
      display: 'inline-flex',
      fontSize: 13,
      fontWeight: 'bold',
      height: 28,
      justifyContent: 'center',
      marginTop: 6,
      padding: '8px 7px',
      '& > svg': { width: 14 },
    };
  },
  function (te) {
    var ee = te.active,
      re = te.theme;
    return ee ? { backgroundColor: re.background.hoverable, color: re.color.secondary } : {};
  },
  function (te) {
    var ee = te.disabled,
      re = te.theme;
    return ee
      ? { opacity: 0.5, cursor: 'not-allowed' }
      : {
          '&:hover, &:focus-visible': {
            background: curriedTransparentize$1(0.88, re.color.secondary),
            color: re.color.secondary,
          },
          '&:focus-visible': { outline: auto },
          '&:focus:not(:focus-visible)': { outline: 'none' },
        };
  },
);
IconButton.displayName = 'IconButton';
var IconPlaceholder = styled.div(function (te) {
    var ee = te.theme;
    return {
      width: 14,
      height: 14,
      backgroundColor: ee.appBorderColor,
      animation: ''.concat(ee.animation.glow, ' 1.5s ease-in-out infinite'),
    };
  }),
  IconButtonSkeletonWrapper = styled.div(function () {
    return { marginTop: 6, padding: 7, height: 28 };
  }),
  IconButtonSkeleton = function () {
    return React__default.createElement(
      IconButtonSkeletonWrapper,
      null,
      React__default.createElement(IconPlaceholder, null),
    );
  },
  Wrapper$6 = styled.div(
    function (te) {
      var ee = te.theme,
        re = te.bordered;
      return re
        ? {
            backgroundClip: 'padding-box',
            border: '1px solid '.concat(ee.appBorderColor),
            borderRadius: ee.appBorderRadius,
            overflow: 'hidden',
            boxSizing: 'border-box',
          }
        : {};
    },
    function (te) {
      var ee = te.absolute;
      return ee
        ? {
            width: '100%',
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
          }
        : { display: 'block' };
    },
  ),
  TabBar = styled.div({ overflow: 'hidden', '&:first-of-type': { marginLeft: -3 } }),
  Content = styled.div(
    { display: 'block', position: 'relative' },
    function (te) {
      var ee = te.theme;
      return { fontSize: ee.typography.size.s2 - 1, background: ee.background.content };
    },
    function (te) {
      var ee = te.bordered,
        re = te.theme;
      return ee
        ? {
            borderRadius: '0 0 '
              .concat(re.appBorderRadius - 1, 'px ')
              .concat(re.appBorderRadius - 1, 'px'),
          }
        : {};
    },
    function (te) {
      var ee = te.absolute,
        re = te.bordered;
      return ee
        ? _defineProperty2(
            {
              height: 'calc(100% - '.concat(re ? 42 : 40, 'px)'),
              position: 'absolute',
              left: 0 + (re ? 1 : 0),
              right: 0 + (re ? 1 : 0),
              bottom: 0 + (re ? 1 : 0),
              top: 40 + (re ? 1 : 0),
              overflow: 'auto',
            },
            '& > *:first-child',
            {
              position: 'absolute',
              left: 0 + (re ? 1 : 0),
              right: 0 + (re ? 1 : 0),
              bottom: 0 + (re ? 1 : 0),
              top: 0 + (re ? 1 : 0),
              height: 'calc(100% - '.concat(re ? 2 : 0, 'px)'),
              overflow: 'auto',
            },
          )
        : {};
    },
  ),
  VisuallyHidden = styled.div(function (te) {
    var ee = te.active;
    return ee ? { display: 'block' } : { display: 'none' };
  }),
  childrenToList = function (ee, re) {
    return k$2.toArray(ee).map(function (ae, ne) {
      var oe = ae.props,
        ie = oe.title,
        le = oe.id,
        ce = oe.color,
        se = oe.children,
        ue = Array.isArray(se) ? se[0] : se;
      return {
        active: re ? le === re : ne === 0,
        title: ie,
        id: le,
        color: ce,
        render:
          typeof ue == 'function'
            ? ue
            : function (pe) {
                var fe = pe.active,
                  ge = pe.key;
                return React__default.createElement(
                  VisuallyHidden,
                  { key: ge, active: fe, role: 'tabpanel' },
                  ue,
                );
              },
      };
    });
  },
  Tabs = E$1(function (te) {
    var ee = te.children,
      re = te.selected,
      ae = te.actions,
      ne = te.absolute,
      oe = te.bordered,
      ie = te.tools,
      le = te.backgroundColor,
      ce = te.id,
      se = childrenToList(ee, re);
    return se.length
      ? React__default.createElement(
          Wrapper$6,
          { absolute: ne, bordered: oe, id: ce },
          React__default.createElement(
            FlexBar,
            { border: !0, backgroundColor: le },
            React__default.createElement(
              TabBar,
              { role: 'tablist' },
              se.map(function (ue) {
                var pe = ue.title,
                  fe = ue.id,
                  ge = ue.active,
                  de = ue.color,
                  me = typeof pe == 'function' ? pe() : pe;
                return React__default.createElement(
                  TabButton,
                  {
                    id: 'tabbutton-'.concat(dist.sanitize(me)),
                    className: 'tabbutton '.concat(ge ? 'tabbutton-active' : ''),
                    type: 'button',
                    key: fe,
                    active: ge,
                    textColor: de,
                    onClick: function (ve) {
                      ve.preventDefault(), ae.onSelect(fe);
                    },
                    role: 'tab',
                  },
                  me,
                );
              }),
            ),
            ie ? React__default.createElement(p$2, null, ie) : null,
          ),
          React__default.createElement(
            Content,
            { id: 'panel-tab-content', bordered: oe, absolute: ne },
            se.map(function (ue) {
              var pe = ue.id,
                fe = ue.active,
                ge = ue.render;
              return ge({ key: pe, active: fe });
            }),
          ),
        )
      : React__default.createElement(
          Placeholder,
          null,
          React__default.createElement(p$2, { key: 'title' }, 'Nothing found'),
        );
  });
Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  id: null,
  children: null,
  tools: null,
  selected: null,
  absolute: !1,
  bordered: !1,
};
var TabsState = (function (te) {
  _inherits(re, te);
  var ee = _createSuper(re);
  function re(ae) {
    var ne;
    return (
      _classCallCheck(this, re),
      (ne = ee.call(this, ae)),
      (ne.handlers = {
        onSelect: function (ie) {
          return ne.setState({ selected: ie });
        },
      }),
      (ne.state = { selected: ae.initial }),
      ne
    );
  }
  return (
    _createClass(re, [
      {
        key: 'render',
        value: function () {
          var ne = this.props,
            oe = ne.bordered,
            ie = oe === void 0 ? !1 : oe,
            le = ne.absolute,
            ce = le === void 0 ? !1 : le,
            se = ne.children,
            ue = ne.backgroundColor,
            pe = this.state.selected;
          return React__default.createElement(
            Tabs,
            {
              bordered: ie,
              absolute: ce,
              selected: pe,
              backgroundColor: ue,
              actions: this.handlers,
            },
            se,
          );
        },
      },
    ]),
    re
  );
})(d$2);
TabsState.defaultProps = {
  children: [],
  initial: null,
  absolute: !1,
  bordered: !1,
  backgroundColor: '',
};
var Separator = styled.span(
  function (te) {
    var ee = te.theme;
    return {
      width: 1,
      height: 20,
      background: ee.appBorderColor,
      marginTop: 10,
      marginLeft: 6,
      marginRight: 2,
    };
  },
  function (te) {
    var ee = te.force;
    return ee ? {} : { '& + &': { display: 'none' } };
  },
);
Separator.displayName = 'Separator';
function e() {
  return (e =
    Object.assign ||
    function (te) {
      for (var ee = 1; ee < arguments.length; ee++) {
        var re = arguments[ee];
        for (var ae in re) Object.prototype.hasOwnProperty.call(re, ae) && (te[ae] = re[ae]);
      }
      return te;
    }).apply(this, arguments);
}
var n = /[\'\"]/,
  r = ['children', 'options'],
  o = [
    'allowFullScreen',
    'allowTransparency',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'className',
    'classId',
    'colSpan',
    'contentEditable',
    'contextMenu',
    'crossOrigin',
    'encType',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'hrefLang',
    'inputMode',
    'keyParams',
    'keyType',
    'marginHeight',
    'marginWidth',
    'maxLength',
    'mediaGroup',
    'minLength',
    'noValidate',
    'radioGroup',
    'readOnly',
    'rowSpan',
    'spellCheck',
    'srcDoc',
    'srcLang',
    'srcSet',
    'tabIndex',
    'useMap',
  ].reduce(
    function (te, ee) {
      return (te[ee.toLowerCase()] = ee), te;
    },
    { for: 'htmlFor' },
  ),
  c = { amp: '&', apos: "'", gt: '>', lt: '<', nbsp: '\xA0', quot: '\u201C' },
  a = ['style', 'script'],
  u =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  i = /mailto:/i,
  l = /\n{2,}$/,
  s = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
  _2 = /^ *> ?/gm,
  f = /^ {2,}\n/,
  d = /^(?:( *[-*_]) *){3,}(?:\n *)+\n/,
  p = /^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,
  g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  m = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  y = /^(?:\n *)*\n/,
  h = /\r\n?/g,
  k = /^\[\^([^\]]+)](:.*)\n/,
  x = /^\[\^([^\]]+)]/,
  v = /\f/g,
  b = /^\s*?\[(x|\s)\]/,
  S = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  $ = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
  w =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
  z = /&([a-z]+);/g,
  E = /^<!--[\s\S]*?(?:-->)/,
  A$3 = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  R = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  I = /^\{.*\}$/,
  M = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  O = /^<([^ >]+@[^ >]+)>/,
  B = /^<([^ >]+:\/[^ >]+)>/,
  L = / *\n+$/,
  T = /(?:^|\n)( *)$/,
  j = /-([a-z])?/gi,
  C = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
  D = /^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,
  N = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  Z = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  F = /(\[|\])/g,
  P = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  G = /\t/g,
  H = /^ *\| */,
  q = /(^ *\||\| *$)/g,
  U = / *$/,
  V = /^ *:-+: *$/,
  W = /^ *:-+ *$/,
  Q = /^ *-+: *$/,
  X = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
  J = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
  K = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
  Y = /^\\([^0-9A-Za-z\s])/,
  tt = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
  et = /^\n+/,
  nt = /^([ \t]*)/,
  rt = /\\([^0-9A-Z\s])/gi,
  ot = new RegExp('^( *)((?:[*+-]|\\d+\\.)) +'),
  ct = new RegExp(
    '^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)',
    'gm',
  ),
  at = new RegExp(
    '^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)',
  ),
  ut = '(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*',
  it = new RegExp(
    '^\\[(' + ut + `)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`,
  ),
  lt = new RegExp(
    '^!\\[(' + ut + `)\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`,
  ),
  st = [s, g, p, S, $, E, ct, at, C],
  _t = [].concat(st, [/^[^\n]+(?:  \n|\n{2,})/, w, R]);
function ft(te) {
  return te
    .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ðÐ]/g, 'd')
    .replace(/[ÈÉÊËéèêë]/g, 'e')
    .replace(/[ÏïÎîÍíÌì]/g, 'i')
    .replace(/[Ññ]/g, 'n')
    .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
    .replace(/[ÜüÛûÚúÙù]/g, 'u')
    .replace(/[ŸÿÝý]/g, 'y')
    .replace(/[^a-z0-9- ]/gi, '')
    .replace(/ /gi, '-')
    .toLowerCase();
}
function dt(te) {
  return Q.test(te) ? 'right' : V.test(te) ? 'center' : W.test(te) ? 'left' : null;
}
function pt(te, ee, re) {
  var ae = re.t;
  re.t = !0;
  var ne = ee(te.trim(), re);
  re.t = ae;
  var oe = [[]];
  return (
    ne.forEach(function (ie, le) {
      ie.type === 'tableSeparator'
        ? le !== 0 && le !== ne.length - 1 && oe.push([])
        : (ie.type !== 'text' ||
            (ne[le + 1] != null && ne[le + 1].type !== 'tableSeparator') ||
            (ie.content = ie.content.replace(U, '')),
          oe[oe.length - 1].push(ie));
    }),
    oe
  );
}
function gt(te, ee, re) {
  re.o = !0;
  var ae = pt(te[1], ee, re),
    ne = te[2].replace(q, '').split('|').map(dt),
    oe = (function (ie, le, ce) {
      return ie
        .trim()
        .split(
          `
`,
        )
        .map(function (se) {
          return pt(se, le, ce);
        });
    })(te[3], ee, re);
  return (re.o = !1), { align: ne, cells: oe, header: ae, type: 'table' };
}
function mt(te, ee) {
  return te.align[ee] == null ? {} : { textAlign: te.align[ee] };
}
function yt(te) {
  return function (ee, re) {
    return re.o ? te.exec(ee) : null;
  };
}
function ht(te) {
  return function (ee, re) {
    return re.o || re.u ? te.exec(ee) : null;
  };
}
function kt(te) {
  return function (ee, re) {
    return re.o || re.u ? null : te.exec(ee);
  };
}
function xt(te) {
  return function (ee) {
    return te.exec(ee);
  };
}
function vt(te, ee, re) {
  if (
    ee.o ||
    ee.u ||
    (re &&
      !re.endsWith(`
`))
  )
    return null;
  var ae = '';
  te.split(
    `
`,
  ).every(function (oe) {
    return (
      !st.some(function (ie) {
        return ie.test(oe);
      }) &&
      ((ae +=
        oe +
        `
`),
      oe.trim())
    );
  });
  var ne = ae.trimEnd();
  return ne == '' ? null : [ae, ne];
}
function bt(te) {
  try {
    if (
      decodeURIComponent(te)
        .replace(/[^A-Za-z0-9/:]/g, '')
        .match(/^\s*(javascript|vbscript|data):/i)
    )
      return null;
  } catch {
    return null;
  }
  return te;
}
function St(te) {
  return te.replace(rt, '$1');
}
function $t(te, ee, re) {
  var ae = re.o || !1,
    ne = re.u || !1;
  (re.o = !0), (re.u = !0);
  var oe = te(ee, re);
  return (re.o = ae), (re.u = ne), oe;
}
function wt(te, ee, re) {
  var ae = re.o || !1,
    ne = re.u || !1;
  (re.o = !1), (re.u = !0);
  var oe = te(ee, re);
  return (re.o = ae), (re.u = ne), oe;
}
function zt(te, ee, re) {
  return (
    (re.o = !1),
    te(
      ee +
        `

`,
      re,
    )
  );
}
var Et = function (ee, re, ae) {
  return { content: $t(re, ee[1], ae) };
};
function At() {
  return {};
}
function Rt() {
  return null;
}
function It() {
  for (var te = arguments.length, ee = new Array(te), re = 0; re < te; re++) ee[re] = arguments[re];
  return ee.filter(Boolean).join(' ');
}
function Mt(te, ee, re) {
  for (var ae = te, ne = ee.split('.'); ne.length && ((ae = ae[ne[0]]), ae !== void 0); )
    ne.shift();
  return ae || re;
}
var Ot;
function Bt(te) {
  var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  (ee.overrides = ee.overrides || {}),
    (ee.slugify = ee.slugify || ft),
    (ee.namedCodesToUnicode = ee.namedCodesToUnicode ? e({}, c, ee.namedCodesToUnicode) : c);
  var re = ee.createElement || React__default.createElement;
  function ae(ge, de) {
    for (
      var me = Mt(ee.overrides, ''.concat(ge, '.props'), {}),
        he = arguments.length,
        ve = new Array(he > 2 ? he - 2 : 0),
        ye = 2;
      ye < he;
      ye++
    )
      ve[ye - 2] = arguments[ye];
    return re.apply(
      void 0,
      [
        (function (be, _e) {
          var Te = Mt(_e, be);
          return Te
            ? typeof Te == 'function' || (_typeof(Te) == 'object' && 'render' in Te)
              ? Te
              : Mt(_e, ''.concat(be, '.component'), be)
            : be;
        })(ge, ee.overrides),
        e({}, de, me, {
          className: It(de == null ? void 0 : de.className, me.className) || void 0,
        }),
      ].concat(ve),
    );
  }
  function ne(ge) {
    var de = !1;
    ee.forceInline ? (de = !0) : ee.forceBlock || (de = P.test(ge) === !1);
    for (
      var me = ue(
        se(
          de
            ? ge
            : ''.concat(
                ge.trimEnd().replace(et, ''),
                `

`,
              ),
          { o: de },
        ),
      );
      typeof me[me.length - 1] == 'string' && !me[me.length - 1].trim();

    )
      me.pop();
    if (ee.wrapper === null) return me;
    var he = ee.wrapper || (de ? 'span' : 'div'),
      ve;
    if (me.length > 1 || ee.forceWrapper) ve = me;
    else {
      if (me.length === 1)
        return (ve = me[0]), typeof ve == 'string' ? ae('span', { key: 'outer' }, ve) : ve;
      ve = null;
    }
    return React__default.createElement(he, { key: 'outer' }, ve);
  }
  function oe(ge) {
    var de = ge.match(u);
    return de
      ? de.reduce(function (me, he, ve) {
          var ye = he.indexOf('=');
          if (ye !== -1) {
            var be = (function ($e) {
                return (
                  $e.indexOf('-') !== -1 &&
                    $e.match(A$3) === null &&
                    ($e = $e.replace(j, function (Ee, xe) {
                      return xe.toUpperCase();
                    })),
                  $e
                );
              })(he.slice(0, ye)).trim(),
              _e = (function ($e) {
                return $e
                  ? (n.test($e.charAt(0)) && ($e = $e.substr(1)),
                    n.test($e.charAt($e.length - 1)) && ($e = $e.substr(0, $e.length - 1)),
                    $e)
                  : '';
              })(he.slice(ye + 1).trim()),
              Te = o[be] || be,
              Se = (me[Te] = (function ($e, Ee) {
                return $e === 'style'
                  ? Ee.split(/;\s?/).reduce(function (xe, Ae) {
                      var Ce = Ae.slice(0, Ae.indexOf(':'));
                      return (
                        (xe[
                          Ce.replace(/(-[a-z])/g, function (Re) {
                            return Re[1].toUpperCase();
                          })
                        ] = Ae.slice(Ce.length + 1).trim()),
                        xe
                      );
                    }, {})
                  : $e === 'href'
                  ? bt(Ee)
                  : (Ee.match(I) && (Ee = Ee.slice(1, Ee.length - 1)),
                    Ee === 'true' || (Ee !== 'false' && Ee));
              })(be, _e));
            typeof Se == 'string' &&
              (w.test(Se) || R.test(Se)) &&
              (me[Te] = React__default.cloneElement(ne(Se.trim()), { key: ve }));
          } else he !== 'style' && (me[o[he] || he] = !0);
          return me;
        }, {})
      : void 0;
  }
  var ie = [],
    le = {},
    ce = {
      blockQuote: {
        i: kt(s),
        l: Ot.HIGH,
        _: function (de, me, he) {
          return { content: me(de[0].replace(_2, ''), he) };
        },
        p: function (de, me, he) {
          return ae('blockquote', { key: he.g }, me(de.content, he));
        },
      },
      breakLine: {
        i: xt(f),
        l: Ot.HIGH,
        _: At,
        p: function (de, me, he) {
          return ae('br', { key: he.g });
        },
      },
      breakThematic: {
        i: kt(d),
        l: Ot.HIGH,
        _: At,
        p: function (de, me, he) {
          return ae('hr', { key: he.g });
        },
      },
      codeBlock: {
        i: kt(g),
        l: Ot.MAX,
        _: function (de) {
          return { content: de[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''), lang: void 0 };
        },
        p: function (de, me, he) {
          return ae(
            'pre',
            { key: he.g },
            ae('code', { className: de.lang ? 'lang-'.concat(de.lang) : '' }, de.content),
          );
        },
      },
      codeFenced: {
        i: kt(p),
        l: Ot.MAX,
        _: function (de) {
          return { content: de[3], lang: de[2] || void 0, type: 'codeBlock' };
        },
      },
      codeInline: {
        i: ht(m),
        l: Ot.LOW,
        _: function (de) {
          return { content: de[2] };
        },
        p: function (de, me, he) {
          return ae('code', { key: he.g }, de.content);
        },
      },
      footnote: {
        i: kt(k),
        l: Ot.MAX,
        _: function (de) {
          return ie.push({ footnote: de[2], identifier: de[1] }), {};
        },
        p: Rt,
      },
      footnoteReference: {
        i: yt(x),
        l: Ot.HIGH,
        _: function (de) {
          return { content: de[1], target: '#'.concat(ee.slugify(de[1])) };
        },
        p: function (de, me, he) {
          return ae('a', { key: he.g, href: bt(de.target) }, ae('sup', { key: he.g }, de.content));
        },
      },
      gfmTask: {
        i: yt(b),
        l: Ot.HIGH,
        _: function (de) {
          return { completed: de[1].toLowerCase() === 'x' };
        },
        p: function (de, me, he) {
          return ae('input', { checked: de.completed, key: he.g, readOnly: !0, type: 'checkbox' });
        },
      },
      heading: {
        i: kt(S),
        l: Ot.HIGH,
        _: function (de, me, he) {
          return { content: $t(me, de[2], he), id: ee.slugify(de[2]), level: de[1].length };
        },
        p: function (de, me, he) {
          return (
            (de.tag = 'h'.concat(de.level)),
            ae(de.tag, { id: de.id, key: he.g }, me(de.content, he))
          );
        },
      },
      headingSetext: {
        i: kt($),
        l: Ot.MAX,
        _: function (de, me, he) {
          return { content: $t(me, de[1], he), level: de[2] === '=' ? 1 : 2, type: 'heading' };
        },
      },
      htmlComment: {
        i: xt(E),
        l: Ot.HIGH,
        _: function () {
          return {};
        },
        p: Rt,
      },
      image: {
        i: ht(lt),
        l: Ot.HIGH,
        _: function (de) {
          return { alt: de[1], target: St(de[2]), title: de[3] };
        },
        p: function (de, me, he) {
          return ae('img', {
            key: he.g,
            alt: de.alt || void 0,
            title: de.title || void 0,
            src: bt(de.target),
          });
        },
      },
      link: {
        i: yt(it),
        l: Ot.LOW,
        _: function (de, me, he) {
          return { content: wt(me, de[1], he), target: St(de[2]), title: de[3] };
        },
        p: function (de, me, he) {
          return ae('a', { key: he.g, href: bt(de.target), title: de.title }, me(de.content, he));
        },
      },
      linkAngleBraceStyleDetector: {
        i: yt(B),
        l: Ot.MAX,
        _: function (de) {
          return { content: [{ content: de[1], type: 'text' }], target: de[1], type: 'link' };
        },
      },
      linkBareUrlDetector: {
        i: function (de, me) {
          return me.m ? null : yt(M)(de, me);
        },
        l: Ot.MAX,
        _: function (de) {
          return {
            content: [{ content: de[1], type: 'text' }],
            target: de[1],
            title: void 0,
            type: 'link',
          };
        },
      },
      linkMailtoDetector: {
        i: yt(O),
        l: Ot.MAX,
        _: function (de) {
          var me = de[1],
            he = de[1];
          return (
            i.test(he) || (he = 'mailto:' + he),
            {
              content: [{ content: me.replace('mailto:', ''), type: 'text' }],
              target: he,
              type: 'link',
            }
          );
        },
      },
      list: {
        i: function (de, me, he) {
          var ve = T.exec(he);
          return !ve || (!me.h && me.o) ? null : at.exec((de = ve[1] + de));
        },
        l: Ot.HIGH,
        _: function (de, me, he) {
          var ve = de[2],
            ye = ve.length > 1,
            be = ye ? +ve : void 0,
            _e = de[0]
              .replace(
                l,
                `
`,
              )
              .match(ct),
            Te = !1;
          return {
            items: _e.map(function (Se, $e) {
              var Ee = ot.exec(Se)[0].length,
                xe = new RegExp('^ {1,' + Ee + '}', 'gm'),
                Ae = Se.replace(xe, '').replace(ot, ''),
                Ce = $e === _e.length - 1,
                Re =
                  Ae.indexOf(`

`) !== -1 ||
                  (Ce && Te);
              Te = Re;
              var Oe = he.o,
                we = he.h,
                ke;
              (he.h = !0),
                Re
                  ? ((he.o = !1),
                    (ke = Ae.replace(
                      L,
                      `

`,
                    )))
                  : ((he.o = !0), (ke = Ae.replace(L, '')));
              var Be = me(ke, he);
              return (he.o = Oe), (he.h = we), Be;
            }),
            ordered: ye,
            start: be,
          };
        },
        p: function (de, me, he) {
          return ae(
            de.ordered ? 'ol' : 'ul',
            { key: he.g, start: de.start },
            de.items.map(function (ve, ye) {
              return ae('li', { key: ye }, me(ve, he));
            }),
          );
        },
      },
      newlineCoalescer: {
        i: kt(y),
        l: Ot.LOW,
        _: At,
        p: function () {
          return `
`;
        },
      },
      paragraph: {
        i: vt,
        l: Ot.LOW,
        _: Et,
        p: function (de, me, he) {
          return ae('p', { key: he.g }, me(de.content, he));
        },
      },
      ref: {
        i: yt(D),
        l: Ot.MAX,
        _: function (de) {
          return (le[de[1]] = { target: de[2], title: de[4] }), {};
        },
        p: Rt,
      },
      refImage: {
        i: ht(N),
        l: Ot.MAX,
        _: function (de) {
          return { alt: de[1] || void 0, ref: de[2] };
        },
        p: function (de, me, he) {
          return ae('img', {
            key: he.g,
            alt: de.alt,
            src: bt(le[de.ref].target),
            title: le[de.ref].title,
          });
        },
      },
      refLink: {
        i: yt(Z),
        l: Ot.MAX,
        _: function (de, me, he) {
          return {
            content: me(de[1], he),
            fallbackContent: me(de[0].replace(F, '\\$1'), he),
            ref: de[2],
          };
        },
        p: function (de, me, he) {
          return le[de.ref]
            ? ae(
                'a',
                { key: he.g, href: bt(le[de.ref].target), title: le[de.ref].title },
                me(de.content, he),
              )
            : ae('span', { key: he.g }, me(de.fallbackContent, he));
        },
      },
      table: {
        i: kt(C),
        l: Ot.HIGH,
        _: gt,
        p: function (de, me, he) {
          return ae(
            'table',
            { key: he.g },
            ae(
              'thead',
              null,
              ae(
                'tr',
                null,
                de.header.map(function (ve, ye) {
                  return ae('th', { key: ye, style: mt(de, ye) }, me(ve, he));
                }),
              ),
            ),
            ae(
              'tbody',
              null,
              de.cells.map(function (ve, ye) {
                return ae(
                  'tr',
                  { key: ye },
                  ve.map(function (be, _e) {
                    return ae('td', { key: _e, style: mt(de, _e) }, me(be, he));
                  }),
                );
              }),
            ),
          );
        },
      },
      tableSeparator: {
        i: function (de, me) {
          return me.t ? H.exec(de) : null;
        },
        l: Ot.HIGH,
        _: function () {
          return { type: 'tableSeparator' };
        },
        p: function () {
          return ' | ';
        },
      },
      text: {
        i: xt(tt),
        l: Ot.MIN,
        _: function (de) {
          return {
            content: de[0].replace(z, function (me, he) {
              return ee.namedCodesToUnicode[he] ? ee.namedCodesToUnicode[he] : me;
            }),
          };
        },
        p: function (de) {
          return de.content;
        },
      },
      textBolded: {
        i: ht(X),
        l: Ot.MED,
        _: function (de, me, he) {
          return { content: me(de[2], he) };
        },
        p: function (de, me, he) {
          return ae('strong', { key: he.g }, me(de.content, he));
        },
      },
      textEmphasized: {
        i: ht(J),
        l: Ot.LOW,
        _: function (de, me, he) {
          return { content: me(de[2], he) };
        },
        p: function (de, me, he) {
          return ae('em', { key: he.g }, me(de.content, he));
        },
      },
      textEscaped: {
        i: ht(Y),
        l: Ot.HIGH,
        _: function (de) {
          return { content: de[1], type: 'text' };
        },
      },
      textStrikethroughed: {
        i: ht(K),
        l: Ot.LOW,
        _: Et,
        p: function (de, me, he) {
          return ae('del', { key: he.g }, me(de.content, he));
        },
      },
    };
  ee.disableParsingRawHTML !== !0 &&
    ((ce.htmlBlock = {
      i: xt(w),
      l: Ot.HIGH,
      _: function (de, me, he) {
        var ve = de[3].match(nt),
          ye = _slicedToArray$4(ve, 2),
          be = ye[1],
          _e = new RegExp('^'.concat(be), 'gm'),
          Te = de[3].replace(_e, ''),
          Se =
            (($e = Te),
            _t.some(function (Ce) {
              return Ce.test($e);
            })
              ? zt
              : $t),
          $e,
          Ee = de[1].toLowerCase(),
          xe = a.indexOf(Ee) !== -1;
        he.m = he.m || Ee === 'a';
        var Ae = xe ? de[3] : Se(me, Te, he);
        return (
          (he.m = !1), { attrs: oe(de[2]), content: Ae, noInnerParse: xe, tag: xe ? Ee : de[1] }
        );
      },
      p: function (de, me, he) {
        return ae(
          de.tag,
          e({ key: he.g }, de.attrs),
          de.noInnerParse ? de.content : me(de.content, he),
        );
      },
    }),
    (ce.htmlSelfClosing = {
      i: xt(R),
      l: Ot.HIGH,
      _: function (de) {
        return { attrs: oe(de[2] || ''), tag: de[1] };
      },
      p: function (de, me, he) {
        return ae(de.tag, e({}, de.attrs, { key: he.g }));
      },
    }));
  var se = (function (ge) {
      var de = Object.keys(ge);
      function me(he, ve) {
        for (var ye = [], be = ''; he; )
          for (var _e = 0; _e < de.length; ) {
            var Te = de[_e],
              Se = ge[Te],
              $e = Se.i(he, ve, be);
            if ($e) {
              var Ee = $e[0];
              he = he.substring(Ee.length);
              var xe = Se._($e, me, ve);
              xe.type == null && (xe.type = Te), ye.push(xe), (be = Ee);
              break;
            }
            _e++;
          }
        return ye;
      }
      return (
        de.sort(function (he, ve) {
          var ye = ge[he].l,
            be = ge[ve].l;
          return ye !== be ? ye - be : he < ve ? -1 : 1;
        }),
        function (he, ve) {
          return me(
            (function (ye) {
              return ye
                .replace(
                  h,
                  `
`,
                )
                .replace(v, '')
                .replace(G, '    ');
            })(he),
            ve,
          );
        }
      );
    })(ce),
    ue =
      ((pe = (function (ge) {
        return function (de, me, he) {
          return ge[de.type].p(de, me, he);
        };
      })(ce)),
      function ge(de) {
        var me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (Array.isArray(de)) {
          for (var he = me.g, ve = [], ye = !1, be = 0; be < de.length; be++) {
            me.g = be;
            var _e = ge(de[be], me),
              Te = typeof _e == 'string';
            Te && ye ? (ve[ve.length - 1] += _e) : _e !== null && ve.push(_e), (ye = Te);
          }
          return (me.g = he), ve;
        }
        return pe(de, ge, me);
      }),
    pe,
    fe = ne(te);
  return ie.length
    ? ae(
        'div',
        null,
        fe,
        ae(
          'footer',
          { key: 'footer' },
          ie.map(function (ge) {
            return ae(
              'div',
              { id: ee.slugify(ge.identifier), key: ge.identifier },
              ge.identifier,
              ue(se(ge.footnote, { o: !0 })),
            );
          }),
        ),
      )
    : fe;
}
(function (te) {
  (te[(te.MAX = 0)] = 'MAX'),
    (te[(te.HIGH = 1)] = 'HIGH'),
    (te[(te.MED = 2)] = 'MED'),
    (te[(te.LOW = 3)] = 'LOW'),
    (te[(te.MIN = 4)] = 'MIN');
})(Ot || (Ot = {}));
var Markdown = function (ee) {
    var re = ee.children,
      ae = ee.options,
      ne = (function (oe, ie) {
        if (oe == null) return {};
        var le,
          ce,
          se = {},
          ue = Object.keys(oe);
        for (ce = 0; ce < ue.length; ce++) ie.indexOf((le = ue[ce])) >= 0 || (se[le] = oe[le]);
        return se;
      })(ee, r);
    return React__default.cloneElement(Bt(re, ae), ne);
  },
  Description$1 = function (ee) {
    var re = ee.markdown;
    return React__default.createElement(
      ResetWrapper,
      null,
      React__default.createElement(
        Markdown,
        { options: { forceBlock: !0, overrides: components$1 } },
        re,
      ),
    );
  },
  breakpoint = 600,
  Title$2 = styled.h1(withReset, function (te) {
    var ee = te.theme;
    return _defineProperty2(
      {
        color: ee.color.defaultText,
        fontSize: ee.typography.size.m3,
        fontWeight: ee.typography.weight.black,
        lineHeight: '32px',
      },
      '@media (min-width: '.concat(breakpoint, 'px)'),
      { fontSize: ee.typography.size.l1, lineHeight: '36px', marginBottom: '.5rem' },
    );
  }),
  Subtitle$1 = styled.h2(withReset, function (te) {
    var ee,
      re = te.theme;
    return (
      (ee = {
        fontWeight: re.typography.weight.regular,
        fontSize: re.typography.size.s3,
        lineHeight: '20px',
        borderBottom: 'none',
        marginBottom: 15,
      }),
      _defineProperty2(ee, '@media (min-width: '.concat(breakpoint, 'px)'), {
        fontSize: re.typography.size.m1,
        lineHeight: '28px',
        marginBottom: 24,
      }),
      _defineProperty2(ee, 'color', curriedTransparentize$1(0.25, re.color.defaultText)),
      ee
    );
  }),
  DocsContent = styled.div({ maxWidth: 1e3, width: '100%' }),
  DocsWrapper = styled.div(function (te) {
    var ee = te.theme;
    return _defineProperty2(
      {
        background: ee.background.content,
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem 20px',
        minHeight: '100vh',
        boxSizing: 'border-box',
      },
      '@media (min-width: '.concat(breakpoint, 'px)'),
      {},
    );
  }),
  getBlockBackgroundStyle = function (ee) {
    return {
      borderRadius: ee.appBorderRadius,
      background: ee.background.content,
      boxShadow:
        ee.base === 'light' ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0' : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      border: '1px solid '.concat(ee.appBorderColor),
    };
  },
  getStoryHref = function (ee, re) {
    var ae = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      ne = ee.split('?'),
      oe = _slicedToArray$4(ne, 2),
      ie = oe[0],
      le = oe[1],
      ce = le
        ? Object.assign(Object.assign(Object.assign({}, lib.parse(le)), ae), { id: re })
        : Object.assign(Object.assign({}, ae), { id: re });
    return ''.concat(ie).concat(lib.stringify(ce, { addQueryPrefix: !0, encode: !1 }));
  },
  Zoom = function (ee) {
    var re = ee.zoom,
      ae = ee.resetZoom;
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        IconButton,
        {
          key: 'zoomin',
          onClick: function (oe) {
            oe.preventDefault(), re(0.8);
          },
          title: 'Zoom in',
        },
        React__default.createElement(Icons, { icon: 'zoom' }),
      ),
      React__default.createElement(
        IconButton,
        {
          key: 'zoomout',
          onClick: function (oe) {
            oe.preventDefault(), re(1.25);
          },
          title: 'Zoom out',
        },
        React__default.createElement(Icons, { icon: 'zoomout' }),
      ),
      React__default.createElement(
        IconButton,
        {
          key: 'zoomreset',
          onClick: function (oe) {
            oe.preventDefault(), ae();
          },
          title: 'Reset zoom',
        },
        React__default.createElement(Icons, { icon: 'zoomreset' }),
      ),
    );
  },
  Eject = function (ee) {
    var re = ee.baseUrl,
      ae = ee.storyId;
    return React__default.createElement(
      IconButton,
      {
        key: 'opener',
        href: getStoryHref(re, ae),
        target: '_blank',
        title: 'Open canvas in new tab',
      },
      React__default.createElement(Icons, { icon: 'share' }),
    );
  },
  Bar = styled(FlexBar)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    transition: 'transform .2s linear',
  }),
  Toolbar = function (ee) {
    var re = ee.isLoading,
      ae = ee.storyId,
      ne = ee.baseUrl,
      oe = ee.zoom,
      ie = ee.resetZoom,
      le = __rest(ee, ['isLoading', 'storyId', 'baseUrl', 'zoom', 'resetZoom']);
    return React__default.createElement(
      Bar,
      Object.assign({}, le),
      React__default.createElement(
        p$2,
        { key: 'left' },
        re
          ? [1, 2, 3].map(function (ce) {
              return React__default.createElement(IconButtonSkeleton, { key: ce });
            })
          : React__default.createElement(Zoom, Object.assign({}, { zoom: oe, resetZoom: ie })),
      ),
      React__default.createElement(
        p$2,
        { key: 'right' },
        ae &&
          (re
            ? React__default.createElement(IconButtonSkeleton, null)
            : React__default.createElement(Eject, Object.assign({}, { storyId: ae, baseUrl: ne }))),
      ),
    );
  },
  ZoomContext = B$1({ scale: 1 }),
  globalWindow$1 = window_1.window,
  IFrame = (function (te) {
    _inherits(re, te);
    var ee = _createSuper(re);
    function re() {
      var ae;
      return _classCallCheck(this, re), (ae = ee.apply(this, arguments)), (ae.iframe = null), ae;
    }
    return (
      _createClass(re, [
        {
          key: 'componentDidMount',
          value: function () {
            var ne = this.props.id;
            this.iframe = globalWindow$1.document.getElementById(ne);
          },
        },
        {
          key: 'shouldComponentUpdate',
          value: function (ne) {
            var oe = ne.scale;
            return (
              oe !== this.props.scale &&
                this.setIframeBodyStyle({
                  width: ''.concat(oe * 100, '%'),
                  height: ''.concat(oe * 100, '%'),
                  transform: 'scale('.concat(1 / oe, ')'),
                  transformOrigin: 'top left',
                }),
              !1
            );
          },
        },
        {
          key: 'setIframeBodyStyle',
          value: function (ne) {
            return Object.assign(this.iframe.contentDocument.body.style, ne);
          },
        },
        {
          key: 'render',
          value: function () {
            var ne = this.props,
              oe = ne.id,
              ie = ne.title,
              le = ne.src,
              ce = ne.allowFullScreen;
            ne.scale;
            var se = __rest(ne, ['id', 'title', 'src', 'allowFullScreen', 'scale']);
            return React__default.createElement(
              'iframe',
              Object.assign(
                { id: oe, title: ie, src: le, allowFullScreen: ce, loading: 'lazy' },
                se,
              ),
            );
          },
        },
      ]),
      re
    );
  })(d$2),
  rotate360 = keyframes(
    _templateObject$4 ||
      (_templateObject$4 = _taggedTemplateLiteral$4([
        `
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`,
      ])),
  ),
  EventSource = window_1.EventSource,
  CONFIG_TYPE = window_1.CONFIG_TYPE,
  LoaderWrapper = styled.div(function (te) {
    var ee = te.size,
      re = ee === void 0 ? 32 : ee;
    return {
      borderRadius: '50%',
      cursor: 'progress',
      display: 'inline-block',
      overflow: 'hidden',
      position: 'absolute',
      transition: 'all 200ms ease-out',
      verticalAlign: 'top',
      top: '50%',
      left: '50%',
      marginTop: -(re / 2),
      marginLeft: -(re / 2),
      height: re,
      width: re,
      zIndex: 4,
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'rgba(97, 97, 97, 0.29)',
      borderTopColor: 'rgb(100,100,100)',
      animation: ''.concat(rotate360, ' 0.7s linear infinite'),
      mixBlendMode: 'difference',
    };
  }),
  ProgressWrapper = styled.div({
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }),
  ProgressTrack = styled.div(function (te) {
    var ee = te.theme;
    return {
      position: 'relative',
      width: '80%',
      marginBottom: '0.75rem',
      maxWidth: 300,
      height: 5,
      borderRadius: 5,
      background: curriedTransparentize$1(0.8, ee.color.secondary),
      overflow: 'hidden',
      cursor: 'progress',
    };
  }),
  ProgressBar = styled.div(function (te) {
    var ee = te.theme;
    return {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      background: ee.color.secondary,
    };
  }),
  ProgressMessage = styled.div(function (te) {
    var ee = te.theme;
    return {
      minHeight: '2em',
      fontSize: ''.concat(ee.typography.size.s1, 'px'),
      color: ee.barTextColor,
    };
  }),
  ErrorIcon = styled(Icons)(function (te) {
    var ee = te.theme;
    return { width: 20, height: 20, marginBottom: '0.5rem', color: ee.color.mediumdark };
  }),
  ellipsis = keyframes(
    _templateObject2 ||
      (_templateObject2 = _taggedTemplateLiteral$4([
        `
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`,
      ])),
  ),
  Ellipsis = styled.span({
    '&::after': {
      content: "'...'",
      animation: ''.concat(ellipsis, ' 1s linear infinite'),
      animationDelay: '1s',
      display: 'inline-block',
      width: '1em',
      height: 'auto',
    },
  }),
  PureLoader = function (ee) {
    var re = ee.progress,
      ae = ee.error,
      ne = ee.size,
      oe = __rest(ee, ['progress', 'error', 'size']);
    if (ae)
      return React__default.createElement(
        ProgressWrapper,
        Object.assign({ 'aria-label': ae.toString(), 'aria-live': 'polite', role: 'status' }, oe),
        React__default.createElement(ErrorIcon, { icon: 'lightningoff' }),
        React__default.createElement(ProgressMessage, null, ae.message),
      );
    if (re) {
      var ie = re.value,
        le = re.modules,
        ce = re.message;
      return (
        le && (ce += ' '.concat(le.complete, ' / ').concat(le.total, ' modules')),
        React__default.createElement(
          ProgressWrapper,
          Object.assign(
            {
              'aria-label': 'Content is loading...',
              'aria-live': 'polite',
              'aria-valuemin': 0,
              'aria-valuemax': 100,
              'aria-valuenow': ie * 100,
              'aria-valuetext': ce,
              role: 'progressbar',
            },
            oe,
          ),
          React__default.createElement(
            ProgressTrack,
            null,
            React__default.createElement(ProgressBar, {
              style: { width: ''.concat(ie * 100, '%') },
            }),
          ),
          React__default.createElement(
            ProgressMessage,
            null,
            ce,
            ie < 1 && React__default.createElement(Ellipsis, { key: ce }),
          ),
        )
      );
    }
    return React__default.createElement(
      LoaderWrapper,
      Object.assign(
        { 'aria-label': 'Content is loading...', 'aria-live': 'polite', role: 'status', size: ne },
        oe,
      ),
    );
  },
  Loader = function (ee) {
    var re = p$3(void 0),
      ae = _slicedToArray$4(re, 2),
      ne = ae[0],
      oe = ae[1],
      ie = p$3(void 0),
      le = _slicedToArray$4(ie, 2),
      ce = le[0],
      se = le[1];
    return (
      h$3(function () {
        if (!(CONFIG_TYPE !== 'DEVELOPMENT' || !EventSource)) {
          var ue = new EventSource('/progress'),
            pe;
          return (
            (ue.onmessage = function (fe) {
              try {
                (pe = JSON.parse(fe.data)), oe(pe);
              } catch (ge) {
                se(ge), ue.close();
              }
            }),
            (ue.onerror = function () {
              pe && pe.value !== 1 && se(new Error('Connection closed')), ue.close();
            }),
            function () {
              return ue.close();
            }
          );
        }
      }, []),
      React__default.createElement(PureLoader, Object.assign({ progress: ne, error: ce }, ee))
    );
  },
  PREVIEW_URL = window_1.PREVIEW_URL,
  BASE_URL = PREVIEW_URL || 'iframe.html',
  StoryError;
(function (te) {
  te.NO_STORY = 'No component or story to display';
})(StoryError || (StoryError = {}));
var MISSING_STORY = function (ee) {
    return ee ? 'Story "'.concat(ee, `" doesn't exist.`) : StoryError.NO_STORY;
  },
  InlineStory = function (ee) {
    var re = ee.storyFn,
      ae = ee.height,
      ne = ee.id;
    return React__default.createElement(
      p$2,
      null,
      ae
        ? React__default.createElement(
            'style',
            null,
            '#story--'
              .concat(ne, ' { min-height: ')
              .concat(ae, '; transform: translateZ(0); overflow: auto }'),
          )
        : null,
      React__default.createElement(
        p$2,
        null,
        re ? h$2(re) : React__default.createElement(EmptyBlock, null, MISSING_STORY(ne)),
      ),
    );
  },
  IFrameStory = function (ee) {
    var re = ee.id,
      ae = ee.title,
      ne = ee.height,
      oe = ne === void 0 ? '500px' : ne;
    return React__default.createElement(
      'div',
      { style: { width: '100%', height: oe } },
      React__default.createElement(ZoomContext.Consumer, null, function (ie) {
        var le = ie.scale;
        return React__default.createElement(IFrame, {
          key: 'iframe',
          id: 'iframe--'.concat(re),
          title: ae,
          src: getStoryHref(BASE_URL, re, { viewMode: 'story' }),
          allowFullScreen: !0,
          scale: le,
          style: { width: '100%', height: '100%', border: '0 none' },
        });
      }),
    );
  },
  Story$1 = function (ee) {
    ee.children;
    var re = ee.error,
      ae = ee.inline,
      ne = __rest(ee, ['children', 'error', 'inline']),
      oe = ne.id,
      ie = ne.title,
      le = ne.height;
    return re
      ? React__default.createElement(EmptyBlock, null, re)
      : ae
      ? React__default.createElement(InlineStory, Object.assign({}, ne))
      : React__default.createElement(IFrameStory, { id: oe, title: ie, height: le });
  },
  StorySkeleton = function () {
    return React__default.createElement(Loader, null);
  },
  ChildrenContainer = styled.div(
    function (te) {
      var ee = te.isColumn,
        re = te.columns,
        ae = te.layout;
      return {
        display: ee || !re ? 'block' : 'flex',
        position: 'relative',
        flexWrap: 'wrap',
        overflow: 'auto',
        flexDirection: ee ? 'column' : 'row',
        '& .innerZoomElementWrapper > *': ee
          ? { width: ae !== 'fullscreen' ? 'calc(100% - 20px)' : '100%', display: 'block' }
          : {
              maxWidth: ae !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'inline-block',
            },
      };
    },
    function (te) {
      var ee = te.layout,
        re = ee === void 0 ? 'padded' : ee;
      return re === 'centered' || re === 'padded'
        ? {
            padding: '30px 20px',
            margin: -10,
            '& .innerZoomElementWrapper > *': {
              width: 'auto',
              border: '10px solid transparent!important',
            },
          }
        : {};
    },
    function (te) {
      var ee = te.layout,
        re = ee === void 0 ? 'padded' : ee;
      return re === 'centered'
        ? {
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }
        : {};
    },
    function (te) {
      var ee = te.columns;
      return ee && ee > 1
        ? { '.innerZoomElementWrapper > *': { minWidth: 'calc(100% / '.concat(ee, ' - 20px)') } }
        : {};
    },
  ),
  StyledSource = styled(Source$1)(function (te) {
    var ee = te.theme;
    return {
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: ee.appBorderRadius,
      borderBottomRightRadius: ee.appBorderRadius,
      border: 'none',
      background:
        ee.base === 'light' ? 'rgba(0, 0, 0, 0.85)' : curriedDarken$1(0.05, ee.background.content),
      color: ee.color.lightest,
      button: {
        background:
          ee.base === 'light'
            ? 'rgba(0, 0, 0, 0.85)'
            : curriedDarken$1(0.05, ee.background.content),
      },
    };
  }),
  PreviewContainer = styled.div(
    function (te) {
      var ee = te.theme,
        re = te.withSource,
        ae = te.isExpanded;
      return Object.assign(
        Object.assign(
          { position: 'relative', overflow: 'hidden', margin: '25px 0 40px' },
          getBlockBackgroundStyle(ee),
        ),
        {
          borderBottomLeftRadius: re && ae && 0,
          borderBottomRightRadius: re && ae && 0,
          borderBottomWidth: ae && 0,
        },
      );
    },
    function (te) {
      var ee = te.withToolbar;
      return ee && { paddingTop: 40 };
    },
  ),
  getSource = function (ee, re, ae) {
    switch (!0) {
      case !!(ee && ee.error):
        return {
          source: null,
          actionItem: {
            title: 'No code available',
            className: 'docblock-code-toggle docblock-code-toggle--disabled',
            disabled: !0,
            onClick: function () {
              return ae(!1);
            },
          },
        };
      case re:
        return {
          source: React__default.createElement(StyledSource, Object.assign({}, ee, { dark: !0 })),
          actionItem: {
            title: 'Hide code',
            className: 'docblock-code-toggle docblock-code-toggle--expanded',
            onClick: function () {
              return ae(!1);
            },
          },
        };
      default:
        return {
          source: React__default.createElement(StyledSource, Object.assign({}, ee, { dark: !0 })),
          actionItem: {
            title: 'Show code',
            className: 'docblock-code-toggle',
            onClick: function () {
              return ae(!0);
            },
          },
        };
    }
  };
function getStoryId$1(te) {
  if (k$2.count(te) === 1) {
    var ee = te;
    if (ee.props) return ee.props.id;
  }
  return null;
}
var PositionedToolbar = styled(Toolbar)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
  }),
  Relative = styled.div({ overflow: 'hidden', position: 'relative' }),
  getLayout = function (ee) {
    return ee.reduce(function (re, ae) {
      return (
        re ||
        (typeof ae == 'string' || typeof ae == 'number'
          ? 'padded'
          : (ae.props && ae.props.parameters && ae.props.parameters.layout) || 'padded')
      );
    }, void 0);
  },
  Preview$1 = function (ee) {
    var re = ee.isLoading,
      ae = ee.isColumn,
      ne = ee.columns,
      oe = ee.children,
      ie = ee.withSource,
      le = ee.withToolbar,
      ce = le === void 0 ? !1 : le,
      se = ee.isExpanded,
      ue = se === void 0 ? !1 : se,
      pe = ee.additionalActions,
      fe = ee.className,
      ge = __rest(ee, [
        'isLoading',
        'isColumn',
        'columns',
        'children',
        'withSource',
        'withToolbar',
        'isExpanded',
        'additionalActions',
        'className',
      ]),
      de = p$3(ue),
      me = _slicedToArray$4(de, 2),
      he = me[0],
      ve = me[1],
      ye = getSource(ie, he, ve),
      be = ye.source,
      _e = ye.actionItem,
      Te = p$3(1),
      Se = _slicedToArray$4(Te, 2),
      $e = Se[0],
      Ee = Se[1],
      xe = [fe].concat(['sbdocs', 'sbdocs-preview']),
      Ae = ie ? [_e] : [],
      Ce = p$3(pe ? _toConsumableArray$1(pe) : []),
      Re = _slicedToArray$4(Ce, 2),
      Oe = Re[0],
      we = Re[1],
      ke = [].concat(Ae, _toConsumableArray$1(Oe)),
      Be = getLayout(k$2.count(oe) === 1 ? [oe] : oe),
      Fe = window_1.window,
      je = T$2(function (Pe) {
        return __awaiter(
          void 0,
          void 0,
          void 0,
          regeneratorRuntime.mark(function Me() {
            var Ie, Ne;
            return regeneratorRuntime.wrap(function (ze) {
              for (;;)
                switch ((ze.prev = ze.next)) {
                  case 0:
                    return (
                      (ze.next = 2),
                      __vitePreload(
                        () => import('./syntaxhighlighter-b07b042a.f65e325f.js'),
                        [
                          'assets/syntaxhighlighter-b07b042a.f65e325f.js',
                          'assets/iframe.1f3a3e8b.js',
                          'assets/iframe.1f0201a9.css',
                          'assets/es.string.from-code-point.ab218ea7.js',
                          'assets/es.regexp.flags.50a65004.js',
                        ],
                      )
                    );
                  case 2:
                    (Ie = ze.sent), (Ne = Ie.createCopyToClipboardFunction), Ne();
                  case 5:
                  case 'end':
                    return ze.stop();
                }
            }, Me);
          }),
        );
      }, []),
      De = function (Me) {
        Me.preventDefault(),
          Oe.filter(function (Ie) {
            return Ie.title === 'Copied';
          }).length === 0 &&
            je(be.props.code).then(function () {
              we(
                [].concat(_toConsumableArray$1(Oe), [{ title: 'Copied', onClick: function () {} }]),
              ),
                Fe.setTimeout(function () {
                  return we(
                    Oe.filter(function (Ie) {
                      return Ie.title !== 'Copied';
                    }),
                  );
                }, 1500);
            });
      };
    return React__default.createElement(
      PreviewContainer,
      Object.assign({}, { withSource: ie, withToolbar: ce }, ge, { className: xe.join(' ') }),
      ce &&
        React__default.createElement(PositionedToolbar, {
          isLoading: re,
          border: !0,
          zoom: function (Me) {
            return Ee($e * Me);
          },
          resetZoom: function () {
            return Ee(1);
          },
          storyId: getStoryId$1(oe),
          baseUrl: './iframe.html',
        }),
      React__default.createElement(
        ZoomContext.Provider,
        { value: { scale: $e } },
        React__default.createElement(
          Relative,
          { className: 'docs-story', onCopyCapture: ie && De },
          React__default.createElement(
            ChildrenContainer,
            { isColumn: ae || !Array.isArray(oe), columns: ne, layout: Be },
            React__default.createElement(
              Zoom$1.Element,
              { scale: $e },
              Array.isArray(oe)
                ? oe.map(function (Pe, Me) {
                    return React__default.createElement('div', { key: Me }, Pe);
                  })
                : React__default.createElement('div', null, oe),
            ),
          ),
          React__default.createElement(ActionBar, { actionItems: ke }),
        ),
      ),
      ie && he && be,
    );
  },
  StyledPreview = styled(Preview$1)(function () {
    return { '.docs-story': { paddingTop: 32, paddingBottom: 40 } };
  }),
  PreviewSkeleton = function () {
    return React__default.createElement(
      StyledPreview,
      { isLoading: !0, withToolbar: !0 },
      React__default.createElement(StorySkeleton, null),
    );
  };
function arrayMap$2(te, ee) {
  for (var re = -1, ae = te == null ? 0 : te.length, ne = Array(ae); ++re < ae; )
    ne[re] = ee(te[re], re, te);
  return ne;
}
var _arrayMap = arrayMap$2;
function listCacheClear$1() {
  (this.__data__ = []), (this.size = 0);
}
var _listCacheClear = listCacheClear$1;
function eq$3(te, ee) {
  return te === ee || (te !== te && ee !== ee);
}
var eq_1 = eq$3,
  eq$2 = eq_1;
function assocIndexOf$4(te, ee) {
  for (var re = te.length; re--; ) if (eq$2(te[re][0], ee)) return re;
  return -1;
}
var _assocIndexOf = assocIndexOf$4,
  assocIndexOf$3 = _assocIndexOf,
  arrayProto = Array.prototype,
  splice = arrayProto.splice;
function listCacheDelete$1(te) {
  var ee = this.__data__,
    re = assocIndexOf$3(ee, te);
  if (re < 0) return !1;
  var ae = ee.length - 1;
  return re == ae ? ee.pop() : splice.call(ee, re, 1), --this.size, !0;
}
var _listCacheDelete = listCacheDelete$1,
  assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(te) {
  var ee = this.__data__,
    re = assocIndexOf$2(ee, te);
  return re < 0 ? void 0 : ee[re][1];
}
var _listCacheGet = listCacheGet$1,
  assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(te) {
  return assocIndexOf$1(this.__data__, te) > -1;
}
var _listCacheHas = listCacheHas$1,
  assocIndexOf = _assocIndexOf;
function listCacheSet$1(te, ee) {
  var re = this.__data__,
    ae = assocIndexOf(re, te);
  return ae < 0 ? (++this.size, re.push([te, ee])) : (re[ae][1] = ee), this;
}
var _listCacheSet = listCacheSet$1,
  listCacheClear = _listCacheClear,
  listCacheDelete = _listCacheDelete,
  listCacheGet = _listCacheGet,
  listCacheHas = _listCacheHas,
  listCacheSet = _listCacheSet;
function ListCache$4(te) {
  var ee = -1,
    re = te == null ? 0 : te.length;
  for (this.clear(); ++ee < re; ) {
    var ae = te[ee];
    this.set(ae[0], ae[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype.delete = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4,
  ListCache$3 = _ListCache;
function stackClear$1() {
  (this.__data__ = new ListCache$3()), (this.size = 0);
}
var _stackClear = stackClear$1;
function stackDelete$1(te) {
  var ee = this.__data__,
    re = ee.delete(te);
  return (this.size = ee.size), re;
}
var _stackDelete = stackDelete$1;
function stackGet$1(te) {
  return this.__data__.get(te);
}
var _stackGet = stackGet$1;
function stackHas$1(te) {
  return this.__data__.has(te);
}
var _stackHas = stackHas$1,
  freeGlobal$1 =
    _typeof(commonjsGlobal) == 'object' &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal,
  _freeGlobal = freeGlobal$1,
  freeGlobal = _freeGlobal,
  freeSelf =
    (typeof self > 'u' ? 'undefined' : _typeof(self)) == 'object' &&
    self &&
    self.Object === Object &&
    self,
  root$8 = freeGlobal || freeSelf || Function('return this')(),
  _root = root$8,
  root$7 = _root,
  Symbol$6 = root$7.Symbol,
  _Symbol = Symbol$6,
  Symbol$5 = _Symbol,
  objectProto$e = Object.prototype,
  hasOwnProperty$b = objectProto$e.hasOwnProperty,
  nativeObjectToString$1 = objectProto$e.toString,
  symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : void 0;
function getRawTag$1(te) {
  var ee = hasOwnProperty$b.call(te, symToStringTag$1),
    re = te[symToStringTag$1];
  try {
    te[symToStringTag$1] = void 0;
    var ae = !0;
  } catch {}
  var ne = nativeObjectToString$1.call(te);
  return ae && (ee ? (te[symToStringTag$1] = re) : delete te[symToStringTag$1]), ne;
}
var _getRawTag = getRawTag$1,
  objectProto$d = Object.prototype,
  nativeObjectToString = objectProto$d.toString;
function objectToString$1(te) {
  return nativeObjectToString.call(te);
}
var _objectToString = objectToString$1,
  Symbol$4 = _Symbol,
  getRawTag = _getRawTag,
  objectToString = _objectToString,
  nullTag = '[object Null]',
  undefinedTag = '[object Undefined]',
  symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
function baseGetTag$5(te) {
  return te == null
    ? te === void 0
      ? undefinedTag
      : nullTag
    : symToStringTag && symToStringTag in Object(te)
    ? getRawTag(te)
    : objectToString(te);
}
var _baseGetTag = baseGetTag$5;
function isObject$7(te) {
  var ee = _typeof(te);
  return te != null && (ee == 'object' || ee == 'function');
}
var isObject_1 = isObject$7,
  baseGetTag$4 = _baseGetTag,
  isObject$6 = isObject_1,
  asyncTag = '[object AsyncFunction]',
  funcTag$2 = '[object Function]',
  genTag$1 = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';
function isFunction$2(te) {
  if (!isObject$6(te)) return !1;
  var ee = baseGetTag$4(te);
  return ee == funcTag$2 || ee == genTag$1 || ee == asyncTag || ee == proxyTag;
}
var isFunction_1 = isFunction$2,
  root$6 = _root,
  coreJsData$1 = root$6['__core-js_shared__'],
  _coreJsData = coreJsData$1,
  coreJsData = _coreJsData,
  maskSrcKey = (function () {
    var te = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '');
    return te ? 'Symbol(src)_1.' + te : '';
  })();
function isMasked$1(te) {
  return !!maskSrcKey && maskSrcKey in te;
}
var _isMasked = isMasked$1,
  funcProto$1 = Function.prototype,
  funcToString$1 = funcProto$1.toString;
function toSource$2(te) {
  if (te != null) {
    try {
      return funcToString$1.call(te);
    } catch {}
    try {
      return te + '';
    } catch {}
  }
  return '';
}
var _toSource = toSource$2,
  isFunction$1 = isFunction_1,
  isMasked = _isMasked,
  isObject$5 = isObject_1,
  toSource$1 = _toSource,
  reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
  reIsHostCtor = /^\[object .+?Constructor\]$/,
  funcProto = Function.prototype,
  objectProto$c = Object.prototype,
  funcToString = funcProto.toString,
  hasOwnProperty$a = objectProto$c.hasOwnProperty,
  reIsNative = RegExp(
    '^' +
      funcToString
        .call(hasOwnProperty$a)
        .replace(reRegExpChar, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$',
  );
function baseIsNative$1(te) {
  if (!isObject$5(te) || isMasked(te)) return !1;
  var ee = isFunction$1(te) ? reIsNative : reIsHostCtor;
  return ee.test(toSource$1(te));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(te, ee) {
  return te == null ? void 0 : te[ee];
}
var _getValue = getValue$1,
  baseIsNative = _baseIsNative,
  getValue = _getValue;
function getNative$7(te, ee) {
  var re = getValue(te, ee);
  return baseIsNative(re) ? re : void 0;
}
var _getNative = getNative$7,
  getNative$6 = _getNative,
  root$5 = _root,
  Map$4 = getNative$6(root$5, 'Map'),
  _Map = Map$4,
  getNative$5 = _getNative,
  nativeCreate$4 = getNative$5(Object, 'create'),
  _nativeCreate = nativeCreate$4,
  nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  (this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {}), (this.size = 0);
}
var _hashClear = hashClear$1;
function hashDelete$1(te) {
  var ee = this.has(te) && delete this.__data__[te];
  return (this.size -= ee ? 1 : 0), ee;
}
var _hashDelete = hashDelete$1,
  nativeCreate$2 = _nativeCreate,
  HASH_UNDEFINED$2 = '__lodash_hash_undefined__',
  objectProto$b = Object.prototype,
  hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function hashGet$1(te) {
  var ee = this.__data__;
  if (nativeCreate$2) {
    var re = ee[te];
    return re === HASH_UNDEFINED$2 ? void 0 : re;
  }
  return hasOwnProperty$9.call(ee, te) ? ee[te] : void 0;
}
var _hashGet = hashGet$1,
  nativeCreate$1 = _nativeCreate,
  objectProto$a = Object.prototype,
  hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function hashHas$1(te) {
  var ee = this.__data__;
  return nativeCreate$1 ? ee[te] !== void 0 : hasOwnProperty$8.call(ee, te);
}
var _hashHas = hashHas$1,
  nativeCreate = _nativeCreate,
  HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
function hashSet$1(te, ee) {
  var re = this.__data__;
  return (
    (this.size += this.has(te) ? 0 : 1),
    (re[te] = nativeCreate && ee === void 0 ? HASH_UNDEFINED$1 : ee),
    this
  );
}
var _hashSet = hashSet$1,
  hashClear = _hashClear,
  hashDelete = _hashDelete,
  hashGet = _hashGet,
  hashHas = _hashHas,
  hashSet = _hashSet;
function Hash$1(te) {
  var ee = -1,
    re = te == null ? 0 : te.length;
  for (this.clear(); ++ee < re; ) {
    var ae = te[ee];
    this.set(ae[0], ae[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype.delete = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1,
  Hash = _Hash,
  ListCache$2 = _ListCache,
  Map$3 = _Map;
function mapCacheClear$1() {
  (this.size = 0),
    (this.__data__ = { hash: new Hash(), map: new (Map$3 || ListCache$2)(), string: new Hash() });
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(te) {
  var ee = _typeof(te);
  return ee == 'string' || ee == 'number' || ee == 'symbol' || ee == 'boolean'
    ? te !== '__proto__'
    : te === null;
}
var _isKeyable = isKeyable$1,
  isKeyable = _isKeyable;
function getMapData$4(te, ee) {
  var re = te.__data__;
  return isKeyable(ee) ? re[typeof ee == 'string' ? 'string' : 'hash'] : re.map;
}
var _getMapData = getMapData$4,
  getMapData$3 = _getMapData;
function mapCacheDelete$1(te) {
  var ee = getMapData$3(this, te).delete(te);
  return (this.size -= ee ? 1 : 0), ee;
}
var _mapCacheDelete = mapCacheDelete$1,
  getMapData$2 = _getMapData;
function mapCacheGet$1(te) {
  return getMapData$2(this, te).get(te);
}
var _mapCacheGet = mapCacheGet$1,
  getMapData$1 = _getMapData;
function mapCacheHas$1(te) {
  return getMapData$1(this, te).has(te);
}
var _mapCacheHas = mapCacheHas$1,
  getMapData = _getMapData;
function mapCacheSet$1(te, ee) {
  var re = getMapData(this, te),
    ae = re.size;
  return re.set(te, ee), (this.size += re.size == ae ? 0 : 1), this;
}
var _mapCacheSet = mapCacheSet$1,
  mapCacheClear = _mapCacheClear,
  mapCacheDelete = _mapCacheDelete,
  mapCacheGet = _mapCacheGet,
  mapCacheHas = _mapCacheHas,
  mapCacheSet = _mapCacheSet;
function MapCache$3(te) {
  var ee = -1,
    re = te == null ? 0 : te.length;
  for (this.clear(); ++ee < re; ) {
    var ae = te[ee];
    this.set(ae[0], ae[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype.delete = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3,
  ListCache$1 = _ListCache,
  Map$2 = _Map,
  MapCache$2 = _MapCache,
  LARGE_ARRAY_SIZE$1 = 200;
function stackSet$1(te, ee) {
  var re = this.__data__;
  if (re instanceof ListCache$1) {
    var ae = re.__data__;
    if (!Map$2 || ae.length < LARGE_ARRAY_SIZE$1 - 1)
      return ae.push([te, ee]), (this.size = ++re.size), this;
    re = this.__data__ = new MapCache$2(ae);
  }
  return re.set(te, ee), (this.size = re.size), this;
}
var _stackSet = stackSet$1,
  ListCache = _ListCache,
  stackClear = _stackClear,
  stackDelete = _stackDelete,
  stackGet = _stackGet,
  stackHas = _stackHas,
  stackSet = _stackSet;
function Stack$3(te) {
  var ee = (this.__data__ = new ListCache(te));
  this.size = ee.size;
}
Stack$3.prototype.clear = stackClear;
Stack$3.prototype.delete = stackDelete;
Stack$3.prototype.get = stackGet;
Stack$3.prototype.has = stackHas;
Stack$3.prototype.set = stackSet;
var _Stack = Stack$3,
  HASH_UNDEFINED = '__lodash_hash_undefined__';
function setCacheAdd$1(te) {
  return this.__data__.set(te, HASH_UNDEFINED), this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(te) {
  return this.__data__.has(te);
}
var _setCacheHas = setCacheHas$1,
  MapCache$1 = _MapCache,
  setCacheAdd = _setCacheAdd,
  setCacheHas = _setCacheHas;
function SetCache$2(te) {
  var ee = -1,
    re = te == null ? 0 : te.length;
  for (this.__data__ = new MapCache$1(); ++ee < re; ) this.add(te[ee]);
}
SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd;
SetCache$2.prototype.has = setCacheHas;
var _SetCache = SetCache$2;
function arraySome$1(te, ee) {
  for (var re = -1, ae = te == null ? 0 : te.length; ++re < ae; ) if (ee(te[re], re, te)) return !0;
  return !1;
}
var _arraySome = arraySome$1;
function cacheHas$2(te, ee) {
  return te.has(ee);
}
var _cacheHas = cacheHas$2,
  SetCache$1 = _SetCache,
  arraySome = _arraySome,
  cacheHas$1 = _cacheHas,
  COMPARE_PARTIAL_FLAG$5 = 1,
  COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(te, ee, re, ae, ne, oe) {
  var ie = re & COMPARE_PARTIAL_FLAG$5,
    le = te.length,
    ce = ee.length;
  if (le != ce && !(ie && ce > le)) return !1;
  var se = oe.get(te),
    ue = oe.get(ee);
  if (se && ue) return se == ee && ue == te;
  var pe = -1,
    fe = !0,
    ge = re & COMPARE_UNORDERED_FLAG$3 ? new SetCache$1() : void 0;
  for (oe.set(te, ee), oe.set(ee, te); ++pe < le; ) {
    var de = te[pe],
      me = ee[pe];
    if (ae) var he = ie ? ae(me, de, pe, ee, te, oe) : ae(de, me, pe, te, ee, oe);
    if (he !== void 0) {
      if (he) continue;
      fe = !1;
      break;
    }
    if (ge) {
      if (
        !arraySome(ee, function (ve, ye) {
          if (!cacheHas$1(ge, ye) && (de === ve || ne(de, ve, re, ae, oe))) return ge.push(ye);
        })
      ) {
        fe = !1;
        break;
      }
    } else if (!(de === me || ne(de, me, re, ae, oe))) {
      fe = !1;
      break;
    }
  }
  return oe.delete(te), oe.delete(ee), fe;
}
var _equalArrays = equalArrays$2,
  root$4 = _root,
  Uint8Array$2 = root$4.Uint8Array,
  _Uint8Array = Uint8Array$2;
function mapToArray$1(te) {
  var ee = -1,
    re = Array(te.size);
  return (
    te.forEach(function (ae, ne) {
      re[++ee] = [ne, ae];
    }),
    re
  );
}
var _mapToArray = mapToArray$1;
function setToArray$3(te) {
  var ee = -1,
    re = Array(te.size);
  return (
    te.forEach(function (ae) {
      re[++ee] = ae;
    }),
    re
  );
}
var _setToArray = setToArray$3,
  Symbol$3 = _Symbol,
  Uint8Array$1 = _Uint8Array,
  eq$1 = eq_1,
  equalArrays$1 = _equalArrays,
  mapToArray = _mapToArray,
  setToArray$2 = _setToArray,
  COMPARE_PARTIAL_FLAG$4 = 1,
  COMPARE_UNORDERED_FLAG$2 = 2,
  boolTag$3 = '[object Boolean]',
  dateTag$3 = '[object Date]',
  errorTag$2 = '[object Error]',
  mapTag$5 = '[object Map]',
  numberTag$3 = '[object Number]',
  regexpTag$3 = '[object RegExp]',
  setTag$5 = '[object Set]',
  stringTag$3 = '[object String]',
  symbolTag$3 = '[object Symbol]',
  arrayBufferTag$3 = '[object ArrayBuffer]',
  dataViewTag$4 = '[object DataView]',
  symbolProto$2 = Symbol$3 ? Symbol$3.prototype : void 0,
  symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function equalByTag$1(te, ee, re, ae, ne, oe, ie) {
  switch (re) {
    case dataViewTag$4:
      if (te.byteLength != ee.byteLength || te.byteOffset != ee.byteOffset) return !1;
      (te = te.buffer), (ee = ee.buffer);
    case arrayBufferTag$3:
      return !(te.byteLength != ee.byteLength || !oe(new Uint8Array$1(te), new Uint8Array$1(ee)));
    case boolTag$3:
    case dateTag$3:
    case numberTag$3:
      return eq$1(+te, +ee);
    case errorTag$2:
      return te.name == ee.name && te.message == ee.message;
    case regexpTag$3:
    case stringTag$3:
      return te == ee + '';
    case mapTag$5:
      var le = mapToArray;
    case setTag$5:
      var ce = ae & COMPARE_PARTIAL_FLAG$4;
      if ((le || (le = setToArray$2), te.size != ee.size && !ce)) return !1;
      var se = ie.get(te);
      if (se) return se == ee;
      (ae |= COMPARE_UNORDERED_FLAG$2), ie.set(te, ee);
      var ue = equalArrays$1(le(te), le(ee), ae, ne, oe, ie);
      return ie.delete(te), ue;
    case symbolTag$3:
      if (symbolValueOf$1) return symbolValueOf$1.call(te) == symbolValueOf$1.call(ee);
  }
  return !1;
}
var _equalByTag = equalByTag$1;
function arrayPush$2(te, ee) {
  for (var re = -1, ae = ee.length, ne = te.length; ++re < ae; ) te[ne + re] = ee[re];
  return te;
}
var _arrayPush = arrayPush$2,
  isArray$9 = Array.isArray,
  isArray_1 = isArray$9,
  arrayPush$1 = _arrayPush,
  isArray$8 = isArray_1;
function baseGetAllKeys$2(te, ee, re) {
  var ae = ee(te);
  return isArray$8(te) ? ae : arrayPush$1(ae, re(te));
}
var _baseGetAllKeys = baseGetAllKeys$2;
function arrayFilter$1(te, ee) {
  for (var re = -1, ae = te == null ? 0 : te.length, ne = 0, oe = []; ++re < ae; ) {
    var ie = te[re];
    ee(ie, re, te) && (oe[ne++] = ie);
  }
  return oe;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2,
  arrayFilter = _arrayFilter,
  stubArray$1 = stubArray_1,
  objectProto$9 = Object.prototype,
  propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable,
  nativeGetSymbols$1 = Object.getOwnPropertySymbols,
  getSymbols$3 = nativeGetSymbols$1
    ? function (te) {
        return te == null
          ? []
          : ((te = Object(te)),
            arrayFilter(nativeGetSymbols$1(te), function (ee) {
              return propertyIsEnumerable$1.call(te, ee);
            }));
      }
    : stubArray$1,
  _getSymbols = getSymbols$3;
function baseTimes$1(te, ee) {
  for (var re = -1, ae = Array(te); ++re < te; ) ae[re] = ee(re);
  return ae;
}
var _baseTimes = baseTimes$1;
function isObjectLike$7(te) {
  return te != null && _typeof(te) == 'object';
}
var isObjectLike_1 = isObjectLike$7,
  baseGetTag$3 = _baseGetTag,
  isObjectLike$6 = isObjectLike_1,
  argsTag$3 = '[object Arguments]';
function baseIsArguments$1(te) {
  return isObjectLike$6(te) && baseGetTag$3(te) == argsTag$3;
}
var _baseIsArguments = baseIsArguments$1,
  baseIsArguments = _baseIsArguments,
  isObjectLike$5 = isObjectLike_1,
  objectProto$8 = Object.prototype,
  hasOwnProperty$7 = objectProto$8.hasOwnProperty,
  propertyIsEnumerable = objectProto$8.propertyIsEnumerable,
  isArguments$2 = baseIsArguments(
    (function () {
      return arguments;
    })(),
  )
    ? baseIsArguments
    : function (te) {
        return (
          isObjectLike$5(te) &&
          hasOwnProperty$7.call(te, 'callee') &&
          !propertyIsEnumerable.call(te, 'callee')
        );
      },
  isArguments_1 = isArguments$2,
  isBuffer$3 = { exports: {} };
function stubFalse() {
  return !1;
}
var stubFalse_1 = stubFalse;
(function (te, ee) {
  var re = _root,
    ae = stubFalse_1,
    ne = ee && !ee.nodeType && ee,
    oe = ne && !0 && te && !te.nodeType && te,
    ie = oe && oe.exports === ne,
    le = ie ? re.Buffer : void 0,
    ce = le ? le.isBuffer : void 0,
    se = ce || ae;
  te.exports = se;
})(isBuffer$3, isBuffer$3.exports);
var MAX_SAFE_INTEGER$1 = 9007199254740991,
  reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$3(te, ee) {
  var re = _typeof(te);
  return (
    (ee = ee == null ? MAX_SAFE_INTEGER$1 : ee),
    !!ee &&
      (re == 'number' || (re != 'symbol' && reIsUint.test(te))) &&
      te > -1 &&
      te % 1 == 0 &&
      te < ee
  );
}
var _isIndex = isIndex$3,
  MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(te) {
  return typeof te == 'number' && te > -1 && te % 1 == 0 && te <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3,
  baseGetTag$2 = _baseGetTag,
  isLength$2 = isLength_1,
  isObjectLike$4 = isObjectLike_1,
  argsTag$2 = '[object Arguments]',
  arrayTag$2 = '[object Array]',
  boolTag$2 = '[object Boolean]',
  dateTag$2 = '[object Date]',
  errorTag$1 = '[object Error]',
  funcTag$1 = '[object Function]',
  mapTag$4 = '[object Map]',
  numberTag$2 = '[object Number]',
  objectTag$3 = '[object Object]',
  regexpTag$2 = '[object RegExp]',
  setTag$4 = '[object Set]',
  stringTag$2 = '[object String]',
  weakMapTag$2 = '[object WeakMap]',
  arrayBufferTag$2 = '[object ArrayBuffer]',
  dataViewTag$3 = '[object DataView]',
  float32Tag$2 = '[object Float32Array]',
  float64Tag$2 = '[object Float64Array]',
  int8Tag$2 = '[object Int8Array]',
  int16Tag$2 = '[object Int16Array]',
  int32Tag$2 = '[object Int32Array]',
  uint8Tag$2 = '[object Uint8Array]',
  uint8ClampedTag$2 = '[object Uint8ClampedArray]',
  uint16Tag$2 = '[object Uint16Array]',
  uint32Tag$2 = '[object Uint32Array]',
  typedArrayTags = {};
typedArrayTags[float32Tag$2] =
  typedArrayTags[float64Tag$2] =
  typedArrayTags[int8Tag$2] =
  typedArrayTags[int16Tag$2] =
  typedArrayTags[int32Tag$2] =
  typedArrayTags[uint8Tag$2] =
  typedArrayTags[uint8ClampedTag$2] =
  typedArrayTags[uint16Tag$2] =
  typedArrayTags[uint32Tag$2] =
    !0;
typedArrayTags[argsTag$2] =
  typedArrayTags[arrayTag$2] =
  typedArrayTags[arrayBufferTag$2] =
  typedArrayTags[boolTag$2] =
  typedArrayTags[dataViewTag$3] =
  typedArrayTags[dateTag$2] =
  typedArrayTags[errorTag$1] =
  typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag$4] =
  typedArrayTags[numberTag$2] =
  typedArrayTags[objectTag$3] =
  typedArrayTags[regexpTag$2] =
  typedArrayTags[setTag$4] =
  typedArrayTags[stringTag$2] =
  typedArrayTags[weakMapTag$2] =
    !1;
function baseIsTypedArray$1(te) {
  return isObjectLike$4(te) && isLength$2(te.length) && !!typedArrayTags[baseGetTag$2(te)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$3(te) {
  return function (ee) {
    return te(ee);
  };
}
var _baseUnary = baseUnary$3,
  _nodeUtil = { exports: {} };
(function (te, ee) {
  var re = _freeGlobal,
    ae = ee && !ee.nodeType && ee,
    ne = ae && !0 && te && !te.nodeType && te,
    oe = ne && ne.exports === ae,
    ie = oe && re.process,
    le = (function () {
      try {
        var ce = ne && ne.require && ne.require('util').types;
        return ce || (ie && ie.binding && ie.binding('util'));
      } catch {}
    })();
  te.exports = le;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray,
  baseUnary$2 = _baseUnary,
  nodeUtil$2 = _nodeUtil.exports,
  nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray,
  isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray,
  isTypedArray_1 = isTypedArray$2,
  baseTimes = _baseTimes,
  isArguments$1 = isArguments_1,
  isArray$7 = isArray_1,
  isBuffer$2 = isBuffer$3.exports,
  isIndex$2 = _isIndex,
  isTypedArray$1 = isTypedArray_1,
  objectProto$7 = Object.prototype,
  hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function arrayLikeKeys$2(te, ee) {
  var re = isArray$7(te),
    ae = !re && isArguments$1(te),
    ne = !re && !ae && isBuffer$2(te),
    oe = !re && !ae && !ne && isTypedArray$1(te),
    ie = re || ae || ne || oe,
    le = ie ? baseTimes(te.length, String) : [],
    ce = le.length;
  for (var se in te)
    (ee || hasOwnProperty$6.call(te, se)) &&
      !(
        ie &&
        (se == 'length' ||
          (ne && (se == 'offset' || se == 'parent')) ||
          (oe && (se == 'buffer' || se == 'byteLength' || se == 'byteOffset')) ||
          isIndex$2(se, ce))
      ) &&
      le.push(se);
  return le;
}
var _arrayLikeKeys = arrayLikeKeys$2,
  objectProto$6 = Object.prototype;
function isPrototype$3(te) {
  var ee = te && te.constructor,
    re = (typeof ee == 'function' && ee.prototype) || objectProto$6;
  return te === re;
}
var _isPrototype = isPrototype$3;
function overArg$2(te, ee) {
  return function (re) {
    return te(ee(re));
  };
}
var _overArg = overArg$2,
  overArg$1 = _overArg,
  nativeKeys$1 = overArg$1(Object.keys, Object),
  _nativeKeys = nativeKeys$1,
  isPrototype$2 = _isPrototype,
  nativeKeys = _nativeKeys,
  objectProto$5 = Object.prototype,
  hasOwnProperty$5 = objectProto$5.hasOwnProperty;
function baseKeys$1(te) {
  if (!isPrototype$2(te)) return nativeKeys(te);
  var ee = [];
  for (var re in Object(te)) hasOwnProperty$5.call(te, re) && re != 'constructor' && ee.push(re);
  return ee;
}
var _baseKeys = baseKeys$1,
  isFunction$3 = isFunction_1,
  isLength$1 = isLength_1;
function isArrayLike$2(te) {
  return te != null && isLength$1(te.length) && !isFunction$3(te);
}
var isArrayLike_1 = isArrayLike$2,
  arrayLikeKeys$1 = _arrayLikeKeys,
  baseKeys = _baseKeys,
  isArrayLike$1 = isArrayLike_1;
function keys$4(te) {
  return isArrayLike$1(te) ? arrayLikeKeys$1(te) : baseKeys(te);
}
var keys_1 = keys$4,
  baseGetAllKeys$1 = _baseGetAllKeys,
  getSymbols$2 = _getSymbols,
  keys$3 = keys_1;
function getAllKeys$2(te) {
  return baseGetAllKeys$1(te, keys$3, getSymbols$2);
}
var _getAllKeys = getAllKeys$2,
  getAllKeys$1 = _getAllKeys,
  COMPARE_PARTIAL_FLAG$3 = 1,
  objectProto$4 = Object.prototype,
  hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function equalObjects$1(te, ee, re, ae, ne, oe) {
  var ie = re & COMPARE_PARTIAL_FLAG$3,
    le = getAllKeys$1(te),
    ce = le.length,
    se = getAllKeys$1(ee),
    ue = se.length;
  if (ce != ue && !ie) return !1;
  for (var pe = ce; pe--; ) {
    var fe = le[pe];
    if (!(ie ? fe in ee : hasOwnProperty$4.call(ee, fe))) return !1;
  }
  var ge = oe.get(te),
    de = oe.get(ee);
  if (ge && de) return ge == ee && de == te;
  var me = !0;
  oe.set(te, ee), oe.set(ee, te);
  for (var he = ie; ++pe < ce; ) {
    fe = le[pe];
    var ve = te[fe],
      ye = ee[fe];
    if (ae) var be = ie ? ae(ye, ve, fe, ee, te, oe) : ae(ve, ye, fe, te, ee, oe);
    if (!(be === void 0 ? ve === ye || ne(ve, ye, re, ae, oe) : be)) {
      me = !1;
      break;
    }
    he || (he = fe == 'constructor');
  }
  if (me && !he) {
    var _e = te.constructor,
      Te = ee.constructor;
    _e != Te &&
      'constructor' in te &&
      'constructor' in ee &&
      !(
        typeof _e == 'function' &&
        _e instanceof _e &&
        typeof Te == 'function' &&
        Te instanceof Te
      ) &&
      (me = !1);
  }
  return oe.delete(te), oe.delete(ee), me;
}
var _equalObjects = equalObjects$1,
  getNative$4 = _getNative,
  root$3 = _root,
  DataView$1 = getNative$4(root$3, 'DataView'),
  _DataView = DataView$1,
  getNative$3 = _getNative,
  root$2 = _root,
  Promise$2 = getNative$3(root$2, 'Promise'),
  _Promise = Promise$2,
  getNative$2 = _getNative,
  root$1 = _root,
  Set$2 = getNative$2(root$1, 'Set'),
  _Set = Set$2,
  getNative$1 = _getNative,
  root = _root,
  WeakMap$1 = getNative$1(root, 'WeakMap'),
  _WeakMap = WeakMap$1,
  DataView$2 = _DataView,
  Map$1 = _Map,
  Promise$1 = _Promise,
  Set$1 = _Set,
  WeakMap$2 = _WeakMap,
  baseGetTag$1 = _baseGetTag,
  toSource = _toSource,
  mapTag$3 = '[object Map]',
  objectTag$2 = '[object Object]',
  promiseTag = '[object Promise]',
  setTag$3 = '[object Set]',
  weakMapTag$1 = '[object WeakMap]',
  dataViewTag$2 = '[object DataView]',
  dataViewCtorString = toSource(DataView$2),
  mapCtorString = toSource(Map$1),
  promiseCtorString = toSource(Promise$1),
  setCtorString = toSource(Set$1),
  weakMapCtorString = toSource(WeakMap$2),
  getTag$4 = baseGetTag$1;
((DataView$2 && getTag$4(new DataView$2(new ArrayBuffer(1))) != dataViewTag$2) ||
  (Map$1 && getTag$4(new Map$1()) != mapTag$3) ||
  (Promise$1 && getTag$4(Promise$1.resolve()) != promiseTag) ||
  (Set$1 && getTag$4(new Set$1()) != setTag$3) ||
  (WeakMap$2 && getTag$4(new WeakMap$2()) != weakMapTag$1)) &&
  (getTag$4 = function (ee) {
    var re = baseGetTag$1(ee),
      ae = re == objectTag$2 ? ee.constructor : void 0,
      ne = ae ? toSource(ae) : '';
    if (ne)
      switch (ne) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    return re;
  });
var _getTag = getTag$4,
  Stack$2 = _Stack,
  equalArrays = _equalArrays,
  equalByTag = _equalByTag,
  equalObjects = _equalObjects,
  getTag$3 = _getTag,
  isArray$6 = isArray_1,
  isBuffer$1 = isBuffer$3.exports,
  isTypedArray = isTypedArray_1,
  COMPARE_PARTIAL_FLAG$2 = 1,
  argsTag$1 = '[object Arguments]',
  arrayTag$1 = '[object Array]',
  objectTag$1 = '[object Object]',
  objectProto$3 = Object.prototype,
  hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseIsEqualDeep$1(te, ee, re, ae, ne, oe) {
  var ie = isArray$6(te),
    le = isArray$6(ee),
    ce = ie ? arrayTag$1 : getTag$3(te),
    se = le ? arrayTag$1 : getTag$3(ee);
  (ce = ce == argsTag$1 ? objectTag$1 : ce), (se = se == argsTag$1 ? objectTag$1 : se);
  var ue = ce == objectTag$1,
    pe = se == objectTag$1,
    fe = ce == se;
  if (fe && isBuffer$1(te)) {
    if (!isBuffer$1(ee)) return !1;
    (ie = !0), (ue = !1);
  }
  if (fe && !ue)
    return (
      oe || (oe = new Stack$2()),
      ie || isTypedArray(te)
        ? equalArrays(te, ee, re, ae, ne, oe)
        : equalByTag(te, ee, ce, re, ae, ne, oe)
    );
  if (!(re & COMPARE_PARTIAL_FLAG$2)) {
    var ge = ue && hasOwnProperty$3.call(te, '__wrapped__'),
      de = pe && hasOwnProperty$3.call(ee, '__wrapped__');
    if (ge || de) {
      var me = ge ? te.value() : te,
        he = de ? ee.value() : ee;
      return oe || (oe = new Stack$2()), ne(me, he, re, ae, oe);
    }
  }
  return fe ? (oe || (oe = new Stack$2()), equalObjects(te, ee, re, ae, ne, oe)) : !1;
}
var _baseIsEqualDeep = baseIsEqualDeep$1,
  baseIsEqualDeep = _baseIsEqualDeep,
  isObjectLike$3 = isObjectLike_1;
function baseIsEqual$2(te, ee, re, ae, ne) {
  return te === ee
    ? !0
    : te == null || ee == null || (!isObjectLike$3(te) && !isObjectLike$3(ee))
    ? te !== te && ee !== ee
    : baseIsEqualDeep(te, ee, re, ae, baseIsEqual$2, ne);
}
var _baseIsEqual = baseIsEqual$2,
  Stack$1 = _Stack,
  baseIsEqual$1 = _baseIsEqual,
  COMPARE_PARTIAL_FLAG$1 = 1,
  COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(te, ee, re, ae) {
  var ne = re.length,
    oe = ne,
    ie = !ae;
  if (te == null) return !oe;
  for (te = Object(te); ne--; ) {
    var le = re[ne];
    if (ie && le[2] ? le[1] !== te[le[0]] : !(le[0] in te)) return !1;
  }
  for (; ++ne < oe; ) {
    le = re[ne];
    var ce = le[0],
      se = te[ce],
      ue = le[1];
    if (ie && le[2]) {
      if (se === void 0 && !(ce in te)) return !1;
    } else {
      var pe = new Stack$1();
      if (ae) var fe = ae(se, ue, ce, te, ee, pe);
      if (
        !(fe === void 0
          ? baseIsEqual$1(ue, se, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, ae, pe)
          : fe)
      )
        return !1;
    }
  }
  return !0;
}
var _baseIsMatch = baseIsMatch$1,
  isObject$4 = isObject_1;
function isStrictComparable$2(te) {
  return te === te && !isObject$4(te);
}
var _isStrictComparable = isStrictComparable$2,
  isStrictComparable$1 = _isStrictComparable,
  keys$2 = keys_1;
function getMatchData$1(te) {
  for (var ee = keys$2(te), re = ee.length; re--; ) {
    var ae = ee[re],
      ne = te[ae];
    ee[re] = [ae, ne, isStrictComparable$1(ne)];
  }
  return ee;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(te, ee) {
  return function (re) {
    return re == null ? !1 : re[te] === ee && (ee !== void 0 || te in Object(re));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2,
  baseIsMatch = _baseIsMatch,
  getMatchData = _getMatchData,
  matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(te) {
  var ee = getMatchData(te);
  return ee.length == 1 && ee[0][2]
    ? matchesStrictComparable$1(ee[0][0], ee[0][1])
    : function (re) {
        return re === te || baseIsMatch(re, te, ee);
      };
}
var _baseMatches = baseMatches$1,
  baseGetTag = _baseGetTag,
  isObjectLike$2 = isObjectLike_1,
  symbolTag$2 = '[object Symbol]';
function isSymbol$3(te) {
  return _typeof(te) == 'symbol' || (isObjectLike$2(te) && baseGetTag(te) == symbolTag$2);
}
var isSymbol_1 = isSymbol$3,
  isArray$5 = isArray_1,
  isSymbol$2 = isSymbol_1,
  reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;
function isKey$3(te, ee) {
  if (isArray$5(te)) return !1;
  var re = _typeof(te);
  return re == 'number' || re == 'symbol' || re == 'boolean' || te == null || isSymbol$2(te)
    ? !0
    : reIsPlainProp.test(te) || !reIsDeepProp.test(te) || (ee != null && te in Object(ee));
}
var _isKey = isKey$3,
  MapCache = _MapCache,
  FUNC_ERROR_TEXT = 'Expected a function';
function memoize$1(te, ee) {
  if (typeof te != 'function' || (ee != null && typeof ee != 'function'))
    throw new TypeError(FUNC_ERROR_TEXT);
  var re = function ae() {
    var ne = arguments,
      oe = ee ? ee.apply(this, ne) : ne[0],
      ie = ae.cache;
    if (ie.has(oe)) return ie.get(oe);
    var le = te.apply(this, ne);
    return (ae.cache = ie.set(oe, le) || ie), le;
  };
  return (re.cache = new (memoize$1.Cache || MapCache)()), re;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1,
  memoize = memoize_1,
  MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(te) {
  var ee = memoize(te, function (ae) {
      return re.size === MAX_MEMOIZE_SIZE && re.clear(), ae;
    }),
    re = ee.cache;
  return ee;
}
var _memoizeCapped = memoizeCapped$1,
  memoizeCapped = _memoizeCapped,
  rePropName =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  reEscapeChar = /\\(\\)?/g,
  stringToPath$1 = memoizeCapped(function (te) {
    var ee = [];
    return (
      te.charCodeAt(0) === 46 && ee.push(''),
      te.replace(rePropName, function (re, ae, ne, oe) {
        ee.push(ne ? oe.replace(reEscapeChar, '$1') : ae || re);
      }),
      ee
    );
  }),
  _stringToPath = stringToPath$1,
  Symbol$2 = _Symbol,
  arrayMap$1 = _arrayMap,
  isArray$4 = isArray_1,
  isSymbol$1 = isSymbol_1,
  INFINITY$2 = 1 / 0,
  symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0,
  symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString$1(te) {
  if (typeof te == 'string') return te;
  if (isArray$4(te)) return arrayMap$1(te, baseToString$1) + '';
  if (isSymbol$1(te)) return symbolToString ? symbolToString.call(te) : '';
  var ee = te + '';
  return ee == '0' && 1 / te == -INFINITY$2 ? '-0' : ee;
}
var _baseToString = baseToString$1,
  baseToString = _baseToString;
function toString$1(te) {
  return te == null ? '' : baseToString(te);
}
var toString_1 = toString$1,
  isArray$3 = isArray_1,
  isKey$2 = _isKey,
  stringToPath = _stringToPath,
  toString = toString_1;
function castPath$4(te, ee) {
  return isArray$3(te) ? te : isKey$2(te, ee) ? [te] : stringToPath(toString(te));
}
var _castPath = castPath$4,
  isSymbol = isSymbol_1,
  INFINITY$1 = 1 / 0;
function toKey$5(te) {
  if (typeof te == 'string' || isSymbol(te)) return te;
  var ee = te + '';
  return ee == '0' && 1 / te == -INFINITY$1 ? '-0' : ee;
}
var _toKey = toKey$5,
  castPath$3 = _castPath,
  toKey$4 = _toKey;
function baseGet$3(te, ee) {
  ee = castPath$3(ee, te);
  for (var re = 0, ae = ee.length; te != null && re < ae; ) te = te[toKey$4(ee[re++])];
  return re && re == ae ? te : void 0;
}
var _baseGet = baseGet$3,
  baseGet$2 = _baseGet;
function get$1(te, ee, re) {
  var ae = te == null ? void 0 : baseGet$2(te, ee);
  return ae === void 0 ? re : ae;
}
var get_1 = get$1;
function baseHasIn$1(te, ee) {
  return te != null && ee in Object(te);
}
var _baseHasIn = baseHasIn$1,
  castPath$2 = _castPath,
  isArguments = isArguments_1,
  isArray$2 = isArray_1,
  isIndex$1 = _isIndex,
  isLength = isLength_1,
  toKey$3 = _toKey;
function hasPath$1(te, ee, re) {
  ee = castPath$2(ee, te);
  for (var ae = -1, ne = ee.length, oe = !1; ++ae < ne; ) {
    var ie = toKey$3(ee[ae]);
    if (!(oe = te != null && re(te, ie))) break;
    te = te[ie];
  }
  return oe || ++ae != ne
    ? oe
    : ((ne = te == null ? 0 : te.length),
      !!ne && isLength(ne) && isIndex$1(ie, ne) && (isArray$2(te) || isArguments(te)));
}
var _hasPath = hasPath$1,
  baseHasIn = _baseHasIn,
  hasPath = _hasPath;
function hasIn$1(te, ee) {
  return te != null && hasPath(te, ee, baseHasIn);
}
var hasIn_1 = hasIn$1,
  baseIsEqual = _baseIsEqual,
  get = get_1,
  hasIn = hasIn_1,
  isKey$1 = _isKey,
  isStrictComparable = _isStrictComparable,
  matchesStrictComparable = _matchesStrictComparable,
  toKey$2 = _toKey,
  COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(te, ee) {
  return isKey$1(te) && isStrictComparable(ee)
    ? matchesStrictComparable(toKey$2(te), ee)
    : function (re) {
        var ae = get(re, te);
        return ae === void 0 && ae === ee
          ? hasIn(re, te)
          : baseIsEqual(ee, ae, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$1(te) {
  return te;
}
var identity_1 = identity$1;
function baseProperty$1(te) {
  return function (ee) {
    return ee == null ? void 0 : ee[te];
  };
}
var _baseProperty = baseProperty$1,
  baseGet$1 = _baseGet;
function basePropertyDeep$1(te) {
  return function (ee) {
    return baseGet$1(ee, te);
  };
}
var _basePropertyDeep = basePropertyDeep$1,
  baseProperty = _baseProperty,
  basePropertyDeep = _basePropertyDeep,
  isKey = _isKey,
  toKey$1 = _toKey;
function property$1(te) {
  return isKey(te) ? baseProperty(toKey$1(te)) : basePropertyDeep(te);
}
var property_1 = property$1,
  baseMatches = _baseMatches,
  baseMatchesProperty = _baseMatchesProperty,
  identity = identity_1,
  isArray$1 = isArray_1,
  property = property_1;
function baseIteratee$1(te) {
  return typeof te == 'function'
    ? te
    : te == null
    ? identity
    : _typeof(te) == 'object'
    ? isArray$1(te)
      ? baseMatchesProperty(te[0], te[1])
      : baseMatches(te)
    : property(te);
}
var _baseIteratee = baseIteratee$1,
  getNative = _getNative,
  defineProperty$1 = (function () {
    try {
      var te = getNative(Object, 'defineProperty');
      return te({}, '', {}), te;
    } catch {}
  })(),
  _defineProperty$5 = defineProperty$1,
  defineProperty = _defineProperty$5;
function baseAssignValue$2(te, ee, re) {
  ee == '__proto__' && defineProperty
    ? defineProperty(te, ee, { configurable: !0, enumerable: !0, value: re, writable: !0 })
    : (te[ee] = re);
}
var _baseAssignValue = baseAssignValue$2,
  baseAssignValue$1 = _baseAssignValue,
  eq = eq_1,
  objectProto$2 = Object.prototype,
  hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue$3(te, ee, re) {
  var ae = te[ee];
  (!(hasOwnProperty$2.call(te, ee) && eq(ae, re)) || (re === void 0 && !(ee in te))) &&
    baseAssignValue$1(te, ee, re);
}
var _assignValue = assignValue$3,
  assignValue$2 = _assignValue,
  castPath$1 = _castPath,
  isIndex = _isIndex,
  isObject$3 = isObject_1,
  toKey = _toKey;
function baseSet$1(te, ee, re, ae) {
  if (!isObject$3(te)) return te;
  ee = castPath$1(ee, te);
  for (var ne = -1, oe = ee.length, ie = oe - 1, le = te; le != null && ++ne < oe; ) {
    var ce = toKey(ee[ne]),
      se = re;
    if (ce === '__proto__' || ce === 'constructor' || ce === 'prototype') return te;
    if (ne != ie) {
      var ue = le[ce];
      (se = ae ? ae(ue, ce, le) : void 0),
        se === void 0 && (se = isObject$3(ue) ? ue : isIndex(ee[ne + 1]) ? [] : {});
    }
    assignValue$2(le, ce, se), (le = le[ce]);
  }
  return te;
}
var _baseSet = baseSet$1,
  baseGet = _baseGet,
  baseSet = _baseSet,
  castPath = _castPath;
function basePickBy$1(te, ee, re) {
  for (var ae = -1, ne = ee.length, oe = {}; ++ae < ne; ) {
    var ie = ee[ae],
      le = baseGet(te, ie);
    re(le, ie) && baseSet(oe, castPath(ie, te), le);
  }
  return oe;
}
var _basePickBy = basePickBy$1,
  overArg = _overArg,
  getPrototype$2 = overArg(Object.getPrototypeOf, Object),
  _getPrototype = getPrototype$2,
  arrayPush = _arrayPush,
  getPrototype$1 = _getPrototype,
  getSymbols$1 = _getSymbols,
  stubArray = stubArray_1,
  nativeGetSymbols = Object.getOwnPropertySymbols,
  getSymbolsIn$2 = nativeGetSymbols
    ? function (te) {
        for (var ee = []; te; ) arrayPush(ee, getSymbols$1(te)), (te = getPrototype$1(te));
        return ee;
      }
    : stubArray,
  _getSymbolsIn = getSymbolsIn$2;
function nativeKeysIn$1(te) {
  var ee = [];
  if (te != null) for (var re in Object(te)) ee.push(re);
  return ee;
}
var _nativeKeysIn = nativeKeysIn$1,
  isObject$2 = isObject_1,
  isPrototype$1 = _isPrototype,
  nativeKeysIn = _nativeKeysIn,
  objectProto$1 = Object.prototype,
  hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn$1(te) {
  if (!isObject$2(te)) return nativeKeysIn(te);
  var ee = isPrototype$1(te),
    re = [];
  for (var ae in te) (ae == 'constructor' && (ee || !hasOwnProperty$1.call(te, ae))) || re.push(ae);
  return re;
}
var _baseKeysIn = baseKeysIn$1,
  arrayLikeKeys = _arrayLikeKeys,
  baseKeysIn = _baseKeysIn,
  isArrayLike = isArrayLike_1;
function keysIn$3(te) {
  return isArrayLike(te) ? arrayLikeKeys(te, !0) : baseKeysIn(te);
}
var keysIn_1 = keysIn$3,
  baseGetAllKeys = _baseGetAllKeys,
  getSymbolsIn$1 = _getSymbolsIn,
  keysIn$2 = keysIn_1;
function getAllKeysIn$2(te) {
  return baseGetAllKeys(te, keysIn$2, getSymbolsIn$1);
}
var _getAllKeysIn = getAllKeysIn$2,
  arrayMap = _arrayMap,
  baseIteratee = _baseIteratee,
  basePickBy = _basePickBy,
  getAllKeysIn$1 = _getAllKeysIn;
function pickBy(te, ee) {
  if (te == null) return {};
  var re = arrayMap(getAllKeysIn$1(te), function (ae) {
    return [ae];
  });
  return (
    (ee = baseIteratee(ee)),
    basePickBy(te, re, function (ae, ne) {
      return ee(ae, ne[0]);
    })
  );
}
var pickBy_1 = pickBy,
  Table = styled.table(function (te) {
    var ee = te.theme;
    return {
      '&&': {
        borderCollapse: 'collapse',
        borderSpacing: 0,
        border: 'none',
        tr: { border: 'none !important', background: 'none' },
        'td, th': { padding: 0, border: 'none', width: 'auto!important' },
        marginTop: 0,
        marginBottom: 0,
        'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
        'th:last-of-type, td:last-of-type': { paddingRight: 0 },
        td: {
          paddingTop: 0,
          paddingBottom: 4,
          '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
        },
        tbody: { boxShadow: 'none', border: 'none' },
        code: codeCommon({ theme: ee }),
        '& code': { margin: 0, display: 'inline-block', fontSize: ee.typography.size.s1 },
      },
    };
  }),
  ArgJsDoc = function (ee) {
    var re = ee.tags,
      ae = (re.params || []).filter(function (ie) {
        return ie.description;
      }),
      ne = ae.length !== 0,
      oe = re.returns != null && re.returns.description != null;
    return !ne && !oe
      ? null
      : React__default.createElement(
          Table,
          null,
          React__default.createElement(
            'tbody',
            null,
            ne &&
              ae.map(function (ie) {
                return React__default.createElement(
                  'tr',
                  { key: ie.name },
                  React__default.createElement(
                    'td',
                    null,
                    React__default.createElement('code', null, ie.name),
                  ),
                  React__default.createElement('td', null, ie.description),
                );
              }),
            oe &&
              React__default.createElement(
                'tr',
                { key: 'returns' },
                React__default.createElement(
                  'td',
                  null,
                  React__default.createElement('code', null, 'Returns'),
                ),
                React__default.createElement('td', null, re.returns.description),
              ),
          ),
        );
  };
function baseFindIndex$1(te, ee, re, ae) {
  for (var ne = te.length, oe = re + (ae ? 1 : -1); ae ? oe-- : ++oe < ne; )
    if (ee(te[oe], oe, te)) return oe;
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(te) {
  return te !== te;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(te, ee, re) {
  for (var ae = re - 1, ne = te.length; ++ae < ne; ) if (te[ae] === ee) return ae;
  return -1;
}
var _strictIndexOf = strictIndexOf$1,
  baseFindIndex = _baseFindIndex,
  baseIsNaN = _baseIsNaN,
  strictIndexOf = _strictIndexOf;
function baseIndexOf$1(te, ee, re) {
  return ee === ee ? strictIndexOf(te, ee, re) : baseFindIndex(te, baseIsNaN, re);
}
var _baseIndexOf = baseIndexOf$1,
  baseIndexOf = _baseIndexOf;
function arrayIncludes$1(te, ee) {
  var re = te == null ? 0 : te.length;
  return !!re && baseIndexOf(te, ee, 0) > -1;
}
var _arrayIncludes = arrayIncludes$1;
function arrayIncludesWith$1(te, ee, re) {
  for (var ae = -1, ne = te == null ? 0 : te.length; ++ae < ne; ) if (re(ee, te[ae])) return !0;
  return !1;
}
var _arrayIncludesWith = arrayIncludesWith$1;
function noop$1() {}
var noop_1 = noop$1,
  Set$3 = _Set,
  noop = noop_1,
  setToArray$1 = _setToArray,
  INFINITY = 1 / 0,
  createSet$1 =
    Set$3 && 1 / setToArray$1(new Set$3([, -0]))[1] == INFINITY
      ? function (te) {
          return new Set$3(te);
        }
      : noop,
  _createSet = createSet$1,
  SetCache = _SetCache,
  arrayIncludes = _arrayIncludes,
  arrayIncludesWith = _arrayIncludesWith,
  cacheHas = _cacheHas,
  createSet = _createSet,
  setToArray = _setToArray,
  LARGE_ARRAY_SIZE = 200;
function baseUniq$1(te, ee, re) {
  var ae = -1,
    ne = arrayIncludes,
    oe = te.length,
    ie = !0,
    le = [],
    ce = le;
  if (re) (ie = !1), (ne = arrayIncludesWith);
  else if (oe >= LARGE_ARRAY_SIZE) {
    var se = ee ? null : createSet(te);
    if (se) return setToArray(se);
    (ie = !1), (ne = cacheHas), (ce = new SetCache());
  } else ce = ee ? [] : le;
  e: for (; ++ae < oe; ) {
    var ue = te[ae],
      pe = ee ? ee(ue) : ue;
    if (((ue = re || ue !== 0 ? ue : 0), ie && pe === pe)) {
      for (var fe = ce.length; fe--; ) if (ce[fe] === pe) continue e;
      ee && ce.push(pe), le.push(ue);
    } else ne(ce, pe, re) || (ce !== le && ce.push(pe), le.push(ue));
  }
  return le;
}
var _baseUniq = baseUniq$1,
  baseUniq = _baseUniq;
function uniq(te) {
  return te && te.length ? baseUniq(te) : [];
}
var uniq_1 = uniq,
  ITEMS_BEFORE_EXPANSION = 8,
  Summary = styled.div(function (te) {
    var ee = te.isExpanded;
    return {
      display: 'flex',
      flexDirection: ee ? 'column' : 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginBottom: '-4px',
      minWidth: 100,
    };
  }),
  Text$2 = styled.span(codeCommon, function (te) {
    var ee = te.theme,
      re = te.simple,
      ae = re === void 0 ? !1 : re;
    return Object.assign(
      {
        flex: '0 0 auto',
        fontFamily: ee.typography.fonts.mono,
        fontSize: ee.typography.size.s1,
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        maxWidth: '100%',
        margin: 0,
        marginRight: '4px',
        marginBottom: '4px',
        paddingTop: '2px',
        paddingBottom: '2px',
        lineHeight: '13px',
      },
      ae && { background: 'transparent', border: '0 none', paddingLeft: 0 },
    );
  }),
  ExpandButton = styled.button(function (te) {
    var ee = te.theme;
    return {
      fontFamily: ee.typography.fonts.mono,
      color: ee.color.secondary,
      marginBottom: '4px',
      background: 'none',
      border: 'none',
    };
  }),
  Expandable = styled.div(codeCommon, function (te) {
    var ee = te.theme;
    return {
      fontFamily: ee.typography.fonts.mono,
      color: ee.color.secondary,
      fontSize: ee.typography.size.s1,
      margin: 0,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
    };
  }),
  Detail = styled.div(function (te) {
    var ee = te.theme,
      re = te.width;
    return {
      width: re,
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      fontFamily: ee.typography.fonts.mono,
      fontSize: ee.typography.size.s1,
      boxSizing: 'content-box',
      '& code': { padding: '0 !important' },
    };
  }),
  ArrowIcon = styled(Icons)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 }),
  EmptyArg = function () {
    return React__default.createElement('span', null, '-');
  },
  ArgText = function (ee) {
    var re = ee.text,
      ae = ee.simple;
    return React__default.createElement(Text$2, { simple: ae }, re);
  },
  calculateDetailWidth = memoize$3(1e3)(function (te) {
    var ee = te.split(/\r?\n/);
    return ''.concat(
      Math.max.apply(
        Math,
        _toConsumableArray$1(
          ee.map(function (re) {
            return re.length;
          }),
        ),
      ),
      'ch',
    );
  }),
  getSummaryItems = function (ee) {
    if (!ee) return [ee];
    var re = ee.split('|'),
      ae = re.map(function (ne) {
        return ne.trim();
      });
    return uniq_1(ae);
  },
  renderSummaryItems = function (ee) {
    var re = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
      ae = ee;
    return (
      re || (ae = ee.slice(0, ITEMS_BEFORE_EXPANSION)),
      ae.map(function (ne) {
        return React__default.createElement(ArgText, { key: ne, text: ne === '' ? '""' : ne });
      })
    );
  },
  ArgSummary = function (ee) {
    var re = ee.value,
      ae = ee.initialExpandedArgs,
      ne = re.summary,
      oe = re.detail,
      ie = p$3(!1),
      le = _slicedToArray$4(ie, 2),
      ce = le[0],
      se = le[1],
      ue = p$3(ae || !1),
      pe = _slicedToArray$4(ue, 2),
      fe = pe[0],
      ge = pe[1];
    if (ne == null) return null;
    var de = typeof ne.toString == 'function' ? ne.toString() : ne;
    if (oe == null) {
      var me = /[(){}[\]<>]/.test(de);
      if (me) return React__default.createElement(ArgText, { text: de });
      var he = getSummaryItems(de),
        ve = he.length,
        ye = ve > ITEMS_BEFORE_EXPANSION;
      return ye
        ? React__default.createElement(
            Summary,
            { isExpanded: fe },
            renderSummaryItems(he, fe),
            React__default.createElement(
              ExpandButton,
              {
                onClick: function () {
                  return ge(!fe);
                },
              },
              fe ? 'Show less...' : 'Show '.concat(ve - ITEMS_BEFORE_EXPANSION, ' more...'),
            ),
          )
        : React__default.createElement(Summary, null, renderSummaryItems(he));
    }
    return React__default.createElement(
      WithTooltipPure,
      {
        closeOnClick: !0,
        trigger: 'click',
        placement: 'bottom',
        tooltipShown: ce,
        onVisibilityChange: function (_e) {
          se(_e);
        },
        tooltip: React__default.createElement(
          Detail,
          { width: calculateDetailWidth(oe) },
          React__default.createElement(SyntaxHighlighter, { language: 'jsx', format: !1 }, oe),
        ),
      },
      React__default.createElement(
        Expandable,
        { className: 'sbdocs-expandable' },
        React__default.createElement('span', null, de),
        React__default.createElement(ArrowIcon, { icon: ce ? 'arrowup' : 'arrowdown' }),
      ),
    );
  },
  ArgValue = function (ee) {
    var re = ee.value,
      ae = ee.initialExpandedArgs;
    return re == null
      ? React__default.createElement(EmptyArg, null)
      : React__default.createElement(ArgSummary, { value: re, initialExpandedArgs: ae });
  },
  getControlId = function (ee) {
    return 'control-'.concat(ee.replace(/\s+/g, '-'));
  },
  getControlSetterButtonId = function (ee) {
    return 'set-'.concat(ee.replace(/\s+/g, '-'));
  },
  Label$3 = styled.label(function (te) {
    var ee = te.theme;
    return {
      lineHeight: '18px',
      alignItems: 'center',
      marginBottom: 8,
      display: 'inline-block',
      position: 'relative',
      whiteSpace: 'nowrap',
      background: ''.concat(curriedOpacify$1(0.05, ee.appBorderColor)),
      borderRadius: '3em',
      padding: 1,
      input: {
        appearance: 'none',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: '3em',
        '&:focus': {
          outline: 'none',
          boxShadow: ''.concat(ee.color.secondary, ' 0 0 0 1px inset !important'),
        },
      },
      span: {
        textAlign: 'center',
        fontSize: ee.typography.size.s1,
        fontWeight: ee.typography.weight.bold,
        lineHeight: '1',
        cursor: 'pointer',
        display: 'inline-block',
        padding: '7px 15px',
        transition: 'all 100ms ease-out',
        userSelect: 'none',
        borderRadius: '3em',
        color: curriedTransparentize$1(0.4, ee.color.defaultText),
        background: 'transparent',
        '&:hover': {
          boxShadow: ''.concat(curriedOpacify$1(0.3, ee.appBorderColor), ' 0 0 0 1px inset'),
        },
        '&:active': {
          boxShadow: ''.concat(curriedOpacify$1(0.05, ee.appBorderColor), ' 0 0 0 2px inset'),
          color: curriedOpacify$1(1, ee.appBorderColor),
        },
        '&:first-of-type': { paddingRight: 8 },
        '&:last-of-type': { paddingLeft: 8 },
      },
      'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type': {
        background: ee.background.app,
        boxShadow: ''.concat(curriedOpacify$1(0.1, ee.appBorderColor), ' 0 0 2px'),
        color: ee.color.defaultText,
        padding: '7px 15px',
      },
    };
  }),
  parse$2 = function (ee) {
    return ee === 'true';
  },
  BooleanControl = function (ee) {
    var re = ee.name,
      ae = ee.value,
      ne = ee.onChange,
      oe = ee.onBlur,
      ie = ee.onFocus,
      le = T$2(
        function () {
          return ne(!1);
        },
        [ne],
      );
    if (ae === void 0)
      return React__default.createElement(
        Form.Button,
        { id: getControlSetterButtonId(re), onClick: le },
        'Set boolean',
      );
    var ce = typeof ae == 'string' ? parse$2(ae) : ae;
    return React__default.createElement(
      Label$3,
      { htmlFor: re, title: ce ? 'Change to false' : 'Change to true' },
      React__default.createElement(
        'input',
        Object.assign(
          {
            id: getControlId(re),
            type: 'checkbox',
            onChange: function (ue) {
              return ne(ue.target.checked);
            },
            checked: ce,
          },
          { name: re, onBlur: oe, onFocus: ie },
        ),
      ),
      React__default.createElement('span', null, 'False'),
      React__default.createElement('span', null, 'True'),
    );
  },
  parseDate = function (ee) {
    var re = ee.split('-'),
      ae = _slicedToArray$4(re, 3),
      ne = ae[0],
      oe = ae[1],
      ie = ae[2],
      le = new Date();
    return le.setFullYear(parseInt(ne, 10), parseInt(oe, 10) - 1, parseInt(ie, 10)), le;
  },
  parseTime = function (ee) {
    var re = ee.split(':'),
      ae = _slicedToArray$4(re, 2),
      ne = ae[0],
      oe = ae[1],
      ie = new Date();
    return ie.setHours(parseInt(ne, 10)), ie.setMinutes(parseInt(oe, 10)), ie;
  },
  formatDate = function (ee) {
    var re = new Date(ee),
      ae = '000'.concat(re.getFullYear()).slice(-4),
      ne = '0'.concat(re.getMonth() + 1).slice(-2),
      oe = '0'.concat(re.getDate()).slice(-2);
    return ''.concat(ae, '-').concat(ne, '-').concat(oe);
  },
  formatTime = function (ee) {
    var re = new Date(ee),
      ae = '0'.concat(re.getHours()).slice(-2),
      ne = '0'.concat(re.getMinutes()).slice(-2);
    return ''.concat(ae, ':').concat(ne);
  },
  FlexSpaced = styled.div(function (te) {
    var ee = te.theme;
    return {
      flex: 1,
      display: 'flex',
      input: {
        marginLeft: 10,
        flex: 1,
        height: 32,
        '&::-webkit-calendar-picker-indicator': {
          opacity: 0.5,
          height: 12,
          filter: ee.base === 'light' ? void 0 : 'invert(1)',
        },
      },
      'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
      'input:last-of-type': { flexGrow: 3 },
    };
  }),
  DateControl = function (ee) {
    var re = ee.name,
      ae = ee.value,
      ne = ee.onChange,
      oe = ee.onFocus,
      ie = ee.onBlur,
      le = p$3(!0),
      ce = _slicedToArray$4(le, 2),
      se = ce[0],
      ue = ce[1],
      pe = _(),
      fe = _();
    h$3(
      function () {
        se !== !1 &&
          (pe && pe.current && (pe.current.value = formatDate(ae)),
          fe && fe.current && (fe.current.value = formatTime(ae)));
      },
      [ae],
    );
    var ge = function (ve) {
        var ye = parseDate(ve.target.value),
          be = new Date(ae);
        be.setFullYear(ye.getFullYear(), ye.getMonth(), ye.getDate());
        var _e = be.getTime();
        _e && ne(_e), ue(!!_e);
      },
      de = function (ve) {
        var ye = parseTime(ve.target.value),
          be = new Date(ae);
        be.setHours(ye.getHours()), be.setMinutes(ye.getMinutes());
        var _e = be.getTime();
        _e && ne(_e), ue(!!_e);
      },
      me = getControlId(re);
    return React__default.createElement(
      FlexSpaced,
      null,
      React__default.createElement(
        Form.Input,
        Object.assign(
          {
            type: 'date',
            max: '9999-12-31',
            ref: pe,
            id: ''.concat(me, '-date'),
            name: ''.concat(me, '-date'),
            onChange: ge,
          },
          { onFocus: oe, onBlur: ie },
        ),
      ),
      React__default.createElement(
        Form.Input,
        Object.assign(
          {
            type: 'time',
            id: ''.concat(me, '-time'),
            name: ''.concat(me, '-time'),
            ref: fe,
            onChange: de,
          },
          { onFocus: oe, onBlur: ie },
        ),
      ),
      se ? null : React__default.createElement('div', null, 'invalid'),
    );
  },
  Wrapper$5 = styled.label({ display: 'flex' }),
  parse$1 = function (ee) {
    var re = parseFloat(ee);
    return Number.isNaN(re) ? void 0 : re;
  },
  NumberControl = function (ee) {
    var re = ee.name,
      ae = ee.value,
      ne = ee.onChange,
      oe = ee.min,
      ie = ee.max,
      le = ee.step,
      ce = ee.onBlur,
      se = ee.onFocus,
      ue = p$3(typeof ae == 'number' ? ae : ''),
      pe = _slicedToArray$4(ue, 2),
      fe = pe[0],
      ge = pe[1],
      de = p$3(!1),
      me = _slicedToArray$4(de, 2),
      he = me[0],
      ve = me[1],
      ye = p$3(null),
      be = _slicedToArray$4(ye, 2),
      _e = be[0],
      Te = be[1],
      Se = T$2(
        function (xe) {
          ge(xe.target.value);
          var Ae = parseFloat(xe.target.value);
          Number.isNaN(Ae)
            ? Te(new Error("'".concat(xe.target.value, "' is not a number")))
            : (ne(Ae), Te(null));
        },
        [ne, Te],
      ),
      $e = T$2(
        function () {
          ge('0'), ne(0), ve(!0);
        },
        [ve],
      ),
      Ee = _(null);
    return (
      h$3(
        function () {
          he && Ee.current && Ee.current.select();
        },
        [he],
      ),
      h$3(
        function () {
          var xe = typeof ae == 'number' ? ae : '';
          fe !== xe && ge(ae);
        },
        [ae],
      ),
      !he && ae === void 0
        ? React__default.createElement(
            Form.Button,
            { id: getControlSetterButtonId(re), onClick: $e },
            'Set number',
          )
        : React__default.createElement(
            Wrapper$5,
            null,
            React__default.createElement(
              Form.Input,
              Object.assign(
                {
                  ref: Ee,
                  id: getControlId(re),
                  type: 'number',
                  onChange: Se,
                  size: 'flex',
                  placeholder: 'Edit number...',
                  value: fe,
                  valid: _e ? 'error' : null,
                  autoFocus: he,
                },
                { name: re, min: oe, max: ie, step: le, onFocus: se, onBlur: ce },
              ),
            ),
          )
    );
  };
function dedent(te) {
  for (var ee = [], re = 1; re < arguments.length; re++) ee[re - 1] = arguments[re];
  var ae = Array.from(typeof te == 'string' ? [te] : te);
  ae[ae.length - 1] = ae[ae.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var ne = ae.reduce(function (le, ce) {
    var se = ce.match(/\n([\t ]+|(?!\s).)/g);
    return se
      ? le.concat(
          se.map(function (ue) {
            var pe, fe;
            return (fe =
              (pe = ue.match(/[\t ]/g)) === null || pe === void 0 ? void 0 : pe.length) !== null &&
              fe !== void 0
              ? fe
              : 0;
          }),
        )
      : le;
  }, []);
  if (ne.length) {
    var oe = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, ne) +
        '}',
      'g',
    );
    ae = ae.map(function (le) {
      return le.replace(
        oe,
        `
`,
      );
    });
  }
  ae[0] = ae[0].replace(/^\r?\n/, '');
  var ie = ae[0];
  return (
    ee.forEach(function (le, ce) {
      var se = ie.match(/(?:^|\n)( *)$/),
        ue = se ? se[1] : '',
        pe = le;
      typeof le == 'string' &&
        le.includes(`
`) &&
        (pe = String(le)
          .split(
            `
`,
          )
          .map(function (fe, ge) {
            return ge === 0 ? fe : '' + ue + fe;
          }).join(`
`)),
        (ie += pe + ae[ce + 1]);
    }),
    ie
  );
}
var selectedKey = function (ee, re) {
    var ae =
      re &&
      Object.entries(re).find(function (ne) {
        var oe = _slicedToArray$4(ne, 2);
        oe[0];
        var ie = oe[1];
        return ie === ee;
      });
    return ae ? ae[0] : void 0;
  },
  selectedKeys = function (ee, re) {
    return ee && re
      ? Object.entries(re)
          .filter(function (ae) {
            return ee.includes(ae[1]);
          })
          .map(function (ae) {
            return ae[0];
          })
      : [];
  },
  selectedValues = function (ee, re) {
    return (
      ee &&
      re &&
      ee.map(function (ae) {
        return re[ae];
      })
    );
  },
  Wrapper$4 = styled.div(function (te) {
    var ee = te.isInline;
    return ee
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 },
        }
      : { label: { display: 'flex' } };
  }),
  Text$1 = styled.span({}),
  Label$2 = styled.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  CheckboxControl = function (ee) {
    var re = ee.name,
      ae = ee.options,
      ne = ee.value,
      oe = ee.onChange,
      ie = ee.isInline;
    if (!ae)
      return (
        logger.warn('Checkbox with no options: '.concat(re)),
        React__default.createElement(React__default.Fragment, null, '-')
      );
    var le = selectedKeys(ne, ae),
      ce = p$3(le),
      se = _slicedToArray$4(ce, 2),
      ue = se[0],
      pe = se[1],
      fe = function (me) {
        var he = me.target.value,
          ve = _toConsumableArray$1(ue);
        ve != null && ve.includes(he) ? ve.splice(ve.indexOf(he), 1) : ve.push(he),
          oe(selectedValues(ve, ae)),
          pe(ve);
      },
      ge = getControlId(re);
    return React__default.createElement(
      Wrapper$4,
      { isInline: ie },
      Object.keys(ae).map(function (de, me) {
        var he = ''.concat(ge, '-').concat(me);
        return React__default.createElement(
          Label$2,
          { key: he, htmlFor: he },
          React__default.createElement('input', {
            type: 'checkbox',
            id: he,
            name: he,
            value: de,
            onChange: fe,
            checked: ue == null ? void 0 : ue.includes(de),
          }),
          React__default.createElement(Text$1, null, de),
        );
      }),
    );
  },
  Wrapper$3 = styled.div(function (te) {
    var ee = te.isInline;
    return ee
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 },
        }
      : { label: { display: 'flex' } };
  });
styled.fieldset({ border: 0, padding: 0, margin: 0 });
var Text = styled.span({}),
  Label$1 = styled.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  }),
  RadioControl = function (ee) {
    var re = ee.name,
      ae = ee.options,
      ne = ee.value,
      oe = ee.onChange,
      ie = ee.isInline;
    if (!ae)
      return (
        logger.warn('Radio with no options: '.concat(re)),
        React__default.createElement(React__default.Fragment, null, '-')
      );
    var le = selectedKey(ne, ae),
      ce = getControlId(re);
    return React__default.createElement(
      Wrapper$3,
      { isInline: ie },
      Object.keys(ae).map(function (se, ue) {
        var pe = ''.concat(ce, '-').concat(ue);
        return React__default.createElement(
          Label$1,
          { key: pe, htmlFor: pe },
          React__default.createElement('input', {
            type: 'radio',
            id: pe,
            name: pe,
            value: se,
            onChange: function (ge) {
              return oe(ae[ge.currentTarget.value]);
            },
            checked: se === le,
          }),
          React__default.createElement(Text, null, se),
        );
      }),
    );
  },
  styleResets = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative',
  },
  OptionsSelect = styled.select(function (te) {
    var ee = te.theme;
    return Object.assign(Object.assign({}, styleResets), {
      boxSizing: 'border-box',
      position: 'relative',
      padding: '6px 10px',
      width: '100%',
      color: ee.input.color || 'inherit',
      background: ee.input.background,
      borderRadius: ee.input.borderRadius,
      boxShadow: ''.concat(ee.input.border, ' 0 0 0 1px inset'),
      fontSize: ee.typography.size.s2 - 1,
      lineHeight: '20px',
      '&:focus': { boxShadow: ''.concat(ee.color.secondary, ' 0 0 0 1px inset'), outline: 'none' },
      '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
      '::placeholder': { color: ee.color.mediumdark },
      '&[multiple]': {
        overflow: 'auto',
        padding: 0,
        option: { display: 'block', padding: '6px 10px', marginLeft: 1, marginRight: 1 },
      },
    });
  }),
  SelectWrapper = styled.span(
    _templateObject3 ||
      (_templateObject3 = _taggedTemplateLiteral$4([
        `
  display: inline-block;
  line-height: normal;
  overflow: hidden;
  position: relative;
  vertical-align: top;
  width: 100%;

  svg {
    position: absolute;
    z-index: 1;
    pointer-events: none;
    height: 12px;
    margin-top: -6px;
    right: 12px;
    top: 50%;

    path {
      fill: currentColor;
    }
  }
`,
      ])),
  ),
  NO_SELECTION = 'Choose option...',
  SingleSelect = function (ee) {
    var re = ee.name,
      ae = ee.value,
      ne = ee.options,
      oe = ee.onChange,
      ie = function (ue) {
        oe(ne[ue.currentTarget.value]);
      },
      le = selectedKey(ae, ne) || NO_SELECTION,
      ce = getControlId(re);
    return React__default.createElement(
      SelectWrapper,
      null,
      React__default.createElement(Icons, { icon: 'arrowdown' }),
      React__default.createElement(
        OptionsSelect,
        { id: ce, value: le, onChange: ie },
        React__default.createElement('option', { key: 'no-selection', disabled: !0 }, NO_SELECTION),
        Object.keys(ne).map(function (se) {
          return React__default.createElement('option', { key: se }, se);
        }),
      ),
    );
  },
  MultiSelect = function (ee) {
    var re = ee.name,
      ae = ee.value,
      ne = ee.options,
      oe = ee.onChange,
      ie = function (ue) {
        var pe = Array.from(ue.currentTarget.options)
          .filter(function (fe) {
            return fe.selected;
          })
          .map(function (fe) {
            return fe.value;
          });
        oe(selectedValues(pe, ne));
      },
      le = selectedKeys(ae, ne),
      ce = getControlId(re);
    return React__default.createElement(
      SelectWrapper,
      null,
      React__default.createElement(
        OptionsSelect,
        { id: ce, multiple: !0, value: le, onChange: ie },
        Object.keys(ne).map(function (se) {
          return React__default.createElement('option', { key: se }, se);
        }),
      ),
    );
  },
  SelectControl = function (ee) {
    var re = ee.name,
      ae = ee.options;
    return ae
      ? ee.isMulti
        ? React__default.createElement(MultiSelect, Object.assign({}, ee))
        : React__default.createElement(SingleSelect, Object.assign({}, ee))
      : (logger.warn('Select with no options: '.concat(re)),
        React__default.createElement(React__default.Fragment, null, '-'));
  },
  normalizeOptions = function (ee, re) {
    return Array.isArray(ee)
      ? ee.reduce(function (ae, ne) {
          return (ae[(re == null ? void 0 : re[ne]) || String(ne)] = ne), ae;
        }, {})
      : ee;
  },
  Controls$1 = {
    check: CheckboxControl,
    'inline-check': CheckboxControl,
    radio: RadioControl,
    'inline-radio': RadioControl,
    select: SelectControl,
    'multi-select': SelectControl,
  },
  OptionsControl = function (ee) {
    var re = ee.type,
      ae = re === void 0 ? 'select' : re,
      ne = ee.options,
      oe = ee.labels,
      ie = ee.argType,
      le = Object.assign(Object.assign({}, ee), {
        options: normalizeOptions(ne || ie.options, oe),
        isInline: ae.includes('inline'),
        isMulti: ae.includes('multi'),
      });
    ne &&
      once.warn(
        dedent(
          _templateObject4 ||
            (_templateObject4 = _taggedTemplateLiteral$4([
              `
      'control.options' is deprecated and will be removed in Storybook 7.0. Define 'options' directly on the argType instead, and use 'control.labels' for custom labels.

      More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-controloptions
    `,
            ])),
        ),
      );
    var ce = Controls$1[ae];
    if (ce) return React__default.createElement(ce, Object.assign({}, le));
    throw new Error('Unknown options type: '.concat(ae));
  };
function arrayEach$1(te, ee) {
  for (var re = -1, ae = te == null ? 0 : te.length; ++re < ae && ee(te[re], re, te) !== !1; );
  return te;
}
var _arrayEach = arrayEach$1,
  assignValue$1 = _assignValue,
  baseAssignValue = _baseAssignValue;
function copyObject$4(te, ee, re, ae) {
  var ne = !re;
  re || (re = {});
  for (var oe = -1, ie = ee.length; ++oe < ie; ) {
    var le = ee[oe],
      ce = ae ? ae(re[le], te[le], le, re, te) : void 0;
    ce === void 0 && (ce = te[le]), ne ? baseAssignValue(re, le, ce) : assignValue$1(re, le, ce);
  }
  return re;
}
var _copyObject = copyObject$4,
  copyObject$3 = _copyObject,
  keys$1 = keys_1;
function baseAssign$1(te, ee) {
  return te && copyObject$3(ee, keys$1(ee), te);
}
var _baseAssign = baseAssign$1,
  copyObject$2 = _copyObject,
  keysIn$1 = keysIn_1;
function baseAssignIn$1(te, ee) {
  return te && copyObject$2(ee, keysIn$1(ee), te);
}
var _baseAssignIn = baseAssignIn$1,
  _cloneBuffer = { exports: {} };
(function (te, ee) {
  var re = _root,
    ae = ee && !ee.nodeType && ee,
    ne = ae && !0 && te && !te.nodeType && te,
    oe = ne && ne.exports === ae,
    ie = oe ? re.Buffer : void 0,
    le = ie ? ie.allocUnsafe : void 0;
  function ce(se, ue) {
    if (ue) return se.slice();
    var pe = se.length,
      fe = le ? le(pe) : new se.constructor(pe);
    return se.copy(fe), fe;
  }
  te.exports = ce;
})(_cloneBuffer, _cloneBuffer.exports);
function copyArray$1(te, ee) {
  var re = -1,
    ae = te.length;
  for (ee || (ee = Array(ae)); ++re < ae; ) ee[re] = te[re];
  return ee;
}
var _copyArray = copyArray$1,
  copyObject$1 = _copyObject,
  getSymbols = _getSymbols;
function copySymbols$1(te, ee) {
  return copyObject$1(te, getSymbols(te), ee);
}
var _copySymbols = copySymbols$1,
  copyObject = _copyObject,
  getSymbolsIn = _getSymbolsIn;
function copySymbolsIn$1(te, ee) {
  return copyObject(te, getSymbolsIn(te), ee);
}
var _copySymbolsIn = copySymbolsIn$1,
  objectProto = Object.prototype,
  hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray$1(te) {
  var ee = te.length,
    re = new te.constructor(ee);
  return (
    ee &&
      typeof te[0] == 'string' &&
      hasOwnProperty.call(te, 'index') &&
      ((re.index = te.index), (re.input = te.input)),
    re
  );
}
var _initCloneArray = initCloneArray$1,
  Uint8Array = _Uint8Array;
function cloneArrayBuffer$3(te) {
  var ee = new te.constructor(te.byteLength);
  return new Uint8Array(ee).set(new Uint8Array(te)), ee;
}
var _cloneArrayBuffer = cloneArrayBuffer$3,
  cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneDataView$1(te, ee) {
  var re = ee ? cloneArrayBuffer$2(te.buffer) : te.buffer;
  return new te.constructor(re, te.byteOffset, te.byteLength);
}
var _cloneDataView = cloneDataView$1,
  reFlags = /\w*$/;
function cloneRegExp$1(te) {
  var ee = new te.constructor(te.source, reFlags.exec(te));
  return (ee.lastIndex = te.lastIndex), ee;
}
var _cloneRegExp = cloneRegExp$1,
  Symbol$1 = _Symbol,
  symbolProto = Symbol$1 ? Symbol$1.prototype : void 0,
  symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(te) {
  return symbolValueOf ? Object(symbolValueOf.call(te)) : {};
}
var _cloneSymbol = cloneSymbol$1,
  cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneTypedArray$1(te, ee) {
  var re = ee ? cloneArrayBuffer$1(te.buffer) : te.buffer;
  return new te.constructor(re, te.byteOffset, te.length);
}
var _cloneTypedArray = cloneTypedArray$1,
  cloneArrayBuffer = _cloneArrayBuffer,
  cloneDataView = _cloneDataView,
  cloneRegExp = _cloneRegExp,
  cloneSymbol = _cloneSymbol,
  cloneTypedArray = _cloneTypedArray,
  boolTag$1 = '[object Boolean]',
  dateTag$1 = '[object Date]',
  mapTag$2 = '[object Map]',
  numberTag$1 = '[object Number]',
  regexpTag$1 = '[object RegExp]',
  setTag$2 = '[object Set]',
  stringTag$1 = '[object String]',
  symbolTag$1 = '[object Symbol]',
  arrayBufferTag$1 = '[object ArrayBuffer]',
  dataViewTag$1 = '[object DataView]',
  float32Tag$1 = '[object Float32Array]',
  float64Tag$1 = '[object Float64Array]',
  int8Tag$1 = '[object Int8Array]',
  int16Tag$1 = '[object Int16Array]',
  int32Tag$1 = '[object Int32Array]',
  uint8Tag$1 = '[object Uint8Array]',
  uint8ClampedTag$1 = '[object Uint8ClampedArray]',
  uint16Tag$1 = '[object Uint16Array]',
  uint32Tag$1 = '[object Uint32Array]';
function initCloneByTag$1(te, ee, re) {
  var ae = te.constructor;
  switch (ee) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(te);
    case boolTag$1:
    case dateTag$1:
      return new ae(+te);
    case dataViewTag$1:
      return cloneDataView(te, re);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(te, re);
    case mapTag$2:
      return new ae();
    case numberTag$1:
    case stringTag$1:
      return new ae(te);
    case regexpTag$1:
      return cloneRegExp(te);
    case setTag$2:
      return new ae();
    case symbolTag$1:
      return cloneSymbol(te);
  }
}
var _initCloneByTag = initCloneByTag$1,
  isObject$1 = isObject_1,
  objectCreate = Object.create,
  baseCreate$1 = (function () {
    function te() {}
    return function (ee) {
      if (!isObject$1(ee)) return {};
      if (objectCreate) return objectCreate(ee);
      te.prototype = ee;
      var re = new te();
      return (te.prototype = void 0), re;
    };
  })(),
  _baseCreate = baseCreate$1,
  baseCreate = _baseCreate,
  getPrototype = _getPrototype,
  isPrototype = _isPrototype;
function initCloneObject$1(te) {
  return typeof te.constructor == 'function' && !isPrototype(te)
    ? baseCreate(getPrototype(te))
    : {};
}
var _initCloneObject = initCloneObject$1,
  getTag$2 = _getTag,
  isObjectLike$1 = isObjectLike_1,
  mapTag$1 = '[object Map]';
function baseIsMap$1(te) {
  return isObjectLike$1(te) && getTag$2(te) == mapTag$1;
}
var _baseIsMap = baseIsMap$1,
  baseIsMap = _baseIsMap,
  baseUnary$1 = _baseUnary,
  nodeUtil$1 = _nodeUtil.exports,
  nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap,
  isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap,
  isMap_1 = isMap$1,
  getTag$1 = _getTag,
  isObjectLike = isObjectLike_1,
  setTag$1 = '[object Set]';
function baseIsSet$1(te) {
  return isObjectLike(te) && getTag$1(te) == setTag$1;
}
var _baseIsSet = baseIsSet$1,
  baseIsSet = _baseIsSet,
  baseUnary = _baseUnary,
  nodeUtil = _nodeUtil.exports,
  nodeIsSet = nodeUtil && nodeUtil.isSet,
  isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet,
  isSet_1 = isSet$1,
  Stack = _Stack,
  arrayEach = _arrayEach,
  assignValue = _assignValue,
  baseAssign = _baseAssign,
  baseAssignIn = _baseAssignIn,
  cloneBuffer = _cloneBuffer.exports,
  copyArray = _copyArray,
  copySymbols = _copySymbols,
  copySymbolsIn = _copySymbolsIn,
  getAllKeys = _getAllKeys,
  getAllKeysIn = _getAllKeysIn,
  getTag = _getTag,
  initCloneArray = _initCloneArray,
  initCloneByTag = _initCloneByTag,
  initCloneObject = _initCloneObject,
  isArray = isArray_1,
  isBuffer = isBuffer$3.exports,
  isMap = isMap_1,
  isObject = isObject_1,
  isSet = isSet_1,
  keys = keys_1,
  keysIn = keysIn_1,
  CLONE_DEEP_FLAG$1 = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG$1 = 4,
  argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  funcTag = '[object Function]',
  genTag = '[object GeneratorFunction]',
  mapTag = '[object Map]',
  numberTag = '[object Number]',
  objectTag = '[object Object]',
  regexpTag = '[object RegExp]',
  setTag = '[object Set]',
  stringTag = '[object String]',
  symbolTag = '[object Symbol]',
  weakMapTag = '[object WeakMap]',
  arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]',
  cloneableTags = {};
cloneableTags[argsTag] =
  cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] =
  cloneableTags[dataViewTag] =
  cloneableTags[boolTag] =
  cloneableTags[dateTag] =
  cloneableTags[float32Tag] =
  cloneableTags[float64Tag] =
  cloneableTags[int8Tag] =
  cloneableTags[int16Tag] =
  cloneableTags[int32Tag] =
  cloneableTags[mapTag] =
  cloneableTags[numberTag] =
  cloneableTags[objectTag] =
  cloneableTags[regexpTag] =
  cloneableTags[setTag] =
  cloneableTags[stringTag] =
  cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] =
  cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] =
  cloneableTags[uint32Tag] =
    !0;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;
function baseClone$1(te, ee, re, ae, ne, oe) {
  var ie,
    le = ee & CLONE_DEEP_FLAG$1,
    ce = ee & CLONE_FLAT_FLAG,
    se = ee & CLONE_SYMBOLS_FLAG$1;
  if ((re && (ie = ne ? re(te, ae, ne, oe) : re(te)), ie !== void 0)) return ie;
  if (!isObject(te)) return te;
  var ue = isArray(te);
  if (ue) {
    if (((ie = initCloneArray(te)), !le)) return copyArray(te, ie);
  } else {
    var pe = getTag(te),
      fe = pe == funcTag || pe == genTag;
    if (isBuffer(te)) return cloneBuffer(te, le);
    if (pe == objectTag || pe == argsTag || (fe && !ne)) {
      if (((ie = ce || fe ? {} : initCloneObject(te)), !le))
        return ce ? copySymbolsIn(te, baseAssignIn(ie, te)) : copySymbols(te, baseAssign(ie, te));
    } else {
      if (!cloneableTags[pe]) return ne ? te : {};
      ie = initCloneByTag(te, pe, le);
    }
  }
  oe || (oe = new Stack());
  var ge = oe.get(te);
  if (ge) return ge;
  oe.set(te, ie),
    isSet(te)
      ? te.forEach(function (he) {
          ie.add(baseClone$1(he, ee, re, he, te, oe));
        })
      : isMap(te) &&
        te.forEach(function (he, ve) {
          ie.set(ve, baseClone$1(he, ee, re, ve, te, oe));
        });
  var de = se ? (ce ? getAllKeysIn : getAllKeys) : ce ? keysIn : keys,
    me = ue ? void 0 : de(te);
  return (
    arrayEach(me || te, function (he, ve) {
      me && ((ve = he), (he = te[ve])), assignValue(ie, ve, baseClone$1(he, ee, re, ve, te, oe));
    }),
    ie
  );
}
var _baseClone = baseClone$1,
  baseClone = _baseClone,
  CLONE_DEEP_FLAG = 1,
  CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(te) {
  return baseClone(te, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep,
  VALUE = 'value',
  KEY = 'key',
  ERROR = 'Error',
  OBJECT = 'Object',
  ARRAY = 'Array',
  STRING = 'String',
  NUMBER = 'Number',
  BOOLEAN = 'Boolean',
  DATE = 'Date',
  NULL = 'Null',
  UNDEFINED = 'Undefined',
  FUNCTION = 'Function',
  SYMBOL = 'Symbol',
  ADD_DELTA_TYPE = 'ADD_DELTA_TYPE',
  REMOVE_DELTA_TYPE = 'REMOVE_DELTA_TYPE',
  UPDATE_DELTA_TYPE = 'UPDATE_DELTA_TYPE';
function getObjectType(te) {
  return te !== null &&
    _typeof(te) === 'object' &&
    !Array.isArray(te) &&
    typeof te[Symbol.iterator] == 'function'
    ? 'Iterable'
    : Object.prototype.toString.call(te).slice(8, -1);
}
function isComponentWillChange(te, ee) {
  var re = getObjectType(te),
    ae = getObjectType(ee);
  return (re === 'Function' || ae === 'Function') && ae !== re;
}
var JsonAddValue = (function (te) {
  _inherits(re, te);
  var ee = _createSuper(re);
  function re(ae) {
    var ne;
    return (
      _classCallCheck(this, re),
      (ne = ee.call(this, ae)),
      (ne.state = { inputRefKey: null, inputRefValue: null }),
      (ne.refInputValue = ne.refInputValue.bind(_assertThisInitialized2(ne))),
      (ne.refInputKey = ne.refInputKey.bind(_assertThisInitialized2(ne))),
      (ne.onKeydown = ne.onKeydown.bind(_assertThisInitialized2(ne))),
      (ne.onSubmit = ne.onSubmit.bind(_assertThisInitialized2(ne))),
      ne
    );
  }
  return (
    _createClass(re, [
      {
        key: 'componentDidMount',
        value: function () {
          var ne = this.state,
            oe = ne.inputRefKey,
            ie = ne.inputRefValue,
            le = this.props.onlyValue;
          oe && typeof oe.focus == 'function' && oe.focus(),
            le && ie && typeof ie.focus == 'function' && ie.focus(),
            document.addEventListener('keydown', this.onKeydown);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          document.removeEventListener('keydown', this.onKeydown);
        },
      },
      {
        key: 'onKeydown',
        value: function (ne) {
          ne.altKey ||
            ne.ctrlKey ||
            ne.metaKey ||
            ne.shiftKey ||
            ne.repeat ||
            ((ne.code === 'Enter' || ne.key === 'Enter') && (ne.preventDefault(), this.onSubmit()),
            (ne.code === 'Escape' || ne.key === 'Escape') &&
              (ne.preventDefault(), this.props.handleCancel()));
        },
      },
      {
        key: 'onSubmit',
        value: function () {
          var ne = this.props,
            oe = ne.handleAdd,
            ie = ne.onlyValue,
            le = ne.onSubmitValueParser,
            ce = ne.keyPath,
            se = ne.deep,
            ue = this.state,
            pe = ue.inputRefKey,
            fe = ue.inputRefValue,
            ge = {};
          if (!ie) {
            if (!pe.value) return;
            ge.key = pe.value;
          }
          (ge.newValue = le(!1, ce, se, ge.key, fe.value)), oe(ge);
        },
      },
      {
        key: 'refInputKey',
        value: function (ne) {
          this.state.inputRefKey = ne;
        },
      },
      {
        key: 'refInputValue',
        value: function (ne) {
          this.state.inputRefValue = ne;
        },
      },
      {
        key: 'render',
        value: function () {
          var ne = this.props,
            oe = ne.handleCancel,
            ie = ne.onlyValue,
            le = ne.addButtonElement,
            ce = ne.cancelButtonElement,
            se = ne.inputElementGenerator,
            ue = ne.keyPath,
            pe = ne.deep,
            fe = rn(le, { onClick: this.onSubmit }),
            ge = rn(ce, { onClick: oe }),
            de = se(VALUE, ue, pe),
            me = rn(de, { placeholder: 'Value', ref: this.refInputValue }),
            he = null;
          if (!ie) {
            var ve = se(KEY, ue, pe);
            he = rn(ve, { placeholder: 'Key', ref: this.refInputKey });
          }
          return React__default.createElement(
            'span',
            { className: 'rejt-add-value-node' },
            he,
            me,
            ge,
            fe,
          );
        },
      },
    ]),
    re
  );
})(d$2);
JsonAddValue.defaultProps = {
  onlyValue: !1,
  addButtonElement: React__default.createElement('button', null, '+'),
  cancelButtonElement: React__default.createElement('button', null, 'c'),
};
var JsonArray = (function (te) {
  _inherits(re, te);
  var ee = _createSuper(re);
  function re(ae) {
    var ne;
    _classCallCheck(this, re), (ne = ee.call(this, ae));
    var oe = [].concat(_toConsumableArray$1(ae.keyPath), [ae.name]);
    return (
      (ne.state = {
        data: ae.data,
        name: ae.name,
        keyPath: oe,
        deep: ae.deep,
        nextDeep: ae.deep + 1,
        collapsed: ae.isCollapsed(oe, ae.deep, ae.data),
        addFormVisible: !1,
      }),
      (ne.handleCollapseMode = ne.handleCollapseMode.bind(_assertThisInitialized2(ne))),
      (ne.handleRemoveItem = ne.handleRemoveItem.bind(_assertThisInitialized2(ne))),
      (ne.handleAddMode = ne.handleAddMode.bind(_assertThisInitialized2(ne))),
      (ne.handleAddValueAdd = ne.handleAddValueAdd.bind(_assertThisInitialized2(ne))),
      (ne.handleAddValueCancel = ne.handleAddValueCancel.bind(_assertThisInitialized2(ne))),
      (ne.handleEditValue = ne.handleEditValue.bind(_assertThisInitialized2(ne))),
      (ne.onChildUpdate = ne.onChildUpdate.bind(_assertThisInitialized2(ne))),
      (ne.renderCollapsed = ne.renderCollapsed.bind(_assertThisInitialized2(ne))),
      (ne.renderNotCollapsed = ne.renderNotCollapsed.bind(_assertThisInitialized2(ne))),
      ne
    );
  }
  return (
    _createClass(
      re,
      [
        {
          key: 'onChildUpdate',
          value: function (ne, oe) {
            var ie = this.state,
              le = ie.data,
              ce = ie.keyPath;
            (le[ne] = oe), this.setState({ data: le });
            var se = this.props.onUpdate,
              ue = ce.length;
            se(ce[ue - 1], le);
          },
        },
        {
          key: 'handleAddMode',
          value: function () {
            this.setState({ addFormVisible: !0 });
          },
        },
        {
          key: 'handleCollapseMode',
          value: function () {
            this.setState(function (ne) {
              return { collapsed: !ne.collapsed };
            });
          },
        },
        {
          key: 'handleRemoveItem',
          value: function (ne) {
            var oe = this;
            return function () {
              var ie = oe.props,
                le = ie.beforeRemoveAction,
                ce = ie.logger,
                se = oe.state,
                ue = se.data,
                pe = se.keyPath,
                fe = se.nextDeep,
                ge = ue[ne];
              le(ne, pe, fe, ge)
                .then(function () {
                  var de = {
                    keyPath: pe,
                    deep: fe,
                    key: ne,
                    oldValue: ge,
                    type: REMOVE_DELTA_TYPE,
                  };
                  ue.splice(ne, 1), oe.setState({ data: ue });
                  var me = oe.props,
                    he = me.onUpdate,
                    ve = me.onDeltaUpdate;
                  he(pe[pe.length - 1], ue), ve(de);
                })
                .catch(ce.error);
            };
          },
        },
        {
          key: 'handleAddValueAdd',
          value: function (ne) {
            var oe = this,
              ie = ne.newValue,
              le = this.state,
              ce = le.data,
              se = le.keyPath,
              ue = le.nextDeep,
              pe = this.props,
              fe = pe.beforeAddAction,
              ge = pe.logger;
            fe(ce.length, se, ue, ie)
              .then(function () {
                var de = [].concat(_toConsumableArray$1(ce), [ie]);
                oe.setState({ data: de }), oe.handleAddValueCancel();
                var me = oe.props,
                  he = me.onUpdate,
                  ve = me.onDeltaUpdate;
                he(se[se.length - 1], de),
                  ve({
                    type: ADD_DELTA_TYPE,
                    keyPath: se,
                    deep: ue,
                    key: de.length - 1,
                    newValue: ie,
                  });
              })
              .catch(ge.error);
          },
        },
        {
          key: 'handleAddValueCancel',
          value: function () {
            this.setState({ addFormVisible: !1 });
          },
        },
        {
          key: 'handleEditValue',
          value: function (ne) {
            var oe = this,
              ie = ne.key,
              le = ne.value;
            return new Promise(function (ce, se) {
              var ue = oe.props.beforeUpdateAction,
                pe = oe.state,
                fe = pe.data,
                ge = pe.keyPath,
                de = pe.nextDeep,
                me = fe[ie];
              ue(ie, ge, de, me, le)
                .then(function () {
                  (fe[ie] = le), oe.setState({ data: fe });
                  var he = oe.props,
                    ve = he.onUpdate,
                    ye = he.onDeltaUpdate;
                  ve(ge[ge.length - 1], fe),
                    ye({
                      type: UPDATE_DELTA_TYPE,
                      keyPath: ge,
                      deep: de,
                      key: ie,
                      newValue: le,
                      oldValue: me,
                    }),
                    ce(void 0);
                })
                .catch(se);
            });
          },
        },
        {
          key: 'renderCollapsed',
          value: function () {
            var ne = this.state,
              oe = ne.name,
              ie = ne.data,
              le = ne.keyPath,
              ce = ne.deep,
              se = this.props,
              ue = se.handleRemove,
              pe = se.readOnly,
              fe = se.getStyle,
              ge = se.dataType,
              de = se.minusMenuElement,
              me = fe(oe, ie, le, ce, ge),
              he = me.minus,
              ve = me.collapsed,
              ye = pe(oe, ie, le, ce, ge),
              be = rn(de, { onClick: ue, className: 'rejt-minus-menu', style: he });
            return React__default.createElement(
              'span',
              { className: 'rejt-collapsed' },
              React__default.createElement(
                'span',
                { className: 'rejt-collapsed-text', style: ve, onClick: this.handleCollapseMode },
                '[...] ',
                ie.length,
                ' ',
                ie.length === 1 ? 'item' : 'items',
              ),
              !ye && be,
            );
          },
        },
        {
          key: 'renderNotCollapsed',
          value: function () {
            var ne = this,
              oe = this.state,
              ie = oe.name,
              le = oe.data,
              ce = oe.keyPath,
              se = oe.deep,
              ue = oe.addFormVisible,
              pe = oe.nextDeep,
              fe = this.props,
              ge = fe.isCollapsed,
              de = fe.handleRemove,
              me = fe.onDeltaUpdate,
              he = fe.readOnly,
              ve = fe.getStyle,
              ye = fe.dataType,
              be = fe.addButtonElement,
              _e = fe.cancelButtonElement,
              Te = fe.editButtonElement,
              Se = fe.inputElementGenerator,
              $e = fe.textareaElementGenerator,
              Ee = fe.minusMenuElement,
              xe = fe.plusMenuElement,
              Ae = fe.beforeRemoveAction,
              Ce = fe.beforeAddAction,
              Re = fe.beforeUpdateAction,
              Oe = fe.logger,
              we = fe.onSubmitValueParser,
              ke = ve(ie, le, ce, se, ye),
              Be = ke.minus,
              Fe = ke.plus,
              je = ke.delimiter,
              De = ke.ul,
              Pe = ke.addForm,
              Me = he(ie, le, ce, se, ye),
              Ie = rn(xe, { onClick: this.handleAddMode, className: 'rejt-plus-menu', style: Fe }),
              Ne = rn(Ee, { onClick: de, className: 'rejt-minus-menu', style: Be }),
              He = !0,
              ze = '[',
              Ve = ']';
            return React__default.createElement(
              'span',
              { className: 'rejt-not-collapsed' },
              React__default.createElement(
                'span',
                { className: 'rejt-not-collapsed-delimiter', style: je },
                ze,
              ),
              !ue && Ie,
              React__default.createElement(
                'ul',
                { className: 'rejt-not-collapsed-list', style: De },
                le.map(function (Ue, Le) {
                  return React__default.createElement(JsonNode, {
                    key: Le,
                    name: ''.concat(Le),
                    data: Ue,
                    keyPath: ce,
                    deep: pe,
                    isCollapsed: ge,
                    handleRemove: ne.handleRemoveItem(Le),
                    handleUpdateValue: ne.handleEditValue,
                    onUpdate: ne.onChildUpdate,
                    onDeltaUpdate: me,
                    readOnly: he,
                    getStyle: ve,
                    addButtonElement: be,
                    cancelButtonElement: _e,
                    editButtonElement: Te,
                    inputElementGenerator: Se,
                    textareaElementGenerator: $e,
                    minusMenuElement: Ee,
                    plusMenuElement: xe,
                    beforeRemoveAction: Ae,
                    beforeAddAction: Ce,
                    beforeUpdateAction: Re,
                    logger: Oe,
                    onSubmitValueParser: we,
                  });
                }),
              ),
              !Me &&
                ue &&
                React__default.createElement(
                  'div',
                  { className: 'rejt-add-form', style: Pe },
                  React__default.createElement(JsonAddValue, {
                    handleAdd: this.handleAddValueAdd,
                    handleCancel: this.handleAddValueCancel,
                    onlyValue: He,
                    addButtonElement: be,
                    cancelButtonElement: _e,
                    inputElementGenerator: Se,
                    keyPath: ce,
                    deep: se,
                    onSubmitValueParser: we,
                  }),
                ),
              React__default.createElement(
                'span',
                { className: 'rejt-not-collapsed-delimiter', style: je },
                Ve,
              ),
              !Me && Ne,
            );
          },
        },
        {
          key: 'render',
          value: function () {
            var ne = this.state,
              oe = ne.name,
              ie = ne.collapsed,
              le = ne.data,
              ce = ne.keyPath,
              se = ne.deep,
              ue = this.props,
              pe = ue.dataType,
              fe = ue.getStyle,
              ge = ie ? this.renderCollapsed() : this.renderNotCollapsed(),
              de = fe(oe, le, ce, se, pe);
            return React__default.createElement(
              'div',
              { className: 'rejt-array-node' },
              React__default.createElement(
                'span',
                { onClick: this.handleCollapseMode },
                React__default.createElement(
                  'span',
                  { className: 'rejt-name', style: de.name },
                  oe,
                  ' :',
                  ' ',
                ),
              ),
              ge,
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (ne, oe) {
            return ne.data !== oe.data ? { data: ne.data } : null;
          },
        },
      ],
    ),
    re
  );
})(d$2);
JsonArray.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: React__default.createElement('span', null, ' - '),
  plusMenuElement: React__default.createElement('span', null, ' + '),
};
var JsonFunctionValue = (function (te) {
  _inherits(re, te);
  var ee = _createSuper(re);
  function re(ae) {
    var ne;
    _classCallCheck(this, re), (ne = ee.call(this, ae));
    var oe = [].concat(_toConsumableArray$1(ae.keyPath), [ae.name]);
    return (
      (ne.state = {
        value: ae.value,
        name: ae.name,
        keyPath: oe,
        deep: ae.deep,
        editEnabled: !1,
        inputRef: null,
      }),
      (ne.handleEditMode = ne.handleEditMode.bind(_assertThisInitialized2(ne))),
      (ne.refInput = ne.refInput.bind(_assertThisInitialized2(ne))),
      (ne.handleCancelEdit = ne.handleCancelEdit.bind(_assertThisInitialized2(ne))),
      (ne.handleEdit = ne.handleEdit.bind(_assertThisInitialized2(ne))),
      (ne.onKeydown = ne.onKeydown.bind(_assertThisInitialized2(ne))),
      ne
    );
  }
  return (
    _createClass(
      re,
      [
        {
          key: 'componentDidUpdate',
          value: function () {
            var ne = this.state,
              oe = ne.editEnabled,
              ie = ne.inputRef,
              le = ne.name,
              ce = ne.value,
              se = ne.keyPath,
              ue = ne.deep,
              pe = this.props,
              fe = pe.readOnly,
              ge = pe.dataType,
              de = fe(le, ce, se, ue, ge);
            oe && !de && typeof ie.focus == 'function' && ie.focus();
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            document.addEventListener('keydown', this.onKeydown);
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            document.removeEventListener('keydown', this.onKeydown);
          },
        },
        {
          key: 'onKeydown',
          value: function (ne) {
            ne.altKey ||
              ne.ctrlKey ||
              ne.metaKey ||
              ne.shiftKey ||
              ne.repeat ||
              ((ne.code === 'Enter' || ne.key === 'Enter') &&
                (ne.preventDefault(), this.handleEdit()),
              (ne.code === 'Escape' || ne.key === 'Escape') &&
                (ne.preventDefault(), this.handleCancelEdit()));
          },
        },
        {
          key: 'handleEdit',
          value: function () {
            var ne = this,
              oe = this.props,
              ie = oe.handleUpdateValue,
              le = oe.originalValue,
              ce = oe.logger,
              se = oe.onSubmitValueParser,
              ue = oe.keyPath,
              pe = this.state,
              fe = pe.inputRef,
              ge = pe.name,
              de = pe.deep;
            if (!!fe) {
              var me = se(!0, ue, de, ge, fe.value),
                he = { value: me, key: ge };
              ie(he)
                .then(function () {
                  isComponentWillChange(le, me) || ne.handleCancelEdit();
                })
                .catch(ce.error);
            }
          },
        },
        {
          key: 'handleEditMode',
          value: function () {
            this.setState({ editEnabled: !0 });
          },
        },
        {
          key: 'refInput',
          value: function (ne) {
            this.state.inputRef = ne;
          },
        },
        {
          key: 'handleCancelEdit',
          value: function () {
            this.setState({ editEnabled: !1 });
          },
        },
        {
          key: 'render',
          value: function () {
            var ne = this.state,
              oe = ne.name,
              ie = ne.value,
              le = ne.editEnabled,
              ce = ne.keyPath,
              se = ne.deep,
              ue = this.props,
              pe = ue.handleRemove,
              fe = ue.originalValue,
              ge = ue.readOnly,
              de = ue.dataType,
              me = ue.getStyle,
              he = ue.editButtonElement,
              ve = ue.cancelButtonElement,
              ye = ue.textareaElementGenerator,
              be = ue.minusMenuElement,
              _e = ue.keyPath,
              Te = me(oe, fe, ce, se, de),
              Se = null,
              $e = null,
              Ee = ge(oe, fe, ce, se, de);
            if (le && !Ee) {
              var xe = ye(VALUE, _e, se, oe, fe, de),
                Ae = rn(he, { onClick: this.handleEdit }),
                Ce = rn(ve, { onClick: this.handleCancelEdit }),
                Re = rn(xe, { ref: this.refInput, defaultValue: fe });
              (Se = React__default.createElement(
                'span',
                { className: 'rejt-edit-form', style: Te.editForm },
                Re,
                ' ',
                Ce,
                Ae,
              )),
                ($e = null);
            } else {
              Se = React__default.createElement(
                'span',
                {
                  className: 'rejt-value',
                  style: Te.value,
                  onClick: Ee ? null : this.handleEditMode,
                },
                ie,
              );
              var Oe = rn(be, { onClick: pe, className: 'rejt-minus-menu', style: Te.minus });
              $e = Ee ? null : Oe;
            }
            return React__default.createElement(
              'li',
              { className: 'rejt-function-value-node', style: Te.li },
              React__default.createElement(
                'span',
                { className: 'rejt-name', style: Te.name },
                oe,
                ' :',
                ' ',
              ),
              Se,
              $e,
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (ne, oe) {
            return ne.value !== oe.value ? { value: ne.value } : null;
          },
        },
      ],
    ),
    re
  );
})(d$2);
JsonFunctionValue.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: function () {},
  editButtonElement: React__default.createElement('button', null, 'e'),
  cancelButtonElement: React__default.createElement('button', null, 'c'),
  minusMenuElement: React__default.createElement('span', null, ' - '),
};
var JsonNode = (function (te) {
  _inherits(re, te);
  var ee = _createSuper(re);
  function re(ae) {
    var ne;
    return (
      _classCallCheck(this, re),
      (ne = ee.call(this, ae)),
      (ne.state = { data: ae.data, name: ae.name, keyPath: ae.keyPath, deep: ae.deep }),
      ne
    );
  }
  return (
    _createClass(
      re,
      [
        {
          key: 'render',
          value: function () {
            var ne = this.state,
              oe = ne.data,
              ie = ne.name,
              le = ne.keyPath,
              ce = ne.deep,
              se = this.props,
              ue = se.isCollapsed,
              pe = se.handleRemove,
              fe = se.handleUpdateValue,
              ge = se.onUpdate,
              de = se.onDeltaUpdate,
              me = se.readOnly,
              he = se.getStyle,
              ve = se.addButtonElement,
              ye = se.cancelButtonElement,
              be = se.editButtonElement,
              _e = se.inputElementGenerator,
              Te = se.textareaElementGenerator,
              Se = se.minusMenuElement,
              $e = se.plusMenuElement,
              Ee = se.beforeRemoveAction,
              xe = se.beforeAddAction,
              Ae = se.beforeUpdateAction,
              Ce = se.logger,
              Re = se.onSubmitValueParser,
              Oe = function () {
                return !0;
              },
              we = getObjectType(oe);
            switch (we) {
              case ERROR:
                return React__default.createElement(JsonObject, {
                  data: oe,
                  name: ie,
                  isCollapsed: ue,
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  onUpdate: ge,
                  onDeltaUpdate: de,
                  readOnly: Oe,
                  dataType: we,
                  getStyle: he,
                  addButtonElement: ve,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  textareaElementGenerator: Te,
                  minusMenuElement: Se,
                  plusMenuElement: $e,
                  beforeRemoveAction: Ee,
                  beforeAddAction: xe,
                  beforeUpdateAction: Ae,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case OBJECT:
                return React__default.createElement(JsonObject, {
                  data: oe,
                  name: ie,
                  isCollapsed: ue,
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  onUpdate: ge,
                  onDeltaUpdate: de,
                  readOnly: me,
                  dataType: we,
                  getStyle: he,
                  addButtonElement: ve,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  textareaElementGenerator: Te,
                  minusMenuElement: Se,
                  plusMenuElement: $e,
                  beforeRemoveAction: Ee,
                  beforeAddAction: xe,
                  beforeUpdateAction: Ae,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case ARRAY:
                return React__default.createElement(JsonArray, {
                  data: oe,
                  name: ie,
                  isCollapsed: ue,
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  onUpdate: ge,
                  onDeltaUpdate: de,
                  readOnly: me,
                  dataType: we,
                  getStyle: he,
                  addButtonElement: ve,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  textareaElementGenerator: Te,
                  minusMenuElement: Se,
                  plusMenuElement: $e,
                  beforeRemoveAction: Ee,
                  beforeAddAction: xe,
                  beforeUpdateAction: Ae,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case STRING:
                return React__default.createElement(JsonValue, {
                  name: ie,
                  value: '"'.concat(oe, '"'),
                  originalValue: oe,
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  handleUpdateValue: fe,
                  readOnly: me,
                  dataType: we,
                  getStyle: he,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  minusMenuElement: Se,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case NUMBER:
                return React__default.createElement(JsonValue, {
                  name: ie,
                  value: oe,
                  originalValue: oe,
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  handleUpdateValue: fe,
                  readOnly: me,
                  dataType: we,
                  getStyle: he,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  minusMenuElement: Se,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case BOOLEAN:
                return React__default.createElement(JsonValue, {
                  name: ie,
                  value: oe ? 'true' : 'false',
                  originalValue: oe,
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  handleUpdateValue: fe,
                  readOnly: me,
                  dataType: we,
                  getStyle: he,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  minusMenuElement: Se,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case DATE:
                return React__default.createElement(JsonValue, {
                  name: ie,
                  value: oe.toISOString(),
                  originalValue: oe,
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  handleUpdateValue: fe,
                  readOnly: Oe,
                  dataType: we,
                  getStyle: he,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  minusMenuElement: Se,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case NULL:
                return React__default.createElement(JsonValue, {
                  name: ie,
                  value: 'null',
                  originalValue: 'null',
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  handleUpdateValue: fe,
                  readOnly: me,
                  dataType: we,
                  getStyle: he,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  minusMenuElement: Se,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case UNDEFINED:
                return React__default.createElement(JsonValue, {
                  name: ie,
                  value: 'undefined',
                  originalValue: 'undefined',
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  handleUpdateValue: fe,
                  readOnly: me,
                  dataType: we,
                  getStyle: he,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  minusMenuElement: Se,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case FUNCTION:
                return React__default.createElement(JsonFunctionValue, {
                  name: ie,
                  value: oe.toString(),
                  originalValue: oe,
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  handleUpdateValue: fe,
                  readOnly: me,
                  dataType: we,
                  getStyle: he,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  textareaElementGenerator: Te,
                  minusMenuElement: Se,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              case SYMBOL:
                return React__default.createElement(JsonValue, {
                  name: ie,
                  value: oe.toString(),
                  originalValue: oe,
                  keyPath: le,
                  deep: ce,
                  handleRemove: pe,
                  handleUpdateValue: fe,
                  readOnly: Oe,
                  dataType: we,
                  getStyle: he,
                  cancelButtonElement: ye,
                  editButtonElement: be,
                  inputElementGenerator: _e,
                  minusMenuElement: Se,
                  logger: Ce,
                  onSubmitValueParser: Re,
                });
              default:
                return null;
            }
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (ne, oe) {
            return ne.data !== oe.data ? { data: ne.data } : null;
          },
        },
      ],
    ),
    re
  );
})(d$2);
JsonNode.defaultProps = { keyPath: [], deep: 0 };
var JsonObject = (function (te) {
  _inherits(re, te);
  var ee = _createSuper(re);
  function re(ae) {
    var ne;
    _classCallCheck(this, re), (ne = ee.call(this, ae));
    var oe = ae.deep === -1 ? [] : [].concat(_toConsumableArray$1(ae.keyPath), [ae.name]);
    return (
      (ne.state = {
        name: ae.name,
        data: ae.data,
        keyPath: oe,
        deep: ae.deep,
        nextDeep: ae.deep + 1,
        collapsed: ae.isCollapsed(oe, ae.deep, ae.data),
        addFormVisible: !1,
      }),
      (ne.handleCollapseMode = ne.handleCollapseMode.bind(_assertThisInitialized2(ne))),
      (ne.handleRemoveValue = ne.handleRemoveValue.bind(_assertThisInitialized2(ne))),
      (ne.handleAddMode = ne.handleAddMode.bind(_assertThisInitialized2(ne))),
      (ne.handleAddValueAdd = ne.handleAddValueAdd.bind(_assertThisInitialized2(ne))),
      (ne.handleAddValueCancel = ne.handleAddValueCancel.bind(_assertThisInitialized2(ne))),
      (ne.handleEditValue = ne.handleEditValue.bind(_assertThisInitialized2(ne))),
      (ne.onChildUpdate = ne.onChildUpdate.bind(_assertThisInitialized2(ne))),
      (ne.renderCollapsed = ne.renderCollapsed.bind(_assertThisInitialized2(ne))),
      (ne.renderNotCollapsed = ne.renderNotCollapsed.bind(_assertThisInitialized2(ne))),
      ne
    );
  }
  return (
    _createClass(
      re,
      [
        {
          key: 'onChildUpdate',
          value: function (ne, oe) {
            var ie = this.state,
              le = ie.data,
              ce = ie.keyPath;
            (le[ne] = oe), this.setState({ data: le });
            var se = this.props.onUpdate,
              ue = ce.length;
            se(ce[ue - 1], le);
          },
        },
        {
          key: 'handleAddMode',
          value: function () {
            this.setState({ addFormVisible: !0 });
          },
        },
        {
          key: 'handleAddValueCancel',
          value: function () {
            this.setState({ addFormVisible: !1 });
          },
        },
        {
          key: 'handleAddValueAdd',
          value: function (ne) {
            var oe = this,
              ie = ne.key,
              le = ne.newValue,
              ce = this.state,
              se = ce.data,
              ue = ce.keyPath,
              pe = ce.nextDeep,
              fe = this.props,
              ge = fe.beforeAddAction,
              de = fe.logger;
            ge(ie, ue, pe, le)
              .then(function () {
                (se[ie] = le), oe.setState({ data: se }), oe.handleAddValueCancel();
                var me = oe.props,
                  he = me.onUpdate,
                  ve = me.onDeltaUpdate;
                he(ue[ue.length - 1], se),
                  ve({ type: ADD_DELTA_TYPE, keyPath: ue, deep: pe, key: ie, newValue: le });
              })
              .catch(de.error);
          },
        },
        {
          key: 'handleRemoveValue',
          value: function (ne) {
            var oe = this;
            return function () {
              var ie = oe.props,
                le = ie.beforeRemoveAction,
                ce = ie.logger,
                se = oe.state,
                ue = se.data,
                pe = se.keyPath,
                fe = se.nextDeep,
                ge = ue[ne];
              le(ne, pe, fe, ge)
                .then(function () {
                  var de = {
                    keyPath: pe,
                    deep: fe,
                    key: ne,
                    oldValue: ge,
                    type: REMOVE_DELTA_TYPE,
                  };
                  delete ue[ne], oe.setState({ data: ue });
                  var me = oe.props,
                    he = me.onUpdate,
                    ve = me.onDeltaUpdate;
                  he(pe[pe.length - 1], ue), ve(de);
                })
                .catch(ce.error);
            };
          },
        },
        {
          key: 'handleCollapseMode',
          value: function () {
            this.setState(function (ne) {
              return { collapsed: !ne.collapsed };
            });
          },
        },
        {
          key: 'handleEditValue',
          value: function (ne) {
            var oe = this,
              ie = ne.key,
              le = ne.value;
            return new Promise(function (ce, se) {
              var ue = oe.props.beforeUpdateAction,
                pe = oe.state,
                fe = pe.data,
                ge = pe.keyPath,
                de = pe.nextDeep,
                me = fe[ie];
              ue(ie, ge, de, me, le)
                .then(function () {
                  (fe[ie] = le), oe.setState({ data: fe });
                  var he = oe.props,
                    ve = he.onUpdate,
                    ye = he.onDeltaUpdate;
                  ve(ge[ge.length - 1], fe),
                    ye({
                      type: UPDATE_DELTA_TYPE,
                      keyPath: ge,
                      deep: de,
                      key: ie,
                      newValue: le,
                      oldValue: me,
                    }),
                    ce();
                })
                .catch(se);
            });
          },
        },
        {
          key: 'renderCollapsed',
          value: function () {
            var ne = this.state,
              oe = ne.name,
              ie = ne.keyPath,
              le = ne.deep,
              ce = ne.data,
              se = this.props,
              ue = se.handleRemove,
              pe = se.readOnly,
              fe = se.dataType,
              ge = se.getStyle,
              de = se.minusMenuElement,
              me = ge(oe, ce, ie, le, fe),
              he = me.minus,
              ve = me.collapsed,
              ye = Object.getOwnPropertyNames(ce),
              be = pe(oe, ce, ie, le, fe),
              _e = rn(de, { onClick: ue, className: 'rejt-minus-menu', style: he });
            return React__default.createElement(
              'span',
              { className: 'rejt-collapsed' },
              React__default.createElement(
                'span',
                { className: 'rejt-collapsed-text', style: ve, onClick: this.handleCollapseMode },
                '{...}',
                ' ',
                ye.length,
                ' ',
                ye.length === 1 ? 'key' : 'keys',
              ),
              !be && _e,
            );
          },
        },
        {
          key: 'renderNotCollapsed',
          value: function () {
            var ne = this,
              oe = this.state,
              ie = oe.name,
              le = oe.data,
              ce = oe.keyPath,
              se = oe.deep,
              ue = oe.nextDeep,
              pe = oe.addFormVisible,
              fe = this.props,
              ge = fe.isCollapsed,
              de = fe.handleRemove,
              me = fe.onDeltaUpdate,
              he = fe.readOnly,
              ve = fe.getStyle,
              ye = fe.dataType,
              be = fe.addButtonElement,
              _e = fe.cancelButtonElement,
              Te = fe.editButtonElement,
              Se = fe.inputElementGenerator,
              $e = fe.textareaElementGenerator,
              Ee = fe.minusMenuElement,
              xe = fe.plusMenuElement,
              Ae = fe.beforeRemoveAction,
              Ce = fe.beforeAddAction,
              Re = fe.beforeUpdateAction,
              Oe = fe.logger,
              we = fe.onSubmitValueParser,
              ke = ve(ie, le, ce, se, ye),
              Be = ke.minus,
              Fe = ke.plus,
              je = ke.addForm,
              De = ke.ul,
              Pe = ke.delimiter,
              Me = Object.getOwnPropertyNames(le),
              Ie = he(ie, le, ce, se, ye),
              Ne = rn(xe, { onClick: this.handleAddMode, className: 'rejt-plus-menu', style: Fe }),
              He = rn(Ee, { onClick: de, className: 'rejt-minus-menu', style: Be }),
              ze = Me.map(function (Le) {
                return React__default.createElement(JsonNode, {
                  key: Le,
                  name: Le,
                  data: le[Le],
                  keyPath: ce,
                  deep: ue,
                  isCollapsed: ge,
                  handleRemove: ne.handleRemoveValue(Le),
                  handleUpdateValue: ne.handleEditValue,
                  onUpdate: ne.onChildUpdate,
                  onDeltaUpdate: me,
                  readOnly: he,
                  getStyle: ve,
                  addButtonElement: be,
                  cancelButtonElement: _e,
                  editButtonElement: Te,
                  inputElementGenerator: Se,
                  textareaElementGenerator: $e,
                  minusMenuElement: Ee,
                  plusMenuElement: xe,
                  beforeRemoveAction: Ae,
                  beforeAddAction: Ce,
                  beforeUpdateAction: Re,
                  logger: Oe,
                  onSubmitValueParser: we,
                });
              }),
              Ve = '{',
              Ue = '}';
            return React__default.createElement(
              'span',
              { className: 'rejt-not-collapsed' },
              React__default.createElement(
                'span',
                { className: 'rejt-not-collapsed-delimiter', style: Pe },
                Ve,
              ),
              !Ie && Ne,
              React__default.createElement(
                'ul',
                { className: 'rejt-not-collapsed-list', style: De },
                ze,
              ),
              !Ie &&
                pe &&
                React__default.createElement(
                  'div',
                  { className: 'rejt-add-form', style: je },
                  React__default.createElement(JsonAddValue, {
                    handleAdd: this.handleAddValueAdd,
                    handleCancel: this.handleAddValueCancel,
                    addButtonElement: be,
                    cancelButtonElement: _e,
                    inputElementGenerator: Se,
                    keyPath: ce,
                    deep: se,
                    onSubmitValueParser: we,
                  }),
                ),
              React__default.createElement(
                'span',
                { className: 'rejt-not-collapsed-delimiter', style: Pe },
                Ue,
              ),
              !Ie && He,
            );
          },
        },
        {
          key: 'render',
          value: function () {
            var ne = this.state,
              oe = ne.name,
              ie = ne.collapsed,
              le = ne.data,
              ce = ne.keyPath,
              se = ne.deep,
              ue = this.props,
              pe = ue.getStyle,
              fe = ue.dataType,
              ge = ie ? this.renderCollapsed() : this.renderNotCollapsed(),
              de = pe(oe, le, ce, se, fe);
            return React__default.createElement(
              'div',
              { className: 'rejt-object-node' },
              React__default.createElement(
                'span',
                { onClick: this.handleCollapseMode },
                React__default.createElement(
                  'span',
                  { className: 'rejt-name', style: de.name },
                  oe,
                  ' :',
                  ' ',
                ),
              ),
              ge,
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (ne, oe) {
            return ne.data !== oe.data ? { data: ne.data } : null;
          },
        },
      ],
    ),
    re
  );
})(d$2);
JsonObject.defaultProps = {
  keyPath: [],
  deep: 0,
  minusMenuElement: React__default.createElement('span', null, ' - '),
  plusMenuElement: React__default.createElement('span', null, ' + '),
};
var JsonValue = (function (te) {
  _inherits(re, te);
  var ee = _createSuper(re);
  function re(ae) {
    var ne;
    _classCallCheck(this, re), (ne = ee.call(this, ae));
    var oe = [].concat(_toConsumableArray$1(ae.keyPath), [ae.name]);
    return (
      (ne.state = {
        value: ae.value,
        name: ae.name,
        keyPath: oe,
        deep: ae.deep,
        editEnabled: !1,
        inputRef: null,
      }),
      (ne.handleEditMode = ne.handleEditMode.bind(_assertThisInitialized2(ne))),
      (ne.refInput = ne.refInput.bind(_assertThisInitialized2(ne))),
      (ne.handleCancelEdit = ne.handleCancelEdit.bind(_assertThisInitialized2(ne))),
      (ne.handleEdit = ne.handleEdit.bind(_assertThisInitialized2(ne))),
      (ne.onKeydown = ne.onKeydown.bind(_assertThisInitialized2(ne))),
      ne
    );
  }
  return (
    _createClass(
      re,
      [
        {
          key: 'componentDidUpdate',
          value: function () {
            var ne = this.state,
              oe = ne.editEnabled,
              ie = ne.inputRef,
              le = ne.name,
              ce = ne.value,
              se = ne.keyPath,
              ue = ne.deep,
              pe = this.props,
              fe = pe.readOnly,
              ge = pe.dataType,
              de = fe(le, ce, se, ue, ge);
            oe && !de && typeof ie.focus == 'function' && ie.focus();
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            document.addEventListener('keydown', this.onKeydown);
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            document.removeEventListener('keydown', this.onKeydown);
          },
        },
        {
          key: 'onKeydown',
          value: function (ne) {
            ne.altKey ||
              ne.ctrlKey ||
              ne.metaKey ||
              ne.shiftKey ||
              ne.repeat ||
              ((ne.code === 'Enter' || ne.key === 'Enter') &&
                (ne.preventDefault(), this.handleEdit()),
              (ne.code === 'Escape' || ne.key === 'Escape') &&
                (ne.preventDefault(), this.handleCancelEdit()));
          },
        },
        {
          key: 'handleEdit',
          value: function () {
            var ne = this,
              oe = this.props,
              ie = oe.handleUpdateValue,
              le = oe.originalValue,
              ce = oe.logger,
              se = oe.onSubmitValueParser,
              ue = oe.keyPath,
              pe = this.state,
              fe = pe.inputRef,
              ge = pe.name,
              de = pe.deep;
            if (!!fe) {
              var me = se(!0, ue, de, ge, fe.value),
                he = { value: me, key: ge };
              ie(he)
                .then(function () {
                  isComponentWillChange(le, me) || ne.handleCancelEdit();
                })
                .catch(ce.error);
            }
          },
        },
        {
          key: 'handleEditMode',
          value: function () {
            this.setState({ editEnabled: !0 });
          },
        },
        {
          key: 'refInput',
          value: function (ne) {
            this.state.inputRef = ne;
          },
        },
        {
          key: 'handleCancelEdit',
          value: function () {
            this.setState({ editEnabled: !1 });
          },
        },
        {
          key: 'render',
          value: function () {
            var ne = this.state,
              oe = ne.name,
              ie = ne.value,
              le = ne.editEnabled,
              ce = ne.keyPath,
              se = ne.deep,
              ue = this.props,
              pe = ue.handleRemove,
              fe = ue.originalValue,
              ge = ue.readOnly,
              de = ue.dataType,
              me = ue.getStyle,
              he = ue.editButtonElement,
              ve = ue.cancelButtonElement,
              ye = ue.inputElementGenerator,
              be = ue.minusMenuElement,
              _e = ue.keyPath,
              Te = me(oe, fe, ce, se, de),
              Se = ge(oe, fe, ce, se, de),
              $e = le && !Se,
              Ee = ye(VALUE, _e, se, oe, fe, de),
              xe = rn(he, { onClick: this.handleEdit }),
              Ae = rn(ve, { onClick: this.handleCancelEdit }),
              Ce = rn(Ee, { ref: this.refInput, defaultValue: JSON.stringify(fe) }),
              Re = rn(be, { onClick: pe, className: 'rejt-minus-menu', style: Te.minus });
            return React__default.createElement(
              'li',
              { className: 'rejt-value-node', style: Te.li },
              React__default.createElement(
                'span',
                { className: 'rejt-name', style: Te.name },
                oe,
                ' : ',
              ),
              $e
                ? React__default.createElement(
                    'span',
                    { className: 'rejt-edit-form', style: Te.editForm },
                    Ce,
                    ' ',
                    Ae,
                    xe,
                  )
                : React__default.createElement(
                    'span',
                    {
                      className: 'rejt-value',
                      style: Te.value,
                      onClick: Se ? null : this.handleEditMode,
                    },
                    String(ie),
                  ),
              !Se && !$e && Re,
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (ne, oe) {
            return ne.value !== oe.value ? { value: ne.value } : null;
          },
        },
      ],
    ),
    re
  );
})(d$2);
JsonValue.defaultProps = {
  keyPath: [],
  deep: 0,
  handleUpdateValue: function () {
    return Promise.resolve();
  },
  editButtonElement: React__default.createElement('button', null, 'e'),
  cancelButtonElement: React__default.createElement('button', null, 'c'),
  minusMenuElement: React__default.createElement('span', null, ' - '),
};
var object = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {},
  },
  array = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {},
  },
  value = {
    minus: { color: 'red' },
    editForm: {},
    value: { color: '#7bba3d' },
    li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
    name: { color: '#2287CD' },
  };
function parse(string) {
  var result = string;
  if (result.indexOf('function') === 0) return eval('('.concat(result, ')'));
  try {
    result = JSON.parse(string);
  } catch (te) {}
  return result;
}
var JsonTree = (function (te) {
  _inherits(re, te);
  var ee = _createSuper(re);
  function re(ae) {
    var ne;
    return (
      _classCallCheck(this, re),
      (ne = ee.call(this, ae)),
      (ne.state = { data: ae.data, rootName: ae.rootName }),
      (ne.onUpdate = ne.onUpdate.bind(_assertThisInitialized2(ne))),
      (ne.removeRoot = ne.removeRoot.bind(_assertThisInitialized2(ne))),
      ne
    );
  }
  return (
    _createClass(
      re,
      [
        {
          key: 'onUpdate',
          value: function (ne, oe) {
            this.setState({ data: oe }), this.props.onFullyUpdate(oe);
          },
        },
        {
          key: 'removeRoot',
          value: function () {
            this.onUpdate(null, null);
          },
        },
        {
          key: 'render',
          value: function () {
            var ne = this.state,
              oe = ne.data,
              ie = ne.rootName,
              le = this.props,
              ce = le.isCollapsed,
              se = le.onDeltaUpdate,
              ue = le.readOnly,
              pe = le.getStyle,
              fe = le.addButtonElement,
              ge = le.cancelButtonElement,
              de = le.editButtonElement,
              me = le.inputElement,
              he = le.textareaElement,
              ve = le.minusMenuElement,
              ye = le.plusMenuElement,
              be = le.beforeRemoveAction,
              _e = le.beforeAddAction,
              Te = le.beforeUpdateAction,
              Se = le.logger,
              $e = le.onSubmitValueParser,
              Ee = le.fallback,
              xe = Ee === void 0 ? null : Ee,
              Ae = getObjectType(oe),
              Ce = ue;
            getObjectType(ue) === 'Boolean' &&
              (Ce = function () {
                return ue;
              });
            var Re = me;
            me &&
              getObjectType(me) !== 'Function' &&
              (Re = function () {
                return me;
              });
            var Oe = he;
            return (
              he &&
                getObjectType(he) !== 'Function' &&
                (Oe = function () {
                  return he;
                }),
              Ae === 'Object' || Ae === 'Array'
                ? React__default.createElement(
                    'div',
                    { className: 'rejt-tree' },
                    React__default.createElement(JsonNode, {
                      data: oe,
                      name: ie,
                      deep: -1,
                      isCollapsed: ce,
                      onUpdate: this.onUpdate,
                      onDeltaUpdate: se,
                      readOnly: Ce,
                      getStyle: pe,
                      addButtonElement: fe,
                      cancelButtonElement: ge,
                      editButtonElement: de,
                      inputElementGenerator: Re,
                      textareaElementGenerator: Oe,
                      minusMenuElement: ve,
                      plusMenuElement: ye,
                      handleRemove: this.removeRoot,
                      beforeRemoveAction: be,
                      beforeAddAction: _e,
                      beforeUpdateAction: Te,
                      logger: Se,
                      onSubmitValueParser: $e,
                    }),
                  )
                : xe
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (ne, oe) {
            return ne.data !== oe.data || ne.rootName !== oe.rootName
              ? { data: ne.data, rootName: ne.rootName }
              : null;
          },
        },
      ],
    ),
    re
  );
})(d$2);
JsonTree.defaultProps = {
  rootName: 'root',
  isCollapsed: function te(ee, re) {
    return re !== -1;
  },
  getStyle: function te(ee, re, ae, ne, oe) {
    switch (oe) {
      case 'Object':
      case 'Error':
        return object;
      case 'Array':
        return array;
      default:
        return value;
    }
  },
  readOnly: function te() {
    return !1;
  },
  onFullyUpdate: function te() {},
  onDeltaUpdate: function te() {},
  beforeRemoveAction: function te() {
    return Promise.resolve();
  },
  beforeAddAction: function te() {
    return Promise.resolve();
  },
  beforeUpdateAction: function te() {
    return Promise.resolve();
  },
  logger: { error: function te() {} },
  onSubmitValueParser: function te(ee, re, ae, ne, oe) {
    return parse(oe);
  },
  inputElement: function te() {
    return React__default.createElement('input', null);
  },
  textareaElement: function te() {
    return React__default.createElement('textarea', null);
  },
  fallback: null,
};
var globalWindow$3 = window_1.window,
  Wrapper$2 = styled.div(function (te) {
    var ee = te.theme;
    return {
      position: 'relative',
      display: 'flex',
      '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
      '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
        { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
      '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
        { '& > svg': { opacity: 1 } },
      '.rejt-edit-form button': { display: 'none' },
      '.rejt-add-form': { marginLeft: 10 },
      '.rejt-add-value-node': { display: 'inline-flex', alignItems: 'center' },
      '.rejt-name': { lineHeight: '22px' },
      '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
      '.rejt-plus-menu': { marginLeft: 5 },
      '.rejt-object-node > span > *': { position: 'relative', zIndex: 2 },
      '.rejt-object-node, .rejt-array-node': { position: 'relative' },
      '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
        {
          content: '""',
          position: 'absolute',
          top: 0,
          display: 'block',
          width: '100%',
          marginLeft: '-1rem',
          padding: '0 4px 0 1rem',
          height: 22,
        },
      '.rejt-collapsed::before, .rejt-not-collapsed::before': {
        zIndex: 1,
        background: 'transparent',
        borderRadius: 4,
        transition: 'background 0.2s',
        pointerEvents: 'none',
        opacity: 0.1,
      },
      '.rejt-object-node:hover, .rejt-array-node:hover': {
        '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
          background: ee.color.secondary,
        },
      },
      '.rejt-collapsed::after, .rejt-not-collapsed::after': {
        content: '""',
        position: 'absolute',
        display: 'inline-block',
        pointerEvents: 'none',
        width: 0,
        height: 0,
      },
      '.rejt-collapsed::after': {
        left: -8,
        top: 8,
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        borderLeft: '3px solid rgba(153,153,153,0.6)',
      },
      '.rejt-not-collapsed::after': {
        left: -10,
        top: 10,
        borderTop: '3px solid rgba(153,153,153,0.6)',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
      },
      '.rejt-value': {
        display: 'inline-block',
        border: '1px solid transparent',
        borderRadius: 4,
        margin: '1px 0',
        padding: '0 4px',
        cursor: 'text',
        color: ee.color.defaultText,
      },
      '.rejt-value-node:hover > .rejt-value': {
        background: ee.background.app,
        borderColor: ee.color.border,
      },
    };
  }),
  Button = styled.button(function (te) {
    var ee = te.theme,
      re = te.primary;
    return {
      border: 0,
      height: 20,
      margin: 1,
      borderRadius: 4,
      background: re ? ee.color.secondary : 'transparent',
      color: re ? ee.color.lightest : ee.color.dark,
      fontWeight: re ? 'bold' : 'normal',
      cursor: 'pointer',
      order: re ? 'initial' : 9,
    };
  }),
  ActionIcon = styled(Icons)(function (te) {
    var ee = te.theme,
      re = te.icon,
      ae = te.disabled;
    return {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 15,
      height: 15,
      padding: 3,
      marginLeft: 5,
      cursor: ae ? 'not-allowed' : 'pointer',
      color: ee.color.mediumdark,
      '&:hover': ae ? {} : { color: re === 'subtract' ? ee.color.negative : ee.color.ancillary },
      'svg + &': { marginLeft: 0 },
    };
  }),
  Input = styled.input(function (te) {
    var ee = te.theme,
      re = te.placeholder;
    return {
      outline: 0,
      margin: re ? 1 : '1px 0',
      padding: '3px 4px',
      color: ee.color.defaultText,
      background: ee.background.app,
      border: '1px solid '.concat(ee.color.border),
      borderRadius: 4,
      lineHeight: '14px',
      width: re === 'Key' ? 80 : 120,
      '&:focus': { border: '1px solid '.concat(ee.color.secondary) },
    };
  }),
  RawButton = styled(IconButton)(function (te) {
    var ee = te.theme;
    return {
      position: 'absolute',
      zIndex: 2,
      top: 2,
      right: 2,
      height: 21,
      padding: '0 3px',
      background: ee.background.bar,
      border: '1px solid '.concat(ee.color.border),
      borderRadius: 3,
      color: ee.color.mediumdark,
      fontSize: '9px',
      fontWeight: 'bold',
      span: { marginLeft: 3, marginTop: 1 },
    };
  }),
  RawInput = styled(Form.Textarea)(function (te) {
    var ee = te.theme;
    return {
      flex: 1,
      padding: '7px 6px',
      fontFamily: ee.typography.fonts.mono,
      fontSize: '12px',
      lineHeight: '18px',
      '&::placeholder': { fontFamily: ee.typography.fonts.base, fontSize: '13px' },
      '&:placeholder-shown': { padding: '7px 10px' },
    };
  }),
  ENTER_EVENT = { bubbles: !0, cancelable: !0, key: 'Enter', code: 'Enter', keyCode: 13 },
  dispatchEnterKey = function te(ee) {
    ee.currentTarget.dispatchEvent(new globalWindow$3.KeyboardEvent('keydown', ENTER_EVENT));
  },
  selectValue = function te(ee) {
    ee.currentTarget.select();
  },
  getCustomStyleFunction = function te(ee) {
    return function () {
      return {
        name: { color: ee.color.secondary },
        collapsed: { color: ee.color.dark },
        ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
        li: { outline: 0 },
      };
    };
  },
  ObjectControl = function te(ee) {
    var re = ee.name,
      ae = ee.value,
      ne = ee.onChange,
      oe = useTheme(),
      ie = F$1(
        function () {
          return ae && cloneDeep_1(ae);
        },
        [ae],
      ),
      le = ie != null,
      ce = p$3(!le),
      se = _slicedToArray$4(ce, 2),
      ue = se[0],
      pe = se[1],
      fe = p$3(null),
      ge = _slicedToArray$4(fe, 2),
      de = ge[0],
      me = ge[1],
      he = T$2(
        function (Ee) {
          try {
            Ee && ne(JSON.parse(Ee)), me(void 0);
          } catch (xe) {
            me(xe);
          }
        },
        [ne],
      ),
      ve = p$3(!1),
      ye = _slicedToArray$4(ve, 2),
      be = ye[0],
      _e = ye[1],
      Te = T$2(
        function () {
          ne({}), _e(!0);
        },
        [_e],
      ),
      Se = _(null);
    if (
      (h$3(
        function () {
          be && Se.current && Se.current.select();
        },
        [be],
      ),
      !le)
    )
      return React__default.createElement(
        Form.Button,
        { id: getControlSetterButtonId(re), onClick: Te },
        'Set object',
      );
    var $e = React__default.createElement(RawInput, {
      ref: Se,
      id: getControlId(re),
      name: re,
      defaultValue: ae === null ? '' : JSON.stringify(ae, null, 2),
      onBlur: function (xe) {
        return he(xe.target.value);
      },
      placeholder: 'Edit JSON string...',
      autoFocus: be,
      valid: de ? 'error' : null,
    });
    return React__default.createElement(
      Wrapper$2,
      null,
      ['Object', 'Array'].includes(getObjectType(ie)) &&
        React__default.createElement(
          RawButton,
          {
            onClick: function () {
              return pe(function (xe) {
                return !xe;
              });
            },
          },
          React__default.createElement(Icons, { icon: ue ? 'eyeclose' : 'eye' }),
          React__default.createElement('span', null, 'RAW'),
        ),
      ue
        ? $e
        : React__default.createElement(JsonTree, {
            data: ie,
            rootName: re,
            onFullyUpdate: ne,
            getStyle: getCustomStyleFunction(oe),
            cancelButtonElement: React__default.createElement(Button, { type: 'button' }, 'Cancel'),
            editButtonElement: React__default.createElement(Button, { type: 'submit' }, 'Save'),
            addButtonElement: React__default.createElement(
              Button,
              { type: 'submit', primary: !0 },
              'Save',
            ),
            plusMenuElement: React__default.createElement(ActionIcon, { icon: 'add' }),
            minusMenuElement: React__default.createElement(ActionIcon, { icon: 'subtract' }),
            inputElement: function (xe, Ae, Ce, Re) {
              return Re
                ? React__default.createElement(Input, {
                    onFocus: selectValue,
                    onBlur: dispatchEnterKey,
                  })
                : React__default.createElement(Input, null);
            },
            fallback: $e,
          }),
    );
  },
  RangeInput = styled.input(function (te) {
    var ee = te.theme,
      re = te.min,
      ae = te.max,
      ne = te.value;
    return {
      '&': { width: '100%', backgroundColor: 'transparent', appearance: 'none' },
      '&::-webkit-slider-runnable-track': {
        background:
          ee.base === 'light'
            ? `linear-gradient(to right, 
            `
                .concat(ee.color.green, ' 0%, ')
                .concat(ee.color.green, ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedDarken$1(0.02, ee.input.background), ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedDarken$1(0.02, ee.input.background), ' 100%)')
            : `linear-gradient(to right, 
            `
                .concat(ee.color.green, ' 0%, ')
                .concat(ee.color.green, ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedLighten$1(0.02, ee.input.background), ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedLighten$1(0.02, ee.input.background), ' 100%)'),
        boxShadow: ''.concat(ee.appBorderColor, ' 0 0 0 1px inset'),
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
      },
      '&::-webkit-slider-thumb': {
        marginTop: '-6px',
        width: 16,
        height: 16,
        border: '1px solid '.concat(rgba(ee.appBorderColor, 0.2)),
        borderRadius: '50px',
        boxShadow: '0 1px 3px 0px '.concat(rgba(ee.appBorderColor, 0.2)),
        cursor: 'grab',
        appearance: 'none',
        background: ''.concat(ee.input.background),
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: ''.concat(curriedDarken$1(0.05, ee.input.background)),
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: ''.concat(ee.input.background),
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&:focus': {
        outline: 'none',
        '&::-webkit-slider-runnable-track': { borderColor: rgba(ee.color.secondary, 0.4) },
        '&::-webkit-slider-thumb': {
          borderColor: ee.color.secondary,
          boxShadow: '0 0px 5px 0px '.concat(ee.color.secondary),
        },
      },
      '&::-moz-range-track': {
        background:
          ee.base === 'light'
            ? `linear-gradient(to right, 
            `
                .concat(ee.color.green, ' 0%, ')
                .concat(ee.color.green, ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedDarken$1(0.02, ee.input.background), ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedDarken$1(0.02, ee.input.background), ' 100%)')
            : `linear-gradient(to right, 
            `
                .concat(ee.color.green, ' 0%, ')
                .concat(ee.color.green, ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedLighten$1(0.02, ee.input.background), ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedLighten$1(0.02, ee.input.background), ' 100%)'),
        boxShadow: ''.concat(ee.appBorderColor, ' 0 0 0 1px inset'),
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
        outline: 'none',
      },
      '&::-moz-range-thumb': {
        width: 16,
        height: 16,
        border: '1px solid '.concat(rgba(ee.color.border, 0.2)),
        borderRadius: '50px',
        boxShadow: '0 1px 3px 0px '.concat(rgba(ee.color.border, 0.2)),
        cursor: 'grab',
        background: ''.concat(ee.input.background),
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: ''.concat(curriedDarken$1(0.05, ee.input.background)),
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: ''.concat(ee.input.background),
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&::-ms-track': {
        background:
          ee.base === 'light'
            ? `linear-gradient(to right, 
            `
                .concat(ee.color.green, ' 0%, ')
                .concat(ee.color.green, ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedDarken$1(0.02, ee.input.background), ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedDarken$1(0.02, ee.input.background), ' 100%)')
            : `linear-gradient(to right, 
            `
                .concat(ee.color.green, ' 0%, ')
                .concat(ee.color.green, ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedLighten$1(0.02, ee.input.background), ' ')
                .concat(
                  ((ne - re) / (ae - re)) * 100,
                  `%, 
            `,
                )
                .concat(curriedLighten$1(0.02, ee.input.background), ' 100%)'),
        boxShadow: ''.concat(ee.appBorderColor, ' 0 0 0 1px inset'),
        color: 'transparent',
        width: '100%',
        height: '6px',
        cursor: 'pointer',
      },
      '&::-ms-fill-lower': { borderRadius: 6 },
      '&::-ms-fill-upper': { borderRadius: 6 },
      '&::-ms-thumb': {
        width: 16,
        height: 16,
        background: ''.concat(ee.input.background),
        border: '1px solid '.concat(rgba(ee.appBorderColor, 0.2)),
        borderRadius: 50,
        cursor: 'grab',
        marginTop: 0,
      },
      '@supports (-ms-ime-align:auto)': { 'input[type=range]': { margin: '0' } },
    };
  }),
  RangeLabel = styled.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: 'nowrap',
    fontFeatureSettings: 'tnum',
    fontVariantNumeric: 'tabular-nums',
  }),
  RangeWrapper = styled.div({ display: 'flex', alignItems: 'center', width: '100%' });
function getNumberOfDecimalPlaces(te) {
  var ee = te.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return ee ? Math.max(0, (ee[1] ? ee[1].length : 0) - (ee[2] ? +ee[2] : 0)) : 0;
}
var RangeControl = function te(ee) {
    var re = ee.name,
      ae = ee.value,
      ne = ee.onChange,
      oe = ee.min,
      ie = oe === void 0 ? 0 : oe,
      le = ee.max,
      ce = le === void 0 ? 100 : le,
      se = ee.step,
      ue = se === void 0 ? 1 : se,
      pe = ee.onBlur,
      fe = ee.onFocus,
      ge = function (ve) {
        ne(parse$1(ve.target.value));
      },
      de = ae !== void 0,
      me = F$1(
        function () {
          return getNumberOfDecimalPlaces(ue);
        },
        [ue],
      );
    return React__default.createElement(
      RangeWrapper,
      null,
      React__default.createElement(RangeLabel, null, ie),
      React__default.createElement(
        RangeInput,
        Object.assign(
          { id: getControlId(re), type: 'range', onChange: ge },
          { name: re, value: ae, min: ie, max: ce, step: ue, onFocus: fe, onBlur: pe },
        ),
      ),
      React__default.createElement(
        RangeLabel,
        null,
        ''.concat(de ? ae.toFixed(me) : '--'),
        ' / ',
        ce,
      ),
    );
  },
  Wrapper$1 = styled.label({ display: 'flex' }),
  TextControl = function te(ee) {
    var re = ee.name,
      ae = ee.value,
      ne = ee.onChange,
      oe = ee.onFocus,
      ie = ee.onBlur,
      le = function (me) {
        ne(me.target.value);
      },
      ce = p$3(!1),
      se = _slicedToArray$4(ce, 2),
      ue = se[0],
      pe = se[1],
      fe = T$2(
        function () {
          ne(''), pe(!0);
        },
        [pe],
      );
    if (ae === void 0)
      return React__default.createElement(
        Form.Button,
        { id: getControlSetterButtonId(re), onClick: fe },
        'Set string',
      );
    var ge = typeof ae == 'string';
    return React__default.createElement(
      Wrapper$1,
      null,
      React__default.createElement(
        Form.Textarea,
        Object.assign(
          {
            id: getControlId(re),
            onChange: le,
            size: 'flex',
            placeholder: 'Edit string...',
            autoFocus: ue,
            valid: ge ? null : 'error',
          },
          { name: re, value: ge ? ae : '', onFocus: oe, onBlur: ie },
        ),
      ),
    );
  },
  FileInput = styled(Form.Input)({ padding: 10 });
function revokeOldUrls(te) {
  te.forEach(function (ee) {
    ee.startsWith('blob:') && URL.revokeObjectURL(ee);
  });
}
var FilesControl = function te(ee) {
    var re = ee.onChange,
      ae = ee.name,
      ne = ee.accept,
      oe = ne === void 0 ? 'image/*' : ne,
      ie = ee.value;
    function le(ce) {
      if (!!ce.target.files) {
        var se = Array.from(ce.target.files).map(function (ue) {
          return URL.createObjectURL(ue);
        });
        re(se), revokeOldUrls(ie);
      }
    }
    return React__default.createElement(FileInput, {
      id: getControlId(ae),
      type: 'file',
      name: ae,
      multiple: !0,
      onChange: le,
      accept: oe,
      size: 'flex',
    });
  },
  LazyColorControl = U$1(function () {
    return __vitePreload(
      () => import('./Color-f953d088.901bfe9f.js'),
      [
        'assets/Color-f953d088.901bfe9f.js',
        'assets/iframe.1f3a3e8b.js',
        'assets/iframe.1f0201a9.css',
      ],
    );
  }),
  ColorControl = function te(ee) {
    return React__default.createElement(
      T$1,
      { fallback: React__default.createElement('div', null) },
      React__default.createElement(LazyColorControl, Object.assign({}, ee)),
    );
  },
  Controls = {
    array: ObjectControl,
    object: ObjectControl,
    boolean: BooleanControl,
    color: ColorControl,
    date: DateControl,
    number: NumberControl,
    check: OptionsControl,
    'inline-check': OptionsControl,
    radio: OptionsControl,
    'inline-radio': OptionsControl,
    select: OptionsControl,
    'multi-select': OptionsControl,
    range: RangeControl,
    text: TextControl,
    file: FilesControl,
  },
  NoControl = function te() {
    return React__default.createElement(React__default.Fragment, null, '-');
  },
  ArgControl = function te(ee) {
    var re = ee.row,
      ae = ee.arg,
      ne = ee.updateArgs,
      oe = re.key,
      ie = re.control,
      le = p$3(!1),
      ce = _slicedToArray$4(le, 2),
      se = ce[0],
      ue = ce[1],
      pe = p$3({ value: ae }),
      fe = _slicedToArray$4(pe, 2),
      ge = fe[0],
      de = fe[1];
    h$3(
      function () {
        se || de({ value: ae });
      },
      [se, ae],
    );
    var me = T$2(
        function (_e) {
          return de({ value: _e }), ne(_defineProperty2({}, oe, _e)), _e;
        },
        [ne, oe],
      ),
      he = T$2(function () {
        return ue(!1);
      }, []),
      ve = T$2(function () {
        return ue(!0);
      }, []);
    if (!ie || ie.disable) return React__default.createElement(NoControl, null);
    var ye = { name: oe, argType: re, value: ge.value, onChange: me, onBlur: he, onFocus: ve },
      be = Controls[ie.type] || NoControl;
    return React__default.createElement(be, Object.assign({}, ye, ie, { controlType: ie.type }));
  },
  Name = styled.span({ fontWeight: 'bold' }),
  Required = styled.span(function (te) {
    var ee = te.theme;
    return { color: ee.color.negative, fontFamily: ee.typography.fonts.mono, cursor: 'help' };
  }),
  Description = styled.div(function (te) {
    var ee = te.theme;
    return {
      '&&': { p: { margin: '0 0 10px 0' }, a: { color: ee.color.secondary } },
      code: Object.assign(Object.assign({}, codeCommon({ theme: ee })), {
        fontSize: 12,
        fontFamily: ee.typography.fonts.mono,
      }),
      '& code': { margin: 0, display: 'inline-block' },
      '& pre > code': { whiteSpace: 'pre-wrap' },
    };
  }),
  Type = styled.div(function (te) {
    var ee = te.theme,
      re = te.hasDescription;
    return {
      color:
        ee.base === 'light'
          ? curriedTransparentize$1(0.1, ee.color.defaultText)
          : curriedTransparentize$1(0.2, ee.color.defaultText),
      marginTop: re ? 4 : 0,
    };
  }),
  TypeWithJsDoc = styled.div(function (te) {
    var ee = te.theme,
      re = te.hasDescription;
    return {
      color:
        ee.base === 'light'
          ? curriedTransparentize$1(0.1, ee.color.defaultText)
          : curriedTransparentize$1(0.2, ee.color.defaultText),
      marginTop: re ? 12 : 0,
      marginBottom: 12,
    };
  }),
  StyledTd$1 = styled.td(function (te) {
    te.theme;
    var ee = te.expandable;
    return { paddingLeft: ee ? '40px !important' : '20px !important' };
  }),
  ArgRow = function te(ee) {
    var re,
      ae = ee.row,
      ne = ee.updateArgs,
      oe = ee.compact,
      ie = ee.expandable,
      le = ee.initialExpandedArgs,
      ce = ae.name,
      se = ae.description,
      ue = ae.table || {},
      pe = ue.type || ae.type,
      fe = ue.defaultValue || ae.defaultValue,
      ge = (re = ae.type) === null || re === void 0 ? void 0 : re.required,
      de = se != null && se !== '';
    return React__default.createElement(
      'tr',
      null,
      React__default.createElement(
        StyledTd$1,
        { expandable: ie },
        React__default.createElement(Name, null, ce),
        ge ? React__default.createElement(Required, { title: 'Required' }, '*') : null,
      ),
      oe
        ? null
        : React__default.createElement(
            'td',
            null,
            de &&
              React__default.createElement(
                Description,
                null,
                React__default.createElement(Markdown, null, se),
              ),
            ue.jsDocTags != null
              ? React__default.createElement(
                  React__default.Fragment,
                  null,
                  React__default.createElement(
                    TypeWithJsDoc,
                    { hasDescription: de },
                    React__default.createElement(ArgValue, { value: pe, initialExpandedArgs: le }),
                  ),
                  React__default.createElement(ArgJsDoc, { tags: ue.jsDocTags }),
                )
              : React__default.createElement(
                  Type,
                  { hasDescription: de },
                  React__default.createElement(ArgValue, { value: pe, initialExpandedArgs: le }),
                ),
          ),
      oe
        ? null
        : React__default.createElement(
            'td',
            null,
            React__default.createElement(ArgValue, { value: fe, initialExpandedArgs: le }),
          ),
      ne
        ? React__default.createElement(
            'td',
            null,
            React__default.createElement(ArgControl, Object.assign({}, ee)),
          )
        : null,
    );
  },
  ExpanderIcon = styled(Icons)(function (te) {
    var ee = te.theme;
    return {
      marginRight: 8,
      marginLeft: -10,
      marginTop: -2,
      height: 12,
      width: 12,
      color:
        ee.base === 'light'
          ? curriedTransparentize$1(0.25, ee.color.defaultText)
          : curriedTransparentize$1(0.3, ee.color.defaultText),
      border: 'none',
      display: 'inline-block',
    };
  }),
  FlexWrapper = styled.span(function (te) {
    return te.theme, { display: 'flex', lineHeight: '20px', alignItems: 'center' };
  }),
  Section = styled.td(function (te) {
    var ee = te.theme;
    return {
      position: 'relative',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      fontWeight: ee.typography.weight.black,
      fontSize: ee.typography.size.s1 - 1,
      color:
        ee.base === 'light'
          ? curriedTransparentize$1(0.4, ee.color.defaultText)
          : curriedTransparentize$1(0.6, ee.color.defaultText),
      background: ''.concat(ee.background.app, ' !important'),
      '& ~ td': { background: ''.concat(ee.background.app, ' !important') },
    };
  }),
  Subsection = styled.td(function (te) {
    var ee = te.theme;
    return {
      position: 'relative',
      fontWeight: ee.typography.weight.bold,
      fontSize: ee.typography.size.s2 - 1,
      background: ee.background.content,
    };
  }),
  StyledTd = styled.td(function (te) {
    return te.theme, { position: 'relative' };
  }),
  StyledTr = styled.tr(function (te) {
    var ee = te.theme;
    return {
      '&:hover > td': {
        backgroundColor: ''.concat(ee.background.hoverable, ' !important'),
        boxShadow: ''.concat(ee.color.mediumlight, ' 0 - 1px 0 0 inset'),
        cursor: 'row-resize',
      },
    };
  }),
  ClickIntercept = styled.button(function () {
    return {
      background: 'none',
      border: 'none',
      padding: '0',
      font: 'inherit',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      color: 'transparent',
      cursor: 'row-resize !important',
    };
  }),
  SectionRow = function te(ee) {
    var re = ee.level,
      ae = re === void 0 ? 'section' : re,
      ne = ee.label,
      oe = ee.children,
      ie = ee.initialExpanded,
      le = ie === void 0 ? !0 : ie,
      ce = ee.colSpan,
      se = ce === void 0 ? 3 : ce,
      ue = p$3(le),
      pe = _slicedToArray$4(ue, 2),
      fe = pe[0],
      ge = pe[1],
      de = ae === 'subsection' ? Subsection : Section,
      me = (oe == null ? void 0 : oe.length) || 0,
      he = ae === 'subsection' ? ''.concat(me, ' item').concat(me !== 1 ? 's' : '') : '',
      ve = fe ? 'arrowdown' : 'arrowright',
      ye = ''
        .concat(fe ? 'Hide' : 'Show', ' ')
        .concat(ae === 'subsection' ? me : ne, ' item')
        .concat(me !== 1 ? 's' : '');
    return React__default.createElement(
      React__default.Fragment,
      null,
      React__default.createElement(
        StyledTr,
        { title: ye },
        React__default.createElement(
          de,
          { colSpan: 1 },
          React__default.createElement(
            ClickIntercept,
            {
              onClick: function (_e) {
                return ge(!fe);
              },
              tabIndex: 0,
            },
            ye,
          ),
          React__default.createElement(
            FlexWrapper,
            null,
            React__default.createElement(ExpanderIcon, { icon: ve }),
            ne,
          ),
        ),
        React__default.createElement(
          StyledTd,
          { colSpan: se - 1 },
          React__default.createElement(
            ClickIntercept,
            {
              onClick: function (_e) {
                return ge(!fe);
              },
              tabIndex: -1,
              style: { outline: 'none' },
            },
            ye,
          ),
          fe ? null : he,
        ),
      ),
      fe ? oe : null,
    );
  },
  TableWrapper = styled.table(
    function (te) {
      var ee,
        re,
        ae,
        ne = te.theme,
        oe = te.compact,
        ie = te.inAddonPanel;
      return {
        '&&':
          ((ae = {
            borderCollapse: 'collapse',
            borderSpacing: 0,
            color: ne.color.defaultText,
            'td, th': {
              padding: 0,
              border: 'none',
              verticalAlign: 'top',
              textOverflow: 'ellipsis',
            },
            fontSize: ne.typography.size.s2 - 1,
            lineHeight: '20px',
            textAlign: 'left',
            width: '100%',
            marginTop: ie ? 0 : 25,
            marginBottom: ie ? 0 : 40,
            'thead th:first-of-type, td:first-of-type': { width: '25%' },
            'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
            'th:nth-of-type(2), td:nth-of-type(2)': Object.assign({}, oe ? null : { width: '35%' }),
            'td:nth-of-type(3)': Object.assign({}, oe ? null : { width: '15%' }),
            'th:last-of-type, td:last-of-type': Object.assign(
              { paddingRight: 20 },
              oe ? null : { width: '25%' },
            ),
            th: {
              color:
                ne.base === 'light'
                  ? curriedTransparentize$1(0.25, ne.color.defaultText)
                  : curriedTransparentize$1(0.45, ne.color.defaultText),
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 15,
              paddingRight: 15,
            },
            td: {
              paddingTop: '10px',
              paddingBottom: '10px',
              '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
              '&:last-of-type': { paddingRight: 20 },
            },
            marginLeft: ie ? 0 : 1,
            marginRight: ie ? 0 : 1,
          }),
          _defineProperty2(
            ae,
            'tr:first-child',
            ((ee = {}),
            _defineProperty2(ee, 'td:first-child, th:first-child', {
              borderTopLeftRadius: ie ? 0 : ne.appBorderRadius,
            }),
            _defineProperty2(ee, 'td:last-child, th:last-child', {
              borderTopRightRadius: ie ? 0 : ne.appBorderRadius,
            }),
            ee),
          ),
          _defineProperty2(
            ae,
            'tr:last-child',
            ((re = {}),
            _defineProperty2(re, 'td:first-child, th:first-child', {
              borderBottomLeftRadius: ie ? 0 : ne.appBorderRadius,
            }),
            _defineProperty2(re, 'td:last-child, th:last-child', {
              borderBottomRightRadius: ie ? 0 : ne.appBorderRadius,
            }),
            re),
          ),
          _defineProperty2(ae, 'tbody', {
            boxShadow:
              !ie &&
              (ne.base === 'light'
                ? `rgba(0, 0, 0, 0.10) 0 1px 3px 1px,
          `.concat(curriedTransparentize$1(0.035, ne.appBorderColor), ' 0 0 0 1px')
                : `rgba(0, 0, 0, 0.20) 0 2px 5px 1px,
          `.concat(curriedOpacify$1(0.05, ne.appBorderColor), ' 0 0 0 1px')),
            borderRadius: ne.appBorderRadius,
            '@media not all and (min-resolution:.001dpcm)': {
              '@supports (-webkit-appearance:none)': Object.assign(
                Object.assign(
                  { borderWidth: 1, borderStyle: 'solid' },
                  ie && { borderColor: 'transparent' },
                ),
                !ie && {
                  borderColor:
                    ne.base === 'light'
                      ? curriedTransparentize$1(0.035, ne.appBorderColor)
                      : curriedOpacify$1(0.05, ne.appBorderColor),
                },
              ),
            },
            tr: Object.assign(
              { background: 'transparent', overflow: 'hidden' },
              ie
                ? {
                    borderTopWidth: 1,
                    borderTopStyle: 'solid',
                    borderTopColor:
                      ne.base === 'light'
                        ? curriedDarken$1(0.1, ne.background.content)
                        : curriedLighten$1(0.05, ne.background.content),
                  }
                : _defineProperty2({}, '&:not(:first-child)', {
                    borderTopWidth: 1,
                    borderTopStyle: 'solid',
                    borderTopColor:
                      ne.base === 'light'
                        ? curriedDarken$1(0.1, ne.background.content)
                        : curriedLighten$1(0.05, ne.background.content),
                  }),
            ),
            td: { background: ne.background.content },
          }),
          ae),
      };
    },
    function (te) {
      var ee = te.isLoading,
        re = te.theme;
      return ee
        ? {
            'th span, td span, td button': {
              display: 'inline',
              backgroundColor: re.appBorderColor,
              animation: ''.concat(re.animation.glow, ' 1.5s ease-in-out infinite'),
              color: 'transparent',
              boxShadow: 'none',
              borderRadius: 0,
            },
          }
        : {};
    },
  ),
  ResetButton = styled.button(function (te) {
    var ee = te.theme;
    return {
      border: 0,
      borderRadius: '3em',
      cursor: 'pointer',
      display: 'inline-block',
      overflow: 'hidden',
      padding: '3px 8px',
      transition: 'all 150ms ease-out',
      verticalAlign: 'top',
      userSelect: 'none',
      margin: 0,
      backgroundColor: ee.base === 'light' ? '#EAF3FC' : ee.color.border,
      boxShadow:
        ee.base === 'light'
          ? ''.concat(ee.color.border, ' 0 0 0 1px inset')
          : ''.concat(ee.color.darker, '  0 0 0 1px inset'),
      color: ee.color.secondary,
      '&:hover': {
        background:
          ee.base === 'light'
            ? curriedDarken$1(0.03, '#EAF3FC')
            : curriedOpacify$1(0.1, ee.color.border),
      },
      '&:focus': { boxShadow: ''.concat(ee.color.secondary, ' 0 0 0 1px inset'), outline: 'none' },
      svg: { display: 'block', height: 14, width: 14 },
    };
  }),
  ControlHeadingWrapper = styled.span({ display: 'flex', justifyContent: 'space-between' }),
  ArgsTableError;
(function (te) {
  (te.NO_COMPONENT = 'No component found.'),
    (te.ARGS_UNSUPPORTED = 'Args unsupported. See Args documentation for your framework.');
})(ArgsTableError || (ArgsTableError = {}));
var sortFns = {
    alpha: function te(ee, re) {
      return ee.name.localeCompare(re.name);
    },
    requiredFirst: function te(ee, re) {
      var ae, ne;
      return (
        Number(!!(!((ae = re.type) === null || ae === void 0) && ae.required)) -
          Number(!!(!((ne = ee.type) === null || ne === void 0) && ne.required)) ||
        ee.name.localeCompare(re.name)
      );
    },
    none: void 0,
  },
  rowLoadingData = function te(ee) {
    return {
      key: ee,
      name: 'propertyName',
      description: 'This is a short description',
      control: { type: 'text' },
      table: { type: { summary: 'summary' }, defaultValue: { summary: 'defaultValue' } },
    };
  },
  argsTableLoadingData = {
    rows: {
      row1: rowLoadingData('row1'),
      row2: rowLoadingData('row2'),
      row3: rowLoadingData('row3'),
    },
  },
  groupRows = function te(ee, re) {
    var ae = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
    if (!ee) return ae;
    Object.entries(ee).forEach(function (le) {
      var ce = _slicedToArray$4(le, 2),
        se = ce[0],
        ue = ce[1],
        pe = (ue == null ? void 0 : ue.table) || {},
        fe = pe.category,
        ge = pe.subcategory;
      if (fe) {
        var de = ae.sections[fe] || { ungrouped: [], subsections: {} };
        if (!ge) de.ungrouped.push(Object.assign({ key: se }, ue));
        else {
          var me = de.subsections[ge] || [];
          me.push(Object.assign({ key: se }, ue)), (de.subsections[ge] = me);
        }
        ae.sections[fe] = de;
      } else if (ge) {
        var he = ae.ungroupedSubsections[ge] || [];
        he.push(Object.assign({ key: se }, ue)), (ae.ungroupedSubsections[ge] = he);
      } else ae.ungrouped.push(Object.assign({ key: se }, ue));
    });
    var ne = sortFns[re],
      oe = function (ce) {
        return ne
          ? Object.keys(ce).reduce(function (se, ue) {
              return Object.assign(
                Object.assign({}, se),
                _defineProperty2({}, ue, ce[ue].sort(ne)),
              );
            }, {})
          : ce;
      },
      ie = {
        ungrouped: ae.ungrouped.sort(ne),
        ungroupedSubsections: oe(ae.ungroupedSubsections),
        sections: Object.keys(ae.sections).reduce(function (le, ce) {
          return Object.assign(
            Object.assign({}, le),
            _defineProperty2({}, ce, {
              ungrouped: ae.sections[ce].ungrouped.sort(ne),
              subsections: oe(ae.sections[ce].subsections),
            }),
          );
        }, {}),
      };
    return ie;
  },
  safeIncludeConditionalArg = function te(ee, re, ae) {
    try {
      return dist.includeConditionalArg(ee, re, ae);
    } catch (ne) {
      return once.warn(ne.message), !1;
    }
  },
  ArgsTable$1 = function te(ee) {
    if ('error' in ee)
      return React__default.createElement(
        EmptyBlock,
        null,
        ee.error,
        '\xA0',
        React__default.createElement(
          Link,
          { href: 'http://storybook.js.org/docs/', target: '_blank', withArrow: !0 },
          'Read the docs',
        ),
      );
    var re = ee.updateArgs,
      ae = ee.resetArgs,
      ne = ee.compact,
      oe = ee.inAddonPanel,
      ie = ee.initialExpandedArgs,
      le = ee.sort,
      ce = le === void 0 ? 'none' : le,
      se = 'isLoading' in ee,
      ue = 'rows' in ee ? ee : argsTableLoadingData,
      pe = ue.rows,
      fe = ue.args,
      ge = ue.globals,
      de = groupRows(
        pickBy_1(pe, function (ye) {
          var be;
          return (
            !(!((be = ye == null ? void 0 : ye.table) === null || be === void 0) && be.disable) &&
            safeIncludeConditionalArg(ye, fe || {}, ge || {})
          );
        }),
        ce,
      );
    if (
      de.ungrouped.length === 0 &&
      Object.entries(de.sections).length === 0 &&
      Object.entries(de.ungroupedSubsections).length === 0
    )
      return React__default.createElement(
        EmptyBlock,
        null,
        'No inputs found for this component.\xA0',
        React__default.createElement(
          Link,
          { href: 'http://storybook.js.org/docs/', target: '_blank', withArrow: !0 },
          'Read the docs',
        ),
      );
    var me = 1;
    re && (me += 1), ne || (me += 2);
    var he = Object.keys(de.sections).length > 0,
      ve = { updateArgs: re, compact: ne, inAddonPanel: oe, initialExpandedArgs: ie };
    return React__default.createElement(
      ResetWrapper,
      null,
      React__default.createElement(
        TableWrapper,
        Object.assign(
          { 'aria-hidden': se },
          { compact: ne, inAddonPanel: oe, isLoading: se },
          { className: 'docblock-argstable' },
        ),
        React__default.createElement(
          'thead',
          { className: 'docblock-argstable-head' },
          React__default.createElement(
            'tr',
            null,
            React__default.createElement(
              'th',
              null,
              React__default.createElement('span', null, 'Name'),
            ),
            ne
              ? null
              : React__default.createElement(
                  'th',
                  null,
                  React__default.createElement('span', null, 'Description'),
                ),
            ne
              ? null
              : React__default.createElement(
                  'th',
                  null,
                  React__default.createElement('span', null, 'Default'),
                ),
            re
              ? React__default.createElement(
                  'th',
                  null,
                  React__default.createElement(
                    ControlHeadingWrapper,
                    null,
                    'Control',
                    ' ',
                    !se &&
                      ae &&
                      React__default.createElement(
                        ResetButton,
                        {
                          onClick: function () {
                            return ae();
                          },
                          title: 'Reset controls',
                        },
                        React__default.createElement(Icons, { icon: 'undo', 'aria-hidden': !0 }),
                      ),
                  ),
                )
              : null,
          ),
        ),
        React__default.createElement(
          'tbody',
          { className: 'docblock-argstable-body' },
          de.ungrouped.map(function (ye) {
            return React__default.createElement(
              ArgRow,
              Object.assign({ key: ye.key, row: ye, arg: fe && fe[ye.key] }, ve),
            );
          }),
          Object.entries(de.ungroupedSubsections).map(function (ye) {
            var be = _slicedToArray$4(ye, 2),
              _e = be[0],
              Te = be[1];
            return React__default.createElement(
              SectionRow,
              { key: _e, label: _e, level: 'subsection', colSpan: me },
              Te.map(function (Se) {
                return React__default.createElement(
                  ArgRow,
                  Object.assign(
                    { key: Se.key, row: Se, arg: fe && fe[Se.key], expandable: he },
                    ve,
                  ),
                );
              }),
            );
          }),
          Object.entries(de.sections).map(function (ye) {
            var be = _slicedToArray$4(ye, 2),
              _e = be[0],
              Te = be[1];
            return React__default.createElement(
              SectionRow,
              { key: _e, label: _e, level: 'section', colSpan: me },
              Te.ungrouped.map(function (Se) {
                return React__default.createElement(
                  ArgRow,
                  Object.assign({ key: Se.key, row: Se, arg: fe && fe[Se.key] }, ve),
                );
              }),
              Object.entries(Te.subsections).map(function (Se) {
                var $e = _slicedToArray$4(Se, 2),
                  Ee = $e[0],
                  xe = $e[1];
                return React__default.createElement(
                  SectionRow,
                  { key: Ee, label: Ee, level: 'subsection', colSpan: me },
                  xe.map(function (Ae) {
                    return React__default.createElement(
                      ArgRow,
                      Object.assign(
                        { key: Ae.key, row: Ae, arg: fe && fe[Ae.key], expandable: he },
                        ve,
                      ),
                    );
                  }),
                );
              }),
            );
          }),
        ),
      ),
    );
  },
  TabbedArgsTable = function te(ee) {
    var re = ee.tabs,
      ae = __rest(ee, ['tabs']),
      ne = Object.entries(re);
    return ne.length === 1
      ? React__default.createElement(ArgsTable$1, Object.assign({}, ne[0][1], ae))
      : React__default.createElement(
          TabsState,
          null,
          ne.map(function (oe) {
            var ie = _slicedToArray$4(oe, 2),
              le = ie[0],
              ce = ie[1],
              se = 'prop_table_div_'.concat(le);
            return React__default.createElement(
              'div',
              { key: se, id: se, title: le },
              function (ue) {
                var pe = ue.active;
                return pe
                  ? React__default.createElement(
                      ArgsTable$1,
                      Object.assign({ key: 'prop_table_'.concat(le) }, ce, ae),
                    )
                  : null;
              },
            );
          }),
        );
  };
styled.div(function (te) {
  var ee = te.theme;
  return {
    background: ee.background.warning,
    color: ee.color.darkest,
    padding: '10px 15px',
    lineHeight: '20px',
    boxShadow: ''.concat(ee.appBorderColor, ' 0 -1px 0 0 inset'),
  };
});
var Label = styled.div(function (te) {
    var ee = te.theme;
    return {
      marginRight: 30,
      fontSize: ''.concat(ee.typography.size.s1, 'px'),
      color:
        ee.base === 'light'
          ? curriedTransparentize$1(0.4, ee.color.defaultText)
          : curriedTransparentize$1(0.6, ee.color.defaultText),
    };
  }),
  Sample = styled.div({ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }),
  TypeSpecimen = styled.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    '&:not(:last-child)': { marginBottom: '1rem' },
  }),
  Wrapper$9 = styled.div(withReset, function (te) {
    var ee = te.theme;
    return Object.assign(Object.assign({}, getBlockBackgroundStyle(ee)), {
      margin: '25px 0 40px',
      padding: '30px 20px',
    });
  }),
  Typeset = function te(ee) {
    var re = ee.fontFamily,
      ae = ee.fontSizes,
      ne = ee.fontWeight,
      oe = ee.sampleText,
      ie = __rest(ee, ['fontFamily', 'fontSizes', 'fontWeight', 'sampleText']);
    return React__default.createElement(
      Wrapper$9,
      Object.assign({}, ie, { className: 'docblock-typeset' }),
      ae.map(function (le) {
        return React__default.createElement(
          TypeSpecimen,
          { key: le },
          React__default.createElement(Label, null, le),
          React__default.createElement(
            Sample,
            { style: { fontFamily: re, fontSize: le, fontWeight: ne, lineHeight: 1.2 } },
            oe || 'Was he a beast if music could move him so?',
          ),
        );
      }),
    );
  },
  ItemTitle = styled.div(function (te) {
    var ee = te.theme;
    return { fontWeight: ee.typography.weight.bold, color: ee.color.defaultText };
  }),
  ItemSubtitle = styled.div(function (te) {
    var ee = te.theme;
    return {
      color:
        ee.base === 'light'
          ? curriedTransparentize$1(0.2, ee.color.defaultText)
          : curriedTransparentize$1(0.6, ee.color.defaultText),
    };
  }),
  ItemDescription = styled.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 }),
  SwatchLabel = styled.div(function (te) {
    var ee = te.theme;
    return {
      flex: 1,
      textAlign: 'center',
      fontFamily: ee.typography.fonts.mono,
      fontSize: ee.typography.size.s1,
      lineHeight: 1,
      overflow: 'hidden',
      color:
        ee.base === 'light'
          ? curriedTransparentize$1(0.4, ee.color.defaultText)
          : curriedTransparentize$1(0.6, ee.color.defaultText),
      '> div': {
        display: 'inline-block',
        overflow: 'hidden',
        maxWidth: '100%',
        textOverflow: 'ellipsis',
      },
      span: { display: 'block', marginTop: 2 },
    };
  }),
  SwatchLabels = styled.div({ display: 'flex', flexDirection: 'row' }),
  Swatch = styled.div(function (te) {
    var ee = te.background;
    return {
      position: 'relative',
      flex: 1,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: ee,
        content: '""',
      },
    };
  }),
  SwatchColors = styled.div(function (te) {
    var ee = te.theme;
    return Object.assign(Object.assign({}, getBlockBackgroundStyle(ee)), {
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      backgroundImage: 'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
      backgroundClip: 'padding-box',
    });
  }),
  SwatchSpecimen = styled.div({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    marginBottom: 30,
  }),
  Swatches = styled.div({ flex: 1, display: 'flex', flexDirection: 'row' }),
  Item$1 = styled.div({ display: 'flex', alignItems: 'flex-start' }),
  ListName = styled.div({ flex: '0 0 30%' }),
  ListSwatches = styled.div({ flex: 1 }),
  ListHeading = styled.div(function (te) {
    var ee = te.theme;
    return {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      fontWeight: ee.typography.weight.bold,
      color:
        ee.base === 'light'
          ? curriedTransparentize$1(0.4, ee.color.defaultText)
          : curriedTransparentize$1(0.6, ee.color.defaultText),
    };
  }),
  List$1 = styled.div(function (te) {
    var ee = te.theme;
    return {
      fontSize: ee.typography.size.s2,
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'column',
    };
  });
function renderSwatch(te, ee) {
  return React__default.createElement(Swatch, {
    key: ''.concat(te, '-').concat(ee),
    title: te,
    background: te,
  });
}
function renderSwatchLabel(te, ee, re) {
  return React__default.createElement(
    SwatchLabel,
    { key: ''.concat(te, '-').concat(ee), title: te },
    React__default.createElement(
      'div',
      null,
      te,
      re && React__default.createElement('span', null, re),
    ),
  );
}
function renderSwatchSpecimen(te) {
  return Array.isArray(te)
    ? React__default.createElement(
        SwatchSpecimen,
        null,
        React__default.createElement(
          SwatchColors,
          null,
          te.map(function (ee, re) {
            return renderSwatch(ee, re);
          }),
        ),
        React__default.createElement(
          SwatchLabels,
          null,
          te.map(function (ee, re) {
            return renderSwatchLabel(ee, re);
          }),
        ),
      )
    : React__default.createElement(
        SwatchSpecimen,
        null,
        React__default.createElement(
          SwatchColors,
          null,
          Object.values(te).map(function (ee, re) {
            return renderSwatch(ee, re);
          }),
        ),
        React__default.createElement(
          SwatchLabels,
          null,
          Object.keys(te).map(function (ee, re) {
            return renderSwatchLabel(ee, re, te[ee]);
          }),
        ),
      );
}
var ColorItem = function te(ee) {
    var re = ee.title,
      ae = ee.subtitle,
      ne = ee.colors;
    return React__default.createElement(
      Item$1,
      null,
      React__default.createElement(
        ItemDescription,
        null,
        React__default.createElement(ItemTitle, null, re),
        React__default.createElement(ItemSubtitle, null, ae),
      ),
      React__default.createElement(Swatches, null, renderSwatchSpecimen(ne)),
    );
  },
  ColorPalette = function te(ee) {
    var re = ee.children,
      ae = __rest(ee, ['children']);
    return React__default.createElement(
      ResetWrapper,
      null,
      React__default.createElement(
        List$1,
        Object.assign({}, ae, { className: 'docblock-colorpalette' }),
        React__default.createElement(
          ListHeading,
          null,
          React__default.createElement(ListName, null, 'Name'),
          React__default.createElement(ListSwatches, null, 'Swatches'),
        ),
        re,
      ),
    );
  },
  ItemLabel = styled.div(function (te) {
    var ee = te.theme;
    return {
      fontFamily: ee.typography.fonts.base,
      fontSize: ee.typography.size.s2,
      color: ee.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    };
  }),
  ItemSpecimen = styled.div(function (te) {
    var ee = te.theme;
    return Object.assign(Object.assign({}, getBlockBackgroundStyle(ee)), {
      overflow: 'hidden',
      height: 40,
      width: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      '> img, > svg': { width: 20, height: 20 },
    });
  }),
  Item = styled.div({
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: '0 1 calc(20% - 10px)',
    minWidth: 120,
    margin: '0px 10px 30px 0',
  }),
  List = styled.div({ display: 'flex', flexFlow: 'row wrap' }),
  IconItem = function te(ee) {
    var re = ee.name,
      ae = ee.children;
    return React__default.createElement(
      Item,
      null,
      React__default.createElement(ItemSpecimen, null, ae),
      React__default.createElement(ItemLabel, null, re),
    );
  },
  IconGallery = function te(ee) {
    var re = ee.children,
      ae = __rest(ee, ['children']);
    return React__default.createElement(
      ResetWrapper,
      null,
      React__default.createElement(
        List,
        Object.assign({}, ae, { className: 'docblock-icongallery' }),
        re,
      ),
    );
  },
  components = components$1,
  resetComponents = {};
Object.keys(components$1).forEach(function (te) {
  resetComponents[te] = R$1(function (ee, re) {
    return h$2(te, Object.assign(Object.assign({}, ee), { ref: re }));
  });
});
var anchorBlockIdFromId = function te(ee) {
    return 'anchor--'.concat(ee);
  },
  Anchor = function te(ee) {
    var re = ee.storyId,
      ae = ee.children;
    return e$2('div', { id: anchorBlockIdFromId(re), children: ae });
  };
window_1$2.window &&
  window_1$2.window.__DOCS_CONTEXT__ === void 0 &&
  ((window_1$2.window.__DOCS_CONTEXT__ = B$1({})),
  (window_1$2.window.__DOCS_CONTEXT__.displayName = 'DocsContext'));
var DocsContext = window_1$2.window ? window_1$2.window.__DOCS_CONTEXT__ : B$1({}),
  CURRENT_SELECTION = '.',
  PRIMARY_STORY = '^',
  titleCase = function te(ee) {
    return ee
      .split('-')
      .map(function (re) {
        return re.charAt(0).toUpperCase() + re.slice(1);
      })
      .join('');
  },
  getComponentName = function te(ee) {
    if (!!ee)
      return typeof ee == 'string'
        ? ee.includes('-')
          ? titleCase(ee)
          : ee
        : ee.__docgenInfo && ee.__docgenInfo.displayName
        ? ee.__docgenInfo.displayName
        : ee.name;
  };
function scrollToElement(te) {
  var ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'start';
  te.scrollIntoView({ behavior: 'smooth', block: ee, inline: 'nearest' });
}
function _defineProperty$4(te, ee, re) {
  return (
    ee in te
      ? Object.defineProperty(te, ee, { value: re, enumerable: !0, configurable: !0, writable: !0 })
      : (te[ee] = re),
    te
  );
}
function ownKeys(te, ee) {
  var re = Object.keys(te);
  if (Object.getOwnPropertySymbols) {
    var ae = Object.getOwnPropertySymbols(te);
    ee &&
      (ae = ae.filter(function (ne) {
        return Object.getOwnPropertyDescriptor(te, ne).enumerable;
      })),
      re.push.apply(re, ae);
  }
  return re;
}
function _objectSpread2(te) {
  for (var ee = 1; ee < arguments.length; ee++) {
    var re = arguments[ee] != null ? arguments[ee] : {};
    ee % 2
      ? ownKeys(Object(re), !0).forEach(function (ae) {
          _defineProperty$4(te, ae, re[ae]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(te, Object.getOwnPropertyDescriptors(re))
      : ownKeys(Object(re)).forEach(function (ae) {
          Object.defineProperty(te, ae, Object.getOwnPropertyDescriptor(re, ae));
        });
  }
  return te;
}
function _objectWithoutPropertiesLoose$2(te, ee) {
  if (te == null) return {};
  var re = {},
    ae = Object.keys(te),
    ne,
    oe;
  for (oe = 0; oe < ae.length; oe++) (ne = ae[oe]), !(ee.indexOf(ne) >= 0) && (re[ne] = te[ne]);
  return re;
}
function _objectWithoutProperties$2(te, ee) {
  if (te == null) return {};
  var re = _objectWithoutPropertiesLoose$2(te, ee),
    ae,
    ne;
  if (Object.getOwnPropertySymbols) {
    var oe = Object.getOwnPropertySymbols(te);
    for (ne = 0; ne < oe.length; ne++)
      (ae = oe[ne]),
        !(ee.indexOf(ae) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(te, ae) || (re[ae] = te[ae]));
  }
  return re;
}
var isFunction = function te(ee) {
    return typeof ee == 'function';
  },
  MDXContext = React__default.createContext({}),
  useMDXComponents = function te(ee) {
    var re = React__default.useContext(MDXContext),
      ae = re;
    return ee && (ae = isFunction(ee) ? ee(re) : _objectSpread2(_objectSpread2({}, re), ee)), ae;
  },
  MDXProvider = function te(ee) {
    var re = useMDXComponents(ee.components);
    return e$2(MDXContext.Provider, { value: re, children: ee.children });
  },
  DEFAULTS = {
    inlineCode: 'code',
    wrapper: function te(ee) {
      var re = ee.children;
      return e$2(p$2, { children: re });
    },
  },
  MDXCreateElement = React__default.forwardRef(function (te, ee) {
    var re = te.components,
      ae = te.mdxType,
      ne = te.originalType,
      oe = te.parentName,
      ie = _objectWithoutProperties$2(te, ['components', 'mdxType', 'originalType', 'parentName']),
      le = useMDXComponents(re),
      ce = ae,
      se = le[''.concat(oe, '.').concat(ce)] || le[ce] || DEFAULTS[ce] || ne;
    return re
      ? e$2(se, { ..._objectSpread2(_objectSpread2({ ref: ee }, ie), {}, { components: re }) })
      : e$2(se, { ..._objectSpread2({ ref: ee }, ie) });
  });
MDXCreateElement.displayName = 'MDXCreateElement';
function _defineProperty$3(te, ee, re) {
  return (
    ee in te
      ? Object.defineProperty(te, ee, { value: re, enumerable: !0, configurable: !0, writable: !0 })
      : (te[ee] = re),
    te
  );
}
function asyncGeneratorStep(te, ee, re, ae, ne, oe, ie) {
  try {
    var le = te[oe](ie),
      ce = le.value;
  } catch (se) {
    re(se);
    return;
  }
  le.done ? ee(ce) : Promise.resolve(ce).then(ae, ne);
}
function _asyncToGenerator(te) {
  return function () {
    var ee = this,
      re = arguments;
    return new Promise(function (ae, ne) {
      var oe = te.apply(ee, re);
      function ie(ce) {
        asyncGeneratorStep(oe, ae, ne, ie, le, 'next', ce);
      }
      function le(ce) {
        asyncGeneratorStep(oe, ae, ne, ie, le, 'throw', ce);
      }
      ie(void 0);
    });
  };
}
function _slicedToArray$3(te, ee) {
  return (
    _arrayWithHoles$3(te) ||
    _iterableToArrayLimit$3(te, ee) ||
    _unsupportedIterableToArray$4(te, ee) ||
    _nonIterableRest$3()
  );
}
function _nonIterableRest$3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$4(te, ee) {
  if (!!te) {
    if (typeof te == 'string') return _arrayLikeToArray$4(te, ee);
    var re = Object.prototype.toString.call(te).slice(8, -1);
    if (
      (re === 'Object' && te.constructor && (re = te.constructor.name),
      re === 'Map' || re === 'Set')
    )
      return Array.from(te);
    if (re === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))
      return _arrayLikeToArray$4(te, ee);
  }
}
function _arrayLikeToArray$4(te, ee) {
  (ee == null || ee > te.length) && (ee = te.length);
  for (var re = 0, ae = new Array(ee); re < ee; re++) ae[re] = te[re];
  return ae;
}
function _iterableToArrayLimit$3(te, ee) {
  var re = te == null ? null : (typeof Symbol < 'u' && te[Symbol.iterator]) || te['@@iterator'];
  if (re != null) {
    var ae = [],
      ne = !0,
      oe = !1,
      ie,
      le;
    try {
      for (
        re = re.call(te);
        !(ne = (ie = re.next()).done) && (ae.push(ie.value), !(ee && ae.length === ee));
        ne = !0
      );
    } catch (ce) {
      (oe = !0), (le = ce);
    } finally {
      try {
        !ne && re.return != null && re.return();
      } finally {
        if (oe) throw le;
      }
    }
    return ae;
  }
}
function _arrayWithHoles$3(te) {
  if (Array.isArray(te)) return te;
}
function useStory(te, ee) {
  var re = useStories([te], ee);
  return re && re[0];
}
function useStories(te, ee) {
  var re = ee.componentStories().reduce(function (le, ce) {
      return (le[ce.id] = ce), le;
    }, {}),
    ae = p$3(re),
    ne = _slicedToArray$3(ae, 2),
    oe = ne[0],
    ie = ne[1];
  return (
    h$3(function () {
      Promise.all(
        te.map(
          (function () {
            var le = _asyncToGenerator(
              regeneratorRuntime.mark(function ce(se) {
                var ue;
                return regeneratorRuntime.wrap(function (fe) {
                  for (;;)
                    switch ((fe.prev = fe.next)) {
                      case 0:
                        return (fe.next = 2), ee.loadStory(se);
                      case 2:
                        (ue = fe.sent),
                          ie(function (ge) {
                            return ge[se] === ue
                              ? ge
                              : Object.assign({}, ge, _defineProperty$3({}, se, ue));
                          });
                      case 4:
                      case 'end':
                        return fe.stop();
                    }
                }, ce);
              }),
            );
            return function (ce) {
              return le.apply(this, arguments);
            };
          })(),
        ),
      );
    }),
    te.map(function (le) {
      return oe[le];
    })
  );
}
function _slicedToArray$2(te, ee) {
  return (
    _arrayWithHoles$2(te) ||
    _iterableToArrayLimit$2(te, ee) ||
    _unsupportedIterableToArray$3(te, ee) ||
    _nonIterableRest$2()
  );
}
function _nonIterableRest$2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$3(te, ee) {
  if (!!te) {
    if (typeof te == 'string') return _arrayLikeToArray$3(te, ee);
    var re = Object.prototype.toString.call(te).slice(8, -1);
    if (
      (re === 'Object' && te.constructor && (re = te.constructor.name),
      re === 'Map' || re === 'Set')
    )
      return Array.from(te);
    if (re === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))
      return _arrayLikeToArray$3(te, ee);
  }
}
function _arrayLikeToArray$3(te, ee) {
  (ee == null || ee > te.length) && (ee = te.length);
  for (var re = 0, ae = new Array(ee); re < ee; re++) ae[re] = te[re];
  return ae;
}
function _iterableToArrayLimit$2(te, ee) {
  var re = te == null ? null : (typeof Symbol < 'u' && te[Symbol.iterator]) || te['@@iterator'];
  if (re != null) {
    var ae = [],
      ne = !0,
      oe = !1,
      ie,
      le;
    try {
      for (
        re = re.call(te);
        !(ne = (ie = re.next()).done) && (ae.push(ie.value), !(ee && ae.length === ee));
        ne = !0
      );
    } catch (ce) {
      (oe = !0), (le = ce);
    } finally {
      try {
        !ne && re.return != null && re.return();
      } finally {
        if (oe) throw le;
      }
    }
    return ae;
  }
}
function _arrayWithHoles$2(te) {
  if (Array.isArray(te)) return te;
}
var storyBlockIdFromId = function te(ee) {
    return 'story--'.concat(ee);
  },
  lookupStoryId = function te(ee, re) {
    var ae = re.mdxStoryNameToKey,
      ne = re.mdxComponentAnnotations;
    return dist.toId(ne.id || ne.title, dist.storyNameFromExport(ae[ee]));
  },
  getStoryId = function te(ee, re) {
    var ae = ee,
      ne = ae.id,
      oe = ee,
      ie = oe.name,
      le = ne === CURRENT_SELECTION ? re.id : ne;
    return le || lookupStoryId(ie, re);
  },
  getStoryProps = function te(ee, re, ae, ne) {
    var oe = ee.height,
      ie = ee.inline,
      le = re.name,
      ce = re.parameters,
      se = ce.docs,
      ue = se === void 0 ? {} : se;
    if (ue.disable) return null;
    var pe = ue.inlineStories,
      fe = pe === void 0 ? !1 : pe,
      ge = ue.iframeHeight,
      de = ge === void 0 ? 100 : ge,
      me = ue.prepareForInline,
      he = typeof ie == 'boolean' ? ie : fe;
    if (he && !me)
      throw new Error(
        "Story '".concat(
          le,
          "' is set to render inline, but no 'prepareForInline' function is implemented in your docs configuration!",
        ),
      );
    var ve = function () {
      var be = re.unboundStoryFn(
        Object.assign({}, ae.getStoryContext(re), {
          loaded: {},
          abortSignal: void 0,
          canvasElement: void 0,
        }),
      );
      return ne(), be;
    };
    return Object.assign(
      { inline: he, id: re.id, height: oe || (he ? void 0 : de), title: le },
      he && {
        parameters: ce,
        storyFn: function () {
          return me(ve, ae.getStoryContext(re));
        },
      },
    );
  };
function makeGate() {
  var te,
    ee = new Promise(function (re) {
      te = re;
    });
  return [ee, te];
}
var Story = function te(ee) {
  var re = q$2(DocsContext),
    ae = addons.getChannel(),
    ne = _(),
    oe = getStoryId(ee, re),
    ie = useStory(oe, re),
    le = p$3(!0),
    ce = _slicedToArray$2(le, 2),
    se = ce[0],
    ue = ce[1];
  h$3(
    function () {
      var $e;
      if (ie && ne.current) {
        var Ee = ne.current;
        ($e = re.renderStoryToElement(ie, Ee)), ue(!1);
      }
      return function () {
        return $e && $e();
      };
    },
    [ie],
  );
  var pe = makeGate(),
    fe = _slicedToArray$2(pe, 2),
    ge = fe[0],
    de = fe[1],
    me = makeGate(),
    he = _slicedToArray$2(me, 2),
    ve = he[0],
    ye = he[1];
  if ((h$3(ye), !ie)) return e$2(StorySkeleton, {});
  var be = getStoryProps(ee, ie, re, de);
  if (!be) return null;
  if (be.inline) {
    var _e;
    if (
      !(
        window_1$2 !== null &&
        window_1$2 !== void 0 &&
        (_e = window_1$2.FEATURES) !== null &&
        _e !== void 0 &&
        _e.modernInlineRender
      )
    )
      Promise.all([ge, ve]).then(function () {
        ae.emit(Events.STORY_RENDERED, oe);
      });
    else {
      var Te = '<span></span>',
        Se = be.height;
      return e$2('div', {
        id: storyBlockIdFromId(ie.id),
        children: e$2(MDXProvider, {
          components: resetComponents,
          children: [
            Se
              ? e$2('style', {
                  children: '#story--'
                    .concat(ie.id, ' { min-height: ')
                    .concat(Se, '; transform: translateZ(0); overflow: auto }'),
                })
              : null,
            se && e$2(StorySkeleton, {}),
            e$2('div', { ref: ne, 'data-name': ie.name, dangerouslySetInnerHTML: { __html: Te } }),
          ],
        }),
      });
    }
  }
  return e$2('div', {
    id: storyBlockIdFromId(ie.id),
    children: e$2(MDXProvider, { components: resetComponents, children: e$2(Story$1, { ...be }) }),
  });
};
Story.defaultProps = { children: null, name: null };
function _defineProperty$2(te, ee, re) {
  return (
    ee in te
      ? Object.defineProperty(te, ee, { value: re, enumerable: !0, configurable: !0, writable: !0 })
      : (te[ee] = re),
    te
  );
}
function _slicedToArray$1(te, ee) {
  return (
    _arrayWithHoles$1(te) ||
    _iterableToArrayLimit$1(te, ee) ||
    _unsupportedIterableToArray$2(te, ee) ||
    _nonIterableRest$1()
  );
}
function _nonIterableRest$1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$2(te, ee) {
  if (!!te) {
    if (typeof te == 'string') return _arrayLikeToArray$2(te, ee);
    var re = Object.prototype.toString.call(te).slice(8, -1);
    if (
      (re === 'Object' && te.constructor && (re = te.constructor.name),
      re === 'Map' || re === 'Set')
    )
      return Array.from(te);
    if (re === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))
      return _arrayLikeToArray$2(te, ee);
  }
}
function _arrayLikeToArray$2(te, ee) {
  (ee == null || ee > te.length) && (ee = te.length);
  for (var re = 0, ae = new Array(ee); re < ee; re++) ae[re] = te[re];
  return ae;
}
function _iterableToArrayLimit$1(te, ee) {
  var re = te == null ? null : (typeof Symbol < 'u' && te[Symbol.iterator]) || te['@@iterator'];
  if (re != null) {
    var ae = [],
      ne = !0,
      oe = !1,
      ie,
      le;
    try {
      for (
        re = re.call(te);
        !(ne = (ie = re.next()).done) && (ae.push(ie.value), !(ee && ae.length === ee));
        ne = !0
      );
    } catch (ce) {
      (oe = !0), (le = ce);
    } finally {
      try {
        !ne && re.return != null && re.return();
      } finally {
        if (oe) throw le;
      }
    }
    return ae;
  }
}
function _arrayWithHoles$1(te) {
  if (Array.isArray(te)) return te;
}
var getContext = function te(ee, re) {
    var ae = re.storyById(ee);
    if (!ae) throw new Error('Unknown story: '.concat(ee));
    return re.getStoryContext(ae);
  },
  useArgs = function te(ee, re) {
    var ae = addons.getChannel(),
      ne = getContext(ee, re),
      oe = p$3(ne.args),
      ie = _slicedToArray$1(oe, 2),
      le = ie[0],
      ce = ie[1];
    h$3(
      function () {
        var pe = function (ge) {
          ge.storyId === ee && ce(ge.args);
        };
        return (
          ae.on(Events.STORY_ARGS_UPDATED, pe),
          function () {
            return ae.off(Events.STORY_ARGS_UPDATED, pe);
          }
        );
      },
      [ee],
    );
    var se = T$2(
        function (pe) {
          return ae.emit(Events.UPDATE_STORY_ARGS, { storyId: ee, updatedArgs: pe });
        },
        [ee],
      ),
      ue = T$2(
        function (pe) {
          return ae.emit(Events.RESET_STORY_ARGS, { storyId: ee, argNames: pe });
        },
        [ee],
      );
    return [le, se, ue];
  },
  useGlobals = function te(ee, re) {
    var ae = addons.getChannel(),
      ne = getContext(ee, re),
      oe = p$3(ne.globals),
      ie = _slicedToArray$1(oe, 2),
      le = ie[0],
      ce = ie[1];
    return (
      h$3(function () {
        var se = function (pe) {
          ce(pe.globals);
        };
        return (
          ae.on(Events.GLOBALS_UPDATED, se),
          function () {
            return ae.off(Events.GLOBALS_UPDATED, se);
          }
        );
      }, []),
      [le]
    );
  },
  extractComponentArgTypes = function te(ee, re, ae, ne) {
    var oe = re.id,
      ie = re.storyById,
      le = ie(oe),
      ce = le.parameters,
      se = ce.docs || {},
      ue = se.extractArgTypes;
    if (!ue) throw new Error(ArgsTableError.ARGS_UNSUPPORTED);
    var pe = ue(ee);
    return (pe = filterArgTypes(pe, ae, ne)), pe;
  },
  isShortcut = function te(ee) {
    return ee && [CURRENT_SELECTION, PRIMARY_STORY].includes(ee);
  },
  getComponent = function te() {
    var ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      re = arguments.length > 1 ? arguments[1] : void 0,
      ae = re.id,
      ne = re.storyById,
      oe = ee,
      ie = oe.of,
      le = ee,
      ce = le.story,
      se = ne(ae),
      ue = se.component;
    if (isShortcut(ie) || isShortcut(ce)) return ue || null;
    if (!ie) throw new Error(ArgsTableError.NO_COMPONENT);
    return ie;
  },
  addComponentTabs = function te(ee, re, ae, ne, oe, ie) {
    return Object.assign(
      {},
      ee,
      mapValues(re, function (le) {
        return { rows: extractComponentArgTypes(le, ae, ne, oe), sort: ie };
      }),
    );
  },
  StoryTable = function te(ee) {
    var re = q$2(DocsContext),
      ae = re.id,
      ne = re.componentStories,
      oe = ee.story,
      ie = ee.component,
      le = ee.subcomponents,
      ce = ee.showComponent,
      se = ee.include,
      ue = ee.exclude,
      pe = ee.sort;
    try {
      var fe;
      switch (oe) {
        case CURRENT_SELECTION: {
          fe = ae;
          break;
        }
        case PRIMARY_STORY: {
          var ge = ne()[0];
          fe = ge.id;
          break;
        }
        default:
          fe = lookupStoryId(oe, re);
      }
      var de = useStory(fe, re),
        me = useArgs(fe, re),
        he = _slicedToArray$1(me, 3),
        ve = he[0],
        ye = he[1],
        be = he[2],
        _e = useGlobals(fe, re),
        Te = _slicedToArray$1(_e, 1),
        Se = Te[0];
      if (!de) return e$2(ArgsTable$1, { isLoading: !0, updateArgs: ye, resetArgs: be });
      var $e = filterArgTypes(de.argTypes, se, ue),
        Ee = getComponentName(ie) || 'Story',
        xe = _defineProperty$2({}, Ee, {
          rows: $e,
          args: ve,
          globals: Se,
          updateArgs: ye,
          resetArgs: be,
        }),
        Ae =
          $e &&
          Object.values($e).find(function (Ce) {
            return !!(Ce != null && Ce.control);
          });
      if (
        (Ae || ((ye = null), (be = null), (xe = {})),
        ie && (!Ae || ce) && (xe = addComponentTabs(xe, _defineProperty$2({}, Ee, ie), re, se, ue)),
        le)
      ) {
        if (Array.isArray(le))
          throw new Error(
            'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.',
          );
        xe = addComponentTabs(xe, le, re, se, ue);
      }
      return e$2(TabbedArgsTable, { tabs: xe, sort: pe });
    } catch (Ce) {
      return e$2(ArgsTable$1, { error: Ce.message });
    }
  },
  ComponentsTable = function te(ee) {
    var re = q$2(DocsContext),
      ae = ee.components,
      ne = ee.include,
      oe = ee.exclude,
      ie = ee.sort,
      le = addComponentTabs({}, ae, re, ne, oe);
    return e$2(TabbedArgsTable, { tabs: le, sort: ie });
  },
  ArgsTable = function te(ee) {
    var re = q$2(DocsContext),
      ae = re.id,
      ne = re.storyById,
      oe = ne(ae),
      ie = oe.parameters.controls,
      le = oe.subcomponents,
      ce = ee,
      se = ce.include,
      ue = ce.exclude,
      pe = ce.components,
      fe = ce.sort,
      ge = ee,
      de = ge.story,
      me = fe || (ie == null ? void 0 : ie.sort),
      he = getComponent(ee, re);
    if (de) return e$2(StoryTable, { ...ee, component: he, subcomponents: le, sort: me });
    if (!pe && !le) {
      var ve;
      try {
        ve = { rows: extractComponentArgTypes(he, re, se, ue) };
      } catch (be) {
        ve = { error: be.message };
      }
      return e$2(ArgsTable$1, { ...ve, sort: me });
    }
    if (pe) return e$2(ComponentsTable, { ...ee, components: pe, sort: me });
    var ye = getComponentName(he);
    return e$2(ComponentsTable, {
      ...ee,
      components: Object.assign(_defineProperty$2({}, ye, he), le),
      sort: me,
    });
  };
ArgsTable.defaultProps = { of: CURRENT_SELECTION };
var ADDON_ID = 'storybook/docs',
  SNIPPET_RENDERED = ''.concat(ADDON_ID, '/snippet-rendered'),
  SourceType;
(function (te) {
  (te.AUTO = 'auto'), (te.CODE = 'code'), (te.DYNAMIC = 'dynamic');
})(SourceType || (SourceType = {}));
function _defineProperty$1(te, ee, re) {
  return (
    ee in te
      ? Object.defineProperty(te, ee, { value: re, enumerable: !0, configurable: !0, writable: !0 })
      : (te[ee] = re),
    te
  );
}
function _slicedToArray(te, ee) {
  return (
    _arrayWithHoles(te) ||
    _iterableToArrayLimit(te, ee) ||
    _unsupportedIterableToArray$1(te, ee) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$1(te, ee) {
  if (!!te) {
    if (typeof te == 'string') return _arrayLikeToArray$1(te, ee);
    var re = Object.prototype.toString.call(te).slice(8, -1);
    if (
      (re === 'Object' && te.constructor && (re = te.constructor.name),
      re === 'Map' || re === 'Set')
    )
      return Array.from(te);
    if (re === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))
      return _arrayLikeToArray$1(te, ee);
  }
}
function _arrayLikeToArray$1(te, ee) {
  (ee == null || ee > te.length) && (ee = te.length);
  for (var re = 0, ae = new Array(ee); re < ee; re++) ae[re] = te[re];
  return ae;
}
function _iterableToArrayLimit(te, ee) {
  var re = te == null ? null : (typeof Symbol < 'u' && te[Symbol.iterator]) || te['@@iterator'];
  if (re != null) {
    var ae = [],
      ne = !0,
      oe = !1,
      ie,
      le;
    try {
      for (
        re = re.call(te);
        !(ne = (ie = re.next()).done) && (ae.push(ie.value), !(ee && ae.length === ee));
        ne = !0
      );
    } catch (ce) {
      (oe = !0), (le = ce);
    } finally {
      try {
        !ne && re.return != null && re.return();
      } finally {
        if (oe) throw le;
      }
    }
    return ae;
  }
}
function _arrayWithHoles(te) {
  if (Array.isArray(te)) return te;
}
var SourceContext = B$1({ sources: {} }),
  SourceContainer = function te(ee) {
    var re = ee.children,
      ae = p$3({}),
      ne = _slicedToArray(ae, 2),
      oe = ne[0],
      ie = ne[1],
      le = addons.getChannel();
    return (
      h$3(function () {
        var ce = function (ue, pe) {
          var fe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          (oe[ue] && oe[ue].code === pe) ||
            ie(function (ge) {
              var de = Object.assign({}, ge, _defineProperty$1({}, ue, { code: pe, format: fe }));
              return fastDeepEqual(ge, de) ? ge : de;
            });
        };
        return (
          le.on(SNIPPET_RENDERED, ce),
          function () {
            return le.off(SNIPPET_RENDERED, ce);
          }
        );
      }, []),
      e$2(SourceContext.Provider, { value: { sources: oe }, children: re })
    );
  };
function _toConsumableArray(te) {
  return (
    _arrayWithoutHoles(te) ||
    _iterableToArray(te) ||
    _unsupportedIterableToArray(te) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray(te, ee) {
  if (!!te) {
    if (typeof te == 'string') return _arrayLikeToArray(te, ee);
    var re = Object.prototype.toString.call(te).slice(8, -1);
    if (
      (re === 'Object' && te.constructor && (re = te.constructor.name),
      re === 'Map' || re === 'Set')
    )
      return Array.from(te);
    if (re === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(re))
      return _arrayLikeToArray(te, ee);
  }
}
function _iterableToArray(te) {
  if ((typeof Symbol < 'u' && te[Symbol.iterator] != null) || te['@@iterator'] != null)
    return Array.from(te);
}
function _arrayWithoutHoles(te) {
  if (Array.isArray(te)) return _arrayLikeToArray(te);
}
function _arrayLikeToArray(te, ee) {
  (ee == null || ee > te.length) && (ee = te.length);
  for (var re = 0, ae = new Array(ee); re < ee; re++) ae[re] = te[re];
  return ae;
}
function extractSource(te, ee) {
  var re = te.startBody,
    ae = te.endBody;
  if (re.line === ae.line && ee[re.line - 1] !== void 0)
    return ee[re.line - 1].substring(re.col, ae.col);
  var ne = ee[re.line - 1],
    oe = ee[ae.line - 1];
  return ne === void 0 || oe === void 0
    ? null
    : [ne.substring(re.col)].concat(_toConsumableArray(ee.slice(re.line, ae.line - 1)), [
        oe.substring(0, ae.col),
      ]).join(`
`);
}
var storyIdToSanitizedStoryName = function te(ee) {
    return ee.replace(/^.*?--/, '');
  },
  extract = function te(ee, re) {
    var ae = re.source,
      ne = re.locationsMap;
    if (!ne) return ae;
    var oe = storyIdToSanitizedStoryName(ee),
      ie = ne[oe];
    if (!ie) return ae;
    var le = ae.split(`
`);
    return extractSource(ie, le);
  },
  enhanceSource = function te(ee) {
    var re,
      ae = ee.id,
      ne = ee.parameters,
      oe = ne.storySource,
      ie = ne.docs,
      le = ie === void 0 ? {} : ie,
      ce = le.transformSource;
    if (!(oe != null && oe.source) || ((re = le.source) !== null && re !== void 0 && re.code))
      return null;
    var se = extract(ae, oe),
      ue = ce ? ce(se, ee) : se;
    return { docs: combineParameters(le, { source: { code: ue } }) };
  },
  SourceState;
(function (te) {
  (te.OPEN = 'open'), (te.CLOSED = 'closed'), (te.NONE = 'none');
})(SourceState || (SourceState = {}));
var getSourceState = function te(ee) {
    var re = ee
      .map(function (ae) {
        var ne, oe;
        return (ne = ae.parameters.docs) === null ||
          ne === void 0 ||
          (oe = ne.source) === null ||
          oe === void 0
          ? void 0
          : oe.state;
      })
      .filter(Boolean);
    return re.length === 0 ? SourceState.CLOSED : re[0];
  },
  getStorySource = function te(ee, re) {
    var ae = re.sources;
    return (ae == null ? void 0 : ae[ee]) || { code: '', format: !1 };
  },
  getSnippet = function te(ee, re) {
    var ae, ne, oe, ie, le, ce;
    if (!re) return ee;
    var se = re.parameters,
      ue = se.__isArgsStory,
      pe =
        ((ae = se.docs) === null || ae === void 0 || (ne = ae.source) === null || ne === void 0
          ? void 0
          : ne.type) || SourceType.AUTO,
      fe =
        (oe = se.docs) === null || oe === void 0 || (ie = oe.source) === null || ie === void 0
          ? void 0
          : ie.code;
    if (fe !== void 0) return fe;
    if (pe === SourceType.DYNAMIC) {
      var ge, de;
      return (
        ((ge = se.docs) === null ||
        ge === void 0 ||
        (de = ge.transformSource) === null ||
        de === void 0
          ? void 0
          : de.call(ge, ee, re)) || ee
      );
    }
    if (pe === SourceType.AUTO && ee && ue) {
      var me, he;
      return (
        ((me = se.docs) === null ||
        me === void 0 ||
        (he = me.transformSource) === null ||
        he === void 0
          ? void 0
          : he.call(me, ee, re)) || ee
      );
    }
    var ve = enhanceSource(re) || se;
    return (
      (ve == null ||
      (le = ve.docs) === null ||
      le === void 0 ||
      (ce = le.source) === null ||
      ce === void 0
        ? void 0
        : ce.code) || ''
    );
  },
  getSourceProps = function te(ee, re, ae) {
    var ne = re.id,
      oe = re.storyById,
      ie = oe(ne),
      le = ie.parameters,
      ce = ee,
      se = ee,
      ue = ee,
      pe = ce.code,
      fe = ce.format,
      ge = ue.ids || [se.id || ne],
      de = ge.map(function (Ee) {
        return Ee === CURRENT_SELECTION ? ne : Ee;
      }),
      me = useStories(de, re);
    if (!me.every(Boolean))
      return { error: SourceError.SOURCE_UNAVAILABLE, state: SourceState.NONE };
    if (!pe) {
      var he = getStorySource(de[0], ae);
      (fe = he.format),
        (pe = de.map(function (Ee, xe) {
          var Ae = getStorySource(Ee, ae),
            Ce = Ae.code,
            Re = me[xe];
          return getSnippet(Ce, Re);
        }).join(`

`));
    }
    var ve = getSourceState(me),
      ye = le.docs,
      be = ye === void 0 ? {} : ye,
      _e = be.source,
      Te = _e === void 0 ? {} : _e,
      Se = Te.language,
      $e = Se === void 0 ? null : Se;
    return pe
      ? {
          code: pe,
          state: ve,
          format: fe,
          language: ee.language || $e || 'jsx',
          dark: ee.dark || !1,
        }
      : { error: SourceError.SOURCE_UNAVAILABLE, state: ve };
  },
  Source = function te(ee) {
    var re = q$2(SourceContext),
      ae = q$2(DocsContext),
      ne = getSourceProps(ee, ae, re);
    return e$2(Source$1, { ...ne });
  },
  _excluded$1 = ['withSource', 'mdxSource', 'children'];
function _objectWithoutProperties$1(te, ee) {
  if (te == null) return {};
  var re = _objectWithoutPropertiesLoose$1(te, ee),
    ae,
    ne;
  if (Object.getOwnPropertySymbols) {
    var oe = Object.getOwnPropertySymbols(te);
    for (ne = 0; ne < oe.length; ne++)
      (ae = oe[ne]),
        !(ee.indexOf(ae) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(te, ae) || (re[ae] = te[ae]));
  }
  return re;
}
function _objectWithoutPropertiesLoose$1(te, ee) {
  if (te == null) return {};
  var re = {},
    ae = Object.keys(te),
    ne,
    oe;
  for (oe = 0; oe < ae.length; oe++) (ne = ae[oe]), !(ee.indexOf(ne) >= 0) && (re[ne] = te[ne]);
  return re;
}
var getPreviewProps = function te(ee, re, ae) {
    var ne = ee.withSource,
      oe = ee.mdxSource,
      ie = ee.children,
      le = _objectWithoutProperties$1(ee, _excluded$1),
      ce = re.mdxComponentAnnotations,
      se = re.mdxStoryNameToKey,
      ue = ne,
      pe = !1;
    if (ue === SourceState.NONE) return { isLoading: pe, previewProps: le };
    if (oe)
      return {
        isLoading: pe,
        previewProps: Object.assign({}, le, {
          withSource: getSourceProps({ code: decodeURI(oe) }, re, ae),
        }),
      };
    var fe = Array.isArray(ie) ? ie : [ie],
      ge = fe.filter(function (ye) {
        return ye.props && (ye.props.id || ye.props.name);
      }),
      de = ge.map(function (ye) {
        return (
          ye.props.id || dist.toId(ce.id || ce.title, dist.storyNameFromExport(se[ye.props.name]))
        );
      }),
      me = getSourceProps({ ids: de }, re, ae);
    ue || (ue = me.state);
    var he = de.map(function (ye) {
        return ye === CURRENT_SELECTION ? re.id : ye;
      }),
      ve = useStories(he, re);
    return (
      (pe = ve.some(function (ye) {
        return !ye;
      })),
      {
        isLoading: pe,
        previewProps: Object.assign({}, le, {
          withSource: me,
          isExpanded: ue === SourceState.OPEN,
        }),
      }
    );
  },
  Canvas = function te(ee) {
    var re = q$2(DocsContext),
      ae = q$2(SourceContext),
      ne = getPreviewProps(ee, re, ae),
      oe = ne.isLoading,
      ie = ne.previewProps,
      le = ee.children;
    return oe
      ? e$2(PreviewSkeleton, {})
      : e$2(MDXProvider, {
          components: resetComponents,
          children: e$2(Preview$1, { ...ie, children: le }),
        });
  },
  str = function te(ee) {
    if (!ee) return '';
    if (typeof ee == 'string') return ee;
    throw new Error('Description: expected string, got: '.concat(JSON.stringify(ee)));
  },
  DescriptionType;
(function (te) {
  (te.INFO = 'info'),
    (te.NOTES = 'notes'),
    (te.DOCGEN = 'docgen'),
    (te.LEGACY_5_2 = 'legacy-5.2'),
    (te.AUTO = 'auto');
})(DescriptionType || (DescriptionType = {}));
var getNotes = function te(ee) {
    return ee && (typeof ee == 'string' ? ee : str(ee.markdown) || str(ee.text));
  },
  getInfo = function te(ee) {
    return ee && (typeof ee == 'string' ? ee : str(ee.text));
  },
  noDescription = function te(ee) {
    return null;
  },
  getDescriptionProps = function te(ee, re) {
    var ae = ee.of,
      ne = ee.type,
      oe = ee.markdown,
      ie = ee.children,
      le = re.id,
      ce = re.storyById,
      se = ce(le),
      ue = se.component,
      pe = se.parameters;
    if (ie || oe) return { markdown: ie || oe };
    var fe = pe.notes,
      ge = pe.info,
      de = pe.docs,
      me = de || {},
      he = me.extractComponentDescription,
      ve = he === void 0 ? noDescription : he,
      ye = me.description,
      be = ae === CURRENT_SELECTION ? ue : ae,
      _e = ye == null ? void 0 : ye.component;
    if (_e) return { markdown: _e };
    switch (ne) {
      case DescriptionType.INFO:
        return { markdown: getInfo(ge) };
      case DescriptionType.NOTES:
        return { markdown: getNotes(fe) };
      case DescriptionType.LEGACY_5_2:
        return {
          markdown: `
`
            .concat(
              getNotes(fe) || getInfo(ge) || '',
              `

`,
            )
            .concat(
              ve(be) || '',
              `
`,
            )
            .trim(),
        };
      case DescriptionType.DOCGEN:
      case DescriptionType.AUTO:
      default:
        return { markdown: ve(be, Object.assign({ component: ue }, pe)) };
    }
  },
  DescriptionContainer = function te(ee) {
    var re = q$2(DocsContext),
      ae = getDescriptionProps(ee, re),
      ne = ae.markdown;
    return ne ? e$2(Description$1, { markdown: ne }) : null;
  };
DescriptionContainer.defaultProps = { of: '.' };
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/,
  extractTitle = function te(ee) {
    var re = ee.title,
      ae = re.trim().split(STORY_KIND_PATH_SEPARATOR);
    return (ae && ae[ae.length - 1]) || re;
  },
  Title = function te(ee) {
    var re = ee.children,
      ae = q$2(DocsContext),
      ne = re;
    return (
      ne || (ne = extractTitle(ae)),
      ne ? e$2(Title$2, { className: 'sbdocs-title', children: ne }) : null
    );
  },
  Subtitle = function te(ee) {
    var re = ee.children,
      ae = q$2(DocsContext),
      ne = ae.id,
      oe = ae.storyById,
      ie = oe(ne),
      le = ie.parameters,
      ce = re;
    return (
      ce || (ce = le == null ? void 0 : le.componentSubtitle),
      ce ? e$2(Subtitle$1, { className: 'sbdocs-subtitle', children: ce }) : null
    );
  },
  _excluded = ['children'],
  _excluded2 = ['className', 'children'],
  _excluded3 = ['href', 'target', 'children'],
  _excluded4 = ['as', 'id', 'children'],
  _excluded5 = ['as', 'id', 'children'];
function _defineProperty(te, ee, re) {
  return (
    ee in te
      ? Object.defineProperty(te, ee, { value: re, enumerable: !0, configurable: !0, writable: !0 })
      : (te[ee] = re),
    te
  );
}
function _objectWithoutProperties(te, ee) {
  if (te == null) return {};
  var re = _objectWithoutPropertiesLoose(te, ee),
    ae,
    ne;
  if (Object.getOwnPropertySymbols) {
    var oe = Object.getOwnPropertySymbols(te);
    for (ne = 0; ne < oe.length; ne++)
      (ae = oe[ne]),
        !(ee.indexOf(ae) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(te, ae) || (re[ae] = te[ae]));
  }
  return re;
}
function _objectWithoutPropertiesLoose(te, ee) {
  if (te == null) return {};
  var re = {},
    ae = Object.keys(te),
    ne,
    oe;
  for (oe = 0; oe < ae.length; oe++) (ne = ae[oe]), !(ee.indexOf(ne) >= 0) && (re[ne] = te[ne]);
  return re;
}
var document$3 = window_1$2.document,
  assertIsFn = function te(ee) {
    if (typeof ee != 'function') throw new Error('Expected story function, got: '.concat(ee));
    return ee;
  },
  AddContext = function te(ee) {
    var re = ee.children,
      ae = _objectWithoutProperties(ee, _excluded),
      ne = React__default.useContext(DocsContext);
    return e$2(DocsContext.Provider, { value: Object.assign({}, ne, ae), children: re });
  },
  CodeOrSourceMdx = function te(ee) {
    var re = ee.className,
      ae = ee.children,
      ne = _objectWithoutProperties(ee, _excluded2);
    if (typeof re != 'string' && (typeof ae != 'string' || !ae.match(/[\n\r]/g)))
      return e$2(Code, { children: ae });
    var oe = re && re.split('-');
    return e$2(Source$1, { language: (oe && oe[1]) || 'plaintext', format: !1, code: ae, ...ne });
  };
function navigate(te) {
  addons.getChannel().emit(NAVIGATE_URL, te);
}
var A = components.a,
  AnchorInPage = function te(ee) {
    var re = ee.hash,
      ae = ee.children;
    return e$2(A, {
      href: re,
      target: '_self',
      onClick: function (oe) {
        var ie = re.substring(1),
          le = document$3.getElementById(ie);
        le && navigate(re);
      },
      children: ae,
    });
  },
  AnchorMdx = function te(ee) {
    var re = ee.href,
      ae = ee.target,
      ne = ee.children,
      oe = _objectWithoutProperties(ee, _excluded3);
    if (re) {
      if (re.startsWith('#')) return e$2(AnchorInPage, { hash: re, children: ne });
      if (ae !== '_blank' && !re.startsWith('https://'))
        return e$2(A, {
          href: re,
          onClick: function (le) {
            le.preventDefault(), navigate(le.currentTarget.getAttribute('href'));
          },
          target: ae,
          ...oe,
          children: ne,
        });
    }
    return e$2(A, { ...ee });
  },
  SUPPORTED_MDX_HEADERS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce(function (te, ee) {
    return Object.assign(
      {},
      te,
      _defineProperty(
        {},
        ee,
        styled(components[ee])({
          '& svg': { visibility: 'hidden' },
          '&:hover svg': { visibility: 'visible' },
        }),
      ),
    );
  }, {}),
  OcticonAnchor = styled.a(function () {
    return { float: 'left', paddingRight: '4px', marginLeft: '-20px', color: 'inherit' };
  }),
  HeaderWithOcticonAnchor = function te(ee) {
    var re = ee.as,
      ae = ee.id,
      ne = ee.children,
      oe = _objectWithoutProperties(ee, _excluded4),
      ie = OcticonHeaders[re],
      le = '#'.concat(ae);
    return e$2(ie, {
      id: ae,
      ...oe,
      children: [
        e$2(OcticonAnchor, {
          'aria-hidden': 'true',
          href: le,
          tabIndex: -1,
          target: '_self',
          onClick: function (se) {
            var ue = document$3.getElementById(ae);
            ue && navigate(le);
          },
          children: e$2('svg', {
            viewBox: '0 0 16 16',
            version: '1.1',
            width: '16',
            height: '16',
            'aria-hidden': 'true',
            fill: 'currentColor',
            children: e$2('path', {
              fillRule: 'evenodd',
              d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z',
            }),
          }),
        }),
        ne,
      ],
    });
  },
  HeaderMdx = function te(ee) {
    var re = ee.as,
      ae = ee.id,
      ne = ee.children,
      oe = _objectWithoutProperties(ee, _excluded5);
    if (ae) return e$2(HeaderWithOcticonAnchor, { as: re, id: ae, ...oe, children: ne });
    var ie = components[re];
    return e$2(ie, { ...ee });
  },
  HeadersMdx = SUPPORTED_MDX_HEADERS.reduce(function (te, ee) {
    return Object.assign(
      {},
      te,
      _defineProperty({}, ee, function (re) {
        return e$2(HeaderMdx, { as: ee, ...re });
      }),
    );
  }, {}),
  Subheading = function te(ee) {
    var re = ee.children,
      ae = ee.disableAnchor;
    if (ae || typeof re != 'string') return e$2(H3, { children: re });
    var ne = re.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return e$2(HeaderMdx, { as: 'h3', id: ne, children: re });
  },
  _templateObject$3;
function _taggedTemplateLiteral$3(te, ee) {
  return (
    ee || (ee = te.slice(0)),
    Object.freeze(Object.defineProperties(te, { raw: { value: Object.freeze(ee) } }))
  );
}
var warnStoryDescription = browser(
    function () {},
    dedent$2(
      _templateObject$3 ||
        (_templateObject$3 = _taggedTemplateLiteral$3([
          `
    Deprecated parameter: docs.storyDescription => docs.description.story
      
    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#docs-description-parameter
  `,
        ])),
    ),
  ),
  DocsStory = function te(ee) {
    var re = ee.id,
      ae = ee.name,
      ne = ee.expanded,
      oe = ne === void 0 ? !0 : ne,
      ie = ee.withToolbar,
      le = ie === void 0 ? !1 : ie,
      ce = ee.parameters,
      se = ce === void 0 ? {} : ce,
      ue,
      pe = se.docs;
    if (oe && pe) {
      var fe;
      (ue = (fe = pe.description) === null || fe === void 0 ? void 0 : fe.story),
        ue || ((ue = pe.storyDescription), ue && warnStoryDescription());
    }
    var ge = oe && ae;
    return e$2(Anchor, {
      storyId: re,
      children: [
        ge && e$2(Subheading, { children: ge }),
        ue && e$2(DescriptionContainer, { markdown: ue }),
        e$2(Canvas, { withToolbar: le, children: e$2(Story, { id: re, parameters: se }) }),
      ],
    });
  },
  Primary = function te(ee) {
    var re = ee.name,
      ae = q$2(DocsContext),
      ne = ae.componentStories,
      oe = ne(),
      ie;
    return (
      oe &&
        (ie = re
          ? oe.find(function (le) {
              return le.name === re;
            })
          : oe[0]),
      ie ? e$2(DocsStory, { ...ie, expanded: !1, withToolbar: !0 }) : null
    );
  },
  Heading = function te(ee) {
    var re = ee.children,
      ae = ee.disableAnchor;
    if (ae || typeof re != 'string') return e$2(H2, { children: re });
    var ne = re.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return e$2(HeaderMdx, { as: 'h2', id: ne, children: re });
  },
  Stories = function te(ee) {
    var re = ee.title,
      ae = ee.includePrimary,
      ne = ae === void 0 ? !1 : ae,
      oe = q$2(DocsContext),
      ie = oe.componentStories,
      le = ie();
    return (
      (le = le.filter(function (ce) {
        var se, ue;
        return !(
          (se = ce.parameters) !== null &&
          se !== void 0 &&
          (ue = se.docs) !== null &&
          ue !== void 0 &&
          ue.disable
        );
      })),
      ne || (le = le.slice(1)),
      !le || le.length === 0
        ? null
        : e$2(p$2, {
            children: [
              e$2(Heading, { children: re }),
              le.map(function (ce) {
                return ce && e$2(DocsStory, { ...ce, expanded: !0 }, ce.id);
              }),
            ],
          })
    );
  };
Stories.defaultProps = { title: 'Stories' };
var DocsPage = function te() {
    return e$2(p$2, {
      children: [
        e$2(Title, {}),
        e$2(Subtitle, {}),
        e$2(DescriptionContainer, {}),
        e$2(Primary, {}),
        e$2(ArgsTable, { story: PRIMARY_STORY }),
        e$2(Stories, {}),
      ],
    });
  },
  _templateObject$2;
function _taggedTemplateLiteral$2(te, ee) {
  return (
    ee || (ee = te.slice(0)),
    Object.freeze(Object.defineProperties(te, { raw: { value: Object.freeze(ee) } }))
  );
}
var document$2 = window_1$2.document,
  globalWindow = window_1$2.window,
  defaultComponents = Object.assign(
    {},
    components,
    { code: CodeOrSourceMdx, a: AnchorMdx },
    HeadersMdx,
  ),
  warnOptionsTheme = browser(
    function () {},
    dedent$2(
      _templateObject$2 ||
        (_templateObject$2 = _taggedTemplateLiteral$2([
          `
    Deprecated parameter: options.theme => docs.theme

    https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/theming.md#storybook-theming
`,
        ])),
    ),
  ),
  DocsContainer = function te(ee) {
    var re = ee.context,
      ae = ee.children,
      ne = re.id,
      oe = re.storyById,
      ie = oe(ne),
      le = ie.parameters,
      ce = le.options,
      se = ce === void 0 ? {} : ce,
      ue = le.docs,
      pe = ue === void 0 ? {} : ue,
      fe = pe.theme;
    !fe && se.theme && (warnOptionsTheme(), (fe = se.theme));
    var ge = ensure(fe),
      de = Object.assign({}, defaultComponents, pe.components);
    return (
      h$3(
        function () {
          var me;
          try {
            me = new URL(globalWindow.parent.location);
          } catch {
            return;
          }
          if (me.hash) {
            var he = document$2.getElementById(me.hash.substring(1));
            he &&
              setTimeout(function () {
                scrollToElement(he);
              }, 200);
          } else {
            var ve =
              document$2.getElementById(anchorBlockIdFromId(ne)) ||
              document$2.getElementById(storyBlockIdFromId(ne));
            if (ve) {
              var ye = ve.parentElement.querySelectorAll('[id|="anchor-"]'),
                be = ve;
              ye && ye[0] === ve && (be = document$2.getElementById('docs-root')),
                setTimeout(function () {
                  scrollToElement(be, 'start');
                }, 200);
            }
          }
        },
        [ne],
      ),
      e$2(DocsContext.Provider, {
        value: re,
        children: e$2(SourceContainer, {
          children: e$2(ThemeProvider, {
            theme: ge,
            children: e$2(MDXProvider, {
              components: de,
              children: e$2(DocsWrapper, {
                className: 'sbdocs sbdocs-wrapper',
                children: e$2(DocsContent, { className: 'sbdocs sbdocs-content', children: ae }),
              }),
            }),
          }),
        }),
      })
    );
  },
  document$1 = window_1$2.document;
function getFirstStoryId(te) {
  var ee = te.componentStories();
  return ee.length > 0 ? ee[0].id : null;
}
function renderAnchor() {
  var te = q$2(DocsContext),
    ee = getFirstStoryId(te) || te.id;
  return e$2(Anchor, { storyId: ee });
}
var Meta = function te() {
    var ee = new URL(document$1.location).searchParams,
      re = ee.get('viewMode') === 'docs';
    return re ? renderAnchor() : null;
  },
  _templateObject$1;
function _taggedTemplateLiteral$1(te, ee) {
  return (
    ee || (ee = te.slice(0)),
    Object.freeze(Object.defineProperties(te, { raw: { value: Object.freeze(ee) } }))
  );
}
var Preview = browser(
    function (te) {
      return e$2(Canvas, { ...te });
    },
    dedent$2(
      _templateObject$1 ||
        (_templateObject$1 = _taggedTemplateLiteral$1([
          `
    Preview doc block has been renamed to Canvas.

    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed
  `,
        ])),
    ),
  ),
  _templateObject;
function _taggedTemplateLiteral(te, ee) {
  return (
    ee || (ee = te.slice(0)),
    Object.freeze(Object.defineProperties(te, { raw: { value: Object.freeze(ee) } }))
  );
}
var Props = browser(
  function (te) {
    return e$2(ArgsTable, { ...te });
  },
  dedent$2(
    _templateObject ||
      (_templateObject = _taggedTemplateLiteral([
        `
    Props doc block has been renamed to ArgsTable.

    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed
  `,
      ])),
  ),
);
Props.defaultProps = { of: CURRENT_SELECTION };
var Wrapper = function te(ee) {
  var re = ee.children;
  return e$2('div', { style: { fontFamily: 'sans-serif' }, children: re });
};
const index = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      ColorPalette,
      ColorItem,
      IconGallery,
      IconItem,
      Typeset,
      anchorBlockIdFromId,
      Anchor,
      extractComponentArgTypes,
      getComponent,
      StoryTable,
      ComponentsTable,
      ArgsTable,
      get SourceState() {
        return SourceState;
      },
      Canvas,
      get DescriptionType() {
        return DescriptionType;
      },
      getDescriptionProps,
      Description: DescriptionContainer,
      DocsContext,
      DocsPage,
      DocsContainer,
      DocsStory,
      Heading,
      Meta,
      Preview,
      Primary,
      Props,
      getSourceProps,
      Source,
      SourceContext,
      SourceContainer,
      Stories,
      storyBlockIdFromId,
      lookupStoryId,
      getStoryId,
      getStoryProps,
      Story,
      Subheading,
      Subtitle,
      extractTitle,
      Title,
      Wrapper,
      CURRENT_SELECTION,
      PRIMARY_STORY,
      assertIsFn,
      AddContext,
      CodeOrSourceMdx,
      AnchorMdx,
      HeaderMdx,
      HeadersMdx,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
export {
  ActionBar as A,
  popper as B,
  variationPlacements as C,
  viewport as D,
  reference as E,
  clippingParents as F,
  Global as G,
  Form as H,
  Icons as I,
  getControlId as J,
  _root as K,
  isObject_1 as L,
  isSymbol_1 as M,
  index as N,
  ScrollArea as S,
  TooltipNote as T,
  WithTooltip as W,
  __awaiter as _,
  __rest as a,
  _objectWithoutPropertiesLoose$3 as b,
  commonjsGlobal as c,
  arrayBufferNative as d,
  arrayBuffer as e,
  createHtml as f,
  stringHtmlForced as g,
  getDefaultExportFromCjs as h,
  dedent as i,
  darkenColor as j,
  keyframes as k,
  lightenColor as l,
  _extends as m,
  modifierPhases as n,
  auto as o,
  start as p,
  top as q,
  right as r,
  styled as s,
  toIndex$1 as t,
  bottom as u,
  left as v,
  window_1 as w,
  placements as x,
  basePlacements as y,
  end as z,
};
//# sourceMappingURL=index.ef5de913.js.map
