// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return Math.abs(r)},n=Number.POSITIVE_INFINITY,t=n;var u=function(r){return 0===r&&1/r===t};var e=function(r){return r!=r},a=Number.NEGATIVE_INFINITY,f=u,i=e,I=a,N=n;var o=function(r,n){var t,u,e,a;if(2===(t=arguments.length))return i(r)||i(n)?NaN:r===N||n===N?N:r===n&&0===r?f(r)?r:n:r>n?r:n;for(u=I,a=0;a<t;a++){if(i(e=arguments[a])||e===N)return e;(e>u||e===u&&0===e&&f(e))&&(u=e)}return u};function l(t,u){var e,a,f;if(0===(e=arguments.length))return n;if(2===e)return o(r(t),r(u));for(a=[],f=0;f<e;f++)a.push(r(arguments[f]));return o.apply(null,a)}export{l as default};
//# sourceMappingURL=mod.js.map
