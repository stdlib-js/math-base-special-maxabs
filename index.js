// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(e){return Math.abs(e)}var n=Number.POSITIVE_INFINITY;function t(e){return e!=e}function u(e,u){return t(e)||t(u)?NaN:e===n||u===n?n:e===u&&0===e?function(e){return 0===e&&1/e===n}(e)?e:u:e>u?e:u}return function(n,t){return u(e(n),e(t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).maxabs=n();
//# sourceMappingURL=index.js.map
