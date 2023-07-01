// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Math.abs(r)}var n=Number.POSITIVE_INFINITY;function t(r){return 0===r&&1/r===n}function u(r){return r!=r}var e=Number.NEGATIVE_INFINITY;function f(f,I){return function(r,f){var I,N,a,i;if(2===(I=arguments.length))return u(r)||u(f)?NaN:r===n||f===n?n:r===f&&0===r?t(r)?r:f:r>f?r:f;for(N=e,i=0;i<I;i++){if(u(a=arguments[i])||a===n)return a;(a>N||a===N&&0===a&&t(a))&&(N=a)}return N}(r(f),r(I))}export{f as default};
//# sourceMappingURL=mod.js.map
