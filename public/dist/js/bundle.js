/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function r(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var r=function(e){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:r+""}var o=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=document.querySelector(e),this.queue=[],this.isProcessing=!1,this.init()},(n=[{key:"init",value:function(){var t=this;this.displayWelcomeMessage(),setInterval((function(){return t.processQueue()}),100)}},{key:"displayWelcomeMessage",value:function(){this.addToQueue(["> 起動シーケンスを開始...","> ハッカーインターフェース v3.1.4","> 日本語モードを有効化","> ようこそ、サイバー忍者へ"])}},{key:"addToQueue",value:function(t){var r;Array.isArray(t)?(r=this.queue).push.apply(r,function(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t)):this.queue.push(t)}},{key:"processQueue",value:function(){var t=this;if(!this.isProcessing&&0!==this.queue.length){this.isProcessing=!0;var e=this.queue.shift();this.typeEffect(e,(function(){t.isProcessing=!1}))}}},{key:"typeEffect",value:function(t,e){var r=this,n=0,o=setInterval((function(){n<t.length?(r.element.innerHTML+=t.charAt(n),n++):(clearInterval(o),r.element.innerHTML+="<br>",e&&e())}),20)}},{key:"displayResult",value:function(t){var e="\n        > ターゲット: ".concat(t.result.target,"\n        > ステータス: ").concat(t.result.status,"\n        > アクセスレベル: ").concat(t.result.access_level,"\n        > 結果: ").concat(t.result.term,"\n        > タイムスタンプ: ").concat(t.result.timestamp,"\n      ");this.addToQueue(e)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function c(t){var e=function(t){if("object"!=i(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:e+""}var u=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=document.querySelector(e),this.init()},(e=[{key:"init",value:function(){this.createGrid(),this.animateGrid()}},{key:"createGrid",value:function(){for(var t=0;t<15;t++){var e=document.createElement("div");e.className="grid-line horizontal",e.style.top="".concat(t/15*100,"%"),e.style.animationDelay="".concat(.1*t,"s"),this.container.appendChild(e)}for(var r=0;r<20;r++){var n=document.createElement("div");n.className="grid-line vertical",n.style.left="".concat(r/20*100,"%"),n.style.animationDelay="".concat(.05*r,"s"),this.container.appendChild(n)}}},{key:"animateGrid",value:function(){setInterval((function(){document.querySelectorAll(".grid-line").forEach((function(t){Math.random()>.7&&(t.style.opacity=.5*Math.random()+.1)}))}),300)}}])&&a(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var e=function(t){if("object"!=l(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(e)?e:e+""}var y=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=document.querySelector(e),this.kanji=["忍","影","電","脳","闇","殺","機","関","幻","盗"],this.init()},(e=[{key:"init",value:function(){this.createKanjiElements(),this.animateKanji()}},{key:"createKanjiElements",value:function(){for(var t=0;t<25;t++){var e=document.createElement("div");e.className="kanji-character",e.textContent=this.kanji[Math.floor(Math.random()*this.kanji.length)],e.style.left="".concat(90*Math.random()+5,"%"),e.style.top="".concat(90*Math.random()+5,"%"),e.style.fontSize="".concat(2*Math.random()+1,"rem"),e.style.opacity=.3*Math.random()+.1,e.style.transform="rotate(".concat(360*Math.random(),"deg)"),this.container.appendChild(e)}}},{key:"animateKanji",value:function(){var t=this;setInterval((function(){t.container.querySelectorAll(".kanji-character").forEach((function(t){Math.random()>.8&&(t.style.opacity=.4*Math.random(),t.style.transform="rotate(".concat(360*Math.random(),"deg)"))}))}),1e3)}}])&&s(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(){p=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new A(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var y="suspendedStart",v="suspendedYield",m="executing",d="completed",b={};function g(){}function w(){}function S(){}var E={};l(E,a,(function(){return this}));var j=Object.getPrototypeOf,k=j&&j(j(I([])));k&&k!==r&&n.call(k,a)&&(E=k);var L=S.prototype=g.prototype=Object.create(E);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==h(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=y;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?d:v,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function T(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(h(e)+" is not iterable")}return w.prototype=S,o(L,"constructor",{value:S,configurable:!0}),o(S,"constructor",{value:w,configurable:!0}),w.displayName=l(S,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,l(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},x(P.prototype),l(P.prototype,c,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new P(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),l(L,u,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(_),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function v(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))}}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,b(n.key),n)}}function b(t){var e=function(t){if("object"!=h(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(e)?e:e+""}var g=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.terminal=new o("#terminal-container"),this.grid=new u("#cyber-grid"),this.kanji=new y("#kanji-overlay"),this.initHackingTools()},e=[{key:"initHackingTools",value:function(){var t=this;document.getElementById("hack-button").addEventListener("click",m(p().mark((function e(){var r,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=document.getElementById("target-input").value){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.performHack(r);case 5:n=e.sent,t.terminal.displayResult(n);case 7:case"end":return e.stop()}}),e)}))))}},{key:"performHack",value:(r=m(p().mark((function t(e){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/hack",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target:e})});case 3:return r=t.sent,t.next=6,r.json();case 6:return t.abrupt("return",t.sent);case 9:return t.prev=9,t.t0=t.catch(0),t.abrupt("return",{status:"error",message:"接続エラー"});case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),function(t){return r.apply(this,arguments)})}],e&&d(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r}();document.addEventListener("DOMContentLoaded",(function(){new g}))})();
//# sourceMappingURL=bundle.js.map