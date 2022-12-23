(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),g=n(8052),m=n(3070).f,y=n(7976),v=n(9518),w=n(7674),b=n(5112),_=n(9711),E=n(9909),T=E.enforce,S=E.get,I=c.Int8Array,k=I&&I.prototype,C=c.Uint8ClampedArray,A=C&&C.prototype,R=I&&v(I),O=k&&v(k),x=Object.prototype,D=c.TypeError,N=b("toStringTag"),L=_("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),U=!1,F={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},j={BigInt64Array:8,BigUint64Array:8},V=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(F,t)||h(j,t)},B=function(e){var t=v(e);if(l(t)){var n=S(t);return n&&h(n,P)?n[P]:B(t)}},q=function(e){if(!l(e))return!1;var t=d(e);return h(F,t)||h(j,t)},$=function(e){if(q(e))return e;throw D("Target is not a typed array")},z=function(e){if(u(e)&&(!w||y(R,e)))return e;throw D(f(e)+" is not a typed array constructor")},H=function(e,t,n,r){if(a){if(n)for(var i in F){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}O[e]&&!n||g(O,e,n?t:M&&k[e]||t,r)}},W=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in F)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(R[e]&&!n)return;try{return g(R,e,n?t:M&&R[e]||t)}catch(s){}}for(r in F)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in F)i=c[r],s=i&&i.prototype,s?T(s)[P]=i:M=!1;for(r in j)i=c[r],s=i&&i.prototype,s&&(T(s)[P]=i);if((!M||!u(R)||R===Function.prototype)&&(R=function(){throw D("Incorrect invocation")},M))for(r in F)c[r]&&w(c[r],R);if((!M||!O||O===x)&&(O=R.prototype,M))for(r in F)c[r]&&w(c[r].prototype,O);if(M&&v(A)!==O&&w(A,O),a&&!h(O,N))for(r in U=!0,m(O,N,{get:function(){return l(this)?this[L]:void 0}}),F)c[r]&&p(c[r],L,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:U&&L,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:W,getTypedArrayConstructor:B,isView:V,isTypedArray:q,TypedArray:R,TypedArrayPrototype:O}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},9671:function(e,t,n){var r=n(9974),i=n(8361),s=n(7908),o=n(6244),a=function(e){var t=1==e;return function(n,a,c){var u,l,h=s(n),d=i(h),f=r(a,c),p=o(d);while(p-- >0)if(u=d[p],l=f(u,p,h),l)switch(e){case 0:return u;case 1:return p}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(84),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},9974:function(e,t,n){var r=n(1702),i=n(9662),s=n(4374),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},84:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},1702:function(e,t,n){var r=n(4326),i=n(84);e.exports=function(e){if("Function"===r(e))return i(e)}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw g(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw g(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},s=function(e){return l(e,b)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=l(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=g((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},4590:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),g=n(1913),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=y(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,_="stack"in y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!T&&!(T.writable&&T.configurable),I=_&&!S&&!E;r({global:!0,constructor:!0,forced:g||I},{DOMException:I?w:v});var k=s(m),C=k.prototype;if(C.constructor!==k)for(var A in g||a(C,"constructor",o(1,k)),d)if(c(d,A)){var R=d[A],O=R.s;c(k,O)||a(k,O,o(6,R.c))}},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return k},L:function(){return a},LL:function(){return O},P0:function(){return T},Pz:function(){return I},Sg:function(){return C},UG:function(){return h},ZR:function(){return R},aH:function(){return S},b$:function(){return f},eu:function(){return m},hl:function(){return g},m9:function(){return $},ne:function(){return j},pd:function(){return F},q4:function(){return E},ru:function(){return d},tV:function(){return c},uI:function(){return l},vZ:function(){return L},w1:function(){return p},xO:function(){return M},xb:function(){return N},z$:function(){return u},zd:function(){return U}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function l(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function g(){return"object"===typeof indexedDB}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function y(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=()=>y().__FIREBASE_DEFAULTS__,w=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},b=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},_=()=>{try{return v()||w()||b()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},E=e=>{var t,n;return null===(n=null===(t=_())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},T=e=>{const t=E(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},S=()=>{var e;return null===(e=_())||void 0===e?void 0:e.config},I=e=>{var t;return null===(t=_())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="FirebaseError";class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=A,Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,O.prototype.create)}}class O{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new R(r,o,n);return a}}function x(e,t){return e.replace(D,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(P(n)&&P(s)){if(!L(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function P(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function U(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function F(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=B(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function q(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{Bj:function(){return s},Fl:function(){return ze},IU:function(){return Ae},Jd:function(){return T},PG:function(){return Se},SU:function(){return je},Um:function(){return _e},WL:function(){return Be},X$:function(){return C},X3:function(){return Ce},XI:function(){return Me},Xl:function(){return Re},dq:function(){return Le},iH:function(){return Pe},j:function(){return I},lk:function(){return S},qj:function(){return be},qq:function(){return w},yT:function(){return ke}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&p)>0,u=e=>(e.n&p)>0,l=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=m,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=m,m=this,_=!0,p=1<<++f,f<=g?l(this):b(this),this.fn()}finally{f<=g&&h(this),p=1<<--f,m=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const E=[];function T(){E.push(_),_=!1}function S(){const e=E.pop();_=void 0===e||e}function I(e,t,n){if(_&&m){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;k(r,i)}}function k(e,t){let n=!1;f<=g?u(e)||(e.n|=p,n=!c(e)):n=!e.has(m),n&&(e.add(m),m.deps.push(e))}function C(e,t,n,i,s,o){const c=d.get(e);if(!c)return;let u=[];if("clear"===t)u=[...c.values()];else if("length"===n&&(0,r.kJ)(e))c.forEach(((e,t)=>{("length"===t||t>=i)&&u.push(e)}));else switch(void 0!==n&&u.push(c.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(c.get("length")):(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"delete":(0,r.kJ)(e)||(u.push(c.get(y)),(0,r._N)(e)&&u.push(c.get(v)));break;case"set":(0,r._N)(e)&&u.push(c.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(a(e))}}function A(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==m||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const O=(0,r.fY)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),D=U(),N=U(!1,!0),L=U(!0),P=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,i=this.length;t<i;t++)I(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Ae(this)[t].apply(this,e);return S(),n}})),e}function U(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ye:me:t?ge:pe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(P,i))return Reflect.get(P,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?x.has(i):O(i))?a:(e||I(n,"get",i),t?a:Le(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ee(a):be(a):a)}}const F=V(),j=V(!0);function V(e=!1){return function(t,n,i,s){let o=t[n];if(Ie(o)&&Le(o)&&!Le(i))return!1;if(!e&&(ke(i)||Ie(i)||(o=Ae(o),i=Ae(i)),!(0,r.kJ)(t)&&Le(o)&&!Le(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Ae(s)&&(a?(0,r.aU)(i,o)&&C(t,"set",n,i,o):C(t,"add",n,i)),c}}function B(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&C(e,"delete",t,void 0,i),s}function q(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&x.has(t)||I(e,"has",t),n}function $(e){return I(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const z={get:D,set:F,deleteProperty:B,has:q,ownKeys:$},H={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},W=(0,r.l7)({},z,{get:N,set:j}),K=e=>e,G=e=>Reflect.getPrototypeOf(e);function J(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ae(e),s=Ae(t);n||(t!==s&&I(i,"get",t),I(i,"get",s));const{has:o}=G(i),a=r?K:n?xe:Oe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=Ae(n),i=Ae(e);return t||(e!==i&&I(r,"has",e),I(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Q(e,t=!1){return e=e["__v_raw"],!t&&I(Ae(e),"iterate",y),Reflect.get(e,"size",e)}function Y(e){e=Ae(e);const t=Ae(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function Z(e,t){t=Ae(t);const n=Ae(this),{has:i,get:s}=G(n);let o=i.call(n,e);o||(e=Ae(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function ee(e){const t=Ae(this),{has:n,get:r}=G(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&C(t,"delete",e,void 0,s),o}function te(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ae(s),a=t?K:e?xe:Oe;return!e&&I(o,"iterate",y),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const s=this["__v_raw"],o=Ae(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?K:t?xe:Oe;return!t&&I(o,"iterate",u?v:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return J(this,e)},get size(){return Q(this)},has:X,add:Y,set:Z,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return J(this,e,!1,!0)},get size(){return Q(this)},has:X,add:Y,set:Z,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return J(this,e,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return J(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[oe,ae,ce,ue]=se();function le(e,t){const n=t?e?ue:ce:e?ae:oe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const he={get:le(!1,!1)},de={get:le(!1,!0)},fe={get:le(!0,!1)};const pe=new WeakMap,ge=new WeakMap,me=new WeakMap,ye=new WeakMap;function ve(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function we(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ve((0,r.W7)(e))}function be(e){return Ie(e)?e:Te(e,!1,z,he,pe)}function _e(e){return Te(e,!1,W,de,ge)}function Ee(e){return Te(e,!0,H,fe,me)}function Te(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=we(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Se(e){return Ie(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ie(e){return!(!e||!e["__v_isReadonly"])}function ke(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return Se(e)||Ie(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Re(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Oe=e=>(0,r.Kn)(e)?be(e):e,xe=e=>(0,r.Kn)(e)?Ee(e):e;function De(e){_&&m&&(e=Ae(e),k(e.dep||(e.dep=a())))}function Ne(e,t){e=Ae(e),e.dep&&A(e.dep)}function Le(e){return!(!e||!0!==e.__v_isRef)}function Pe(e){return Ue(e,!1)}function Me(e){return Ue(e,!0)}function Ue(e,t){return Le(e)?e:new Fe(e,t)}class Fe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Oe(e)}get value(){return De(this),this._value}set value(e){const t=this.__v_isShallow||ke(e)||Ie(e);e=t?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Oe(e),Ne(this,e))}}function je(e){return Le(e)?e.value:e}const Ve={get:(e,t,n)=>je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Be(e){return Se(e)?e:new Proxy(e,Ve)}var qe;class $e{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[qe]=!1,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Ne(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ze(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new $e(i,s,o||!s,n);return a}qe="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},Cn:function(){return M},FN:function(){return vn},Fl:function(){return Ln},HX:function(){return U},HY:function(){return Mt},JJ:function(){return K},Ko:function(){return Be},LL:function(){return Fe},Nv:function(){return qe},P$:function(){return ie},Q6:function(){return le},U2:function(){return oe},Uk:function(){return on},Us:function(){return Ot},WI:function(){return $e},Wm:function(){return tn},Y3:function(){return v},Y8:function(){return te},YP:function(){return X},_:function(){return en},aZ:function(){return he},dD:function(){return P},dG:function(){return dn},f3:function(){return G},h:function(){return Pn},iD:function(){return Kt},ic:function(){return ke},j4:function(){return Gt},kq:function(){return cn},nK:function(){return ue},uE:function(){return an},up:function(){return Me},w5:function(){return F},wg:function(){return qt},wy:function(){return Ne}});n(7658),n(541);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(e){const t=y||m;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=k(h[r]);i<e?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),_())}function _(){u||l||(l=!0,y=m.then(A))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),_()}function S(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function I(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),g=0;g<p.length;g++)p[g]();p=null,g=0}}const k=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function A(e){l=!1,u=!0,h.sort(C);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,I(e),u=!1,y=null,(h.length||f.length)&&A(e)}}new Set;new Map;function R(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>e.trim()))),t&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function O(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=O(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function x(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let D=null,N=null;function L(e){const t=D;return D=e,N=e&&e.type.__scopeId||null,t}function P(e){N=e}function M(){N=null}const U=e=>F;function F(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ht(-1);const i=L(t);let s;try{s=e(...n)}finally{L(i),r._d&&Ht(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function j(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=e;let v,w;const b=L(e);try{if(4&n.shapeFlag){const e=s||r;v=un(d.call(e,e,f,o,g,p,m)),w=l}else{const e=t;0,v=un(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:V(l)}}catch(E){Vt.length=0,a(E,e,1),v=tn(Ft)}let _=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(i.tR)&&(w=B(w,c)),_=sn(_,w))}return n.dirs&&(_=sn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,L(b),v}const V=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},B=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function q(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||$(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?$(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!x(u,n))return!0}}return!1}function $(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!x(n,s))return!0}return!1}function z({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const H=e=>e.__isSuspense;function W(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):T(e)}function K(e,t){if(yn){let n=yn.provides;const r=yn.parent&&yn.parent.provides;r===n&&(n=yn.provides=Object.create(r)),n[e]=t}else 0}function G(e,t,n=!1){const r=yn||D;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const J={};function X(e,t,n){return Q(e,t,n)}function Q(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=yn;let d,f,p=!1,g=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(g=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ee(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[m])}:i.dG,t&&a){const e=d;d=()=>ee(e())}let m=e=>{f=_.onStop=()=>{s(e,h,4)}};if(Sn)return m=i.dG,t?n&&o(t,h,3,[d(),g?[]:void 0,m]):d(),i.dG;let y=g?[]:J;const v=()=>{if(_.active)if(t){const e=_.run();(a||p||(g?e.some(((e,t)=>(0,i.aU)(e,y[t]))):(0,i.aU)(e,y)))&&(f&&f(),o(t,h,3,[e,y===J?void 0:y,m]),y=e)}else _.run()};let w;v.allowRecurse=!!t,"sync"===c?w=v:"post"===c?w=()=>Rt(v,h&&h.suspense):(v.pre=!0,h&&(v.id=h.uid),w=()=>b(v));const _=new r.qq(d,w);return t?n?v():y=_.run():"post"===c?Rt(_.run.bind(_),h&&h.suspense):_.run(),()=>{_.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,_)}}function Y(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?Z(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=yn;wn(this);const c=Q(s,o.bind(r),n);return a?wn(a):bn(),c}function Z(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ee(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ee(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ee(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ee(e,t)}));else if((0,i.PO)(e))for(const n in e)ee(e[n],t);return e}function te(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Se((()=>{e.isMounted=!0})),Ce((()=>{e.isUnmounting=!0})),e}const ne=[Function,Array],re={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ne,onEnter:ne,onAfterEnter:ne,onEnterCancelled:ne,onBeforeLeave:ne,onLeave:ne,onAfterLeave:ne,onLeaveCancelled:ne,onBeforeAppear:ne,onAppear:ne,onAfterAppear:ne,onAppearCancelled:ne},setup(e,{slots:t}){const n=vn(),i=te();let s;return()=>{const o=t.default&&le(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Ft){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ae(a);const l=ce(a);if(!l)return ae(a);const h=oe(l,c,i,n);ue(l,h);const d=n.subTree,f=d&&ce(d);let p=!1;const{getTransitionKey:g}=l.type;if(g){const e=g();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Ft&&(!Xt(l,f)||p)){const e=oe(f,c,i,n);if(ue(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},ae(a);"in-out"===u&&l.type!==Ft&&(e.delayLeave=(e,t,n)=>{const r=se(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ie=re;function se(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function oe(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=t,_=String(e.key),E=se(n,e),T=(e,t)=>{e&&o(e,r,9,t)},S=(e,t)=>{const n=t[1];T(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},I={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t._leaveCb&&t._leaveCb(!0);const i=E[_];i&&Xt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=w||h,i=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,T(t?i:r,[e]),I.delayedLeave&&I.delayedLeave(),e._enterCb=void 0)};t?S(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();T(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),T(n?m:g,[t]),t._leaveCb=void 0,E[i]===e&&delete E[i])};E[i]=e,p?S(p,[t,o]):o()},clone(e){return oe(e,t,n,r)}};return I}function ae(e){if(fe(e))return e=sn(e),e.children=null,e}function ce(e){return fe(e)?e.children?e.children[0]:void 0:e}function ue(e,t){6&e.shapeFlag&&e.component?ue(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function le(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Mt?(128&o.patchFlag&&i++,r=r.concat(le(o.children,t,a))):(t||o.type!==Ft)&&r.push(null!=a?sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function he(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const de=e=>!!e.type.__asyncLoader;const fe=e=>e.type.__isKeepAlive;RegExp,RegExp;function pe(e,t){return(0,i.kJ)(e)?e.some((e=>pe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function ge(e,t){ye(e,"a",t)}function me(e,t){ye(e,"da",t)}function ye(e,t,n=yn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(_e(t,r,n),n){let e=n.parent;while(e&&e.parent)fe(e.parent.vnode)&&ve(r,t,n,e),e=e.parent}}function ve(e,t,n,r){const s=_e(t,e,r,!0);Ae((()=>{(0,i.Od)(r[t],s)}),n)}function we(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function be(e){return 128&e.shapeFlag?e.ssContent:e}function _e(e,t,n=yn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),wn(n);const s=o(t,n,e,i);return bn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ee=e=>(t,n=yn)=>(!Sn||"sp"===e)&&_e(e,((...e)=>t(...e)),n),Te=Ee("bm"),Se=Ee("m"),Ie=Ee("bu"),ke=Ee("u"),Ce=Ee("bum"),Ae=Ee("um"),Re=Ee("sp"),Oe=Ee("rtg"),xe=Ee("rtc");function De(e,t=yn){_e("ec",e,t)}function Ne(e,t){const n=D;if(null===n)return e;const r=xn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ee(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Le(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const Pe="components";function Me(e,t){return je(Pe,e,!0,t)||e}const Ue=Symbol();function Fe(e){return(0,i.HD)(e)?je(Pe,e,!1)||e:e||Ue}function je(e,t,n=!0,r=!1){const s=D||yn;if(s){const n=s.type;if(e===Pe){const e=Dn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Ve(s[e]||n[e],t)||Ve(s.appContext[e],t);return!o&&r?n:o}}function Ve(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function Be(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}function qe(e,t){for(let n=0;n<t.length;n++){const r=t[n];if((0,i.kJ)(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{const t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e}function $e(e,t,n={},r,i){if(D.isCE||D.parent&&de(D.parent)&&D.parent.isCE)return tn("slot","default"===t?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),qt();const o=s&&ze(s(n)),a=Gt(Mt,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function ze(e){return e.some((e=>!Jt(e)||e.type!==Ft&&!(e.type===Mt&&!ze(e.children))))?e:null}const He=e=>e?_n(e)?xn(e)||e.proxy:He(e.parent):null,We=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>He(e.parent),$root:e=>He(e.root),$emit:e=>e.emit,$options:e=>Ze(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>Y.bind(e)}),Ke={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];Ge&&(c[t]=0)}}const d=We[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(We,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ge=!0;function Je(e){const t=Ze(e),n=e.proxy,s=e.ctx;Ge=!1,t.beforeCreate&&Qe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:I,errorCaptured:k,serverPrefetch:C,expose:A,inheritAttrs:R,components:O,directives:x,filters:D}=t,N=null;if(h&&Xe(h,s,N,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ge=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Ln({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Ye(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{K(t,e[t])}))}function L(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Qe(d,e,"c"),L(Te,f),L(Se,p),L(Ie,g),L(ke,m),L(ge,y),L(me,v),L(De,k),L(xe,S),L(Oe,I),L(Ce,b),L(Ae,E),L(Re,C),(0,i.kJ)(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=R&&(e.inheritAttrs=R),O&&(e.components=O),x&&(e.directives=x)}function Xe(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=it(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?G(n.from||o,n.default,!0):G(n.from||o):G(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Qe(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ye(e,t,n,r){const s=r.includes(".")?Z(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&X(s,n)}else if((0,i.mf)(e))X(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ye(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&X(s,r,e)}else 0}function Ze(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>et(u,e,a,!0))),et(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function et(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&et(e,s,n,!0),i&&i.forEach((t=>et(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=tt[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const tt={data:nt,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:ot,directives:ot,watch:at,provide:nt,inject:rt};function nt(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function rt(e,t){return ot(it(e),it(t))}function it(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function st(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function at(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=st(e[r],t[r]);return n}function ct(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Qt,1),e.propsDefaults=Object.create(null),lt(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ut(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;lt(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ht(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(x(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=ht(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function lt(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:x(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ht(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function ht(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(wn(s),r=i[n]=e.call(null,t),bn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function dt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=dt(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);ft(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(ft(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=mt(Boolean,r.type),n=mt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function ft(e){return"$"!==e[0]}function pt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function gt(e,t){return pt(e)===pt(t)}function mt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>gt(t,e))):(0,i.mf)(t)&&gt(t,e)?0:-1}const yt=e=>"_"===e[0]||"$stable"===e,vt=e=>(0,i.kJ)(e)?e.map(un):[un(e)],wt=(e,t,n)=>{if(t._n)return t;const r=F(((...e)=>vt(t(...e))),n);return r._c=!1,r},bt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(yt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=wt(s,n,r);else if(null!=n){0;const e=vt(n);t[s]=()=>e}}},_t=(e,t)=>{const n=vt(t);e.slots.default=()=>n},Et=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):bt(t,e.slots={})}else e.slots={},t&&_t(e,t);(0,i.Nj)(e.slots,Qt,1)},Tt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,bt(t,s)),a=t}else t&&(_t(e,t),a={default:1});if(o)for(const i in s)yt(i)||i in a||delete s[i]};function St(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let It=0;function kt(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=St(),o=new Set;let a=!1;const c=s.app={_uid:It++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Mn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=tn(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,xn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function Ct(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Ct(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(de(o)&&!a)return;const c=4&o.shapeFlag?xn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Rt(r,n)):r()}else 0}}function At(){}const Rt=W;function Ot(e){return xt(e)}function xt(e,t){At();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.dG,insertStaticContent:m}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Xt(e,t)&&(r=Y(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Ut:v(e,t,n,r);break;case Ft:w(e,t,n,r);break;case jt:null==e&&_(t,n,r,o);break;case Mt:L(e,t,n,r,i,s,o,a,c);break;default:1&h?C(e,t,n,r,i,s,o,a,c):6&h?P(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,ee)}null!=l&&i&&Ct(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,c):x(e,t,i,s,o,a,c)},A=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:g,props:m,shapeFlag:y,transition:v,dirs:w}=e;if(f=e.el=c(e.type,u,m&&m.is,m),8&y?d(f,e.children):16&y&&O(e.children,f,null,r,o,u&&"foreignObject"!==g,l,h),w&&Le(e,null,r,"created"),m){for(const t in m)"value"===t||(0,i.Gg)(t)||a(f,t,null,m[t],u,e.children,r,o,Q);"value"in m&&a(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&fn(p,r,e)}R(f,e,e.scopeId,l,r),w&&Le(e,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(f),s(f,t,n),((p=m&&m.onVnodeMounted)||b||w)&&Rt((()=>{p&&fn(p,r,e),b&&v.enter(f),w&&Le(e,null,r,"mounted")}),o)},R=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?ln(e[u]):un(e[u]);y(null,c,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,g=t.props||i.kT;let m;n&&Dt(n,!1),(m=g.onVnodeBeforeUpdate)&&fn(m,n,t,e),f&&Le(t,e,n,"beforeUpdate"),n&&Dt(n,!0);const y=s&&"foreignObject"!==t.type;if(h?D(e.dynamicChildren,h,u,n,r,y,o):c||B(e,t,u,null,n,r,y,o,!1),l>0){if(16&l)N(u,t,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,Q)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||N(u,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&Rt((()=>{m&&fn(m,n,t,e),f&&Le(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Mt||!Xt(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},N=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,Q);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,Q)}"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),O(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Nt(e,t,!0)):B(e,t,n,d,i,o,a,c,l)},P=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,s,o,c):U(e,t,c)},M=(e,t,n,r,i,s,o)=>{const a=e.component=mn(e,r,i);if(fe(e)&&(a.ctx.renderer=ee),In(a),a.asyncDep){if(i&&i.registerDep(a,F),!e.el){const e=a.subTree=tn(Ft);w(null,e,t,n)}}else F(a,e,t,n,i,s,o)},U=(e,t,n)=>{const r=t.component=e.component;if(q(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,E(r.update),r.update()}else t.el=e.el,r.vnode=t},F=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,Dt(e,!1),n?(n.el=l.el,V(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&fn(t,u,n,l),Dt(e,!0);const d=j(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),Y(p),e,o,a),n.el=d.el,null===h&&z(e,d.el),s&&Rt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Rt((()=>fn(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=de(t);if(Dt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&fn(r,d,t),Dt(e,!0),c&&ne){const n=()=>{e.subTree=j(e),ne(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=j(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&Rt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Rt((()=>fn(r,d,e)),o)}(256&t.shapeFlag||d&&de(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Rt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>b(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,Dt(e,!0),h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ut(e,t.props,i,n),Tt(e,t.children,n),(0,r.Jd)(),S(),(0,r.lk)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void H(u,h,n,r,i,s,o,a,c);if(256&f)return void $(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&Q(u,i,s),h!==u&&d(n,h)):16&l?16&p?H(u,h,n,r,i,s,o,a,c):Q(u,i,s,!0):(8&l&&d(n,""),16&p&&O(h,n,r,i,s,o,a,c))},$=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?ln(t[f]):un(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?Q(e,s,o,!0,!1,d):O(t,n,r,s,o,a,c,u,d)},H=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?ln(t[l]):un(t[l]);if(!Xt(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?ln(t[f]):un(t[f]);if(!Xt(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?ln(t[l]):un(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)K(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?ln(t[l]):un(t[l]);null!=e.key&&m.set(e.key,l)}let v,w=0;const b=f-g+1;let _=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=b){K(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===T[v-g]&&Xt(r,t[v])){i=v;break}void 0===i?K(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:_=!0,y(r,t[i],n,null,s,o,a,c,u),w++)}const S=_?Lt(T):i.Z6;for(v=S.length-1,l=b-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):_&&(v<0||l!==S[v]?W(i,n,d,2):v--)}}},W=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void W(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Mt){s(o,t,n);for(let e=0;e<u.length;e++)W(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===jt)return void T(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Rt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&Ct(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!de(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&fn(g,t,e),6&l)X(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Le(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(s!==Mt||h>0&&64&h)?Q(u,t,n,!1,!0):(s===Mt&&384&h||!i&&16&l)&&Q(c,t,n),r&&G(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Rt((()=>{g&&fn(g,t,e),f&&Le(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Mt)return void J(n,r);if(t===jt)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},J=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,K(a,e,t,n)),c&&Rt(c,t),Rt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),S(),I(),t._vnode=e},ee={p:y,um:K,m:W,r:G,mt:M,mc:O,pc:B,pbc:D,n:Y,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:kt(Z,te)}}function Dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Nt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=ln(s[i]),t.el=e.el),n||Nt(e,t))}}function Lt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Pt=e=>e.__isTeleport;const Mt=Symbol(void 0),Ut=Symbol(void 0),Ft=Symbol(void 0),jt=Symbol(void 0),Vt=[];let Bt=null;function qt(e=!1){Vt.push(Bt=e?null:[])}function $t(){Vt.pop(),Bt=Vt[Vt.length-1]||null}let zt=1;function Ht(e){zt+=e}function Wt(e){return e.dynamicChildren=zt>0?Bt||i.Z6:null,$t(),zt>0&&Bt&&Bt.push(e),e}function Kt(e,t,n,r,i,s){return Wt(en(e,t,n,r,i,s,!0))}function Gt(e,t,n,r,i){return Wt(tn(e,t,n,r,i,!0))}function Jt(e){return!!e&&!0===e.__v_isVNode}function Xt(e,t){return e.type===t.type&&e.key===t.key}const Qt="__vInternal",Yt=({key:e})=>null!=e?e:null,Zt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:D,r:e,k:t,f:!!n}:e:null;function en(e,t=null,n=null,r=0,s=null,o=(e===Mt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yt(t),ref:t&&Zt(t),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(hn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),zt>0&&!a&&Bt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Bt.push(u),u}const tn=nn;function nn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ue||(e=Ft),Jt(e)){const r=sn(e,t,!0);return n&&hn(r,n),zt>0&&!a&&Bt&&(6&r.shapeFlag?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag|=-2,r}if(Nn(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:H(e)?128:Pt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return en(e,t,n,s,o,c,a,!0)}function rn(e){return e?(0,r.X3)(e)||Qt in e?(0,i.l7)({},e):e:null}function sn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?dn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Yt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Zt(t)):[s,Zt(t)]:Zt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor};return u}function on(e=" ",t=0){return tn(Ut,null,e,t)}function an(e,t){const n=tn(jt,null,e);return n.staticCount=t,n}function cn(e="",t=!1){return t?(qt(),Gt(Ft,null,e)):tn(Ft,null,e)}function un(e){return null==e||"boolean"===typeof e?tn(Ft):(0,i.kJ)(e)?tn(Mt,null,e.slice()):"object"===typeof e?ln(e):tn(Ut,null,String(e))}function ln(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:sn(e)}function hn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),hn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Qt in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.mf)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function dn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function fn(e,t,n,r=null){o(e,t,7,[n,r])}const pn=St();let gn=0;function mn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||pn,a={uid:gn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dt(s,o),emitsOptions:O(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=R.bind(null,a),e.ce&&e.ce(a),a}let yn=null;const vn=()=>yn||D,wn=e=>{yn=e,e.scope.on()},bn=()=>{yn&&yn.scope.off(),yn=null};function _n(e){return 4&e.vnode.shapeFlag}let En,Tn,Sn=!1;function In(e,t=!1){Sn=t;const{props:n,children:r}=e.vnode,i=_n(e);ct(e,n,i,t),Et(e,r);const s=i?kn(e,t):void 0;return Sn=!1,s}function kn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Ke));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?On(e):null;wn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),bn(),(0,i.tI)(c)){if(c.then(bn,bn),t)return c.then((n=>{Cn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else Cn(e,c,t)}else An(e,t)}function Cn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),An(e,n)}function An(e,t,n){const s=e.type;if(!e.render){if(!t&&En&&!s.render){const t=s.template||Ze(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=En(t,c)}}e.render=s.render||i.dG,Tn&&Tn(e)}wn(e),(0,r.Jd)(),Je(e),(0,r.lk)(),bn()}function Rn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function On(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Rn(e))},slots:e.slots,emit:e.emit,expose:t}}function xn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in We?We[n](e):void 0}}))}function Dn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Nn(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Ln=(e,t)=>(0,r.Fl)(e,t,Sn);function Pn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Jt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Jt(n)&&(n=[n]),tn(e,t,n))}Symbol("");const Mn="3.2.41"},9242:function(e,t,n){"use strict";n.d(t,{D2:function(){return ae},F8:function(){return ce},bM:function(){return ee},iM:function(){return se},nr:function(){return Z},ri:function(){return fe},uT:function(){return L}});n(7658);var r=n(7139),i=n(3396);n(4870);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${e}</svg>`:e;const i=a.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function l(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function g(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const m="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(m,t.slice(6,t.length)):e.setAttributeNS(m,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function v(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function w(e,t,n,r){e.addEventListener(t,n,r)}function b(e,t,n,r){e.removeEventListener(t,n,r)}function _(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=T(t);if(r){const o=s[t]=C(r,i);w(e,n,o,a)}else o&&(b(e,n,o,a),s[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function T(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let S=0;const I=Promise.resolve(),k=()=>S||(I.then((()=>S=0)),S=Date.now());function C(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,O=(e,t,n,i,s=!1,o,a,c,h)=>{"class"===t?u(e,i,s):"style"===t?l(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||_(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):x(e,t,i,s))?v(e,t,i,o,a,c,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function x(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",N="animation",L=(e,{slots:t})=>(0,i.h)(i.P$,F(e),t);L.displayName="Transition";const P={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=(L.props=(0,r.l7)({},i.P$.props,P),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),U=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function F(e){const t={};for(const r in e)r in P||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=j(s),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:E,onBeforeAppear:T=v,onAppear:S=w,onAppearCancelled:I=b}=t,k=(e,t,n)=>{q(e,t?h:c),q(e,t?l:a),n&&n()},C=(e,t)=>{e._isLeaving=!1,q(e,d),q(e,p),q(e,f),t&&t()},A=e=>(t,n)=>{const r=e?S:w,s=()=>k(t,e,n);M(r,[t,s]),$((()=>{q(t,e?u:o),B(t,e?h:c),U(r)||H(t,i,m,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){M(v,[e]),B(e,o),B(e,a)},onBeforeAppear(e){M(T,[e]),B(e,u),B(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);B(e,d),J(),B(e,f),$((()=>{e._isLeaving&&(q(e,d),B(e,p),U(_)||H(e,i,y,n))})),M(_,[e,n])},onEnterCancelled(e){k(e,!1),M(b,[e])},onAppearCancelled(e){k(e,!0),M(I,[e])},onLeaveCancelled(e){C(e),M(E,[e])}})}function j(e){if(null==e)return null;if((0,r.Kn)(e))return[V(e.enter),V(e.leave)];{const t=V(e);return[t,t]}}function V(e){const t=(0,r.He)(e);return t}function B(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function $(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let z=0;function H(e,t,n,r){const i=e._endId=++z,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=W(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function W(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(D+"Delay"),s=r(D+"Duration"),o=K(i,s),a=r(N+"Delay"),c=r(N+"Duration"),u=K(a,c);let l=null,h=0,d=0;t===D?o>0&&(l=D,h=o,d=s.length):t===N?u>0&&(l=N,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?D:N:null,d=l?l===D?s.length:c.length:0);const f=l===D&&/\b(transform|all)(,|$)/.test(n[D+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function K(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>G(t)+G(e[n]))))}function G(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}new WeakMap,new WeakMap;const X=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function Q(e){e.target.composing=!0}function Y(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Z={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=X(s);const o=i||s.props&&"number"===s.props.type;w(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=(0,r.He)(i)),e._assign(i)})),n&&w(e,"change",(()=>{e.value=e.value.trim()})),t||(w(e,"compositionstart",Q),w(e,"compositionend",Y),w(e,"change",Y))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=X(o),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ee={deep:!0,created(e,{value:t,modifiers:{number:n}},i){const s=(0,r.DM)(t);w(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,r.He)(ne(e)):ne(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=X(i)},mounted(e,{value:t}){te(e,t)},beforeUpdate(e,t,n){e._assign=X(n)},updated(e,{value:t}){te(e,t)}};function te(e,t){const n=e.multiple;if(!n||(0,r.kJ)(t)||(0,r.DM)(t)){for(let i=0,s=e.options.length;i<s;i++){const s=e.options[i],o=ne(s);if(n)(0,r.kJ)(t)?s.selected=(0,r.hq)(t,o)>-1:s.selected=t.has(o);else if((0,r.WV)(ne(s),t))return void(e.selectedIndex!==i&&(e.selectedIndex=i))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}function ne(e){return"_value"in e?e._value:e.value}const re=["ctrl","shift","alt","meta"],ie={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>re.some((n=>e[`${n}Key`]&&!t.includes(n)))},se=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=ie[t[e]];if(r&&r(n,t))return}return e(n,...r)},oe={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ae=(e,t)=>n=>{if(!("key"in n))return;const i=(0,r.rs)(n.key);return t.some((e=>e===i||oe[e]===i))?e(n):void 0},ce={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ue(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),ue(e,!0),r.enter(e)):r.leave(e,(()=>{ue(e,!1)})):ue(e,t))},beforeUnmount(e,{value:t}){ue(e,t)}};function ue(e,t){e.style.display=t?e._vod:"none"}const le=(0,r.l7)({patchProp:O},c);let he;function de(){return he||(he=(0,i.Us)(le))}const fe=(...e)=>{const t=de().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=pe(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function pe(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return f},DM:function(){return D},E9:function(){return re},F7:function(){return S},Gg:function(){return z},HD:function(){return P},He:function(){return te},Kn:function(){return U},NO:function(){return E},Nj:function(){return ee},Od:function(){return C},PO:function(){return q},Pq:function(){return a},RI:function(){return R},S0:function(){return $},W7:function(){return B},WV:function(){return g},Z6:function(){return b},_A:function(){return K},_N:function(){return x},aU:function(){return Y},dG:function(){return _},e1:function(){return s},fY:function(){return r},hR:function(){return Q},hq:function(){return m},ir:function(){return Z},j5:function(){return u},kC:function(){return X},kJ:function(){return O},kT:function(){return w},l7:function(){return k},mf:function(){return L},rs:function(){return J},tI:function(){return F},tR:function(){return I},yA:function(){return c},yk:function(){return M},zw:function(){return y}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=P(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return P(e)||U(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(P(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=N(e),r=N(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=M(e),r=M(t),n||r)return e===t;if(n=O(e),r=O(t),n||r)return!(!n||!r)&&p(e,t);if(n=U(e),r=U(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function m(e,t){return e.findIndex((e=>g(e,t)))}const y=e=>P(e)?e:null==e?"":O(e)||U(e)&&(e.toString===j||!L(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):x(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||O(t)||q(t)?t:String(t),w={},b=[],_=()=>{},E=()=>!1,T=/^on[^a-z]/,S=e=>T.test(e),I=e=>e.startsWith("onUpdate:"),k=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,R=(e,t)=>A.call(e,t),O=Array.isArray,x=e=>"[object Map]"===V(e),D=e=>"[object Set]"===V(e),N=e=>"[object Date]"===V(e),L=e=>"function"===typeof e,P=e=>"string"===typeof e,M=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,F=e=>U(e)&&L(e.then)&&L(e.catch),j=Object.prototype.toString,V=e=>j.call(e),B=e=>V(e).slice(8,-1),q=e=>"[object Object]"===V(e),$=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,z=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},W=/-(\w)/g,K=H((e=>e.replace(W,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,J=H((e=>e.replace(G,"-$1").toLowerCase())),X=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=H((e=>e?`on${X(e)}`:"")),Y=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},4275:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="9.13.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},5155:function(e,t,n){"use strict";n.d(t,{Xb:function(){return yt},v0:function(){return Sr},LS:function(){return mt},e5:function(){return vt},w7:function(){return _t}});n(7658);var r=n(223),i=n(7077),s=n(5168);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function y(e,t,...n){if(!e)throw m(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function w(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function _(e){w(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function T(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function P(e,t,n,i,s={}){return M(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),x.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},D),t);try{const t=new j(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const s=await P(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?O(e.config,i):`${e.config.apiScheme}://${i}`}class j{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return P(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return P(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=W(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:$(H(s.auth_time)),issuedAtTime:$(H(s.iat)),expirationTime:$(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function W(e){var t;const[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(i);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}function K(e){const t=W(e);return y(t,"internal-error"),y("undefined"!==typeof t.exp,"internal-error"),y("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,q(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=(0,r.m9)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=F(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",x.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y("undefined"!==typeof e.idToken,"internal-error"),y("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):K(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return y(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(y("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){y("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return y(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:T}=t;y(w&&T,e,"internal-error");const S=re.fromJSON(this.name,T);y("string"===typeof w,e,"internal-error"),ie(l,e.name),ie(h,e.name),y("boolean"===typeof b,e,"internal-error"),y("boolean"===typeof _,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(g,e.name),ie(m,e.name),ie(v,e.name);const I=new se({uid:w,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||_(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=se._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ye(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function ge(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ye(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function we(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ve(e)||ge(e)||ye(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t=[]){let n;switch(e){case"Browser":n=le((0,r.z$)());break;case"Worker":n=`${le((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ce(this),this.idTokenSubscription=new Ce(this),this.beforeStateQueue=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Y(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&y(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;y(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Te(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function ke(e){return(0,r.m9)(e)}class Ce{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ae(e,t,n){const r=ke(e);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Re(t),{host:o,port:a}=Oe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||De()}function Re(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Oe(e){const t=Re(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:xe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:xe(t)}}}function xe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function De(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return P(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pe(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}async function Me(e,t){return P(e,"POST","/v1/accounts:sendOobCode",L(e,t))}async function Ue(e,t){return Me(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fe(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function je(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Ne{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ve(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ve(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Pe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Fe(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Le(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="http://localhost";class $e extends Ne{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $e(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new $e(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Be(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Be(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Be(e,t)}buildRequest(){const e={requestUri:qe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t){return P(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function He(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function We(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Ke={["USER_NOT_FOUND"]:"user-not-found"};async function Ge(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Ke)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ne{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Je({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Je({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return He(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return We(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ge(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Je({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qe(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class Ye{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Xe(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Qe(e);try{return new Ye(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(){this.providerId=Ze.PROVIDER_ID}static credential(e,t){return Ve._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ye.parseLink(t);return y(n,"argument-error"),Ve._fromEmailAndCode(e,n.code,n.tenantId)}}Ze.PROVIDER_ID="password",Ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends et{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends tt{constructor(){super("facebook.com")}static credential(e){return $e._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.FACEBOOK_SIGN_IN_METHOD="facebook.com",nt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends tt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $e._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com",rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class it extends tt{constructor(){super("github.com")}static credential(e){return $e._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch(t){return null}}}it.GITHUB_SIGN_IN_METHOD="github.com",it.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st extends tt{constructor(){super("twitter.com")}static credential(e,t){return $e._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return st.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ot(e,t){return U(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st.TWITTER_SIGN_IN_METHOD="twitter.com",st.PROVIDER_ID="twitter.com";class at{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=ct(n),o=new at({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ct(n);return new at({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ct(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ut.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ut(e,t,n,r)}}function lt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ut._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return at._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dt(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await G(e,lt(i,s,t,e),n);y(r.idToken,i,"internal-error");const o=W(r.idToken);y(o,i,"internal-error");const{sub:a}=o;return y(e.uid===a,i,"user-mismatch"),at._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(e,t,n=!1){const r="signIn",i=await lt(e,r,t),s=await at._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function pt(e,t){return ft(ke(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gt(e,t,n){var r;y((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),y("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(y(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(y(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(e,t,n){const i=(0,r.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&gt(i,s,n),await Ue(i,s)}async function yt(e,t,n){const r=ke(e),i=await ot(r,{returnSecureToken:!0,email:t,password:n}),s=await at._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function vt(e,t,n){return pt((0,r.m9)(e),Ze.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function bt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function _t(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function Tt(e,t){return P(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const St="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(St,"1"),this.storage.removeItem(St),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){const e=(0,r.z$)();return de(e)||ve(e)}const Ct=1e3,At=10;class Rt extends It{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kt()&&Ee(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,At):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ct)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rt.type="LOCAL";const Ot=Rt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends It{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xt.type="SESSION";const Dt=xt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Lt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Nt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.receivers=[];class Mt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Pt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function Ft(e){Ut().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return"undefined"!==typeof Ut()["WorkerGlobalScope"]&&"function"===typeof Ut()["importScripts"]}async function Vt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Bt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function qt(){return jt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="firebaseLocalStorageDb",zt=1,Ht="firebaseLocalStorage",Wt="fbase_key";class Kt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Gt(e,t){return e.transaction([Ht],t?"readwrite":"readonly").objectStore(Ht)}function Jt(){const e=indexedDB.deleteDatabase($t);return new Kt(e).toPromise()}function Xt(){const e=indexedDB.open($t,zt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ht,{keyPath:Wt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ht)?t(n):(n.close(),await Jt(),t(await Xt()))}))}))}async function Qt(e,t,n){const r=Gt(e,!0).put({[Wt]:t,value:n});return new Kt(r).toPromise()}async function Yt(e,t){const n=Gt(e,!1).get(t),r=await new Kt(n).toPromise();return void 0===r?null:r.value}function Zt(e,t){const n=Gt(e,!0).delete(t);return new Kt(n).toPromise()}const en=800,tn=3;class nn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>tn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lt._getInstance(qt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vt(),!this.activeServiceWorker)return;this.sender=new Mt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Bt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xt();return await Qt(e,St,"1"),await Zt(e,St),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Qt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Yt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Zt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gt(e,!1).getAll();return new Kt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),en)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}nn.type="LOCAL";const rn=nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function on(e,t){return P(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function an(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function cn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",an().appendChild(r)}))}function un(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
un("rcb"),new R(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="recaptcha";async function hn(e,t,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,e,"argument-error"),y(n.type===ln,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){y("enroll"===t.type,e,"internal-error");const n=await Et(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,e,"missing-multi-factor-info");const o=await sn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ze(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{constructor(e){this.providerId=dn.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return hn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Je._fromVerification(e,t)}static credentialFromResult(e){const t=e;return dn.credentialFromTaggedObject(t)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Je._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e,t){return t?_(t):(y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.PROVIDER_ID="phone",dn.PHONE_SIGN_IN_METHOD="phone";class pn extends Ne{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Be(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Be(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Be(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gn(e){return ft(e.auth,new pn(e),e.bypassAuthState)}function mn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),dt(n,new pn(e),e.bypassAuthState)}async function yn(e){const{auth:t,user:n}=e;return y(n,t,"internal-error"),ht(n,new pn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gn;case"linkViaPopup":case"linkViaRedirect":return yn;case"reauthViaPopup":case"reauthViaRedirect":return mn;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new R(2e3,1e4);class bn extends vn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=Pt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,wn.get())};e()}}bn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _n="pendingRedirect",En=new Map;class Tn extends vn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=En.get(this.auth._key());if(!e){try{const t=await Sn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}En.set(this.auth._key(),e)}return this.bypassAuthState||En.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Sn(e,t){const n=Cn(t),r=kn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function In(e,t){En.set(e._key(),t)}function kn(e){return _(e._redirectPersistence)}function Cn(e){return ce(_n,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(e,t,n=!1){const r=ke(e),i=fn(r,t),s=new Tn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rn=6e5;class On{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Nn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Dn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rn&&this.cachedEventUids.clear(),this.cachedEventUids.has(xn(e))}saveEventToCache(e){this.cachedEventUids.add(xn(e)),this.lastProcessedEventTime=Date.now()}}function xn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Dn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Nn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(e,t={}){return P(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mn=/^https?/;async function Un(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ln(e);for(const r of t)try{if(Fn(r))return}catch(n){}f(e,"unauthorized-domain")}function Fn(e){const t=S(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Mn.test(n))return!1;if(Pn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new R(3e4,6e4);function Vn(){const e=Ut().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Bn(e){return new Promise(((t,n)=>{var r,i,s;function o(){Vn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vn(),n(p(e,"network-request-failed"))},timeout:jn.get()})}if(null===(i=null===(r=Ut().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ut().gapi)||void 0===s?void 0:s.load)){const t=un("iframefcb");return Ut()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},cn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw qn=null,e}))}let qn=null;function $n(e){return qn=qn||Bn(e),qn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new R(5e3,15e3),Hn="__/auth/iframe",Wn="emulator/auth/iframe",Kn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jn(e){const t=e.config;y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?O(t,Wn):`https://${e.config.authDomain}/${Hn}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Gn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Xn(e){const t=await $n(e),n=Ut().gapi;return y(n,e,"internal-error"),t.open({where:document.body,url:Jn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=Ut().setTimeout((()=>{r(i)}),zn.get());function o(){Ut().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yn=500,Zn=600,er="_blank",tr="http://localhost";class nr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function rr(e,t,n,i=Yn,s=Zn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Qn),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=fe(l)?er:n),he(l)&&(t=t||tr,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(we(l)&&"_self"!==c)return ir(t||"",c),new nr(null);const d=window.open(t||"",c,h);y(d,e,"popup-blocked");try{d.focus()}catch(f){}return new nr(d)}function ir(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="__/auth/handler",or="emulator/auth/handler";function ar(e,t,n,s,o,a){y(e.config.authDomain,e,"auth-domain-config-required"),y(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof et){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof tt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${cr(e)}?${(0,r.xO)(u).slice(1)}`}function cr({config:e}){return e.emulator?O(e,or):`https://${e.authDomain}/${sr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="webStorageSupport";class lr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dt,this._completeRedirectFn=An,this._overrideRedirectResult=In}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=ar(e,t,n,S(),r);return rr(e,s,Pt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Ft(ar(e,t,n,S(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Xn(e),n=new On(e);return t.register("authEvent",(t=>{y(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(ur,{type:ur},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[ur];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Un(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||de()||ve()}}const hr=lr;class dr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class fr extends dr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fr(e)}_finalizeEnroll(e,t,n){return Tt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return on(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class pr{constructor(){}static assertion(e){return fr._fromCredential(e)}}pr.FACTOR_ID="phone";var gr="@firebase/auth",mr="0.20.11";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{y(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),y(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Te(e)},a=new Ie(t,r,i);return T(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=ke(e.getProvider("auth").getImmediate());return(e=>new yr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(gr,mr,vr(e)),(0,i.KN)(gr,mr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=300,_r=(0,r.Pz)("authIdTokenMaxAge")||br;let Er=null;const Tr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_r)return;const i=null===n||void 0===n?void 0:n.token;Er!==i&&(Er=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Sr(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=E(e,{popupRedirectResolver:hr,persistence:[rn,Ot,Dt]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=Tr(s);bt(n,e,(()=>e(n.currentUser))),wt(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Ae(n,`http://${o}`),n}wr("Browser")},6035:function(e,t,n){"use strict";n.d(t,{ET:function(){return gh},hJ:function(){return ol},oe:function(){return ph},JU:function(){return al},PL:function(){return dh},ad:function(){return wl},IO:function(){return Yl},r7:function(){return fh},ar:function(){return eh}});n(3408),n(4590),n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function T(){this.s=this.s,this.o=this.o}var S=0;T.prototype.s=!1,T.prototype.na=function(){this.s||(this.s=!0,this.M(),0==S)||g(this)},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function k(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}var x=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return e<t?-1:e>t?1:0}function N(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function L(e){return-1!=N().indexOf(e)}function P(e){return P[" "](e),e}function M(e){var t=J;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}P[" "]=d;var U,F=L("Opera"),j=L("Trident")||L("MSIE"),V=L("Edge"),B=V||j,q=L("Gecko")&&!(-1!=N().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),$=-1!=N().toLowerCase().indexOf("webkit")&&!L("Edge");function z(){var e=h.document;return e?e.documentMode:void 0}e:{var H="",W=function(){var e=N();return q?/rv:([^\);]+)(\)|;)/.exec(e):V?/Edge\/([\d\.]+)/.exec(e):j?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):$?/WebKit\/(\S+)/.exec(e):F?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(W&&(H=W?W[1]:""),j){var K=z();if(null!=K&&K>parseFloat(H)){U=String(K);break e}}U=H}var G,J={};function X(){return M((function(){let e=0;const t=x(String(U)).split("."),n=x("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&j){var Q=z();G=Q||(parseInt(U,10)||void 0)}else G=void 0;var Y=G;function Z(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(q){e:{try{P(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ee[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Z.X.h.call(this)}}E(Z,A);var ee={2:"touch",3:"pen",4:"mouse"};Z.prototype.h=function(){Z.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ne=0;function re(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++ne,this.ba=this.ea=!1}function ie(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function se(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oe(e){const t={};for(const n in e)t[n]=e[n];return t}const ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ce(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ae.length;t++)n=ae[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ue(e){this.src=e,this.g={},this.h=0}function le(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ie(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function he(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}ue.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=he(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var de="closure_lm_"+(1e6*Math.random()|0),fe={};function pe(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);return null}return n=Se(n),e&&e[te]?e.N(t,n,p(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[de]=a=new ue(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=me(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(be(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function me(){function e(n){return t.call(e.src,e.listener,n)}const t=_e;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=Se(n),e&&e[te]?e.O(t,n,p(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function ve(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ve(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Se(n),e&&e[te]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=he(s,n,r,i),-1<n&&(ie(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=he(t,n,r,i)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[te])le(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(be(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(le(n,e),0==n.h&&(n.src=null,t[de]=null)):ie(e)}}}function be(e){return e in fe?fe[e]:fe[e]="on"+e}function _e(e,t){if(e.ba)e=!0;else{t=new Z(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&we(e),e=n.call(r,t)}return e}function Ee(e){return e=e[de],e instanceof ue?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function Ie(){T.call(this),this.i=new ue(this),this.P=this,this.I=null}function ke(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),ce(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ce(o,r,!0,t)&&i}if(o=t.g=e,i=Ce(o,r,!0,t)&&i,i=Ce(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ce(o,r,!1,t)&&i}function Ce(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&le(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}E(Ie,T),Ie.prototype[te]=!0,Ie.prototype.removeEventListener=function(e,t,n,r){ve(this,e,t,n,r)},Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ie(n[r]);delete t.g[e],t.h--}}this.I=null},Ie.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ie.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ae=h.JSON.stringify;function Re(){var e=Fe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Oe{constructor(){this.h=this.g=null}add(e,t){const n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var xe,De=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ne),(e=>e.reset()));class Ne{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Le(e){h.setTimeout((()=>{throw e}),0)}function Pe(e,t){xe||Me(),Ue||(xe(),Ue=!0),Fe.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);xe=function(){e.then(je)}}var Ue=!1,Fe=new Oe;function je(){for(var e;e=Re();){try{e.h.call(e.g)}catch(n){Le(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ue=!1}function Ve(e,t){Ie.call(this),this.h=e||1,this.g=t||h,this.j=b(this.lb,this),this.l=Date.now()}function Be(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function qe(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function $e(e){e.g=qe((()=>{e.g=null,e.i&&(e.i=!1,$e(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(Ve,Ie),r=Ve.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ke(this,"tick"),this.ca&&(Be(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ve.X.M.call(this),Be(this),delete this.g};class ze extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$e(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){T.call(this),this.h=e,this.g={}}E(He,T);var We=[];function Ke(e,t,n,r){Array.isArray(n)||(n&&(We[0]=n.toString()),n=We);for(var i=0;i<n.length;i++){var s=pe(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ge(e){se(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Je(){this.g=!0}function Xe(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Qe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ye(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+et(e,n)+(r?" "+r:"")}))}function Ze(e,t){e.info((function(){return"TIMEOUT: "+t}))}function et(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ae(n)}catch(a){return t}}He.prototype.M=function(){He.X.M.call(this),Ge(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Je.prototype.Aa=function(){this.g=!1},Je.prototype.info=function(){};var tt={},nt=null;function rt(){return nt=nt||new Ie}function it(e){A.call(this,tt.Pa,e)}function st(e){const t=rt();ke(t,new it(t))}function ot(e,t){A.call(this,tt.STAT_EVENT,e),this.stat=t}function at(e){const t=rt();ke(t,new ot(t,e))}function ct(e,t){A.call(this,tt.Qa,e),this.size=t}function ut(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}tt.Pa="serverreachability",E(it,A),tt.STAT_EVENT="statevent",E(ot,A),tt.Qa="timingevent",E(ct,A);var lt={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ht={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function dt(){}function ft(e){return e.h||(e.h=e.i())}function pt(){}dt.prototype.h=null;var gt,mt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){A.call(this,"d")}function vt(){A.call(this,"c")}function wt(){}function bt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new He(this),this.O=Et,e=B?125:void 0,this.T=new Ve(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new _t}function _t(){this.i=null,this.g="",this.h=!1}E(yt,A),E(vt,A),E(wt,dt),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},gt=new wt;var Et=45e3,Tt={},St={};function It(e,t,n){e.K=1,e.v=Kt(qt(t)),e.s=n,e.P=!0,kt(e,null)}function kt(e,t){e.F=Date.now(),Ot(e),e.A=qt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),an(n.i,"t",r),e.C=0,n=e.l.H,e.h=new _t,e.g=hr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ze(b(e.La,e,e.g),e.N)),Ke(e.S,e.g,"readystatechange",e.ib),t=e.H?oe(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),st(),Xe(e.j,e.u,e.A,e.m,e.U,e.s)}function Ct(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function At(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Rt(e,n),r==St){4==t&&(e.o=4,at(14),i=!1),Ye(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,at(15),Ye(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ye(e.j,e.m,r,null),Pt(e,r)}Ct(e)&&r!=St&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,at(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),rr(t),t.K=!0,at(11))):(Ye(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Nt(e))}function Rt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Ot(e){e.V=Date.now()+e.O,xt(e,e.O)}function xt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ut(b(e.gb,e),t)}function Dt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Nt(e){0==e.l.G||e.I||or(e.l,e)}function Lt(e){Dt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Be(e.T),Ge(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Pt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||gn(n.h,e)))if(!e.J&&gn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sr(n),Gn(n)}nr(n),at(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=ut(b(n.cb,n),6e3));if(1>=pn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else cr(n,11)}else if((e.J||n.g==e)&&sr(n),!O(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(mn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Wt(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=lr(r,r.H?r.ka:null,r.V),o.J){yn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Dt(a),Ot(a)),r.g=o}else tr(r);0<n.i.length&&Xn(n)}else"stop"!=u[0]&&"close"!=u[0]||cr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cr(n,7):Kn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}st(4)}catch(u){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ut(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ut(e),r=Mt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=bt.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==Bn(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const l=Bn(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||B||this.g&&(this.h.h||this.g.fa()||qn(this.g)))){this.I||4!=l||7==t||st(8==t||0>=d?3:2),Dt(this);var n=this.g.aa();this.Y=n;t:if(Ct(this)){var r=qn(this.g);e="";var i=r.length,s=4==Bn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Lt(this),Nt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Qe(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,at(12),Lt(this),Nt(this);break e}Ye(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pt(this,n)}this.P?(At(this,l,o),B&&this.i&&3==l&&(Ke(this.S,this.T,"tick",this.hb),this.T.start())):(Ye(this.j,this.m,o,null),Pt(this,o)),4==l&&Lt(this),this.i&&!this.I&&(4==l?or(this.l,this):(this.i=!1,Ot(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,at(12)):(this.o=0,at(13)),Lt(this),Nt(this)}}}catch(l){}},r.hb=function(){if(this.g){var e=Bn(this.g),t=this.g.fa();this.C<t.length&&(Dt(this),At(this,e,t),this.i&&4!=e&&Ot(this))}},r.cancel=function(){this.I=!0,Lt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ze(this.j,this.A),2!=this.K&&(st(),at(17)),Lt(this),this.o=2,Nt(this)):xt(this,this.V-e)};var jt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Bt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Bt){this.h=void 0!==t?t:e.h,$t(this,e.j),this.s=e.s,this.g=e.g,zt(this,e.m),this.l=e.l,t=e.i;var n=new nn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ht(this,n),this.o=e.o}else e&&(n=String(e).match(jt))?(this.h=!!t,$t(this,n[1]||"",!0),this.s=Gt(n[2]||""),this.g=Gt(n[3]||"",!0),zt(this,n[4]),this.l=Gt(n[5]||"",!0),Ht(this,n[6]||"",!0),this.o=Gt(n[7]||"")):(this.h=!!t,this.i=new nn(null,this.h))}function qt(e){return new Bt(e)}function $t(e,t,n){e.j=n?Gt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ht(e,t,n){t instanceof nn?(e.i=t,un(e.i,e.h)):(n||(t=Jt(t,en)),e.i=new nn(t,e.h))}function Wt(e,t,n){e.i.set(t,n)}function Kt(e){return Wt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Gt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Jt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Xt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Xt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Bt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Jt(t,Qt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Jt(t,Qt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Jt(n,"/"==n.charAt(0)?Zt:Yt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Jt(n,tn)),e.join("")};var Qt=/[#\/\?@]/g,Yt=/[#\?:]/g,Zt=/[#\?]/g,en=/[#\?@]/g,tn=/#/g;function nn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function rn(e){e.g||(e.g=new Map,e.h=0,e.i&&Vt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function sn(e,t){rn(e),t=cn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function on(e,t){return rn(e),t=cn(e,t),e.g.has(t)}function an(e,t,n){sn(e,t),0<n.length&&(e.i=null,e.g.set(cn(e,t),k(n)),e.h+=n.length)}function cn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function un(e,t){t&&!e.j&&(rn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(sn(this,t),an(this,n,e))}),e)),e.j=t}r=nn.prototype,r.add=function(e,t){rn(this),this.i=null,e=cn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){rn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){rn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){rn(this);let t=[];if("string"===typeof e)on(this,e)&&(t=t.concat(this.g.get(cn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return rn(this),this.i=null,e=cn(this,e),on(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var ln=class{constructor(e,t){this.h=e,this.g=t}};function hn(e){this.l=e||dn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var dn=10;function fn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function pn(e){return e.h?1:e.g?e.g.size:0}function gn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function mn(e,t){e.g?e.g.add(t):e.h=t}function yn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function vn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return k(e.i)}function wn(){}function bn(){this.g=new wn}function _n(e,t,n){const r=n||"";try{Ft(e,(function(e,n){let i=e;p(e)&&(i=Ae(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(e,t){const n=new Je;if(h.Image){const r=new Image;r.onload=_(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=_(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(Tn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Sn(e){this.l=e.ac||null,this.j=e.jb||!1}function In(e,t){Ie.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=kn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}hn.prototype.cancel=function(){if(this.i=vn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},E(Sn,dt),Sn.prototype.g=function(){return new In(this.l,this.j)},Sn.prototype.i=function(e){return function(){return e}}({}),E(In,Ie);var kn=0;function Cn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function An(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Rn(e)}function Rn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=In.prototype,r.open=function(e,t){if(this.readyState!=kn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Rn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=kn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Cn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?An(this):Rn(this),3==this.readyState&&Cn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,An(this))},r.Ua=function(e){this.g&&(this.response=e,An(this))},r.ga=function(){this.g&&An(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(In.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var On=h.JSON.parse;function xn(e){Ie.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dn,this.K=this.L=!1}E(xn,Ie);var Dn="",Nn=/^https?$/i,Ln=["POST","PUT"];function Pn(e){return j&&X()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Un(e),jn(e)}function Un(e){e.D||(e.D=!0,ke(e,"complete"),ke(e,"error"))}function Fn(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Bn(e)||2!=e.aa()))if(e.v&&4==Bn(e))qe(e.Ha,0,e);else if(ke(e,"readystatechange"),4==Bn(e)){e.h=!1;try{const c=e.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(jt)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Nn.test(i?i.toLowerCase():"")}n=r}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var o=2<Bn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Un(e)}}finally{jn(e)}}}function jn(e,t){if(e.g){Vn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||ke(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Vn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Bn(e){return e.g?e.g.readyState:0}function qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Dn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Cr){return null}}function $n(e){let t="";return se(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$n(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Wt(e,t,n))}function Hn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wn(e){this.Ca=0,this.i=[],this.j=new Je,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Hn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Hn("baseRetryDelayMs",5e3,e),this.bb=Hn("retryDelaySeedMs",1e4,e),this.$a=Hn("forwardChannelMaxRetries",2,e),this.ta=Hn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new hn(e&&e.concurrentRequestLimit),this.Fa=new bn,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Kn(e){if(Jn(e),3==e.G){var t=e.U++,n=qt(e.F);Wt(n,"SID",e.I),Wt(n,"RID",t),Wt(n,"TYPE","terminate"),Zn(e,n),t=new bt(e,e.j,t,void 0),t.K=2,t.v=Kt(qt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=hr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Ot(t)}ur(e)}function Gn(e){e.g&&(rr(e),e.g.cancel(),e.g=null)}function Jn(e){Gn(e),e.u&&(h.clearTimeout(e.u),e.u=null),sr(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Xn(e){fn(e.h)||e.m||(e.m=!0,Pe(e.Ja,e),e.C=0)}function Qn(e,t){return!(pn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=ut(b(e.Ja,e,t),ar(e,e.C)),e.C++,!0))}function Yn(e,t){var n;n=t?t.m:e.U++;const r=qt(e.F);Wt(r,"SID",e.I),Wt(r,"RID",n),Wt(r,"AID",e.T),Zn(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new bt(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=er(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),mn(e.h,n),It(n,r,t)}function Zn(e,t){e.ia&&se(e.ia,(function(e,n){Wt(t,n,e)})),e.l&&Ft({},(function(e,n){Wt(t,n,e)}))}function er(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=t,0>n)t=Math.max(0,i[a].h-100),o=!1;else try{_n(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function tr(e){e.g||e.u||(e.Z=1,Pe(e.Ia,e),e.A=0)}function nr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ut(b(e.Ia,e),ar(e,e.A)),e.A++,!0)}function rr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function ir(e){e.g=new bt(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=qt(e.sa);Wt(t,"RID","rpc"),Wt(t,"SID",e.I),Wt(t,"CI",e.L?"0":"1"),Wt(t,"AID",e.T),Wt(t,"TYPE","xmlhttp"),Zn(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Kt(qt(t)),n.s=null,n.P=!0,kt(n,e)}function sr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function or(e,t){var n=null;if(e.g==t){sr(e),rr(e),e.g=null;var r=2}else{if(!gn(e.h,t))return;n=t.D,yn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=rt(),ke(r,new ct(r,n)),Xn(e)}else tr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Qn(e,t)||2==r&&nr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:cr(e,5);break;case 4:cr(e,10);break;case 3:cr(e,6);break;default:cr(e,2)}}function ar(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function cr(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.kb,e);n||(n=new Bt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||$t(n,"https"),Kt(n)),En(n.toString(),r)}else at(2);e.G=0,e.l&&e.l.va(t),ur(e),Jn(e)}function ur(e){if(e.G=0,e.la=[],e.l){const t=vn(e.h);0==t.length&&0==e.i.length||(C(e.la,t),C(e.la,e.i),e.h.i.length=0,k(e.i),e.i.length=0),e.l.ua()}}function lr(e,t,n){var r=n instanceof Bt?qt(n):new Bt(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),zt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Bt(null,void 0);r&&$t(s,r),t&&(s.g=t),i&&zt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Wt(r,n,t),Wt(r,"VER",e.ma),Zn(e,r),r}function hr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new xn(new Sn({jb:!0})):new xn(e.ra),t.Ka(e.H),t}function dr(){}function fr(){if(j&&!(10<=Number(Y)))throw Error("Environmental error: no available transport.")}function pr(e,t){Ie.call(this),this.g=new Wn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yr(this)}function gr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mr(){vt.call(this),this.status=1}function yr(e){this.g=e}r=xn.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?ft(this.u):ft(gt),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Mn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=I(Ln,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Vn(this),0<this.B&&((this.K=Pn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=qe(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mn(this,s)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jn(this,!0)),xn.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Fn(this):this.fb())},r.fb=function(){Fn(this)},r.aa=function(){try{return 2<Bn(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),On(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Wn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new bt(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=oe(s),ce(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=er(this,i,t),n=qt(this.F),Wt(n,"RID",e),Wt(n,"CVER",22),this.D&&Wt(n,"X-HTTP-Session-Id",this.D),Zn(this,n),s&&(this.N?t="headers="+encodeURIComponent(String($n(s)))+"&"+t:this.o&&zn(n,this.o,s)),mn(this.h,i),this.Ya&&Wt(n,"TYPE","init"),this.O?(Wt(n,"$req",t),Wt(n,"SID","null"),i.Z=!0,It(i,n,null)):It(i,n,t),this.G=2}}else 3==this.G&&(e?Yn(this,e):0==this.i.length||fn(this.h)||Yn(this))},r.Ia=function(){if(this.u=null,ir(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ut(b(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,at(10),Gn(this),ir(this))},r.cb=function(){null!=this.v&&(this.v=null,Gn(this),nr(this),at(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),at(2)):(this.j.info("Failed to ping google.com"),at(1))},r=dr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},fr.prototype.g=function(e,t){return new pr(e,t)},E(pr,Ie),pr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;at(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=lr(e,null,e.V),Xn(e)},pr.prototype.close=function(){Kn(this.g)},pr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ae(e),e=n);t.i.push(new ln(t.ab++,e)),3==t.G&&Xn(t)},pr.prototype.M=function(){this.g.l=null,delete this.j,Kn(this.g),delete this.g,pr.X.M.call(this)},E(gr,yt),E(mr,vt),E(yr,dr),yr.prototype.xa=function(){ke(this.g,"a")},yr.prototype.wa=function(e){ke(this.g,new gr(e))},yr.prototype.va=function(e){ke(this.g,new mr)},yr.prototype.ua=function(){ke(this.g,"b")},fr.prototype.createWebChannel=fr.prototype.g,pr.prototype.send=pr.prototype.u,pr.prototype.open=pr.prototype.m,pr.prototype.close=pr.prototype.close,lt.NO_ERROR=0,lt.TIMEOUT=8,lt.HTTP_ERROR=6,ht.COMPLETE="complete",pt.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",Ie.prototype.listen=Ie.prototype.N,xn.prototype.listenOnce=xn.prototype.O,xn.prototype.getLastError=xn.prototype.Oa,xn.prototype.getLastErrorCode=xn.prototype.Ea,xn.prototype.getStatus=xn.prototype.aa,xn.prototype.getResponseJson=xn.prototype.Sa,xn.prototype.getResponseText=xn.prototype.fa,xn.prototype.send=xn.prototype.da,xn.prototype.setWithCredentials=xn.prototype.Ka;var vr=u.createWebChannelTransport=function(){return new fr},wr=u.getStatEventTarget=function(){return rt()},br=u.ErrorCode=lt,_r=u.EventType=ht,Er=u.Event=tt,Tr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Sr=u.FetchXmlHttpFactory=Sn,Ir=u.WebChannel=pt,kr=u.XhrIo=xn;const Cr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ar.UNAUTHENTICATED=new Ar(null),Ar.GOOGLE_CREDENTIALS=new Ar("google-credentials-uid"),Ar.FIRST_PARTY=new Ar("first-party-uid"),Ar.MOCK_USER=new Ar("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Rr="9.13.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new o.Yd("@firebase/firestore");function xr(){return Or.logLevel}function Dr(e,...t){if(Or.logLevel<=o["in"].DEBUG){const n=t.map(Pr);Or.debug(`Firestore (${Rr}): ${e}`,...n)}}function Nr(e,...t){if(Or.logLevel<=o["in"].ERROR){const n=t.map(Pr);Or.error(`Firestore (${Rr}): ${e}`,...n)}}function Lr(e,...t){if(Or.logLevel<=o["in"].WARN){const n=t.map(Pr);Or.warn(`Firestore (${Rr}): ${e}`,...n)}}function Pr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e="Unexpected state"){const t=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+e;throw Nr(t),new Error(t)}function Ur(e,t){e||Mr()}function Fr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vr extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $r{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ar.UNAUTHENTICATED)))}shutdown(){}}class zr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Hr{constructor(e){this.t=e,this.currentUser=Ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Br,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Dr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Dr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Br)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Dr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Ur("string"==typeof t.accessToken),new qr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ur(null===e||"string"==typeof e),new Ar(e)}}class Wr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Ar.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ur(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Kr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Wr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Dr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Dr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Dr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Dr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Ur("string"==typeof e.token),this.A=e.token,new Gr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Xr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Yr(e,t){return e<t?-1:e>t?1:0}function Zr(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ei{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Vr(jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Vr(jr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Vr(jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Vr(jr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ei.fromMillis(Date.now())}static fromDate(e){return ei.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ei(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Yr(this.nanoseconds,e.nanoseconds):Yr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ti(e)}static min(){return new ti(new ei(0,0))}static max(){return new ti(new ei(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,n){void 0===t?t=0:t>e.length&&Mr(),void 0===n?n=e.length-t:n>e.length-t&&Mr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ni.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ni?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ri extends ni{construct(e,t,n){return new ri(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Vr(jr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ri(t)}static emptyPath(){return new ri([])}}const ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class si extends ni{construct(e,t,n){return new si(e,t,n)}static isValidIdentifier(e){return ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new si(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Vr(jr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Vr(jr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Vr(jr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Vr(jr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new si(t)}static emptyPath(){return new si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.path=e}static fromPath(e){return new oi(ri.fromString(e))}static fromName(e){return new oi(ri.fromString(e).popFirst(5))}static empty(){return new oi(ri.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ri.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ri.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oi(new ri(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}ai.UNKNOWN_ID=-1;function ci(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=ti.fromTimestamp(1e9===r?new ei(n+1,0):new ei(n,r));return new li(i,oi.empty(),t)}function ui(e){return new li(e.readTime,e.key,-1)}class li{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new li(ti.min(),oi.empty(),-1)}static max(){return new li(ti.max(),oi.empty(),-1)}}function hi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=oi.comparator(e.documentKey,t.documentKey),0!==n?n:Yr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e){if(e.code!==jr.FAILED_PRECONDITION||e.message!==di)throw e;Dr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Mr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new gi(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof gi?t:gi.resolve(t)}catch(e){return gi.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):gi.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):gi.reject(t)}static resolve(e){return new gi(((t,n)=>{t(e)}))}static reject(e){return new gi(((t,n)=>{n(e)}))}static waitFor(e){return new gi(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=gi.resolve(!1);for(const n of e)t=t.next((e=>e?gi.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new gi(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new gi(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function wi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function bi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi.at=-1;class _i{constructor(e,t){this.comparator=e,this.root=t||Ti.EMPTY}insert(e,t){return new _i(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ti.BLACK,null,null))}remove(e){return new _i(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ti.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ei(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ei(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ei(this.root,e,this.comparator,!0)}}class Ei{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ti{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ti.RED,this.left=null!=r?r:Ti.EMPTY,this.right=null!=i?i:Ti.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ti(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ti.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ti.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ti.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ti.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mr();if(this.right.isRed())throw Mr();const e=this.left.check();if(e!==this.right.check())throw Mr();return e+(this.isRed()?0:1)}}Ti.EMPTY=null,Ti.RED=!0,Ti.BLACK=!1,Ti.EMPTY=new class{constructor(){this.size=0}get key(){throw Mr()}get value(){throw Mr()}get color(){throw Mr()}get left(){throw Mr()}get right(){throw Mr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ti(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(e){this.comparator=e,this.data=new _i(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ii(this.data.getIterator())}getIteratorFrom(e){return new Ii(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Si))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Si(this.comparator);return t.data=e,t}}class Ii{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{constructor(e){this.fields=e,e.sort(si.comparator)}static empty(){return new ki([])}unionWith(e){let t=new Si(si.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ki(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ci{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ci(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ci(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Yr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const Ai=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(e){if(Ur(!!e),"string"==typeof e){let t=0;const n=Ai.exec(e);if(Ur(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Oi(e.seconds),nanos:Oi(e.nanos)}}function Oi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function xi(e){return"string"==typeof e?Ci.fromBase64String(e):Ci.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ni(e){const t=e.mapValue.fields.__previous_value__;return Di(t)?Ni(t):t}function Li(e){const t=Ri(e.mapValue.fields.__local_write_time__.timestampValue);return new ei(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Mi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}function Ui(e){return null==e}function Fi(e){return 0===e&&1/e==-1/0}function ji(e){return"number"==typeof e&&Number.isInteger(e)&&!Fi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Di(e)?4:ts(e)?9007199254740991:10:Mr()}function qi(e,t){if(e===t)return!0;const n=Bi(e);if(n!==Bi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Li(e).isEqual(Li(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ri(e.timestampValue),r=Ri(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return xi(e.bytesValue).isEqual(xi(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Oi(e.geoPointValue.latitude)===Oi(t.geoPointValue.latitude)&&Oi(e.geoPointValue.longitude)===Oi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Oi(e.integerValue)===Oi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Oi(e.doubleValue),r=Oi(t.doubleValue);return n===r?Fi(n)===Fi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Zr(e.arrayValue.values||[],t.arrayValue.values||[],qi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(vi(n)!==vi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!qi(n[i],r[i])))return!1;return!0}(e,t);default:return Mr()}}function $i(e,t){return void 0!==(e.values||[]).find((e=>qi(e,t)))}function zi(e,t){if(e===t)return 0;const n=Bi(e),r=Bi(t);if(n!==r)return Yr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Yr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Oi(e.integerValue||e.doubleValue),r=Oi(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Hi(e.timestampValue,t.timestampValue);case 4:return Hi(Li(e),Li(t));case 5:return Yr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=xi(e),r=xi(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Yr(n[i],r[i]);if(0!==e)return e}return Yr(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Yr(Oi(e.latitude),Oi(t.latitude));return 0!==n?n:Yr(Oi(e.longitude),Oi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=zi(n[i],r[i]);if(e)return e}return Yr(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Vi.mapValue&&t===Vi.mapValue)return 0;if(e===Vi.mapValue)return 1;if(t===Vi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=Yr(r[o],s[o]);if(0!==e)return e;const t=zi(n[r[o]],i[s[o]]);if(0!==t)return t}return Yr(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Mr()}}function Hi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Yr(e,t);const n=Ri(e),r=Ri(t),i=Yr(n.seconds,r.seconds);return 0!==i?i:Yr(n.nanos,r.nanos)}function Wi(e){return Ki(e)}function Ki(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ri(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?xi(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,oi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ki(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Ki(e.fields[i])}`;return n+"}"}(e.mapValue):Mr();var t,n}function Gi(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ji(e){return!!e&&"integerValue"in e}function Xi(e){return!!e&&"arrayValue"in e}function Qi(e){return!!e&&"nullValue"in e}function Yi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Zi(e){return!!e&&"mapValue"in e}function es(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return wi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=es(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=es(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ts(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ns{constructor(e){this.value=e}static empty(){return new ns({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Zi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=es(t)}setAll(e){let t=si.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=es(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Zi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Zi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){wi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ns(es(this.value))}}function rs(e){const t=[];return wi(e.fields,((e,n)=>{const r=new si([e]);if(Zi(n)){const e=rs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new ki(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class is{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new is(e,0,ti.min(),ti.min(),ns.empty(),0)}static newFoundDocument(e,t,n){return new is(e,1,t,ti.min(),n,0)}static newNoDocument(e,t){return new is(e,2,t,ti.min(),ns.empty(),0)}static newUnknownDocument(e,t){return new is(e,3,t,ti.min(),ns.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ns.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ns.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ti.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof is&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new is(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ht=null}}function os(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ss(e,t,n,r,i,s,o)}function as(e){const t=Fr(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Wi(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ui(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Wi(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Wi(e))).join(",")),t.ht=e}return t.ht}function cs(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Wi(t.value)}`;var t})).join(", ")}]`),Ui(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Wi(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Wi(e))).join(",")),`Target(${t})`}function us(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Es(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!qi(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ss(e.startAt,t.startAt)&&Ss(e.endAt,t.endAt)}function ls(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class hs extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new ds(e,t,n):"array-contains"===t?new ms(e,n):"in"===t?new ys(e,n):"not-in"===t?new vs(e,n):"array-contains-any"===t?new ws(e,n):new hs(e,t,n)}static lt(e,t,n){return"in"===t?new fs(e,n):new ps(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(zi(t,this.value)):null!==t&&Bi(this.value)===Bi(t)&&this.ft(zi(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Mr()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ds extends hs{constructor(e,t,n){super(e,t,n),this.key=oi.fromName(n.referenceValue)}matches(e){const t=oi.comparator(e.key,this.key);return this.ft(t)}}class fs extends hs{constructor(e,t){super(e,"in",t),this.keys=gs("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ps extends hs{constructor(e,t){super(e,"not-in",t),this.keys=gs("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function gs(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>oi.fromName(e.referenceValue)))}class ms extends hs{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xi(t)&&$i(t.arrayValue,this.value)}}class ys extends hs{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&$i(this.value.arrayValue,t)}}class vs extends hs{constructor(e,t){super(e,"not-in",t)}matches(e){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!$i(this.value.arrayValue,t)}}class ws extends hs{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>$i(this.value.arrayValue,e)))}}class bs{constructor(e,t){this.position=e,this.inclusive=t}}class _s{constructor(e,t="asc"){this.field=e,this.dir=t}}function Es(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ts(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?oi.comparator(oi.fromName(o.referenceValue),n.key):zi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ss(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!qi(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function ks(e,t,n,r,i,s,o,a){return new Is(e,t,n,r,i,s,o,a)}function Cs(e){return new Is(e)}function As(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Rs(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Os(e){for(const t of e.filters)if(t.dt())return t.field;return null}function xs(e){return null!==e.collectionGroup}function Ds(e){const t=Fr(e);if(null===t._t){t._t=[];const e=Os(t),n=Rs(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new _s(e)),t._t.push(new _s(si.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new _s(si.keyField(),e))}}}return t._t}function Ns(e){const t=Fr(e);if(!t.wt)if("F"===t.limitType)t.wt=os(t.path,t.collectionGroup,Ds(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Ds(t)){const t="desc"===i.dir?"asc":"desc";e.push(new _s(i.field,t))}const n=t.endAt?new bs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new bs(t.startAt.position,t.startAt.inclusive):null;t.wt=os(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function Ls(e,t,n){return new Is(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ps(e,t){return us(Ns(e),Ns(t))&&e.limitType===t.limitType}function Ms(e){return`${as(Ns(e))}|lt:${e.limitType}`}function Us(e){return`Query(target=${cs(Ns(e))}; limitType=${e.limitType})`}function Fs(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):oi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ts(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Ds(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ts(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Ds(e),t))}(e,t)}function js(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Vs(e){return(t,n)=>{let r=!1;for(const i of Ds(e)){const e=Bs(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Bs(e,t,n){const r=e.field.isKeyField()?oi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?zi(r,i):Mr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Mr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fi(t)?"-0":t}}function $s(e){return{integerValue:""+e}}function zs(e,t){return ji(t)?$s(t):qs(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this._=void 0}}function Ws(e,t,n){return e instanceof Js?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Xs?Qs(e,t):e instanceof Ys?Zs(e,t):function(e,t){const n=Gs(e,t),r=to(n)+to(e.yt);return Ji(n)&&Ji(e.yt)?$s(r):qs(e.It,r)}(e,t)}function Ks(e,t,n){return e instanceof Xs?Qs(e,t):e instanceof Ys?Zs(e,t):n}function Gs(e,t){return e instanceof eo?Ji(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Js extends Hs{}class Xs extends Hs{constructor(e){super(),this.elements=e}}function Qs(e,t){const n=no(t);for(const r of e.elements)n.some((e=>qi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Ys extends Hs{constructor(e){super(),this.elements=e}}function Zs(e,t){let n=no(t);for(const r of e.elements)n=n.filter((e=>!qi(e,r)));return{arrayValue:{values:n}}}class eo extends Hs{constructor(e,t){super(),this.It=e,this.yt=t}}function to(e){return Oi(e.integerValue||e.doubleValue)}function no(e){return Xi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Xs&&t instanceof Xs||e instanceof Ys&&t instanceof Ys?Zr(e.elements,t.elements,qi):e instanceof eo&&t instanceof eo?qi(e.yt,t.yt):e instanceof Js&&t instanceof Js}(e.transform,t.transform)}class io{constructor(e,t){this.version=e,this.transformResults=t}}class so{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new so}static exists(e){return new so(void 0,e)}static updateTime(e){return new so(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ao{}function co(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new wo(e.key,so.none()):new po(e.key,e.data,so.none());{const n=e.data,r=ns.empty();let i=new Si(si.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new go(e.key,r,new ki(i.toArray()),so.none())}}function uo(e,t,n){e instanceof po?function(e,t,n){const r=e.value.clone(),i=yo(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof go?function(e,t,n){if(!oo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=yo(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(mo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function lo(e,t,n,r){return e instanceof po?function(e,t,n,r){if(!oo(e.precondition,t))return n;const i=e.value.clone(),s=vo(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof go?function(e,t,n,r){if(!oo(e.precondition,t))return n;const i=vo(e.fieldTransforms,r,t),s=t.data;return s.setAll(mo(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return oo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ho(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Gs(r.transform,e||null);null!=i&&(null===n&&(n=ns.empty()),n.set(r.field,i))}return n||null}function fo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Zr(e,t,((e,t)=>ro(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class po extends ao{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class go extends ao{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function yo(e,t,n){const r=new Map;Ur(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Ks(o,a,n[i]))}return r}function vo(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ws(e,s,t))}return r}class wo extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bo extends ao{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eo,To;function So(e){switch(e){default:return Mr();case jr.CANCELLED:case jr.UNKNOWN:case jr.DEADLINE_EXCEEDED:case jr.RESOURCE_EXHAUSTED:case jr.INTERNAL:case jr.UNAVAILABLE:case jr.UNAUTHENTICATED:return!1;case jr.INVALID_ARGUMENT:case jr.NOT_FOUND:case jr.ALREADY_EXISTS:case jr.PERMISSION_DENIED:case jr.FAILED_PRECONDITION:case jr.ABORTED:case jr.OUT_OF_RANGE:case jr.UNIMPLEMENTED:case jr.DATA_LOSS:return!0}}function Io(e){if(void 0===e)return Nr("GRPC error has no .code"),jr.UNKNOWN;switch(e){case Eo.OK:return jr.OK;case Eo.CANCELLED:return jr.CANCELLED;case Eo.UNKNOWN:return jr.UNKNOWN;case Eo.DEADLINE_EXCEEDED:return jr.DEADLINE_EXCEEDED;case Eo.RESOURCE_EXHAUSTED:return jr.RESOURCE_EXHAUSTED;case Eo.INTERNAL:return jr.INTERNAL;case Eo.UNAVAILABLE:return jr.UNAVAILABLE;case Eo.UNAUTHENTICATED:return jr.UNAUTHENTICATED;case Eo.INVALID_ARGUMENT:return jr.INVALID_ARGUMENT;case Eo.NOT_FOUND:return jr.NOT_FOUND;case Eo.ALREADY_EXISTS:return jr.ALREADY_EXISTS;case Eo.PERMISSION_DENIED:return jr.PERMISSION_DENIED;case Eo.FAILED_PRECONDITION:return jr.FAILED_PRECONDITION;case Eo.ABORTED:return jr.ABORTED;case Eo.OUT_OF_RANGE:return jr.OUT_OF_RANGE;case Eo.UNIMPLEMENTED:return jr.UNIMPLEMENTED;case Eo.DATA_LOSS:return jr.DATA_LOSS;default:return Mr()}}(To=Eo||(Eo={}))[To.OK=0]="OK",To[To.CANCELLED=1]="CANCELLED",To[To.UNKNOWN=2]="UNKNOWN",To[To.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",To[To.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",To[To.NOT_FOUND=5]="NOT_FOUND",To[To.ALREADY_EXISTS=6]="ALREADY_EXISTS",To[To.PERMISSION_DENIED=7]="PERMISSION_DENIED",To[To.UNAUTHENTICATED=16]="UNAUTHENTICATED",To[To.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",To[To.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",To[To.ABORTED=10]="ABORTED",To[To.OUT_OF_RANGE=11]="OUT_OF_RANGE",To[To.UNIMPLEMENTED=12]="UNIMPLEMENTED",To[To.INTERNAL=13]="INTERNAL",To[To.UNAVAILABLE=14]="UNAVAILABLE",To[To.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){wi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return bi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new _i(oi.comparator);function Ao(){return Co}const Ro=new _i(oi.comparator);function Oo(...e){let t=Ro;for(const n of e)t=t.insert(n.key,n);return t}function xo(e){let t=Ro;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Do(){return Lo()}function No(){return Lo()}function Lo(){return new ko((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Po=new _i(oi.comparator),Mo=new Si(oi.comparator);function Uo(...e){let t=Mo;for(const n of e)t=t.add(n);return t}const Fo=new Si(Yr);function jo(){return Fo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Bo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Vo(ti.min(),r,jo(),Ao(),Uo())}}class Bo{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Bo(n,t,Uo(),Uo(),Uo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class $o{constructor(e,t){this.targetId=e,this.At=t}}class zo{constructor(e,t,n=Ci.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ho{constructor(){this.Rt=0,this.bt=Go(),this.Pt=Ci.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Uo(),t=Uo(),n=Uo();return this.bt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Mr()}})),new Bo(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=Go()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Wo{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Ao(),this.qt=Ko(),this.Kt=new Si(Yr)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,(t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:Mr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach(((e,n)=>{this.Ht(n)&&t(n)}))}Yt(e){const t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){const e=r.target;if(ls(e))if(0===n){const n=new oi(e.path);this.jt(t,n,is.newNoDocument(n,ti.min()))}else Ur(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&ls(i.target)){const t=new oi(i.target.path);null!==this.Ut.get(t)||this.ee(r,t)||this.jt(r,t,is.newNoDocument(t,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}}));let n=Uo();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const r=new Vo(e,t,this.Kt,this.Ut,n);return this.Ut=Ao(),this.qt=Ko(),this.Kt=new Si(Yr),r}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new Ho,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new Si(Yr),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||Dr("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Ho),this.Bt.getRemoteKeysForTarget(e).forEach((t=>{this.jt(e,t,null)}))}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Ko(){return new _i(oi.comparator)}function Go(){return new _i(oi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Xo=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Qo{constructor(e,t){this.databaseId=e,this.gt=t}}function Yo(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zo(e,t){return e.gt?t.toBase64():t.toUint8Array()}function ea(e,t){return Yo(e,t.toTimestamp())}function ta(e){return Ur(!!e),ti.fromTimestamp(function(e){const t=Ri(e);return new ei(t.seconds,t.nanos)}(e))}function na(e,t){return function(e){return new ri(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ra(e){const t=ri.fromString(e);return Ur(ka(t)),t}function ia(e,t){return na(e.databaseId,t.path)}function sa(e,t){const n=ra(t);if(n.get(1)!==e.databaseId.projectId)throw new Vr(jr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Vr(jr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new oi(ua(n))}function oa(e,t){return na(e.databaseId,t)}function aa(e){const t=ra(e);return 4===t.length?ri.emptyPath():ua(t)}function ca(e){return new ri(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ua(e){return Ur(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function la(e,t,n){return{name:ia(e,t),fields:n.value.mapValue.fields}}function ha(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Mr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.gt?(Ur(void 0===t||"string"==typeof t),Ci.fromBase64String(t||"")):(Ur(void 0===t||t instanceof Uint8Array),Ci.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?jr.UNKNOWN:Io(e.code);return new Vr(t,e.message||"")}(o);n=new zo(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=sa(e,r.document.name),s=ta(r.document.updateTime),o=new ns({mapValue:{fields:r.document.fields}}),a=is.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new qo(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=sa(e,r.document),s=r.readTime?ta(r.readTime):ti.min(),o=is.newNoDocument(i,s),a=r.removedTargetIds||[];n=new qo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=sa(e,r.document),s=r.removedTargetIds||[];n=new qo([],s,i,null)}else{if(!("filter"in t))return Mr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new _o(r),s=e.targetId;n=new $o(s,i)}}return n}function da(e,t){let n;if(t instanceof po)n={update:la(e,t.key,t.value)};else if(t instanceof wo)n={delete:ia(e,t.key)};else if(t instanceof go)n={update:la(e,t.key,t.data),updateMask:Ia(t.fieldMask)};else{if(!(t instanceof bo))return Mr();n={verify:ia(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Js)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Xs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ys)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof eo)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw Mr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ea(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Mr()}(e,t.precondition)),n}function fa(e,t){return e&&e.length>0?(Ur(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ta(e.updateTime):ta(t);return n.isEqual(ti.min())&&(n=ta(t)),new io(n,e.transformResults||[])}(e,t)))):[]}function pa(e,t){return{documents:[oa(e,t.path)]}}function ga(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=oa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=oa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Yi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NAN"}};if(Qi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Yi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NOT_NAN"}};if(Qi(e.value))return{unaryFilter:{field:_a(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_a(e.field),op:ba(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:_a(e.field),direction:wa(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.gt||Ui(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ma(e){let t=aa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ur(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=va(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new _s(Ea(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ui(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new bs(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new bs(n,t)}(n.endAt)),ks(t,i,o,s,a,"F",c,u)}function ya(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function va(e){return e?void 0!==e.unaryFilter?[Sa(e)]:void 0!==e.fieldFilter?[Ta(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>va(e))).reduce(((e,t)=>e.concat(t))):Mr():[]}function wa(e){return Jo[e]}function ba(e){return Xo[e]}function _a(e){return{fieldPath:e.canonicalString()}}function Ea(e){return si.fromServerFormat(e.fieldPath)}function Ta(e){return hs.create(Ea(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Sa(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ea(e.unaryFilter.field);return hs.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ea(e.unaryFilter.field);return hs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ea(e.unaryFilter.field);return hs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ea(e.unaryFilter.field);return hs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Mr()}}function Ia(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ka(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Aa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ra=Aa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oa{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&uo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=lo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=lo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=No();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=co(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(ti.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Uo())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((e,t)=>fo(e,t)))&&Zr(this.baseMutations,e.baseMutations,((e,t)=>fo(e,t)))}}class xa{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Ur(e.mutations.length===n.length);let r=Po;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new xa(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,n,r,i=ti.min(),s=ti.min(),o=Ci.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Na(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Na(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Na(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.re=e}}function Pa(e){const t=ma({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Ls(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Oi(e.integerValue));else if("doubleValue"in e){const n=Oi(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),Fi(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(xi(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?ts(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):Mr()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const r of Object.keys(n))this._e(r,t),this.ae(n[r],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const r of n)this.ae(r,t)}ge(e,t){this.le(t,37),oi.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}}Ma.Te=new Ma;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ua{constructor(){this.Ye=new Fa}addToCollectionParentIndex(e,t){return this.Ye.add(t),gi.resolve()}getCollectionParents(e,t){return gi.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return gi.resolve()}deleteFieldIndex(e,t){return gi.resolve()}getDocumentsMatchingTarget(e,t){return gi.resolve(null)}getIndexType(e,t){return gi.resolve(0)}getFieldIndexes(e,t){return gi.resolve([])}getNextCollectionGroupToUpdate(e){return gi.resolve(null)}getMinOffset(e,t){return gi.resolve(li.min())}getMinOffsetFromCollectionGroup(e,t){return gi.resolve(li.min())}updateCollectionGroup(e,t,n){return gi.resolve()}updateIndexEntries(e,t){return gi.resolve()}}class Fa{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Si(ri.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Si(ri.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class ja{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new ja(e,ja.DEFAULT_COLLECTION_PERCENTILE,ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ja.DEFAULT_COLLECTION_PERCENTILE=10,ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ja.DEFAULT=new ja(41943040,ja.DEFAULT_COLLECTION_PERCENTILE,ja.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ja.DISABLED=new ja(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Va(0)}static vn(){return new Va(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(){this.changes=new ko((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,is.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?gi.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&lo(n.mutation,e,ki.empty(),ei.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Uo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Uo()){const r=Do();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Oo();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Do();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Uo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Ao();const s=Lo(),o=Lo();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof go)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),lo(o.mutation,t,o.mutation.getFieldMask(),ei.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new qa(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Lo();let r=new _i(((e,t)=>e-t)),i=Uo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||ki.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Uo()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=No();c.forEach((e=>{if(!i.has(e)){const r=co(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return gi.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return oi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xs(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):gi.resolve(Do());let o=-1,a=i;return s.next((t=>gi.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?gi.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Uo()))).next((e=>({batchId:o,changes:xo(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oi(t)).next((e=>{let t=Oo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Oo();return this.indexManager.getCollectionParents(e,r).next((s=>gi.forEach(s,(s=>{const o=function(e,t){return new Is(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,is.newInvalidDocument(n)))}));let n=Oo();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&lo(s.mutation,i,ki.empty(),ei.now()),Fs(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):gi.resolve(is.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return gi.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:ta(n.createTime)}),gi.resolve()}getNamedQuery(e,t){return gi.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Pa(e.bundledQuery),readTime:ta(e.readTime)}}(t)),gi.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(){this.overlays=new _i(oi.comparator),this.es=new Map}getOverlay(e,t){return gi.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Do();return gi.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ue(e,t,r)})),gi.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),gi.resolve()}getOverlaysForCollection(e,t,n){const r=Do(),i=t.length+1,s=new oi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return gi.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _i(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Do(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Do(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return gi.resolve(o)}ue(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Da(t,n));let i=this.es.get(t);void 0===i&&(i=Uo(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.ns=new Si(Ka.ss),this.rs=new Si(Ka.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new Ka(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new Ka(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new oi(new ri([])),n=new Ka(t,e),r=new Ka(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new oi(new ri([])),n=new Ka(t,e),r=new Ka(t,e+1);let i=Uo();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Ka(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ka{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return oi.comparator(e.key,t.key)||Yr(e._s,t._s)}static os(e,t){return Yr(e._s,t._s)||oi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new Si(Ka.ss)}checkEmpty(e){return gi.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Oa(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.gs=this.gs.add(new Ka(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return gi.resolve(s)}lookupMutationBatch(e,t){return gi.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return gi.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return gi.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return gi.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ka(t,0),r=new Ka(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),gi.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Si(Yr);return t.forEach((e=>{const t=new Ka(e,0),r=new Ka(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),gi.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;oi.isDocumentKey(i)||(i=i.child(""));const s=new Ka(new oi(i),0);let o=new Si(Yr);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),gi.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Ur(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return gi.forEach(t.mutations,(r=>{const i=new Ka(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new Ka(t,0),r=this.gs.firstAfterOrEqual(n);return gi.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,gi.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.Es=e,this.docs=new _i(oi.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return gi.resolve(n?n.document.mutableCopy():is.newInvalidDocument(t))}getEntries(e,t){let n=Ao();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():is.newInvalidDocument(e))})),gi.resolve(n)}getAllFromCollection(e,t,n){let r=Ao();const i=new oi(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||hi(ui(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return gi.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Mr()}As(e,t){return gi.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Xa(this)}getSize(e){return gi.resolve(this.size)}}class Xa extends Ba{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),gi.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.persistence=e,this.Rs=new ko((e=>as(e)),us),this.lastRemoteSnapshotVersion=ti.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wa,this.targetCount=0,this.vs=Va.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),gi.resolve()}getLastRemoteSnapshotVersion(e){return gi.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return gi.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),gi.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),gi.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Va(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,gi.resolve()}updateTargetData(e,t){return this.Dn(t),gi.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,gi.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),gi.waitFor(i).next((()=>r))}getTargetCount(e){return gi.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return gi.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),gi.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),gi.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),gi.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return gi.resolve(n)}containsKey(e,t){return gi.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new yi(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Qa(this),this.indexManager=new Ua,this.remoteDocumentCache=function(e){return new Ja(e)}((e=>this.referenceDelegate.xs(e))),this.It=new La(t),this.Ns=new za(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ha,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new Ga(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Dr("MemoryPersistence","Starting transaction:",e);const r=new Za(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return gi.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class Za extends fi{constructor(e){super(),this.currentSequenceNumber=e}}class ec{constructor(e){this.persistence=e,this.Fs=new Wa,this.$s=null}static Bs(e){return new ec(e)}get Ls(){if(this.$s)return this.$s;throw Mr()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),gi.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),gi.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),gi.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return gi.forEach(this.Ls,(n=>{const r=oi.fromPath(n);return this.Us(e,r).next((e=>{e||t.removeEntry(r,ti.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.Us(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}Us(e,t){return gi.or([()=>gi.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Uo(),r=Uo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new tc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(As(t))return gi.resolve(null);let n=Ns(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Ls(t,null,"F"),n=Ns(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Uo(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,Ls(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return As(t)||r.isEqual(ti.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(xr()<=o["in"].DEBUG&&Dr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Us(t)),this.Bi(e,s,t,ci(r,-1)))}))}Fi(e,t){let n=new Si(Vs(e));return t.forEach(((t,r)=>{Fs(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return xr()<=o["in"].DEBUG&&Dr("QueryEngine","Using full collection scan to execute query:",Us(t)),this.Ni.getDocumentsMatchingQuery(e,t,li.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new _i(Yr),this.qi=new ko((e=>as(e)),us),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $a(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ui)))}}function ic(e,t,n,r){return new rc(e,t,n,r)}async function sc(e,t){const n=Fr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Uo();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function oc(e,t){const n=Fr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=gi.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Ur(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Uo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function ac(e){const t=Fr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function cc(e,t){const n=Fr(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ci.EMPTY_BYTE_STRING,ti.min()).withLastLimboFreeSnapshotVersion(ti.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Cs.updateTargetData(e,u))}));let a=Ao(),c=Uo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(uc(e,s,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!r.isEqual(ti.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return gi.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ui=i,e)))}function uc(e,t,n){let r=Uo(),i=Uo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Ao();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(ti.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Dr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function lc(e,t){const n=Fr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function hc(e,t){const n=Fr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,gi.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new Na(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function dc(e,t,n){const r=Fr(e),i=r.Ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!mi(e))throw e;Dr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function fc(e,t,n){const r=Fr(e);let i=ti.min(),s=Uo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Fr(e),i=r.qi.get(n);return void 0!==i?gi.resolve(r.Ui.get(i)):r.Cs.getTargetData(t,n)}(r,e,Ns(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:ti.min(),n?s:Uo()))).next((e=>(pc(r,js(t),e),{documents:e,Hi:s})))))}function pc(e,t,n){let r=e.Ki.get(t)||ti.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}class gc{constructor(){this.activeTargetIds=jo()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mc{constructor(){this.Lr=new gc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new gc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Dr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Dr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);Dr("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(Dr("RestConnection","Received: ",e),e)),(t=>{throw Lr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=wc[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new kr;o.setWithCredentials(!0),o.listenOnce(_r.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case br.NO_ERROR:const t=o.getResponseJson();Dr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case br.TIMEOUT:Dr("Connection",'RPC "'+e+'" timed out'),s(new Vr(jr.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const n=o.getStatus();if(Dr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(jr).indexOf(t)>=0?t:jr.UNKNOWN}(e.status);s(new Vr(t,e.message))}else s(new Vr(jr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Vr(jr.UNAVAILABLE,"Connection failed."));break;default:Mr()}}finally{Dr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=vr(),s=wr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Sr({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Dr("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new bc({Hr:e=>{l?Dr("Connection","Not sending because WebChannel is closed:",e):(u||(Dr("Connection","Opening WebChannel transport."),c.open(),u=!0),Dr("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,Ir.EventType.OPEN,(()=>{l||Dr("Connection","WebChannel transport opened.")})),d(c,Ir.EventType.CLOSE,(()=>{l||(l=!0,Dr("Connection","WebChannel transport closed"),h.io())})),d(c,Ir.EventType.ERROR,(e=>{l||(l=!0,Lr("Connection","WebChannel transport errored:",e),h.io(new Vr(jr.UNAVAILABLE,"The operation could not be completed")))})),d(c,Ir.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];Ur(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Dr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Eo[e];if(void 0!==t)return Io(t)}(e),n=i.message;void 0===t&&(t=jr.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,h.io(new Vr(t,n)),c.close()}else Dr("Connection","WebChannel received:",n),h.ro(n)}})),d(s,Er.STAT_EVENT,(e=>{e.stat===Tr.PROXY?Dr("Connection","Detected buffering proxy"):e.stat===Tr.NOPROXY&&Dr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e){return new Qo(e,!0)}class Sc{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Dr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Sc(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===jr.RESOURCE_EXHAUSTED?(Nr(t.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===jr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new Vr(jr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Dr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Dr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class kc extends Ic{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.It=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=ha(this.It,e),n=function(e){if(!("targetChange"in e))return ti.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ti.min():t.readTime?ta(t.readTime):ti.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=ca(this.It),t.addTarget=function(e,t){let n;const r=t.target;return n=ls(r)?{documents:pa(e,r)}:{query:ga(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Zo(e,t.resumeToken):t.snapshotVersion.compareTo(ti.min())>0&&(n.readTime=Yo(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=ya(this.It,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=ca(this.It),t.removeTarget=e,this.Bo(t)}}class Cc extends Ic{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Ur(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=fa(e.writeResults,e.commitTime),n=ta(e.commitTime);return this.listener.Zo(n,t)}return Ur(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ca(this.It),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>da(this.It,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.It=r,this.nu=!1}su(){if(this.nu)throw new Vr(jr.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Vr(jr.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===jr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Vr(jr.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Rc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Nr(t),this.ou=!1):Dr("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((e=>{n.enqueueAndForget((async()=>{jc(this)&&(Dr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Fr(e);t._u.add(4),await Dc(t),t.gu.set("Unknown"),t._u.delete(4),await xc(t)}(this))}))})),this.gu=new Rc(n,r)}}async function xc(e){if(jc(e))for(const t of e.wu)await t(!0)}async function Dc(e){for(const t of e.wu)await t(!1)}function Nc(e,t){const n=Fr(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Fc(n)?Uc(n):ru(n).ko()&&Pc(n,t))}function Lc(e,t){const n=Fr(e),r=ru(n);n.du.delete(t),r.ko()&&Mc(n,t),0===n.du.size&&(r.ko()?r.Fo():jc(n)&&n.gu.set("Unknown"))}function Pc(e,t){e.yu.Mt(t.targetId),ru(e).zo(t)}function Mc(e,t){e.yu.Mt(t),ru(e).Ho(t)}function Uc(e){e.yu=new Wo({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),ru(e).start(),e.gu.uu()}function Fc(e){return jc(e)&&!ru(e).No()&&e.du.size>0}function jc(e){return 0===Fr(e)._u.size}function Vc(e){e.yu=void 0}async function Bc(e){e.du.forEach(((t,n)=>{Pc(e,t)}))}async function qc(e,t){Vc(e),Fc(e)?(e.gu.hu(t),Uc(e)):e.gu.set("Unknown")}async function $c(e,t,n){if(e.gu.set("Online"),t instanceof zo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Dr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await zc(e,n)}else if(t instanceof qo?e.yu.Gt(t):t instanceof $o?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(ti.min()))try{const t=await ac(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.te(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),Mc(e,t);const r=new Na(n.target,t,1,n.sequenceNumber);Pc(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Dr("RemoteStore","Failed to raise snapshot:",t),await zc(e,t)}}async function zc(e,t,n){if(!mi(t))throw t;e._u.add(1),await Dc(e),e.gu.set("Offline"),n||(n=()=>ac(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Dr("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await xc(e)}))}function Hc(e,t){return t().catch((n=>zc(e,n,t)))}async function Wc(e){const t=Fr(e),n=iu(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;Kc(t);)try{const e=await lc(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,Gc(t,e)}catch(e){await zc(t,e)}Jc(t)&&Xc(t)}function Kc(e){return jc(e)&&e.fu.length<10}function Gc(e,t){e.fu.push(t);const n=iu(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function Jc(e){return jc(e)&&!iu(e).No()&&e.fu.length>0}function Xc(e){iu(e).start()}async function Qc(e){iu(e).eu()}async function Yc(e){const t=iu(e);for(const n of e.fu)t.Xo(n.mutations)}async function Zc(e,t,n){const r=e.fu.shift(),i=xa.from(r,t,n);await Hc(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Wc(e)}async function eu(e,t){t&&iu(e).Yo&&await async function(e,t){if(n=t.code,So(n)&&n!==jr.ABORTED){const n=e.fu.shift();iu(e).Mo(),await Hc(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Wc(e)}var n}(e,t),Jc(e)&&Xc(e)}async function tu(e,t){const n=Fr(e);n.asyncQueue.verifyOperationInProgress(),Dr("RemoteStore","RemoteStore received new credentials");const r=jc(n);n._u.add(3),await Dc(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await xc(n)}async function nu(e,t){const n=Fr(e);t?(n._u.delete(2),await xc(n)):t||(n._u.add(2),await Dc(n),n.gu.set("Unknown"))}function ru(e){return e.pu||(e.pu=function(e,t,n){const r=Fr(e);return r.su(),new kc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Bc.bind(null,e),Zr:qc.bind(null,e),Wo:$c.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Fc(e)?Uc(e):e.gu.set("Unknown")):(await e.pu.stop(),Vc(e))}))),e.pu}function iu(e){return e.Iu||(e.Iu=function(e,t,n){const r=Fr(e);return r.su(),new Cc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.It,n)}(e.datastore,e.asyncQueue,{Yr:Qc.bind(null,e),Zr:eu.bind(null,e),tu:Yc.bind(null,e),Zo:Zc.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await Wc(e)):(await e.Iu.stop(),e.fu.length>0&&(Dr("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class su{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new su(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Vr(jr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ou(e,t){if(Nr("AsyncQueue",`${t}: ${e}`),mi(e))return new Vr(jr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.comparator=e?(t,n)=>e(t,n)||oi.comparator(t.key,n.key):(e,t)=>oi.comparator(e.key,t.key),this.keyedMap=Oo(),this.sortedSet=new _i(this.comparator)}static emptySet(e){return new au(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof au))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new au;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.Tu=new _i(oi.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):Mr():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class uu{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new uu(e,t,au.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ps(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this.Au=void 0,this.listeners=[]}}class hu{constructor(){this.queries=new ko((e=>Ms(e)),Ps),this.onlineState="Unknown",this.Ru=new Set}}async function du(e,t){const n=Fr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new lu),i)try{s.Au=await n.onListen(r)}catch(e){const n=ou(e,`Initialization of query '${Us(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&mu(n)}async function fu(e,t){const n=Fr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function pu(e,t){const n=Fr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(i)&&(r=!0);t.Au=i}}r&&mu(n)}function gu(e,t,n){const r=Fr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function mu(e){e.Ru.forEach((e=>{e.next()}))}class yu{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new uu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=uu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{constructor(e){this.key=e}}class wu{constructor(e){this.key=e}}class bu{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Uo(),this.mutatedKeys=Uo(),this.Gu=Vs(e),this.Qu=new au(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new cu,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Fs(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new uu(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new cu,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Uo(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new wu(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new vu(n))})),t}tc(e){this.Uu=e.Hi,this.Ku=Uo();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return uu.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class _u{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Eu{constructor(e){this.key=e,this.nc=!1}}class Tu{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new ko((e=>Ms(e)),Ps),this.rc=new Map,this.oc=new Set,this.uc=new _i(oi.comparator),this.cc=new Map,this.ac=new Wa,this.hc={},this.lc=new Map,this.fc=Va.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function Su(e,t){const n=$u(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await hc(n.localStore,Ns(t));n.isPrimaryClient&&Nc(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Iu(n,t,r,"current"===s,e.resumeToken)}return i}async function Iu(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await fc(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Uu(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await fc(e.localStore,t,!0),o=new bu(t,s.Hi),a=o.Wu(s.documents),c=Bo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);Uu(e,n,u.Xu);const l=new _u(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function ku(e,t){const n=Fr(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!Ps(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await dc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Lc(n.remoteStore,r.targetId),Pu(n,r.targetId)})).catch(pi)):(Pu(n,r.targetId),await dc(n.localStore,r.targetId,!0))}async function Cu(e,t,n){const r=zu(e);try{const e=await function(e,t){const n=Fr(e),r=ei.now(),i=t.reduce(((e,t)=>e.add(t.key)),Uo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Ao(),c=Uo();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ho(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new go(e.key,t,rs(t.value.mapValue),so.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:xo(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new _i(Yr)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Vu(r,e.changes),await Wc(r.remoteStore)}catch(e){const t=ou(e,"Failed to persist write");n.reject(t)}}async function Au(e,t){const n=Fr(e);try{const e=await cc(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Ur(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Ur(r.nc):e.removedDocuments.size>0&&(Ur(r.nc),r.nc=!1))})),await Vu(n,e,t)}catch(e){await pi(e)}}function Ru(e,t,n){const r=Fr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Fr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&mu(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ou(e,t,n){const r=Fr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new _i(oi.comparator);e=e.insert(s,is.newNoDocument(s,ti.min()));const n=Uo().add(s),i=new Vo(ti.min(),new Map,new Si(Yr),e,n);await Au(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),ju(r)}else await dc(r.localStore,t,!1).then((()=>Pu(r,t,n))).catch(pi)}async function xu(e,t){const n=Fr(e),r=t.batch.batchId;try{const e=await oc(n.localStore,t);Lu(n,r,null),Nu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vu(n,e)}catch(e){await pi(e)}}async function Du(e,t,n){const r=Fr(e);try{const e=await function(e,t){const n=Fr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Ur(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Lu(r,t,n),Nu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Vu(r,e)}catch(n){await pi(n)}}function Nu(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Lu(e,t,n){const r=Fr(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Pu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||Mu(e,t)}))}function Mu(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Lc(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),ju(e))}function Uu(e,t,n){for(const r of n)r instanceof vu?(e.ac.addReference(r.key,t),Fu(e,r)):r instanceof wu?(Dr("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||Mu(e,r.key)):Mr()}function Fu(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Dr("SyncEngine","New document in limbo: "+n),e.oc.add(r),ju(e))}function ju(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new oi(ri.fromString(t)),r=e.fc.next();e.cc.set(r,new Eu(n)),e.uc=e.uc.insert(n,r),Nc(e.remoteStore,new Na(Ns(Cs(n.path)),r,2,yi.at))}}async function Vu(e,t,n){const r=Fr(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=tc.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=Fr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>gi.forEach(t,(t=>gi.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>gi.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!mi(e))throw e;Dr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(e,i)}}}(r.localStore,s))}async function Bu(e,t){const n=Fr(e);if(!n.currentUser.isEqual(t)){Dr("SyncEngine","User change. New user:",t.toKey());const e=await sc(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new Vr(jr.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Vu(n,e.ji)}}function qu(e,t){const n=Fr(e),r=n.cc.get(t);if(r&&r.nc)return Uo().add(r.key);{let e=Uo();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}function $u(e){const t=Fr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Au.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=qu.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ou.bind(null,t),t.sc.Wo=pu.bind(null,t.eventManager),t.sc.wc=gu.bind(null,t.eventManager),t}function zu(e){const t=Fr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xu.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Du.bind(null,t),t}class Hu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Tc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return ic(this.persistence,new nc,e.initialUser,this.It)}yc(e){return new Ya(ec.Bs,this.It)}gc(e){return new mc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ru(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bu.bind(null,this.syncEngine),await nu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new hu}createDatastore(e){const t=Tc(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new _c(r));var r;return function(e,t,n,r){return new Ac(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Ru(this.syncEngine,e,0),s=vc.C()?new vc:new yc,new Oc(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Tu(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Fr(e);Dr("RemoteStore","RemoteStore shutting down."),t._u.add(5),await Dc(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e,t,n){if(!n)throw new Vr(jr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Gu(e,t,n,r){if(!0===t&&!0===r)throw new Vr(jr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ju(e){if(!oi.isDocumentKey(e))throw new Vr(jr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Xu(e){if(oi.isDocumentKey(e))throw new Vr(jr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Qu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Mr()}function Yu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Vr(jr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qu(e);throw new Vr(jr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zu=new Map;class el{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Vr(jr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Vr(jr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Gu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new el({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Vr(jr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Vr(jr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new el(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new $r;switch(e.type){case"gapi":const t=e.client;return new Kr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Vr(jr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Zu.get(e);t&&(Dr("ComponentProvider","Removing Datastore"),Zu.delete(e),t.terminate())}(this),Promise.resolve()}}function nl(e,t,n,r={}){var i;const s=(e=Yu(e,tl))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Lr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ar.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Vr(jr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ar(s)}e._authCredentials=new zr(new qr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rl(this.firestore,e,this._key)}}class il{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new il(this.firestore,e,this._query)}}class sl extends il{constructor(e,t,n){super(e,t,Cs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rl(this.firestore,null,new oi(e))}withConverter(e){return new sl(this.firestore,e,this._path)}}function ol(e,t,...n){if(e=(0,a.m9)(e),Ku("collection","path",t),e instanceof tl){const r=ri.fromString(t,...n);return Xu(r),new sl(e,null,r)}{if(!(e instanceof rl||e instanceof sl))throw new Vr(jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return Xu(r),new sl(e.firestore,null,r)}}function al(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=Qr.R()),Ku("doc","path",t),e instanceof tl){const r=ri.fromString(t,...n);return Ju(r),new rl(e,null,new oi(r))}{if(!(e instanceof rl||e instanceof sl))throw new Vr(jr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ri.fromString(t,...n));return Ju(r),new rl(e.firestore,e instanceof sl?e.converter:null,new oi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ar.UNAUTHENTICATED,this.clientId=Qr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Dr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Dr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Vr(jr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ou(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ll(e,t){e.asyncQueue.verifyOperationInProgress(),Dr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await sc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function hl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await dl(e);Dr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>tu(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>tu(t.remoteStore,n))),e.onlineComponents=t}async function dl(e){return e.offlineComponents||(Dr("FirestoreClient","Using default OfflineComponentProvider"),await ll(e,new Hu)),e.offlineComponents}async function fl(e){return e.onlineComponents||(Dr("FirestoreClient","Using default OnlineComponentProvider"),await hl(e,new Wu)),e.onlineComponents}function pl(e){return fl(e).then((e=>e.syncEngine))}async function gl(e){const t=await fl(e),n=t.eventManager;return n.onListen=Su.bind(null,t.syncEngine),n.onUnlisten=ku.bind(null,t.syncEngine),n}function ml(e,t,n={}){const r=new Br;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new cl({next:n=>{t.enqueueAndForget((()=>fu(e,o))),n.fromCache&&"server"===r.source?i.reject(new Vr(jr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new yu(n,s,{includeMetadataChanges:!0,Nu:!0});return du(e,o)}(await gl(e),e.asyncQueue,t,n,r))),r.promise}class yl{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Sc(this,"async_queue_retry"),this.Wc=()=>{const e=Ec();e&&Dr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=Ec();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=Ec();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise((()=>{}));const t=new Br;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(E){if(!mi(E))throw E;Dr("AsyncQueue","Operation failed with retryable error: "+E)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Nr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=su.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.qc.push(r),r}zc(){this.Kc&&Mr()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.qc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.qc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}class vl extends tl{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new yl,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_l(this),this._firestoreClient.terminate()}}function wl(e,t){const n="object"==typeof e?e:(0,i.Mq)(),r="string"==typeof e?e:t||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.P0)("firestore");e&&nl(s,...e)}return s}function bl(e){return e._firestoreClient||_l(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _l(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Pi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ul(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El{constructor(e){this._byteString=e}static fromBase64String(e){try{return new El(Ci.fromBase64String(e))}catch(e){throw new Vr(jr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new El(Ci.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Vr(jr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Vr(jr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Vr(jr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Yr(this._lat,e._lat)||Yr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=/^__.*__$/;class Cl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new go(e,this.data,this.fieldMask,t,this.fieldTransforms):new po(e,this.data,t,this.fieldTransforms)}}class Al{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new go(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Rl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mr()}}class Ol{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ol(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Hl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(Rl(this.sa)&&kl.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class xl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||Tc(e)}da(e,t,n,r=!1){return new Ol({sa:e,methodName:t,fa:n,path:si.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Dl(e){const t=e._freezeSettings(),n=Tc(e._databaseId);return new xl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Nl(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);Bl("Data must be an object, but it was:",o,r);const a=jl(r,o);let c,u;if(s.merge)c=new ki(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=ql(t,r,n);if(!o.contains(i))throw new Vr(jr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Wl(e,i)||e.push(i)}c=new ki(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Cl(new ns(a),c,u)}class Ll extends Sl{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ll}}function Pl(e,t,n,r){const i=e.da(1,t,n);Bl("Data must be an object, but it was:",i,r);const s=[],o=ns.empty();wi(r,((e,r)=>{const c=zl(t,e,n);r=(0,a.m9)(r);const u=i.ca(c);if(r instanceof Ll)s.push(c);else{const e=Fl(r,u);null!=e&&(s.push(c),o.set(c,e))}}));const c=new ki(s);return new Al(o,c,i.fieldTransforms)}function Ml(e,t,n,r,i,s){const o=e.da(1,t,n),c=[ql(t,r,n)],u=[i];if(s.length%2!=0)throw new Vr(jr.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(ql(t,s[a])),u.push(s[a+1]);const l=[],h=ns.empty();for(let f=c.length-1;f>=0;--f)if(!Wl(l,c[f])){const e=c[f];let t=u[f];t=(0,a.m9)(t);const n=o.ca(e);if(t instanceof Ll)l.push(e);else{const r=Fl(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new ki(l);return new Al(h,d,o.fieldTransforms)}function Ul(e,t,n,r=!1){return Fl(n,e.da(r?4:3,t))}function Fl(e,t){if(Vl(e=(0,a.m9)(e)))return Bl("Unsupported field value:",t,e),jl(e,t);if(e instanceof Sl)return function(e,t){if(!Rl(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Fl(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return zs(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ei.fromDate(e);return{timestampValue:Yo(t.It,n)}}if(e instanceof ei){const n=new ei(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Yo(t.It,n)}}if(e instanceof Il)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof El)return{bytesValue:Zo(t.It,e._byteString)};if(e instanceof rl){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:na(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${Qu(e)}`)}(e,t)}function jl(e,t){const n={};return bi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):wi(e,((e,r)=>{const i=Fl(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Vl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ei||e instanceof Il||e instanceof El||e instanceof rl||e instanceof Sl)}function Bl(e,t,n){if(!Vl(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Qu(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function ql(e,t,n){if((t=(0,a.m9)(t))instanceof Tl)return t._internalPath;if("string"==typeof t)return zl(e,t);throw Hl("Field path arguments must be of type string or ",e,!1,void 0,n)}const $l=new RegExp("[~\\*/\\[\\]]");function zl(e,t,n){if(t.search($l)>=0)throw Hl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Tl(...t.split("."))._internalPath}catch(r){throw Hl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Hl(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Vr(jr.INVALID_ARGUMENT,a+e+c)}function Wl(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Gl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jl("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Gl extends Kl{data(){return super.data()}}function Jl(e,t){return"string"==typeof t?zl(e,t):t instanceof Tl?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Vr(jr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ql{}function Yl(e,...t){for(const n of t)e=n._apply(e);return e}class Zl extends Ql{constructor(e,t,n){super(),this.ma=e,this.ga=t,this.ya=n,this.type="where"}_apply(e){const t=Dl(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Vr(jr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){nh(o,s);const t=[];for(const n of o)t.push(th(r,e,n));a={arrayValue:{values:t}}}else a=th(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||nh(o,s),a=Ul(n,t,o,"in"===s||"not-in"===s);const c=hs.create(i,s,a);return function(e,t){if(t.dt()){const n=Os(e);if(null!==n&&!n.isEqual(t.field))throw new Vr(jr.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Rs(e);null!==r&&rh(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Vr(jr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Vr(jr.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new il(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Is(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function eh(e,t,n){const r=t,i=Jl("where",e);return new Zl(i,r,n)}function th(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new Vr(jr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xs(t)&&-1!==n.indexOf("/"))throw new Vr(jr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ri.fromString(n));if(!oi.isDocumentKey(r))throw new Vr(jr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gi(e,new oi(r))}if(n instanceof rl)return Gi(e,n._key);throw new Vr(jr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qu(n)}.`)}function nh(e,t){if(!Array.isArray(e)||0===e.length)throw new Vr(jr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Vr(jr.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function rh(e,t,n){if(!n.isEqual(t))throw new Vr(jr.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{convertValue(e,t="none"){switch(Bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Mr()}}convertObject(e,t){const n={};return wi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Il(Oi(e.latitude),Oi(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ni(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Li(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new ei(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ri.fromString(e);Ur(ka(n));const r=new Mi(n.get(1),n.get(3)),i=new oi(n.popFirst(5));return r.isEqual(t)||Nr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ah extends Kl{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Jl("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ch extends ah{data(e={}){return super.data(e)}}class uh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new oh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ch(this._firestore,this._userDataWriter,n.key,n,new oh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Vr(jr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new ch(e._firestore,e._userDataWriter,n.doc.key,n.doc,new oh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ch(e._firestore,e._userDataWriter,t.doc.key,t.doc,new oh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:lh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function lh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mr()}}class hh extends ih{constructor(e){super(),this.firestore=e}convertBytes(e){return new El(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rl(this.firestore,null,t)}}function dh(e){e=Yu(e,il);const t=Yu(e.firestore,vl),n=bl(t),r=new hh(t);return Xl(e._query),ml(n,e._query).then((n=>new uh(t,r,e,n)))}function fh(e,t,n,...r){e=Yu(e,rl);const i=Yu(e.firestore,vl),s=Dl(i);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof Tl?Ml(s,"updateDoc",e._key,t,n,r):Pl(s,"updateDoc",e._key,t),mh(i,[o.toMutation(e._key,so.exists(!0))])}function ph(e){return mh(Yu(e.firestore,vl),[new wo(e._key,so.none())])}function gh(e,t){const n=Yu(e.firestore,vl),r=al(e),i=sh(e.converter,t);return mh(n,[Nl(Dl(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,so.exists(!1))]).then((()=>r))}function mh(e,t){return function(e,t){const n=new Br;return e.asyncQueue.enqueueAndForget((async()=>Cu(await pl(e),t,n))),n.promise}(bl(e),t)}!function(e,t=!0){!function(e){Rr=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new vl(new Hr(e.getProvider("auth-internal")),new Jr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Vr(jr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(e.options.projectId,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Cr,"3.7.2",e),(0,i.KN)(Cr,"3.7.2","esm2017")}()},1992:function(e,t,n){"use strict";n.d(t,{Jt:function(){return tt},cF:function(){return rt},iH:function(){return nt},KV:function(){return et}});n(2801),n(7658),n(3408),n(4590);var r=n(7077),i=n(223),s=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.ZR{constructor(e,t,n=0){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new l("unknown",e)}function f(e){return new l("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new l("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",e)}function m(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y(e){return new l("unauthorized","User does not have permission to access '"+e+"'.")}function v(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new l("canceled","User canceled the upload/download.")}function b(e){return new l("invalid-url","Invalid URL '"+e+"'.")}function _(e){return new l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function E(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function T(){return new l("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S(){return new l("no-download-url","The given file does not have any download URLs.")}function I(e){return new l("invalid-argument",e)}function k(){return new l("app-deleted","The Firebase app was deleted.")}function C(e){return new l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(e,t){return new l("invalid-format","String does not match format '"+e+"': "+t)}function R(e){throw new l("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=O.makeFromUrl(e,t)}catch(r){return new O(e,"")}if(""===n.path)return n;throw _(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},g=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,m="([^?#]*)",y=new RegExp(`^https?://${g}/${r}/${m}`,"i"),v={bucket:1,path:2},w=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let o=0;o<w.length;o++){const t=w[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new O(e,i),t.postModify(n);break}}if(null==n)throw b(e);return n}}class x{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||o;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function N(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){return void 0!==e}function P(e){return"object"===typeof e&&!Array.isArray(e)}function M(e){return"string"===typeof e||e instanceof String}function U(e){return F()&&e instanceof Blob}function F(){return"undefined"!==typeof Blob&&!(0,i.UG)()}function j(e,t,n,r){if(r<t)throw I(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw I(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function B(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(q||(q={}));class z{constructor(e,t,n,r,i,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new H(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===q.NO_ERROR,i=n.getStatus();if((!t||$(i,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===q.ABORT;return void e(!1,new H(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new H(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());L(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=d();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?k():w();r(e)}else{const e=v();r(e)}};this.canceled_?t(!1,new H(!1,null,!0)):this.backoffId_=D(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&N(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class H{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function W(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function K(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function G(e,t){t&&(e["X-Firebase-GMPID"]=t)}function J(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function X(e,t,n,r,i,s,o=!0){const a=B(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return G(u,t),W(u,n),K(u,s),J(u,r),new z(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Y(...e){const t=Q();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(F())return new Blob(e);throw new l("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Z(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ne{constructor(e,t){this.data=e,this.contentType=t||null}}function re(e,t){switch(e){case te.RAW:return new ne(ie(t));case te.BASE64:case te.BASE64URL:return new ne(oe(e,t));case te.DATA_URL:return new ne(ce(t),ue(t))}throw d()}function ie(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function se(e){let t;try{t=decodeURIComponent(e)}catch(n){throw A(te.DATA_URL,"Malformed data URL.")}return ie(t)}function oe(e,t){switch(e){case te.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw A(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case te.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw A(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ee(t)}catch(i){throw A(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ae{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw A(te.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=le(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function ce(e){const t=new ae(e);return t.base64?oe(te.BASE64,t.rest):se(t.rest)}function ue(e){const t=new ae(e);return t.contentType}function le(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){let n=0,r="";U(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(U(this.data_)){const n=this.data_,r=Z(n,e,t);return null===r?null:new he(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new he(n,!0)}}static getBlob(...e){if(F()){const t=e.map((e=>e instanceof he?e.data_:e));return new he(Y.apply(null,t))}{const t=e.map((e=>M(e)?re(te.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new he(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){let t;try{t=JSON.parse(e)}catch(n){return null}return P(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function pe(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function ge(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e,t){return t}class ye{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||me}}let ve=null;function we(e){return!M(e)||e.length<2?e:ge(e)}function be(){if(ve)return ve;const e=[];function t(e,t){return we(t)}e.push(new ye("bucket")),e.push(new ye("generation")),e.push(new ye("metageneration")),e.push(new ye("name","fullPath",!0));const n=new ye("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new ye("size");return i.xform=r,e.push(i),e.push(new ye("timeCreated")),e.push(new ye("updated")),e.push(new ye("md5Hash",null,!0)),e.push(new ye("cacheControl",null,!0)),e.push(new ye("contentDisposition",null,!0)),e.push(new ye("contentEncoding",null,!0)),e.push(new ye("contentLanguage",null,!0)),e.push(new ye("contentType",null,!0)),e.push(new ye("metadata","customMetadata",!0)),ve=e,ve}function _e(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new O(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ee(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return _e(r,e),r}function Te(e,t,n){const r=de(t);if(null===r)return null;const i=r;return Ee(e,i,n)}function Se(e,t,n,r){const i=de(t);if(null===i)return null;if(!M(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=V(a,n,r),u=B({alt:"media",token:t});return c+u}));return c[0]}function Ie(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){if(!e)throw d()}function Ae(e,t){function n(n,r){const i=Te(e,r,t);return Ce(null!==i),i}return n}function Re(e,t){function n(n,r){const i=Te(e,r,t);return Ce(null!==i),Se(i,r,e.host,e._protocol)}return n}function Oe(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?m():g():402===t.getStatus()?p(e.bucket):403===t.getStatus()?y(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function xe(e){const t=Oe(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=f(e.path)),i.serverResponse=r.serverResponse,i}return n}function De(e,t,n){const r=t.fullServerUrl(),i=V(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new ke(i,s,Re(e,n),o);return a.errorHandler=xe(t),a}function Ne(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Le(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Ne(null,t)),r}function Pe(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Le(t,r,i),l=Ie(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=he.getBlob(h,r,d);if(null===f)throw T();const p={name:u["fullPath"]},g=V(s,e.host,e._protocol),m="POST",y=e.maxUploadRetryTime,v=new ke(g,m,Ae(e,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Oe(t),v}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Me=null;class Ue{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=q.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=q.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=q.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw R("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw R("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Fe extends Ue{initXhr(){this.xhr_.responseType="text"}}function je(){return Me?Me():new Fe}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(e,t){this._service=e,this._location=t instanceof O?t:O.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ve(e,t)}get root(){const e=new O(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ge(this._location.path)}get storage(){return this._service}get parent(){const e=fe(this._location.path);if(null===e)return null;const t=new O(this._location.bucket,e);return new Ve(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw C(e)}}function Be(e,t,n){e._throwIfRoot("uploadBytes");const r=Pe(e.storage,e._location,be(),new he(t,!0),n);return e.storage.makeRequestWithTokens(r,je).then((t=>({metadata:t,ref:e})))}function qe(e){e._throwIfRoot("getDownloadURL");const t=De(e.storage,e._location,be());return e.storage.makeRequestWithTokens(t,je).then((e=>{if(null===e)throw S();return e}))}function $e(e,t){const n=pe(e._location.path,t),r=new O(e._location.bucket,n);return new Ve(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){return/^[A-Za-z]+:\/\//.test(e)}function He(e,t){return new Ve(e,t)}function We(e,t){if(e instanceof Xe){const n=e;if(null==n._bucket)throw E();const r=new Ve(n,n._bucket);return null!=t?We(r,t):r}return void 0!==t?$e(e,t):e}function Ke(e,t){if(t&&ze(t)){if(e instanceof Xe)return He(e,t);throw I("To use ref(service, url), the first argument must be a Storage instance.")}return We(e,t)}function Ge(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:O.makeFromBucketSpec(n,e)}function Je(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,e.app.options.projectId))}class Xe{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?O.makeFromBucketSpec(r,this._host):Ge(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=Ge(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){j("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){j("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ve(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new x(k());{const s=X(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Qe="@firebase/storage",Ye="0.9.13",Ze="storage";function et(e,t,n){return e=(0,i.m9)(e),Be(e,t,n)}function tt(e){return e=(0,i.m9)(e),qe(e)}function nt(e,t){return e=(0,i.m9)(e),Ke(e,t)}function rt(e=(0,r.Mq)(),t){e=(0,i.m9)(e);const n=(0,r.qX)(e,Ze),s=n.getImmediate({identifier:t}),o=(0,i.P0)("storage");return o&&it(s,...o),s}function it(e,t,n,r={}){Je(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Xe(n,i,s,t,r.Jn)}function ot(){(0,r.Xd)(new s.wA(Ze,st,"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Qe,Ye,""),(0,r.KN)(Qe,Ye,"esm2017")}ot()},6237:function(e){e.exports="object"==typeof self?self.FormData:window.FormData},5431:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var s=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)}))):(a(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)})))}))}function o(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return o(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return o(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return o(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},6146:function(e,t,n){"use strict";var r=n(3396),i=(0,r.aZ)({name:"StarIcon"});const s={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.002 512.002"},o=(0,r.Wm)("path",{d:"M511.267 197.258a14.995 14.995 0 00-12.107-10.209l-158.723-23.065-70.985-143.827a14.998 14.998 0 00-26.901 0l-70.988 143.827-158.72 23.065a14.998 14.998 0 00-8.312 25.585l114.848 111.954-27.108 158.083a14.999 14.999 0 0021.763 15.812l141.967-74.638 141.961 74.637a15 15 0 0021.766-15.813l-27.117-158.081 114.861-111.955a14.994 14.994 0 003.795-15.375z"},null,-1);function a(e,t,n,i,a,c){return(0,r.wg)(),(0,r.j4)("svg",s,[o])}i.render=a;var c=(0,r.aZ)({components:{StarIcon:i},name:"Vue3StarRatings",props:{starColor:{type:String,default:"#ff9800"},inactiveColor:{type:String,default:"#333"},starSize:{type:String,default:"32"},controlBg:{type:String,default:"#2e5090"},controlColor:{type:String,default:"#fff"},controlSize:{type:String,default:"24"},numberOfStars:{type:Number,default:5},showControl:{type:Boolean,default:!0},modelValue:{type:Number},disableClick:{type:Boolean,default:!1},step:{type:Number,default:.5}},data(){return{rating:this.modelValue||0}},watch:{roundedRating(){this.$emit("update:modelValue",this.roundedRating)}},computed:{roundedRating(){return this.rounded(this.rating,1)},percent(){return this.roundedRating/this.numberOfStars*100+"%"}},methods:{increaseRating(){this.rating<this.numberOfStars?this.rating+=this.step:this.rating>this.numberOfStars&&(this.rating=this.numberOfStars),this.rating>this.numberOfStars&&(this.rating=this.numberOfStars)},decreaseRating(){this.rating<=0||(this.rating-=this.step,this.rating<0&&(this.rating=0))},rounded(e,t){const n=10**t;return Math.round(e*n)/n},numberMinusFifteenPercent(e){const t=+e;return this.rounded(t-.15*t,0)},generateSameWidthAndHeight(e){return{width:e+"px",height:e+"px"}}},mounted(){const e=this.$refs["starsContainer"],t=this;e.addEventListener("click",(function(e){const n=e.pageX-this.offsetLeft;t.rating=n/this.offsetWidth*t.numberOfStars}))}});const u=(0,r.HX)("data-v-76dea496");(0,r.dD)("data-v-76dea496");const l={class:"vue3-star-ratings__wrapper"},h={class:"vue3-star-ratings"},d=(0,r.Wm)("path",{d:"M317.896 396.024l304.749-276.467c27.36-27.36 27.36-71.677 0-99.037s-71.677-27.36-99.036 0L169.11 342.161c-14.783 14.783-21.302 34.538-20.084 53.897-1.218 19.359 5.301 39.114 20.084 53.897l354.531 321.606c27.36 27.36 71.677 27.36 99.037 0s27.36-71.677 0-99.036L317.896 396.024z"},null,-1),f=(0,r.Wm)("path",{d:"M622.955 342.127L268.424 20.521c-27.36-27.36-71.677-27.36-99.037 0s-27.36 71.676 0 99.037l304.749 276.468-304.749 276.466c-27.36 27.359-27.36 71.676 0 99.036s71.677 27.36 99.037 0l354.531-321.606c14.783-14.783 21.302-34.538 20.084-53.897 1.186-19.36-5.301-39.114-20.084-53.898z"},null,-1);(0,r.Cn)();const p=u(((e,t,n,i,s,o)=>{const a=(0,r.up)("star-icon");return(0,r.wg)(),(0,r.j4)("div",l,[(0,r.Wm)("div",h,[e.showControl?((0,r.wg)(),(0,r.j4)("button",{key:0,onClick:t[1]||(t[1]=(...t)=>e.decreaseRating&&e.decreaseRating(...t)),style:{...e.generateSameWidthAndHeight(e.controlSize),backgroundColor:e.controlBg,color:e.controlColor}},[((0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 792.082 792.082",style:{...e.generateSameWidthAndHeight(e.numberMinusFifteenPercent(e.controlSize))}},[d],4))],4)):(0,r.kq)("",!0),(0,r.Wm)("div",{class:"stars",ref:"starsContainer",style:{pointerEvents:e.disableClick?"none":"auto"}},[(0,r.Wm)("div",{class:"stars-outer",style:{color:e.inactiveColor}},[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.numberOfStars,(t=>((0,r.wg)(),(0,r.j4)(a,{key:t,style:{...e.generateSameWidthAndHeight(e.starSize)}},null,8,["style"])))),128))],4),(0,r.Wm)("div",{class:"stars-inner",style:{width:e.percent,color:e.starColor}},[((0,r.wg)(!0),(0,r.j4)(r.HY,null,(0,r.Ko)(e.numberOfStars,(t=>((0,r.wg)(),(0,r.j4)(a,{key:t,style:{...e.generateSameWidthAndHeight(e.starSize)}},null,8,["style"])))),128))],4)],4),e.showControl?((0,r.wg)(),(0,r.j4)("button",{key:1,onClick:t[2]||(t[2]=(...t)=>e.increaseRating&&e.increaseRating(...t)),style:{...e.generateSameWidthAndHeight(e.starSize),backgroundColor:e.controlBg,color:e.controlColor}},[((0,r.wg)(),(0,r.j4)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 792.082 792.082",style:{...e.generateSameWidthAndHeight(e.numberMinusFifteenPercent(e.controlSize))}},[f],4))],4)):(0,r.kq)("",!0)])])}));function g(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var m="\n.vue3-star-ratings__wrapper[data-v-76dea496] {\n  display: block;\n  margin: 25px auto;\n  text-align: center;\n  padding: 25px;\n}\n.vue3-star-ratings[data-v-76dea496] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.vue3-star-ratings button[data-v-76dea496] {\n  border: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.vue3-star-ratings button svg[data-v-76dea496] {\n  fill: currentColor;\n}\n.stars[data-v-76dea496] {\n  display: inline-block;\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n}\n.stars-outer[data-v-76dea496],\n.stars-inner[data-v-76dea496] {\n  height: inherit;\n}\n.stars-inner[data-v-76dea496] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  max-width: 100%;\n  min-width: 0;\n  white-space: nowrap;\n  transition: 320ms cubic-bezier(0.075, 0.82, 0.165, 1);\n  overflow: hidden;\n}\n.stars svg[data-v-76dea496] {\n  display: inline-block;\n  fill: currentColor;\n  cursor: pointer;\n}\n";g(m),c.render=p,c.__scopeId="data-v-76dea496";var y=(()=>{const e=c;return e.install=t=>{t.component("Vue3StarRatings",e)},e})();t["Z"]=y},4955:function(e,t,n){"use strict";n.d(t,{c:function(){return E},x:function(){return $}});n(7658);var r=n(3396),i=n(7139),s=n(9242);const o=["src"],a=["src"],c=["src"],u=["src"],l=["src"],h={key:2},d={class:"vueperslide__content-wrapper"},f=["innerHTML"],p=["innerHTML"],g={class:"vueperslide__content-wrapper"},m=["innerHTML"],y=["innerHTML"],v={key:4,class:"vueperslide__loader"};function w(e,t,n,w,b,_){return(0,r.wg)(),(0,r.j4)((0,r.LL)(n.link?"a":"div"),{class:(0,i.C_)(["vueperslide",_.slideClasses]),href:!(!n.link||_.justDragged)&&n.link,target:n.link&&n.openInNew?"boolean"==typeof n.openInNew?"_blank":n.openInNew:"_self",face:_.slideFace3d,style:(0,i.j5)(_.slideStyles),"aria-hidden":_.slides.activeId===e._.uid||_.isSlideVisible?"false":"true",onMouseenter:t[0]||(t[0]=t=>e.$emit("mouse-enter",{slideIndex:_.slideIndex,title:n.title,content:n.content,image:n.image,link:n.link},e.$el)),onMouseleave:t[1]||(t[1]=t=>e.$emit("mouse-leave"))},{default:(0,r.w5)((()=>[_.videoObj?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[_.videoObj.webm||_.videoObj.mp4?((0,r.wg)(),(0,r.iD)("video",(0,r.dG)({key:0,class:"vueperslide__video",width:"100%",height:"100%"},_.videoObj.props||{}),[_.videoObj.webm?((0,r.wg)(),(0,r.iD)("source",{key:0,src:_.videoObj.webm,type:"video/webm"},null,8,o)):(0,r.kq)("",!0),_.videoObj.mp4?((0,r.wg)(),(0,r.iD)("source",{key:1,src:_.videoObj.mp4,type:"video/mp4"},null,8,a)):(0,r.kq)("",!0),_.videoObj.ogv?((0,r.wg)(),(0,r.iD)("source",{key:2,src:_.videoObj.ogv,type:"video/ogg"},null,8,c)):(0,r.kq)("",!0),_.videoObj.avi?((0,r.wg)(),(0,r.iD)("source",{key:3,src:_.videoObj.avi,type:"video/avi"},null,8,u)):(0,r.kq)("",!0),(0,r.Uk)((0,i.zw)(_.videoObj.alt||"Sorry, your browser doesn't support embedded videos."),1)],16)):_.videoObj.url?((0,r.wg)(),(0,r.iD)("iframe",(0,r.dG)({key:1,class:"vueperslide__video",src:_.videoObj.url,type:"text/html",frameborder:"0",width:"100%",height:"100%"},_.videoObj.props||{}),null,16,l)):(0,r.kq)("",!0)],64)):(0,r.kq)("",!0),e.imageSrc&&_.conf.slideImageInside?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"vueperslide__image",style:(0,i.j5)(_.imageStyles)},null,4)):(0,r.kq)("",!0),_.conf.slideContentOutside?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",h,[(0,r.WI)(e.$slots,"content",{},(()=>[(0,r._)("div",d,[n.title?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"vueperslide__title",innerHTML:n.title},null,8,f)):(0,r.kq)("",!0),n.content?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"vueperslide__content",innerHTML:n.content},null,8,p)):(0,r.kq)("",!0)])]))],512)),[[s.F8,!1]]):(0,r.WI)(e.$slots,"content",{key:3},(()=>[(0,r._)("div",g,[n.title?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"vueperslide__title",innerHTML:n.title},null,8,m)):(0,r.kq)("",!0),n.content?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"vueperslide__content",innerHTML:n.content},null,8,y)):(0,r.kq)("",!0)])])),_.conf.lazy&&!e.loaded?((0,r.wg)(),(0,r.iD)("div",v,[(0,r.WI)(e.$slots,"loader")])):(0,r.kq)("",!0)])),_:3},40,["href","target","class","face","style","aria-hidden"])}const b=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},_={inject:["slides","touch","updateSlide","addClone","addSlide","removeSlide"],props:{clone:{type:Boolean},image:{type:String,default:""},video:{type:[String,Object],default:""},title:{type:String,default:""},content:{type:String,default:""},link:{type:String,default:""},duration:{type:Number,default:0},lazyloaded:{type:Boolean},openInNew:{type:[Boolean,String]}},emits:["mouse-enter","mouse-leave"],data:()=>({imageSrc:"",loading:!1,loaded:!1}),computed:{conf(){return this.$parent.conf},slideClasses(){return{"vueperslide--active":this.slides.activeId===this._.uid,"vueperslide--previous-slide":this.isPreviousSlide,"vueperslide--next-slide":this.isNextSlide,"vueperslide--visible":this.isSlideVisible,"vueperslide--loading":this.conf.lazy&&!this.loaded,"vueperslide--has-video":this.videoObj,"vueperslide--has-image-inside":this.conf.slideImageInside,"vueperslide--no-pointer-events":this.videoObj&&!1===this.videoObj.pointerEvents}},slideStyles(){const{visibleSlides:e,fade:t,slideImageInside:n,gap:r,gapPx:i}=this.conf;return{...!n&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`},...e>1&&{width:(100-(r?r*(e-1):0))/e+"%"},...e>1&&t&&{[this.conf.rtl?"right":"left"]:this.slideIndex%e/e*100+"%"},...r&&{[this.conf.rtl?"marginLeft":"marginRight"]:r+(i?"px":"%")}}},videoObj(){if(!this.video)return null;let e={url:"",alt:"",props:{controls:!0}};return"object"==typeof this.video?e=Object.assign(e,this.video):"string"==typeof this.video&&(e.url=this.video),e},youtubeVideo(){return/youtube\.|youtu\.be/.test(this.videoObj.url)},imageStyles(){return{...this.conf.slideImageInside&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`}}},slideFace3d(){if(!this.conf["3d"])return!1;const e=["front","right","back","left"],t=(this.slides.current-1+this.slidesCount)%this.slidesCount,n=(this.slides.current+1)%this.slidesCount;let r="front";return this.slideIndex===t?r=e[(4+this.slides.current-1)%4]:this.slideIndex===n&&(r=e[(this.slides.current+1)%4]),r=e[this.slideIndex%4],this.conf.rtl&&"left"===r?r="right":this.conf.rtl&&"right"===r&&(r="left"),r},isPreviousSlide(){if(!this.conf["3d"])return!1;const e=(this.slides.current-1+this.slidesCount)%this.slidesCount;return this._.uid===this.slides.list[e].id},isNextSlide(){if(!this.conf["3d"])return!1;const e=(this.slides.current+1)%this.slidesCount;return this._.uid===this.slides.list[e].id},isSlideVisible(){return this.slideIndex>=this.slides.firstVisible&&this.slideIndex<this.slides.firstVisible+this.conf.visibleSlides},slidesList(){return this.slides.list.map((e=>e.id))},slidesCount(){return this.slidesList.length},slideIndex(){return this.slidesList.indexOf(this._.uid)},justDragged(){return this.touch.justDragged}},methods:{updateThisSlide(e){this.updateSlide(this._.uid,e)},loadImage(){if(!this.loading&&!this.loaded)return this.loading=!0,new Promise(((e,t)=>{const n=document.createElement("img");n.onload=()=>{this.imageSrc=this.image,this.loading=!1,this.loaded=!0,this.$nextTick((()=>{e({image:this.imageSrc,style:((this.$el.attributes||{}).style||{}).value})}))},n.onerror=(this.loading=!1)||t,n.src=this.image}))},playVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):this.$el.querySelector("video").play())},pauseVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"):this.$el.querySelector("video").pause())}},created(){if(this.imageSrc=this.conf.lazy?"":this.image,this.clone)return this.addClone();this.addSlide({id:this._.uid,image:this.imageSrc,video:this.videoObj&&{...this.videoObj,play:this.playVideo,pause:this.pauseVideo},title:this.title,content:this.content,contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,link:this.link,style:"",loadImage:this.loadImage,duration:this.duration})},mounted(){this.clone||this.updateThisSlide({contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,style:((this.$el.attributes||{}).style||{}).value})},beforeUnmount(){this.clone||this.removeSlide(this._.uid)},watch:{image(){this.imageSrc=this.conf.lazy&&!this.isSlideVisible?"":this.image,this.clone||this.updateThisSlide({image:this.imageSrc,...!this.conf.slideImageInside&&{style:this.slideStyles}})},title(){this.clone||this.updateThisSlide({title:this.title})},content(){this.clone||this.updateThisSlide({content:this.content})},link(){this.clone||this.updateThisSlide({link:this.link})},lazyloaded(){this.clone&&(this.loaded=this.lazyloaded)}}},E=b(_,[["render",w]]),T=["innerHTML"],S=["innerHTML"],I={class:"vueperslides__inner"},k={key:0,class:"vueperslides__paused"},C={key:1,class:"vueperslides__progress"},A={key:2,class:"vueperslides__fractions"},R={viewBox:"0 0 9 18"},O=["d"],x={viewBox:"0 0 9 18"},D=["d"],N={key:4,class:"vueperslides__bullets",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},L=["aria-label","onClick"],P={class:"default"},M={key:1,class:"vueperslides__bullets vueperslides__bullets--outside",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},U=["aria-label","onClick"],F={class:"default"},j=["innerHTML"],V=["innerHTML"];function B(e,t,n,o,a,c){const u=(0,r.up)("vnodes"),l=(0,r.up)("vueper-slide");return(0,r.wg)(),(0,r.iD)("div",{class:(0,i.C_)(["vueperslides",c.vueperslidesClasses]),ref:"vueperslides","aria-label":"Slideshow",style:(0,i.j5)(c.vueperslidesStyles)},[c.slidesCount&&"top"===c.conf.slideContentOutside?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,i.C_)(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-top",c.conf.slideContentOutsideClass])},[c.currentSlide.contentSlot?((0,r.wg)(),(0,r.j4)(u,{key:0,vnodes:c.currentSlide.contentSlot()},null,8,["vnodes"])):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[c.currentSlide.title?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"vueperslide__title",innerHTML:c.currentSlide.title},null,8,T)):(0,r.kq)("",!0),c.currentSlide.content?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"vueperslide__content",innerHTML:c.currentSlide.content},null,8,S)):(0,r.kq)("",!0)],64))],2)):(0,r.kq)("",!0),(0,r._)("div",I,[(0,r._)("div",{class:"vueperslides__parallax-wrapper",style:(0,i.j5)(`padding-bottom: ${100*c.conf.slideRatio}%`),"aria-live":"polite"},[(0,r._)("div",{class:(0,i.C_)(["vueperslides__track",{"vueperslides__track--dragging":e.touch.dragging,"vueperslides__track--mousedown":e.mouseDown}]),ref:"track",style:(0,i.j5)(c.trackStyles)},[(0,r._)("div",{class:"vueperslides__track-inner",style:(0,i.j5)(c.trackInnerStyles)},[(0,r.WI)(e.$slots,"default"),e.isReady&&c.conf.infinite&&c.canSlide&&c.lastSlide?((0,r.wg)(),(0,r.j4)(l,{key:0,class:"vueperslide--clone vueperslide--clone-1",clone:"",title:c.lastSlide.title,content:c.lastSlide.content,image:c.lastSlide.image,link:c.lastSlide.link,style:(0,i.j5)(c.lastSlide.style),lazyloaded:c.lastSlide.loaded,"aria-hidden":"true"},(0,r.Nv)({_:2},[c.lastSlide.contentSlot?{name:"content",fn:(0,r.w5)((()=>[(0,r.Wm)(u,{vnodes:c.lastSlide.contentSlot()},null,8,["vnodes"])])),key:"0"}:void 0,c.conf.lazy&&!c.lastSlide.loaded&&c.lastSlide.loaderSlot?{name:"loader",fn:(0,r.w5)((()=>[(0,r.Wm)(u,{vnodes:c.lastSlide.loaderSlot()},null,8,["vnodes"])])),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):(0,r.kq)("",!0),e.isReady&&c.conf.infinite&&c.canSlide&&c.firstSlide?((0,r.wg)(),(0,r.j4)(l,{key:1,class:"vueperslide--clone vueperslide--clone-2",clone:"",title:c.firstSlide.title,content:c.firstSlide.content,image:c.firstSlide.image,link:c.firstSlide.link,style:(0,i.j5)(c.firstSlide.style),lazyloaded:c.firstSlide.loaded,"aria-hidden":"true"},(0,r.Nv)({_:2},[c.firstSlide.contentSlot?{name:"content",fn:(0,r.w5)((()=>[(0,r.Wm)(u,{vnodes:c.firstSlide.contentSlot()},null,8,["vnodes"])])),key:"0"}:void 0,c.conf.lazy&&!c.firstSlide.loaded&&c.firstSlide.loaderSlot?{name:"loader",fn:(0,r.w5)((()=>[(0,r.Wm)(u,{vnodes:c.firstSlide.loaderSlot()},null,8,["vnodes"])])),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):(0,r.kq)("",!0)],4)],6)],4),(c.conf.pauseOnHover||c.conf.pauseOnTouch)&&e.$slots.pause?((0,r.wg)(),(0,r.iD)("div",k,[(0,r.WI)(e.$slots,"pause")])):(0,r.kq)("",!0),c.conf.progress?((0,r.wg)(),(0,r.iD)("div",C,[(0,r.WI)(e.$slots,"progress",{current:e.slides.current+1,total:c.slidesCount},(()=>[(0,r._)("div",{style:(0,i.j5)(`width: ${100*(e.slides.current+1)/c.slidesCount}%`)},null,4)]))])):(0,r.kq)("",!0),c.conf.fractions?((0,r.wg)(),(0,r.iD)("div",A,[(0,r.WI)(e.$slots,"fraction",{current:e.slides.current+1,total:c.slidesCount},(()=>[(0,r.Uk)((0,i.zw)(`${e.slides.current+1} / ${c.slidesCount}`),1)]))])):(0,r.kq)("",!0),c.conf.arrows&&c.canSlide&&!n.disable?((0,r.wg)(),(0,r.iD)("div",{key:3,class:(0,i.C_)(["vueperslides__arrows",{"vueperslides__arrows--outside":c.conf.arrowsOutside}])},[(0,r.wy)((0,r._)("button",{class:"vueperslides__arrow vueperslides__arrow--prev",type:"button",onClick:t[0]||(t[0]=e=>c.previous()),"aria-label":"Previous",onKeyup:[t[1]||(t[1]=(0,s.D2)((e=>c.conf.rtl?c.next():c.previous()),["left"])),t[2]||(t[2]=(0,s.D2)((e=>c.conf.rtl?c.previous():c.next()),["right"]))]},[(0,r.WI)(e.$slots,"arrow-"+(c.conf.rtl?"right":"left"),{},(()=>[((0,r.wg)(),(0,r.iD)("svg",R,[(0,r._)("path",{"stroke-linecap":"round",d:c.conf.rtl?"m1 1 l7 8 -7 8":"m8 1 l-7 8 7 8"},null,8,O)]))]))],544),[[s.F8,!c.arrowPrevDisabled]]),(0,r.wy)((0,r._)("button",{class:"vueperslides__arrow vueperslides__arrow--next",type:"button",onClick:t[3]||(t[3]=e=>c.next()),"aria-label":"Next",onKeyup:[t[4]||(t[4]=(0,s.D2)((e=>c.conf.rtl?c.next():c.previous()),["left"])),t[5]||(t[5]=(0,s.D2)((e=>c.conf.rtl?c.previous():c.next()),["right"]))]},[(0,r.WI)(e.$slots,"arrow-"+(c.conf.rtl?"left":"right"),{},(()=>[((0,r.wg)(),(0,r.iD)("svg",x,[(0,r._)("path",{"stroke-linecap":"round",d:c.conf.rtl?"m8 1 l-7 8 7 8":"m1 1 l7 8 -7 8"},null,8,D)]))]))],544),[[s.F8,!c.arrowNextDisabled]])],2)):(0,r.kq)("",!0),c.conf.bullets&&c.canSlide&&!n.disable&&!c.conf.bulletsOutside?((0,r.wg)(),(0,r.iD)("div",N,[(0,r.WI)(e.$slots,"bullets",{currentSlide:e.slides.current,bulletIndexes:c.bulletIndexes,goToSlide:c.goToSlide,previous:c.previous,next:c.next},(()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.bulletIndexes,((n,o)=>((0,r.wg)(),(0,r.iD)("button",{class:(0,i.C_)(["vueperslides__bullet",{"vueperslides__bullet--active":e.slides.current===n}]),type:"button",key:o,role:"tab","aria-label":`Slide ${o+1}`,onClick:e=>c.goToSlide(n),onKeyup:[t[6]||(t[6]=(0,s.D2)((e=>c.conf.rtl?c.next():c.previous()),["left"])),t[7]||(t[7]=(0,s.D2)((e=>c.conf.rtl?c.previous():c.next()),["right"]))]},[(0,r.WI)(e.$slots,"bullet",{active:e.slides.current===n,slideIndex:n,index:o+1},(()=>[(0,r._)("div",P,[(0,r._)("span",null,(0,i.zw)(o+1),1)])]))],42,L)))),128))]))],512)):(0,r.kq)("",!0)]),c.conf.bullets&&c.canSlide&&!n.disable&&c.conf.bulletsOutside?((0,r.wg)(),(0,r.iD)("div",M,[(0,r.WI)(e.$slots,"bullets",{currentSlide:e.slides.current,bulletIndexes:c.bulletIndexes,goToSlide:c.goToSlide,previous:c.previous,next:c.next},(()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.bulletIndexes,((n,o)=>((0,r.wg)(),(0,r.iD)("button",{class:(0,i.C_)(["vueperslides__bullet",{"vueperslides__bullet--active":e.slides.current===n}]),type:"button",key:o,role:"tab","aria-label":`Slide ${o+1}`,onClick:e=>c.goToSlide(n),onKeyup:[t[8]||(t[8]=(0,s.D2)((e=>c.conf.rtl?c.next():c.previous()),["left"])),t[9]||(t[9]=(0,s.D2)((e=>c.conf.rtl?c.previous():c.next()),["right"]))]},[(0,r.WI)(e.$slots,"bullet",{active:e.slides.current===n,slideIndex:n,index:o+1},(()=>[(0,r._)("div",F,[(0,r._)("span",null,(0,i.zw)(o+1),1)])]))],42,U)))),128))]))],512)):(0,r.kq)("",!0),c.slidesCount&&"bottom"===c.conf.slideContentOutside?((0,r.wg)(),(0,r.iD)("div",{key:2,class:(0,i.C_)(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom",c.conf.slideContentOutsideClass])},[c.currentSlide.contentSlot?((0,r.wg)(),(0,r.j4)(u,{key:0,vnodes:c.currentSlide.contentSlot()},null,8,["vnodes"])):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[c.currentSlide.title?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"vueperslide__title",innerHTML:c.currentSlide.title},null,8,j)):(0,r.kq)("",!0),c.currentSlide.content?((0,r.wg)(),(0,r.iD)("div",{key:1,class:"vueperslide__content",innerHTML:c.currentSlide.content},null,8,V)):(0,r.kq)("",!0)],64))],2)):(0,r.kq)("",!0)],6)}const q={name:"vueper-slides",components:{VueperSlide:E,vnodes:{render(){return this.$attrs.vnodes}}},provide(){return{conf:this.conf,slides:this.slides,touch:this.touch,updateSlide:this.updateSlide,addClone:this.addClone,addSlide:this.addSlide,removeSlide:this.removeSlide}},props:{alwaysRefreshClones:{type:Boolean,default:!1},arrows:{type:Boolean,default:!0},arrowsOutside:{type:Boolean,default:null},autoplay:{type:Boolean,default:!1},breakpoints:{type:Object,default:()=>({})},bullets:{type:Boolean,default:!0},bulletsOutside:{type:Boolean,default:null},disable:{type:Boolean,default:!1},disableArrowsOnEdges:{type:[Boolean,String],default:!1},draggingDistance:{type:Number,default:null},duration:{type:[Number,String],default:4e3},infinite:{type:Boolean,default:!0},fade:{type:Boolean,default:!1},fixedHeight:{type:[Boolean,String],default:!1},fractions:{type:Boolean,default:!1},gap:{type:Number,default:0},initSlide:{type:Number,default:1},lazy:{type:Boolean,default:!1},lazyLoadOnDrag:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},pauseOnTouch:{type:Boolean,default:!0},parallax:{type:[Boolean,Number],default:!1},pageScrollingElement:{type:String,default:""},parallaxFixedContent:{type:Boolean,default:!1},preventYScroll:{type:Boolean,default:!1},progress:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},slideContentOutside:{type:[Boolean,String],default:!1},slideContentOutsideClass:{type:String,default:""},slideImageInside:{type:Boolean,default:!1},slideMultiple:{type:[Boolean,Number],default:!1},slideRatio:{type:Number,default:1/3},touchable:{type:Boolean,default:!0},transitionSpeed:{type:[Number,String],default:600},visibleSlides:{type:Number,default:1},"3d":{type:Boolean,default:!1}},emits:["ready","next","previous","autoplay-pause","autoplay-resume","before-slide","slide","image-loaded","image-failed"],data:()=>({isReady:!1,isPaused:!1,container:null,slides:{list:[],activeId:null,current:0,focus:0,firstVisible:0},mouseDown:!1,mouseOver:!1,touch:{enabled:!0,dragging:!1,lazyloadTriggered:!1,justDragged:!1,dragStartX:0,dragNowX:0,dragAmount:0},transition:{currentTranslation:0,speed:0,animated:!1},autoplayTimer:null,nextSlideIsClone:!1,breakpointsData:{list:[],current:null},parallaxData:{translation:0,slideshowOffsetTop:null,isVisible:!1}}),computed:{conf(){const e={...this.$props,...this.$props.breakpoints&&this.$props.breakpoints[this.breakpointsData.current]||{}};return e.slideMultiple=e.slideMultiple?e.visibleSlides:1,e.gap=this.gap&&parseInt(this.gap)||0,e.visibleSlides>1&&(e["3d"]=!1),(e.fade||e.disableArrowsOnEdges||e.visibleSlides>1||e["3d"])&&(e.infinite=!1),e.visibleSlides>1&&null===e.arrowsOutside&&(e.arrowsOutside=!0),e.visibleSlides>1&&null===e.bulletsOutside&&(e.bulletsOutside=!0),this.touch.enabled!==e.touchable&&this.toggleTouchableOption(e.touchable),e.parallax&&e.parallaxFixedContent&&(e.slideContentOutside="top",e.slideContentOutsideClass="parallax-fixed-content"),e},slidesCount(){return this.slides.list.length},gapsCount(){const{fade:e,"3d":t,slideMultiple:n,gap:r}=this.conf;if(!r||e||t||this.multipleSlides1by1&&this.slides.current<this.preferredPosition)return 0;if(!this.slides.current&&this.nextSlideIsClone)return this.slidesCount;if(0===this.nextSlideIsClone)return-1;let i=this.slides.current/n-this.preferredPosition;return this.multipleSlides1by1&&this.slidePosAfterPreferred>0&&(i-=this.slidePosAfterPreferred),i},slidesAfterCurrent(){return this.slidesCount-(this.slides.current+1)},preferredPosition(){return this.multipleSlides1by1?Math.ceil(this.conf.visibleSlides/2)-1:0},slidePosAfterPreferred(){return this.conf.visibleSlides-this.preferredPosition-this.slidesAfterCurrent-1},multipleSlides1by1(){return this.conf.visibleSlides>1&&1===this.conf.slideMultiple},touchEnabled:{get(){return this.slidesCount>1&&this.touch.enabled},set(e){this.touch.enabled=e}},canSlide(){return this.slidesCount/this.conf.visibleSlides>1},firstSlide(){const e=this.slidesCount?this.slides.list[0]:{};return e.style&&"string"==typeof e.style&&(e.style=e.style.replace(/width: ?\d+.*?;?/,"")),e},lastSlide(){const e=this.slidesCount?this.slides.list[this.slidesCount-1]:{};return e.style&&"string"==typeof e.style&&(e.style=e.style.replace(/width: ?\d+.*?;?/,"")),e},currentSlide(){const e=this.slidesCount&&this.slides.list[this.slides.current]||{};return this.slides.current<this.slidesCount&&e.id!==this.slides.activeId&&this.goToSlide(this.slides.current,{animation:!1,autoPlaying:!0}),e},vueperslidesClasses(){return{"vueperslides--ready":this.isReady,"vueperslides--rtl":this.conf.rtl,"vueperslides--fade":this.conf.fade,"vueperslides--parallax":this.conf.parallax,"vueperslides--slide-image-inside":this.conf.slideImageInside,"vueperslides--touchable":this.touchEnabled&&!this.disable,"vueperslides--fixed-height":this.conf.fixedHeight,"vueperslides--3d":this.conf["3d"],"vueperslides--slide-multiple":this.conf.slideMultiple>1,"vueperslides--bullets-outside":this.conf.bulletsOutside,"vueperslides--animated":this.transition.animated,"vueperslides--no-animation":!this.isReady}},vueperslidesStyles(){return/^-?\d/.test(this.conf.fixedHeight)?`height: ${this.conf.fixedHeight}`:null},trackStyles(){const e={};return this.conf.parallax&&(e.transform=`translate3d(0, ${this.parallaxData.translation}%, 0)`,e.willChange=this.parallaxData.isVisible?"transform":"auto"),e},trackInnerStyles(){const e={},{fade:t,"3d":n}=this.conf;if(e.transitionDuration=`${this.transition.speed}ms`,n){const t=90*this.transition.currentTranslation/100;e.transform=`rotateY(-90deg) translateX(-50%) rotateY(90deg) rotateY(${t}deg)`}else t||(e.transform=`translate3d(${this.transition.currentTranslation}%, 0, 0)`,e.willChange=this.touch.dragging||this.transition.animated?"transform":"auto");return e},bulletIndexes(){return Array(Math.ceil(this.slidesCount/this.conf.slideMultiple)).fill().map(((e,t)=>t*this.conf.slideMultiple))},arrowPrevDisabled(){return!this.slides.current&&this.conf.disableArrowsOnEdges},arrowNextDisabled(){const{disableArrowsOnEdges:e,visibleSlides:t,slideMultiple:n}=this.conf;return this.slides.current+(n>1&&t>1?t-1:0)===this.slidesCount-1&&e}},methods:{init(){this.container=this.$refs.vueperslides,this.touchEnabled=this.conf.touchable,this.transition.speed=this.conf.transitionSpeed,Object.keys(this.breakpoints).length&&(this.setBreakpointsList(),this.setBreakpointConfig(this.getCurrentBreakpoint()));const e={animation:!1,autoPlaying:this.conf.autoplay};this.goToSlide(this.conf.initSlide-1,e),this.bindEvents(),this.$nextTick((()=>{this.isReady=!0,this.emit("ready")}))},emit(e,t=!0,n=!1){let r=null;if((t||"number"==typeof n)&&(r={},t&&this.slides.activeId&&this.slidesCount&&(r.currentSlide=this.getSlideData(this.slides.current)),"number"==typeof n&&this.slidesCount)){const{nextSlide:e}=this.getSlideInRange(n);r.nextSlide=this.getSlideData(e)}this.$emit(...r?[e,r]:[e])},getSlideData(e){const t=this.slides.list[e];let n={};return t&&(n={index:e,title:t.title,content:t.content,contentSlot:t.contentSlot,image:t.image,link:t.link}),n},setBreakpointsList(){this.breakpointsData.list=[99999,...Object.keys(this.breakpoints)].map((e=>parseInt(e))).sort(((e,t)=>parseInt(t)-parseInt(e)))},getCurrentBreakpoint(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t=[e,...this.breakpointsData.list].sort(((e,t)=>parseInt(t)-parseInt(e)));return this.breakpointsData.list[t.indexOf(e)-1]},hasBreakpointChanged(e){return this.breakpointsData.current!==parseInt(e)},setBreakpointConfig(e){const t=this.breakpoints&&this.breakpoints[e]||{},n=t.slideMultiple&&t.slideMultiple!==this.conf.slideMultiple,r=t.visibleSlides&&t.visibleSlides!==this.conf.visibleSlides;this.breakpointsData.current=e,this.slides.current=this.getFirstVisibleSlide(this.slides.focus),n||r?this.goToSlide(this.slides.current,{breakpointChange:!0}):this.updateTrackTranslation()},bindEvents(){const e="ontouchstart"in window;this.touchEnabled&&this.toggleTouchableOption(!0),this.conf.autoplay&&(this.conf.pauseOnHover&&!e?(this.container.addEventListener("mouseenter",this.onMouseEnter),this.container.addEventListener("mouseleave",this.onMouseLeave)):this.conf.pauseOnTouch&&e&&document.addEventListener("touchstart",(e=>{this[this.$el.contains(e.target)?"onSlideshowTouch":"onOustideTouch"]()}))),(this.breakpointsData.list.length||this.conf.parallax)&&window.addEventListener("resize",this.onResize),this.conf.parallax&&this.enableParallax()},getSlideshowOffsetTop(e=!1){if(null===this.parallaxData.slideshowOffsetTop||e){let e=this.container,t=e.offsetTop;for(;e=e.offsetParent;)t+=e.offsetTop;this.parallaxData.slideshowOffsetTop=t}return this.parallaxData.slideshowOffsetTop},enableParallax(){this.refreshParallax(),this.pageScrollingElement?(this.parallaxData.scrollingEl=document.querySelector(this.pageScrollingElement),this.parallaxData.scrollingEl.addEventListener("scroll",this.onScroll)):document.addEventListener("scroll",this.onScroll)},disableParallax(){(this.pageScrollingElement?document.querySelector(this.pageScrollingElement):document).removeEventListener("scroll",this.onScroll),this.parallaxData.scrollingEl=null,this.parallaxData.isVisible=!1,this.parallaxData.translation=0,this.parallaxData.slideshowOffsetTop=null},onScroll(){const{scrollingEl:e}=this.parallaxData,t=document.documentElement;let n=0;n=e?e.scrollTop:(window.pageYOffset||t.scrollTop)-(t.clientTop||0);const r=window.innerHeight||t.clientHeight||document.body.clientHeight,i=this.container.clientHeight,s=this.getSlideshowOffsetTop(),o=s+i-n,a=r+n-s;if(this.parallaxData.isVisible=o>0&&a>0,this.parallaxData.isVisible){const e=r+i,t=100*o/e,n=-1===this.conf.parallax?100-t:t;this.parallaxData.translation=-n/2}},onResize(){if(this.breakpointsData.list.length){const e=this.getCurrentBreakpoint();this.hasBreakpointChanged(e)&&this.setBreakpointConfig(e)}this.conf.parallax&&this.getSlideshowOffsetTop(!0)},onMouseEnter(){this.mouseOver=!0,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!0)},onMouseLeave(){this.mouseOver=!1,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!1)},onMouseDown(e){!this.touchEnabled||this.disable||(!e.touches&&this.preventYScroll&&e.preventDefault(),this.mouseDown=!0,this.touch.dragStartX=this.getCurrentMouseX(e),this.conf.draggingDistance||this.updateTrackTranslation(this.touch.dragStartX))},onMouseMove(e){if(this.mouseDown||this.touch.dragging)if(this.conf.autoplay&&(this.isPaused=!0),this.preventYScroll&&e.preventDefault(),this.mouseDown=!1,this.touch.dragging=!0,this.touch.dragNowX=this.getCurrentMouseX(e),this.conf.draggingDistance){this.touch.dragAmount=this.touch.dragNowX-this.touch.dragStartX;const e=this.touch.dragAmount/this.container.clientWidth;this.updateTrackTranslation(),this.transition.currentTranslation+=100*e}else this.updateTrackTranslation(this.touch.dragNowX)},onMouseUp(e){if(this.mouseDown=!1,!this.touch.dragging)return this.cancelSlideChange();this.conf.autoplay&&(("ontouchstart"in window||this.mouseOver)&&this.conf.pauseOnTouch||(this.isPaused=!1)),this.touch.dragging=!1;const t=this.conf.draggingDistance?-this.touch.dragAmount:0,n=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth,r=(this.touch.dragNowX-this.container.offsetLeft)/this.container.clientWidth,i=100*((n<.5?0:1)-r);let s=(t||i)>0;if(this.conf.rtl&&(s=!s),[Math.abs(t)<this.conf.draggingDistance,!this.conf.draggingDistance&&Math.abs(i)<50,this.arrowPrevDisabled&&!this.slides.current&&!s,this.arrowNextDisabled&&this.slides.current===this.slidesCount-1&&s].includes(!0))this.cancelSlideChange();else{const e=this.slides.current+this.conf.slideMultiple*(s?1:-1);this.emit(s?"next":"previous"),this.goToSlide(e)}this.touch.dragStartX=null,this.touch.dragNowX=null,this.touch.dragAmount=null,this.touch.justDragged=!0,setTimeout((()=>this.touch.justDragged=!1),50),this.touch.lazyloadTriggered=!1},onSlideshowTouch(){this.isPaused=!0},onOustideTouch(){this.isPaused=!1},justDragged(){return this.touch.justDragged},cancelSlideChange(){this.conf.fade||this.updateTrackTranslation()},getCurrentMouseX(e){return"ontouchstart"in window?e.touches[0].clientX:e.clientX},getBasicTranslation(){return this.slides.current/this.conf.visibleSlides},updateTrackTranslation(e=null){let t=this.getBasicTranslation();const{infinite:n,visibleSlides:r,slideMultiple:i,gap:s,"3d":o,lazy:a,lazyLoadOnDrag:c}=this.conf;if(n&&!1!==this.nextSlideIsClone&&(t=(this.nextSlideIsClone?this.slidesCount:-1)/r),s&&(t+=this.gapsCount/(r/i)*s/100),this.touch.dragStartX&&e&&(!n||!1===this.nextSlideIsClone)){let i=0;const s=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth;let u=(e-this.container.offsetLeft)/this.container.clientWidth;if(o){const e=Math.round(s)?[0,2]:[-1,1];u=Math.min(Math.max(u,e[0]),e[1])}if(i=(s<.5?0:1)-u,t+=i*(this.conf.rtl?-1:1),a&&c&&!this.touch.lazyloadTriggered){this.touch.lazyloadTriggered=!0;let e=this.slides.current+(i>0?1:-1)*r;n&&-1===e?e=this.slidesCount-1:n&&e===this.slidesCount&&(e=0);for(let t=0;t<r;t++){const n=this.slides.list[e+t];n&&!n.loaded&&this.loadSlide(n,e+t)}}}if(this.multipleSlides1by1&&!n){const e=this.slidePosAfterPreferred>0;let n=Math.min(this.preferredPosition,this.slides.current);e&&(n+=this.slidePosAfterPreferred),t-=n/r}this.transition.currentTranslation=100*-t*(this.conf.rtl?-1:1)},pauseAutoplay(){this.isPaused=!0,clearTimeout(this.autoplayTimer),this.autoplayTimer=0,this.emit("autoplay-pause")},resumeAutoplay(){this.isPaused=!1,this.doAutoplay(),this.emit("autoplay-resume")},doAutoplay(){clearTimeout(this.autoplayTimer),this.autoplayTimer=setTimeout((()=>{this.goToSlide(this.slides.current+this.conf.slideMultiple,{autoPlaying:!0})}),this.currentSlide.duration||this.conf.duration)},previous(e=!0){e&&this.emit("previous"),this.goToSlide(this.slides.current-this.conf.slideMultiple)},next(e=!0){e&&this.emit("next"),this.goToSlide(this.slides.current+this.conf.slideMultiple)},refreshParallax(){setTimeout((()=>{this.onResize(),this.onScroll()}),100)},getFirstVisibleSlide(e){const{slideMultiple:t,visibleSlides:n}=this.conf;let r=this.slides.current;return n>1&&t===n?r=Math.floor(e/n)*n:this.multipleSlides1by1&&(r=e-Math.min(e,this.preferredPosition)-Math.max(this.slidePosAfterPreferred,0)),r},getSlideInRange(e,t){let n=!1;this.conf.infinite&&-1===e?n=0:this.conf.infinite&&e===this.slidesCount&&(n=1);let r=(e+this.slidesCount)%this.slidesCount;if(this.conf.slideMultiple>1){const t=this.slidesCount%this.conf.slideMultiple||this.conf.slideMultiple,n=this.conf.slideMultiple-t;r+=e<0?n:0,r=this.getFirstVisibleSlide(r)}return this.conf.disableArrowsOnEdges&&(e<0||e>this.slidesCount-1)&&!t&&(r=this.slides.current),{nextSlide:r,clone:n}},goToSlide(e,{animation:t=!0,autoPlaying:n=!1,jumping:r=!1,breakpointChange:i=!1,emit:s=!0}={}){if(!this.slidesCount||this.disable)return;this.conf.autoplay&&!n&&!this.isPaused&&(this.isPaused=!0,this.$nextTick((()=>this.isPaused=!1))),this.transition.animated=t,setTimeout((()=>this.transition.animated=!1),this.transitionSpeed);const{nextSlide:o,clone:a}=this.getSlideInRange(e,n);if(this.nextSlideIsClone=a,!this.slides.list[o])return;if(this.conf.lazy)for(let u=0;u<this.conf.visibleSlides;u++){const e=this.slides.list[o+u];e&&!e.loaded&&this.loadSlide(e,o+u)}this.isReady&&!r&&s&&this.emit("before-slide",!0,o);const c=this.slides.list[o];if(this.isReady&&c.video){const e=this.slides.list[this.slides.current];e.video&&e.video.pause(),c.video.play()}if(!1!==a&&setTimeout((()=>{const t=-1===e&&this.slides.current!==this.slidesCount-1,n=e===this.slidesCount&&0!==this.slides.current;t||n||(this.transition.speed=0,this.goToSlide(a?0:this.slidesCount-1,{animation:!1,jumping:!0}),setTimeout((()=>this.transition.speed=this.conf.transitionSpeed),50))}),this.transition.speed-50),this.slides.current=o,this.slides.firstVisible=this.getFirstVisibleSlide(o),i||(this.slides.focus=o),this.conf.fade||this.updateTrackTranslation(),this.slides.activeId=this.slides.list[this.slides.current].id,this.conf.autoplay&&n&&!this.isPaused&&this.doAutoplay(),this.slidesCount&&(this.isReady&&!r&&s&&this.emit("slide"),this.isReady&&this.conf.bullets&&!n&&!r&&this.$refs.bullets)){const e=this.$refs.bullets.children,t=e&&e[this.slides.current/this.conf.slideMultiple];if(t&&"button"===t.nodeName.toLowerCase()){let e=document.documentElement;this.pageScrollingElement&&(e=document.querySelector(this.pageScrollingElement));const n=e.scrollTop;t.focus({preventScroll:!0}),e.scrollTop=n}}},addSlide(e){return this.slides.list.push(e),this.isReady&&1===this.slidesCount&&this.conf.autoplay&&this.isPaused&&(this.isPaused=!1),this.slidesCount},addClone(){return this.updateTrackTranslation(),this.slidesCount},updateSlide(e,t){let n=this.slides.list.find((t=>t.id===e));n&&(n=Object.assign(n,t))},removeSlide(e){const t=this.slides.list.findIndex((t=>t.id===e));t>-1&&(this.slides.list.splice(t,1),this.slidesCount&&e===this.slides.activeId&&this.goToSlide(t-1,{autoPlaying:!0})),this.slides.current>=this.slidesCount&&this.goToSlide(0,{autoPlaying:!0})},loadSlide(e,t){e.loadImage().then((n=>{const{image:r,style:i}=n;e.loaded=!0,e.image=r,e.style=i,this.$emit("image-loaded",this.getSlideData(t))}),(()=>{e.loaded=!1,this.$emit("image-failed",this.getSlideData(t))}))},toggleTouchableOption(e){const{track:t}=this.$refs;if(!t)return;this.touchEnabled=e;const n="ontouchstart"in window;e?(this.$refs.track.addEventListener(n?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.addEventListener(n?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.addEventListener(n?"touchend":"mouseup",this.onMouseUp,{passive:!0})):this.removeEventListeners()},removeEventListeners(){const e="ontouchstart"in window;this.$refs.track.removeEventListener(e?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.removeEventListener(e?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.removeEventListener(e?"touchend":"mouseup",this.onMouseUp,{passive:!0})}},watch:{isPaused(e){this[e?"pauseAutoplay":"resumeAutoplay"]()},parallax(e){this[e?"enableParallax":"disableParallax"]()}},mounted(){this.init()},beforeUnmount(){this.removeEventListeners(),this.conf.parallax&&this.disableParallax(),window.removeEventListener("resize",this.onResize),document.removeEventListener("touchstart",(e=>{this[this.$el.contains(e.target)?"onSlideshowTouch":"onOustideTouch"]()})),this.container.removeEventListener("mouseenter",this.onMouseEnter),this.container.removeEventListener("mouseleave",this.onMouseLeave)}},$=b(q,[["render",B]])},7077:function(e,t,n){"use strict";n.d(t,{Jn:function(){return ge},qX:function(){return he},Xd:function(){return le},Mq:function(){return ye},ZF:function(){return me},KN:function(){return ve}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function S(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function A(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}w((e=>({...e,get:(t,n,r)=>A(t,n)||e.get(t,n,r),has:(t,n)=>!!A(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const x="@firebase/app",D="0.8.3",N=new i.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",F="@firebase/app-check",j="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",z="@firebase/functions-compat",H="@firebase/installations",W="@firebase/installations-compat",K="@firebase/messaging",G="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Q="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.13.0",se="[DEFAULT]",oe={[x]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[F]:"fire-app-check",[U]:"fire-app-check-compat",[j]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[z]:"fire-fn-compat",[H]:"fire-iid",[W]:"fire-iid-compat",[K]:"fire-fcm",[G]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Q]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.LL("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=ie;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(o,u),u}function ye(e=se){const t=ae.get(e);if(!t&&e===se)return me();if(!t)throw fe.create("no-app",{appName:e});return t}function ve(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}le(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we="firebase-heartbeat-database",be=1,_e="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=S(we,be,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(_e)}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Se(e){var t;try{const t=await Te();return t.transaction(_e).objectStore(_e).get(ke(e))}catch(n){if(n instanceof s.ZR)N.warn(n.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});N.warn(e.message)}}}async function Ie(e,t){var n;try{const n=await Te(),r=n.transaction(_e,"readwrite"),i=r.objectStore(_e);return await i.put(t,ke(e)),r.done}catch(r){if(r instanceof s.ZR)N.warn(r.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});N.warn(e.message)}}}function ke(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=1024,Ae=2592e6;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Oe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ae})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Oe(),{heartbeatsToSend:t,unsentEntries:n}=xe(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Oe(){const e=new Date;return e.toISOString().substring(0,10)}function xe(e,t=Ce){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ne(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ne(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Se(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Ie(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ne(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(e){le(new r.wA("platform-logger",(e=>new R(e)),"PRIVATE")),le(new r.wA("heartbeat",(e=>new Re(e)),"PRIVATE")),ve(x,D,e),ve(x,D,"esm2017"),ve("fire-js","")}Le("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},70:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Ut}});n(3408),n(4590),n(7658);function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:s}=Object,o=(e=>t=>{const n=i.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=e=>(e=e.toLowerCase(),t=>o(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,l=c("undefined");function h(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const d=a("ArrayBuffer");function f(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t}const p=c("string"),g=c("function"),m=c("number"),y=e=>null!==e&&"object"===typeof e,v=e=>!0===e||!1===e,w=e=>{if("object"!==o(e))return!1;const t=s(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},b=a("Date"),_=a("File"),E=a("Blob"),T=a("FileList"),S=e=>y(e)&&g(e.pipe),I=e=>{const t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||i.call(e)===t||g(e.toString)&&e.toString()===t)},k=a("URLSearchParams"),C=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function A(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,i;if("object"!==typeof e&&(e=[e]),u(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function R(){const e={},t=(t,n)=>{w(e[n])&&w(t)?e[n]=R(e[n],t):w(t)?e[n]=R({},t):u(t)?e[n]=t.slice():e[n]=t};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&A(arguments[n],t);return e}const O=(e,t,n,{allOwnKeys:i}={})=>(A(t,((t,i)=>{n&&g(t)?e[i]=r(t,n):e[i]=t}),{allOwnKeys:i}),e),x=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),D=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},N=(e,t,n,r)=>{let i,o,a;const c={};if(t=t||{},null==e)return t;do{i=Object.getOwnPropertyNames(e),o=i.length;while(o-- >0)a=i[o],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},L=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},P=e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},M=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&s(Uint8Array)),U=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let i;while((i=r.next())&&!i.done){const n=i.value;t.call(e,n[0],n[1])}},F=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},j=a("HTMLFormElement"),V=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),B=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),q=a("RegExp"),$=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};A(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},z=e=>{$(e,((t,n)=>{const r=e[n];g(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")}))}))},H=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},W=()=>{},K=(e,t)=>(e=+e,Number.isFinite(e)?e:t);var G={isArray:u,isArrayBuffer:d,isBuffer:h,isFormData:I,isArrayBufferView:f,isString:p,isNumber:m,isBoolean:v,isObject:y,isPlainObject:w,isUndefined:l,isDate:b,isFile:_,isBlob:E,isRegExp:q,isFunction:g,isStream:S,isURLSearchParams:k,isTypedArray:M,isFileList:T,forEach:A,merge:R,extend:O,trim:C,stripBOM:x,inherits:D,toFlatObject:N,kindOf:o,kindOfTest:a,endsWith:L,toArray:P,forEachEntry:U,matchAll:F,isHTMLForm:j,hasOwnProperty:B,hasOwnProp:B,reduceDescriptors:$,freezeMethods:z,toObjectSet:H,toCamelCase:V,noop:W,toFiniteNumber:K};n(541);function J(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}G.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const X=J.prototype,Q={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Q[e]={value:e}})),Object.defineProperties(J,Q),Object.defineProperty(X,"isAxiosError",{value:!0}),J.from=(e,t,n,r,i,s)=>{const o=Object.create(X);return G.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),J.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var Y=J,Z=n(6237),ee=Z;function te(e){return G.isPlainObject(e)||G.isArray(e)}function ne(e){return G.endsWith(e,"[]")?e.slice(0,-2):e}function re(e,t,n){return e?e.concat(t).map((function(e,t){return e=ne(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function ie(e){return G.isArray(e)&&!e.some(te)}const se=G.toFlatObject(G,{},null,(function(e){return/^is[A-Z]/.test(e)}));function oe(e){return e&&G.isFunction(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator]}function ae(e,t,n){if(!G.isObject(e))throw new TypeError("target must be an object");t=t||new(ee||FormData),n=G.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!G.isUndefined(t[e])}));const r=n.metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&oe(t);if(!G.isFunction(i))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(G.isDate(e))return e.toISOString();if(!c&&G.isBlob(e))throw new Y("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(e)||G.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let a=e;if(e&&!i&&"object"===typeof e)if(G.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(G.isArray(e)&&ie(e)||G.isFileList(e)||G.endsWith(n,"[]")&&(a=G.toArray(e)))return n=ne(n),a.forEach((function(e,r){!G.isUndefined(e)&&null!==e&&t.append(!0===o?re([n],r,s):null===o?n:n+"[]",u(e))})),!1;return!!te(e)||(t.append(re(i,n,s),u(e)),!1)}const h=[],d=Object.assign(se,{defaultVisitor:l,convertValue:u,isVisitable:te});function f(e,n){if(!G.isUndefined(e)){if(-1!==h.indexOf(e))throw Error("Circular reference detected in "+n.join("."));h.push(e),G.forEach(e,(function(e,r){const s=!(G.isUndefined(e)||null===e)&&i.call(t,e,G.isString(r)?r.trim():r,n,d);!0===s&&f(e,n?n.concat(r):[r])})),h.pop()}}if(!G.isObject(e))throw new TypeError("data must be an object");return f(e),t}var ce=ae;function ue(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function le(e,t){this._pairs=[],e&&ce(e,this,t)}const he=le.prototype;he.append=function(e,t){this._pairs.push([e,t])},he.toString=function(e){const t=e?function(t){return e.call(this,t,ue)}:ue;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var de=le;function fe(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pe(e,t,n){if(!t)return e;const r=n&&n.encode||fe,i=n&&n.serialize;let s;if(s=i?i(t,n):G.isURLSearchParams(t)?t.toString():new de(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}class ge{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){G.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var me=ge,ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ve="undefined"!==typeof URLSearchParams?URLSearchParams:de,we=FormData;const be=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})();var _e={isBrowser:!0,classes:{URLSearchParams:ve,FormData:we,Blob:Blob},isStandardBrowserEnv:be,protocols:["http","https","file","blob","url","data"]};function Ee(e,t){return ce(e,new _e.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return _e.isNode&&G.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Te(e){return G.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Se(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function Ie(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&G.isArray(r)?r.length:s,a)return G.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&G.isObject(r[s])||(r[s]=[]);const c=t(e,n,r[s],i);return c&&G.isArray(r[s])&&(r[s]=Se(r[s])),!o}if(G.isFormData(e)&&G.isFunction(e.entries)){const n={};return G.forEachEntry(e,((e,r)=>{t(Te(e),r,n,0)})),n}return null}var ke=Ie;n(2801);function Ce(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Y("Request failed with status code "+n.status,[Y.ERR_BAD_REQUEST,Y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Ae=_e.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),G.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),G.isString(r)&&o.push("path="+r),G.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Re(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Oe(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function xe(e,t){return e&&!Re(t)?Oe(e,t):t}var De=_e.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=G.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function Ne(e,t,n){Y.call(this,null==e?"canceled":e,Y.ERR_CANCELED,t,n),this.name="CanceledError"}G.inherits(Ne,Y,{__CANCEL__:!0});var Le=Ne;function Pe(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const Me=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ue=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&Me[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Fe=Symbol("internals"),je=Symbol("defaults");function Ve(e){return e&&String(e).trim().toLowerCase()}function Be(e){return!1===e||null==e?e:G.isArray(e)?e.map(Be):String(e)}function qe(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}function $e(e,t,n,r){return G.isFunction(r)?r.call(this,t,n):G.isString(t)?G.isString(r)?-1!==t.indexOf(r):G.isRegExp(r)?r.test(t):void 0:void 0}function ze(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function He(e,t){const n=G.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}function We(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;while(i-- >0)if(r=n[i],t===r.toLowerCase())return r;return null}function Ke(e,t){e&&this.set(e),this[je]=t||null}Object.assign(Ke.prototype,{set:function(e,t,n){const r=this;function i(e,t,n){const i=Ve(t);if(!i)throw new Error("header name must be a non-empty string");const s=We(r,i);(!s||!0===n||!1!==r[s]&&!1!==n)&&(r[s||t]=Be(e))}return G.isPlainObject(e)?G.forEach(e,((e,n)=>{i(e,n,t)})):i(t,e,n),this},get:function(e,t){if(e=Ve(e),!e)return;const n=We(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return qe(e);if(G.isFunction(t))return t.call(this,e,n);if(G.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=Ve(e),e){const n=We(this,e);return!(!n||t&&!$e(this,this[n],n,t))}return!1},delete:function(e,t){const n=this;let r=!1;function i(e){if(e=Ve(e),e){const i=We(n,e);!i||t&&!$e(n,n[i],i,t)||(delete n[i],r=!0)}}return G.isArray(e)?e.forEach(i):i(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return G.forEach(this,((r,i)=>{const s=We(n,i);if(s)return t[s]=Be(r),void delete t[i];const o=e?ze(i):String(i).trim();o!==i&&delete t[i],t[o]=Be(r),n[o]=!0})),this},toJSON:function(e){const t=Object.create(null);return G.forEach(Object.assign({},this[je]||null,this),((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&G.isArray(n)?n.join(", "):n)})),t}}),Object.assign(Ke,{from:function(e){return G.isString(e)?new this(Ue(e)):e instanceof this?e:new this(e)},accessor:function(e){const t=this[Fe]=this[Fe]={accessors:{}},n=t.accessors,r=this.prototype;function i(e){const t=Ve(e);n[t]||(He(r,e),n[t]=!0)}return G.isArray(e)?e.forEach(i):i(e),this}}),Ke.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),G.freezeMethods(Ke.prototype),G.freezeMethods(Ke);var Ge=Ke;function Je(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;while(l!==s)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}}var Xe=Je;function Qe(e,t){let n=0;const r=Xe(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a),u=s<=o;n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0};l[t?"download":"upload"]=!0,e(l)}}function Ye(e){return new Promise((function(t,n){let r=e.data;const i=Ge.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}G.isFormData(r)&&_e.isStandardBrowserEnv&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const u=xe(e.baseURL,e.url);function l(){if(!c)return;const r=Ge.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?c.response:c.responseText,o={data:i,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};Ce((function(e){t(e),a()}),(function(e){n(e),a()}),o),c=null}if(c.open(e.method.toUpperCase(),pe(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new Y("Request aborted",Y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new Y("Network Error",Y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||ye;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Y(t,r.clarifyTimeoutError?Y.ETIMEDOUT:Y.ECONNABORTED,e,c)),c=null},_e.isStandardBrowserEnv){const t=(e.withCredentials||De(u))&&e.xsrfCookieName&&Ae.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&G.forEach(i.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),G.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&c.addEventListener("progress",Qe(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Qe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new Le(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=Pe(u);h&&-1===_e.protocols.indexOf(h)?n(new Y("Unsupported protocol "+h+":",Y.ERR_BAD_REQUEST,e)):c.send(r||null)}))}const Ze={http:Ye,xhr:Ye};var et={getAdapter:e=>{if(G.isString(e)){const t=Ze[e];if(!e)throw Error(G.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!G.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:Ze};const tt={"Content-Type":"application/x-www-form-urlencoded"};function nt(){let e;return"undefined"!==typeof XMLHttpRequest?e=et.getAdapter("xhr"):"undefined"!==typeof process&&"process"===G.kindOf(process)&&(e=et.getAdapter("http")),e}function rt(e,t,n){if(G.isString(e))try{return(t||JSON.parse)(e),G.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const it={transitional:ye,adapter:nt(),transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=G.isObject(e);i&&G.isHTMLForm(e)&&(e=new FormData(e));const s=G.isFormData(e);if(s)return r&&r?JSON.stringify(ke(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Ee(e,this.formSerializer).toString();if((o=G.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ce(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),rt(e)):e}],transformResponse:[function(e){const t=this.transitional||it.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&G.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,s=!n&&r;try{return JSON.parse(e)}catch(i){if(s){if("SyntaxError"===i.name)throw Y.from(i,Y.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_e.classes.FormData,Blob:_e.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};G.forEach(["delete","get","head"],(function(e){it.headers[e]={}})),G.forEach(["post","put","patch"],(function(e){it.headers[e]=G.merge(tt)}));var st=it;function ot(e,t){const n=this||st,r=t||n,i=Ge.from(r.headers);let s=r.data;return G.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function at(e){return!(!e||!e.__CANCEL__)}function ct(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Le}function ut(e){ct(e),e.headers=Ge.from(e.headers),e.data=ot.call(e,e.transformRequest);const t=e.adapter||st.adapter;return t(e).then((function(t){return ct(e),t.data=ot.call(e,e.transformResponse,t),t.headers=Ge.from(t.headers),t}),(function(t){return at(t)||(ct(e),t&&t.response&&(t.response.data=ot.call(e,e.transformResponse,t.response),t.response.headers=Ge.from(t.response.headers))),Promise.reject(t)}))}function lt(e,t){t=t||{};const n={};function r(e,t){return G.isPlainObject(e)&&G.isPlainObject(t)?G.merge(e,t):G.isPlainObject(t)?G.merge({},t):G.isArray(t)?t.slice():t}function i(n){return G.isUndefined(t[n])?G.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!G.isUndefined(t[e]))return r(void 0,t[e])}function o(n){return G.isUndefined(t[n])?G.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a};return G.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){const t=c[e]||i,r=t(e);G.isUndefined(r)&&t!==a||(n[e]=r)})),n}const ht="1.1.3",dt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{dt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ft={};function pt(e,t,n){if("object"!==typeof e)throw new Y("options must be an object",Y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;while(i-- >0){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new Y("option "+s+" must be "+n,Y.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Y("Unknown option "+s,Y.ERR_BAD_OPTION)}}dt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+ht+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new Y(r(i," has been removed"+(t?" in "+t:"")),Y.ERR_DEPRECATED);return t&&!ft[i]&&(ft[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var gt={assertOptions:pt,validators:dt};const mt=gt.validators;class yt{constructor(e){this.defaults=e,this.interceptors={request:new me,response:new me}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=lt(this.defaults,t);const{transitional:n,paramsSerializer:r}=t;void 0!==n&&gt.assertOptions(n,{silentJSONParsing:mt.transitional(mt.boolean),forcedJSONParsing:mt.transitional(mt.boolean),clarifyTimeoutError:mt.transitional(mt.boolean)},!1),void 0!==r&&gt.assertOptions(r,{encode:mt.function,serialize:mt.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();const i=t.headers&&G.merge(t.headers.common,t.headers[t.method]);i&&G.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),t.headers=new Ge(t.headers,i);const s=[];let o=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const a=[];let c;this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)}));let u,l=0;if(!o){const e=[ut.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,a),u=e.length,c=Promise.resolve(t);while(l<u)c=c.then(e[l++],e[l++]);return c}u=s.length;let h=t;l=0;while(l<u){const e=s[l++],t=s[l++];try{h=e(h)}catch(d){t.call(this,d);break}}try{c=ut.call(this,h)}catch(d){return Promise.reject(d)}l=0,u=a.length;while(l<u)c=c.then(a[l++],a[l++]);return c}getUri(e){e=lt(this.defaults,e);const t=xe(e.baseURL,e.url);return pe(t,e.params,e.paramsSerializer)}}G.forEach(["delete","get","head","options"],(function(e){yt.prototype[e]=function(t,n){return this.request(lt(n||{},{method:e,url:t,data:(n||{}).data}))}})),G.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(lt(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}yt.prototype[e]=t(),yt.prototype[e+"Form"]=t(!0)}));var vt=yt;class wt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new Le(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new wt((function(t){e=t}));return{token:t,cancel:e}}}var bt=wt;function _t(e){return function(t){return e.apply(null,t)}}function Et(e){return G.isObject(e)&&!0===e.isAxiosError}function Tt(e){const t=new vt(e),n=r(vt.prototype.request,t);return G.extend(n,vt.prototype,t,{allOwnKeys:!0}),G.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Tt(lt(e,t))},n}const St=Tt(st);St.Axios=vt,St.CanceledError=Le,St.CancelToken=bt,St.isCancel=at,St.VERSION=ht,St.toFormData=ce,St.AxiosError=Y,St.Cancel=St.CanceledError,St.all=function(e){return Promise.all(e)},St.spread=_t,St.isAxiosError=Et,St.formToJSON=e=>ke(G.isHTMLForm(e)?new FormData(e):e);var It=St;const{Axios:kt,AxiosError:Ct,CanceledError:At,isCancel:Rt,CancelToken:Ot,VERSION:xt,all:Dt,Cancel:Nt,isAxiosError:Lt,spread:Pt,toFormData:Mt}=It;var Ut=It},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return j},p7:function(){return tt}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function g(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(t.matched[r],n.matched[i])&&v(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function v(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?b(e,t):l(t)?b(t,e):e===t}function b(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,T;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(T||(T={}));function S(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const I=/^[^#]+#/;function k(e,t){return e.replace(I,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=C(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function O(e,t){const n=history.state?history.state.position-t:-1;return n+e}const x=new Map;function D(e,t){x.set(e,t)}function N(e){const t=x.get(e);return x.delete(e),t}let L=()=>location.protocol+"//"+location.host;function P(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,e);return o+r+i}function M(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=P(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:A()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function U(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function F(e){const{history:t,location:n}=window,r={value:P(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:L()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,U(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:A()});s(o.current,o,!0);const c=a({},U(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function j(e){e=S(e);const t=F(e),n=M(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V(e){return"string"===typeof e||e&&"object"===typeof e}function B(e){return"string"===typeof e||"symbol"===typeof e}const q={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var z;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(z||(z={}));function H(e,t){return a(new Error,{type:e,[$]:!0},t)}function W(e,t){return e instanceof Error&&$ in e&&(null==t||!!(e.type&t))}const K="[^/]+?",G={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function X(e,t){const n=a({},G,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||K;if(l!==K){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Q(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Y(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Q(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function re(e,t,n){const r=X(ne(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=oe(e);c.aliasOf=r&&r.record;const h=le(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=re(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ce(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(B(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&Y(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw H(1,{location:e});0,o=i.record.name,c=a(se(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw H(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:ue(u)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function se(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function oe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const de=/#/g,fe=/&/g,pe=/\//g,ge=/=/g,me=/\?/g,ye=/\+/g,ve=/%5B/g,we=/%5D/g,be=/%5E/g,_e=/%60/g,Ee=/%7B/g,Te=/%7C/g,Se=/%7D/g,Ie=/%20/g;function ke(e){return encodeURI(""+e).replace(Te,"|").replace(ve,"[").replace(we,"]")}function Ce(e){return ke(e).replace(Ee,"{").replace(Se,"}").replace(be,"^")}function Ae(e){return ke(e).replace(ye,"%2B").replace(Ie,"+").replace(de,"%23").replace(fe,"%26").replace(_e,"`").replace(Ee,"{").replace(Se,"}").replace(be,"^")}function Re(e){return Ae(e).replace(ge,"%3D")}function Oe(e){return ke(e).replace(de,"%23").replace(me,"%3F")}function xe(e){return null==e?"":Oe(e).replace(pe,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ne(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=De(n<0?e:e.slice(0,n)),o=n<0?null:De(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Pe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),Ue=Symbol(""),Fe=Symbol(""),je=Symbol(""),Ve=Symbol("");function Be(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qe(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(H(4,{from:n,to:t})):e instanceof Error?a(e):V(e)?a(H(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function $e(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push(qe(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&qe(u,n,r,s,e)()}))))}}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.f3)(Fe),n=(0,r.f3)(je),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function l(n={}){return Ge(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const We=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.qj)(He(e)),{options:s}=(0,r.f3)(Fe),o=(0,r.Fl)((()=>({[Qe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ke=We;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qe=(e,t,n)=>null!=e?e:null!=t?t:n,Ye=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(Ve),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Ue,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ue,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Me,l),(0,r.JJ)(Ve,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&y(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return Ze(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:g,route:i})||g}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ye;function tt(e){const t=ie(e.routes,e),n=e.parseQuery||Ne,o=e.stringifyQuery||Le,h=e.history;const d=Be(),g=Be(),y=Be(),v=(0,i.XI)(q);let w=q;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),_=c.bind(null,xe),T=c.bind(null,De);function S(e,n){let r,i;return B(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=a({},r||v.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:De(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(e.params)}),r.params=_(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=b(T(s.params));const u=p(o,a({},e,{hash:Ce(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Le?Pe(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function L(e){return"string"===typeof e?f(n,e,v.value.path):a({},e)}function P(e,t){if(w!==e)return H(8,{from:t,to:e})}function M(e){return j(e)}function U(e){return M(a(L(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function j(e,t){const n=w=x(e),r=v.value,i=e.state,s=e.force,c=!0===e.replace,u=F(n);if(u)return j(a(L(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&m(o,r,n)&&(h=H(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):$(l,r)).catch((e=>W(e)?W(e,2)?e:te(e):Z(e,l,r))).then((e=>{if(e){if(W(e,2))return j(a({replace:c},L(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=K(l,r,!0,c,i);return z(l,r,e),e}))}function V(e,t){const n=P(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,i,s]=rt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=V.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),nt(n)})).then((()=>{n=$e(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=$e(s,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of g.list())n.push(qe(r,e,t));return n.push(o),nt(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of y.list())r(e,t,n)}function K(e,t,n,r,i){const o=P(e,t);if(o)return o;const c=t===q,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),v.value=e,ne(e,t,n,c),te()}let G;function J(){G||(G=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=x(e),i=F(r);if(i)return void j(a(i,{replace:!0}),r).catch(u);w=r;const o=v.value;s&&D(O(o.fullPath,n.delta),A()),$(r,o).catch((e=>W(e,12)?e:W(e,2)?(j(e.to,r).then((e=>{W(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||K(r,o,!1),e&&(n.delta&&!W(e,8)?h.go(-n.delta,!1):n.type===E.pop&&W(e,20)&&h.go(-1,!1)),z(r,o,e)})).catch(u)})))}let X,Q=Be(),Y=Be();function Z(e,t,n){te(e);const r=Y.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return X&&v.value!==q?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function te(e){return X||(X=!e,J(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&N(O(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&R(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let se;const oe=new Set,ae={currentRoute:v,listening:!0,addRoute:S,removeRoute:I,hasRoute:C,getRoutes:k,resolve:x,options:e,push:M,replace:U,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:g.add,afterEach:y.add,onError:Y.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ke),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!se&&v.value===q&&(se=!0,M(h.location).catch((e=>{0})));const n={};for(const i in q)n[i]=(0,r.Fl)((()=>v.value[i]));e.provide(Fe,t),e.provide(je,(0,i.qj)(n)),e.provide(Ve,v);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(w=q,G&&G(),G=null,v.value=q,se=!1,X=!1),o()}}};return ae}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>y(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>y(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.09ba6c30.js.map