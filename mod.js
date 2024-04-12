// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return Math.abs(n)}var r=Number.POSITIVE_INFINITY;function t(n){return n!=n}function u(n,u){return t(n)||t(u)?NaN:n===r||u===r?r:n===u&&0===n?function(n){return 0===n&&1/n===r}(n)?n:u:n>u?n:u}function e(r,t){return u(n(r),n(t))}export{e as default};
//# sourceMappingURL=mod.js.map
