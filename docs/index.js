!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).JsSnip={})}(this,(function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw s}}}}var s={method:"css",maxLines:3,ellipsis:". . .",midWord:!0},a=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.height),r="normal"===t.lineHeight?1.2*parseFloat(t.fontSize):parseFloat(t.lineHeight);return 0===n&&0===r?0:Math.ceil(n/r)},l=function(e){var t=window.__JsSnipState.get(e),n=t.observer||new ResizeObserver((function(){e.clientWidth===t.prevWidth&&e.clientHeight===t.prevHeight||u(e,t)}));n.observe(e),t.observer=n},c=function(e){var t=window.__JsSnipState.get(e);t.observer&&t.observer.disconnect(),t.observer&&delete t.prevWidth,t.observer&&delete t.prevHeight,t.observer&&delete t.observer},u=function(e,t){window.__JsSnipState||(window.__JsSnipState=new WeakMap);var r=n(n(n({},s),window.__JsSnipState.get(e)||{}),t);window.__JsSnipState.set(e,r),"js"===r.method?(l(e),function(e,t){var n,r=t.maxLines,o=t.ellipsis,s=void 0===o?". . .":o,l=t.midWord,c=void 0===l||l?[". ",", "," ",""]:[". ",", "," "],u=null!==(n=e.dataset.fullText)&&void 0!==n?n:e.textContent;if(e.dataset.fullText=u,e.textContent=u,e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow="",!(r<=0||a(e)<=r)){var f={unprocessed:u,processed:""};c.forEach((function(t){var n,o=i(f.unprocessed.split(t));try{for(o.s();!(n=o.n()).done;){var l=n.value;if(e.textContent="".concat(f.processed).concat(l).concat(t).concat(s),a(e)>r){f.unprocessed=l;break}f.processed="".concat(f.processed).concat(l).concat(t)}}catch(e){o.e(e)}finally{o.f()}})),e.textContent="".concat(f.processed.trim()).concat(s)}}(e,r),r.prevWidth=e.clientWidth,r.prevHeight=e.clientHeight):(c(e),function(e,t){var n=t.maxLines,r=e.dataset.fullText&&e.dataset.fullText===e.textContent?e.dataset.fullText:e.textContent;e.dataset.fullText=r,e.textContent=r,e.style.display="-webkit-box",e.style.webkitLineClamp=n.toString(),e.style.webkitBoxOrient="vertical",e.style.overflow="hidden"}(e,r))};e.getLines=a,e.snip=u,e.supportsCSSMethod=function(){return"undefined"!=typeof CSS&&CSS.supports("display","-webkit-box")&&CSS.supports("-webkit-line-clamp","3")&&CSS.supports("-webkit-box-orient","vertical")},e.unsnip=function(e){var t=window.__JsSnipState.get(e);e.textContent=t.fullText,c(e),e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow=""},Object.defineProperty(e,"__esModule",{value:!0})}));
