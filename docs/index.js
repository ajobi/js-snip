!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).JsSnip={})}(this,(function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,s=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw s}}}}var s={method:"css",lines:3,ellipsis:". . .",midWord:!0},l=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.height),r="normal"===t.lineHeight?1.2*parseFloat(t.fontSize):parseFloat(t.lineHeight);return 0===n&&0===r?0:Math.ceil(n/r)},c=new WeakMap,a=function(e){return c.get(e)},u=function(e){var t=a(e),n=t.observer||new ResizeObserver((function(){e.clientWidth===t.prevWidth&&e.clientHeight===t.prevHeight||p(e)}));n.observe(e),t.observer=n},f=function(e){var t=a(e);t.observer&&t.observer.disconnect(),t.observer&&delete t.prevWidth,t.observer&&delete t.prevHeight,t.observer&&delete t.observer},p=function(e){var t=a(e);"css"!==t.method?"js"===t.method&&(!function(e){var t=a(e),n=t.lines,r=t.midWord,o=t.fullText,s=t.ellipsis,c=r?[". ",", "," ",""]:[". ",", "," "];if(e.textContent=o,e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow="",!(n<=0||l(e)<=n)){var u={unprocessed:o,processed:""};c.forEach((function(t){var r,o=i(u.unprocessed.split(t));try{for(o.s();!(r=o.n()).done;){var c=r.value;if(e.textContent="".concat(u.processed).concat(c).concat(t).concat(s),l(e)>n){u.unprocessed=c;break}u.processed="".concat(u.processed).concat(c).concat(t)}}catch(e){o.e(e)}finally{o.f()}})),e.textContent="".concat(u.processed.trim()).concat(s)}}(e),t.prevWidth=e.clientWidth,t.prevHeight=e.clientHeight):function(e){var t=a(e),n=t.lines,r=t.fullText;e.textContent=r,e.style.display="-webkit-box",e.style.webkitLineClamp=n.toString(),e.style.webkitBoxOrient="vertical",e.style.overflow="hidden"}(e)};e.getLines=l,e.snip=function(e,t){var r,o,i,l=!function(e){return c.has(e)}(e),d=a(e),v=null===(r=d)||void 0===r?void 0:r.lines,b=null===(o=d)||void 0===o?void 0:o.method,y=null===(i=d)||void 0===i?void 0:i.fullText;!function(e,t){c.set(e,t)}(e,d=n(n(n(n({},s),d),t),{},{fullText:l?e.textContent:y}));var h="js"===d.method&&"undefined"!=typeof ResizeObserver,m=v!==d.lines||b!==d.method&&"css"===d.method;l?h?u(e):p(e):(h?u(e):f(e),m&&p(e))},e.supportsCSSMethod=function(){return"undefined"!=typeof CSS&&CSS.supports("display","-webkit-box")&&CSS.supports("-webkit-line-clamp","3")&&CSS.supports("-webkit-box-orient","vertical")},e.unsnip=function(e){var t=a(e);e.textContent=t.fullText,e.style.display="",e.style.webkitLineClamp="",e.style.webkitBoxOrient="",e.style.overflow="",f(e),function(e){c.delete(e)}(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
