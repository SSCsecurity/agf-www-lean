!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}e.d(t,{default:function(){return b}});var n=window.wp.element,o=window.wp.data,l=window.wp.deprecated,c=e.n(l),s=window.lodash,u=window.wp.compose,a=window.wp.i18n,i=window.wp.apiFetch,d=e.n(i),w=window.wp.url,p=window.wp.components,f=window.wp.blocks;function m(e){let{className:t}=e;return(0,n.createElement)(p.Placeholder,{className:t},(0,a.__)("Block rendered as empty."))}function v(e){let{response:t,className:r}=e;const o=(0,a.sprintf)(// translators: %s: error message describing the problem
(0,a.__)("Error loading block: %s"),t.errorMsg);return(0,n.createElement)(p.Placeholder,{className:r},o)}function h(e){let{children:t,showLoader:r}=e;return(0,n.createElement)("div",{style:{position:"relative"}},r&&(0,n.createElement)("div",{style:{position:"absolute",top:"50%",left:"50%",marginTop:"-9px",marginLeft:"-9px"}},(0,n.createElement)(p.Spinner,null)),(0,n.createElement)("div",{style:{opacity:r?"0.3":1}},t))}function E(e){const{attributes:t,block:o,className:l,httpMethod:c="GET",urlQueryArgs:a,EmptyResponsePlaceholder:i=m,ErrorResponsePlaceholder:p=v,LoadingResponsePlaceholder:E=h}=e,y=(0,n.useRef)(!0),[g,b]=(0,n.useState)(!1),P=(0,n.useRef)(),[S,R]=(0,n.useState)(null),T=(0,u.usePrevious)(e),[_,O]=(0,n.useState)(!1);function M(){if(!y.current)return;O(!0);const e=t&&(0,f.__experimentalSanitizeBlockAttributes)(o,t),r="POST"===c,n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(0,w.addQueryArgs)(`/wp/v2/block-renderer/${e}`,{context:"edit",...null!==t?{attributes:t}:{},...r})}(o,r?null:null!=e?e:null,a),l=r?{attributes:null!=e?e:null}:null,s=P.current=d()({path:n,data:l,method:r?"POST":"GET"}).then((e=>{y.current&&s===P.current&&e&&R(e.rendered)})).catch((e=>{y.current&&s===P.current&&R({error:!0,errorMsg:e.message})})).finally((()=>{y.current&&s===P.current&&O(!1)}));return s}const N=(0,u.useDebounce)(M,500);(0,n.useEffect)((()=>()=>{y.current=!1}),[]),(0,n.useEffect)((()=>{void 0===T?M():(0,s.isEqual)(T,e)||N()})),(0,n.useEffect)((()=>{if(!_)return;const e=setTimeout((()=>{b(!0)}),1e3);return()=>clearTimeout(e)}),[_]);const k=!!S,L=""===S,A=null==S?void 0:S.error;return _?(0,n.createElement)(E,r({},e,{showLoader:g}),k&&(0,n.createElement)(n.RawHTML,{className:l},S)):L||!k?(0,n.createElement)(i,e):A?(0,n.createElement)(p,r({response:S},e)):(0,n.createElement)(n.RawHTML,{className:l},S)}const y={},g=(0,o.withSelect)((e=>{const t=e("core/editor");if(t){const e=t.getCurrentPostId();if(e&&"number"==typeof e)return{currentPostId:e}}return y}))((e=>{let{urlQueryArgs:t=y,currentPostId:o,...l}=e;const c=(0,n.useMemo)((()=>o?{post_id:o,...t}:t),[o,t]);return(0,n.createElement)(E,r({urlQueryArgs:c},l))}));window&&window.wp&&window.wp.components&&(window.wp.components.ServerSideRender=(0,n.forwardRef)(((e,t)=>(c()("wp.components.ServerSideRender",{version:"6.2",since:"5.3",alternative:"wp.serverSideRender"}),(0,n.createElement)(g,r({},e,{ref:t}))))));var b=g;(window.wp=window.wp||{}).serverSideRender=t.default}();