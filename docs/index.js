!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).JsSnip={})}(this,(function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,s=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw s}}}}var l=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.height),r="normal"===t.lineHeight?1.2*parseFloat(t.fontSize):parseFloat(t.lineHeight);return 0===n&&0===r?0:Math.ceil(n/r)},c=function(){return"undefined"!=typeof CSS&&CSS.supports("display","-webkit-box")&&CSS.supports("-webkit-line-clamp","3")&&CSS.supports("-webkit-box-orient","vertical")},u=new WeakMap,f=function(e){return u.get(e)},a=function(e){var t=f(e);"css"!==t.method?"js"===t.method&&(!function(e){var t=f(e),n=t.lines,r=t.midWord,o=t.fullText,i=t.ellipsis,c=r?[". ",", "," ",""]:[". ",", "," "];if(e.textContent=o,e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow="",!(n<=0||l(e)<=n)){var u={unprocessed:o,processed:""};c.forEach((function(t){var r,o=s(u.unprocessed.split(t));try{for(o.s();!(r=o.n()).done;){var c=r.value;if(e.textContent="".concat(u.processed).concat(c).concat(t).concat(i),l(e)>n){u.unprocessed=c;break}u.processed="".concat(u.processed).concat(c).concat(t)}}catch(e){o.e(e)}finally{o.f()}})),e.textContent="".concat(u.processed.trim()).concat(i)}}(e),t.prevWidth=e.clientWidth,t.prevHeight=e.clientHeight):function(e){var t=f(e),n=t.lines,r=t.fullText;e.textContent=r,e.style.display="-webkit-box",e.style.webkitLineClamp=n.toString(),e.style.webkitBoxOrient="vertical",e.style.overflow="hidden"}(e)},p=function(e){var t=f(e),n=t.observer||new ResizeObserver((function(){e.clientWidth===t.prevWidth&&e.clientHeight===t.prevHeight||a(e)}));n.observe(e),t.observer=n},d=function(e){var t=f(e);t.observer&&t.observer.disconnect(),t.observer&&delete t.prevWidth,t.observer&&delete t.prevHeight,t.observer&&delete t.observer},y={method:"css",lines:3,ellipsis:". . .",midWord:!0},b=function(e){var t=parseInt(e.toString());return isNaN(t)?y.lines:t},v=function(e){return c()?"css"===e||"js"===e?e:y.method:"js"},m=function(e){return"string"==typeof e?e:"number"==typeof e?e.toString():y.ellipsis},h=function(e){return"boolean"==typeof(e=!!e)?e:y.midWord};e.getLines=l,e.snip=function(e,t){var o,i,s,l=!function(e){return u.has(e)}(e),c=f(e),g=null===(o=c)||void 0===o?void 0:o.lines,w=null===(i=c)||void 0===i?void 0:i.method,S=null===(s=c)||void 0===s?void 0:s.fullText;c=n(n(n({},c),function(e){if("object"!==r(e))return y;var t=e,n=t.method,o=t.lines,i=t.ellipsis,s=t.midWord;return{method:void 0!==n?v(n):y.method,lines:void 0!==o?b(o):y.lines,ellipsis:void 0!==i?m(i):y.ellipsis,midWord:void 0!==s?h(s):y.midWord}}(t)),{},{fullText:l?e.textContent:S}),function(e,t){u.set(e,t)}(e,c);var O="js"===c.method&&"undefined"!=typeof ResizeObserver,j=g!==c.lines||w!==c.method&&"css"===c.method;l?O?p(e):a(e):(O?p(e):d(e),j&&a(e))},e.supportsCSSMethod=c,e.unsnip=function(e){var t=f(e);e.textContent=t.fullText,e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow="",d(e),function(e){u.delete(e)}(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
