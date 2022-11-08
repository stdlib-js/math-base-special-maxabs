// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Math.abs(r)}var n=Number.POSITIVE_INFINITY;function t(r){return 0===r&&1/r===n}function u(r){return r!=r}var e=Number.NEGATIVE_INFINITY;function f(r,f){var a,i,I,N;if(2===(a=arguments.length))return u(r)||u(f)?NaN:r===n||f===n?n:r===f&&0===r?t(r)?r:f:r>f?r:f;for(i=e,N=0;N<a;N++){if(u(I=arguments[N])||I===n)return I;(I>i||I===i&&0===I&&t(I))&&(i=I)}return i}function a(t,u){var e,a,i;if(0===(e=arguments.length))return n;if(2===e)return f(r(t),r(u));for(a=[],i=0;i<e;i++)a.push(r(arguments[i]));return f.apply(null,a)}export{a as default};
//# sourceMappingURL=mod.js.map
