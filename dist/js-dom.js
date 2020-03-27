/*!
 * JS DOM (JavaScript Library)
 *   @yama-dev/js-dom
 * Version 0.3.0
 * Repository https://github.com/yama-dev/js-dom
 * Copyright yama-dev
 * Licensed MIT
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.JS_DOM=n():e.JS_DOM=n()}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(r,u,function(n){return e[n]}.bind(null,u));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e){try{return e instanceof HTMLElement}catch(e){return!1}}function u(e){try{return"string"==typeof e}catch(e){return!1}}function o(e,n){if(n){var t,i=o(e),a=[];return!!i&&(i.map(function(e){if(!(t=r(n)?Array.prototype.slice.call(e.querySelectorAll(n.tagName.toLowerCase())):Array.prototype.slice.call(e.querySelectorAll(n))))return!1;a=a.concat(t)}),a)}if(!e)return!1;var c;if(!Array.isArray(e)&&!e.length||u(e))c=r(e)?Array(e):Array.prototype.slice.call(document.querySelectorAll(e));else{if(!r(e[0]))return!1;c=Array.prototype.slice.call(e)}return 0===c.length&&(c=null),c}function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n),t.d(n,"default",function(){return a});var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,a;return n=e,a=[{key:"isDom",value:function(e){return r(e)}},{key:"isStr",value:function(e){return u(e)}},{key:"selectDom",value:function(e,n){return o(e,n)}}],(t=[{key:"selectDom",value:function(e,n){return o(e,n)}},{key:"indexDom",value:function(e){return function(e){for(var n=e.parentNode.childNodes,t=0,r=0;r<n.length;r++){if(n[r]==e)return t;1==n[r].nodeType&&t++}return-1}(e)}},{key:"hasClass",value:function(e,n){return function(e,n){return r(e)?e.classList.contains(n):document.querySelector(e).classList.contains(n)}(e,n)}},{key:"addClass",value:function(e,n){return function(e,n){var t=o(e);if(!t)return!1;t.map(function(e){e.classList.add(n)})}(e,n)}},{key:"removeClass",value:function(e,n){return function(e,n){var t=o(e);if(!t)return!1;t.map(function(e){e.classList.remove(n)})}(e,n)}},{key:"toggleClass",value:function(e,n){return function(e,n){var t=o(e);if(!t)return!1;t.map(function(e){e.classList.toggle(n)})}(e,n)}},{key:"addEvent",value:function(e,n,t){return function(e,n,t){if(e===window)window.addEventListener(n,t,{passive:!1});else{var r=o(e);if(!r)return!1;r.map(function(e){e.addEventListener(n,t,{passive:!1})})}}(e,n,t)}},{key:"removeEvent",value:function(e,n,t){return function(e,n,t){if(e===window)window.removeEventListener(n,t);else{var r=o(e);if(!r)return!1;r.map(function(e){e.removeEventListener(n,t)})}}(e,n,t)}},{key:"setHtml",value:function(e,n){return function(e,n){var t=o(e);if(!t)return!1;t.map(function(e){e.innerHTML=n})}(e,n)}},{key:"prependHtml",value:function(e,n){return function(e,n){var t=o(e);if(!t)return!1;t.map(function(e){e.insertAdjacentHTML("afterbegin",n)})}(e,n)}},{key:"appendHtml",value:function(e,n){return function(e,n){var t=o(e);if(!t)return!1;t.map(function(e){e.insertAdjacentHTML("beforeend",n)})}(e,n)}},{key:"removeHtml",value:function(e){return function(e){var n=o(e);if(!n)return!1;n.map(function(e){e.parentNode.removeChild(e)})}(e)}},{key:"setStyle",value:function(e,n){return function(e,n){var t=o(e);if(!t)return!1;t.map(function(e){var t="";Object.keys(n).forEach(function(e){null!==n[e]&&(t+=e.replace(/([A-Z])/g,"-$1").toLowerCase()+": "+n[e]+";")}),e.setAttribute("style",t)})}(e,n)}},{key:"setAttribute",value:function(e,n){return function(e,n){var t=o(e);if(!t)return!1;t.map(function(e){var t="";Object.keys(n).forEach(function(r){t=r.replace(/([A-Z])/g,"-$1").toLowerCase(),e.setAttribute(t,n[r])})})}(e,n)}}])&&i(n.prototype,t),a&&i(n,a),e}()}]).default});