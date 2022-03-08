/* CORP VERSION: 1083, master, topPerformer.js */ !function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/js/",t(t.s=547)}({1:function(e,t,n){"use strict";function r(){}function o(e,t){var n,o,i,a,s=U;for(a=arguments.length;a-- >2;)L.push(arguments[a]);for(t&&null!=t.children&&(L.length||L.push(t.children),delete t.children);L.length;)if((o=L.pop())&&void 0!==o.pop)for(a=o.length;a--;)L.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o=String(o):"string"!=typeof o&&(i=!1)),i&&n?s[s.length-1]+=o:s===U?s=[o]:s.push(o),n=i;var u=new r;return u.nodeName=e,u.children=s,u.attributes=null==t?void 0:t,u.key=null==t?void 0:t.key,void 0!==M.vnode&&M.vnode(u),u}function i(e,t){for(var n in t)e[n]=t[n];return e}function a(e,t){return o(e.nodeName,i(i({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function s(e){!e._dirty&&(e._dirty=!0)&&1==q.push(e)&&(M.debounceRendering||B)(u)}function u(){var e,t=q;for(q=[];e=t.pop();)e._dirty&&N(e)}function c(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&l(e,t.nodeName):n||e._componentConstructor===t.nodeName}function l(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function f(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function p(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"===(void 0===r?"undefined":R(r))){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===F.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,v,a):e.removeEventListener(t,v,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)m(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var s=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function m(e,t,n){try{e[t]=n}catch(e){}}function v(e){return this._listeners[e.type](M.event&&M.event(e)||e)}function y(){for(var e;e=D.pop();)M.afterMount&&M.afterMount(e),e.componentDidMount&&e.componentDidMount()}function _(e,t,n,r,o,i){H++||(I=null!=o&&void 0!==o.ownerSVGElement,G=null!=e&&!("__preactattr_"in e));var a=g(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--H||(G=!1,i||y()),a}function g(e,t,n,r,o){var i=e,a=I;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),w(e,!0))),i.__preactattr_=!0,i;var s=t.nodeName;if("function"==typeof s)return j(e,t,n,r);if(I="svg"===s||"foreignObject"!==s&&I,s=String(s),(!e||!l(e,s))&&(i=p(s,I),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),w(e,!0)}var u=i.firstChild,c=i.__preactattr_,f=t.children;if(null==c){c=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)c[d[h].name]=d[h].value}return!G&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&b(i,f,n,r,G||null!=c.dangerouslySetInnerHTML),C(i,t.attributes,c),I=a,i}function b(e,t,n,r,o){var i,a,s,u,l,f=e.childNodes,p=[],h={},m=0,v=0,y=f.length,_=0,b=t?t.length:0;if(0!==y)for(var x=0;x<y;x++){var C=f[x],S=C.__preactattr_,E=b&&S?C._component?C._component.__key:S.key:null;null!=E?(m++,h[E]=C):(S||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(p[_++]=C)}if(0!==b)for(var x=0;x<b;x++){u=t[x],l=null;var E=u.key;if(null!=E)m&&void 0!==h[E]&&(l=h[E],h[E]=void 0,m--);else if(!l&&v<_)for(i=v;i<_;i++)if(void 0!==p[i]&&c(a=p[i],u,o)){l=a,p[i]=void 0,i===_-1&&_--,i===v&&v++;break}l=g(l,u,n,r),s=f[x],l&&l!==e&&l!==s&&(null==s?e.appendChild(l):l===s.nextSibling?d(s):e.insertBefore(l,s))}if(m)for(var x in h)void 0!==h[x]&&w(h[x],!1);for(;v<=_;)void 0!==(l=p[_--])&&w(l,!1)}function w(e,t){var n=e._component;n?A(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),x(e))}function x(e){for(e=e.lastChild;e;){var t=e.previousSibling;w(e,!0),e=t}}function C(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,I);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],I)}function S(e){var t=e.constructor.name;(z[t]||(z[t]=[])).push(e)}function E(e,t,n){var r,o=z[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),k.call(r,t,n)):(r=new k(t,n),r.constructor=e,r.render=O),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function O(e,t,n){return this.constructor(e,n)}function T(e,t,n,r,o){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===M.syncComponentUpdates&&e.base?s(e):N(e,1,o)),e.__ref&&e.__ref(e))}function N(e,t,n,r){if(!e._disable){var o,a,s,u=e.props,c=e.state,l=e.context,p=e.prevProps||u,d=e.prevState||c,h=e.prevContext||l,m=e.base,v=e.nextBase,g=m||v,b=e._component,x=!1;if(m&&(e.props=p,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,c,l)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(u,c,l),e.props=u,e.state=c,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){o=e.render(u,c,l),e.getChildContext&&(l=i(i({},l),e.getChildContext()));var C,S,O=o&&o.nodeName;if("function"==typeof O){var j=f(o);a=b,a&&a.constructor===O&&j.key==a.__key?T(a,j,1,l,!1):(C=a,e._component=a=E(O,j,l),a.nextBase=a.nextBase||v,a._parentComponent=e,T(a,j,0,l,!1),N(a,1,n,!0)),S=a.base}else s=g,C=b,C&&(s=e._component=null),(g||1===t)&&(s&&(s._component=null),S=_(s,o,l,n||!m,g&&g.parentNode,!0));if(g&&S!==g&&a!==b){var k=g.parentNode;k&&S!==k&&(k.replaceChild(S,g),C||(g._component=null,w(g,!1)))}if(C&&A(C),e.base=S,S&&!r){for(var P=e,R=e;R=R._parentComponent;)(P=R).base=S;S._component=P,S._componentConstructor=P.constructor}}if(!m||n?D.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(p,d,h),M.afterUpdate&&M.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);H||r||y()}}function j(e,t,n,r){for(var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,u=s,c=f(t);o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(T(o,c,3,n,r),e=o.base):(i&&!s&&(A(i),e=a=null),o=E(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,a=null),T(o,c,1,n,r),e=o.base,a&&e!==a&&(a._component=null,w(a,!1))),e}function A(e){M.beforeUnmount&&M.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?A(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,d(t),S(e),x(t)),e.__ref&&e.__ref(null)}function k(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function P(e,t,n){return _(n,e,{},!1,t,!1)}Object.defineProperty(t,"__esModule",{value:!0});var R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M={},L=[],U=[],B="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,F=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,q=[],D=[],H=0,I=!1,G=!1,z={};i(k.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),N(this,2)},render:function(){}});var V={h:o,createElement:o,cloneElement:a,Component:k,render:P,rerender:u,options:M};t.h=o,t.createElement=o,t.cloneElement=a,t.Component=k,t.render=P,t.rerender=u,t.options=M,t.default=V},13:function(e,t,n){"use strict";var r=n(2),o=n(48),i=n(51),a=n(20),s=n(45),u=n(56),c=n(54),l=n(16);e.exports=function(e){return new Promise(function(t,n){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),a(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,i=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:i,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,n,a),d=null}},d.onabort=function(){d&&(n(l("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(l("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=(e.withCredentials||c(v))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),n(e),d=null)}),f||(f=null),d.send(f)})}},14:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},15:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},16:function(e,t,n){"use strict";var r=n(47);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},17:function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){function n(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(i[o]=n(void 0,e[o])):i[o]=n(e[o],t[o])}t=t||{};var i={},a=["url","method","data"],s=["headers","auth","proxy","params"],u=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],c=["validateStatus"];r.forEach(a,function(e){r.isUndefined(t[e])||(i[e]=n(void 0,t[e]))}),r.forEach(s,o),r.forEach(u,function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(i[o]=n(void 0,e[o])):i[o]=n(void 0,t[o])}),r.forEach(c,function(r){r in t?i[r]=n(e[r],t[r]):r in e&&(i[r]=n(void 0,e[r]))});var l=a.concat(s).concat(u).concat(c),f=Object.keys(e).concat(Object.keys(t)).filter(function(e){return-1===l.indexOf(e)});return r.forEach(f,o),i}},18:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(2),i=n(55),a={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(13):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(e=n(13)),e}(),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(a)}),e.exports=s}).call(t,n(3))},19:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2:function(e,t,n){"use strict";function r(e){return"[object Array]"===T.call(e)}function o(e){return void 0===e}function i(e){return null!==e&&!o(e)&&null!==e.constructor&&!o(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function a(e){return"[object ArrayBuffer]"===T.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function c(e){return"string"==typeof e}function l(e){return"number"==typeof e}function f(e){return null!==e&&"object"===(void 0===e?"undefined":E(e))}function p(e){if("[object Object]"!==T.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function d(e){return"[object Date]"===T.call(e)}function h(e){return"[object File]"===T.call(e)}function m(e){return"[object Blob]"===T.call(e)}function v(e){return"[object Function]"===T.call(e)}function y(e){return f(e)&&v(e.pipe)}function _(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(e,t){if(null!==e&&void 0!==e)if("object"!==(void 0===e?"undefined":E(e))&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function x(){function e(e,n){p(t[n])&&p(e)?t[n]=x(t[n],e):p(e)?t[n]=x({},e):r(e)?t[n]=e.slice():t[n]=e}for(var t={},n=0,o=arguments.length;n<o;n++)w(arguments[n],e);return t}function C(e,t,n){return w(t,function(t,r){e[r]=n&&"function"==typeof t?O(t,n):t}),e}function S(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}var E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O=n(19),T=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:a,isBuffer:i,isFormData:s,isArrayBufferView:u,isString:c,isNumber:l,isObject:f,isPlainObject:p,isUndefined:o,isDate:d,isFile:h,isBlob:m,isFunction:v,isStream:y,isURLSearchParams:_,isStandardBrowserEnv:b,forEach:w,merge:x,extend:C,trim:g,stripBOM:S}},20:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))}))}),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},21:function(e,t,n){"use strict";e.exports=n(41)},298:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(299),a=r(i),s=n(300),u=r(s),c=function(e){var t=e.uniqueId%2==0?"small-12 medium-6 large-4 cell Card Card--theme-charcoal-25 Card__print":"small-12 medium-6 large-4 cell Card Card--theme-charcoal-10 Card__print",n="fr"===window.AGF.lang?"an":"Year",r="fr"===window.AGF.lang?" ans":"-Year",i="fr"===window.AGF.lang?"ans":"Year",s="fr"===window.AGF.lang?"fonds ":"Funds",c="fr"===window.AGF.lang?"Fonds":"Link to Fund",l=e.fund.morningstar_rating,f=e.fund.fund_performance,p=function(e){return null===e?window.AGF.locale.notApplicable:e},d=function(e,t){return null===t?"-":e+" "+s},h=function(e,t){return null===e?null:e};return(0,o.h)("div",{class:t},(0,o.h)("div",{class:"Card__overlay"}),(0,o.h)("article",{class:"Card__content__top"},(0,o.h)("div",{class:"top__body"},(0,o.h)("div",{class:"title"},(0,o.h)("h4",null,e.fund.fund_name,(0,o.h)("br",null),(0,o.h)(a.default,{value:e.fund.fund_rating_overall})),(0,o.h)("h5",null,e.fund.fund_rating_category," | ",e.fund.fund_currency)),(0,o.h)("div",{class:"star-section"},(0,o.h)("div",{class:"sub-star"},(0,o.h)("strong",null,"3",r),d(l.rating_group_3_year,l.rating_3_year),(0,o.h)("span",null,(0,o.h)(u.default,{value:h(l.rating_3_year,l.rating_group_3_year)}))),(0,o.h)("div",{class:"sub-star"},(0,o.h)("strong",null,"5",r),d(l.rating_group_5_year,l.rating_5_year),(0,o.h)("span",null,(0,o.h)(u.default,{value:h(l.rating_5_year,l.rating_group_5_year)}))),(0,o.h)("div",{class:"sub-star"},(0,o.h)("strong",null,"10",r),d(l.rating_group_10_year,l.rating_10_year),(0,o.h)("span",null,(0,o.h)(u.default,{value:h(l.rating_10_year,l.rating_group_10_year)})))),(0,o.h)("div",{class:"year-section"},(0,o.h)("div",{class:"sub-year"},(0,o.h)("strong",null,"1 ",n),p(f.performance_1_year)),(0,o.h)("div",{class:"sub-year"},(0,o.h)("strong",null,"3 ",i),p(f.performance_3_year)),(0,o.h)("div",{class:"sub-year"},(0,o.h)("strong",null,"5 ",i),p(f.performance_5_year)),(0,o.h)("div",{class:"sub-year"},(0,o.h)("strong",null,"10 ",i),p(f.performance_10_year))),(0,o.h)("div",null,(0,o.h)("a",{class:"button hollow button--standard",href:e.fund.fund_url},c)))))};t.default=c},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(4),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(e){var t=e.value;return(0,r.h)("div",{class:"rating-"+t},""===t||void 0===t||t<0?window.AGF.locale.notApplicable:_.range(t).map(function(e){return(0,r.h)("i",{dangerouslySetInnerHTML:{__html:(0,i.default)("star")}})}))};t.default=a},3:function(e,t,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function s(){v&&h&&(v=!1,h.length?m=h.concat(m):y=-1,m.length&&u())}function u(){if(!v){var e=i(s);v=!0;for(var t=m.length;t;){for(h=m,m=[];++y<t;)h&&h[y].run();y=-1,t=m.length}h=null,v=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var f,p,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var h,m=[],v=!1,y=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||v||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(4),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(e){var t=e.value;return null===t?window.AGF.locale.notApplicable:(0,r.h)("div",{class:"rating-"+t},""===t||void 0===t||t<0?window.AGF.locale.notApplicable:_.range(t).map(function(e){return(0,r.h)("i",{dangerouslySetInnerHTML:{__html:(0,i.default)("star")}})}))};t.default=a},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=46656*Math.random()|0,t=46656*Math.random()|0;return e=("000"+e.toString(36)).slice(-3),t=("000"+t.toString(36)).slice(-3),e+t};t.default=r},386:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=n(21),l=r(c),f=n(298),p=r(f),d=n(514),h=(r(d),"fr"===window.AGF.lang?"../../fileDispatcherWeb/process/deliverFileResult.action?requestId=CF_TOP_PERFORMERS&format=JSON&lang=FRE":"../../fileDispatcherWeb/process/deliverFileResult.action?requestId=CF_TOP_PERFORMERS&format=JSON&lang=ENG"),m=function(e){function t(){var e,n,r,a;o(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={funds:null},a=n,i(r,a)}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;l.default.get(h,{timeout:5e3}).then(function(t){var n=t.data;e.setState({funds:n});var r=n.performance_date;console.log(r)}).catch(function(e){console.log(e)})}},{key:"componentDidUpdate",value:function(){document.getElementById("pdatetop").innerHTML=this.state.funds.performance_date,document.getElementById("pdatebottom").innerHTML=this.state.funds.performance_date,document.getElementById("rdate").innerHTML=this.state.funds.rate_of_return_date,document.getElementById("copyright").innerHTML=this.state.funds.copyright_year}},{key:"render",value:function(){var e=this.state.funds?this.state.funds.fund_list.map(function(e,t){return(0,u.h)(p.default,{fund:e,uniqueId:t})}):null;return(0,u.h)("section",{class:""},(0,u.h)("div",{class:"grid-container"},(0,u.h)("div",{class:"grid-x grid-margin-x small-margin-collapse Cards__grid"},(0,u.h)("div",{class:"small-12 cell"},(0,u.h)("div",{class:"grid-x grid-margin-x"},e)))))}}]),t}(u.Component);t.default=m},4:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),u=n(34),c=function(e){return e&&e.__esModule?e:{default:e}}(u),l=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),a(t,[{key:"shouldComponentUpdate",value:function(e){return e.name!==this.props.name}},{key:"render",value:function(e){return(0,s.h)("svg",{class:"icon "+e.name,preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 48 48"},(0,s.h)("use",{xlinkHref:"/_files/images/sitewide/svg-icons-map.svg#"+e.name}))}}]),t}(s.Component),f=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?(0,s.h)(l,{name:e,key:(0,c.default)()}):'<svg class="icon '+e+'" preserveAspectRatio="xMidYMid meet">\n  <use xlink:href="/_files/images/sitewide/svg-icons-map.svg#'+e+'" />\n</svg>'};t.default=f},41:function(e,t,n){"use strict";function r(e){var t=new a(e),n=i(a.prototype.request,t);return o.extend(n,a.prototype,t),o.extend(n,t),n}var o=n(2),i=n(19),a=n(43),s=n(17),u=n(18),c=r(u);c.Axios=a,c.create=function(e){return r(s(c.defaults,e))},c.Cancel=n(14),c.CancelToken=n(42),c.isCancel=n(15),c.all=function(e){return Promise.all(e)},c.spread=n(57),c.isAxiosError=n(53),e.exports=c,e.exports.default=c},42:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(14);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},43:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=n(2),i=n(20),a=n(44),s=n(46),u=n(17);r.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=u(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=u(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(u(n||{},{method:e,url:t,data:(n||{}).data}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(u(r||{},{method:e,url:t,data:n}))}}),e.exports=r},44:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},45:function(e,t,n){"use strict";var r=n(52),o=n(50);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},46:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),i=n(49),a=n(15),s=n(18);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},47:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},48:function(e,t,n){"use strict";var r=n(16);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},49:function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},50:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},51:function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},514:function(e,t,n){"use strict";n(1)},52:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},53:function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){return"object"===(void 0===e?"undefined":r(e))&&!0===e.isAxiosError}},54:function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},547:function(e,t,n){"use strict";var r=n(1),o=n(386),i=function(e){return e&&e.__esModule?e:{default:e}}(o);!function(){var e=document.getElementById("Morning-Star");(0,r.render)((0,r.h)(i.default,null),e)}()},55:function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},56:function(e,t,n){"use strict";var r=n(2),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},57:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}});