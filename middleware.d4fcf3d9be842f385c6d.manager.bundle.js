(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{838:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"applyDestinationMiddleware",(function(){return applyDestinationMiddleware})),__webpack_require__.d(__webpack_exports__,"sourceMiddlewarePlugin",(function(){return sourceMiddlewarePlugin}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_core_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(44),_lib_as_promise__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(185),_lib_to_facade__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(313);function applyDestinationMiddleware(destination,evt,middleware){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(this,void 0,void 0,(function(){function applyMiddleware(event,fn){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(this,void 0,void 0,(function(){var nextCalled,returnedEvent,_a;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)(this,(function(_b){switch(_b.label){case 0:return nextCalled=!1,returnedEvent=null,[4,Object(_lib_as_promise__WEBPACK_IMPORTED_MODULE_2__.a)(fn({payload:Object(_lib_to_facade__WEBPACK_IMPORTED_MODULE_3__.a)(event,{clone:!0,traverse:!1}),integration:destination,next:function(evt){nextCalled=!0,null===evt&&(returnedEvent=null),evt&&(returnedEvent=evt.obj)}}))];case 1:return _b.sent(),nextCalled||null===returnedEvent||(returnedEvent.integrations=Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)({},event.integrations),((_a={})[destination]=!1,_a))),[2,returnedEvent]}}))}))}var _i,middleware_1,md,result;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)(this,(function(_a){switch(_a.label){case 0:_i=0,middleware_1=middleware,_a.label=1;case 1:return _i<middleware_1.length?(md=middleware_1[_i],[4,applyMiddleware(evt,md)]):[3,4];case 2:if(null===(result=_a.sent()))return[2,null];evt=result,_a.label=3;case 3:return _i++,[3,1];case 4:return[2,evt]}}))}))}function sourceMiddlewarePlugin(fn,integrations){function apply(ctx){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.b)(this,void 0,void 0,(function(){var nextCalled;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.d)(this,(function(_a){switch(_a.label){case 0:return nextCalled=!1,[4,Object(_lib_as_promise__WEBPACK_IMPORTED_MODULE_2__.a)(fn({payload:Object(_lib_to_facade__WEBPACK_IMPORTED_MODULE_3__.a)(ctx.event,{clone:!0,traverse:!1}),integrations:null!=integrations?integrations:{},next:function(evt){nextCalled=!0,evt&&(ctx.event=evt.obj)}}))];case 1:if(_a.sent(),!nextCalled)throw new _core_context__WEBPACK_IMPORTED_MODULE_1__.b({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,ctx]}}))}))}return{name:"Source Middleware ".concat(fn.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(ctx){return Promise.resolve(ctx)},track:apply,page:apply,identify:apply,alias:apply,group:apply}}}}]);