(self["webpackChunktechnovium_unlimited"]=self["webpackChunktechnovium_unlimited"]||[]).push([[617],{3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,o,i,s=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),f=n(2597),d=n(648),p=n(6330),h=n(8880),m=n(8052),y=n(7045),g=n(7976),w=n(9518),b=n(7674),A=n(5112),E=n(9711),v=n(9909),O=v.enforce,R=v.get,S=c.Int8Array,T=S&&S.prototype,_=c.Uint8ClampedArray,C=_&&_.prototype,N=S&&w(S),x=T&&w(T),P=Object.prototype,j=c.TypeError,U=A("toStringTag"),B=E("TYPED_ARRAY_TAG"),D="TypedArrayConstructor",F=s&&!!b&&"Opera"!==d(c.opera),k=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},I={BigInt64Array:8,BigUint64Array:8},z=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||f(L,t)||f(I,t)},q=function(e){var t=w(e);if(l(t)){var n=R(t);return n&&f(n,D)?n[D]:q(t)}},M=function(e){if(!l(e))return!1;var t=d(e);return f(L,t)||f(I,t)},H=function(e){if(M(e))return e;throw j("Target is not a typed array")},K=function(e){if(u(e)&&(!b||g(N,e)))return e;throw j(p(e)+" is not a typed array constructor")},V=function(e,t,n,r){if(a){if(n)for(var o in L){var i=c[o];if(i&&f(i.prototype,e))try{delete i.prototype[e]}catch(s){try{i.prototype[e]=t}catch(u){}}}x[e]&&!n||m(x,e,n?t:F&&T[e]||t,r)}},J=function(e,t,n){var r,o;if(a){if(b){if(n)for(r in L)if(o=c[r],o&&f(o,e))try{delete o[e]}catch(i){}if(N[e]&&!n)return;try{return m(N,e,n?t:F&&N[e]||t)}catch(i){}}for(r in L)o=c[r],!o||o[e]&&!n||m(o,e,t)}};for(r in L)o=c[r],i=o&&o.prototype,i?O(i)[D]=o:F=!1;for(r in I)o=c[r],i=o&&o.prototype,i&&(O(i)[D]=o);if((!F||!u(N)||N===Function.prototype)&&(N=function(){throw j("Incorrect invocation")},F))for(r in L)c[r]&&b(c[r],N);if((!F||!x||x===P)&&(x=N.prototype,F))for(r in L)c[r]&&b(c[r].prototype,x);if(F&&w(C)!==x&&b(C,x),a&&!f(x,U))for(r in k=!0,y(x,U,{configurable:!0,get:function(){return l(this)?this[B]:void 0}}),L)c[r]&&h(c[r],B,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:k&&B,aTypedArray:H,aTypedArrayConstructor:K,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:J,getTypedArrayConstructor:q,isView:z,isTypedArray:M,TypedArray:N,TypedArrayPrototype:x}},7745:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,o=r(t),i=new e(o);while(o>n)i[n]=t[n++];return i}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),o=new t(n),i=0;i<n;i++)o[i]=e[n-i-1];return o}},1572:function(e,t,n){var r=n(6244),o=n(9303),i=RangeError;e.exports=function(e,t,n,s){var a=r(e),c=o(n),u=c<0?a+c:c;if(u>=a||u<0)throw i("Incorrect index");for(var l=new t(a),f=0;f<a;f++)l[f]=f===u?s:e[f];return l}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},4067:function(e,t,n){var r=n(648);e.exports=function(e){var t=r(e);return"BigInt64Array"==t||"BigUint64Array"==t}},9518:function(e,t,n){var r=n(2597),o=n(614),i=n(7908),s=n(6200),a=n(8544),c=s("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=i(e);if(r(t,c))return t[c];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},4599:function(e,t,n){var r=n(7593),o=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw o("Can't convert number to bigint");return BigInt(t)}},1439:function(e,t,n){"use strict";var r=n(1843),o=n(260),i=o.aTypedArray,s=o.exportTypedArrayMethod,a=o.getTypedArrayConstructor;s("toReversed",(function(){return r(i(this),a(this))}))},7585:function(e,t,n){"use strict";var r=n(260),o=n(1702),i=n(9662),s=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=o(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&i(e);var t=a(this),n=s(c(t),t);return l(n,e)}))},5315:function(e,t,n){"use strict";var r=n(1572),o=n(260),i=n(4067),s=n(9303),a=n(4599),c=o.aTypedArray,u=o.getTypedArrayConstructor,l=o.exportTypedArrayMethod,f=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),o=s(e),l=i(n)?a(t):+t;return r(n,u(n),o,l)}}["with"],!f)},3593:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Rn}});n(7658);var r=n(3396),o=n(7139),i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABeUlEQVRoge2ZPS8EURRA70NE46NAR6ISJEqFRiOR+BFKndhO6y8otUotqk00OgUqUYpEt1Qam3AUmyt2Mzv7ZszOnZvMaWezOWdmZ/a+NyI1NTWpAE1gzdojN3RoA6fArLVPZujmDTgERq29oiGZR2DH2i2KPgHKBbBk7ZjKgACAT+AEmLR2TSQiQHkF9oERa+cuMgQot8CmtfcvOQIAvoFzYNHaP2+A8gEcAxNeA5QXYM9zgHINrHsOAPgCzoB5rwHKO3AEjHsNUJ6AXc8BShNYzepXpX/NbRF5oDOWTBf2rSVegb+0iBzbQ0xAMaciF3ci0ggh3PT7QNUDlEsROQghPPceqNI9kIsxa4EBDPwJVfUKtESkISIbafJRlPz0adN5jE4VchpKDmgCK4WJlxjgdpRwO8zpOD03VPEhBbhd0LhdUrpd1Ou2yoKZ+D8C3G5sud1adL2563Z7/R7YsnaLokfc7SsmHXNnrH0yA1wBy9YeNTU1yfwACDZt4BcYn0cAAAAASUVORK5CYII=",s=n.p+"media/play.fddcebd7.mp4";n(1439),n(7585),n(5315);function a(e,t){return function(){return e.apply(t,arguments)}}const{toString:c}=Object.prototype,{getPrototypeOf:u}=Object,l=(e=>t=>{const n=c.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),f=e=>(e=e.toLowerCase(),t=>l(t)===e),d=e=>t=>typeof t===e,{isArray:p}=Array,h=d("undefined");function m(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&b(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const y=f("ArrayBuffer");function g(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&y(e.buffer),t}const w=d("string"),b=d("function"),A=d("number"),E=e=>null!==e&&"object"===typeof e,v=e=>!0===e||!1===e,O=e=>{if("object"!==l(e))return!1;const t=u(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},R=f("Date"),S=f("File"),T=f("Blob"),_=f("FileList"),C=e=>E(e)&&b(e.pipe),N=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||b(e.append)&&("formdata"===(t=l(e))||"object"===t&&b(e.toString)&&"[object FormData]"===e.toString()))},x=f("URLSearchParams"),P=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),p(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function U(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const B=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),D=e=>!h(e)&&e!==B;function F(){const{caseless:e}=D(this)&&this||{},t={},n=(n,r)=>{const o=e&&U(t,r)||r;O(t[o])&&O(n)?t[o]=F(t[o],n):O(n)?t[o]=F({},n):p(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&j(arguments[r],n);return t}const k=(e,t,n,{allOwnKeys:r}={})=>(j(t,((t,r)=>{n&&b(t)?e[r]=a(t,n):e[r]=t}),{allOwnKeys:r}),e),L=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),I=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},z=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),i=o.length;while(i-- >0)s=o[i],r&&!r(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&u(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},q=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},M=e=>{if(!e)return null;if(p(e))return e;let t=e.length;if(!A(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},H=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&u(Uint8Array)),K=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},V=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},J=f("HTMLFormElement"),W=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),G=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Y=f("RegExp"),Q=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},Z=e=>{Q(e,((t,n)=>{if(b(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];b(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},X=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return p(e)?r(e):r(String(e).split(t)),n},$=()=>{},ee=(e,t)=>(e=+e,Number.isFinite(e)?e:t),te="abcdefghijklmnopqrstuvwxyz",ne="0123456789",re={DIGIT:ne,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+ne},oe=(e=16,t=re.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function ie(e){return!!(e&&b(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const se=e=>{const t=new Array(10),n=(e,r)=>{if(E(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=p(e)?[]:{};return j(e,((e,t)=>{const i=n(e,r+1);!h(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},ae=f("AsyncFunction"),ce=e=>e&&(E(e)||b(e))&&b(e.then)&&b(e.catch);var ue={isArray:p,isArrayBuffer:y,isBuffer:m,isFormData:N,isArrayBufferView:g,isString:w,isNumber:A,isBoolean:v,isObject:E,isPlainObject:O,isUndefined:h,isDate:R,isFile:S,isBlob:T,isRegExp:Y,isFunction:b,isStream:C,isURLSearchParams:x,isTypedArray:H,isFileList:_,forEach:j,merge:F,extend:k,trim:P,stripBOM:L,inherits:I,toFlatObject:z,kindOf:l,kindOfTest:f,endsWith:q,toArray:M,forEachEntry:K,matchAll:V,isHTMLForm:J,hasOwnProperty:G,hasOwnProp:G,reduceDescriptors:Q,freezeMethods:Z,toObjectSet:X,toCamelCase:W,noop:$,toFiniteNumber:ee,findKey:U,global:B,isContextDefined:D,ALPHABET:re,generateString:oe,isSpecCompliantForm:ie,toJSONObject:se,isAsyncFn:ae,isThenable:ce};function le(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ue.inherits(le,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ue.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fe=le.prototype,de={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{de[e]={value:e}})),Object.defineProperties(le,de),Object.defineProperty(fe,"isAxiosError",{value:!0}),le.from=(e,t,n,r,o,i)=>{const s=Object.create(fe);return ue.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),le.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var pe=le,he=null;function me(e){return ue.isPlainObject(e)||ue.isArray(e)}function ye(e){return ue.endsWith(e,"[]")?e.slice(0,-2):e}function ge(e,t,n){return e?e.concat(t).map((function(e,t){return e=ye(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function we(e){return ue.isArray(e)&&!e.some(me)}const be=ue.toFlatObject(ue,{},null,(function(e){return/^is[A-Z]/.test(e)}));function Ae(e,t,n){if(!ue.isObject(e))throw new TypeError("target must be an object");t=t||new(he||FormData),n=ue.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ue.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&ue.isSpecCompliantForm(t);if(!ue.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(ue.isDate(e))return e.toISOString();if(!c&&ue.isBlob(e))throw new pe("Blob is not supported. Use a Buffer instead.");return ue.isArrayBuffer(e)||ue.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(ue.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ue.isArray(e)&&we(e)||(ue.isFileList(e)||ue.endsWith(n,"[]"))&&(a=ue.toArray(e)))return n=ye(n),a.forEach((function(e,r){!ue.isUndefined(e)&&null!==e&&t.append(!0===s?ge([n],r,i):null===s?n:n+"[]",u(e))})),!1;return!!me(e)||(t.append(ge(o,n,i),u(e)),!1)}const f=[],d=Object.assign(be,{defaultVisitor:l,convertValue:u,isVisitable:me});function p(e,n){if(!ue.isUndefined(e)){if(-1!==f.indexOf(e))throw Error("Circular reference detected in "+n.join("."));f.push(e),ue.forEach(e,(function(e,r){const i=!(ue.isUndefined(e)||null===e)&&o.call(t,e,ue.isString(r)?r.trim():r,n,d);!0===i&&p(e,n?n.concat(r):[r])})),f.pop()}}if(!ue.isObject(e))throw new TypeError("data must be an object");return p(e),t}var Ee=Ae;function ve(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Oe(e,t){this._pairs=[],e&&Ee(e,this,t)}const Re=Oe.prototype;Re.append=function(e,t){this._pairs.push([e,t])},Re.toString=function(e){const t=e?function(t){return e.call(this,t,ve)}:ve;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Se=Oe;function Te(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _e(e,t,n){if(!t)return e;const r=n&&n.encode||Te,o=n&&n.serialize;let i;if(i=o?o(t,n):ue.isURLSearchParams(t)?t.toString():new Se(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}class Ce{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ue.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Ne=Ce,xe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Pe=(n(2062),"undefined"!==typeof URLSearchParams?URLSearchParams:Se),je="undefined"!==typeof FormData?FormData:null,Ue="undefined"!==typeof Blob?Blob:null;const Be=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),De=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Fe={isBrowser:!0,classes:{URLSearchParams:Pe,FormData:je,Blob:Ue},isStandardBrowserEnv:Be,isStandardBrowserWebWorkerEnv:De,protocols:["http","https","file","blob","url","data"]};function ke(e,t){return Ee(e,new Fe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Fe.isNode&&ue.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Le(e){return ue.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Ie(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function ze(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&ue.isArray(r)?r.length:i,a)return ue.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s;r[i]&&ue.isObject(r[i])||(r[i]=[]);const c=t(e,n,r[i],o);return c&&ue.isArray(r[i])&&(r[i]=Ie(r[i])),!s}if(ue.isFormData(e)&&ue.isFunction(e.entries)){const n={};return ue.forEachEntry(e,((e,r)=>{t(Le(e),r,n,0)})),n}return null}var qe=ze;const Me={"Content-Type":void 0};function He(e,t,n){if(ue.isString(e))try{return(t||JSON.parse)(e),ue.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const Ke={transitional:xe,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=ue.isObject(e);o&&ue.isHTMLForm(e)&&(e=new FormData(e));const i=ue.isFormData(e);if(i)return r&&r?JSON.stringify(qe(e)):e;if(ue.isArrayBuffer(e)||ue.isBuffer(e)||ue.isStream(e)||ue.isFile(e)||ue.isBlob(e))return e;if(ue.isArrayBufferView(e))return e.buffer;if(ue.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ke(e,this.formSerializer).toString();if((s=ue.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ee(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),He(e)):e}],transformResponse:[function(e){const t=this.transitional||Ke.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&ue.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,i=!n&&r;try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw pe.from(o,pe.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Fe.classes.FormData,Blob:Fe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ue.forEach(["delete","get","head"],(function(e){Ke.headers[e]={}})),ue.forEach(["post","put","patch"],(function(e){Ke.headers[e]=ue.merge(Me)}));var Ve=Ke;const Je=ue.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var We=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Je[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const Ge=Symbol("internals");function Ye(e){return e&&String(e).trim().toLowerCase()}function Qe(e){return!1===e||null==e?e:ue.isArray(e)?e.map(Qe):String(e)}function Ze(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const Xe=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $e(e,t,n,r,o){return ue.isFunction(r)?r.call(this,t,n):(o&&(t=n),ue.isString(t)?ue.isString(r)?-1!==t.indexOf(r):ue.isRegExp(r)?r.test(t):void 0:void 0)}function et(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function tt(e,t){const n=ue.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class nt{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Ye(t);if(!o)throw new Error("header name must be a non-empty string");const i=ue.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Qe(e))}const i=(e,t)=>ue.forEach(e,((e,n)=>o(e,n,t)));return ue.isPlainObject(e)||e instanceof this.constructor?i(e,t):ue.isString(e)&&(e=e.trim())&&!Xe(e)?i(We(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=Ye(e),e){const n=ue.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return Ze(e);if(ue.isFunction(t))return t.call(this,e,n);if(ue.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ye(e),e){const n=ue.findKey(this,e);return!(!n||void 0===this[n]||t&&!$e(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Ye(e),e){const o=ue.findKey(n,e);!o||t&&!$e(n,n[o],o,t)||(delete n[o],r=!0)}}return ue.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const o=t[n];e&&!$e(this,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return ue.forEach(this,((r,o)=>{const i=ue.findKey(n,o);if(i)return t[i]=Qe(r),void delete t[o];const s=e?et(o):String(o).trim();s!==o&&delete t[o],t[s]=Qe(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ue.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ue.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[Ge]=this[Ge]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=Ye(e);n[t]||(tt(r,e),n[t]=!0)}return ue.isArray(e)?e.forEach(o):o(e),this}}nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ue.freezeMethods(nt.prototype),ue.freezeMethods(nt);var rt=nt;function ot(e,t){const n=this||Ve,r=t||n,o=rt.from(r.headers);let i=r.data;return ue.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function it(e){return!(!e||!e.__CANCEL__)}function st(e,t,n){pe.call(this,null==e?"canceled":e,pe.ERR_CANCELED,t,n),this.name="CanceledError"}ue.inherits(st,pe,{__CANCEL__:!0});var at=st;n(2801);function ct(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new pe("Request failed with status code "+n.status,[pe.ERR_BAD_REQUEST,pe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var ut=Fe.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),ue.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ue.isString(r)&&s.push("path="+r),ue.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function lt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ft(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function dt(e,t){return e&&!lt(t)?ft(e,t):t}var pt=Fe.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=ue.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function ht(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;while(l!==i)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var yt=mt;function gt(e,t){let n=0;const r=yt(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a),u=i<=s;n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const wt="undefined"!==typeof XMLHttpRequest;var bt=wt&&function(e){return new Promise((function(t,n){let r=e.data;const o=rt.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}ue.isFormData(r)&&(Fe.isStandardBrowserEnv||Fe.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=dt(e.baseURL,e.url);function l(){if(!c)return;const r=rt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),o=i&&"text"!==i&&"json"!==i?c.response:c.responseText,s={data:o,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};ct((function(e){t(e),a()}),(function(e){n(e),a()}),s),c=null}if(c.open(e.method.toUpperCase(),_e(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new pe("Request aborted",pe.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new pe("Network Error",pe.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||xe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new pe(t,r.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,e,c)),c=null},Fe.isStandardBrowserEnv){const t=(e.withCredentials||pt(u))&&e.xsrfCookieName&&ut.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&ue.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),ue.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&c.addEventListener("progress",gt(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",gt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new at(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=ht(u);f&&-1===Fe.protocols.indexOf(f)?n(new pe("Unsupported protocol "+f+":",pe.ERR_BAD_REQUEST,e)):c.send(r||null)}))};const At={http:he,xhr:bt};ue.forEach(At,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));var Et={getAdapter:e=>{e=ue.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t;o++)if(n=e[o],r=ue.isString(n)?At[n.toLowerCase()]:n)break;if(!r){if(!1===r)throw new pe(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(ue.hasOwnProp(At,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!ue.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:At};function vt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new at(null,e)}function Ot(e){vt(e),e.headers=rt.from(e.headers),e.data=ot.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=Et.getAdapter(e.adapter||Ve.adapter);return t(e).then((function(t){return vt(e),t.data=ot.call(e,e.transformResponse,t),t.headers=rt.from(t.headers),t}),(function(t){return it(t)||(vt(e),t&&t.response&&(t.response.data=ot.call(e,e.transformResponse,t.response),t.response.headers=rt.from(t.response.headers))),Promise.reject(t)}))}const Rt=e=>e instanceof rt?e.toJSON():e;function St(e,t){t=t||{};const n={};function r(e,t,n){return ue.isPlainObject(e)&&ue.isPlainObject(t)?ue.merge.call({caseless:n},e,t):ue.isPlainObject(t)?ue.merge({},t):ue.isArray(t)?t.slice():t}function o(e,t,n){return ue.isUndefined(t)?ue.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!ue.isUndefined(t))return r(void 0,t)}function s(e,t){return ue.isUndefined(t)?ue.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Rt(e),Rt(t),!0)};return ue.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);ue.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Tt="1.4.0",_t={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{_t[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ct={};function Nt(e,t,n){if("object"!==typeof e)throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new pe("option "+i+" must be "+n,pe.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new pe("Unknown option "+i,pe.ERR_BAD_OPTION)}}_t.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Tt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new pe(r(o," has been removed"+(t?" in "+t:"")),pe.ERR_DEPRECATED);return t&&!Ct[o]&&(Ct[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var xt={assertOptions:Nt,validators:_t};const Pt=xt.validators;class jt{constructor(e){this.defaults=e,this.interceptors={request:new Ne,response:new Ne}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=St(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;void 0!==n&&xt.assertOptions(n,{silentJSONParsing:Pt.transitional(Pt.boolean),forcedJSONParsing:Pt.transitional(Pt.boolean),clarifyTimeoutError:Pt.transitional(Pt.boolean)},!1),null!=r&&(ue.isFunction(r)?t.paramsSerializer={serialize:r}:xt.assertOptions(r,{encode:Pt.function,serialize:Pt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&ue.merge(o.common,o[t.method]),i&&ue.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=rt.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ot.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(f<l)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;f=0;while(f<l){const e=s[f++],t=s[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=Ot.call(this,d)}catch(p){return Promise.reject(p)}f=0,l=c.length;while(f<l)u=u.then(c[f++],c[f++]);return u}getUri(e){e=St(this.defaults,e);const t=dt(e.baseURL,e.url);return _e(t,e.params,e.paramsSerializer)}}ue.forEach(["delete","get","head","options"],(function(e){jt.prototype[e]=function(t,n){return this.request(St(n||{},{method:e,url:t,data:(n||{}).data}))}})),ue.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(St(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}jt.prototype[e]=t(),jt.prototype[e+"Form"]=t(!0)}));var Ut=jt;class Bt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new at(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new Bt((function(t){e=t}));return{token:t,cancel:e}}}var Dt=Bt;function Ft(e){return function(t){return e.apply(null,t)}}function kt(e){return ue.isObject(e)&&!0===e.isAxiosError}const Lt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Lt).forEach((([e,t])=>{Lt[t]=e}));var It=Lt;function zt(e){const t=new Ut(e),n=a(Ut.prototype.request,t);return ue.extend(n,Ut.prototype,t,{allOwnKeys:!0}),ue.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return zt(St(e,t))},n}const qt=zt(Ve);qt.Axios=Ut,qt.CanceledError=at,qt.CancelToken=Dt,qt.isCancel=it,qt.VERSION=Tt,qt.toFormData=Ee,qt.AxiosError=pe,qt.Cancel=qt.CanceledError,qt.all=function(e){return Promise.all(e)},qt.spread=Ft,qt.isAxiosError=kt,qt.mergeConfig=St,qt.AxiosHeaders=rt,qt.formToJSON=e=>qe(ue.isHTMLForm(e)?new FormData(e):e),qt.HttpStatusCode=It,qt.default=qt;var Mt=qt,Ht=n(4870);const Kt={class:"banner-wrapper"},Vt={class:"container-fluid"},Jt={class:"row"},Wt={class:"col-sm-12"},Gt={class:"banner-wrap justify-content-between align-items-center"},Yt={class:"left-wrap"},Qt=(0,r._)("h2",null,[(0,r.Uk)("Technovium "),(0,r._)("br"),(0,r.Uk)(" Unlimited")],-1),Zt=(0,r._)("span",{class:"tag"},[(0,r._)("b",null,"VERSION 1.7.9")],-1),Xt=(0,r._)("span",{class:"tag"},"2023",-1),$t=(0,r._)("span",{class:"tag"},[(0,r._)("b",null,"Top MBO Opleidingen")],-1),en=(0,r._)("p",null,"Educatieve spellen door MBO studenten en docenten gemaakt.",-1),tn=(0,r._)("img",{src:i,alt:"icn"},null,-1),nn=(0,r._)("i",{class:"ti-plus text-white"},null,-1),rn=(0,r.uE)('<div class="icon-bttn"><i class="ti-sharethis text-white mr-4"></i><div class="share-icons"><a href="#"><i class="ti-facebook"></i></a><a href="#"><i class="ti-twitter-alt"></i></a><a href="#"><i class="mr-0 ti-pinterest"></i></a></div></div>',1),on=(0,r._)("div",{class:"right-wrap"},[(0,r._)("video",{autoplay:"",muted:"",loop:"",id:"myVideo"},[(0,r._)("source",{src:s,type:"video/mp4"})])],-1),sn={class:"slide-wrapper"},an={class:"container-fluid"},cn=(0,r._)("div",{class:"row"},[(0,r._)("div",{class:"col-sm-6 text-left mb-4 mt-4"},[(0,r._)("h2",null,"Meer spellen door studenten en docenten gemaakt")])],-1),un={key:0,class:"row text-center"},ln=(0,r._)("div",{class:"col-sm"},[(0,r._)("div",{class:"slide-slider owl-carousel owl-theme"},[(0,r._)("div",{class:"owl-items"},[(0,r._)("div",{class:"slide-image"},[(0,r._)("div",{class:"spinner-border text-secondary",style:{width:"6rem",height:"6rem"},role:"status"},[(0,r._)("span",{class:"sr-only"},"Loading...")])])])])],-1),fn=[ln],dn={key:1,class:"row"},pn={class:"slide-slider owl-carousel owl-theme"},hn={class:"owl-items"},mn={class:"slide-image"},yn=["src"],gn={class:"slide-content"},wn={class:"tag"},bn=(0,r._)("br",null,null,-1),An={class:"tag"},En={key:2};var vn={__name:"HomeView",setup(e){const t=(0,Ht.qj)({loading:!0,allGames:{},errors:[]});function n(){Mt.get("https://api.technoviumunlimited.nl/v1/games").then((e=>{t.allGames=e.data.games,t.loading=!1,console.log(t.allGames)})).catch((e=>{t.errors.push(e)}))}return(0,r.bv)((async()=>{await n()})),(e,n)=>{const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",Kt,[(0,r._)("div",Vt,[(0,r._)("div",Jt,[(0,r._)("div",Wt,[(0,r._)("div",Gt,[(0,r._)("div",Yt,[Qt,Zt,Xt,$t,en,(0,r.Wm)(i,{to:"/game/qS9teDLKFCpfKCa9dtlp",class:"btn btn-lg"},{default:(0,r.w5)((()=>[tn,(0,r.Uk)("Play")])),_:1}),(0,r.Wm)(i,{to:"/game/qS9teDLKFCpfKCa9dtlp",class:"icon-bttn"},{default:(0,r.w5)((()=>[nn])),_:1}),rn]),on])])])])]),(0,r._)("div",sn,[(0,r._)("div",an,[cn,t.loading?((0,r.wg)(),(0,r.iD)("div",un,fn)):((0,r.wg)(),(0,r.iD)("div",dn,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.allGames,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"col-sm",key:t},[(0,r._)("div",pn,[(0,r._)("div",hn,[(0,r.Wm)(i,{to:"/game/"+e._id,class:"slide-one"},{default:(0,r.w5)((()=>[(0,r._)("div",mn,[(0,r._)("img",{src:e._thumb,alt:"image"},null,8,yn)]),(0,r._)("div",gn,[(0,r._)("h2",null,(0,o.zw)(e.name),1),(0,r._)("span",wn,[(0,r.Uk)("Auteurs: "),(0,r._)("b",null,(0,o.zw)(e.created_by),1)]),bn,(0,r._)("span",An,[(0,r.Uk)("Opleiding: "),(0,r._)("b",null,(0,o.zw)(e.category),1)])])])),_:2},1032,["to"])])])])))),128))])),t.errors&&t.errors.length?((0,r.wg)(),(0,r.iD)("div",En,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.errors,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t},(0,o.zw)(e.message),1)))),128))])):(0,r.kq)("",!0)])])],64)}}};const On=vn;var Rn=On}}]);
//# sourceMappingURL=617.5fc1c842.js.map